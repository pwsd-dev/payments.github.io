gsap.to('.header-block-nav__logo', {
    width: '10%',
    scrollTrigger: {
      trigger: ".banner",
      start: 'top 0',
      end: 'bottom center',
      scrub: 1,
    }
});

gsap.to('.header', {
    padding: '1% 0',
    scrollTrigger: {
      trigger: ".banner",
      start: 'top 0',
      end: 'bottom center',
      scrub: 1
    }
  });

gsap.to('.border_top.left', {
    left: '0',
    scrollTrigger: {
        trigger: ".platform",
        start: 'top +=1500',
        end: 'bottom center',
        scrub: 1,
    }
});
gsap.to('.border_top.right', {
    right: '0',
    scrollTrigger: {
        trigger: ".platform",
        start: 'top +=1500',
        end: 'bottom center',
        scrub: 1,
    }
});
gsap.to('.border_side', {
    height: '100%',
    scrollTrigger: {
        trigger: ".platform",
        start: 'top +=500',
        end: 'bottom center',
        scrub: 1,
    }
});
gsap.to('.border_bottom', {
    width: '50%',
    scrollTrigger: {
        trigger: ".platform",
        start: 'top 0',
        end: 'bottom center',
        scrub: 1,
    }
});
// gsap.to('.border_top.right', {
//     right: '0',
//     scrollTrigger: {
//         trigger: ".platform",
//         start: 'bottom bottom',
//         end: 'bottom center',
//         scrub: true,
//      
//     }
// });