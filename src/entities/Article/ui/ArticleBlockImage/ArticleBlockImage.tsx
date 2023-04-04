import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";

import { IArticleBlockImageProps } from "./interfaces";
import styles from "./ArticleBlockImage.module.scss";

export const ArticleBlockImage = memo(
	({
		className = "",
		block: { src, title },
	}: IArticleBlockImageProps): ReactElement => (
		<figure className={classNames(styles.articleBlockImage, {}, [className])}>
			<img src={src} alt={title} className={styles.image} />
			{title && <figcaption>{title}</figcaption>}
		</figure>
	)
);
