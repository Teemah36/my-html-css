
document.getElementById('accordion2').addEventListener('click', function() {
  let content = this.querySelector('.class');
    let sign = this.querySelector('#sign');
    let academic = this.querySelector('#Academic');

    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      sign.innerHTML = "&#8722;"; // Minus sign
      academic.style.fontSize = "45px"; 
    } else {
      content.style.display = "none";
      sign.innerHTML = "&#43;"; // Plus sign
      academic.style.fontSize = "20px"; 
    }
});


