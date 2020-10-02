(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home",
  data: function data() {
    return {
      items: [{
        src: 'https://www.tokkoro.com/picsup/5721188-pc-gaming-hd-wallpapers.jpg'
      }, {
        src: 'https://static.razer.ru/media/offers/razer-kraken-te-gaming-headset-hero.jpg'
      }, {
        src: 'https://geek.md/wp-content/uploads/2020/01/RZ03-03080100-R3M1-Razer-Huntsman-Tournament-Edition-7.jpg'
      }, {
        src: 'https://apac.coolermaster.com/tw/assets/products/mastercase-h500p/wallpaper/Wallpaper_4k_H500P_1.jpg'
      }],
      GalleryItems: [{
        src: 'https://bestmarka.ru/wp-content/uploads/2020/07/s1200.jpg'
      }, {
        src: 'https://bestmarka.ru/wp-content/uploads/2020/07/s1200.jpg'
      }, {
        src: 'https://bestmarka.ru/wp-content/uploads/2020/07/s1200.jpg'
      }, {
        src: 'https://bestmarka.ru/wp-content/uploads/2020/07/s1200.jpg'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-carousel",
        {
          attrs: {
            cycle: "",
            "delimiter-icon": "mdi-minus",
            "hide-delimiter-background": ""
          }
        },
        _vm._l(_vm.items, function(item, index) {
          return _c("v-carousel-item", { key: index, attrs: { src: item.src } })
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "reviews mb-10" },
        [
          _c(
            "div",
            { staticClass: "reviews__title text-h2 mb-10 mt-5 text-center" },
            [_vm._v("Отзывы наших посетителей")]
          ),
          _vm._v(" "),
          _c(
            "v-carousel",
            { attrs: { "hide-delimiters": "", height: "150px", light: "" } },
            [
              _c(
                "v-carousel-item",
                [
                  _c(
                    "v-sheet",
                    { attrs: { height: "100%" } },
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c("v-col", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "reviews__name text-h4 text-center mb-5"
                                  },
                                  [_vm._v("Егор")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "reviews__desrc text-subtitle-1 text-center"
                                  },
                                  [
                                    _vm._v(
                                      "Lorem ipsum dolor sit\n                                    amet, consectetur adipisicing elit. At aut dignissimos enim qui quis.\n                                    Amet autem id ullam! Dicta quo, voluptates! Fugiat illum impedit nostrum\n                                    odio quam ullam veniam? Tempore!"
                                    )
                                  ]
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-carousel-item",
                [
                  _c(
                    "v-sheet",
                    { attrs: { height: "100%" } },
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c("v-col", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "reviews__name text-h4 text-center mb-5"
                                  },
                                  [_vm._v("Егор")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "reviews__desrc text-subtitle-1 text-center"
                                  },
                                  [
                                    _vm._v(
                                      "Lorem ipsum dolor sit\n                                    amet, consectetur adipisicing elit. At aut dignissimos enim qui quis.\n                                    Amet autem id ullam! Dicta quo, voluptates! Fugiat illum impedit nostrum\n                                    odio quam ullam veniam? Tempore!"
                                    )
                                  ]
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-carousel-item",
                [
                  _c(
                    "v-sheet",
                    { attrs: { height: "100%" } },
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c("v-col", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "reviews__name text-h4 text-center mb-5"
                                  },
                                  [_vm._v("Егор")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "reviews__desrc text-subtitle-1 text-center"
                                  },
                                  [
                                    _vm._v(
                                      "Lorem ipsum dolor sit\n                                    amet, consectetur adipisicing elit. At aut dignissimos enim qui quis.\n                                    Amet autem id ullam! Dicta quo, voluptates! Fugiat illum impedit nostrum\n                                    odio quam ullam veniam? Tempore!"
                                    )
                                  ]
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "gallery" },
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                _vm._l(_vm.GalleryItems, function(item, index) {
                  return _c(
                    "v-col",
                    { key: index, attrs: { cols: "12", sm: "6", md: "4" } },
                    [
                      _c("v-img", {
                        staticClass: "gallery__img",
                        attrs: { src: item.src }
                      })
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c&scoped=true& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f2b6376c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);