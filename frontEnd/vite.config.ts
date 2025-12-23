import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			// Must match your setup: './src' for src folder, or './' for root
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
