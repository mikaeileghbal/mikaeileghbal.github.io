const mobileBtn = document.getElementById("burger");
const ulmenu = document.getElementById("menu-nav");
const linkhome = document.getElementById("menu-home");
const linkabout = document.getElementById("menu-about");
const linkwork = document.getElementById("menu-works");
const linkcontact = document.getElementById("menu-contact");
const linksocial = document.getElementById("menu-social");
const heroHeadline = document.querySelector(".headline-col-wrapper");
let sectionHero = document.querySelector(".hero-section");

mobileBtn.addEventListener("click", () => {
	setMenuState();
});

linkhome.addEventListener("click", function () {
	setMenuState();
});

linkabout.addEventListener("click", function () {
	setMenuState();
});

linkwork.addEventListener("click", function () {
	setMenuState();
});

linkcontact.addEventListener("click", function () {
	setMenuState();
});

function setMenuState() {
	ulmenu.classList.toggle("menu-show");
	ulmenu.classList.toggle("menu-links");

	mobileBtn.classList.toggle("is-open");

	mobileBtn.childNodes[1].classList.toggle("burger-1");
	mobileBtn.childNodes[3].classList.toggle("burger-2");
	mobileBtn.childNodes[5].classList.toggle("burger-3");
}


