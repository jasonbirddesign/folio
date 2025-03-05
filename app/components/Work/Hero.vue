<script setup lang="ts">
import { marked } from 'marked'
const props = defineProps<{
	work: Work
}>()
const { $openImage } = useNuxtApp()
const openImage = () => {
	const payload = encodeURIComponent(JSON.stringify({
		src: props.work.heroImage.fields.file.url,
		alt: props.work.title
	}))
	$openImage(payload)
}
const intro = computed(() => {
	return props.work.introduction ? marked.parse(props.work.introduction) : null
})
</script>

<template>
	<div>
		<div class="max-w-[848px] mx-auto mb-10">
			<h1 class="text-step-4 font-bold leading-tight mb-8">{{ work.title }}</h1>
			<div
				v-if="intro"
				v-html="intro"
				class="prose mb-16"
			></div>
			<div class="border-t border-grey/50 pt-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
				<div class="flex flex-col gap-2 text-step--1">
					<h3 class="text-dark-grey font-bold">MY ROLE</h3>
					<p>{{ work.myRole }}</p>
				</div>
				<div
					v-if="work.team?.length"
					class="flex flex-col gap-2 text-step--1"
				>
					<h3 class="text-dark-grey font-bold">THE TEAM</h3>
					<p v-for="t in work.team">{{ t }}</p>
				</div>
				<div
					v-if="work.outcome?.length"
					class="flex flex-col gap-2 text-step--1"
				>
					<h3 class="text-dark-grey font-bold">OUTCOME</h3>
					<p v-for="o in work.outcome">{{ o }}</p>
				</div>
				<div
					v-if="work.contribution?.length"
					class="flex flex-col gap-2 text-step--1"
				>
					<h3 class="text-dark-grey font-bold">CONTRIBUTION</h3>
					<p v-for="c in work.contribution">{{ c }}</p>
				</div>
				<div
					v-if="work.press?.length"
					class="flex flex-col gap-2 text-step--1"
				>
					<h3 class="text-dark-grey font-bold">PRESS</h3>
					<NuxtLink
						v-for="p in work.press"
						:to="p.url"
						target="_blank"
					>
						{{ p.text }}
					</NuxtLink>
				</div>
			</div>
		</div>
		<button @click="openImage">
			<img
				:src="work.heroImage.fields.file.url"
				:alt="work.title"
				class="w-full"
			/>
		</button>
	</div>
</template>
