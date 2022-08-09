import React, { FC } from "react";
import PropTypes from "prop-types";

// typescript
interface SearchStatusPropsType {
    usersAmount: number;
}

const SearchStatus: FC<SearchStatusPropsType> = ({ usersAmount }) => {
    const renderPhrase = (amount: number): string => {
        const lastOne: number = Number(amount.toString().slice(-1));
        if (amount > 4 && amount < 15) return "человек тусанёт";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
        if (lastOne === 1) return "человек тусанёт";
        return "человек тусанёт";
    };

    return (
        <h2>
            <span className={"badge bg-" + (usersAmount > 0 ? "primary" : "danger")}>
                {usersAmount > 0
                    ? `${usersAmount + " " + renderPhrase(usersAmount)} с тобой сегодня`
                    : "Никто с тобой не тусанет"}
            </span>
        </h2>
    );
};

// prop-types
SearchStatus.propTypes = {
    usersAmount: PropTypes.number.isRequired
};

export default SearchStatus;
