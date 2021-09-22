import React from 'react'

export default function DirectPet({name, age, isMale}) {
  return (
    <div>
      {name} is my pet. It have a {age} years old and it's {isMale ? 'Male' : 'Female'}.
    </div>
  )
}
