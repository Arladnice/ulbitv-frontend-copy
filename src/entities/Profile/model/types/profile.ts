import { ECountry } from "entities/Country";
import { ECurrency } from "entities/Currency";

export interface IProfile {
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
}
