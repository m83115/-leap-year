function printStars(n) {
  
  for (let i = 1; i <= n; i++) {
    let x = ''      
    for (let j = 0; j < i; j++) {
        x += '*'
    }
    console.log(x)     
  }
    
}
  //星星1-6層作法(2個迴圈)
  printStars(6)