export const addQueryParams = (params: Partial<Record<string, string>>) => {
	const searchParams = new URLSearchParams(window.location.search);

	Object.entries(params).forEach(([name, value]) => {
		if (value !== undefined) {
			searchParams.set(name, value);
		}
	});

	window.history.pushState(null, "", `?${searchParams.toString()}`);
};
