<template>
	<div class="container">
		<div class="flex justify-between py-8 text-dark-grey">
			<p class="text-step-1 font-bold">Jason Bird</p>
			<div class="flex gap-12 text-step-0">
				<NuxtLink to="/">Work</NuxtLink>
				<NuxtLink to="/about">About</NuxtLink>
			</div>
		</div>
	</div>
	<slot />
</template>
