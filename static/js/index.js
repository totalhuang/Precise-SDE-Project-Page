window.HELP_IMPROVE_VIDEOJS = false;

function initBulmaWidgets() {
  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    navigation: true,
    pagination: true,
    // Default breakpoints use slidesToShow 2/3 on wide windows, which hides
    // arrows when slide count is small — keep empty so always one slide.
    breakpoints: [],
  };

  if (typeof bulmaCarousel === 'undefined') {
    console.error('bulmaCarousel is missing: check static/js/bulma-carousel.min.js path.');
    return;
  }

  try {
    bulmaCarousel.attach('.carousel', options);
  } catch (e) {
    console.error('bulmaCarousel.attach failed:', e);
  }

  if (typeof bulmaSlider !== 'undefined') {
    try {
      bulmaSlider.attach();
    } catch (e) {
      console.warn('bulmaSlider.attach:', e);
    }
  }
}

// Wait for window load so images have dimensions (slider width/layout).
if (document.readyState === 'complete') {
  initBulmaWidgets();
} else {
  window.addEventListener('load', initBulmaWidgets);
}
