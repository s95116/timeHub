$(document).ready(function(){


  //Login page on click functions
  $('.toggle').on('click', function() {
    $('.container').stop().addClass('active');
  });

  $('.close').on('click', function() {
    $('.container').stop().removeClass('active');
  });

  // Enable popover
  $('[data-toggle="popover"]').popover()






});