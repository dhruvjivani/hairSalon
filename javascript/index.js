let userData = {
  username: "user@example.com",
  password: "User@123",
}; // Store user data globally to simulate a simple user authentication system

// Function to handle user signup
function signUp(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get input values from the signup form
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();
  const message = document.getElementById("message"); // Message element to display errors/success

  // Clear any previous messages
  message.textContent = "";

  // Validation rules for user input
  if (!username || !email || !password || !confirmPassword) {
    showMessage(message, "Please fill in all fields.", "red");
    return; // Stop if any field is empty
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

  // If validation passes, store the user data in the global variable
  userData = { username, email, password };

  // Show success alert
  alert("Signup successful! You will be redirected to the login page.");

  // Hide the signup form and show the login form
  document.querySelector(".signup-container").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
}

// Function to handle user login
function login() {
  const loginUsername = document.getElementById("loginUsername").value.trim();
  const loginPassword = document.getElementById("loginPassword").value.trim();
  const loginMessage = document.getElementById("loginMessage"); // Message element for login feedback

  // Clear previous login message
  loginMessage.textContent = "";
  console.log(userData);
  // Check if login credentials match the stored user data
  if (
    userData &&
    loginUsername === userData?.username &&
    loginPassword === userData?.password
  ) {
    loginMessage.textContent = "Login successful!"; // Shows a success message if login details are correct.
    alert("Login successful! Welcome back, " + userData.username + " 🎉");
    showMessage(loginMessage, "Login successful!", "green");
    let baseURL = window.location.origin;

    // Redirect to the homepage (assuming homepage is at the base URL)
    window.location.href = baseURL + "/pages/index.html";
  } else {
    loginMessage.textContent = "Invalid username or password."; // Shows an error message if details are incorrect.
  }
}

// Utility function to show messages (errors or success) on the page
function showMessage(element, text, color) {
  element.textContent = text;
  element.style.color = color; // Set the text color (green for success, red for error)
}

// Function to confirm whether the user wants to move to the login page
function confirmMoveToLogin() {
  if (confirm("Are you sure you want to move to the login page?")) {
    document.querySelector(".signup-container").style.display = "none"; // Hide signup section
    document.getElementById("loginSection").style.display = "block"; // Show login section
  }
}

// Function to confirm whether the user wants to move to the signup page
function confirmMoveToSignup() {
  if (confirm("Are you sure you want to move to the Signup page?")) {
    document.querySelector(".signup-container").style.display = "block"; // Hide signup section
    document.getElementById("loginSection").style.display = "none"; // Show login section
  }
}

//Forgot password
function forgotpass() {
  if (confirm("New Password link sent in you Email")) {
    return null;
  }
}
