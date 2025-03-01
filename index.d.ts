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
		outcome: string[]
		contribution: string[]
		press: Link[]
		heroImage: Object
		body: Object
	}
}
