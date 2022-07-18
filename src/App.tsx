import { FC, useState } from "react";
import Users from "./components/users";
import { handleDelete, handleToogleBookMark, IUser } from "./types";
import api from "./api";
import SearchStatus from "./components/searchStatus";

const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>(api.users.fetchAll());

  const handleDelete: handleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  const handleToggleBookMark: handleToogleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) user.bookmark = !user.bookmark;
        return user;
      })
    );
  };

  return (
    <>
      <SearchStatus usersAmount={users.length} />

      <Users
        users={users}
        onDeleteUser={handleDelete}
        onBookmarkToggle={handleToggleBookMark}
      />
    </>
  );
};

export default App;
