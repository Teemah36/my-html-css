let accordionButton = document.getElementById('accordion-div')

accordionButton.addEventListener('click', function (){
  let campus = this.children[0];
  let panel = this.children[2];
  console.log(panel);
  
  // console.log(campus);

  if (panel.style.display === "none") {
    panel.style.display = "flex";
    campus.style.fontSize = "45px";
    campus.nextElementSibling.innerHTML = "&#8722;"
    
  } else {
    panel.style.display = "none";
    campus.style.fontSize = "20px";
    campus.nextElementSibling.innerHTML = "&#43;"
  }
})
