window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  // Initialize all div with carousel class
  var carousels = bulmaCarousel.attach(".carousel", options);

  // Loop on each carousel initialized
  for (var i = 0; i < carousels.length; i++) {
    // Add listener to event
    carousels[i].on("before:show", (state) => {
      console.log(state);
    });
  }

  var autoplay_options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Initialize all div with autoplay carousel class
  var autoplay_carousels = bulmaCarousel.attach(".autoplay-carousel", autoplay_options);

  // Loop on each autoplay carousel initialized
  for (var i = 0; i < autoplay_carousels.length; i++) {
    // Add listener to event
    autoplay_carousels[i].on("before:show", (state) => {
      console.log(state);
    });
  }

  // Access to bulmaCarousel instance of an element
  var element = document.querySelector("#my-element");
  if (element && element.bulmaCarousel) {
    // bulmaCarousel instance is available as element.bulmaCarousel
    element.bulmaCarousel.on("before-show", function (state) {
      console.log(state);
    });
  }
});
