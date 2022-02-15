import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Users() {
  const usersObj = useSelector((state) => state.users);
  const rols = useSelector((state) => state.rols);
  const users = Object.entries(usersObj);

  const admins = [];
  const drivers = [];
  const simpleUsers = [];

  users.map((user) => {
    if (user[1].role === rols.user) {
      simpleUsers.push(<User user={user} />);
    } else if (user[1].rols === rols.yetkazuvchi) {
      drivers.push(<User user={user} />);
    } else if (user[1].rols === rols.admin) {
      admins.push(<User user={user} />);
    }
  });

  return (
    <UsersWrapper className="py-5">
      <h3 className="my-3">Foydalanuvchilar</h3>

      <div className="py-4 px-2">
        <h5>Adminlar</h5>
        <div className="users">{admins}</div>
      </div>
      <div className="py-4 px-2">
        <h5>Yetkazuvchilar</h5>
        <div className="users">{drivers}</div>
      </div>
      <div className="py-4 px-2">
        <h5>Foydalanuvchilar</h5>
        <div className="users">{simpleUsers}</div>
      </div>
    </UsersWrapper>
  );
}

const UsersWrapper = styled.div``;

const User = ({ user }) => {
  const id = user[0];
  const userData = user[1];

  return <p>{userData.fullName}</p>;
};
