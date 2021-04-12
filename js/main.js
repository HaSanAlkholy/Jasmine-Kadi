$(window).on("load", function () {
  //preloader
  $(".pre-loader").fadeOut("500", function () {
    $("body").removeClass("overflow");
    $(this).remove();
  });

  if ($(".pre-loader").length == 0) {
    $("body").removeClass("overflow");
  }

  //nava toggle
  $("#nava-icon").click(function (e) {
    $("#nava").toggleClass("nava-active");
    $("html").toggleClass("overflow");
  });

  $("#nava").click(function (e) {
    if (
      e.target.id == "nava" ||
      e.target.id == "close-nava" ||
      e.target.parentNode.id == "close-nava"
    ) {
      $(this).removeClass("nava-active");
      $("html").removeClass("overflow");
    }
  });

  $(".slide").on("click", function (e) {
    if (
      (e.target.classList.contains("drop") &&
        e.target.parentNode.classList.contains("slide")) ||
      e.target.classList.contains("slide") ||
      e.target.classList.contains("txt")
    ) {
      e.stopPropagation();
      $(this).toggleClass("slide-active");
      $(this).children(".top-dropDown").slideToggle();
    }
  });

  function changeSlide() {
    if (window.innerWidth <= 1200) {
      $(".sm-slide").removeClass("top-setting");
      $(".sm-slide").addClass("slide");
      $(".sm-slide .top-dropDown").css("display", "none");

      // add swipers
      $(".swiper-container-here").addClass("s-swiper-container");
      $(".swiper-container-here .swiper-wrapper-here").addClass(
        "swiper-wrapper"
      );
      $(".swiper-container-here .swiper-slide-here").addClass("swiper-slide");
    } else {
      $(".sm-slide").addClass("top-setting");
      $(".sm-slide").removeClass("slide");
      $(".sm-slide .top-dropDown").css("display", "flex");

      // remove swipers
      $(".swiper-container-here").removeClass("s-swiper-container");
      $(".swiper-container-here .swiper-wrapper-here").removeClass(
        "swiper-wrapper"
      );
      $(".swiper-container-here .swiper-slide-here").removeClass(
        "swiper-slide"
      );
    }
  }

  changeSlide();

  window.addEventListener("resize", changeSlide);

  // add footer collabse
  function addCollapse() {
    if (window.innerWidth <= 992) {
      $(".footer-list").attr("data-toggle", "collapse");
      $(".footer-list ul").addClass("collapse");
    } else {
      $(".footer-list").attr("data-toggle", "none");
      $(".footer-list ul").removeClass("collapse");
      $(".footer-list ul").css("height", "auto");
    }
  }

  addCollapse();
  window.addEventListener("resize", addCollapse);

  $(".footer-list").on("click", function (e) {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      $(this).toggleClass("footer-list-active");
    }
  });

  new Swiper("header .swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    autoplay: {
      delay: 5000,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".s-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      // when window width is >= 480px
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 480px
      150: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".categories-swiper-container", {
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 6,
    spaceBetween: 25,
    autoplay: {
      delay: 4000,
    },

    breakpoints: {
      1400: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var mySwiper3 = new Swiper(".notes-swiper-container", {
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 4,
    spaceBetween: 25,
    autoplay: false,
    allowTouchMove: false,

    breakpoints: {
      1200: {
        slidesPerView: 4,
        allowTouchMove: false,
        allowTouchMove: false,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 3,
        allowTouchMove: true,
        autoplay: {
          delay: 4000,
        },
      },
      576: {
        slidesPerView: 2,
        allowTouchMove: true,

        autoplay: {
          delay: 4000,
        },
      },
      0: {
        slidesPerView: 1,
        allowTouchMove: true,
        autoplay: 4000,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  new Swiper(".news-swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".comments-swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  if (window.innerWidth <= 1200 && $(".notes-swiper-container").length) {
    setInterval(() => {
      mySwiper3.slideNext();
    }, 4000);
  }

  window.addEventListener("scroll", scrolled);

  function scrolled() {
    let up = document.getElementById("up");
    if (this.scrollY > 200) {
      up.classList.add("active-up");
    } else {
      up.classList.remove("active-up");
    }
  }
});
