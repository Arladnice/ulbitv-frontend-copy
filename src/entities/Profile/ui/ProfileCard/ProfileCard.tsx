import { ReactElement } from "react";

import { classNames } from "shared/lib";
import { ETextAlign, ETextTheme, Loader, Text } from "shared/ui";

import { IProfileCardProps } from "./interfaces";
import styles from "./ProfileCard.module.scss";

const ProfileCard = ({
	className = "",
	data,
	error,
	isLoading,
}: IProfileCardProps): ReactElement => {
	if (isLoading) {
		return (
			<div
				className={classNames(styles.profileCard, {}, [
					className,
					styles.loading,
				])}
			>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div
				className={classNames(styles.profileCard, {}, [
					className,
					styles.error,
				])}
			>
				<Text
					title="Произошла ошибка при загрузке профиля"
					text="Попробуйте обновить страницу"
					theme={ETextTheme.Error}
					align={ETextAlign.Center}
				/>
			</div>
		);
	}

	return (
		<div className={classNames(styles.profileCard, {}, [className])}>
			<div className={styles.data}>
				<input
					type="text"
					value={data?.first}
					placeholder="Ваше имя"
					className={styles.input}
				/>
				<input
					type="text"
					value={data?.lastname}
					placeholder="Ваша фамилия"
					className={styles.input}
				/>
			</div>
		</div>
	);
};

export default ProfileCard;
