const tl = gsap.timeline();

gsap.from(".nav h3", {
  y: -100,
  // opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.from("#h1-p1", {
  x: -1000,
  opacity: 0,
  duration: 1.5,
  delay: 0.3,
});

gsap.from("#h1-p3", {
  x: 1000,
  opacity: 0,
  duration: 1.5,
  delay: 0.3,
});

gsap.from("#h1-p2", {
  opacity: 0,
  duration: 1.5,
  delay: 2,
});

tl.from("img", {
  opacity: 0,
  rotate: 40,
  delay: 1,
  duaration: 1.3,
  stagger: 0.5,
});

gsap.from("footer", {
  opacity: 0,
  duration: 2,
  delay: 2,
});
