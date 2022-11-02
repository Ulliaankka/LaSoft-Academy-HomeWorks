const splittedString = str => {
    
    let arr = str.split(' ')
                 .join('')
                 .split(',');
    let arrWithStr = [];
    let arrWithNumber=[];
    
    arr.forEach(function(arr){
        let elNum = Number(arr);
        
        if (isNaN(elNum)) {
            arrWithStr.push(arr);
        }
        
        else {
            arrWithNumber.push(Number(arr));
        }
    })
    
    let objResult = {
        "Array with words:" : arrWithStr,
        "Array with numbers:" : arrWithNumber
    };
    
    return objResult;
};

console.log(splittedString('Red, Green, Blue, 1, White, 3, 4, 5, 7'));
