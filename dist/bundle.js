/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/flyweight/Digit.ts":
/*!********************************!*\
  !*** ./src/flyweight/Digit.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Digit = /** @class */ (function () {
    function Digit(url) {
        this.url = url;
        this.data = null;
    }
    Digit.prototype.load = function (url, domOutput) {
        var _this = this;
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (json) {
            _this.data = json;
            if (domOutput)
                _this.put(domOutput);
        }).catch(function (error) {
            console.warn(error);
        });
    };
    Digit.prototype.put = function (dom) {
        if (!this.data)
            this.load(this.url, dom);
        else {
            dom.innerHTML = '<div class="digit-layout"></div>';
            var domLayout_1 = dom.querySelector('.digit-layout');
            this.data.forEach(function (item) {
                var len = item.length;
                for (var i = 0; i < len; i++) {
                    var domCell = document.createElement('div');
                    domCell.style.backgroundColor = item[i] === '1' ? '#ff0' : '#333';
                    domLayout_1.append(domCell);
                }
            });
        }
    };
    return Digit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Digit);


/***/ }),

/***/ "./src/flyweight/DigitFactory.ts":
/*!***************************************!*\
  !*** ./src/flyweight/DigitFactory.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Digit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Digit */ "./src/flyweight/Digit.ts");

var DigitFactory = /** @class */ (function () {
    function DigitFactory() {
        this.pool = [null, null, null, null, null, null, null, null, null, null];
    }
    DigitFactory.prototype.getDigit = function (n) {
        if (!this.pool[n])
            this.pool[n] = new _Digit__WEBPACK_IMPORTED_MODULE_0__["default"]("./data/".concat(n, ".json"));
        return this.pool[n];
    };
    return DigitFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DigitFactory);


/***/ }),

/***/ "./src/flyweight/Number.ts":
/*!*********************************!*\
  !*** ./src/flyweight/Number.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Number = /** @class */ (function () {
    function Number(factory, num) {
        this.factory = factory;
        this.num = num;
    }
    Number.prototype.put = function (dom) {
        var strNum = this.num.toString();
        var len = strNum.length;
        dom.innerHTML = '';
        for (var i = 0; i < len; i++) {
            var div = document.createElement('div');
            this.factory.getDigit(parseInt(strNum[i])).put(div);
            dom.append(div);
        }
    };
    return Number;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Number);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/flyweight/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DigitFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DigitFactory */ "./src/flyweight/DigitFactory.ts");
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Number */ "./src/flyweight/Number.ts");
/*
Flyweight패턴은 어떤 객체를 사용할 때마다 매번 생성하지 않고 한번만 생성해 두고 공유하며 사용할 수 있음.
즉, 미리 생성된 객체를 공유해서 사용한다는 개념.
객체를 생성할 때 많은 자원(메모리, 소요시간 등)이 소모될 경우 유용함.
Flyweight패턴이 적용된 객체는 공유의 개념이므로 공유할 속성과 공유하지 않을 속성을 구분하여 설계할 필요가 있음.
*/


var factory = new _DigitFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
var domTarget = document.querySelector("#tmp");
var value = 434331;
var number = new _Number__WEBPACK_IMPORTED_MODULE_1__["default"](factory, value);
number.put(domTarget);
// setInterval(() => {
//     const number = new Number(factory, value++)
//     number.put(domTarget)
// },1000)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUNuRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNuQixDQUFDO0lBQ0wsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQ2ZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7O0VBS0U7QUFFd0M7QUFDWjtBQUc5QixJQUFNLE9BQU8sR0FBRyxJQUFJLHFEQUFZLEVBQUUsQ0FBQztBQUNuQyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRWpELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUVuQixJQUFNLE1BQU0sR0FBRyxJQUFJLCtDQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztBQUN6QyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUVyQixzQkFBc0I7QUFDdEIsa0RBQWtEO0FBQ2xELDRCQUE0QjtBQUM1QixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvZmx5d2VpZ2h0L0RpZ2l0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL2ZseXdlaWdodC9EaWdpdEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvZmx5d2VpZ2h0L051bWJlci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL2ZseXdlaWdodC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWdpdCB7XHJcbiAgICBwcml2YXRlIGRhdGE6IEFycmF5PHN0cmluZz4gPSBudWxsXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1cmw6IHN0cmluZykge31cclxuXHJcbiAgICBwcml2YXRlIGxvYWQodXJsOiBzdHJpbmcsIGRvbU91dHB1dDogRWxlbWVudCkge1xyXG4gICAgICAgIGZldGNoKHVybCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSkudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0ganNvblxyXG4gICAgICAgICAgICBpZihkb21PdXRwdXQpIHRoaXMucHV0KGRvbU91dHB1dClcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHV0KGRvbTogRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmKCF0aGlzLmRhdGEpIHRoaXMubG9hZCh0aGlzLnVybCwgZG9tKVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb20uaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJkaWdpdC1sYXlvdXRcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgIGNvbnN0IGRvbUxheW91dCA9IGRvbS5xdWVyeVNlbGVjdG9yKCcuZGlnaXQtbGF5b3V0JylcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbiA9IGl0ZW0ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb21DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgICAgICAgICBkb21DZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGl0ZW1baV0gPT09ICcxJyA/ICcjZmYwJyA6ICcjMzMzJ1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbUxheW91dC5hcHBlbmQoZG9tQ2VsbClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRGlnaXQgZnJvbSBcIi4vRGlnaXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZ2l0RmFjdG9yeSB7XHJcbiAgICBwcml2YXRlIHBvb2w6IEFycmF5PERpZ2l0IHwgbnVsbD4gPSBbIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwgXVxyXG5cclxuICAgIGdldERpZ2l0KG46IG51bWJlcik6IERpZ2l0IHtcclxuICAgICAgICBpZighdGhpcy5wb29sW25dKSB0aGlzLnBvb2xbbl0gPSBuZXcgRGlnaXQoYC4vZGF0YS8ke259Lmpzb25gKVxyXG4gICAgICAgIHJldHVybiB0aGlzLnBvb2xbbl1cclxuICAgIH1cclxufSIsImltcG9ydCBEaWdpdEZhY3RvcnkgZnJvbSBcIi4vRGlnaXRGYWN0b3J5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmYWN0b3J5OiBEaWdpdEZhY3RvcnksIHByaXZhdGUgbnVtOiBudW1iZXIpIHt9XHJcblxyXG4gICAgcHV0KGRvbTogRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHN0ck51bSA9IHRoaXMubnVtLnRvU3RyaW5nKClcclxuICAgICAgICBjb25zdCBsZW4gPSBzdHJOdW0ubGVuZ3RoXHJcbiAgICAgICAgZG9tLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHRoaXMuZmFjdG9yeS5nZXREaWdpdChwYXJzZUludChzdHJOdW1baV0pKS5wdXQoZGl2KVxyXG4gICAgICAgICAgICBkb20uYXBwZW5kKGRpdilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxyXG5cclxuXHJcbi8qXHJcbkZseXdlaWdodO2MqO2EtOydgCDslrTrlqQg6rCd7LK066W8IOyCrOyaqe2VoCDrlYzrp4jri6Qg66ek67KIIOyDneyEse2VmOyngCDslYrqs6Ag7ZWc67KI66eMIOyDneyEse2VtCDrkZDqs6Ag6rO17Jyg7ZWY66mwIOyCrOyaqe2VoCDsiJgg7J6I7J2MLlxyXG7spoksIOuvuOumrCDsg53shLHrkJwg6rCd7LK066W8IOqzteycoO2VtOyEnCDsgqzsmqntlZzri6TripQg6rCc64WQLlxyXG7qsJ3ssrTrpbwg7IOd7ISx7ZWgIOuVjCDrp47snYAg7J6Q7JuQKOuplOuqqOumrCwg7IaM7JqU7Iuc6rCEIOuTsSnsnbQg7IaM66qo65CgIOqyveyasCDsnKDsmqntlaguXHJcbkZseXdlaWdodO2MqO2EtOydtCDsoIHsmqnrkJwg6rCd7LK064qUIOqzteycoOydmCDqsJzrhZDsnbTrr4DroZwg6rO17Jyg7ZWgIOyGjeyEseqzvCDqs7XsnKDtlZjsp4Ag7JWK7J2EIOyGjeyEseydhCDqtazrtoTtlZjsl6wg7ISk6rOE7ZWgIO2VhOyalOqwgCDsnojsnYwuXHJcbiovXHJcblxyXG5pbXBvcnQgRGlnaXRGYWN0b3J5IGZyb20gXCIuL0RpZ2l0RmFjdG9yeVwiO1xyXG5pbXBvcnQgTnVtYmVyIGZyb20gXCIuL051bWJlclwiO1xyXG5cclxuXHJcbmNvbnN0IGZhY3RvcnkgPSBuZXcgRGlnaXRGYWN0b3J5KCk7XHJcbmNvbnN0IGRvbVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG1wXCIpO1xyXG5cclxubGV0IHZhbHVlID0gNDM0MzMxO1xyXG5cclxuY29uc3QgbnVtYmVyID0gbmV3IE51bWJlcihmYWN0b3J5LCB2YWx1ZSlcclxubnVtYmVyLnB1dChkb21UYXJnZXQpXHJcblxyXG4vLyBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbi8vICAgICBjb25zdCBudW1iZXIgPSBuZXcgTnVtYmVyKGZhY3RvcnksIHZhbHVlKyspXHJcbi8vICAgICBudW1iZXIucHV0KGRvbVRhcmdldClcclxuLy8gfSwxMDAwKVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9