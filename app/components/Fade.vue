<script setup lang="ts">
const target = useTemplateRef<HTMLDivElement>('target')
const targetIsVisible = useElementVisibility(target)
</script>

<template>
	<div
		ref="target"
		:class="{
			'active': targetIsVisible
		}"
	>
		<slot/>
	</div>
</template>
