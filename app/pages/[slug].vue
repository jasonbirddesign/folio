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
				return `<img src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}" />`
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
			></div>
		</div>
		<WorkNext
			v-if="work.nextWorkTitle && work.nextWorkSlug"
			:title="work.nextWorkTitle"
			:slug="work.nextWorkSlug"
		/>
	</template>
</template>
