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
					content: 'Designing digital experiences that drive business value'
				}
			],
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: 'https://jasonbirddesign.github.io/folio/favicon.ico'
				}
			]
		}
	},
	devtools: { enabled: false },
	css: ['~/assets/css/main.css'],
	modules: [
		'@vueuse/nuxt'
	],
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
