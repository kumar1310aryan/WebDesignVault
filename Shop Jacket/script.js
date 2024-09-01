gsap.from([".heading", "nav"], {
  x: 1000,
  opacity: 0,
  duration: 1.5,
  delay: 0.3,
  stagger: 0.2,
});

gsap.from(".exclusive", {
  x: -1000,
  opacity: 0,
  duration: 1.5,
  delay: 0.3,
});

gsap.from(".addToCart, .image", {
  opacity: 0,
  duration: 1.5,
  delay: 1,
  stagger: 0.3,
});
