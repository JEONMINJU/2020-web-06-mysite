/************이벤트선언************/
$(".modal-trigger").click(onModalShow);
$(".modal-container").click(onModalHide);
$(".modal-wrapper").click(onModalWrapperClick);
$(".modal-wrapper").find(".bt-close").click(onModalHide);

function onGet(r) {
	var html = '', i;
   for(var i in r) {

	 }
	   console.log(r);
}
$.get('../json/navi-home.json', onGet); //navi all

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

