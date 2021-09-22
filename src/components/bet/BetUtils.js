function randomNumber(max, min) {
  if (max && min) {
    const numero = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
    return numero;
  } else {
    return null;
  }
}

export function generateBet(min, max, numbers) {
  const bet = [];
  const limit = max - min + 1;

  if (numbers <= limit) {
    while (bet.length <= numbers) {
      const newNumber = randomNumber(max, min);
      if (!bet.includes(newNumber)) {
        bet.push(newNumber);
      }
    }
    return bet.sort((a, b) => a - b);
  } else {
    return Array(6).fill(0);
  }
}

export function formatNumber(number){
  return number >= 10 ? number.toString() : "0"+number.toString();
}
