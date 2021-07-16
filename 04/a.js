// lexical scope (詞彙範圈)
// 會選there!
var x = "there"

function a() {
  console.log(x)
}

function b() {
  var x = "here"
  a()
}

b()