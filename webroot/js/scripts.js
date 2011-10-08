$(document).includeReady(function () {
  
    $("a[rel=twipsy]").twipsy({
      live: true,
      delayOut: 0
    });
    
    $("a.url-links")
      .twipsy({
        html: true,
        trigger: focus,
        title: function(){
          return $(".edit-url-holder").html();
        }
      })
  
    $("#ImageEditTitle").click(function(){
      $('.description .field').addClass('hide');
      $('#ImageEditDescription').removeClass('hide');
      $(this).addClass('hide').parent().find('.field').removeClass('hide');
    });
    
    $("#ImageEditDescription").click(function(){
      $('.page-header .field').addClass('hide');
      $('#ImageEditTitle').removeClass('hide');
      $(this).addClass('hide').parent().find('.field').removeClass('hide');
    });

    $(".page-header .cancel").click(function(){
      $(this).parent().addClass('hide').parent().parent().find('.edit_trigger').removeClass('hide');
    });
    
    $(".description .cancel").click(function(){
      $(this).parent().addClass('hide').parent().parent().find('.edit_trigger').removeClass('hide');
    });
  
    /* TOP NAV */

    var ul = $('.nav');

    if (ul.length) {
        ul.children('li').hover(function() {
            $(this).children('ul').show();
        }, function() {
            $(this).children('ul').hide();
        }).children('ul').hide();
    }
    
    /* THUMBNAIL HOVERING */
    
    $("div.thumbnail-hover").hover( function(){
  			$(this).toggleClass('opacity');
  			$(this).parent().toggleClass('hover');
  	});
    
    /* SEARCH SIZING */
    
    var input = $('input#search-text');
    var divInput = $('div.input');
    var width = divInput.width();
    var outerWidth = divInput.parent().width() - (divInput.outerWidth() - width) - 28;
    var submit = $('#search-btn');
    var txt = input.val();
    
    input.bind('focus', function() {
        if(input.val() === txt) {
            input.val('');
        }
        $(this).parent().addClass("fadeIn").animate({
            width:'160'
        }, 300, function() {
            if(!(input.val() === '' || input.val() === txt)) {
                if(!($.browser.msie && $.browser.version < 9)) {
                } else {
                }
            }
        }).addClass('focus');
    }).bind('blur', function() {
        $(this).parent().removeClass("fadeIn").animate({
            width: width + 'px'
        }, 300, function() {
            if(input.val() === '') {
                input.val(txt)
            }
        }).removeClass('focus');
        if(!($.browser.msie && $.browser.version < 9)) {
        } else {
        }
    }).keyup(function() {
        if(input.val() === '') {
            if(!($.browser.msie && $.browser.version < 9)) {
            } else {
            }
        } else {
            if(!($.browser.msie && $.browser.version < 9)) {
            } else {
            }
        }
    });
  
});