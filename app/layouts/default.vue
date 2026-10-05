<script setup lang="ts">
const { dark, toggle } = useDarkMode()
</script>

<template>
	<div class="container">
		<div class="nav-bar flex justify-between pt-12 pb-8 text-dark-grey">
			<NuxtLink
				to="/"
				class="text-[18px] font-semibold !no-underline"
			>
				Jason Bird
			</NuxtLink>
			<div class="flex items-center gap-4 md:gap-12 text-step-0">
				<NuxtLink to="/">Work</NuxtLink>
				<NuxtLink to="/about">About</NuxtLink>
				<div class="tooltip-wrap">
					<button @click="toggle" class="flex items-center" :class="dark ? 'text-[#f0ede6]' : ''" :aria-label="dark ? 'Switch to light mode' : 'Switch to dark mode'">
						<svg v-if="!dark" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
							<line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
							<line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
							<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
							<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
							<line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
							<line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
							<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
							<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
						</svg>
					</button>
					<span class="tooltip">{{ dark ? 'Light mode' : 'Dark mode' }}</span>
				</div>
			</div>
		</div>
	</div>
	<slot />
</template>

<style scoped>
.nav-bar {
	animation: nav-slide-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes nav-slide-in {
	from {
		opacity: 0;
		transform: translateY(-100%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.tooltip-wrap {
	position: relative;
}

.tooltip {
	position: absolute;
	bottom: -2rem;
	right: 0;
	background: #141413;
	color: #faf9f5;
	font-size: 12px;
	white-space: nowrap;
	padding: 4px 8px;
	border-radius: 4px;
	pointer-events: none;
	opacity: 0;
	transition: opacity 0.2s ease;
}

.tooltip-wrap:hover .tooltip {
	opacity: 1;
}
</style>
