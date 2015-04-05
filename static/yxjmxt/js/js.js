
//animate
window.onload = function(){
	pagaInit();
	animateT1();
	$("#sourcesrc").attr("src","audio/01.mp3");
	
	$(".imgtxt2").hide();
	$(".itxt").click(function(){
		$(this).parent().parent().find(".imgtxt").hide();
		$(this).parent().parent().find(".imgtxt2").show();
	});
	$(".itxt2").click(function(){
		$(this).parent().parent().find(".imgtxt2").hide();
		$(this).parent().parent().find(".imgtxt").show();
	});	
	
		
	$("#audiobtn").click(function(){
		$(this).hide();
		$("#audiobtn2").show();
		$("#sourcesrc").attr("src","");
	});
	$("#audiobtn2").click(function(){
		$(this).hide();
		$("#audiobtn").show();
		$("#sourcesrc").attr("src","audio/01.mp3");
	});
	/*
	$(".t8_01").click(function(){
		alert(1);
	});
	$(".t8_02").click(function(){
		alert(1);
	});*/
	$(".t8_03").click(function(){
		window.location.href='signup.html';
	});/*
	$(".t8_04").click(function(){
		alert(1);
	});
	$(".t7_04").click(function(){
		alert(1);
	});*/
};

function turn360(){
	$("#turn360").html('<div id="360frames"></div>');
	var frames = [
          "images/turn/C07_001.png",
          "images/turn/C07_002.png",
          "images/turn/C07_003.png",
          "images/turn/C07_004.png",
          "images/turn/C07_005.png",
          "images/turn/C07_006.png",
          "images/turn/C07_007.png",
          "images/turn/C07_008.png",
          "images/turn/C07_009.png",
          "images/turn/C07_010.png",
          "images/turn/C07_011.png"
        ];

      $("#360frames").spritespin({
        width     : 640,
		height    : 900,
		frames    : frames.length,
		loopFrame : frames.length - 1,
		behavior  : "animation", // "hold"
		module    : "360",
		sense     : -1,
		source    : frames,
		animate   : true,
		loop      : false,
		frameWrap : true,
		frameStep : 1,
		frameTime : 80,
		enableCanvas : true
	  });
}

function pagaInit(){
	$('#loading').hide();
	$("body").removeClass("black");
	$('#content').show();
}


function animateT1(){
	$(".imgtxt2").hide();
	$(".tablist").show();
	$(".tablist li").removeClass("on");
	$(".tablist li").eq(0).addClass("on");
	
	$(".t1_01").hide();
	$(".t1_02").hide();
	$(".t1_03").hide();
	$(".t1_04").hide();
	$(".t1_05").hide();
	$(".t1_01").fadeIn();
	$(".t1_02").fadeIn();
	$(".t1_03").fadeIn();
	$(".t1_04").fadeIn();
	$(".t1_05").fadeIn();

}
function animateT2(){
	$(".imgtxt2").hide();
	$(".tablist").show();
	$(".tablist li").removeClass("on");
	$(".tablist li").eq(1).addClass("on");
	
	$(".t2_01").animate({left:-640,opacity:'hide'},0);	
	$(".t2_02").hide();	
	$(".t2_03").hide();	
	$(".t2_04").hide();	
	$(".t2_05").hide();	
	$(".t2_06").animate({left:640,opacity:'hide'},0);	
	$(".t2_07").hide();	
	$(".t2_01").animate({left:0,opacity:'show'},1500);
	$(".t2_02").fadeIn(800);
	$(".t2_03").fadeIn(1200);
	$(".t2_04").fadeIn(1600);
	$(".t2_05").fadeIn(2000);
	$(".t2_06").animate({left:0,opacity:'show'},1500);
	$(".t2_07").fadeIn();
}

function animateT3(){
	$(".imgtxt2").hide();
	$(".tablist").show();
	$(".tablist li").removeClass("on");
	$(".tablist li").eq(2).addClass("on");
	
	$(".t3_01").animate({top:-640,opacity:'hide'},0);
	$(".t3_01").animate({top:-50,opacity:'show'},1500);
	
	$(".t3_02").animate({left:-300,opacity:'hide'},0);
	
	$(".t3_03").hide();
	$(".t3_03").fadeIn(1500);
	
	$(".t3_04").animate({bottom:-640,opacity:'hide'},0);
	$(".t3_04").animate({bottom:0,opacity:'show'},1500);
	
	setTimeout(function(){$(".t3_02").animate({left:0,opacity:'show'},2000)},1000);
	
}

function animateT4(){
	$(".imgtxt2").hide();
	$(".tablist").show();
	$(".tablist li").removeClass("on");
	$(".tablist li").eq(3).addClass("on");
	
	$(".t4_01").animate({left:-640,opacity:'hide'},0);
	$(".t4_01").animate({left:0,opacity:'show'},1500);
	
	$(".t4_02").animate({top:-300,opacity:'hide'},0);
	
	$(".t4_03").animate({left:640,opacity:'hide'},0);
	$(".t4_03").animate({left:0,opacity:'show'},1500);
	
	$(".t4_04").animate({left:640,opacity:'hide'},0);
	$(".t4_04").animate({left:0,opacity:'show'},1500);
	
	$(".t4_05").animate({bottom:-640,opacity:'hide'},0);
	$(".t4_05").animate({bottom:0,opacity:'show'},1500);
	
	setTimeout(function(){$(".t4_02").animate({top:-80,opacity:'show'},2000)},1000);
}

function animateT5(){
	$(".imgtxt2").hide();
	$(".tablist").show();
	$(".tablist li").removeClass("on");
	$(".tablist li").eq(4).addClass("on");
	
	$(".t5_01").animate({top:-640,opacity:'hide'},0);
	$(".t5_01").animate({top:-50,opacity:'show'},1500);
	
	$(".t5_02").animate({left:300,opacity:'hide'},0);
	
	$(".t5_03").animate({left:-640,opacity:'hide'},0);
	$(".t5_03").animate({left:0,opacity:'show'},1500);
	
	$(".t5_04").animate({left:-640,opacity:'hide'},0);
	$(".t5_04").animate({left:0,opacity:'show'},1500);
	
	$(".t5_05").animate({left:640,opacity:'hide'},0);
	$(".t5_05").animate({left:0,opacity:'show'},1500);
	
	setTimeout(function(){$(".t5_02").animate({left:0,opacity:'show'},2000)},1000);
}

function animateT6(){
	$(".imgtxt2").hide();
	$(".tablist").show();
	$(".tablist li").removeClass("on");
	$(".tablist li").eq(5).addClass("on");
	
	$(".t6_01").animate({left:640,opacity:'hide'},0);
	$(".t6_01").animate({left:0,opacity:'show'},1500);
	
	$(".t6_02").animate({left:-300,opacity:'hide'},0);
	
	$(".t6_03").hide();
	$(".t6_03").fadeIn(1200);
	
	$(".t6_04").hide();
	$(".t6_04").fadeIn(1600);
	
	$(".t6_05").animate({left:-640,opacity:'hide'},0);
	$(".t6_05").animate({left:0,opacity:'show'},1500);
	
	setTimeout(function(){$(".t6_02").animate({left:0,opacity:'show'},2000)},1000);
}

function animateT7(){
	$(".imgtxt2").hide();
	$(".tablist").show();
	$(".tablist li").removeClass("on");
	$(".tablist li").eq(6).addClass("on");
	
	$(".t7_01").animate({top:-640,opacity:'hide'},0);
	$(".t7_01").animate({top:0,opacity:'show'},1500);
	
	
	
	$(".t7_03").hide();
	$(".t7_03").fadeIn(1200);
	
	$(".t7_02").hide();
	$(".t7_02").fadeIn(1600);
	
	$(".t7_05").animate({bottom:-640,opacity:'hide'},0);
	$(".t7_05").animate({bottom:0,opacity:'show'},1500);
	
		
}

function animateT8(){
	$(".imgtxt2").hide();
	$(".tablist").show();
	$(".tablist li").removeClass("on");
	$(".tablist li").eq(7).addClass("on");
	
	$(".t8_01").animate({top:-640,opacity:'hide'},0);
	$(".t8_01").animate({top:0,opacity:'show'},1000);
	
	$(".t8_02").animate({top:220,opacity:'hide'},0);	
	
	$(".t8_03").hide();
	$(".t8_03").fadeIn(1600)
	$(".t7_04").animate({right:-300,opacity:'hide'},0);
	$(".t8_04").hide();
	$(".t8_04").fadeIn(1600)
	
	setTimeout(function(){$(".t7_04").animate({right:0,opacity:'show'},2000)},1000);
	setTimeout(function(){$(".t8_02").animate({top:0,opacity:'show'},1200)},1000);	
}

function animateT9(){
	$(".imgtxt2").hide();
	$(".tablist").show();
	$(".tablist li").removeClass("on");
	$(".tablist li").eq(8).addClass("on");
	
	$(".t9_01").animate({top:-640,opacity:'hide'},0);
	$(".t9_01").animate({top:0,opacity:'show'},1000);
	
	$(".t9_02").animate({top:220,opacity:'hide'},0);
	setTimeout(function(){$(".t9_02").animate({top:0,opacity:'show'},1200)},1000);	
}

