const features = document.querySelectorAll('.feature-content-wrapper');
const section = document.querySelector('.section-sellers');
const hardware = document.querySelector('.hardware-wrapper');
var vw;
var vh;

window.addEventListener("resize", function(event) {
  vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  if (vw < 1069) {
      section.classList.add('static');
      hardware.classList.add('hidden');
  } else {
      section.classList.remove('static');
      hardware.classList.remove('hidden');
  };
});
  

  gsap.set(".image-sellers-section", {
    scaleX: 5.7164,
    scaleY: 5.7164,
    xPercent: -50,
    left: "50%"
  });
      
      gsap.timeline({
        scrollTrigger: {
          id: "first",
          trigger: ".sticky-wrapper",
          start: "top top+=200",
          end: "top+=1200 top",
          scrub: 1,
          /* markers: {
            startColor: "lime",
            endColor: "lime",
          } */
        }
      }).to(".image-sellers-section", {
        x: 500,
        y: 100
      }).to(".image-sellers-section", {
        x: 800,
        scaleX: 1,
        scaleY: 1,
      }).to(".image-sellers-section", {
        x: -800
      }).to(".image-sellers-section", {
        y: 300
      });
      
      
      features.forEach((feature, index) => {
        ScrollTrigger.create({
          trigger: ".sticky-wrapper",
          id: index+1,
          duration: 0.8,
          start: "top+=" + ((index + 1) * 100 + 500) + " top",
          end: "top+=" + ((index + 1) * 100 + 800) + " top",
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
          /* markers: {
            startColor: "fuchsia",
            endColor: "fuchsia",
            fontSize: "1rem",
            indent: 100
          } */
        });
      });

  


gsap.registerPlugin(ScrollTrigger);


if (vw < 700) {
  gsap.set(".hero-hardware", {
    scaleX: 2.13507,
    scaleY: 2.13507,
    Y: 7
  });
} else {
  gsap.set(".hero-hardware", {
    scaleX: 5.13507,
    scaleY: 5.13507,
    Y: 7
  });
}

gsap.to(".title", {
  opacity: 0,
  scrollTrigger: {
    id: "hero-intro",
    trigger: ".section-hero",
    toggleActions: "play complete reverse reset",
    start: "top top",
    end: "top+=100 top",
    scrub: 1,
    //markers: true
  }
});

gsap.timeline({
  scrollTrigger: {
    id: "hero-hardware",
    trigger: ".section-hero",
    toggleActions: "play complete reverse reset",
    start: "top+=100 top",
    end: "center top",
    scrub: 1,
    //markers: true
  }
}).to(".hero-hardware", {
  scaleX: 1,
  scaleY: 1,
}).to(".hero-hardware", {
  y: -100
});

gsap.to(".image-app-placeholder", {
  scaleX: 1,
  scaleY: 1,
  yPercent: -50,
  scrollTrigger: {
    id: "hero-app",
    trigger: ".section-hero",
    toggleActions: "play complete reverse reset",
    start: "top+=400 top",
    end: "top+=700 top",
    scrub: 1,
    //markers: true
  }
});


