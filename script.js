window.addEventListener("scroll", () => {
	document.getElementById("banner").style.top = window.scrollY * 0.5 + "px"
})

const params = new URLSearchParams(window.location.search);
const access = params.get("access");

if (access == "full") {
	document.querySelectorAll("a").forEach(anchor => {
		if (anchor.href.endsWith(".html")) {
	    	anchor.href += "?access=full";
		}
	});

	document.querySelectorAll(".public").forEach(element => {
		element.remove();
	});
} else {
	document.querySelectorAll(".private").forEach(element => {
		element.remove();
	});
}
