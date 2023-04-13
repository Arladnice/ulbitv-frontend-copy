import {
	MutableRefObject,
	ReactElement,
	UIEvent,
	useEffect,
	useRef,
} from "react";

import { classNames } from "shared/lib";
import { useInfinityScroll } from "shared/hooks/useInfinityScroll";
import { useAppDispatch } from "shared/hooks/useAppDispatch";

import { pageActions } from "widgets/Page/model/slice/pageSlice";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPageScrollByPath } from "widgets/Page/model/selectors/getPageSelectors";
import { IStateSchema } from "app/providers/StoreProvider";
import { useThrottle } from "shared/hooks/useThrottle";
import styles from "./Page.module.scss";
import { IPageProps } from "./interfaces";

export const Page = ({
	className = "",
	children,
	onScrollEnd,
}: IPageProps): ReactElement => {
	const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLElement>;

	const dispatch = useAppDispatch();
	const { pathname } = useLocation();

	const scrollPosition = useSelector(
		(state: IStateSchema) => getPageScrollByPath(state, pathname)
		// eslint-disable-next-line
	);

	useInfinityScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

	useEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition;
	}, [scrollPosition]);

	const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
		dispatch(
			pageActions.setScrollPosition({
				position: event.currentTarget.scrollTop,
				path: pathname,
			})
		);
	}, 500);

	return (
		<section
			ref={wrapperRef}
			onScroll={onScroll}
			className={classNames(styles.page, {}, [className])}
		>
			{children}
			{/* @ts-ignore */}
			<div ref={triggerRef} className={styles.trigger} />
		</section>
	);
};
