/**
 * Walks upwards through the DOM, starting at `node`, and merges all `data-analytics` element attributes.
 * Attributes defined closer to the `node` take precendences.
 *
 * @param node HTMLButtonElement|HTMLAnchorElement|HTMLFormElement The button for which this action is applied to.
 * @returns Object An object with all combined `data-analytics` element attributes of all `node` ancestors.
 */
export const retrieveAnalyticsDataFromDOM = (node: HTMLButtonElement | HTMLAnchorElement | HTMLFormElement) => {
	let tmpNode = node.closest('[data-analytics]') as HTMLElement;
	let analyticsData = {};
	while (tmpNode) {
		analyticsData = { ...JSON.parse(tmpNode.dataset.analytics || '{}'), ...analyticsData };
		tmpNode = tmpNode.parentElement.closest('[data-analytics]');
	}
	return analyticsData;
};
