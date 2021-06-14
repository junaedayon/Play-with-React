import React from "react";
import Card from "../UI/Card";
import './UserList.css'

function UserList(props) {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => (
          < li key="g1">
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
