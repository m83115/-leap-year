document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn")

  btn.addEventListener("click", () => {
      // 換字！
    const h = document.querySelector("#hi")
      h.innerHTML = "456"
  })
})