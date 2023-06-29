import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import MainContentView from "@/components/MainContentView.vue";
import LoginView from "../views/LoginView.vue";
import registerView from "../views/RegisterView.vue";
import stripeView from "../views/stripeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainContentView
      // component: () => import("@/views/HomeView.vue")//项目比较大的时候用动态导入，小项目可以直接导入
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { hideHeaderFooter: true } // 添加meta字段表示需要隐藏Header和Footer
    },
    {
      path: "/register",
      name: "register",
      component: registerView,
      meta: { hideHeaderFooter: true } // 添加meta字段表示需要隐藏Header和Footer
    },
    {
      path: "/stripe",
      name: "stripe",
      component: stripeView
    }
  ]
});

router.beforeEach((to, from, next) => {
  const hideHeaderFooter = to.meta.hideHeaderFooter;
  if (hideHeaderFooter) {
    // 隐藏Header和Footer
    const header = document.querySelector(".headerPart") as HTMLElement;
    const footer = document.querySelector(".footerPart") as HTMLElement;
    header.style.display = "none";
    footer.style.display = "none";
  } else {
    // 显示Header和Footer
    const header = document.querySelector(".headerPart") as HTMLElement;
    const footer = document.querySelector(".footerPart") as HTMLElement;
    header.style.display = "unset";
    footer.style.display = "flex";
  }
  next();
});

export default router;
