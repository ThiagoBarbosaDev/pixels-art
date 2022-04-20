
const pixelBoard = document.querySelector('#pixel-board');

const pixelL = document.querySelector('.pixel-board__linha')

let selectedColor = document.querySelector('.selected');

function colorSelector() {
  const colorPalette = document.querySelector('#color-palette'); 

  colorPalette.addEventListener('click', (e) => {
    // Seleciona cor
    if (e.target.classList.length <= 2 && e.target !== colorPalette) {
      // Remove classe "selected" de quem estiver na variável selectedColor
      selectedColor.classList.remove('selected');
      // Adiciona classe "selected" para a div da paleta clicada
      e.target.classList.add('selected');
      // Adiciona a div com a classe selected para a variavel selectedColor
      selectedColor = document.querySelector('.selected');
    }
  });
}

colorSelector();

// console.log(selectedColor.classList[1])

function pixelPainter() {


  pixelBoard.addEventListener('click', (e) => {
console.log(e.target)
console.log(e.target.classList[1])
console.log(selectedColor.classList[1])

if (e.target.classList.length < 2) {e.target.className += " " + selectedColor.classList[1]; e.target.classList.remove('pixel')}
  })
}

pixelPainter()

// Todo: 
// Corrigir bug quando clica no ID pixel-board e atribui ele a classe color-black (adicionar um if pra identificar o id e não executar)
// adicionar habilidade de sobrescrever a cor já pintada