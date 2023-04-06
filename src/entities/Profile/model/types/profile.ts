import { ECountry } from "entities/Country";
import { ECurrency } from "entities/Currency";

export enum EValidateProfileError {
	IncorrectUserData = "IncorrectUserData",
	IncorrectAge = "IncorrectAge",
	NoData = "NoData",
	ServerError = "ServerError",
}

export interface IProfile {
	id?: string;
	first?: string;
	lastname?: string;
	age?: number;
	currency?: ECurrency;
	country?: ECountry;
	city?: string;
	username?: string;
	avatar?: string;
}

export interface IProfileSchema {
	data?: IProfile;
	isLoading: boolean;
	error?: string;
	readonly: boolean;
	form?: IProfile;
	validateError?: EValidateProfileError[];
}
