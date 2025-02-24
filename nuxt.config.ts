import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	app: {
		head: {
			title: 'Jason Bird',
			meta: [
				{
					name: 'description',
					content: 'Designing digital experiences to solve human problems'
				}
			]
		}
	},
	modules: [
		'@nuxt/content',
	],
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	vite: {
		plugins: [
			tailwindcss()
		]
	},
	future: {
		compatibilityVersion: 4,
	},
	compatibilityDate: '2024-11-01',
})
