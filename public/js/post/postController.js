// create post
const post = new Post();

const createPostForm = document.getElementById('createPostForm');
createPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = firebase.auth().currentUser

    if(user == null){
        console.log('debes tener permisos para crear el post')
    }
    const title = createPostForm['titlePostForm'].value;
    const description = createPostForm['descriptionPostForm'].value;
    const videoLink = createPostForm['linkVideoPostForm'].value;
    const imagenLink = sessionStorage.getItem('imgNewPost') == 'null'
        ? null
        : sessionStorage.getItem('imgNewPost')

    console.log(title, description, videoLink);

    post.createPost (
        user.uid,
        user.email,
        title,
        description,
        imagenLink,
        videoLink
    )
    .then(resp => {
        console.log('post creado')
    })
    .catch(err => {
        console.log(err)
    })
    
})

const inputImageBtn = document.getElementById('input-image')
    inputImageBtn.addEventListener('change', (e) => {
        e.preventDefault();
        const file = e.target.files[0]
        const user = firebase.auth().currentUser
        const post = new Post()
        post.addImagenPost(file, user.uid)
    })
    

window.addEventListener('DOMContentLoaded', (e) => {
    const post = new Post();
    post.getPosts();
})
