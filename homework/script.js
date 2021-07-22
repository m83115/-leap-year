
document.addEventListener("DOMContentLoaded", () => {
  const timer = document.querySelector("#timer")
  const btn = document.querySelector("#start-btn")

  
  btn.addEventListener("click", () => {
    let num = 0
    let i = setInterval(() => {
      timer.innerText = num++
    }, 1000)
  })
})