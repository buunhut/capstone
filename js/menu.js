//bắt scroll chuột fix menu top
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 40) {
      document.getElementById("mainMenu").classList.add("fixTop");
      document.getElementById("backToTop").classList.remove("none");
      document.getElementById("popUp").classList.add("none");
    } else {
      document.getElementById("mainMenu").classList.remove("fixTop");
      document.getElementById("backToTop").classList.add("none");
    }
  };
  //back to top
  function toTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop.scrollTop = 0;
  }
  // close popup
  function closePopup() {
    document.getElementById("popUp").classList.add("none");
  }