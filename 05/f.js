const heroes = [
    { name: "悟空", power: 500 }, 
    { name: "克林", power: 80 }, 
    { name: "達爾", power: 450 }, 
    { name: "18號", power: 700 }
]
  
let r = heroes.reduce((acc,hero) => {
  return acc + hero.power  
}, 0)
              
console.log(r)



  // 計算所有人的戰鬥力總和