/************전역선언************/
var bannerInterval;
var bannerIdx = 0;

/************이벤트선언************/
$(".modal-trigger").click(onModalShow);
$(".modal-container").click(onModalHide);
$(".modal-wrapper").click(onModalWrapperClick);
$(".modal-wrapper").find(".bt-close").click(onModalHide);

$(".icon-wrapper .bt-search").click(onTypeShow);
$(".header-wrapper").find(".bt-close").click(onTypeHide);


bannerInterval = setInterval(onBannerInterval, 5000);

$(".icon-wrapper .cart").hover(onSubCart); // sub cart !  dropdown
$(".icon-wrapper .cart").mouseleave(onSubCartLeave); // sub cart !  up

/************이벤트콜백************/
function onModalHide(e) {
	e.stopPropagation();
}

function onModalWrapperClick(e) {
	e.stopPropagation(); //.modal-wrapper를 클릭해도 닫히지 않게 막아줌
}

// 오른쪽 바스 모달
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

// 메인 배너 페이드 인,아웃
function onBannerInterval() {
		 bannerIdx = bannerIdx == 3 ? 0 : bannerIdx + 1 ;
		 $(".main-wrapper .banner").fadeOut();
		 $(".main-wrapper .banner").eq(bannerIdx).fadeIn();
}

// 카트 드롭다운
function onSubCart() {
	 $(".header-wrapper .sub-cart").addClass('active');
}
function onSubCartLeave() {
	$(".header-wrapper .sub-cart").removeClass('active');
}

function onTypeShow() {
	 $(".header-wrapper .search-wrap").stop().fadeIn();
}
function onTypeHide() {
	 $(".header-wrapper .search-wrap").stop().fadeOut();
}