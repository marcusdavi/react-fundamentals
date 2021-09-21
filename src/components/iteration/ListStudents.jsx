import React from "react";
import students from "../../data/students";

import './ListStudents.css'

export default function ListStudents() {
  return (
    <div>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{index+1}) {student.name} ► {student.score}</li>
        ))}
      </ul>
    </div>
  );
}
