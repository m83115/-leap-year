const heroes = [
    { name: "悟空", power: 500 }, 
    { name: "克林", power: 80 }, 
    { name: "達爾", power: 450 }, 
    { name: "18號", power: 700 }
]
//找出最高戰鬥力數值 700

let top = 0

// heroes.forEach((hero))


for (let i = 0; i < heroes.length; i++){
  if(heroes[i].power > top) {
    top = heroes[i].power
  }
}
console.log(top)