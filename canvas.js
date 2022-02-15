let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// API
let tool = canvas.getContext("2d");
tool.beginPath(); // new graphic (Path)
tool.moveTo(10,10) // starting point
tool.lineTo(100,150) // end point
tool.stroke(); // Fill Graphic