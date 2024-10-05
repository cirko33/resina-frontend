function moveBackground() {
  const images = document.querySelectorAll(".bg-img");
  let currentIndex = 0;

  function changeBackground() {
    images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = 1;
  }

  setInterval(changeBackground, 2000);
}

function toggleHamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });

  mobileNav.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
}

function reduceIframeSize() {
  const iframe = document.querySelector("map");

  function adjustIframeSize() {
    if (window.innerWidth < 768) {
      iframe.style.width = "20px";
    } else {
      iframe.style.width = "";
    }
  }

  window.addEventListener("resize", adjustIframeSize);
  adjustIframeSize();
}

moveBackground();
toggleHamburgerMenu();
reduceIframeSize();
