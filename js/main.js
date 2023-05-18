var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("bg").style.opacity = "0";
    } else {
      document.getElementById("bg").style.opacity = "1";
    }
    prevScrollpos = currentScrollPos;
  }
  