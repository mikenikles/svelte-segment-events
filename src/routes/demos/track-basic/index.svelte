<script>
	import { track } from 'svelte-segment-events';

	const trackParameters = { event: 'btn-click', properties: { demo: 'track-basic' } };
</script>

<button use:track={trackParameters}>Track now</button>
