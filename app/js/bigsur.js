const features = document.querySelectorAll('.feature-content-wrapper');

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

/* gsap.set(".image-sellers", {
  scaleX: 0.7164,
  scaleY: 0.7164,
  xPercent: -50,
  left: "50%"
});

const tlSellers = gsap.timeline();

tlSellers.to(".image-sellers", {
  x: 500,
  scrollTrigger: {
    id: "first",
    trigger: ".section-header",
    start: "bottom top+=200",
    scrub: 1,
    markers: {
      startColor: "lime",
      endColor: "lime",
    },
  }
}).to(".image-sellers", {
  scaleX: 0.9,
  scaleY: 0.9,
  x: -800,
  duration: 3,
  toggleActions: "play complete reverse reverse",
  scrollTrigger: {
    id: "second",
    trigger: "#feature-2",
    start: "bottom-=50 center",
    end: "bottom+=100 center",
    scrub: 1,
    markers: {
      startColor: "lime",
      endColor: "lime",
      ident: 100
    },
  }
});


features.forEach((feature, index) => {
  ScrollTrigger.create({
    trigger: feature,
    id: index+1,
    duration: 0.8,
    start: "top-=55 center",
    end: "bottom center",
    onEnter: () => {
      feature.classList.add('js-feature-item-engaged');
      if (index === 1 || index === 3) {
        feature.classList.add('js-feature-item-transition');
      }
    },
    onLeave: () => {
      feature.classList.remove('js-feature-item-engaged');
      feature.classList.add('js-feature-item-transition');
    },
    onEnterBack: () => {
      feature.classList.add('js-feature-item-engaged');
      if (index === 0 || index === 2) {
        feature.classList.remove('js-feature-item-transition');
      }
    },
    onLeaveBack: () => {
      feature.classList.remove('js-feature-item-engaged');
      if (index === 0 || index === 2) {
        feature.classList.remove('js-feature-item-transition');
      }
    },
    markers: {
      startColor: "fuchsia",
      endColor: "fuchsia",
      fontSize: "1rem",
      indent: 100
    }
  });
}); */
