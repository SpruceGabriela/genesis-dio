let order = [];
let clickedOrder = [];
let score = 0;

// 0 = green
// 1 = red
// 2 = yellow
// 3 = blue

const greenArea = document.querySelector(".green-area");
const redArea = document.querySelector(".red-area");
const yellowArea = document.querySelector(".yellow-area");
const blueArea = document.querySelector(".blue-area");

const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() *  4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

const lightColor = (element, time) => {
  time = time * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, time - 250);
  setTimeout(() => {
    element.classList.remove('selected')
  });
}

let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Score: ${score}\nYou're right! Starting next level...`);
    nextLevel();
  }
}

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);

}

const createColorElement = (color) => {
  if (color == 0) return greenArea;
  else if (color == 1) return redArea;
  else if (color == 2) return yellowArea;
  else if (color == 3) return blueArea;
}


const nextLevel = () => {
  score++;
  shuffleOrder();
}

// game over
const gameOver = () => {
  alert(`Score ${score}\nYou lose! Game Over!\nClick 'OK' to restart`);
  order = [];
  clickedOrder = [];

  playGame();
}

const playGame = () => {
  alert("Welcome! Starting a new game!");
  score = 0;

  nextLevel();
}

/* greenArea.addEventListener('click', click(0));
redArea.addEventListener('click', click(1));
yellowArea.addEventListener('click', click(2));
blueArea.addEventListener('click', click(3)); */

greenArea.onclick = () => click(0);
redArea.onclick = () => click(1);
yellowArea.onclick = () => click(2);
blueArea.onclick = () => click(3);

playGame();