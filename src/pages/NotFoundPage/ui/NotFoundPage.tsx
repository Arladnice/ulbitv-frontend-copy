import { memo, ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib";
import { Page } from "widgets/Page";

import { INotFoundPageProps } from "./interfaces";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = ({ className = "" }: INotFoundPageProps): ReactElement => {
	const { t } = useTranslation("notFound");

	return (
		<Page className={classNames(styles.notFound, {}, [className])}>
			{t("Страница не найдена")}
		</Page>
	);
};

export default memo(NotFoundPage);
