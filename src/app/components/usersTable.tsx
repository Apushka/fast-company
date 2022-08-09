import React, { FC } from "react";
import { handleSort, IColumns, ISortObj, UsersPropsType } from "../types";
import Bookmark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";

type UsersTablePropsType = UsersPropsType & { onSort: handleSort; selectedSort: ISortObj };

const UserTable: FC<UsersTablePropsType> = ({
    users,
    onSort,
    selectedSort,
    onBookmarkToggle,
    onDeleteUser,
    ...rest
}) => {
    const columns: IColumns = {
        name: { path: "name", name: "Имя" },
        qualities: {
            name: "Качество",
            component: (user) => <QualitiesList qualities={user.qualities} />
        },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
        rate: { path: "rate", name: "оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <Bookmark
                    id={user._id}
                    status={user.bookmark}
                    onBookmarkToggle={onBookmarkToggle}
                />
            )
        },
        delete: {
            component: (user) => (
                <button onClick={() => onDeleteUser(user._id)} className="btn btn-danger">
                    delete
                </button>
            )
        }
    };
    return <Table onSort={onSort} selectedSort={selectedSort} columns={columns} data={users} />;
};

export default UserTable;
