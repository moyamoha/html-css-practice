const upperEyeLids = document.querySelectorAll(".eye-lid.upper");
const lowerEyeLids = document.querySelectorAll(".eye-lid.lower");

function setBlinking(eyeLids, property) {
	eyeLids.forEach((el) => {
		setInterval(() => {
			el.style[property] = "0";
			setTimeout(() => {
				el.style[property] = "-10px";
			}, 200);
		}, 4000);
	});
}

setBlinking(upperEyeLids, "top");
setBlinking(lowerEyeLids, "bottom");
