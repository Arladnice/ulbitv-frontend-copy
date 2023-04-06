import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "app/providers/StoreProvider";

import { getProfileForm } from "../selectors/getProfileForm";
import { EValidateProfileError, IProfile } from "../types/profile";

import { validateProfileData } from "./validateProfileData";

export const updateProfileData = createAsyncThunk<
	IProfile,
	string,
	IThunkConfig<EValidateProfileError[]>
>(
	"profile/updateProfileData",
	async (profileId, { extra, rejectWithValue, getState }) => {
		const formData = getProfileForm(getState() as any);

		const errors = validateProfileData(formData);

		if (errors.length) {
			return rejectWithValue(errors);
		}

		try {
			const response = await extra.api.put<IProfile>(
				`/profile/${profileId}`,
				formData
			);

			if (!response.data) {
				throw new Error("something wrong");
			}

			return response.data;
		} catch (error) {
			console.error(error);
			return rejectWithValue([EValidateProfileError.ServerError]);
		}
	}
);
