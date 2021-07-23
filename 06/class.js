class 靈長類 {
    squash() {
      console.log("!!!!");
    }
  }
  
  // is-a
  class 黑猩猩 extends 靈長類 {
  }
  
  class 人 extends 靈長類 {
    squash() {
      console.log("ZZZZZ");
    }
  }
  
  me = new 人()
  me.squash()
  
  you = new 黑猩猩()
  you.squash()


  //class有3個!
  //me和you是實體!