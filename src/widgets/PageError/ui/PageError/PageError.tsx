import { ReactElement } from "react";

import { classNames } from "shared/lib";

import { useTranslation } from "react-i18next";

import { Button } from "shared/ui";

import styles from "./PageError.module.scss";
import { IPageErrorProps } from "./interfaces";

const PageError = ({ className }: IPageErrorProps): ReactElement => {
	const { t } = useTranslation();

	// eslint-disable-next-line no-restricted-globals
	const handleReloadPage = () => location.reload();

	return (
		<div className={classNames(styles.pageError, {}, [className])}>
			<p>{t("Произошла непредвиденная ошибка")}</p>
			<Button onClick={handleReloadPage}>{t("Обновить страницу")}</Button>
		</div>
	);
};

export default PageError;