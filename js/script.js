let handlerBtn = document.getElementById('handlerBtn');
let mainMenu = document.getElementById('mainMenu');

handlerBtn.addEventListener("click", function(){
    mainMenu.classList.toggle("show");
    // handlerBtn.innerHTML = " \u00d7 ";
    // handlerBtn.style.fontSize = "40px";
    // handlerBtn.style.color = "white";

})


$('.counter').counterUp({
    delay: 10,
    time: 1000
});

var mixer = mixitup('.mixitUp');


$('.blog_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    prevArrow: '<i class="fa-solid fa-chevron-left arrow prevArrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right arrow nextArrow"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


$('.review_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<i class="fa-solid fa-chevron-left arrow prevArrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right arrow nextArrow"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

$('.link_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });