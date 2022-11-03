const scores = {
    "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
    "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
    "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
    "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23
  }
  
  function getNameScore (name) {
      let sumScores = name.split('').reduce((accumulator, item) => {
        return accumulator += scores[item.toUpperCase()]; 
      }, 0);

      if (sumScores <= 60) { return `Your score is ${sumScores}, which is NOT TOO GOOD`;}
      else if (sumScores >= 61 && sumScores <= 300) {return `Your score is ${sumScores}, which is PRETTY GOOD`;}
      else if (sumScores >= 301 && sumScores <= 599) {return `Your score is ${sumScores}, which is VERY GOOD`;}
      else if (sumScores >= 600) {return `Your score is ${sumScores}, which is THE BEST`;}   
  }
      
  
  console.log(getNameScore('Uliana'));
  console.log(getNameScore('robot')); 
  console.log(getNameScore('man'));



