import { CSSProperties, memo, ReactElement } from "react";

import { classNames } from "shared/lib";

import { ISkeletonProps } from "./interfaces";
import styles from "./Skeleton.module.scss";

export const Skeleton = ({
	className = "",
	border,
	height,
	width,
}: ISkeletonProps): ReactElement => {
	const style: CSSProperties = {
		width,
		height,
		borderRadius: border,
	};

	return (
		<div
			className={classNames(styles.skeleton, {}, [className])}
			style={style}
		/>
	);
};
