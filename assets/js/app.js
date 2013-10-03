// Smooth Scroll Links
$(function() {
  // $('a[href*=#]:not([href=#])').click(function() {
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
  //       || location.hostname == this.hostname) {

  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //     if (target.length) {
  //       $('html,body').animate({
  //         scrollTop: target.offset().top
  //       }, 1000);
  //       return false;
  //     }
  //   }
  // });
  // Full height hero 
  $('#carousel').css({'height':(($(window).height())-91)+'px'});
  $(window).resize(function(){
  	$('#carousel').css({'height':(($(window).height())-91)+'px'});
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
      template: '<div class="panel instagram"> <div class="panel-body"><a href="{{link}}"><img src="{{image}}" /></a>  <p class="description">{{caption}}</p></div></div>'
  });
  userFeed.run()

  //Tumblr Feed
  $('#tumblr')
    .tumblr({
      url:'http://blog.wearepeople.co',
    });
  });

