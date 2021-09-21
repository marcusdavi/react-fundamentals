import React from "react";

export default function EvenOrOdd({ number }) {
  const isEven = number % 2 === 0;
  const content = isEven
    ? `The number ${number} is Even.`
    : `The number ${number} is Odd.`;
    
  return <div>{content}</div>;
}
