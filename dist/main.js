/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("var order = [];\nvar clickedOrder = [];\nvar score = 0; //0 - verde\n//1 - vermelho\n//2 - amarelo\n//3 - azul\n\nvar blue = document.querySelector('.blue');\nvar red = document.querySelector('.red');\nvar green = document.querySelector('.green');\nvar yellow = document.querySelector('.yellow'); //cria ordem aletoria de cores\n\nvar shuffleOrder = function shuffleOrder() {\n  var colorOrder = Math.floor(Math.random() * 4);\n  order[order.length] = colorOrder;\n  clickedOrder = [];\n\n  for (var i in order) {\n    var elementColor = createColorElement(order[i]);\n    lightColor(elementColor, Number(i) + 1);\n  }\n}; //acende a proxima cor\n\n\nvar lightColor = function lightColor(element, number) {\n  number = number * 500;\n  setTimeout(function () {\n    element.classList.add('selected');\n  }, number - 250);\n  setTimeout(function () {\n    element.classList.remove('selected');\n  });\n}; //checa se os botoes clicados são os mesmos da ordem gerada no jogo\n\n\nvar checkOrder = function checkOrder() {\n  for (var i in clickedOrder) {\n    if (clickedOrder[i] != order[i]) {\n      gameOver();\n      break;\n    }\n  }\n\n  if (clickedOrder.length == order.length) {\n    alert(\"Pontua\\xE7\\xE3o: \".concat(score, \"\\nVoc\\xEA acertou! Iniciando pr\\xF3ximo n\\xEDvel!\"));\n    nextLevel();\n  }\n}; //funcao para o clique do usuario\n\n\nvar click = function click(color) {\n  clickedOrder[clickedOrder.length] = color;\n  createColorElement(color).classList.add('selected');\n  setTimeout(function () {\n    createColorElement(color).classList.remove('selected');\n    checkOrder();\n  }, 250);\n}; //funcao que retorna a cor\n\n\nvar createColorElement = function createColorElement(color) {\n  if (color == 0) {\n    return green;\n  } else if (color == 1) {\n    return red;\n  } else if (color == 2) {\n    return yellow;\n  } else if (color == 3) {\n    return blue;\n  }\n}; //funcao para proximo nivel do jogo\n\n\nvar nextLevel = function nextLevel() {\n  score++;\n  shuffleOrder();\n}; //funcao para game over\n\n\nvar gameOver = function gameOver() {\n  alert(\"Pontua\\xE7\\xE3o: \".concat(score, \"!\\nVoc\\xEA perdeu o jogo!\\nClique em OK para iniciar um novo jogo\"));\n  order = [];\n  clickedOrder = [];\n  playGame();\n}; //funcao de inicio do jogo\n\n\nvar playGame = function playGame() {\n  alert('Bem vindo ao Gênesis! Iniciando novo jogo!');\n  score = 0;\n  nextLevel();\n}; //eventos de clique para as cores\n\n\ngreen.onclick = function () {\n  return click(0);\n};\n\nred.onclick = function () {\n  return click(1);\n};\n\nyellow.onclick = function () {\n  return click(2);\n};\n\nblue.onclick = function () {\n  return click(3);\n}; //inicio do jogo\n\n\nplayGame();\n\n//# sourceURL=webpack://frontend-eslint-babel-webpack/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"]();
/******/ 	
/******/ })()
;