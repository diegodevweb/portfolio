$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  let typed = new Typed(".typing", {
    strings: ["Desenvolvedor", "Back-End", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  let typed2 = new Typed(".typing-2", {
    strings: ["Desenvolvedor", "Back-End", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });


  $(document).ready(function() {
    $(".carousel").owlCarousel({
      
        margin: 20,
        loop: true,
        autoplay: true, // Ativar rotação automática
        autoplayTimeout: 2000, // Intervalo de tempo entre os slides (2 segundos)
        autoplayHoverPause: true, // Pausar a rotação automática quando o mouse está sobre o carrossel
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          600: {
            items: 2,
            nav: false,
          },
          1000: {
            items: 3,
            nav: false,
          },
        },
      });
    });
  });

  


function cleanForm() {
  setTimeout(() => {
    document.getElementById("my-form").reset();
    window.location.href = 'thanks.html';
  }, 2000);
}
