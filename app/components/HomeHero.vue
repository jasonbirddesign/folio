<template>
	<div class="relative pt-33 md:pt-56 pb-16">
		<Fade>
			<FloatingCursor
				text="Hi, i'm Jason"
				colour="blue"
				class="floating-cursor-1 left-0 top-12 md:top-36"
			/>
		</Fade>
		<Fade>
			<p class="mb-4">
				Lead Product Designer
				<NuxtLink
					to="https://www.opentable.com/"
					target="_blank"
				>
					@OpenTable
				</NuxtLink> previously
				<NuxtLink
					to="https://clearleft.com/"
					target="_blank"
				>
					@Clearleft
				</NuxtLink>
			</p>
		</Fade>
		<h1 class="text-step-5 font-bold leading-tight mb-31 md:mb-42">Designing digital experiences that drive business value.</h1>
		<div class="relative">
			<FloatingCursor
				text="Your team"
				colour="green"
				class="floating-cursor-2 right-0 bottom-15 md:bottom-30"
			/>
		</div>
		<p class="text-step--1 text-center mb-2 md:mb-4">Who i’ve worked with</p>
		<div class="hidden lg:flex flex-wrap gap-8 py-4 md:py-8 justify-between items-center">
			<img
				src="~/assets/img/opentable.png"
				alt="OpenTable"
				width="199"
			/>
			<img
				src="~/assets/img/virginatlantic.png"
				alt="Virgin Atlantic"
				width="199"
			/>
			<img
				src="~/assets/img/jpmorgan.png"
				alt="J.P. Morgan"
				width="150"
			/>
			<img
				src="~/assets/img/lloyds.png"
				alt="Lloyds"
				width="121"
			/>
			<img
				src="~/assets/img/clearleft.png"
				alt="Clearleft"
				width="121"
			/>
		</div>
		<Vue3Marquee>
			<div class="lg:hidden flex gap-8 py-4 md:py-8 items-center mr-8">
				<img
					src="~/assets/img/opentable.png"
					alt="OpenTable"
					width="199"
				/>
				<img
					src="~/assets/img/virginatlantic.png"
					alt="Virgin Atlantic"
					width="199"
				/>
				<img
					src="~/assets/img/jpmorgan.png"
					alt="J.P. Morgan"
					width="150"
				/>
				<img
					src="~/assets/img/lloyds.png"
					alt="Lloyds"
					width="121"
				/>
				<img
					src="~/assets/img/clearleft.png"
					alt="Clearleft"
					width="121"
				/>
			</div>
		</Vue3Marquee>
	</div>
</template>
