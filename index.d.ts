import { EntryFieldTypes } from 'contentful'

export {}

declare global {
	interface Link {
		text: string
		url: string
	}
	interface SiteConfig {
		aboutLinks: {
			header: string
			items: Link[]
		}[]
		aboutText: string
		email: string
		footerText: string
		footerTitle: string
		homeLogos: EntryFieldTypes.Image[]
		homeSubtitle: string
		homeTitle: string
		linkedin: string
	}
	interface Work {
		title: string
		slug: string
		company: string
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
		$siteConfig: SiteConfig
		$openedImage: OpenedImage | null
		$openImage: Function
		$work: {
			items: {
				fields: Work
			}[]
		}
	}
}
