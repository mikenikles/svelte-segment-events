/// <reference types="@sveltejs/kit" />

declare global {
	interface Window {
		analytics: SegmentAnalytics.AnalyticsJS;
	}
}

declare namespace svelte.JSX {
  interface HTMLProps<Window> {
    segmentready?: EventHandler<Event, Window> | undefined;
  }
}
