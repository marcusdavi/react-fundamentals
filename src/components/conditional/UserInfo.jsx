import React from "react";
import If, { Else } from "./If";

export default function UserInfo({ user }) {
  return (
    <div>
      <If test={user && user.name}>
        Welcome <strong>{user.name}.</strong>
        <Else>
          Welcome <strong>Guest.</strong>
        </Else>
      </If>
    </div>
  );
}
