import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";
import { Text } from "shared/ui";

import { IArticleBlockTextProps } from "./interfaces";
import styles from "./ArticleBlockText.module.scss";

export const ArticleBlockText = memo(
	({
		className = "",
		block: { paragraphs, title },
	}: IArticleBlockTextProps): ReactElement => (
		<div className={classNames(styles.articleBlockText, {}, [className])}>
			{title && <Text title={title} className={styles.title} />}

			{paragraphs.map((paragraph) => (
				<Text key={paragraph} text={paragraph} className={styles.paragraph} />
			))}
		</div>
	)
);
