let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("body section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop - 40<= fromTop &&
      section.offsetTop + section.offsetHeight> fromTop
    ) {
      link.classList.add("current");
      link.classList.remove("active");
    } else if (fromTop<40) {
      if(link.hash==="#intro"){
        link.classList.add("active");
      }
    }else {
      link.classList.remove("current");
    }
  });
});
