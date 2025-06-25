

function gsapScrollTrigger() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
function loadingAnimation() {
  let tl = gsap.timeline();
  tl.from(".loaderContent h1", {
    y: 150,
    opacity: 0,
    duaration: 0.5,
    delay: 1,
    stagger: 0.2,
  });

  tl.from(".timer h2", {
    opacity: 0,
    onStart: function () {
      let time = document.querySelector("#time");
      let grow = 0;
      setInterval(function () {
        grow++;
        if (grow <= 100) {
          time.textContent = grow;
        } else {
          time.textContent = 100;
        }
      }, 20);
    },
  });
  tl.from(".waiting h3", {
    opacity: 0,
    y: 150,
    duaration: 0.5,
  });
  tl.to(".blink h2", {
    opacity: 0,
    duaration: 2,
    animationName: "blinker",
    duaration: 0.2,
  });

  tl.to("#loader .loaderContent h1, .timer h2, .waiting h3,.blink", {
    opacity: 0,
    delay: 1.2,
    duration: 0.1,
    stagger: 0.1,
    // y:-1200
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from(".heroContainer", {
    y: 1200,
    duration: 1,
  });

  tl.from("nav", {
    opacity: 0,
    y: -100,
  });
  tl.from(".heroContent h2, .heroContent", {
    y: 150,
    opacity: 0,
    // duaration : 0.1,
    stagger: 0.1,
  },"-=0.8");
}



function cursorAnime() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });
  Shery.makeMagnet(".menus a");
}



gsapScrollTrigger();
loadingAnimation();
cursorAnime();

function SheryAnime() {
  Shery.imageEffect(".imgDiv",{
    style:5,
    // debug: true,
    config:{"a":{"value":2.52,"range":[0,30]},"b":{"value":0.4,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.799994569354803},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1.37,"range":[0.1,5]},"durationIn":{"value":1.52,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":2.1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.6,"range":[0,1]},"antialias_threshold":{"value":0.03,"range":[0,0.1]},"noise_height":{"value":0.44,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
    gooey: true,
  }) 
}
SheryAnime();