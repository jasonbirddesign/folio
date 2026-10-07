<script setup lang="ts">
const visible = ref(false)
const onScroll = () => {
	visible.value = window.scrollY > 400
}
const scrollTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
	window.addEventListener('scroll', onScroll, { passive: true })
	onScroll()
})
onBeforeUnmount(() => {
	window.removeEventListener('scroll', onScroll)
})
</script>

<template>
	<Transition name="fade">
		<button
			v-if="visible"
			@click="scrollTop"
			class="back-to-top"
			aria-label="Back to top"
		>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
	</Transition>
</template>

<style scoped>
.back-to-top {
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	width: 48px;
	height: 48px;
	border-radius: 9999px;
	background: var(--color-dark-grey);
	color: var(--color-light-grey);
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
	z-index: 50;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.back-to-top:hover {
	transform: translateY(-2px);
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: translateY(10px);
}
</style>
