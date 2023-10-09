const loginForm = document.getElementById("loginform")

window.onload = function() {
    auth_token = sessionStorage.getItem('auth_token');
    if(auth_token != null){
        console.log('Auth token present')
        window.location.href = "./dashboard.html";
    }
};

loginForm.onsubmit = async (e) => {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // var error = document.getElementById("error-text");
    requestBody = {
        username,
        password
    }
    console.log(requestBody);
    const res = await fetch("https://www.cse151bgaming.online/api/login",{
        method: 'POST',
        headers:{
            "Content-Type":'application/json'
        },
        body: JSON.stringify(requestBody)
    }).then(response => {
        response.json().then(data => {
            if(response.status != 200){
                // error.innerHTML = data.msg;
                alert('Invalid login credentials')
            } else {
                // document.cookie="auth_token=" + data.token;
                sessionStorage.setItem('auth_token', data.token);
                window.location.href = "./dashboard.html";
            }
        })
    }).catch(error =>{
        console.log(error);
    });

}