document.addEventListener("DOMContentLoaded", () => {

  const btn = document.querySelector("#btn")

  btn.addEventListener("click", () => {
    // console.log('被按了')
    //換字
    const h = document.querySelector("#hi")
      h.innerHTML = "456"
  })
})

// document.addEventListener("DOMContentLoaded", () => {
//   const h = document.querySelector("#hi")
//   setTimeout(() => {
//     h.innerHTML = "456"
//   }, 3000)   
// })

//3秒後換字