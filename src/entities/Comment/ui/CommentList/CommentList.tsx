import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";
import { Text } from "shared/ui";

import { ICommentListProps } from "./interfaces";
import styles from "./CommentList.module.scss";
import { CommentCard } from "../CommentCard/CommentCard";

export const CommentList = memo(
	({
		className = "",
		comments,
		isLoading,
	}: ICommentListProps): ReactElement => {
		if (isLoading) {
			return (
				<div className={classNames(styles.commentList, {}, [className])}>
					<CommentCard isLoading={isLoading} />
					<CommentCard isLoading={isLoading} />
					<CommentCard isLoading={isLoading} />
				</div>
			);
		}

		return (
			<div className={classNames(styles.commentList, {}, [className])}>
				{comments?.length ? (
					comments.map((comment) => (
						<CommentCard
							key={comment.id}
							comment={comment}
							className={styles.comment}
						/>
					))
				) : (
					<Text text="Комментарии отсутствуют" />
				)}
			</div>
		);
	}
);
