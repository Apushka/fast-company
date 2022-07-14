import { FC, useState } from "react";
import Users from "./components/users";
import { IUser } from "./types";
import api from "./api";

const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>(api.users.fetchAll());

  const handleDelete = (userId: string): void => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookMark = (id: string): void => {
    setUsers(
      users.map((user) => {
        if (user._id === id) user.bookmark = !user.bookmark;
        return user;
      })
    );
  };

  return (
    <Users
      users={users}
      onDeleteUser={handleDelete}
      onBookmarkToggle={handleToggleBookMark}
    />
  );
};

export default App;
