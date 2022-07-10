const topEyeLids = document.querySelectorAll(".eye-lid.top");
const bottomEyeLids = document.querySelectorAll(".eye-lid.bottom");
topEyeLids.forEach((el) => {
	setInterval(() => {
		el.style.top = "0";
		setTimeout(() => {
			el.style.top = "-10px";
		}, 200);
	}, 4000);
});

bottomEyeLids.forEach((el) => {
	setInterval(() => {
		el.style.bottom = "0";
		setTimeout(() => {
			el.style.bottom = "-10px";
		}, 200);
	}, 4000);
});
