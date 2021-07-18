function printStars(n) {
  for(let i = 1; i <= n; i++) {
    let x = " ".repeat(n - i)
    let star = "*".repeat(i)
    console.log(x + star)
  }
}

  //星星2號(反向星星)，1，35層作法(1個迴圈)
  printStars(1)
  printStars(3)
  printStars(5)