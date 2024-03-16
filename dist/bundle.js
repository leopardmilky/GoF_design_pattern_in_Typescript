/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/facade/Cache.ts":
/*!*****************************!*\
  !*** ./src/facade/Cache.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Cache = /** @class */ (function () {
    function Cache() {
        this.cache = new Map();
    }
    Cache.prototype.put = function (row) {
        this.cache.set(row.name, row);
    };
    Cache.prototype.get = function (name) {
        return this.cache.get(name);
    };
    return Cache;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cache);


/***/ }),

/***/ "./src/facade/DBMS.ts":
/*!****************************!*\
  !*** ./src/facade/DBMS.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Row */ "./src/facade/Row.ts");

var DBMS = /** @class */ (function () {
    function DBMS() {
        this.db = new Map();
        this.db.set("jane", new _Row__WEBPACK_IMPORTED_MODULE_0__["default"]("jane", "1990-02-14", "jane09@email.co.kr"));
        this.db.set("robert", new _Row__WEBPACK_IMPORTED_MODULE_0__["default"]("robert", "1979-11-05", "nice@gmail.com"));
        this.db.set("dorosh", new _Row__WEBPACK_IMPORTED_MODULE_0__["default"]("dorosh", "1985-08-21", "dorosh@email.com"));
    }
    DBMS.prototype.query = function (name, callback) {
        var _this = this;
        setTimeout(function () {
            callback(_this.db.get(name));
        }, 1500);
    };
    return DBMS;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DBMS);


/***/ }),

/***/ "./src/facade/Facade.ts":
/*!******************************!*\
  !*** ./src/facade/Facade.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cache */ "./src/facade/Cache.ts");
/* harmony import */ var _DBMS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DBMS */ "./src/facade/DBMS.ts");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message */ "./src/facade/Message.ts");



var Facade = /** @class */ (function () {
    function Facade() {
        this.dbms = new _DBMS__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.cache = new _Cache__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    Facade.prototype.queryName = function (name, onBeforeQuery, onAfterQuery, domOutput) {
        var _this = this;
        var row = this.cache.get(name);
        if (!row) {
            onBeforeQuery();
            this.dbms.query(name, function (row) {
                onAfterQuery();
                if (row) {
                    _this.cache.put(row);
                }
                var message = new _Message__WEBPACK_IMPORTED_MODULE_2__["default"](row);
                message.print(domOutput);
            });
        }
        else {
            var message = new _Message__WEBPACK_IMPORTED_MODULE_2__["default"](row);
            message.print(domOutput);
        }
    };
    return Facade;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Facade);


/***/ }),

/***/ "./src/facade/Message.ts":
/*!*******************************!*\
  !*** ./src/facade/Message.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Message = /** @class */ (function () {
    function Message(row) {
        this.row = row;
    }
    Message.prototype.print = function (dom) {
        var domLayout = document.createElement('div');
        domLayout.classList.add("layout");
        if (this.row) {
            domLayout.innerHTML = "\n                <div class=\"name\">".concat(this.row.name, "</div>\n                <div class=\"birthday\">").concat(this.row.birthday, "</div>\n                <div class=\"email\">").concat(this.row.email, "</div>\n            ");
        }
        else {
            domLayout.innerHTML = "NO RESULT";
        }
        dom.append(domLayout);
    };
    return Message;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);


/***/ }),

/***/ "./src/facade/Row.ts":
/*!***************************!*\
  !*** ./src/facade/Row.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Row = /** @class */ (function () {
    function Row(_name, _birthday, _email) {
        this._name = _name;
        this._birthday = _birthday;
        this._email = _email;
    }
    Object.defineProperty(Row.prototype, "name", {
        get: function () { return this._name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Row.prototype, "birthday", {
        get: function () { return this._birthday; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Row.prototype, "email", {
        get: function () { return this._email; },
        enumerable: false,
        configurable: true
    });
    return Row;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);


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
  !*** ./src/facade/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Facade */ "./src/facade/Facade.ts");
// import Cache from "./Cache";
// import DBMS from "./DBMS";
// import Message from "./Message";

/*
Facade패턴은 어떤 기능 개발을 위해 필요한 많은 클래스와 관련 API호출 등 복잡한 내용을 단순화 시켜주는 패턴.
즉, Facade에 해당하는 클래스 하나로 단순화 시키고 기존의 클래스들은 감출 수 있음.(비공개 처리가 가능)
Facade패턴을 적용하여 만들어진 라이브러리를 사용하는 개발자의 입장에서 학습에 대한 부담이 줄어들게 됨.
*/
// const dbms = new DBMS();
// const cache = new Cache();
var domInput = document.querySelector("input");
var domButton = document.querySelector("button");
var domResult = document.querySelector(".result");
var facade = new _Facade__WEBPACK_IMPORTED_MODULE_0__["default"]();
domButton.addEventListener("click", function () {
    var name = domInput.value;
    facade.queryName(name, function () {
        domInput.value = "(조회 중...)";
        domButton.disabled = true;
    }, function () {
        domInput.value = name;
        domButton.disabled = false;
    }, domResult);
    // const row = cache.get(name);
    // if(!row) {  // cache에 데이터가 존재하지 않을 경우.
    //     domInput.value = "(조회 중...)"
    //     domButton.disabled = true;
    //     dbms.query(name, (row) => {
    //         domInput.value = name;
    //         domButton.disabled = false;
    //         if(row) {
    //             cache.put(row);
    //         }
    //         const message = new Message(row);
    //         message.print(domResult);
    //     })
    // } else {
    //     const message = new Message(row);
    //     message.print(domResult);
    // }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtRQUNZLFVBQUssR0FBRyxJQUFJLEdBQUcsRUFBZTtJQVMxQyxDQUFDO0lBUEcsbUJBQUcsR0FBSCxVQUFJLEdBQVE7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxtQkFBRyxHQUFILFVBQUksSUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNadUI7QUFFeEI7SUFHSTtRQUZRLE9BQUUsR0FBRyxJQUFJLEdBQUcsRUFBZTtRQUcvQixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSw0Q0FBRyxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLDRDQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksNENBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsb0JBQUssR0FBTCxVQUFNLElBQVksRUFBRSxRQUEyQjtRQUEvQyxpQkFJQztRQUhHLFVBQVUsQ0FBQztZQUNQLFFBQVEsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQjJCO0FBQ0Y7QUFDTTtBQUVoQztJQUFBO1FBQ1ksU0FBSSxHQUFHLElBQUksNkNBQUksRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBRyxJQUFJLDhDQUFLLEVBQUUsQ0FBQztJQW1CaEMsQ0FBQztJQWpCRywwQkFBUyxHQUFULFVBQVUsSUFBWSxFQUFFLGFBQXlCLEVBQUUsWUFBd0IsRUFBRSxTQUFrQjtRQUEvRixpQkFnQkM7UUFmRyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDTixhQUFhLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHO2dCQUN0QixZQUFZLEVBQUUsQ0FBQztnQkFDZixJQUFHLEdBQUcsRUFBRSxDQUFDO29CQUNMLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUNELElBQU0sT0FBTyxHQUFHLElBQUksZ0RBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUM7UUFDTixDQUFDO2FBQU0sQ0FBQztZQUNKLElBQU0sT0FBTyxHQUFHLElBQUksZ0RBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLENBQUM7SUFDTCxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7SUFDSSxpQkFBb0IsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7SUFBRyxDQUFDO0lBRWhDLHVCQUFLLEdBQUwsVUFBTSxHQUFZO1FBQ2QsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoRCxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsQyxJQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNWLFNBQVMsQ0FBQyxTQUFTLEdBQUcsZ0RBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLDZEQUNULElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSwwREFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLHlCQUN0QztRQUNMLENBQUM7YUFBTSxDQUFDO1lBQ0osU0FBUyxDQUFDLFNBQVMsR0FBRyxXQUFXO1FBQ3JDLENBQUM7UUFFRCxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkQ7SUFDSSxhQUFvQixLQUFhLEVBQVUsU0FBaUIsRUFBVSxNQUFjO1FBQWhFLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFeEYsc0JBQUkscUJBQUk7YUFBUixjQUFxQixPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQzs7O09BQUE7SUFDeEMsc0JBQUkseUJBQVE7YUFBWixjQUF5QixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQzs7O09BQUE7SUFDaEQsc0JBQUksc0JBQUs7YUFBVCxjQUFzQixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQzs7O09BQUE7SUFDOUMsVUFBQztBQUFELENBQUM7Ozs7Ozs7O1VDTkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0IsbUNBQW1DO0FBQ0w7QUFFOUI7Ozs7RUFJRTtBQUVGLDJCQUEyQjtBQUMzQiw2QkFBNkI7QUFFN0IsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqRCxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25ELElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFcEQsSUFBTSxNQUFNLEdBQUcsSUFBSSwrQ0FBTSxFQUFFLENBQUM7QUFFNUIsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNoQyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBRTVCLE1BQU0sQ0FBQyxTQUFTLENBQ1osSUFBSSxFQUNKO1FBQ0ksUUFBUSxDQUFDLEtBQUssR0FBRyxXQUFXO1FBQzVCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUMsRUFDRDtRQUNJLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUMsRUFDRCxTQUFTLENBQ1o7SUFHRCwrQkFBK0I7SUFFL0IseUNBQXlDO0lBQ3pDLG1DQUFtQztJQUNuQyxpQ0FBaUM7SUFFakMsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxzQ0FBc0M7SUFDdEMsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osNENBQTRDO0lBQzVDLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1QsV0FBVztJQUNYLHdDQUF3QztJQUN4QyxnQ0FBZ0M7SUFDaEMsSUFBSTtBQUNSLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL2ZhY2FkZS9DYWNoZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy9mYWNhZGUvREJNUy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy9mYWNhZGUvRmFjYWRlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL2ZhY2FkZS9NZXNzYWdlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL2ZhY2FkZS9Sb3cudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy9mYWNhZGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdyBmcm9tIFwiLi9Sb3dcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY2hlIHtcclxuICAgIHByaXZhdGUgY2FjaGUgPSBuZXcgTWFwPHN0cmluZywgUm93PigpXHJcblxyXG4gICAgcHV0KHJvdzogUm93KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYWNoZS5zZXQocm93Lm5hbWUsIHJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KG5hbWU6IHN0cmluZyk6IFJvdyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUuZ2V0KG5hbWUpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgREJNUyB7XHJcbiAgICBwcml2YXRlIGRiID0gbmV3IE1hcDxzdHJpbmcsIFJvdz4oKVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGIuc2V0KFwiamFuZVwiLCBuZXcgUm93KFwiamFuZVwiLCBcIjE5OTAtMDItMTRcIiwgXCJqYW5lMDlAZW1haWwuY28ua3JcIikpO1xyXG4gICAgICAgIHRoaXMuZGIuc2V0KFwicm9iZXJ0XCIsIG5ldyBSb3coXCJyb2JlcnRcIiwgXCIxOTc5LTExLTA1XCIsIFwibmljZUBnbWFpbC5jb21cIikpO1xyXG4gICAgICAgIHRoaXMuZGIuc2V0KFwiZG9yb3NoXCIsIG5ldyBSb3coXCJkb3Jvc2hcIiwgXCIxOTg1LTA4LTIxXCIsIFwiZG9yb3NoQGVtYWlsLmNvbVwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVlcnkobmFtZTogc3RyaW5nLCBjYWxsYmFjazoocm93OiBSb3cpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5kYi5nZXQobmFtZSkpXHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ2FjaGUgZnJvbSBcIi4vQ2FjaGVcIjtcclxuaW1wb3J0IERCTVMgZnJvbSBcIi4vREJNU1wiO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi9NZXNzYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNhZGUge1xyXG4gICAgcHJpdmF0ZSBkYm1zID0gbmV3IERCTVMoKTtcclxuICAgIHByaXZhdGUgY2FjaGUgPSBuZXcgQ2FjaGUoKTtcclxuXHJcbiAgICBxdWVyeU5hbWUobmFtZTogc3RyaW5nLCBvbkJlZm9yZVF1ZXJ5OiAoKSA9PiB2b2lkLCBvbkFmdGVyUXVlcnk6ICgpID0+IHZvaWQsIGRvbU91dHB1dDogRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuY2FjaGUuZ2V0KG5hbWUpO1xyXG4gICAgICAgIGlmKCFyb3cpIHtcclxuICAgICAgICAgICAgb25CZWZvcmVRdWVyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRibXMucXVlcnkobmFtZSwgKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25BZnRlclF1ZXJ5KCk7XHJcbiAgICAgICAgICAgICAgICBpZihyb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dChyb3cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKHJvdyk7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnByaW50KGRvbU91dHB1dCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKHJvdyk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UucHJpbnQoZG9tT3V0cHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdzogUm93KSB7fVxyXG5cclxuICAgIHByaW50KGRvbTogRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGRvbUxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBkb21MYXlvdXQuY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5yb3cpIHtcclxuICAgICAgICAgICAgZG9tTGF5b3V0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+JHt0aGlzLnJvdy5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJpcnRoZGF5XCI+JHt0aGlzLnJvdy5iaXJ0aGRheX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbWFpbFwiPiR7dGhpcy5yb3cuZW1haWx9PC9kaXY+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb21MYXlvdXQuaW5uZXJIVE1MID0gYE5PIFJFU1VMVGBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvbS5hcHBlbmQoZG9tTGF5b3V0KVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm93IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hbWU6IHN0cmluZywgcHJpdmF0ZSBfYmlydGhkYXk6IHN0cmluZywgcHJpdmF0ZSBfZW1haWw6IHN0cmluZykge31cclxuXHJcbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbmFtZSB9XHJcbiAgICBnZXQgYmlydGhkYXkoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2JpcnRoZGF5IH1cclxuICAgIGdldCBlbWFpbCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fZW1haWwgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgQ2FjaGUgZnJvbSBcIi4vQ2FjaGVcIjtcclxuLy8gaW1wb3J0IERCTVMgZnJvbSBcIi4vREJNU1wiO1xyXG4vLyBpbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi9NZXNzYWdlXCI7XHJcbmltcG9ydCBGYWNhZGUgZnJvbSBcIi4vRmFjYWRlXCI7XHJcblxyXG4vKlxyXG5GYWNhZGXtjKjthLTsnYAg7Ja065akIOq4sOuKpSDqsJzrsJzsnYQg7JyE7ZW0IO2VhOyalO2VnCDrp47snYAg7YG0656Y7Iqk7JmAIOq0gOugqCBBUEntmLjstpwg65OxIOuzteyeoe2VnCDrgrTsmqnsnYQg64uo7Iic7ZmUIOyLnOy8nOyjvOuKlCDtjKjthLQuXHJcbuymiSwgRmFjYWRl7JeQIO2VtOuLue2VmOuKlCDtgbTrnpjsiqQg7ZWY64KY66GcIOuLqOyInO2ZlCDsi5ztgqTqs6Ag6riw7KG07J2YIO2BtOuemOyKpOuTpOydgCDqsJDstpwg7IiYIOyeiOydjC4o67mE6rO16rCcIOyymOumrOqwgCDqsIDriqUpXHJcbkZhY2FkZe2MqO2EtOydhCDsoIHsmqntlZjsl6wg66eM65Ok7Ja07KeEIOudvOydtOu4jOufrOumrOulvCDsgqzsmqntlZjripQg6rCc67Cc7J6Q7J2YIOyeheyepeyXkOyEnCDtlZnsirXsl5Ag64yA7ZWcIOu2gOuLtOydtCDspITslrTrk6Tqsowg65CoLlxyXG4qL1xyXG5cclxuLy8gY29uc3QgZGJtcyA9IG5ldyBEQk1TKCk7XHJcbi8vIGNvbnN0IGNhY2hlID0gbmV3IENhY2hlKCk7XHJcblxyXG5jb25zdCBkb21JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuY29uc3QgZG9tQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcclxuY29uc3QgZG9tUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XHJcblxyXG5jb25zdCBmYWNhZGUgPSBuZXcgRmFjYWRlKCk7XHJcblxyXG5kb21CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBkb21JbnB1dC52YWx1ZTtcclxuXHJcbiAgICBmYWNhZGUucXVlcnlOYW1lKFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgZG9tSW5wdXQudmFsdWUgPSBcIijsobDtmowg7KSRLi4uKVwiXHJcbiAgICAgICAgICAgIGRvbUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICBkb21JbnB1dC52YWx1ZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIGRvbUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZG9tUmVzdWx0XHJcbiAgICApXHJcblxyXG5cclxuICAgIC8vIGNvbnN0IHJvdyA9IGNhY2hlLmdldChuYW1lKTtcclxuXHJcbiAgICAvLyBpZighcm93KSB7ICAvLyBjYWNoZeyXkCDrjbDsnbTthLDqsIAg7KG07J6s7ZWY7KeAIOyViuydhCDqsr3smrAuXHJcbiAgICAvLyAgICAgZG9tSW5wdXQudmFsdWUgPSBcIijsobDtmowg7KSRLi4uKVwiXHJcbiAgICAvLyAgICAgZG9tQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyAgICAgZGJtcy5xdWVyeShuYW1lLCAocm93KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGRvbUlucHV0LnZhbHVlID0gbmFtZTtcclxuICAgIC8vICAgICAgICAgZG9tQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIGlmKHJvdykge1xyXG4gICAgLy8gICAgICAgICAgICAgY2FjaGUucHV0KHJvdyk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKHJvdyk7XHJcbiAgICAvLyAgICAgICAgIG1lc3NhZ2UucHJpbnQoZG9tUmVzdWx0KTtcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgICBjb25zdCBtZXNzYWdlID0gbmV3IE1lc3NhZ2Uocm93KTtcclxuICAgIC8vICAgICBtZXNzYWdlLnByaW50KGRvbVJlc3VsdCk7XHJcbiAgICAvLyB9XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9