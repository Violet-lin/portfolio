gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(MotionPathPlugin);
/*=========================
  Landing Panel
  =========================*/
gsap.from("#landing-hero", {
  opacity: 0,
  duration: 1.5,
});

let tl = gsap.timeline();

tl.from("#landingPg", {
  opacity: 0,
  //   x: -20,
  duration: 1,
  ease: "expo.out",
})
  .from(
    [".landing-text01", ".landing-text02", ".landing-text03"],
    {
      opacity: 0,
      translateY: 50,
      duration: 1.5,
    },
    "+=1"
  )

  .from(
    ".landing-button",
    {
      opacity: 0,
      duration: 1.5,
    },
    "+=0"
)
.from(
  "#scrollAni",
  {
    opacity: 0,
    duration: .5,
  },
  "+=0"
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
