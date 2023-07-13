window.addEventListener("scroll", function() {
    var sectionList = document.querySelectorAll(".show-slow");
    var screenPosition = window.innerHeight / 1;
  
    sectionList.forEach(function(section) {
      var sectionPosition = section.getBoundingClientRect().top;
  
      if (sectionPosition < screenPosition) {
        section.style.opacity = "1";
      }
    });
  });