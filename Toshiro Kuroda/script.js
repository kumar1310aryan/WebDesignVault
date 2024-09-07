const tl = gsap.timeline();

tl.from(
  "#lh1",
  {
    opacity: 0,
    delay: 0.5,
    duration: 1.5,
    y: -70,
  },
  "a"
);

tl.from(
  "#bh1",
  {
    opacity: 0,
    delay: 0.5,
    duration: 1.5,
    y: -70,
  },
  "a"
);

tl.from(
  "#lh2",
  {
    opacity: 0,
    delay: 0.5,
    duration: 1.5,
    y: 70,
  },
  "a"
);

tl.from(
  "#bh2",
  {
    opacity: 0,
    delay: 0.5,
    duration: 1.5,
    y: 70,
  },
  "a"
);

tl.to(".image", {
  duration: 1,
  scale: 1,
  ease: "power1.out",
});

tl.from(
  "footer",
  {
    opacity: 0,
    duration: 1,
  },
  "b"
);
tl.from(
  "nav",
  {
    opacity: 0,
    y: -40,
    duration: 1,
  },
  "b"
);
