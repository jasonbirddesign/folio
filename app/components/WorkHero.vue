<script setup lang="ts">
const {
	company,
	title,
	image,
	intro,
	role,
	team
} = defineProps<{
	company?: string
	title: string
	image: string
	intro: string
	role: string[]
	team: string[]
}>()
</script>

<template>
	<div class="flex flex-col gap-16">
		<container class="gap-28">
			<div class="flex flex-col gap-2">
				<h1 class="text-step-4">{{ title }}</h1>
				<p class="text-step-0">{{ company }}</p>
			</div>
			<div class="flex flex-col gap-8">
				<p class="text-step-1">{{ intro }}</p>
				<hr class="border-grey/50">
				<div class="grid grid-cols-3 gap-8">
					<div class="flex flex-col gap-2">
						<p class="text-dark-grey font-bold text-step--1">MY ROLE</p>
						<p
							v-for="r in role"
							:key="r"
							class="text-step-0"
						>
							{{ r }}
						</p>
					</div>
					<div class="flex flex-col gap-2">
						<p class="text-dark-grey font-bold text-step--1">THE TEAM</p>
						<p
							v-for="t in team"
							:key="t"
							class="text-step-0"
						>
							{{ t }}
						</p>
					</div>
				</div>
			</div>
		</container>
		<img
			:src="image"
			:alt="title"
			class="w-full"
		/>
	</div>
</template>
