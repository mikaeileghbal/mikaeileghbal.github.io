let headline = document.getElementById("headline");
const sectionHeader = document.getElementById("header");
const liebe = document.getElementById("liebe");
const shape = document.querySelector(".shape");
const sectionTitle = document.querySelectorAll(".section-title");
const containerAppear = document.querySelectorAll(".container-appear");
console.log(containerAppear);

let optionsHero = {
	//root: null,
	rootMargin: "-60px 0px 0px",
	threshold: 0,
};
let optionsAppear = {
	rootMargin: "0px 0px -150px",
	threshold: 0,
};

sectionHeader.addEventListener("animate", function (e) {
	sectionHeader.style.animation = "none";
});

function setHeader(visible) {
	if (visible) {
		sectionHeader.classList.add("slide");
	} else {
		sectionHeader.classList.remove("slide");
	}
}
//=======================
// About section observer
//=======================

let callbackHero = function (entries, observer) {
	entries.forEach((entry) => {
		let delta = 0.5;
		const ratio = entry.intersectionRatio;

		if (!entry.isIntersecting) {
			setHeader(true);
		} else {
			setHeader(false);
		}
	});
};

let observerHero = new IntersectionObserver(callbackHero, optionsHero);

//============================
// Appear Oberver for elements
//============================

let callbackAppear = function (entries, observer) {
	entries.forEach((entry) => {
		console.log("appear: ", entry.target);
		if (!entry.isIntersecting) {
			entry.target.classList.remove("appear");
		} else {
			entry.target.classList.add("appear");
		}
	});
};

let observerAppear = new IntersectionObserver(callbackAppear, optionsAppear);

observerHero.observe(sectionHero);

