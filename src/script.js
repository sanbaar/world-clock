//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");

let losAngelesCurrentDate = moment()
  .tz("America/Los_Angeles")
  .format("dddd, MMMM Do");

losAngelesDateElement.innerHTML = losAngelesCurrentDate;

//Tokyo
let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");

let tokyoCurrentDate = moment().tz("Asia/Tokyo").format("dddd, MMMM Do");

tokyoDateElement.innerHTML = tokyoCurrentDate;

//Melbourne
let melbourneElement = document.querySelector("#melbourne");
let melbourneDateElement = melbourneElement.querySelector(".date");
let melbourneTimeElement = melbourneElement.querySelector(".time");

let melbourneCurrentDate = moment()
  .tz("Australia/Melbourne")
  .format("dddd, MMMM Do");

melbourneDateElement.innerHTML = melbourneCurrentDate;

//Calcutta
let calcuttaElement = document.querySelector("#calcutta");
let calcuttaDateElement = calcuttaElement.querySelector(".date");
let calcuttaTimeElement = calcuttaElement.querySelector(".time");

let calcuttaCurrentDate = moment().tz("Asia/Kolkata").format("dddd, MMMM Do");

calcuttaDateElement.innerHTML = calcuttaCurrentDate;
