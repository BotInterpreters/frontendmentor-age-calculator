function validateFormFields() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate();

  let day = document.forms["myForm"]["day"].value;
  let month = document.forms["myForm"]["month"].value;
  let year = document.forms["myForm"]["year"].value;

  let ageYears, ageMonths, ageDays;

  let errorMessageDay = "";
  let errorMessageMonth = "";
  let errorMessageYear = "";

  const ageDisplay = document.querySelector(".age-display");
  const monthDisplay = document.querySelector(".month-display");
  const dayDisplay = document.querySelector(".day-display");

  if (day == "") {
    errorMessageDay = "This field is required";
    document.querySelector(".error-message-day").style.fontFamily =
      "Poppins, sans-serif";
    document.querySelector(".error-message-day").style.fontStyle = "italic";
    document.querySelector(".error-message-day").style.color = "#D09797";
    document.querySelector(".error-message-day").style.visibility = "visible";
  } else if (day > 31) {
    errorMessageDay = "Must be a valid day";
  }

  if (month == "") {
    errorMessageMonth = "This field is required";
    document.querySelector(".error-message-month").style.fontFamily =
      "Poppins, sans-serif";
    document.querySelector(".error-message-month").style.fontStyle = "italic";
    document.querySelector(".error-message-month").style.color = "#D09797";
    document.querySelector(".error-message-month").style.visibility = "visible";
  } else if (month > 12 || month < 1) {
    errorMessageMonth = "Must be a valid month";
  }

  if (year == "") {
    errorMessageYear = "This field is required";
    document.querySelector(".error-message-year").style.fontFamily =
      "Poppins, sans-serif";
    document.querySelector(".error-message-year").style.fontStyle = "italic";
    document.querySelector(".error-message-year").style.color = "#D09797";
    document.querySelector(".error-message-year").style.visibility = "visible";
  } else if (year > currentYear) {
    errorMessageYear = "Must be in the past";
  } else {
    ageYears = currentYear - year;
    ageMonths = currentMonth - month;
    ageDays = currentDay - day;

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
      if (ageDays < 0) {
        let daysInPreviousMonth = new Date(
          currentYear,
          currentMonth - 1,
          0
        ).getDate();
        ageMonths--;
        ageDays += daysInPreviousMonth;
      }
    }
  }

  document.querySelector(".error-message-day").innerHTML = errorMessageDay;
  document.querySelector(".error-message-month").innerHTML = errorMessageMonth;
  document.querySelector(".error-message-year").innerHTML = errorMessageYear;

  if (
    ageYears !== undefined &&
    ageMonths !== undefined &&
    ageDays !== undefined
  ) {
    console.log(
      "Age:",
      ageYears,
      "years,",
      ageMonths,
      "months,",
      ageDays,
      "days"
    );

    document.querySelector(".text-year").textContent = ageYears;
    document.querySelector(".text-month").textContent = ageMonths;
    document.querySelector(".text-day").textContent = ageDays;

    document.querySelector(".text-year").textContent = ageYears;
    document.querySelector(".text-year").style.fontFamily = "Poppins";
    document.querySelector(".text-year").style.color = "#874CFE";
    document.querySelector(".text-year").style.fontSize = "80px";
    document.querySelector(".text-year").style.marginRight = "1rem";
    document.querySelector(".text-year").style.fontWeight = "700";

    document.querySelector(".text-month").textContent = ageMonths;
    document.querySelector(".text-month").style.fontFamily = "Poppins";
    document.querySelector(".text-month").style.color = "#874CFE";
    document.querySelector(".text-month").style.fontSize = "80px";
    document.querySelector(".text-month").style.marginRight = "1rem";
    document.querySelector(".text-month").style.fontWeight = "700";

    document.querySelector(".text-day").textContent = ageDays;
    document.querySelector(".text-day").style.fontFamily = "Poppins";
    document.querySelector(".text-day").style.color = "#874CFE";
    document.querySelector(".text-day").style.fontSize = "80px";
    document.querySelector(".text-day").style.marginRight = "1rem";
    document.querySelector(".text-day").style.fontWeight = "700";

    const img = ageDisplay.querySelector("img");
    if (img) {
      ageDisplay.removeChild(img);
    }

    const imgMonth = monthDisplay.querySelector("img");
    if (imgMonth) {
      monthDisplay.removeChild(imgMonth);
    }

    const imgYear = dayDisplay.querySelector("img");
    if (imgYear) {
      dayDisplay.removeChild(imgYear);
    }
  } else {
    if (!ageDisplay.querySelector("img")) {
      const img = document.createElement("img");
      img.src = "assets/images/horizontal-line-remove-button.png";
      img.alt = "";
      img.classList.add("me-3");
      ageDisplay.prepend(img);
    }

    if (!monthDisplay.querySelector("img")) {
      const img = document.createElement("img");
      img.src = "assets/images/horizontal-line-remove-button.png";
      img.alt = "";
      img.classList.add("me-3");
      monthDisplay.prepend(img);
    }

    if (!dayDisplay.querySelector("img")) {
      const img = document.createElement("img");
      img.src = "assets/images/horizontal-line-remove-button.png";
      img.alt = "";
      img.classList.add("me-3");
      dayDisplay.prepend(img);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const ageDisplay = document.querySelector(".age-display");
  const imgYear = document.createElement("img");
  imgYear.src = "assets/images/horizontal-line-remove-button.png";
  imgYear.alt = "";
  imgYear.classList.add("me-3");
  ageDisplay.prepend(imgYear);

  const monthDisplay = document.querySelector(".month-display");
  const imgMonth = document.createElement("img");
  imgMonth.src = "assets/images/horizontal-line-remove-button.png";
  imgMonth.alt = "";
  imgMonth.classList.add("me-3");
  monthDisplay.prepend(imgMonth);

  const dayDisplay = document.querySelector(".day-display");
  const imgDay = document.createElement("img");
  imgDay.src = "assets/images/horizontal-line-remove-button.png";
  imgDay.alt = "";
  imgDay.classList.add("me-3");
  dayDisplay.prepend(imgDay);

  let inputs = document.querySelectorAll(
    "input[type='text'][name='day'], input[type='text'][name='month'], input[type='text'][name='year']"
  );

  inputs.forEach(function (input) {
    input.addEventListener("input", function (event) {
      let inputValue = event.target.value;
      event.target.value = inputValue.replace(/\D/g, "");
    });
  });

  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    validateFormFields();
  });
});
