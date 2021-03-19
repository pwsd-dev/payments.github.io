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


$(document).ready(function () {
  $('.mob-slider-news').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    infinite: true,
    speed: 1000,
    adaptiveHeight: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    easing: 'ease',
    draggale: true,
    swipe: true,
    touchTreshold: 20,
    touchMove: false,
    prevArrow: document.querySelector('#prevArrow'),
    nextArrow: document.querySelector('#nextArrow')

  });

});


var isInViewport = function (elem) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
// read the link on how above code works

var findMe = document.querySelectorAll('.checkViewport');

window.addEventListener('scroll', function (event) {
  // add event on scroll
  findMe.forEach(element => {
    //for each .thisisatest
    if (isInViewport(element)) {
      //if in Viewport
      element.classList.add("isVisible");
    }
  });
}, false);


function openBlock() {
  const someId = document.getElementById("someId");

  someId.classList.toggle("active");

}

function closeBlock() {
  const someId = document.getElementById("someId");

  someId.classList.remove("active");

}






