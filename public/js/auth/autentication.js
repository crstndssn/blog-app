class Autentication {

    // Create User
    signUpEmailPassword(name, email, password) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {

                console.log('loged')
                result.user.updateProfile({
                    displayName: name
                })

                // AUTENTIFICACION CORREO
                // const configuration = {
                //     url: 'https://blog-app-714d1.firebaseapp.com/'
                // }

                // result.user.sendEmailVerification(configuration)
                // .catch(error => {
                //     console.error(error + 'eeeerrrroooo');
                // })

                // firebase.auth().signOut();

                // console.log('Hola, debes verificar tu correo')

            })
            .catch(error => {
                console.log(error)
            })
    };

    // Signup Google
    signUpGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }


    // Login User
    authEmailPassword(email, password) {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    };


    // Login Google
    authGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

}

