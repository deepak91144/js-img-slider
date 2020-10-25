let imgCon = document.querySelector(".img-container");
let img = document.querySelectorAll(".img-container img");
console.log(imgCon);
let counter = 0;
const run = () => {
	counter++;
	if (counter > img.length - 1) {
		counter = 0;
	}
	// console.log(imgCon);
	imgCon.style.transform = `translateX(${-counter * 500}px)`;
};
setInterval(() => {
	run();
}, 2000);
