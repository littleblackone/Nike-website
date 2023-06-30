const Koa = require("koa");
const Router = require("koa-router");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
const bodyParser = require("koa-bodyparser");
const jsonError = require("koa-json-error");
const cors = require("koa2-cors");
const stripe = require("stripe")(
  "sk_test_51NNoFsCEbav22JyK56mbqNeCyEFoEPh5ywypgCUHXrNtQN1O4cWTbEIebDFOjK9XIR40TAVzuzvcrJburtcudpst00Q6ciqjrz"
);

const admin = require("firebase-admin");
const serviceAccount = require("../assets/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://nike-website-e9f4e.appspot.com"
});

const app = new Koa();
const router = new Router();

//利用app.cotext上下文存储路由间共享数据
app.context.sessionCode = "";
app.context.codeExpiration = 0;
// console.dir(app.context);上下文需要dir打印

// 创建可重用的传输器对象
const transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true, // 使用 SSL 加密连接
  auth: {
    user: "1771490073@qq.com", // 发件人邮箱地址
    pass: "jiknqcxjjdskbbgi" // 发件人邮箱授权码或密码
  }
});
//发送验证码
router.post("/sendCode", async (ctx) => {
  // 生成随机数验证码;
  const code = randomstring.generate({
    length: 6,
    charset: "numeric"
  });

  const mailOptions = {
    from: "1771490073@qq.com", // 发件人邮箱地址
    to: "1771490073@qq.com", // 接收邮件的邮箱地址（从 URL 参数获取）
    subject: "验证码", // 邮件主题
    text: `您的验证码为：${code}` // 邮件正文内容
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    ctx.body = {
      success: true,
      message: "验证码已成功发送",
      info: info.response
    };

    // 将验证码存储在上下文中
    ctx.app.context.sessionCode = code;
    // 设置验证码的过期时间（例如60秒）
    ctx.app.context.codeExpiration = Date.now() + 60000;
  } catch (error) {
    console.error(error);
    ctx.body = {
      success: false,
      message: "发送验证码时出错",
      error: error.message
    };
  }
});
//验证验证码
router.post("/verifyCode", async (ctx) => {
  const { code } = ctx.request.body;
  const { sessionCode, codeExpiration } = ctx.app.context;

  if (!code || code != sessionCode) {
    ctx.body = {
      valid: false,
      message: "请填写正确的验证码"
    };
  } else if (Date.now() > parseInt(codeExpiration)) {
    ctx.body = {
      valid: false,
      message: "验证码已过期,请重新发送"
    };
  } else {
    ctx.body = {
      valid: true,
      message: "验证码正确"
    };
  }
});
//stripe支付功能
router.post("/create-checkout-session", async (ctx) => {
  const { shoe } = ctx.request.body;
  const priceString = shoe.new_price; // ￥999
  const priceNumber = Number(priceString.slice(1)); // 999

  const shoeNumber = extractShoeNumber(shoe.src);
  const imageUrl = await getImageUrl(shoeNumber);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "HKD",
          product_data: {
            name: shoe.name,
            description: shoe.name_cn,
            images: [imageUrl]
          },
          unit_amount: priceNumber * 100 // 以最小货币单位表示的价格，例如港币的金额乘以100
        },
        quantity: 1
      }
    ],
    mode: "payment",
    success_url: `https://benevolent-boba-6d7053.netlify.app`,
    cancel_url: `https://benevolent-boba-6d7053.netlify.app`
  });
  ctx.body = {
    redirectUrl: session.url
  };
});

// 从鞋子的 src 中提取数字
function extractShoeNumber(src) {
  // eslint-disable-next-line no-useless-escape
  const regex = /man(\d+)\-/;
  const match = src.match(regex);
  if (match && match[1]) {
    return parseInt(match[1]);
  }
  return null;
}

// 根据鞋子编号获取图片地址
async function getImageUrl(shoeNumber) {
  if (!shoeNumber) {
    return null;
  }

  const bucket = admin.storage().bucket();
  const filename = `man${shoeNumber}.webp`;
  const file = bucket.file(filename);

  const [url] = await file.getSignedUrl({
    action: "read",
    expires: "01-01-2030" // 设置有效期
  });

  return url;
}

// 添加 CSP 头部
app.use(async (ctx, next) => {
  // ctx.set("Content-Security-Policy", "script-src 'self' 'unsafe-inline' https://js.stripe.com");
  ctx.set(
    "Content-Security-Policy",
    "script-src 'self' 'unsafe-inline' https://js.stripe.com; img-src 'self' http://localhost:5173"
  );

  await next();
});
//解决跨域
app.use(
  cors({
    origin: "https://benevolent-boba-6d7053.netlify.app",
    credentials: true,
    allowMethods: ["GET", "POST"],
    allowHeaders: ["Content-Type"]
  })
);
app.use(bodyParser());
app.use(jsonError());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
