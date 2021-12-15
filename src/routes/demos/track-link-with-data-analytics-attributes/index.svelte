<script lang="ts">
	import { trackLink } from 'svelte-segment-events';
  import { domify, getContext, getPosition } from '$lib/demos/analytics';

	const event = 'link-click';
	const demo = 'track-link-with-data-analytics-attributes';
</script>

<nav data-analytics={domify(getPosition('sidebar'), getContext('overwritten-below'))}>
	<div data-analytics={domify(getContext('submenu-1'))}>
		<a href="/demos/track-link-with-data-analytics-attributes#sidebar-1-link-1" use:trackLink={{event, properties: { demo, link: 1}}}>Submenu 1, link 1</a>
		|
		<a href="/demos/track-link-with-data-analytics-attributes#sidebar-1-link-2" use:trackLink={{event, properties: { demo, link: 2}}}>Submenu 1, link 2</a>
	</div>
	<div data-analytics={domify(getContext('submenu-2'))}>
		<a href="/demos/track-link-with-data-analytics-attributes#sidebar-2-link-1" use:trackLink={{event, properties: { demo, link: 1}}}>Submenu 2, link 1</a>
		|
		<a href="/demos/track-link-with-data-analytics-attributes#sidebar-1-link-2" use:trackLink={{event, properties: { demo, link: 2}}}>Submenu 2, link 2</a>
	</div>
</nav>
