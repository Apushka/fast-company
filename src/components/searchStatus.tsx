import { FC } from "react";

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
      <span
        className={"badge " + (usersAmount > 0 ? "bg-primary" : "bg-danger")}
      >
        {usersAmount > 0
          ? `${usersAmount + " " + renderPhrase(usersAmount)} с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
    </h2>
  );
};

export default SearchStatus;
