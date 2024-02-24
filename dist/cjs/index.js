"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _fs = require("fs");
var _util = require("util");
var _browserresolve = /*#__PURE__*/ _interop_require_default(require("browser-resolve"));
var _resolve = /*#__PURE__*/ _interop_require_default(require("resolve"));
var _resolveonce = /*#__PURE__*/ _interop_require_default(require("resolve-once"));
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var _resolve1 = (0, _util.promisify)(_resolve.default);
var browserResolve = (0, _util.promisify)(_browserresolve.default);
var _default = function() {
    var optionsIn = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return {
        name: "realpath",
        setup: function setup(build) {
            var cache = {};
            var options = _object_spread({
                extensions: build.initialOptions.resolveExtensions
            }, optionsIn);
            var resolve = build.initialOptions.platform === "node" ? nodeResolve : browserResolve;
            build.onResolve({
                filter: /^[^.\/]|^\.[^.\/]|^\.\.[^\/]/
            }, function() {
                var _ref = _async_to_generator(function(args) {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!cache[args.path]) {
                                    cache[args.path] = (0, _resolveonce.default)(/*#__PURE__*/ _async_to_generator(function() {
                                        var found, _tmp, e;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    _state.trys.push([
                                                        0,
                                                        4,
                                                        ,
                                                        5
                                                    ]);
                                                    return [
                                                        4,
                                                        resolve(args.path, options)
                                                    ];
                                                case 1:
                                                    found = _state.sent();
                                                    if (!found) return [
                                                        3,
                                                        3
                                                    ];
                                                    _tmp = {};
                                                    return [
                                                        4,
                                                        _fs.promises.realpath(found)
                                                    ];
                                                case 2:
                                                    return [
                                                        2,
                                                        (_tmp.path = _state.sent(), _tmp)
                                                    ];
                                                case 3:
                                                    return [
                                                        3,
                                                        5
                                                    ];
                                                case 4:
                                                    e = _state.sent();
                                                    return [
                                                        2,
                                                        null
                                                    ];
                                                case 5:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }));
                                }
                                return [
                                    4,
                                    cache[args.path]()
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                });
                return function(args) {
                    return _ref.apply(this, arguments);
                };
            }());
        }
    };
};
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }