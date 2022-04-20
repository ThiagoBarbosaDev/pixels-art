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

function pixelPainter() {

}







// paintPixel() {

// }
// selectedColor = e.target.classList[1];
// e.target.classList.add =('selected');
