
$(function(){
    
$('#recent_part').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<h6 class="right_ar"><i class="fa-solid fa-angle-right"></i></h6>',
    nextArrow:'<h6 class="left_arr"><i class="fa-solid fa-angle-left"></i></h6>',
  })
  new VenoBox({
    selector: '.my-video-links',
});
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
})
              
