gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    id: "hero",
    trigger: ".section-hero",
    markers: false,
    start: "top top",
    end: "center center",
    scrub: 1
  }
});

tl.to(".centered-text-block", { opacity: 0,  duration: 3 })
.to(".hero-hardware", { transform: "matrix(1, 0, 0, 1, 0, 170)",  duration: 5 })
.to(".image-app-placeholder", { transform: "matrix(1, 0, 0, 1, 0, 0)",  duration: 5, delay: -5 })
  .to(".hero-hardware", { transform: "matrix(1, 0, 0, 1, 0, 0)",  duration: 5 });

const tl2 = gsap.timeline({
  scrollTrigger: {
    id: "section",
    trigger: ".sticky-wrapper",
    markers: true,
    start: "top 10%",
    end: "150",
    scrub: 1
  }
});

gsap.to(".image-sellers", 1, {left:'50%', xPercent:'-50'});

tl2.to(".image-sellers", { transform: "matrix(0.7164, 0, 0, 0.7164, 440, 0)"});

gsap.to("#feature-1", {
  opacity: 1,
  y: -40,
  scrollTrigger: {
    id: "feature-1",
    trigger: ".image-hardware",
    start: "top 10%",
    end: "+=150",
    toggleActions: "play reverse reverse play",
    markers: {
      startColor: "blue",
      endColor: "blue",
      fontSize: "1rem"
    }
  }
});

gsap.to("#feature-2", {
  opacity: 1,
  y: -40,
  scrollTrigger: {
    id: "feature-2",
    trigger: "#feature-2",
    start: "top 10%",
    end: "+=150",
    toggleActions: "play none reverse reverse",
    markers: {
      startColor: "blue",
      endColor: "blue",
      fontSize: "1rem"
    }
  }
});