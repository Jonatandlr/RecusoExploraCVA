/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#0f0f0f',
				'color-base':'#3797d1'
			},
			aspectRatio: {
				'2/3': "0.8/1",
				'full': "1/1.5",
				
			},
			
			
		},
	},
	plugins: [animations],
}
