import React from "react";

export default function Random({ min, max }) {
  const numero = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
  
  return <div>{`Random number between ${min} e ${max} -> ${numero}`}</div>;
}
