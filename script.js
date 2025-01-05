const questions = $(".questions .box");

$(questions).click(function () {
  let clickItem = this;
  $(this).toggleClass("active");

  questions.each(function () {
    if (this !== clickItem) {
      $(this).removeClass("active");
    }
  });
});
