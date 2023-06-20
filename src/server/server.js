const Koa = require("koa");
const Router = require("koa-router");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
const bodyParser = require("koa-bodyparser");
const jsonError = require("koa-json-error");
const cors = require("koa2-cors");

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
    console.log("验证码已成功发送：" + info.response);
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

app.use(
  cors({
    origin: "http://localhost:5173",
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
