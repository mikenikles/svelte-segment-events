<script lang="ts">
	import { track } from 'svelte-segment-events';
</script>

<button use:track={{ event: 'click', properties: { variant: 'btn-primary' }, options: {} }}
	><slot /></button
>
