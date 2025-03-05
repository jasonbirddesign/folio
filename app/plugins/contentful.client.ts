import * as contentful from "contentful"

export default defineNuxtPlugin(async (nuxtApp) => {
	const client = contentful.createClient({
		space: 'mvkl7q7mi9fo',
		accessToken: '3K6FVbpPQiDkiP2V4v2KAMaMFxJT2sjcHMIx4yvOspc'
	})
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
})
