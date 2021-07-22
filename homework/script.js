document.addEventListener("DOMContentLoaded", () => {
  const timer = document.querySelector("#timer")
  const btn = document.querySelector("#start-btn")
  btn.addEventListener("click", () => {
    let num = 0
    setInterval(() => {
      timer.innerHTML = num++
    }, 1000)
  })
})