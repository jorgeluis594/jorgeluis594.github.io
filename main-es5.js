function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_estadisticas_estadisticas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/estadisticas/estadisticas.component */
    "./src/app/pages/estadisticas/estadisticas.component.ts");
    /* harmony import */


    var _pages_list_pedidos_list_pedidos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/list-pedidos/list-pedidos.component */
    "./src/app/pages/list-pedidos/list-pedidos.component.ts");
    /* harmony import */


    var _pages_agregarpedido_agregarpedido_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/agregarpedido/agregarpedido.component */
    "./src/app/pages/agregarpedido/agregarpedido.component.ts");

    var routes = [{
      path: 'home',
      component: _pages_estadisticas_estadisticas_component__WEBPACK_IMPORTED_MODULE_2__["EstadisticasComponent"]
    }, {
      path: 'list',
      component: _pages_list_pedidos_list_pedidos_component__WEBPACK_IMPORTED_MODULE_3__["ListPedidosComponent"]
    }, {
      path: 'agregar',
      component: _pages_agregarpedido_agregarpedido_component__WEBPACK_IMPORTED_MODULE_4__["AgregarpedidoComponent"]
    }, {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'home'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _share_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./share/navbar/navbar.component */
    "./src/app/share/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'fd';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container", "mt-5"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_share_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _share_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./share/navbar/navbar.component */
    "./src/app/share/navbar/navbar.component.ts");
    /* harmony import */


    var _pages_list_pedidos_list_pedidos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/list-pedidos/list-pedidos.component */
    "./src/app/pages/list-pedidos/list-pedidos.component.ts");
    /* harmony import */


    var _pages_estadisticas_estadisticas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/estadisticas/estadisticas.component */
    "./src/app/pages/estadisticas/estadisticas.component.ts");
    /* harmony import */


    var _pages_agregarpedido_agregarpedido_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/agregarpedido/agregarpedido.component */
    "./src/app/pages/agregarpedido/agregarpedido.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_formulariopedido_formulariopedido_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/formulariopedido/formulariopedido.component */
    "./src/app/components/formulariopedido/formulariopedido.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_pedidos_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/pedidos.service */
    "./src/app/services/pedidos.service.ts"); //firebase
    // Imports de material
    // fomrs


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_pedidos_service__WEBPACK_IMPORTED_MODULE_19__["PedidosService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _share_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _pages_list_pedidos_list_pedidos_component__WEBPACK_IMPORTED_MODULE_8__["ListPedidosComponent"], _pages_estadisticas_estadisticas_component__WEBPACK_IMPORTED_MODULE_9__["EstadisticasComponent"], _pages_agregarpedido_agregarpedido_component__WEBPACK_IMPORTED_MODULE_10__["AgregarpedidoComponent"], _components_formulariopedido_formulariopedido_component__WEBPACK_IMPORTED_MODULE_12__["FormulariopedidoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _share_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _pages_list_pedidos_list_pedidos_component__WEBPACK_IMPORTED_MODULE_8__["ListPedidosComponent"], _pages_estadisticas_estadisticas_component__WEBPACK_IMPORTED_MODULE_9__["EstadisticasComponent"], _pages_agregarpedido_agregarpedido_component__WEBPACK_IMPORTED_MODULE_10__["AgregarpedidoComponent"], _components_formulariopedido_formulariopedido_component__WEBPACK_IMPORTED_MODULE_12__["FormulariopedidoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"]],
          providers: [_services_pedidos_service__WEBPACK_IMPORTED_MODULE_19__["PedidosService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/formulariopedido/formulariopedido.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/formulariopedido/formulariopedido.component.ts ***!
    \***************************************************************************/

  /*! exports provided: FormulariopedidoComponent */

  /***/
  function srcAppComponentsFormulariopedidoFormulariopedidoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormulariopedidoComponent", function () {
      return FormulariopedidoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_pedidos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/pedidos.service */
    "./src/app/services/pedidos.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");

    var FormulariopedidoComponent =
    /*#__PURE__*/
    function () {
      function FormulariopedidoComponent(_pedidoservice) {
        _classCallCheck(this, FormulariopedidoComponent);

        this._pedidoservice = _pedidoservice;
      }

      _createClass(FormulariopedidoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'nombredueno': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'nombremascota': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'pack': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'tematica': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'sabor': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'gorrito': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'diseno': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'costo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'observaciones': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'fechaentrega': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.formulario.controls.tematica.valueChanges.subscribe(function (val) {
            _this.formulario.controls.gorrito.setValue(val);

            _this.formulario.controls.diseno.setValue(val);
          });
        }
      }, {
        key: "guardarCambios",
        value: function guardarCambios() {
          if (this.formulario.status == "VALID") {
            console.log(this.formulario.value.fechaentrega);

            this._pedidoservice.crearPedido({
              nombredueno: this.formulario.value.nombredueno,
              nombremascota: this.formulario.value.nombremascota,
              pack: this.formulario.value.pack,
              tematica: this.formulario.value.tematica,
              sabor: this.formulario.value.sabor,
              gorrito: this.formulario.value.gorrito,
              diseno: this.formulario.value.diseno,
              costo: this.formulario.value.costo,
              fechapedido: new Date(),
              fechaentrega: this.formulario.value.fechaentrega,
              observaciones: this.formulario.value.observaciones
            });
          }
        }
      }]);

      return FormulariopedidoComponent;
    }();

    FormulariopedidoComponent.ɵfac = function FormulariopedidoComponent_Factory(t) {
      return new (t || FormulariopedidoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pedidos_service__WEBPACK_IMPORTED_MODULE_2__["PedidosService"]));
    };

    FormulariopedidoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormulariopedidoComponent,
      selectors: [["app-formulariopedido"]],
      decls: 55,
      vars: 3,
      consts: [[1, "card", "my-5"], [1, "card-b"], [1, "card-title", "mx-auto"], ["novalidate", "novalidate", 1, "formulario-registro", "py-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col"], ["matInput", "", "formControlName", "nombredueno"], ["matInput", "", "formControlName", "nombremascota"], ["matInput", "", "formControlName", "pack"], ["matInput", "", "formControlName", "tematica"], ["matInput", "", "formControlName", "sabor"], ["matInput", "", "formControlName", "gorrito"], [1, "fw"], ["matInput", "", "formControlName", "diseno"], ["matInput", "", "formControlName", "observaciones"], ["matInput", "", "formControlName", "costo"], ["matInput", "", "formControlName", "fechaentrega", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["type", "submit", 1, "btn", "btn-outline-success", "my-4", "mx-auto"]],
      template: function FormulariopedidoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ingregar pedido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormulariopedidoComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.guardarCambios();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nombre Due\xF1o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre Mascota");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Tem\xE1tica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sabor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Gorrito");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Dise\xF1o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Observaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Costo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Fecha entrega");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-datepicker-toggle", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "mat-datepicker", null, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Ingresar Pedido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formulario);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"]],
      styles: [".card[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 700px;\n  width: 60%;\n  margin: auto;\n}\n.card[_ngcontent-%COMP%]   .card-b[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 2.5rem 2.5rem;\n}\n.card[_ngcontent-%COMP%]   .fw[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card[_ngcontent-%COMP%]   .w50[_ngcontent-%COMP%] {\n  width: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhcmlvcGVkaWRvL0Q6L2FuZ3VsYXJjbGkvZmQvc3JjL2FwcC9jb21wb25lbnRzL2Zvcm11bGFyaW9wZWRpZG8vZm9ybXVsYXJpb3BlZGlkby5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhcmlvcGVkaWRvL2Zvcm11bGFyaW9wZWRpZG8uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSjtBRExBO0VBTVEsV0FBQTtFQUNBLHNCQUFBO0FDRVI7QURUQTtFQVVRLFdBQUE7QUNFUjtBRFpBO0VBYVEsVUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhcmlvcGVkaWRvL2Zvcm11bGFyaW9wZWRpZG8uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgd2lkdGg6IDYwJTsgXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC5jYXJkLWJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAyLjVyZW0gMi41cmVtO1xuICAgIH1cbiAgICAuZnd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAudzUwe1xuICAgICAgICB3aWR0aDogNDUlO1xuICAgIH1cbn0iLCIuY2FyZCB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5jYXJkIC5jYXJkLWIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMi41cmVtIDIuNXJlbTtcbn1cbi5jYXJkIC5mdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmQgLnc1MCB7XG4gIHdpZHRoOiA0NSU7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormulariopedidoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-formulariopedido',
          templateUrl: './formulariopedido.component.html',
          styleUrls: ['./formulariopedido.component.less']
        }]
      }], function () {
        return [{
          type: src_app_services_pedidos_service__WEBPACK_IMPORTED_MODULE_2__["PedidosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/agregarpedido/agregarpedido.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/agregarpedido/agregarpedido.component.ts ***!
    \****************************************************************/

  /*! exports provided: AgregarpedidoComponent */

  /***/
  function srcAppPagesAgregarpedidoAgregarpedidoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgregarpedidoComponent", function () {
      return AgregarpedidoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_formulariopedido_formulariopedido_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/formulariopedido/formulariopedido.component */
    "./src/app/components/formulariopedido/formulariopedido.component.ts");

    var AgregarpedidoComponent =
    /*#__PURE__*/
    function () {
      function AgregarpedidoComponent() {
        _classCallCheck(this, AgregarpedidoComponent);
      }

      _createClass(AgregarpedidoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AgregarpedidoComponent;
    }();

    AgregarpedidoComponent.ɵfac = function AgregarpedidoComponent_Factory(t) {
      return new (t || AgregarpedidoComponent)();
    };

    AgregarpedidoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AgregarpedidoComponent,
      selectors: [["app-agregarpedido"]],
      decls: 1,
      vars: 0,
      template: function AgregarpedidoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-formulariopedido");
        }
      },
      directives: [_components_formulariopedido_formulariopedido_component__WEBPACK_IMPORTED_MODULE_1__["FormulariopedidoComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FncmVnYXJwZWRpZG8vYWdyZWdhcnBlZGlkby5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgregarpedidoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-agregarpedido',
          templateUrl: './agregarpedido.component.html',
          styleUrls: ['./agregarpedido.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/estadisticas/estadisticas.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/estadisticas/estadisticas.component.ts ***!
    \**************************************************************/

  /*! exports provided: EstadisticasComponent */

  /***/
  function srcAppPagesEstadisticasEstadisticasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstadisticasComponent", function () {
      return EstadisticasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EstadisticasComponent =
    /*#__PURE__*/
    function () {
      function EstadisticasComponent() {
        _classCallCheck(this, EstadisticasComponent);
      }

      _createClass(EstadisticasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EstadisticasComponent;
    }();

    EstadisticasComponent.ɵfac = function EstadisticasComponent_Factory(t) {
      return new (t || EstadisticasComponent)();
    };

    EstadisticasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EstadisticasComponent,
      selectors: [["app-estadisticas"]],
      decls: 2,
      vars: 0,
      template: function EstadisticasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "estadisticas works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VzdGFkaXN0aWNhcy9lc3RhZGlzdGljYXMuY29tcG9uZW50Lmxlc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstadisticasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-estadisticas',
          templateUrl: './estadisticas.component.html',
          styleUrls: ['./estadisticas.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/list-pedidos/list-pedidos.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/list-pedidos/list-pedidos.component.ts ***!
    \**************************************************************/

  /*! exports provided: ListPedidosComponent */

  /***/
  function srcAppPagesListPedidosListPedidosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPedidosComponent", function () {
      return ListPedidosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_pedidos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/pedidos.service */
    "./src/app/services/pedidos.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListPedidosComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Due\xF1o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nombre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Pack");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Costo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Fecha Entrega");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Ver mas");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.nombremascota);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.nombredueno);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.nombremascota);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.pack);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.costo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 6, card_r1.fechaentrega.seconds * 1000, "dd-MM"), " ");
      }
    }

    var ListPedidosComponent =
    /*#__PURE__*/
    function () {
      function ListPedidosComponent(_pedidos) {
        var _this2 = this;

        _classCallCheck(this, ListPedidosComponent);

        this._pedidos = _pedidos;
        this.listpedidos = [];

        this._pedidos.listPedidos().subscribe(function (pedidos) {
          _this2.listpedidos = pedidos;
          console.log(_this2.listpedidos[0]);
        });
      }

      _createClass(ListPedidosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ListPedidosComponent;
    }();

    ListPedidosComponent.ɵfac = function ListPedidosComponent_Factory(t) {
      return new (t || ListPedidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pedidos_service__WEBPACK_IMPORTED_MODULE_1__["PedidosService"]));
    };

    ListPedidosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListPedidosComponent,
      selectors: [["app-list-pedidos"]],
      decls: 2,
      vars: 1,
      consts: [[1, "row", "row-cols-1", "row-cols-md-4"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "col", "mb-4"], [1, "card"], [1, "card-body", "text-center"], [1, "card-title"], [1, "table", 2, "background-color", "#e3f2fd"], ["href", "#", 1, "btn", "btn-outline-success"]],
      template: function ListPedidosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListPedidosComponent_div_1_Template, 36, 9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listpedidos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: ["table[_ngcontent-%COMP%] {\n  line-height: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdC1wZWRpZG9zL0Q6L2FuZ3VsYXJjbGkvZmQvc3JjL2FwcC9wYWdlcy9saXN0LXBlZGlkb3MvbGlzdC1wZWRpZG9zLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9saXN0LXBlZGlkb3MvbGlzdC1wZWRpZG9zLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QtcGVkaWRvcy9saXN0LXBlZGlkb3MuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbn0iLCJ0YWJsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListPedidosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list-pedidos',
          templateUrl: './list-pedidos.component.html',
          styleUrls: ['./list-pedidos.component.less']
        }]
      }], function () {
        return [{
          type: src_app_services_pedidos_service__WEBPACK_IMPORTED_MODULE_1__["PedidosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/pedidos.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/pedidos.service.ts ***!
    \*********************************************/

  /*! exports provided: PedidosService */

  /***/
  function srcAppServicesPedidosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidosService", function () {
      return PedidosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var PedidosService =
    /*#__PURE__*/
    function () {
      function PedidosService(firestore) {
        _classCallCheck(this, PedidosService);

        this.firestore = firestore;
        this.basedatos = 'Pedidos';
        this.itemsCollection = this.firestore.collection(this.basedatos);
      }

      _createClass(PedidosService, [{
        key: "listPedidos",
        value: function listPedidos() {
          return this.itemsCollection.valueChanges();
        }
      }, {
        key: "crearPedido",
        value: function crearPedido(pedido) {
          this.itemsCollection.add(pedido);
        }
      }]);

      return PedidosService;
    }();

    PedidosService.ɵfac = function PedidosService_Factory(t) {
      return new (t || PedidosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]));
    };

    PedidosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PedidosService,
      factory: PedidosService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/share/navbar/navbar.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/share/navbar/navbar.component.ts ***!
    \**************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppShareNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 21,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", 2, "background-color", "#e3f2fd"], [1, "container"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLinkActive", "active", "routerLink", "/home", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLinkActive", "active", "routerLink", "/list", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/agregar", 1, "nav-link"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Estadisticas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pedidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Agregar Pedido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmxlc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyBQwp6LFbOSa25A9Cs_v8n6Owoec8bPqbI',
        authDomain: 'fantastidog-c9473.firebaseapp.com',
        databaseURL: 'https://fantastidog-c9473.firebaseio.com',
        projectId: 'fantastidog-c9473',
        storageBucket: 'fantastidog-c9473.appspot.com',
        messagingSenderId: '658018146679'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\angularcli\fd\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map