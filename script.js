const pixelBoard = document.querySelector('#pixel-board');
const pixelL = document.querySelector('.pixel-board__linha');
let selectedColor = document.querySelector('.selected');

// Lógica de seleção de cores da paleta
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

// Lógica de Pintar
function pixelPainter() {
  pixelBoard.addEventListener('click', (e) => {
    // console.log(e.target);
    // console.log(e.target.classList[1]);
    // console.log(selectedColor.classList[1]);
    const selectedColorClass = selectedColor.classList[1];
    console.log(e.target.classList);
    if (e.target.classList.length < 2 && e.target !== pixelBoard) {     console.log(e.target.classList);
      e.target.className = selectedColorClass;     console.log(e.target.classList);
      e.target.classList.remove('pixel');     console.log(e.target.classList);
    }
  });
}

pixelPainter();
