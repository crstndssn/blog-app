class Post {

    createPost (uid, emailUser, title, description, imagenLink, videoLink) {
        return firebase.firestore()
            .collection('posts')
            .add({
                uid: uid,
                autor: emailUser,
                title: title,
                description: description,
                imagenLink: imagenLink,
                videoLink: videoLink,
                date: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(refDoc => {
                console.log(`Id del post => ${refDoc.id}`);
            })
            .catch(error => {
                console.log(`Error creando el post ${error}`)
            })
    }

    getPosts () {
        firebase.firestore()
            .collection('posts')
            .onSnapshot(querySnapshot => {
                console.log(`los posts: ${querySnapshot}`)
                querySnapshot.forEach(post => {
                    let postHtml = this.getPostTemplate(
                        post.data().autor,
                        post.data().title,
                        post.data().description,
                        post.data().videoLink,
                        // Utility.getDate(post.data().date.toDate())
                        post.data().date
                    )
                    getPostView.innerHTML += postHtml
                })
            })
    }

    getPostTemplate (
        autor,
        title,
        description,
        videoLink,
        date
    ) {
        return `
            <article class="border border-black rounded-lg w-full p-5">
                <h2 class="font-medium text-xl my-1">${title}</h2>
                <p class="font-normal text-gray-400 my-1">por ${autor}</p>
                <iframe class="w-full my-4" src="${videoLink}">
                </iframe>
                <p class="text-lg">${description}</p>
                <p class="font-normal text-gray-400">${date}</p>
            </article>
        `;

    }

    addImagenPost (file, uid) {
        const refStorage = firebase.storage()
    }


}