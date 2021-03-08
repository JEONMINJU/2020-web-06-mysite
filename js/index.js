/************전역선언************/
var bannerInterval;
var bannerIdx = 0;
var monaviIdx = 0;
var coffeeIdx = 0;

/************이벤트선언************/
bannerInterval = setInterval(onBannerInterval, 5000);

$(".modal-trigger").click(onModalShow);
$(".modal-container").click(onModalHide);
$(".modal-wrapper").click(onModalWrapperClick);
$(".modal-wrapper").find(".bt-close").click(onModalHide);

$(".icon-wrapper .bt-search").click(onTypeShow);
$(".header-wrapper").find(".bt-close").click(onTypeHide);
$(".mobile-wrapper .mobile-wrap .bars").click(onMobileNavi);
$(".mo-navi .navi-title ").click(onMoNaviShow);


$(".main-wrapper").mouseover(onMainOver); //오버했을때 잠깐 멈춰있게, 버튼 누를때 겹치지 않게,
$(".main-wrapper").mouseleave(onMainLeave);

$(".main-wrapper .bt-prev").click(onMainPrev);
$(".main-wrapper .bt-next").click(onMainNext);
$(".main-wrapper .pager").click(onMainPager);
$(".coffee-beans-wrapper .pager").click(onCoffeePager);

$(".icon-wrapper .cart-wrap").hover(onSubCart); // sub cart !  dropdown
$(".icon-wrapper .cart-wrap").mouseleave(onSubCartLeave); // sub cart !  up

$(".navi-wrapper .navi").mouseenter(onNaviShow);
$(".navi-wrapper .navi").mouseleave(onNaviHide);



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

function onCoffeePager() {
	coffeeIdx = $(this).index();
	$(".coffee-beans-wrapper .pager").removeClass("active");
	$(".coffee-beans-wrapper .pager").eq(coffeeIdx).addClass("active"); 
}

function onMainOver() {
	clearInterval(bannerInterval); //setInterval 기능 지우기
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

function onNaviShow() {
	$(this).find('.sub-navi-wrapper').stop().slideDown();
}
function onNaviHide() {
	$(this).find('.sub-navi-wrapper').stop().slideUp();
}



function onMobileNavi() {
	$(".mobile-wrapper  .mo-navi-wrap ").stop().slideToggle(300);
}

function onMoNaviShow() {
	$(this).parent().find('ul').stop().slideToggle(300);
}


/************사용자함수************/
function mainAni() {
	$(".main-wrapper .pager").removeClass("active");
	$(".main-wrapper .pager").eq(bannerIdx).addClass("active"); 
	$(".main-wrapper .banner").stop().fadeOut(300); 
	$(".main-wrapper .banner").eq(bannerIdx).stop().fadeIn(300);
} 

// .coffee-beans-wrapper
var swiper = new Swiper('.swiper-container', {
	loop: true,
	pagination: {
		el: '.swiper-pagarnation',
	},
});

