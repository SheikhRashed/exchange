var $ = jQuery;
var newVar = '';
$(document).ready(function () {
   if ($(".sb-container").length) {
      $(".my-container").scrollBox();
   }

   // Escape Fancybox
   $(document).keyup(function (e) {
      if (e.which == 27) {
         $.fancybox.close();
      }
      if ($('.culturesecond').hasClass('active') && (e.which == 27)) {
         $('.close-wrapper').trigger("click");
      }

      if ($('.oppertunitythird').hasClass('active') && (e.which == 27)) {
         $(".close-building").trigger("click");
      }

   });






   var countsection = $('.contentshow-section').length - 1;
   $('.leasing-section').attr('data-sectionIndex', countsection);

   $("#Retail_Button").click(function () {
      $('.svg-wrapper svg').addClass('button1')
   });
   $("#Albany_Green_Button").click(function () {
      $('.svg-wrapper svg').addClass('button2')
   });
   $("#Building_C_Button").click(function () {
      $('.svg-wrapper svg').addClass('button3')
   });
   $("#Building_D_Button").click(function () {
      $('.svg-wrapper svg').addClass('button4')
   });
   $("#Building_B_Button").click(function () {
      $('.svg-wrapper svg').addClass('button5')
   });
   $("#Building_A_Button").click(function () {
      $('.svg-wrapper svg').addClass('button6')
   });

   var w = $(window).width();
   if (w > 1024) {
      $(".cross-wrapper").click(function () {
         $(".map-filtering-wapper").toggleClass("toggle");
      });
   }
   else {
      $(".view-all-amenities,.view-all-amenities *").click(function (event) {
         event.stopPropagation();
         $("#cross").toggleClass("minus");
         $(".map-filtering-wapper").slideToggle();
      });
   }

   $(".close-wrapper").click(function () {
      $(".map-filtering-wapper").removeClass("toggle");
      $('.amenities-modal').removeClass('active-modal');
      $(".cat-filter li").removeClass("active-tab");
      $(".no-margin li").removeClass("active-tab");
      $('body').removeClass('map-modal');
   });

   $(".btn-wrapper li:first span").on("click", function () {

      $(".map-filtering-wapper").addClass('toggle');
      $(".no-margin li:first").addClass("active-tab");
      $('.amenities-modal').addClass('active-modal');
      $('body').addClass('map-modal');
      var ind = parseInt($(this).index());
      $('.amenities-modal > div').removeClass("active-modaltab");
      $('.amenities-modal > div').eq(ind).addClass("active-modaltab");

      $('.active-modaltab .postslider-nav').slick('refresh');
      setTimeout(function () {
         $('.active-modaltab .postslider-for').slick('refresh');
      }, 1000);

      if (w <= 1024) {
         $("#cross").toggleClass("minus");
         $(".map-filtering-wapper").slideToggle();
      }
   });

   $(".no-margin li").click(function () {
      $(".cat-filter li").removeClass("active-tab");
      $(".no-margin li").removeClass("active-tab");
      $(this).addClass("active-tab");
      $('.amenities-modal').addClass('active-modal');
      $('body').addClass('map-modal');
      var ind = parseInt($(this).index());
      $('.amenities-modal > div').removeClass("active-modaltab");
      $('.amenities-modal > div').eq(ind).addClass("active-modaltab");

      $('.active-modaltab .postslider-nav').slick('refresh');
      setTimeout(function () {
         $('.active-modaltab .postslider-for').slick('refresh');
      }, 1000);

      if (w <= 1024) {
         $("#cross").toggleClass("minus");
         $(".map-filtering-wapper").slideToggle();
      }

   });

   $(".cat-filter li").click(function () {
      $(".no-margin li").removeClass("active-tab");
      $(".cat-filter li").removeClass("active-tab");
      $(this).addClass("active-tab");
      $('.amenities-modal').removeClass('active-modal');

      if (w <= 1024) {
         $("#cross").toggleClass("minus");
         $(".map-filtering-wapper").slideToggle();
      }

   });

   //Activate Contentshow

   $('.contentshow').contentshow({
      onSectionChange: hello,
   });

   function hello(e) {

      var sindex = e.sectionIndex;
      $(".fullpage").removeClass("active");
      $(".fullpage").each(function (i) {
         if (sindex == i) {
            $(this).addClass("active");


            $('.color-logo').removeClass('menulogo');

            if (!$('.culturesecond').hasClass("active")) {
               $('body').removeClass('map-modal');
            }

            if ($('.culturesecond').hasClass("active") && $('.amenities-modal').hasClass("active-modal")) {
               $('body').addClass('map-modal');
            }


            var activetabname = $(".active").attr("data-tabname");
            var activetabappend = $(".active").attr("datatabappend");

            $('.identifier .section-name').text(activetabname);
            if (activetabappend) {
               $('.section-identifier .section-name').text(activetabappend + ' ' + activetabname);
            }

            if ($('.section-identifier .section-name').text() != newVar)
            {
               newVar = $('.section-identifier .section-name').text();
               setTimeout(function () {
                  $('.section-identifier').css('height', $('.section-identifier .section-name').outerHeight() + 19);
               }, 50)
            }

            var activetabindex = $(".active").attr("data-tabindex");
            if (activetabindex < 10) {
               $('.identifier .row-index').text(0 + activetabindex);
            } else {
               $('.identifier .row-index').text(activetabindex);
            }



            var w = jQuery(window).width();
            if (w > 1024) {
               //Get Current Screen Color
               var col = 'rgba(0, 0, 0, 0)';
               var col2 = 'rgb(255, 255, 255)';
               var col3 = 'rgb(247, 247, 247)';
               var x = $('.section.active').css("background-color");
               if ((x == col) || (x == col2) || (x == col3)) {
                  $('body').addClass('colored-logo');
               } else {
                  $('body').removeClass('colored-logo');
               }
               ;

               // Change out logo to teal background version in defined sections (frey)
               $('.welcome-firstsubsection').addClass('teal-logo-cell');
               $('.oppertunitythird').addClass('teal-logo-cell');
               $('.culturesecond').addClass('teal-logo-cell');
               $('.conveniencethird').addClass('teal-logo-cell');

               if ($('.section.active').hasClass('teal-logo-cell')) {
                  $('body').addClass('teal-logo-active');
               } else {
                  $('body').removeClass('teal-logo-active');
               }
               ;

               // Disable Scroll Button

               if ($('.section.active').hasClass('contact-section')) {
                  $('#scroll-next').addClass('opacity-off');
               } else {
                  $('#scroll-next').removeClass('opacity-off');
               }
               ;

            }
         }
      });

      if (!$('.slider-for').hasClass("slick-initialized")) {
         $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
         });
         $('.slider-nav').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            vertical: true,
            arrows: false,
            dots: false,
            focusOnSelect: true,
            verticalSwiping: true,
            responsive: [
               {
                  breakpoint: 1024,
                  settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                  }
               },
            ]
         });
      }

      if (!$('.newsslider-for').hasClass("slick-initialized")) {
         $('.newsslider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            responsive: [
               {
                  breakpoint: 1024,
                  settings: {
                     arrows: true
                  }
               },
            ]
         });
         $('.newsslider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            dots: false,
            autoplay: false,
            autoplaySpeed: 3000,
            focusOnSelect: true,
	         responsive: [
		         {
			         breakpoint: 1024,
			         settings: {
				         slidesToShow: 1,
				         autoplay: false
			         }
		         },
		         {
			         breakpoint: 1200,
			         settings: {
				         slidesToShow: 2,
				         autoplay: false
			         }
		         },
	         ]
         });
      }

      if (!$('.mappostslider-for').hasClass("slick-initialized")) {
         $('.mappostslider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.mappostslider-nav',
            responsive: [
               {
                  breakpoint: 1024,
                  settings: {
                     arrows: true
                  }
               },
            ]
         });
         $('.mappostslider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            asNavFor: '.mappostslider-for',
            focusOnSelect: true
         });
      }

      /*
       if (!$('.contactslider-nav').hasClass("slick-initialized")) {
       $('.contactslider-nav').slick({
       infinite: true,
       slidesToShow: 6,
       slidesToScroll: 1,
       vertical: true,
       dots: false,
       focusOnSelect: true,
       center: false,
       autoplay: true,
       autoplaySpeed: 3000,
       arrows: false,
       adaptiveHeight: true,
       responsive: [
       {
       breakpoint: 1601,
       settings: {
       slidesToShow: 4,
       slidesToScroll: 1
       }
       },
       {
       breakpoint: 1024,
       settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
       }
       },
       ]
       });
       
       }
       */

      /**********
       * Counter
       ***********/
      $('.contentshow-animate .counter').each(function () {
         if (Math.round($(this).text()) !== parseInt($(this).text())) {
            if (!$(this).hasClass('complete')) {
               $(this).prop('Counter', 0).animate({
                  Counter: $(this).text()
               }, {
                  duration: 4000,
                  easing: 'swing',
                  step: function (now) {
                     $(this).text(this.Counter.toFixed(1).toLocaleString('en'));
                     $(this).addClass('complete');
                  }

               });
            }
         }
         else {
            if (!$(this).hasClass('complete')) {
               $(this).prop('Counter', 0).animate({
                  Counter: $(this).text()
               }, {
                  duration: 4000,
                  easing: 'swing',
                  step: function (now) {
                     $(this).text(Math.ceil(now).toLocaleString('en'));
                     $(this).addClass('complete');
                  }
               });
            }
         }
      });

   }

   //Menu toggle
   $('.menu-icon').click(function () {
      $('.menu-icon').toggleClass('close');
      $(".navigation-wrapper").toggleClass('togglemenu');
      $('.color-logo').toggleClass('menulogo');

   });

   $('.navigation-wrapper li span').click(function () {
      $(".navigation-wrapper").toggleClass('togglemenu');
      $('.menu-icon').toggleClass('close');
   });

   //Wrap first two word of title in span
   $('h2').html(function (i, html) {
      return html.replace(/(\w+\s\w+)/, '<span >$1</span><br/>')
   });

   var mobwidth = jQuery(window).width();
   // console.log(mobwidth)
   if (mobwidth >= 768) {
      videoslider();
   }


   //svg
   $(".expand").mousemove(function (e) {
      //$("#Background-Gray").css("opacity","1")
      $("body").find(".layers").eq(parseInt(($(this).index() - 1) / 2) - 1).css("opacity", 1).siblings(".layers").css("opacity", "0");
      $("body").find("#Background-Gray").addClass("show");
   });
   $(".expand").mouseout(function (e) {
      //$("#Background-Gray").css("opacity","0")
      $(".layers").css("opacity", 1);
      $("#Background-Gray").removeClass("show");
   });
   $(".expand").click(function (e) {
      ourCustom = false;
      $(".expand").hide();

      $(".building-info-wrapper").addClass("active");
      $(".building-info-wrapper >ul >li").eq(parseInt(($(this).index() - 1) / 2) - 1).css("display", "block").siblings("li").css("display", "none");
      $("body").find(".layers").eq(parseInt(($(this).index() - 1) / 2) - 1).addClass("active-building").siblings(".layers").addClass("disable-building");

   })
   $("body").on("click", ".contentshow-nav ul li span", function () {
      $(".close-building").trigger("click");
   })
   $(".close-building").click(function (e) {
      ourCustom = true;
      $("body").find(".layers").removeClass("disable-building active-building");
      e.stopPropagation();
      $(".expand").show();
      $(".building-info-wrapper").removeClass("active");
      $(".layers").css("opacity", 1);
      $('.svg-wrapper svg').removeClass('button1 button2 button3 button4 button5 button6');

   })
   //svg


});

$(window).scroll(function (event) {
   //change identifier text
   changeidentifier();
});

//Block Identifier on scroll
$(window).bind('mousewheel', function (e) {
   //change identifier text
   changeidentifier();
});

$(window).load(function () {
//$(".contact-section .contentshow-content.contentshow-slide-up.p-30").eq(1).addClass("hide-slide2");
//$(".contact-section .contentshow-content.contentshow-slide-up.p-30").eq(2).addClass("hide-slide2");
   //Block Identifier on homescreen
   setTimeout(function () {
      //change identifier text
      changeidentifier();
   }, 100);






});

//change identifier text
function changeidentifier() {

   $(".content-block > div").each(function () {
      var activetabname = $(".active").attr("data-tabname");
      var activetabappend = $(".active").attr("datatabappend");
      $('.identifier .section-name').text(activetabname);
      if (activetabappend) {
         $('.section-identifier .section-name').text(activetabappend + ' ' + activetabname);
      }
      var activetabindex = $(".active").attr("data-tabindex");
      if (activetabindex < 10) {
         $('.identifier .row-index').text(0 + activetabindex);
      } else {
         $('.identifier .row-index').text(activetabindex);
      }
   });

}


function videoslider() {
   /* Variables */
   var bool = false;
   var videoPlayer = document.getElementById('video-player'),
           video = videoPlayer.getElementsByClassName('fullscreen-bg__video')[0],
           playlist = videoPlayer.getElementsByClassName('fullscreen-bg__playlist')[0],
           source = video.getElementsByTagName('source'),
           linkList = [],
           videoDirectory = 'video/',
           currentVideo = 0,
           allLinks = playlist.children,
           linkNumber = allLinks.length,
           i, filename;




	/**
	 * Load and play video
	 * @param  int index Video index
	 */
	function playVideo(index) {

		allLinks[index].classList.add('current-video');
		currentVideo = index;

		source[2].src = linkList[index] + '.ogv';
		source[1].src = linkList[index] + '.webm';
		source[0].src = linkList[index] + '.mp4';

		video.load();

		video.play();
		// if (bool) {
		//    $(".loop-video").removeClass("disable")
		//    video.pause();
		// }
	}

	// Save all video sources from playlist
	for (i = 0; i < linkNumber; i++) {
		filename = allLinks[i].href;
		linkList[i] = filename.substr(0, filename.lastIndexOf('.'));
		;
	}

	/**
	 * Play next video
	 */
	video.addEventListener('ended', function () {
		allLinks[currentVideo].classList.remove('current-video');

		nextVideo = currentVideo + 1;
		if (nextVideo >= linkNumber) {

			//   nextVideo = 0;
			// bool = true;
			$(".loop-video").removeClass("disable");
			//   video.pause();
		}else{
			playVideo(nextVideo);
		}


	});

	$(".loop-video").click(function () {
		$(this).addClass("disable");
		bool = false;
		playVideo(0);
	})
}







/*
 *  new_map
 *
 *  This function will render a Google Map onto the selected jQuery element
 *
 *  @type	function
 *  @date	8/11/2013
 *  @since	4.3.0
 *
 *  @param	$el (jQuery element)
 *  @return	n/a
 */
var gmarkers1 = [];

function new_map($el) {

   var $el = document.getElementsByClassName('acf-map');
   var $markers = jQuery('.acf-map .marker');


   // vars
   var args = {
      zoom: 14,
      scrollwheel: false,
      center: new google.maps.LatLng(0, 0),
      //mapTypeId: google.maps.MapTypeId.ROADMAP
      mapTypeId: google.maps.MapTypeId.terrain
   };

   // create map
   var map = new google.maps.Map($el[0], args);


   // add a markers reference
   map.markers = [];
   var mapdistance = [.25, .5, .75, 1];

   // for (var i = 0, Nloop = 0; i < mapdistance['length']; i++) {
	 //
   //    Nloop = mapdistance[i];
   //    DrawCircle(Nloop, map);
   // }

   // add markers
   // console.log($markers);
   $markers.each(function () {
      add_marker($(this), map);
   });


   // center map
   center_map(map);
   var marker = new google.maps.Marker({
      position: new google.maps.LatLng(site_js_object.xse_add.lat, site_js_object.xse_add.lng),
      icon: {url: site_js_object.xse_img, anchor: new google.maps.Point(26, 26), scaledSize: new google.maps.Size(52, 52)},
      draggable: false,
      map: map
   });

	var ctaLayer = new google.maps.KmlLayer({
		url: 'http://www.exchangesouthend.com/wp-content/themes/xsetheme/assets/kml/radial-rings-2.kml',
		map: map
	});


   // return
   return map;

}

/*
 *  add_marker
 *
 *  This function will add a marker to the selected Google Map
 *
 *  @type	function
 *  @date	8/11/2013
 *  @since	4.3.0
 *
 *  @param	$marker (jQuery element)
 *  @param	map (Google Map object)
 *  @return	n/a
 */
var lastWindow = null;

function add_marker($marker, map) {

   // var
   console.log($marker.attr('data-lat'), $marker.attr('data-lng'));
   var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));
   var icon = $marker.attr('data-icon');
   var category = $marker.attr('data-cat');
   //category = JSON.parse(category);
   // create marker
   var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      icon: {url: icon, origin: new google.maps.Point(0, 0), anchor: new google.maps.Point(20, 20), scaledSize: new google.maps.Size(15, 15)},
      category: category,
   });

   // add to array
   map.markers.push(marker);
   gmarkers1.push(marker);

   // if marker contains HTML, add it to an infoWindow
   if ($marker.html()) {
      // create info window
      var infowindow = new google.maps.InfoWindow({
         content: $marker.html()
      });

      // show info window when marker is clicked
      google.maps.event.addListener(marker, 'click', function () {
         if (lastWindow)
            lastWindow.close();
         infowindow.open(map, this);
         lastWindow = infowindow;

      });
      google.maps.event.addListener(marker, "mouseover", function () {

         this.setIcon(new google.maps.MarkerImage(
                 icon,
                 null,
                 new google.maps.Point(2.5, 2.5),
                 new google.maps.Point(20, 20),
                 new google.maps.Size(20, 20)
                 ));
      });
      google.maps.event.addListener(marker, "mouseout", function () {
         this.setIcon(new google.maps.MarkerImage(
                 icon,
                 null,
                 new google.maps.Point(0, 0),
                 new google.maps.Point(20, 20),
                 new google.maps.Size(15, 15)
                 ));
      });

      google.maps.event.addListener(marker, "visible_changed", function () {
         if (lastWindow)
            lastWindow.close();
      });
   }

}



/*
 *  center_map
 *
 *  This function will center the map, showing all markers attached to this map
 *
 *  @type	function
 *  @date	8/11/2013
 *  @since	4.3.0
 *
 *  @param	map (Google Map object)
 *  @return	n/a
 */

function center_map(map) {

   // vars
   var bounds = new google.maps.LatLngBounds();

   // loop through all markers and create bounds
   $.each(map.markers, function (i, marker) {

      var latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());

      bounds.extend(latlng);

   });

   // only 1 marker?
   if (map.markers.length == 1) {
      // set center of map
      map.setCenter(bounds.getCenter());
      map.setZoom(14);
   } else {
      // fit to bounds
      map.fitBounds(bounds);
      map.setZoom(14);
   }

}

/**
 * Function to filter markers by category
 **/

function filterMarkers(category) {
   for (i = 0; i < gmarkers1.length; i++) {
      marker = gmarkers1[i];

      // If is same category or category not picked
      if (category == 'all' || (marker.category == category || category.length == 0)) {
         marker.setVisible(true);
      }
      // Categories don't match
      else {
         marker.setVisible(false);
      }
   }
}

function DrawCircle(rad, map) {
   rad *= 1600; // convert to meters if in miles
   /*if (draw_circle != null) {
    draw_circle.setMap(null);
    }*/

   draw_circle = new google.maps.Circle({
      center: new google.maps.LatLng(site_js_object.xse_add.lat, site_js_object.xse_add.lng),
      radius: rad,
      strokeColor: "#000000",
      strokeOpacity: 0.15,
      title:"SOMETHING",
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0,
      map: map
   });
   /*console.log(site_js_object.xse_add);
    console.log(rad/1600);
    console.log(draw_circle.getBounds());
    console.log(site_js_object.xse_add);
    var latlng = new google.maps.LatLng(site_js_object.xse_add.lat, site_js_object.xse_add.lng);
    // var icon = $(this).attr('data-icon');
    // var category = $(this).attr('data-cat');
    var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    //icon: {url: 'http://xse.freydesigngroup.com/wp-content/uploads/2019/02/XSE-Gallery-4-147x83.jpg', origin: new google.maps.Point(rad / 1600, rad / 1600)},
    icon: {url: 'http://xse.freydesigngroup.com/wp-content/uploads/2019/02/redo.svg', anchor: new google.maps.Point(26, 26)},
    category: 'art-galleries-studios'
    });
    marker.setMap(map);*/
   /*var latlng = new google.maps.LatLng(site_js_object.xse_add.lat, site_js_object.xse_add.lng);
   var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    //icon: {url: 'http://xse.freydesigngroup.com/wp-content/uploads/2019/02/XSE-Gallery-4-147x83.jpg', origin: new google.maps.Point(rad / 1600, rad / 1600)},
    icon: {url: 'http://xse.freydesigngroup.com/wp-content/uploads/2019/02/c.svg', origin: new google.maps.Point(rad / 1600, rad / 1600)},
    category: 'art-galleries-studios'
    });
    marker.setMap(map);*/
}

jQuery('.map-filtering-wapper .cat-filter li').click(function () {
   var cat = jQuery(this).attr('data-cat');
   filterMarkers(cat);
});


//Postslider Counter 
var slideCount = null;

$('.postslider-nav').on('init', function (event, slick) {
   slideCount = slick.slideCount;
   setSlideCount();
   setCurrentSlideNumber(slick.currentSlide);
});


$('.postslider-nav').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
   setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
   var $el = $('.slide-count-wrap').find('.total');
   $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
   var $el = $('.slide-count-wrap').find('.current');
   $el.text(currentSlide + 1);
}

jQuery(document).ready(loadfctn);
function loadfctn() {
   jQuery('.section-identifier').addClass('opacity-on');
   jQuery('.logo.teal-logo').addClass('opacity-on');
   jQuery('.logo.transparent-logo').addClass('opacity-on');
   jQuery('#bannerlogosvg').addClass('opacity-on');
   jQuery('.play-icon').addClass('opacity-on');
   jQuery('.slide-down').addClass('opacity-on');
   jQuery('#scroll-next').addClass('opacity-on');
   jQuery('#scroll-prev').addClass('opacity-on');
}
;
