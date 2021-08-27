const { to, set, timeline, registerPlugin } = gsap;

registerPlugin(ScrollTrigger);

function initialiseElements() {
    gsap.from(".hero-hardware", { transform: "scale(2.2)" });
    gsap.from(".title-container", { opacity: 1 });
}

initialiseElements();

const zoomTimeline = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".outer",
      pin: true,
      scrub: true,
      start: "start start",
    }
  });
  tl.addLabel("start")
    .to(".title-container", { opacity: 0 }, "start")
    .to(".hero-hardware", {
      transform: "scale(1)"
    });
  return tl;
};

const pinTimeline = () => {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".first-super",
      scrub: true,
      start: 'bottom bottom',
      end: '+=100',
      // markers: true,
      pin:'#text-block',
      pinReparent:true,
      onEnter:(scrollTrigger)=>{
        scrollTrigger.refresh();
      }
    }
  });
  tl2.addLabel("pin-text")
  .to('.intro-text__title', {opacity:1, delay:1})
  return tl2;
};

const masterTimeline = gsap.timeline();
masterTimeline.add(zoomTimeline);
masterTimeline.add(pinTimeline);