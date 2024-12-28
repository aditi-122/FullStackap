const form = document.getElementById("cont");
const Login = document.getElementById("login");
Login.addEventListener("click",function(){
    Event.preventDefault();
    let email = form.email.value;
    let password = form.password.value;
    if(email =="admin@empher.com" && password =="empher@123"){
        alert("Logged in As Admin");
        window.location.href ="admin.html";
    }
    else if(email =="user@empher.com" && password =="user@123"){
        alert("Logged in As User");
        window.location.href ="books.html";
    }
    else{
        alert("Admin Not Logged In");
    }
});
form.append(email,password);
