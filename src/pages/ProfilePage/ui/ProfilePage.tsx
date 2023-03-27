import { memo, ReactElement, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import {
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileIsLoading,
	getProfileReadonly,
	getProfileValidateErrors,
	profileActions,
	ProfileCard,
	profileReducer,
} from "entities/Profile";
import { ECurrency } from "entities/Currency";
import { ECountry } from "entities/Country";

import { useAppDispatch } from "shared/hooks/useAppDispatch";
import {
	TReducersList,
	useDynamicReducersLoader,
} from "shared/hooks/useDynamicReducersLoader";

import { ETextTheme, Text } from "shared/ui";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

const reducers: TReducersList = {
	profile: profileReducer,
};

const ProfilePage = memo((): ReactElement => {
	useDynamicReducersLoader({ reducers, removeAfterUnmount: true });

	const dispatch = useAppDispatch();

	const formData = useSelector(getProfileForm);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileIsLoading);
	const readonly = useSelector(getProfileReadonly);
	const errors = useSelector(getProfileValidateErrors);

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	const onChangeFirstName = useCallback(
		(value: string = "") => {
			dispatch(
				profileActions.updateProfile({
					first: value,
				})
			);
		},
		[dispatch]
	);

	const onChangeLastName = useCallback(
		(value: string = "") => {
			dispatch(
				profileActions.updateProfile({
					lastname: value,
				})
			);
		},
		[dispatch]
	);

	const onChangeAge = useCallback(
		(value: string = "") => {
			dispatch(
				profileActions.updateProfile({
					age: Number(value),
				})
			);
		},
		[dispatch]
	);

	const onChangeCity = useCallback(
		(value: string = "") => {
			dispatch(
				profileActions.updateProfile({
					city: value,
				})
			);
		},
		[dispatch]
	);

	const onChangeAvatar = useCallback(
		(value: string = "") => {
			dispatch(
				profileActions.updateProfile({
					avatar: value,
				})
			);
		},
		[dispatch]
	);

	const onChangeUsername = useCallback(
		(value: string = "") => {
			dispatch(
				profileActions.updateProfile({
					username: value,
				})
			);
		},
		[dispatch]
	);

	const onChangeCountry = useCallback(
		(country: ECountry) => {
			dispatch(
				profileActions.updateProfile({
					country,
				})
			);
		},
		[dispatch]
	);

	const onChangeCurrency = useCallback(
		(currency: ECurrency) => {
			dispatch(
				profileActions.updateProfile({
					currency,
				})
			);
		},
		[dispatch]
	);

	return (
		<div>
			<ProfilePageHeader />

			{errors.length
				? errors.map((e) => <Text key={e} theme={ETextTheme.Error} text={e} />)
				: null}

			<ProfileCard
				data={formData}
				isLoading={isLoading}
				error={error}
				readonly={readonly}
				onChangeFirstName={onChangeFirstName}
				onChangeLastName={onChangeLastName}
				onChangeAge={onChangeAge}
				onChangeCity={onChangeCity}
				onChangeAvatar={onChangeAvatar}
				onChangeUsername={onChangeUsername}
				onChangeCountry={onChangeCountry}
				onChangeCurrency={onChangeCurrency}
			/>
		</div>
	);
});

export default memo(ProfilePage);
