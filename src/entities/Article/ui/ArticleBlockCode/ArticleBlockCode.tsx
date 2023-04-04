import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";
import { Code } from "shared/ui";

import { IArticleBlockCodeProps } from "./interfaces";
import styles from "./ArticleBlockCode.module.scss";

export const ArticleBlockCode = memo(
	({
		className = "",
		block: { code },
	}: IArticleBlockCodeProps): ReactElement => (
		<div className={classNames(styles.articleBlockCode, {}, [className])}>
			<Code text={code} />
		</div>
	)
);
