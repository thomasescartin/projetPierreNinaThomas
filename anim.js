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
	}
}
