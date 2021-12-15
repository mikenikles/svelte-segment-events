import { retrieveAnalyticsDataFromDOM } from "../dom-data-attributes";

type ActionParameters = {
	event?: string;
	properties?: Object;
	options?: SegmentAnalytics.SegmentOpts;
	callback?: () => void;
};

/**
 * @see https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#track
 */
export default (
	node: HTMLButtonElement,
	{ event, properties = {}, options, callback }: ActionParameters
): { destroy: () => void } => {
	const handleClick = (e: Event) => {
		const analyticsData = retrieveAnalyticsDataFromDOM(node);
		const allProperties = { ...analyticsData, ...properties };
		window.analytics?.track(event, allProperties, options, callback);
	};

	node.addEventListener('click', handleClick);

	return {
		destroy() {
			node.removeEventListener('click', handleClick);
		}
	};
};
