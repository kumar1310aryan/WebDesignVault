const tl = gsap.timeline();

tl.to("#box1", {
  x: 1000,
  y: 400,
  rotate: 360,
  duration: 2,
  delay: 1,
  scale: 0.5,
  backgroundColor: "rgb(87, 8, 66)",
});

tl.to("#box2", {
  x: 1000,
  rotate: 360,
  duration: 2,
  delay: 1,
  scale: 0.5,
});

tl.to("#box3", {
    x: 1000,
    y: -400,
    rotate: 360,
    duration: 2,
    delay: 1,
    scale: 0.5,
    backgroundColor: "aquamarine",
  });
