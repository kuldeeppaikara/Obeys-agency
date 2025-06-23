function loadingAnimation() {
  
let h5timer = document.querySelector("#line1-pt1 h5");
let grow = 0;

let tl = gsap.timeline();
tl.from(".line h1", {
  duration: 1,
  y: 150,
  stagger: 0.2,
});
tl.to(".line h2", {
  animationName: "anime",
});
tl.from("#line1-pt1", {
  opacity: 0,
  onStart: function () {
    setInterval(function () {
      if (grow < 100) {
        grow += 1;
        h5timer.innerHTML = grow;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 35);
  },
});
tl.to("#loader", {
  opacity: 0,
  duration: 1,
  delay: 3.5,
});
tl.from("#page1", {
  delay: 0.2,
  y: 1200,
  opacity: 1,
  duration: 0.5,
  ease: Power4,
});
tl.to("#loader", {
  display: "none",
});
tl.from("#nav", {
  opacity: 0,
});
tl.from("#l1 h1,#l2 h1,#l3 h2,#l3 h3,#l4 h1",{
  // duration: 1,
  y: 150,
  stagger: 0.2,
})
  
}
loadingAnimation();

function cursorAnime() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
      duration: 0.2,
    });
  });
  Shery.makeMagnet("#nav-pt2 h4");
}
cursorAnime();