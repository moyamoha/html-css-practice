const timestamps = document.querySelectorAll(".timestamp");

for (let t of timestamps) {
	if (t.textContent.length === 4) {
		t.textContent = "0" + t.textContent;
	}
}
