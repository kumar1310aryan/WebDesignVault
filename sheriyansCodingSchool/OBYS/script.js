var tl = gsap.timeline();

tl.from(".line h1", {
  y: 150,
  stagger: 0.2,
  duration: 0.6,
  delay: 0.5,
});

tl.from("#line1-part1, .line h2", {
  opacity: 0,
  onStart: function () {
    var h5Timer = document.querySelector("#line1-part1 h5");
    var i = 0;
    setInterval(function () {
      if (i < 100) {
        i++;
        h5Timer.innerHTML = i++;
      } else {
        h5Timer.innerHTML = 100;
      }
    }, 35);
  },
});

tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 3,
});

tl.from("#page1", {
  delay: 0.2,
  y: 1200,
  opacity: 0,
  duration: 0.5,
  ease: Power4,
});

tl.to("#loader", {
  display: "none",
});
