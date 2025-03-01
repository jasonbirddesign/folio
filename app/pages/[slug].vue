<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
const route = useRoute()
const { $work } = useNuxtApp()
const work = computed<Work>(() => {
	return $work?.items?.find(item => {
		return item.fields.slug === route.params.slug
	})?.fields
})
const html = computed(() => {
	return documentToHtmlString(work.value.body, {
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: (node) => {
				const tags = node.data.target.metadata?.tags
				const narrow = tags?.find((tag: any) => tag.sys.id === 'narrow')
				const lightGreyBackground = tags?.find((tag: any) => tag.sys.id === 'lightGreyBackground')
				let classNames = "w-full"
				if (narrow) classNames += " max-w-[848px] mx-auto"
				if (lightGreyBackground) classNames += " bg-light-grey rounded-3xl p-4"
				return `<img
					src="${node.data.target.fields.file.url}"
					alt="${node.data.target.fields.title}"
					class="${classNames}"
				/>`
			}
		}
	})
})
</script>

<template>
	<template v-if="work">
		<div class="container py-22.5 gap-16">
			<WorkHero :work/>
			<div
				v-if="html"
				v-html="html"
				class="prose"
			></div>
		</div>
		<WorkNext
			v-if="work.nextWorkTitle && work.nextWorkSlug"
			:title="work.nextWorkTitle"
			:slug="work.nextWorkSlug"
		/>
	</template>
</template>
