import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes";

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title as string || import.meta.env.VITE_APP_TITLE;
});
