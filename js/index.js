/************전역선언************/
var bannerInterval;
var bannerIdx = 0;

/************이벤트선언************/
$(".modal-trigger").click(onModalShow);
$(".modal-container").click(onModalHide);
$(".modal-wrapper").click(onModalWrapperClick);
$(".modal-wrapper").find(".bt-close").click(onModalHide);

bannerInterval = setInterval(onBannerInterval, 4000);
$(".main-wrapper .bt-prev").click(onPrev);


/************이벤트콜백************/
function onModalWrapperClick(e) {
	e.stopPropagation(); //.modal-wrapper를 클릭해도 닫히지 않게 막아줌
}

function onModalShow(e) {
	e.preventDefault();
	$(".modal-container").css({"display": "block"});
	$(".modal-container").css("opacity");
	$(".modal-container").addClass('active');
	$("body").addClass("hide"); //모달창 떳을때 스크롤 막기
	$($(this).data('modal')).addClass("active");
}
function onModalHide(e) {
	$(".modal-container").removeClass('active');
	$(".modal-wrapper").removeClass('active');
	setTimeout(function(){
		$(".modal-container").css({"display": "none"});
		$("body").removeClass("hide");
	}, 300);
}

function onBannerInterval() {
		 bannerIdx = bannerIdx == 3 ? 0 : bannerIdx + 1 ;
		 $(".main-wrapper .banner").fadeOut();
		 $(".main-wrapper .banner").eq(bannerIdx).fadeIn();

}

