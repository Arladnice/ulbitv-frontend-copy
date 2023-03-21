import {
	getProfileReadonly,
	profileActions,
	updateProfileData,
} from "entities/Profile";
import { memo, ReactElement, useCallback } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { classNames } from "shared/lib";
import { Button, EButtonTheme, Text } from "shared/ui";

import styles from "./ProfilePageHeader.module.scss";

export const ProfilePageHeader = memo((): ReactElement => {
	const readonly = useSelector(getProfileReadonly);

	const dispatch = useAppDispatch();

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onSave = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);

	return (
		<div className={classNames(styles.profilePageHeader)}>
			<Text title="Профиль" />
			{readonly ? (
				<Button
					theme={EButtonTheme.Outline}
					className={styles.editButton}
					onClick={onEdit}
				>
					Редактировать
				</Button>
			) : (
				<>
					<Button
						theme={EButtonTheme.OutlineRed}
						className={styles.editButton}
						onClick={onCancelEdit}
					>
						Отменить
					</Button>
					<Button
						theme={EButtonTheme.Outline}
						className={styles.saveButton}
						onClick={onSave}
					>
						Сохранить
					</Button>
				</>
			)}
		</div>
	);
});
