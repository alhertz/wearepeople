$(function(){
  
  var $container = $('#chapter-responses'),
      $checkboxes = $('#filters input');

  $container.imagesLoaded( function(){
    $container.isotope({
      itemSelector: '.chapter-response',
      masonry: {
        columnWidth: 20
      }
    });
  });
  
  $checkboxes.change(function(){
    var filters = [];
    // get checked checkboxes values
    $checkboxes.filter(':checked').each(function(){
      filters.push( this.value );
    });
    // ['.red', '.blue'] -> '.red, .blue'
    filters = filters.join(', ');
    $container.isotope({ filter: filters });
  });

});

$(function() {
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