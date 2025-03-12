function signUp() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    document.getElementById("message").textContent = "Passwords do not match!";
    return;
  }

  const user = {
    username: username,
    email: email,
    password: password,
    role: "user", // Default role as 'user'
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  document.getElementById("message").textContent =
    "Signup successful! You can now log in.";

  alert("Signup successful! You can now log in.");
  setTimeout(() => {
    window.location.href = "/pages/login.html";
  }, 2000);
}
function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // Static hairdresser credentials
  if (username === "hairdresser" && password === "hairdresser123") {
    document.getElementById("loginMessage").textContent = "Login successful!";
    setTimeout(() => {
      window.location.href = "/pages/hairdresser/dashboard.html";
    }, 2000);
    return;
  }

  // Regular user authentication
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === username);

  if (user) {
    if (user.password === password) {
      document.getElementById("loginMessage").textContent = "Login successful!";
      setTimeout(() => {
        window.location.href = "/pages/index.html";
      }, 2000);
    } else {
      document.getElementById("loginMessage").textContent =
        "Incorrect password!";
      document.getElementById("loginMessage").style.color = "red";
    }
  } else {
    document.getElementById("loginMessage").textContent = "User not found!";
    document.getElementById("loginMessage").style.color = "red";
  }
}
