$(document).ready(function () {
    // Cookie
    var boxCookie = $('.popup'); //컨텐츠가 들어가 있는 박스
    var btnCookie = $('.popup ._close'); //오늘하루 안보기 버튼
    
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

    btnCookie.on('click', function () { //오늘 하루 안보기 클릭시
        TermsAndConditions(); //쿠키과련 함수 실행
        boxCookie.removeClass('on');
        return false;
    });
});
