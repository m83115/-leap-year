const lists = [4, 2, 1, 4, 6, 8, 7]

// map => 對每個元素做某件事情 -> 收集成新的陣列

function double (n) {
    return n * 2
}

const triple = (n) => n * 3 

// let result = lists.map(double)
let result = lists.map((x) => x * 2)

console.log(result)
// console.log(ists.map((x) => x * 2))



// for (let i = 0; i < lists.length; i++) {
//     lists[i] = lists[i] * 2    
// }
// console.log(lists)

// 印出 [8, 4, 2, 8, 12, 16, 14]