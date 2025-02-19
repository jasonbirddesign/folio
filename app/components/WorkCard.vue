<script setup lang="ts">
const {
	company,
	title,
	image,
	path,
	small = false
} = defineProps<{
	company?: string
	title: string
	image: string
	path: string
	small?: boolean
}>()
</script>

<template>
	<NuxtLink
		:to="path"
		class="pt-4 border-t border-dark-grey"
	>
		<p
			v-if="company"
			class="text-step--1"
		>
			{{ company }}
		</p>
		<h2
			:class="[{
				'text-step-1': small,
				'text-step-3': !small
			}, 'text-dark-grey mb-4']"
		>
			{{ title }}
		</h2>
		<img
			:src="image"
			:alt="title"
			class="w-full"
		/>
	</NuxtLink>
</template>
