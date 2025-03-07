// Sample data for stylists and their available schedules
const stylists = [
  {
    name: "Dhruv",
    schedule: [
      { startTime: "10:00", endTime: "11:00" },
      { startTime: "11:00", endTime: "12:00" },
      { startTime: "13:00", endTime: "14:00" },
      { startTime: "14:00", endTime: "15:00" },
      { startTime: "15:00", endTime: "16:00" },
      { startTime: "16:00", endTime: "17:00" },
      { startTime: "17:00", endTime: "18:00" },
      { startTime: "18:00", endTime: "19:00" },
      { startTime: "19:00", endTime: "20:00" },
      { startTime: "20:00", endTime: "21:00" },
    ],
  },
  {
    name: "Hari",
    schedule: [
      { startTime: "10:00", endTime: "11:00" },
      { startTime: "11:00", endTime: "12:00" },
      { startTime: "13:00", endTime: "14:00" },
      { startTime: "14:00", endTime: "15:00" },
      { startTime: "15:00", endTime: "16:00" },
      { startTime: "16:00", endTime: "17:00" },
      { startTime: "17:00", endTime: "18:00" },
      { startTime: "18:00", endTime: "19:00" },
      { startTime: "19:00", endTime: "20:00" },
      { startTime: "20:00", endTime: "21:00" },
    ],
  },
];

/**
 * Function to get the schedule for a selected stylist
 * @param {string} stylistName - The name of the stylist
 * @returns {Array} - List of available time slots
 */
function getSchedule(stylistName) {
  const stylist = stylists.find((s) => s.name === stylistName);
  return stylist ? stylist.schedule : [];
}

/**
 * Function to populate the time dropdown with available slots
 * @param {Array} availableSlots - List of available time slots
 * @param {HTMLElement} timeSelect - The time select element
 */
function populateTimeSlots(availableSlots, timeSelect) {
  // Reset the time dropdown
  timeSelect.innerHTML = '<option value="">Select a time</option>';

  if (availableSlots.length === 0) {
    timeSelect.disabled = true;
    return;
  }

  // Populate available time slots
  availableSlots.forEach((slot) => {
    const option = document.createElement("option");
    option.value = slot.startTime;
    option.textContent = `${slot.startTime} - ${slot.endTime}`;
    timeSelect.appendChild(option);
  });

  // Enable the time dropdown
  timeSelect.disabled = false;
}

/**
 * Function to check if the "Book Appointment" button should be enabled
 */
function checkFormCompletion() {
  const stylist = document.getElementById("stylist").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const bookBtn = document.getElementById("book-btn");

  // Enable button only if all fields are selected
  bookBtn.disabled = !(stylist && date && time);
}

/**
 * Function to handle booking the appointment
 * @param {string} stylistName - The name of the selected stylist
 * @param {string} date - Selected appointment date
 * @param {string} time - Selected appointment time
 * @returns {string} - Confirmation message
 */
function scheduleAppointment(stylistName, date, time) {
  const availableSlots = getSchedule(stylistName);
  const selectedSlot = availableSlots.find((s) => s.startTime === time);

  if (selectedSlot) {
    return `Appointment scheduled with ${stylistName} on ${date} at ${time}.`;
  } else {
    return `Sorry, the selected time is unavailable. Please choose another time.`;
  }
}

// Restrict past dates in the date input field
document
  .getElementById("date")
  .setAttribute("min", new Date().toISOString().split("T")[0]);

// Event listener for stylist selection dropdown
document.getElementById("stylist").addEventListener("change", (event) => {
  const stylistName = event.target.value;
  const availableSlots = getSchedule(stylistName);
  const timeSelect = document.getElementById("time");

  populateTimeSlots(availableSlots, timeSelect);
  checkFormCompletion();
});

// Restrict past dates in the date input field (set the min attribute to today)
document
  .getElementById("date")
  .setAttribute("min", new Date().toISOString().split("T")[0]);

// Event listener for time selection dropdown
document.getElementById("time").addEventListener("change", checkFormCompletion);

// Event listener for date selection input
document.getElementById("date").addEventListener("input", checkFormCompletion);

// Event listener for booking button click
document.getElementById("book-btn").addEventListener("click", () => {
  const stylist = document.getElementById("stylist").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!date || !time) {
    alert("Please select both date and time.");
    return;
  }

  const confirmationMessage = scheduleAppointment(stylist, date, time);

  // Show confirmation alert
  alert(confirmationMessage);

  // Redirect to the login page after clicking "OK"
  window.location.href = "/pages/registerClient.html";
});
