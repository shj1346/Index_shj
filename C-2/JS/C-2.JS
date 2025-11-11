$(function(){

    var i = 0
    function slide(){
        if(i<2){
            i++;
        }else{
            i=0
        }

        $(".slide ul li").fadeOut()
        $(".slide ul li").eq(i).fadeIn()

    }
    setInterval(slide,2000)






    //메뉴
    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })//마우스 올려뒀을 때 상태 유지 됨

    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })//마우스 떠났을 때 상태 유지 안되게 함




    
    //팝업
    $(".pp").click(function(){
        $(".popup").show();
        return false;//이동할 링크가 없으면 새로고침 되는 것을 막음 (#)
    })

    $(".button button").click(function(){
        $(".popup").hide();
    })
});