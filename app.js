gsap.registerPlugin(ScrollTrigger);



gsap.to(".square",{
     x: 800,
     duration: 10,
     scrollTrigger: {
        trigger:".square",
        start:"top center",
        end: "bottom center",
        scrub:5,
        pin:true,
        toggleActions:"restart none reverse none",
        markers: true,
     }
})
