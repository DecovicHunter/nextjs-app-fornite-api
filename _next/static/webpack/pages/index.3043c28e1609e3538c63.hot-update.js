webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ForniteItem.tsx":
/*!************************************!*\
  !*** ./components/ForniteItem.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\HASEE\\Desktop\\insta-clone-mobile-app\\nextjs-fornite-api-app\\components\\ForniteItem.tsx",
    _this = undefined;




var ForniteItem = function ForniteItem(_ref) {
  var _item$item, _item$item$images;

  var item = _ref.item;
  var filledstar = Math.round(item.item.ratings.avgStars);
  var rating = Array.from({
    length: filledstar
  }, function (_, index) {
    return index;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./item/" + item.itemId,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "block  bg-gray-800 rounded-2xl m-2 h-full mx-4  md:w-1/4 hover:bg-gray-700 hover:z-10 transform hover:scale-105 transition-all ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full overflow-hidden",
        style: {
          minHeight: 150
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: (_item$item = item.item) === null || _item$item === void 0 ? void 0 : (_item$item$images = _item$item.images) === null || _item$item$images === void 0 ? void 0 : _item$item$images.icon,
          className: "object-cover w-full h-full",
          alt: item.item.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-4 justify-between flex-col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-xl font-bold text-gray-100 whitespace-nowrap overflow-hidden overflow-ellipsis ",
          children: item.item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: " text-gray-300 text-sm overflow-hidden whitespace-nowrap overflow-ellipsis",
          children: item.item.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-gray-300",
          children: item.item.ratings.avgStars
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex",
          children: rating === null || rating === void 0 ? void 0 : rating.map(function (_, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/icons/star.svg",
              width: "20"
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_c = ForniteItem;
/* harmony default export */ __webpack_exports__["default"] = (ForniteItem);

var _c;

$RefreshReg$(_c, "ForniteItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JuaXRlSXRlbS50c3giXSwibmFtZXMiOlsiRm9ybml0ZUl0ZW0iLCJpdGVtIiwiZmlsbGVkc3RhciIsIk1hdGgiLCJyb3VuZCIsInJhdGluZ3MiLCJhdmdTdGFycyIsInJhdGluZyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpbmRleCIsIml0ZW1JZCIsIm1pbkhlaWdodCIsImltYWdlcyIsImljb24iLCJkZXNjcmlwdGlvbiIsIm5hbWUiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQU9BLElBQU1BLFdBQXdDLEdBQUcsU0FBM0NBLFdBQTJDLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDN0QsTUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsSUFBSSxDQUFDQSxJQUFMLENBQVVJLE9BQVYsQ0FBa0JDLFFBQTdCLENBQW5CO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBVztBQUFFQyxVQUFNLEVBQUVSO0FBQVYsR0FBWCxFQUFtQyxVQUFDUyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUM5RCxXQUFPQSxLQUFQO0FBQ0QsR0FGYyxDQUFmO0FBSUEsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsWUFBWVgsSUFBSSxDQUFDWSxNQUE3QjtBQUFBLDJCQUNFO0FBQUcsZUFBUyxFQUFDLGlJQUFiO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQXdDLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFO0FBQWIsU0FBL0M7QUFBQSwrQkFDRTtBQUNFLGFBQUcsZ0JBQUViLElBQUksQ0FBQ0EsSUFBUCxvRUFBRSxXQUFXYyxNQUFiLHNEQUFFLGtCQUFtQkMsSUFEMUI7QUFFRSxtQkFBUyxFQUFDLDRCQUZaO0FBR0UsYUFBRyxFQUFFZixJQUFJLENBQUNBLElBQUwsQ0FBVWdCO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRTtBQUFLLGlCQUFTLEVBQUMsOEJBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsc0ZBQWQ7QUFBQSxvQkFDR2hCLElBQUksQ0FBQ0EsSUFBTCxDQUFVaUI7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBRyxtQkFBUyxFQUFDLDRFQUFiO0FBQUEsb0JBQ0dqQixJQUFJLENBQUNBLElBQUwsQ0FBVWdCO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQU9FO0FBQUcsbUJBQVMsRUFBQyxlQUFiO0FBQUEsb0JBQThCaEIsSUFBSSxDQUFDQSxJQUFMLENBQVVJLE9BQVYsQ0FBa0JDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFRRTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLG9CQUNHQyxNQURILGFBQ0dBLE1BREgsdUJBQ0dBLE1BQU0sQ0FBRVksR0FBUixDQUFZLFVBQUNSLENBQUQsRUFBSUMsS0FBSjtBQUFBLGdDQUNYO0FBQWlCLGlCQUFHLEVBQUMsaUJBQXJCO0FBQXVDLG1CQUFLLEVBQUM7QUFBN0MsZUFBVUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURXO0FBQUEsV0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBakNEOztLQUFNWixXO0FBa0NTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMDQzYzI4ZTE2MDllMzUzOGM2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuaW50ZXJmYWNlIElGb3JuaXRlSXRlbVByb3BzIHtcclxuICBpdGVtOiBJdGVtO1xyXG59XHJcblxyXG5jb25zdCBGb3JuaXRlSXRlbTogUmVhY3QuRkM8SUZvcm5pdGVJdGVtUHJvcHM+ID0gKHsgaXRlbSB9KSA9PiB7XHJcbiAgY29uc3QgZmlsbGVkc3RhciA9IE1hdGgucm91bmQoaXRlbS5pdGVtLnJhdGluZ3MuYXZnU3RhcnMpO1xyXG4gIGNvbnN0IHJhdGluZyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGZpbGxlZHN0YXIgfSwgKF8sIGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtcIi4vaXRlbS9cIiArIGl0ZW0uaXRlbUlkfT5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwiYmxvY2sgIGJnLWdyYXktODAwIHJvdW5kZWQtMnhsIG0tMiBoLWZ1bGwgbXgtNCAgbWQ6dy0xLzQgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6ei0xMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tYWxsIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG92ZXJmbG93LWhpZGRlblwiIHN0eWxlPXt7IG1pbkhlaWdodDogMTUwIH19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2l0ZW0uaXRlbT8uaW1hZ2VzPy5pY29ufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1mdWxsIGgtZnVsbFwiXHJcbiAgICAgICAgICAgIGFsdD17aXRlbS5pdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBqdXN0aWZ5LWJldHdlZW4gZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktMTAwIHdoaXRlc3BhY2Utbm93cmFwIG92ZXJmbG93LWhpZGRlbiBvdmVyZmxvdy1lbGxpcHNpcyBcIj5cclxuICAgICAgICAgICAge2l0ZW0uaXRlbS5uYW1lfVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiB0ZXh0LWdyYXktMzAwIHRleHQtc20gb3ZlcmZsb3ctaGlkZGVuIHdoaXRlc3BhY2Utbm93cmFwIG92ZXJmbG93LWVsbGlwc2lzXCI+XHJcbiAgICAgICAgICAgIHtpdGVtLml0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCI+e2l0ZW0uaXRlbS5yYXRpbmdzLmF2Z1N0YXJzfTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICB7cmF0aW5nPy5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGltZyBrZXk9e2luZGV4fSBzcmM9XCIvaWNvbnMvc3Rhci5zdmdcIiB3aWR0aD1cIjIwXCIgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvcm5pdGVJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9