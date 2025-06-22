// gsap.from(".line h1",{
//     duration: 2,
//     y: 150,
//     stagger:0.2,
//     ease: "power2.out"
// })
let h5timer = document.querySelector("#line1-pt1 h5")
let grow = 0


let tl = gsap.timeline()
tl.from(".line h1", {
  duration: 1,
  y: 150,
  stagger: 0.2,
  
})
tl.to(".line h2",{
    animationName: "anime"
})
tl.from("#line1-pt1",{
    opacity: 0,
    onStart: function(){
        setInterval(function () {
          if (grow < 100) {
            grow += 1;
            h5timer.innerHTML = grow;
          } else {
            h5timer.innerHTML = grow;
          }
        }, 35);
    }
})
tl.to("#loader",{
    opacity: 0,
    duration: 1,
    delay: 3.5,
})
tl.from("#page1",{
    delay: 0.2,
    y:1200,
    opacity: 1,
    duration:0.5,
    ease:Power4
})
tl.to("#loader",{
    display: "none",
})