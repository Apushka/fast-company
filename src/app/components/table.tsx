import React, { FC } from "react";
import { handleSort, IColumns, ISortObj, IUser } from "../types";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

interface TablePropsType {
    onSort: handleSort;
    selectedSort: ISortObj;
    columns: IColumns;
    data: IUser[];
}

const Table: FC<React.PropsWithChildren<TablePropsType>> = ({
    onSort,
    selectedSort,
    columns,
    data,
    children
}) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader {...{ onSort, selectedSort, columns }} />
                    <TableBody {...{ columns, data }} />
                </>
            )}
        </table>
    );
};

export default Table;
