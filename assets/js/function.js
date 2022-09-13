$(document).ready(function(){

     // Hero banner Slider
    $('.hero-banner').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1
    });

    // Categories Slider
    $('.categories').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        slideBy: 2 ,
        responsive:{
            0:{
                items:2
            },
            500:{
                items:3
            },
            768:{
                items:4
            },
            900:{
                items:5
            },
            1025:{
                items:6
            }
        }
    });

    // Deal Slider
    $('.deal-slider').owlCarousel({
        loop:false,
        margin:5,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:3
            },
            900:{
                items:4
            },
            1025:{
                items:5
            }
        }
    });


    // Product Slider
    $('.product-slider').owlCarousel({
        loop:false,
        margin:5,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            772:{
                items:3
            },
            904:{
                items:4
            },
            1029:{
                items:5
            }
        }
    });


    // Product image slider
    $('.p-img-slider').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });


    // Deal Timer
    if($('#countdown,.g-countdown').length){
        (function () {
          const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

          let birthday = "Apr 30, 2021 19:00:00",
              countDown = new Date(birthday).getTime(),
              x = setInterval(function() {    

                let now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById("days").innerText = Math.floor(distance / (day)),
                  document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                  document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                  document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

                //do something later when date is reached
                if (distance < 0) {
                  let headline = document.getElementById("headline"),
                      countdown = document.getElementById("countdown"),
                      content = document.getElementById("content");

                  content.style.display = "block";

                  clearInterval(x);
                }
                //seconds
              }, 0)
          }());
    }


    // Form input
    $('.form-control:not(.no-border)').each(function(){
        if($(this).hasClass('.n-t')){
            $(this).wrap('<div class="input-box position-relative"></div>');
        }else{
            $(this).wrap('<div class="input-box n-t position-relative"></div>');
        }
    });

    $(document).on('focus','.form-control',function(){
        $(this).parents('.input-box').addClass('focus');
    });

    $(document).on('blur','.form-control',function(){
        $(this).parents('.input-box').removeClass('focus');
    });


    // Popup
    $(document).on('click','.close',function(){
        $(this).parents('.popup-box').hide();
        $(this).parents('.popup-box').removeClass('show');
    });

    $(document).on('click','.popup-trigger',function(){
        var target = $(this).attr('data-toggle');
        $('#'+target+'').show();
        $('#'+target+'').addClass('show');
    });

    // Quantity Increase Decrease
    $(document).on('click','.increase',function(){
        var value = $(this).parents('form').find('.quantity').val();
        value = isNaN(value) ? 0 : value;
        value++;
        $(this).parents('form').find('.quantity').val(value)
    })


    $(document).on('click','.decrease',function(){
        var value = $(this).parents('form').find('.quantity').val();
        value = isNaN(value) ? 0 : value;
        value < 1 ? value = 1 : '';
        value--;
        $(this).parents('form').find('.quantity').val(value)
    })

    // ------- Steps
    var step = $('.steps-header .active').attr('data-step');
    $('.step-content[data-step*="'+ step +'"]').addClass('show');

        // Next
    $(document).on('click','.next-step',function(){
        if($('.step.last').hasClass('active')){
            $('.last').addClass('done');    
        }else{
            var step = $('.steps-header .active').attr('data-step');
            $('.steps-header .active').toggleClass('active done');
            step++;
            $('.step[data-step*="'+ step +'"]').addClass('active');
            $('.step-content.show').removeClass('show');
            $('.step-content[data-step*="'+ step +'"]').addClass('show');
        }
    });

        //Prev
    $(document).on('click','.prev-step',function(){
        if(!$('.step.first').hasClass('active')){
            $('.last').removeClass('done'); 
            var step = $('.steps-header .active').attr('data-step');
            $('.steps-header .active').toggleClass('active');
            step--;
            $('.step[data-step*="'+ step +'"]').toggleClass('active done');
            $('.step-content.show').removeClass('show');
            $('.step-content[data-step*="'+ step +'"]').addClass('show');
        }
    });

    $(document).on('click','.steps-header .step,.step-to',function(){
        var step = $(this).attr('data-step');
         $('.steps-header .active').removeClass('active');
         $('.step.done').removeClass('done');
        $(this).addClass('active');
        $(this).removeClass('done');
        $('.step-content.show').removeClass('show');
        $('.step-content[data-step*="'+ step +'"]').addClass('show');

        for (i = 1; i < step; i++) {
          $('.step[data-step*="'+ i +'"]').addClass('done');
        }
    });

    $(document).on('click','.next-step,.prev-step,.steps-header .step',function(){
        if($('.step.first').hasClass('done')){
            $('#checkout-btn').fadeOut();
        }else{
            $('#checkout-btn').fadeIn();
        }

        if($('.full-step').hasClass('show')){
            $('.order-summary').hide();
        }else{
            $('.order-summary').show();
        }
    });

    if($('.full-step').hasClass('show')){
        $('.order-summary').hide();
    }else{
        $('.order-summary').show();
    }
    

    //Tab
    $(document).on('click','.tab-heading button',function(){
        $(this).parents('.tab-box').find('button').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('data-toggle');
        $(this).parents('.tab-box').find('div').removeClass('show');
        $(this).parents('.tab-box').find('#'+tab+'').addClass('show');
    });


    // Category Dropdown
    $(document).on('mouseover','.c-dropdown',function(){
        var dropdown = $(this).attr('data-toggle');
         var top = $(this).offset().top + $(this).outerHeight();

        $('#'+dropdown+'').addClass('show');
        $('#'+dropdown+'').css('top', top);
    });

    $(document).on('mouseout','.c-dropdown',function(){
        var dropdown = $(this).attr('data-toggle');
        $('#'+dropdown+'').removeClass('show');  
    });

    $(document).on('mouseover','.c-dropdown-content',function(){
        var id = $(this).attr('id');
        $('#'+id+'').addClass('show');
        $('[data-toggle="'+id+'"]').addClass('hover');
    });

    $(document).on('mouseout','.c-dropdown-content',function(){
        $(this).removeClass('show');
        $('.c-dropdown ').removeClass('hover');
    });

    $(document).on('mouseover','.c-d-main-category a' ,function(){
        var dropdown = $(this).attr('data-toggle');
        var content = $(this).parents('.c-dropdown-content').find('.c-d-sub-category').hide();
        $(this).parents('.c-dropdown-content').find('[data-content="'+ dropdown +'"]').show();
    });

    // Product image change on hover
    $(document).on('mouseover','.p-other-img .item a',function(){
        $(this).trigger('click');
    });

    // Accordian
    $(document).on('click','.accordian-heading',function(){
        $(this).toggleClass('active');
    });

    // Active
    $(document).on('click','.active-trigger',function(){
        $(this).parents('.active-box').find('.active-trigger').removeClass('active');
        $(this).addClass('active');
    });

        //Grid View
    $(document).on('click','.list-view',function(){
        $(this).parents('.product-container').find('.product-box').addClass('list-view-active');
    });

    $(document).on('click','.grid-view',function(){
        $(this).parents('.product-container').find('.product-box').removeClass('list-view-active');
    });

    // body height
    const headerHeight = $('header').outerHeight(true);
    const footerHeight = $('footer').outerHeight(true);
    const mainHeight = window.innerHeight - (headerHeight+footerHeight);
    $('main').css('min-height',mainHeight);

    // Enter Otp
    $('.digit-group').find('input').each(function() {
        $(this).attr('maxlength', 1);
        $(this).on('keyup', function(e) {
            var parent = $($(this).parent());
            
            if(e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + $(this).data('previous'));
                
                if(prev.length) {
                    $(prev).select();
                }
            } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                var next = parent.find('input#' + $(this).data('next'));
                
                if(next.length) {
                    $(next).select();
                } else {
                    if(parent.data('autosubmit')) {
                        parent.submit();
                    }
                }
            }
        });
    });

});











// Product image 
(function ($) {
    $(document).ready(function() {
        $('.xzoom, .xzoom-gallery').xzoom({zoomWidth: 400, title: true, tint: '#333', Xoffset: 15});
        $('.xzoom2, .xzoom-gallery2').xzoom({position: '#xzoom2-id', tint: '#ffa200'});
        $('.xzoom3, .xzoom-gallery3').xzoom({position: 'lens', lensShape: 'circle', sourceClass: 'xzoom-hidden'});
        $('.xzoom4, .xzoom-gallery4').xzoom({tint: '#006699', Xoffset: 15});
        $('.xzoom5, .xzoom-gallery5').xzoom({tint: '#006699', Xoffset: 15});

        //Integration with hammer.js
        var isTouchSupported = 'ontouchstart' in window;

        if (isTouchSupported) {
            //If touch device
            $('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function(){
                var xzoom = $(this).data('xzoom');
                xzoom.eventunbind();
            });
            
            $('.xzoom, .xzoom2, .xzoom3').each(function() {
                var xzoom = $(this).data('xzoom');
                $(this).hammer().on("tap", function(event) {
                    event.pageX = event.gesture.center.pageX;
                    event.pageY = event.gesture.center.pageY;
                    var s = 1, ls;
    
                    xzoom.eventmove = function(element) {
                        element.hammer().on('drag', function(event) {
                            event.pageX = event.gesture.center.pageX;
                            event.pageY = event.gesture.center.pageY;
                            xzoom.movezoom(event);
                            event.gesture.preventDefault();
                        });
                    }
    
                    xzoom.eventleave = function(element) {
                        element.hammer().on('tap', function(event) {
                            xzoom.closezoom();
                        });
                    }
                    xzoom.openzoom(event);
                });
            });

        $('.xzoom4').each(function() {
            var xzoom = $(this).data('xzoom');
            $(this).hammer().on("tap", function(event) {
                event.pageX = event.gesture.center.pageX;
                event.pageY = event.gesture.center.pageY;
                var s = 1, ls;

                xzoom.eventmove = function(element) {
                    element.hammer().on('drag', function(event) {
                        event.pageX = event.gesture.center.pageX;
                        event.pageY = event.gesture.center.pageY;
                        xzoom.movezoom(event);
                        event.gesture.preventDefault();
                    });
                }

                var counter = 0;
                xzoom.eventclick = function(element) {
                    element.hammer().on('tap', function() {
                        counter++;
                        if (counter == 1) setTimeout(openfancy,300);
                        event.gesture.preventDefault();
                    });
                }

                function openfancy() {
                    if (counter == 2) {
                        xzoom.closezoom();
                        $.fancybox.open(xzoom.gallery().cgallery);
                    } else {
                        xzoom.closezoom();
                    }
                    counter = 0;
                }
            xzoom.openzoom(event);
            });
        });
        
        $('.xzoom5').each(function() {
            var xzoom = $(this).data('xzoom');
            $(this).hammer().on("tap", function(event) {
                event.pageX = event.gesture.center.pageX;
                event.pageY = event.gesture.center.pageY;
                var s = 1, ls;

                xzoom.eventmove = function(element) {
                    element.hammer().on('drag', function(event) {
                        event.pageX = event.gesture.center.pageX;
                        event.pageY = event.gesture.center.pageY;
                        xzoom.movezoom(event);
                        event.gesture.preventDefault();
                    });
                }

                var counter = 0;
                xzoom.eventclick = function(element) {
                    element.hammer().on('tap', function() {
                        counter++;
                        if (counter == 1) setTimeout(openmagnific,300);
                        event.gesture.preventDefault();
                    });
                }

                function openmagnific() {
                    if (counter == 2) {
                        xzoom.closezoom();
                        var gallery = xzoom.gallery().cgallery;
                        var i, images = new Array();
                        for (i in gallery) {
                            images[i] = {src: gallery[i]};
                        }
                        $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
                    } else {
                        xzoom.closezoom();
                    }
                    counter = 0;
                }
                xzoom.openzoom(event);
            });
        });

        } else {
            //If not touch device

            //Integration with fancybox plugin
            $('#xzoom-fancy').bind('click', function(event) {
                var xzoom = $(this).data('xzoom');
                xzoom.closezoom();
                $.fancybox.open(xzoom.gallery().cgallery, {padding: 0, helpers: {overlay: {locked: false}}});
                event.preventDefault();
            });
           
            //Integration with magnific popup plugin
            $('#xzoom-magnific').bind('click', function(event) {
                var xzoom = $(this).data('xzoom');
                xzoom.closezoom();
                var gallery = xzoom.gallery().cgallery;
                var i, images = new Array();
                for (i in gallery) {
                    images[i] = {src: gallery[i]};
                }
                $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
                event.preventDefault();
            });
        }
    });
})(jQuery);


// Profile Change
var $profileImgDiv = document.getElementById("profile-img-div"),
    $profileImg = document.getElementById("profile-img"),
    $changePhoto = document.getElementById("change-photo"),
    $xPosition = document.getElementById("x-position"),
    $yPosition = document.getElementById("y-position"),
    $saveImg = document.getElementById("save-img"),
    $loader = document.getElementById("loader"),
    $cancelImg = document.getElementById("cancel-img"),
    $profileImgInput = document
      .getElementById("profile-img-input"),
    $profileImgConfirm = document
      .getElementById("profile-img-confirm"),
    $error = document.getElementById("error");

var currentProfileImg = "",
    profileImgDivW = getSizes($profileImgDiv).elW,
    NewImgNatWidth = 0,
    NewImgNatHeight = 0,
    NewImgNatRatio = 0,
    NewImgWidth = 0,
    NewImgHeight = 0,
    NewImgRatio = 0,
    xCut = 0,
    yCut = 0;

makeSquared($profileImgDiv);

$changePhoto.addEventListener("change", function() {
  currentProfileImg = $profileImg.src;
  showPreview(this, $profileImg);
  $loader.style.width = "100%";
  $profileImgInput.style.display = "none";
  $profileImgConfirm.style.display = "flex";
  $error.style.display = "none";
});

$xPosition.addEventListener("input", function() {
  $profileImg.style.left = -this.value + "px";
  xCut = this.value;
  yCut = 0;
});

$yPosition.addEventListener("input", function() {
  $profileImg.style.top = -this.value + "px";
  yCut = this.value;
  xCut = 0;
});

$saveImg.addEventListener("click", function() {
  cropImg($profileImg);
  resetAll(true);
});

$cancelImg.addEventListener("click", function() {
  resetAll(false);
});

window.addEventListener("resize", function() {
  makeSquared($profileImgDiv);
  profileImgDivW = getSizes($profileImgDiv).elW;
});

function makeSquared(el) {
  var elW = el.clientWidth;
  el.style.height = elW + "px";
}

function showPreview(input, el) {
  var reader = new FileReader();
  reader.readAsDataURL(input.files[0]);
  if (input.files && input.files[0]) {
    reader.onload = function(e) {
      setTimeout(function() {
        el.src = e.target.result;
      }, 300);

      var poll = setInterval(function() {
        if (el.naturalWidth && el.src != currentProfileImg) {
          clearInterval(poll);
          setNewImgSizes(el);
          setTimeout(function() {
            $loader.style.width = "0%";
            $profileImg.style.opacity = "1";
          }, 1000);
        }
      }, 100);
    };
  } else {
    return;
  }
}

function setNewImgSizes(el) {
  if (getNatSizes(el).elR > 1) {
    el.style.width = "auto";
    el.style.height = "100%";
    newImgWidth = getSizes(el).elW;
    $xPosition.style.display = "block";
    $yPosition.style.display = "none";
    $xPosition.max = newImgWidth - profileImgDivW;
  } else if (getNatSizes(el).elR < 1) {
    el.style.width = "100%";
    el.style.height = "auto";
    newImgHeight = getSizes(el).elH;
    $xPosition.style.display = "none";
    $yPosition.style.display = "block";
    $yPosition.max = newImgHeight - profileImgDivW;
  } else if (getNatSizes(el).elR == 1) {
    el.style.width = "100%";
    el.style.height = "100%";
    $xPosition.style.display = "none";
    $yPosition.style.display = "none";
  }
}

function getNatSizes(el) {
  var elW = el.naturalWidth,
    elH = el.naturalHeight,
    elR = elW / elH;
  return {
    elW: elW,
    elH: elH,
    elR: elR
  };
}

function getSizes(el) {
  var elW = el.clientWidth,
    elH = el.clientHeight,
    elR = elW / elH;
  return {
    elW: elW,
    elH: elH,
    elR: elR
  };
}

function cropImg(el) {
  var natClientImgRatio = getNatSizes(el).elW / getSizes(el).elW;
  (myCanvas = document.getElementById("croppedPhoto")),
    (ctx = myCanvas.getContext("2d"));
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 400, 400);
  ctx.drawImage(
    el,
    xCut * natClientImgRatio,
    yCut * natClientImgRatio,
    profileImgDivW * natClientImgRatio,
    profileImgDivW * natClientImgRatio,
    0,
    0,
    400,
    400
  );
  var newProfileImgUrl = myCanvas.toDataURL("image/jpeg");
  $profileImg.src = newProfileImgUrl;
}

function resetAll(confirm) {
  if (!confirm) {
    $profileImg.src = currentProfileImg;
  }
  $changePhoto.value = "";
  $profileImgInput.style.display = "block";
  $profileImgConfirm.style.display = "none";
  $profileImg.style.left = "0";
  $profileImg.style.top = "0";
  $profileImg.style.width = "100%";
  $profileImg.style.height = "100%";
  $xPosition.style.display = "none";
  $yPosition.style.display = "none";
  $xPosition.value = "0";
  $yPosition.value = "0";
  xCut = "0";
  yCut = "0";
}

function checkMinSizes(el) {
  if (getNatSizes(el).elW > 400 && getNatSizes(el).elH > 400) {
    return true;
  } else {
    return false;
  }
}
