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