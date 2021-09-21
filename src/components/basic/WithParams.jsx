import React from 'react'

export default function WithParams(props) {
const status = props.score >= 7.0 ? 'aproved' : 'reproved'

  return (
    <div>
      <h3>Student Situation</h3>
      <p>{`${props.name} had score ${props.score} and was ${status}.`}</p>
    </div>
  )
}
