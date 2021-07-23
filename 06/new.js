// 建構函數
function Hero(name, action) {
    // new 做的事情
    // 1. 建立一個空物件
    // 2. 把 this -> {}
    // 3. 把 this.__proto__ -> Hero.prototype ( 預設值: { } )
    // 4. 自動 return this
    this.name = name
    this.action = action
  }
  
  // 1. 所有物件 __proto__ 屬性
  // 2. 所有的 function 都有 prototype 屬性
  // 2.a    預設的 prototype = {   }
  
  Hero.prototype.attack = function() {
    console.log("attack");
  }
  
  Hero.prototype.greeting = function() {
    console.log("hello");
  }
  
  const h = Hero("悟空", "龜派氣功")
  console.log(h);