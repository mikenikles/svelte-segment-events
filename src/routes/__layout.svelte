<script lang="ts">
	import { page } from '$app/stores';
	import { SegmentInit } from 'svelte-segment-events';

	// Track client-side navigation events
	$: if (typeof window !== 'undefined' && window.analytics && $page.path) {
		window.analytics.page();
	}
</script>

<SegmentInit writeKey="QrH21WFKWA1dSrgGtoUk82q5cMxyJoiV" />

<slot />
