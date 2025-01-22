
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

const image = document.querySelector('.rotating-image');

// Alternar a rotação ao clicar na imagem
image.addEventListener('click', () => {
  image.style.animationPlayState = 
    image.style.animationPlayState === 'paused' ? 'running' : 'paused';
});

const slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  autoplayTimeout: 3000,
  controls: false, // Hide default controls
  nav: true, // Hide default navigation
  autoplayButtonOutput: false,
  speed: 500,
  // gutter: 50, // Espaçamento entre os slides
  responsive: {
      640: { items: 2 },
      1024: { items: 3 }
  }
});



//Filter
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}



//Filter
function filterSelection(category) {
  let items = document.querySelectorAll(".filterDiv");
  if (category === "all") category = "";
  items.forEach((item) => {
      item.classList.remove("show");
      if (item.className.indexOf(category) > -1) {
          item.classList.add("show");
      }
  });
}

// Função para filtrar os itens
function filterSelection(category) {
  let items = document.querySelectorAll(".filterDiv");
  if (category === "all") category = ""; // Mostra todos se a categoria for "all"
  items.forEach((item) => {
      item.classList.remove("show");
      if (item.className.indexOf(category) > -1) {
          item.classList.add("show");
      }
  });
}

// Defina o filtro padrão como "all" ou outra categoria
document.addEventListener("DOMContentLoaded", () => {
  filterSelection("all"); // Mostra todos os itens ao carregar
});

// Adiciona a classe "active" ao botão selecionado
let btnContainer = document.getElementById("filterButtons");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
  });
}

