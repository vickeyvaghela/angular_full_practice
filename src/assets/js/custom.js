
$(document).ready(function () {
  new WOW().init();
})

var $ = jQuery.noConflict();
$('#headerlogo').hide();
$(window).scroll(function () {

  $('#head_lg').show();
  if ($(this).scrollTop() > 370 && $(this).scrollTop() < 6850) {
    $('#headerlogo').show();
    $('#divlogo1').hide();
  } else {
    $('#headerlogo').hide();
    $('#divlogo1').show();
  }
});

$(function () {
  var link = $('.border_row a.bo_menu ');

  link.on('click', function (e) {
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 600);
    $(this).addClass('active');
    e.preventDefault();
  });

  $(window).on('scroll', function () {
    scrNav();
  });

  function scrNav() {
    var sTop = $(window).scrollTop();
    $('section').each(function () {
      var id = $(this).attr('id'),
        offset = $(this).offset().top - 1,
        height = $(this).height();
      if (sTop >= offset && sTop < offset + height) {
        link.removeClass('active');
        $('.border_row').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  }
  scrNav();
});


var btn = $('#button');

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});


$(document).on('click', '#button', function(e){
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

function openSideNav() {
    if (document.getElementById("sidebar-wrapper").style.width == '80px')
    {
        document.getElementById("sidebar-wrapper").style.width = "0";
        document.getElementById("content-wrapper").style.padding = "80px 15px 0px 15px";
        document.getElementById("content-wrapper").style.transition = "2s";
    }
    else
    {
        document.getElementById("sidebar-wrapper").style.width = "80px";
        document.getElementById("sidebar-wrapper").style.transition = "2s";
        document.getElementById("content-wrapper").style.padding = "80px 15px 0px 80px";
    }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sidebar-wrapper").style.width = "0";
    document.getElementById("content-wrapper").style.padding = "80px 15px 0px 15px";
    document.getElementById("content-wrapper").style.transition = "2s";
}
