import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => ({
  base:
    mode === "production"
      ? "/smart-wallet-nfts/"
      : mode === "dev-local"
      ? "/"
      : "/dev-smart-wallet-nfts/",
  plugins: [react()],
}));
