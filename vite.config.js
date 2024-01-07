import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< Updated upstream
  plugins: [react()],
  optimizeDeps: {
    include: ['@mui/material/Tooltip'],
  }
})

=======
  // plugins: [react()],
  ptimizeDeps: {
    include: ["@emotion/react", "@emotion/styled", "@mui/material/Tooltip"],
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
});
>>>>>>> Stashed changes
