/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/state/Player.ts":
/*!*****************************!*\
  !*** ./src/state/Player.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StandUpState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandUpState */ "./src/state/StandUpState.ts");

var Player = /** @class */ (function () {
    function Player(domTalk) {
        this.domTalk = domTalk;
        this.speed = 0;
        this.state = new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    }
    Player.prototype.getSpeed = function () { return this.speed; };
    ;
    Player.prototype.setSpeed = function (speed) { this.speed = speed; };
    Player.prototype.getState = function () { return this.state; };
    ;
    Player.prototype.setState = function (state) { this.state = state; };
    ;
    Player.prototype.talk = function (msg) {
        this.domTalk.innerText = msg;
    };
    return Player;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/state/RunState.ts":
/*!*******************************!*\
  !*** ./src/state/RunState.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StandUpState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandUpState */ "./src/state/StandUpState.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State */ "./src/state/State.ts");
/* harmony import */ var _WalkState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WalkState */ "./src/state/WalkState.ts");
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



var RunState = /** @class */ (function (_super) {
    __extends(RunState, _super);
    function RunState(player) {
        return _super.call(this, player) || this;
    }
    RunState.prototype.standUp = function () {
        this.player.talk("긴급제동!!");
        this.player.setSpeed(0);
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
    };
    RunState.prototype.sitDown = function () {
        this.player.talk("뛰다가 갑자기 앉으면 넘어져!!");
        this.player.setSpeed(0);
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
    };
    RunState.prototype.walk = function () {
        this.player.talk("속도를 줄여서 걷어갑니다.");
        this.player.setSpeed(8);
        this.player.setState(new _WalkState__WEBPACK_IMPORTED_MODULE_2__["default"](this.player));
    };
    RunState.prototype.run = function () {
        this.player.talk("더 빨리 뛰라고? 맞지?");
        this.player.setSpeed(this.player.getSpeed() + 2);
    };
    RunState.prototype.getDescription = function () {
        return "뛰는 중...";
    };
    return RunState;
}(_State__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RunState);


/***/ }),

/***/ "./src/state/SitDownState.ts":
/*!***********************************!*\
  !*** ./src/state/SitDownState.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StandUpState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandUpState */ "./src/state/StandUpState.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State */ "./src/state/State.ts");
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


var SitDownState = /** @class */ (function (_super) {
    __extends(SitDownState, _super);
    function SitDownState(player) {
        return _super.call(this, player) || this;
    }
    SitDownState.prototype.standUp = function () {
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
        this.player.talk("일어나자 이제.");
    };
    SitDownState.prototype.sitDown = function () {
        this.player.talk("이미 앉아있잖아..!");
    };
    SitDownState.prototype.walk = function () {
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
        this.player.talk("앉아서 어떻게 걸어? 일단 일어나야지");
    };
    SitDownState.prototype.run = function () {
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
        this.player.talk("앉아서 어떻게 뛰어? 먼저 일어나야지");
    };
    SitDownState.prototype.getDescription = function () {
        return "앉아있음.";
    };
    return SitDownState;
}(_State__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SitDownState);


/***/ }),

/***/ "./src/state/StandUpState.ts":
/*!***********************************!*\
  !*** ./src/state/StandUpState.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RunState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RunState */ "./src/state/RunState.ts");
/* harmony import */ var _SitDownState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SitDownState */ "./src/state/SitDownState.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./State */ "./src/state/State.ts");
/* harmony import */ var _WalkState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WalkState */ "./src/state/WalkState.ts");
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




var StandUpState = /** @class */ (function (_super) {
    __extends(StandUpState, _super);
    function StandUpState(player) {
        return _super.call(this, player) || this;
    }
    StandUpState.prototype.standUp = function () {
        this.player.talk("언제 움직일꺼야??");
    };
    StandUpState.prototype.sitDown = function () {
        this.player.setState(new _SitDownState__WEBPACK_IMPORTED_MODULE_1__["default"](this.player));
        this.player.talk("앉기를 시전 했습니다.");
    };
    StandUpState.prototype.walk = function () {
        this.player.setSpeed(8);
        this.player.setState(new _WalkState__WEBPACK_IMPORTED_MODULE_3__["default"](this.player));
        this.player.talk("하루 30분 걷기 운동하세요.");
    };
    StandUpState.prototype.run = function () {
        this.player.setSpeed(10);
        this.player.setState(new _RunState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
        this.player.talk("스프린트!");
    };
    StandUpState.prototype.getDescription = function () {
        return "제자리에 서 있음.";
    };
    return StandUpState;
}(_State__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandUpState);


/***/ }),

/***/ "./src/state/State.ts":
/*!****************************!*\
  !*** ./src/state/State.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var State = /** @class */ (function () {
    function State(player) {
        this.player = player;
    }
    return State;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (State);


/***/ }),

/***/ "./src/state/WalkState.ts":
/*!********************************!*\
  !*** ./src/state/WalkState.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RunState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RunState */ "./src/state/RunState.ts");
/* harmony import */ var _SitDownState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SitDownState */ "./src/state/SitDownState.ts");
/* harmony import */ var _StandUpState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StandUpState */ "./src/state/StandUpState.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./State */ "./src/state/State.ts");
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




var WalkState = /** @class */ (function (_super) {
    __extends(WalkState, _super);
    function WalkState(player) {
        return _super.call(this, player) || this;
    }
    WalkState.prototype.standUp = function () {
        this.player.setSpeed(0);
        this.player.talk("스탑!");
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_2__["default"](this.player));
    };
    WalkState.prototype.sitDown = function () {
        this.player.setSpeed(0);
        this.player.talk("걷다가 앉으면 넘어져");
        this.player.setState(new _SitDownState__WEBPACK_IMPORTED_MODULE_1__["default"](this.player));
    };
    WalkState.prototype.walk = function () {
        this.player.talk("걷는게 좋아~~");
    };
    WalkState.prototype.run = function () {
        this.player.setSpeed(20);
        this.player.talk("걷기에서 뛰기로 전환!!");
        this.player.setState(new _RunState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
    };
    WalkState.prototype.getDescription = function () {
        return "걷는 중...";
    };
    return WalkState;
}(_State__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalkState);


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
/*!****************************!*\
  !*** ./src/state/index.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/state/Player.ts");

/*
State패턴은 상태를 클래스화하여 객체로 만들수 있는 패턴.
어떤 상태에서 다른 상태로 변경할 때, 각 상태 변화에 따른 조건 처리를 매우 효과적으로 코딩할 수 있음.
새로운 상태 추가에도 상태 변화 로직이 복잡해지지 않고 한 가지 상태만 집중해서 처리할 수 있음.
*/
var domTalk = document.querySelector(".talk");
var domStand = document.querySelector(".stand");
var domSit = document.querySelector(".sit");
var domWalk = document.querySelector(".walk");
var domRun = document.querySelector(".run");
var player = new _Player__WEBPACK_IMPORTED_MODULE_0__["default"](domTalk);
function putDescription() {
    var domDescription = document.querySelector(".description");
    domDescription.innerText = "".concat(player.getState().getDescription(), " / \uC18D\uB3C4: ").concat(player.getSpeed(), "km/h");
}
putDescription();
domStand.addEventListener("click", function () {
    player.getState().standUp();
    putDescription();
});
domSit.addEventListener("click", function () {
    player.getState().sitDown();
    putDescription();
});
domWalk.addEventListener("click", function () {
    player.getState().walk();
    putDescription();
});
domRun.addEventListener("click", function () {
    player.getState().run();
    putDescription();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQzdCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN4QixjQUFjLEVBQUUsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL3N0YXRlL1BsYXllci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy9zdGF0ZS9SdW5TdGF0ZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy9zdGF0ZS9TaXREb3duU3RhdGUudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvc3RhdGUvU3RhbmRVcFN0YXRlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL3N0YXRlL1N0YXRlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL3N0YXRlL1dhbGtTdGF0ZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL3N0YXRlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGFuZFVwU3RhdGUgZnJvbSBcIi4vU3RhbmRVcFN0YXRlXCI7XHJcbmltcG9ydCBTdGF0ZSBmcm9tIFwiLi9TdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBnZXRTcGVlZCgpIHsgcmV0dXJuIHRoaXMuc3BlZWQgfTtcclxuICAgIHNldFNwZWVkKHNwZWVkOiBudW1iZXIpOiB2b2lkIHsgdGhpcy5zcGVlZCA9IHNwZWVkIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZTtcclxuICAgIGdldFN0YXRlKCk6IFN0YXRlIHsgcmV0dXJuIHRoaXMuc3RhdGUgfTtcclxuICAgIHNldFN0YXRlKHN0YXRlOiBTdGF0ZSk6IHZvaWQgeyB0aGlzLnN0YXRlID0gc3RhdGUgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbVRhbGs6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBTdGFuZFVwU3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFsayhtc2c6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZG9tVGFsay5pbm5lclRleHQgPSBtc2c7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgU3RhbmRVcFN0YXRlIGZyb20gXCIuL1N0YW5kVXBTdGF0ZVwiO1xyXG5pbXBvcnQgU3RhdGUgZnJvbSBcIi4vU3RhdGVcIjtcclxuaW1wb3J0IFdhbGtTdGF0ZSBmcm9tIFwiLi9XYWxrU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1blN0YXRlIGV4dGVuZHMgU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyOiBQbGF5ZXIpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YW5kVXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudGFsayhcIuq4tOq4ieygnOuPmSEhXCIpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnNldFNwZWVkKDApO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBTdGFuZFVwU3RhdGUodGhpcy5wbGF5ZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzaXREb3duKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnRhbGsoXCLrm7Dri6TqsIAg6rCR7J6Q6riwIOyVieycvOuptCDrhJjslrTsoLghIVwiKTtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRTcGVlZCgwKTtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRTdGF0ZShuZXcgU3RhbmRVcFN0YXRlKHRoaXMucGxheWVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2FsaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXllci50YWxrKFwi7IaN64+E66W8IOykhOyXrOyEnCDqsbfslrTqsJHri4jri6QuXCIpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnNldFNwZWVkKDgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBXYWxrU3RhdGUodGhpcy5wbGF5ZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudGFsayhcIuuNlCDruajrpqwg65uw65286rOgPyDrp57sp4A/XCIpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnNldFNwZWVkKHRoaXMucGxheWVyLmdldFNwZWVkKCkgKyAyKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIuubsOuKlCDspJEuLi5cIlxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IFN0YW5kVXBTdGF0ZSBmcm9tIFwiLi9TdGFuZFVwU3RhdGVcIjtcclxuaW1wb3J0IFN0YXRlIGZyb20gXCIuL1N0YXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaXREb3duU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllcikge1xyXG4gICAgICAgIHN1cGVyKHBsYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhbmRVcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRTdGF0ZShuZXcgU3RhbmRVcFN0YXRlKHRoaXMucGxheWVyKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudGFsayhcIuydvOyWtOuCmOyekCDsnbTsoJwuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNpdERvd24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudGFsayhcIuydtOuvuCDslYnslYTsnojsnpbslYQuLiFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgd2FsaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRTdGF0ZShuZXcgU3RhbmRVcFN0YXRlKHRoaXMucGxheWVyKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudGFsayhcIuyVieyVhOyEnCDslrTrlrvqsowg6rG47Ja0PyDsnbzri6gg7J287Ja064KY7JW87KeAXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRTdGF0ZShuZXcgU3RhbmRVcFN0YXRlKHRoaXMucGxheWVyKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudGFsayhcIuyVieyVhOyEnCDslrTrlrvqsowg65uw7Ja0PyDrqLzsoIAg7J287Ja064KY7JW87KeAXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlc2NyaXB0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwi7JWJ7JWE7J6I7J2MLlwiXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgUnVuU3RhdGUgZnJvbSBcIi4vUnVuU3RhdGVcIjtcclxuaW1wb3J0IFNpdERvd25TdGF0ZSBmcm9tIFwiLi9TaXREb3duU3RhdGVcIjtcclxuaW1wb3J0IFN0YXRlIGZyb20gXCIuL1N0YXRlXCI7XHJcbmltcG9ydCBXYWxrU3RhdGUgZnJvbSBcIi4vV2Fsa1N0YXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFuZFVwU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllcikge1xyXG4gICAgICAgIHN1cGVyKHBsYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhbmRVcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXllci50YWxrKFwi7Ja47KCcIOybgOyngeydvOq6vOyVvD8/XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNpdERvd24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0U3RhdGUobmV3IFNpdERvd25TdGF0ZSh0aGlzLnBsYXllcikpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnRhbGsoXCLslYnquLDrpbwg7Iuc7KCEIO2WiOyKteuLiOuLpC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgd2FsaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRTcGVlZCg4KTtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRTdGF0ZShuZXcgV2Fsa1N0YXRlKHRoaXMucGxheWVyKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudGFsayhcIu2VmOujqCAzMOu2hCDqsbfquLAg7Jq064+Z7ZWY7IS47JqULlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0U3BlZWQoMTApO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBSdW5TdGF0ZSh0aGlzLnBsYXllcikpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnRhbGsoXCLsiqTtlITrprDtirghXCIpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCLsoJzsnpDrpqzsl5Ag7IScIOyeiOydjC5cIlxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBwbGF5ZXI6IFBsYXllcikge31cclxuXHJcbiAgICBhYnN0cmFjdCBzdGFuZFVwKCk6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCBzaXREb3duKCk6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCB3YWxrKCk6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCBydW4oKTogdm9pZDtcclxuXHJcbiAgICBhYnN0cmFjdCBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmc7XHJcbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgUnVuU3RhdGUgZnJvbSBcIi4vUnVuU3RhdGVcIjtcclxuaW1wb3J0IFNpdERvd25TdGF0ZSBmcm9tIFwiLi9TaXREb3duU3RhdGVcIjtcclxuaW1wb3J0IFN0YW5kVXBTdGF0ZSBmcm9tIFwiLi9TdGFuZFVwU3RhdGVcIjtcclxuaW1wb3J0IFN0YXRlIGZyb20gXCIuL1N0YXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxrU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllcikge1xyXG4gICAgICAgIHN1cGVyKHBsYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhbmRVcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRTcGVlZCgwKTtcclxuICAgICAgICB0aGlzLnBsYXllci50YWxrKFwi7Iqk7YORIVwiKTtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRTdGF0ZShuZXcgU3RhbmRVcFN0YXRlKHRoaXMucGxheWVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2l0RG93bigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRTcGVlZCgwKTtcclxuICAgICAgICB0aGlzLnBsYXllci50YWxrKFwi6rG364uk6rCAIOyVieycvOuptCDrhJjslrTsoLhcIik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0U3RhdGUobmV3IFNpdERvd25TdGF0ZSh0aGlzLnBsYXllcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHdhbGsoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudGFsayhcIuqxt+uKlOqyjCDsoovslYR+flwiKTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0U3BlZWQoMjApO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnRhbGsoXCLqsbfquLDsl5DshJwg65uw6riw66GcIOyghO2ZmCEhXCIpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBSdW5TdGF0ZSh0aGlzLnBsYXllcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlc2NyaXB0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwi6rG364qUIOykkS4uLlwiXHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XHJcblxyXG4vKlxyXG5TdGF0Ze2MqO2EtOydgCDsg4Htg5zrpbwg7YG0656Y7Iqk7ZmU7ZWY7JesIOqwneyytOuhnCDrp4zrk6TsiJgg7J6I64qUIO2MqO2EtC5cclxu7Ja065akIOyDge2DnOyXkOyEnCDri6Trpbgg7IOB7YOc66GcIOuzgOqyve2VoCDrlYwsIOqwgSDsg4Htg5wg67OA7ZmU7JeQIOuUsOuluCDsobDqsbQg7LKY66as66W8IOunpOyasCDtmqjqs7zsoIHsnLzroZwg7L2U65Sp7ZWgIOyImCDsnojsnYwuXHJcbuyDiOuhnOyatCDsg4Htg5wg7LaU6rCA7JeQ64+EIOyDge2DnCDrs4DtmZQg66Gc7KeB7J20IOuzteyeoe2VtOyngOyngCDslYrqs6Ag7ZWcIOqwgOyngCDsg4Htg5zrp4wg7KeR7KSR7ZW07IScIOyymOumrO2VoCDsiJgg7J6I7J2MLlxyXG4qL1xyXG5cclxuY29uc3QgZG9tVGFsayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFsa1wiKSBhcyBIVE1MRWxlbWVudDtcclxuY29uc3QgZG9tU3RhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YW5kXCIpO1xyXG5jb25zdCBkb21TaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpdFwiKTtcclxuY29uc3QgZG9tV2FsayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2Fsa1wiKTtcclxuY29uc3QgZG9tUnVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ydW5cIik7XHJcblxyXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKGRvbVRhbGspO1xyXG5cclxuZnVuY3Rpb24gcHV0RGVzY3JpcHRpb24oKSB7XHJcbiAgICBjb25zdCBkb21EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBkb21EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgJHtwbGF5ZXIuZ2V0U3RhdGUoKS5nZXREZXNjcmlwdGlvbigpfSAvIOyGjeuPhDogJHtwbGF5ZXIuZ2V0U3BlZWQoKX1rbS9oYDtcclxufVxyXG5cclxucHV0RGVzY3JpcHRpb24oKTtcclxuXHJcbmRvbVN0YW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwbGF5ZXIuZ2V0U3RhdGUoKS5zdGFuZFVwKCk7XHJcbiAgICBwdXREZXNjcmlwdGlvbigpO1xyXG59KTtcclxuXHJcbmRvbVNpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcGxheWVyLmdldFN0YXRlKCkuc2l0RG93bigpO1xyXG4gICAgcHV0RGVzY3JpcHRpb24oKTtcclxufSk7XHJcblxyXG5kb21XYWxrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwbGF5ZXIuZ2V0U3RhdGUoKS53YWxrKCk7XHJcbiAgICBwdXREZXNjcmlwdGlvbigpO1xyXG59KTtcclxuXHJcbmRvbVJ1bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcGxheWVyLmdldFN0YXRlKCkucnVuKCk7XHJcbiAgICBwdXREZXNjcmlwdGlvbigpO1xyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=