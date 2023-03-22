import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";

import { IAvatarProps } from "./interfaces";
import styles from "./Avatar.module.scss";

export const Avatar = memo(
	({ className = "", src, size = 100 }: IAvatarProps): ReactElement => (
		<img
			className={classNames(styles.avatar, {}, [className])}
			src={src}
			alt="аватар"
			width={size}
			height={size}
		/>
	)
);
