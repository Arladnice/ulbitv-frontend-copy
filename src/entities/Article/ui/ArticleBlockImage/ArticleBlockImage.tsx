import { ReactElement } from "react";

import { classNames } from "shared/lib";

import { IArticleBlockImageProps } from "./interfaces";
import styles from "./ArticleBlockImage.module.scss";

export const ArticleBlockImage = ({
	className = "",
}: IArticleBlockImageProps): ReactElement => (
	<div className={classNames(styles.articleBlockImage, {}, [className])}>
		ArticleBlockImage
	</div>
);
