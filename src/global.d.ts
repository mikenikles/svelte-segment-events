/// <reference types="@sveltejs/kit" />

declare global {
	interface Window {
		analytics: SegmentAnalytics.AnalyticsJS;
	}
}

declare namespace svelte.JSX {
  interface SvelteWindowProps {
    onsegmentready?: EventHandler<Event, Window> | undefined;
  }
}
