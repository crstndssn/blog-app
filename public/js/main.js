const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

const loginCheck = (user) => {
  if (user) {
    loggedInLinks.forEach((link) => (link.style.display = "block"));
    loggedOutLinks.forEach((link) => (link.style.display = "none"));
  } else {
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    loggedOutLinks.forEach((link) => (link.style.display = "block"));
  }
};


// cambio de estado auth (navigation)
const navigationPublic = document.getElementById('navigationPublic');
const navigationAuth = document.getElementById('navigationAuth');

const userAvatar = document.getElementById('userAvatar');

firebase.auth().onAuthStateChanged((user) => {
  if (user){
    navigationPublic.style.display = 'none';
    navigationAuth.style.display = 'flex';
    if (user.photoURL) {
      userAvatar.setAttribute('src', user.photoURL);
    } else {
      userAvatar.setAttribute('src', 'media/profile-user.png')
    }
  }else{
    navigationPublic.style.display = 'flex'
    navigationAuth.style.display = 'none'
  }
})


// cerrar sesion
// const logoutBtn = document.getElementById('logout');
// logoutBtn.addEventListener('click', (e) => {
//   firebase.auth().signOut().then(()=>{
//     console.log('te has deslogeado')
//   })
// })

// cerrar sesion avatar
userAvatar.addEventListener('click', (e) => {
  firebase.auth().signOut().then(()=>{
    console.log('te has deslogeado')
  })
})


// crear post btn
const addPostBtn = document.getElementById('addPostBtn');
const getPostBtn = document.getElementById('getPostBtn');
const addPostView = document.getElementById('addPostView');
const getPostView =  document.getElementById('getPostView');
const viewContainer = document.getElementById('viewContainer');


window.addEventListener('DOMContentLoaded', (e) => {
  addPostView.style.display = 'none';
  getPostView.style.display = 'flex';
})

addPostBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addPostView.style.display = 'flex';
  getPostView.style.display = 'none';
})

getPostBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addPostView.style.display = 'none';
  getPostView.style.display = 'flex';
})



