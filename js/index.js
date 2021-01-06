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

$(".main-wrapper").mouseover(onMainOver); //오버했을때 잠깐 멈춰있게, 버튼 누를때 겹치지 않게,
$(".main-wrapper").mouseleave(onMainLeave);

$(".main-wrapper .bt-prev").click(onMainPrev);
$(".main-wrapper .bt-next").click(onMainNext);
$(".main-wrapper .pager").click(onMainPager);

$(".icon-wrapper .cart-wrap").hover(onSubCart); // sub cart !  dropdown
$(".icon-wrapper .cart-wrap").mouseleave(onSubCartLeave); // sub cart !  up

$(".navi-wrapper .navi.navi-home").mouseenter(onNaviShow);
$(".navi-wrapper .navi.navi-home").mouseleave(onNaviHide);

function onNaviShow() {
	$(".navi-wrapper .navi.navi-home .sub-navi-wrapper").stop().slideDown();
}
function onNaviHide() {
	$(".navi-wrapper .navi.navi-home .sub-navi-wrapper").stop().slideUp();
}



$(".sub-wrap ul.sub > .aw-txt").hover(onArrowShow);
$(".sub-wrap ul.sub > .aw-txt").mouseleave(onArrowHide);

function onArrowShow() {
	$(".sub-wrap ul.sub > .aw-txt .aw").stop().addClass("active");
}
function onArrowHide() {
	$(".sub-wrap ul.sub > .aw-txt .aw").stop().removeClass("active");
}





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
	bannerIdx = $(this).index(); //나의 나(MainPager) 인덱스 번호
	mainAni();
}

function onMainOver() {
	clearInterval(bannerInterval); //셋인터벌 기능 지우기
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
	 $(".cart-wrap ul.cart-dropbox").addClass('active');
}
function onSubCartLeave() {
	$(".cart-wrap ul.cart-dropbox").removeClass('active');
}

function onTypeShow() {
	 $(".header-wrapper .search-wrap").stop().fadeIn();
}
function onTypeHide() {
	 $(".header-wrapper .search-wrap").stop().fadeOut();
}


/************사용자함수************/
function mainAni() {
	$(".main-wrapper .pager").removeClass("active"); //나머지 애들은 리무브 해달라.
	$(".main-wrapper .pager").eq(bannerIdx).addClass("active"); //나의 선택된 인덱스번호에 액티브를 주고
	$(".main-wrapper .banner").stop().fadeOut(300); 
	$(".main-wrapper .banner").eq(bannerIdx).stop().fadeIn(300);
} //이게 원래 메인슬라이드 bannerInterval에 있던 기능인데 공통으로 사용자 함수에 mainAni()로 만듬
