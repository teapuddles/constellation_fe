// document.addEventListener('DOMContentLoaded', () => {

let winterArr = []
let springArr = []
let summerArr = []
let autumnArr = []
let allArr = []

// fetch all constellations
fetch(`https://east-side-stargazing-be.herokuapp.com/constellations`)
  .then(r => r.json())
  .then(constell => {
    winterArr = constell.filter(constell => constell.season_id === 1)
    springArr = constell.filter(constell => constell.season_id === 2)
    summerArr = constell.filter(constell => constell.season_id === 3)
    autumnArr = constell.filter(constell => constell.season_id === 4)
    allArr = constell
    renderConstells(constell)
  })


// render all constellations
function renderConstells(constell) {
  constell.forEach(renderConstell)
}

// render constellations to sidebar
function renderConstell(constell) {
  const sidebar = document.querySelector("#constellation-container")
  const sidebarLi = document.createElement("li")
  constell.name
  sidebarLi.className = "sidebarConstell"
  sidebarLi.innerText = constell.name
  // sidebarLi.innerHTML = `<span>${constell.name}</span>
  // <button data-action="delete" class="d-btn">X</button>
  // `
  // sort my constellations into seasons for the filter

  sidebar.append(sidebarLi)
  // const dButt = sidebarLi.querySelector(".d-btn")
  // console.log(dButt)
  sidebarLi.addEventListener('click', () => renderOneConstell(constell))
  // dButt.addEventListener('click', () => deleteConstell(sidebarLi, constell))

}
// render one constellations to main section
function renderOneConstell(constell) {
  const showOne = document.querySelector("#star-detail")

  showOne.innerHTML =
    `<img src="${constell.image_url}" alt="${constell.name}">
      <h1>${constell.name}</h1>
      <h3>Season: ${constell.season.name}</h3>
       <div class="likes">
       <span class="likeCount">${constell.likes.length}</span>  Likes
      </div>
      <button data-action="like" data-constellation_id="${constell.id}" class="like-btn">Like <3</button></div>
      </div>
      
      <p class="description">
         ${constell.description}
     </p>`
  // like button logic/create likes
  const likeButt = document.querySelector(".like-btn")
  likeButt.addEventListener('click', () => {

    const newLike = {
      constellation_id: constell.id,
      user_id: localStorage.id
      // local storage is holding my user id so I can create a like.
    }

    fetch( `https://east-side-stargazing-be.herokuapp.com/likes`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newLike)
    })
      .then(r => r.json())
      .then(constell => renderOneConstell(constell))
  })
  // const h1 = showOne.querySelector("h1")
  // h1.addEventListener('click', () => reverseFunction(constell))

  // function reverseFunction(constell) {
  //  const constellName = {
  //     name: constell.name 
  //   }

  //   fetch('localhost:3000/constellations/${constell.id}/reverse', {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(constellName)
  //   })
  //   .then(r => r.json())
  //   .then(revName => {
  //     h1.innerText = revName
  //   })
  // }

}


// creating/handling users
const userForm = document.querySelector("#new-user-form")
userForm.addEventListener('submit', (e) => handleUserInfo(e))

function handleUserInfo(e) {
  e.preventDefault()
  const userName = e.target["name"].value
  localStorage.username = userName

  const newUserInfo = {
    username: userName
  }
  fetch('https://east-side-stargazing-be.herokuapp.com/users', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUserInfo),
  })
    .then(r => r.json())
    .then(user => {
      localStorage.id = user.id
      // here is where local storage stores the user id
    })
  
}


//  update user
const updateForm = document.querySelector("#update-user-form")
updateForm.addEventListener('submit', (e) => handleNewUser(e))

function handleNewUser(e) {
  e.preventDefault()
  const newName = e.target["new-name"].value
  localStorage.username = newName

  const updatedUser = {
    username: newName
  }

  fetch(`https://east-side-stargazing-be.herokuapp.com/users/${localStorage.id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(updatedUser)
  })
}

// filter buttons
const sidebar = document.querySelector("#constellation-container")
const winterButt = document.querySelector('#winter')
const springButt = document.querySelector('#spring')
const summerButt = document.querySelector('#summer')
const autumnButt = document.querySelector('#autumn')
const allButts = document.querySelector('#all-seasons')

winterButt.addEventListener('click', () => {
  sidebar.innerHTML = ""
  renderConstells(winterArr)
})
springButt.addEventListener('click', () => {
  sidebar.innerHTML = ""
  renderConstells(springArr)
})
summerButt.addEventListener('click', () => {
  sidebar.innerHTML = ""
  renderConstells(summerArr)
})
autumnButt.addEventListener('click', () => {
  sidebar.innerHTML = ""
  renderConstells(autumnArr)
})
allButts.addEventListener('click', () => {
  sidebar.innerHTML = ""
  renderConstells(allArr)
})

// Update NavBar
// use navLogin from modal.js
window.addEventListener('load', () => {
  navLoginName()
})

function navLoginName(){
  if(localStorage.username){
    navLogin.innerText = `Hello, ${localStorage.username}`
  }
}

// array of names
// const names = [ "Ian", "Mazen", "Gracie" ]
// names.forEach(createArrUsers)

// function createArrUsers(user) {
//   console.log(user)
//   const sidebar = document.querySelector("#constellation-container")
//   sidebar.innerHTML += `
//   </div>
//   <button data-action="name" class="user-btn">${user}</button></div>
//   </div>
//   `
//   const userButt = document.querySelector(".user-btn")
//   console.log(userButt)
// }
// eventlistener('click', () => addButtonUser(user))

// function addButtonUser(user){

// }

// create a button for each name
// x = when button is clicked
// y = create a user with that name. 
// z = save to local storage.

// function deleteConstell(sidebarLi, constell) {
  // remove the list
  // -list element 
//   sidebarLi.remove()
//   console.log(sidebarLi)

//   allArr = allArr.filter(c => c.id !== constell.id)
//   if (constell.season === "Winter") {
//     winterArr = winterArr.filter(c => c.id !== constell.id)
//   }

//   fetch(`http://localhost:3000/constellations/${constell.id}`, {
//     method: 'DELETE',
//   })
//     .then(r => r.json())
//     .then(constell => console.log(constell))
// }





// })
