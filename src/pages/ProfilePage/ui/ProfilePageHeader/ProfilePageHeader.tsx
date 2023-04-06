import { memo, ReactElement, useCallback } from "react";
import { useSelector } from "react-redux";

import {
	getProfileData,
	getProfileReadonly,
	profileActions,
	updateProfileData,
} from "entities/Profile";
import { getUserAuthData } from "entities/User";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { classNames } from "shared/lib";
import { Button, EButtonTheme, Text } from "shared/ui";

import styles from "./ProfilePageHeader.module.scss";

export const ProfilePageHeader = memo((): ReactElement => {
	const dispatch = useAppDispatch();

	const readonly = useSelector(getProfileReadonly);
	const authData = useSelector(getUserAuthData);
	const profileData = useSelector(getProfileData);

	const isCanEdit = authData?.id === profileData?.id;

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onSave = useCallback(() => {
		if (profileData?.id) {
			dispatch(updateProfileData(profileData.id));
		}
	}, [dispatch, profileData]);

	return (
		<div className={classNames(styles.profilePageHeader)}>
			<Text title="Профиль" />
			{isCanEdit &&
				(readonly ? (
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
				))}
		</div>
	);
});
