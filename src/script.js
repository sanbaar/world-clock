//Toronto
function updateTime() {
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");

  let torontoCurrentDate = moment()
    .tz("America/Toronto")
    .format("dddd, MMMM Do");
  torontoDateElement.innerHTML = torontoCurrentDate;

  let torontoCurrentTime = moment().tz("America/Toronto").format("hh:mm A");
  torontoTimeElement.innerHTML = torontoCurrentTime;

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  let tokyoCurrentDate = moment().tz("Asia/Tokyo").format("dddd, MMMM Do");
  tokyoDateElement.innerHTML = tokyoCurrentDate;

  let tokyoCurrentTime = moment().tz("Asia/Tokyo").format("hh:mm A");
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
    .format("hh:mm A");
  melbourneTimeElement.innerHTML = melbourneCurrentTime;

  //Calcutta
  let calcuttaElement = document.querySelector("#calcutta");
  let calcuttaDateElement = calcuttaElement.querySelector(".date");
  let calcuttaTimeElement = calcuttaElement.querySelector(".time");

  let calcuttaCurrentDate = moment().tz("Asia/Kolkata").format("dddd, MMMM Do");
  calcuttaDateElement.innerHTML = calcuttaCurrentDate;

  let calcuttaCurrentTime = moment().tz("Asia/Kolkata").format("hh:mm A");
  calcuttaTimeElement.innerHTML = calcuttaCurrentTime;
}

updateTime();
setInterval(updateTime, 1000);
