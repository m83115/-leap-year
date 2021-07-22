const lists = [4, 2, 1, 4, 6, 8, 7]

function overnum3(n) {
  if (n > 3) {
      return n * 3
  }else {
      return n
  }
}
console.log(lists.map(overnum3))

// 把大於 3 的數字乘以 3 倍
// [12, 2, 1, 12, 18, 24, 21]
// 使用 HOF