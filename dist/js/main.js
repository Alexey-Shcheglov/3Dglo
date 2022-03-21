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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validator */ \"./modules/validator.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForms */ \"./modules/sendForms.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('24 march 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_validator__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100);\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n\tslider: 'portfolio-content',\r\n\tslide: 'portfolio-item',\r\n\tsliderBtn: 'portfolio-btn',\r\n\tdotContainer: 'portfolio-dots',\r\n\tdot: 'dot',\r\n\tslideActive: 'portfolio-item-active',\r\n\tdotActive: 'dot-active',\r\n\tarrowLeft: '#arrow-left',\r\n\tarrowRight: '#arrow-right',\r\n });\r\n (0,_modules_sendForms__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({ \r\n\tformId: 'form1', \r\n\tsomeElement: [\r\n\t\t{\r\n\t\t\ttype: 'input',\r\n\t\t\tid: 'total'\r\n\t\t},\r\n\t] \r\n});\r\n(0,_modules_sendForms__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({formId: 'form2'});\r\n(0,_modules_sendForms__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({formId: 'form3'});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n\tconst calcBlock = document.querySelector('.calc-block');\r\n\tconst calcType = document.querySelector('.calc-type');\r\n\tconst calcSquare = document.querySelector('.calc-square');\r\n\tconst calcCount = document.querySelector('.calc-count');\r\n\tconst calcDay = document.querySelector('.calc-day');\r\n\tconst total = document.getElementById('total');\r\n\r\n\tconst countCalc = () => {\r\n\t\tconst calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n\t\tconst calcSquareValue = calcSquare.value;\r\n\r\n\t\tlet totalValue = 0;\r\n\t\tlet calcCountValue =1;\r\n\t\tlet calcDayValue = 1;\r\n\r\n\t\tif(calcCount.value > 1) {\r\n\t\t\tcalcCountValue += (calcCount.value / 10);\r\n\t\t}\r\n\r\n\t\tif(calcDay.value && calcDay.value < 5) {\r\n\t\t\tcalcDayValue = 2;\r\n\t\t} else if(calcDay.value && calcDay.value < 10) {\r\n\t\t\tcalcDayValue = 1.5;\r\n\t\t}\r\n\r\n\t\tif(calcType.value && calcSquare.value) {\r\n\t\t\ttotalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n\t\t} else {\r\n\t\t\ttotalValue = 0;\r\n\t\t} \r\n\r\n\t\ttotal.textContent = totalValue;\r\n\t};\r\n\r\n\tcalcBlock.addEventListener('input', (e) => {\r\n\t\tif(e.target === calcType || e.target === calcSquare ||\r\n\t\t\te.target === calcCount || e.target === calcDay) {\r\n\t\t\tcountCalc();\r\n\t\t}\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n\tlet start = performance.now();\r\n \r\n\trequestAnimationFrame(function animate(time) {\r\n\t  // timeFraction изменяется от 0 до 1\r\n\t  let timeFraction = (time - start) / duration;\r\n\t  if (timeFraction > 1) {\r\n\t\ttimeFraction = 1;\r\n\t  }\r\n \r\n\t  // вычисление текущего состояния анимации\r\n\t  let progress = timing(timeFraction);\r\n \r\n\t  draw(progress); // отрисовать её\r\n \r\n\t  if (timeFraction < 1) {\r\n\t\t requestAnimationFrame(animate);\r\n\t  }\r\n\t});\r\n };\r\n\r\n \n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\tconst menu = document.querySelector('menu');\r\n \r\n\tconst handleMenu = (e) => {\r\n\t  if (e.target.closest('.menu, .close-btn, ul>li>a') ||\r\n\t\t (menu.classList.contains('active-menu') && !e.target.closest('.active-menu'))) {\r\n\t\t e.preventDefault();\r\n\t\t menu.classList.toggle('active-menu');\r\n\t  }\r\n\t};\r\n \r\n\tdocument.addEventListener('click', handleMenu);\r\n };\r\n \r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n\tconst modal = document.querySelector('.popup');\r\n\tconst content = modal.querySelector('.popup-content');\r\n\tconst buttons = document.querySelectorAll('.popup-btn');\r\n\r\n\tbuttons.forEach(btn => {\r\n\t\tbtn.addEventListener('click', () => {\r\n\t\t\tlet count = 0;\r\n\t\t\tlet idInterval;\r\n\r\n\t\t\tcontent.style.top = '0%';\r\n\t\t\tconst anim = () => {\r\n\t\t\t\t\r\n\t\t\t\tcount++;\r\n\t\t\t\tidInterval = requestAnimationFrame(anim);\r\n\t\t\t\tif(count <= 15) {\r\n\t\t\t\t\t(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n\t\t\t\t\t\tduration: 100,\r\n\t\t\t\t\t\ttiming(timeFraction) {\r\n\t\t\t\t\t\t\treturn timeFraction;\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\tdraw(progress) {\r\n\t\t\t\t\t\t\tmodal.style.display = 'block';\r\n\t\t\t\t\t\t\tcontent.style.top = progress * count  + \"%\";\r\n\t\t\t\t\t\t}\t\t\r\n\t\t\t\t\t});\r\n\t\t\t\t} else {\r\n\t\t\t\t\tcancelAnimationFrame(idInterval);\r\n\t\t\t\t}\r\n\t\t\t};\r\n\t\t\r\n\r\n\t\t\tanim();\r\n\t\t});\r\n\t});\r\n\r\n\tmodal.addEventListener('click', (e) => {\r\n\t\tif (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n\t\t\tmodal.style.display = 'none';\r\n\t\t}\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n\tconst links = document.querySelectorAll('menu>ul>li>a')\r\n\tconst scrollBtn = document.querySelector('a[href=\"#service-block\"]')\r\n\r\n\r\n\tlinks.forEach(link => {\r\n\t\tlink.addEventListener('click', (e) => {\r\n\t\t\te.preventDefault()\r\n\t\t\tlet attrLink = link.getAttribute('href')\r\n\t\t\tdocument.querySelector(attrLink).scrollIntoView({\r\n\t\t\t\t\tbehavior: 'smooth',\r\n\t\t\t\t\tblock: 'start'\r\n\t\t\t});\r\n\t\t});\r\n\t});\r\n\r\n\r\n\tscrollBtn.addEventListener('click', (e) => {\r\n\t\te.preventDefault()\r\n\t\tlet href = scrollBtn.getAttribute('href')\r\n\t\tdocument.querySelector(href).scrollIntoView({\r\n\t\t\tbehavior: 'smooth',\r\n\t\t\tblock: 'start'\r\n\t\t});\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForms.js":
/*!******************************!*\
  !*** ./modules/sendForms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst sendForm = ({ formId, someElement = [] }) => {\r\n\tconst form = document.getElementById(formId);\r\n\tconst statusBlock = document.createElement('div');\r\n\tconst loadText = \"Загрузка...\";\r\n\tconst errorText = 'Ошибка';\r\n\tconst successText = 'Спасибо за Вашу заявка! Мы свяжемся с вами ближайшее время';\r\n\r\n\tstatusBlock.style.color = '#C3C3C3';\r\n\r\n\tconst validate = (list) => {\r\n\t\tlet success = true;\r\n\r\n\t\tlist.forEach(item => {\r\n\t\t\t// switch(item.name) {\r\n\t\t\t// \tcase 'user_name': \r\n\t\t\t// \tsuccess = item.value.length > 2;\r\n\t\t\t// \tbreak;\r\n\t\t\t// \tcase 'user_phone': \r\n\t\t\t// \tsuccess = item.value.length > 10;\r\n\t\t\t// \tbreak;\r\n\t\t\t// \tcase 'user_massage': \r\n\t\t\t// \tsuccess = item.value.length > 2;\r\n\t\t\t// \tbreak;\r\n\t\t\t// \tdefault: \r\n\t\t\t// \treturn;\r\n\t\t\t// }\r\n\t\t\tif (item.name === 'user_name') {\r\n\t\t\t\tif(item.value.length < 2) {\r\n\t\t\t\t\tsuccess = false;\r\n\t\t\t\t}\r\n\t\t\t} else if (item.name === 'user_phone') {\r\n\t\t\t\tif(item.value.length < 11) {\r\n\t\t\t\t\tsuccess = false;\r\n\t\t\t\t}\r\n\t\t\t} else if (item.name === 'user_message') {\r\n\t\t\t\tif(item.value.length < 2) {\r\n\t\t\t\t\tsuccess = false;\r\n\t\t\t\t}\r\n\t\t\t} else if (item.name === 'user_email') {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t\t else {\r\n\t\t\t\t\tsuccess = true;\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\treturn success;\r\n\t};\r\n\r\n\tconst sendData = (data) => {\r\n\t\treturn fetch('https://jsonplaceholder.typicode.com/posts', {\r\n\t\t\tmethod: 'POST',\r\n\t\t\tbody: JSON.stringify(data),\r\n\t\t\theaders: {\r\n\t\t\t\t\t'Content-type': 'application/json; charset=UTF-8',\r\n\t\t\t},\r\n\t\t}).then(response => response.json())\r\n\t\t\t.then(data => {\r\n\t\t\t\t\tconsole.log(data);\r\n\t\t\t})\r\n\t\t\t.catch(error => console.log(error));\r\n\t};\r\n\r\n\tconst submitForm = () => {\r\n\t\tconst formElements = form.querySelectorAll('input');\r\n\t\tconst formData = new FormData(form);\r\n\t\tconst formBody = {};\r\n\r\n\t\tstatusBlock.textContent = loadText;\r\n\t\tform.append(statusBlock);\r\n\r\n\t\tformData.forEach((val, key) => {\r\n\t\t\tformBody[key] = val;\r\n\t\t});\r\n\r\n\t\tsomeElement.forEach(elem => {\r\n\t\t\tconst element = document.getElementById(elem.id);\r\n\r\n\t\t\tif(elem.type === 'block') {\r\n\t\t\t\t\tformBody[elem.id] = element.textContent;\r\n\t\t\t} else if (elem.type === 'input') {\r\n\t\t\t\telement.value > 0 ? formBody[elem.id] = element.value : '';\r\n\t\t\t\t\t// formBody[elem.id] = element.value;\r\n\t\t\t}\r\n\t\t});\r\n\r\n\r\n\t\tif(validate(formElements)) {\r\n\t\t\tsendData(formBody)\r\n\t\t\t\t\t.then(data => {\r\n\t\t\t\t\t\tstatusBlock.textContent = successText;\r\n\r\n\t\t\t\t\t\tformElements.forEach(input => {\r\n\t\t\t\t\t\t\tinput.value = '';\r\n\t\t\t\t\t\t});\r\n\t\t\t\t\t\tsetInterval(() => {\r\n\t\t\t\t\t\t\tstatusBlock.textContent = \"\";\r\n\t\t\t\t\t\t}, 3500);\r\n\t\t\t\t\t})\r\n\t\t\t\t\t.catch(error => {\r\n\t\t\t\t\t\tstatusBlock.textContent = errorText;\r\n\t\t\t\t\t});\r\n\t\t} else {\r\n\t\t\tformElements.forEach(input => {\r\n\t\t\t\t\tinput.value = '';\r\n\t\t\t});\r\n\t\t\tstatusBlock.textContent = \"\";\r\n\t\t\talert('Введите верные данные!');\r\n\t\t}\r\n\t};\r\n\r\n\ttry {\r\n\t\tif(!form) {\r\n\t\t\tthrow new Error('Верните форму на место');\r\n\t\t}\r\n\r\n\t\tform.addEventListener('submit', (e) => {\r\n\t\t\te.preventDefault();\r\n\r\n\t\t\tsubmitForm();\r\n\t\t});\r\n\t} catch (error) {\r\n\t\tconsole.log(error.message);\r\n\t}\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForms.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./modules/tools.js\");\n\r\n\r\nconst slider = (options) => {\r\n  let {\r\n    slider,\r\n    slide,\r\n    dotContainer,\r\n    dot,\r\n    arrowLeft,\r\n    arrowRight,\r\n    dotActive = 'not-provided',\r\n    slideActive = 'not-provided',\r\n    sliderBtn = 'portfolio-btn', \r\n  } = options;\r\n\r\n  const sliderBlock = document.querySelector(`.${slider}`);\r\n  const slides = document.querySelectorAll(`.${slide}`);\r\n  const dotsBlock = document.querySelector(`.${dotContainer}`);\r\n\r\n  const timeInterval = 2000;\r\n  let currentSlide = 0;\r\n  let interval;\r\n  let dots;\r\n\r\n  const createDots = (selector, active) => {\r\n    slides.forEach((_, i) => {\r\n      const newDot = document.createElement('li');\r\n\r\n      if (i === 0) {\r\n        newDot.classList.add(active);\r\n      }\r\n      newDot.classList.add(selector);\r\n\r\n      dotsBlock.append(newDot);\r\n    });\r\n    dots = document.querySelectorAll(`.${selector}`);\r\n  };\r\n\r\n  const prevSlide = (elems, index, active) => {\r\n    elems[index].classList.remove(active);\r\n  };\r\n\r\n  const nextSlide = (elems, index, active) => {\r\n    elems[index].classList.add(active);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, slideActive);\r\n    prevSlide(dots, currentSlide, dotActive);\r\n    currentSlide++;\r\n\r\n    currentSlide = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.adjustIndex)(slides, currentSlide);\r\n\r\n    nextSlide(slides, currentSlide, slideActive);\r\n    nextSlide(dots, currentSlide, dotActive);\r\n  };\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  if (!sliderBlock || !slides[0] || !dotContainer) {\r\n    document.querySelectorAll(`.${sliderBtn}`).forEach((btn) => {\r\n      btn.addEventListener('click', (e) => e.preventDefault());\r\n    });\r\n    return;\r\n  }\r\n\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches(`.${dot}, .${sliderBtn}`)) {\r\n\t\treturn;\r\n\t }\r\n\r\n    prevSlide(slides, currentSlide, slideActive);\r\n    prevSlide(dots, currentSlide, dotActive);\r\n\r\n    if (e.target.closest(arrowLeft)) {\r\n      currentSlide--;\r\n    } else if (e.target.matches(arrowRight)) {\r\n      currentSlide++;\r\n    } else if (e.target.classList.contains(dot)) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n    currentSlide = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.adjustIndex)(slides, currentSlide);\r\n\r\n    nextSlide(slides, currentSlide, slideActive);\r\n    nextSlide(dots, currentSlide, dotActive);\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    'mouseenter',\r\n    (e) => {\r\n      if (!e.target.matches(`.${dot}, .${sliderBtn}`)) {\r\n\t\t\treturn;\r\n\t\t}\r\n      stopSlide();\r\n    }, true);\r\n\r\n  sliderBlock.addEventListener(\r\n    'mouseleave',\r\n    (e) => {\r\n      if (!e.target.matches(`.${dot}, .${sliderBtn}`)) {\r\n\t\t\treturn;\r\n\t\t}\r\n      startSlide(timeInterval);\r\n    }, true);\r\n\r\n  createDots(dot, dotActive);\r\n\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n\tconst tabContent = document.querySelectorAll('.service-tab');\r\n\tconst tabPanel = document.querySelector('.service-header');\r\n\tconst tabs = document.querySelectorAll('.service-header-tab');\r\n\r\n\ttabPanel.addEventListener('click', (e) => {\r\n\t\tif (e.target.closest('.service-header-tab')) {\r\n\t\t\tconst tabBtn = e.target.closest('.service-header-tab');\r\n\t\t\ttabs.forEach((tab, index) => {\r\n\t\t\t\tif (tab === tabBtn) {\r\n\t\t\t\t\ttab.classList.add('active');\r\n\t\t\t\t\ttabContent[index].classList.remove('d-none');\r\n\t\t\t\t} else {\r\n\t\t\t\t\ttab.classList.remove('active');\r\n\t\t\t\t\ttabContent[index].classList.add('d-none');\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\tconst timerHours = document.getElementById('timer-hours');\r\n\tconst timerMinutes = document.getElementById('timer-minutes');\r\n\tconst timerSeconds = document.getElementById('timer-seconds');\r\n \r\n\tlet interval;\r\n \r\n\tconst convert2digit = (num) => {\r\n\t  const str = String(num);\r\n\t  return str.length < 2 ? `0${str}` : str;\r\n\t};\r\n \r\n\tconst getTimeRemaining = () => {\r\n\t  let dateStop = new Date(deadline).getTime();\r\n\t  let dateNow = new Date().getTime();\r\n\t  let timeRemaining = (dateStop - dateNow) / 1000;\r\n\t  let hours = Math.floor(timeRemaining / 60 / 60);\r\n\t  let minutes = Math.floor((timeRemaining / 60) % 60);\r\n\t  let seconds = Math.floor(timeRemaining % 60);\r\n \r\n\t  return { hours, minutes, seconds, timeRemaining, };\r\n\t};\r\n \r\n\tconst updateClock = () => {\r\n\t  const { hours, minutes, seconds, timeRemaining } = getTimeRemaining();\r\n \r\n\t  if (timeRemaining <= 0) {\r\n\t\t clearInterval(interval);\r\n\t\t timerHours.textContent = '00';\r\n\t\t timerMinutes.textContent = '00';\r\n\t\t timerSeconds.textContent = '00';\r\n\t\t return;\r\n\t  }\r\n \r\n\t  timerHours.textContent = convert2digit(hours);\r\n\t  timerMinutes.textContent = convert2digit(minutes);\r\n\t  timerSeconds.textContent = convert2digit(seconds);\r\n\t};\r\n \r\n\tupdateClock();\r\n\tinterval = setInterval(updateClock, 1000);\r\n };\r\n \r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/tools.js":
/*!**************************!*\
  !*** ./modules/tools.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"adjustIndex\": () => (/* binding */ adjustIndex)\n/* harmony export */ });\nconst adjustIndex = (arr, index) => {\r\n\tif (index > arr.length - 1) {\r\n\t  index = 0;\r\n\t}\r\n\tif (index < 0) {\r\n\t  index = arr.length - 1;\r\n\t}\r\n\treturn index;\r\n};\n\n//# sourceURL=webpack:///./modules/tools.js?");

/***/ }),

/***/ "./modules/validator.js":
/*!******************************!*\
  !*** ./modules/validator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst validator = () => {\r\n\tconst InputPhone = document.querySelectorAll(\"input[type='tel']\");\r\n\tconst inputMessage = document.querySelector(\".mess\");\r\n\tconst inputText = document.querySelectorAll(\"input[type='text']\");\r\n\tconst inputMail = document.querySelectorAll(\"input[type='email']\");\r\n\tconst spaceDel = (str) => {\r\n\t\tlet reg = /^[\\s\\-]+|[\\s\\-]+$/;\r\n\t\tstr = str.replace(reg, \"\");\r\n\t\treg = /\\s{2,}/g;\r\n\t\tstr = str.replace(reg, \" \");\r\n\t\treturn str;\r\n\t};\r\n\tinputMessage.addEventListener(\"input\", (e) => {\r\n\t\tlet reg = /[^а-яА-Я\\s\\-]/g;\r\n\t\te.target.value = e.target.value.replace(reg, \"\");\r\n\t});\r\n\tinputMessage.addEventListener(\"blur\", (e) => {\r\n\t\te.target.value = spaceDel(e.target.value);\r\n\t});\r\n\tInputPhone.forEach((input) => {\r\n\t\tinput.addEventListener(\"input\", (e) => {\r\n\t\t\tlet reg = /[^\\d\\(\\-\\)]+$/g;\r\n\t\t\te.target.value = e.target.value.replace(reg, \"\");\r\n\t\t});\r\n\t});\r\n\r\n\tinputText.forEach((input) => {\r\n\t\tif (!input.classList.contains(\"calc-item\")) {\r\n\t\t\tlet reg = /[^а-яА-Я\\s\\-]/g;\r\n\t\t\tinput.addEventListener(\"input\", (e) => {\r\n\t\t\te.target.value = e.target.value.replace(reg, \"\");\r\n\t\t\t});\r\n\t\t\tinput.addEventListener(\"blur\", (e) => {\r\n\t\t\tlet reg;\r\n\t\t\te.target.value = spaceDel(e.target.value);\r\n\t\t\treg = /^[а-яА-Я]|\\s[а-яА-Я]/g;\r\n\t\t\te.target.value = e.target.value.replace(reg, (str) => {\r\n\t\t\t\treturn str.toUpperCase();\r\n\t\t\t});\r\n\t\t\t});\r\n\t\t} else if (input.classList.contains(\"calc-item\")) {\r\n\t\t\tinput.addEventListener(\"input\", (event) => {\r\n\t\t\tevent.target.value = event.target.value.replace(/\\D+/, \"\");\r\n\t\t\t});\r\n\t\t}\r\n\t});\r\n\r\n\tinputMail.forEach((item) => {\r\n\t\titem.required = true;\r\n\t\titem.addEventListener(\"input\", (e) => {\r\n\t\t\tlet reg = /[^a-zA-Z\\d\\-\\.\\_\\!\\~\\*\\'\\@]/g;\r\n\t\t\te.target.value = e.target.value.replace(reg, \"\");\r\n\t\t});\r\n\t});\r\n};\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);\n\n//# sourceURL=webpack:///./modules/validator.js?");

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