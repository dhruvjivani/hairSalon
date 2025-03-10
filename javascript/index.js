function signUp() {
  // Get the values from the form
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validate password match
  if (password !== confirmPassword) {
    document.getElementById("message").textContent = "Passwords do not match!";
    return;
  }

  // Create user object to store
  const user = {
    username: username,
    email: email,
    password: password,
  };

  // Store user data in localStorage
  let users = JSON.parse(localStorage.getItem("users")) || []; // Get existing users or create an empty array if none exist
  users.push(user); // Add the new user to the list
  localStorage.setItem("users", JSON.stringify(users)); // Store the updated users list

  // Provide feedback
  document.getElementById("message").textContent =
    "Signup successful! You can now log in.";

  // Show an alert and redirect to login page
  alert("Signup successful! You can now log in.");
  setTimeout(() => {
    window.location.href = "/pages/login.html"; // Redirect to the login page
  }, 2000); // Redirect after 2 seconds
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // Get users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Find a user that matches the entered username
  const user = users.find((u) => u.username === username);

  // Check if the user exists and if the password matches
  if (user) {
    if (user.password === password) {
      document.getElementById("loginMessage").textContent = "Login successful!";
      // Optionally, redirect the user to a dashboard page or home page after login
      setTimeout(() => {
        window.location.href = "/pages/index.html"; // Redirect to the dashboard or homepage
      }, 2000); // Redirect after 2 seconds
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
