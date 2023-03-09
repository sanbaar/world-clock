//Toronto
function updateTime() {
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");

  let torontoCurrentDate = moment()
    .tz("America/Toronto")
    .format("dddd, MMMM Do");
  torontoDateElement.innerHTML = torontoCurrentDate;

  let torontoCurrentTime = moment().tz("America/Toronto").format("hh:mm:ss A");
  torontoTimeElement.innerHTML = torontoCurrentTime;

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  let tokyoCurrentDate = moment().tz("Asia/Tokyo").format("dddd, MMMM Do");
  tokyoDateElement.innerHTML = tokyoCurrentDate;

  let tokyoCurrentTime = moment().tz("Asia/Tokyo").format("hh:mm:ss A");
  tokyoTimeElement.innerHTML = tokyoCurrentTime;

  //Melbourne
  let melbourneElement = document.querySelector("#melbourne");
  let melbourneDateElement = melbourneElement.querySelector(".date");
  let melbourneTimeElement = melbourneElement.querySelector(".time");

  let melbourneCurrentDate = moment()
    .tz("Australia/Melbourne")
    .format("dddd, MMMM Do");
  melbourneDateElement.innerHTML = melbourneCurrentDate;

  let melbourneCurrentTime = moment()
    .tz("Australia/Melbourne")
    .format("hh:mm:ss A");
  melbourneTimeElement.innerHTML = melbourneCurrentTime;

  //Calcutta
  let calcuttaElement = document.querySelector("#calcutta");
  let calcuttaDateElement = calcuttaElement.querySelector(".date");
  let calcuttaTimeElement = calcuttaElement.querySelector(".time");

  let calcuttaCurrentDate = moment().tz("Asia/Kolkata").format("dddd, MMMM Do");
  calcuttaDateElement.innerHTML = calcuttaCurrentDate;

  let calcuttaCurrentTime = moment().tz("Asia/Kolkata").format("hh:mm:ss A");
  calcuttaTimeElement.innerHTML = calcuttaCurrentTime;
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let cityDate = moment().tz(cityTimeZone).format("dddd, MMMM Do YYYY");
  let cityTime = moment().tz(cityTimeZone).format("hh:mm:ss A");
  let timeCitiesElement = document.querySelector("#time-cities");
  timeCitiesElement.innerHTML = ` 
  <div class="selected-city">
              <h2>${cityName}</h2>
              <div class="date-selected-city">${cityDate}</div>
              <div class="time-selected-city">${cityTime}</div>
            </div>`;
}

let citiesSelectElement = document.querySelector("#select-city");
citiesSelectElement.addEventListener("change", updateCity);
