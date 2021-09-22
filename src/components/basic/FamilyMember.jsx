import React from "react";

export default function FamilyMember({firstname, lastname}) {
  return (
    <div>
      {firstname} <strong>{lastname}</strong>
    </div>
  );
}
