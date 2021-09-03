gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    id: "first",
    trigger: ".section-hero",
    markers: true,
    start: "top top",
    end: "center center",
    scrub: 1
  }
});


tl.to(".centered-text-block", { opacity: 0,  duration: 3 })
.to(".hero-hardware", { transform: "matrix(1, 0, 0, 1, 0, 170)",  duration: 5 })
.to(".image-app-placeholder", { transform: "matrix(1, 0, 0, 1, 0, 0)",  duration: 5, delay: -5 })
  .to(".hero-hardware", { transform: "matrix(1, 0, 0, 1, 0, 0)",  duration: 5 });