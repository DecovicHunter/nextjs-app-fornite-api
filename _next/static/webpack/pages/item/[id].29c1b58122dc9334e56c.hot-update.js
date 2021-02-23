webpackHotUpdate_N_E("pages/item/[id]",{

/***/ "./components/Loading.tsx":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
false,

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
false,

/***/ "./node_modules/next/dist/client/route-loader.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
false,

/***/ "./node_modules/next/router.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
false,

/***/ "./node_modules/react/cjs/react.development.js":
false,

/***/ "./node_modules/react/index.js":
false,

/***/ "./node_modules/react/jsx-dev-runtime.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./pages/item/[id].tsx":
/*!*****************************!*\
  !*** ./pages/item/[id].tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXRlbS8udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaXRlbS9baWRdLjI5YzFiNTgxMjJkYzkzMzRlNTZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8gaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4uLy4uL2RhdGFGZXRjaFwiO1xyXG4vLyBpbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcbi8vIGltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcywgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuLy8gaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xyXG5cclxuLy8gaW50ZXJmYWNlIElJdGVtUHJvcHMge1xyXG4vLyAgIGl0ZW06IEl0ZW07XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IEl0ZW1EZXRhaWxzOiBSZWFjdC5GQzxJSXRlbVByb3BzPiA9ICh7IGl0ZW0gfSkgPT4ge1xyXG4vLyAgIGlmICghaXRlbSkge1xyXG4vLyAgICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG4vLyAgIH1cclxuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuLy8gICBjb25zdCBmaWxsZWRzdGFyID0gTWF0aC5yb3VuZChpdGVtPy5pdGVtPy5yYXRpbmdzLmF2Z1N0YXJzKTtcclxuLy8gICBjb25zdCByYXRpbmcgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBmaWxsZWRzdGFyIH0sIChfLCBpbmRleCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIGluZGV4O1xyXG4vLyAgIH0pO1xyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpwLTEyIGJnLWdyYXktMTAwIG1pbi1oLXNjcmVlbiBcIj5cclxuLy8gICAgICAgPGRpdiBrZXk9e2l0ZW0/Lml0ZW1JZH0gY2xhc3NOYW1lPVwiIGgtZnVsbCByZWxhdGl2ZVwiPlxyXG4vLyAgICAgICAgIDxhXHJcbi8vICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGFic29sdXRlIG1kOnRvcC01IG1kOmxlZnQtNSAgdG9wLTIgbGVmdC0yIGZvbnQtYm9sZCBwLTIgdGV4dC1ncmF5LTEwMCBjdXJzb3ItcG9pbnRlclwiXHJcbi8vICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgR28gYmFja1xyXG4vLyAgICAgICAgIDwvYT5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHJvdW5kZWQteGwgIG14LTIgb3ZlcmZsb3ctaGlkZGVuIGZsZXggZmxleC0xIGp1c3RpZnktY2VudGVyXCI+XHJcbi8vICAgICAgICAgICA8aW1nXHJcbi8vICAgICAgICAgICAgIHNyYz17aXRlbS5pdGVtPy5pbWFnZXM/Lmljb259XHJcbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBcIlxyXG4vLyAgICAgICAgICAgICBhbHQ9e2l0ZW0uaXRlbS5kZXNjcmlwdGlvbn1cclxuLy8gICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgZmxleC1jb2wgIGgtZnVsbFwiPlxyXG4vLyAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBteS01ICBcIj57aXRlbS5pdGVtLm5hbWV9PC9oMT5cclxuLy8gICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZSBmb250LWJvbGQgdGV4dC1sZ1wiPlR5cGU6PC9wPlxyXG4vLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmVcIj57aXRlbS5pdGVtLnR5cGV9PC9wPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUgZm9udC1ib2xkIHRleHQtbGdcIj5EZXNjcmlwdGlvbjo8L3A+e1wiIFwifVxyXG4vLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwICB0ZXh0LXNtIGlubGluZS1ibG9jayBcIj5cclxuLy8gICAgICAgICAgICAgICB7aXRlbS5pdGVtLmRlc2NyaXB0aW9ufVxyXG4vLyAgICAgICAgICAgICA8L3A+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZSBmb250LWJvbGQgdGV4dC1sZ1wiPkNvc3Q6PC9wPlxyXG4vLyAgICAgICAgICAgICB7XCIgIFwifVxyXG4vLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwICB0ZXh0LXNtIGlubGluZVwiPntpdGVtLml0ZW0uY29zdH08L3A+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZSBmb250LWJvbGQgdGV4dC1sZ1wiPlJhcml0eTo8L3A+e1wiIFwifVxyXG4vLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwICB0ZXh0LXNtIGlubGluZS1ibG9jayBcIj5cclxuLy8gICAgICAgICAgICAgICB7aXRlbS5pdGVtLnJhcml0eX1cclxuLy8gICAgICAgICAgICAgPC9wPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUgZm9udC1ib2xkIHRleHQtbGdcIj5TZXJpZXM6PC9wPntcIiBcIn1cclxuLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCAgdGV4dC1zbSBpbmxpbmUtYmxvY2sgXCI+XHJcbi8vICAgICAgICAgICAgICAge2l0ZW0uaXRlbS5zZXJpZXN9XHJcbi8vICAgICAgICAgICAgIDwvcD5cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQtY2VudGVyIGFsaWduLW1pZGRsZVwiPlxyXG4vLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUgZm9udC1ib2xkIHRleHQtbGdcIj5TdGFyczogPC9wPntcIiBcIn1cclxuLy8gICAgICAgICAgICAge3JhdGluZz8ubWFwKChfLCBpbmRleCkgPT4gKFxyXG4vLyAgICAgICAgICAgICAgIDxpbWcga2V5PXtpbmRleH0gc3JjPVwiL2ljb25zL3N0YXIuc3ZnXCIgd2lkdGg9XCIyMFwiIC8+XHJcbi8vICAgICAgICAgICAgICkpfVxyXG4vLyAgICAgICAgICAgICB7XCIgIFwifVxyXG4vLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj5cclxuLy8gICAgICAgICAgICAgICAoe01hdGgucm91bmQoaXRlbS5pdGVtLnJhdGluZ3MuYXZnU3RhcnMpfSlcclxuLy8gICAgICAgICAgICAgPC9wPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4vLyAgIGNvbnN0IGl0ZW1JZCA9IGNvbnRleHQucGFyYW1zLmlkO1xyXG4vLyAgIGxldCBpdGVtOiBJdGVtO1xyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBpdGVtID0gYXdhaXQgZmV0Y2hEYXRhKFwiL2l0ZW0vZ2V0P2lkPVwiICsgaXRlbUlkKTtcclxuLy8gICAgIC8vIGxldCBidWZmZXIgPSBmcy5yZWFkRmlsZVN5bmMoXCJEYXRhLmpzb25cIik7XHJcbi8vICAgICAvLyBjb25zdCBpdGVtRGF0YXMgPSBKU09OLnBhcnNlKGF3YWl0IGJ1ZmZlci50b1N0cmluZyhcInV0Zi04XCIpKTtcclxuLy8gICAgIC8vIGl0ZW0gPSBpdGVtRGF0YXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLml0ZW1JZCA9PSBpdGVtSWQpWzBdO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHsgaXRlbSB9LFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzPHsgaWQ6IHN0cmluZyB9PiA9IGFzeW5jIChcclxuLy8gICBjb250ZXh0XHJcbi8vICkgPT4ge1xyXG4vLyAgIGxldCBpdGVtczogSXRlbVtdO1xyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgLy8gbGV0IGJ1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhcIkRhdGEuanNvblwiKTtcclxuLy8gICAgIC8vIEpTT04ucGFyc2UoYXdhaXQgYnVmZmVyLnRvU3RyaW5nKFwidXRmLThcIikpO1xyXG4vLyAgICAgaXRlbXMgPSBhd2FpdCBmZXRjaERhdGEoXCIvdXBjb21pbmcvZ2V0XCIpO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbi8vICAgfVxyXG5cclxuLy8gICBjb25zdCBwYXRocyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcclxuLy8gICAgIHBhcmFtczogeyBpZDogaXRlbS5pdGVtSWQudG9TdHJpbmcoKSB9LFxyXG4vLyAgIH0pKTtcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHBhdGhzLFxyXG4vLyAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBJdGVtRGV0YWlscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==