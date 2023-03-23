import { EValidateProfileError, IProfile } from "../types/profile";

export const validateProfileData = (
	profile?: IProfile
): EValidateProfileError[] => {
	if (!profile) {
		return [EValidateProfileError.NoData];
	}

	const { first, lastname, age } = profile;

	const errors: EValidateProfileError[] = [];

	if (!first || !lastname) {
		errors.push(EValidateProfileError.IncorrectUserData);
	}

	if (!age || !Number.isInteger(age)) {
		errors.push(EValidateProfileError.IncorrectAge);
	}

	return errors;
};
