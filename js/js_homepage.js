//Display scroll-to-top Button when scrolling down
$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $(".scroll-to-top").addClass("active");
    } else {
       $(".scroll-to-top").removeClass("active");
    }
});

//Scroll-to-top smooth
/*
$(function() {
    $('.scroll-to-top').click (function() {
      $('html, body').animate({scrollTop: $('body').offset().top }, 'slow');
      return false;
    });
});
*/


//Display item when scrolling down
$(window).on("scroll", function() {
    if($(window).scrollTop() > 350) {
        $(".col-portfolio-detail").addClass("active");
    } 
});


$(window).on("scroll", function() {
    if($(window).scrollTop() > 350) {
        $(".col-portfolio-image").addClass("active");
    } 
});