document.addEventListener("DOMContentLoaded", () => {
    const h = document.querySelector("#hi")
  
      // // 3 秒後換字！
      setTimeout(() => {
          h.innerHTML = "456"
      } , 3000)
  })

  //
  
  document.addEventListener("DOMContentLoaded", () => {
      const btn = document.querySelector("#btn")
  
      btn.addEventListener("click", () => {
          // 換字！
        const h = document.querySelector("#hi")
          h.innerHTML = "456"
      })
  })