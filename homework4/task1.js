const matrixArr = [
    [1,   2,  3, 4],          
    [12, 13, 14, 5],         
    [11, 16, 15, 6],         
    [10,  9,  8, 7]          
  ];
  
function unravelArr (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {

        newArr = newArr.concat(arr[i].slice(0, arr[0].length - 1));
        for (const item of arr) {
            newArr.push(item[item.length - 1]);
        }

        newArr = newArr.concat(arr[arr.length - 1].slice(0, -1).reverse());
        for(const item of arr.slice(1, -1).reverse()) {
            newArr.push(item[0]);
        }

        for(const item of arr[1].slice(1, -1)) {
            newArr.push(item);
        }

        for(const item of arr[2].slice(1, -1).reverse()) {
            newArr.push(item);
        }

        return newArr;
    }
}
  
console.log(unravelArr(matrixArr)); 
  