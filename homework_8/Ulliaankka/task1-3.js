let range = {
    from: 1,
    to: 10,
  };
  
  range[Symbol.iterator] = function () {
      return {
          current: this.from,
          last: this.to,
          next() {
              if (this.current <= this.last){
                  return {done: false, value: this.current++}
              } else {
                  return {done: true}
              }
          } 
      }
  }
  for (let num of range) {
      console.log(num);
  }
  let arr = Array.from(range);
  
  //task 2
  let odd = arr.filter(num => num % 2);
  console.log(odd); 
  
  
  //task 3
  const even = [];
  arr.forEach(number => {
    if (number % 2 === 0) {
      even.push(number);
    }
  });
  console.log(even);