/*Mobile Nav*/

let mobileMenu = false;

$(".mobile-burger").click(()=>{
    if(!mobileMenu){
        $(".mobile-burger").addClass("burger-active");
        $(".mobile-nav-body").addClass("mobile-nav-active");
        mobileMenu = !mobileMenu;
    }else{
        $(".mobile-burger").removeClass("burger-active");
        $(".mobile-nav-body").removeClass("mobile-nav-active");
        mobileMenu = !mobileMenu;
    }
});

/*Nav Scroll*/
$(window).scroll(()=>{
    if($(this).scrollTop() > 0){
        $("nav").addClass("nav-scrolled");
        $("#whiteLogo").css("display", "none");
        $("#blackLogo").css("display", "block");
        $(".mobile-burger .material-symbols-outlined").css("color", "black");
    }else{
        $("nav").removeClass("nav-scrolled");
        $("#whiteLogo").css("display", "block");
        $("#blackLogo").css("display", "none");
        $(".mobile-burger .material-symbols-outlined").css("color", "white");
    }
})