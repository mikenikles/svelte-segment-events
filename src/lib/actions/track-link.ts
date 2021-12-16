import { retrieveAnalyticsDataFromDOM } from "../dom-data-attributes";

type ActionParameters = {
	event?: string;
	properties?: Object;
};

/**
 * @see https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#track-link
 */
export default (
	node: HTMLAnchorElement,
	{ event, properties = {} }: ActionParameters
): { destroy: () => void } => {
	const track = () => {
		const analyticsData = retrieveAnalyticsDataFromDOM(node);
		const allProperties = { ...analyticsData, ...properties };
		window.analytics?.trackLink(node, event, allProperties);
	};

	if (window.analytics) {
		track();
	} else {
		window.addEventListener("segmentready", track);
	}

	return {
		destroy() {
			window.removeEventListener("segmentready", track);
		}
	};
};
