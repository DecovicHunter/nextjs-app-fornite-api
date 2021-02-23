webpackHotUpdate_N_E("pages/item/[id]",{

/***/ "./pages/item/[id].tsx":
/*!*****************************!*\
  !*** ./pages/item/[id].tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading.tsx");


var _jsxFileName = "C:\\Users\\HASEE\\Desktop\\insta-clone-mobile-app\\nextjs-fornite-api-app\\pages\\item\\[id].tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Item = function Item(_ref) {
  _s();

  var _itemData$item, _itemData$item2, _itemData$item2$image;

  var itemData = _ref.itemData;

  if (!itemData) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }, _this);
  }

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var filledstar = Math.round(itemData === null || itemData === void 0 ? void 0 : (_itemData$item = itemData.item) === null || _itemData$item === void 0 ? void 0 : _itemData$item.ratings.avgStars);
  var rating = Array.from({
    length: filledstar
  }, function (_, index) {
    return index;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "md:p-12 bg-gray-100 min-h-screen ",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: " h-full relative",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: function onClick() {
          return router.back();
        },
        className: "inline-block absolute md:top-5 md:left-5  top-2 left-2 font-bold p-2 text-gray-100 cursor-pointer",
        children: "Go back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-xl  mx-2 overflow-hidden flex flex-1 justify-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: (_itemData$item2 = itemData.item) === null || _itemData$item2 === void 0 ? void 0 : (_itemData$item2$image = _itemData$item2.images) === null || _itemData$item2$image === void 0 ? void 0 : _itemData$item2$image.icon,
          className: "object-cover ",
          alt: itemData.item.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-4 flex-col  h-full",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-3xl font-bold my-5  ",
          children: itemData.item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline font-bold text-lg",
            children: "Type:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline",
            children: itemData.item.type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline font-bold text-lg",
            children: "Description:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-gray-800  text-sm inline-block ",
            children: itemData.item.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline font-bold text-lg",
            children: "Cost:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-gray-800  text-sm inline",
            children: itemData.item.cost
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline font-bold text-lg",
            children: "Rarity:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-gray-800  text-sm inline-block ",
            children: itemData.item.rarity
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline font-bold text-lg",
            children: "Series:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-gray-800  text-sm inline-block ",
            children: itemData.item.series
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex text-center align-middle",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline font-bold text-lg",
            children: "Stars: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this), " ", rating === null || rating === void 0 ? void 0 : rating.map(function (_, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/icons/star.svg",
              width: "20"
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this);
          }), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: ["(", Math.round(itemData.item.ratings.avgStars), ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)]
    }, itemData === null || itemData === void 0 ? void 0 : itemData.itemId, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
}; // export const getServerSideProps: GetServerSideProps = async (context) => {
//   const itemId = context.params.id;
//   let itemData: item;
//   try {
//     itemData = await fetchData("/item/get?id=" + itemId);
//   } catch (error) {
//     // console.log(error);
//   }
//   return {
//     props: { itemData },
//   };
// };


_s(Item, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Item;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Item);

var _c;

$RefreshReg$(_c, "Item");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXRlbS8udHN4Il0sIm5hbWVzIjpbIkl0ZW0iLCJpdGVtRGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbGxlZHN0YXIiLCJNYXRoIiwicm91bmQiLCJpdGVtIiwicmF0aW5ncyIsImF2Z1N0YXJzIiwicmF0aW5nIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwiYmFjayIsImltYWdlcyIsImljb24iLCJkZXNjcmlwdGlvbiIsIm5hbWUiLCJ0eXBlIiwiY29zdCIsInJhcml0eSIsInNlcmllcyIsIm1hcCIsIml0ZW1JZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTs7QUFNQSxJQUFNQSxJQUEwQixHQUFHLFNBQTdCQSxJQUE2QixPQUFrQjtBQUFBOztBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDbkQsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYix3QkFBTyxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFDRCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsUUFBWCxhQUFXQSxRQUFYLHlDQUFXQSxRQUFRLENBQUVNLElBQXJCLG1EQUFXLGVBQWdCQyxPQUFoQixDQUF3QkMsUUFBbkMsQ0FBbkI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXO0FBQUVDLFVBQU0sRUFBRVQ7QUFBVixHQUFYLEVBQW1DLFVBQUNVLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQzlELFdBQU9BLEtBQVA7QUFDRCxHQUZjLENBQWY7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxtQ0FBZjtBQUFBLDJCQUNFO0FBQTRCLGVBQVMsRUFBQyxrQkFBdEM7QUFBQSw4QkFDRTtBQUNFLGVBQU8sRUFBRTtB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LGVBTUU7QUFBRyxxQkFBUyxFQUFDLGNBQWI7QUFBQSw0QkFDSVYsSUFBSSxDQUFDQyxLQUFMLENBQVdMLFFBQVEsQ0FBQ00sSUFBVCxDQUFjQyxPQUFkLENBQXNCQyxRQUFqQyxDQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGO0FBQUEsT0FBVVIsUUFBVixhQUFVQSxRQUFWLHVCQUFVQSxRQUFRLENBQUV5QixNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkRELENBdkVELEMsQ0F5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7R0FyRk0xQixJO1VBSVdHLHFEOzs7S0FKWEgsSTs7QUErSFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2l0ZW0vW2lkXS44YTY2NDVjNWFlZGE5NzdhODE5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tIFwiLi4vLi4vaXRlbURhdGFGZXRjaFwiO1xyXG5pbXBvcnQgeyBJdGVtIGFzIGl0ZW0gfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcblxyXG5pbnRlcmZhY2UgSUl0ZW1Qcm9wcyB7XHJcbiAgaXRlbURhdGE6IGl0ZW07XHJcbn1cclxuXHJcbmNvbnN0IEl0ZW06IFJlYWN0LkZDPElJdGVtUHJvcHM+ID0gKHsgaXRlbURhdGEgfSkgPT4ge1xyXG4gIGlmICghaXRlbURhdGEpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZmlsbGVkc3RhciA9IE1hdGgucm91bmQoaXRlbURhdGE/Lml0ZW0/LnJhdGluZ3MuYXZnU3RhcnMpO1xyXG4gIGNvbnN0IHJhdGluZyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGZpbGxlZHN0YXIgfSwgKF8sIGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnAtMTIgYmctZ3JheS0xMDAgbWluLWgtc2NyZWVuIFwiPlxyXG4gICAgICA8ZGl2IGtleT17aXRlbURhdGE/Lml0ZW1JZH0gY2xhc3NOYW1lPVwiIGgtZnVsbCByZWxhdGl2ZVwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGFic29sdXRlIG1kOnRvcC01IG1kOmxlZnQtNSAgdG9wLTIgbGVmdC0yIGZvbnQtYm9sZCBwLTIgdGV4dC1ncmF5LTEwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgR28gYmFja1xyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHJvdW5kZWQteGwgIG14LTIgb3ZlcmZsb3ctaGlkZGVuIGZsZXggZmxleC0xIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17aXRlbURhdGEuaXRlbT8uaW1hZ2VzPy5pY29ufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgXCJcclxuICAgICAgICAgICAgYWx0PXtpdGVtRGF0YS5pdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBmbGV4LWNvbCAgaC1mdWxsXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG15LTUgIFwiPntpdGVtRGF0YS5pdGVtLm5hbWV9PC9oMT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZSBmb250LWJvbGQgdGV4dC1sZ1wiPlR5cGU6PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmVcIj57aXRlbURhdGEuaXRlbS50eXBlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lIGZvbnQtYm9sZCB0ZXh0LWxnXCI+RGVzY3JpcHRpb246PC9wPntcIiBcIn1cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCAgdGV4dC1zbSBpbmxpbmUtYmxvY2sgXCI+XHJcbiAgICAgICAgICAgICAge2l0ZW1EYXRhLml0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lIGZvbnQtYm9sZCB0ZXh0LWxnXCI+Q29zdDo8L3A+XHJcbiAgICAgICAgICAgIHtcIiAgXCJ9XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgIHRleHQtc20gaW5saW5lXCI+XHJcbiAgICAgICAgICAgICAge2l0ZW1EYXRhLml0ZW0uY29zdH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUgZm9udC1ib2xkIHRleHQtbGdcIj5SYXJpdHk6PC9wPntcIiBcIn1cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCAgdGV4dC1zbSBpbmxpbmUtYmxvY2sgXCI+XHJcbiAgICAgICAgICAgICAge2l0ZW1EYXRhLml0ZW0ucmFyaXR5fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZSBmb250LWJvbGQgdGV4dC1sZ1wiPlNlcmllczo8L3A+e1wiIFwifVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwICB0ZXh0LXNtIGlubGluZS1ibG9jayBcIj5cclxuICAgICAgICAgICAgICB7aXRlbURhdGEuaXRlbS5zZXJpZXN9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQtY2VudGVyIGFsaWduLW1pZGRsZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUgZm9udC1ib2xkIHRleHQtbGdcIj5TdGFyczogPC9wPntcIiBcIn1cclxuICAgICAgICAgICAge3JhdGluZz8ubWFwKChfLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxpbWcga2V5PXtpbmRleH0gc3JjPVwiL2ljb25zL3N0YXIuc3ZnXCIgd2lkdGg9XCIyMFwiIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAoe01hdGgucm91bmQoaXRlbURhdGEuaXRlbS5yYXRpbmdzLmF2Z1N0YXJzKX0pXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4vLyAgIGNvbnN0IGl0ZW1JZCA9IGNvbnRleHQucGFyYW1zLmlkO1xyXG4vLyAgIGxldCBpdGVtRGF0YTogaXRlbTtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgaXRlbURhdGEgPSBhd2FpdCBmZXRjaERhdGEoXCIvaXRlbS9nZXQ/aWQ9XCIgKyBpdGVtSWQpO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHsgaXRlbURhdGEgfSxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgaXRlbUlkID0gY29udGV4dC5wYXJhbXMuaWQ7XHJcbiAgbGV0IGl0ZW1EYXRhOiBpdGVtO1xyXG4gIHRyeSB7XHJcbiAgICBpdGVtRGF0YSA9IGF3YWl0IGZldGNoRGF0YShcIi9pdGVtL2dldD9pZD1cIiArIGl0ZW1JZCk7XHJcbiAgICAvLyBsZXQgYnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKFwiRGF0YS5qc29uXCIpO1xyXG4gICAgLy8gY29uc3QgaXRlbURhdGFzID0gSlNPTi5wYXJzZShhd2FpdCBidWZmZXIudG9TdHJpbmcoXCJ1dGYtOFwiKSk7XHJcbiAgICAvLyBpdGVtRGF0YSA9IGl0ZW1EYXRhcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaXRlbUlkID09IGl0ZW1JZClbMF07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGl0ZW1EYXRhIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHM8eyBpZDogc3RyaW5nIH0+ID0gYXN5bmMgKFxyXG4gIGNvbnRleHRcclxuKSA9PiB7XHJcbiAgbGV0IGl0ZW1zOiBpdGVtW107XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBsZXQgYnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKFwiRGF0YS5qc29uXCIpO1xyXG4gICAgLy8gSlNPTi5wYXJzZShhd2FpdCBidWZmZXIudG9TdHJpbmcoXCJ1dGYtOFwiKSk7XHJcbiAgICBpdGVtcyA9IGF3YWl0IGZldGNoRGF0YShcIi91cGNvbWluZy9nZXRcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gaXRlbXMubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7IGlkOiBpdGVtLml0ZW1JZC50b1N0cmluZygpIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=