import React from "react";

const UserCard = ({ id, username, age }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{age}</td>
    </tr>
  );
};

export default UserCard;
