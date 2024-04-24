

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
        $("#whiteDLogo").css("display", "none");
        $("#blackLogo").css("display", "block");
        $("#blackDLogo").css("display", "block");
        $(".mobile-burger .material-symbols-outlined").css("color", "black");
        $(".links a").css("color", "black");
        $(".mobile-logo p").css("color", "black");
    }else{
        $("nav").removeClass("nav-scrolled");
        $("#whiteLogo").css("display", "block");
        $("#whiteDLogo").css("display", "block");
        $("#blackLogo").css("display", "none");
        $("#blackDLogo").css("display", "none");
        $(".links a").css("color", "white");
        $(".mobile-logo p").css("color", "white");
        $(".mobile-burger .material-symbols-outlined").css("color", "white");
    }
})