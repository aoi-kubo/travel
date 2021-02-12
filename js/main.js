'use strict';

$(function () {
  $('#openModal').click(function(){
      $('#modalArea').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea').fadeOut();
  });

  let $hoge = $('#js-rain');
	$hoge.raindrops({
		color: '#fff',
		waveHeight: 100,
		canvasHeight: 40,
		rippleSpeed: 0.01,
		rippleSpeed: 0.05,
		density: 0.04,
	});
});