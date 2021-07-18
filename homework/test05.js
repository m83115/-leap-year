function printStars(n) {
    
    for(let i = 1; i <= n; i++) {        
        let space = ' '.repeat(n - i)     
        let star = '*'.repeat(i)
        console.log(space + star)
    }
}

    //星星2號，1，3，5層作法(1個迴圈)
    printStars(1)
    printStars(3)
    printStars(5)
