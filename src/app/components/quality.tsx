import React, { FC } from "react";
import { IQuality } from "../types";
import PropTypes from "prop-types";

const Quality: FC<IQuality> = ({ color, name }) => {
    return <span className={"badge m-1 bg-" + color}>{name}</span>;
};

// prop-types
Quality.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Quality;
