
$(function() {
  // Smooth Scroll Links
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
  $('#carousel, .hero iframe').css({'height':(($(window).height())-91)+'px'});
  $(window).resize(function(){
  	$('#carousel, .hero iframe').css({'height':(($(window).height())-91)+'px'});
  });

  // Chapter Text Reveal on Hover
  $(".chapter").hover(
    function() {
      $(this).find(".chapter-details").fadeIn('fast');
    }, function() {
      $(this).find(".chapter-details").fadeOut('fast');
    }
  );

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

  // var container = document.querySelector('#container');
  // var msnry;
  // // initialize Masonry after all images have loaded
  // imagesLoaded( container, function() {
  //   msnry = new Masonry( container, {
  //     // options
  //     columnWidth: 200,
  //     itemSelector: '.item'
  //   }); 
  // });


  // or with jQuery
  // initialize Masonry
  var $container = $('#container').masonry();
  // layout Masonry again after all images have loaded
  $container.imagesLoaded( function() {
    $container.masonry();
  });