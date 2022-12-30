var scene = new ScrollMagic.Controller();
// build a scene
var ourScene = new ScrollMagic.Scene({
  triggerElement: '#title',
  triggerHook: 0.9
})
  .setClassToggle('#title', 'appear')

  .addTo(scene);

// BLURB STUFF
var items = new ScrollMagic.Controller();

$('.item').each(function() {
  var itemSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.7
  })
    .setClassToggle(this, 'items-appear')
    .setIndicators()
    .addTo(items);
});
