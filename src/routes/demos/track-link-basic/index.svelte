<script>
	import { trackLink } from 'svelte-segment-events';

	const trackParameters = { event: 'link-click', properties: { demo: 'track-link-basic' } };
</script>

<a href="/demos/track-link-basic" use:trackLink={trackParameters}>Track now (loads this page again)</a>
