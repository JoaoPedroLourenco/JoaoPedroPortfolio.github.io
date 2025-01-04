import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/JoaoPedroPortfolio.github.io/", // Substitua pelo nome do repositório
});
