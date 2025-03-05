<script setup lang="ts">
const { $siteConfig, $marked } = useNuxtApp()
const homeSubtitle = computed(() => {
	return $siteConfig?.homeSubtitle ? $marked.parse($siteConfig?.homeSubtitle) : null
})
</script>

<template>
	<Fade class="pt-33 md:pt-56 pb-16">
		<div class="relative">
			<FloatingCursor
				text="Hi, i'm Jason"
				colour="blue"
				class="floating-cursor-1 left-0 bottom-5"
			/>
		</div>
		<div
			v-if="homeSubtitle"
			v-html="homeSubtitle"
			class="mb-4"
		></div>
		<h1 class="text-step-5 font-bold leading-tight mb-31 md:mb-42">{{ $siteConfig.homeTitle }}</h1>
		<div class="relative">
			<FloatingCursor
				text="Your team"
				colour="green"
				class="floating-cursor-2 right-0 bottom-15 md:bottom-30"
			/>
		</div>
		<p class="text-step--1 text-center mb-2 md:mb-4">Who i’ve worked with</p>
		<div class="hidden lg:flex flex-wrap gap-8 py-4 md:py-8 justify-between items-center">
			<HomeLogos/>
		</div>
		<Vue3Marquee>
			<div class="lg:hidden flex gap-8 py-4 md:py-8 items-center mr-8">
				<HomeLogos/>
			</div>
		</Vue3Marquee>
	</Fade>
</template>
