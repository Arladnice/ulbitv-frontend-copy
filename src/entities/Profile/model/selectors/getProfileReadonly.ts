import { IStateSchema } from "app/providers/StoreProvider";

export const getProfileReadonly = (state: IStateSchema): boolean | undefined =>
	state.profile?.readonly;
