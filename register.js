const registerForm = document.getElementById("registerform")


registerForm.onsubmit = async (e) => {
    console.log('aaaaaaa')
    e.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // var error = document.getElementById("error-text");
    requestBody = {
        username,
        email,
        password,
    }
    console.log(requestBody);
    const res = await fetch("https://www.cse151bgaming.online/api/users/create", {
        method: 'POST',
        headers: {
            "Content-Type":'application/json'
        },
        body: JSON.stringify(requestBody)
    }).then(response => {
        response.json().then(data => {
            if(response.status != 200){
                // error.innerHTML = data.msg;
                alert("Unable to register user")
            } else {
                // document.cookie="auth_token=" + data.token;
                // sessionStorage.setItem('auth_token', data.token);
                window.location.href = "./index.html";
            }
        })
    }).catch(error =>{
        console.log(error);
    });

}
