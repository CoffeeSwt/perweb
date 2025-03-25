import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/pages/Home.vue"),
    // meta: { title: "首页" },
  },
  {
    path: "/about",
    component: () => import("@/pages/About.vue"),
    meta: { title: "关于" },
  },
];
