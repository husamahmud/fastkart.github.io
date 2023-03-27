let header = document.querySelector(".header");
$(window).scroll(function() {
  if($(window).scrollTop()) {
    $(header).addClass("white");
  } else {
    $(header).removeClass("white");
  }
})

let burger = document.querySelector("#burger");
let nav = document.querySelector("#nav");
function check() {
  if(burger.checked == true) {
    $(nav).addClass("mobile");
    
  } else {
    $(nav).removeClass("mobile");
  }
}

var backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

window.addEventListener("scroll", function() {
  var scrollTop = window.scrollY;
  var docHeight = document.body.offsetHeight;
  var winHeight = window.innerHeight;
  var scrollPercent = scrollTop / (docHeight - winHeight);
  var progressWidth = scrollPercent * 100;
  document.getElementById("progress").style.width = progressWidth + "%";
});
