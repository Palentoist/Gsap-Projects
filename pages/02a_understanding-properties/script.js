import gsap from "gsap";

gsap.to(".box" , {
    opacity : 1,
    rotation : 360,
    background : "#ff6f61",
    scale : 1.25,
    duration : 2,
    ease : "bounce",
    paused : true,
    stagger : 1,
});