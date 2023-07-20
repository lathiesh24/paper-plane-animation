gsap.set(".paper-plane " ,{ transformOrigin:"20% 20%"}); 

gsap.set(".paper-plane2" ,{ transformOrigin:"50% 50%"}); 

gsap.to(".paper-plane",{
    duration: 2,
    rotation: 360
})

gsap.to(".paper-plane2",{
    duration: 2,
    rotation: 360
})

gsap.to("paper-plane",{
    duration: 2,
     x:400
})