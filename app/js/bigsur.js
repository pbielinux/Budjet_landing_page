const features = document.querySelectorAll('.feature');

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    id: "hero",
    trigger: ".section-hero",
    start: "top top",
    end: "center top",
    scrub: 1,
    markers: {
      startColor: "purple",
      endColor: "purple"
    }
  }
});

tl.to(".centered-text-block", { autoAlpha: 0,  duration: 3 })
.to(".hero-hardware", { transform: "matrix(1, 0, 0, 1, 0, 170)",  duration: 5 })
.to(".image-app-placeholder", { transform: "matrix(1, 0, 0, 1, 0, 0)",  duration: 5, delay: -5 })
  .to(".hero-hardware", { transform: "matrix(1, 0, 0, 1, 0, 0)",  duration: 5 });

const tl2 = gsap.timeline({
  scrollTrigger: {
    id: "hardware",
    trigger: ".section-header",
    start: "bottom top+=50",
    scrub: 1,
    markers: {
      startColor: "lime",
      endColor: "lime"
    },
  }
});

gsap.to(".image-sellers", 1, {left:'50%', xPercent:'-50'});

tl2.to(".image-sellers", { transform: "matrix(0.7164, 0, 0, 0.7164, 440, 0)"});


features.forEach((feature, index) => {
  ScrollTrigger.create({
    trigger: feature,
    id: index+1,
    duration: 0.8,
    start: "top+=20 30%",
    end: "bottom 30%",
    toggleActions: "play reverse reverse reverse",
    onEnter: () => {
      feature.classList.add('js-feature-item-engaged');
      feature.classList.add('js-feature-item-transition');
    },
    onLeave: () => {
      feature.classList.remove('js-feature-item-engaged');
      feature.classList.add('js-feature-item-transition');
    },
    markers: {
      startColor: "fuchsia",
      endColor: "fuchsia",
      fontSize: "1rem",
      indent: 100
    }
  });
});
