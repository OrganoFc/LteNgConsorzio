webpackJsonp([1,5],{

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(214);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(279),
        styles: [__webpack_require__(268)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_fullcalendar_src_calendar_calendar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_appheader_appheader_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_appfooter_appfooter_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_appmenu_appmenu_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_appsettings_appsettings_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__module_attivita_attivita_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__module_presenza_presenza_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__module_chilometraggio_chilometraggio_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__module_gasolio_gasolio_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_web_api_observable_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__module_preselezione_preselezione_component__ = __webpack_require__(554);
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
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__component_appheader_appheader_component__["a" /* AppheaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__component_appfooter_appfooter_component__["a" /* AppfooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__component_appmenu_appmenu_component__["a" /* AppmenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__component_appsettings_appsettings_component__["a" /* AppsettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_fullcalendar_src_calendar_calendar__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__module_attivita_attivita_component__["a" /* AttivitaComponent */],
            __WEBPACK_IMPORTED_MODULE_12__module_presenza_presenza_component__["a" /* PresenzaComponent */],
            __WEBPACK_IMPORTED_MODULE_13__module_chilometraggio_chilometraggio_component__["a" /* ChilometraggioComponent */],
            __WEBPACK_IMPORTED_MODULE_14__module_gasolio_gasolio_component__["a" /* GasolioComponent */],
            __WEBPACK_IMPORTED_MODULE_16__module_preselezione_preselezione_component__["a" /* PreselezioneComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* ModalModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__services_web_api_observable_service__["a" /* WebApiObservableService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppfooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppfooterComponent = (function () {
    function AppfooterComponent() {
    }
    AppfooterComponent.prototype.ngOnInit = function () {
    };
    return AppfooterComponent;
}());
AppfooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-appfooter',
        template: __webpack_require__(280),
        styles: [__webpack_require__(269)]
    }),
    __metadata("design:paramtypes", [])
], AppfooterComponent);

//# sourceMappingURL=appfooter.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppheaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppheaderComponent = (function () {
    function AppheaderComponent() {
    }
    AppheaderComponent.prototype.ngOnInit = function () {
    };
    return AppheaderComponent;
}());
AppheaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-appheader',
        template: __webpack_require__(281),
        styles: [__webpack_require__(270)]
    }),
    __metadata("design:paramtypes", [])
], AppheaderComponent);

//# sourceMappingURL=appheader.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppmenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppmenuComponent = (function () {
    function AppmenuComponent() {
    }
    AppmenuComponent.prototype.ngOnInit = function () {
    };
    return AppmenuComponent;
}());
AppmenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-appmenu',
        template: __webpack_require__(282),
        styles: [__webpack_require__(271)]
    }),
    __metadata("design:paramtypes", [])
], AppmenuComponent);

//# sourceMappingURL=appmenu.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppsettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppsettingsComponent = (function () {
    function AppsettingsComponent() {
    }
    AppsettingsComponent.prototype.ngOnInit = function () {
    };
    return AppsettingsComponent;
}());
AppsettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-appsettings',
        template: __webpack_require__(283),
        styles: [__webpack_require__(272)]
    }),
    __metadata("design:paramtypes", [])
], AppsettingsComponent);

//# sourceMappingURL=appsettings.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web_api_observable_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_emitter_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_dipendente__ = __webpack_require__(362);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttivitaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttivitaComponent = (function () {
    function AttivitaComponent(api) {
        this.api = api;
        this.calendarOptions = {
            //height: 'parent',
            fixedWeekCount: false,
            defaultDate: '2016-09-12',
            editable: true,
            eventLimit: true,
            events: [
                {
                    title: 'All Day Event',
                    start: '2016-09-01'
                },
                {
                    title: 'Long Event',
                    start: '2016-09-07',
                    end: '2016-09-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2016-09-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2016-09-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2016-09-11',
                    end: '2016-09-13'
                },
                {
                    title: 'Meeting',
                    start: '2016-09-12T10:30:00',
                    end: '2016-09-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2016-09-12T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2016-09-12T14:30:00'
                },
                {
                    title: 'Happy Hour',
                    start: '2016-09-12T17:30:00'
                },
                {
                    title: 'Dinner',
                    start: '2016-09-12T20:00:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2016-09-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2016-09-28'
                }
            ],
            eventClick: function (calEvent, jsEvent, view) {
                alert('Event: ' + calEvent.title);
                alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
                alert('View: ' + view.name);
                // change the border color just for fun
                $(this).css('border-color', 'red');
            },
            dayClick: function (date, jsEvent, view) {
                alert('Clicked on: ' + date.format());
                alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
                alert('Current view: ' + view.name);
                // change the day's background color just for fun
                $(this).css('background-color', 'red');
            }
        };
        this.model = new __WEBPACK_IMPORTED_MODULE_3__models_dipendente__["a" /* Dipendente */]();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_emitter_service__["a" /* EmitterService */].urlapi + "/dipendente";
    }
    AttivitaComponent.prototype.ngOnInit = function () {
    };
    AttivitaComponent.prototype.getDipendente = function (search) {
        var _this = this;
        // Get all Documenti
        this.api.getService(this.url.concat('/' + search))
            .subscribe(function (res) {
            _this.parseWebService(res);
            //EmitterService.get(this.AUTOMEZZO_COLLAUDO_ID).emit(this.model.id);
        }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    AttivitaComponent.prototype.parseWebService = function (res) {
        if (res.data == null) {
            __WEBPACK_IMPORTED_MODULE_2__services_emitter_service__["a" /* EmitterService */].get(__WEBPACK_IMPORTED_MODULE_2__services_emitter_service__["a" /* EmitterService */].MESSAGETOAST).emit(new __WEBPACK_IMPORTED_MODULE_2__services_emitter_service__["b" /* MessageCustom */]('Dipedente non trovata!', 'Messagio di Confirmazione!', '.green'));
            //this.onNuovo();
        }
        else {
            //Array.isArray(obj)
            //if(res.count>0)
            if (Array.isArray(res.data))
                if (res.data.length == 1)
                    //aqui metemos un popup con la lista de las coincidencias
                    //console.log('es un array');
                    //this.resultModal.nativeElement.show();
                    console.log(this.resultModal);
                else
                    this.model = res.data[0];
            else
                this.model = res.data;
        }
    };
    return AttivitaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('resultModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */]) === "function" && _a || Object)
], AttivitaComponent.prototype, "resultModal", void 0);
AttivitaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-attivita',
        template: __webpack_require__(284),
        styles: [__webpack_require__(273)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_web_api_observable_service__["a" /* WebApiObservableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_web_api_observable_service__["a" /* WebApiObservableService */]) === "function" && _b || Object])
], AttivitaComponent);

var _a, _b;
//# sourceMappingURL=attivita.component.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChilometraggioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChilometraggioComponent = (function () {
    function ChilometraggioComponent() {
    }
    ChilometraggioComponent.prototype.ngOnInit = function () {
    };
    return ChilometraggioComponent;
}());
ChilometraggioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-chilometraggio',
        template: __webpack_require__(285),
        styles: [__webpack_require__(274)]
    }),
    __metadata("design:paramtypes", [])
], ChilometraggioComponent);

//# sourceMappingURL=chilometraggio.component.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GasolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GasolioComponent = (function () {
    function GasolioComponent() {
    }
    GasolioComponent.prototype.ngOnInit = function () {
    };
    return GasolioComponent;
}());
GasolioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-gasolio',
        template: __webpack_require__(286),
        styles: [__webpack_require__(275)]
    }),
    __metadata("design:paramtypes", [])
], GasolioComponent);

//# sourceMappingURL=gasolio.component.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresenzaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PresenzaComponent = (function () {
    function PresenzaComponent() {
    }
    PresenzaComponent.prototype.ngOnInit = function () {
    };
    return PresenzaComponent;
}());
PresenzaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-presenza',
        template: __webpack_require__(287),
        styles: [__webpack_require__(276)]
    }),
    __metadata("design:paramtypes", [])
], PresenzaComponent);

//# sourceMappingURL=presenza.component.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmitterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MessageCustom; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmitterService = (function () {
    function EmitterService() {
    }
    // Set a new event in the store with a given ID
    // as key
    EmitterService.get = function (ID) {
        if (!this._emitters[ID])
            this._emitters[ID] = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        return this._emitters[ID];
    };
    return EmitterService;
}());
EmitterService.MESSAGETOAST = 'MESSAGE-TOAST';
// Event store
EmitterService.urlapi = "api";
EmitterService._emitters = {};
EmitterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], EmitterService);

var MessageCustom = (function () {
    function MessageCustom(message, title, class_color) {
        this.message = message;
        this.title = title;
        this.class_color = class_color;
    }
    return MessageCustom;
}());

//# sourceMappingURL=emitter.service.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"appfooter.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"appheader.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"appmenu.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"appsettings.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"attivita.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"chilometraggio.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"gasolio.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"presenza.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 69,
	"./af.js": 69,
	"./ar": 76,
	"./ar-dz": 70,
	"./ar-dz.js": 70,
	"./ar-kw": 71,
	"./ar-kw.js": 71,
	"./ar-ly": 72,
	"./ar-ly.js": 72,
	"./ar-ma": 73,
	"./ar-ma.js": 73,
	"./ar-sa": 74,
	"./ar-sa.js": 74,
	"./ar-tn": 75,
	"./ar-tn.js": 75,
	"./ar.js": 76,
	"./az": 77,
	"./az.js": 77,
	"./be": 78,
	"./be.js": 78,
	"./bg": 79,
	"./bg.js": 79,
	"./bn": 80,
	"./bn.js": 80,
	"./bo": 81,
	"./bo.js": 81,
	"./br": 82,
	"./br.js": 82,
	"./bs": 83,
	"./bs.js": 83,
	"./ca": 84,
	"./ca.js": 84,
	"./cs": 85,
	"./cs.js": 85,
	"./cv": 86,
	"./cv.js": 86,
	"./cy": 87,
	"./cy.js": 87,
	"./da": 88,
	"./da.js": 88,
	"./de": 91,
	"./de-at": 89,
	"./de-at.js": 89,
	"./de-ch": 90,
	"./de-ch.js": 90,
	"./de.js": 91,
	"./dv": 92,
	"./dv.js": 92,
	"./el": 93,
	"./el.js": 93,
	"./en-au": 94,
	"./en-au.js": 94,
	"./en-ca": 95,
	"./en-ca.js": 95,
	"./en-gb": 96,
	"./en-gb.js": 96,
	"./en-ie": 97,
	"./en-ie.js": 97,
	"./en-nz": 98,
	"./en-nz.js": 98,
	"./eo": 99,
	"./eo.js": 99,
	"./es": 101,
	"./es-do": 100,
	"./es-do.js": 100,
	"./es.js": 101,
	"./et": 102,
	"./et.js": 102,
	"./eu": 103,
	"./eu.js": 103,
	"./fa": 104,
	"./fa.js": 104,
	"./fi": 105,
	"./fi.js": 105,
	"./fo": 106,
	"./fo.js": 106,
	"./fr": 109,
	"./fr-ca": 107,
	"./fr-ca.js": 107,
	"./fr-ch": 108,
	"./fr-ch.js": 108,
	"./fr.js": 109,
	"./fy": 110,
	"./fy.js": 110,
	"./gd": 111,
	"./gd.js": 111,
	"./gl": 112,
	"./gl.js": 112,
	"./gom-latn": 113,
	"./gom-latn.js": 113,
	"./he": 114,
	"./he.js": 114,
	"./hi": 115,
	"./hi.js": 115,
	"./hr": 116,
	"./hr.js": 116,
	"./hu": 117,
	"./hu.js": 117,
	"./hy-am": 118,
	"./hy-am.js": 118,
	"./id": 119,
	"./id.js": 119,
	"./is": 120,
	"./is.js": 120,
	"./it": 121,
	"./it.js": 121,
	"./ja": 122,
	"./ja.js": 122,
	"./jv": 123,
	"./jv.js": 123,
	"./ka": 124,
	"./ka.js": 124,
	"./kk": 125,
	"./kk.js": 125,
	"./km": 126,
	"./km.js": 126,
	"./kn": 127,
	"./kn.js": 127,
	"./ko": 128,
	"./ko.js": 128,
	"./ky": 129,
	"./ky.js": 129,
	"./lb": 130,
	"./lb.js": 130,
	"./lo": 131,
	"./lo.js": 131,
	"./lt": 132,
	"./lt.js": 132,
	"./lv": 133,
	"./lv.js": 133,
	"./me": 134,
	"./me.js": 134,
	"./mi": 135,
	"./mi.js": 135,
	"./mk": 136,
	"./mk.js": 136,
	"./ml": 137,
	"./ml.js": 137,
	"./mr": 138,
	"./mr.js": 138,
	"./ms": 140,
	"./ms-my": 139,
	"./ms-my.js": 139,
	"./ms.js": 140,
	"./my": 141,
	"./my.js": 141,
	"./nb": 142,
	"./nb.js": 142,
	"./ne": 143,
	"./ne.js": 143,
	"./nl": 145,
	"./nl-be": 144,
	"./nl-be.js": 144,
	"./nl.js": 145,
	"./nn": 146,
	"./nn.js": 146,
	"./pa-in": 147,
	"./pa-in.js": 147,
	"./pl": 148,
	"./pl.js": 148,
	"./pt": 150,
	"./pt-br": 149,
	"./pt-br.js": 149,
	"./pt.js": 150,
	"./ro": 151,
	"./ro.js": 151,
	"./ru": 152,
	"./ru.js": 152,
	"./sd": 153,
	"./sd.js": 153,
	"./se": 154,
	"./se.js": 154,
	"./si": 155,
	"./si.js": 155,
	"./sk": 156,
	"./sk.js": 156,
	"./sl": 157,
	"./sl.js": 157,
	"./sq": 158,
	"./sq.js": 158,
	"./sr": 160,
	"./sr-cyrl": 159,
	"./sr-cyrl.js": 159,
	"./sr.js": 160,
	"./ss": 161,
	"./ss.js": 161,
	"./sv": 162,
	"./sv.js": 162,
	"./sw": 163,
	"./sw.js": 163,
	"./ta": 164,
	"./ta.js": 164,
	"./te": 165,
	"./te.js": 165,
	"./tet": 166,
	"./tet.js": 166,
	"./th": 167,
	"./th.js": 167,
	"./tl-ph": 168,
	"./tl-ph.js": 168,
	"./tlh": 169,
	"./tlh.js": 169,
	"./tr": 170,
	"./tr.js": 170,
	"./tzl": 171,
	"./tzl.js": 171,
	"./tzm": 173,
	"./tzm-latn": 172,
	"./tzm-latn.js": 172,
	"./tzm.js": 173,
	"./uk": 174,
	"./uk.js": 174,
	"./ur": 175,
	"./ur.js": 175,
	"./uz": 177,
	"./uz-latn": 176,
	"./uz-latn.js": 176,
	"./uz.js": 177,
	"./vi": 178,
	"./vi.js": 178,
	"./x-pseudo": 179,
	"./x-pseudo.js": 179,
	"./yo": 180,
	"./yo.js": 180,
	"./zh-cn": 181,
	"./zh-cn.js": 181,
	"./zh-hk": 182,
	"./zh-hk.js": 182,
	"./zh-tw": 183,
	"./zh-tw.js": 183
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 277;


/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = "<app-appheader></app-appheader>\r\n<app-appmenu></app-appmenu>\r\n<div class=\"content-wrapper\">\r\n  <section class=\"content-header\">\r\n      <h1>\r\n        Dashboard\r\n        <small>Control panel</small>\r\n      </h1>\r\n      <ol class=\"breadcrumb\">\r\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n        <li class=\"active\">Dashboard</li>\r\n      </ol>\r\n    </section>\r\n\r\n    <div class=\"content\">\r\n    <app-attivita></app-attivita>\r\n    </div>\r\n\r\n</div>\r\n\r\n<app-appfooter></app-appfooter>\r\n<app-appsettings></app-appsettings>\r\n"

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n    <div class=\"pull-right hidden-xs\">\n      <b>Version</b> 2.3.8\n    </div>\n    <strong>Copyright © 2014-2016 <a href=\"http://almsaeedstudio.com\">Almsaeed Studio</a>.</strong> All rights\n    reserved.\n  </footer>\n"

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n    <!-- Logo -->\n    <a href=\"index2.html\" class=\"logo\">\n      <!-- mini logo for sidebar mini 50x50 pixels -->\n      <span class=\"logo-mini\"><b>A</b>LT</span>\n      <!-- logo for regular state and mobile devices -->\n      <span class=\"logo-lg\"><b>Admin</b>LTE</span>\n    </a>\n    <!-- Header Navbar: style can be found in header.less -->\n    <nav class=\"navbar navbar-static-top\">\n      <!-- Sidebar toggle button-->\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n\n      <div class=\"navbar-custom-menu\">\n        <ul class=\"nav navbar-nav\">\n          <!-- Messages: style can be found in dropdown.less-->\n          <li class=\"dropdown messages-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-envelope-o\"></i>\n              <span class=\"label label-success\">4</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 4 messages</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 200px;\"><ul class=\"menu\" style=\"overflow: hidden; width: 100%; height: 200px;\">\n                  <li><!-- start message -->\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Support Team\n                        <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <!-- end message -->\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        AdminLTE Design Team\n                        <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Developers\n                        <small><i class=\"fa fa-clock-o\"></i> Today</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Sales Department\n                        <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Reviewers\n                        <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                </ul><div class=\"slimScrollBar\" style=\"background: rgb(0, 0, 0); width: 3px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;\"></div><div class=\"slimScrollRail\" style=\"width: 3px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"></div></div>\n              </li>\n              <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n            </ul>\n          </li>\n          <!-- Notifications: style can be found in dropdown.less -->\n          <li class=\"dropdown notifications-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-bell-o\"></i>\n              <span class=\"label label-warning\">10</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 10 notifications</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 200px;\"><ul class=\"menu\" style=\"overflow: hidden; width: 100%; height: 200px;\">\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the\n                      page and may cause design problems\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-users text-red\"></i> 5 new members joined\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-user text-red\"></i> You changed your username\n                    </a>\n                  </li>\n                </ul><div class=\"slimScrollBar\" style=\"background: rgb(0, 0, 0); width: 3px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;\"></div><div class=\"slimScrollRail\" style=\"width: 3px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"></div></div>\n              </li>\n              <li class=\"footer\"><a href=\"#\">View all</a></li>\n            </ul>\n          </li>\n          <!-- Tasks: style can be found in dropdown.less -->\n          <li class=\"dropdown tasks-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-flag-o\"></i>\n              <span class=\"label label-danger\">9</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 9 tasks</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 200px;\"><ul class=\"menu\" style=\"overflow: hidden; width: 100%; height: 200px;\">\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Design some buttons\n                        <small class=\"pull-right\">20%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">20% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Create a nice theme\n                        <small class=\"pull-right\">40%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">40% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Some task I need to do\n                        <small class=\"pull-right\">60%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Make beautiful transitions\n                        <small class=\"pull-right\">80%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">80% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                </ul><div class=\"slimScrollBar\" style=\"background: rgb(0, 0, 0); width: 3px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;\"></div><div class=\"slimScrollRail\" style=\"width: 3px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"></div></div>\n              </li>\n              <li class=\"footer\">\n                <a href=\"#\">View all tasks</a>\n              </li>\n            </ul>\n          </li>\n          <!-- User Account: style can be found in dropdown.less -->\n          <li class=\"dropdown user user-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <img src=\"dist/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n              <span class=\"hidden-xs\">Alexander Pierce</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <!-- User image -->\n              <li class=\"user-header\">\n                <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n                <p>\n                  Alexander Pierce - Web Developer\n                  <small>Member since Nov. 2012</small>\n                </p>\n              </li>\n              <!-- Menu Body -->\n              <li class=\"user-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Followers</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Sales</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Friends</a>\n                  </div>\n                </div>\n                <!-- /.row -->\n              </li>\n              <!-- Menu Footer-->\n              <li class=\"user-footer\">\n                <div class=\"pull-left\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n                </div>\n                <div class=\"pull-right\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n                </div>\n              </li>\n            </ul>\n          </li>\n          <!-- Control Sidebar Toggle Button -->\n          <li>\n            <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </header>\n"

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n    <!-- sidebar: style can be found in sidebar.less -->\n    <section class=\"sidebar\" style=\"height: auto;\">\n      <!-- Sidebar user panel -->\n      <div class=\"user-panel\">\n        <div class=\"pull-left image\">\n          <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n        </div>\n        <div class=\"pull-left info\">\n          <p>Alexander Pierce</p>\n          <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n        </div>\n      </div>\n      <!-- search form -->\n      <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n              <span class=\"input-group-btn\">\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n                </button>\n              </span>\n        </div>\n      </form>\n      <!-- /.search form -->\n      <!-- sidebar menu: : style can be found in sidebar.less -->\n      <ul class=\"sidebar-menu\">\n        <li class=\"header\">MENU DI NAVIGAZIONE</li>\n        <li class=\"active treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-dashboard\"></i> <span>Attività</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li class=\"active\"><a href=\"index.html\"><i class=\"fa fa-circle-o\"></i> Attività</a></li>\n            <li><a href=\"index2.html\"><i class=\"fa fa-circle-o\"></i> Attività</a></li>\n          </ul>\n        </li>\n\n\n      </ul>\n    </section>\n    <!-- /.sidebar -->\n  </aside>\n"

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = "<aside class=\"control-sidebar control-sidebar-dark\">\n    <!-- Create the tabs -->\n    <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n      <li class=\"active\"><a href=\"#control-sidebar-theme-demo-options-tab\" data-toggle=\"tab\"><i class=\"fa fa-wrench\"></i></a></li><li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n      <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n    </ul>\n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n      <!-- Home tab content -->\n      <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\n        <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n        <ul class=\"control-sidebar-menu\">\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n                <p>Will be 23 on April 24th</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n\n                <p>New phone +1(800)555-1234</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n\n                <p>nora@example.com</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n\n                <p>Execution time 5 seconds</p>\n              </div>\n            </a>\n          </li>\n        </ul>\n        <!-- /.control-sidebar-menu -->\n\n        <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n        <ul class=\"control-sidebar-menu\">\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Custom Template Design\n                <span class=\"label label-danger pull-right\">70%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Update Resume\n                <span class=\"label label-success pull-right\">95%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Laravel Integration\n                <span class=\"label label-warning pull-right\">50%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Back End Framework\n                <span class=\"label label-primary pull-right\">68%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n              </div>\n            </a>\n          </li>\n        </ul>\n        <!-- /.control-sidebar-menu -->\n\n      </div><div id=\"control-sidebar-theme-demo-options-tab\" class=\"tab-pane active\"><div><h4 class=\"control-sidebar-heading\">Layout Options</h4><div class=\"form-group\"><label class=\"control-sidebar-subheading\"><input type=\"checkbox\" data-layout=\"fixed\" class=\"pull-right\"> Fixed layout</label><p>Activate the fixed layout. You can't use fixed and boxed layouts together</p></div><div class=\"form-group\"><label class=\"control-sidebar-subheading\"><input type=\"checkbox\" data-layout=\"layout-boxed\" class=\"pull-right\"> Boxed Layout</label><p>Activate the boxed layout</p></div><div class=\"form-group\"><label class=\"control-sidebar-subheading\"><input type=\"checkbox\" data-layout=\"sidebar-collapse\" class=\"pull-right\"> Toggle Sidebar</label><p>Toggle the left sidebar's state (open or collapse)</p></div><div class=\"form-group\"><label class=\"control-sidebar-subheading\"><input type=\"checkbox\" data-enable=\"expandOnHover\" class=\"pull-right\"> Sidebar Expand on Hover</label><p>Let the sidebar mini expand on hover</p></div><div class=\"form-group\"><label class=\"control-sidebar-subheading\"><input type=\"checkbox\" data-controlsidebar=\"control-sidebar-open\" class=\"pull-right\"> Toggle Right Sidebar Slide</label><p>Toggle between slide over content and push content effects</p></div><div class=\"form-group\"><label class=\"control-sidebar-subheading\"><input type=\"checkbox\" data-sidebarskin=\"toggle\" class=\"pull-right\"> Toggle Right Sidebar Skin</label><p>Toggle between dark and light skins for the right sidebar</p></div><h4 class=\"control-sidebar-heading\">Skins</h4><ul class=\"list-unstyled clearfix\"><li style=\"float:left; width: 33.33333%; padding: 5px;\"><a href=\"javascript:void(0);\" data-skin=\"skin-blue\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\"><div><span style=\"display:block; width: 20%; float: left; height: 7px; background: #367fa9;\"></span><span class=\"bg-light-blue\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div><div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #222d32;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div></a><p class=\"text-center no-margin\">Blue</p></li><li style=\"float:left; width: 33.33333%; padding: 5px;\"><a href=\"javascript:void(0);\" data-skin=\"skin-black\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\"><div style=\"box-shadow: 0 0 2px rgba(0,0,0,0.1)\" class=\"clearfix\"><span style=\"display:block; width: 20%; float: left; height: 7px; background: #fefefe;\"></span><span style=\"display:block; width: 80%; float: left; height: 7px; background: #fefefe;\"></span></div><div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #222;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div></a><p class=\"text-center no-margin\">Black</p></li><li style=\"float:left; width: 33.33333%; padding: 5px;\"><a href=\"javascript:void(0);\" data-skin=\"skin-purple\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\"><div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-purple-active\"></span><span class=\"bg-purple\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div><div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #222d32;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div></a><p class=\"text-center no-margin\">Purple</p></li><li style=\"float:left; width: 33.33333%; padding: 5px;\"><a href=\"javascript:void(0);\" data-skin=\"skin-green\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\"><div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-green-active\"></span><span class=\"bg-green\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div><div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #222d32;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div></a><p class=\"text-center no-margin\">Green</p></li><li style=\"float:left; width: 33.33333%; padding: 5px;\"><a href=\"javascript:void(0);\" data-skin=\"skin-red\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\"><div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-red-active\"></span><span class=\"bg-red\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div><div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #222d32;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div></a><p class=\"text-center no-margin\">Red</p></li><li style=\"float:left; width: 33.33333%; padding: 5px;\"><a href=\"javascript:void(0);\" data-skin=\"skin-yellow\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\"><div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-yellow-active\"></span><span class=\"bg-yellow\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div><div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #222d32;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div></a><p class=\"text-center no-margin\">Yellow</p></li><li style=\"float:left; width: 33.33333%; padding: 5px;\"><a href=\"javascript:void(0);\" data-skin=\"skin-blue-light\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\"><div><span style=\"display:block; width: 20%; float: left; height: 7px; background: #367fa9;\"></span><span class=\"bg-light-blue\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div><div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div></a><p class=\"text-center no-margin\" style=\"font-size: 12px\">Blue Light</p></li><li style=\"float:left; width: 33.33333%; padding: 5px;\"><a href=\"javascript:void(0);\" data-skin=\"skin-black-light\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\"><div style=\"box-shadow: 0 0 2px rgba(0,0,0,0.1)\" class=\"clearfix\"><span style=\"display:block; width: 20%; float: left; height: 7px; background: #fefefe;\"></span><span style=\"display:block; width: 80%; float: left; height: 7px; background: #fefefe;\"></span></div><div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div></a><p class=\"text-center no-margin\" style=\"font-size: 12px\">Black Light</p></li><li style=\"float:left; width: 33.33333%; padding: 5px;\"><a href=\"javascript:void(0);\" data-skin=\"skin-purple-light\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\"><div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-purple-active\"></span><span class=\"bg-purple\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div><div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div></a><p class=\"text-center no-margin\" style=\"font-size: 12px\">Purple Light</p></li><li style=\"float:left; width: 33.33333%; padding: 5px;\"><a href=\"javascript:void(0);\" data-skin=\"skin-green-light\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\"><div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-green-active\"></span><span class=\"bg-green\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div><div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div></a><p class=\"text-center no-margin\" style=\"font-size: 12px\">Green Light</p></li><li style=\"float:left; width: 33.33333%; padding: 5px;\"><a href=\"javascript:void(0);\" data-skin=\"skin-red-light\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\"><div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-red-active\"></span><span class=\"bg-red\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div><div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div></a><p class=\"text-center no-margin\" style=\"font-size: 12px\">Red Light</p></li><li style=\"float:left; width: 33.33333%; padding: 5px;\"><a href=\"javascript:void(0);\" data-skin=\"skin-yellow-light\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\"><div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-yellow-active\"></span><span class=\"bg-yellow\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div><div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div></a><p class=\"text-center no-margin\" style=\"font-size: 12px;\">Yellow Light</p></li></ul></div></div>\n      <!-- /.tab-pane -->\n      <!-- Stats tab content -->\n      <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\n      <!-- /.tab-pane -->\n      <!-- Settings tab content -->\n      <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n        <form method=\"post\">\n          <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Report panel usage\n              <input type=\"checkbox\" class=\"pull-right\" checked=\"\">\n            </label>\n\n            <p>\n              Some information about this general settings option\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Allow mail redirect\n              <input type=\"checkbox\" class=\"pull-right\" checked=\"\">\n            </label>\n\n            <p>\n              Other sets of options are available\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Expose author name in posts\n              <input type=\"checkbox\" class=\"pull-right\" checked=\"\">\n            </label>\n\n            <p>\n              Allow the user to show his name in blog posts\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Show me as online\n              <input type=\"checkbox\" class=\"pull-right\" checked=\"\">\n            </label>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Turn off notifications\n              <input type=\"checkbox\" class=\"pull-right\">\n            </label>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Delete chat history\n              <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\n            </label>\n          </div>\n          <!-- /.form-group -->\n        </form>\n      </div>\n      <!-- /.tab-pane -->\n    </div>\n  </aside>\n"

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3\">\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"input-group\">\n      <input type=\"text\" #search class=\"form-control\">\n          <div class=\"input-group-btn\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"getDipendente(search.value);\">Cercare</button>\n          </div>\n                    <!-- /btn-group -->\n    </div>\n    <div class=\"input-group\">\n      <label>{{model.nome}} </label>\n                    <!-- /btn-group -->\n<alert type=\"success\">hello</alert>\n    </div>\n\n    <div class=\"form-group\">\n          <label>Targa</label>\n          <select class=\"form-control\">\n            <option>option 1</option>\n            <option>option 2</option>\n            <option>option 3</option>\n            <option>option 4</option>\n            <option>option 5</option>\n          </select>\n    </div>\n  </div>\n</div>\n</div>\n<div class=\"col-md-9\">\n\n<div class=\"box box-primary\">\n  <div class=\"box-body no-padding\">\n    <!-- THE CALENDAR -->\n   <angular2-fullcalendar [options]=\"calendarOptions\"></angular2-fullcalendar>\n  </div>\n  <!-- /.box-body -->\n</div>\n</div>\n\n\n<!-- modal static -->\n\n\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"staticModal.show()\">Static modal</button>\n\n\n\n\n<div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Static modal</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"box-body no-padding\">\n                <table class=\"table table-condensed\">\n                  <tbody><tr>\n                    <th style=\"width: 10px\">#</th>\n                    <th>Task</th>\n                    <th>Progress</th>\n                    <th style=\"width: 40px\">Label</th>\n                  </tr>\n                  <tr>\n                    <td>1.</td>\n                    <td>Update software</td>\n                    <td>\n                      <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar progress-bar-danger\" style=\"width: 55%\"></div>\n                      </div>\n                    </td>\n                    <td><span class=\"badge bg-red\">55%</span></td>\n                  </tr>\n                  <tr>\n                    <td>2.</td>\n                    <td>Clean database</td>\n                    <td>\n                      <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar progress-bar-yellow\" style=\"width: 70%\"></div>\n                      </div>\n                    </td>\n                    <td><span class=\"badge bg-yellow\">70%</span></td>\n                  </tr>\n                  <tr>\n                    <td>3.</td>\n                    <td>Cron job running</td>\n                    <td>\n                      <div class=\"progress progress-xs progress-striped active\">\n                        <div class=\"progress-bar progress-bar-primary\" style=\"width: 30%\"></div>\n                      </div>\n                    </td>\n                    <td><span class=\"badge bg-light-blue\">30%</span></td>\n                  </tr>\n                  <tr>\n                    <td>4.</td>\n                    <td>Fix and squish bugs</td>\n                    <td>\n                      <div class=\"progress progress-xs progress-striped active\">\n                        <div class=\"progress-bar progress-bar-success\" style=\"width: 90%\"></div>\n                      </div>\n                    </td>\n                    <td><span class=\"badge bg-green\">90%</span></td>\n                  </tr>\n                </tbody></table>\n              </div>\n\n\n\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" bsModal #resultModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Static modal</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <app-preselezione></app-preselezione>\n\n\n\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

module.exports = "<p>\n  chilometraggio works!\n</p>\n"

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

module.exports = "<p>\n  gasolio works!\n</p>\n"

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

module.exports = "<p>\n  presenza works!\n</p>\n"

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(194);


/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dipendente; });
var Dipendente = (function () {
    function Dipendente() {
        this.inforza = false;
        this.noninforza = false;
        this.azienda_id = 1;
    }
    return Dipendente;
}());

//# sourceMappingURL=dipendente.js.map

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 52;


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebApiObservableService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Observable class extensions


// Observable operators







var WebApiObservableService = (function () {
    function WebApiObservableService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    WebApiObservableService.prototype.getService = function (url) {
        return this.http
            .get(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiObservableService.prototype.getServiceWithDynamicQueryTerm = function (url, key, val) {
        return this.http
            .get(url + "/?" + key + "=" + val, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiObservableService.prototype.getServiceWithFixedQueryString = function (url, param) {
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, search: 'query=' + param });
        return this.http
            .get(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiObservableService.prototype.getServiceWithComplexObjectAsQueryString = function (url, param) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                var val = param[key];
                params.set(key, val);
            }
        }
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, search: params });
        return this.http
            .get(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiObservableService.prototype.createService = function (url, param) {
        var body = JSON.stringify(param);
        return this.http
            .post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiObservableService.prototype.updateService = function (url, param) {
        var body = JSON.stringify(param);
        return this.http
            .put(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiObservableService.prototype.patchService = function (url, param) {
        var body = JSON.stringify(param);
        return this.http
            .patch(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiObservableService.prototype.deleteService = function (url, param) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                var val = param[key];
                params.set(key, val);
            }
        }
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, search: params });
        return this.http
            .delete(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiObservableService.prototype.deleteServiceWithId = function (url, key, val) {
        return this.http
            .delete(url + "/?" + key + "=" + val, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiObservableService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    WebApiObservableService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        if (error._body) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json()['message']);
        }
        //console.error(error._body);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return WebApiObservableService;
}());
WebApiObservableService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], WebApiObservableService);

var _a;
//# sourceMappingURL=web-api-observable.service.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreselezioneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreselezioneComponent = (function () {
    function PreselezioneComponent() {
    }
    PreselezioneComponent.prototype.ngOnInit = function () {
    };
    return PreselezioneComponent;
}());
PreselezioneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-preselezione',
        template: __webpack_require__(556),
        styles: [__webpack_require__(555)]
    }),
    __metadata("design:paramtypes", [])
], PreselezioneComponent);

//# sourceMappingURL=preselezione.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"preselezione.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3 col-sm-6 col-xs-12\">\n          <div class=\"info-box\">\n            <span class=\"info-box-icon bg-aqua\"><i class=\"fa fa-gear\"></i></span>\n            <div class=\"info-box-content\">\n              <span class=\"info-box-text\">Presenza</span>\n              <span class=\"info-box-number\">10<small>%</small></span>\n            </div>\n            <!-- /.info-box-content -->\n          </div>\n          <!-- /.info-box -->\n  </div>\n  <div class=\"col-md-3 col-sm-6 col-xs-12\">\n            <div class=\"info-box\">\n              <span class=\"info-box-icon bg-yellow\"><i class=\"fa fa-group\"></i></span>\n\n              <div class=\"info-box-content\">\n                <span class=\"info-box-text\">Dipendenti</span>\n                <span class=\"info-box-number\">47</span>\n              </div>\n              <!-- /.info-box-content -->\n            </div>\n            <!-- /.info-box -->\n  </div>\n</div>\n"

/***/ })

},[335]);
//# sourceMappingURL=main.bundle.js.map