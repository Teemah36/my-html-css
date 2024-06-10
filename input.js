document.addEventListener("DOMContentLoaded", function() {
    var dropdownBtns = document.querySelectorAll(".dropdown-btn");
    
    dropdownBtns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        this.classList.toggle("active");
      });
    });
  });