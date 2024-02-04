import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/rent-cars',
	plugins: [
		react(),
		svgr(),
		createSvgSpritePlugin({
			symbolId: 'icon-[name]-[hash]',
		}),
	],
})
