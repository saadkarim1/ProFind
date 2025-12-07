import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// Must match your setup: './src' for src folder, or './' for root
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
