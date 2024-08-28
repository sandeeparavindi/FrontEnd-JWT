$(document).ready(function () {
    let token = localStorage.getItem("token");
    if (token){

    } else {
        window.location.href = "signIn.html"
    }

})

function logOut() {
    localStorage.removeItem("token")
}

