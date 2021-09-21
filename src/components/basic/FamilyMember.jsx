import React from "react";

export default function FamilyMember({firstname, lastname}) {
console.log(firstname, lastname)
  return (
    <div>
      {firstname} <strong>{lastname}</strong>
    </div>
  );
}
