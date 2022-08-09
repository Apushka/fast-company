import React, { FC } from "react";
import { IQuality } from "../types";
import Quality from "./quality";

interface QualitiesListPropTypes {
    qualities: IQuality[];
}

const QualitiesList: FC<QualitiesListPropTypes> = ({ qualities }) => {
    return (
        <>
            {qualities.map((quality) => (
                <Quality key={quality._id} {...quality} />
            ))}
        </>
    );
};

export default QualitiesList;
