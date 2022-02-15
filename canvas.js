let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pencilColor = document.querySelectorAll(".pencil-color");
let pencilWidthElem = document.querySelector(".pencil-width");
let eraserWidthElem = document.querySelector(".eraser-width");

let penColor = "red";
let eraserColor = "white";
let penWidth = pencilWidthElem.value;
let eraserWidth = eraserWidthElem.value;

let mousedown = false;

// API
let tool = canvas.getContext("2d");

tool.strokeStyle = "penColor"
tool.lineWidth = "penWidth";


// mousedown -> start new path, mousemove -> path fill (graphics)
canvas.addEventListener("mousedown", (e) => {
	mousedown = true;
	beginPath({
		x:e.clientX,
		y:e.clientY
	})
	
})

canvas.addEventListener("mousemove", (e) => {

	if(mousedown){
		drawStroke({
			x:e.clientX,
			y:e.clientY,
			color: eraserColor? eraserColor:penColor,
			width: eraserFlag ? eraserWidth : penWidth
		})
	}
	
})

canvas.addEventListener("mouseup",(e) => {
	mousedown = false;
})

function beginPath(strokeObj){
	tool.strokeStyle = strokeObj.color;
	tool.lineWidth = strokeObj.width;
	tool.beginPath();
	tool.moveTo(strokeObj.x,strokeObj.y);
}

function drawStroke(strokeObj){
	tool.lineTo(strokeObj.x,strokeObj.y);
	tool.stroke();
}

pencilColor.forEach((colorElem) => {
	colorElem.addEventListener("click", (e) => {
		let color = colorElem.classList[0];
		penColor = color;
		tool.strokeStyle = penColor;
	})
})

pencilWidthElem.addEventListener("change", (e) => {
	penWidth = pencilWidthElem.value;
	tool.lineWidth = penWidth;
})

eraserWidthElem.addEventListener("change", (e) => {
	eraserWidth = eraserWidthElem.value;
	tool.lineWidth = eraserWidth;
})

eraser.addEventListener("click", (e) => {
	if(eraserFlag){
		tool.strokeStyle = eraserColor;
		tool.lineWidth = eraserWidth;
	}else{
		tool.strokeStyle = penColor;
		tool.lineWidth = penWidth;
	}	
})