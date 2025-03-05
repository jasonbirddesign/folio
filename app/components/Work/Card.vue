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
	<Fade>
		<NuxtLink
			:to="path"
			class="work-card leading-tight !no-underline"
		>
			<p class="text-grey text-step--1 mb-2">{{ company }}</p>
			<h2 class="text-dark-grey text-step-1 md:text-step-3 mb-4">{{ title }}</h2>
			<div class="overflow-hidden w-full rounded-lg xs:rounded-2xl md:rounded-3xl">
				<img
					:src="image"
					:alt="title"
					class="w-full"
				/>
			</div>
		</NuxtLink>
	</Fade>
</template>

<style scoped>
img {
	transition: transform 0.3s ease;
}
.work-card:hover img {
	transform: scale(1.15);
}
</style>
