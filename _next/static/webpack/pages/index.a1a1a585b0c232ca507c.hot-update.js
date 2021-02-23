webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ForniteItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ForniteItem */ "./components/ForniteItem.tsx");


var _jsxFileName = "C:\\Users\\HASEE\\Desktop\\insta-clone-mobile-app\\nextjs-fornite-api-app\\pages\\index.tsx",
    _this = undefined;





var Home = function Home(_ref) {
  var data = _ref.data;
  // const [data, setData] = React.useState<Item[]>([]);
  // const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState();
  // React.useEffect(() => {
  //   fetchData("/upcoming/get")
  //     .then((data) => setData(data))
  //     .catch((err) => setError(error))
  //     .finally(() => setLoading(false));
  // }, []);
  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   console.log(error);
  //   return;
  // }
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "p-2",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "block font-bold my-3 text-2xl text-center uppercase",
      children: "fornite upcoming items"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "md:flex md:flex-wrap md:justify-center mt-12",
      children: data === null || data === void 0 ? void 0 : data.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "./item/" + item.itemId,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "block  bg-gray-800 rounded-2xl m-2 h-full mx-4  md:w-1/4 hover:bg-gray-700 hover:z-10 transform hover:scale-105 transition-all ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ForniteItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
              item: item
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, _this)
        }, item.itemId, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
}; // export const getServerSideProps: GetServerSideProps = async (context) => {
//   let error = null;
//   let item: Item[];
//   try {
//     // item = await fetchData("/upcoming/get");
//   } catch (error) {
//     console.log("error", error.message);
//     // error = error;
//   }
//   return {
//     props: { item },
//   };
// };


_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJkYXRhIiwibWFwIiwiaXRlbSIsIml0ZW1JZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBOztBQVVBLElBQU1BLElBQTBCLEdBQUcsU0FBN0JBLElBQTZCLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDL0M7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMscURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFFLDhDQUFoQjtBQUFBLGdCQUNHQSxJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRUMsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNuQiw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRSxZQUFZQSxJQUFJLENBQUNDLE1BQTdCO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFDLGlJQUFiO0FBQUEsbUNBQ0UscUVBQUMsK0RBQUQ7QUFBYSxrQkFBSSxFQUFFRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQTBDQSxJQUFJLENBQUNDLE1BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFPRCxPQVJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBckNELEMsQ0F1Q0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztLQXJETUosSTs7QUF3RVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmExYTFhNTg1YjBjMjMyY2E1MDdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuaW1wb3J0IEZvcm5pdGVJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm5pdGVJdGVtXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tIFwiLi4vZGF0YUZldGNoXCI7XG5cbmludGVyZmFjZSBJSG9tZVByb3BzIHtcbiAgZGF0YTogSXRlbVtdO1xufVxuXG5jb25zdCBIb21lOiBSZWFjdC5GQzxJSG9tZVByb3BzPiA9ICh7IGRhdGEgfSkgPT4ge1xuICAvLyBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxJdGVtW10+KFtdKTtcbiAgLy8gY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gIC8vIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGUoKTtcblxuICAvLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoRGF0YShcIi91cGNvbWluZy9nZXRcIilcbiAgLy8gICAgIC50aGVuKChkYXRhKSA9PiBzZXREYXRhKGRhdGEpKVxuICAvLyAgICAgLmNhdGNoKChlcnIpID0+IHNldEVycm9yKGVycm9yKSlcbiAgLy8gICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKTtcbiAgLy8gfSwgW10pO1xuXG4gIC8vIGlmIChsb2FkaW5nKSB7XG4gIC8vICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICAvLyB9XG4gIC8vIGlmIChlcnJvcikge1xuICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICByZXR1cm47XG4gIC8vIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtYm9sZCBteS0zIHRleHQtMnhsIHRleHQtY2VudGVyIHVwcGVyY2FzZVwiPlxuICAgICAgICBmb3JuaXRlIHVwY29taW5nIGl0ZW1zXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWQ6ZmxleCBtZDpmbGV4LXdyYXAgbWQ6anVzdGlmeS1jZW50ZXIgbXQtMTJcIn0+XG4gICAgICAgIHtkYXRhPy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuL2l0ZW0vXCIgKyBpdGVtLml0ZW1JZH0ga2V5PXtpdGVtLml0ZW1JZH0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJsb2NrICBiZy1ncmF5LTgwMCByb3VuZGVkLTJ4bCBtLTIgaC1mdWxsIG14LTQgIG1kOnctMS80IGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnotMTAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLWFsbCBcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybml0ZUl0ZW0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuLy8gICBsZXQgZXJyb3IgPSBudWxsO1xuLy8gICBsZXQgaXRlbTogSXRlbVtdO1xuXG4vLyAgIHRyeSB7XG4vLyAgICAgLy8gaXRlbSA9IGF3YWl0IGZldGNoRGF0YShcIi91cGNvbWluZy9nZXRcIik7XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvci5tZXNzYWdlKTtcbi8vICAgICAvLyBlcnJvciA9IGVycm9yO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczogeyBpdGVtIH0sXG4vLyAgIH07XG4vLyB9O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgbGV0IGl0ZW1zOiBJdGVtW10sXG4gICAgZXJyb3IgPSBudWxsO1xuICB0cnkge1xuICAgIC8vIGxldCBidWZmZXIgPSBmcy5yZWFkRmlsZVN5bmMoXCJEYXRhLmpzb25cIik7XG4gICAgLy8gZGF0YSA9IEpTT04ucGFyc2UoYXdhaXQgYnVmZmVyLnRvU3RyaW5nKFwidXRmLThcIikpO1xuICAgIGl0ZW1zID0gYXdhaXQgZmV0Y2hEYXRhKFwiL3VwY29taW5nL2dldFwiKTtcbiAgICBjb25zb2xlLmxvZygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgaXRlbXMgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9