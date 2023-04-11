import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";

import { IPageProps } from "./interfaces";
import styles from "./Page.module.scss";

export const Page = memo(
	({ className = "", children }: IPageProps): ReactElement => (
		<section className={classNames(styles.page, {}, [className])}>
			{children}
		</section>
	)
);
