import { MutableRefObject, ReactElement, useRef } from "react";

import { classNames } from "shared/lib";
import { useInfinityScroll } from "shared/hooks/useInfinityScroll";

import { IPageProps } from "./interfaces";
import styles from "./Page.module.scss";

export const Page = ({
	className = "",
	children,
	onScrollEnd,
}: IPageProps): ReactElement => {
	const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLElement>;

	useInfinityScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

	return (
		<section
			ref={wrapperRef}
			className={classNames(styles.page, {}, [className])}
		>
			{children}
			{/* @ts-ignore */}
			<div ref={triggerRef} className={styles.trigger} />
		</section>
	);
};
