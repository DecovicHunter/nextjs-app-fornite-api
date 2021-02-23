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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ForniteItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ForniteItem */ "./components/ForniteItem.tsx");


var _jsxFileName = "C:\\Users\\HASEE\\Desktop\\insta-clone-mobile-app\\nextjs-fornite-api-app\\pages\\index.tsx",
    _this = undefined;




var Home = function Home(_ref) {
  var items = _ref.items;
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
      children: items === null || items === void 0 ? void 0 : items.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ForniteItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          item: item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 18
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUlBOztBQVVBLElBQU1BLElBQTBCLEdBQUcsU0FBN0JBLElBQTZCLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDaEQ7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMscURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFFLDhDQUFoQjtBQUFBLGdCQUNHQSxLQURILGFBQ0dBLEtBREgsdUJBQ0dBLEtBQUssQ0FBRUMsR0FBUCxDQUFXLFVBQUNDLElBQUQsRUFBVTtBQUNwQiw0QkFBTyxxRUFBQywrREFBRDtBQUFhLGNBQUksRUFBRUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNELE9BRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQS9CRCxDLENBaUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7S0EvQ01ILEk7O0FBa0VTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YzAxNzVkNWEwZGViYmFjZGE0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5cbmltcG9ydCBGb3JuaXRlSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JuaXRlSXRlbVwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4uL2RhdGFGZXRjaFwiO1xuXG5pbnRlcmZhY2UgSUhvbWVQcm9wcyB7XG4gIGl0ZW1zOiBJdGVtW107XG59XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDPElIb21lUHJvcHM+ID0gKHsgaXRlbXMgfSkgPT4ge1xuICAvLyBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxJdGVtW10+KFtdKTtcbiAgLy8gY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gIC8vIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGUoKTtcblxuICAvLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoRGF0YShcIi91cGNvbWluZy9nZXRcIilcbiAgLy8gICAgIC50aGVuKChkYXRhKSA9PiBzZXREYXRhKGRhdGEpKVxuICAvLyAgICAgLmNhdGNoKChlcnIpID0+IHNldEVycm9yKGVycm9yKSlcbiAgLy8gICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKTtcbiAgLy8gfSwgW10pO1xuXG4gIC8vIGlmIChsb2FkaW5nKSB7XG4gIC8vICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICAvLyB9XG4gIC8vIGlmIChlcnJvcikge1xuICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICByZXR1cm47XG4gIC8vIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtYm9sZCBteS0zIHRleHQtMnhsIHRleHQtY2VudGVyIHVwcGVyY2FzZVwiPlxuICAgICAgICBmb3JuaXRlIHVwY29taW5nIGl0ZW1zXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWQ6ZmxleCBtZDpmbGV4LXdyYXAgbWQ6anVzdGlmeS1jZW50ZXIgbXQtMTJcIn0+XG4gICAgICAgIHtpdGVtcz8ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxGb3JuaXRlSXRlbSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4vLyAgIGxldCBlcnJvciA9IG51bGw7XG4vLyAgIGxldCBpdGVtOiBJdGVtW107XG5cbi8vICAgdHJ5IHtcbi8vICAgICAvLyBpdGVtID0gYXdhaXQgZmV0Y2hEYXRhKFwiL3VwY29taW5nL2dldFwiKTtcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yLm1lc3NhZ2UpO1xuLy8gICAgIC8vIGVycm9yID0gZXJyb3I7XG4vLyAgIH1cblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7IGl0ZW0gfSxcbi8vICAgfTtcbi8vIH07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBsZXQgaXRlbXM6IEl0ZW1bXSxcbiAgICBlcnJvciA9IG51bGw7XG4gIHRyeSB7XG4gICAgLy8gbGV0IGJ1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhcIkRhdGEuanNvblwiKTtcbiAgICAvLyBkYXRhID0gSlNPTi5wYXJzZShhd2FpdCBidWZmZXIudG9TdHJpbmcoXCJ1dGYtOFwiKSk7XG4gICAgaXRlbXMgPSBhd2FpdCBmZXRjaERhdGEoXCIvdXBjb21pbmcvZ2V0XCIpO1xuICAgIGNvbnNvbGUubG9nKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBpdGVtcyB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=