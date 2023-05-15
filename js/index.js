$(function(){
    let i = 0;
  $("#header>h2").stop().animate({top:"25%",opacity:"1"},1500);

  $(".word p").on("click",function(){
    $(".wordbal").slideToggle(1000);
    $(".aboutstar").stop().animate({top:"60%",opacity:1},1500);
        if (i == 0){
          $(".aboutstar").stop().animate({top:"40%",opacity:1},900);
          i = 1;
        } else {
          $(".aboutstar").stop().animate({top:"60%",opacity:0},1000);
          i = 0; 
       }
  })

  /*Skills 숫자*/
  let j = 0;
  let k = 0;
  let l = 0;
  let m = 0;
  let n = 0;

  start1 = setInterval(function () {
    j++;
    if (j <= 95) {
      $(".number").eq(0).text(j);
    } else {
      clearInterval(start1);
    }
  }, 50);

  start2 = setInterval(function () {
    k++;
    if (k <= 95) {
      $(".number").eq(1).text(k);
    } else {
      clearInterval(start2);
    }
  }, 50);

  start3 = setInterval(function () {
    l++;
    if (l <= 85) {
      $(".number").eq(2).text(l);
    } else {
      clearInterval(start3);
    }
  }, 50);

  start4 = setInterval(function () {
    m++;
    if (m <= 85) {
      $(".number").eq(3).text(m);
    } else {
      clearInterval(start4);
    }
  }, 50);

  start5 = setInterval(function () {
    n++;
    if (n <= 90) {
      $(".number").eq(4).text(n);
    } else {
      clearInterval(start5);
    }
  }, 50);

  window.onload = function () {
    var elm = "body>div";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                    }catch(e){}
                }
            }
             
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
}
$("#navi li").on("click",function(){
  let target = $(this).children("a").attr("href");
  //alert(target);
  let pos = $(target).offset().top;
  //alert(pos);
  $("html,body").stop().animate({scrollTop:pos},1000);
});

  

  

  


  
















})