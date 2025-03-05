<script setup lang="ts">
const { $work } = useNuxtApp()
</script>

<template>
	<div class="container">
		<HomeHero/>
		<div
			v-if="$work?.items?.length"
			class="flex flex-col gap-8 pb-16"
		>
			<WorkCard
				v-for="work in $work.items"
				:key="work.fields.slug"
				:company="work.fields.company"
				:title="work.fields.title"
				:image="work.fields.heroImage?.fields.file.url"
				:path="`/${work.fields.slug}`"
			/>
		</div>
		<Contact/>
	</div>
</template>
