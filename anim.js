function expandcircle(e) {
	if (e.classList.contains("odd")) {
		expandOdd(e);
	} else if (e.classList.contains("even")) {
		expandEven(e);
	} else if (e.classList.contains("oddDown")) {
		expandOddDown(e);
	} else if (e.classList.contains("evenDown")) {
		expandEvenDown(e);
	}

	let right_panel = e.children[1];
	console.log("coucou");
	console.log(right_panel);

	if (right_panel.classList.contains("hidden")) {
		right_panel.classList.remove("hidden");
	} else {
		right_panel.classList.add("hidden");
	}

	// if(right_panel.classList.contains("hidden"))
}

function expandOdd(e) {
	if (e.classList.contains("expandedOdd")) {
		e.classList.remove("expandedOdd");
	} else {
		e.classList.add("expandedOdd");
	}
}

function expandEven(e) {
	if (e.classList.contains("expandedEven")) {
		e.classList.remove("expandedEven");
	} else {
		e.classList.add("expandedEven");
	}
}

function expandOddDown(e) {
	if (e.classList.contains("expandedOddDown")) {
		e.classList.remove("expandedOddDown");
	} else {
		e.classList.add("expandedOddDown");
	}
}

function expandEvenDown(e) {
	if (e.classList.contains("expandedEvenDown")) {
		e.classList.remove("expandedEvenDown");
	} else {
		e.classList.add("expandedEvenDown");
	}
}
