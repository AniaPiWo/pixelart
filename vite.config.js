import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  base: "/pixelart/",
  root: "./",
  build: {
    outDir: "dist",
  },
}