let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");

let losAngelesCurrentDate = moment()
  .tz("America/Los_Angeles")
  .format("dddd, DD-MM-YYYY");

losAngelesDateElement.innerHTML = losAngelesCurrentDate;
