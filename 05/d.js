//把所有元素累加 => 32
const lists = [4, 2, 1, 4, 6, 8, 7]


let r = lists.reduce((acc, currentValue) => {
  console.log("acc =", acc, "cv = ",currentValue);
  return acc + currentValue
}, 0)