let userData = null; // Store user data globally

function signUp(event) {
  event.preventDefault();

  // Get input values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();
  const message = document.getElementById("message");

  // Clear previous messages
  message.textContent = "";

  // Validation rules
  if (!username || !email || !password || !confirmPassword) {
    showMessage(message, "Please fill in all fields.", "red");
    return;
  }
  if (username.length < 3) {
    showMessage(message, "Username must be at least 3 characters.", "red");
    return;
  }
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    showMessage(
      message,
      "Username can only contain letters and numbers.",
      "red"
    );
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    showMessage(message, "Enter a valid email address.", "red");
    return;
  }
  if (password.length < 6) {
    showMessage(message, "Password must be at least 6 characters.", "red");
    return;
  }
  if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    showMessage(
      message,
      "Password must include at least one uppercase letter and one number.",
      "red"
    );
    return;
  }
  if (password !== confirmPassword) {
    showMessage(message, "Passwords do not match.", "red");
    return;
  }

  // Store user data
  userData = { username, email, password };

  // Show success alert
  alert("Signup successful! You will be redirected to the login page.");

  // Hide signup and show login form
  document.querySelector(".signup-container").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
}

function login() {
  const loginUsername = document.getElementById("loginUsername").value.trim();
  const loginPassword = document.getElementById("loginPassword").value.trim();
  const loginMessage = document.getElementById("loginMessage");

  loginMessage.textContent = "";

  if (
    userData &&
    loginUsername === userData.username &&
    loginPassword === userData.password
  ) {
    alert("Login successful! Welcome back, " + userData.username + " 🎉");
    showMessage(loginMessage, "Login successful!", "green");
  } else {
    showMessage(loginMessage, "Invalid username or password.", "red");
  }
}

// Utility function to show messages
function showMessage(element, text, color) {
  element.textContent = text;
  element.style.color = color;
}

function confirmMoveToLogin() {
    if (confirm("Are you sure you want to move to the login page?")) {
        document.querySelector(".signup-container").style.display = "none";
        document.getElementById("loginSection").style.display = "block";
    }
}

