import { ReactNode } from "react";

export interface IProfession {
    _id: string;
    name: string;
}

export interface IQuality {
    _id: string;
    name: string;
    color: string;
}

export interface IProfessions {
    [key: string]: IProfession;
}

export interface IQualities {
    [key: string]: IQuality;
}

export interface IUser {
    _id: string;
    name: string;
    profession: IProfession;
    qualities: IQuality[];
    completedMeetings: number;
    rate: number;
    bookmark: boolean;
}

export type handleToogleBookMark = (id: string) => void;
export type handleDelete = (id: string) => void;
export type handlePageChange = (pageIndex: number) => void;

export interface ISortObj {
    path: string;
    order: "asc" | "desc" | boolean;
}
export type handleSort = (item: ISortObj) => void;

export interface UsersPropsType {
    users: IUser[];
    onDeleteUser: handleDelete;
    onBookmarkToggle: handleToogleBookMark;
}

export interface BookmarkPropsType {
    id: string;
    status: boolean;
    onBookmarkToggle: (id: string) => void;
}

export interface IColumns {
    [key: string]: {
        path?: string;
        name?: string;
        component?: ((item: IUser) => ReactNode) | string;
    };
}
