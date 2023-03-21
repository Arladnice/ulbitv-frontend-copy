import { ReactElement } from "react";

import { classNames } from "shared/lib";
import { ETextAlign, ETextTheme, Input, Loader, Text } from "shared/ui";

import { IProfileCardProps } from "./interfaces";
import styles from "./ProfileCard.module.scss";

const ProfileCard = ({
	className = "",
	data,
	error,
	isLoading,
	readonly,
	onChangeFirstName,
	onChangeLastName,
	onChangeCity,
	onChangeAge,
	onChangeAvatar,
	onChangeUsername,
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
				{data?.avatar && (
					<img src={data?.avatar} alt="аватар" width={100} height={100} />
				)}

				<Input
					type="text"
					value={data?.first}
					placeholder="Ваше имя"
					className={styles.input}
					readonly={readonly}
					onChange={onChangeFirstName}
				/>
				<Input
					type="text"
					value={data?.lastname}
					placeholder="Ваша фамилия"
					className={styles.input}
					readonly={readonly}
					onChange={onChangeLastName}
				/>
				<Input
					type="number"
					value={data?.age}
					placeholder="Ваш возраст"
					className={styles.input}
					readonly={readonly}
					onChange={onChangeAge}
				/>
				<Input
					type="text"
					value={data?.city}
					placeholder="Ваш город"
					className={styles.input}
					readonly={readonly}
					onChange={onChangeCity}
				/>
				<Input
					type="number"
					value={data?.username}
					placeholder="Ваше имя пользователя"
					className={styles.input}
					readonly={readonly}
					onChange={onChangeUsername}
				/>
				<Input
					type="text"
					value={data?.avatar}
					placeholder="Ссылка на ваш аватар"
					className={styles.input}
					readonly={readonly}
					onChange={onChangeAvatar}
				/>
			</div>
		</div>
	);
};

export default ProfileCard;
