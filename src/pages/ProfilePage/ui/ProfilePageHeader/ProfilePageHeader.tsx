import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";
import { Button, EButtonTheme, Text } from "shared/ui";

import styles from "./ProfilePageHeader.module.scss";

export const ProfilePageHeader = memo(
	(): ReactElement => (
		<div className={classNames(styles.profilePageHeader)}>
			<Text title="Профиль" />
			<Button theme={EButtonTheme.Outline} className={styles.editButton}>
				Редактировать
			</Button>
		</div>
	)
);
