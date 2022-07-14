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
      {status ? (
        <i className="bi bi-bookmark-fill"></i>
      ) : (
        <i className="bi bi-bookmark"></i>
      )}
    </span>
  );
};

export default Bookmark;
