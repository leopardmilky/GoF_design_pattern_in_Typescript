/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mediator/CoolAircon.ts":
/*!************************************!*\
  !*** ./src/mediator/CoolAircon.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var CoolAircon = /** @class */ (function (_super) {
    __extends(CoolAircon, _super);
    function CoolAircon(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bOff = true;
        return _this;
    }
    CoolAircon.prototype.on = function () {
        if (!this.bOff)
            return;
        this.bOff = false;
        this.mediator.participantChanged(this);
    };
    CoolAircon.prototype.off = function () {
        if (this.bOff)
            return;
        this.bOff = true;
        this.mediator.participantChanged(this);
    };
    CoolAircon.prototype.isRunning = function () {
        return !this.bOff;
    };
    CoolAircon.prototype.displayState = function (dom) {
        dom.innerHTML = this.bOff ? "에어컨 꺼짐" : "에어컨 가동중";
        if (this.isRunning())
            dom.classList.add("hilighting");
        else
            dom.classList.remove("hilighting");
    };
    return CoolAircon;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoolAircon);


/***/ }),

/***/ "./src/mediator/Door.ts":
/*!******************************!*\
  !*** ./src/mediator/Door.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bClosed = true;
        return _this;
    }
    Door.prototype.open = function () {
        if (!this.bClosed)
            return;
        this.bClosed = false;
        this.mediator.participantChanged(this);
    };
    Door.prototype.close = function () {
        if (this.bClosed)
            return;
        this.bClosed = true;
        this.mediator.participantChanged(this);
    };
    Door.prototype.isClosed = function () {
        return this.bClosed;
    };
    Door.prototype.displayState = function (dom) {
        dom.innerHTML = this.bClosed ? "문 CLOSE" : " 문 OPEN";
        if (this.bClosed)
            dom.classList.remove("hilighting");
        else
            dom.classList.add("hilighting");
    };
    return Door;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Door);


/***/ }),

/***/ "./src/mediator/HeatBoiler.ts":
/*!************************************!*\
  !*** ./src/mediator/HeatBoiler.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var HeatBoiler = /** @class */ (function (_super) {
    __extends(HeatBoiler, _super);
    function HeatBoiler(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bOff = true;
        return _this;
    }
    HeatBoiler.prototype.on = function () {
        if (!this.bOff)
            return;
        this.bOff = false;
        this.mediator.participantChanged(this);
    };
    HeatBoiler.prototype.off = function () {
        if (this.bOff)
            return;
        this.bOff = true;
        this.mediator.participantChanged(this);
    };
    HeatBoiler.prototype.isRunning = function () {
        return !this.bOff;
    };
    HeatBoiler.prototype.displayState = function (dom) {
        dom.innerHTML = this.bOff ? "보일러 꺼짐" : "보일러 가동중";
        if (this.isRunning())
            dom.classList.add("hilighting");
        else
            dom.classList.remove("hilighting");
    };
    return HeatBoiler;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeatBoiler);


/***/ }),

/***/ "./src/mediator/Participant.ts":
/*!*************************************!*\
  !*** ./src/mediator/Participant.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Participant = /** @class */ (function () {
    function Participant(mediator) {
        this.mediator = mediator;
    }
    return Participant;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Participant);


/***/ }),

/***/ "./src/mediator/SmartHome.ts":
/*!***********************************!*\
  !*** ./src/mediator/SmartHome.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CoolAircon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoolAircon */ "./src/mediator/CoolAircon.ts");
/* harmony import */ var _Door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Door */ "./src/mediator/Door.ts");
/* harmony import */ var _HeatBoiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeatBoiler */ "./src/mediator/HeatBoiler.ts");
/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Window */ "./src/mediator/Window.ts");




var SmartHome = /** @class */ (function () {
    function SmartHome() {
        this.door = new _Door__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.window = new _Window__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.aircon = new _CoolAircon__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        this.boiler = new _HeatBoiler__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    }
    SmartHome.prototype.participantChanged = function (participant) {
        if (participant === this.door && !this.door.isClosed()) {
            this.aircon.off();
            this.boiler.off();
        }
        if (participant === this.window && !this.window.isClosed()) {
            this.aircon.off();
            this.boiler.off();
        }
        if (participant === this.aircon && this.aircon.isRunning()) {
            this.boiler.off();
            this.window.close();
            this.door.close();
        }
        if (participant === this.boiler && this.boiler.isRunning()) {
            this.aircon.off();
            this.window.close();
            this.door.close();
        }
    };
    SmartHome.prototype.display = function () {
        var domDoor = document.querySelector(".door");
        var domWindow = document.querySelector(".window");
        var domHeatBoiler = document.querySelector(".heatboiler");
        var domCoolAircon = document.querySelector(".coolaircon");
        this.door.displayState(domDoor);
        this.window.displayState(domWindow);
        this.boiler.displayState(domHeatBoiler);
        this.aircon.displayState(domCoolAircon);
    };
    SmartHome.prototype.install = function () {
        var _this = this;
        var domDoor = document.querySelector(".door");
        var domWindow = document.querySelector(".window");
        var domHeatBoiler = document.querySelector(".heatboiler");
        var domCoolAircon = document.querySelector(".coolaircon");
        domDoor.addEventListener("click", function () {
            _this.door.isClosed() ? _this.door.open() : _this.door.close();
            _this.display();
        });
        domWindow.addEventListener("click", function () {
            _this.window.isClosed() ? _this.window.open() : _this.window.close();
            _this.display();
        });
        domHeatBoiler.addEventListener("click", function () {
            _this.boiler.isRunning() ? _this.boiler.off() : _this.boiler.on();
            _this.display();
        });
        domCoolAircon.addEventListener("click", function () {
            _this.aircon.isRunning() ? _this.aircon.off() : _this.aircon.on();
            _this.display();
        });
        this.display();
    };
    return SmartHome;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartHome);


/***/ }),

/***/ "./src/mediator/Window.ts":
/*!********************************!*\
  !*** ./src/mediator/Window.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var Window = /** @class */ (function (_super) {
    __extends(Window, _super);
    function Window(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bClosed = true;
        return _this;
    }
    Window.prototype.open = function () {
        if (!this.bClosed)
            return;
        this.bClosed = false;
        this.mediator.participantChanged(this);
    };
    Window.prototype.close = function () {
        if (this.bClosed)
            return;
        this.bClosed = true;
        this.mediator.participantChanged(this);
    };
    Window.prototype.isClosed = function () {
        return this.bClosed;
    };
    Window.prototype.displayState = function (dom) {
        dom.innerHTML = this.bClosed ? "창 CLOSE" : "창 OPEN";
        if (this.bClosed)
            dom.classList.remove("hilighting");
        else
            dom.classList.add("hilighting");
    };
    return Window;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Window);


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
/*!*******************************!*\
  !*** ./src/mediator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SmartHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmartHome */ "./src/mediator/SmartHome.ts");

var home = new _SmartHome__WEBPACK_IMPORTED_MODULE_0__["default"]();
home.install();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQyxPQUFPO0lBQ3ZCLENBQUM7SUFFRCw2QkFBWSxHQUFaLFVBQWEsR0FBZ0I7UUFDekIsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVE7UUFFbkQsSUFBRyxJQUFJLENBQUMsT0FBTztZQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQzs7WUFDOUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQ3hDLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxDQTdCbUMsb0RBQVcsR0E2QjlDOzs7Ozs7OztVQ2hDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9DO0FBRXBDLElBQU0sSUFBSSxHQUFHLElBQUksa0RBQVMsRUFBRTtBQUM1QixJQUFJLENBQUMsT0FBTyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvbWVkaWF0b3IvQ29vbEFpcmNvbi50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy9tZWRpYXRvci9Eb29yLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL21lZGlhdG9yL0hlYXRCb2lsZXIudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvbWVkaWF0b3IvUGFydGljaXBhbnQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvbWVkaWF0b3IvU21hcnRIb21lLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL21lZGlhdG9yL1dpbmRvdy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL21lZGlhdG9yL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYXRvciBmcm9tIFwiLi9NZWRpYXRvclwiO1xyXG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSBcIi4vUGFydGljaXBhbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2xBaXJjb24gZXh0ZW5kcyBQYXJ0aWNpcGFudCB7XHJcbiAgICBwcml2YXRlIGJPZmYgPSB0cnVlXHJcblxyXG4gICAgY29uc3RydWN0b3IobWVkaWF0b3I6IE1lZGlhdG9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVkaWF0b3IpXHJcbiAgICB9XHJcblxyXG4gICAgb24oKTogdm9pZCB7XHJcbiAgICAgICAgaWYoIXRoaXMuYk9mZikgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5iT2ZmID0gZmFsc2VcclxuICAgICAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9mZigpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLmJPZmYpIHJldHVyblxyXG4gICAgICAgIHRoaXMuYk9mZiA9IHRydWVcclxuICAgICAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGlzUnVubmluZygpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuYk9mZlxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlTdGF0ZShkb206IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgZG9tLmlubmVySFRNTCA9IHRoaXMuYk9mZiA/IFwi7JeQ7Ja07LuoIOq6vOynkFwiIDogXCLsl5DslrTsu6gg6rCA64+Z7KSRXCJcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc1J1bm5pbmcoKSkgZG9tLmNsYXNzTGlzdC5hZGQoXCJoaWxpZ2h0aW5nXCIpO1xyXG4gICAgICAgIGVsc2UgZG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWxpZ2h0aW5nXCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IE1lZGlhdG9yIGZyb20gXCIuL01lZGlhdG9yXCI7XHJcbmltcG9ydCBQYXJ0aWNpcGFudCBmcm9tIFwiLi9QYXJ0aWNpcGFudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9vciBleHRlbmRzIFBhcnRpY2lwYW50IHtcclxuICAgIHByaXZhdGUgYkNsb3NlZCA9IHRydWVcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogTWVkaWF0b3IpIHtcclxuICAgICAgICBzdXBlcihtZWRpYXRvcilcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKCF0aGlzLmJDbG9zZWQpIHJldHVyblxyXG4gICAgICAgIHRoaXMuYkNsb3NlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLmJDbG9zZWQpIHJldHVyblxyXG4gICAgICAgIHRoaXMuYkNsb3NlZCA9IHRydWVcclxuICAgICAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGlzQ2xvc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJDbG9zZWRcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGRvbS5pbm5lckhUTUwgPSB0aGlzLmJDbG9zZWQgPyBcIuusuCBDTE9TRVwiIDogXCIg66y4IE9QRU5cIlxyXG5cclxuICAgICAgICBpZih0aGlzLmJDbG9zZWQpIGRvbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlsaWdodGluZ1wiKVxyXG4gICAgICAgIGVsc2UgZG9tLmNsYXNzTGlzdC5hZGQoXCJoaWxpZ2h0aW5nXCIpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTWVkaWF0b3IgZnJvbSBcIi4vTWVkaWF0b3JcIjtcclxuaW1wb3J0IFBhcnRpY2lwYW50IGZyb20gXCIuL1BhcnRpY2lwYW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWF0Qm9pbGVyIGV4dGVuZHMgUGFydGljaXBhbnQge1xyXG4gICAgcHJpdmF0ZSBiT2ZmID0gdHJ1ZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1lZGlhdG9yOiBNZWRpYXRvcikge1xyXG4gICAgICAgIHN1cGVyKG1lZGlhdG9yKVxyXG4gICAgfVxyXG5cclxuICAgIG9uKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKCF0aGlzLmJPZmYpIHJldHVyblxyXG4gICAgICAgIHRoaXMuYk9mZiA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBvZmYoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5iT2ZmKSByZXR1cm5cclxuICAgICAgICB0aGlzLmJPZmYgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBpc1J1bm5pbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmJPZmZcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGRvbS5pbm5lckhUTUwgPSB0aGlzLmJPZmYgPyBcIuuztOydvOufrCDqurzsp5BcIiA6IFwi67O07J2865+sIOqwgOuPmeykkVwiXHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNSdW5uaW5nKCkpIGRvbS5jbGFzc0xpc3QuYWRkKFwiaGlsaWdodGluZ1wiKVxyXG4gICAgICAgIGVsc2UgZG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWxpZ2h0aW5nXCIpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTWVkaWF0b3IgZnJvbSBcIi4vTWVkaWF0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFBhcnRpY2lwYW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtZWRpYXRvcjogTWVkaWF0b3IpIHt9XHJcbiAgICBhYnN0cmFjdCBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWRcclxufSIsImltcG9ydCBDb29sQWlyY29uIGZyb20gXCIuL0Nvb2xBaXJjb25cIjtcclxuaW1wb3J0IERvb3IgZnJvbSBcIi4vRG9vclwiO1xyXG5pbXBvcnQgSGVhdEJvaWxlciBmcm9tIFwiLi9IZWF0Qm9pbGVyXCI7XHJcbmltcG9ydCBNZWRpYXRvciBmcm9tIFwiLi9NZWRpYXRvclwiO1xyXG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSBcIi4vUGFydGljaXBhbnRcIjtcclxuaW1wb3J0IFdpbmRvdyBmcm9tIFwiLi9XaW5kb3dcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYXJ0SG9tZSBpbXBsZW1lbnRzIE1lZGlhdG9yIHtcclxuICAgIGRvb3IgPSBuZXcgRG9vcih0aGlzKVxyXG4gICAgd2luZG93ID0gbmV3IFdpbmRvdyh0aGlzKVxyXG4gICAgYWlyY29uID0gbmV3IENvb2xBaXJjb24odGhpcylcclxuICAgIGJvaWxlciA9IG5ldyBIZWF0Qm9pbGVyKHRoaXMpXHJcblxyXG4gICAgcGFydGljaXBhbnRDaGFuZ2VkKHBhcnRpY2lwYW50OiBQYXJ0aWNpcGFudCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHBhcnRpY2lwYW50ID09PSB0aGlzLmRvb3IgJiYgIXRoaXMuZG9vci5pc0Nsb3NlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWlyY29uLm9mZigpXHJcbiAgICAgICAgICAgIHRoaXMuYm9pbGVyLm9mZigpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwYXJ0aWNpcGFudCA9PT0gdGhpcy53aW5kb3cgJiYgIXRoaXMud2luZG93LmlzQ2xvc2VkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5haXJjb24ub2ZmKClcclxuICAgICAgICAgICAgdGhpcy5ib2lsZXIub2ZmKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHBhcnRpY2lwYW50ID09PSB0aGlzLmFpcmNvbiAmJiB0aGlzLmFpcmNvbi5pc1J1bm5pbmcoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvaWxlci5vZmYoKVxyXG4gICAgICAgICAgICB0aGlzLndpbmRvdy5jbG9zZSgpXHJcbiAgICAgICAgICAgIHRoaXMuZG9vci5jbG9zZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwYXJ0aWNpcGFudCA9PT0gdGhpcy5ib2lsZXIgJiYgdGhpcy5ib2lsZXIuaXNSdW5uaW5nKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5haXJjb24ub2ZmKClcclxuICAgICAgICAgICAgdGhpcy53aW5kb3cuY2xvc2UoKVxyXG4gICAgICAgICAgICB0aGlzLmRvb3IuY2xvc2UoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5KCkge1xyXG4gICAgICAgIGNvbnN0IGRvbURvb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvb3JcIikgYXMgSFRNTEVsZW1lbnRcclxuICAgICAgICBjb25zdCBkb21XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRvd1wiKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgIGNvbnN0IGRvbUhlYXRCb2lsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYXRib2lsZXJcIikgYXMgSFRNTEVsZW1lbnRcclxuICAgICAgICBjb25zdCBkb21Db29sQWlyY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb29sYWlyY29uXCIpIGFzIEhUTUxFbGVtZW50XHJcblxyXG4gICAgICAgIHRoaXMuZG9vci5kaXNwbGF5U3RhdGUoZG9tRG9vcilcclxuICAgICAgICB0aGlzLndpbmRvdy5kaXNwbGF5U3RhdGUoZG9tV2luZG93KVxyXG4gICAgICAgIHRoaXMuYm9pbGVyLmRpc3BsYXlTdGF0ZShkb21IZWF0Qm9pbGVyKVxyXG4gICAgICAgIHRoaXMuYWlyY29uLmRpc3BsYXlTdGF0ZShkb21Db29sQWlyY29uKVxyXG4gICAgfVxyXG5cclxuICAgIGluc3RhbGwoKSB7XHJcbiAgICAgICAgY29uc3QgZG9tRG9vciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG9vclwiKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgIGNvbnN0IGRvbVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZG93XCIpIGFzIEhUTUxFbGVtZW50XHJcbiAgICAgICAgY29uc3QgZG9tSGVhdEJvaWxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhdGJvaWxlclwiKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgIGNvbnN0IGRvbUNvb2xBaXJjb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvb2xhaXJjb25cIikgYXMgSFRNTEVsZW1lbnRcclxuXHJcbiAgICAgICAgZG9tRG9vci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRvb3IuaXNDbG9zZWQoKSA/IHRoaXMuZG9vci5vcGVuKCkgOiB0aGlzLmRvb3IuY2xvc2UoKVxyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9tV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMud2luZG93LmlzQ2xvc2VkKCkgPyB0aGlzLndpbmRvdy5vcGVuKCkgOiB0aGlzLndpbmRvdy5jbG9zZSgpXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpXHJcbiAgICAgICAgfSkgIFxyXG5cclxuICAgICAgICBkb21IZWF0Qm9pbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9pbGVyLmlzUnVubmluZygpID8gdGhpcy5ib2lsZXIub2ZmKCkgOiB0aGlzLmJvaWxlci5vbigpXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpXHJcbiAgICAgICAgfSkgIFxyXG5cclxuICAgICAgICBkb21Db29sQWlyY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWlyY29uLmlzUnVubmluZygpID8gdGhpcy5haXJjb24ub2ZmKCkgOiB0aGlzLmFpcmNvbi5vbigpXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5kaXNwbGF5KClcclxuICAgIH1cclxufSIsImltcG9ydCBNZWRpYXRvciBmcm9tIFwiLi9NZWRpYXRvclwiO1xyXG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSBcIi4vUGFydGljaXBhbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvdyBleHRlbmRzIFBhcnRpY2lwYW50IHtcclxuICAgIHByaXZhdGUgYkNsb3NlZCA9IHRydWVcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogTWVkaWF0b3IpIHtcclxuICAgICAgICBzdXBlcihtZWRpYXRvcilcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKCF0aGlzLmJDbG9zZWQpIHJldHVyblxyXG4gICAgICAgIHRoaXMuYkNsb3NlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLmJDbG9zZWQpIHJldHVyblxyXG4gICAgICAgIHRoaXMuYkNsb3NlZCA9IHRydWVcclxuICAgICAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGlzQ2xvc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJDbG9zZWRcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGRvbS5pbm5lckhUTUwgPSB0aGlzLmJDbG9zZWQgPyBcIuywvSBDTE9TRVwiIDogXCLssL0gT1BFTlwiXHJcblxyXG4gICAgICAgIGlmKHRoaXMuYkNsb3NlZCkgZG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWxpZ2h0aW5nXCIpXHJcbiAgICAgICAgZWxzZSBkb20uY2xhc3NMaXN0LmFkZChcImhpbGlnaHRpbmdcIilcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNtYXJ0SG9tZSBmcm9tIFwiLi9TbWFydEhvbWVcIjtcclxuXHJcbmNvbnN0IGhvbWUgPSBuZXcgU21hcnRIb21lKClcclxuaG9tZS5pbnN0YWxsKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=