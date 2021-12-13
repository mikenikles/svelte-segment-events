/// <reference types="@sveltejs/kit" />

declare global {
	interface Window {
		analytics: SegmentAnalytics.AnalyticsJS;
	}
}
