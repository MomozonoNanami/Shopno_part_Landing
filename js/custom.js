$(document).on('click', '.menu', function () {
	$(this).toggleClass("active-menu");
	$("#menu-hidden").toggleClass("visible"); 
});
$(".variable").slick({
	dots: true,
	infinite: true,
	variableWidth: false
}); 
//function scroll
$(".menu-list a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
});