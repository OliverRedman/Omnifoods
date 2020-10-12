$(document).ready(function() {


      // FOR THE NAV STICKY
    $('.js--section-features').waypoint(function(direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },{ offset: '60px'

  });
  // FOR THE SCROLL ON BUTTONS


  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  })

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  })

// buttons to ids
  $(document).ready(function(){
    $("a").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

  // animations on scroll
  $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
      offset: '50%'
  })
  $('.js--phone').waypoint(function(direction) {
      $('.js--phone').addClass('animate__animated animate__fadeInUp');
    }, {
      offset: '70%'
  })
  $('.js--cities').waypoint(function(direction) {
      $('.js--cities').addClass('animate__animated animate__fadeIn');
    }, {
      offset: '60%'
  })
  $('.js--mainplan').waypoint(function(direction) {
      $('.js--mainplan').addClass('animate__animated animate__pulse');
    }, {
      offset: '50%'
  })
});
// mobile navigation
$('.js--nav-icon').click(function() {
  const nav = $('.js--main-nav');
  const icon = $('.js--nav-icon ion-icon');
  nav.slideToggle(200);
});
