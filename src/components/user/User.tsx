import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";

const User = () => {
  const { isLoading, user, error } = useSelector((state) => state.user);
  const { getUserById } = useActions();
  return (
    <div>
      <button onClick={() => getUserById(1)}>get user</button>
      {isLoading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : user?.name ? (
        <h1>User: {user.name}</h1>
      ) : (
        <div> user not found</div>
      )}
    </div>
  );
};

export default User;
