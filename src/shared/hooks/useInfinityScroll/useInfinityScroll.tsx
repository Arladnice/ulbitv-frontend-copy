import { useEffect, useRef } from "react";

import { IUseInfiniteScrollProps } from "./interfaces";

export const useInfinityScroll = ({
	callback,
	wrapperRef,
	triggerRef,
}: IUseInfiniteScrollProps) => {
	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		const wrapperElement = wrapperRef.current;
		const triggerElement = triggerRef.current;

		if (callback) {
			const options: IntersectionObserverInit = {
				root: wrapperElement,
				rootMargin: "0px",
				threshold: 1.0,
			};

			observer.current = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					callback();
				}
			}, options);

			observer.current.observe(triggerElement);
		}

		return () => {
			if (observer.current && triggerElement) {
				observer.current.unobserve(triggerElement);
			}
		};
	}, [callback, triggerRef, wrapperRef]);
};
