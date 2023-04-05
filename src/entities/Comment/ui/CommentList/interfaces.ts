import { IComment } from "../../model/types/comment";

export interface ICommentListProps {
	className?: string;
	comments?: IComment[];
	isLoading?: boolean;
}
