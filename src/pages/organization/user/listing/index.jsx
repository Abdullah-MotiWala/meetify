import React from "react";
import "./style.css";
import { USERS } from "../../../../lib/constants/dummyData";
import UserCard from "../../../../components/userCard";

export default function UserListingPage() {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>

      <tbody>
        {USERS.map((user) => {
          const { id, username, age } = user;
          return <UserCard id={id} username={username} age={age} />;
        })}
      </tbody>
    </table>
  );
}
