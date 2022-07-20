window.addEventListener("DOMContentLoaded", function (e) {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.addEventListener("click", function (e) {
    menuIcon.classList.toggle("open");
    document.querySelector("nav").classList.toggle("active");
  });

  const wrapper = document.querySelector(".carousel-wrapper");
  const slides = document.getElementsByClassName("slide");
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot, index) => {
    dot.addEventListener("click", (e) => {
      dots.forEach((dot) => dot.classList.remove("active"));

      console.log(index);
      slides[index + 1].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });

      dot.classList.add("active");

      Array.prototype.slice
        .call(slides)
        .forEach((slide) => slide.classList.remove("active"));
      slides[index + 1].classList.add("active");
    });
  });
});
