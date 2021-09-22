import React from 'react'

export default function IndirectPet({handleClick}) {

  const onButtonClick = () => {
    if(handleClick) {
      const age = parseInt(Math.floor(Math.random() * 16));
      const isAdult = age > 2;

      return handleClick('Thor', age, isAdult);
    }
  }

  return (
    <>
      <button onClick={onButtonClick}>Set Informations</button>
    </>
  )
}
