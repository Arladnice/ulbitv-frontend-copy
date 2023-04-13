import { useCallback, useRef } from "react";

export const useThrottle = (
	callback: (...args: any[]) => void,
	delay: number
) => {
	const throttleFer = useRef(false);

	return useCallback(
		(...args: any[]) => {
			if (!throttleFer.current) {
				callback(...args);
				throttleFer.current = true;

				setTimeout(() => {
					throttleFer.current = false;
				}, delay);
			}
		},
		[callback, delay]
	);
};
