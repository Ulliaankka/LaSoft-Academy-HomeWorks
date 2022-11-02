const getRandomArr = (arr, num = 1) => {
    
    const result = [];
    
    for (let i = 0; i < num;) {
       const randomDigit = Math.floor(Math.random() * arr.length);
       if (result.indexOf(arr[randomDigit]) !== -1){
          continue;
       };
       result.push(arr[randomDigit]);
       i++;
    };
    
    return result;
 };
 
 console.log(getRandomArr([12, 34, 23, 56], 2));
 console.log(getRandomArr([12, 34, 23, 56], 3));
 
 
 