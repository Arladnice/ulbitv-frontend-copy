import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";
import { Avatar, Skeleton, Text } from "shared/ui";

import { ICommentCardProps } from "./interfaces";
import styles from "./CommentCard.module.scss";

export const CommentCard = memo(
	({
		className = "",
		comment: {
			text,
			user: { username, avatar },
		},
		isLoading,
	}: ICommentCardProps): ReactElement => {
		if (isLoading) {
			return (
				<div className={classNames(styles.commentCard, {}, [className])}>
					<div className={styles.header}>
						<Skeleton
							width={30}
							height={30}
							border="50%"
							className={styles.avatar}
						/>
						<Skeleton width={100} height={16} />
					</div>

					<Skeleton width="100%" height={50} className={styles.text} />
				</div>
			);
		}

		return (
			<div className={classNames(styles.commentCard, {}, [className])}>
				<div className={styles.header}>
					{avatar && (
						<Avatar size={30} src={avatar} className={styles.avatar} />
					)}
					<Text title={username} />
				</div>

				<Text text={text} className={styles.text} />
			</div>
		);
	}
);
