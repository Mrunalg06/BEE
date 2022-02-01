webpackJsonp([0],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesPageModule", function() { return IssuesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_cache__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__issues__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_issue_issue__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var IssuesPageModule = (function () {
    function IssuesPageModule() {
    }
    IssuesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__issues__["a" /* IssuesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__issues__["a" /* IssuesPage */]),
                __WEBPACK_IMPORTED_MODULE_2_ionic_cache__["a" /* CacheModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__providers_issue_issue__["a" /* IssueProvider */]
            ]
        })
    ], IssuesPageModule);
    return IssuesPageModule;
}());

//# sourceMappingURL=issues.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MESSAGES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_share__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(49);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var MESSAGES = {
    0: 'Cache initialization error: ',
    1: 'Cache is not enabled.',
    2: 'Cache entry already expired: ',
    3: 'No such key: ',
    4: 'No entries were deleted, because browser is offline.'
};
var CacheService = (function () {
    function CacheService(_storage) {
        var _this = this;
        this._storage = _storage;
        this.ttl = 60 * 60; // one hour
        this.cacheEnabled = true;
        this.invalidateOffline = false;
        this.networkStatus = true;
        try {
            this.watchNetworkInit();
            _storage.ready()
                .then(function () {
                _this.cacheEnabled = true;
            });
        }
        catch (e) {
            this.cacheEnabled = false;
            console.error(MESSAGES[0], e);
        }
    }
    CacheService.prototype.ready = function () {
        return this._storage.ready().then(function () { return Promise.resolve(); });
    };
    /**
     * @description Disable or enable cache
     */
    CacheService.prototype.enableCache = function (enable) {
        if (enable === void 0) { enable = true; }
        this.cacheEnabled = enable;
    };
    /**
     * @description Delete DB table and create new one
     * @return {Promise<any>}
     */
    CacheService.prototype.resetDatabase = function () {
        var _this = this;
        return this.ready()
            .then(function () { return _this._storage.clear(); });
    };
    /**
     * @description Set default TTL
     * @param {number} ttl - TTL in seconds
     */
    CacheService.prototype.setDefaultTTL = function (ttl) {
        return this.ttl = ttl;
    };
    /**
     * @description Set if expired cache should be invalidated if device is offline
     * @param {boolean} offlineInvalidate
     */
    CacheService.prototype.setOfflineInvalidate = function (offlineInvalidate) {
        this.invalidateOffline = !offlineInvalidate;
    };
    /**
     * @description Start watching if devices is online or offline
     */
    CacheService.prototype.watchNetworkInit = function () {
        var _this = this;
        this.networkStatus = navigator.onLine;
        var connect = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, 'online').map(function () { return true; }), disconnect = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, 'offline').map(function () { return false; });
        this.networkStatusChanges = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].merge(connect, disconnect).share();
        this.networkStatusChanges.subscribe(function (status) {
            _this.networkStatus = status;
        });
    };
    /**
     * @description Stream of network status changes
     * * @return {Observable<boolean>} network status stream
     */
    CacheService.prototype.getNetworkStatusChanges = function () {
        return this.networkStatusChanges;
    };
    /**
     * @description Check if devices is online
     * @return {boolean} network status
     */
    CacheService.prototype.isOnline = function () {
        return this.networkStatus;
    };
    /**
     * @description Save item to cache
     * @param {string} key - Unique key
     * @param {any} data - Data to store
     * @param {string} [groupKey] - group key
     * @param {number} [ttl] - TTL in seconds
     * @return {Promise<any>} - saved data
     */
    CacheService.prototype.saveItem = function (key, data, groupKey, ttl) {
        if (groupKey === void 0) { groupKey = 'none'; }
        if (ttl === void 0) { ttl = this.ttl; }
        if (!this.cacheEnabled) {
            return Promise.reject(MESSAGES[1]);
        }
        var expires = new Date().getTime() + (ttl * 1000), type = CacheService.isRequest(data) ? 'request' : typeof data, value = JSON.stringify(data);
        return this._storage.set(key, {
            value: value,
            expires: expires,
            type: type,
            groupKey: groupKey
        });
    };
    /**
     * @description Delete item from cache
     * @param {string} key - Unique key
     * @return {Promise<any>} - query execution promise
     */
    CacheService.prototype.removeItem = function (key) {
        if (!this.cacheEnabled) {
            return Promise.reject(MESSAGES[1]);
        }
        return this._storage.remove(key);
    };
    /**
     * @description Get item from cache without expire check etc.
     * @param {string} key - Unique key
     * @return {Promise<any>} - data from cache
     */
    CacheService.prototype.getRawItem = function (key) {
        if (!this.cacheEnabled) {
            return Promise.reject(MESSAGES[1]);
        }
        return this._storage.get(key)
            .then(function (data) {
            if (!data)
                return Promise.reject('');
            return data;
        })
            .catch(function () { return Promise.reject(MESSAGES[3] + key); });
    };
    /**
     * @description Get item from cache with expire check and correct type assign
     * @param {string} key - Unique key
     * @return {Promise<any>} - data from cache
     */
    CacheService.prototype.getItem = function (key) {
        var _this = this;
        if (!this.cacheEnabled) {
            return Promise.reject(MESSAGES[1]);
        }
        return this.getRawItem(key).then(function (data) {
            if (data.expires < new Date().getTime()) {
                if (_this.invalidateOffline) {
                    return Promise.reject(MESSAGES[2] + key);
                }
                else if (_this.isOnline()) {
                    return Promise.reject(MESSAGES[2] + key);
                }
            }
            return CacheService.decodeRawData(data);
        });
    };
    /**
     * @description Decode raw data from DB
     * @param {any} data - Data
     * @return {any} - decoded data
     */
    CacheService.decodeRawData = function (data) {
        var dataJson = JSON.parse(data.value);
        if (CacheService.isRequest(dataJson)) {
            var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* ResponseOptions */]({
                body: dataJson._body,
                status: dataJson.status,
                headers: dataJson.headers,
                statusText: dataJson.statusText,
                type: dataJson.type,
                url: dataJson.url
            });
            return new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Response */](requestOptions);
        }
        else {
            return dataJson;
        }
    };
    /**
     * @description Load item from cache if it's in cache or load from origin observable
     * @param {string} key - Unique key
     * @param {any} observable - Observable with data
     * @param {string} [groupKey] - group key
     * @param {number} [ttl] - TTL in seconds
     * @return {Observable<any>} - data from cache or origin observable
     */
    CacheService.prototype.loadFromObservable = function (key, observable, groupKey, ttl) {
        var _this = this;
        if (!this.cacheEnabled)
            return observable;
        observable = observable.share();
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(this.getItem(key))
            .catch(function (e) {
            observable.subscribe(function (res) { return _this.saveItem(key, res, groupKey, ttl); }, function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error); });
            return observable;
        });
    };
    /**
     * @description Load item from cache if it's in cache or load from origin observable
     * @param {string} key - Unique key
     * @param {any} observable - Observable with data
     * @param {string} [groupKey] - group key
     * @param {number} [ttl] - TTL in seconds
     * @param {string} [delayType='expired']
     * @return {Observable<any>} - data from cache or origin observable
     */
    CacheService.prototype.loadFromDelayedObservable = function (key, observable, groupKey, ttl, delayType) {
        var _this = this;
        if (ttl === void 0) { ttl = this.ttl; }
        if (delayType === void 0) { delayType = 'expired'; }
        if (!this.cacheEnabled)
            return observable;
        var observableSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        observable = observable.share();
        var subscribeOrigin = function () {
            observable.subscribe(function (res) {
                _this.saveItem(key, res, groupKey, ttl);
                observableSubject.next(res);
                observableSubject.complete();
            }, function (err) {
                observableSubject.error(err);
            }, function () {
                observableSubject.complete();
            });
        };
        this.getItem(key)
            .then(function (data) {
            observableSubject.next(data);
            if (delayType === 'all') {
                subscribeOrigin();
            }
        })
            .catch(function (e) {
            _this.getRawItem(key)
                .then(function (res) {
                observableSubject.next(CacheService.decodeRawData(res));
                subscribeOrigin();
            })
                .catch(function () { return subscribeOrigin(); });
        });
        return observableSubject.asObservable();
    };
    /**
     * Perform complete cache clear
     * @return {Promise<any>}
     */
    CacheService.prototype.clearAll = function () {
        if (!this.cacheEnabled) {
            return Promise.reject(MESSAGES[2]);
        }
        return this.resetDatabase();
    };
    /**
     * @description Remove all expired items from cache
     * @param {boolean} ignoreOnlineStatus -
     * @return {Promise<any>} - query promise
     */
    CacheService.prototype.clearExpired = function (ignoreOnlineStatus) {
        var _this = this;
        if (ignoreOnlineStatus === void 0) { ignoreOnlineStatus = false; }
        if (!this.cacheEnabled) {
            return Promise.reject(MESSAGES[2]);
        }
        if (!this.isOnline() && !ignoreOnlineStatus) {
            return Promise.reject(MESSAGES[4]);
        }
        var datetime = new Date().getTime();
        var promises = [];
        this._storage.forEach(function (val, key) {
            if (val && val.expires < datetime)
                promises.push(_this.removeItem(key));
        });
        return Promise.all(promises);
    };
    /**
     * @description Remove all item with specified group
     * @param {string} groupKey - group key
     * @return {Promise<any>} - query promise
     */
    CacheService.prototype.clearGroup = function (groupKey) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var promises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.cacheEnabled) {
                            return [2 /*return*/, Promise.reject(MESSAGES[2])];
                        }
                        promises = [];
                        return [4 /*yield*/, this._storage.forEach(function (val, key) {
                                if (val && val.groupKey === groupKey)
                                    promises.push(_this.removeItem(key));
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, Promise.all(promises)];
                }
            });
        });
    };
    /**
     * @description Check if it's an request
     * @param {any} data - Variable to test
     * @return {boolean} - data from cache
     */
    CacheService.isRequest = function (data) {
        return (data && (data instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Request */] ||
            (typeof data === 'object' && data.hasOwnProperty('_body') && data.hasOwnProperty('status') &&
                data.hasOwnProperty('statusText') &&
                data.hasOwnProperty('type') &&
                data.hasOwnProperty('headers') &&
                data.hasOwnProperty('url'))));
    };
    return CacheService;
}());

CacheService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/** @nocollapse */
CacheService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["b" /* Storage */], },
]; };
//# sourceMappingURL=cache.service.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cache_service__ = __webpack_require__(285);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__cache_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache_module__ = __webpack_require__(294);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__cache_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var merge_1 = __webpack_require__(199);
Observable_1.Observable.merge = merge_1.merge;
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var fromPromise_1 = __webpack_require__(202);
Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var share_1 = __webpack_require__(201);
Observable_1.Observable.prototype.share = share_1.share;
//# sourceMappingURL=share.js.map

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var catch_1 = __webpack_require__(291);
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var catchError_1 = __webpack_require__(292);
/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 *
 * <img src="./img/catch.png" width="100%">
 *
 * @example <caption>Continues with a different Observable when there's an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n == 4) {
 * 	     throw 'four!';
 *     }
 *	   return n;
 *   })
 *   .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, I, II, III, IV, V
 *
 * @example <caption>Retries the caught source Observable again in case of error, similar to retry() operator</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n === 4) {
 * 	     throw 'four!';
 *     }
 * 	   return n;
 *   })
 *   .catch((err, caught) => caught)
 *   .take(30)
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, 1, 2, 3, ...
 *
 * @example <caption>Throws a new error when the source Observable throws an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 *     if (n == 4) {
 *       throw 'four!';
 *     }
 *     return n;
 *   })
 *   .catch(err => {
 *     throw 'error in source. Details: ' + err;
 *   })
 *   .subscribe(
 *     x => console.log(x),
 *     err => console.log(err)
 *   );
 *   // 1, 2, 3, error in source. Details: four!
 *
 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
 *  is returned by the `selector` will be used to continue the observable chain.
 * @return {Observable} An observable that originates from either the source or the observable returned by the
 *  catch `selector` function.
 * @method catch
 * @name catch
 * @owner Observable
 */
function _catch(selector) {
    return catchError_1.catchError(selector)(this);
}
exports._catch = _catch;
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(51);
var subscribeToResult_1 = __webpack_require__(50);
/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 *
 * <img src="./img/catch.png" width="100%">
 *
 * @example <caption>Continues with a different Observable when there's an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n == 4) {
 * 	     throw 'four!';
 *     }
 *	   return n;
 *   })
 *   .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, I, II, III, IV, V
 *
 * @example <caption>Retries the caught source Observable again in case of error, similar to retry() operator</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n === 4) {
 * 	     throw 'four!';
 *     }
 * 	   return n;
 *   })
 *   .catch((err, caught) => caught)
 *   .take(30)
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, 1, 2, 3, ...
 *
 * @example <caption>Throws a new error when the source Observable throws an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 *     if (n == 4) {
 *       throw 'four!';
 *     }
 *     return n;
 *   })
 *   .catch(err => {
 *     throw 'error in source. Details: ' + err;
 *   })
 *   .subscribe(
 *     x => console.log(x),
 *     err => console.log(err)
 *   );
 *   // 1, 2, 3, error in source. Details: four!
 *
 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
 *  is returned by the `selector` will be used to continue the observable chain.
 * @return {Observable} An observable that originates from either the source or the observable returned by the
 *  catch `selector` function.
 * @name catchError
 */
function catchError(selector) {
    return function catchErrorOperatorFunction(source) {
        var operator = new CatchOperator(selector);
        var caught = source.lift(operator);
        return (operator.caught = caught);
    };
}
exports.catchError = catchError;
var CatchOperator = (function () {
    function CatchOperator(selector) {
        this.selector = selector;
    }
    CatchOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    };
    return CatchOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CatchSubscriber = (function (_super) {
    __extends(CatchSubscriber, _super);
    function CatchSubscriber(destination, selector, caught) {
        _super.call(this, destination);
        this.selector = selector;
        this.caught = caught;
    }
    // NOTE: overriding `error` instead of `_error` because we don't want
    // to have this flag this subscriber as `isStopped`. We can mimic the
    // behavior of the RetrySubscriber (from the `retry` operator), where
    // we unsubscribe from our source chain, reset our Subscriber flags,
    // then subscribe to the selector result.
    CatchSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var result = void 0;
            try {
                result = this.selector(err, this.caught);
            }
            catch (err2) {
                _super.prototype.error.call(this, err2);
                return;
            }
            this._unsubscribeAndRecycle();
            this.add(subscribeToResult_1.subscribeToResult(this, result));
        }
    };
    return CatchSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=catchError.js.map

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var throw_1 = __webpack_require__(204);
Observable_1.Observable.throw = throw_1._throw;
//# sourceMappingURL=throw.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache_service__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);



var CacheModule = (function () {
    function CacheModule() {
    }
    CacheModule.forRoot = function () {
        return {
            ngModule: CacheModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */]
            ]
        };
    };
    return CacheModule;
}());

CacheModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                        name: '__ionicCache',
                        driverOrder: ['indexeddb', 'sqlite', 'websql']
                    })
                ]
            },] },
];
/** @nocollapse */
CacheModule.ctorParameters = function () { return []; };
//# sourceMappingURL=cache.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__html_pipes_replace_pipe__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search_pipe__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__html_pipes_num2words_pipe__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__html_pipes_replace_pipe__["a" /* ReplacePipe */],
                __WEBPACK_IMPORTED_MODULE_3__html_pipes_num2words_pipe__["a" /* Num2WordsPipe */],
                __WEBPACK_IMPORTED_MODULE_2__search_search_pipe__["a" /* SearchPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__html_pipes_replace_pipe__["a" /* ReplacePipe */],
                __WEBPACK_IMPORTED_MODULE_3__html_pipes_num2words_pipe__["a" /* Num2WordsPipe */],
                __WEBPACK_IMPORTED_MODULE_2__search_search_pipe__["a" /* SearchPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplacePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReplacePipe = (function () {
    function ReplacePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ReplacePipe.prototype.transform = function (value, arg, replaceBy) {
        return value.replace(arg, replaceBy);
    };
    ReplacePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'replace' })
    ], ReplacePipe);
    return ReplacePipe;
}());

//# sourceMappingURL=replace.pipe.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchPipe.prototype.transform = function (list, searchTerm) {
        if (searchTerm) {
            searchTerm = searchTerm.toUpperCase();
            return list.filter(function (item) {
                return item.name.toUpperCase().indexOf(searchTerm) !== -1;
            });
        }
        else {
            return list;
        }
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Num2WordsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Num2WordsPipe = (function () {
    function Num2WordsPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    Num2WordsPipe.prototype.transform = function (value) {
        var val = this.numberToEnglish(value, ',');
        return val;
    };
    /**
     * Convert an integer to its words representation
     *
     * @param n : actual numerical value to be converted to words
     * @param custom_join_character : character to provide conjunction on converted word values
     * @author McShaman (http://stackoverflow.com/users/788657/mcshaman)
     * @source http://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript
     */
    Num2WordsPipe.prototype.numberToEnglish = function (n, custom_join_character) {
        n = parseInt(n);
        var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;
        var and = custom_join_character || 'and';
        var currency_prefix = "₹ ";
        /* Is number zero? */
        if (parseInt(string) === 0) {
            return '-';
        }
        /* Array of units as words */
        // units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        units = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
        /* Array of tens as words */
        // tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        tens = ['', '', '20', '30', '40', '50', '60', '70', '80', '90'];
        /* Array of scales as words */
        // scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];
        scales = ['', 'thousand', 'lakhs', 'crore'];
        /* Split user arguemnt into 3 digit chunks from right to left */
        start = string.length;
        chunks = [];
        while (start > 0) {
            end = start;
            chunks.push(string.slice((start = Math.max(0, start - 2)), end));
        }
        /* Check if function has enough scale words to be able to stringify the user argument */
        chunksLen = chunks.length;
        if (chunksLen > scales.length) {
            return '-';
        }
        /* Stringify each integer in each chunk */
        words = [];
        for (i = 0; i < chunksLen; i++) {
            chunk = parseInt(chunks[i]);
            if (chunk) {
                /* Split chunk into array of individual integers */
                ints = chunks[i].split('').reverse().map(parseFloat);
                /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                if (ints[1] === 1) {
                    ints[0] += 10;
                }
                /* Add scale word if chunk is not zero and array item exists */
                if ((word = scales[i])) {
                    words.push(word);
                }
                /* Add unit word if array item exists */
                if ((word = units[ints[0]])) {
                    words.push(word);
                }
                /* Add tens word if array item exists */
                if ((word = tens[ints[1]])) {
                    words.push(word);
                }
                /* Add 'and' string after units or tens integer if: */
                if (ints[0] || ints[1]) {
                    /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                    if (ints[2] || !i && chunksLen) {
                        words.push(and);
                    }
                }
                /* Add hundreds word if array item exists */
                if ((word = units[ints[2]])) {
                    words.push(word + ' hundred');
                }
            }
        }
        return currency_prefix + words.reverse().join(' ');
    };
    Num2WordsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'num2words' })
    ], Num2WordsPipe);
    return Num2WordsPipe;
}());

//# sourceMappingURL=num2words.pipe.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_cache__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_base_settings_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_settings_base_settings__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IssueProvider = (function () {
    /**
     * Initialize
     */
    function IssueProvider(http, base, ionStorage, events, cache) {
        this.http = http;
        this.base = base;
        this.ionStorage = ionStorage;
        this.events = events;
        this.cache = cache;
        // Generate the API URL
        this.api_url = base.url + '/issues';
        // Cache Settings
        this.initCacheSettings();
    }
    /**
     * Cache Settings
     */
    IssueProvider.prototype.initCacheSettings = function () {
        this.cacheKey = 'issues-0';
        this.cacheGroupKey = 'issues';
    };
    /**
     * Clear Cached Data
     */
    IssueProvider.prototype.clearCachedIssues = function () {
        this.cache.clearGroup(this.cacheGroupKey);
    };
    /**
     * Get Issues' Listing Data
     */
    IssueProvider.prototype.getIssues = function () {
        return [
            {
                "name": "today",
                "issues": [
                    {
                        "id": "001",
                        "name": "Canteen food health",
                        "description": "Canteen food health continues to deterioriate...",
                        "posted_by": "K. Radhe",
                        "status": "running"
                    },
                    {
                        "id": "002",
                        "name": "Deteriorating gymnasium facilities",
                        "description": "Gymnasium lacks the basic facilities and ...",
                        "posted_by": "K. Radhe",
                        "status": "running"
                    },
                ]
            },
            {
                "name": "2018-10-01",
                "issues": [
                    {
                        "id": "005",
                        "name": "Canteen food health",
                        "description": "Canteen food health continues to deterioriate...",
                        "posted_by": "K. Radhe",
                        "status": "running"
                    },
                    {
                        "id": "006",
                        "name": "Canteen food health",
                        "description": "Canteen food health continues to deterioriate...",
                        "posted_by": "K. Radhe",
                        "status": "running"
                    },
                ]
            },
        ];
    };
    /**
     * Get Issue Listing
     */
    IssueProvider.prototype.getListing = function (data, refresh) {
        var url = this.api_url + '/list';
        var request = this.http.post(url, data).map(function (res) { return res.json(); });
        this.cacheKey = 'issues-' + data.offset + data.query;
        var entityCacheObservable;
        if (refresh) {
            this.cache.clearGroup(this.cacheGroupKey);
            entityCacheObservable = this.cache.loadFromDelayedObservable(this.cacheKey, request, this.cacheGroupKey);
        }
        else {
            entityCacheObservable = this.cache.loadFromObservable(this.cacheKey, request, this.cacheGroupKey);
        }
        return entityCacheObservable;
    };
    /**
     * Get Issue Details
     */
    IssueProvider.prototype.getDetails = function (data, refresh) {
        var url = this.api_url + '/detail';
        var request = this.http.post(url, data).map(function (res) { return res.json(); });
        this.cacheKey = 'issue-' + data.issue_id_c;
        var entityCacheObservable;
        if (refresh) {
            this.cache.clearGroup(this.cacheGroupKey);
            entityCacheObservable = this.cache.loadFromDelayedObservable(this.cacheKey, request, this.cacheGroupKey);
        }
        else {
            entityCacheObservable = this.cache.loadFromObservable(this.cacheKey, request, this.cacheGroupKey);
        }
        return entityCacheObservable;
    };
    IssueProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__base_settings_base_settings__["a" /* BaseSettingsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_base_settings_storage__["a" /* IonicStorageProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_cache__["b" /* CacheService */]])
    ], IssueProvider);
    return IssueProvider;
}());

//# sourceMappingURL=issue.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_settings_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_issue_issue__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IssuesPage = (function () {
    /**
     * Constructor
     */
    function IssuesPage(navCtrl, navParams, menuCtrl, modalCtrl, loadingCtrl, toastCtrl, ionStorage, actionSheetCtrl, alertCtrl, issueProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.ionStorage = ionStorage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.issueProv = issueProv;
        this.sessionToken = '';
        this.isSearched = false;
        this.selected_lead = 0;
        var env = this;
        // Initialize Targeted Lists Arr
        env.issuesList = [];
        // Set Defaults
        env.default_image = 'assets/issues/issues.png';
        env.query = "";
        // Check User Session
        // env.checkUserSession();
        // Temporary Data Collector
        env.getIssues();
    }
    /**
     * When control enters Ionic View
     */
    IssuesPage.prototype.ionViewDidEnter = function () {
        var env = this;
        // Enabling the menu
        env.menuCtrl.enable(true, 'mainMenu');
    };
    /**
     * Check User Session
     */
    IssuesPage.prototype.checkUserSession = function () {
        var _this = this;
        var env = this;
        this.ionStorage.getItems('sessionuser').then(function (data) {
            if (data && data.token) {
                env.sessionUser = data;
                env.sessionToken = data.token;
                // Clear and Initialize Search Filter and Get Electios
                env.clearSearchFilter();
                _this.searchByModalFilters(_this.searchFilterBasic.name, _this.searchFilterBasic.phone_mobile, _this.searchFilterBasic.cities, _this.searchFilterBasic.expected_sales, _this.searchFilterBasic.sources, _this.searchFilterBasic.statuses);
            }
            else {
                _this.logout();
            }
        });
    };
    /**
     * Initialize Search Filter
     */
    IssuesPage.prototype.clearSearchFilter = function () {
        this.searchFilterBasic = {};
        this.searchFilterBasic.name = '';
        this.searchFilterBasic.phone_mobile = '';
        this.searchFilterBasic.cities = [];
        this.searchFilterBasic.sources = [];
        this.searchFilterBasic.expected_sales = '';
        this.searchFilterBasic.statuses = [];
        this.searchName = '';
        this.isSearched = false;
    };
    /**
     * Manage Infinite Scroll
     */
    IssuesPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.issuesList.length >= 20) {
            // If next offset is not false, load the next list
            if (this.next_offset) {
                this.filterAndSearchIssues(this.next_offset, false, false, infiniteScroll);
            }
            if (this.next_offset == '0') {
                infiniteScroll.complete();
            }
        }
        else {
            infiniteScroll.complete();
        }
    };
    /**
     * Force Reload this page data
     */
    IssuesPage.prototype.forceReload = function (refresher) {
        var env = this;
        env.filterAndSearchIssues('0', true, true);
        refresher.complete();
    };
    /**
     * Search Filter for Name
     */
    IssuesPage.prototype.searchElectiosByName = function (ev, type) {
        var searchterm = ev.target.value;
        this.searchFilterBasic.name = searchterm;
        this.filterAndSearchIssues('0', true, true);
    };
    /**
     * Search By Modal Filters
     */
    IssuesPage.prototype.searchByModalFilters = function (name, phone_mobile, cities, expected_sales, sources, statuses) {
        // Clear Search Filter
        this.clearSearchFilter();
        // Name filter
        if (name != '') {
            this.searchFilterBasic.name = name;
            this.searchName = name;
            this.isSearched = true;
        }
        // Phone Number filter
        if (phone_mobile != '') {
            this.searchFilterBasic.phone_mobile = phone_mobile;
            this.isSearched = true;
        }
        // Cities filter
        if (cities.length > 0) {
            this.searchFilterBasic.cities = cities;
            this.isSearched = true;
        }
        // Expected Sales filter
        if (expected_sales != '') {
            this.searchFilterBasic.expected_sales = expected_sales;
            this.isSearched = true;
        }
        // Sources filter
        if (sources.length > 0) {
            this.searchFilterBasic.sources = sources;
            this.isSearched = true;
        }
        // Statuses filter
        if (statuses.length > 0) {
            this.searchFilterBasic.statuses = statuses;
            this.isSearched = true;
        }
        // Call Filter Method
        this.filterAndSearchIssues('0', true, true);
    };
    /**
     * Formulate a Search Query to Filter Electios
     */
    IssuesPage.prototype.filterAndSearchIssues = function (offset, refresh, showLoader, infiniteScroll) {
        var query = "";
        var queryImploderArr = ['name', 'phone', 'cities', 'sources', 'expectedsales', 'statuses'];
        // Electio Name
        queryImploderArr['name'] = '';
        if (typeof (this.searchFilterBasic.name) != 'undefined' && this.searchFilterBasic.name != '') {
            queryImploderArr['name'] = "(CONCAT(issues.first_name, ' ', issues.last_name) LIKE '%" + this.searchFilterBasic.name + "%')";
        }
        // Electio Mobile Phone Number
        queryImploderArr['phone'] = '';
        if (typeof (this.searchFilterBasic.phone_mobile) != 'undefined' && this.searchFilterBasic.phone_mobile != '' && this.searchFilterBasic.phone_mobile.length == 10) {
            queryImploderArr['phone'] = "(issues.phone_mobile LIKE '" + this.searchFilterBasic.phone_mobile + "%')";
        }
        // Electio Cities
        queryImploderArr['cities'] = '';
        if (this.searchFilterBasic.cities.length > 0) {
            var query_city_arr = [];
            for (var city in this.searchFilterBasic.cities) {
                var temp = "issues.primary_address_city = '" + this.searchFilterBasic.cities[city] + "'";
                query_city_arr.push(temp);
            }
            queryImploderArr['cities'] = "(" + query_city_arr.join('OR ') + ")";
        }
        // Electio Sources
        queryImploderArr['sources'] = '';
        if (this.searchFilterBasic.sources.length > 0) {
            var query_source_arr = [];
            for (var source in this.searchFilterBasic.sources) {
                var temp = "issues.lead_source = '" + this.searchFilterBasic.sources[source] + "'";
                query_source_arr.push(temp);
            }
            queryImploderArr['sources'] = "(" + query_source_arr.join('OR ') + ")";
        }
        // Expected Sales
        queryImploderArr['expectedsales'] = '';
        if (typeof (this.searchFilterBasic.expected_sales) != 'undefined' && this.searchFilterBasic.expected_sales != '') {
            queryImploderArr['expectedsales'] = "(issues_cstm.expected_sales_c = '" + this.searchFilterBasic.expected_sales + "')";
        }
        // Statuses
        queryImploderArr['statuses'] = '';
        if (this.searchFilterBasic.statuses.length > 0) {
            var query_status_arr = [];
            for (var status_1 in this.searchFilterBasic.statuses) {
                var temp = "issues.status = '" + this.searchFilterBasic.statuses[status_1] + "'";
                query_status_arr.push(temp);
            }
            queryImploderArr['statuses'] = "(" + query_status_arr.join('OR ') + ")";
        }
        /**
         * Set Params
         */
        // Query Params
        queryImploderArr.forEach(function (item) {
            query = (queryImploderArr[item] != '')
                ? (query != '')
                    ? "(" + query + " AND " + queryImploderArr[item] + ")"
                    : queryImploderArr[item]
                : query;
        });
        // Set Offset
        offset = (offset) ? offset : '0';
        // Set Refresh
        refresh = (refresh) ? refresh : false;
        // Set Loader
        showLoader = (showLoader) ? showLoader : false;
        // Set Infinite Scroll
        infiniteScroll = (infiniteScroll) ? infiniteScroll : false;
        // Call Method to Retrieve issues list
        this.getIssuesList(query, offset, refresh, showLoader, infiniteScroll);
    };
    /**
     * Get Electios Listing
     */
    IssuesPage.prototype.getIssuesList = function (query, offset, refresh, showLoader, infiniteScroll) {
        var env = this;
        // First Loader Start
        var loader;
        if (showLoader) {
            loader = this.loadingCtrl.create({ content: "Loading...", enableBackdropDismiss: true });
            loader.present();
        }
        // Set default query for hide closed and won issues from listing by default
        query = (query == "") ? "(issues.status != 'closed_lost' AND issues.status != 'closed_won')" : query;
        query = (query != '') ? query + " AND " : "";
        query = query + "(issues.assigned_user_id = '" + env.sessionUser.id + "')";
        // Fetch Params
        var params = {
            'offset': offset,
            'query': query,
            'order_by': 'date_entered DESC',
            'token': env.sessionToken
        };
        var refreshParams = (refresh) ? true : false;
    };
    /**
     * Get Elctions Listing
     * This is a temporary method to fetch and show data
     */
    IssuesPage.prototype.getIssues = function () {
        var env = this;
        env.issuesList = env.issueProv.getIssues();
    };
    /**
     * Go to Electio Details Page
     */
    IssuesPage.prototype.gotoIssueDetails = function (lead_id) {
        this.navCtrl.push('ElectioDetailsPage', { lead_id: lead_id });
    };
    /**
     * Make Phone Call
     */
    IssuesPage.prototype.makePhoneCall = function (phone_mobile) {
        // let env = this;
        window.location.href = "tel: " + phone_mobile;
        // env.navCtrl.push('ElectioDetailsPage', { lead_id :  });
    };
    /**
     * Show Call Actions
     */
    IssuesPage.prototype.showCallActions = function (ev, index, lead) {
        var _this = this;
        this.selected_lead = index;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Call',
                    icon: 'call',
                    handler: function () {
                        _this.makePhoneCall(lead.phone_mobile);
                    }
                }, {
                    text: 'Details',
                    icon: 'eye',
                    handler: function () {
                        _this.gotoIssueDetails(lead.id);
                    }
                }, {
                    text: 'Archive',
                    icon: 'trash',
                    handler: function () {
                        var alert = _this.alertCtrl.create({
                            title: 'Confirm',
                            message: 'Archiving this lead will remove this lead from your listing. Are you sure you want to proceed?',
                            buttons: [
                                { text: 'Cancel', role: 'cancel' },
                                {
                                    text: 'Confirm',
                                    handler: function () { }
                                }
                            ]
                        });
                        alert.present();
                    }
                }, {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel',
                }
            ]
        });
        actionSheet.present();
    };
    /**
     * Logout
     */
    IssuesPage.prototype.logout = function () {
        this.ionStorage.removeItem('sessionuser');
        this.navCtrl.setRoot('LoginPage');
    };
    IssuesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-issues-list',template:/*ion-inline-start:"/private/var/www/html/aadityas/projects/blockchain/app/src/pages/issues/issues.html"*/'<!-- Header -->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Issues</ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n        <ion-icon name="power"></ion-icon>\n      </button>\n		</ion-buttons>\n  </ion-navbar>\n</ion-header>\n<!-- Header -->\n\n<!-- Content -->\n<ion-content>\n  <!-- Refresher -->\n  <ion-refresher (ionRefresh)="forceReload($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown"></ion-refresher-content>\n  </ion-refresher>\n  <!-- Refresher -->\n\n  <!-- List -->\n  <div *ngIf="issuesList.length > 0">\n    <ion-list *ngFor="let dateItem of issuesList; let i = index">\n      <ion-list-header class="capitalize">{{ dateItem.name }}</ion-list-header>\n\n      <ion-item tappable *ngFor="let item of dateItem.issues">\n        <ion-avatar item-start>\n          <img src="{{ default_image }}">\n        </ion-avatar>\n        <h2 class="font-17 capitalize" [innerHtml]="item.name"></h2>\n        <p class="capitalize" [innerHtml]="item.description"></p>\n        <ion-note item-end class="status {{ item.status }} capitalize" [innerHtml]="item.status"></ion-note>\n      </ion-item>\n    </ion-list>\n  </div>\n  <!-- List -->\n\n  <!-- Empty List -->\n  <ion-list *ngIf="issuesList.length == 0" class="no-results-list">\n    <ion-item text-center>\n      <ion-avatar>\n        <img src="{{ default_image }}" item-center style="margin: auto;">\n      </ion-avatar>\n      <p class="no-results-text">No Results</p>\n      <p>Pull down to refresh</p>\n    </ion-item>\n  </ion-list>\n  <!-- Empty List -->\n\n  <!-- Infinite Scroll -->\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles"\n      loadingText="Loading more data..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <!-- Infinite Scroll -->\n</ion-content>\n<!-- Content -->\n'/*ion-inline-end:"/private/var/www/html/aadityas/projects/blockchain/app/src/pages/issues/issues.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_base_settings_storage__["a" /* IonicStorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_issue_issue__["a" /* IssueProvider */]])
    ], IssuesPage);
    return IssuesPage;
}());

//# sourceMappingURL=issues.js.map

/***/ })

});
//# sourceMappingURL=0.js.map