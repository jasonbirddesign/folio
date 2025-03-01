<script setup lang="ts">
defineProps<{
	work: Work
}>()
</script>

<template>
	<div>
		<div class="max-w-[848px] mx-auto mb-10">
			<h1 class="text-step-4 font-bold leading-tight mb-8">{{ work.title }}</h1>
			<p class="text-step-1 mb-16">{{ work.introduction }}</p>
			<div class="border-t border-grey/50 pt-8 grid grid-cols-4 gap-4">
				<div class="flex flex-col gap-2 text-step--1">
					<h3 class="text-dark-grey font-bold">MY ROLE</h3>
					<p>{{ work.myRole }}</p>
				</div>
				<div class="flex flex-col gap-2 text-step--1">
					<h3 class="text-dark-grey font-bold">OUTCOME</h3>
					<p v-for="o in work.outcome">{{ o }}</p>
				</div>
				<div class="flex flex-col gap-2 text-step--1">
					<h3 class="text-dark-grey font-bold">CONTRIBUTION</h3>
					<p v-for="c in work.contribution">{{ c }}</p>
				</div>
				<div class="flex flex-col gap-2 text-step--1">
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
		<img
			:src="work.heroImage.fields.file.url"
			:alt="work.title"
			class="w-full"
		/>
	</div>
</template>
