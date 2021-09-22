import React, {useState} from 'react'

export default function Input() {

  const [name, setName] = useState('Marcus')

  function changeValue({target}){
    setName(target.value);
  }

  return (
    <div>
      <input onChange={changeValue} type="text" value={name}/>
    </div>
  )
}
