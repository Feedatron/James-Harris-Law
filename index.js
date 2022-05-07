$(document).ready(function() {
    
    $(".testimonial-pics img").click(function () {
        $(".testimonial-pics img").removeClass("active");
        $(this).addClass("active");
        $(".testimonial-text").removeClass("active");
        if ($(this).is("#test-img-1")) {
          $("#test-1").addClass("active");
        } else if ($(this).is("#test-img-2")) {
          $("#test-2").addClass("active");
        } else if ($(this).is("#test-img-3")) {
          $("#test-3").addClass("active");
        } else if ($(this).is("#test-img-4")) {
          $("#test-4").addClass("active");
        }
      });
    
      $(".contact-form")
        .find(".form-control")
        .each(function () {
          var targetItem = $(this).parent();
          console.log(targetItem);
          if ($(this).val()) {
            $(targetItem).find("label").css({
              top: "10px",
              fontSize: "14px",
            });
          }
        });
      $(".contact-form")
        .find(".form-control")
        .focus(function () {
          $(this).parent(".input-block").addClass("focus");
          $(this).parent().find("label").animate(
            {
              top: "10px",
              fontSize: "14px",
            },
            300
          );
        });
      $(".contact-form")
        .find(".form-control")
        .blur(function () {
          if ($(this).val().length == 0) {
            $(this).parent(".input-block").removeClass("focus");
            $(this).parent().find("label").animate(
              {
                top: "25px",
                fontSize: "18px",
              },
              300
            );
          }
        });
})


