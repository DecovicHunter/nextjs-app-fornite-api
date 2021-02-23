webpackHotUpdate_N_E("pages/item/[id]",{

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
false,

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXRlbS8udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDZSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pdGVtL1tpZF0uNThjN2FiZGE0NDBlMjJiYzMzNDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tIFwiLi4vLi4vZGF0YUZldGNoXCI7XHJcbi8vIGltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuLy8gaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG4vLyBpbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcblxyXG4vLyBpbnRlcmZhY2UgSUl0ZW1Qcm9wcyB7XHJcbi8vICAgaXRlbTogSXRlbTtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgSXRlbURldGFpbHM6IFJlYWN0LkZDPElJdGVtUHJvcHM+ID0gKHsgaXRlbSB9KSA9PiB7XHJcbi8vICAgaWYgKCFpdGVtKSB7XHJcbi8vICAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbi8vICAgfVxyXG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4vLyAgIGNvbnN0IGZpbGxlZHN0YXIgPSBNYXRoLnJvdW5kKGl0ZW0/Lml0ZW0/LnJhdGluZ3MuYXZnU3RhcnMpO1xyXG4vLyAgIGNvbnN0IHJhdGluZyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGZpbGxlZHN0YXIgfSwgKF8sIGluZGV4KSA9PiB7XHJcbi8vICAgICByZXR1cm4gaW5kZXg7XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnAtMTIgYmctZ3JheS0xMDAgbWluLWgtc2NyZWVuIFwiPlxyXG4vLyAgICAgICA8ZGl2IGtleT17aXRlbT8uaXRlbUlkfSBjbGFzc05hbWU9XCIgaC1mdWxsIHJlbGF0aXZlXCI+XHJcbi8vICAgICAgICAgPGFcclxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9XHJcbi8vICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYWJzb2x1dGUgbWQ6dG9wLTUgbWQ6bGVmdC01ICB0b3AtMiBsZWZ0LTIgZm9udC1ib2xkIHAtMiB0ZXh0LWdyYXktMTAwIGN1cnNvci1wb2ludGVyXCJcclxuLy8gICAgICAgICA+XHJcbi8vICAgICAgICAgICBHbyBiYWNrXHJcbi8vICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgcm91bmRlZC14bCAgbXgtMiBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LTEganVzdGlmeS1jZW50ZXJcIj5cclxuLy8gICAgICAgICAgIDxpbWdcclxuLy8gICAgICAgICAgICAgc3JjPXtpdGVtLml0ZW0/LmltYWdlcz8uaWNvbn1cclxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIFwiXHJcbi8vICAgICAgICAgICAgIGFsdD17aXRlbS5pdGVtLmRlc2NyaXB0aW9ufVxyXG4vLyAgICAgICAgICAgLz5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBmbGV4LWNvbCAgaC1mdWxsXCI+XHJcbi8vICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG15LTUgIFwiPntpdGVtLml0ZW0ubmFtZX08L2gxPlxyXG4vLyAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lIGZvbnQtYm9sZCB0ZXh0LWxnXCI+VHlwZTo8L3A+XHJcbi8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZVwiPntpdGVtLml0ZW0udHlwZX08L3A+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZSBmb250LWJvbGQgdGV4dC1sZ1wiPkRlc2NyaXB0aW9uOjwvcD57XCIgXCJ9XHJcbi8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgIHRleHQtc20gaW5saW5lLWJsb2NrIFwiPlxyXG4vLyAgICAgICAgICAgICAgIHtpdGVtLml0ZW0uZGVzY3JpcHRpb259XHJcbi8vICAgICAgICAgICAgIDwvcD5cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lIGZvbnQtYm9sZCB0ZXh0LWxnXCI+Q29zdDo8L3A+XHJcbi8vICAgICAgICAgICAgIHtcIiAgXCJ9XHJcbi8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgIHRleHQtc20gaW5saW5lXCI+e2l0ZW0uaXRlbS5jb3N0fTwvcD5cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lIGZvbnQtYm9sZCB0ZXh0LWxnXCI+UmFyaXR5OjwvcD57XCIgXCJ9XHJcbi8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgIHRleHQtc20gaW5saW5lLWJsb2NrIFwiPlxyXG4vLyAgICAgICAgICAgICAgIHtpdGVtLml0ZW0ucmFyaXR5fVxyXG4vLyAgICAgICAgICAgICA8L3A+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZSBmb250LWJvbGQgdGV4dC1sZ1wiPlNlcmllczo8L3A+e1wiIFwifVxyXG4vLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwICB0ZXh0LXNtIGlubGluZS1ibG9jayBcIj5cclxuLy8gICAgICAgICAgICAgICB7aXRlbS5pdGVtLnNlcmllc31cclxuLy8gICAgICAgICAgICAgPC9wPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC1jZW50ZXIgYWxpZ24tbWlkZGxlXCI+XHJcbi8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZSBmb250LWJvbGQgdGV4dC1sZ1wiPlN0YXJzOiA8L3A+e1wiIFwifVxyXG4vLyAgICAgICAgICAgICB7cmF0aW5nPy5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbi8vICAgICAgICAgICAgICAgPGltZyBrZXk9e2luZGV4fSBzcmM9XCIvaWNvbnMvc3Rhci5zdmdcIiB3aWR0aD1cIjIwXCIgLz5cclxuLy8gICAgICAgICAgICAgKSl9XHJcbi8vICAgICAgICAgICAgIHtcIiAgXCJ9XHJcbi8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPlxyXG4vLyAgICAgICAgICAgICAgICh7TWF0aC5yb3VuZChpdGVtLml0ZW0ucmF0aW5ncy5hdmdTdGFycyl9KVxyXG4vLyAgICAgICAgICAgICA8L3A+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbi8vICAgY29uc3QgaXRlbUlkID0gY29udGV4dC5wYXJhbXMuaWQ7XHJcbi8vICAgbGV0IGl0ZW06IEl0ZW07XHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGl0ZW0gPSBhd2FpdCBmZXRjaERhdGEoXCIvaXRlbS9nZXQ/aWQ9XCIgKyBpdGVtSWQpO1xyXG4vLyAgICAgLy8gbGV0IGJ1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhcIkRhdGEuanNvblwiKTtcclxuLy8gICAgIC8vIGNvbnN0IGl0ZW1EYXRhcyA9IEpTT04ucGFyc2UoYXdhaXQgYnVmZmVyLnRvU3RyaW5nKFwidXRmLThcIikpO1xyXG4vLyAgICAgLy8gaXRlbSA9IGl0ZW1EYXRhcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaXRlbUlkID09IGl0ZW1JZClbMF07XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczogeyBpdGVtIH0sXHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHM8eyBpZDogc3RyaW5nIH0+ID0gYXN5bmMgKFxyXG4vLyAgIGNvbnRleHRcclxuLy8gKSA9PiB7XHJcbi8vICAgbGV0IGl0ZW1zOiBJdGVtW107XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICAvLyBsZXQgYnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKFwiRGF0YS5qc29uXCIpO1xyXG4vLyAgICAgLy8gSlNPTi5wYXJzZShhd2FpdCBidWZmZXIudG9TdHJpbmcoXCJ1dGYtOFwiKSk7XHJcbi8vICAgICBpdGVtcyA9IGF3YWl0IGZldGNoRGF0YShcIi91cGNvbWluZy9nZXRcIik7XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIGNvbnN0IHBhdGhzID0gaXRlbXMubWFwKChpdGVtKSA9PiAoe1xyXG4vLyAgICAgcGFyYW1zOiB7IGlkOiBpdGVtLml0ZW1JZC50b1N0cmluZygpIH0sXHJcbi8vICAgfSkpO1xyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcGF0aHMsXHJcbi8vICAgICBmYWxsYmFjazogZmFsc2UsXHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEl0ZW1EZXRhaWxzO1xyXG5leHBvcnQgZGVmYXVsdCBudWxsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9