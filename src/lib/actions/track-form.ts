import { retrieveAnalyticsDataFromDOM } from "../dom-data-attributes";

type ActionParameters = {
	event?: string;
	properties?: Object;
};

/**
 * @see https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#track-form
 */
export default (
	node: HTMLFormElement,
	{ event, properties = {} }: ActionParameters
): { destroy: () => void } => {
  const analyticsData = retrieveAnalyticsDataFromDOM(node);
  const allProperties = { ...analyticsData, ...properties };
  window.analytics?.trackForm(node, event, allProperties);

	return {
		destroy() {}
	};
};
