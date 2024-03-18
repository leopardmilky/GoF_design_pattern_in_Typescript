/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/visitor/AvgVisitor.ts":
/*!***********************************!*\
  !*** ./src/visitor/AvgVisitor.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/visitor/Item.ts");

var AvgVisitor = /** @class */ (function () {
    function AvgVisitor() {
        this.sum = 0;
        this.count = 0;
    }
    AvgVisitor.prototype.getValue = function () {
        return this.sum / this.count;
    };
    AvgVisitor.prototype.visit = function (unit) {
        if (unit instanceof _Item__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this.sum += unit.getValue();
            this.count++;
        }
        else {
            unit.accept(this);
        }
    };
    return AvgVisitor;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AvgVisitor);


/***/ }),

/***/ "./src/visitor/Item.ts":
/*!*****************************!*\
  !*** ./src/visitor/Item.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item(value) {
        this.value = value;
    }
    Item.prototype.getValue = function () {
        return this.value;
    };
    Item.prototype.accept = function (visitor) {
        visitor.visit(this);
    };
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ }),

/***/ "./src/visitor/ItemList.ts":
/*!*********************************!*\
  !*** ./src/visitor/ItemList.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ItemList = /** @class */ (function () {
    function ItemList() {
        this.list = new Array();
    }
    ItemList.prototype.add = function (unit) {
        this.list.push(unit);
    };
    ItemList.prototype.accept = function (visitor) {
        this.list.forEach(function (unit) { return visitor.visit(unit); });
    };
    return ItemList;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemList);


/***/ }),

/***/ "./src/visitor/SumVisitor.ts":
/*!***********************************!*\
  !*** ./src/visitor/SumVisitor.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/visitor/Item.ts");

var SumVisitor = /** @class */ (function () {
    function SumVisitor() {
        this.sum = 0;
    }
    SumVisitor.prototype.getValue = function () {
        return this.sum;
    };
    SumVisitor.prototype.visit = function (unit) {
        if (unit instanceof _Item__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this.sum += unit.getValue();
        }
        else {
            unit.accept(this);
        }
    };
    return SumVisitor;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SumVisitor);


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
/*!******************************!*\
  !*** ./src/visitor/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AvgVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvgVisitor */ "./src/visitor/AvgVisitor.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./src/visitor/Item.ts");
/* harmony import */ var _ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemList */ "./src/visitor/ItemList.ts");
/* harmony import */ var _SumVisitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SumVisitor */ "./src/visitor/SumVisitor.ts");




/*
Visitor패턴은 데이터 구조와 데이터 처리를 분리해 주는 패턴.
데이터에 대한 새로운 처리가 필요할 때, 데이터 처리에 대한 새로운 클래스를 추가하는 것만으로도 기능 확장이 가능.
효과적인 데이터 처리를 위해서 데이터 구조를 Composite패턴으로 표현하여 단일 데이터와 집합 데이터를 효과적으로 처리할 수 있도록 함.
*/
var list1 = new _ItemList__WEBPACK_IMPORTED_MODULE_2__["default"]();
list1.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](10));
list1.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](20));
list1.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](40));
var list2 = new _ItemList__WEBPACK_IMPORTED_MODULE_2__["default"]();
list2.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](30));
list2.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](40));
list1.add(list2);
var list3 = new _ItemList__WEBPACK_IMPORTED_MODULE_2__["default"]();
list3.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](25));
list2.add(list3);
var sum = new _SumVisitor__WEBPACK_IMPORTED_MODULE_3__["default"]();
list1.accept(sum);
console.log("\uD569\uACC4: ".concat(sum.getValue()));
var avg = new _AvgVisitor__WEBPACK_IMPORTED_MODULE_0__["default"]();
list1.accept(avg);
console.log("\uD3C9\uADE0: ".concat(avg.getValue()));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksNkNBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXhCLElBQU0sS0FBSyxHQUFHLElBQUksaURBQVEsRUFBRSxDQUFDO0FBQzdCLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSw2Q0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLDZDQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRWpCLElBQU0sS0FBSyxHQUFHLElBQUksaURBQVEsRUFBRSxDQUFDO0FBQzdCLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSw2Q0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVqQixJQUFNLEdBQUcsR0FBRyxJQUFJLG1EQUFVLEVBQUUsQ0FBQztBQUM3QixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFFLENBQUMsQ0FBQztBQUVyQyxJQUFNLEdBQUcsR0FBRyxJQUFJLG1EQUFVLEVBQUUsQ0FBQztBQUM3QixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL3Zpc2l0b3IvQXZnVmlzaXRvci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy92aXNpdG9yL0l0ZW0udHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvdmlzaXRvci9JdGVtTGlzdC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy92aXNpdG9yL1N1bVZpc2l0b3IudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy92aXNpdG9yL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcclxuaW1wb3J0IFVuaXQgZnJvbSBcIi4vVW5pdFwiO1xyXG5pbXBvcnQgVmlzaXRvciBmcm9tIFwiLi9WaXNpdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmdWaXNpdG9yIGltcGxlbWVudHMgVmlzaXRvciB7XHJcbiAgICBwcml2YXRlIHN1bSA9IDA7XHJcbiAgICBwcml2YXRlIGNvdW50ID0gMDtcclxuXHJcbiAgICBnZXRWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdW0gLyB0aGlzLmNvdW50XHJcbiAgICB9XHJcblxyXG4gICAgdmlzaXQodW5pdDogVW5pdCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHVuaXQgaW5zdGFuY2VvZiBJdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VtICs9IHVuaXQuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVuaXQuYWNjZXB0KHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBVbml0IGZyb20gXCIuL1VuaXRcIjtcclxuaW1wb3J0IFZpc2l0b3IgZnJvbSBcIi4vVmlzaXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSBpbXBsZW1lbnRzIFVuaXQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWx1ZTogbnVtYmVyKSB7fVxyXG5cclxuICAgIGdldFZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgYWNjZXB0KHZpc2l0b3I6IFZpc2l0b3IpOiB2b2lkIHtcclxuICAgICAgICB2aXNpdG9yLnZpc2l0KHRoaXMpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFVuaXQgZnJvbSBcIi4vVW5pdFwiO1xyXG5pbXBvcnQgVmlzaXRvciBmcm9tIFwiLi9WaXNpdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtTGlzdCBpbXBsZW1lbnRzIFVuaXQge1xyXG4gICAgcHJpdmF0ZSBsaXN0ID0gbmV3IEFycmF5PFVuaXQ+KClcclxuXHJcbiAgICBhZGQodW5pdDogVW5pdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGlzdC5wdXNoKHVuaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjY2VwdCh2aXNpdG9yOiBWaXNpdG9yKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2godW5pdCA9PiB2aXNpdG9yLnZpc2l0KHVuaXQpKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xyXG5pbXBvcnQgVW5pdCBmcm9tIFwiLi9Vbml0XCI7XHJcbmltcG9ydCBWaXNpdG9yIGZyb20gXCIuL1Zpc2l0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1bVZpc2l0b3IgaW1wbGVtZW50cyBWaXNpdG9yIHtcclxuICAgIHByaXZhdGUgc3VtID0gMFxyXG5cclxuICAgIGdldFZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN1bVxyXG4gICAgfVxyXG5cclxuICAgIHZpc2l0KHVuaXQ6IFVuaXQpOiB2b2lkIHtcclxuICAgICAgICBpZih1bml0IGluc3RhbmNlb2YgSXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1bSArPSB1bml0LmdldFZhbHVlKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1bml0LmFjY2VwdCh0aGlzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEF2Z1Zpc2l0b3IgZnJvbSBcIi4vQXZnVmlzaXRvclwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XHJcbmltcG9ydCBJdGVtTGlzdCBmcm9tIFwiLi9JdGVtTGlzdFwiO1xyXG5pbXBvcnQgU3VtVmlzaXRvciBmcm9tIFwiLi9TdW1WaXNpdG9yXCI7XHJcblxyXG4vKlxyXG5WaXNpdG9y7Yyo7YS07J2AIOuNsOydtO2EsCDqtazsobDsmYAg642w7J207YSwIOyymOumrOulvCDrtoTrpqztlbQg7KO864qUIO2MqO2EtC5cclxu642w7J207YSw7JeQIOuMgO2VnCDsg4jroZzsmrQg7LKY66as6rCAIO2VhOyalO2VoCDrlYwsIOuNsOydtO2EsCDsspjrpqzsl5Ag64yA7ZWcIOyDiOuhnOyatCDtgbTrnpjsiqTrpbwg7LaU6rCA7ZWY64qUIOqyg+unjOycvOuhnOuPhCDquLDriqUg7ZmV7J6l7J20IOqwgOuKpS5cclxu7Zqo6rO87KCB7J24IOuNsOydtO2EsCDsspjrpqzrpbwg7JyE7ZW07IScIOuNsOydtO2EsCDqtazsobDrpbwgQ29tcG9zaXRl7Yyo7YS07Jy866GcIO2RnO2YhO2VmOyXrCDri6jsnbwg642w7J207YSw7JmAIOynke2VqSDrjbDsnbTthLDrpbwg7Zqo6rO87KCB7Jy866GcIOyymOumrO2VoCDsiJgg7J6I64+E66GdIO2VqC5cclxuKi9cclxuXHJcbmNvbnN0IGxpc3QxID0gbmV3IEl0ZW1MaXN0KCk7XHJcbmxpc3QxLmFkZChuZXcgSXRlbSgxMCkpO1xyXG5saXN0MS5hZGQobmV3IEl0ZW0oMjApKTtcclxubGlzdDEuYWRkKG5ldyBJdGVtKDQwKSk7XHJcblxyXG5jb25zdCBsaXN0MiA9IG5ldyBJdGVtTGlzdCgpO1xyXG5saXN0Mi5hZGQobmV3IEl0ZW0oMzApKTtcclxubGlzdDIuYWRkKG5ldyBJdGVtKDQwKSk7XHJcbmxpc3QxLmFkZChsaXN0Mik7XHJcblxyXG5jb25zdCBsaXN0MyA9IG5ldyBJdGVtTGlzdCgpO1xyXG5saXN0My5hZGQobmV3IEl0ZW0oMjUpKTtcclxubGlzdDIuYWRkKGxpc3QzKTtcclxuXHJcbmNvbnN0IHN1bSA9IG5ldyBTdW1WaXNpdG9yKCk7XHJcbmxpc3QxLmFjY2VwdChzdW0pO1xyXG5jb25zb2xlLmxvZyhg7ZWp6rOEOiAke3N1bS5nZXRWYWx1ZSgpfWApO1xyXG5cclxuY29uc3QgYXZnID0gbmV3IEF2Z1Zpc2l0b3IoKTtcclxubGlzdDEuYWNjZXB0KGF2Zyk7XHJcbmNvbnNvbGUubG9nKGDtj4nqt6A6ICR7YXZnLmdldFZhbHVlKCl9YCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9