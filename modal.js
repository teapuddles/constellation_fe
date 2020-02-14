const modal = document.querySelector("#modal")
document.querySelector("#login").addEventListener("click", () => {
  modal.style.display = "block"
})
// Hide the form
window.addEventListener("click", e => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
})


