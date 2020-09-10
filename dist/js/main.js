/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/modules/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const cells = document.querySelectorAll('.cell');\r\nconst winningMsg = document.querySelector('.winning-msg');\r\nconst winData = document.querySelector('[data-win-text]');\r\nconst input = document.getElementById('input');\r\nconst button = document.getElementById('submit');\r\nconst start = document.querySelector('.start');\r\nconst board = document.querySelector('.board');\r\nconst reset = document.getElementById('reset');\r\nfunction displayName() {\r\n  const inputValue = input.value;\r\n  const name = document.querySelector('.name');\r\n  name.innerHTML = `<h1 class=\"text-center\">Player: ${inputValue}</h1>`;\r\n  start.classList.remove('show');\r\n  board.classList.add('show');\r\n}\r\nfunction resetGame() {\r\n  window.location.reload();\r\n}\r\nreset.addEventListener('click', resetGame);\r\nbutton.addEventListener('click', displayName);\r\nfunction Board() {\r\n  const positions = Array.from(cells);\r\n  const checkForWinner = () => {\r\n    let winner = false;\r\n    const winningCombinations = [\r\n      [0, 1, 2],\r\n      [3, 4, 5],\r\n      [6, 7, 8],\r\n      [0, 3, 6],\r\n      [1, 4, 7],\r\n      [2, 5, 8],\r\n      [0, 4, 8],\r\n      [2, 4, 6],\r\n    ];\r\n    winningCombinations.forEach(winningCombo => {\r\n      const pos0InnerText = positions[winningCombo[0]].innerText;\r\n      const pos1InnerText = positions[winningCombo[1]].innerText;\r\n      const pos2InnerText = positions[winningCombo[2]].innerText;\r\n      const isWinningCombo = pos0InnerText !== ''\r\n      && pos0InnerText === pos1InnerText\r\n      && pos1InnerText === pos2InnerText;\r\n      if (isWinningCombo) {\r\n        winner = true;\r\n        winningCombo.forEach(index => {\r\n          positions[index].classList.add('win');\r\n          winningMsg.classList.add('show');\r\n          if (positions[index].innerText === 'X') {\r\n            winData.innerText = 'Conguratulation You Won The game!';\r\n          } else {\r\n            winData.innerText = 'Oops You loose! Computer won try again';\r\n          }\r\n        });\r\n      }\r\n    });\r\n    return winner;\r\n  };\r\n  return { positions, checkForWinner };\r\n}\r\n\r\nfunction HumanPlayer(board) {\r\n  const handleTurnTaken = (e) => {\r\n    e.target.innerText = 'X';\r\n    board.positions.forEach(el => el.removeEventListener('click', handleTurnTaken, { once: true }));\r\n  };\r\n  const takeTurn = () => {\r\n    board.positions.forEach(position => position.addEventListener('click', handleTurnTaken, { once: true }));\r\n  };\r\n  return { takeTurn };\r\n}\r\nfunction ComputerPlayer(board) {\r\n  const takeTurn = () => {\r\n    const availablePosition = board.positions.filter((p) => p.innerText === '');\r\n    const move = Math.floor(Math.random() * availablePosition.length - 0);\r\n    availablePosition[move].innerText = 'O';\r\n  };\r\n  return { takeTurn };\r\n}\r\n\r\nfunction Game() {\r\n  const board = Board();\r\n  const humanPlayer = HumanPlayer(board);\r\n  const computerPlayer = ComputerPlayer(board);\r\n  let turn = 0;\r\n  const takeTurn = () => {\r\n    if (board.checkForWinner()) {\r\n      return;\r\n    }\r\n    if (turn === 9 && !board.checkForWinner()) {\r\n      winningMsg.classList.add('show');\r\n      winData.innerText = 'It\\'s Draw try again';\r\n    } else if (turn % 2 === 0) {\r\n      humanPlayer.takeTurn();\r\n    } else {\r\n      computerPlayer.takeTurn();\r\n    }\r\n    turn += 1;\r\n  };\r\n  const start = () => {\r\n    const config = { childList: true };\r\n    const observer = new MutationObserver(() => takeTurn());\r\n    board.positions.forEach(element => observer.observe(element, config));\r\n    takeTurn();\r\n  };\r\n  return { start };\r\n}\r\nconst tictactoe = Game();\r\ntictactoe.start();\n\n//# sourceURL=webpack:///./src/modules/app.js?");

/***/ })

/******/ });