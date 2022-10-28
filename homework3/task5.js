const fibonacci = n => {
    let num1 = 0, 
      num2 = 1, 
      num3 = n;
    
    for(let i = 2; i <= n; i++) {
      num3 = num1 + num2;
      num1 = num2;
      num2 = num3;
    }
    
    return num3;
  };
  console.log(fibonacci(10));