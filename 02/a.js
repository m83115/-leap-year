let items = ["a", 7 , "c", "d"]
console.log(items[0]) //索引
console.log(items.length) //陣列個數


items[0] = "x" //會改第一個"a"的值
items[0] = "y" //會改第一個"7"的值
console.log(items)


items.push("尾巴") //陣列加元素到尾巴
items.unshift("頭") //陣列加元素到頭
console.log(items)

