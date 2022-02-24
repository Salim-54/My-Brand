


const signupForm = document.querySelector('#signup-form');


auth.onAuthStateChanged(user=> {
    if (user){
        console.log('user in', user);
    } else {
        console.log(user, 'user out')
    }
});


let loginForm = document.querySelector('#login-form');
    
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    
    
    auth.signInWithEmailAndPassword(email,password).then( cred=> {
        // console.log(cred);
        // const popup = document.querySelector('.popup');
        // popup.style.display = 'none'; 
        loginForm.reset();
        window.location.href = "/views/blogs.html";

    }).catch(error => {
        // const 
        // const errorMessage = error?.message;
        alert("user can't be found");
    });
});
const logout = document.querySelector('.admin__nav-logout');

logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut()
    .then(() => {
        window.location.href = "/index.html";
    })
})


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, password).then( cred => {
        console.log(cred);
        // const popup = document.querySelector('.popup');
        // popup.style.display = 'none'; 
        signupForm.reset();
        logIn.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
        auth.signOut().then(() =>{
                console.log('User is Out!')
            })
            
    })

    .catch(error => {
        // const errorCode = error.code;
        const errorMessage = error?.message;
        alert(errorMessage || "An error occurred");
    });

});
