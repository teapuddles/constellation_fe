// const modalConstell = document.querySelectorAll(".sidebarConstell")
// const showOne = document.querySelector("#star-detail")

// modalConstell.addEventListener('click', renderOneConstell())

// function renderOneConstell(){
//     showOne.style.display = "block"
//   showOne.innerHTML =
//     `<img src="${constell.image_url}" alt="${constell.name}">
//       <h1>${constell.name}</h1>
//       <h3>Season: ${constell.season.name}</h3>
//        <div class="likes">
//        <span class="likeCount">${constell.likes.length}</span>  Likes
//       </div>
//       <button data-action="like" data-constellation_id="${constell.id}" class="like-btn">Like <3</button></div>
//       </div>
      
//       <p class="description">
//          ${constell.description}
//      </p>`
//   // like button logic/create likes
//   const likeButt = document.querySelector(".like-btn")
//   likeButt.addEventListener('click', () => {

//     const newLike = {
//       constellation_id: constell.id,
//       user_id: localStorage.id
//       // local storage is holding my user id so I can create a like.
//     }

//     fetch( `https://east-side-stargazing-be.herokuapp.com/likes`, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newLike)
//     })
//       .then(r => r.json())
//       .then(constell => renderOneConstell(constell))
//   })

