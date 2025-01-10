// var slider = tns({
//   container: '.my-slider',  // The class or id of your slider container
//   items: 1,                 // Number of items to show at a time
//   slideBy: 'page',          // How to navigate between slides
//   autoplay: true            // Enables autoplay
// });

var slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  nav: true, // Hide navigation
  controlsText: ['Prev', 'Next'],  // Custom controls text
  loop: true       // Enable loop
});