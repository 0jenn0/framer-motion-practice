"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[...item]/page",{

/***/ "(app-pages-browser)/./src/components/2.Components/2-2.AnimatePresence/1_r/self/1_r.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/2.Components/2-2.AnimatePresence/1_r/self/1_r.tsx ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _1_r_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1_r.styled */ \"(app-pages-browser)/./src/components/2.Components/2-2.AnimatePresence/1_r/self/1_r.styled.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_IoIosArrowBack_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosArrowBack,IoIosArrowForward!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var _image_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-data */ \"(app-pages-browser)/./src/components/2.Components/2-2.AnimatePresence/1_r/self/image-data.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DIRECTION = {\n    next: -1,\n    prev: 1\n};\nconst CarouselSelf = ()=>{\n    _s();\n    const [[page, direction], setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        0,\n        0\n    ]);\n    const handlePage = (newDirection)=>{\n        setPage((param)=>{\n            let [prevPage, prevDirection] = param;\n            return [\n                prevPage + DIRECTION[newDirection],\n                DIRECTION[newDirection]\n            ];\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_1_r_styled__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                    src: _image_data__WEBPACK_IMPORTED_MODULE_3__.images[page]\n                }, void 0, false, {\n                    fileName: \"/Users/river/Documents/react-projects/framer-motion-practice/src/components/2.Components/2-2.AnimatePresence/1_r/self/1_r.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/river/Documents/react-projects/framer-motion-practice/src/components/2.Components/2-2.AnimatePresence/1_r/self/1_r.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_1_r_styled__WEBPACK_IMPORTED_MODULE_1__.ButtonContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_1_r_styled__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        onClick: ()=>handlePage(\"prev\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoIosArrowBack, {}, void 0, false, {\n                            fileName: \"/Users/river/Documents/react-projects/framer-motion-practice/src/components/2.Components/2-2.AnimatePresence/1_r/self/1_r.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/river/Documents/react-projects/framer-motion-practice/src/components/2.Components/2-2.AnimatePresence/1_r/self/1_r.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_1_r_styled__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        onClick: ()=>handlePage(\"prev\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoIosArrowForward, {}, void 0, false, {\n                            fileName: \"/Users/river/Documents/react-projects/framer-motion-practice/src/components/2.Components/2-2.AnimatePresence/1_r/self/1_r.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/river/Documents/react-projects/framer-motion-practice/src/components/2.Components/2-2.AnimatePresence/1_r/self/1_r.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/river/Documents/react-projects/framer-motion-practice/src/components/2.Components/2-2.AnimatePresence/1_r/self/1_r.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(CarouselSelf, \"wDm/sR0ENd3hz0xTHLusEYtcOtc=\");\n_c = CarouselSelf;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarouselSelf);\nvar _c;\n$RefreshReg$(_c, \"CarouselSelf\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzLzIuQ29tcG9uZW50cy8yLTIuQW5pbWF0ZVByZXNlbmNlLzFfci9zZWxmLzFfci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrQztBQUNLO0FBQ047QUFDa0M7QUFDN0I7QUFJdEMsTUFBTU0sWUFBWTtJQUNoQkMsTUFBTSxDQUFDO0lBQ1BDLE1BQU07QUFDUjtBQUVBLE1BQU1DLGVBQWU7O0lBQ25CLE1BQU0sQ0FBQyxDQUFDQyxNQUFNQyxVQUFVLEVBQUVDLFFBQVEsR0FBR1YsK0NBQVFBLENBQU87UUFBQztRQUFHO0tBQUU7SUFFMUQsTUFBTVcsYUFBYSxDQUFDQztRQUNsQkYsUUFBUTtnQkFBQyxDQUFDRyxVQUFVQyxjQUFjO21CQUFLO2dCQUNyQ0QsV0FBV1QsU0FBUyxDQUFDUSxhQUFhO2dCQUNsQ1IsU0FBUyxDQUFDUSxhQUFhO2FBQ3hCOztJQUNIO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDZCwrQ0FBUTswQkFDUCw0RUFBQ0MsaURBQU1BLENBQUNpQixHQUFHO29CQUFDQyxLQUFLZCwrQ0FBTSxDQUFDSyxLQUFLOzs7Ozs7Ozs7OzswQkFFL0IsOERBQUNWLHdEQUFpQjs7a0NBQ2hCLDhEQUFDQSwrQ0FBUTt3QkFBQ3NCLFNBQVMsSUFBTVQsV0FBVztrQ0FDbEMsNEVBQUNWLGtIQUFjQTs7Ozs7Ozs7OztrQ0FFakIsOERBQUNILCtDQUFRO3dCQUFDc0IsU0FBUyxJQUFNVCxXQUFXO2tDQUNsQyw0RUFBQ1QscUhBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVCO0dBekJNSztLQUFBQTtBQTJCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy8yLkNvbXBvbmVudHMvMi0yLkFuaW1hdGVQcmVzZW5jZS8xX3Ivc2VsZi8xX3IudHN4PzdlYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUyBmcm9tIFwiLi8xX3Iuc3R5bGVkXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElvSW9zQXJyb3dCYWNrLCBJb0lvc0Fycm93Rm9yd2FyZCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuaW1wb3J0IHsgaW1hZ2VzIH0gZnJvbSBcIi4vaW1hZ2UtZGF0YVwiO1xuXG50eXBlIFBhZ2UgPSBudW1iZXJbXTtcblxuY29uc3QgRElSRUNUSU9OID0ge1xuICBuZXh0OiAtMSxcbiAgcHJldjogMSxcbn0gYXMgY29uc3Q7XG5cbmNvbnN0IENhcm91c2VsU2VsZiA9ICgpID0+IHtcbiAgY29uc3QgW1twYWdlLCBkaXJlY3Rpb25dLCBzZXRQYWdlXSA9IHVzZVN0YXRlPFBhZ2U+KFswLCAwXSk7XG5cbiAgY29uc3QgaGFuZGxlUGFnZSA9IChuZXdEaXJlY3Rpb246IGtleW9mIHR5cGVvZiBESVJFQ1RJT04pID0+IHtcbiAgICBzZXRQYWdlKChbcHJldlBhZ2UsIHByZXZEaXJlY3Rpb25dKSA9PiBbXG4gICAgICBwcmV2UGFnZSArIERJUkVDVElPTltuZXdEaXJlY3Rpb25dLFxuICAgICAgRElSRUNUSU9OW25ld0RpcmVjdGlvbl0sXG4gICAgXSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFMuTGF5b3V0PlxuICAgICAgICA8bW90aW9uLmltZyBzcmM9e2ltYWdlc1twYWdlXX0gLz5cbiAgICAgIDwvUy5MYXlvdXQ+XG4gICAgICA8Uy5CdXR0b25Db250YWluZXI+XG4gICAgICAgIDxTLkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdlKFwicHJldlwiKX0+XG4gICAgICAgICAgPElvSW9zQXJyb3dCYWNrIC8+XG4gICAgICAgIDwvUy5CdXR0b24+XG4gICAgICAgIDxTLkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdlKFwicHJldlwiKX0+XG4gICAgICAgICAgPElvSW9zQXJyb3dGb3J3YXJkIC8+XG4gICAgICAgIDwvUy5CdXR0b24+XG4gICAgICA8L1MuQnV0dG9uQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxTZWxmO1xuIl0sIm5hbWVzIjpbIlMiLCJtb3Rpb24iLCJ1c2VTdGF0ZSIsIklvSW9zQXJyb3dCYWNrIiwiSW9Jb3NBcnJvd0ZvcndhcmQiLCJpbWFnZXMiLCJESVJFQ1RJT04iLCJuZXh0IiwicHJldiIsIkNhcm91c2VsU2VsZiIsInBhZ2UiLCJkaXJlY3Rpb24iLCJzZXRQYWdlIiwiaGFuZGxlUGFnZSIsIm5ld0RpcmVjdGlvbiIsInByZXZQYWdlIiwicHJldkRpcmVjdGlvbiIsIkxheW91dCIsImltZyIsInNyYyIsIkJ1dHRvbkNvbnRhaW5lciIsIkJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/2.Components/2-2.AnimatePresence/1_r/self/1_r.tsx\n"));

/***/ })

});