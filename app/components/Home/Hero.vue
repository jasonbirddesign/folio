<script setup lang="ts">
const { $siteConfig, $marked } = useNuxtApp()
const homeSubtitle = computed(() => {
	return $siteConfig?.homeSubtitle ? $marked.parse($siteConfig?.homeSubtitle) : null
})
</script>

<template>
	<div class="hero-gradient" aria-hidden="true"></div>
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
		<h1 class="text-step-5 font-bold leading-tight mb-8">{{ $siteConfig.homeTitle }}</h1>
		<p class="text-step-1 leading-relaxed mb-31 md:mb-42">Modern design isn't just about handing off static screens&mdash;it&rsquo;s about owning the outcome. I combine UX strategy, visual craft, and front-end execution to build digital products people love.</p>
		<div class="relative">
			<FloatingCursor
				text="Your team"
				colour="green"
				class="floating-cursor-2 right-0 bottom-15 md:bottom-30"
			/>
		</div>
		<p class="text-step--1 text-center mb-2 md:mb-4">{{ $siteConfig.homeLogosCaption }}</p>
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

<style scoped>
.hero-gradient {
	position: absolute;
	top: -200px;
	left: 50%;
	transform: translateX(-50%);
	width: 120vw;
	max-width: 1600px;
	height: 800px;
	pointer-events: none;
	z-index: -1;
	background:
		radial-gradient(ellipse 40% 55% at 30% 45%, rgba(255, 120, 150, 0.55), transparent 70%),
		radial-gradient(ellipse 35% 50% at 55% 40%, rgba(220, 150, 230, 0.5), transparent 70%),
		radial-gradient(ellipse 40% 55% at 75% 50%, rgba(140, 170, 255, 0.5), transparent 70%);
	filter: blur(60px);
}
</style>
