/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/command/BoxCommand.ts":
/*!***********************************!*\
  !*** ./src/command/BoxCommand.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/command/Draw.ts");
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

var BoxCommand = /** @class */ (function (_super) {
    __extends(BoxCommand, _super);
    function BoxCommand(canvas, x, y, width, height) {
        var _this = _super.call(this, canvas) || this;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    BoxCommand.prototype.run = function () {
        var context = this.canvas.getContext("2d");
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.strokeColor;
        context.fill();
        context.stroke();
    };
    return BoxCommand;
}(_Draw__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxCommand);


/***/ }),

/***/ "./src/command/CircleCommand.ts":
/*!**************************************!*\
  !*** ./src/command/CircleCommand.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/command/Draw.ts");
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

var CircleCommand = /** @class */ (function (_super) {
    __extends(CircleCommand, _super);
    function CircleCommand(canvas, x, y, radius) {
        var _this = _super.call(this, canvas) || this;
        _this.x = x;
        _this.y = y;
        _this.radius = radius;
        return _this;
    }
    CircleCommand.prototype.run = function () {
        var context = this.canvas.getContext("2d");
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.strokeColor;
        context.fill();
        context.stroke();
    };
    return CircleCommand;
}(_Draw__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircleCommand);


/***/ }),

/***/ "./src/command/ClearCommand.ts":
/*!*************************************!*\
  !*** ./src/command/ClearCommand.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/command/Draw.ts");
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

var ClearCommand = /** @class */ (function (_super) {
    __extends(ClearCommand, _super);
    function ClearCommand(canvas) {
        return _super.call(this, canvas) || this;
    }
    ClearCommand.prototype.run = function () {
        var context = this.canvas.getContext("2d");
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return ClearCommand;
}(_Draw__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClearCommand);


/***/ }),

/***/ "./src/command/Draw.ts":
/*!*****************************!*\
  !*** ./src/command/Draw.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Draw = /** @class */ (function () {
    function Draw(canvas, fillColor, strokeColor) {
        if (fillColor === void 0) { fillColor = "#ffffff"; }
        if (strokeColor === void 0) { strokeColor = "#000000"; }
        this.canvas = canvas;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
    }
    Draw.prototype.setFillColor = function (color) {
        this.fillColor = color;
        return this;
    };
    Draw.prototype.setStrokeColor = function (color) {
        this.strokeColor = color;
        return this;
    };
    return Draw;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Draw);


/***/ }),

/***/ "./src/command/PlayCommand.ts":
/*!************************************!*\
  !*** ./src/command/PlayCommand.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/command/Draw.ts");
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

var PlayCommand = /** @class */ (function (_super) {
    __extends(PlayCommand, _super);
    function PlayCommand(canvas) {
        var _this = _super.call(this, canvas) || this;
        _this.commands = new Array();
        _this.playIndex = 0;
        return _this;
    }
    PlayCommand.prototype.addCommand = function (command) {
        this.commands.push(command);
    };
    PlayCommand.prototype.run = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.playIndex < _this.commands.length) {
                var command = _this.commands[_this.playIndex];
                command.run();
                _this.playIndex++;
                _this.run();
            }
            else {
                _this.playIndex = 0;
            }
        }, 300);
    };
    return PlayCommand;
}(_Draw__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayCommand);


/***/ }),

/***/ "./src/command/TextCommand.ts":
/*!************************************!*\
  !*** ./src/command/TextCommand.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/command/Draw.ts");
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

var TextCommand = /** @class */ (function (_super) {
    __extends(TextCommand, _super);
    function TextCommand(canvas, x, y, size, text) {
        var _this = _super.call(this, canvas) || this;
        _this.x = x;
        _this.y = y;
        _this.size = size;
        _this.text = text;
        return _this;
    }
    TextCommand.prototype.run = function () {
        var context = this.canvas.getContext("2d");
        context.font = "".concat(this.size, "px arial");
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.strokeColor;
        context.fillText(this.text, this.x, this.y);
        context.strokeText(this.text, this.x, this.y);
    };
    return TextCommand;
}(_Draw__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextCommand);


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
  !*** ./src/command/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoxCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxCommand */ "./src/command/BoxCommand.ts");
/* harmony import */ var _CircleCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CircleCommand */ "./src/command/CircleCommand.ts");
/* harmony import */ var _ClearCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClearCommand */ "./src/command/ClearCommand.ts");
/* harmony import */ var _PlayCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayCommand */ "./src/command/PlayCommand.ts");
/* harmony import */ var _TextCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextCommand */ "./src/command/TextCommand.ts");





/*
Command패턴은 하나의 기능을 클래스의 객체로 정의한 것.
커맨드 객체는 저장소에 저장해서 계속 유지할 수 있고, 함수의 인자 등으로 전달할 수 있어 다양하게 사용가능.
여러 개의 커맨드를 한번에 실행하는 배치 가능, 실행에 대한 취소와 재실행에 대한 Undo/Redo기능 개발에 Command패턴을 적용 가능.
*/
var domCanvas = document.querySelector("canvas");
var domDraw = document.querySelector(".draw");
var domPlay = document.querySelector(".play");
var cmdClear = new _ClearCommand__WEBPACK_IMPORTED_MODULE_2__["default"](domCanvas);
var cmdCircle1 = new _CircleCommand__WEBPACK_IMPORTED_MODULE_1__["default"](domCanvas, 50, 150, 40);
cmdCircle1.setFillColor("#ee4040").setStrokeColor("#ee4040");
var cmdText = new _TextCommand__WEBPACK_IMPORTED_MODULE_4__["default"](domCanvas, 200, 200, 40, "Design Patterns");
cmdText.setStrokeColor("#458de5");
var cmdCircle2 = new _CircleCommand__WEBPACK_IMPORTED_MODULE_1__["default"](domCanvas, 355, 240, 30);
cmdCircle2.setFillColor("#ff884d").setStrokeColor("#ff884d");
var cmdBox = new _BoxCommand__WEBPACK_IMPORTED_MODULE_0__["default"](domCanvas, 40, 165, 320, 65);
cmdBox.setFillColor("#4dc4ff").setStrokeColor("#4dc4ff");
domDraw.addEventListener("click", function () {
    cmdClear.run();
    cmdCircle1.run();
    cmdBox.run();
    cmdCircle2.run();
    cmdText.run();
});
var playCommand = new _PlayCommand__WEBPACK_IMPORTED_MODULE_3__["default"](domCanvas);
playCommand.addCommand(cmdClear);
playCommand.addCommand(cmdCircle1);
playCommand.addCommand(cmdBox);
playCommand.addCommand(cmdCircle2);
playCommand.addCommand(cmdText);
domPlay.addEventListener("click", function () {
    playCommand.run();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0FBRTdELElBQU0sTUFBTSxHQUFHLElBQUksbURBQVUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDM0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFekQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUM5QixRQUFRLENBQUMsR0FBRyxFQUFFO0lBQ2QsVUFBVSxDQUFDLEdBQUcsRUFBRTtJQUNoQixNQUFNLENBQUMsR0FBRyxFQUFFO0lBQ1osVUFBVSxDQUFDLEdBQUcsRUFBRTtJQUNoQixPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxXQUFXLEdBQUcsSUFBSSxvREFBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9DLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVoQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQzlCLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN0QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy9jb21tYW5kL0JveENvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvY29tbWFuZC9DaXJjbGVDb21tYW5kLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL2NvbW1hbmQvQ2xlYXJDb21tYW5kLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL2NvbW1hbmQvRHJhdy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy9jb21tYW5kL1BsYXlDb21tYW5kLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL2NvbW1hbmQvVGV4dENvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy9jb21tYW5kL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21tYW5kIGZyb20gXCIuL0NvbW1hbmRcIjtcclxuaW1wb3J0IERyYXcgZnJvbSBcIi4vRHJhd1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94Q29tbWFuZCBleHRlbmRzIERyYXcgaW1wbGVtZW50cyBDb21tYW5kIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHByaXZhdGUgeDogbnVtYmVyLCBwcml2YXRlIHk6IG51bWJlciwgcHJpdmF0ZSB3aWR0aDogbnVtYmVyLCBwcml2YXRlIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZUNvbG9yO1xyXG5cclxuICAgICAgICBjb250ZXh0LmZpbGwoKVxyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKClcclxuICAgIH1cclxufSIsImltcG9ydCBDb21tYW5kIGZyb20gXCIuL0NvbW1hbmRcIjtcclxuaW1wb3J0IERyYXcgZnJvbSBcIi4vRHJhd1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlQ29tbWFuZCBleHRlbmRzIERyYXcgaW1wbGVtZW50cyBDb21tYW5kIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHByaXZhdGUgeDogbnVtYmVyLCBwcml2YXRlIHk6IG51bWJlciwgcHJpdmF0ZSByYWRpdXM6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb250ZXh0LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuXHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2VDb2xvcjtcclxuXHJcbiAgICAgICAgY29udGV4dC5maWxsKClcclxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29tbWFuZCBmcm9tIFwiLi9Db21tYW5kXCI7XHJcbmltcG9ydCBEcmF3IGZyb20gXCIuL0RyYXdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsZWFyQ29tbWFuZCBleHRlbmRzIERyYXcgaW1wbGVtZW50cyBDb21tYW5kIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcihjYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgcHJvdGVjdGVkIGZpbGxDb2xvciA9IFwiI2ZmZmZmZlwiLCBwcm90ZWN0ZWQgc3Ryb2tlQ29sb3IgPSBcIiMwMDAwMDBcIikge31cclxuXHJcbiAgICBzZXRGaWxsQ29sb3IoY29sb3I6IHN0cmluZyk6IERyYXcge1xyXG4gICAgICAgIHRoaXMuZmlsbENvbG9yID0gY29sb3JcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0cm9rZUNvbG9yKGNvbG9yOiBzdHJpbmcpOiBEcmF3IHtcclxuICAgICAgICB0aGlzLnN0cm9rZUNvbG9yID0gY29sb3JcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbW1hbmQgZnJvbSBcIi4vQ29tbWFuZFwiO1xyXG5pbXBvcnQgRHJhdyBmcm9tIFwiLi9EcmF3XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5Q29tbWFuZCBleHRlbmRzIERyYXcgaW1wbGVtZW50cyBDb21tYW5kIHtcclxuICAgIHByaXZhdGUgY29tbWFuZHMgPSBuZXcgQXJyYXk8Q29tbWFuZD4oKTtcclxuICAgIHByaXZhdGUgcGxheUluZGV4ID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgc3VwZXIoY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDb21tYW5kKGNvbW1hbmQ6IENvbW1hbmQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbW1hbmRzLnB1c2goY29tbWFuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKCk6IHZvaWQge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXlJbmRleCA8IHRoaXMuY29tbWFuZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tYW5kID0gdGhpcy5jb21tYW5kc1t0aGlzLnBsYXlJbmRleF1cclxuICAgICAgICAgICAgICAgIGNvbW1hbmQucnVuKClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlJbmRleCsrXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ydW4oKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5SW5kZXggPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbW1hbmQgZnJvbSBcIi4vQ29tbWFuZFwiO1xyXG5pbXBvcnQgRHJhdyBmcm9tIFwiLi9EcmF3XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Q29tbWFuZCBleHRlbmRzIERyYXcgaW1wbGVtZW50cyBDb21tYW5kIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHByaXZhdGUgeDogbnVtYmVyLCBwcml2YXRlIHk6IG51bWJlciwgcHJpdmF0ZSBzaXplOiBudW1iZXIsIHByaXZhdGUgdGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgY29udGV4dC5mb250ID0gYCR7dGhpcy5zaXplfXB4IGFyaWFsYDtcclxuICAgICAgICBjb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG5cclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZUNvbG9yO1xyXG5cclxuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlVGV4dCh0aGlzLnRleHQsIHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEJveENvbW1hbmQgZnJvbSBcIi4vQm94Q29tbWFuZFwiO1xyXG5pbXBvcnQgQ2lyY2xlQ29tbWFuZCBmcm9tIFwiLi9DaXJjbGVDb21tYW5kXCI7XHJcbmltcG9ydCBDbGVhckNvbW1hbmQgZnJvbSBcIi4vQ2xlYXJDb21tYW5kXCI7XHJcbmltcG9ydCBQbGF5Q29tbWFuZCBmcm9tIFwiLi9QbGF5Q29tbWFuZFwiO1xyXG5pbXBvcnQgVGV4dENvbW1hbmQgZnJvbSBcIi4vVGV4dENvbW1hbmRcIjtcclxuXHJcblxyXG4vKlxyXG5Db21tYW5k7Yyo7YS07J2AIO2VmOuCmOydmCDquLDriqXsnYQg7YG0656Y7Iqk7J2YIOqwneyytOuhnCDsoJXsnZjtlZwg6rKDLlxyXG7su6Trp6jrk5wg6rCd7LK064qUIOyggOyepeyGjOyXkCDsoIDsnqXtlbTshJwg6rOE7IaNIOycoOyngO2VoCDsiJgg7J6I6rOgLCDtlajsiJjsnZgg7J247J6QIOuTseycvOuhnCDsoITri6ztlaAg7IiYIOyeiOyWtCDri6TslpHtlZjqsowg7IKs7Jqp6rCA64qlLlxyXG7sl6zrn6wg6rCc7J2YIOy7pOunqOuTnOulvCDtlZzrsojsl5Ag7Iuk7ZaJ7ZWY64qUIOuwsOy5mCDqsIDriqUsIOyLpO2WieyXkCDrjIDtlZwg7Leo7IaM7JmAIOyerOyLpO2WieyXkCDrjIDtlZwgVW5kby9SZWRv6riw64qlIOqwnOuwnOyXkCBDb21tYW5k7Yyo7YS07J2EIOyggeyaqSDqsIDriqUuXHJcbiovXHJcblxyXG5jb25zdCBkb21DYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpO1xyXG5jb25zdCBkb21EcmF3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcmF3XCIpO1xyXG5jb25zdCBkb21QbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5XCIpO1xyXG5cclxuY29uc3QgY21kQ2xlYXIgPSBuZXcgQ2xlYXJDb21tYW5kKGRvbUNhbnZhcyk7XHJcblxyXG5jb25zdCBjbWRDaXJjbGUxID0gbmV3IENpcmNsZUNvbW1hbmQoZG9tQ2FudmFzLCA1MCwgMTUwLCA0MCk7XHJcbmNtZENpcmNsZTEuc2V0RmlsbENvbG9yKFwiI2VlNDA0MFwiKS5zZXRTdHJva2VDb2xvcihcIiNlZTQwNDBcIik7XHJcblxyXG5jb25zdCBjbWRUZXh0ID0gbmV3IFRleHRDb21tYW5kKGRvbUNhbnZhcywgMjAwLCAyMDAsIDQwLCBcIkRlc2lnbiBQYXR0ZXJuc1wiKTtcclxuY21kVGV4dC5zZXRTdHJva2VDb2xvcihcIiM0NThkZTVcIik7XHJcblxyXG5jb25zdCBjbWRDaXJjbGUyID0gbmV3IENpcmNsZUNvbW1hbmQoZG9tQ2FudmFzLCAzNTUsIDI0MCwgMzApO1xyXG5jbWRDaXJjbGUyLnNldEZpbGxDb2xvcihcIiNmZjg4NGRcIikuc2V0U3Ryb2tlQ29sb3IoXCIjZmY4ODRkXCIpO1xyXG5cclxuY29uc3QgY21kQm94ID0gbmV3IEJveENvbW1hbmQoZG9tQ2FudmFzLCA0MCwgMTY1LCAzMjAsIDY1KTtcclxuY21kQm94LnNldEZpbGxDb2xvcihcIiM0ZGM0ZmZcIikuc2V0U3Ryb2tlQ29sb3IoXCIjNGRjNGZmXCIpO1xyXG5cclxuZG9tRHJhdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY21kQ2xlYXIucnVuKClcclxuICAgIGNtZENpcmNsZTEucnVuKClcclxuICAgIGNtZEJveC5ydW4oKVxyXG4gICAgY21kQ2lyY2xlMi5ydW4oKVxyXG4gICAgY21kVGV4dC5ydW4oKVxyXG59KTtcclxuXHJcbmNvbnN0IHBsYXlDb21tYW5kID0gbmV3IFBsYXlDb21tYW5kKGRvbUNhbnZhcyk7XHJcbnBsYXlDb21tYW5kLmFkZENvbW1hbmQoY21kQ2xlYXIpO1xyXG5wbGF5Q29tbWFuZC5hZGRDb21tYW5kKGNtZENpcmNsZTEpO1xyXG5wbGF5Q29tbWFuZC5hZGRDb21tYW5kKGNtZEJveCk7XHJcbnBsYXlDb21tYW5kLmFkZENvbW1hbmQoY21kQ2lyY2xlMik7XHJcbnBsYXlDb21tYW5kLmFkZENvbW1hbmQoY21kVGV4dCk7XHJcblxyXG5kb21QbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwbGF5Q29tbWFuZC5ydW4oKTtcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=