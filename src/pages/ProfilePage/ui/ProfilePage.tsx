import { memo, ReactElement, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import {
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileIsLoading,
	getProfileReadonly,
	profileActions,
	ProfileCard,
	profileReducer,
} from "entities/Profile";

import { useAppDispatch } from "shared/hooks/useAppDispatch";
import {
	TReducersList,
	useDynamicReducersLoader,
} from "shared/hooks/useDynamicReducersLoader";

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

	return (
		<div>
			<ProfilePageHeader />
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
			/>
		</div>
	);
});

export default ProfilePage;
