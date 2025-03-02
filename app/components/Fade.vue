<script setup lang="ts">
const target = ref(null)
const active = ref(false)
const targetIsVisible = useElementVisibility(target, {
	rootMargin: '0px 0px -150px 0px',
	once: true
})
watch(targetIsVisible, isVisible => {
	if (isVisible) active.value = true
})
</script>

<template>
	<div
		ref="target"
		:class="{
			'active': active,
			'opacity-0': !active
		}"
	>
		<slot/>
	</div>
</template>

<style>
.active {
	opacity: 0;
	animation: fade 1s ease-out forwards;
	animation-delay: 0.15s;
}
@keyframes fade {
	0% {
		opacity: 0;
		transform: translateY(30px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
