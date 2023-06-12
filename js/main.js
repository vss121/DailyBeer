$(document).ready(function() {
  mainBanner();
});

function mainBanner() {
  var navBox = $(".main_banner .mbanner_nav");
  var currentNum = 0;
  navBox.find("li").on("click", function() {
    var $this = $(this);
    currentNum = $this.data("bannerNum");
    if($this.hasClass("on") === false) {
      navBox.find("li").removeClass("on");
      $this.addClass("on");
      $(".mbanner_box").fadeOut().eq(currentNum - 1).fadeIn();
    }
  });

  // 버튼
  navBox.find(".btn_mbanner_nav").on("click", function() {
    var currentIdx = navBox.find("li.on").index();
    var prevIdx = currentIdx - 1;
    var nextIdx = currentIdx + 1;
    if($(this).hasClass("prev")) {
      if(currentIdx === 0) {
        prevIdx = 4;
        for(var i = 0; i < 5; i++) {
          navBox.find("li").last().prependTo(".main_banner .mbanner_nav ul");
        }
      }
      navBox.find("li").eq(prevIdx).trigger("click");
    }
    if($(this).hasClass("next")) {
      if(currentIdx === 4) {
        nextIdx = 0;
        for(var j = 0; j < 5; j++) {
          navBox.find("li").eq(0).appendTo(".main_banner .mbanner_nav ul");
        }
      }
      navBox.find("li").eq(nextIdx).trigger("click");
    }
  });

  navBox.find("li").eq(0).trigger("click");
}