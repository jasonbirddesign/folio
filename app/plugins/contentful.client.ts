import * as contentful from "contentful"

export default defineNuxtPlugin(async (nuxtApp) => {
	const client = contentful.createClient({
		space: 'mvkl7q7mi9fo',
		accessToken: '3K6FVbpPQiDkiP2V4v2KAMaMFxJT2sjcHMIx4yvOspc'
	})
	const work = await client.getEntries({
		content_type: 'work'
	})
	nuxtApp.provide('work', work)
})
