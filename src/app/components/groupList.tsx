import React from "react";
import PropTypes from "prop-types";
import { IProfession, IProfessions } from "../types";
import _ from "lodash";
import { professionType } from "../propTypes";

interface GroupListPropsTypes {
    items: IProfessions | IProfession[]; // здесь через | (или) будут добавляться типы для других items
    onItemSelect: (item: IProfession) => void; // здесь для item будут добавляться типы через | (или)
    selectedItem: IProfession | undefined; // здесь через | (или) будут добавляться типы для других selectedItem
}

const defaultProps = {
    valueProperty: "_id" as const,
    contentProperty: "name" as const
};

// слияние собственных props и defaultProps не работают с FC<>
const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}: GroupListPropsTypes & typeof defaultProps) => {
    const renderItems = () => {
        if (_.isArray(items)) {
            return items.map((item) => (
                <li
                    key={item[valueProperty]}
                    className={`list-group-item ${item === selectedItem ? "active" : ""}`}
                    onClick={() => onItemSelect(item)}
                    role="button">
                    {item[contentProperty]}
                </li>
            ));
        } else {
            return Object.keys(items).map((item) => (
                <li
                    key={items[item][valueProperty]}
                    className={`list-group-item ${items[item] === selectedItem ? "active" : ""}`}
                    onClick={() => onItemSelect(items[item])}
                    role="button">
                    {items[item][contentProperty]}
                </li>
            ));
        }
    };

    return <ul className="list-group">{renderItems()}</ul>;
};

GroupList.defaultProps = defaultProps;

// prop-types
GroupList.propTypes = {
    items: PropTypes.oneOfType([
        PropTypes.objectOf(
            PropTypes.shape({
                doctor: professionType,
                waiter: professionType,
                physics: professionType,
                engineer: professionType,
                actor: professionType,
                cook: professionType
            })
        ),
        PropTypes.arrayOf(professionType)
    ]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
