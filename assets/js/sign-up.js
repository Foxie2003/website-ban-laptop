function signUp(e) {
    event.preventDefault();
    var userName = document.getElementById("username-sign-up").value;
    var password = document.getElementById("password-sign-up").value;
    var confirmPassword = document.getElementById("confirm-password-sign-up").value;
    if(password != confirmPassword) {
        alert("Vui lòng xác nhận lại mật khẩu");
        return;
    }
    if(localStorage.getItem(userName) != null) {
        alert("Tài khoản đã tồn tại");
        return;
    }
    var user = {
        userName : userName,
        password : password,
        cart : []
    }
    if(password.length >= 8) {
        var json = JSON.stringify(user);
        localStorage.setItem(userName, json);
        alert("Đăng ký thành công");
        goToSignIn();
    }
    else {
        alert("Mật khẩu phải chứa tổi thiểu 8 ký tự");
    }
}

function goToSignIn(e) {
    event.preventDefault();
    var signUp = document.getElementById("sign-up");
    signUp.classList.add("hide");
    var signIn = document.getElementById("sign-in");
    signIn.classList.remove("hide");
}

function goToSignUp(e) {
    event.preventDefault();
    var signUp = document.getElementById("sign-up");
    signUp.classList.remove("hide");
    var signIn = document.getElementById("sign-in");
    signIn.classList.add("hide");
}

function signIn(e) {
    event.preventDefault();
    var userName = document.getElementById("username-sign-in").value;
    var password = document.getElementById("password-sign-in").value;
    var user = localStorage.getItem(userName);
    var data = JSON.parse(user);
    if(data == null) {
        alert("Vui lòng nhập tài khoản và mật khẩu");
    }
    else if(userName == data.userName && password == data.password) {
        alert("Đăng nhập thành công");
        localStorage.setItem("loginData", user);
        window.location.href = "home-page.html";
    }
    else {
        alert("Sai tài khoản mật khẩu");
    }
}