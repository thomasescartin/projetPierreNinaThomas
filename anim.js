function expandcircle(e) {
	if (e.classList.contains("odd")) {
		if (e.classList.contains("expandedOdd")) {
			e.classList.remove("expandedOdd");
		} else {
			e.classList.add("expandedOdd");
		}
	} else if (e.classList.contains("even")) {
		if (e.classList.contains("expandedEven")) {
			e.classList.remove("expandedEven");
		} else {
			e.classList.add("expandedEven");
		}
	} else if (e.classList.contains("oddDown")) {
		if (e.classList.contains("expandedOddDown")) {
			e.classList.remove("expandedOddDown");
		} else {
			e.classList.add("expandedOddDown");
		}
	} else if (e.classList.contains("evenDown")) {
		if (e.classList.contains("expandedEvenDown")) {
			e.classList.remove("expandedEvenDown");
		} else {
			e.classList.add("expandedEvenDown");
		}
	}
}
