$(function(){
	$(".sp").click(function(){
		$(".nav .sp").addClass("color");
		$(".nav .pj").removeClass("color");
		$(".nav .dp").removeClass("color");
		$(".nav .sp span").css("display","block");
		$(".nav .pj span").css("display","none");
		$(".nav .dp span").css("display","none");
		$(".caiping").css("display","flex");
		$(".evaluate").css("display","none");
		$(".dpjs").css("display","none");
		$("body").css("background","#fff");
	});
	$(".pj").click(function(){
		$(".nav .sp").removeClass("color");
		$(".nav .pj").addClass("color");
		$(".nav .dp").removeClass("color");
		$(".nav .sp span").css("display","none");
		$(".nav .pj span").css("display","block");
		$(".nav .dp span").css("display","none");
		$(".caiping").css("display","none");
		$(".evaluate").css("display","block");
		$(".dpjs").css("display","none");
		$("body").css("background","#fff");
	});
	$(".dp").click(function(){
		$(".nav .sp").removeClass("color");
		$(".nav .dp").addClass("color");
		$(".nav .pj").removeClass("color");
		$(".nav .sp span").css("display","none");
		$(".nav .pj span").css("display","none");
		$(".nav .dp span").css("display","block");
		$(".caiping").css("display","none");
		$(".evaluate").css("display","none");
		$(".dpjs").css("display","block");
		$("body").css("background","#f5f5f5");
	});
	$(".caiping .right").click(function(){
		$(".comIntroduction").load("spxq.html");
		$("body").css({ "overflow-y": "hidden" });
	});
	$(".zhezhao").click(function(){
		$(".comIntroduction").load("spxq.html .a");
		$("body").css({ "overflow-y": "auto" });
	});
	$(".main").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
			if(direction=="down"){
				$(".comIntroduction").load("spxq.html .a");
				$("body").css({ "overflow-y": "auto" });
			}
			if(direction=="up"){
				$(".comIntroduction").load("spxq1.html");
				$("body").css({ "overflow-y": "auto" });
				$(".dianpuall").css("display","none");
			}
		}
	});
	$(".guanbi").click(function(){
		$(".comIntroduction").load("spxq.html .a");
		$(".dianpuall").css("display","block");
	});
	$(window).on("scroll",function(){
		if($(this).scrollTop()>190){
			$(".guanbi-bj").css("display","flex");
			$(".guanbi-bj span").addClass("s");
		}
		else{
			$(".guanbi-bj").css("display","none");
		}
	});
});

