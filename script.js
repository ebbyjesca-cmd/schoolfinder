const signupbtn = document.getElementById("signupbtn");

if  (signupbtn) {
    signupbtn.addEventListener("click", () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("please fill in all fields");
            return;
        }

        const user = { email, password};
        localStorage.setItem("user", JSON.stringify(user));
        alert("Account created! You can now login")
    });
}


const loginbtn = document.getElementById("loginbtn");
console.log("login button:", loginbtn);

if (loginbtn) {
    loginbtn.addEventListener("click", () => {
        console.log("button clicked");
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (!savedUser) {
            alert("No account found. please sign up.");
            return;
        }

        if (email ===savedUser.email && password === savedUser.password) {
            localStorage.setItem("LoggedIn", "true");

            alert("login successful!");
            window.location.href = "home.html";
        } else {
            alert("invalid credentials");
        }
    });
}