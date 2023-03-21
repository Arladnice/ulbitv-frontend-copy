export { IProfile, IProfileSchema } from "./model/types/profile";
export { profileActions, profileReducer } from "./model/slice/profileSlice";
export { fetchProfileData } from "./model/services/fetchProfileData";
export { default as ProfileCard } from "./ui/ProfileCard/ProfileCard";
export { getProfileData } from "./model/selectors/getProfileData";
export { getProfileError } from "./model/selectors/getProfileError";
export { getProfileIsLoading } from "./model/selectors/getProfileIsLoading";
