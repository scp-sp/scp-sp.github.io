window.addEventListener("scroll", () => {
	document.getElementById("banner").style.top = window.scrollY * 0.5 + "px"
})

if (window.innerHeight > window.innerWidth) {
    document.getElementById("content").style.gridTemplateColumns = "auto"
    document.getElementById("sidebar").style.position = "static"
}
