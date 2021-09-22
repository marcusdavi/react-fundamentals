import React, { cloneElement } from "react";

export default function Family(props) {
  return (
    <div>
      {props.children.map((child, i) => {
        return cloneElement(child, {
          ...props,
          key: i,
        });
      })}
    </div>
  );
}
