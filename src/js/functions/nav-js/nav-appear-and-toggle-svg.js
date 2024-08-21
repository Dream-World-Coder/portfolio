document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const navMenu = document.querySelector(".nav-menu");
  const lis = document.querySelectorAll(".li");
  const closeIcon = document.querySelector(".close-icon");


  navMenu.addEventListener("click", function () {
    lis.forEach((li, index) => {
      setTimeout(() => {
        li.classList.add("active");
      }, 0+index*50)
      li.offsetHeight;
    });

    navMenu.style.display = "none";
    closeIcon.style.display = "flex";

    nav.style.height = "50vh";
  });


  closeIcon.addEventListener("click", function () {
    lis.forEach((li, index) => {
      setTimeout(() => {
        li.classList.remove("active");
      }, 0+index*50)
      li.offsetHeight;
    });
    
    navMenu.style.display = "flex";
    closeIcon.style.display = "none";

    nav.style.height = "0vh";
  });


  var w = 5000;
  if (window.innerWidth < w) {
    const lis = document.querySelectorAll(".li");
    lis.forEach((li) => {
      li.addEventListener("click", () => {
        const a_tag = li.querySelector("a");
        if (a_tag) {
          a_tag.click();
        }
      });
    });
  }
});
