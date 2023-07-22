gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to(".box",{
     x: 800,
     duration: 2,
})

tl.to(".box",{
    y:200,
    duration: 3,
})

tl.to(".box",{
    x:0,
    duration: 3,
})