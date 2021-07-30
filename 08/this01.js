function hello() {
    console.log("A: ", this);  // A global
  
    function world() {
      console.log("B: ", this);  // B global
  
      const game = {
        name: "Zelda", 
        greeting: function() {
          console.log("C: ", this);  // C game
        }
      }
  
      game.greeting()
    }
  
    world()
  }
  
  hello()
