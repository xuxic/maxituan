var dataForWeixin = {
    appId: "",
    MsgImg: "http://www.woliyou.com/mxt1011/images/share.jpg",
	TLImg: "http://www.woliyou.com/mxt1011/images/share.jpg",
	url: "http://www.woliyou.com/mxt1011/",
	title: "",
	desc: "",
	desc: "",
    fakeid: "",
    callback: function () {
		//$(".inphone").show();
//		$(".jxcontbox").hide();
//		$(".footer_b").hide();
    }
};


(function () {
    var onBridgeReady = function () {
 
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "appid": dataForWeixin.appId,
                "img_url": dataForWeixin.MsgImg,
                "img_width": "640",
                "img_height": "640",
                "link": dataForWeixin.url,
                "desc": '原乡嘉年华，放肆狂欢一起嗨！',
                "title": dataForWeixin.title 
            }, function (res) { 
                 
                (dataForWeixin.callback)(); 
            });
        });
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            (dataForWeixin.callback)();
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": dataForWeixin.TLImg,
                "img_width": "640",
                "img_height": "640",
                "link": dataForWeixin.url,
                "desc": dataForWeixin.desc,
                "title": '原乡嘉年华，放肆狂欢一起嗨！'
            }, function (res) {
               
            });
        });
        WeixinJSBridge.on('menu:share:weibo', function (argv) {
            WeixinJSBridge.invoke('shareWeibo', {
                "content": dataForWeixin.title ,
                "url": dataForWeixin.url
            }, function (res) { (dataForWeixin.callback)(); });
        });
        WeixinJSBridge.on('menu:share:facebook', function (argv) {
            (dataForWeixin.callback)();
            WeixinJSBridge.invoke('shareFB', {
                "img_url": dataForWeixin.TLImg,
                "img_width": "120",
                "img_height": "120",
                "link": dataForWeixin.url,
                "desc": dataForWeixin.desc,
                "title": dataForWeixin.title 
            }, function (res) { });
        });

        
    };

    //var onBridgeReady = function () {
    //    WeixinJSBridge.call('hideToolbar');
    //}
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
})();
