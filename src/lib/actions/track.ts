type ActionParameters = {
	event?: string;
	properties?: Object;
	options?: SegmentAnalytics.SegmentOpts;
	callback?: () => void;
};

/**
 * Walks upwards through the DOM, starting at `node`, and merges all `data-analytics` element attributes.
 * Attributes defined closer to the `node` take precendences.
 *
 * @param node HTMLButtonElement The button for which this action is applied to.
 * @returns Object An object with all combined `data-analytics` element attributes of all `node` ancestors.
 */
const retrieveAnalyticsDataFromDOM = (node: HTMLButtonElement) => {
	let tmpNode = node.closest('[data-analytics]') as HTMLElement;
	let analyticsData = {};
	while (tmpNode) {
		analyticsData = { ...JSON.parse(tmpNode.dataset.analytics || '{}'), ...analyticsData };
		tmpNode = tmpNode.parentElement.closest('[data-analytics]');
	}
	return analyticsData;
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
