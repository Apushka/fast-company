import React, { FC } from "react";
import PropTypes from "prop-types";
import { BookmarkPropsType } from "../types";

const Bookmark: FC<BookmarkPropsType> = ({ id, status, onBookmarkToggle }) => {
    return (
        <span className=" border border-dark p-1 bg-light" onClick={() => onBookmarkToggle(id)}>
            <i className={`bi bi-bookmark${status ? "-fill" : ""}`}></i>
        </span>
    );
};

// prop-types
Bookmark.propTypes = {
    id: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    onBookmarkToggle: PropTypes.func.isRequired
};

export default Bookmark;
