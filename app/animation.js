import document from "document";

let road = document.getElementById("road");
let num = 1;

export function animation() {
  setTimeout(function() {
    setRoadAnimation();
  }, 40);
}

function setRoadAnimation() {
  road.image = `images/roadAnimation/${num}.png`;
  num = num + 1;
  if (num > 24) {
    num = 1;
  }
}
