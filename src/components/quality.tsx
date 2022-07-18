import { FC } from "react";
import { IQuality } from "../types";

const Quality: FC<IQuality> = ({ color, name, _id }) => {
  return <span className={"badge m-1 bg-" + color}>{name}</span>;
};

export default Quality;
