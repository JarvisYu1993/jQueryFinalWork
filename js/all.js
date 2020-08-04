$(document).ready(function () {
    
    $('.btn_link').click(e=>{
      $(this).toggleClass('active');
      $(this).parent().find('.itemsdown').slideToggle();
    
    $(this).parent().siblings().find('.itemsdown').slideUp();
    $(this).parent().siblings().find('.btn_link').removeClass('active');
  });
    
    $('.btn_link').click(e=>{
      e.preventDefault();
      $('.itemsdown').slideToggle();
    });
    
    //按鈕往上滑動
    $('.topbtn a').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop: 0},1000);
    });
    var mySwiper = new Swiper(".swiper-container", {
      derection: "horizonral",
      //是否重複播放
      loop: true,
      //速度
      speed: 1500,
  
      //If we need Auto Play
      autoplay: {
        delay: 2000
      },
  
      //change effect
      effect: "slide",
      
  
      //pagination
      pagination: {
        el: ".swiper-pagination"
      },
      
    });
      
    //lightbox
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
      showImageNumberLabel: true
    });
});