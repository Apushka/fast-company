import { FC } from "react";

interface BookmarkPropsType {
  id: string;
  status: boolean;
  onBookmarkToggle: (id: string) => void;
}

const Bookmark: FC<BookmarkPropsType> = ({ id, status, onBookmarkToggle }) => {
  return (
    <span
      className=" border border-dark p-1 bg-light"
      onClick={() => onBookmarkToggle(id)}
    >
      <i className={`bi bi-bookmark${status ? "-fill" : ""}`}></i>
    </span>
  );
};

export default Bookmark;
