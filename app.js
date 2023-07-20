gsap.to(".paper-plane", {
    duration:2,
    x:300,
    backgroundColor:"white",
    borderRadius: "32px",
    border:"1 px solid transparent", 
    ease: "steps (4)",
}); 

gsap.to(".paper-plane2", {
    duration:2,
    x:300,
    backgroundColor:"white",
    borderRadius: "32px",
    border:"1 px solid transparent", 
    ease: "steps (4)",
}); 

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


