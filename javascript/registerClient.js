

function isClientRegistered(email) {
    const registeredClients = ["alice@example.com", "bob@example.com"];
    return registeredClients.includes(email);
}

function checkStylistAvailability() {
    const availableToday = true;
    return availableToday;  
}


function registerNewClient() {   
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const postalCode = document.getElementById('postalCode').value;
    const email = document.getElementById('email').value;

    
    if (!firstName || !lastName || !phone || !postalCode || !email) {
        alert("Please fill in all required fields.");
        return false; 
    }

    
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phone.match(phonePattern)) {
        alert("Invalid phone format. Use (123) 456-7890.");
        return false; 
    }

    
    const postalCodePattern = /^[A-Z]\d[A-Z] \d[A-Z]\d$/;
    if (!postalCode.match(postalCodePattern)) {
        alert("Invalid postal code format. Use A1A 1A1.");
        return false; 
    }

    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        alert("Invalid email format.");
        return false; 
    }

    if (isClientRegistered(email)) {
        if (checkStylistAvailability()) {
            alert("Yes, you are ready for your appointment! Please create an account using Signup and Login.");
        } else {
            alert("Sorry, no availability today. Please try scheduling for the next day.");
           
        }
    } else {
        alert("Registration successful! You may now proceed to book an appointment.");
    }
}

function testRedirect() {
}
