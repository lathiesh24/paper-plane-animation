gsap.registerPlugin(ScrollTrigger);

gsap.to(".square",{
     x: 800,
     duration: 2,
     scrollTrigger: ".square2"
})
