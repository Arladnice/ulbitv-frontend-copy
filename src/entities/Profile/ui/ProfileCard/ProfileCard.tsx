import { ReactElement } from "react";

import { classNames } from "shared/lib";
import { Avatar, ETextAlign, ETextTheme, Input, Loader, Text } from "shared/ui";
import { CurrencySelect } from "entities/Currency";
import { CountrySelect } from "entities/Country";

import { IProfileCardProps } from "./interfaces";
import styles from "./ProfileCard.module.scss";

export const ProfileCard = ({
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
	onChangeCountry,
	onChangeCurrency,
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

	const mods: Record<string, boolean> = {
		[styles.editing]: !readonly,
	};

	return (
		<div className={classNames(styles.profileCard, mods, [className])}>
			<div className={styles.data}>
				{data?.avatar && (
					<div className={styles.avatarWrapper}>
						<Avatar src={data?.avatar} size={100} />
					</div>
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

				<CountrySelect
					className={styles.input}
					value={data?.country}
					onChange={onChangeCountry}
					readonly={readonly}
				/>

				<CurrencySelect
					className={styles.input}
					value={data?.currency}
					onChange={onChangeCurrency}
					readonly={readonly}
				/>
			</div>
		</div>
	);
};
