Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hover", {
  videos: ["./assets/1.mp4", "./assets/2.mp4", "./assets/3.mp4"],
});

gsap.to(".left-element", {
  scrollTrigger: {
    trigger: "#featured-contents",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-400%",
  ease: Power1,
});

let elements = document.querySelectorAll(".left-element");
Shery.imageEffect(".images", {
  style: 2,
  slideStyle: (setScroll) => {
    elements.forEach(function (elem, index) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

function newInspoScrollAnimation() {
  let lastScrollY = window.scrollY; // Store the initial scroll position
  const heading = document.querySelector("#new-heading-wrapper"); // Select the wrapper

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Check scroll direction
    if (currentScrollY > lastScrollY) {
      // Scrolling down: move the animation to the left
      heading.style.animation = "marquee-left 20s linear infinite";
    } else {
      // Scrolling up: move the animation to the right
      heading.style.animation = "marquee-right 20s linear infinite";
    }

    lastScrollY = currentScrollY; // Update lastScrollY with current position
  });
}

newInspoScrollAnimation();
