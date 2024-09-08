gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

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

tl.to(
  ".image",
  {
    delay: 1.5,
    opacity: 1,
  },
  "a"
);

tl.from(
  "footer",
  {
    opacity: 0,
    duration: 0.5,
  },
  "b"
);
tl.from(
  "nav",
  {
    opacity: 0,
    y: -40,
    duration: 0.5,
  },
  "b"
);

gsap.to(".image", {
  scale: 4.5,
  scrollTrigger: {
    trigger: ".image",
    scroller: "#main",
    scrub: 1,
    markers: true,
    start: "top 15%",
    pin: true,
  },
});

gsap.to(".aivehi", {
  scrollTrigger: {
    pin: true,
  },
});
