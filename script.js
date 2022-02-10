
$(document).ready(jQuery(function() {
    $('a[href*=#]').bind('click', function(e) {
    e.preventDefault();
    
    var target = $(this).attr("href");
    
    $('html, body').stop().animate({ scrollTop: $(target).offset().top}, 1500, jQuery(function() {
    location.hash = target;
    });
    
    return false;
    });
   });


   var btn = $('#button');

$(window).scroll(jQuery(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', jQuery(function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
