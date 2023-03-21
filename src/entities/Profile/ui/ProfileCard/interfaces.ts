import { IProfile } from "../../model/types/profile";

export interface IProfileCardProps {
	className?: string;
	data?: IProfile;
	isLoading?: boolean;
	error?: string;
}
