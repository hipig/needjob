(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
  name: 'authRegister'
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "relative bg-gray-100 min-h-screen" }, [
    _c(
      "div",
      {
        staticClass:
          "flex justify-between md:justify-end items-center bg-white shadow-sm"
      },
      [
        _c("div", { staticClass: "container px-4 mx-auto py-4" }, [
          _c("div", { staticClass: "flex items-center justify-between" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", [
              _c(
                "a",
                {
                  staticClass:
                    "border-b-2 inline-flex items-center text-teal-600 border-teal-200 hover:text-teal-700 hover:border-teal-400",
                  attrs: { href: "/" }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "stroke-current w-5 h-5 -ml-1",
                      attrs: { fill: "none", viewBox: "0 0 24 24" }
                    },
                    [
                      _c("path", {
                        attrs: {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M15 19l-7-7 7-7"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", [_vm._v("返回首页")])
                ]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/" } }, [
      _c("span", { staticClass: "text-2xl font-semibold text-teal-600" }, [
        _vm._v("NeedJob")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex px-4 py-10 flex justify-center" }, [
      _c("div", { staticClass: "max-w-lg w-full" }, [
        _c(
          "div",
          {
            staticClass:
              "shadow w-full rounded-lg bg-white overflow-hidden w-full block"
          },
          [
            _c("div", { staticClass: "p-8" }, [
              _c(
                "p",
                {
                  staticClass:
                    "mb-1 text-2xl md:text-3xl text-gray-700 font-bold leading-tight tracking-tight"
                },
                [_vm._v("用户注册")]
              ),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "mb-6 text-base text-gray-600 leading-normal" },
                [
                  _c("span", [_vm._v("已有账号？")]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "border-b-2 inline-flex text-teal-600 border-teal-200 hover:text-teal-700 hover:border-teal-400",
                      attrs: { href: "/auth/login" }
                    },
                    [_vm._v("去登录")]
                  )
                ]
              ),
              _vm._v(" "),
              _c("form", { attrs: { action: "#" } }, [
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    {
                      staticClass:
                        "form-label block mb-1 font-semibold text-gray-700"
                    },
                    [_vm._v("选择类型")]
                  ),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass:
                        "items-center mb-2 clearfix relative inline-flex mr-4 border-2 p-3 rounded-lg",
                      attrs: { for: "type_1" }
                    },
                    [
                      _c("input", {
                        staticClass: "form-radio w-5 h-5",
                        attrs: {
                          id: "type_1",
                          type: "radio",
                          name: "type",
                          checked: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "ml-4" }, [
                        _c("div", { staticClass: "flex" }, [
                          _c("div", { staticClass: "w-24" }, [
                            _c("h5", { staticClass: "text-gray-700" }, [
                              _vm._v("我要找工作")
                            ])
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass:
                        "items-center mb-2 clearfix relative inline-flex mr-4 border-2 p-3 rounded-lg",
                      attrs: { for: "type_2" }
                    },
                    [
                      _c("input", {
                        staticClass: "form-radio w-5 h-5",
                        attrs: { id: "type_2", type: "radio", name: "type" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "ml-4" }, [
                        _c("div", { staticClass: "flex" }, [
                          _c("div", { staticClass: "w-24" }, [
                            _c("h5", { staticClass: "text-gray-700" }, [
                              _vm._v("我要招聘")
                            ])
                          ])
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    {
                      staticClass:
                        "form-label block mb-1 font-semibold text-gray-700",
                      attrs: { for: "name" }
                    },
                    [_vm._v("昵称")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "relative" }, [
                    _c("input", {
                      staticClass:
                        "px-3 py-2 h-12 leading-normal block w-full text-gray-800 bg-white rounded-lg text-left appearance-none outline-none border-2 focus:border-teal-600 focus:border-teal-600",
                      attrs: {
                        id: "name",
                        type: "text",
                        name: "name",
                        placeholder: "输入昵称"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    {
                      staticClass:
                        "form-label block mb-1 font-semibold text-gray-700",
                      attrs: { for: "email" }
                    },
                    [_vm._v("邮箱地址")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "relative" }, [
                    _c("input", {
                      staticClass:
                        "px-3 py-2 h-12 leading-normal block w-full text-gray-800 bg-white rounded-lg text-left appearance-none outline-none border-2 focus:border-teal-600 focus:border-teal-600",
                      attrs: {
                        id: "email",
                        type: "text",
                        name: "email",
                        placeholder: "输入邮箱地址"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    {
                      staticClass:
                        "form-label block mb-1 font-semibold text-gray-700",
                      attrs: { for: "password" }
                    },
                    [_vm._v("密码")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "relative" }, [
                    _c("input", {
                      staticClass:
                        "px-3 py-2 h-12 leading-normal block w-full text-gray-800 bg-white rounded-lg text-left appearance-none outline-none border-2 focus:border-teal-600 focus:border-teal-600",
                      attrs: {
                        id: "password",
                        type: "password",
                        name: "password",
                        placeholder: "输入密码"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    {
                      staticClass:
                        "form-label block mb-1 font-semibold text-gray-700",
                      attrs: { for: "confirm_password" }
                    },
                    [_vm._v("重复密码")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "relative" }, [
                    _c("input", {
                      staticClass:
                        "px-3 py-2 h-12 leading-normal block w-full text-gray-800 bg-white rounded-lg text-left appearance-none outline-none border-2 focus:border-teal-600 focus:border-teal-600",
                      attrs: {
                        id: "confirm_password",
                        type: "password",
                        name: "confirm_password",
                        placeholder: "输入重复密码"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "w-full inline-flex items-center justify-center font-medium focus:outline-none rounded-lg px-6 py-2 h-12 border-2 border-teal-600 bg-teal-600 hover:bg-teal-700 hover:border-teal-700 text-white",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("立即注册")]
                )
              ])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/auth/Register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=0a273bdb& */ "./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/auth/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=0a273bdb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);