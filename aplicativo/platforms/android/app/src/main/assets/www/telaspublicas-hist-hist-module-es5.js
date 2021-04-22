(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["telaspublicas-hist-hist-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/telaspublicas/hist/hist.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/telaspublicas/hist/hist.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTelaspublicasHistHistPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>hist</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/telaspublicas/hist/hist-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/telaspublicas/hist/hist-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: HistPageRoutingModule */

    /***/
    function srcAppTelaspublicasHistHistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistPageRoutingModule", function () {
        return HistPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _hist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hist.page */
      "./src/app/telaspublicas/hist/hist.page.ts");

      var routes = [{
        path: '',
        component: _hist_page__WEBPACK_IMPORTED_MODULE_3__["HistPage"]
      }];

      var HistPageRoutingModule = function HistPageRoutingModule() {
        _classCallCheck(this, HistPageRoutingModule);
      };

      HistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HistPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/telaspublicas/hist/hist.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/telaspublicas/hist/hist.module.ts ***!
      \***************************************************/

    /*! exports provided: HistPageModule */

    /***/
    function srcAppTelaspublicasHistHistModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistPageModule", function () {
        return HistPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _hist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hist-routing.module */
      "./src/app/telaspublicas/hist/hist-routing.module.ts");
      /* harmony import */


      var _hist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hist.page */
      "./src/app/telaspublicas/hist/hist.page.ts");

      var HistPageModule = function HistPageModule() {
        _classCallCheck(this, HistPageModule);
      };

      HistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _hist_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistPageRoutingModule"]],
        declarations: [_hist_page__WEBPACK_IMPORTED_MODULE_6__["HistPage"]]
      })], HistPageModule);
      /***/
    },

    /***/
    "./src/app/telaspublicas/hist/hist.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/telaspublicas/hist/hist.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTelaspublicasHistHistPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbGFzcHVibGljYXMvaGlzdC9oaXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/telaspublicas/hist/hist.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/telaspublicas/hist/hist.page.ts ***!
      \*************************************************/

    /*! exports provided: HistPage */

    /***/
    function srcAppTelaspublicasHistHistPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistPage", function () {
        return HistPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HistPage = /*#__PURE__*/function () {
        function HistPage() {
          _classCallCheck(this, HistPage);
        }

        _createClass(HistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HistPage;
      }();

      HistPage.ctorParameters = function () {
        return [];
      };

      HistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./hist.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/telaspublicas/hist/hist.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./hist.page.scss */
        "./src/app/telaspublicas/hist/hist.page.scss"))["default"]]
      })], HistPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=telaspublicas-hist-hist-module-es5.js.map