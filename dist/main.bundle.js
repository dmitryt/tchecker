webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{cls()}} container\">\n  <nav class=\"nav\">\n    <div class=\"nav-left\">\n      <span class=\"icon is-medium\">\n        <i class=\"fa fa-train\"></i>\n      </span>\n      <div>Ticket Checker</div>\n    </div>\n    <div class=\"nav-center\">\n      <a class=\"button\" (click)=\"toggleMonitoring()\"\n        [ngClass]=\"{'is-primary': !timer, 'is-warning': !!timer, 'is-loading': time <= 0}\"\n      >\n        {{timer ? 'Stop Monitoring ' + (time > 0 ? (time | time) : '' ) : 'Start Monitoring'}}\n      </a>\n      <!--Next Monitoring in&nbsp;<b>{{time | time}}</b>-->\n    </div>\n    <div class=\"nav-right\">\n      <ul class=\"{{cls('lang-selector')}}\">\n        <li\n          *ngFor=\"let lang of languages\"\n          [ngClass]=\"{'active': lang == dataService.lang}\"\n          (click)=\"setLang(lang)\"\n        >\n          <span class=\"text\">{{lang}}</span>\n        </li>\n      </ul>\n      <a class=\"button is-primary\" (click)=\"onAdd()\">+ New</a>\n    </div>\n  </nav>\n  <h3><strong>All Subscriptions:</strong></h3>\n  <div class=\"box\" *ngIf=\"newItem\">\n    <tch-form\n      [data]=\"newItem\"\n      (onSave)=\"add($event)\"\n      (onCancel)=\"newItem = null\"\n    ></tch-form>\n  </div>\n  <div class=\"box {{cls('subscription-item')}}\" *ngFor=\"let subscription of (subscriptions$ | async)\">\n    <tch-subscription\n      [data]=\"subscription\"\n      *ngIf=\"editedItem != subscription\"\n      (onEdit)=\"edit(subscription)\"\n      (onRemove)=\"remove(subscription.id)\"\n    ></tch-subscription>\n    <tch-form\n      *ngIf=\"editedItem == subscription\"\n      [data]=\"subscription\"\n      (onSave)=\"save($event)\"\n      (onCancel)=\"editedItem = null\"\n    ></tch-form>\n  </div>\n  <!--<a class=\"button is-primary\" (click)=\"loadFixtures()\">Load Fixtures</a>-->\n  <div class=\"{{cls('notifications')}}\">\n    <tch-notification\n      *ngFor=\"let notification of (notifications$ | async)\"\n      [data]=\"notification\"\n      (onRemove)=\"onNotificationRemove(notification.id)\"\n    ></tch-notification>\n  </div>\n  <tch-modal [title]=\"modal.title\" *ngIf=\"modal\" (onHandle)=\"onRemoveApprove($event, modal.itemId)\">{{modal.content}}</tch-modal>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tch-root nav {\n  padding: 5px; }\n\n.tch-root .nav-right,\n.tch-root .nav-left,\n.tch-root .nav-center {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.tch-root__subscription-item {\n  margin-top: 10px; }\n\n.tch-root__notifications {\n  position: fixed;\n  top: 0;\n  right: 10px;\n  z-index: 10; }\n\n.tch-root__lang-selector {\n  text-transform: uppercase;\n  margin-right: 20px; }\n  .tch-root__lang-selector li {\n    padding: 0 3px;\n    display: inline-block; }\n    .tch-root__lang-selector li .text {\n      cursor: pointer;\n      text-decoration: underline; }\n    .tch-root__lang-selector li:after {\n      content: '  |'; }\n    .tch-root__lang-selector li.active .text {\n      cursor: default;\n      text-decoration: none; }\n    .tch-root__lang-selector li:last-child:after {\n      content: ''; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bem_cn__ = __webpack_require__("../../../../bem-cn/dist/bem-cn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared___ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fixtures_db__ = __webpack_require__("../../../../../src/fixtures/db.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__("../../../../../src/config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var selector = 'tch-root';
var AppComponent = (function () {
    function AppComponent(store, dbService, notificationService, dataService) {
        this.store = store;
        this.dbService = dbService;
        this.notificationService = notificationService;
        this.dataService = dataService;
        this.cls = __WEBPACK_IMPORTED_MODULE_3_bem_cn___default()(selector);
        this.languages = ['en', 'ru'];
        store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__shared___["k" /* FETCH_SUBSCRIPTIONS */] });
        store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__shared___["l" /* FETCH_REPORTS */] });
        this.subscriptions$ = store.select('subscriptions');
        this.notifications$ = store.select('notifications');
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.destroyTimer = function () {
        if (this.timer) {
            this.timer.unsubscribe();
            this.timer = null;
        }
    };
    AppComponent.prototype.initTimer = function () {
        var _this = this;
        this.time = __WEBPACK_IMPORTED_MODULE_6__config__["e" /* MONITORING_INTERVAL */];
        this.timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(0, 1000).subscribe(function (t) {
            _this.time = __WEBPACK_IMPORTED_MODULE_6__config__["e" /* MONITORING_INTERVAL */] - t * 1000;
            if (_this.time < 0) {
                _this.dataService.monitor();
                _this.destroyTimer();
                _this.initTimer();
            }
        });
    };
    AppComponent.prototype.toggleMonitoring = function () {
        if (this.timer) {
            return this.destroyTimer();
        }
        this.initTimer();
    };
    AppComponent.prototype.loadFixtures = function () {
        this.dbService.loadFixtures('subscriptions', __WEBPACK_IMPORTED_MODULE_5__fixtures_db__["a" /* default */].subscriptions);
        this.dbService.loadFixtures('reports', __WEBPACK_IMPORTED_MODULE_5__fixtures_db__["a" /* default */].reports);
    };
    AppComponent.prototype.setLang = function (lang) {
        this.dataService.lang = lang;
    };
    AppComponent.prototype.onAdd = function () {
        this.newItem = new __WEBPACK_IMPORTED_MODULE_4__shared___["m" /* Subscription */]();
    };
    AppComponent.prototype.add = function (item) {
        this.newItem = null;
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__shared___["n" /* ADD_SUBSCRIPTION */], payload: item });
    };
    AppComponent.prototype.edit = function (item) {
        this.editedItem = item;
    };
    AppComponent.prototype.save = function (item) {
        this.editedItem = null;
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__shared___["o" /* UPDATE_SUBSCRIPTION */], payload: item });
    };
    AppComponent.prototype.remove = function (id) {
        this.modal = {
            title: 'Warning',
            content: 'Are you sure you want to proceed?',
            itemId: id,
        };
    };
    AppComponent.prototype.onRemoveApprove = function (promise, id) {
        var _this = this;
        this.modal = null;
        promise.then(function () {
            _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__shared___["p" /* REMOVE_SUBSCRIPTION */], payload: id });
        })
            .catch(function () { });
    };
    AppComponent.prototype.onNotificationRemove = function (id) {
        this.notificationService.remove(id);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: selector,
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared___["f" /* DBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared___["f" /* DBService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared___["g" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared___["g" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared___["e" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared___["e" /* DataService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__autocomplete_autocomplete_component__ = __webpack_require__("../../../../../src/app/autocomplete/autocomplete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__form_form_component__ = __webpack_require__("../../../../../src/app/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__datepicker_datepicker_component__ = __webpack_require__("../../../../../src/app/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__subscription_subscription_component__ = __webpack_require__("../../../../../src/app/subscription/subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__notification_notification_component__ = __webpack_require__("../../../../../src/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modal_modal_component__ = __webpack_require__("../../../../../src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__report_report_component__ = __webpack_require__("../../../../../src/app/report/report.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__autocomplete_autocomplete_component__["a" /* AutocompleteComponent */],
            __WEBPACK_IMPORTED_MODULE_11__form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_12__datepicker_datepicker_component__["a" /* DatepickerComponent */],
            __WEBPACK_IMPORTED_MODULE_13__subscription_subscription_component__["a" /* SubscriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_14__notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* FdatePipe */],
            __WEBPACK_IMPORTED_MODULE_10__shared__["b" /* TimePipe */],
            __WEBPACK_IMPORTED_MODULE_16__report_report_component__["a" /* ReportComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_10__shared__["c" /* AppState */]),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension(),
            __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_10__shared__["d" /* SubscriptionEffects */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__shared__["e" /* DataService */], __WEBPACK_IMPORTED_MODULE_10__shared__["f" /* DBService */], __WEBPACK_IMPORTED_MODULE_10__shared__["g" /* NotificationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/autocomplete/autocomplete.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{cls()}} field\" [formGroup]=\"autocompleteGroup\">\n  <label>\n    <div class=\"control has-icons-right\">\n      <input\n        #inputNode\n        type=\"text\"\n        class=\"input\"\n        [ngClass]=\"{'is-danger': autocompleteGroup.invalid}\"\n        (keydown)=\"isListVisible=true\"\n        (keyup)=\"onChange()\"\n        formControlName=\"{{name}}\"\n        placeholder=\"{{label}}\"\n      />\n    </div>\n  </label>\n  <ul class=\"{{cls('dropdown')}}\" *ngIf=\"isListVisible\">\n    <li class=\"{{cls('dropdown-item')}}\" (click)=\"onSelect(city)\" *ngFor=\"let city of citiesList$ | async\">\n      {{city.title}}\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/autocomplete/autocomplete.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tch-autocomplete {\n  position: relative; }\n  .tch-autocomplete__dropdown {\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    border-top: 0;\n    position: absolute;\n    width: 100%;\n    background-color: white;\n    z-index: 1; }\n    .tch-autocomplete__dropdown-item {\n      padding-left: 10px; }\n      .tch-autocomplete__dropdown-item:hover {\n        background-color: lightgray;\n        cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/autocomplete/autocomplete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bem_cn__ = __webpack_require__("../../../../bem-cn/dist/bem-cn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var selector = 'tch-autocomplete';
var AutocompleteComponent = (function () {
    function AutocompleteComponent(dataService) {
        this.dataService = dataService;
        this.cls = __WEBPACK_IMPORTED_MODULE_3_bem_cn___default()(selector);
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.citiesList$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].fromEvent(this.inputBox.nativeElement, 'keyup')
            .takeUntil(this.ngUnsubscribe)
            .map(function (e) { return e.target.value; })
            .filter(function (value) { return Boolean(value); })
            .debounceTime(300)
            .switchMap(function (q) { return _this.dataService.getCities(q); });
    };
    AutocompleteComponent.prototype.onChange = function () {
        this.autocompleteGroup.setValue({
            value: this.autocompleteGroup.value.value,
            id: null,
        });
    };
    AutocompleteComponent.prototype.onSelect = function (_a) {
        var title = _a.title, value = _a.value;
        this.isListVisible = false;
        this.autocompleteGroup.setValue({
            value: title,
            id: value,
        });
    };
    //https://stackoverflow.com/questions/38008334/angular-rxjs-when-should-i-unsubscribe-from-subscription
    AutocompleteComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return AutocompleteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])('label'),
    __metadata("design:type", String)
], AutocompleteComponent.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])('name'),
    __metadata("design:type", String)
], AutocompleteComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])('group'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormGroup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormGroup */]) === "function" && _a || Object)
], AutocompleteComponent.prototype, "autocompleteGroup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('inputNode'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* ElementRef */]) === "function" && _b || Object)
], AutocompleteComponent.prototype, "inputBox", void 0);
AutocompleteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: selector,
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/autocomplete/autocomplete.component.html"),
        styles: [__webpack_require__("../../../../../src/app/autocomplete/autocomplete.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["e" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["e" /* DataService */]) === "function" && _c || Object])
], AutocompleteComponent);

var _a, _b, _c;
//# sourceMappingURL=autocomplete.component.js.map

/***/ }),

/***/ "../../../../../src/app/datepicker/datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{cls()}}\">\n  <label>\n    <div class=\"control\">\n      <my-date-picker\n        class=\"hello\"\n        [options]=\"options\"\n        [ngModel]=\"model\"\n        (dateChanged)=\"onDateChanged($event)\"\n        required\n      ></my-date-picker>\n    </div>\n  </label>\n</div>"

/***/ }),

/***/ "../../../../../src/app/datepicker/datepicker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/datepicker/datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bem_cn__ = __webpack_require__("../../../../bem-cn/dist/bem-cn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("../../../../../src/config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var selector = 'tch-datepicker';
var today = new Date();
var formattedToday = {
    year: today.getFullYear(),
    day: today.getDate() - 1,
    month: today.getMonth() + 1
};
var DatepickerComponent = (function () {
    function DatepickerComponent() {
        this.cls = __WEBPACK_IMPORTED_MODULE_1_bem_cn___default()(selector);
        this.options = { dateFormat: __WEBPACK_IMPORTED_MODULE_3__config__["a" /* DATE_FORMAT_RU */].toLowerCase(), disableUntil: formattedToday };
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        // const date = parse(this.formGroup.value[this.name]);
        var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["parse"])(this.value);
        var _a = [date.getDate(), date.getMonth() + 1, date.getFullYear()], day = _a[0], month = _a[1], year = _a[2];
        this.model = { date: { year: year, day: day, month: month } };
    };
    DatepickerComponent.prototype.onDateChanged = function (event) {
        this.onChange.emit(event.jsdate ? event.jsdate.toISOString() : null);
    };
    return DatepickerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])('value'),
    __metadata("design:type", String)
], DatepickerComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], DatepickerComponent.prototype, "onChange", void 0);
DatepickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: selector,
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/datepicker/datepicker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/datepicker/datepicker.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DatepickerComponent);

//# sourceMappingURL=datepicker.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate [formGroup]=\"form\" class=\"{{cls()}}\" (ngSubmit)=\"_onSave(form.value)\">\n  <div class=\"columns\">\n    <div class=\"column\">\n      <tch-autocomplete label=\"From\" [group]=\"form.controls.from\" name=\"value\" ></tch-autocomplete>\n    </div>\n    <div class=\"column\">\n      <tch-autocomplete label=\"To\" [group]=\"form.controls.to\" name=\"value\" ></tch-autocomplete>\n    </div>\n    <div class=\"column field\">\n      <tch-datepicker label=\"Date\" [value]=\"form.controls.date.value\" (onChange)=\"onDateChange($event)\" ></tch-datepicker>\n    </div>\n    <div class=\"column is-1\">\n      <div class=\"field has-addons\">\n        <!--<p class=\"control\" title=\"Show Desktop Notifications\">\n          <a class=\"button is-primary\" (click)=\"toggleNotifications(!form.controls.showDesktopNotifications.value)\" [ngClass]=\"{'is-primary': form.controls.showDesktopNotifications.value}\" title=\"Set Desktop Notifications\">\n            <span class=\"icon is-small\">\n              <i class=\"fa fa-desktop\"></i>\n            </span>\n          </a>\n        </p>-->\n        <!--<p class=\"control\">\n          <a class=\"button\" title=\"Set Email Notifications\">\n            <span class=\"icon is-small\">\n              <i class=\"fa fa-envelope\"></i>\n            </span>\n          </a>\n        </p>-->\n      </div>\n    </div>\n    <div class=\"column is-3 has-text-right\">\n      <button type=\"submit\" class=\"button is-primary\" [disabled]=\"!form.valid\">\n        <span class=\"icon is-small\">\n          <i class=\"fa fa-check\"></i>\n        </span>\n        <span>Save</span>\n      </button>\n      <a class=\"button is-outlined\" (click)=\"_onCancel()\">\n        <span>Cancel</span>\n        <span class=\"icon is-small\">\n          <i class=\"fa fa-times\"></i>\n        </span>\n      </a>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/form/form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("../../../../bem-cn/dist/bem-cn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var selector = 'tch-form';
var FormComponent = (function () {
    function FormComponent(fb) {
        this.fb = fb;
        this.cls = __WEBPACK_IMPORTED_MODULE_2_bem_cn___default()(selector);
        this.onSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
    }
    FormComponent.prototype.ngOnInit = function () {
        var _a = this.data, from = _a.from, to = _a.to, date = _a.date, showDesktopNotifications = _a.showDesktopNotifications;
        this.form = this.fb.group({
            from: this.getDestinationGroup(from),
            to: this.getDestinationGroup(to),
            date: [date, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            showDesktopNotifications: showDesktopNotifications,
        });
    };
    FormComponent.prototype.getDestinationGroup = function (data) {
        return this.fb.group({
            id: [data.id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            value: [data.value, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
    };
    FormComponent.prototype.toggleNotifications = function (showDesktopNotifications) {
        this.form.setValue(__assign({}, this.form.value, { showDesktopNotifications: showDesktopNotifications }));
    };
    FormComponent.prototype.onDateChange = function (date) {
        this.form.setValue(__assign({}, this.form.value, { date: date }));
    };
    FormComponent.prototype._onSave = function (data) {
        this.onSave.emit(__assign({}, this.data, data));
    };
    FormComponent.prototype._onCancel = function () {
        this.onCancel.emit();
    };
    return FormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])('data'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["j" /* ISubscription */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["j" /* ISubscription */]) === "function" && _a || Object)
], FormComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], FormComponent.prototype, "onSave", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], FormComponent.prototype, "onCancel", void 0);
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: selector,
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object])
], FormComponent);

var _a, _b;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{cls}} modal is-active isVisible\">\n  <div class=\"modal-background\"></div>\n  <div class=\"modal-card\">\n    <header class=\"modal-card-head\">\n      <p class=\"modal-card-title\">{{title}}</p>\n      <button class=\"delete\" (click)=\"onCancel()\"></button>\n    </header>\n    <section class=\"modal-card-body\">\n      <ng-content></ng-content>\n    </section>\n    <footer class=\"modal-card-foot\" *ngIf=\"buttons\">\n      <a class=\"button is-success\" (click)=\"onOk()\">OK</a>\n      <a class=\"button\" (click)=\"onCancel()\">Cancel</a>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tch-modal .modal-card {\n  border-radius: 5px; }\n\n.tch-modal .modal-card-head {\n  padding: 10px 15px; }\n\n.tch-modal .modal-card-body {\n  padding: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bem_cn__ = __webpack_require__("../../../../bem-cn/dist/bem-cn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bem_cn__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var selector = 'tch-modal';
var ModalComponent = (function () {
    function ModalComponent() {
        this.buttons = true;
        this.onHandle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
        this.cls = __WEBPACK_IMPORTED_MODULE_1_bem_cn___default()(selector);
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.onOk = function () {
        this.onHandle.emit(Promise.resolve());
    };
    ModalComponent.prototype.onCancel = function () {
        this.onHandle.emit(Promise.reject(null));
    };
    return ModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])('title'),
    __metadata("design:type", String)
], ModalComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])('buttons'),
    __metadata("design:type", Boolean)
], ModalComponent.prototype, "buttons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "onHandle", void 0);
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: selector,
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/modal/modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);

//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"{{cls()}} notification is-success\"\n    [ngClass]=\"{'is-danger': data.type == 'error', 'is-warning': data.type == 'warning'}\"\n  >\n    <button class=\"delete\" (click)=\"_onRemove()\"></button>\n    {{data.message}}\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tch-notification {\n  width: 350px;\n  margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bem_cn__ = __webpack_require__("../../../../bem-cn/dist/bem-cn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared___ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var selector = 'tch-notification';
var NotificationComponent = (function () {
    function NotificationComponent() {
        this.cls = __WEBPACK_IMPORTED_MODULE_1_bem_cn___default()(selector);
        this.onRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent.prototype._onRemove = function () {
        this.onRemove.emit();
    };
    return NotificationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])('data'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared___["i" /* INotification */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared___["i" /* INotification */]) === "function" && _a || Object)
], NotificationComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "onRemove", void 0);
NotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: selector,
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/notification/notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/notification/notification.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NotificationComponent);

var _a;
//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{cls()}}\">\n  <small><b><i>{{report.created_at | date:datetimeFormat}}</i></b></small>\n  <div *ngFor=\"let value of values\">\n    <div class=\"columns\">\n      <div class=\"column is-1\">\n        <b>{{value.num}}</b>\n      </div>\n      <div class=\"column\">\n        {{value.from?.station}} -<br/>\n        {{value.till?.station}}\n      </div>\n      <div class=\"column\">\n        <small>\n          {{value.from?.src_date | date:datetimeFormat}}<br/>\n          {{value.till?.src_date | date:datetimeFormat}}\n        </small>\n      </div>\n      <div class=\"column is-1\">\n        {{value.travel_time}}\n      </div>\n      <div class=\"column is-2\">\n        <div *ngFor=\"let type of value.types\">\n          <b title=\"{{type.title}}\">{{type.id}}</b>:{{type.places}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/report/report.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bem_cn__ = __webpack_require__("../../../../bem-cn/dist/bem-cn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var selector = 'tch-report';
var ReportComponent = (function () {
    function ReportComponent() {
        this.cls = __WEBPACK_IMPORTED_MODULE_1_bem_cn___default()(selector);
        this.datetimeFormat = 'dd.MM.yyyy HH:mm';
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.values = this.report.data.value;
    };
    return ReportComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])('data'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["h" /* IReport */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["h" /* IReport */]) === "function" && _a || Object)
], ReportComponent.prototype, "report", void 0);
ReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: selector,
        template: __webpack_require__("../../../../../src/app/report/report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/report/report.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ReportComponent);

var _a;
//# sourceMappingURL=report.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* unused harmony reexport ICity */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__models__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_1__models__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__models__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__("../../../../../src/app/shared/state/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__state__["a"]; });
/* unused harmony reexport IAppState */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__state__["INotification"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__state__["g"]; });
/* unused harmony reexport ADD_REPORTS */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_2__state__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_2__state__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_2__state__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_2__state__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes__ = __webpack_require__("../../../../../src/app/shared/pipes/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__pipes__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__pipes__["b"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/city.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=city.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__city_model__ = __webpack_require__("../../../../../src/app/shared/models/city.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__city_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__city_model__);
/* unused harmony reexport ICity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subscription_model__ = __webpack_require__("../../../../../src/app/shared/models/subscription.model.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__subscription_model__["ISubscription"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__subscription_model__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_model__ = __webpack_require__("../../../../../src/app/shared/models/report.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__report_model__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__report_model__, "IReport")) __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__report_model__["IReport"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/report.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=report.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/subscription.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Subscription; });
var Subscription = (function () {
    function Subscription() {
        this.from = { value: "" };
        this.to = { value: "" };
        this.date = new Date().toISOString();
    }
    return Subscription;
}());

//# sourceMappingURL=subscription.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/fdate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("../../../../../src/config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FdatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FdatePipe = (function () {
    function FdatePipe() {
    }
    FdatePipe.prototype.transform = function (value, args) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["format"])(value, __WEBPACK_IMPORTED_MODULE_2__config__["a" /* DATE_FORMAT_RU */]);
    };
    return FdatePipe;
}());
FdatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Pipe */])({
        name: 'fdate'
    })
], FdatePipe);

//# sourceMappingURL=fdate.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fdate_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/fdate.pipe.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fdate_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__time_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/time.pipe.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__time_pipe__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/time.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MS_IN_SECONDS = 1000;
var SECONDS_IN_MINUTES = 60;
var MS_IN_MINUTES = SECONDS_IN_MINUTES * MS_IN_SECONDS;
var MINUTES_IN_HOURS = 60;
var MS_IN_HOURS = MINUTES_IN_HOURS * MS_IN_MINUTES;
var HOURS_IN_DAY = 24;
var leadZero = function (v) { return v < 10 ? "0" + v : v; };
var TimePipe = (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (value, args) {
        if (isNaN(value)) {
            return value;
        }
        var hours = Math.floor(value / MS_IN_HOURS) % HOURS_IN_DAY;
        var minutes = Math.floor(value / MS_IN_MINUTES) % MINUTES_IN_HOURS;
        var seconds = Math.floor(value / MS_IN_SECONDS) % SECONDS_IN_MINUTES;
        return [hours, minutes, seconds].map(leadZero).join(':');
    };
    return TimePipe;
}());
TimePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Pipe */])({
        name: 'time'
    })
], TimePipe);

//# sourceMappingURL=time.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__("../../../../../src/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__state__ = __webpack_require__("../../../../../src/app/shared/state/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DataService = (function () {
    function DataService(http, notificationService, store) {
        this.http = http;
        this.notificationService = notificationService;
        this.store = store;
        this.lang = 'en';
    }
    DataService.prototype.getCities = function (query) {
        var _this = this;
        var url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__config__["c" /* URLS */])(this.lang).CITIES;
        return this.http.get(url, { params: { term: query } })
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            _this.notificationService.push({
                message: err,
                type: 'error',
            });
            return [];
        });
    };
    DataService.prototype.monitor = function () {
        var _this = this;
        return this.store.select('subscriptions')
            .concatMap(function (list) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(list); })
            .flatMap(function (list) {
            return list.map(function (item) { return _this.getAvailablePlaces(item); });
        })
            .subscribe(function (report$) {
            report$.subscribe(function (data) {
                var subscription_id = data.subscription_id;
                var payload = { subscription_id: subscription_id, data: data, created_at: new Date().toISOString() };
                _this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__state__["l" /* addReportsAction */])(payload));
            });
        });
    };
    DataService.prototype.prepareParams = function (_a) {
        var from = _a.from, to = _a.to, date = _a.date;
        return {
            station_id_from: from.id,
            station_id_till: to.id,
            date_dep: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_date_fns__["format"])(date, this.lang === 'en' ? __WEBPACK_IMPORTED_MODULE_5__config__["d" /* DATE_FORMAT_EN */] : __WEBPACK_IMPORTED_MODULE_5__config__["a" /* DATE_FORMAT_RU */]),
        };
    };
    DataService.prototype._stringifyQuery = function (query) {
        var params = Object.keys(query).reduce(function (acc, k) {
            return acc.concat([k + "=" + query[k]]);
        }, []);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */](params.join('&'));
    };
    DataService.prototype.getAvailablePlaces = function (data) {
        var _this = this;
        var url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__config__["c" /* URLS */])(this.lang).TICKETS;
        var body = this._stringifyQuery(this.prepareParams(data));
        return this.http.post(url, body)
            .map(function (res) {
            var _data = res.json();
            if (_data.error) {
                throw new Error(_data.value);
            }
            return __assign({}, _data, { subscription_id: data.id });
        })
            .catch(function (err) {
            _this.notificationService.push({
                message: err,
                type: 'error',
            });
            return [];
        });
    };
    DataService.prototype.pushDesktopNotification = function (msg) {
        var exec = function () { return new Notification(msg); };
        if (Notification.permission === 'granted') {
            exec();
        }
        else if (Notification.permission !== 'denied' || Notification.permission === "default") {
            Notification.requestPermission().then(function () { return exec(); });
        }
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__notification_service__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], DataService);

var _a, _b, _c;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/db.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dexie__ = __webpack_require__("../../../../dexie/dist/dexie.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dexie_observable__ = __webpack_require__("../../../../dexie-observable/dist/dexie-observable.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("../../../../../src/config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DBService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DBService = (function (_super) {
    __extends(DBService, _super);
    function DBService() {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_4__config__["b" /* DATABASE_NAME */]) || this;
        _this.version(1).stores({
            subscriptions: '++id, from, to, date, lang',
            reports: '++id, subscription_id, created_at, data',
        });
        return _this;
    }
    DBService.prototype.addReports = function (data) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(this.table('reports').add(data));
    };
    DBService.prototype.getReports = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(this.table('reports').reverse().toArray());
    };
    DBService.prototype.getSubscriptions = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(this.table('subscriptions').toArray());
    };
    DBService.prototype.removeSubscription = function (id) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(this.table('reports')
            .where({ subscription_id: id })
            .primaryKeys()
            .then(function (ids) { return _this.table('reports').bulkDelete(ids); })
            .then(function () { return _this.table('subscriptions').delete(id); }));
    };
    DBService.prototype.updateSubscription = function (data) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(this.table('subscriptions').put(data));
    };
    DBService.prototype.addSubscription = function (data) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(this.table('subscriptions').add(data));
    };
    DBService.prototype.loadFixtures = function (name, data) {
        this.table(name).bulkAdd(data).then(function (lastKey) {
            console.log("Items were added successfully");
        }).catch(__WEBPACK_IMPORTED_MODULE_2_dexie__["a" /* default */].BulkError, function (e) {
            console.error("Some errors occurs", e);
        });
    };
    return DBService;
}(__WEBPACK_IMPORTED_MODULE_2_dexie__["a" /* default */]));
DBService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DBService);

//# sourceMappingURL=db.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__db_service__ = __webpack_require__("../../../../../src/app/shared/services/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state__ = __webpack_require__("../../../../../src/app/shared/state/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__("../../../../../src/app/shared/services/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ITEM_UPDATE_MSG = 'Item has been updated successfully';
var ITEM_ADD_MSG = 'Item has been added successfully';
var ITEM_REMOVE_MSG = 'Item has been removed successfully';
var REPORTS_ADD_MSG = 'Reports have been generated successfully';
var SubscriptionEffects = (function () {
    function SubscriptionEffects(actions$, dbService, notificationService, dataService) {
        var _this = this;
        this.actions$ = actions$;
        this.dbService = dbService;
        this.notificationService = notificationService;
        this.dataService = dataService;
        this.addedSubs$ = this.updateSubscriptions({
            type: __WEBPACK_IMPORTED_MODULE_4__state__["b" /* ADD_SUBSCRIPTION */], message: ITEM_ADD_MSG, modifier: function (_a) {
                var payload = _a.payload;
                return _this.dbService.addSubscription(payload);
            }
        });
        this.updatedSubs$ = this.updateSubscriptions({
            type: __WEBPACK_IMPORTED_MODULE_4__state__["c" /* UPDATE_SUBSCRIPTION */], message: ITEM_UPDATE_MSG, modifier: function (_a) {
                var payload = _a.payload;
                return _this.dbService.updateSubscription(payload);
            }
        });
        this.removedSubs$ = this.updateSubscriptions({
            type: __WEBPACK_IMPORTED_MODULE_4__state__["d" /* REMOVE_SUBSCRIPTION */], message: ITEM_REMOVE_MSG, modifier: function (_a) {
                var payload = _a.payload;
                return _this.dbService.removeSubscription(payload);
            }
        });
        this.subscriptions$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__state__["e" /* FETCH_SUBSCRIPTIONS */])
            .switchMap(this.fetchSubscriptions());
        this.addedReports$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__state__["f" /* ADD_REPORTS */])
            .switchMap(function (_a) {
            var payload = _a.payload;
            return _this.dbService.addReports(payload);
        })
            .switchMap(function () {
            var cb = _this.fetchReports();
            _this.dataService.pushDesktopNotification(REPORTS_ADD_MSG);
            return cb();
        })
            .catch(function (s) {
            debugger;
            return [];
        });
        this.reports$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__state__["g" /* FETCH_REPORTS */])
            .switchMap(this.fetchReports());
    }
    SubscriptionEffects.prototype.fetchReports = function () {
        var _this = this;
        return function () {
            return _this.dbService.getReports()
                .map(function (payload) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__state__["h" /* getReportsAction */])(payload); })
                .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ type: 'REQUEST_FAILED' }); });
        };
    };
    SubscriptionEffects.prototype.fetchSubscriptions = function () {
        var _this = this;
        return function () {
            return _this.dbService.getSubscriptions()
                .map(function (payload) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__state__["i" /* getSubscriptionsAction */])(payload); })
                .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ type: 'REQUEST_FAILED' }); });
        };
    };
    SubscriptionEffects.prototype.updateSubscriptions = function (_a) {
        var _this = this;
        var type = _a.type, message = _a.message, modifier = _a.modifier;
        return this.actions$
            .ofType(type)
            .switchMap(modifier)
            .switchMap(function () {
            var cb = _this.fetchSubscriptions();
            _this.notificationService.push({ message: message });
            return cb();
        });
    };
    ;
    return SubscriptionEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], SubscriptionEffects.prototype, "addedSubs$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], SubscriptionEffects.prototype, "updatedSubs$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], SubscriptionEffects.prototype, "removedSubs$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], SubscriptionEffects.prototype, "subscriptions$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], SubscriptionEffects.prototype, "addedReports$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], SubscriptionEffects.prototype, "reports$", void 0);
SubscriptionEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__db_service__["a" /* DBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__db_service__["a" /* DBService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */]) === "function" && _d || Object])
], SubscriptionEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=effect.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("../../../../../src/app/shared/services/data.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__data_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_service__ = __webpack_require__("../../../../../src/app/shared/services/db.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__db_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__notification_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__effect__ = __webpack_require__("../../../../../src/app/shared/services/effect.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__effect__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__("../../../../../src/app/shared/state/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TIMEOUT = 3000;
var NotificationService = (function () {
    function NotificationService(store) {
        this.store = store;
    }
    NotificationService.prototype.push = function (payload) {
        var _this = this;
        var id = new Date().getTime();
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__state__["j" /* pushNotificationAction */])(__assign({}, payload, { id: id })));
        setTimeout(function () { return _this.remove(id); }, TIMEOUT);
    };
    NotificationService.prototype.remove = function (id) {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__state__["k" /* removeNotificationAction */])(id));
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], NotificationService);

var _a;
//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/state/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subscriptions__ = __webpack_require__("../../../../../src/app/shared/state/subscriptions/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notifications__ = __webpack_require__("../../../../../src/app/shared/state/notifications/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports__ = __webpack_require__("../../../../../src/app/shared/state/reports/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__subscriptions__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__subscriptions__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__subscriptions__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__subscriptions__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__subscriptions__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications___ = __webpack_require__("../../../../../src/app/shared/state/notifications/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_3__notifications___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__notifications___["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reports___ = __webpack_require__("../../../../../src/app/shared/state/reports/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__reports___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__reports___["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__reports___["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__reports___["d"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });






;
var AppState = {
    subscriptions: __WEBPACK_IMPORTED_MODULE_0__subscriptions__["a" /* reducer */],
    notifications: __WEBPACK_IMPORTED_MODULE_1__notifications__["a" /* reducer */],
    reports: __WEBPACK_IMPORTED_MODULE_2__reports__["a" /* reducer */],
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/state/notifications/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PUSH_NOTIFICATION */
/* unused harmony export REMOVE_NOTIFICATION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pushNotificationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removeNotificationAction; });
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
var NS = 'tch';
var PUSH_NOTIFICATION = NS + "/PUSH_NOTIFICATION";
var REMOVE_NOTIFICATION = NS + "/REMOVE_NOTIFICATION";
var pushNotificationAction = function (payload) { return ({ type: PUSH_NOTIFICATION, payload: payload }); };
var removeNotificationAction = function (payload) { return ({ type: REMOVE_NOTIFICATION, payload: payload }); };
function reducer(state, _a) {
    if (state === void 0) { state = []; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case PUSH_NOTIFICATION:
            return state.concat([payload]);
        case REMOVE_NOTIFICATION:
            var index = state.map(function (n) { return n.id; }).indexOf(payload);
            if (index === -1) {
                return state;
            }
            return state.slice(0, index).concat(state.slice(index + 1));
        default:
            return state;
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/state/reports/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export REPORTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_REPORTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_REPORTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getReportsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return addReportsAction; });
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
var NS = 'tch';
var REPORTS = NS + "/REPORTS";
var FETCH_REPORTS = NS + "/FETCH_REPORTS";
var ADD_REPORTS = NS + "/ADD_REPORTS";
var getReportsAction = function (payload) { return ({ type: REPORTS, payload: payload }); };
var addReportsAction = function (payload) { return ({ type: ADD_REPORTS, payload: payload }); };
function reducer(state, _a) {
    if (state === void 0) { state = []; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case REPORTS:
            return payload.slice();
        default:
            return state;
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/state/subscriptions/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducer__ = __webpack_require__("../../../../../src/app/shared/state/subscriptions/reducer.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__reducer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__reducer__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__reducer__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__reducer__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__reducer__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__reducer__["f"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/state/subscriptions/reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_SUBSCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UPDATE_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REMOVE_SUBSCRIPTION; });
/* unused harmony export SUBSCRIPTIONS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSubscriptionsAction; });
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
var NS = 'tch';
var FETCH_SUBSCRIPTIONS = NS + "/FETCH_SUBSCRIPTIONS";
var UPDATE_SUBSCRIPTION = NS + "/UPDATE_SUBSCRIPTION";
var ADD_SUBSCRIPTION = NS + "/ADD_SUBSCRIPTION";
var REMOVE_SUBSCRIPTION = NS + "/REMOVE_SUBSCRIPTION";
var SUBSCRIPTIONS = NS + "/SUBSCRIPTIONS";
var getSubscriptionsAction = function (payload) { return ({ type: SUBSCRIPTIONS, payload: payload }); };
function reducer(state, _a) {
    if (state === void 0) { state = []; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case SUBSCRIPTIONS:
            return payload.slice();
        default:
            return state;
    }
}
//# sourceMappingURL=reducer.js.map

/***/ }),

/***/ "../../../../../src/app/subscription/subscription.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns {{cls()}}\">\n  <div class=\"column\">\n    <article class=\"media\">\n      <div class=\"media-content\">\n        <div class=\"content\">\n          <p>\n            <strong>{{data.from.value}}</strong>\n            <i class=\"fa fa-long-arrow-right {{cls('arrow-icon')}}\" aria-hidden=\"true\"></i>\n            <strong>{{data.to.value}}</strong>,\n            <small>{{data.date | fdate}}</small>\n            <!--<span class=\"icon is-small {{cls('setting-icon', {active: data.showDesktopNotifications})}}\">\n              <i class=\"fa fa-desktop\" aria-hidden=\"true\"></i>\n            </span>-->\n            <!--<span class=\"icon is-small {{cls('setting-icon', {active: !!data.notifyToEmail})}}\">\n              <i class=\"fa fa-envelope\" title=\"{{data.notifyToEmail}}\" aria-hidden=\"true\"></i>\n            </span>-->\n          </p>\n        </div>\n      </div>\n    </article>\n  </div>\n  <div class=\"column is-2 has-text-right\">\n    <span class=\"icon\">\n      <i class=\"fa fa-file-text {{cls('edit-icon')}}\" (click)=\"showReports()\" title=\"Show Reports\"></i>\n    </span>\n    <span class=\"icon\">\n      <i class=\"fa fa-pencil {{cls('edit-icon')}}\" (click)=\"_onEdit()\" title=\"Edit\"></i>\n    </span>\n    <span class=\"icon\">\n      <i class=\"fa fa-trash {{cls('edit-icon')}}\" (click)=\"_onRemove()\" title=\"Remove\"></i>\n    </span>\n  </div>\n  <tch-modal title=\"Reports\" *ngIf=\"modal\" [buttons]=\"false\" (onHandle)=\"onCloseDialog($event)\">\n    <tch-report *ngFor=\"let report of (modal.reports$ | async)\" [data]=\"report\"></tch-report>\n  </tch-modal>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/subscription/subscription.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tch-subscription__arrow-icon {\n  margin-top: 4px; }\n\n.tch-subscription__setting-icon {\n  margin-top: 2px;\n  margin-left: 10px; }\n  .tch-subscription__setting-icon .fa {\n    border-radius: 5px;\n    padding: 5px 6px;\n    background-color: #ccc;\n    color: #fff; }\n  .tch-subscription__setting-icon_active .fa {\n    background-color: #00d1b2; }\n\n.tch-subscription__edit-icon {\n  cursor: pointer; }\n\n.tch-subscription .tch-report {\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 5px;\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subscription/subscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("../../../../bem-cn/dist/bem-cn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var selector = 'tch-subscription';
var SubscriptionComponent = (function () {
    function SubscriptionComponent(store) {
        this.store = store;
        this.onEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
        this.onRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
        this.cls = __WEBPACK_IMPORTED_MODULE_2_bem_cn___default()(selector);
    }
    SubscriptionComponent.prototype.ngOnInit = function () {
    };
    SubscriptionComponent.prototype.showReports = function () {
        var _this = this;
        this.modal = {
            hideButtons: true,
            reports$: this.store.select('reports').map(function (reports) {
                return reports.filter(function (r) { return r.subscription_id === _this.data.id; });
            })
        };
    };
    SubscriptionComponent.prototype._onEdit = function () {
        this.onEdit.emit();
    };
    SubscriptionComponent.prototype._onRemove = function () {
        this.onRemove.emit();
    };
    SubscriptionComponent.prototype.onCloseDialog = function (promise, id) {
        this.modal = null;
        promise.then(function () {
        })
            .catch(function () { });
    };
    return SubscriptionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])('data'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["j" /* ISubscription */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["j" /* ISubscription */]) === "function" && _a || Object)
], SubscriptionComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], SubscriptionComponent.prototype, "onEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], SubscriptionComponent.prototype, "onRemove", void 0);
SubscriptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: selector,
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/subscription/subscription.component.html"),
        styles: [__webpack_require__("../../../../../src/app/subscription/subscription.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], SubscriptionComponent);

var _a, _b;
//# sourceMappingURL=subscription.component.js.map

/***/ }),

/***/ "../../../../../src/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return URLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DATABASE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATE_FORMAT_RU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DATE_FORMAT_EN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MONITORING_INTERVAL; });
// function getServiceUrls(lang) {
//   const HOST = `http://booking.uz.gov.ua/${lang}/purchase`;
//   return {
//     CITIES: `${HOST}/station/`,
//     TICKETS: `${HOST}/search/`,
//   };
// }
function getProxyUrls(lang) {
    var PORT = process.env.PORT || 5000;
    var HOST = location.hostname;
    var BASE = "http://" + HOST + ":" + PORT + "/" + lang;
    return {
        CITIES: BASE + "/cities",
        TICKETS: BASE + "/tickets",
    };
}
var URLS = getProxyUrls;
var DATABASE_NAME = 'tch_db';
var DATE_FORMAT_RU = 'DD.MM.YYYY';
var DATE_FORMAT_EN = 'MM.DD.YYYY';
var MONITORING_INTERVAL = 1 * 60 * 1000;
// export const MONITORING_INTERVAL = 10 * 60 * 1000; 
//# sourceMappingURL=config.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../../../process/browser.js")))

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    mockServer: false,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/fixtures/db.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    "reports": [
        {
            "subscription_id": 1,
            "created_at": "2017-06-21T21:00:00.000Z",
            "data": { "value": [{ "num": "766О", "model": 0, "category": 2, "travel_time": "7:08", "from": { "station": "Киев-Пассажирский", "date": 1499143560, "src_date": "2017-07-04 07:46:00" }, "till": { "station": "Херсон", "date": 1499169240, "src_date": "2017-07-04 14:54:00" }, "types": [{ "id": "С1", "title": "Сидячий первого класса", "letter": "С1", "places": 8 }, { "id": "С2", "title": "Сидячий второго класса", "letter": "С2", "places": 24 }], "allow_stud": 1, "allow_transportation": 1, "allow_booking": 1 }, { "num": "298К", "model": 0, "category": 0, "travel_time": "12:23", "from": { "station": "Киев-Пассажирский", "date": 1499194320, "src_date": "2017-07-04 21:52:00" }, "till": { "station": "Херсон", "date": 1499238900, "src_date": "2017-07-05 10:15:00" }, "types": [{ "id": "Л", "title": "Люкс", "letter": "Л", "places": 4 }, { "id": "К", "title": "Купе", "letter": "К", "places": 29 }, { "id": "П", "title": "Плацкарт", "letter": "П", "places": 2 }], "allow_stud": 1, "allow_transportation": 1, "allow_booking": 1 }], "error": null, "data": null, "captcha": null }
        }
    ],
    "subscriptions": [
        {
            "from": {
                "id": 2200001,
                "value": "Kyiv"
            },
            "to": {
                "id": 2208530,
                "value": "Kherson"
            },
            "lang": "en",
            "date": "2017-06-21T21:00:00.000Z",
            "showDesktopNotifications": true,
            "notifyToEmail": "hello.world@gmail.com"
        },
        {
            "from": {
                "id": 2200331,
                "value": "Vinnytsja"
            },
            "to": {
                "id": 2212330,
                "value": "Kherson"
            },
            "lang": "en",
            "date": "2017-06-21T21:00:00.000Z",
            "showDesktopNotifications": false
        },
        {
            "from": {
                "id": 2223401,
                "value": "Kharkiv"
            },
            "to": {
                "id": 2201230,
                "value": "Vinnytsja"
            },
            "lang": "en",
            "date": "2017-06-21T21:00:00.000Z",
            "showDesktopNotifications": false,
            "notifyToEmail": "hello.world@gmail.com"
        }
    ]
});
//# sourceMappingURL=db.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map