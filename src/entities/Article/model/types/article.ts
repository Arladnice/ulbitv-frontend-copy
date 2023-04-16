import { IUser } from "entities/User";

export enum EArticleBlockType {
	Image = "IMAGE",
	Text = "TEXT",
	Code = "CODE",
}

export interface IArticleBlockBase {
	id: string;
	type: EArticleBlockType;
}

export interface IArticleBlockCode extends IArticleBlockBase {
	type: EArticleBlockType.Code;
	code: string;
}

export interface IArticleBlockImage extends IArticleBlockBase {
	type: EArticleBlockType.Image;
	src: string;
	title: string;
}

export interface IArticleBlockText extends IArticleBlockBase {
	type: EArticleBlockType.Text;
	title?: string;
	paragraphs: string[];
}

export type TArticleBlock =
	| IArticleBlockCode
	| IArticleBlockImage
	| IArticleBlockText;

export enum EArticleType {
	It = "IT",
	Science = "SCIENCE",
	Economics = "ECONOMICS",
}

export enum EArticleView {
	Big = "BIG",
	Small = "SMALL",
}

export interface IArticle {
	id: string;
	title: string;
	subtitle: string;
	user: IUser;
	img: string;
	views: number;
	createdAt: string;
	type: EArticleType[];
	blocks: TArticleBlock[];
}

export enum EArticleSortField {
	Views = "views",
	Title = "title",
	Created = "createdAt",
}
