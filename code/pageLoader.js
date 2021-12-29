
let loadpage = document.querySelector(".loadpage__container");
let content = document.querySelector(".content");
console.log(loadpage);
window.addEventListener('load', (e) => {
    //pageLoaderSlide();

    //disableScroll();
    setTimeout(pageLoaderSlide, 2000);
    //setTimeout(enableScroll, 3000);
    //content.style.display = "unset";

});

function pageLoaderSlide() {
    loadpage.style.animation = "slide-up 0.9s ease-out";
    loadpage.style.animationFillMode = "forwards";

    //Remove the loader after animation ends
    loadpage.addEventListener("animationend", (e) => {
        e.target.remove();
    })

}


function disableScroll() {
    window.onscroll = function () {
        window.scrollTo(0, 0);
    };
    document.body.style.overflow = "hidden";
}

function enableScroll() {
    window.onscroll = function () { };
    document.body.style.overflow = "visible";
}
