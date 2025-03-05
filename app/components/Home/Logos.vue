<script setup lang="ts">
const { $siteConfig } = useNuxtApp()
</script>

<template>
	<img
		v-for="logo in $siteConfig?.homeLogos"
		:key="logo.fields.file.url"
		:src="logo.fields.file.url"
		:alt="logo.fields.title"
		:width="logo.fields.file.details.image.width / 2"
	/>
</template>
