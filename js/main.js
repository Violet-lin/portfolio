gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(MotionPathPlugin);


/*  =========================
    Last Panel
    ========================= */ 

gsap.from("#ani-rect01", {
    scrollTrigger:{
        trigger:"#ani-rect01", 
        start:"top,center",
        toggleActions: "restart none none reverse",
        marker:true
        // scrub:1,

    }, 
    x:-400, 
    rotation:-25,
    duration:1
} )

gsap.from("#ani-rect02", {
    scrollTrigger:{
        trigger:"#ani-rect01", 
        start:"top,center",
        toggleActions: "restart none none reverse",
        marker:true
    }, 
    x:400, 
    rotation:25,
    duration:1
} )

