import React, { useState } from "react";
import IndirectPet from "./IndirectPet";

export default function IndirectFather() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isAdult, setIsAdult] = useState(true);

  const setInformations = (name, age, isAdult) => {
    setName(name);
    setAge(age);
    setIsAdult(isAdult);
  };

  return (
    <>
      <div>
        <span>{name}, {age} years old. It {isAdult ? "is Adult" : "is Pup"}.</span>
      </div>
      <div>
        <IndirectPet handleClick={setInformations}/>
      </div>
    </>
  );
}
