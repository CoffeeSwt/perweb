import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import { resolve } from "path";
// https://vite.dev/config/

/** @type {import('vite').UserConfig} */
export default defineConfig(({ command, mode }) => {
  console.log(command)
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [vue(), UnoCSS()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        // 选项写法
        "/api": {
          target: env.VITE_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
