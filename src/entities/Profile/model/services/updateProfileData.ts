import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "app/providers/StoreProvider";

import { getProfileForm } from "../selectors/getProfileForm";
import { IProfile } from "../types/profile";

export const updateProfileData = createAsyncThunk<
	IProfile,
	void,
	IThunkConfig<string>
>(
	"profile/updateProfileData",
	async (_, { extra, rejectWithValue, getState }) => {
		const formData = getProfileForm(getState() as any);

		try {
			const response = await extra.api.put<IProfile>("/profile", formData);

			if (!response.data) {
				throw new Error("something wrong");
			}

			return response.data;
		} catch (error) {
			console.error(error);
			return rejectWithValue("error");
		}
	}
);
