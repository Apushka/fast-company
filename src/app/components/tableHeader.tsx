import React, { FC, ReactNode } from "react";
import { handleSort, IColumns, ISortObj } from "../types";

interface TableHeaderPropsType {
    onSort: handleSort;
    selectedSort: ISortObj;
    columns: IColumns;
}

const TableHeader: FC<TableHeaderPropsType> = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item: string): void => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    const handleClick = (path: string | undefined) => {
        return typeof path === "string" ? () => handleSort(path) : undefined;
    };

    const renderSortIcon = (path: string | undefined): ReactNode | undefined => {
        if (selectedSort.path === path) {
            return (
                <i
                    className={`bi bi-caret-${
                        selectedSort.order === "asc" ? "up" : "down"
                    }-fill`}></i>
            );
        }
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        className="user-select-none"
                        {...{
                            role: columns[column].path && "button",
                            onClick: handleClick(columns[column].path)
                        }}
                        scope="col">
                        {columns[column].name}
                        {renderSortIcon(columns[column].path)}
                        {/* <i
                            className={`bi bi-caret-${
                                selectedSort.order === "asc" ? "up" : "down"
                            }-fill`}></i> */}
                    </th>
                ))}
                {/* <th onClick={() => handleSort("name")} scope="col">
                Имя
            </th>
            <th scope="col">Качества</th>
            <th onClick={() => handleSort("profession.name")} scope="col">
                Профессия
            </th>
            <th onClick={() => handleSort("completedMeetings")} scope="col">
                Встретился, раз
            </th>
            <th onClick={() => handleSort("rate")} scope="col">
                Оценка
            </th>
            <th onClick={() => handleSort("bookmark")} scope="col">
                Избранное
            </th>
            <th /> */}
            </tr>
        </thead>
    );
};

export default TableHeader;
