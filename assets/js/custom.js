/*************************************

Template Name: E-Commerce | Personal Portfolio HTML5 Template
Author: Ahmed Samir
Author URI: https://www.facebook.com/a7med.samir.f
Description: Meruem | Personal Portfolio HTML5 Template
Version: 1.0

NOTE: This is active js file of the template.

****************************************/
/* 
document.body.style.webkitTransform =         // Chrome, Opera, Safari
  document.body.style.msTransform =           // IE 9
  document.body.style.transform = 'scale(0.85)'; */

/*global $ , alert, console*/
$('#white-theme').on('click', function () {
  $('footer').removeClass('unique-color-dark').addClass('white-color');
  $('.navbar').removeClass('unique-color-dark').addClass('white-color');
  $('.card-header').removeClass('unique-color-dark').addClass('white-color');
  $('.show').removeClass('unique-color-dark').addClass('white-color');
  $('.card').removeClass('unique-color-dark').addClass('white-color');
  $('.card').removeClass('unique-color-dark').addClass('white-color');
  $('.fixed-menu').removeClass('unique-color-dark').addClass('white-color');
  $('.sidebar-footer').removeClass('grey darken-3').addClass('white-color');
  $('.sidebar-content').removeClass('unique-color-dark').addClass('white-color');
  $('body').removeClass('grey darken-3').removeClass('white-text');
});

$('#dark-theme').on('click', function () {
  $('footer').removeClass('white-color').addClass('unique-color-dark');
  $('.navbar').removeClass('white-color').addClass('unique-color-dark');
  $('.card-header').removeClass('white-color').addClass('unique-color-dark');
  $('.show').removeClass('white-color').addClass('unique-color-dark');
  $('.card').removeClass('white-color').addClass('unique-color-dark');
  $('.fixed-menu').removeClass('white-color').addClass('unique-color-dark');
  $('.sidebar-footer').removeClass('white-color').addClass('grey darken-3');
  $('.sidebar-content').removeClass('white-color').addClass('unique-color-dark');
  $('.breadcrumb').addClass('white-color');
  $('body').addClass('white-text').addClass('grey darken-3');
});

// collapse button in panel
$(document).on('click', '.card .tools .t-collapse', function () {
  var el = $(this).parents(".card").children(".card-body");
  if ($(this).hasClass("fa-chevron-down")) {
    $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
    el.slideUp(200);
  } else {
    $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
    el.slideDown(200);
  }
});

//close button in panel 
$(document).on('click', '.card .tools .t-close', function () {
  $(this).parents(".card").parent().remove();
});

//file-upload
$(document).ready(function () {
$('.file-upload').file_upload();
});

// refresh button in panel
$('.box-refresh').on('click', function (br) {
  br.preventDefault();
  $("<div class='refresh-block'><span class='refresh-loader'><i class='fa fa-spinner fa-spin'></i></span></div>").appendTo($(this).parents('.tools').parents('.card-head').parents('.card'));
  setTimeout(function () {
    $('.refresh-block').remove();
  }, 1000);
});

// Material Select Initialization
$(document).ready(function () {
  $('.mdb-select').materialSelect();
});

// Data Picker Initialization
$(document).ready(function () {
$('.datepicker').pickadate();
});

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
  $(document).ready(function () {
  $("#toggle-sidebar").click(function () {
    $(".page-wrapper").toggleClass("toggled");
  });
});

  //toggle sidebar overlay
  $("#overlay").click(function () {
    $(".page-wrapper").toggleClass("toggled");
  });

  //switch between themes 
  var themes = "dark-theme legacy-theme chiller-theme ice-theme cool-theme light-theme";
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
  /*   if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $(".sidebar-content").mCustomScrollbar({
        axis: "y",
        autoHideScrollbar: true,
        scrollInertia: 300
      });
      $(".sidebar-content").addClass("desktop");

    } */

});


var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function () {
  wrapperMenu.classList.toggle('open');
})


/* ==================================
      start loading 
===================================== */

$('.fixed-menu .show').on('click', function () {

  $(this).parent('.fixed-menu').toggleClass('is-visible');

  if ($(this).parent('.fixed-menu').hasClass('is-visible')) {

    $(this).parent('.fixed-menu').animate({

      right: 0

    }, 500);

    $('body').animate({

      paddingright: '280px'

    }, 50);
  } else {

    $(this).parent('.fixed-menu').animate({

      right: '-280px'

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


$('[data-toggle="fullscreen"]').fullscreen();


new Chart(document.getElementById("bar"), {
  "type": "bar",
  "data": {
    "labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
    "datasets": [{
      "label": "My First Dataset",
      "data": [22, 33, 55, 32, 86, 23, 14],
      "fill": false,
      "backgroundColor": "#00c851",
      "borderWidth": 0
    }]
  },
  "options": {
    "responsive": false,
    "legend": {
      "display": false,
    },
    "scales": {
      "xAxes": [{
        "gridLines": {
          "display": false,
          "drawBorder": false,
        },
        "ticks": {
          "display": false,
          "beginAtZero": true
        }
      }],
      "yAxes": [{
        "gridLines": {
          "display": false,
          "drawBorder": false,
        },
        "ticks": {
          "display": false,
        }
      }],
    }
  }
});


new Chart(document.getElementById("bar2"), {
  "type": "bar",
  "data": {
    "labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
    "datasets": [{
      "label": "My First Dataset",
      "data": [35, 21, 42, 59, 50, 62, 90],
      "fill": false,
      "backgroundColor": "#ff3547",
      "borderWidth": 0
    }]
  },
  "options": {
    "responsive": false,
    "legend": {
      "display": false,
    },
    "scales": {
      "xAxes": [{
        "gridLines": {
          "display": false,
          "drawBorder": false,
        },
        "ticks": {
          "display": false,
          "beginAtZero": true
        }
      }],
      "yAxes": [{
        "gridLines": {
          "display": false,
          "drawBorder": false,
        },
        "ticks": {
          "display": false,
        }
      }],
    }
  }
});

new Chart(document.getElementById("bar3"), {
  "type": "bar",
  "data": {
    "labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
    "datasets": [{
      "label": "My First Dataset",
      "data": [22, 33, 55, 32, 86, 23, 14],
      "fill": false,
      "backgroundColor": "#33b5e5",
      "borderWidth": 0
    }]
  },
  "options": {
    "responsive": false,
    "legend": {
      "display": false,
    },
    "scales": {
      "xAxes": [{
        "gridLines": {
          "display": false,
          "drawBorder": false,
        },
        "ticks": {
          "display": false,
          "beginAtZero": true
        }
      }],
      "yAxes": [{
        "gridLines": {
          "display": false,
          "drawBorder": false,
        },
        "ticks": {
          "display": false,
        }
      }],
    }
  }
});

new Chart(document.getElementById("bar4"), {
  "type": "bar",
  "data": {
    "labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
    "datasets": [{
      "label": "My First Dataset",
      "data": [20, 33, 45, 34, 71, 54, 44],
      "fill": false,
      "backgroundColor": "#fb3",
      "borderWidth": 0
    }]
  },
  "options": {
    "responsive": false,
    "legend": {
      "display": false,
    },
    "scales": {
      "xAxes": [{
        "gridLines": {
          "display": false,
          "drawBorder": false,
        },
        "ticks": {
          "display": false,
          "beginAtZero": true
        }
      }],
      "yAxes": [{
        "gridLines": {
          "display": false,
          "drawBorder": false,
        },
        "ticks": {
          "display": false,
        }
      }],
    }
  }
});

new Chart(document.getElementById("bar5"), {
  "type": "bar",
  "data": {
    "labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
    "datasets": [{
      "label": "My First Dataset",
      "data": [60, 21, 72, 65, 50, 40, 35],
      "fill": false,
      "backgroundColor": "#ff3547",
      "borderWidth": 0
    }]
  },
  "options": {
    "responsive": false,
    "legend": {
      "display": false,
    },
    "scales": {
      "xAxes": [{
        "gridLines": {
          "display": false,
          "drawBorder": false,
        },
        "ticks": {
          "display": false,
          "beginAtZero": true
        }
      }],
      "yAxes": [{
        "gridLines": {
          "display": false,
          "drawBorder": false,
        },
        "ticks": {
          "display": false,
        }
      }],
    }
  }
});

new Chart(document.getElementById("bar6"), {
  "type": "bar",
  "data": {
    "labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
    "datasets": [{
      "label": "My First Dataset",
      "data": [21, 59, 90, 35, 50, 42, 62],
      "fill": false,
      "backgroundColor": "#00c851",
      "borderWidth": 0
    }]
  },
  "options": {
    "responsive": false,
    "legend": {
      "display": false,
    },
    "scales": {
      "xAxes": [{
        "gridLines": {
          "display": false,
          "drawBorder": false,
        },
        "ticks": {
          "display": false,
          "beginAtZero": true
        }
      }],
      "yAxes": [{
        "gridLines": {
          "display": false,
          "drawBorder": false,
        },
        "ticks": {
          "display": false,
        }
      }],
    }
  }
});


jQuery(function ($) {
  //pie
  var ctxP = document.getElementById("pieChart2").getContext('2d');
  var myPieChart = new Chart(ctxP, {
    type: 'pie',
    data: {
      labels: ["Red", "Green", "Yellow"],
      datasets: [{
        data: [100, 100, 100],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
      }]
    },
    options: {
      responsive: true
    }
  });
});

jQuery(function ($) {
  //line
  var ctxL = document.getElementById("lineChart").getContext('2d');
  var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(105, 0, 132, .2)',
          ],
          borderColor: [
            'rgba(200, 99, 132, .7)',
          ],
          borderWidth: 2
        },
        {
          label: "My Second dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          backgroundColor: [
            'rgba(0, 137, 132, .2)',
          ],
          borderColor: [
            'rgba(0, 10, 130, .7)',
          ],
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true
    }
  });
});

// Material Design example
$(document).ready(function () {
  $('#dtBasicExample').DataTable();
  $('.dataTables_length').addClass('bs-select');
});

