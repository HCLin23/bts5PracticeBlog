$(function (){   
    // 當使用者滾動到離頂部 200px 時，展示回到最上層功能按鈕
    $(window).scroll(function (){
        if ($(window).scrollTop() > 200){    
            $(".goTopBtn").fadeIn(100);
        } else{    
            $(".goTopBtn").fadeOut(100);
        }    
    });
    // 點擊後回到最上層功能
    $(".goTopBtn").click(function(event){
        event.preventDefault();
        $('html, body').animate({
        scrollTop: 0}, 100);
    });
});
