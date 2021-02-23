_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/item/[id]"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fitem%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5CHASEE%5CDesktop%5Cinsta-clone-mobile-app%5Cnextjs-fornite-api-app%5Cpages%5Citem%5C%5Bid%5D.tsx!./":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fitem%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5CHASEE%5CDesktop%5Cinsta-clone-mobile-app%5Cnextjs-fornite-api-app%5Cpages%5Citem%5C%5Bid%5D.tsx ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/item/[id]",
        function () {
          return __webpack_require__(/*! ./pages/item/[id].tsx */ "./pages/item/[id].tsx");
        }
      ]);
    

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/webpack/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ (function(module) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(931);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./pages/item/[id].tsx":
/*!*****************************!*\
  !*** ./pages/item/[id].tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {// import React from "react";
// import { useRouter } from "next/router";
// import { fetchData } from "../../dataFetch";
// import { Item } from "../../types";
// import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
// import Loading from "../../components/Loading";
// interface IItemProps {
//   item: Item;
// }
// const ItemDetails: React.FC<IItemProps> = ({ item }) => {
//   if (!item) {
//     return <Loading />;
//   }
//   const router = useRouter();
//   const filledstar = Math.round(item?.item?.ratings.avgStars);
//   const rating = Array.from({ length: filledstar }, (_, index) => {
//     return index;
//   });
//   return (
//     <div className="md:p-12 bg-gray-100 min-h-screen ">
//       <div key={item?.itemId} className=" h-full relative">
//         <a
//           onClick={() => router.back()}
//           className="inline-block absolute md:top-5 md:left-5  top-2 left-2 font-bold p-2 text-gray-100 cursor-pointer"
//         >
//           Go back
//         </a>
//         <div className="bg-gray-800 rounded-xl  mx-2 overflow-hidden flex flex-1 justify-center">
//           <img
//             src={item.item?.images?.icon}
//             className="object-cover "
//             alt={item.item.description}
//           />
//         </div>
//         <div className="p-4 flex-col  h-full">
//           <h1 className="text-3xl font-bold my-5  ">{item.item.name}</h1>
//           <div>
//             <p className="inline font-bold text-lg">Type:</p>
//             <p className="inline">{item.item.type}</p>
//           </div>
//           <div>
//             <p className="inline font-bold text-lg">Description:</p>{" "}
//             <p className="text-gray-800  text-sm inline-block ">
//               {item.item.description}
//             </p>
//           </div>
//           <div>
//             <p className="inline font-bold text-lg">Cost:</p>
//             {"  "}
//             <p className="text-gray-800  text-sm inline">{item.item.cost}</p>
//           </div>
//           <div>
//             <p className="inline font-bold text-lg">Rarity:</p>{" "}
//             <p className="text-gray-800  text-sm inline-block ">
//               {item.item.rarity}
//             </p>
//           </div>
//           <div>
//             <p className="inline font-bold text-lg">Series:</p>{" "}
//             <p className="text-gray-800  text-sm inline-block ">
//               {item.item.series}
//             </p>
//           </div>
//           <div className="flex text-center align-middle">
//             <p className="inline font-bold text-lg">Stars: </p>{" "}
//             {rating?.map((_, index) => (
//               <img key={index} src="/icons/star.svg" width="20" />
//             ))}
//             {"  "}
//             <p className="inline-block">
//               ({Math.round(item.item.ratings.avgStars)})
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export const getStaticProps: GetStaticProps = async (context) => {
//   const itemId = context.params.id;
//   let item: Item;
//   try {
//     item = await fetchData("/item/get?id=" + itemId);
//     // let buffer = fs.readFileSync("Data.json");
//     // const itemDatas = JSON.parse(await buffer.toString("utf-8"));
//     // item = itemDatas.filter((item) => item.itemId == itemId)[0];
//   } catch (error) {
//     // console.log(error);
//   }
//   return {
//     props: { item },
//   };
// };
// export const getStaticPaths: GetStaticPaths<{ id: string }> = async (
//   context
// ) => {
//   let items: Item[];
//   try {
//     // let buffer = fs.readFileSync("Data.json");
//     // JSON.parse(await buffer.toString("utf-8"));
//     items = await fetchData("/upcoming/get");
//   } catch (error) {
//     console.log(error);
//   }
//   const paths = items.map((item) => ({
//     params: { id: item.itemId.toString() },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };
// export default ItemDetails;
/* harmony default export */ __webpack_exports__["default"] = (null);

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

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fitem%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5CHASEE%5CDesktop%5Cinsta-clone-mobile-app%5Cnextjs-fornite-api-app%5Cpages%5Citem%5C%5Bid%5D.tsx!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL3dlYnBhY2svaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2l0ZW0vLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLG9EQUFrRztBQUMzSDtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsQzs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDZSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL2l0ZW0vW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICAgIFwiL2l0ZW0vW2lkXVwiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxIQVNFRVxcXFxEZXNrdG9wXFxcXGluc3RhLWNsb25lLW1vYmlsZS1hcHBcXFxcbmV4dGpzLWZvcm5pdGUtYXBpLWFwcFxcXFxwYWdlc1xcXFxpdGVtXFxcXFtpZF0udHN4XCIpO1xuICAgICAgICB9XG4gICAgICBdKTtcbiAgICAiLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyA5MzE6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuLyoqKioqKi8gXHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX25jY3dwY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4vKioqKioqLyBcdFx0fSBmaW5hbGx5IHtcbi8qKioqKiovIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2NvbXBhdCAqL1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0X19uY2N3cGNrX3JlcXVpcmVfXy5hYiA9IF9fZGlybmFtZSArIFwiL1wiOy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDkzMSk7XG4vKioqKioqLyB9KSgpXG47IiwiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vIGltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gXCIuLi8uLi9kYXRhRmV0Y2hcIjtcclxuLy8gaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG4vLyBpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbi8vIGltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcclxuXHJcbi8vIGludGVyZmFjZSBJSXRlbVByb3BzIHtcclxuLy8gICBpdGVtOiBJdGVtO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBJdGVtRGV0YWlsczogUmVhY3QuRkM8SUl0ZW1Qcm9wcz4gPSAoeyBpdGVtIH0pID0+IHtcclxuLy8gICBpZiAoIWl0ZW0pIHtcclxuLy8gICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuLy8gICB9XHJcbi8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbi8vICAgY29uc3QgZmlsbGVkc3RhciA9IE1hdGgucm91bmQoaXRlbT8uaXRlbT8ucmF0aW5ncy5hdmdTdGFycyk7XHJcbi8vICAgY29uc3QgcmF0aW5nID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZmlsbGVkc3RhciB9LCAoXywgaW5kZXgpID0+IHtcclxuLy8gICAgIHJldHVybiBpbmRleDtcclxuLy8gICB9KTtcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6cC0xMiBiZy1ncmF5LTEwMCBtaW4taC1zY3JlZW4gXCI+XHJcbi8vICAgICAgIDxkaXYga2V5PXtpdGVtPy5pdGVtSWR9IGNsYXNzTmFtZT1cIiBoLWZ1bGwgcmVsYXRpdmVcIj5cclxuLy8gICAgICAgICA8YVxyXG4vLyAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX1cclxuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBhYnNvbHV0ZSBtZDp0b3AtNSBtZDpsZWZ0LTUgIHRvcC0yIGxlZnQtMiBmb250LWJvbGQgcC0yIHRleHQtZ3JheS0xMDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4vLyAgICAgICAgID5cclxuLy8gICAgICAgICAgIEdvIGJhY2tcclxuLy8gICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCByb3VuZGVkLXhsICBteC0yIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtMSBqdXN0aWZ5LWNlbnRlclwiPlxyXG4vLyAgICAgICAgICAgPGltZ1xyXG4vLyAgICAgICAgICAgICBzcmM9e2l0ZW0uaXRlbT8uaW1hZ2VzPy5pY29ufVxyXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgXCJcclxuLy8gICAgICAgICAgICAgYWx0PXtpdGVtLml0ZW0uZGVzY3JpcHRpb259XHJcbi8vICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGZsZXgtY29sICBoLWZ1bGxcIj5cclxuLy8gICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbXktNSAgXCI+e2l0ZW0uaXRlbS5uYW1lfTwvaDE+XHJcbi8vICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUgZm9udC1ib2xkIHRleHQtbGdcIj5UeXBlOjwvcD5cclxuLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lXCI+e2l0ZW0uaXRlbS50eXBlfTwvcD5cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lIGZvbnQtYm9sZCB0ZXh0LWxnXCI+RGVzY3JpcHRpb246PC9wPntcIiBcIn1cclxuLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCAgdGV4dC1zbSBpbmxpbmUtYmxvY2sgXCI+XHJcbi8vICAgICAgICAgICAgICAge2l0ZW0uaXRlbS5kZXNjcmlwdGlvbn1cclxuLy8gICAgICAgICAgICAgPC9wPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUgZm9udC1ib2xkIHRleHQtbGdcIj5Db3N0OjwvcD5cclxuLy8gICAgICAgICAgICAge1wiICBcIn1cclxuLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCAgdGV4dC1zbSBpbmxpbmVcIj57aXRlbS5pdGVtLmNvc3R9PC9wPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUgZm9udC1ib2xkIHRleHQtbGdcIj5SYXJpdHk6PC9wPntcIiBcIn1cclxuLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCAgdGV4dC1zbSBpbmxpbmUtYmxvY2sgXCI+XHJcbi8vICAgICAgICAgICAgICAge2l0ZW0uaXRlbS5yYXJpdHl9XHJcbi8vICAgICAgICAgICAgIDwvcD5cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lIGZvbnQtYm9sZCB0ZXh0LWxnXCI+U2VyaWVzOjwvcD57XCIgXCJ9XHJcbi8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgIHRleHQtc20gaW5saW5lLWJsb2NrIFwiPlxyXG4vLyAgICAgICAgICAgICAgIHtpdGVtLml0ZW0uc2VyaWVzfVxyXG4vLyAgICAgICAgICAgICA8L3A+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGVcIj5cclxuLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lIGZvbnQtYm9sZCB0ZXh0LWxnXCI+U3RhcnM6IDwvcD57XCIgXCJ9XHJcbi8vICAgICAgICAgICAgIHtyYXRpbmc/Lm1hcCgoXywgaW5kZXgpID0+IChcclxuLy8gICAgICAgICAgICAgICA8aW1nIGtleT17aW5kZXh9IHNyYz1cIi9pY29ucy9zdGFyLnN2Z1wiIHdpZHRoPVwiMjBcIiAvPlxyXG4vLyAgICAgICAgICAgICApKX1cclxuLy8gICAgICAgICAgICAge1wiICBcIn1cclxuLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+XHJcbi8vICAgICAgICAgICAgICAgKHtNYXRoLnJvdW5kKGl0ZW0uaXRlbS5yYXRpbmdzLmF2Z1N0YXJzKX0pXHJcbi8vICAgICAgICAgICAgIDwvcD5cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuLy8gICBjb25zdCBpdGVtSWQgPSBjb250ZXh0LnBhcmFtcy5pZDtcclxuLy8gICBsZXQgaXRlbTogSXRlbTtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgaXRlbSA9IGF3YWl0IGZldGNoRGF0YShcIi9pdGVtL2dldD9pZD1cIiArIGl0ZW1JZCk7XHJcbi8vICAgICAvLyBsZXQgYnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKFwiRGF0YS5qc29uXCIpO1xyXG4vLyAgICAgLy8gY29uc3QgaXRlbURhdGFzID0gSlNPTi5wYXJzZShhd2FpdCBidWZmZXIudG9TdHJpbmcoXCJ1dGYtOFwiKSk7XHJcbi8vICAgICAvLyBpdGVtID0gaXRlbURhdGFzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pdGVtSWQgPT0gaXRlbUlkKVswXTtcclxuLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7IGl0ZW0gfSxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRoczx7IGlkOiBzdHJpbmcgfT4gPSBhc3luYyAoXHJcbi8vICAgY29udGV4dFxyXG4vLyApID0+IHtcclxuLy8gICBsZXQgaXRlbXM6IEl0ZW1bXTtcclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIC8vIGxldCBidWZmZXIgPSBmcy5yZWFkRmlsZVN5bmMoXCJEYXRhLmpzb25cIik7XHJcbi8vICAgICAvLyBKU09OLnBhcnNlKGF3YWl0IGJ1ZmZlci50b1N0cmluZyhcInV0Zi04XCIpKTtcclxuLy8gICAgIGl0ZW1zID0gYXdhaXQgZmV0Y2hEYXRhKFwiL3VwY29taW5nL2dldFwiKTtcclxuLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgY29uc3QgcGF0aHMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+ICh7XHJcbi8vICAgICBwYXJhbXM6IHsgaWQ6IGl0ZW0uaXRlbUlkLnRvU3RyaW5nKCkgfSxcclxuLy8gICB9KSk7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwYXRocyxcclxuLy8gICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgSXRlbURldGFpbHM7XHJcbmV4cG9ydCBkZWZhdWx0IG51bGw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=