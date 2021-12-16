<script lang="ts">
	import { page } from '$app/stores';
	import { SegmentInit } from 'svelte-segment-events';

	// Track client-side navigation events
	$: if (typeof window !== 'undefined' && window.analytics && $page.path) {
		window.analytics.page();
	}

	const identifyUser = () => {
		window.analytics.identify("9f75de01-9e1f-452c-9d50-edc19a7f0316", {
			name: "Mike Nikles",
			twitter: "@mikenikles"
		});
	};
</script>

<svelte:window on:segmentready={identifyUser}/>

<SegmentInit writeKey="QrH21WFKWA1dSrgGtoUk82q5cMxyJoiV" />

<slot />

<footer>
	{#if $page.path !== '/'}
		<a href="/">Home</a>
	{/if}
</footer>
