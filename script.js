let selectedColor = document.querySelector('.selected');
const boardWrapper = document.querySelector('#board-wrapper');

function randomizeRGB() {
  return Math.floor(Math.random() * 255) + 1;
}

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

function createPixels(numOfPx, appendTarget) {
  for (let i = 0; i < numOfPx; i += 1) {
    const newPx = document.createElement('div');
    newPx.className = 'pixel';
    appendTarget.appendChild(newPx);
  }
}

function createLines(numOfLines, appendTarget) {
  for (let i = 0; i < numOfLines; i += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'pixel-board__linha';
    createPixels(numOfLines, newLine);
    appendTarget.appendChild(newLine);
  }
}

function createBoard(boardSize) {
  const board = document.createElement('div');
  board.id = 'pixel-board';
  createLines(boardSize, board);
  boardWrapper.appendChild(board);
}

createBoard(5);

function colorSelector() {
  const colorPalette = document.querySelector('#color-palette');

  colorPalette.addEventListener('click', (e) => {
    if (e.target.classList.length <= 2 && e.target !== colorPalette) {
      selectedColor.classList.remove('selected');
      e.target.classList.add('selected');
      selectedColor = document.querySelector('.selected');
    }
  });
}

function pixelPainter() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', (e) => {
    const selectedElement = document.querySelector('.selected');

    if (e.target.classList.length < 3 && e.target !== pixelBoard) {
      e.target.style.backgroundColor = selectedElement.style.backgroundColor;
    }
  });
}

function clearBoard() {
  const clearButton = document.querySelector('#clear-board');
  const pixels = document.querySelectorAll('.pixel');
  clearButton.addEventListener('click', () => {
    pixels.forEach((child) => {
      const elemento = child;
      elemento.style.backgroundColor = 'rgb(255, 255, 255)';
    });
  });
}

function generateBoardHandler() {
  const boardSizeInput = document.querySelector('#board-size');
  const pixelBoard = document.querySelector('#pixel-board');
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
