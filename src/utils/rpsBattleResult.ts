const getBattleResult=(p1:string, p2:string,p1Name:string,p2Name:string) => {
    if (p1 === p2) {
      return "TIE"
    } else if (p1 === "ROCK") {
      if (p2 === "SCISSORS") {
        return `${p1Name} win`
      }
      else {
        return "p2 win"
      }
    } else if (p1 === "PAPER") {
      if (p2 === "ROCK") {
        return `${p1Name} win`
      }
      else {
        return `${p2Name} win`
      }
    } else {
      if (p2 === "PAPER") {
        return `${p1Name} win`
      }
      else {
        return `${p2Name} win`
      }
    }
  }

  export {getBattleResult}