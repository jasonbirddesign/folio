<script setup lang="ts">
const {
	company,
	title,
	image,
	contentType,
	path
} = defineProps<{
	company?: string
	title: string
	image: string
	contentType?: string
	path: string
}>()
const isVideo = computed(() => contentType?.startsWith('video/'))
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
				<video
					v-if="isVideo"
					:src="image"
					autoplay
					muted
					loop
					playsinline
					class="w-full"
				/>
				<img
					v-else
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
