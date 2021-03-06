import { FC } from "react";
import { handleDelete, handleToogleBookMark, IUser } from "../types";
import Bookmark from "./bookmark";
import Quality from "./quality";

interface UserPropsType {
  user: IUser;
  onDeleteUser: handleDelete;
  onBookmarkToggle: handleToogleBookMark;
}

const User: FC<UserPropsType> = ({ user, ...rest }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((quality) => (
          <Quality key={quality._id} {...quality} />
        ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate} /5</td>
      <td>
        <Bookmark
          id={user._id}
          status={user.bookmark}
          onBookmarkToggle={rest.onBookmarkToggle}
        />
      </td>
      <td>
        <button
          onClick={() => rest.onDeleteUser(user._id)}
          className="btn btn-danger"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
