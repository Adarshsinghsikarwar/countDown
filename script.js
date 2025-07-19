
const form = document.getElementById("endTimeForm");
const formContainer = document.getElementById("form-container");
const countdownContainer = document.getElementById("countdown-container");
const endDateDisplay = document.getElementById("end-date");
const inputs = document.querySelectorAll("input[type='text']");

let endDate;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.getElementById("endTime").value;
  if (!inputValue) return;

  endDate = new Date(inputValue);
  endDateDisplay.innerText = endDate.toString();

  // Hide form and show countdown
  formContainer.style.display = "none";
  countdownContainer.style.display = "flex";

  // Start countdown
  startCountdown();
});

function startCountdown() {
  function clock() {
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
      inputs[0].value = 0;
      inputs[1].value = 0;
      inputs[2].value = 0;
      inputs[3].value = 0;
      return;
    }

    inputs[0].value = Math.floor(diff / 1000 / 60 / 60 / 24);
    inputs[1].value = Math.floor(diff / 1000 / 60 / 60) % 24;
    inputs[2].value = Math.floor(diff / 1000 / 60) % 60;
    inputs[3].value = Math.floor(diff / 1000) % 60;
  }

  clock();
  setInterval(clock, 1000);
}
