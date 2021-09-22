import React from "react";
import DirectPet from "./DirectPet";

export default function DirectFather() {
  return (
    <div>
      <DirectPet name="Thor" age={4} isMale={true} />
      <DirectPet name="Nina" age={8} isMale={false} />
    </div>
  );
}
