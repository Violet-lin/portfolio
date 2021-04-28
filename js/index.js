gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(MotionPathPlugin);
/*=========================
  Preloader
  =========================*/

window.onload = function(){ document.querySelector(".preloader").style.display = "none"; }

/*=========================
  Landing Panel
  =========================*/
gsap.from("#landingimg", {
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
    [".landingtxt__01", ".landingtxt__02", ".landingtxt__03"],
    {
      opacity: 0,
      translateY: 50,
      duration: 1,
    },
    "+=0"
  )

  .from(
    ".landingtxt__btn",
    {
      opacity: 0,
      duration: 1,
    },
    "+=0"
  )
  .from(
    ".deco_btn_dot",
    {
      opacity: 0,
      duration: 0.5,
    },
    "+=0.5"
  )
  .from(
    "#decoScroll",
    {
      opacity: 0,
      duration: 0.5,
    },
    "+=0.5"
)
.from(
  "#scrollAni",
  {
    opacity: 0,
    duration: 0.5,
  },
  "+=0"
);
/*=========================
  Last Panel
  =========================*/
/*
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
*/