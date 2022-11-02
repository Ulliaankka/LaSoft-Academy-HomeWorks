//what would be the result of next statements:

[1, 2, 3] + {} // 1,2,3[object Object]

1 + "3" - 2 // 11

1 + ("3" - 2) // 2

NaN === NaN // false

const o = {a:1} 
o + 1 // '[object Object]1'

[1, 2, 3] + 'a' // '1,2,3a'

undefined + 1 // NaN

2/0 // Infinity

0/0 // NaN

const ob = {
  a: 1,
  toString(){
  return this.a
  }
}
ob+1 // 2
