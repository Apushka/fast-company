import React, { FC } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { handlePageChange } from "../types";

// Типизация props с помощью typescript
interface PaginationPropsTypes {
    itemsCount: number;
    pageSize: number;
    onPageChange: handlePageChange;
    currentPage: number;
}

const Pagination: FC<PaginationPropsTypes> = ({
    itemsCount,
    pageSize,
    onPageChange,
    currentPage
}) => {
    const pageCount: number = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages: number[] = _.range(1, pageCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={"page-item" + (page === currentPage ? " active" : "")}
                        key={`page_${page}`}>
                        <button onClick={() => onPageChange(page)} className="page-link">
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

// Типизация props с помощью prop-types
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
