import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";

const Sidebar = () => {
  const { getUsers, users, setSelectedUser, seletedUsers, IsUsersLoading } =
    useChatStore();
  const onlineUser = [];

  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return <div>Sidebar</div>;
};

export default Sidebar;
