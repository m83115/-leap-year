// 攝氏 c = 5/9 x (華氏溫度 - 32)
// 華氏 f = (攝氏) x (9/5) + 32


// function c2f(t) {
//     return (t * (9 / 5) + 32)
//   }
      
//     // 85度c -> ??f
    
//     console.log(c2f(85))

//改寫箭頭函式

const c2f = (t) => {
  return (t * (9 / 5) + 32)
}
console.log(c2f(85))