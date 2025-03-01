<script setup lang="ts">
const route = useRoute()
</script>

<template>
	<div>
		{{ route.path }}
	</div>
</template>
