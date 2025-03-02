import { EntryFieldTypes } from 'contentful'

export {}

declare global {
	interface Link {
		text: string
		url: string
	}
	interface Work {
		title: string
		introduction: string
		myRole: string
		team: string[]
		outcome: string[]
		contribution: string[]
		press: Link[]
		heroImage: EntryFieldTypes.Image
		body: EntryFieldTypes.Document
		nextWorkTitle: string
		nextWorkSlug: string
	}
	interface OpenedImage {
		src: string
		alt: string
		lightGreyBackground: boolean
	}
}

declare module '#app' {
	interface NuxtApp {
		$openedImage: OpenedImage | null
		$openImage: Function
	}
}
