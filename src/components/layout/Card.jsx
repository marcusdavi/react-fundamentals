import React from 'react'
import './Card.css'

export default function Card(props) {

  const style = {
    backgroundColor: props.color || '#FF0',
    borderColor: props.color || '#FF0'
  }

  return (
    <div className="Card" style={style}>
      <div className="Title">{props.title}</div>
      <div className="Content">{props.children}</div>
    </div>
  )
}
