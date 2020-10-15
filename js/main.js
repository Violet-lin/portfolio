gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(MotionPathPlugin);
/*=========================
  Landing Panel
  =========================*/
gsap.from(
  "#landing-hero",
  {
    opacity: 0,
    x: -20,
    duration: 0.5,
  },
  3
);

let tl = gsap.timeline();

tl.from("#landingPg", {
  opacity: 0,
  //   x: -20,
  duration: 1,
  ease: "expo.out",
})
  .from(
    ".landing-text01",
    {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "back.out",
    },
    "+=0.5"
  )
  .from(
    ".landing-text02",
    {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "back.out",
    },
    "-=0.2"
  )
  .from(
    ".landing-text03",
    {
      opacity: 0,
      duration: 1,
      ease: "back.out",
    },
    "+=0.2"
  )
  .from(
    ".landing-button",
    {
      opacity: 0,
      duration: 1,
      ease: "back.out",
    },
    "+=0.2"
  );
/*=========================
  Last Panel
  =========================*/

gsap.from("#ani-rect01", {
  scrollTrigger: {
    trigger: "#ani-rect01",
    start: "top,center",
    toggleActions: "restart none none reverse",
    marker: true,
    // scrub:1,
  },
  x: -400,
  rotation: -25,
  duration: 1,
});

gsap.from("#ani-rect02", {
  scrollTrigger: {
    trigger: "#ani-rect01",
    start: "top,center",
    toggleActions: "restart none none reverse",
    marker: true,
  },
  x: 400,
  rotation: 25,
  duration: 1,
});
