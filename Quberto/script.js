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
