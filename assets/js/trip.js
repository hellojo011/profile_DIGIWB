$(function () {
	console.log("이런, 콘솔에서는 볼 게 없어요!");
	console.log("템플릿이 궁금하다면 HTML5 UP을 방문해보시는 것이 어떠신가요?");
	console.log("http://html5up.net/");
	console.log("그게 아니라면 이거라도 보실래요?");
});
(function(url) {
  // Create a new `Image` instance
  var image = new Image();

  image.onload = function() {
    // Inside here we already have the dimensions of the loaded image
    var style = [
      // Hacky way of forcing image's viewport using `font-size` and `line-height`
      'font-size: 1px;',
      'line-height: ' + 800 + 'px;',

      // Hacky way of forcing a middle/center anchor point for the image
      'padding: ' + 800 * .5 + 'px ' + 800 * .5 + 'px;',

      // Set image dimensions
      'background-size: ' + 533 + 'px ' + 533 + 'px;',

      // Set image URL
      'background: url('+ url +');'
     ].join(' ');

     // notice the space after %c
     console.log('%c ', style);
  };

  // Actually loads the image
  image.src = url;
})('https://cdn01.kurry.gallery/media_attachments/files/111/936/351/658/856/981/original/86e2e5d583707a82.jpg');