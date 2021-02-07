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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading.tsx");


var _jsxFileName = "C:\\Users\\HASEE\\Desktop\\insta-clone-mobile-app\\nextjs-fornite-api-app\\pages\\item\\[id].tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Item = function Item(_ref) {
  _s();

  var _data$item, _data$item2, _data$item2$images;

  var data = _ref.data;

  if (!data) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }, _this);
  }

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var filledstar = Math.round(data === null || data === void 0 ? void 0 : (_data$item = data.item) === null || _data$item === void 0 ? void 0 : _data$item.ratings.avgStars);
  var rating = Array.from({
    length: filledstar
  }, function (_, index) {
    return index;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "md:p-12 bg-gray-100 min-h-screen ",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: " h-full relative",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "inline-block absolute md:top-5 md:left-5  top-2 left-2 font-bold p-2 text-gray-100 cursor-pointer",
          children: "Go back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-xl  mx-2 overflow-hidden flex flex-1 justify-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: (_data$item2 = data.item) === null || _data$item2 === void 0 ? void 0 : (_data$item2$images = _data$item2.images) === null || _data$item2$images === void 0 ? void 0 : _data$item2$images.icon,
          className: "object-cover ",
          alt: data.item.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-4 flex-col  h-full",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-3xl font-bold my-5  ",
          children: data.item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline font-bold text-lg",
            children: "Type:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline",
            children: data.item.type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline font-bold text-lg",
            children: "Description:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-gray-800  text-sm inline-block ",
            children: data.item.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline font-bold text-lg",
            children: "Cost:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-gray-800  text-sm inline",
            children: data.item.cost
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline font-bold text-lg",
            children: "Rarity:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-gray-800  text-sm inline-block ",
            children: data.item.rarity
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline font-bold text-lg",
            children: "Series:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-gray-800  text-sm inline-block ",
            children: data.item.series
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex text-center align-middle",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline font-bold text-lg",
            children: "Stars: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), " ", rating === null || rating === void 0 ? void 0 : rating.map(function (_, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/icons/star.svg",
              width: "20"
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this);
          }), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: ["(", Math.round(data.item.ratings.avgStars), ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, data === null || data === void 0 ? void 0 : data.itemId, true, {
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
//   let data: item;
//   try {
//     data = await fetchData("/item/get?id=" + itemId);
//   } catch (error) {
//     // console.log(error);
//   }
//   return {
//     props: { data },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXRlbS8udHN4Il0sIm5hbWVzIjpbIkl0ZW0iLCJkYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlsbGVkc3RhciIsIk1hdGgiLCJyb3VuZCIsIml0ZW0iLCJyYXRpbmdzIiwiYXZnU3RhcnMiLCJyYXRpbmciLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaW5kZXgiLCJpbWFnZXMiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJuYW1lIiwidHlwZSIsImNvc3QiLCJyYXJpdHkiLCJzZXJpZXMiLCJtYXAiLCJpdGVtSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BOztBQU1BLElBQU1BLElBQTBCLEdBQUcsU0FBN0JBLElBQTZCLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQy9DLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1Qsd0JBQU8scUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBQ0QsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLElBQVgsYUFBV0EsSUFBWCxxQ0FBV0EsSUFBSSxDQUFFTSxJQUFqQiwrQ0FBVyxXQUFZQyxPQUFaLENBQW9CQyxRQUEvQixDQUFuQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVc7QUFBRUMsVUFBTSxFQUFFVDtBQUFWLEdBQVgsRUFBbUMsVUFBQ1UsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7QUFDOUQsV0FBT0EsS0FBUDtBQUNELEdBRmMsQ0FBZjtBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLG1DQUFmO0FBQUEsMkJBQ0U7QUFBd0IsZUFBUyxFQUFDLGtCQUFsQztBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxF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QU1FO0FBQUcscUJBQVMsRUFBQyxjQUFiO0FBQUEsNEJBQ0lWLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxJQUFJLENBQUNNLElBQUwsQ0FBVUMsT0FBVixDQUFrQkMsUUFBN0IsQ0FESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBLE9BQVVSLElBQVYsYUFBVUEsSUFBVix1QkFBVUEsSUFBSSxDQUFFd0IsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBERCxDQXBFRCxDLENBc0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0dBbEZNekIsSTtVQUlXRyxxRDs7O0tBSlhILEk7O0FBMkhTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pdGVtL1tpZF0uMjlkNzhmOWFjZGJhN2Y4YzIzYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4uLy4uL2RhdGFGZXRjaFwiO1xyXG5pbXBvcnQgeyBJdGVtIGFzIGl0ZW0gfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcblxyXG5pbnRlcmZhY2UgSUl0ZW1Qcm9wcyB7XHJcbiAgZGF0YTogaXRlbTtcclxufVxyXG5cclxuY29uc3QgSXRlbTogUmVhY3QuRkM8SUl0ZW1Qcm9wcz4gPSAoeyBkYXRhIH0pID0+IHtcclxuICBpZiAoIWRhdGEpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZmlsbGVkc3RhciA9IE1hdGgucm91bmQoZGF0YT8uaXRlbT8ucmF0aW5ncy5hdmdTdGFycyk7XHJcbiAgY29uc3QgcmF0aW5nID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZmlsbGVkc3RhciB9LCAoXywgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6cC0xMiBiZy1ncmF5LTEwMCBtaW4taC1zY3JlZW4gXCI+XHJcbiAgICAgIDxkaXYga2V5PXtkYXRhPy5pdGVtSWR9IGNsYXNzTmFtZT1cIiBoLWZ1bGwgcmVsYXRpdmVcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGFic29sdXRlIG1kOnRvcC01IG1kOmxlZnQtNSAgdG9wLTIgbGVmdC0yIGZvbnQtYm9sZCBwLTIgdGV4dC1ncmF5LTEwMCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICBHbyBiYWNrXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgcm91bmRlZC14bCAgbXgtMiBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LTEganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtkYXRhLml0ZW0/LmltYWdlcz8uaWNvbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIFwiXHJcbiAgICAgICAgICAgIGFsdD17ZGF0YS5pdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBmbGV4LWNvbCAgaC1mdWxsXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG15LTUgIFwiPntkYXRhLml0ZW0ubmFtZX08L2gxPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lIGZvbnQtYm9sZCB0ZXh0LWxnXCI+VHlwZTo8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZVwiPntkYXRhLml0ZW0udHlwZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZSBmb250LWJvbGQgdGV4dC1sZ1wiPkRlc2NyaXB0aW9uOjwvcD57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgIHRleHQtc20gaW5saW5lLWJsb2NrIFwiPlxyXG4gICAgICAgICAgICAgIHtkYXRhLml0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lIGZvbnQtYm9sZCB0ZXh0LWxnXCI+Q29zdDo8L3A+XHJcbiAgICAgICAgICAgIHtcIiAgXCJ9XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgIHRleHQtc20gaW5saW5lXCI+e2RhdGEuaXRlbS5jb3N0fTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lIGZvbnQtYm9sZCB0ZXh0LWxnXCI+UmFyaXR5OjwvcD57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgIHRleHQtc20gaW5saW5lLWJsb2NrIFwiPlxyXG4gICAgICAgICAgICAgIHtkYXRhLml0ZW0ucmFyaXR5fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZSBmb250LWJvbGQgdGV4dC1sZ1wiPlNlcmllczo8L3A+e1wiIFwifVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwICB0ZXh0LXNtIGlubGluZS1ibG9jayBcIj5cclxuICAgICAgICAgICAgICB7ZGF0YS5pdGVtLnNlcmllc31cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC1jZW50ZXIgYWxpZ24tbWlkZGxlXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZSBmb250LWJvbGQgdGV4dC1sZ1wiPlN0YXJzOiA8L3A+e1wiIFwifVxyXG4gICAgICAgICAgICB7cmF0aW5nPy5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGltZyBrZXk9e2luZGV4fSBzcmM9XCIvaWNvbnMvc3Rhci5zdmdcIiB3aWR0aD1cIjIwXCIgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIHtcIiAgXCJ9XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICh7TWF0aC5yb3VuZChkYXRhLml0ZW0ucmF0aW5ncy5hdmdTdGFycyl9KVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuLy8gICBjb25zdCBpdGVtSWQgPSBjb250ZXh0LnBhcmFtcy5pZDtcclxuLy8gICBsZXQgZGF0YTogaXRlbTtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgZGF0YSA9IGF3YWl0IGZldGNoRGF0YShcIi9pdGVtL2dldD9pZD1cIiArIGl0ZW1JZCk7XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczogeyBkYXRhIH0sXHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGl0ZW1JZCA9IGNvbnRleHQucGFyYW1zLmlkO1xyXG4gIGxldCBkYXRhOiBpdGVtO1xyXG4gIHRyeSB7XHJcbiAgICAvLyBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKFwiL2l0ZW0vZ2V0P2lkPVwiICsgaXRlbUlkKTtcclxuICAgIGxldCBidWZmZXIgPSBmcy5yZWFkRmlsZVN5bmMoXCJEYXRhLmpzb25cIik7XHJcbiAgICBjb25zdCBkYXRhcyA9IEpTT04ucGFyc2UoYXdhaXQgYnVmZmVyLnRvU3RyaW5nKFwidXRmLThcIikpO1xyXG4gICAgZGF0YSA9IGRhdGFzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pdGVtSWQgPT0gaXRlbUlkKVswXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZGF0YSB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzPHsgaWQ6IHN0cmluZyB9PiA9IGFzeW5jIChcclxuICBjb250ZXh0XHJcbikgPT4ge1xyXG4gIGxldCBkYXRhOiBpdGVtW107XHJcblxyXG4gIHRyeSB7XHJcbiAgICBsZXQgYnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKFwiRGF0YS5qc29uXCIpO1xyXG4gICAgZGF0YSA9IEpTT04ucGFyc2UoYXdhaXQgYnVmZmVyLnRvU3RyaW5nKFwidXRmLThcIikpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXRocyA9IGRhdGEubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7IGlkOiBpdGVtLml0ZW1JZC50b1N0cmluZygpIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=