/*************************************

Template Name: E-Commerce | Personal Portfolio HTML5 Template
Author: Ahmed Samir
Author URI: https://www.facebook.com/a7med.samir.f
Description: Meruem | Personal Portfolio HTML5 Template
Version: 1.0

NOTE: This is active js file of the template.

****************************************/

/*global $ , alert, console*/

jQuery(function ($) {

  // Dropdown menu
  $(".sidebar-dropdown > a").click(function () {
      $(".sidebar-submenu").slideUp(200);
      if ($(this).parent().hasClass("active")) {
          $(".sidebar-dropdown").removeClass("active");
          $(this).parent().removeClass("active");
      } else {
          $(".sidebar-dropdown").removeClass("active");
          $(this).next(".sidebar-submenu").slideDown(200);
          $(this).parent().addClass("active");
      }

  });

  //toggle sidebar
  $("#toggle-sidebar").click(function () {
      $(".page-wrapper").toggleClass("toggled");
  });
  //Pin sidebar
/*   $("#pin-sidebar").click(function () {
      if ($(".page-wrapper").hasClass("pinned")) {
          // unpin sidebar when hovered
          $(".page-wrapper").removeClass("pinned");
          $("#sidebar").unbind( "hover");
      } else {
          $(".page-wrapper").addClass("pinned");
          $("#sidebar").hover(
              function () {
                  console.log("mouseenter");
                  $(".page-wrapper").addClass("sidebar-hovered");
              },
              function () {
                  console.log("mouseout");
                  $(".page-wrapper").removeClass("sidebar-hovered");
              }
          )

      }
  }); */


  //toggle sidebar overlay
  $("#overlay").click(function () {
      $(".page-wrapper").toggleClass("toggled");
  });

  //switch between themes 
  var themes = "default-theme legacy-theme chiller-theme ice-theme cool-theme light-theme";
  $('[data-theme]').click(function () {
      $('[data-theme]').removeClass("selected");
      $(this).addClass("selected");
      $('.page-wrapper').removeClass(themes);
      $('.page-wrapper').addClass($(this).attr('data-theme'));
  });

  // switch between background images
  var bgs = "bg1 bg2 bg3 bg4 bg5";
  $('[data-bg]').click(function () {
      $('[data-bg]').removeClass("selected");
      $(this).addClass("selected");
      $('.page-wrapper').removeClass(bgs);
      $('.page-wrapper').addClass($(this).attr('data-bg'));
  });

  // toggle background image
  $("#toggle-bg").change(function (e) {
      e.preventDefault();
      $('.page-wrapper').toggleClass("sidebar-bg");
  });

  // toggle border radius
  $("#toggle-border-radius").change(function (e) {
      e.preventDefault();
      $('.page-wrapper').toggleClass("boder-radius-on");
  });

  //custom scroll bar is only used on desktop
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $(".sidebar-content").mCustomScrollbar({
          axis: "y",
          autoHideScrollbar: true,
          scrollInertia: 300
      });
      $(".sidebar-content").addClass("desktop");

  } 

});


var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
wrapperMenu.classList.toggle('open');  
})


/* ==================================
      start loading 
===================================== */

$('.fixed-menu .show').on('click', function (){
            
    $(this).parent('.fixed-menu').toggleClass('is-visible');
    
    if ($(this).parent('.fixed-menu').hasClass('is-visible')){
        
        $(this).parent('.fixed-menu').animate({
            
          right: 0
            
        }, 500);
        
     $('body').animate({
            
        paddingright: '300px'
            
        }, 50);
        } else {
        
        $(this).parent('.fixed-menu').animate({
            
          right: '-300px'
            
        }, 700);
        
        $('body').animate({
            
        paddingright: 0
            
        }, 500);
  
    }
  });
  /////// Change Colors
  $('.switch-colors li').on('click', function () {
    $(':root').css('--maincolor', $(this).data('color'));
    $(':root').css('--mainbackground', $(this).data('background'));
});

  // Main chart
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      fillColor: "#fff",
      backgroundColor: 'rgba(255, 255, 255, .3)',
      borderColor: 'rgba(255, 255, 255)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  },
  options: {
    legend: {
      labels: {
        fontColor: "#fff",
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: true,
          color: "rgba(255,255,255,.25)"
        },
        ticks: {
          fontColor: "#fff",
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true,
          color: "rgba(255,255,255,.25)"
        },
        ticks: {
          fontColor: "#fff",
        },
      }],
    }
  }
});


$('[data-toggle="fullscreen"]').fullscreen();
