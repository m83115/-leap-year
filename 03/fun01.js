// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

//還原function
//console.log會跑出大括號! {}

for (var i = 0; i < 3; i++) {
  setTimeout (function() {console.log(i)
  }, 1);
}