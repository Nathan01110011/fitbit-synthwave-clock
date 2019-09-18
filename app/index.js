import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { animation } from "./animation";
import { display } from "display";

// Update the clock every minute
clock.granularity = "seconds";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
let separator = document.getElementById("separator");
let hours1 = document.getElementById("hourX");
let hours2 = document.getElementById("hourY");
let mins1 = document.getElementById("minsX");
let mins2 = document.getElementById("minsY");
let day = document.getElementById("day");
let date1 = document.getElementById("dateX");
let date2 = document.getElementById("dateY");


let road = document.getElementById("road");
let num = 1;

if (display.on) { // if display turned on - start animation
  setInterval(function(){ setRoadAnimation() }, 40);
}

// Update the <text> element every tick with the current time
clock.ontick = evt => {

  
  let d = evt.date;

  placeDate(d.getDate());

  // HOURS
  let hours = d.getHours();
  hours = util.zeroPad(hours);

  setHours(hours);
  setDay(d.getDay());
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

function placeDate(val) {

  let dateNo = val;

  var one = String(dateNo).charAt(0);

  if (dateNo < 10) {
    date1.image = `images/date/0.png`;
    date2.image = `images/date/${dateNo}.png`
  } else {
    var two = String(dateNo).charAt(1);
    date1.image = `images/date/${one}.png`;
    date2.image = `images/date/${two}.png`;
  }


}

function setDay(val) {
  drawDay(val, day)
}

function drawDigit(val, place) {
  place.image = `images/${val + 48}.png`;
}

function drawDay(val, place) {
  place.image = `images/date/${val}x.png`;
}

function setRoadAnimation(){
  road.image = `images/roadAnimation/${num}.png`
  num = num + 1;
  if (num > 24) {
      num = 1
  }

}
