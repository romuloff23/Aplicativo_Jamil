(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["telaspublicas-mc-mc-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mc/mc.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mc/mc.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card  >\n  <img src=\"{{produtos.foto}}\" />\n  <ion-card-header>\n    <ion-card-subtitle>Ano:{{produtos.ano}} semestre: {{produtos.semestre}}°</ion-card-subtitle>\n    <ion-card-title>{{produtos.nome}}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n  </ion-card-content>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/telaspublicas/mc/mc.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/telaspublicas/mc/mc.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Galeria dos mestres Conselheiros</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"mestre as produtos\">\n    <ng-container *ngIf=\"produtos.length > 0; else semcarrinho\">\n        <app-mc-com *ngFor=\"let passaproduto of produtos\" [produtos]=\"passaproduto\">\n        </app-mc-com>\n    </ng-container>\n    <ng-template #semcarrinho>\n      <div class=\"ion-padding custom-skeleton\">\n        <ion-skeleton-text animated style=\"width: 70%;height: 30px;\"></ion-skeleton-text>\n        <ion-row>\n            <ion-col size=\"12\" size-sm>\n                <ion-skeleton-text animated style=\"width: 100%;height: 300px;\"></ion-skeleton-text>\n            </ion-col>\n            <ion-col size=\"6\" size-sm>\n                <ion-skeleton-text animated style=\"width: 80%;height: 15px;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 65%;height: 20px;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 95%;height: 15px;\"></ion-skeleton-text>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n              <ion-skeleton-text animated style=\"width: 100%;height: 300px;\"></ion-skeleton-text>\n          </ion-col>\n          <ion-col size=\"6\" size-sm>\n              <ion-skeleton-text animated style=\"width: 80%;height: 15px;\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 65%;height: 20px;\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 95%;height: 15px;\"></ion-skeleton-text>\n          </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n            <ion-skeleton-text animated style=\"width: 100%;height: 300px;\"></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"6\" size-sm>\n            <ion-skeleton-text animated style=\"width: 80%;height: 15px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 65%;height: 20px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 95%;height: 15px;\"></ion-skeleton-text>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" size-sm>\n          <ion-skeleton-text animated style=\"width: 100%;height: 300px;\"></ion-skeleton-text>\n      </ion-col>\n      <ion-col size=\"6\" size-sm>\n          <ion-skeleton-text animated style=\"width: 80%;height: 15px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 65%;height: 20px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 95%;height: 15px;\"></ion-skeleton-text>\n      </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\" size-sm>\n        <ion-skeleton-text animated style=\"width: 100%;height: 300px;\"></ion-skeleton-text>\n    </ion-col>\n    <ion-col size=\"6\" size-sm>\n        <ion-skeleton-text animated style=\"width: 80%;height: 15px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 65%;height: 20px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 95%;height: 15px;\"></ion-skeleton-text>\n    </ion-col>\n</ion-row>\n    </div>\n    </ng-template>\n</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/class/model/interfacesdb/modulo-exibicao.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/class/model/interfacesdb/modulo-exibicao.module.ts ***!
  \********************************************************************/
/*! exports provided: ModuloExibicaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuloExibicaoModule", function() { return ModuloExibicaoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_componentes_mc_mc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/componentes/mc/mc.component */ "./src/app/componentes/mc/mc.component.ts");






let ModuloExibicaoModule = class ModuloExibicaoModule {
};
ModuloExibicaoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            src_app_componentes_mc_mc_component__WEBPACK_IMPORTED_MODULE_5__["McComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        exports: [
            src_app_componentes_mc_mc_component__WEBPACK_IMPORTED_MODULE_5__["McComponent"]
        ]
    })
], ModuloExibicaoModule);



/***/ }),

/***/ "./src/app/componentes/mc/mc.component.scss":
/*!**************************************************!*\
  !*** ./src/app/componentes/mc/mc.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21jL21jLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/mc/mc.component.ts":
/*!************************************************!*\
  !*** ./src/app/componentes/mc/mc.component.ts ***!
  \************************************************/
/*! exports provided: McComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McComponent", function() { return McComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let McComponent = class McComponent {
    ngOnInit() {
        //   console.log(this.produtos)
    }
};
McComponent.propDecorators = {
    produtos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
McComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mc-com',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mc/mc.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mc.component.scss */ "./src/app/componentes/mc/mc.component.scss")).default]
    })
], McComponent);



/***/ }),

/***/ "./src/app/telaspublicas/mc/mc-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/telaspublicas/mc/mc-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: McPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McPageRoutingModule", function() { return McPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mc.page */ "./src/app/telaspublicas/mc/mc.page.ts");




const routes = [
    {
        path: '',
        component: _mc_page__WEBPACK_IMPORTED_MODULE_3__["McPage"]
    }
];
let McPageRoutingModule = class McPageRoutingModule {
};
McPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], McPageRoutingModule);



/***/ }),

/***/ "./src/app/telaspublicas/mc/mc.module.ts":
/*!***********************************************!*\
  !*** ./src/app/telaspublicas/mc/mc.module.ts ***!
  \***********************************************/
/*! exports provided: McPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McPageModule", function() { return McPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mc-routing.module */ "./src/app/telaspublicas/mc/mc-routing.module.ts");
/* harmony import */ var _mc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mc.page */ "./src/app/telaspublicas/mc/mc.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_class_model_interfacesdb_modulo_exibicao_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/class/model/interfacesdb/modulo-exibicao.module */ "./src/app/class/model/interfacesdb/modulo-exibicao.module.ts");









let McPageModule = class McPageModule {
};
McPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mc_routing_module__WEBPACK_IMPORTED_MODULE_5__["McPageRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            src_app_class_model_interfacesdb_modulo_exibicao_module__WEBPACK_IMPORTED_MODULE_8__["ModuloExibicaoModule"]
        ],
        declarations: [_mc_page__WEBPACK_IMPORTED_MODULE_6__["McPage"]]
    })
], McPageModule);



/***/ }),

/***/ "./src/app/telaspublicas/mc/mc.page.scss":
/*!***********************************************!*\
  !*** ./src/app/telaspublicas/mc/mc.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbGFzcHVibGljYXMvbWMvbWMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/telaspublicas/mc/mc.page.ts":
/*!*********************************************!*\
  !*** ./src/app/telaspublicas/mc/mc.page.ts ***!
  \*********************************************/
/*! exports provided: McPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McPage", function() { return McPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let McPage = class McPage {
    constructor(http) {
        this.http = http;
        this.mestre = new Array();
        this.erro = "sem erro";
    }
    ngOnInit() {
        this.carregarDados();
    }
    carregarDados() {
        this.http.get('http://cap.sout.net.br/mc.php').subscribe(data => {
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    this.mestre.push(element);
                }
            }
        }, err => {
            console.log(err);
            this.erro = err.message;
        });
        /*
         this.http.get('http://cap.sout.net.br/mc.php',{},{}).then(data =>{
           for (const key in data) {
             if (Object.prototype.hasOwnProperty.call(data, key)) {
               const element = data[key];
               this.mestre.push(element);
             }
           }
         }).catch(error => {
           this.erro = "deu erro "
           this.erro += " "+ error.status;
           this.erro += " "+ error.error;
           this.erro += " "+ error.headers;
           console.log(error)
           console.log(error.status);
           console.log(error.error); // error message as string
           console.log(error.headers);
       
         });
     */
    }
};
McPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
McPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mc',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mc.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/telaspublicas/mc/mc.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mc.page.scss */ "./src/app/telaspublicas/mc/mc.page.scss")).default]
    })
], McPage);



/***/ })

}]);
//# sourceMappingURL=telaspublicas-mc-mc-module-es2015.js.map