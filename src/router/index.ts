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
      component: LoginView
    },
    {
      path: "/register",
      name: "register",
      component: registerView
    },
    {
      path: "/stripe",
      name: "stripe",
      component: stripeView
    }
  ]
});

export default router;
