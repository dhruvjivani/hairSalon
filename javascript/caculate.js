// Array of available services, each containing the name, price, and duration of the service
let services = [
  {
    name: "nail art", // Service name
    price: 50, // Service price
    duration: 60, // Service duration in minutes
  },
  {
    name: "eyebrows",
    price: 20,
    duration: 20,
  },
  {
    name: "package",
    price: 1000,
    duration: 60,
  },
];

// Function to calculate the total price and duration of selected services
function calculateTotal() {
  // Get the selected stylist from the dropdown (not used in this logic)
  let hairdresser = document.getElementById("stylist").value;

  // Check if each service is selected using checkbox elements
  let isnailart = document.getElementById("nailart").checked;
  let iseyebrows = document.getElementById("eyebrows").checked;
  let ispackage = document.getElementById("package").checked;

  // Initialize an empty array to hold the chosen services
  let choosenServices = [];

  // Push the selected services into the choosenServices array
  if (isnailart) {
    choosenServices.push(services[0]); // Add 'nail art' service
  }

  if (iseyebrows) {
    choosenServices.push(services[1]); // Add 'eyebrows' service
  }

  if (ispackage) {
    choosenServices.push(services[2]); // Add 'package' service
  }

  // Variables to calculate total price and total duration of chosen services
  let totalPrice = 0;
  let totalDuration = 0;

  // Loop through each chosen service to accumulate total price and duration
  for (let item of choosenServices) {
    totalPrice = totalPrice + item.price; // Add service price to total price
    totalDuration = totalDuration + item.duration; // Add service duration to total duration
  }

  // Display the total price and duration in the respective HTML elements
  document.getElementById("total-cost").textContent = "$ " + totalPrice;
  document.getElementById("total-duration").textContent =
    totalDuration + " mins";

  // Show an alert to the user confirming the booking is completed
  alert("Your booking is completed.");
}
