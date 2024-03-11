/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/template/Article.ts":
/*!*********************************!*\
  !*** ./src/template/Article.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Article = /** @class */ (function () {
    function Article(title, content, footer) {
        this.title = title;
        this.content = content;
        this.footer = footer;
    }
    Article.prototype.getTitle = function () {
        return this.title;
    };
    Article.prototype.getContent = function () {
        return this.content;
    };
    Article.prototype.getFooter = function () {
        return this.footer;
    };
    return Article;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);


/***/ }),

/***/ "./src/template/DisplayArticleTemplate.ts":
/*!************************************************!*\
  !*** ./src/template/DisplayArticleTemplate.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DisplayArticleTemplate = /** @class */ (function () {
    function DisplayArticleTemplate(article) {
        var _this = this;
        this.article = article;
        this.displayHtml = function () {
            return "\n            ".concat(_this.titleHtml(), "\n            ").concat(_this.contentHtml(), "\n            ").concat(_this.footerHtml(), "\n        ");
        };
    }
    return DisplayArticleTemplate;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayArticleTemplate);


/***/ }),

/***/ "./src/template/EditableDiaplayArticle.ts":
/*!************************************************!*\
  !*** ./src/template/EditableDiaplayArticle.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
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

var EditableDisplayArticle = /** @class */ (function (_super) {
    __extends(EditableDisplayArticle, _super);
    function EditableDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    EditableDisplayArticle.prototype.titleHtml = function () {
        return "<div><span>\uC81C\uBAA9</span><input value='".concat(this.article.getTitle(), "'/></div>");
    };
    EditableDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "".concat(item, "\n"); });
        return "<span>\uB0B4\uC6A9</span><br><textarea cols='50' rows='5'>".concat(items.join(''), "</textarea>");
    };
    EditableDisplayArticle.prototype.footerHtml = function () {
        return "<div><span>\uAE00\uC4F4\uC774</span><input value='".concat(this.article.getFooter(), "'/></div>");
    };
    return EditableDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableDisplayArticle);


/***/ }),

/***/ "./src/template/SimpleDisplayArticle.ts":
/*!**********************************************!*\
  !*** ./src/template/SimpleDisplayArticle.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
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

var SimpleDisplayArticle = /** @class */ (function (_super) {
    __extends(SimpleDisplayArticle, _super);
    function SimpleDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    SimpleDisplayArticle.prototype.titleHtml = function () {
        return "<h1>".concat(this.article.getTitle(), "</h1>");
    };
    SimpleDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "<li>".concat(item, "</li>"); });
        return "<ul>".concat(items.join(''), "</ul>");
    };
    SimpleDisplayArticle.prototype.footerHtml = function () {
        return "<h3>".concat(this.article.getFooter(), "</h3>");
    };
    return SimpleDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDisplayArticle);


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
  !*** ./src/template/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ "./src/template/Article.ts");
/* harmony import */ var _EditableDiaplayArticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableDiaplayArticle */ "./src/template/EditableDiaplayArticle.ts");
/* harmony import */ var _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleDisplayArticle */ "./src/template/SimpleDisplayArticle.ts");



/*
Template Method패턴은 어떤 기능을 구성하는 각 실행 순서(단계)를 미리 정하고
각 실행 단계에 대한 구체적인 코드를 재정의할 수 있는 유연성을 제공.
*/
var article = new _Article__WEBPACK_IMPORTED_MODULE_0__["default"]("title LEO", [
    "CONTENT1: textTEXT1",
    "CONTENT2: textTEXT2",
    "CONTENT3: textTEXT3"
], "LEO | company");
var display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
document.querySelector('.content').innerHTML = display.displayHtml();
document.querySelector(".edit-mode").addEventListener('change', function (event) {
    var display;
    if (event.target.checked) {
        display = new _EditableDiaplayArticle__WEBPACK_IMPORTED_MODULE_1__["default"](article);
    }
    else {
        display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
    }
    document.querySelector('.content').innerHTML = display.displayHtml();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQzhCO0FBQ0o7QUFHMUQ7OztFQUdFO0FBRUYsSUFBTSxPQUFPLEdBQUcsSUFBSSxnREFBTyxDQUN2QixXQUFXLEVBQ1g7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtDQUN4QixFQUNELGVBQWUsQ0FDbEI7QUFFRCxJQUFNLE9BQU8sR0FBRyxJQUFJLDZEQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUVyRSxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQUs7SUFDbEUsSUFBSSxPQUFPLENBQUM7SUFFWixJQUFzQixLQUFLLENBQUMsTUFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFDLE9BQU8sR0FBRyxJQUFJLCtEQUFzQixDQUFDLE9BQU8sQ0FBQztJQUNqRCxDQUFDO1NBQU0sQ0FBQztRQUNKLE9BQU8sR0FBRyxJQUFJLDZEQUFvQixDQUFDLE9BQU8sQ0FBQztJQUMvQyxDQUFDO0lBRUQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3pFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL3RlbXBsYXRlL0FydGljbGUudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvdGVtcGxhdGUvRGlzcGxheUFydGljbGVUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi8uL3NyYy90ZW1wbGF0ZS9FZGl0YWJsZURpYXBsYXlBcnRpY2xlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuLy4vc3JjL3RlbXBsYXRlL1NpbXBsZURpc3BsYXlBcnRpY2xlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2dvZl9kZXNpZ25fcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZ29mX2Rlc2lnbl9wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9nb2ZfZGVzaWduX3BhdHRlcm4vLi9zcmMvdGVtcGxhdGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJ0aWNsZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0aXRsZTogc3RyaW5nLCBwcml2YXRlIGNvbnRlbnQ6IHN0cmluZ1tdLCBwcml2YXRlIGZvb3Rlcjogc3RyaW5nKSB7fVxyXG5cclxuICAgIGdldFRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udGVudCgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb290ZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb290ZXI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi9BcnRpY2xlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcnRpY2xlOiBBcnRpY2xlKSB7fVxyXG4gICAgXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGlzcGxheUh0bWwgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgJHt0aGlzLnRpdGxlSHRtbCgpfVxyXG4gICAgICAgICAgICAke3RoaXMuY29udGVudEh0bWwoKX1cclxuICAgICAgICAgICAgJHt0aGlzLmZvb3Rlckh0bWwoKX1cclxuICAgICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHRpdGxlSHRtbCgpOiBzdHJpbmdcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjb250ZW50SHRtbCgpOiBzdHJpbmdcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBmb290ZXJIdG1sKCk6IHN0cmluZ1xyXG59IiwiaW1wb3J0IEFydGljbGUgZnJvbSBcIi4vQXJ0aWNsZVwiO1xyXG5pbXBvcnQgRGlzcGxheUFydGljbGVUZW1wbGF0ZSBmcm9tIFwiLi9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRhYmxlRGlzcGxheUFydGljbGUgZXh0ZW5kcyBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIHtcclxuICAgIHByb3RlY3RlZCB0aXRsZUh0bWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYDxkaXY+PHNwYW4+7KCc66qpPC9zcGFuPjxpbnB1dCB2YWx1ZT0nJHt0aGlzLmFydGljbGUuZ2V0VGl0bGUoKX0nLz48L2Rpdj5gXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnRlbnRIdG1sKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmFydGljbGUuZ2V0Q29udGVudCgpLm1hcCggaXRlbSA9PiBgJHtpdGVtfVxcbmApO1xyXG4gICAgICAgIHJldHVybiBgPHNwYW4+64K07JqpPC9zcGFuPjxicj48dGV4dGFyZWEgY29scz0nNTAnIHJvd3M9JzUnPiR7aXRlbXMuam9pbignJyl9PC90ZXh0YXJlYT5gXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGZvb3Rlckh0bWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYDxkaXY+PHNwYW4+6riA7JO07J20PC9zcGFuPjxpbnB1dCB2YWx1ZT0nJHt0aGlzLmFydGljbGUuZ2V0Rm9vdGVyKCl9Jy8+PC9kaXY+YFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFydGljbGU6IEFydGljbGUpIHtcclxuICAgICAgICBzdXBlcihhcnRpY2xlKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59IiwiaW1wb3J0IEFydGljbGUgZnJvbSBcIi4vQXJ0aWNsZVwiO1xyXG5pbXBvcnQgRGlzcGxheUFydGljbGVUZW1wbGF0ZSBmcm9tIFwiLi9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVEaXNwbGF5QXJ0aWNsZSBleHRlbmRzIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUge1xyXG4gICAgcHJvdGVjdGVkIHRpdGxlSHRtbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgPGgxPiR7dGhpcy5hcnRpY2xlLmdldFRpdGxlKCl9PC9oMT5gXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnRlbnRIdG1sKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmFydGljbGUuZ2V0Q29udGVudCgpLm1hcChpdGVtID0+IGA8bGk+JHtpdGVtfTwvbGk+YClcclxuICAgICAgICByZXR1cm4gYDx1bD4ke2l0ZW1zLmpvaW4oJycpfTwvdWw+YFxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBmb290ZXJIdG1sKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGA8aDM+JHt0aGlzLmFydGljbGUuZ2V0Rm9vdGVyKCl9PC9oMz5gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXJ0aWNsZTogQXJ0aWNsZSkge1xyXG4gICAgICAgIHN1cGVyKGFydGljbGUpXHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcnRpY2xlIGZyb20gXCIuL0FydGljbGVcIjtcclxuaW1wb3J0IEVkaXRhYmxlRGlzcGxheUFydGljbGUgZnJvbSBcIi4vRWRpdGFibGVEaWFwbGF5QXJ0aWNsZVwiO1xyXG5pbXBvcnQgU2ltcGxlRGlzcGxheUFydGljbGUgZnJvbSBcIi4vU2ltcGxlRGlzcGxheUFydGljbGVcIjtcclxuXHJcblxyXG4vKlxyXG5UZW1wbGF0ZSBNZXRob2TtjKjthLTsnYAg7Ja065akIOq4sOuKpeydhCDqtazshLHtlZjripQg6rCBIOyLpO2WiSDsiJzshJwo64uo6rOEKeulvCDrr7jrpqwg7KCV7ZWY6rOgIFxyXG7qsIEg7Iuk7ZaJIOuLqOqzhOyXkCDrjIDtlZwg6rWs7LK07KCB7J24IOy9lOuTnOulvCDsnqzsoJXsnZjtlaAg7IiYIOyeiOuKlCDsnKDsl7DshLHsnYQg7KCc6rO1LlxyXG4qL1xyXG5cclxuY29uc3QgYXJ0aWNsZSA9IG5ldyBBcnRpY2xlKFxyXG4gICAgXCJ0aXRsZSBMRU9cIixcclxuICAgIFtcclxuICAgICAgICBcIkNPTlRFTlQxOiB0ZXh0VEVYVDFcIixcclxuICAgICAgICBcIkNPTlRFTlQyOiB0ZXh0VEVYVDJcIixcclxuICAgICAgICBcIkNPTlRFTlQzOiB0ZXh0VEVYVDNcIlxyXG4gICAgXSxcclxuICAgIFwiTEVPIHwgY29tcGFueVwiXHJcbilcclxuXHJcbmNvbnN0IGRpc3BsYXkgPSBuZXcgU2ltcGxlRGlzcGxheUFydGljbGUoYXJ0aWNsZSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykuaW5uZXJIVE1MID0gZGlzcGxheS5kaXNwbGF5SHRtbCgpO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LW1vZGVcIikuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICBsZXQgZGlzcGxheTtcclxuXHJcbiAgICBpZigoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5jaGVja2VkKSB7XHJcbiAgICAgICAgZGlzcGxheSA9IG5ldyBFZGl0YWJsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BsYXkgPSBuZXcgU2ltcGxlRGlzcGxheUFydGljbGUoYXJ0aWNsZSlcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmlubmVySFRNTCA9IGRpc3BsYXkuZGlzcGxheUh0bWwoKTtcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=