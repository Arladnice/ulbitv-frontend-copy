import { IStateSchema } from "app/providers/StoreProvider";
import { EValidateProfileError } from "../types/profile";

export const getProfileValidateErrors = (
	state: IStateSchema
): EValidateProfileError[] => state.profile?.validateError || [];
