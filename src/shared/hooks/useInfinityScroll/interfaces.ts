import { MutableRefObject } from "react";

export interface IUseInfiniteScrollProps {
	callback?: () => void;
	triggerRef: MutableRefObject<HTMLElement>;
	wrapperRef: MutableRefObject<HTMLElement>;
}
