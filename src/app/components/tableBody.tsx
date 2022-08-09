import React, { FC, ReactNode } from "react";
import _ from "lodash";
import { IColumns, IUser } from "../types";

interface TableBodyPropsType {
    data: IUser[];
    columns: IColumns;
}

const TableBody: FC<TableBodyPropsType> = ({ data, columns }) => {
    const renderContent = (item: IUser, column: string): ReactNode | string | undefined => {
        if (columns[column].component) {
            // @ts-ignore
            const component: ((item: IUser) => ReactNode) | string = columns[column].component;
            if (typeof component === "function") {
                return component(item);
            }
            return component;
        }
        return getCellContent(item, columns[column].path);
    };

    const getCellContent = (item: IUser, path: string | undefined): string | undefined => {
        if (typeof path === "string") return _.get(item, path);
    };

    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column) => {
                        return <td key={column}>{renderContent(item, column)}</td>;
                    })}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
