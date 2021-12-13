<script lang="ts">
	import { trackEvent } from 'svelte-segment-events';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button
	use:trackEvent={{
		event: 'click'
	}}>Track button</button
>

<p>Navigate to the <a href="/about">/about</a> page.</p>
