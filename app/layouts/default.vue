<template>
	<Container class="gap-10">
		<div class="flex justify-between pt-12 pb-28 font-bold">
			<p class="text-step-1">Jason Bird</p>
			<div class="flex gap-6 text-step-0">
				<NuxtLink to="/">Work</NuxtLink>
				<NuxtLink to="/about">About</NuxtLink>
			</div>
		</div>
	</Container>
	<slot />
</template>
