import { memo, ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";

import {
	fetchProfileData,
	getProfileData,
	getProfileError,
	getProfileIsLoading,
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

	const data = useSelector(getProfileData);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileIsLoading);

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<div>
			<ProfilePageHeader />
			<ProfileCard data={data} isLoading={isLoading} error={error} />
		</div>
	);
});

export default ProfilePage;
