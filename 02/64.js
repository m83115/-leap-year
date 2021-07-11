// 不能印出6和4
for (var i = 1; i < 10; i++){
    if (i == 4 || i == 6 ){
      continue    
    }
    console.log(i)
}

// 不能印出6和4
for (var i = 1; i < 10; i++){
    if (i != 4 && i != 6 ){
      console.log(i)
    }
}  