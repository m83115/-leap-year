//把所有元素累加 => 32
const lists = [4, 2, 1, 4, 6, 8, 7]

// let x = 0
// for(let i = 0; i <= lists.length; i++) {
//  x = x + lists[i]
// }
// console.log(x)

let total = 0
lists.forEach((x) => {
  total += x
})
console.log(total)


