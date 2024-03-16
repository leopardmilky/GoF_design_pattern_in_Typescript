/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/prototype/Group.ts":
/*!********************************!*\
  !*** ./src/prototype/Group.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Group = /** @class */ (function () {
    function Group() {
        this.shapes = new Array();
    }
    Group.prototype.add = function (shape) {
        this.shapes.push(shape.copy());
        return this;
    };
    Group.prototype.copy = function () {
        var result = new Group();
        this.shapes.forEach(function (shape) {
            result.add(shape);
        });
        return result;
    };
    Group.prototype.draw = function (canvas) {
        this.shapes.forEach(function (shape) {
            shape.draw(canvas);
        });
        return this;
    };
    Group.prototype.moveOffset = function (dx, dy) {
        this.shapes.forEach(function (shape) {
            shape.moveOffset(dx, dy);
        });
        return this;
    };
    return Group;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Group);


/***/ }),

/***/ "./src/prototype/Line.ts":
/*!*******************************!*\
  !*** ./src/prototype/Line.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Line = /** @class */ (function () {
    function Line(pt1, pt2) {
        this.pt1 = pt1.copy();
        this.pt2 = pt2.copy();
    }
    Line.prototype.setPt1 = function (pt) {
        this.pt1 = pt.copy();
        return this;
    };
    Line.prototype.setPt2 = function (pt) {
        this.pt2 = pt.copy();
        return this;
    };
    Line.prototype.getPt1 = function () {
        return this.pt1;
    };
    Line.prototype.getPt2 = function () {
        return this.pt2;
    };
    Line.prototype.copy = function () {
        var result = new Line(this.pt1, this.pt2);
        return result;
    };
    Line.prototype.draw = function (canvas) {
        var context = canvas.getContext("2d");
        context.beginPath();
        context.moveTo(this.pt1.getX(), this.pt1.getY());
        context.lineTo(this.pt2.getX(), this.pt2.getY());
        context.stroke();
        return this;
    };
    Line.prototype.moveOffset = function (dx, dy) {
        this.pt1.moveOffset(dx, dy);
        this.pt2.moveOffset(dx, dy);
        return this;
    };
    return Line;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);


/***/ }),

/***/ "./src/prototype/Point.ts":
/*!********************************!*\
  !*** ./src/prototype/Point.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setX = function (v) {
        this.x = v;
        return this;
    };
    Point.prototype.setY = function (v) {
        this.y = v;
        return this;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.copy = function () {
        var result = new Point(this.x, this.y);
        return result;
    };
    Point.prototype.draw = function (canvas) {
        var context = canvas.getContext("2d");
        context.beginPath();
        context.arc(this.x, this.y, 4, 0, 2 * Math.PI);
        context.fill();
        return this;
    };
    Point.prototype.moveOffset = function (dx, dy) {
        this.x += dx;
        this.y += dy;
        return this;
    };
    return Point;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Point);


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
  !*** ./src/prototype/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Group */ "./src/prototype/Group.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ "./src/prototype/Line.ts");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Point */ "./src/prototype/Point.ts");



/*
Prototype패턴은 객체를 클래스 이름으로 생성하지 않고 실행중에 생성된 객체를 통해 동일한 상태값으로 새로운 객체를 생성하는 패턴.
원본 객체에 대한 깊은 복사(Deep Copy)를 사용하여 변경에대해 서로 다른 쪽에 영향을 주지 않음.
*/
var domCanvas = document.querySelector("canvas");
var pt1 = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"](100, 100);
// pt1.draw(domCanvas);
var pt2 = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"](200, 100);
// pt2.draw(domCanvas);
var line1 = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](pt1, pt2);
// line1.draw(domCanvas);
var pt3 = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"](200, 200);
var pt4 = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"](100, 200);
var line2 = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](pt2, pt3);
var line3 = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](pt3, pt4);
var line4 = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](pt4, pt1);
var rect = new _Group__WEBPACK_IMPORTED_MODULE_0__["default"]();
rect.add(line1).add(line2).add(line3).add(line4);
var cloneRect = rect.copy();
cloneRect.moveOffset(200, 200);
rect.moveOffset(-100, -100);
rect.draw(domCanvas);
cloneRect.draw(domCanvas);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqQyxJQUFNLEtBQUssR0FBRyxJQUFJLDZDQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRWpDLElBQU0sSUFBSSxHQUFHLElBQUksOENBQUssRUFBRSxDQUFDO0FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFHakQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlCLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRS9CLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUU1QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3JCLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy9wcm90b3R5cGUvR3JvdXAudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvcHJvdG90eXBlL0xpbmUudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvcHJvdG90eXBlL1BvaW50LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvcHJvdG90eXBlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm90b3R5cGUgZnJvbSBcIi4vUHJvdG90eXBlXCI7XHJcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXAgaW1wbGVtZW50cyBQcm90b3R5cGUsIFNoYXBlIHtcclxuICAgIHByaXZhdGUgc2hhcGVzID0gbmV3IEFycmF5PFNoYXBlfFByb3RvdHlwZT4oKVxyXG5cclxuICAgIGFkZChzaGFwZTogU2hhcGV8UHJvdG90eXBlKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5zaGFwZXMucHVzaCgoc2hhcGUgYXMgUHJvdG90eXBlKS5jb3B5KCkpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KCk6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBHcm91cCgpXHJcblxyXG4gICAgICAgIHRoaXMuc2hhcGVzLmZvckVhY2goc2hhcGUgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQuYWRkKHNoYXBlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQgYXMgdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuc2hhcGVzLmZvckVhY2goc2hhcGUgPT4ge1xyXG4gICAgICAgICAgICAoc2hhcGUgYXMgU2hhcGUpLmRyYXcoY2FudmFzKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZU9mZnNldChkeDogbnVtYmVyLCBkeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5zaGFwZXMuZm9yRWFjaChzaGFwZSA9PiB7XHJcbiAgICAgICAgICAgIChzaGFwZSBhcyBTaGFwZSkubW92ZU9mZnNldChkeCwgZHkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxufSIsImltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgUHJvdG90eXBlIGZyb20gXCIuL1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUgaW1wbGVtZW50cyBQcm90b3R5cGUsIFNoYXBlIHtcclxuICAgIHByaXZhdGUgcHQxOiBQb2ludFxyXG4gICAgcHJpdmF0ZSBwdDI6IFBvaW50XHJcblxyXG4gICAgY29uc3RydWN0b3IocHQxOiBQb2ludCwgcHQyOiBQb2ludCkge1xyXG4gICAgICAgIHRoaXMucHQxID0gcHQxLmNvcHkoKVxyXG4gICAgICAgIHRoaXMucHQyID0gcHQyLmNvcHkoKVxyXG4gICAgfVxyXG5cclxuICAgIHNldFB0MShwdDogUG9pbnQpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnB0MSA9IHB0LmNvcHkoKVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHQyKHB0OiBQb2ludCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMucHQyID0gcHQuY29weSgpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBnZXRQdDEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHQxXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHQyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB0MlxyXG4gICAgfVxyXG5cclxuICAgIGNvcHkoKTp0aGlzIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGluZSh0aGlzLnB0MSwgdGhpcy5wdDIpXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCBhcyB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb250ZXh0Lm1vdmVUbyh0aGlzLnB0MS5nZXRYKCksIHRoaXMucHQxLmdldFkoKSk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8odGhpcy5wdDIuZ2V0WCgpLCB0aGlzLnB0Mi5nZXRZKCkpO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlT2Zmc2V0KGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnB0MS5tb3ZlT2Zmc2V0KGR4LCBkeSk7XHJcbiAgICAgICAgdGhpcy5wdDIubW92ZU9mZnNldChkeCwgZHkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUHJvdG90eXBlIGZyb20gXCIuL1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IGltcGxlbWVudHMgUHJvdG90eXBlLCBTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHg6IG51bWJlciwgcHJpdmF0ZSB5OiBudW1iZXIpIHt9XHJcblxyXG4gICAgc2V0WCh2OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB2XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBzZXRZKHY6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueSA9IHZcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIGdldFgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueFxyXG4gICAgfVxyXG5cclxuICAgIGdldFkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueVxyXG4gICAgfVxyXG5cclxuICAgIGNvcHkoKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0IGFzIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQuYXJjKHRoaXMueCwgdGhpcy55LCA0LCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZU9mZnNldChkeDogbnVtYmVyLCBkeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ICs9IGR4O1xyXG4gICAgICAgIHRoaXMueSArPSBkeTtcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR3JvdXAgZnJvbSBcIi4vR3JvdXBcIjtcclxuaW1wb3J0IExpbmUgZnJvbSBcIi4vTGluZVwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuXHJcbi8qXHJcblByb3RvdHlwZe2MqO2EtOydgCDqsJ3ssrTrpbwg7YG0656Y7IqkIOydtOumhOycvOuhnCDsg53shLHtlZjsp4Ag7JWK6rOgIOyLpO2WieykkeyXkCDsg53shLHrkJwg6rCd7LK066W8IO2Gte2VtCDrj5nsnbztlZwg7IOB7YOc6rCS7Jy866GcIOyDiOuhnOyatCDqsJ3ssrTrpbwg7IOd7ISx7ZWY64qUIO2MqO2EtC5cclxu7JuQ67O4IOqwneyytOyXkCDrjIDtlZwg6rmK7J2AIOuzteyCrChEZWVwIENvcHkp66W8IOyCrOyaqe2VmOyXrCDrs4Dqsr3sl5DrjIDtlbQg7ISc66GcIOuLpOuluCDsqr3sl5Ag7JiB7Zal7J2EIOyjvOyngCDslYrsnYwuXHJcbiovXHJcblxyXG5jb25zdCBkb21DYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpO1xyXG5cclxuY29uc3QgcHQxID0gbmV3IFBvaW50KDEwMCwgMTAwKTtcclxuLy8gcHQxLmRyYXcoZG9tQ2FudmFzKTtcclxuXHJcbmNvbnN0IHB0MiA9IG5ldyBQb2ludCgyMDAsIDEwMCk7XHJcbi8vIHB0Mi5kcmF3KGRvbUNhbnZhcyk7XHJcblxyXG5jb25zdCBsaW5lMSA9IG5ldyBMaW5lKHB0MSwgcHQyKTtcclxuLy8gbGluZTEuZHJhdyhkb21DYW52YXMpO1xyXG5cclxuY29uc3QgcHQzID0gbmV3IFBvaW50KDIwMCwgMjAwKTtcclxuY29uc3QgcHQ0ID0gbmV3IFBvaW50KDEwMCwgMjAwKTtcclxuXHJcbmNvbnN0IGxpbmUyID0gbmV3IExpbmUocHQyLCBwdDMpO1xyXG5jb25zdCBsaW5lMyA9IG5ldyBMaW5lKHB0MywgcHQ0KTtcclxuY29uc3QgbGluZTQgPSBuZXcgTGluZShwdDQsIHB0MSk7XHJcblxyXG5jb25zdCByZWN0ID0gbmV3IEdyb3VwKCk7XHJcbnJlY3QuYWRkKGxpbmUxKS5hZGQobGluZTIpLmFkZChsaW5lMykuYWRkKGxpbmU0KTtcclxuXHJcblxyXG5jb25zdCBjbG9uZVJlY3QgPSByZWN0LmNvcHkoKTtcclxuY2xvbmVSZWN0Lm1vdmVPZmZzZXQoMjAwLCAyMDApO1xyXG5cclxucmVjdC5tb3ZlT2Zmc2V0KC0xMDAsIC0xMDApO1xyXG5cclxucmVjdC5kcmF3KGRvbUNhbnZhcyk7XHJcbmNsb25lUmVjdC5kcmF3KGRvbUNhbnZhcyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9