import { memo, ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { Page } from "shared/ui";

const MainPage = memo((): ReactElement => {
	const { t } = useTranslation("main");

	return <Page>{t("Главная")}</Page>;
});

export default memo(MainPage);
