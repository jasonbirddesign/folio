<script setup lang="ts">
const { $siteConfig, $marked } = useNuxtApp()
const footerText = computed(() => {
	return $siteConfig?.footerText ? $marked.parse($siteConfig?.footerText) : null
})
</script>

<template>
	<div
		v-if="$siteConfig"
		class="border-t-2 border-grey/50 pt-18 pb-27"
	>
		<h2 class="text-dark-grey text-step-3 font-bold mb-10">{{ $siteConfig.footerTitle }}</h2>
		<div
			v-if="footerText"
			v-html="footerText"
			class="mb-12"
		></div>
		<div class="flex items-center gap-8">
			<NuxtLink
				:to="$siteConfig.linkedIn"
				target="_blank"
			>
				<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M29.7 0H3.3C1.485 0 0 1.485 0 3.3V29.7C0 31.515 1.485 33 3.3 33H29.7C31.515 33 33 31.515 33 29.7V3.3C33 1.485 31.515 0 29.7 0ZM9.9 28.05H4.95V13.2H9.9V28.05ZM7.425 10.395C5.775 10.395 4.455 9.075 4.455 7.425C4.455 5.775 5.775 4.455 7.425 4.455C9.075 4.455 10.395 5.775 10.395 7.425C10.395 9.075 9.075 10.395 7.425 10.395ZM28.05 28.05H23.1V19.305C23.1 17.9851 21.945 16.83 20.625 16.83C19.305 16.83 18.15 17.9851 18.15 19.305V28.05H13.2V13.2H18.15V15.18C18.975 13.86 20.79 12.87 22.275 12.87C25.41 12.87 28.05 15.51 28.05 18.645V28.05Z" fill="#333333"/>
				</svg>
			</NuxtLink>
			<a :href="`mailto:${$siteConfig.email}`">{{ $siteConfig.email }}</a>
		</div>
	</div>
</template>
