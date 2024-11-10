// カルーセル
$('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplayspeed: 5000,
    arrowa: false,
})
// ホバー
$('.home').on('mouseover',function () {
    $(this).animate({
        opacity: 0.5
    },100);
});
$('.home').on('mouseout',function () {
    $(this).animate({
        opacity: 1.0
    },100);
});
$('.menu1').on('mouseover',function () {
    $(this).animate({
        opacity: 0.5
    },100);
});
$('.menu1').on('mouseout',function () {
    $(this).animate({
        opacity: 1.0
    },100);
});
$('.menu2').on('mouseover',function () {
    $(this).animate({
        opacity: 0.5
    },100);
});
$('.menu2').on('mouseout',function () {
    $(this).animate({
        opacity: 1.0
    },100);
});
// ボタン出現
$(window).scroll(function (){
    if($(this).scrollTop() > 100){
        $('#backBtn').fadeIn();
    }else{
        $('#backBtn').fadeOut();
    }
});
// なめらか
$('a[href^="#"]').click(function () {
    const speed = 600;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    return false;
  });
//   フェードイン
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

//  モーダル
  $('.works img').click(function () {
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    $('.big-img').attr({
      src: imgSrc,
      alt: imgAlt,
    });
    $('.modal').fadeIn();
  });

//   閉じる
  $('.close-btn').click(function () {
    $('.modal').fadeOut();
  });
