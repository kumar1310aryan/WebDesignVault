gsap.to("#page2 h1", {
  transform: "translateX(-45%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    scrub: 1,
    markers: true,
    start: "top 20%",
    pin: true,
  },
});
