
/// Fullpage
var myFullpage = new fullpage('#fullpage', {
  verticalCentered: false,
  navigation: true,
  css3: false,
  scrollingSpeed: 800,
  easing: 'easeInOutCubic',
});

/// Image Rolling
$(function() {
  $('.slow-rolling').jConveyorTicker({
    reverse_elm: true,
    anim_duration: 800
  });
});

/// Common
// $('.popup ._close').click(function() {
//   $('.popup').css('display', 'none');
// });
// $('.popup').click(function() {
//   $('.popup').css('display', 'none');
// });

$(document).ready(function() {

  var $chgType = $('.type-chg a');
  $($chgType).mouseenter(function() {
    $('.type-chg a').next().removeClass('on');
    $(this).next().addClass('on');
  });

});

/// Awards slide
$(".awards .slk ul").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2600,
  infinite: true,
  speed: 1200,
  centerMode: true,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  // appendDots: $('.wrap-visual .control .paging'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

  /*
  $(window).scroll(function () {
      var footerPos = $('.wrap-footer .container').offset().top - 1000;

      var scroll = $(window).scrollTop();
      if (scroll > footerPos) {
          btnTop.addClass('on');
      } else {
          btnTop.removeClass('on');
      }
  });
  */

  /// popup
  $(document).ready(function () {
    // Cookie
    var boxCookie = $('.popup');
    var btnCookie = $('.popup ._close');
    
    boxCookie.addClass('on');

    function TermsAndConditions() {
        days = 30;
        myDate = new Date();
        myDate.setTime(myDate.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = 'TermsAndConditions=Accepted; expires=' + myDate.toGMTString();
    }

    var cookie = document.cookie.split(';')
        .map(function (x) {
            return x.trim().split('=');
        })
        .filter(function (x) {
            return x[0] === 'TermsAndConditions';
        })
        .pop();

    if (cookie && cookie[1] === 'Accepted') {
        boxCookie.removeClass('on');
    }

    btnCookie.on('click', function () {
        TermsAndConditions();
        boxCookie.removeClass('on');
        return false;
    });
});
