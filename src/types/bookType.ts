import { IUser } from "./user";

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  comments: string[];
  user: string | IUser;
  _id?: string;
};

export type IWish = {
  _id: string;
  book: IBook;
  user: string;
  status: string;
};
