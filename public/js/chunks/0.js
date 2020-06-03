(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/jobs/Item.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/jobs/Item.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "JobItem",
  props: {
    detail: {
      type: Object,
      "default": function _default() {}
    },
    newest: {
      type: Boolean,
      "default": false
    },
    recommended: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/jobs/Item.vue?vue&type=template&id=55879d91&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/jobs/Item.vue?vue&type=template&id=55879d91&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "shadow w-full rounded-lg bg-white overflow-hidden w-full block mb-4 relative"
    },
    [
      _c("div", { staticClass: "px-8 py-6" }, [
        _vm.newest
          ? _c(
              "div",
              {
                staticClass:
                  "bg-red-500 text-white uppercase tracking-wide text-xs font-semibold rounded-bl-full absolute top-0 right-0 pl-4 pr-2 py-2"
              },
              [_vm._v("新")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.recommended
          ? _c(
              "div",
              {
                staticClass:
                  "bg-orange-500 text-white uppercase tracking-wide text-xs font-semibold rounded-bl-full absolute top-0 right-0 pl-4 pr-2 py-2"
              },
              [_vm._v("荐")]
            )
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "flex" }, [
          _c(
            "a",
            {
              staticClass:
                "flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-lg bg-gray-100 block mr-5 overflow-hidden border p-1",
              attrs: { href: "/companies/" + _vm.detail.company.id }
            },
            [
              _c("img", {
                staticClass: "object-contain w-full h-full rounded-lg",
                attrs: { src: _vm.detail.cover, alt: "Company Logo" }
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "flex-1" }, [
            _c("div", { staticClass: "md:flex mb-4" }, [
              _c("div", { staticClass: "flex-1" }, [
                _c("div", { staticClass: "mb-1 pr-3" }, [
                  _c(
                    "a",
                    {
                      staticClass:
                        "inline-block text-lg text-gray-700 font-semibold leading-normal",
                      attrs: { href: "/jobs/" + _vm.detail.id }
                    },
                    [_vm._v(_vm._s(_vm.detail.title))]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass:
                      "mb-1 font-semibold inline-block text-sm text-gray-600 leading-normal"
                  },
                  [_vm._v(_vm._s(_vm.detail.company.title))]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "mb-1 inline-block md:block leading-normal" },
                  _vm._l(_vm.detail.tags, function(item, index) {
                    return _c(
                      "span",
                      {
                        staticClass:
                          "px-2 rounded-full tracking-wide text-xs inline-block mr-1 bg-gray-100 border-2 border-gray-200 hover:text-gray-700",
                        attrs: { index: index }
                      },
                      [_vm._v(_vm._s(item))]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "md:w-48 flex-col justify-between mt-1" },
                [
                  _c(
                    "div",
                    { staticClass: "mb-1 md:flex-1 flex items-center" },
                    [
                      _c(
                        "svg",
                        {
                          staticClass:
                            "stroke-current w-6 h-6 mr-2 text-gray-400",
                          attrs: { fill: "none", viewBox: "0 0 24 24" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d:
                                "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "text-sm text-gray-600 leading-normal" },
                        [_vm._v(_vm._s(_vm.detail.category.title))]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-1 md:flex-1 flex items-center" },
                    [
                      _c(
                        "svg",
                        {
                          staticClass:
                            "stroke-current w-6 h-6 mr-2 text-gray-400",
                          attrs: { fill: "none", viewBox: "0 0 24 24" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d:
                                "M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "text-sm text-gray-600 leading-normal" },
                        [_vm._v(_vm._s(_vm.detail.salary))]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-1 md:flex-1 flex items-center" },
                    [
                      _c(
                        "svg",
                        {
                          staticClass:
                            "stroke-current w-6 h-6 mr-2 text-gray-400",
                          attrs: { fill: "none", viewBox: "0 0 24 24" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "text-sm text-gray-600 leading-normal" },
                        [_vm._v(_vm._s(_vm.detail.type))]
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex justify-between items-center" }, [
              _c("p", { staticClass: "text-sm text-gray-600 leading-normal" }, [
                _vm._v(_vm._s(_vm.detail.created_at))
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "border-b-2 text-sm inline-flex text-teal-600 border-teal-200 hover:text-teal-700 hover:border-teal-400",
                  attrs: { href: "/jobs/" + _vm.detail.id }
                },
                [_vm._v("查看详情")]
              )
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/jobs/Item.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/jobs/Item.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Item_vue_vue_type_template_id_55879d91_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item.vue?vue&type=template&id=55879d91&scoped=true& */ "./resources/js/components/jobs/Item.vue?vue&type=template&id=55879d91&scoped=true&");
/* harmony import */ var _Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item.vue?vue&type=script&lang=js& */ "./resources/js/components/jobs/Item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Item_vue_vue_type_template_id_55879d91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Item_vue_vue_type_template_id_55879d91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "55879d91",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/jobs/Item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/jobs/Item.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/jobs/Item.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/jobs/Item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/jobs/Item.vue?vue&type=template&id=55879d91&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/jobs/Item.vue?vue&type=template&id=55879d91&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_template_id_55879d91_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Item.vue?vue&type=template&id=55879d91&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/jobs/Item.vue?vue&type=template&id=55879d91&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_template_id_55879d91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_template_id_55879d91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);