import { ReactElement } from "react";

import { Skeleton } from "shared/ui";

import styles from "./ArticleDetailsSkeleton.module.scss";

export const ArticleDetailsSkeleton = (): ReactElement => (
	<>
		<Skeleton className={styles.avatar} width={200} height={200} border="50%" />
		<Skeleton className={styles.title} width={300} height={32} />
		<Skeleton className={styles.skeleton} width={600} height={24} />
		<Skeleton className={styles.skeleton} width="100%" height={200} />
		<Skeleton className={styles.skeleton} width="100%" height={200} />
	</>
);
