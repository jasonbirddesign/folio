<script setup lang="ts">
const {
	company,
	title,
	image,
	path
} = defineProps<{
	company?: string
	title: string
	image: string
	path: string
}>()
</script>

<template>
	<NuxtLink
		:to="path"
		class="leading-tight !no-underline"
	>
		<p class="text-grey text-step--1 mb-2">{{ company }}</p>
		<h2 class="text-dark-grey text-step-3 mb-4">{{ title }}</h2>
		<img
			:src="image"
			:alt="title"
			class="w-full rounded-3xl"
		/>
	</NuxtLink>
</template>
