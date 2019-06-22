import { fitbit_animate } from 'fitbit-animate';
import document from "document";

let animate1 = document.getElementById('linesA');
let animate2 = document.getElementById('linesB');
let animate3 = document.getElementById('linesC');
let animate4 = document.getElementById('linesD');
let animate5 = document.getElementById('linesE');
let animate6 = document.getElementById('linesF');

export function animation() {
    fitbit_animate(animate1)
        
}


let animate1 = [
    {
        elem: animate1,
        prop: "translate",
        subprop: "y",
        from: 0,
        to: 2,
        dur: 1000
    },
    {
      elem: animate2,
      prop: "translate",
      subprop: "y",
      from: 0,
      to: 3,
      dur: 1000
  },
    {
        elem: animate3,
        prop: "translate",
        subprop: "y",
        from: 0,
        to: 5,
        dur: 1000
    },
    {
        elem: animate4,
        prop: "translate",
        subprop: "y",
        from: 0,
        to: 10,
        dur: 1000
    },
     {
        elem: animate5,
        prop: "translate",
        subprop: "y",
        from: 0,
        to: 15,
        dur: 1000
    }, {
        elem: animate6,
        prop: "translate",
        subprop: "y",
        from: 0,
        to: 25,
        dur: 1000
    }
  ];