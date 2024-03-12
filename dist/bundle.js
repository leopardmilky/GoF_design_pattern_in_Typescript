/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bridge/CaptionDisplay.ts":
/*!**************************************!*\
  !*** ./src/bridge/CaptionDisplay.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CaptionDisplay = /** @class */ (function () {
    function CaptionDisplay() {
    }
    CaptionDisplay.prototype.title = function (draft) {
        console.log("\uC81C\uBAA9: ".concat(draft.getTitle()));
    };
    CaptionDisplay.prototype.author = function (draft) {
        console.log("\uC800\uC790: ".concat(draft.getAuthor()));
    };
    CaptionDisplay.prototype.content = function (draft) {
        console.log("내용: ");
        var content = draft.getContent();
        content.forEach(function (item) {
            console.log("     ".concat(item));
        });
    };
    return CaptionDisplay;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaptionDisplay);


/***/ }),

/***/ "./src/bridge/CharactersCount.ts":
/*!***************************************!*\
  !*** ./src/bridge/CharactersCount.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draft */ "./src/bridge/Draft.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CharactersCounter = /** @class */ (function (_super) {
    __extends(CharactersCounter, _super);
    function CharactersCounter(title, author, content) {
        return _super.call(this, title, author, content) || this;
    }
    CharactersCounter.prototype.getCharactersCount = function () {
        var count = 0;
        count += this.getTitle().length;
        count += this.getAuthor().length;
        this.getContent().forEach(function (item) { return count += item.length; });
        return count;
    };
    return CharactersCounter;
}(_Draft__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharactersCounter);


/***/ }),

/***/ "./src/bridge/Draft.ts":
/*!*****************************!*\
  !*** ./src/bridge/Draft.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Draft = /** @class */ (function () {
    function Draft(title, author, content) {
        this.title = title;
        this.author = author;
        this.content = content;
    }
    Draft.prototype.getTitle = function () { return this.title; };
    Draft.prototype.getAuthor = function () { return this.author; };
    Draft.prototype.getContent = function () { return this.content; };
    Draft.prototype.print = function (display) {
        display.title(this);
        display.author(this);
        display.content(this);
    };
    return Draft;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Draft);


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
/*!*****************************!*\
  !*** ./src/bridge/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaptionDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaptionDisplay */ "./src/bridge/CaptionDisplay.ts");
/* harmony import */ var _CharactersCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CharactersCount */ "./src/bridge/CharactersCount.ts");
/*
Brige패턴은 기능 계층과 분리 계층을 분리하여 시스템의 확장성과 유지보수성을 높이는 패턴.
새로운 기능을 추가할 때는 기능 계층을 확장하고 새로운 구현을 추가할 때는 구현 계층을 확장함으로써 복잡도를 효과적으로 낮출 수 있음.
기능 계층과 구현 계층은 서로 위임을 통해 통신.
클래스들간의 관계를 단순하게 만들어주는게 좋은데, Bridge패턴은 기능 계층과 구현 계층을 분리해서 클래스들 간의 관계를 단순하게 유지시켜줌.
*/


var title = "복원된 지구";
var author = "김형준";
var content = [
    "플라스틱 사용의 감소와",
    "바다 생물 어획량 감소로 인하여",
    "지구는 복원되었다."
];
// const draft = new Draft(title, author, content);
var draft = new _CharactersCount__WEBPACK_IMPORTED_MODULE_1__["default"](title, author, content);
// const display = new SimpleDisplay();
var display = new _CaptionDisplay__WEBPACK_IMPORTED_MODULE_0__["default"]();
draft.print(display);
console.log("\uC804\uCCB4 \uBB38\uC790\uC218: ".concat(draft.getCharactersCount()));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0E7SUFBQTtJQWdCQSxDQUFDO0lBZkcsOEJBQUssR0FBTCxVQUFNLEtBQVk7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sS0FBWTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQU8sS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxLQUFZO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ25CLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUU7UUFDbEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFJO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBUSxJQUFJLENBQUUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkIyQjtBQUU1QjtJQUErQyxxQ0FBSztJQUNoRCwyQkFBWSxLQUFhLEVBQUUsTUFBYyxFQUFFLE9BQWlCO1FBQ3hELGFBQUssWUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBRUQsOENBQWtCLEdBQWxCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRWQsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNO1FBQy9CLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTTtRQUNoQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQUksSUFBSSxZQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBRXhELE9BQU8sS0FBSztJQUNoQixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLENBZDhDLDhDQUFLLEdBY25EOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7SUFDSSxlQUFvQixLQUFhLEVBQVUsTUFBYyxFQUFVLE9BQWlCO1FBQWhFLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBVTtJQUFHLENBQUM7SUFFeEYsd0JBQVEsR0FBUixjQUFhLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDO0lBQ2hDLHlCQUFTLEdBQVQsY0FBYyxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQztJQUNsQywwQkFBVSxHQUFWLGNBQWUsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUM7SUFFcEMscUJBQUssR0FBTCxVQUFNLE9BQWdCO1FBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7VUNkRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0pBOzs7OztFQUtFO0FBRTRDO0FBQ0k7QUFLbEQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDO0FBQ3ZCLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNyQixJQUFNLE9BQU8sR0FBRztJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtDQUNmO0FBRUQsbURBQW1EO0FBQ25ELElBQU0sS0FBSyxHQUFHLElBQUksd0RBQWlCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUU1RCx1Q0FBdUM7QUFDdkMsSUFBTSxPQUFPLEdBQUcsSUFBSSx1REFBYyxFQUFFLENBQUM7QUFDckMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUFXLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy9icmlkZ2UvQ2FwdGlvbkRpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvYnJpZGdlL0NoYXJhY3RlcnNDb3VudC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy9icmlkZ2UvRHJhZnQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy9icmlkZ2UvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc3BsYXkgZnJvbSBcIi4vRGlzcGxheVwiO1xyXG5pbXBvcnQgRHJhZnQgZnJvbSBcIi4vRHJhZnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcHRpb25EaXNwbGF5IGltcGxlbWVudHMgRGlzcGxheSB7XHJcbiAgICB0aXRsZShkcmFmdDogRHJhZnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhg7KCc66qpOiAke2RyYWZ0LmdldFRpdGxlKCl9YCkgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYXV0aG9yKGRyYWZ0OiBEcmFmdCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGDsoIDsnpA6ICR7ZHJhZnQuZ2V0QXV0aG9yKCl9YClcclxuICAgIH1cclxuXHJcbiAgICBjb250ZW50KGRyYWZ0OiBEcmFmdCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi64K07JqpOiBcIilcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZHJhZnQuZ2V0Q29udGVudCgpXHJcbiAgICAgICAgY29udGVudC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgICAgICAke2l0ZW19YCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImltcG9ydCBEcmFmdCBmcm9tIFwiLi9EcmFmdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyc0NvdW50ZXIgZXh0ZW5kcyBEcmFmdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29udGVudDogc3RyaW5nW10pIHtcclxuICAgICAgICBzdXBlcih0aXRsZSwgYXV0aG9yLCBjb250ZW50KVxyXG4gICAgfVxyXG5cclxuICAgIGdldENoYXJhY3RlcnNDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcblxyXG4gICAgICAgIGNvdW50ICs9IHRoaXMuZ2V0VGl0bGUoKS5sZW5ndGhcclxuICAgICAgICBjb3VudCArPSB0aGlzLmdldEF1dGhvcigpLmxlbmd0aFxyXG4gICAgICAgIHRoaXMuZ2V0Q29udGVudCgpLmZvckVhY2goaXRlbSA9PiBjb3VudCArPSBpdGVtLmxlbmd0aCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNvdW50XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRGlzcGxheSBmcm9tIFwiLi9EaXNwbGF5XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWZ0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGl0bGU6IHN0cmluZywgcHJpdmF0ZSBhdXRob3I6IHN0cmluZywgcHJpdmF0ZSBjb250ZW50OiBzdHJpbmdbXSkge31cclxuXHJcbiAgICBnZXRUaXRsZSgpIHsgcmV0dXJuIHRoaXMudGl0bGUgfVxyXG4gICAgZ2V0QXV0aG9yKCkgeyByZXR1cm4gdGhpcy5hdXRob3IgfVxyXG4gICAgZ2V0Q29udGVudCgpIHsgcmV0dXJuIHRoaXMuY29udGVudCB9XHJcblxyXG4gICAgcHJpbnQoZGlzcGxheTogRGlzcGxheSk6IHZvaWQge1xyXG4gICAgICAgIGRpc3BsYXkudGl0bGUodGhpcylcclxuICAgICAgICBkaXNwbGF5LmF1dGhvcih0aGlzKVxyXG4gICAgICAgIGRpc3BsYXkuY29udGVudCh0aGlzKVxyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcclxuXHJcbi8qXHJcbkJyaWdl7Yyo7YS07J2AIOq4sOuKpSDqs4TsuLXqs7wg67aE66asIOqzhOy4teydhCDrtoTrpqztlZjsl6wg7Iuc7Iqk7YWc7J2YIO2ZleyepeyEseqzvCDsnKDsp4Drs7TsiJjshLHsnYQg64aS7J2064qUIO2MqO2EtC5cclxu7IOI66Gc7Jq0IOq4sOuKpeydhCDstpTqsIDtlaAg65WM64qUIOq4sOuKpSDqs4TsuLXsnYQg7ZmV7J6l7ZWY6rOgIOyDiOuhnOyatCDqtaztmITsnYQg7LaU6rCA7ZWgIOuVjOuKlCDqtaztmIQg6rOE7Li17J2EIO2Zleyepe2VqOycvOuhnOyNqCDrs7XsnqHrj4Trpbwg7Zqo6rO87KCB7Jy866GcIOuCruy2nCDsiJgg7J6I7J2MLiBcclxu6riw64qlIOqzhOy4teqzvCDqtaztmIQg6rOE7Li17J2AIOyEnOuhnCDsnITsnoTsnYQg7Ya17ZW0IO2GteyLoC5cclxu7YG0656Y7Iqk65Ok6rCE7J2YIOq0gOqzhOulvCDri6jsiJztlZjqsowg66eM65Ok7Ja07KO864qU6rKMIOyii+ydgOuNsCwgQnJpZGdl7Yyo7YS07J2AIOq4sOuKpSDqs4TsuLXqs7wg6rWs7ZiEIOqzhOy4teydhCDrtoTrpqztlbTshJwg7YG0656Y7Iqk65OkIOqwhOydmCDqtIDqs4Trpbwg64uo7Iic7ZWY6rKMIOycoOyngOyLnOy8nOykjC5cclxuKi9cclxuXHJcbmltcG9ydCBDYXB0aW9uRGlzcGxheSBmcm9tIFwiLi9DYXB0aW9uRGlzcGxheVwiO1xyXG5pbXBvcnQgQ2hhcmFjdGVyc0NvdW50ZXIgZnJvbSBcIi4vQ2hhcmFjdGVyc0NvdW50XCI7XHJcbmltcG9ydCBEcmFmdCBmcm9tIFwiLi9EcmFmdFwiO1xyXG5pbXBvcnQgU2ltcGxlRGlzcGxheSBmcm9tIFwiLi9TaW1wbGVEaXNwbGF5XCI7XHJcblxyXG5cclxuY29uc3QgdGl0bGUgPSBcIuuzteybkOuQnCDsp4DqtaxcIjtcclxuY29uc3QgYXV0aG9yID0gXCLquYDtmJXspIBcIjtcclxuY29uc3QgY29udGVudCA9IFtcclxuICAgIFwi7ZSM65287Iqk7YuxIOyCrOyaqeydmCDqsJDshozsmYBcIixcclxuICAgIFwi67CU64ukIOyDneusvCDslrTtmo3rn4kg6rCQ7IaM66GcIOyduO2VmOyXrFwiLFxyXG4gICAgXCLsp4DqtazripQg67O17JuQ65CY7JeI64ukLlwiXHJcbl1cclxuXHJcbi8vIGNvbnN0IGRyYWZ0ID0gbmV3IERyYWZ0KHRpdGxlLCBhdXRob3IsIGNvbnRlbnQpO1xyXG5jb25zdCBkcmFmdCA9IG5ldyBDaGFyYWN0ZXJzQ291bnRlcih0aXRsZSwgYXV0aG9yLCBjb250ZW50KTtcclxuXHJcbi8vIGNvbnN0IGRpc3BsYXkgPSBuZXcgU2ltcGxlRGlzcGxheSgpO1xyXG5jb25zdCBkaXNwbGF5ID0gbmV3IENhcHRpb25EaXNwbGF5KCk7XHJcbmRyYWZ0LnByaW50KGRpc3BsYXkpO1xyXG5cclxuY29uc29sZS5sb2coYOyghOyytCDrrLjsnpDsiJg6ICR7ZHJhZnQuZ2V0Q2hhcmFjdGVyc0NvdW50KCl9YCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=