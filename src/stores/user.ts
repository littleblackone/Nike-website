import { defineStore } from "pinia";
import { db, collection, where, getDocs, query, addDoc } from "@/utils/firebase";
import router from "@/router";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
    email: "",
    loginError: "",
    registerError: ""
  }),
  actions: {
    async Login(name: string, email: string, checked: boolean) {
      if (!checked) {
        // 如果用户没有勾选 checkbox，则提示错误信息并终止登录
        this.loginError = "请先同意隐私政策和使用条款";
        return;
      }
      try {
        // 查询 users 集合，查找 name 和 email 字段都与输入相同的文档
        // const usersRef = collection(db, "users");
        const querySnapshot = await getDocs(
          query(collection(db, "users"), where("name", "==", name), where("email", "==", email))
        );
        if (querySnapshot.empty) {
          // 没有找到符合条件的文档，登录失败
          this.loginError = "登录失败，请检查用户名或邮件是否错误。";
        } else {
          // 找到了符合条件的文档，登录成功，跳转到主页面
          // const currentUser = querySnapshot.docs[0].data(); // 获取第一个匹配文档的数据
          // 在这里处理如何保存用户信息的逻辑
          router.push("/");
        }
      } catch (error) {
        console.error("登录失败：", error);
        this.loginError = "登录过程中发生了错误，请稍后再试。";
      }
    },
    async register(name: string, email: string, checked: boolean, code: string) {
      if (!checked) {
        // 如果用户没有勾选 checkbox，则提示错误信息并终止登录
        this.registerError = "请先同意隐私政策和使用条款";
        return;
      }

      try {
        //向后端发送请求验证code
        const response = await axios.post("http://127.0.0.1:3000/verifyCode", { code });
        if (!response.data.valid) {
          this.registerError = response.data.message;
          return;
        }
        //查找数据库看有没有相同的email
        const querySnapshot = await getDocs(
          query(collection(db, "users"), where("email", "==", email))
        );
        if (!querySnapshot.empty) {
          this.registerError = "该邮箱已被注册";
          return;
        }

        await addDoc(collection(db, "users"), { name: name, email: email });
        router.push("/");
        console.log("注册成功");
      } catch (error) {
        console.error("注册失败：", error);
        this.registerError = "注册过程中发生了错误，请稍后再试。";
      }
    }
  }
});
