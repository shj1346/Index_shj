$(function(){


    //슬라이드
    function slide(){
        $(".slide>ul").animate({left:"-1200px"},1000,function(){
            $(".slide>ul").append($(".slide>ul>li").first())
            $(".slide>ul").css({left:0})
        })

    }

    setInterval(slide,3000)



    //메뉴
    $("nav>ul>li").mouseenter(function(){
        $(".sub,.menubg").stop().slideDown();
    })

    $("nav>ul>li").mouseleave(function(){
        $(".sub,.menubg").stop().slideUp();
    })


    //메뉴 키보드 이벤트
    $("nav>ul>li>a").focusin(function(){
        $(this).parent("li").addClass("on")
        $(".sub,.menubg").slideDown();
    })

    $("nav li li:last-child").focusout(function(){
        $("nav li").removeClass("on")
    })

    $("nav li:last-child li:last-child").focusout(function(){
        $(".sub,.menubg").slideUp();
    })
    



    //팝업
    $(".pp").click(function(){
        $(".popup").show();
        return false;
    })

    $(".popup button").click(function(){
        $(".popup").hide();
    })
})