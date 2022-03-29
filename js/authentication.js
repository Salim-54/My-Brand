const msg = document.getElementById('alert');
const loader = document.getElementById("loader-container");
const alertMessage = document.getElementById("alert-msg");


async function loginUser() {
	const email = document.getElementById("login-email").value;
	const password = document.getElementById("login-password").value;
	try {
        loader.style.display = "flex";
		const SignIn = await fetch("https://atlp-mybrand-backend.herokuapp.com/api/v1/" + "users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		}).then((res) => res.json())
        .then((response) => {
			if (response.status === "success") {
                loader.style.display = "none";

                msg.style.display = "flex";
                setTimeout(function () {
                    msg.style.display = "none"},5000);
                alertMessage.innerHTML = `&nbsp;&nbsp; Welcome ${email}!`;

                localStorage.setItem("token", response.token);
                localStorage.setItem("role",response.data.role);
                localStorage.setItem("name",response.data.name);
                localStorage.setItem("email",response.data.email);

                console.log(response.token)
                setTimeout(()=>{
                    location.href = "../views/blogs.html";
                }, 2000)
            } else {
                loader.style.display = "none";
                msg.style.display = "flex";
                setTimeout(function () {
                    msg.style.display = "none"},3000);
                alertMessage.innerHTML = "&nbsp;&nbsp; Error ocurred!!"
    
            }
		})
        response = await SignIn.json();
        console.log(response);

	} catch (error) {
        msg.style.display = "flex";
        setTimeout(function () {
            msg.style.display = "none"},3000);
        // alertMessage.innerHTML = "&nbsp;&nbsp; Erroryyy ocurred!!"
        console.log(error);
	}
}


async function signUpUser() {
	const email = document.getElementById("signup-email").value;
	const password = document.getElementById("signup-password").value;
	const username = document.getElementById("signup-name").value;

	try {

        loader.style.display = "flex";
		const SignUp = await fetch("https://atlp-mybrand-backend.herokuapp.com/api/v1/" + "users/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: username,
				email: email,
				password: password,
			}),
		});
		response = await SignUp.json();
		if (SignUp.status == 201 && response.token) {
                loader.style.display = "none";

                msg.style.display = "flex";
                setTimeout(function () {
                msg.style.display = "none"},5000);
                alertMessage.innerHTML = `&nbsp;&nbsp; Welcome ${username}!`
                localStorage.setItem("token", "Bearer " + response.token);
                localStorage.setItem("role",response.data.role);
                localStorage.setItem("name",response.data.name);
                localStorage.setItem("email",response.data.email);

                setTimeout(()=>{
                    location.href = "../views/blogs.html";
                }, 3000)
             

		} else {
            loader.style.display = "none";
            msg.style.display = "flex";
            setTimeout(function () {
                msg.style.display = "none"},2000);
            alertMessage.innerHTML = "&nbsp;&nbsp; Error ocurred!!"
		}
	} catch (error) {
        msg.style.display = "flex";
        setTimeout(function () {
            msg.style.display = "none"},3000);
        // alertMessage.innerHTML = "&nbsp;&nbsp; Erroryyy ocurred!!"
        console.log(error);
	}
}

const loginButton = document.getElementById("login-btn");
const signUpButton = document.getElementById("signup-btn");


loginButton.addEventListener('click', e =>{
    e.preventDefault();
    loginUser() ;
});
signUpButton.addEventListener('click', e =>{
    e.preventDefault();
    signUpUser() ;
})