import React, { FC, useEffect, useState } from "react";
import {
    handlePageChange,
    IUser,
    IProfession,
    IProfessions,
    // UsersPropsType,
    handleSort,
    ISortObj,
    handleDelete,
    handleToogleBookMark
} from "../types";
import { paginate } from "../../utils/paginate";
import Pagination from "./pagination";
// import PropTypes from "prop-types";
import api from "../api/index";
import GroupList from "./groupList";
// import { userType } from "../propTypes";
import SearchStatus from "./searchStatus";
import _ from "lodash";
import UserTable from "./usersTable";

const Users: FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [professions, setProfessions] = useState<IProfessions | IProfession[]>();
    const [selectedProf, setSelectedProf] = useState<IProfession | undefined>();
    const [sortBy, setSortBy] = useState<ISortObj>({
        path: "name",
        order: "asc"
    });
    const pageSize: number = 8;

    const [users, setUsers] = useState<IUser[]>();

    useEffect(() => {
        api.users.fetchAll().then((users) => setUsers(users));
    }, []);

    const handleDelete: handleDelete = (id) => {
        setUsers(users?.filter((user) => user._id !== id));
    };

    const handleToggleBookMark: handleToogleBookMark = (id) => {
        setUsers(
            users?.map((user) => {
                if (user._id === id) user.bookmark = !user.bookmark;
                return user;
            })
        );
    };

    useEffect(() => {
        api.professions
            .fetchAll()
            .then((data: IProfessions | IProfession[]) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handlePageChange: handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    if (users) {
        const filteredUsers: IUser[] = selectedProf
            ? users.filter((user) => _.isEqual(user.profession, selectedProf))
            : users;

        const count: number = filteredUsers.length;
        const sortedUsers: IUser[] = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
        const userCrop = paginate(sortedUsers, currentPage, pageSize);

        const handleProfessionSelect = (item: IProfession): void => {
            setSelectedProf(item);
        };

        const clearFilter = (): void => {
            setSelectedProf(undefined);
        };

        const handleSort: handleSort = (item) => {
            setSortBy(item);
        };

        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            items={professions}
                            selectedItem={selectedProf}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button className="btn btn-secondary mt-2" onClick={clearFilter}>
                            Очистить
                        </button>
                    </div>
                )}

                <div className="d-flex flex-column">
                    <SearchStatus usersAmount={count} />

                    {count > 0 && (
                        <UserTable
                            users={userCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDeleteUser={handleDelete}
                            onBookmarkToggle={handleToggleBookMark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return <div>loading...</div>;
};

// prop-types
// Users.propTypes = {
//     users: PropTypes.arrayOf(userType.isRequired).isRequired,
//     onDeleteUser: PropTypes.func.isRequired,
//     onBookmarkToggle: PropTypes.func.isRequired
// };

export default Users;
