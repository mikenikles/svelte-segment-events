<script>
	import { trackForm } from 'svelte-segment-events';
	import { page } from "$app/stores";

	const trackParameters = { event: 'signed-up', properties: { demo: 'track-form-basic' } };
</script>

<form action="/demos/track-form-basic/api/user" method="post" use:trackForm={trackParameters}>
	<label>
		Email
		<input type="email" name="email" required />
	</label>
	<button>Sign up</button>
</form>

{#if $page.query.has("signedup")}
	<p>Congratulations, you're signed up.</p>
{/if}
