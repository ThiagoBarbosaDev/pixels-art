let selectedColor = document.querySelector('.selected');
const boardWrapper = document.querySelector('#board-wrapper');

function randomizeRGB() {
  return Math.floor(Math.random() * 255) + 1;
}

// RandomizePalette
function RandomizePalette() {
  const paleta0 = document.querySelector('.color0');
  const paleta1 = document.querySelector('.color1');
  const paleta2 = document.querySelector('.color2');
  const paleta3 = document.querySelector('.color3');


  paleta0.style.backgroundColor = 'rgb(0, 0, 0)';
  paleta1.style.backgroundColor = `rgb(${randomizeRGB()}, ${randomizeRGB()}, ${randomizeRGB()})`;
  paleta2.style.backgroundColor = `rgb(${randomizeRGB()}, ${randomizeRGB()}, ${randomizeRGB()})`;
  paleta3.style.backgroundColor = `rgb(${randomizeRGB()}, ${randomizeRGB()}, ${randomizeRGB()})`;
}

RandomizePalette();

// CreatePixels
function createPixels(numOfPx, appendTarget) {
  for (let i = 0; i < numOfPx; i += 1) {
    const newPx = document.createElement('div');
    newPx.className = 'pixel';
    appendTarget.appendChild(newPx);
  }
}

// createlines
function createLines(numOfLines, appendTarget) {
  for (let i = 0; i < numOfLines; i += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'pixel-board__linha';
    createPixels(numOfLines, newLine);
    appendTarget.appendChild(newLine);
  }
}

// Createboard
function createBoard(boardSize) {
  const board = document.createElement('div');
  board.id = 'pixel-board';
  createLines(boardSize, board);
  boardWrapper.appendChild(board);
}

createBoard(5);

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

// Lógica de Pintar
function pixelPainter() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', (e) => {
    // const selectedColorClass = selectedColor.classList[1];
    const selectedElement = document.querySelector('.selected');

    if (e.target.classList.length < 3 && e.target !== pixelBoard) {
      e.target.style.backgroundColor = selectedElement.style.backgroundColor;
    }
  });
}

// Lógica de limpar a tela
function clearBoard() {
  const clearButton = document.querySelector('#clear-board');
  const pixel = document.querySelectorAll('.pixel');
  clearButton.addEventListener('click', () => {
    pixel.forEach((pixel) => {
      // pixel.className = 'pixel';
      pixel.style.backgroundColor = 'rgb(255, 255, 255)';
    });
  });
}

function generateBoardHandler() {
  const boardSizeInput = document.querySelector('#board-size');
  const pixelBoard = document.querySelector('#pixel-board');
  console.log(boardSizeInput);
  console.log(boardSizeInput.value);
  console.log(typeof boardSizeInput.value);
  if (parseInt(boardSizeInput.value, 10) < 5) {
    boardWrapper.removeChild(pixelBoard);
    createBoard(5);
  } else if (parseInt(boardSizeInput.value, 10) > 50) {
    boardWrapper.removeChild(pixelBoard);
    createBoard(50);
  } else if (boardSizeInput.value === '') {
    window.alert('Board Inválido!');
  } else {
    boardWrapper.removeChild(pixelBoard);
    createBoard(boardSizeInput.value);
  }
}

function generateBoard() {
  const generateBoardButton = document.querySelector('#generate-board');
  generateBoardButton.addEventListener('click', () => {
    generateBoardHandler();
    pixelPainter();
    clearBoard();
  });
}

colorSelector();
clearBoard();
generateBoard();
pixelPainter();
