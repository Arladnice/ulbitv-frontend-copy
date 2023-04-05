import { IComment } from "entities/Comment/model/types/comment";

export interface ICommentCardProps {
	className?: string;
	comment: IComment;
	isLoading?: boolean;
}
