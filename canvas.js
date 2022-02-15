let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mousedown = false;

// API
let tool = canvas.getContext("2d");

tool.strokeStyle = "red"
tool.lineWidth = "3";


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
			y:e.clientY
		})
	}
	
})

canvas.addEventListener("mouseup",(e) => {
	mousedown = false;
})

function beginPath(strokeObj){
	tool.beginPath();
	tool.moveTo(strokeObj.x,strokeObj.y);
}

function drawStroke(strokeObj){
	tool.lineTo(strokeObj.x,strokeObj.y);
	tool.stroke();
}