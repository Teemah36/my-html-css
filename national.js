
document.getElementById('accordion3').addEventListener('click', function() {
    let content = this.querySelector('.managing');
      let sign = this.querySelector('#sign');
      let national = this.querySelector('#national');
  
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        sign.innerHTML = "&#8722;"; // Minus sign
        academic.style.fontSize = "45px"; 
      } else {
        content.style.display = "none";
        sign.innerHTML = "&#43;"; // Plus sign
        national.style.fontSize = "20px"; 
      }
  });