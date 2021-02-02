/* MAIN VISUAL */
w$(function(){
	var js_main = (function(){
		if(!w$('.main_visual').hasClass('main')) return false;

		var $zone = w$(".visual-banner"),
		$visual = w$(".visual");

		//비주얼배경
		$visual.each(function(){
			var $bg = w$(".bg-img img", this).attr("src");
			w$(this).css({
				"background": "url(" + $bg + ") no-repeat 50% center",
				"background-size": "cover"
			});
		})

		//비주얼 배너
		var $visualSlider = w$('.visual-banner > ul').bxSlider({
			auto: true,
			pager:true,
			speed: 1200,
            pause: 5000,
			mode:'fade',
			autoControls: true,
		 	controls: false,			
		});
		
	})();
    
    // 메뉴바  키보드 focuse on/off 
    w$('#biz-nav .menu_1dep>a').focus(function(){
        jQuery(".menu_bg").addClass('active');    
        jQuery("#biz-nav .menu_2dep").addClass('on');  
    });
    
    
    w$('.menu_bg ').mouseout(function(){
        jQuery(".menu_bg").removeClass('active');    
        jQuery("#biz-nav .menu_2dep").removeClass('on');  
    });
    
    w$('#biz-nav .lastmenu').blur(function(){
        jQuery(".menu_bg").removeClass('active');    
        jQuery("#biz-nav .menu_2dep").removeClass('on');  
    });
    
    
})



function fn_mobile(node) {
    if (document.getElementsByClassName("tabmenu")[0].style.display == "" || document.getElementsByClassName("tabmenu")[0].style.display == "none") {
        document.getElementsByClassName("tabmenu")[0].style.display = 'block';
    }
    else {
        document.getElementsByClassName("tabmenu")[0].style.display = 'none';
    }            
}


function fncPopContentView(_cmd, objId, org_cls){   
 
    //var _URL ="http://edms.kric.or.kr/kric/action/po_view?objectId=" + objId;//2014.09.22 sk : drm 사용시 
    //openPopup(_URL,'','500','100','scrollbars=no'); 
    //var _URL = "http://localhost:7001/servlet/ContentDownloadServlet?type=pdf&object_id=" + objId; 
    var _URL = CONTEXT_NAME+"/servlet/ContentDownloadServlet?type=pdf&object_id=" + objId;//2014.09.22 sk : pdf 사용시  

    location.href = _URL;
    //setInterval(location.reload(), 1500); 
    //setTimeout(location.reload(), 3000);
 }
 
   
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
 // Change image every 2 seconds
}

function start_animate(){
	var j = 0;
	$(".animate-element:in-viewport").each(function(){
		var $this = $(this);
		if (!$this.hasClass("start-animate") && !$this.hasClass("animated")) {
			$this.addClass("start-animate");
			setTimeout(function(){
				$this.addClass("animated");
			}, 250 * j);
			j++;
		};
	});
}
