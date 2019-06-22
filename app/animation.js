import { fitbit_animate } from 'fitbit-animate';
import document from "document";

let animate1 = document.getElementById('linesA');
let animate2 = document.getElementById('linesB');
let animate3 = document.getElementById('linesC');
let animate4 = document.getElementById('linesD');
let animate5 = document.getElementById('linesE');

export function animation() {
    fitbit_animate(animate1)
}

let animate1 = [
    {
        elem: animate1,
        prop: "translate",
        subprop: "y",
        from: 0,
        to: 4,
        dur: 1000
    },
    {
      elem: animate2,
      prop: "translate",
      subprop: "y",
      from: 0,
      to: 8,
      dur: 1000
  },
    {
        elem: animate3,
        prop: "translate",
        subprop: "y",
        from: 0,
        to: 16,
        dur: 1000
    },
    {
        elem: animate4,
        prop: "translate",
        subprop: "y",
        from: 0,
        to: 32,
        dur: 1000
    },
     {
        elem: animate5,
        prop: "translate",
        subprop: "y",
        from: 0,
        to: 64,
        dur: 1000
    }
  ];