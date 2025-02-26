import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Jason Bird',
			meta: [
				{
					name: 'description',
					content: 'Designing digital experiences to solve human problems'
				}
			],
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico'
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
