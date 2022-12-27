const getBattleResult=(p1:string, p2:string) => {
    if (p1 === p2) {
      return "TIE"
    } else if (p1 === "ROCK") {
      if (p2 === "SCISSORS") {
        return "p1 wins"
      }
      else {
        return "p2 wins"
      }
    } else if (p1 === "PAPER") {
      if (p2 === "ROCK") {
        return "p1 wins"
      }
      else {
        return "p2 wins"
      }
    } else {
      if (p2 === "PAPER") {
        return "p1 wins"
      }
      else {
        return "p2 wins"
      }
    }
  }

  export {getBattleResult}