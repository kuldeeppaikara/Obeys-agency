

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
  });
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

