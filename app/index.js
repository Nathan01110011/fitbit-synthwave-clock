import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { animation } from "./animation";

// Update the clock every minute
clock.granularity = "seconds";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
let separator = document.getElementById("colon");
let hours1 = document.getElementById("hourX");
let hours2 = document.getElementById("hourY");
let mins1 = document.getElementById("minsX");
let mins2 = document.getElementById("minsY");

// Update the <text> element every tick with the current time
clock.ontick = evt => {

  animation();

  let d = evt.date;

  // HOURS
  let hours = d.getHours();
  hours = util.zeroPad(hours);

  setHours(hours);

  // MINUTES
  let minute = ("0" + d.getMinutes()).slice(-2);
  setMins(minute);

  // BLINK SEPARATOR
  setSeparator(d.getSeconds());
}

// Blink time separator
function setSeparator(val) {
  separator.style.display = (val % 2 === 0 ? "inline" : "none");
}

function setHours(val) {
  if (val > 9) {
    drawDigit(Math.floor(val / 10), hours1);
  } else {
    drawDigit("", hours1);
  }
  drawDigit(Math.floor(val % 10), hours2);
}

function setMins(val) {
  drawDigit(Math.floor(val / 10), mins1);
  drawDigit(Math.floor(val % 10), mins2);
}

function setDate(val) {
  drawDigit(Math.floor(val / 10), date1);
  drawDigit(Math.floor(val % 10), date2);
}

function drawDigit(val, place) {
  place.image = `images/${val+48}.png`;
}

