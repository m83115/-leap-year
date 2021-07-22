// 印出大於 4 的數字的平方和
const lists = [4, 2, 1, 4, 6, 8, 7]


let r = lists.filter(n => n > 4)
             .map(n => n * n)
             .reduce((acc,v) => acc + v , 0)
console.log(r)