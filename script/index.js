const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", () => {
  const inputPassword = document.getElementById("input-password");
  const inputName = document.getElementById("input-name");

  const username = inputName.value;
  const password = inputPassword.value;

  

  if (username.toLowerCase() === "admin" && password.toLowerCase() === 'admin123') {
    
    window.location.assign("./home.html")
  } else {
    alert("Please input valid username and password")
  }

})