<script lang="ts">
  import Button from '$lib/demos/components/button.svelte';
  import { domify, getContext, getPosition } from '$lib/demos/analytics';
</script>

<div data-analytics={domify(getPosition('sidebar'), getContext('overwritten-below'))}>
	<div data-analytics={domify(getContext('submenu'))}>
		<Button>Track button</Button>
	</div>
</div>
