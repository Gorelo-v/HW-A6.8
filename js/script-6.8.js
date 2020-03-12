let bar = document.getElementById("progressBar");
let width = 0;

function increment() {

console.log(bar.style.width = width++ + 1 + "%");
$("#progressBar").attr("width", bar);

}

$("#btn1").click(increment);

function increment1() {

console.log(bar.style.width = width++ + 3 + "%");

width = width + 2 

$("#progressBar").attr("width", bar);

}

$("#btn2").click(increment1);


function increment2() {

console.log(bar.style.width = width++ + 7 + "%");

width = width + 6 

$("#progressBar").attr("width", bar);

}

$("#btn3").click(increment2);


if (width == 100) {
	console.log("vse");
}
