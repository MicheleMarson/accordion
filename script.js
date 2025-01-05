const question = document.querySelectorAll(".questions .box");

$(question).click(function () {
  let clickItem = this;
  $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");

  question.forEach((item) => {
    if (clickItem.id !== item.id) {
      $(item).removeClass("active");
    }
  });
});
