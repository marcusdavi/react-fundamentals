import React, { useState } from "react";
import { formatNumber, generateBet } from "./BetUtils";
import "./Bet.css";

export default function Bet(props) {
  const title = props.title || "Megasena";
  const numbers = props.numbers || 6;
  const min = props.min || 1;
  const max = props.max || 60;
  const initialNumbersBet = Array(numbers).fill(0);
  const [numbersBet, setNumbersBet] = useState(initialNumbersBet);

  function newBet() {
    setNumbersBet(generateBet(min, max, numbers));
  }

  return (
    <>
      <h3>{title}</h3>
      <button id="BetButton" onClick={newBet}>New Bet</button>
      <div className="Bet">
        <ul>
          {numbersBet.map((number, i) => (
            <li key={i}>{formatNumber(number)}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
