$(document).ready(function () {
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $(window).scroll(function () {
    var scrollT = ($(window).scrollTop() - $('.error').offset().top - 400) / 8;
    $('.error-img img').css({
      'transform': 'rotate(' + scrollT + 'deg)'
    })
  });

  if ($(window).width() > 1200) {
    $(".fact-img img").mgGlitch({
      destroy: false,
      glitch: true,
      scale: false,
      blend: false,
      blendModeType: 'hue',
      glitch1TimeMin: 200,
      glitch1TimeMax: 400,
      glitch2TimeMin: 10,
      glitch2TimeMax: 100,
    });

  }

  $('.mob-btn').click(function () {
    $('.menu').slideToggle(300);
  })
  if ($('div').hasClass('fact-item_bottom')) {
    new Vivus('svganimate', {
      duration: 200
    });

  }
  $('.quote-img').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
    classToRemove: 'hidden_animation',
    offset: '50%'
  });

  var reviews = $('.reviews-carousel');
  reviews.owlCarousel({
    loop: true,
    margin: 66,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  })

  reviews.on('changed.owl.carousel', function (event) {
    $('.video img').show();
    $('.video .paranja').show();
    $('.play-btn').show();
    $('.video iframe').remove();
  });

  $('.play-btn').click(function () {
    var $from = $(this);
    var imgWidth = $from.parents('.video').find('img').width();
    var imgHeight = $from.parents('.video').find('img').height();
    $from.parents('.video').find('img').hide();
    $from.parents('.video').find('.paranja').hide();
    $from.hide();

    $from.parents('.video').append('<iframe width="' + imgWidth + '" height="' + imgHeight + '" src="https://www.youtube.com/embed/' + $from.parents(".video").data("id") + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  })


  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 40
    }, 1500);

  });


  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('[data-popup]').magnificPopup({
    type: 'inline',
    preloader: false
  });
  var heightPage = $(document).height() / 2;

  $(window).scroll(function () {
    if ($(window).scrollTop() > heightPage) {
      showModal('modal_5');
      heightPage = $(document).height();
    }
  });

  function showModal(id) {
    console.log('show modal 50%');
  }

  // функция возвращает cookie с именем name, если есть, если нет, то undefined    
  function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  // проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
  var alertwin = getCookie("alertwin");
  if (alertwin != "no") {
    $(document).mouseleave(function (e) {
      if (e.clientY < 0) {
        console.log('show modal close site')
        // записываем cookie на 1 день, с которой мы не показываем окно
        var date = new Date;
        date.setDate(date.getDate() + 1);
        document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();
      }
    });
    /*  $(document).click(function(e) {
          if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
              $(".exitblock").remove();
          }
      }); */
  }



  $("input[name='phone']").mask("+38 (999) 999-9999");

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  }
  $('input[name="utm_source"]').val(getUrlVars()["utm_source"]);
  $('input[name="utm_campaign"]').val(getUrlVars()["utm_campaign"]);
  $('input[name="utm_medium"]').val(getUrlVars()["utm_medium"]);
  $('input[name="utm_term"]').val(getUrlVars()["utm_term"]);
  $('input[name="utm_content"]').val(getUrlVars()["utm_content"]);
  $('input[name="click_id"]').val(getUrlVars()["aff_sub"]);
  $('input[name="affiliate_id"]').val(getUrlVars()["aff_id"]);
  $('input[name="user_agent"]').val(navigator.userAgent);
  $('input[name="ref"]').val(document.referrer);

  $.get("https://ipinfo.io", function (response) {
    $('input[name="ip_address"]').val(response.ip);
    $('input[name="city"]').val(response.city);
  }, "jsonp");

  function readCookie(name) {
    var n = name + "=";
    var cookie = document.cookie.split(';');
    for (var i = 0; i < cookie.length; i++) {
      var c = cookie[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(n) == 0) {
        return c.substring(n.length, c.length);
      }
    }
    return null;
  }
  setTimeout(function () {
    $('.gclid_field').val(readCookie('gclid'));
    if ($('.gclid_field').val() == '') {
      $('.gclid_field').val(readCookie('_gid'));
    }
  }, 2000);

  /*db/registration.php*/

  /* form valid*/
  var alertImage = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg>';
  var error;
  $('.submit').click(function (e) {
    e.preventDefault();
    var ref = $(this).closest('form').find('[required]');
    $(ref).each(function () {
      if ($(this).val() == '') {
        var errorfield = $(this);
        if ($(this).attr("type") == 'email') {
          var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
          if (!pattern.test($(this).val())) {
            $("input[name=email]").val('');
            $(this).addClass('error').parent('label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else if ($(this).attr("type") == 'tel') {
          var patterntel = /^()[- +()0-9]{9,18}/i;
          if (!patterntel.test($(this).val())) {
            $("input[name=phone]").val('');
            $(this).addClass('error').parent('label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else {
          $(this).addClass('error').parent('label').append('<div class="allert">' + alertImage + '</div>');
          error = 1;
          $(":input.error:first").focus();
          return false;
        }
        error = 1;
        return false;
      } else {
        error = 0;
        $(this).addClass('error').parent('label').find('.allert').remove();
      }
    });
    if (error !== 1) {
      $(this).unbind('submit').submit();
    }
  });

  
    var observer = lozad();
  observer.observe();
  
  $('nav').hover(function(){
    $('img[data-src]').each(function(){
      $(this).attr('src', $(this).data('src'));
    })
  })
});
