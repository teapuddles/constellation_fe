const modal = document.querySelector("#modal")
const newUserForm = document.querySelector('.new-user-form')
const updateUserForm = document.querySelector('.update-user-form')

document.querySelector("#login").addEventListener("click", (e) => {
  modal.style.display = "block"
  if(e && localStorage.username){
    newUserForm.style.display = 'none';
  } else {
    updateUserForm.style.display = 'none';
  }
})
// Hide the form
window.addEventListener("click", e => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
    // login if not logged in/change username if logged in. 
// const changeModal = (e) =>{
//   console.log(e)
//   if(e && localStorage.username){
//     newUserForm.style.display = 'none';
//   } else {
//     updateUserForm.style.display = 'none';
//   }
// }

// window.addEventListener('onLoad', changeModal(e))
})



