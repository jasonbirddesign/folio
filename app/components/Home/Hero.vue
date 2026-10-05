<script setup lang="ts">
const { $siteConfig, $marked } = useNuxtApp()
const homeSubtitle = computed(() => {
	return $siteConfig?.homeSubtitle ? $marked.parse($siteConfig?.homeSubtitle) : null
})
</script>

<template>
	<div class="hero-wrapper">
		<div class="hero-gradient" aria-hidden="true"></div>
	<Fade class="pt-32 pb-16">
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
		<p class="text-step-1 font-light leading-relaxed mb-32 text-neutral-500">Modern design isn't just about handing off static screens, it&rsquo;s about owning the outcome.</p>
		<div class="relative">
			<FloatingCursor
				text="Your team"
				colour="green"
				class="floating-cursor-2 right-0 bottom-15 md:bottom-30"
			/>
		</div>
		<p class="text-step--1 text-center mb-2 md:mb-4">{{ $siteConfig.homeLogosCaption }}</p>
		<div class="home-logos hidden lg:flex flex-wrap gap-8 py-4 md:py-8 justify-between items-center">
			<HomeLogos/>
		</div>
		<Vue3Marquee>
			<div class="home-logos lg:hidden flex gap-8 py-4 md:py-8 items-center mr-8">
				<HomeLogos/>
			</div>
		</Vue3Marquee>
	</Fade>
	</div>
</template>

<style scoped>
.hero-wrapper {
	position: relative;
}
.hero-gradient {
	position: absolute;
	top: -350px;
	left: 50%;
	transform: translateX(-50%);
	width: 70vw;
	max-width: 900px;
	height: 500px;
	pointer-events: none;
	z-index: -1;
	background:
		radial-gradient(ellipse 40% 55% at 30% 50%, rgba(255, 110, 140, 0.6), transparent 70%),
		radial-gradient(ellipse 35% 50% at 50% 40%, rgba(210, 140, 230, 0.55), transparent 70%),
		radial-gradient(ellipse 40% 55% at 70% 55%, rgba(130, 165, 255, 0.55), transparent 70%);
	filter: blur(70px);
}
</style>
