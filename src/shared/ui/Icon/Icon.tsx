import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

import { IIconProps } from "./interfaces";
import styles from "./Icon.module.scss";

export const Icon = memo(({ className = "", Svg }: IIconProps) => (
	<Svg className={classNames(styles.icon, {}, [className])} />
));
