$(document).ready(function(){function e(e){console.log("show modal 50%")}function t(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}function i(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,i,a){e[i]=a});return e}function a(e){for(var t=e+"=",i=document.cookie.split(";"),a=0;a<i.length;a++){for(var n=i[a];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return null}$(window).scroll(function(){return $("nav").toggleClass("fixed",$(window).scrollTop()>0)}),$(window).scroll(function(){var e=($(window).scrollTop()-$(".error").offset().top-200)/10;$(".error-img img").css({transform:"rotate("+e+"deg)"})}),$(window).width()>1200&&$(".fact-img img").mgGlitch({destroy:!1,glitch:!0,scale:!0,blend:!0,blendModeType:"hue",glitch1TimeMin:200,glitch1TimeMax:400,glitch2TimeMin:10,glitch2TimeMax:100}),$(".mob-btn").click(function(){$(".menu").slideToggle(300)}),$("div").hasClass("fact-item_bottom")&&new Vivus("svganimate",{duration:200}),$(".quote-img").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeInLeft",classToRemove:"hidden_animation",offset:0});var n=$(".reviews-carousel");n.owlCarousel({loop:!0,margin:66,nav:!0,dots:!1,responsive:{0:{items:1},1e3:{items:2}}}),n.on("changed.owl.carousel",function(e){$(".video img").show(),$(".video .paranja").show(),$(".play-btn").show(),$(".video iframe").remove()}),$(".play-btn").click(function(){var e=$(this),t=e.parents(".video").find("img").width(),i=e.parents(".video").find("img").height();e.parents(".video").find("img").hide(),e.parents(".video").find(".paranja").hide(),e.hide(),e.parents(".video").append('<iframe width="'+t+'" height="'+i+'" src="https://www.youtube.com/embed/'+e.parents(".video").data("id")+'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')}),$(".scroll").click(function(e){event.preventDefault();var t=$(this).attr("href"),i=$(t).offset().top;$("body,html").animate({scrollTop:i-40},1500)}),$(".popup-youtube").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),$("[data-popup]").magnificPopup({type:"inline",preloader:!1});var o=$(document).height()/2;$(window).scroll(function(){$(window).scrollTop()>o&&(e("modal_5"),o=$(document).height())});var r=t("alertwin");"no"!=r&&$(document).mouseleave(function(e){if(e.clientY<0){console.log("show modal close site");var t=new Date;t.setDate(t.getDate()+1),document.cookie="alertwin=no; path=/; expires="+t.toUTCString()}}),$("input[name='phone']").mask("+38 (999) 999-9999"),$('input[name="utm_source"]').val(i().utm_source),$('input[name="utm_campaign"]').val(i().utm_campaign),$('input[name="utm_medium"]').val(i().utm_medium),$('input[name="utm_term"]').val(i().utm_term),$('input[name="utm_content"]').val(i().utm_content),$('input[name="click_id"]').val(i().aff_sub),$('input[name="affiliate_id"]').val(i().aff_id),$('input[name="user_agent"]').val(navigator.userAgent),$('input[name="ref"]').val(document.referrer),$.get("https://ipinfo.io",function(e){$('input[name="ip_address"]').val(e.ip),$('input[name="city"]').val(e.city)},"jsonp"),setTimeout(function(){$(".gclid_field").val(a("gclid")),""==$(".gclid_field").val()&&$(".gclid_field").val(a("_gid"))},2e3);var l,s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg>';$(".submit").click(function(e){e.preventDefault();var t=$(this).closest("form").find("[required]");$(t).each(function(){if(""==$(this).val()){$(this);if("email"==$(this).attr("type")){var e=/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;if(!e.test($(this).val()))return $("input[name=email]").val(""),$(this).addClass("error").parent("label").append('<div class="allert">'+s+"</div>"),l=1,$(":input.error:first").focus(),!1}else{if("tel"!=$(this).attr("type"))return $(this).addClass("error").parent("label").append('<div class="allert">'+s+"</div>"),l=1,$(":input.error:first").focus(),!1;var t=/^()[- +()0-9]{9,18}/i;if(!t.test($(this).val()))return $("input[name=phone]").val(""),$(this).addClass("error").parent("label").append('<div class="allert">'+s+"</div>"),l=1,$(":input.error:first").focus(),!1}return l=1,!1}l=0,$(this).addClass("error").parent("label").find(".allert").remove()}),1!==l&&$(this).unbind("submit").submit()});var d=lozad();d.observe(),$("nav").hover(function(){$("img[data-src]").each(function(){$(this).attr("src",$(this).data("src"))})})});