const userName =localStorage.getItem('name');
const email = localStorage.getItem('email');
const userRole = localStorage.getItem('role');



const profileName = document.getElementById('updateName');
const profileEmail = document.getElementById('updateEmail');
const profileRole= document.getElementById('updateRole');

profileName.innerText = userName;
profileEmail.innerText = email;
profileRole.innerText = userRole;


const token =localStorage.getItem('token');
const role =localStorage.getItem('role');
if(role == 'normal-user'){
    document.getElementById('queries-hide').style.display = 'none';
    document.getElementById('subscribers-hide').style.display = 'none';
    // document.getElementById('delete-user').classList.add('delete-hide'); 
}

