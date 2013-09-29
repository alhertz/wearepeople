// Smooth scroll links
$(function() {
    $('#nav').bind('click', 'a.smooth', function(event) {
        $.scrollTo(event.target.hash, 2000);
    });
});