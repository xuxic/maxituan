
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
	});
	$(".t8_03").click(function(){
		window.location.href='signup.html';
	});
	$(".t8_04").click(function(){
		alert(1);
	});
	$(".t7_04").click(function(){
		console.log("send msg");
		var msg = {"name":$("#name").val(),"phone":$("#tel").val()};
		console.log(msg);
		url = "/signup?name="+$("#name").val()+"&"+$("#tel").val()
		$.post(url,msg,
		function(data,status){
			//alert(status);
			alert("恭喜您！抢票成功");
			//animateT9();
		}, "json");
	});*/
	$(".t7_04").click(function(){
		window.location.href='signup.html';
	});
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
	$(".tablist li").eq(8).addClass("on");
	
	$(".t9_01").animate({top:-640,opacity:'hide'},0);
	$(".t9_01").animate({top:-80,opacity:'show'},1000);
	
	$(".t9_02").animate({top:220,opacity:'hide'},0);
	setTimeout(function(){$(".t9_02").animate({top:-80,opacity:'show'},1200)},1000);	
}

