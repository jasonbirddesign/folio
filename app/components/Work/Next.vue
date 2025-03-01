<script setup lang="ts">
const {
	title,
	slug
} = defineProps<{
	title: string
	slug: string
}>()
</script>

<template>
	<div class="bg-dark-grey py-12">
		<NuxtLink :to="'/' + slug">
			<div class="container gap-2.5">
				<p class="font-bold text-white text-step--1">NEXT CASE STUDY</p>
				<div class="flex gap-6 items-center">
					<p class="text-step-4 text-white leading-tight">{{ title }}</p>
					<svg width="35" height="26" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M20.9198 3.74722C20.1387 2.96617 20.1387 1.69984 20.9198 0.918794C21.7008 0.137746 22.9672 0.137746 23.7482 0.918794L34.4149 11.5855C35.1959 12.3665 35.1959 13.6328 34.4149 14.4139L23.7482 25.0806C22.9672 25.8616 21.7008 25.8616 20.9198 25.0806C20.1387 24.2995 20.1387 23.0332 20.9198 22.2521L28.1722 14.9997H2.33398C1.22942 14.9997 0.333984 14.1042 0.333984 12.9997C0.333984 11.8951 1.22942 10.9997 2.33398 10.9997H28.1722L20.9198 3.74722Z" fill="white"/>
					</svg>
				</div>
			</div>
		</NuxtLink>
	</div>
</template>
