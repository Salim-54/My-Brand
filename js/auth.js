


const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, password).then( cred => {
        console.log(cred);
        const popup = document.querySelector('.popup');
        popup.style.display = 'none'; 
        signupForm.reset();
    })

    .catch(error => {
        // const errorCode = error.code;
        const errorMessage = error?.message;
        alert(errorMessage || "An error occurred");
    });

});

auth.signOut().then(() =>{
        console.log('User is Out!')
    })
    
    
let loginForm = document.querySelector('#login-form');
    
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    
    
    auth.signInWithEmailAndPassword(email,password).then( cred=> {
        console.log(cred);
        const popup = document.querySelector('.popup');
        popup.style.display = 'none'; 
        loginForm.reset();
        window.location.href = "/views/blogs.html";

    }).catch(error => {
        // const 
        // const errorMessage = error?.message;
        alert("user can't be found");
    });
});


// function addUser(){
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const username = document.getElementById('username').value;
//     authentication.createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//        alert("User created successfully")
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert("Error: "+errorMessage)
//     });
// }
// function loginUser(){
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   authentication.signInWithEmailAndPassword(email,password).then(userCredential => {
//     const user = userCredential.user;
//     localStorage.setItem('user',JSON.stringify(user))
//     window.location.href = "../admin/add.html";
// })
// .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error?.message;
//     alert(errorMessage || "An error occurred");
// });
// }