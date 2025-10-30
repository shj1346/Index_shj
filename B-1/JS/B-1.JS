$(function(){//문서를 로딩 후 실행하라


    //슬라이드
    function slide(){
        $(".slide ul").animate({left:"-1200px"},500,function(){
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({left:0})
        })
    }

    setInterval(slide,3000)



        
    //메뉴
    // 🧭 [1] 마우스를 올렸을 때 (mouseenter)
    $("nav>ul>li").mouseenter(function () {
        // .sub: 모든 하위 메뉴(블라우스, 티, 자켓 등)
        // stop(): 이전 애니메이션 중단 (겹치는 효과 방지)
        // slideDown(): 서브메뉴가 아래로 펼쳐짐
        $(".sub").stop().slideDown();
    });

    // 🧭 [2] 마우스를 뗐을 때 (mouseleave)
    $("nav>ul>li").mouseleave(function () {
        // slideUp(): 서브메뉴를 위로 접음 (사라지게 함)
        $(".sub").stop().slideUp();
    });



    // 키보드로 메뉴에 포커스가 들어왔을 때 (focusin)
    $("nav>ul>li").focusin(function () {
        // slideDown(): 메뉴 열기
        $(".sub").slideDown();
        // 현재 선택된 메뉴(li)에 'on' 클래스 추가 → 스타일 변경용
        $(this).addClass('on');
    });



    // 마지막 서브메뉴(예: “탑”의 마지막 “니트”)에서 포커스가 빠져나갈 때
    $(".sub li:last-child").focusout(function () {
        // 모든 메뉴(li)에서 'on' 제거 (선택 스타일 해제)
        $("nav>ul>li").removeClass('on');
    });


    // 맨 마지막 메뉴(악세서리)의 마지막 항목(팔찌)까지 포커스가 빠질 때
    $('nav li:last-child li:last-child').focusout(function () {
        // 모든 .sub 메뉴를 닫음
        $(".sub").slideUp();
    });













    // 🧭 탭 메뉴 기능 전체를 감싸는 코드
    $(".tabmenu>li").click(function () { // ✅ .tabmenu 안에 있는 각 li를 클릭했을 때 실행됨

        // 1️⃣ 모든 탭(li)에서 'on' 클래스를 제거
        // → 먼저 전체 탭의 선택 표시를 없앰 (비활성화)
        $(".tabmenu>li").removeClass("on");

        // 2️⃣ 지금 클릭한 탭(li)에만 'on' 클래스 추가
        // → 클릭한 탭만 색상이나 스타일이 바뀌도록 함 (활성화)
        $(this).addClass("on");

        // 3️⃣ 현재 클릭한 li가 몇 번째 순서인지(index) 번호를 구함
        // → 공지사항이 0번, 갤러리가 1번 (순서대로 번호가 매겨짐)
        var i = $(this).index();

        // 4️⃣ 확인용 (개발자가 탭 번호를 확인할 수 있게 콘솔에 출력)
        console.log(i);

        // 5️⃣ 모든 탭 내용(.tabcon)을 숨김
        // → 공지사항과 갤러리 두 구역(section)을 모두 안 보이게 함
        $(".tabcon").hide();

        // 6️⃣ 클릭한 탭 순서에 맞는 콘텐츠만 보여줌
        // → i번째(순서에 맞는) .tabcon만 화면에 표시됨
        $(".tabcon").eq(i).show();

        // 7️⃣ (선택 사항) 링크 이동을 막기 위해 return false를 쓸 수도 있음
        return false;
    });



    

    //팝업
    $('.pp').click(function(){
        $(".popup").show();
        return false;//링크차단
    })

    $(".button").click(function(){
        $(".popup").hide();
    })







})
