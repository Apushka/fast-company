import { FC } from "react";
import { handleDelete, handleToogleBookMark, IUser } from "../types";
import User from "./user";

interface UsersPropsType {
  users: IUser[];
  onDeleteUser: handleDelete;
  onBookmarkToggle: handleToogleBookMark;
}

const Users: FC<UsersPropsType> = ({ users, ...rest }) => {
  return (
    <>
      {users.length > 0 && (
        <table className="table align-middle">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user._id} user={user} {...rest} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
