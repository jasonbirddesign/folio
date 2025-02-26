<script setup lang="ts">
const links = [
	{
		header: 'Speaking',
		items: [
			{
				text: 'Designing with biases',
				url: 'https://www.eventbrite.co.uk/e/designing-with-biases-tickets-79498669661'
			}
		]
	},
	{
		header: 'Writing',
		items: [
			{
				text: 'Designing with tokens for a flexible multi-brand design system',
				url: 'https://clearleft.com/thinking/designing-with-tokens-for-a-flexible-multi-brand-design-system'
			},
			{
				text: 'Designing your mobile navigation',
				url: 'https://medium.com/clear-left-thinking/designing-your-mobile-navigation-b115bb174301'
			}
		]
	},
	{
		header: 'Mentorship',
		items: [
			{
				text: 'ADP List',
				url: 'https://adplist.org/mentors/jason-bird'
			}
		]
	}
]
</script>

<template>
	<div class="pt-30 pb-23">
		<h1 class="text-step-5 font-bold mb-16">About</h1>
		<div class="mb-16 flex flex-col gap-6 max-w-[628px]">
			<p>10+ years designing Products and services based in Brighton, UK</p>
			<p>Leading design bringing multi discipline teams together to turn ideas in to consumer value. I'm a strategic thinker, problem solver, systems tinkerer with a core focus on empowering design and the</p>
			<p>
				Currently
				<NuxtLink
					to="https://www.opentable.com/"
					target="_blank"
				>
					@OpenTable
				</NuxtLink>
				previously
				<NuxtLink
					to="https://clearleft.com/"
					target="_blank"
				>
					@Clearleft
				</NuxtLink>
			</p>
		</div>
		<div class="flex flex-col gap-11">
			<div
				v-for="(link, i) in links"
				:key="i"
				class="flex flex-col gap-4"
			>
				<h2 class="text-dark-grey text-step-3 font-bold">{{ link.header }}</h2>
				<div
					v-for="(item, j) in link.items"
					:key="j"
					class="flex gap-1 items-center"
				>
					<NuxtLink
						:to="item.url"
						target="_blank"
					>
						{{ item.text }}
					</NuxtLink>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#333333"/>
					</svg>
				</div>
			</div>
		</div>

	</div>
	<div class="flex flex-col gap-6 mb-22.5">
		<div class="grid grid-cols-2 gap-6">
			<img
				src="~/assets/img/49.jpeg"
				alt="49"
			/>
			<img
				src="~/assets/img/miro.jpeg"
				alt="miro"
			/>
		</div>
		<img
			src="~/assets/img/FIN-Collaboration-Workshop.jpeg"
			alt="FIN-Collaboration-Workshop"
		/>
	</div>
</template>
