<script setup lang="ts">
const route = useRoute()
const { $work } = useNuxtApp()
const work = computed<Work>(() => {
	return $work?.items?.find(item => {
		return item.fields.slug === route.params.slug
	})?.fields
})
</script>

<template>
	<div
		v-if="work"
		class="container"
	>
		<WorkHero :work/>
	</div>
</template>
