// Check if client is already registered based on email
function isClientRegistered(email) {
  // List of pre-registered client emails
  const registeredClients = ["alice@example.com", "bob@example.com"];
  // Check if the given email is in the registered clients list
  return registeredClients.includes(email);
}

// Check if stylist is available for the appointment
function checkStylistAvailability() {
  const availableToday = true; // Assuming the stylist is available today
  return availableToday; // Return the availability status
}

// Register a new client (called when the registration form is submitted)
function registerNewClient() {
  // Get form values entered by the user
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const postalCode = document.getElementById("postalCode").value;
  const email = document.getElementById("email").value;

  // Validate that all required fields are filled in
  if (!firstName || !lastName || !phone || !postalCode || !email) {
    alert("Please fill in all required fields."); // Alert if any field is missing
    return false; // Stop execution if any field is empty
  }

  // Validate phone number format (expected format: (123) 456-7890)
  const phonePattern = /^\d{3}\d{3}\d{4}$/;
  if (!phone.match(phonePattern)) {
    alert("Invalid phone format. Use (123) 456-7890."); // Alert if phone format is incorrect
    return false; // Stop execution if phone format is invalid
  }

  // Validate postal code format (expected format: A1A 1A1)
  const postalCodePattern = /^[A-Z]\d[A-Z] \d[A-Z]\d$/;
  if (!postalCode.match(postalCodePattern)) {
    alert("Invalid postal code format. Use A1A 1A1."); // Alert if postal code format is incorrect
    return false; // Stop execution if postal code format is invalid
  }

  // Validate email format using a regular expression
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.match(emailPattern)) {
    alert("Invalid email format."); // Alert if email format is incorrect
    return false; // Stop execution if email format is invalid
  }

  // Check if the client is already registered with the given email
  if (isClientRegistered(email)) {
    // If the client is registered, check if the stylist is available
    if (checkStylistAvailability()) {
      alert(
        "Yes, you are ready for your appointment! Please create an account using Signup and Login."
      );
    } else {
      alert(
        "Sorry, no availability today. Please try scheduling for the next day."
      );
    }
  } else {
    alert(
      "Registration successful! You may now proceed to book an appointment."
    );
    setTimeout(function () {
      window.location.href = "/pages/appointment.html";
    }, 2000);
  }
}
