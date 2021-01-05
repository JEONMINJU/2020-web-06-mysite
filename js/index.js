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

$(".main-wrapper").mouseover(onMainOver);
$(".main-wrapper").mouseleave(onMainLeave);

$(".main-wrapper .bt-prev").click(onMainPrev);
$(".main-wrapper .bt-next").click(onMainNext);
$(".main-wrapper .pager").click(onMainPager);

$(".icon-wrapper .cart").hover(onSubCart); // sub cart !  dropdown
$(".icon-wrapper .cart").mouseleave(onSubCartLeave); // sub cart !  up

/************이벤트콜백************/
function onMainPrev() {
	bannerIdx = bannerIdx == 0 ? 3 : bannerIdx - 1 ;
	mainAni();
}

function onMainNext() {
	bannerIdx = bannerIdx == 3 ? 0 : bannerIdx + 1 ;
	mainAni();
}

function onMainPager() {
	bannerIdx = $(this).index();
	mainAni();
}

function onMainOver() {
	clearInterval(bannerInterval);
}

function onMainLeave() {
	clearInterval(bannerInterval);
	bannerInterval = setInterval(onBannerInterval, 5000);
}

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
}
function onModalHide(e) {
	$(".modal-container").removeClass('active');
	setTimeout(function(){
		$(".modal-container").css({"display": "none"});
		$("body").removeClass("hide");
	}, 300);
}

// 메인 배너 페이드 인,아웃
function onBannerInterval() {
	bannerIdx = bannerIdx == 3 ? 0 : bannerIdx + 1 ;
	mainAni();
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


/************사용자함수************/
function mainAni() {
	$(".main-wrapper .pager").removeClass("active");
	$(".main-wrapper .pager").eq(bannerIdx).addClass("active");
	$(".main-wrapper .banner").stop().fadeOut(300);
	$(".main-wrapper .banner").eq(bannerIdx).stop().fadeIn(300);
}
