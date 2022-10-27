const getRandomArr = (arr, n) => {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(arr[Math.floor(Math.random()*arr.length)]);
    }
    return result;
}
console.log(getRandomArr([12, 34, 23, 56], 2));
console.log(getRandomArr([12, 34, 23, 56], 3));



