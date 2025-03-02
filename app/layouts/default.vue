<template>
	<div class="container">
		<div class="flex justify-between py-8 text-dark-grey">
			<NuxtLink
				to="/"
				class="text-step-1 font-bold !no-underline"
			>
				Jason Bird
			</NuxtLink>
			<div class="flex gap-4 md:gap-12 text-step-0">
				<NuxtLink to="/">Work</NuxtLink>
				<NuxtLink to="/about">About</NuxtLink>
			</div>
		</div>
	</div>
	<slot />
</template>
