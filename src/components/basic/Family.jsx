import React, { cloneElement } from "react";

export default function Family({lastname, children}) {
  console.log(lastname)
  return (
    <div>
      {children.map((child, i) => {
        return cloneElement(child, {
          firstname: child.props.firstname,
          lastname: lastname,
          key: i,
        });
      })}
    </div>
  );
}
