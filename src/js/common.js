$(function(){
	$(".header").load("/header.html");
	$(".footer").load("/footer.html");
});
$(window).load(function(){
	$('.header .menu_all').on('click', function(){
		$('.pop_menu').show();
		$(this).css('opacity','0');
		$('.header .btn_close').show();
		$('html, body').addClass('on_popup');
	});
	$('.header .btn_close').on('click', function(){
		$('.pop_menu').hide();
		$(this).hide();
		$('.header .menu_all').css('opacity','1');
		$('.pop_menu li').removeClass('on');
		$('html, body').removeClass('on_popup');

	});

	$('.pop_menu li').on('click', function(){
		var menuIdx = $('.pop_menu li').index();
		console.log(menuIdx);
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
	});

	$('.btn_top').on('click', function(){
		$('html, body').animate({scrollTop : 0}, 800);
	});

	$('.login_box').on('click', function(e){
		$(this).addClass('on');
		return false;
	});
	$(document).on('click', function(){
		$('.login_box').removeClass('on');
	});
});


const TS = TS || {};

TS.notice = (function(){    
    const tag = {
        ev_list : $('.ev_list > li'),
        ev_more : $('.view_more.event_more')        
    }
    function eventTag(){
        tag.ev_list.css("border","5px solid red");
        tag.ev_more.css("border","5px solid red")
    }
    function eventListEffect(){
        console.log("test");
    };
    return {
        init : function(){
            eventListEffect();
        }
    }
})();

TS.notice.init();

    var cont = 1;			// 현재 페이지
    var category = '01';	// 제품 카테고리
    var code = '00';

    var _data = {
        page : cont,			// 현재페이지
        pgsize : 5,				// 5개씩 보여주기
        category : category		// 카테고리
    }


    function EventList(method){
        $.ajax({
            type: method,
            url: 'http://localhost:8080/posts',
            dataType: 'json',
            async : false,
            data: _data,
            beforeSend: function(xhr) {
            },
            complete: function(request,status) {
            }
        }).done(function(data, textStatus, jqXHR) {
            console.log("a");
            console.log(data);
        }).fail(function(jqXHR, textStatus) {
            alert('textStatus2: ' + textStatus);
        });            
    }

var cont = 1;			// 현재 페이지
var category = '01';	// 제품 카테고리
var code = '00';

/* 아작스 쳐서 html 삽입하기 ex) 더보기 */
function listMore(){
    var _data = {
        page : cont,			// 현재페이지
        pgsize : 5,				// 5개씩 보여주기
        category : category		// 카테고리
    }
    $.ajax({
        type: 'POST',
        url: 'json결과파일',
        dataType: 'json',
        async : false,
        data: _data,
        beforeSend: function(xhr) {
        },
        complete: function(request,status) {
        }
    }).done(function(data, textStatus, jqXHR) {
        if (data) {
            if (data.resultCode == '000') {
                var html = '';
                if(data.total_cnt < 1){		// 리스트가 없을때
                    var noResult = '<div class="no_search"><div class="img_wrap"><img src="../images/daily_event_noresult.jpg" alt=""></div><h3 class="noto_b">검색 결과가 없습니다.</h3><p>다른 검색어를 입력하시거나 철자와<br> 띄어쓰기를 확인해보세요.</p></div>';
                    $('.accordion_table').append(noResult);

                    $('.etc_btn').css('display','none');	// 더보기 버튼 숨기기

                }else if(data.total_cnt > 0){	// 리스트가 1개이상일때
                    $.each(data.rows, function(){
                        html += '<li class="accoridon_table_wrap">';
                        html += '<div class="accordion_table_con">';
                        html += '<button class="accordion_table_quest">'+this.contents+'</button>';
                        if(this.idx != ''){
                        html += '<div class="accordion_table_answer" style="display:block;">'+this.reply+'';
                        }else{
                        html += '<div class="accordion_table_answer">'+this.reply+'';
                        }
                        if(this.file_name != ''){
                        html += '<p class="att_file">첨부파일 | <span class="file_name"><a href="'+this.file_path+this.file_name+'" target="_blank">'+this.file_name+'</a></span></p>';	// 첨부파일 추가
                        }
                        html += '</div>';
                        html += '</div>';
                        html += '</li>';
                    });

                    $('.accordion_table ul').append(html);	// html 삽입
                    $('.no_result').css('display','none');	// 검색결과X 숨기기

                    if(data.total_page == cont){	// 전체페이지와 현재페이지 같으면
                        $('.etc_btn').css('display','none');	// 더보기 버튼 숨기기
                    }else{
                        $('.etc_btn').css('display','block');	// 더보기 버튼 보이기
                    }
                }
                return;
            }else{
                alert('처리시 오류가 발생했습니다.');
            }
        } else {
            alert('처리시 오류가 발생했습니다.');
        }
    }).fail(function(jqXHR, textStatus) {
        alert('textStatus2: ' + textStatus);
    });
}



