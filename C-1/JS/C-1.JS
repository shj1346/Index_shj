$(function(){//문서를 로딩 후 실행하라
    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass("on");
        $(this).addClass("on")

        t = $(this).index();
        $(".tabcon").hide();
        $(".tabcon").eq(t).show();
        return false;
    })








    //슬라이드
    var i = 0;

    function slide(){

        if(i<2){
            i++;
        }else{
            i=0
        }

        $(".slide ul li").fadeOut(300);
        $(".slide ul li").eq(i).fadeIn(300);

    }

    setInterval(slide,3000)





    //메뉴
    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })

    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })


    

    //팝업
    $('.pp').click(function(){
        $(".popup").show();
        return false;//링크차단
    })

    $(".button").click(function(){
        $(".popup").hide();
    })









})