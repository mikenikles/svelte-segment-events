type ActionParameters = {
	event: string;
	properties?: Object;
};

export default (
	node: HTMLButtonElement,
	{ event, properties }: ActionParameters
): { destroy: () => void } => {
	const handleClick = (e: Event) => {
		window?.analytics?.track(event, properties);
	};

	node.addEventListener('click', handleClick);

	return {
		destroy() {
			node.removeEventListener('click', handleClick);
		}
	};
};
