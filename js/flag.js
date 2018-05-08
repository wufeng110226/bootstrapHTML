/*!
 *
 * wufeng v0.0.1
 * Copyright 2015
 * under the WTFPL license:
 *
 */


function getUrlParam(name){
  //构造一个含有目标参数的正则表达式对象
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  //匹配目标参数
  var r = window.location.search.substr(1).match(reg);
  //返回参数值
  if (r!=null) return unescape(r[2]);
  return null;
}

var defaultObj = {
	init(){
		this.showImgPreview();
		this.checkHeight();
		this.addactive();
		this.chouse_app();
	},
	showImgPreview(){          //上传广告图片演示B  选择广告形式 tab决定展示什么项目
		var adtabs=$(".advertXS input");
	    var addivs=$(".advertdemo .advertdemoW");
	    for(var i=0;i<adtabs.length;i++){
	      adtabs.click(function(){changead(this);})
	      function changead(adobj){
	        $(".advertshild").css("display","block");
	      for(var i=0;i<adtabs.length;i++)
	      {
	        if(adtabs[i]==adobj){
	        addivs[i].className="advertdemoW advertdemoF";
	        }
	        else{
	        addivs[i].className="advertdemoW ";
	        }
	      }
	    }
	       };
	},
	checkHeight(){
        var a = $(document).height() + 48;
        var b = $(document).height() - 110;
        $(".black-main-body").css("min-height",b);
       /* $(".black-sidebar").css("min-height",a);*/
   	},
	addactive(){
		var a = $(".chart_chouse_tab li");
			a.click(function(){
				a.removeClass("active");
				$(this).addClass("active");
		})
	},
	chouse_app(){
 		var a = $(".choose-app .dropdown-menu li a");
 		var b = $(".choose-app button");
		a.click(function(){
			b.html($(this).html() + '<span class="caret"></span>');
			//alert("123");
		})
	}
}

$(function(){
	defaultObj.init();
 $('.has-sub').find('.nav').css({'visibility':'hidden','height':'0','opacity':'0'});
  $('.has-sub a.active').parents('.has-sub').find('.nav').css({'visibility':'visible','height':'auto','opacity':'1'});
  $('.has-sub a.active').parents('.has-sub').find('.nav-header').addClass('nav-header-after');
  console.log($(document).height());
  console.log($(window).height());
})

$(".nav-header").click(function(){             //后台菜单伸缩
  if($(this).hasClass('nav-header-after')){
    $(this).removeClass('nav-header-after');
  }else{
    $(this).addClass('nav-header-after');
  }
  if($(this).next().css('visibility') == 'visible'){
    $(this).next().css({'visibility':'hidden','height':'0','opacity':'0'});
  }else{
    $(this).next().css({'visibility':'visible','height':'auto','opacity':'1'});
  }
  if($('.black-sidebar .nav').height() < $('.black-main-body').height()){
    checkHeight();
  }else{
    $(".black-main-body").css("min-height",$('.black-sidebar .nav').height() + 110);
  }
})

$(".pc-ctla select").click(function(){
  var a = $(".pc-ctla option:selected").val();
  var b = $(".pc-ctla input");
  if(a == 1){
    b.attr({"readOnly":true});
  }else{
    b.attr({"readOnly":false});
  }
});

$(".pc-ctlb select").click(function(){
  var a = $(".pc-ctlb option:selected").val();
  var b = $(".pc-ctlb input");
  if(a == 1){
    b.attr({"readOnly":true});
  }else{
    b.attr({"readOnly":false});
  }
});

$(".media_app_type ul li").click(function(){
	if ($(this).hasClass("show-mats")) {
		$(this).removeClass("show-mats");
	}else{
		$(this).addClass("show-mats");
	};
})

$(".game_app_type ul li").click(function(){
	if ($(this).hasClass("show-gats")) {
		$(this).removeClass("show-gats");
	}else{
		$(this).addClass("show-gats");
	};
});

$("input.onlynum").bind({                              //格式输入限制
  keyup :function(){
    this.value=this.value.replace(/[^0-9]/g,'');
  },
  paste :function(){
    return false;
  },
  blur :function(){
    this.value=this.value.replace(/[^0-9]/g,'');
  }
})

function setImagePreview() {                  //上传广告图片演示A  图片选择并展示的基础控件
        /*var docObj=document.getElementById("doc");
        if(docObj.files &&docObj.files[0])
            {
                //火狐下，直接设img属性
                $(".ad_onloadimg1,.ad_onloadimg2,.ad_onloadimg3,.ad_onloadimg4").css({'display':'block','width':'auto','height':'auto'});
                //imgObjPreview.src = docObj.files[0].getAsDataURL();

                //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
                $("#preview1")[0].src = window.URL.createObjectURL(docObj.files[0]);
                $("#preview2")[0].src = window.URL.createObjectURL(docObj.files[0]);
                $("#preview3")[0].src = window.URL.createObjectURL(docObj.files[0]);
                $("#preview4")[0].src = window.URL.createObjectURL(docObj.files[0]);
            }else{
                //IE下，使用滤镜
                docObj.select();
                var imgSrc = document.selection.createRange().text;
                var alocalImagId = document.getElementById("preview1");
                //必须设置初始大小
                alocalImagId.style.width = "150px";
                alocalImagId.style.height = "180px";
                //图片异常的捕捉，防止用户修改后缀来伪造图片
                try{
                    alocalImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                    alocalImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
                }
                catch(e)
                    {
                    alert("您上传的图片格式不正确，请重新选择!");
                    return false;
                }
                $("#preview1")[0].css("display","none");
                $("#preview2")[0].css("display","none");
                $("#preview3")[0].css("display","none");
                $("#preview4")[0].css("display","none");
                document.selection.empty();
            }
         return true;*/
         //演示功能放进上传按钮组件扩展里ggz-houtai-add_ac2text.html
        }

  $('input:radio[name="g_balance"]').click(function (){
        var vcc_chea = $('input:radio[name="g_balance"]:checked').val();
          if (vcc_chea == 1) {
            $(".g_offer").text("元/千次展示");
            $(".g_offtip").html("建议最低出价<i>12.00</i>&nbsp;元");
          }if (vcc_chea == 2){
            $(".g_offer").text("元/单次点击");
            $(".g_offtip").html("建议最低出价<i>0.80</i>&nbsp;元");
          }if (vcc_chea == 3){
            $(".g_offer").text("元/单次激活");
            $(".g_offtip").html("建议最低出价<i>4.00</i>&nbsp;元");
          }
      })


  $('input:checkbox[name="position_d"]').each(function () {   //self平台结算设置多选checkbox 2016-07-19 停用
     $(this).click(function () {
         if ($(this).prop("checked")) {
             $("." + $(this).val()).css("display","block");
         } else {
             $("." + $(this).val()).css("display","none");
         }
     });
 });


$('input:radio[name="chouse-media-type"]').click(function (){                     //选择适合平台  决定展示ios的项目还是安卓的项目
	ggz_cmttype = $('input:radio[name="chouse-media-type"]:checked').val();
		if (ggz_cmttype == 1) {
			$(".media_app_type").css("display","none");
			$(".game_app_type").css("display","none");
			$(".media_app_type ul li").removeClass("show-mats");
			$(".game_app_type ul li").removeClass("show-gats");
		}else if (ggz_cmttype == 2){
			$(".media_app_type").css("display","block");
			$(".game_app_type").css("display","none");
			$(".game_app_type ul li").removeClass("show-gats");
		}else if (ggz_cmttype == 3){
			$(".media_app_type").css("display","none");
			$(".game_app_type").css("display","block");
			$(".media_app_type ul li").removeClass("show-mats");
		}
})

$('input:radio[name="ad-format"]').click(function (){
	ggz_adtype = $('input:radio[name="ad-format"]:checked').val();
  $(".advertdemoW").find(".ad_w").attr({'src':'','style':''});
  $(".form-group").find(".file-preview").children(".close").click();
  //console.log($(".form-group").find(".file-preview").children(".close").html());
	$(".show-all").each(function(){
		$(this).removeClass("type-adimg");
		if (ggz_adtype == 1) {
			$(".type-banner").addClass("type-adimg");
			//$(".bannerposition").css("display","block");
			//$(".cpxjseting").css("display","none");
		}else if (ggz_adtype == 2){
			$(".type-cp").addClass("type-adimg");
			//$(".cpxjseting").css("display","block");
			//$(".bannerposition").css("display","none");
			//$(".advertshild").css("display","block");
		}else if (ggz_adtype == 3){
			$(".type-xxl").addClass("type-adimg");
			//$(".cpxjseting").css("display","none");
			//$(".bannerposition").css("display","none");
		}else if (ggz_adtype == 4){
			$(".type-kp").addClass("type-adimg");
			//$(".cpxjseting").css("display","none");
			//$(".bannerposition").css("display","none");
		};
	})
})
$('input:radio[name="ad-spread-type"]').click(function ggz_check_ptype_radio(){   //选择推广类型 决定展示什么项目
	var ggz_pt_chea = $('input:radio[name="ad-spread-type"]:checked').val();
	if (ggz_pt_chea == 1) {
	  $(".fit_platform").css("display","block");                                     //适合平台展示
	  $(".fit_platform").addClass("brand_p");                                        //添加品牌推广class
	  $(".fit_platform").removeClass("app_p");                                       //重复选择时取消添加应用推广的class
	  $(".spread_display").css("display","block");                                   //推广链接项展示
	  $(".android_display").css("display","none");                                   //重复选择时隐藏应用推广下安卓平台的几个项目
	  $(".ios_display").css("display","none");                                       //重复选择时隐藏应用推广下ios平台的几个项目
	  $(".deep_display").css("display","none");                                      //重复选择时隐藏应用推广下其他几个必填项目
	  $('input:radio[name="ad-platform-type"]').attr("checked",false);               //移除适合平台的选中状态
	  $(".fit_p_all").css("display","inline-block");
	  checkHeight();
	}else{
	  $(".fit_platform").css("display","block");
	  $(".fit_platform").addClass("app_p");
	  $(".fit_platform").removeClass("brand_p");
	  $(".spread_display").css("display","none");
	  $('input:radio[name="ad-platform-type"]').attr("checked",false);
	  $(".fit_p_all").css("display","none");
	  checkHeight();
	};
})
$('input:radio[name="ad-platform-type"]').click(function (){                     //选择适合平台  决定展示ios的项目还是安卓的项目
	var ggz_pf_chea = $('li.app_p input:radio[name="ad-platform-type"]:checked').val();
	if (ggz_pf_chea == 1) {
	  //alert("123");
	  $(".android_display").css("display","block");                                 //安卓平台下的几个项目展示
	  $(".ios_display").css("display","none");                                      // ios平台下的几个项目隐藏
	  $(".deep_display").css("display","block");                                    //必填项的几个项目展示
	}else if (ggz_pf_chea == 2){
	  //alert("asd");
	  $(".ios_display").css("display","block");
	  $(".android_display").css("display","none");
	  $(".deep_display").css("display","block");
	};
})



 $('input:radio[name="app-chouse-type"]').click(function checkradio(){
	 	var chea = $('input:radio[name="app-chouse-type"]:checked').val();
	 	if (chea == 1) {
			$(".appstore_display").css("display","block");
			$(".upload_app_dispaly").css("display","none");
			$(".appicon_display").css("display","none");
			$(".screenshot_display").css("display","none");
			checkHeight();
		}else{
			$(".appstore_display").css("display","none");
			$(".upload_app_dispaly").css("display","block");
			$(".appicon_display").css("display","block");
			$(".screenshot_display").css("display","block");
			checkHeight();
		};
	 })



/*
此插件基于Jquery
插件名：jquery.ScrollNav(滑动导航条)
*/
(function($){
	$.fn.ScrollNav = function(options){
        var opts = $.extend({}, $.fn.ScrollNav.defualts, options);
		var _this = $(this);

		$.fn.ScrollNav.defaultValue(opts,$(this));//还原默认

		$(this).hover(function(){
			 var leftValue = $.fn.ScrollNav.countLeft(opts,$(this)); //统计左侧的Value
			 var widthValue = $(this).width();
			 if($(this).find("li").length>0){
				 $.fn.ScrollNav.openSubNav(opts,$(this));
			 }
			 $.fn.ScrollNav.setScroll(opts,widthValue,leftValue);//添加动画
			},function(){
				 if($(this).find("li").length>0){
					 $.fn.ScrollNav.closeSubNav(opts,$(this));
				 }
				 $.fn.ScrollNav.defaultValue(opts,$(this));//还原默认
				});


	}
	//plugin defaults
	$.fn.ScrollNav.defualts ={
		scrollObj:".nav > .scrollObj",//滑动的父对象
		speed:"slow" //子菜单的宽度
	}

	//子插件：获取左侧Value
	$.fn.ScrollNav.countLeft = function(opts,liThis){
		var liIndex = liThis.index();
		var leftValue = 0;
		for(i=0;i<liIndex;i++){
			var listWidth = liThis.parent().children().eq(i).width();
			leftValue = leftValue+listWidth;
		}
		return leftValue;

	}
	//子插件：添加滚动动画
	$.fn.ScrollNav.setScroll = function(opts,widthValue,leftValue){
		$(opts.scrollObj).stop(true,false).delay(100).animate({width:widthValue,left:leftValue},opts.speed);
	}

	//子插件：展开二级导航
	$.fn.ScrollNav.openSubNav = function(opts,liThis){
		var heightValue = $(liThis).find("li").length*($(liThis).find("li").height());
		$(liThis).children("ul").animate({height:heightValue},opts.speed);
	}

	//子插件：展开二级导航
	$.fn.ScrollNav.closeSubNav = function(opts,liThis){
		$(liThis).children("ul").animate({height:0},opts.speed);
	}

	//子插件：获取默认落点
	$.fn.ScrollNav.defaultValue = function(opts,liThis){
		var liIndex = liThis.parent().children(".current").index();
		var widthValue =  liThis.parent().children(".current").width();
		var leftValue = 0;
		for(i=0;i<liIndex;i++){
			var listWidth = liThis.parent().children().eq(i).width();
			leftValue = leftValue+listWidth;
		}
		$(opts.scrollObj).stop(true,false).animate({width:widthValue,left:leftValue},opts.speed);
	}

})(jQuery);

$('.date-before-s').datetimepicker({
  language:  'zh-CN',
  weekStart: 1,
  todayBtn:  1,
  autoclose: 1,
  todayHighlight: 1,
  startDate:new Date(),
  startView: 2,
  minView: 2,
  forceParse: 0
}).on('changeDate',function (){
  var a = $('.date-before-s').val();
  $('.date-before-s').attr("value",a);
  $('.date-after-s').datetimepicker("setStartDate",$('.date-before-s').val());
  $('.date-after-s').datetimepicker("show");
  $('.date-after-s').focus();
});
$('.date-after-s').datetimepicker({
  language:  'zh-CN',
  weekStart: 1,
  todayBtn:  1,
  autoclose: 1,
  todayHighlight: 1,
  startDate:new Date(),
  startView: 2,
  minView: 2,
  forceParse: 0
}).on('changeDate',function (){
  var a = $('.date-after-s').val();
  $('.date-after-s').attr("value",a);
  checkHeight();
});
$('.date-after-s').on("click", function (){
  var wf = $('.date-before-s').val();
  if(wf!=""){
    $('.date-after-s').datetimepicker("hide");
    alert("请重新选择开始时间，再修改结束时间！");
    $('.date-before-s').focus();
    $('.date-before-s').datetimepicker("show");
  }else{
  $(this).datetimepicker("hide");
  alert("请选择开始时间！");
  $('.date-before-s').focus();
  }
});

$('.date-before').datetimepicker({
    language:  'zh-CN',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    endDate:new Date(),
    startView: 2,
    minView: 2,
    forceParse: 0
  }).on('changeDate',function (){
    var a = $('.date-before').val();
    $('.date-before').attr("value",a);
    $('.date-after').datetimepicker("setStartDate",$('.date-before').val());
    $('.date-after').datetimepicker("show");
    $('.date-after').focus();
  });
  $('.date-after').datetimepicker({
    language:  'zh-CN',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    endDate:new Date(),
    startView: 2,
    minView: 2,
    forceParse: 0
  }).on('changeDate',function (){
    var a = $('.date-after').val();
    $('.date-after').attr("value",a);
    checkHeight();
  });
  $('.date-after').on("click", function (){
    var wf = $('.date-before').val();
    if(wf!=""){
      $('.date-after').datetimepicker("hide");
      alert("请重新选择开始时间，再修改结束时间！");
      $('.date-before').focus();
      $('.date-before').datetimepicker("show");
    }else{
    $(this).datetimepicker("hide");
    alert("请选择开始时间！");
    $('.date-before').focus();
    }
  });