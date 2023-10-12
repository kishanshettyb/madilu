$('.owl-carousel-first').owlCarousel({
  center: false,
  loop: true,
  rewind: true,
  margin: 20,
  mouseDrag: true,
  touchDrag: true,
  dots: false,
  autoplay: true,
  fluidSpeed: true,
  smartSpeed: 10000,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
})
$('.owl-carousel-second').owlCarousel({
  center: false,
  loop: true,
  rewind: true,
  margin: 20,
  mouseDrag: true,
  touchDrag: true,
  dots: false,
  autoplay: true,
  fluidSpeed: true,
  rtl: true,
  smartSpeed: 15000,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
})
feather.replace({ class: 'contact-icon', 'stroke-width': 2 })
