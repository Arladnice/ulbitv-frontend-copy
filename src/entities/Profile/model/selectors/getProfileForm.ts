import { IStateSchema } from "app/providers/StoreProvider";

import { IProfile } from "../types/profile";

export const getProfileForm = (state: IStateSchema): IProfile | undefined =>
	state.profile?.form;
