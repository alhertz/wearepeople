// Smooth Scroll Links
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  // Full height hero 
  $('#hero').css({'height':(($(window).height())-0)+'px'});
  $(window).resize(function(){
  	$('#hero').css({'height':(($(window).height())-0)+'px'});
  });
  $(window).scroll(function() {    
	  var scroll = $(window).scrollTop();

	  if (scroll >= 20) {
	      $(".navbar-inner").addClass("dark");
	  } else {
	      $(".navbar-inner").removeClass("dark");
	  }
	});

  // Instagram feed
	var userFeed = new Instafeed({
      get: 'user',
      userId: 413142560,
      limit: '1',
    	resolution: 'standard_resolution',
      accessToken: '413142560.467ede5.e99050ac387c49fdadd4172f7cf8c8be',
      template: '<a href="{{link}}" class="thumbnail"><img src="{{image}}" /></a> <br /> <p>{{caption}}'
  });
  userFeed.run()
});

