import * as contentful from "contentful"
import { marked } from 'marked'

export default defineNuxtPlugin(async (nuxtApp) => {
	const client = contentful.createClient({
		space: 'mvkl7q7mi9fo',
		accessToken: '3K6FVbpPQiDkiP2V4v2KAMaMFxJT2sjcHMIx4yvOspc'
	})
	const siteConfig = await client.getEntries({
		content_type: 'config'
	})
	if (!siteConfig?.items?.[0]?.fields) return location.replace('https://www.linkedin.com/in/jbird55/')
	nuxtApp.provide('siteConfig', siteConfig?.items?.[0]?.fields)
	const work = await client.getEntries({
		content_type: 'work'
	})
	work.items.sort((a, b) => a.fields.order - b.fields.order)
	nuxtApp.provide('work', work)
	const openedImage = ref<OpenedImage | null>(null)
	nuxtApp.provide('openImage', (payload: string) => {
		openedImage.value = JSON.parse(decodeURIComponent(payload))
	})
	nuxtApp.provide('openedImage', openedImage)
	const renderer = {
		link ({ href, text }: { href: string, text: string }) {
			return `<a href="${href}" target="_blank">${text}</a>`
		}
	}
	marked.use({ renderer })
	nuxtApp.provide('marked', marked)
})
