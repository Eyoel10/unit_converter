/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// 20 meters = 65.616 feet | 20 feet = 6.096 meters
// 20 liters = 5.286 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos

const inputEl = document.querySelector("#in-el");
const convertEl = document.querySelector("#btn-el");
const lengthEl = document.querySelector("#len-el");
const volumeEl = document.querySelector("#vol-el");
const massEl = document.querySelector("#mass-el");

convertEl.addEventListener("click", () => {
  let lengthC = "";
  let volumeC = "";
  let massC = "";

  if (inputEl.value != "" && !isNaN(inputEl.value)) {
    let val = Number(inputEl.value);
    lengthC = makeSentence(val, "l");
    volumeC = makeSentence(val, "v");
    massC = makeSentence(val, "m");
    lengthEl.textContent = lengthC;
    volumeEl.textContent = volumeC;
    massEl.textContent = massC;
  }
});

function makeSentence(num, op) {
  switch (op) {
    case "l":
      return `${num} meters = ${convertUnit(
        num,
        "f"
      )} feet | ${num} feet = ${convertUnit(num, "m")} meter`;
    case "v":
      return `${num} liters = ${convertUnit(
        num,
        "g"
      )} gallons | ${num} gallons = ${convertUnit(num, "l")} liters`;
    case "m":
      return `${num} kilos = ${convertUnit(
        num,
        "p"
      )} pounds | ${num} pounds = ${convertUnit(num, "k")} kilos`;
  }
}

function convertUnit(num, op) {
  switch (op) {
    case "m":
      return (num / 3.28084).toFixed(3);
    case "f":
      return (num * 3.28084).toFixed(3);
    case "l":
      return (num / 0.264172).toFixed(3);
    case "g":
      return (num * 0.264172).toFixed(3);
    case "k":
      return (num / 2.20462).toFixed(3);
    case "p":
      return (num * 2.20462).toFixed(3);
    default:
      return null;
  }
}
