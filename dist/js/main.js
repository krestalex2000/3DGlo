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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_pageScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pageScroll */ \"./modules/pageScroll.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('19 september 2023');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_pageScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector('.menu');\r\n  const menu = document.querySelector('menu');\r\n  const closeBtn = menu.querySelector('.close-btn');\r\n  const menuItems = menu.querySelectorAll('ul>li>a');\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  };\r\n\r\n  menuBtn.addEventListener('click', handleMenu);\r\n  closeBtn.addEventListener('click', handleMenu);\r\n\r\n  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  const modal = document.querySelector('.popup');\r\n  const closeBtn = modal.querySelector('.popup-close');\r\n\r\n  let idInterval;\r\n  let count = 0;\r\n\r\n  const modalAnimate = display => {\r\n    if (display === 'block') {\r\n      count += 3;\r\n      idInterval = requestAnimationFrame(() => modalAnimate(display));\r\n\r\n      if (count >= 0 && count <= 100) {\r\n        modal.style.opacity = count + '%';\r\n        modal.style.display = `${display}`;\r\n      } else {\r\n        cancelAnimationFrame(idInterval);\r\n      }\r\n    }\r\n    if (display === 'none') {\r\n      count -= 3;\r\n      idInterval = requestAnimationFrame(() => modalAnimate(display));\r\n\r\n      if (count >= 0 && count <= 100) {\r\n        modal.style.opacity = count + '%';\r\n      } else {\r\n        modal.style.display = `${display}`;\r\n        cancelAnimationFrame(idInterval);\r\n      }\r\n    }\r\n  };\r\n\r\n  buttons.forEach(button => {\r\n    button.addEventListener('click', () => {\r\n      if (document.body.clientWidth >= 768) {\r\n        modalAnimate('block');\r\n      } else {\r\n        modal.style.display = 'block';\r\n        modal.style.opacity = '100%';\r\n      }\r\n    });\r\n  });\r\n\r\n  closeBtn.addEventListener('click', () => {\r\n    if (document.body.clientWidth >= 768) {\r\n      modalAnimate('none');\r\n    } else {\r\n      modal.style.display = 'none';\r\n      modal.style.opacity = '0';\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/pageScroll.js":
/*!*******************************!*\
  !*** ./modules/pageScroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pageScroll = () => {\r\n  const menuBtns = document.querySelectorAll('menu>ul>li>a');\r\n  const mouseBtn = document.querySelector('a[href=\"#service-block\"]');\r\n\r\n  const scroll = e => {\r\n    const block = document.querySelector(`${e.currentTarget.attributes.href.value}`);\r\n    e.preventDefault();\r\n    block.scrollIntoView(block, { behavior: 'smooth', block: 'start', inline: 'start' });\r\n  };\r\n\r\n  menuBtns.forEach(btn => {\r\n    btn.addEventListener('click', scroll);\r\n  });\r\n  mouseBtn.addEventListener('click', scroll);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageScroll);\r\n\n\n//# sourceURL=webpack:///./modules/pageScroll.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const sliderBlock = document.querySelector('.portfolio-content');\r\n  const slides = document.querySelectorAll('.portfolio-item');\r\n  const dotsList = document.querySelector('.portfolio-dots');\r\n  const dots = [];\r\n  const timeInterval = 2000;\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  const addDots = () => {\r\n    slides.forEach(() => {\r\n      const dot = document.createElement('li');\r\n      dot.classList.add('dot');\r\n      dotsList.append(dot);\r\n      dots.push(dot);\r\n    });\r\n  };\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n  };\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches('.dot, .portfolio-btn')) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n\r\n    if (e.target.matches('#arrow-right')) {\r\n      currentSlide++;\r\n    } else if (e.target.matches('#arrow-left')) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains('dot')) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n  });\r\n\r\n  sliderBlock.addEventListener('mouseenter', e => {\r\n    if (e.target.matches('.dot, .portfolio-btn')) {\r\n      stopSlide();\r\n    }\r\n  }, true);\r\n\r\n  sliderBlock.addEventListener('mouseleave', e => {\r\n    if (e.target.matches('.dot, .portfolio-btn')) {\r\n      startSlide(timeInterval);\r\n    }\r\n  }, true);\r\n\r\n  addDots();\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

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