<script lang="ts">
	import { onMount } from 'svelte';

	export let writeKey: string;

	onMount(() => {
		/* @ts-ignore */
		function init() {
			/* @ts-ignore */
			var analytics = (window.analytics = window.analytics || []);
			/* @ts-ignore */
			if (!analytics.initialize) {
				/* @ts-ignore */
				if (analytics.invoked)
					window.console && console.error && console.error('Segment snippet included twice.');
				else {
					/* @ts-ignore */
					analytics.invoked = !0;
					/* @ts-ignore */
					analytics.methods = [
						'trackSubmit',
						'trackClick',
						'trackLink',
						'trackForm',
						'pageview',
						'identify',
						'reset',
						'group',
						'track',
						'ready',
						'alias',
						'debug',
						'page',
						'once',
						'off',
						'on',
						'addSourceMiddleware',
						'addIntegrationMiddleware',
						'setAnonymousId',
						'addDestinationMiddleware'
					];
					/* @ts-ignore */
					analytics.factory = function (e) {
						return function () {
							var t = Array.prototype.slice.call(arguments);
							t.unshift(e);
							/* @ts-ignore */
							analytics.push(t);
							return analytics;
						};
					};
					/* @ts-ignore */
					for (var e = 0; e < analytics.methods.length; e++) {
						/* @ts-ignore */
						var key = analytics.methods[e];
						/* @ts-ignore */
						analytics[key] = analytics.factory(key);
					}
					/* @ts-ignore */
					analytics.load = function (key, e) {
						var t = document.createElement('script');
						t.type = 'text/javascript';
						t.async = !0;
						t.src = 'https://cdn.segment.com/analytics.js/v1/' + key + '/analytics.min.js';
						var n = document.getElementsByTagName('script')[0];
						n.parentNode.insertBefore(t, n);
						/* @ts-ignore */
						analytics._loadOptions = e;
					};
					/* @ts-ignore */
					analytics._writeKey = writeKey;
					/* @ts-ignore */
					analytics.SNIPPET_VERSION = '4.15.2';
					// @ts-ignore
					analytics.load(writeKey);
					// @ts-ignore
					analytics.page();
				}
			}
		}
		init();
	});
</script>
