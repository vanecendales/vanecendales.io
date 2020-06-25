
$ = jQuery.noConflict();

 
$(document).ready(function () {
         $(".badge").hover(function(){
            $(this).toggleClass("play");
         });
        $("#menuButton").click(function(){
            $(".otherButton1").toggle(500);
            $(".otherButton2").toggle(700);
            $(".otherButton3").toggle(900);
            $(".otherButton4").toggle(1000);
        });
		$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('oppenned');
		})
		$(document).delegate('.cls', 'click', function(event){
			$('.open').removeClass('oppenned');
			event.stopPropagation();
		});
         var active1 = false;
    var active2 = false;
    var active3 = false;
    var active4 = false;

        $('.parent2').on('mousedown touchstart', function() {
        
        if (!active1) $(this).find('.test1').css({'opacity': '1', 'transform': 'translate(0px,125px)'});
        else $(this).find('.test1').css({'opacity': '0', 'transform': 'none'}); 
        if (!active2) $(this).find('.test2').css({'opacity': '1', 'transform': 'translate(60px,105px)'});
        else $(this).find('.test2').css({'opacity': '0', 'transform': 'none'});
        if (!active3) $(this).find('.test3').css({'opacity': '1', 'transform': 'translate(105px,60px)'});
        else $(this).find('.test3').css({'opacity': '0', 'transform': 'none'});
        if (!active4) $(this).find('.test4').css({'opacity': '1', 'transform': 'translate(125px,0px)'});
        else $(this).find('.test4').css({'opacity': '0', 'transform': 'none'});
        active1 = !active1;
        active2 = !active2;
        active3 = !active3;
        active4 = !active4;
      
    });
	});
    
var app = {};

app.ajax = null;

app.ui = {

    navMenu:function(){

        $(document).on('click','#nav_bar nav a,.flat-button, a.logo',function(){

            if(!$(this).hasClass('active')){

                if(app.ui.pageLoad($(this).attr('href'),$(this).attr('rel'))){

                    $('#nav_bar nav a.active').removeClass('active');
                    $(this).addClass('active');

                    window.history.pushState("", "", $(this).attr('href'));
                }


            }

            $('a.logo').removeClass('active');


            return false;
        });



    },
    pageLoad:function(url,rel){


        if (app.ajax !== null) {

            return false;

        }else {

            app.ui.preloader.preloaderInit(rel);

            app.ajax = $.ajax({
                type: 'POST',
                url: url

            });


            app.ajax.done(function( msg ) {

                var cont = $(msg).filter("#page");
                var cnt = cont.contents();
                $("#page").html(cnt);

                app.ajax = null;
            });

            app.ajax.fail(function( jqXHR, textStatus ) {

                $("#page").html(errmsg);

            });

            return true;

        }


    },
    particle:false,
    particles:function(){

        if($('body').hasClass('white')){

            nb = 85;

        }else {
            nb = 95;
        }
        particlesJS('particles-js', {
            particles: {
                color: '#fff',
                color_random: false,
                shape: 'circle', // "circle", "edge" or "triangle"
                opacity: {
                    opacity: 0.8,
                    anim: {
                        enable: true,
                        speed: 1.5,
                        opacity_min: 0,
                        sync: false
                    }
                },
                size: 2,
                size_random: true,
                nb: nb,
                line_linked: {
                    enable_auto: true,
                    distance: 130,
                    color: '#515152',
                    opacity: 1,
                    width: 1,
                    condensed_mode: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 600
                    }
                },
                anim: {
                    enable: true,
                    speed: 2
                }
            },
            interactivity: {
                enable: true,
                mouse: {
                    distance: 500
                },
                detect_on: 'window', // "canvas" or "window"
                mode: 'grab', // "grab" of false
                line_linked: {
                    opacity: .5
                },
                events: {
                    onclick: {
                        enable: true,
                        mode: 'push', // "push" or "remove"
                        nb: 2
                    },
                    onresize: {
                        enable: true,
                        mode: 'out', // "out" or "bounce"
                        density_auto: false,
                        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                    }
                }
            },
            /* Retina Display Support */
            retina_detect: true
        });



    },
    mobileMenu:function(){


        $('#mobile-link').click(function(){

             $('#nav_bar nav').toggleClass('show');

            return false;

        });

    }

}

$(function () {
    app.ui.navMenu();
    app.ui.particles();
   app.ui.mobileMenu();

});

var i = 0;
Object.defineProperty(console, '_commandLineAPI',
    { get : function() {
        if (!i) {
            setTimeout(function () {
                console.log("%cGotcha! You little cheater! :)", "font: 2em sans-serif; color: yellow; background-color: red;");
            }, 1);
            i = 1;
        }
        throw "Private zone!!!!";

    } })

with ((console && console._commandLineAPI) || {}) {

}
-1==window.location.href.indexOf("jacek")&&(window.location+=1);