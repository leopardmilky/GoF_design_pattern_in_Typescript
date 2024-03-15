/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/proxy/ProxyImage.ts":
/*!*********************************!*\
  !*** ./src/proxy/ProxyImage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RealImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RealImage */ "./src/proxy/RealImage.ts");

var ProxyImage = /** @class */ (function () {
    function ProxyImage(title, url, parent) {
        this.title = title;
        this.url = url;
        this.parent = parent;
        this.image = null;
        this.domLayout = null;
        this.domTitle = null;
        this.domLayout = document.createElement('div');
        this.domLayout.classList.add('layout');
        this.parent.append(this.domLayout);
        this.domTitle = document.createElement('div');
        this.domTitle.classList.add('title-proxy');
        this.domTitle.innerHTML = "<span>".concat(this.title, "</span><br><span>Click to load</span>");
        this.domLayout.append(this.domTitle);
    }
    ProxyImage.prototype.append = function () {
        var _this = this;
        if (this.image)
            return;
        this.domLayout.addEventListener("click", function () {
            _this.domLayout.style.border = "none";
            _this.domLayout.innerHTML = "";
            _this.image = new _RealImage__WEBPACK_IMPORTED_MODULE_0__["default"](_this.title, _this.url, _this.domLayout);
            _this.image.append();
        });
    };
    return ProxyImage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProxyImage);


/***/ }),

/***/ "./src/proxy/RealImage.ts":
/*!********************************!*\
  !*** ./src/proxy/RealImage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var RealImage = /** @class */ (function () {
    function RealImage(title, url, parent) {
        this.title = title;
        this.url = url;
        this.parent = parent;
        this.domLayout = null;
        this.domTitle = null;
        this.domImage = null;
        this.domLoading = null;
        this.domLayout = document.createElement('div');
        this.domLayout.classList.add('layout');
        this.parent.append(this.domLayout);
        this.domTitle = document.createElement('div');
        this.domTitle.classList.add('title');
        this.domTitle.innerText = this.title;
        this.domLayout.append(this.domTitle);
        this.domLoading = document.createElement('div');
        this.domLoading.classList.add('loading');
        this.domLoading.innerText = 'Loading...';
    }
    RealImage.prototype.append = function () {
        var _this = this;
        if (this.domImage)
            return;
        this.domImage = new Image();
        this.domLayout.append(this.domLoading);
        this.domImage.src = this.url;
        this.domImage.onload = function () {
            setTimeout(function () {
                _this.domLayout.removeChild(_this.domLoading);
                _this.domLayout.append(_this.domImage);
            }, Math.random() * 2000 + 1000);
        };
    };
    return RealImage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RealImage);


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
  !*** ./src/proxy/index.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProxyImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProxyImage */ "./src/proxy/ProxyImage.ts");

var items = [
    ["설산야경", "https://cdn.bhdw.net/im/snow-mountain-night-wallpaper-81305_w635.webp"],
    ["외로운늑대", "https://cdn.bhdw.net/im/fantasy-world-wallpaper-29897_w635.webp"],
    ["강변황혼", "https://cdn.bhdw.net/im/sunset-minimalist-wallpaper-81072_w635.webp"],
    ["일출", "https://cdn.bhdw.net/im/sunset-scenery-minimalist-wallpaper-81379_w635.webp"],
    ["지구탈출", "https://cdn.bhdw.net/im/mountain-scenery-art-wallpaper-81095_w635.webp"],
    ["고양이", "https://wallpapers.com/images/hd/cute-praying-animal-kitten-fhuzpz6q5d3l5qpw.webp"],
    ["사마귀", "https://wallpapers.com/images/high/sparkling-brown-praying-mantis-brhsitcpcco26pcl.webp"],
    ["앵무새", "https://wallpapers.com/images/high/golden-conure-parrots-bifvcsdpuwm1gxlf.webp"],
    ["비둘기", "https://wallpapers.com/images/high/flying-homing-pigeon-low-angle-shot-bliq95v02wjt2d7b.webp"],
    ["벌", "https://wallpapers.com/images/high/bee-desktop-wallpaper-c0hpghgtppnmux5f.webp"],
    ["닭", "https://wallpapers.com/images/high/rooster-tied-in-rock-9x6089a6edflz844.webp"],
    ["도마뱀", "https://wallpapers.com/images/high/green-gecko-reptile-atv6058gd3fj8ors.webp"],
    ["노란앵무새", "https://wallpapers.com/images/high/two-conure-parrots-with-blurry-backdrop-elrhq1l9840e79xd.webp"],
    ["하얀비둘기", "https://wallpapers.com/images/high/elegant-white-indian-fantail-pigeons-cxlk42hr0htvks8p.webp"],
    ["부엉이", "https://wallpapers.com/images/high/little-owlet-animal-lg0huhcfvtwb6kci.webp"],
    ["무지개비둘기", "https://wallpapers.com/images/high/colorful-homing-pigeon-birds-macro-shot-64tnhxlh4t361yxq.webp"],
    ["뱀", "https://wallpapers.com/images/high/cobra-close-up-hissing-tongue-4l5lbdbi3rblrsjj.webp"],
];
/*
Proxy패턴의 종류에는 가상Proxy, 원격Proxy, 보호Proxy 등이 있음.
가상Proxy는 필요한 시점까지 객체의 생성을 연기하고 마치 생성된 것처럼 동작하다가 필요한 시점에 실제 객체를 생성해서 사용함.
Proxy패턴은 실제 기능 실행을 대리인(Proxy)을 통해 실행하도록 하는 것이 근본적인 목적임.
*/
var domList = document.querySelector(".list");
items.forEach(function (item) {
    var title = item[0];
    var url = item[1];
    // const img = new RealImage(title, url, domList);
    var img = new _ProxyImage__WEBPACK_IMPORTED_MODULE_0__["default"](title, url, domList);
    img.append();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsaUVBQWlFLENBQUM7SUFDNUUsQ0FBQyxNQUFNLEVBQUUscUVBQXFFLENBQUM7SUFDL0UsQ0FBQyxJQUFJLEVBQUUsNkVBQTZFLENBQUM7SUFDckYsQ0FBQyxNQUFNLEVBQUUsd0VBQXdFLENBQUM7SUFDbEYsQ0FBQyxLQUFLLEVBQUUsbUZBQW1GLENBQUM7SUFDNUYsQ0FBQyxLQUFLLEVBQUUseUZBQXlGLENBQUM7SUFDbEcsQ0FBQyxLQUFLLEVBQUUsZ0ZBQWdGLENBQUM7SUFDekYsQ0FBQyxLQUFLLEVBQUUsOEZBQThGLENBQUM7SUFDdkcsQ0FBQyxHQUFHLEVBQUUsZ0ZBQWdGLENBQUM7SUFDdkYsQ0FBQyxHQUFHLEVBQUUsK0VBQStFLENBQUM7SUFDdEYsQ0FBQyxLQUFLLEVBQUUsOEVBQThFLENBQUM7SUFDdkYsQ0FBQyxPQUFPLEVBQUUsa0dBQWtHLENBQUM7SUFDN0csQ0FBQyxPQUFPLEVBQUUsK0ZBQStGLENBQUM7SUFDMUcsQ0FBQyxLQUFLLEVBQUUsOEVBQThFLENBQUM7SUFDdkYsQ0FBQyxRQUFRLEVBQUUsa0dBQWtHLENBQUM7SUFDOUcsQ0FBQyxHQUFHLEVBQUUsd0ZBQXdGLENBQUM7Q0FDbEc7QUFFRDs7OztFQUlFO0FBRUYsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFFL0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFJO0lBQ2QsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyQixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRW5CLGtEQUFrRDtJQUNsRCxJQUFNLEdBQUcsR0FBRyxJQUFJLG1EQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVoRCxHQUFHLENBQUMsTUFBTSxFQUFFO0FBQ2hCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL3Byb3h5L1Byb3h5SW1hZ2UudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvcHJveHkvUmVhbEltYWdlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvcHJveHkvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWxJbWFnZSBmcm9tIFwiLi9SZWFsSW1hZ2VcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCIuL2ltYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm94eUltYWdlIGltcGxlbWVudHMgSW1hZ2Uge1xyXG4gICAgcHJpdmF0ZSBpbWFnZTogUmVhbEltYWdlID0gbnVsbFxyXG4gICAgcHJpdmF0ZSBkb21MYXlvdXQ6IEhUTUxEaXZFbGVtZW50ID0gbnVsbFxyXG4gICAgcHJpdmF0ZSBkb21UaXRsZTogSFRNTERpdkVsZW1lbnQgPSBudWxsXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0aXRsZTogc3RyaW5nLCBwcml2YXRlIHVybDogc3RyaW5nLCBwcml2YXRlIHBhcmVudDogRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZG9tTGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aGlzLmRvbUxheW91dC5jbGFzc0xpc3QuYWRkKCdsYXlvdXQnKVxyXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLmRvbUxheW91dClcclxuXHJcbiAgICAgICAgdGhpcy5kb21UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5kb21UaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1wcm94eScpXHJcbiAgICAgICAgdGhpcy5kb21UaXRsZS5pbm5lckhUTUwgPSBgPHNwYW4+JHt0aGlzLnRpdGxlfTwvc3Bhbj48YnI+PHNwYW4+Q2xpY2sgdG8gbG9hZDwvc3Bhbj5gXHJcbiAgICAgICAgdGhpcy5kb21MYXlvdXQuYXBwZW5kKHRoaXMuZG9tVGl0bGUpXHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaW1hZ2UpIHJldHVyblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZG9tTGF5b3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tTGF5b3V0LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiXHJcbiAgICAgICAgICAgIHRoaXMuZG9tTGF5b3V0LmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBSZWFsSW1hZ2UodGhpcy50aXRsZSwgdGhpcy51cmwsIHRoaXMuZG9tTGF5b3V0KVxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLmFwcGVuZCgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImltcG9ydCBJbWFnZSBmcm9tIFwiLi9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhbEltYWdlIGltcGxlbWVudHMgSW1hZ2Uge1xyXG4gICAgcHJpdmF0ZSBkb21MYXlvdXQ6IEhUTUxEaXZFbGVtZW50ID0gbnVsbFxyXG4gICAgcHJpdmF0ZSBkb21UaXRsZTogSFRNTERpdkVsZW1lbnQgPSBudWxsXHJcbiAgICBwcml2YXRlIGRvbUltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gbnVsbFxyXG4gICAgcHJpdmF0ZSBkb21Mb2FkaW5nOiBIVE1MRGl2RWxlbWVudCA9IG51bGxcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpdGxlOiBzdHJpbmcsIHByaXZhdGUgdXJsOiBzdHJpbmcsIHByaXZhdGUgcGFyZW50OiBFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5kb21MYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmRvbUxheW91dC5jbGFzc0xpc3QuYWRkKCdsYXlvdXQnKTtcclxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy5kb21MYXlvdXQpO1xyXG5cclxuICAgICAgICB0aGlzLmRvbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5kb21UaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgICAgIHRoaXMuZG9tVGl0bGUuaW5uZXJUZXh0ID0gdGhpcy50aXRsZTtcclxuICAgICAgICB0aGlzLmRvbUxheW91dC5hcHBlbmQodGhpcy5kb21UaXRsZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZG9tTG9hZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZG9tTG9hZGluZy5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XHJcbiAgICAgICAgdGhpcy5kb21Mb2FkaW5nLmlubmVyVGV4dCA9ICdMb2FkaW5nLi4uJztcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5kb21JbWFnZSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5kb21JbWFnZSA9IG5ldyBJbWFnZSgpXHJcblxyXG4gICAgICAgIHRoaXMuZG9tTGF5b3V0LmFwcGVuZCh0aGlzLmRvbUxvYWRpbmcpXHJcbiAgICAgICAgdGhpcy5kb21JbWFnZS5zcmMgPSB0aGlzLnVybDtcclxuXHJcbiAgICAgICAgdGhpcy5kb21JbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb21MYXlvdXQucmVtb3ZlQ2hpbGQodGhpcy5kb21Mb2FkaW5nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tTGF5b3V0LmFwcGVuZCh0aGlzLmRvbUltYWdlKTtcclxuICAgICAgICAgICAgfSwgTWF0aC5yYW5kb20oKSoyMDAwKzEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb3h5SW1hZ2UgZnJvbSBcIi4vUHJveHlJbWFnZVwiXHJcbmltcG9ydCBSZWFsSW1hZ2UgZnJvbSBcIi4vUmVhbEltYWdlXCJcclxuXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gICAgW1wi7ISk7IKw7JW86rK9XCIsIFwiaHR0cHM6Ly9jZG4uYmhkdy5uZXQvaW0vc25vdy1tb3VudGFpbi1uaWdodC13YWxscGFwZXItODEzMDVfdzYzNS53ZWJwXCJdLFxyXG4gICAgW1wi7Jm466Gc7Jq064qR64yAXCIsIFwiaHR0cHM6Ly9jZG4uYmhkdy5uZXQvaW0vZmFudGFzeS13b3JsZC13YWxscGFwZXItMjk4OTdfdzYzNS53ZWJwXCJdLFxyXG4gICAgW1wi6rCV67OA7Zmp7Zi8XCIsIFwiaHR0cHM6Ly9jZG4uYmhkdy5uZXQvaW0vc3Vuc2V0LW1pbmltYWxpc3Qtd2FsbHBhcGVyLTgxMDcyX3c2MzUud2VicFwiXSxcclxuICAgIFtcIuydvOy2nFwiLCBcImh0dHBzOi8vY2RuLmJoZHcubmV0L2ltL3N1bnNldC1zY2VuZXJ5LW1pbmltYWxpc3Qtd2FsbHBhcGVyLTgxMzc5X3c2MzUud2VicFwiXSxcclxuICAgIFtcIuyngOq1rO2DiOy2nFwiLCBcImh0dHBzOi8vY2RuLmJoZHcubmV0L2ltL21vdW50YWluLXNjZW5lcnktYXJ0LXdhbGxwYXBlci04MTA5NV93NjM1LndlYnBcIl0sXHJcbiAgICBbXCLqs6DslpHsnbRcIiwgXCJodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oZC9jdXRlLXByYXlpbmctYW5pbWFsLWtpdHRlbi1maHV6cHo2cTVkM2w1cXB3LndlYnBcIl0sXHJcbiAgICBbXCLsgqzrp4jqt4BcIiwgXCJodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oaWdoL3NwYXJrbGluZy1icm93bi1wcmF5aW5nLW1hbnRpcy1icmhzaXRjcGNjbzI2cGNsLndlYnBcIl0sXHJcbiAgICBbXCLslbXrrLTsg4hcIiwgXCJodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oaWdoL2dvbGRlbi1jb251cmUtcGFycm90cy1iaWZ2Y3NkcHV3bTFneGxmLndlYnBcIl0sXHJcbiAgICBbXCLruYTrkZjquLBcIiwgXCJodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oaWdoL2ZseWluZy1ob21pbmctcGlnZW9uLWxvdy1hbmdsZS1zaG90LWJsaXE5NXYwMndqdDJkN2Iud2VicFwiXSxcclxuICAgIFtcIuuyjFwiLCBcImh0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hpZ2gvYmVlLWRlc2t0b3Atd2FsbHBhcGVyLWMwaHBnaGd0cHBubXV4NWYud2VicFwiXSxcclxuICAgIFtcIuuLrVwiLCBcImh0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hpZ2gvcm9vc3Rlci10aWVkLWluLXJvY2stOXg2MDg5YTZlZGZsejg0NC53ZWJwXCJdLFxyXG4gICAgW1wi64+E66eI67GAXCIsIFwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9ncmVlbi1nZWNrby1yZXB0aWxlLWF0djYwNThnZDNmajhvcnMud2VicFwiXSxcclxuICAgIFtcIuuFuOuegOyVteustOyDiFwiLCBcImh0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hpZ2gvdHdvLWNvbnVyZS1wYXJyb3RzLXdpdGgtYmx1cnJ5LWJhY2tkcm9wLWVscmhxMWw5ODQwZTc5eGQud2VicFwiXSxcclxuICAgIFtcIu2VmOyWgOu5hOuRmOq4sFwiLCBcImh0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hpZ2gvZWxlZ2FudC13aGl0ZS1pbmRpYW4tZmFudGFpbC1waWdlb25zLWN4bGs0MmhyMGh0dmtzOHAud2VicFwiXSxcclxuICAgIFtcIuu2gOyXieydtFwiLCBcImh0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hpZ2gvbGl0dGxlLW93bGV0LWFuaW1hbC1sZzBodWhjZnZ0d2I2a2NpLndlYnBcIl0sXHJcbiAgICBbXCLrrLTsp4DqsJzruYTrkZjquLBcIiwgXCJodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oaWdoL2NvbG9yZnVsLWhvbWluZy1waWdlb24tYmlyZHMtbWFjcm8tc2hvdC02NHRuaHhsaDR0MzYxeXhxLndlYnBcIl0sXHJcbiAgICBbXCLrsYBcIiwgXCJodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oaWdoL2NvYnJhLWNsb3NlLXVwLWhpc3NpbmctdG9uZ3VlLTRsNWxiZGJpM3JibHJzamoud2VicFwiXSxcclxuXVxyXG5cclxuLypcclxuUHJveHntjKjthLTsnZgg7KKF66WY7JeQ64qUIOqwgOyDgVByb3h5LCDsm5DqsqlQcm94eSwg67O07Zi4UHJveHkg65Ox7J20IOyeiOydjC5cclxu6rCA7IOBUHJveHnripQg7ZWE7JqU7ZWcIOyLnOygkOq5jOyngCDqsJ3ssrTsnZgg7IOd7ISx7J2EIOyXsOq4sO2VmOqzoCDrp4jsuZgg7IOd7ISx65CcIOqyg+yymOufvCDrj5nsnpHtlZjri6TqsIAg7ZWE7JqU7ZWcIOyLnOygkOyXkCDsi6TsoJwg6rCd7LK066W8IOyDneyEse2VtOyEnCDsgqzsmqntlaguXHJcblByb3h57Yyo7YS07J2AIOyLpOygnCDquLDriqUg7Iuk7ZaJ7J2EIOuMgOumrOyduChQcm94eSnsnYQg7Ya17ZW0IOyLpO2Wie2VmOuPhOuhnSDtlZjripQg6rKD7J20IOq3vOuzuOyggeyduCDrqqnsoIHsnoQuXHJcbiovXHJcblxyXG5jb25zdCBkb21MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0XCIpXHJcblxyXG5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSBpdGVtWzBdXHJcbiAgICBjb25zdCB1cmwgPSBpdGVtWzFdXHJcblxyXG4gICAgLy8gY29uc3QgaW1nID0gbmV3IFJlYWxJbWFnZSh0aXRsZSwgdXJsLCBkb21MaXN0KTtcclxuICAgIGNvbnN0IGltZyA9IG5ldyBQcm94eUltYWdlKHRpdGxlLCB1cmwsIGRvbUxpc3QpO1xyXG5cclxuICAgIGltZy5hcHBlbmQoKVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==