function printStars(n) {
  let star = ''
  for (let i = 0; i < n ; i++) {
    star = star + '*'
    console.log(star)
  }
}
  //星星1-6層作法(1個迴圈)
  printStars(6)



     //星星1-6層作法(1個迴圈)龍哥簡單寫法!
// function printStars(n) {
//   for (let i = 1; i <= n; i++) {
//     let stars = '*'.repeat(i)
//     console.log(stars)
//   }
// }
//   printStars(6)