(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  \n</ion-header>\n\n<ion-content class=\"backg\" [fullscreen]=\"true\">\n\n  <!--cabecalho-->\n  <div class=\"fundo\" >\n    <ion-row >\n      <ion-grid size=\"3\" >\n        <img src=\"assets/img/logo.png\" />\n      </ion-grid>\n      <ion-grid size=\"9\" >\n        <h3>Jamil José Dahas 142</h3>\n      </ion-grid>\n    </ion-row>\n  </div>\n  <!--btn menu-->\n  <div class=\"fundo icone\" > \n    <!--\n    <p style=\"text-align: center !important;\" ><ion-icon style=\"font-size: 40px !important;\"  name=\"menu\" ></ion-icon></p>\n    -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  ></ion-menu-button>\n    </ion-buttons>\n  </div>\n  \n  <!--corpo  -->\n  <ion-card>\n    <img src=\"assets/img/logo.png\" />\n    <ion-card-header>\n      <ion-card-subtitle>Sub Titulo (opcional)</ion-card-subtitle>\n      <ion-card-title>Titulo</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      Keep close to Nature's heart... and break clear away, once in awhile,\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <img src=\"assets/img/logo.png\" />\n    <ion-card-header>\n      <ion-card-subtitle>Sub Titulo (opcional)</ion-card-subtitle>\n      <ion-card-title>Titulo</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      Keep close to Nature's heart... and break clear away, once in awhile,\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.\n    </ion-card-content>\n  </ion-card>\n\n  <!-- RODAPÉ -->\n<ion-row class=\"rodape\" >\n  <img src=\"assets/img/logo.png\" width=\"70px\" height=\"70px\"/>\n  <img src=\"assets/img/dmbrasil.png\" width=\"125px\" height=\"70px\"/><br>\n  <p>© 2021 Jamil José Dahas 142 | NºCap:142 - CEP: 66025-230 Belém-PA  </p>\n</ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: Lobster;\n  src: url(\"/assets/fontes/Lobster-Regular.ttf\");\n}\n.backg {\n  --background: url(\"/assets/img/backgraud.jpeg\") 100% 100%;\n}\n.icone {\n  margin-top: 0px;\n  padding-top: 0px;\n  color: #fff !important;\n}\n.icone p {\n  margin: 0px !important;\n  text-align: center;\n}\n.fundo {\n  background: url(\"/assets/img/fundo.jpeg\") no-repeat 100% 100%;\n}\nh3 {\n  font-size: 25px;\n  font-family: Lobster;\n  color: #ffffff;\n}\n.rodape {\n  background-color: #648ae2;\n  text-align: center;\n  margin: 0px;\n  align-items: center;\n  padding-top: 3px;\n}\n.rodape p {\n  padding: 3px;\n  color: #fff;\n}\n.subrodape {\n  margin: 0px;\n  background-color: #f6cd25;\n  padding: 5px;\n  align-items: center;\n}\n.subrodape p {\n  text-align: center;\n  color: #fff;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsOENBQUE7QUFDRjtBQUdBO0VBQ0UseURBQUE7QUFERjtBQUlBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFGRjtBQUdFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUE7RUFDRSw2REFBQTtBQURGO0FBSUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBREY7QUFLQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUZGO0FBR0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQURKO0FBS0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IExvYnN0ZXI7XG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRlcy9Mb2JzdGVyLVJlZ3VsYXIudHRmJyk7XG59XG5cbi8vTG9ic3Rlci1SZWd1bGFyLnR0ZlxuLmJhY2tne1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2JhY2tncmF1ZC5qcGVnXCIpICAxMDAlIDEwMCU7XG4gIFxufVxuLmljb25le1xuICBcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyBcbiAgcHtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmZ1bmRve1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9mdW5kby5qcGVnXCIpIG5vLXJlcGVhdCAxMDAlIDEwMCUgO1xufVxuXG5oM3tcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LWZhbWlseTogTG9ic3RlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi8vXG4ucm9kYXBle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM2NDhhZTI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi5zdWJyb2RhcGV7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjZDI1O1xuICBwYWRkaW5nOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map