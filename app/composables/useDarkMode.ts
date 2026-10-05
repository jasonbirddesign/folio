import { useStorage } from '@vueuse/core'

export const useDarkMode = () => {
	const dark = useStorage('dark-mode', false)

	const apply = (val: boolean) => {
		document.documentElement.classList.toggle('dark', val)
	}

	onMounted(() => apply(dark.value))

	const toggle = () => {
		dark.value = !dark.value
		apply(dark.value)
	}

	return { dark, toggle }
}
