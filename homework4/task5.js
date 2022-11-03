function specialReverse(string, letter) {
    let arr = string.split(' ').map(item => {
        if (item[0] === letter) {
            return item.split('').reverse().join('');
        }
        return item;
    });
    return arr.join(' ');
  } 
console.log(specialReverse("word searches are super fun", "s")) //"word sehcraes are repus fun"
console.log(specialReverse("first man to walk on the moon", "m")) //"first nam to walk on the noom"
  