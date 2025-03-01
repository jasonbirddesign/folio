<script setup lang="ts">
const {
	text,
	colour
} = defineProps<{
	text: string
	colour: 'blue' | 'green'
}>()
const id = useId()
</script>

<template>
	<div class="absolute z-10">
		<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g :filter="`url(#${id})`">
				<path d="M6.77884 18.0002L3.63875 2.04113L18.0563 9.91842L10.9544 11.973L6.77884 18.0002Z" fill="black"/>
				<path d="M6.77884 18.0002L3.63875 2.04113L18.0563 9.91842L10.9544 11.973L6.77884 18.0002Z" stroke="white"/>
			</g>
			<defs>
				<filter :id="id" x="0.939972" y="0.0924683" width="20.415" height="22.17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix"/>
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
					<feOffset dy="1"/>
					<feGaussianBlur stdDeviation="1"/>
					<feComposite in2="hardAlpha" operator="out"/>
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1245_31486"/>
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1245_31486" result="shape"/>
				</filter>
			</defs>
		</svg>
		<div
			:class="[{
				'bg-blue border-dark-blue shadow-blue/16': colour === 'blue',
				'bg-green border-dark-green shadow-green/16': colour === 'green'
			}, 'py-2 px-4 border-2 text-white leading-tight rounded-r-full rounded-bl-full -mt-1 ml-4 shadow-floating-cursor']"
		>
			{{ text }}
		</div>
	</div>
</template>

<style scoped>
.floating-cursor-1 {
	animation: 20s hovering-1 infinite;
}
.floating-cursor-2 {
	animation: 20s hovering-2 infinite;
}
@keyframes hovering-1 {
	0% {
		transform: translate3d(0px, 0px, 0px);
	}
	20% {
		transform: translate3d(0px, 0px, 0px);
	}
	35% {
		transform: translate3d(15px, 10px, 0px);
	}
	45% {
		transform: translate3d(40px, 5px, 0px);
	}
	55% {
		transform: translate3d(0px, 0px, 0px);
	}
	65% {
		transform: translate3d(0px, 0px, 0px);
	}
	75% {
		transform: translate3d(20px, 0px, 0px);
	}
	85% {
		transform: translate3d(25px, 20px, 0px);
	}
	90% {
		transform: translate3d(25px, 5px, 0px);
	}
	95% {
		transform: translate3d(0px, 0px, 0px);
	}
}
@keyframes hovering-2 {
	0% {
		transform: translate3d(0px, 0px, 0px);
	}
	10% {
		transform: translate3d(10px, 10px, 0px);
	}
	20% {
		transform: translate3d(0px, 0px, 0px);
	}
	25% {
		transform: translate3d(-40px, 20px, 0px);
	}
	30% {
		transform: translate3d(-45px, 25px, 0px);
	}
	35% {
		transform: translate3d(-40px, 20px, 0px);
	}
	50% {
		transform: translate3d(-40px, 20px, 0px);
	}
	55% {
		transform: translate3d(-200px, 40px, 0px);
	}
	60% {
		transform: translate3d(-205px, 45px, 0px);
	}
	65% {
		transform: translate3d(-200px, 40px, 0px);
	}
	70% {
		transform: translate3d(-205px, 45px, 0px);
	}
	95% {
		transform: translate3d(-200px, 40px, 0px);
	}
}
</style>
