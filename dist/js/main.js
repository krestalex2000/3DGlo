/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_pageScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pageScroll */ \"./modules/pageScroll.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('19 september 2023');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_pageScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n  const calcSquare = document.querySelector('.calc-square');\r\n  const calcCount = document.querySelector('.calc-count');\r\n  const calcDay = document.querySelector('.calc-day');\r\n\r\n  const validateInput = e => {\r\n    e.target.value = e.target.value.replace(/\\D/, '');\r\n  };\r\n\r\n  calcSquare.addEventListener('input', validateInput);\r\n  calcCount.addEventListener('input', validateInput);\r\n  calcDay.addEventListener('input', validateInput);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/formValidate.js":
/*!*********************************!*\
  !*** ./modules/formValidate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formValidate = () => {\r\n  const inputsText = document.querySelectorAll('input[type=\"text\"]:not(.calc-item)');\r\n  const inputMessage = document.querySelector('input[placeholder=\"Ваше сообщение\"]');\r\n  const inputsEmail = document.querySelectorAll('input[type=\"email\"]');\r\n  const inputsPhone = document.querySelectorAll('input[type=\"tel\"]');\r\n\r\n  const INPUT_TEXT_PATTERN = /[^-\\sа-яА-ЯЁё]/;\r\n  const INPUT_EMAIL_PATTERN = /[^\\w@\\-_.!~*`]/;\r\n  const INPUT_PHONE_PATTERN = /[^\\d()-]/;\r\n\r\n  const validateInput = (e, pattern) => {\r\n    e.target.value = e.target.value.replace(pattern, '');\r\n  };\r\n\r\n  inputsText.forEach(input => input.addEventListener('input', e => validateInput(e, INPUT_TEXT_PATTERN)));\r\n  inputMessage.addEventListener('input', e => validateInput(e, INPUT_TEXT_PATTERN));\r\n  inputsEmail.forEach(input => input.addEventListener('input', e => validateInput(e, INPUT_EMAIL_PATTERN)));\r\n  inputsPhone.forEach(input => input.addEventListener('input', e => validateInput(e, INPUT_PHONE_PATTERN)));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidate);\r\n\n\n//# sourceURL=webpack:///./modules/formValidate.js?");


/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menu = document.querySelector('menu');\r\n  const body = document.body;\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  };\r\n\r\n  body.addEventListener('click', (e) => {\r\n    if (\r\n      e.target.closest('.menu') ||\r\n      e.target.closest('.close-btn') ||\r\n      e.target.closest('menu>ul>li>a') ||\r\n      !e.target.closest('menu')\r\n    ) {\r\n      handleMenu();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  const modal = document.querySelector('.popup');\r\n\r\n  let idInterval;\r\n  let count = 0;\r\n\r\n  const modalAnimate = display => {\r\n    if (display === 'block') {\r\n      count += 3;\r\n      idInterval = requestAnimationFrame(() => modalAnimate(display));\r\n\r\n      if (count >= 0 && count <= 100) {\r\n        modal.style.opacity = count + '%';\r\n        modal.style.display = `${display}`;\r\n      } else {\r\n        cancelAnimationFrame(idInterval);\r\n      }\r\n    }\r\n    if (display === 'none') {\r\n      count -= 3;\r\n      idInterval = requestAnimationFrame(() => modalAnimate(display));\r\n\r\n      if (count >= 0 && count <= 100) {\r\n        modal.style.opacity = count + '%';\r\n      } else {\r\n        modal.style.display = `${display}`;\r\n        cancelAnimationFrame(idInterval);\r\n      }\r\n    }\r\n  };\r\n\r\n  buttons.forEach(button => {\r\n    button.addEventListener('click', () => {\r\n      if (document.body.clientWidth >= 768) {\r\n        modalAnimate('block');\r\n      } else {\r\n        modal.style.display = 'block';\r\n        modal.style.opacity = '100%';\r\n      }\r\n    });\r\n  });\r\n\r\n  modal.addEventListener('click', e => {\r\n    if (\r\n      !e.target.closest('.popup-content') ||\r\n      (e.target.classList.contains('popup-close') &&\r\n        document.body.clientWidth >= 768)\r\n    ) {\r\n      modalAnimate('none');\r\n    } else {\r\n      modal.style.display = 'none';\r\n      modal.style.opacity = '0';\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/pageScroll.js":
/*!*******************************!*\
  !*** ./modules/pageScroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pageScroll = () => {\r\n  const menuBtns = document.querySelectorAll('menu>ul>li>a');\r\n  const mouseBtn = document.querySelector('a[href=\"#service-block\"]');\r\n\r\n  const scroll = e => {\r\n    const block = document.querySelector(`${e.currentTarget.attributes.href.value}`);\r\n    e.preventDefault();\r\n    block.scrollIntoView(block, { behavior: 'smooth', block: 'start', inline: 'start' });\r\n  };\r\n\r\n  menuBtns.forEach(btn => {\r\n    btn.addEventListener('click', scroll);\r\n  });\r\n  mouseBtn.addEventListener('click', scroll);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageScroll);\r\n\n\n//# sourceURL=webpack:///./modules/pageScroll.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector('.service-header');\r\n  const tabs = document.querySelectorAll('.service-header-tab');\r\n  const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n  tabPanel.addEventListener('click', e => {\r\n\r\n    if (e.target.closest('.service-header-tab')) {\r\n      tabs.forEach((tab, index) => {\r\n        const tabBtn = e.target.closest('.service-header-tab');\r\n\r\n        if (tab === tabBtn) {\r\n          tab.classList.add('active');\r\n          tabContent[index].classList.remove('d-none');\r\n        } else {\r\n          tab.classList.remove('active');\r\n          tabContent[index].classList.add('d-none');\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = deadline => {\r\n  const timerHours = document.getElementById('timer-hours');\r\n  const timerMinutes = document.getElementById('timer-minutes');\r\n  const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n  const getTimeRemaining = () => {\r\n    const dateStop = new Date(deadline).getTime();\r\n    const dateNow = new Date().getTime();\r\n    const timeRemaining = (dateStop - dateNow) / 1000;\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    hours.toString().length === 1 ? hours = '0' + hours : hours;\r\n    minutes.toString().length === 1 ? minutes = '0' + minutes : minutes;\r\n    seconds.toString().length === 1 ? seconds = '0' + seconds : seconds;\r\n\r\n    return {\r\n      timeRemaining,\r\n      hours,\r\n      minutes,\r\n      seconds,\r\n    };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    const getTime = getTimeRemaining();\r\n\r\n    timerHours.textContent = getTime.hours;\r\n    timerMinutes.textContent = getTime.minutes;\r\n    timerSeconds.textContent = getTime.seconds;\r\n  };\r\n\r\n  if (getTimeRemaining().timeRemaining > 0) {\r\n    setInterval(updateClock, 1000);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;