/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Enumerator */
/* unused harmony export getEnumerator */
/* unused harmony export toIterator */
/* harmony export (immutable) */ __webpack_exports__["l"] = toList;
/* unused harmony export ofList */
/* unused harmony export ofArray */
/* unused harmony export append */
/* unused harmony export average */
/* unused harmony export averageBy */
/* unused harmony export concat */
/* unused harmony export collect */
/* harmony export (immutable) */ __webpack_exports__["a"] = choose;
/* harmony export (immutable) */ __webpack_exports__["b"] = compareWith;
/* unused harmony export delay */
/* unused harmony export empty */
/* unused harmony export enumerateWhile */
/* unused harmony export enumerateThenFinally */
/* unused harmony export enumerateUsing */
/* unused harmony export exactlyOne */
/* unused harmony export except */
/* harmony export (immutable) */ __webpack_exports__["c"] = exists;
/* unused harmony export exists2 */
/* unused harmony export filter */
/* unused harmony export where */
/* harmony export (immutable) */ __webpack_exports__["d"] = fold;
/* harmony export (immutable) */ __webpack_exports__["e"] = foldBack;
/* unused harmony export fold2 */
/* unused harmony export foldBack2 */
/* harmony export (immutable) */ __webpack_exports__["f"] = forAll;
/* unused harmony export forAll2 */
/* unused harmony export tryHead */
/* unused harmony export head */
/* unused harmony export initialize */
/* unused harmony export initializeInfinite */
/* unused harmony export tryItem */
/* unused harmony export item */
/* harmony export (immutable) */ __webpack_exports__["g"] = iterate;
/* unused harmony export iterate2 */
/* unused harmony export iterateIndexed */
/* unused harmony export iterateIndexed2 */
/* unused harmony export isEmpty */
/* unused harmony export tryLast */
/* unused harmony export last */
/* unused harmony export count */
/* harmony export (immutable) */ __webpack_exports__["h"] = map;
/* unused harmony export mapIndexed */
/* unused harmony export indexed */
/* unused harmony export map2 */
/* unused harmony export mapIndexed2 */
/* unused harmony export map3 */
/* unused harmony export chunkBySize */
/* unused harmony export mapFold */
/* unused harmony export mapFoldBack */
/* unused harmony export max */
/* unused harmony export maxBy */
/* unused harmony export min */
/* unused harmony export minBy */
/* unused harmony export pairwise */
/* unused harmony export permute */
/* unused harmony export rangeStep */
/* unused harmony export rangeChar */
/* unused harmony export range */
/* unused harmony export readOnly */
/* harmony export (immutable) */ __webpack_exports__["j"] = reduce;
/* unused harmony export reduceBack */
/* unused harmony export replicate */
/* unused harmony export reverse */
/* harmony export (immutable) */ __webpack_exports__["k"] = scan;
/* unused harmony export scanBack */
/* unused harmony export singleton */
/* unused harmony export skip */
/* unused harmony export skipWhile */
/* unused harmony export sortWith */
/* unused harmony export sum */
/* unused harmony export sumBy */
/* unused harmony export tail */
/* unused harmony export take */
/* unused harmony export truncate */
/* unused harmony export takeWhile */
/* unused harmony export tryFind */
/* unused harmony export find */
/* unused harmony export tryFindBack */
/* unused harmony export findBack */
/* unused harmony export tryFindIndex */
/* unused harmony export findIndex */
/* unused harmony export tryFindIndexBack */
/* unused harmony export findIndexBack */
/* harmony export (immutable) */ __webpack_exports__["m"] = tryPick;
/* harmony export (immutable) */ __webpack_exports__["i"] = pick;
/* unused harmony export unfold */
/* unused harmony export zip */
/* unused harmony export zip3 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Array__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Option__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Util__ = __webpack_require__(1);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var Enumerator = function () {
    function Enumerator(iter) {
        _classCallCheck(this, Enumerator);

        this.iter = iter;
    }

    _createClass(Enumerator, [{
        key: "MoveNext",
        value: function MoveNext() {
            var cur = this.iter.next();
            this.current = cur.value;
            return !cur.done;
        }
    }, {
        key: "Reset",
        value: function Reset() {
            throw new Error("JS iterators cannot be reset");
        }
    }, {
        key: "Dispose",
        value: function Dispose() {
            return;
        }
    }, {
        key: "Current",
        get: function get() {
            return this.current;
        }
    }, {
        key: "get_Current",
        get: function get() {
            return this.current;
        }
    }]);

    return Enumerator;
}();
function getEnumerator(o) {
    return typeof o.GetEnumerator === "function" ? o.GetEnumerator() : new Enumerator(o[Symbol.iterator]());
}
function toIterator(en) {
    return {
        next: function next() {
            return en.MoveNext() ? { done: false, value: en.Current } : { done: true, value: null };
        }
    };
}
function __failIfNone(res) {
    if (res == null) {
        throw new Error("Seq did not contain any matching element");
    }
    return Object(__WEBPACK_IMPORTED_MODULE_2__Option__["b" /* getValue */])(res);
}
function toList(xs) {
    return foldBack(function (x, acc) {
        return new __WEBPACK_IMPORTED_MODULE_1__ListClass__["a" /* default */](x, acc);
    }, xs, new __WEBPACK_IMPORTED_MODULE_1__ListClass__["a" /* default */]());
}
function ofList(xs) {
    return delay(function () {
        return unfold(function (x) {
            return x.tail != null ? [x.head, x.tail] : null;
        }, xs);
    });
}
function ofArray(xs) {
    return delay(function () {
        return unfold(function (i) {
            return i < xs.length ? [xs[i], i + 1] : null;
        }, 0);
    });
}
function append(xs, ys) {
    return delay(function () {
        var firstDone = false;
        var i = xs[Symbol.iterator]();
        var iters = [i, null];
        return unfold(function () {
            var cur = void 0;
            if (!firstDone) {
                cur = iters[0].next();
                if (!cur.done) {
                    return [cur.value, iters];
                } else {
                    firstDone = true;
                    iters = [null, ys[Symbol.iterator]()];
                }
            }
            cur = iters[1].next();
            return !cur.done ? [cur.value, iters] : null;
        }, iters);
    });
}
function average(xs) {
    var count = 1;
    var sum = reduce(function (acc, x) {
        count++;
        return acc + x;
    }, xs);
    return sum / count;
}
function averageBy(f, xs) {
    var count = 1;
    var sum = reduce(function (acc, x) {
        count++;
        return (count === 2 ? f(acc) : acc) + f(x);
    }, xs);
    return sum / count;
}
function concat(xs) {
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        var output = { value: null };
        return unfold(function (innerIter) {
            var hasFinished = false;
            while (!hasFinished) {
                if (innerIter == null) {
                    var cur = iter.next();
                    if (!cur.done) {
                        innerIter = cur.value[Symbol.iterator]();
                    } else {
                        hasFinished = true;
                    }
                } else {
                    var _cur = innerIter.next();
                    if (!_cur.done) {
                        output = { value: _cur.value };
                        hasFinished = true;
                    } else {
                        innerIter = null;
                    }
                }
            }
            return innerIter != null && output != null ? [output.value, innerIter] : null;
        }, null);
    });
}
function collect(f, xs) {
    return concat(map(f, xs));
}
function choose(f, xs) {
    return delay(function () {
        return unfold(function (iter) {
            var cur = iter.next();
            while (!cur.done) {
                var y = f(cur.value);
                if (y != null) {
                    return [Object(__WEBPACK_IMPORTED_MODULE_2__Option__["b" /* getValue */])(y), iter];
                }
                cur = iter.next();
            }
            return null;
        }, xs[Symbol.iterator]());
    });
}
function compareWith(f, xs, ys) {
    var nonZero = tryFind(function (i) {
        return i !== 0;
    }, map2(function (x, y) {
        return f(x, y);
    }, xs, ys));
    return nonZero != null ? Object(__WEBPACK_IMPORTED_MODULE_2__Option__["b" /* getValue */])(nonZero) : count(xs) - count(ys);
}
function delay(f) {
    return _defineProperty({}, Symbol.iterator, function () {
        return f()[Symbol.iterator]();
    });
}
function empty() {
    return unfold(function () {
        return void 0;
    });
}
function enumerateWhile(cond, xs) {
    return concat(unfold(function () {
        return cond() ? [xs, true] : null;
    }));
}
function enumerateThenFinally(xs, finalFn) {
    return delay(function () {
        var iter = void 0;
        try {
            iter = xs[Symbol.iterator]();
        } catch (err) {
            return void 0;
        } finally {
            finalFn();
        }
        return unfold(function (it) {
            try {
                var cur = it.next();
                return !cur.done ? [cur.value, it] : null;
            } catch (err) {
                return void 0;
            } finally {
                finalFn();
            }
        }, iter);
    });
}
function enumerateUsing(disp, work) {
    var isDisposed = false;
    var disposeOnce = function disposeOnce() {
        if (!isDisposed) {
            isDisposed = true;
            disp.Dispose();
        }
    };
    try {
        return enumerateThenFinally(work(disp), disposeOnce);
    } catch (err) {
        return void 0;
    } finally {
        disposeOnce();
    }
}
function exactlyOne(xs) {
    var iter = xs[Symbol.iterator]();
    var fst = iter.next();
    if (fst.done) {
        throw new Error("Seq was empty");
    }
    var snd = iter.next();
    if (!snd.done) {
        throw new Error("Seq had multiple items");
    }
    return fst.value;
}
function except(itemsToExclude, source) {
    var exclusionItems = Array.from(itemsToExclude);
    var testIsNotInExclusionItems = function testIsNotInExclusionItems(element) {
        return !exclusionItems.some(function (excludedItem) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__Util__["e" /* equals */])(excludedItem, element);
        });
    };
    return filter(testIsNotInExclusionItems, source);
}
function exists(f, xs) {
    var cur = void 0;
    for (var iter = xs[Symbol.iterator]();;) {
        cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value)) {
            return true;
        }
    }
    return false;
}
function exists2(f, xs, ys) {
    var cur1 = void 0;
    var cur2 = void 0;
    for (var iter1 = xs[Symbol.iterator](), iter2 = ys[Symbol.iterator]();;) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        if (f(cur1.value, cur2.value)) {
            return true;
        }
    }
    return false;
}
function filter(f, xs) {
    return delay(function () {
        return unfold(function (iter) {
            var cur = iter.next();
            while (!cur.done) {
                if (f(cur.value)) {
                    return [cur.value, iter];
                }
                cur = iter.next();
            }
            return null;
        }, xs[Symbol.iterator]());
    });
}
function where(f, xs) {
    return filter(f, xs);
}
function fold(f, acc, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return xs.reduce(f, acc);
    } else {
        var cur = void 0;
        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
            cur = iter.next();
            if (cur.done) {
                break;
            }
            acc = f(acc, cur.value, i);
        }
        return acc;
    }
}
function foldBack(f, xs, acc) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    for (var i = arr.length - 1; i >= 0; i--) {
        acc = f(arr[i], acc, i);
    }
    return acc;
}
function fold2(f, acc, xs, ys) {
    var iter1 = xs[Symbol.iterator]();
    var iter2 = ys[Symbol.iterator]();
    var cur1 = void 0;
    var cur2 = void 0;
    for (var i = 0;; i++) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        acc = f(acc, cur1.value, cur2.value, i);
    }
    return acc;
}
function foldBack2(f, xs, ys, acc) {
    var ar1 = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    var ar2 = Array.isArray(ys) || ArrayBuffer.isView(ys) ? ys : Array.from(ys);
    for (var i = ar1.length - 1; i >= 0; i--) {
        acc = f(ar1[i], ar2[i], acc, i);
    }
    return acc;
}
function forAll(f, xs) {
    return fold(function (acc, x) {
        return acc && f(x);
    }, true, xs);
}
function forAll2(f, xs, ys) {
    return fold2(function (acc, x, y) {
        return acc && f(x, y);
    }, true, xs, ys);
}
function tryHead(xs) {
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();
    return cur.done ? null : Object(__WEBPACK_IMPORTED_MODULE_2__Option__["c" /* makeSome */])(cur.value);
}
function head(xs) {
    return __failIfNone(tryHead(xs));
}
function initialize(n, f) {
    return delay(function () {
        return unfold(function (i) {
            return i < n ? [f(i), i + 1] : null;
        }, 0);
    });
}
function initializeInfinite(f) {
    return delay(function () {
        return unfold(function (i) {
            return [f(i), i + 1];
        }, 0);
    });
}
function tryItem(i, xs) {
    if (i < 0) {
        return null;
    }
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return i < xs.length ? Object(__WEBPACK_IMPORTED_MODULE_2__Option__["c" /* makeSome */])(xs[i]) : null;
    }
    for (var j = 0, iter = xs[Symbol.iterator]();; j++) {
        var cur = iter.next();
        if (cur.done) {
            break;
        }
        if (j === i) {
            return Object(__WEBPACK_IMPORTED_MODULE_2__Option__["c" /* makeSome */])(cur.value);
        }
    }
    return null;
}
function item(i, xs) {
    return __failIfNone(tryItem(i, xs));
}
function iterate(f, xs) {
    fold(function (_, x) {
        return f(x);
    }, null, xs);
}
function iterate2(f, xs, ys) {
    fold2(function (_, x, y) {
        return f(x, y);
    }, null, xs, ys);
}
function iterateIndexed(f, xs) {
    fold(function (_, x, i) {
        return f(i, x);
    }, null, xs);
}
function iterateIndexed2(f, xs, ys) {
    fold2(function (_, x, y, i) {
        return f(i, x, y);
    }, null, xs, ys);
}
function isEmpty(xs) {
    var i = xs[Symbol.iterator]();
    return i.next().done;
}
function tryLast(xs) {
    try {
        return Object(__WEBPACK_IMPORTED_MODULE_2__Option__["c" /* makeSome */])(reduce(function (_, x) {
            return x;
        }, xs));
    } catch (err) {
        return null;
    }
}
function last(xs) {
    return __failIfNone(tryLast(xs));
}
// A export function 'length' method causes problems in JavaScript -- https://github.com/Microsoft/TypeScript/issues/442
function count(xs) {
    return Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.length : fold(function (acc, x) {
        return acc + 1;
    }, 0, xs);
}
function map(f, xs) {
    return delay(function () {
        return unfold(function (iter) {
            var cur = iter.next();
            return !cur.done ? [f(cur.value), iter] : null;
        }, xs[Symbol.iterator]());
    });
}
function mapIndexed(f, xs) {
    return delay(function () {
        var i = 0;
        return unfold(function (iter) {
            var cur = iter.next();
            return !cur.done ? [f(i++, cur.value), iter] : null;
        }, xs[Symbol.iterator]());
    });
}
function indexed(xs) {
    return mapIndexed(function (i, x) {
        return [i, x];
    }, xs);
}
function map2(f, xs, ys) {
    return delay(function () {
        var iter1 = xs[Symbol.iterator]();
        var iter2 = ys[Symbol.iterator]();
        return unfold(function () {
            var cur1 = iter1.next();
            var cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), null] : null;
        });
    });
}
function mapIndexed2(f, xs, ys) {
    return delay(function () {
        var i = 0;
        var iter1 = xs[Symbol.iterator]();
        var iter2 = ys[Symbol.iterator]();
        return unfold(function () {
            var cur1 = iter1.next();
            var cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), null] : null;
        });
    });
}
function map3(f, xs, ys, zs) {
    return delay(function () {
        var iter1 = xs[Symbol.iterator]();
        var iter2 = ys[Symbol.iterator]();
        var iter3 = zs[Symbol.iterator]();
        return unfold(function () {
            var cur1 = iter1.next();
            var cur2 = iter2.next();
            var cur3 = iter3.next();
            return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), null] : null;
        });
    });
}
function chunkBySize(size, xs) {
    var result = Object(__WEBPACK_IMPORTED_MODULE_0__Array__["a" /* chunkBySize */])(size, Array.from(xs));
    return ofArray(result);
}
function mapFold(f, acc, xs, transform) {
    var result = [];
    var r = void 0;
    var cur = void 0;
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        cur = iter.next();
        if (cur.done) {
            break;
        }

        var _f = f(acc, cur.value);

        var _f2 = _slicedToArray(_f, 2);

        r = _f2[0];
        acc = _f2[1];

        result.push(r);
    }
    return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function mapFoldBack(f, xs, acc, transform) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    var result = [];
    var r = void 0;
    for (var i = arr.length - 1; i >= 0; i--) {
        var _f3 = f(arr[i], acc);

        var _f4 = _slicedToArray(_f3, 2);

        r = _f4[0];
        acc = _f4[1];

        result.push(r);
    }
    return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function max(xs) {
    return reduce(function (acc, x) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__Util__["c" /* compare */])(acc, x) === 1 ? acc : x;
    }, xs);
}
function maxBy(f, xs) {
    return reduce(function (acc, x) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__Util__["c" /* compare */])(f(acc), f(x)) === 1 ? acc : x;
    }, xs);
}
function min(xs) {
    return reduce(function (acc, x) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__Util__["c" /* compare */])(acc, x) === -1 ? acc : x;
    }, xs);
}
function minBy(f, xs) {
    return reduce(function (acc, x) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__Util__["c" /* compare */])(f(acc), f(x)) === -1 ? acc : x;
    }, xs);
}
function pairwise(xs) {
    return skip(2, scan(function (last, next) {
        return [last[1], next];
    }, [0, 0], xs));
}
function permute(f, xs) {
    return ofArray(Object(__WEBPACK_IMPORTED_MODULE_0__Array__["b" /* permute */])(f, Array.from(xs)));
}
function rangeStep(first, step, last) {
    if (step === 0) {
        throw new Error("Step cannot be 0");
    }
    return delay(function () {
        return unfold(function (x) {
            return step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : null;
        }, first);
    });
}
function rangeChar(first, last) {
    return delay(function () {
        return unfold(function (x) {
            return x <= last ? [x, String.fromCharCode(x.charCodeAt(0) + 1)] : null;
        }, first);
    });
}
function range(first, last) {
    return rangeStep(first, 1, last);
}
function readOnly(xs) {
    return map(function (x) {
        return x;
    }, xs);
}
function reduce(f, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return xs.reduce(f);
    }
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();
    if (cur.done) {
        throw new Error("Seq was empty");
    }
    var acc = cur.value;
    while (true) {
        cur = iter.next();
        if (cur.done) {
            break;
        }
        acc = f(acc, cur.value);
    }
    return acc;
}
function reduceBack(f, xs) {
    var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    if (ar.length === 0) {
        throw new Error("Seq was empty");
    }
    var acc = ar[ar.length - 1];
    for (var i = ar.length - 2; i >= 0; i--) {
        acc = f(ar[i], acc, i);
    }
    return acc;
}
function replicate(n, x) {
    return initialize(n, function () {
        return x;
    });
}
function reverse(xs) {
    var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
    return ofArray(ar.reverse());
}
function scan(f, seed, xs) {
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        return unfold(function (acc) {
            if (acc == null) {
                return [seed, seed];
            }
            var cur = iter.next();
            if (!cur.done) {
                acc = f(acc, cur.value);
                return [acc, acc];
            }
            return void 0;
        }, null);
    });
}
function scanBack(f, xs, seed) {
    return reverse(scan(function (acc, x) {
        return f(x, acc);
    }, seed, reverse(xs)));
}
function singleton(y) {
    return unfold(function (x) {
        return x != null ? [x, null] : null;
    }, y);
}
function skip(n, xs) {
    return _defineProperty({}, Symbol.iterator, function () {
        var iter = xs[Symbol.iterator]();
        for (var i = 1; i <= n; i++) {
            if (iter.next().done) {
                throw new Error("Seq has not enough elements");
            }
        }
        return iter;
    });
}
function skipWhile(f, xs) {
    return delay(function () {
        var hasPassed = false;
        return filter(function (x) {
            return hasPassed || (hasPassed = !f(x));
        }, xs);
    });
}
function sortWith(f, xs) {
    var ys = Array.from(xs);
    return ofArray(ys.sort(f));
}
function sum(xs) {
    return fold(function (acc, x) {
        return acc + x;
    }, 0, xs);
}
function sumBy(f, xs) {
    return fold(function (acc, x) {
        return acc + f(x);
    }, 0, xs);
}
function tail(xs) {
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();
    if (cur.done) {
        throw new Error("Seq was empty");
    }
    return _defineProperty({}, Symbol.iterator, function () {
        return iter;
    });
}
function take(n, xs) {
    var truncate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    return delay(function () {
        var iter = xs[Symbol.iterator]();
        return unfold(function (i) {
            if (i < n) {
                var cur = iter.next();
                if (!cur.done) {
                    return [cur.value, i + 1];
                }
                if (!truncate) {
                    throw new Error("Seq has not enough elements");
                }
            }
            return void 0;
        }, 0);
    });
}
function truncate(n, xs) {
    return take(n, xs, true);
}
function takeWhile(f, xs) {
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        return unfold(function (i) {
            var cur = iter.next();
            if (!cur.done && f(cur.value)) {
                return [cur.value, null];
            }
            return void 0;
        }, 0);
    });
}
function tryFind(f, xs, defaultValue) {
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value, i)) {
            return Object(__WEBPACK_IMPORTED_MODULE_2__Option__["c" /* makeSome */])(cur.value);
        }
    }
    return defaultValue === void 0 ? null : Object(__WEBPACK_IMPORTED_MODULE_2__Option__["c" /* makeSome */])(defaultValue);
}
function find(f, xs) {
    return __failIfNone(tryFind(f, xs));
}
function tryFindBack(f, xs, defaultValue) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
    return tryFind(f, arr.reverse(), defaultValue);
}
function findBack(f, xs) {
    return __failIfNone(tryFindBack(f, xs));
}
function tryFindIndex(f, xs) {
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value, i)) {
            return i;
        }
    }
    return null;
}
function findIndex(f, xs) {
    return __failIfNone(tryFindIndex(f, xs));
}
function tryFindIndexBack(f, xs) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
    for (var i = arr.length - 1; i >= 0; i--) {
        if (f(arr[i], i)) {
            return i;
        }
    }
    return null;
}
function findIndexBack(f, xs) {
    return __failIfNone(tryFindIndexBack(f, xs));
}
function tryPick(f, xs) {
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done) {
            break;
        }
        var y = f(cur.value, i);
        if (y != null) {
            return y;
        }
    }
    return null;
}
function pick(f, xs) {
    return __failIfNone(tryPick(f, xs));
}
function unfold(f, fst) {
    return _defineProperty({}, Symbol.iterator, function () {
        // Capture a copy of the first value in the closure
        // so the sequence is restarted every time, see #1230
        var acc = fst;
        return {
            next: function next() {
                var res = f(acc);
                if (res != null) {
                    acc = res[1];
                    return { done: false, value: res[0] };
                }
                return { done: true };
            }
        };
    });
}
function zip(xs, ys) {
    return map2(function (x, y) {
        return [x, y];
    }, xs, ys);
}
function zip3(xs, ys, zs) {
    return map3(function (x, y, z) {
        return [x, y, z];
    }, xs, ys, zs);
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NonDeclaredType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Any; });
/* unused harmony export Unit */
/* unused harmony export Option */
/* unused harmony export Array */
/* unused harmony export Tuple */
/* unused harmony export Function */
/* unused harmony export GenericParam */
/* unused harmony export Interface */
/* unused harmony export makeGeneric */
/* unused harmony export isGeneric */
/* harmony export (immutable) */ __webpack_exports__["g"] = getDefinition;
/* unused harmony export extendInfo */
/* unused harmony export hasInterface */
/* harmony export (immutable) */ __webpack_exports__["h"] = getPropertyNames;
/* unused harmony export isArray */
/* harmony export (immutable) */ __webpack_exports__["i"] = toString;
/* unused harmony export ObjectRef */
/* unused harmony export getHashCode */
/* unused harmony export hash */
/* harmony export (immutable) */ __webpack_exports__["e"] = equals;
/* unused harmony export comparePrimitives */
/* harmony export (immutable) */ __webpack_exports__["c"] = compare;
/* unused harmony export lessThan */
/* unused harmony export lessOrEqual */
/* unused harmony export greaterThan */
/* unused harmony export greaterOrEqual */
/* unused harmony export equalsRecords */
/* unused harmony export compareRecords */
/* harmony export (immutable) */ __webpack_exports__["f"] = equalsUnions;
/* harmony export (immutable) */ __webpack_exports__["d"] = compareUnions;
/* unused harmony export createDisposable */
/* unused harmony export createAtom */
/* unused harmony export createObj */
/* unused harmony export toPlainJsObj */
/* unused harmony export jsOptions */
/* unused harmony export round */
/* unused harmony export sign */
/* unused harmony export randomNext */
/* unused harmony export applyOperator */
/* unused harmony export unescapeDataString */
/* unused harmony export escapeDataString */
/* unused harmony export escapeUriString */
/* unused harmony export clear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Date__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Symbol__ = __webpack_require__(2);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var NonDeclaredType = function () {
    function NonDeclaredType(kind, definition, generics) {
        _classCallCheck(this, NonDeclaredType);

        this.kind = kind;
        this.definition = definition;
        this.generics = generics;
    }

    _createClass(NonDeclaredType, [{
        key: "Equals",
        value: function Equals(other) {
            if (this.kind === other.kind && this.definition === other.definition) {
                return _typeof(this.generics) === "object"
                // equalsRecords should also work for Type[] (tuples)
                ? equalsRecords(this.generics, other.generics) : this.generics === other.generics;
            }
            return false;
        }
    }]);

    return NonDeclaredType;
}();
var Any = new NonDeclaredType("Any");
var Unit = new NonDeclaredType("Unit");
function Option(t) {
    return new NonDeclaredType("Option", null, [t]);
}
function FableArray(t) {
    var isTypedArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var def = null;
    var genArg = null;
    if (isTypedArray) {
        def = t;
    } else {
        genArg = t;
    }
    return new NonDeclaredType("Array", def, [genArg]);
}

function Tuple(types) {
    return new NonDeclaredType("Tuple", null, types);
}
function FableFunction(types) {
    return new NonDeclaredType("Function", null, types);
}

function GenericParam(definition) {
    return new NonDeclaredType("GenericParam", definition);
}
function Interface(definition) {
    return new NonDeclaredType("Interface", definition);
}
function makeGeneric(typeDef, genArgs) {
    return new NonDeclaredType("GenericType", typeDef, genArgs);
}
function isGeneric(typ) {
    return typ instanceof NonDeclaredType && typ.kind === "GenericType";
}
/**
 * Returns the parent if this is a declared generic type or the argument otherwise.
 * Attention: Unlike .NET this doesn't throw an exception if type is not generic.
 */
function getDefinition(typ) {
    return isGeneric(typ) ? typ.definition : typ;
}
function extendInfo(cons, info) {
    var parent = Object.getPrototypeOf(cons.prototype);
    if (typeof parent[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] === "function") {
        var newInfo = {};
        var parentInfo = parent[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]();
        Object.getOwnPropertyNames(info).forEach(function (k) {
            var i = info[k];
            if ((typeof i === "undefined" ? "undefined" : _typeof(i)) === "object") {
                newInfo[k] = Array.isArray(i) ? (parentInfo[k] || []).concat(i) : Object.assign(parentInfo[k] || {}, i);
            } else {
                newInfo[k] = i;
            }
        });
        return newInfo;
    }
    return info;
}
function hasInterface(obj, interfaceName) {
    if (interfaceName === "System.Collections.Generic.IEnumerable") {
        return typeof obj[Symbol.iterator] === "function";
    } else if (typeof obj[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] === "function") {
        var interfaces = obj[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]().interfaces;
        return Array.isArray(interfaces) && interfaces.indexOf(interfaceName) > -1;
    }
    return false;
}
/**
 * Returns:
 * - Records: array with names of fields
 * - Classes: array with names of getters
 * - Nulls and unions: empty array
 * - JS Objects: The result of calling Object.getOwnPropertyNames
 */
function getPropertyNames(obj) {
    if (obj == null) {
        return [];
    }
    var propertyMap = typeof obj[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] === "function" ? obj[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]().properties || [] : obj;
    return Object.getOwnPropertyNames(propertyMap);
}
function isArray(obj) {
    return Array.isArray(obj) || ArrayBuffer.isView(obj);
}
function toString(obj) {
    var quoteStrings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    function isObject(x) {
        return x !== null && (typeof x === "undefined" ? "undefined" : _typeof(x)) === "object" && !(x instanceof Number) && !(x instanceof String) && !(x instanceof Boolean);
    }
    if (obj == null || typeof obj === "number") {
        return String(obj);
    }
    if (typeof obj === "string") {
        return quoteStrings ? JSON.stringify(obj) : obj;
    }
    if (obj instanceof Date) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__Date__["i" /* toString */])(obj);
    }
    if (typeof obj.ToString === "function") {
        return obj.ToString();
    }
    if (hasInterface(obj, "FSharpUnion")) {
        var info = obj[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]();
        var uci = info.cases[obj.tag];
        switch (uci.length) {
            case 1:
                return uci[0];
            case 2:
                // For simplicity let's always use parens, in .NET they're ommitted in some cases
                return uci[0] + " (" + toString(obj.data, true) + ")";
            default:
                return uci[0] + " (" + obj.data.map(function (x) {
                    return toString(x, true);
                }).join(",") + ")";
        }
    }
    try {
        return JSON.stringify(obj, function (k, v) {
            return v && v[Symbol.iterator] && !Array.isArray(v) && isObject(v) ? Array.from(v) : v && typeof v.ToString === "function" ? toString(v) : v;
        });
    } catch (err) {
        // Fallback for objects with circular references
        return "{" + Object.getOwnPropertyNames(obj).map(function (k) {
            return k + ": " + String(obj[k]);
        }).join(", ") + "}";
    }
}
var ObjectRef = function () {
    function ObjectRef() {
        _classCallCheck(this, ObjectRef);
    }

    _createClass(ObjectRef, null, [{
        key: "id",
        value: function id(o) {
            if (!ObjectRef.idMap.has(o)) {
                ObjectRef.idMap.set(o, ++ObjectRef.count);
            }
            return ObjectRef.idMap.get(o);
        }
    }]);

    return ObjectRef;
}();
ObjectRef.idMap = new WeakMap();
ObjectRef.count = 0;
function getHashCode(x) {
    return ObjectRef.id(x) * 2654435761 | 0;
}
function hash(x) {
    if ((typeof x === "undefined" ? "undefined" : _typeof(x)) === _typeof(1)) {
        return x * 2654435761 | 0;
    }
    if (x != null && typeof x.GetHashCode === "function") {
        return x.GetHashCode();
    } else {
        var s = toString(x);
        var h = 5381;
        var i = 0;
        var len = s.length;
        while (i < len) {
            h = h * 33 ^ s.charCodeAt(i++);
        }
        return h;
    }
}
function equals(x, y) {
    // Optimization if they are referencially equal
    if (x === y) {
        return true;
    } else if (x == null) {
        return y == null;
    } else if (y == null) {
        return false;
    } else if ((typeof x === "undefined" ? "undefined" : _typeof(x)) !== "object" || (typeof y === "undefined" ? "undefined" : _typeof(y)) !== "object") {
        return x === y;
        // Equals override or IEquatable implementation
    } else if (typeof x.Equals === "function") {
        return x.Equals(y);
    } else if (typeof y.Equals === "function") {
        return y.Equals(x);
    } else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) {
        return false;
    } else if (Array.isArray(x)) {
        if (x.length !== y.length) {
            return false;
        }
        for (var i = 0; i < x.length; i++) {
            if (!equals(x[i], y[i])) {
                return false;
            }
        }
        return true;
    } else if (ArrayBuffer.isView(x)) {
        if (x.byteLength !== y.byteLength) {
            return false;
        }
        var dv1 = new DataView(x.buffer);
        var dv2 = new DataView(y.buffer);
        for (var _i = 0; _i < x.byteLength; _i++) {
            if (dv1.getUint8(_i) !== dv2.getUint8(_i)) {
                return false;
            }
        }
        return true;
    } else if (x instanceof Date) {
        return x.getTime() === y.getTime();
    } else {
        return false;
    }
}
function comparePrimitives(x, y) {
    return x === y ? 0 : x < y ? -1 : 1;
}
function compare(x, y) {
    // Optimization if they are referencially equal
    if (x === y) {
        return 0;
    } else if (x == null) {
        return y == null ? 0 : -1;
    } else if (y == null) {
        return 1; // everything is bigger than null
    } else if ((typeof x === "undefined" ? "undefined" : _typeof(x)) !== "object" || (typeof y === "undefined" ? "undefined" : _typeof(y)) !== "object") {
        return x === y ? 0 : x < y ? -1 : 1;
        // Some types (see Long.ts) may just implement the function and not the interface
        // else if (hasInterface(x, "System.IComparable"))
    } else if (typeof x.CompareTo === "function") {
        return x.CompareTo(y);
    } else if (typeof y.CompareTo === "function") {
        return y.CompareTo(x) * -1;
    } else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) {
        return -1;
    } else if (Array.isArray(x)) {
        if (x.length !== y.length) {
            return x.length < y.length ? -1 : 1;
        }
        for (var i = 0, j = 0; i < x.length; i++) {
            j = compare(x[i], y[i]);
            if (j !== 0) {
                return j;
            }
        }
        return 0;
    } else if (ArrayBuffer.isView(x)) {
        if (x.byteLength !== y.byteLength) {
            return x.byteLength < y.byteLength ? -1 : 1;
        }
        var dv1 = new DataView(x.buffer);
        var dv2 = new DataView(y.buffer);
        for (var _i2 = 0, b1 = 0, b2 = 0; _i2 < x.byteLength; _i2++) {
            b1 = dv1.getUint8(_i2), b2 = dv2.getUint8(_i2);
            if (b1 < b2) {
                return -1;
            }
            if (b1 > b2) {
                return 1;
            }
        }
        return 0;
    } else if (x instanceof Date) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__Date__["a" /* compare */])(x, y);
    } else if ((typeof x === "undefined" ? "undefined" : _typeof(x)) === "object") {
        var xhash = hash(x);
        var yhash = hash(y);
        if (xhash === yhash) {
            return equals(x, y) ? 0 : -1;
        } else {
            return xhash < yhash ? -1 : 1;
        }
    } else {
        return x < y ? -1 : 1;
    }
}
function lessThan(x, y) {
    return compare(x, y) < 0;
}
function lessOrEqual(x, y) {
    return compare(x, y) <= 0;
}
function greaterThan(x, y) {
    return compare(x, y) > 0;
}
function greaterOrEqual(x, y) {
    return compare(x, y) >= 0;
}
function equalsRecords(x, y) {
    // Optimization if they are referencially equal
    if (x === y) {
        return true;
    } else {
        var keys = getPropertyNames(x);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                if (!equals(x[key], y[key])) {
                    return false;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return true;
    }
}
function compareRecords(x, y) {
    // Optimization if they are referencially equal
    if (x === y) {
        return 0;
    } else {
        var keys = getPropertyNames(x);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var key = _step2.value;

                var res = compare(x[key], y[key]);
                if (res !== 0) {
                    return res;
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        return 0;
    }
}
function equalsUnions(x, y) {
    return x === y || x.tag === y.tag && equals(x.data, y.data);
}
function compareUnions(x, y) {
    if (x === y) {
        return 0;
    } else {
        var res = x.tag < y.tag ? -1 : x.tag > y.tag ? 1 : 0;
        return res !== 0 ? res : compare(x.data, y.data);
    }
}
function createDisposable(f) {
    return _defineProperty({
        Dispose: f
    }, __WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection, function () {
        return { interfaces: ["System.IDisposable"] };
    });
}
// tslint forbids non-arrow functions, but it's
// necessary here to use the arguments object
/* tslint:disable */
function createAtom(value) {
    var atom = value;
    return function () {
        return arguments.length === 0 ? atom : (atom = arguments[0], void 0);
    };
}
/* tslint:enable */
var CaseRules = {
    None: 0,
    LowerFirst: 1
};
function isList(o) {
    if (o != null) {
        if (typeof o[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] === "function") {
            return o[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]().type === "Microsoft.FSharp.Collections.FSharpList";
        }
    }
    return false;
}
function createObj(fields) {
    var caseRule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CaseRules.None;
    var casesCache = arguments[2];

    var iter = fields[Symbol.iterator]();
    var cur = iter.next();
    var o = {};
    while (!cur.done) {
        var value = cur.value;
        if (Array.isArray(value)) {
            o[value[0]] = value[1];
        } else {
            casesCache = casesCache || new Map();
            var proto = Object.getPrototypeOf(value);
            var cases = casesCache.get(proto);
            if (cases == null) {
                if (typeof proto[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] === "function") {
                    cases = proto[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]().cases;
                    casesCache.set(proto, cases);
                }
            }
            var caseInfo = cases != null ? cases[value.tag] : null;
            if (Array.isArray(caseInfo)) {
                var key = caseInfo[0];
                if (caseRule === CaseRules.LowerFirst) {
                    key = key[0].toLowerCase() + key.substr(1);
                }
                o[key] = caseInfo.length === 1 ? true : isList(value.data) ? createObj(value.data, caseRule, casesCache) : value.data;
            } else {
                throw new Error("Cannot infer key and value of " + value);
            }
        }
        cur = iter.next();
    }
    return o;
}
function toPlainJsObj(source) {
    if (source != null && source.constructor !== Object) {
        var target = {};
        var props = Object.getOwnPropertyNames(source);
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = props[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var p = _step3.value;

                target[p] = source[p];
            }
            // Copy also properties from prototype, see #192
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }

        var proto = Object.getPrototypeOf(source);
        if (proto != null) {
            props = Object.getOwnPropertyNames(proto);
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = props[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _p = _step4.value;

                    var prop = Object.getOwnPropertyDescriptor(proto, _p);
                    if (prop.value) {
                        target[_p] = prop.value;
                    } else if (prop.get) {
                        target[_p] = prop.get.apply(source);
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
        return target;
    } else {
        return source;
    }
}
function jsOptions(mutator) {
    var opts = {};
    mutator(opts);
    return opts;
}
function round(value) {
    var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var m = Math.pow(10, digits);
    var n = +(digits ? value * m : value).toFixed(8);
    var i = Math.floor(n);
    var f = n - i;
    var e = 1e-8;
    var r = f > 0.5 - e && f < 0.5 + e ? i % 2 === 0 ? i : i + 1 : Math.round(n);
    return digits ? r / m : r;
}
function sign(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}
function randomNext(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function applyOperator(x, y, operator) {
    function getMethod(obj) {
        if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
            var cons = Object.getPrototypeOf(obj).constructor;
            if (typeof cons[operator] === "function") {
                return cons[operator];
            }
        }
        return null;
    }
    var meth = getMethod(x);
    if (meth != null) {
        return meth(x, y);
    }
    meth = getMethod(y);
    if (meth != null) {
        return meth(x, y);
    }
    switch (operator) {
        case "op_Addition":
            return x + y;
        case "op_Subtraction":
            return x - y;
        case "op_Multiply":
            return x * y;
        case "op_Division":
            return x / y;
        case "op_Modulus":
            return x % y;
        case "op_LeftShift":
            return x << y;
        case "op_RightShift":
            return x >> y;
        case "op_BitwiseAnd":
            return x & y;
        case "op_BitwiseOr":
            return x | y;
        case "op_ExclusiveOr":
            return x ^ y;
        case "op_LogicalNot":
            return x + y;
        case "op_UnaryNegation":
            return !x;
        case "op_BooleanAnd":
            return x && y;
        case "op_BooleanOr":
            return x || y;
        default:
            return null;
    }
}
function unescapeDataString(s) {
    // https://stackoverflow.com/a/4458580/524236
    return decodeURIComponent(s.replace(/\+/g, "%20"));
}
function escapeDataString(s) {
    return encodeURIComponent(s).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
}
function escapeUriString(s) {
    return encodeURI(s);
}
// ICollection.Clear method can be called on IDictionary
// too so we need to make a runtime check (see #1120)
function clear(col) {
    if (Array.isArray(col)) {
        col.splice(0);
    } else {
        col.clear();
    }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setType */
/* harmony export (immutable) */ __webpack_exports__["b"] = getType;
var types = new Map();
function setType(fullName, cons) {
    types.set(fullName, cons);
}
function getType(fullName) {
    return types.get(fullName);
}
/* harmony default export */ __webpack_exports__["a"] = ({
    reflection: Symbol("reflection")
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export append */
/* unused harmony export choose */
/* unused harmony export collect */
/* unused harmony export concat */
/* unused harmony export filter */
/* unused harmony export where */
/* unused harmony export initialize */
/* unused harmony export map */
/* unused harmony export mapIndexed */
/* unused harmony export indexed */
/* unused harmony export partition */
/* unused harmony export replicate */
/* unused harmony export reverse */
/* unused harmony export singleton */
/* unused harmony export slice */
/* unused harmony export unzip */
/* unused harmony export unzip3 */
/* unused harmony export groupBy */
/* unused harmony export splitAt */
/* unused harmony export head */
/* unused harmony export tail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Option__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Seq__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__ListClass__["b"]; });








/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]);

function append(xs, ys) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x) {
        return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc);
    }, ys, reverse(xs));
}
function choose(f, xs) {
    var r = Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x) {
        var y = f(x);
        return y != null ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_2__Option__["b" /* getValue */])(y), acc) : acc;
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs);
    return reverse(r);
}
function collect(f, xs) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x) {
        return append(acc, f(x));
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs);
}
// TODO: should be xs: Iterable<List<T>>
function concat(xs) {
    return collect(function (x) {
        return x;
    }, xs);
}
function filter(f, xs) {
    return reverse(Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x) {
        return f(x) ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc) : acc;
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function where(f, xs) {
    return filter(f, xs);
}
function initialize(n, f) {
    if (n < 0) {
        throw new Error("List length must be non-negative");
    }
    var xs = new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]();
    for (var i = 1; i <= n; i++) {
        xs = new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](f(n - i), xs);
    }
    return xs;
}
function map(f, xs) {
    return reverse(Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x) {
        return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](f(x), acc);
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function mapIndexed(f, xs) {
    return reverse(Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x, i) {
        return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](f(i, x), acc);
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function indexed(xs) {
    return mapIndexed(function (i, x) {
        return [i, x];
    }, xs);
}
function partition(f, xs) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x) {
        var lacc = acc[0];
        var racc = acc[1];
        return f(x) ? [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, lacc), racc] : [lacc, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, racc)];
    }, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]()], reverse(xs));
}
function replicate(n, x) {
    return initialize(n, function () {
        return x;
    });
}
function reverse(xs) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x) {
        return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc);
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs);
}
function singleton(x) {
    return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]());
}
function slice(lower, upper, xs) {
    var noLower = lower == null;
    var noUpper = upper == null;
    return reverse(Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x, i) {
        return (noLower || lower <= i) && (noUpper || i <= upper) ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc) : acc;
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
/* ToDo: instance unzip() */
function unzip(xs) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["e" /* foldBack */])(function (xy, acc) {
        return [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xy[0], acc[0]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xy[1], acc[1])];
    }, xs, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]()]);
}
/* ToDo: instance unzip3() */
function unzip3(xs) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["e" /* foldBack */])(function (xyz, acc) {
        return [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xyz[0], acc[0]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xyz[1], acc[1]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xyz[2], acc[2])];
    }, xs, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]()]);
}
function groupBy(f, xs) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["l" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["h" /* map */])(function (k) {
        return [k[0], Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["l" /* toList */])(k[1])];
    }, Object(__WEBPACK_IMPORTED_MODULE_1__Map__["c" /* groupBy */])(f, xs)));
}
function splitAt(index, xs) {
    if (index < 0) {
        throw new Error("The input must be non-negative.");
    }
    var i = 0;
    var last = xs;
    var first = new Array(index);
    while (i < index) {
        if (last.tail == null) {
            throw new Error("The input sequence has an insufficient number of elements.");
        }
        first[i] = last.head;
        last = last.tail;
        i++;
    }
    return [Object(__WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* ofArray */])(first), last];
}
function head(xs) {
    if (xs.head !== undefined) {
        return xs.head;
    } else {
        throw new Error("The input list was empty.");
    }
}
function tail(xs) {
    if (xs.tail !== undefined) {
        return xs.tail;
    } else {
        throw new Error("The input list was empty.");
    }
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Some; });
/* harmony export (immutable) */ __webpack_exports__["c"] = makeSome;
/* harmony export (immutable) */ __webpack_exports__["b"] = getValue;
/* unused harmony export defaultArg */
/* unused harmony export defaultArgWith */
/* unused harmony export filter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var Some = function () {
    function Some(value) {
        _classCallCheck(this, Some);

        this.value = value;
    }
    // We don't prefix it with "Some" for consistency with erased options


    _createClass(Some, [{
        key: "ToString",
        value: function ToString() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__Util__["i" /* toString */])(this.value);
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            if (other == null) {
                return false;
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_0__Util__["e" /* equals */])(this.value, other instanceof Some ? other.value : other);
            }
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            if (other == null) {
                return 1;
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_0__Util__["c" /* compare */])(this.value, other instanceof Some ? other.value : other);
            }
        }
    }]);

    return Some;
}();
function makeSome(x) {
    return x == null || x instanceof Some ? new Some(x) : x;
}
function getValue(x, acceptNull) {
    if (x == null) {
        if (!acceptNull) {
            throw new Error("Option has no value");
        }
        return null;
    } else {
        return x instanceof Some ? x.value : x;
    }
}
function defaultArg(arg, defaultValue, f) {
    return arg == null ? defaultValue : f != null ? f(getValue(arg)) : getValue(arg);
}
function defaultArgWith(arg, defThunk) {
    return arg == null ? defThunk() : getValue(arg);
}
function filter(predicate, arg) {
    return arg != null ? !predicate(getValue(arg)) ? null : arg : arg;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = ofArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





// This module is split from List.ts to prevent cyclic dependencies
function ofArray(args, base) {
    var acc = base || new List();
    for (var i = args.length - 1; i >= 0; i--) {
        acc = new List(args[i], acc);
    }
    return acc;
}

var List = function () {
    function List(head, tail) {
        _classCallCheck(this, List);

        this.head = head;
        this.tail = tail;
    }

    _createClass(List, [{
        key: "ToString",
        value: function ToString() {
            return "[" + Array.from(this).map(function (x) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__Util__["i" /* toString */])(x);
            }).join("; ") + "]";
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            // Optimization if they are referencially equal
            if (this === other) {
                return true;
            } else {
                var cur1 = this;
                var cur2 = other;
                while (Object(__WEBPACK_IMPORTED_MODULE_1__Util__["e" /* equals */])(cur1.head, cur2.head)) {
                    cur1 = cur1.tail;
                    cur2 = cur2.tail;
                    if (cur1 == null) {
                        return cur2 == null;
                    }
                }
                return false;
            }
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            // Optimization if they are referencially equal
            if (this === other) {
                return 0;
            } else {
                var cur1 = this;
                var cur2 = other;
                var res = Object(__WEBPACK_IMPORTED_MODULE_1__Util__["c" /* compare */])(cur1.head, cur2.head);
                while (res === 0) {
                    cur1 = cur1.tail;
                    cur2 = cur2.tail;
                    if (cur1 == null) {
                        return cur2 == null ? 0 : -1;
                    }
                    res = Object(__WEBPACK_IMPORTED_MODULE_1__Util__["c" /* compare */])(cur1.head, cur2.head);
                }
                return res;
            }
        }
    }, {
        key: Symbol.iterator,
        value: function value() {
            var cur = this;
            return {
                next: function next() {
                    var tmp = cur;
                    cur = cur.tail;
                    return { done: tmp.tail == null, value: tmp.head };
                }
            };
        }
        //   append(ys: List<T>): List<T> {
        //     return append(this, ys);
        //   }
        //   choose<U>(f: (x: T) => U, xs: List<T>): List<U> {
        //     return choose(f, this);
        //   }
        //   collect<U>(f: (x: T) => List<U>): List<U> {
        //     return collect(f, this);
        //   }
        //   filter(f: (x: T) => boolean): List<T> {
        //     return filter(f, this);
        //   }
        //   where(f: (x: T) => boolean): List<T> {
        //     return filter(f, this);
        //   }
        //   map<U>(f: (x: T) => U): List<U> {
        //     return map(f, this);
        //   }
        //   mapIndexed<U>(f: (i: number, x: T) => U): List<U> {
        //     return mapIndexed(f, this);
        //   }
        //   partition(f: (x: T) => boolean): [List<T>, List<T>] {
        //     return partition(f, this) as [List<T>, List<T>];
        //   }
        //   reverse(): List<T> {
        //     return reverse(this);
        //   }
        //   slice(lower: number, upper: number): List<T> {
        //     return slice(lower, upper, this);
        //   }

    }, {
        key: __WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Microsoft.FSharp.Collections.FSharpList",
                interfaces: ["System.IEquatable", "System.IComparable"]
            };
        }
    }, {
        key: "length",
        get: function get() {
            var cur = this;
            var acc = 0;
            while (cur.tail != null) {
                cur = cur.tail;
                acc++;
            }
            return acc;
        }
    }]);

    return List;
}();

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationCanceledError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Trampoline; });
/* harmony export (immutable) */ __webpack_exports__["d"] = protectedCont;
/* harmony export (immutable) */ __webpack_exports__["c"] = protectedBind;
/* harmony export (immutable) */ __webpack_exports__["e"] = protectedReturn;
/* unused harmony export AsyncBuilder */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return singleton; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OperationCanceledError = function (_Error) {
    _inherits(OperationCanceledError, _Error);

    function OperationCanceledError() {
        _classCallCheck(this, OperationCanceledError);

        var _this = _possibleConstructorReturn(this, (OperationCanceledError.__proto__ || Object.getPrototypeOf(OperationCanceledError)).call(this, "The operation was canceled"));

        Object.setPrototypeOf(_this, OperationCanceledError.prototype);
        return _this;
    }

    return OperationCanceledError;
}(Error);
var Trampoline = function () {
    _createClass(Trampoline, null, [{
        key: "maxTrampolineCallCount",
        get: function get() {
            return 2000;
        }
    }]);

    function Trampoline() {
        _classCallCheck(this, Trampoline);

        this.callCount = 0;
    }

    _createClass(Trampoline, [{
        key: "incrementAndCheck",
        value: function incrementAndCheck() {
            return this.callCount++ > Trampoline.maxTrampolineCallCount;
        }
    }, {
        key: "hijack",
        value: function hijack(f) {
            this.callCount = 0;
            setTimeout(f, 0);
        }
    }]);

    return Trampoline;
}();
function protectedCont(f) {
    return function (ctx) {
        if (ctx.cancelToken.isCancelled) {
            ctx.onCancel(new OperationCanceledError());
        } else if (ctx.trampoline.incrementAndCheck()) {
            ctx.trampoline.hijack(function () {
                try {
                    f(ctx);
                } catch (err) {
                    ctx.onError(err);
                }
            });
        } else {
            try {
                f(ctx);
            } catch (err) {
                ctx.onError(err);
            }
        }
    };
}
function protectedBind(computation, binder) {
    return protectedCont(function (ctx) {
        computation({
            onSuccess: function onSuccess(x) {
                try {
                    binder(x)(ctx);
                } catch (ex) {
                    ctx.onError(ex);
                }
            },
            onError: ctx.onError,
            onCancel: ctx.onCancel,
            cancelToken: ctx.cancelToken,
            trampoline: ctx.trampoline
        });
    });
}
function protectedReturn(value) {
    return protectedCont(function (ctx) {
        return ctx.onSuccess(value);
    });
}
var AsyncBuilder = function () {
    function AsyncBuilder() {
        _classCallCheck(this, AsyncBuilder);
    }

    _createClass(AsyncBuilder, [{
        key: "Bind",
        value: function Bind(computation, binder) {
            return protectedBind(computation, binder);
        }
    }, {
        key: "Combine",
        value: function Combine(computation1, computation2) {
            return this.Bind(computation1, function () {
                return computation2;
            });
        }
    }, {
        key: "Delay",
        value: function Delay(generator) {
            return protectedCont(function (ctx) {
                return generator()(ctx);
            });
        }
    }, {
        key: "For",
        value: function For(sequence, body) {
            var iter = sequence[Symbol.iterator]();
            var cur = iter.next();
            return this.While(function () {
                return !cur.done;
            }, this.Delay(function () {
                var res = body(cur.value);
                cur = iter.next();
                return res;
            }));
        }
    }, {
        key: "Return",
        value: function Return(value) {
            return protectedReturn(value);
        }
    }, {
        key: "ReturnFrom",
        value: function ReturnFrom(computation) {
            return computation;
        }
    }, {
        key: "TryFinally",
        value: function TryFinally(computation, compensation) {
            return protectedCont(function (ctx) {
                computation({
                    onSuccess: function onSuccess(x) {
                        compensation();
                        ctx.onSuccess(x);
                    },
                    onError: function onError(x) {
                        compensation();
                        ctx.onError(x);
                    },
                    onCancel: function onCancel(x) {
                        compensation();
                        ctx.onCancel(x);
                    },
                    cancelToken: ctx.cancelToken,
                    trampoline: ctx.trampoline
                });
            });
        }
    }, {
        key: "TryWith",
        value: function TryWith(computation, catchHandler) {
            return protectedCont(function (ctx) {
                computation({
                    onSuccess: ctx.onSuccess,
                    onCancel: ctx.onCancel,
                    cancelToken: ctx.cancelToken,
                    trampoline: ctx.trampoline,
                    onError: function onError(ex) {
                        try {
                            catchHandler(ex)(ctx);
                        } catch (ex2) {
                            ctx.onError(ex2);
                        }
                    }
                });
            });
        }
    }, {
        key: "Using",
        value: function Using(resource, binder) {
            return this.TryFinally(binder(resource), function () {
                return resource.Dispose();
            });
        }
    }, {
        key: "While",
        value: function While(guard, computation) {
            var _this2 = this;

            if (guard()) {
                return this.Bind(computation, function () {
                    return _this2.While(guard, computation);
                });
            } else {
                return this.Return(void 0);
            }
        }
    }, {
        key: "Zero",
        value: function Zero() {
            return protectedCont(function (ctx) {
                return ctx.onSuccess(void 0);
            });
        }
    }]);

    return AsyncBuilder;
}();
var singleton = new AsyncBuilder();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return offsetRegex; });
/* harmony export (immutable) */ __webpack_exports__["f"] = padWithZeros;
/* harmony export (immutable) */ __webpack_exports__["e"] = offsetToString;
/* unused harmony export toHalfUTCString */
/* unused harmony export toStringWithOffset */
/* unused harmony export toStringWithKind */
/* harmony export (immutable) */ __webpack_exports__["i"] = toString;
/* unused harmony export default */
/* unused harmony export minValue */
/* unused harmony export maxValue */
/* harmony export (immutable) */ __webpack_exports__["h"] = parseRaw;
/* harmony export (immutable) */ __webpack_exports__["g"] = parse;
/* unused harmony export tryParse */
/* unused harmony export offset */
/* harmony export (immutable) */ __webpack_exports__["b"] = create;
/* unused harmony export now */
/* unused harmony export utcNow */
/* unused harmony export today */
/* unused harmony export isLeapYear */
/* harmony export (immutable) */ __webpack_exports__["c"] = daysInMonth;
/* unused harmony export toUniversalTime */
/* unused harmony export toLocalTime */
/* unused harmony export timeOfDay */
/* unused harmony export date */
/* unused harmony export day */
/* unused harmony export hour */
/* unused harmony export millisecond */
/* unused harmony export minute */
/* unused harmony export month */
/* unused harmony export second */
/* unused harmony export year */
/* unused harmony export dayOfWeek */
/* unused harmony export dayOfYear */
/* unused harmony export add */
/* unused harmony export addDays */
/* unused harmony export addHours */
/* unused harmony export addMinutes */
/* unused harmony export addSeconds */
/* unused harmony export addMilliseconds */
/* unused harmony export addYears */
/* unused harmony export addMonths */
/* unused harmony export subtract */
/* unused harmony export toLongDateString */
/* unused harmony export toShortDateString */
/* unused harmony export toLongTimeString */
/* unused harmony export toShortTimeString */
/* unused harmony export equals */
/* harmony export (immutable) */ __webpack_exports__["a"] = compare;
/* unused harmony export compareTo */
/* unused harmony export op_Addition */
/* unused harmony export op_Subtraction */
/* unused harmony export isDaylightSavingTime */
var offsetRegex = /(?:Z|[+-](\d{2}):?(\d{2})?)$/;
function padWithZeros(i, length) {
    var str = i.toString(10);
    while (str.length < length) {
        str = "0" + str;
    }
    return str;
}
function offsetToString(offset) {
    var isMinus = offset < 0;
    offset = Math.abs(offset);
    var hours = ~~(offset / 3600000);
    var minutes = offset % 3600000 / 60000;
    return (isMinus ? "-" : "+") + padWithZeros(hours, 2) + ":" + padWithZeros(minutes, 2);
}
function toHalfUTCString(date, half) {
    var str = date.toISOString();
    return half === "first" ? str.substring(0, str.indexOf("T")) : str.substring(str.indexOf("T") + 1, str.length - 1);
}
function toISOString(d, utc) {
    if (utc) {
        return d.toISOString();
    } else {
        // JS Date is always local
        var printOffset = d.kind == null ? true : d.kind === 2 /* Local */;
        return padWithZeros(d.getFullYear(), 4) + "-" + padWithZeros(d.getMonth() + 1, 2) + "-" + padWithZeros(d.getDate(), 2) + "T" + padWithZeros(d.getHours(), 2) + ":" + padWithZeros(d.getMinutes(), 2) + ":" + padWithZeros(d.getSeconds(), 2) + "." + padWithZeros(d.getMilliseconds(), 3) + (printOffset ? offsetToString(d.getTimezoneOffset() * -60000) : "");
    }
}
function toISOStringWithOffset(dateWithOffset, offset) {
    var str = dateWithOffset.toISOString();
    return str.substring(0, str.length - 1) + offsetToString(offset);
}
function toStringWithCustomFormat(date, format, utc) {
    return format.replace(/(\w)\1*/g, function (match) {
        var rep = match;
        switch (match.substring(0, 1)) {
            case "y":
                var y = utc ? date.getUTCFullYear() : date.getFullYear();
                rep = match.length < 4 ? y % 100 : y;
                break;
            case "M":
                rep = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
                break;
            case "d":
                rep = utc ? date.getUTCDate() : date.getDate();
                break;
            case "H":
                rep = utc ? date.getUTCHours() : date.getHours();
                break;
            case "h":
                var h = utc ? date.getUTCHours() : date.getHours();
                rep = h > 12 ? h % 12 : h;
                break;
            case "m":
                rep = utc ? date.getUTCMinutes() : date.getMinutes();
                break;
            case "s":
                rep = utc ? date.getUTCSeconds() : date.getSeconds();
                break;
        }
        if (rep !== match && rep < 10 && match.length > 1) {
            rep = "0" + rep;
        }
        return rep;
    });
}
function toStringWithOffset(date, format) {
    var d = new Date(date.getTime() + date.offset);
    if (!format) {
        return d.toISOString().replace(/\.\d+/, "").replace(/[A-Z]|\.\d+/g, " ") + offsetToString(date.offset);
    } else if (format.length === 1) {
        switch (format) {
            case "D":
            case "d":
                return toHalfUTCString(d, "first");
            case "T":
            case "t":
                return toHalfUTCString(d, "second");
            case "O":
            case "o":
                return toISOStringWithOffset(d, date.offset);
            default:
                throw new Error("Unrecognized Date print format");
        }
    } else {
        return toStringWithCustomFormat(d, format, true);
    }
}
function toStringWithKind(date, format) {
    var utc = date.kind === 1 /* UTC */;
    if (!format) {
        return utc ? date.toUTCString() : date.toLocaleString();
    } else if (format.length === 1) {
        switch (format) {
            case "D":
            case "d":
                return utc ? toHalfUTCString(date, "first") : date.toLocaleDateString();
            case "T":
            case "t":
                return utc ? toHalfUTCString(date, "second") : date.toLocaleTimeString();
            case "O":
            case "o":
                return toISOString(date, utc);
            default:
                throw new Error("Unrecognized Date print format");
        }
    } else {
        return toStringWithCustomFormat(date, format, utc);
    }
}
function toString(date, format) {
    return date.offset != null ? toStringWithOffset(date, format) : toStringWithKind(date, format);
}
function DateTime(value, kind) {
    kind = kind == null ? 0 /* Unspecified */ : kind;
    var d = new Date(value);
    d.kind = kind | 0;
    return d;
}
function minValue() {
    // This is "0001-01-01T00:00:00.000Z", actual JS min value is -8640000000000000
    return DateTime(-62135596800000, 0 /* Unspecified */);
}
function maxValue() {
    // This is "9999-12-31T23:59:59.999Z", actual JS max value is 8640000000000000
    return DateTime(253402300799999, 0 /* Unspecified */);
}
function parseRaw(str) {
    var date = new Date(str);
    if (isNaN(date.getTime())) {
        // Check if this is a time-only string, which JS Date parsing cannot handle (see #1045)
        if (/^(?:[01]?\d|2[0-3]):(?:[0-5]?\d)(?::[0-5]?\d(?:\.\d+)?)?(?:\s*[AaPp][Mm])?$/.test(str)) {
            var d = new Date();
            date = new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + " " + str);
        } else {
            throw new Error("The string is not a valid Date.");
        }
    }
    return date;
}
function parse(str) {
    var detectUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var date = parseRaw(str);
    var offset = offsetRegex.exec(str);
    // .NET always parses DateTime as Local if there's offset info (even "Z")
    // Newtonsoft.Json uses UTC if the offset is "Z"
    var kind = offset != null ? detectUTC && offset[0] === "Z" ? 1 /* UTC */ : 2 /* Local */ : 0 /* Unspecified */;
    return DateTime(date.getTime(), kind);
}
function tryParse(v) {
    try {
        return [true, parse(v)];
    } catch (_err) {
        return [false, minValue()];
    }
}
function offset(date) {
    var date1 = date;
    return typeof date1.offset === "number" ? date1.offset : date.kind === 1 /* UTC */
    ? 0 : date.getTimezoneOffset() * -60000;
}
function create(year, month, day) {
    var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var m = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var ms = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var kind = arguments[7];

    var dateValue = kind === 1 /* UTC */
    ? Date.UTC(year, month - 1, day, h, m, s, ms) : new Date(year, month - 1, day, h, m, s, ms).getTime();
    if (isNaN(dateValue)) {
        throw new Error("The parameters describe an unrepresentable Date.");
    }
    var date = DateTime(dateValue, kind);
    if (year <= 99) {
        date.setFullYear(year, month - 1, day);
    }
    return date;
}
function now() {
    return DateTime(Date.now(), 2 /* Local */);
}
function utcNow() {
    return DateTime(Date.now(), 1 /* UTC */);
}
function today() {
    return date(now());
}
function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function daysInMonth(year, month) {
    return month === 2 ? isLeapYear(year) ? 29 : 28 : month >= 8 ? month % 2 === 0 ? 31 : 30 : month % 2 === 0 ? 30 : 31;
}
function toUniversalTime(date) {
    return date.kind === 1 /* UTC */ ? date : DateTime(date.getTime(), 1 /* UTC */);
}
function toLocalTime(date) {
    return date.kind === 2 /* Local */ ? date : DateTime(date.getTime(), 2 /* Local */);
}
function timeOfDay(d) {
    return hour(d) * 3600000 + minute(d) * 60000 + second(d) * 1000 + millisecond(d);
}
function date(d) {
    return create(year(d), month(d), day(d), 0, 0, 0, 0, d.kind);
}
function day(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCDate() : d.getDate();
}
function hour(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCHours() : d.getHours();
}
function millisecond(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCMilliseconds() : d.getMilliseconds();
}
function minute(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCMinutes() : d.getMinutes();
}
function month(d) {
    return (d.kind === 1 /* UTC */ ? d.getUTCMonth() : d.getMonth()) + 1;
}
function second(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCSeconds() : d.getSeconds();
}
function year(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCFullYear() : d.getFullYear();
}
function dayOfWeek(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCDay() : d.getDay();
}
function dayOfYear(d) {
    var _year = year(d);
    var _month = month(d);
    var _day = day(d);
    for (var i = 1; i < _month; i++) {
        _day += daysInMonth(_year, i);
    }
    return _day;
}
function add(d, ts) {
    return DateTime(d.getTime() + ts, d.kind);
}
function addDays(d, v) {
    return DateTime(d.getTime() + v * 86400000, d.kind);
}
function addHours(d, v) {
    return DateTime(d.getTime() + v * 3600000, d.kind);
}
function addMinutes(d, v) {
    return DateTime(d.getTime() + v * 60000, d.kind);
}
function addSeconds(d, v) {
    return DateTime(d.getTime() + v * 1000, d.kind);
}
function addMilliseconds(d, v) {
    return DateTime(d.getTime() + v, d.kind);
}
function addYears(d, v) {
    var newMonth = month(d);
    var newYear = year(d) + v;
    var _daysInMonth = daysInMonth(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function addMonths(d, v) {
    var newMonth = month(d) + v;
    var newMonth_ = 0;
    var yearOffset = 0;
    if (newMonth > 12) {
        newMonth_ = newMonth % 12;
        yearOffset = Math.floor(newMonth / 12);
        newMonth = newMonth_;
    } else if (newMonth < 1) {
        newMonth_ = 12 + newMonth % 12;
        yearOffset = Math.floor(newMonth / 12) + (newMonth_ === 12 ? -1 : 0);
        newMonth = newMonth_;
    }
    var newYear = year(d) + yearOffset;
    var _daysInMonth = daysInMonth(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function subtract(d, that) {
    return typeof that === "number" ? DateTime(d.getTime() - that, d.kind) : d.getTime() - that.getTime();
}
function toLongDateString(d) {
    return d.toDateString();
}
function toShortDateString(d) {
    return d.toLocaleDateString();
}
function toLongTimeString(d) {
    return d.toLocaleTimeString();
}
function toShortTimeString(d) {
    return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
function equals(d1, d2) {
    return d1.getTime() === d2.getTime();
}
function compare(x, y) {
    var xtime = x.getTime();
    var ytime = y.getTime();
    return xtime === ytime ? 0 : xtime < ytime ? -1 : 1;
}
var compareTo = compare;
function op_Addition(x, y) {
    return add(x, y);
}
function op_Subtraction(x, y) {
    return subtract(x, y);
}
function isDaylightSavingTime(x) {
    var jan = new Date(x.getFullYear(), 0, 1);
    var jul = new Date(x.getFullYear(), 6, 1);
    return isDST(jan.getTimezoneOffset(), jul.getTimezoneOffset(), x.getTimezoneOffset());
}
function isDST(janOffset, julOffset, tOffset) {
    return Math.min(janOffset, julOffset) === tOffset;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = groupBy;
/* unused harmony export countBy */
/* unused harmony export MapTree */
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* unused harmony export add */
/* unused harmony export remove */
/* unused harmony export containsValue */
/* unused harmony export tryGetValue */
/* unused harmony export exists */
/* unused harmony export find */
/* unused harmony export tryFind */
/* unused harmony export filter */
/* unused harmony export fold */
/* unused harmony export foldBack */
/* unused harmony export forAll */
/* unused harmony export isEmpty */
/* unused harmony export iterate */
/* unused harmony export map */
/* unused harmony export partition */
/* unused harmony export findKey */
/* unused harmony export tryFindKey */
/* unused harmony export pick */
/* unused harmony export tryPick */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comparer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Option__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Seq__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Util__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }














// ----------------------------------------------
// These functions belong to Seq.ts but are
// implemented here to prevent cyclic dependencies
function groupBy(f, xs) {
    var keys = [];
    var iter = xs[Symbol.iterator]();
    var acc = create();
    var cur = iter.next();
    while (!cur.done) {
        var k = f(cur.value);
        var vs = tryFind(k, acc);
        if (vs == null) {
            keys.push(k);
            acc = add(k, [cur.value], acc);
        } else {
            Object(__WEBPACK_IMPORTED_MODULE_2__Option__["b" /* getValue */])(vs).push(cur.value);
        }
        cur = iter.next();
    }
    return keys.map(function (k) {
        return [k, acc.get(k)];
    });
}
function countBy(f, xs) {
    return groupBy(f, xs).map(function (kv) {
        return [kv[0], kv[1].length];
    });
}
var MapTree = function MapTree(tag, data) {
    _classCallCheck(this, MapTree);

    this.tag = tag | 0;
    this.data = data;
};
function tree_sizeAux(acc, m) {
    sizeAux: while (true) {
        if (m.tag === 1) {
            return acc + 1 | 0;
        } else if (m.tag === 2) {
            acc = tree_sizeAux(acc + 1, m.data[2]);
            m = m.data[3];
            continue sizeAux;
        } else {
            return acc | 0;
        }
    }
}
function tree_size(x) {
    return tree_sizeAux(0, x);
}
function tree_empty() {
    return new MapTree(0);
}
function tree_height(_arg1) {
    return _arg1.tag === 1 ? 1 : _arg1.tag === 2 ? _arg1.data[4] : 0;
}
function tree_isEmpty(m) {
    return m.tag === 0 ? true : false;
}
function tree_mk(l, k, v, r) {
    var matchValue = l.tag === 0 ? r.tag === 0 ? 0 : 1 : 1;
    switch (matchValue) {
        case 0:
            return new MapTree(1, [k, v]);
        case 1:
            var hl = tree_height(l) | 0;
            var hr = tree_height(r) | 0;
            var m = (hl < hr ? hr : hl) | 0;
            return new MapTree(2, [k, v, l, r, m + 1]);
    }
    throw new Error("internal error: Map.tree_mk");
}
function tree_rebalance(t1, k, v, t2) {
    var t1h = tree_height(t1);
    var t2h = tree_height(t2);
    if (t2h > t1h + 2) {
        if (t2.tag === 2) {
            if (tree_height(t2.data[2]) > t1h + 1) {
                if (t2.data[2].tag === 2) {
                    return tree_mk(tree_mk(t1, k, v, t2.data[2].data[2]), t2.data[2].data[0], t2.data[2].data[1], tree_mk(t2.data[2].data[3], t2.data[0], t2.data[1], t2.data[3]));
                } else {
                    throw new Error("rebalance");
                }
            } else {
                return tree_mk(tree_mk(t1, k, v, t2.data[2]), t2.data[0], t2.data[1], t2.data[3]);
            }
        } else {
            throw new Error("rebalance");
        }
    } else {
        if (t1h > t2h + 2) {
            if (t1.tag === 2) {
                if (tree_height(t1.data[3]) > t2h + 1) {
                    if (t1.data[3].tag === 2) {
                        return tree_mk(tree_mk(t1.data[2], t1.data[0], t1.data[1], t1.data[3].data[2]), t1.data[3].data[0], t1.data[3].data[1], tree_mk(t1.data[3].data[3], k, v, t2));
                    } else {
                        throw new Error("rebalance");
                    }
                } else {
                    return tree_mk(t1.data[2], t1.data[0], t1.data[1], tree_mk(t1.data[3], k, v, t2));
                }
            } else {
                throw new Error("rebalance");
            }
        } else {
            return tree_mk(t1, k, v, t2);
        }
    }
}
function tree_add(comparer, k, v, m) {
    if (m.tag === 1) {
        var c = comparer.Compare(k, m.data[0]);
        if (c < 0) {
            return new MapTree(2, [k, v, new MapTree(0), m, 2]);
        } else if (c === 0) {
            return new MapTree(1, [k, v]);
        }
        return new MapTree(2, [k, v, m, new MapTree(0), 2]);
    } else if (m.tag === 2) {
        var _c = comparer.Compare(k, m.data[0]);
        if (_c < 0) {
            return tree_rebalance(tree_add(comparer, k, v, m.data[2]), m.data[0], m.data[1], m.data[3]);
        } else if (_c === 0) {
            return new MapTree(2, [k, v, m.data[2], m.data[3], m.data[4]]);
        }
        return tree_rebalance(m.data[2], m.data[0], m.data[1], tree_add(comparer, k, v, m.data[3]));
    }
    return new MapTree(1, [k, v]);
}
function tree_find(comparer, k, m) {
    var res = tree_tryFind(comparer, k, m);
    if (res == null) {
        throw new Error("key not found: " + k);
    }
    return Object(__WEBPACK_IMPORTED_MODULE_2__Option__["b" /* getValue */])(res);
}
function tree_tryFind(comparer, k, m) {
    tryFind: while (true) {
        if (m.tag === 1) {
            var c = comparer.Compare(k, m.data[0]) | 0;
            if (c === 0) {
                return Object(__WEBPACK_IMPORTED_MODULE_2__Option__["c" /* makeSome */])(m.data[1]);
            } else {
                return null;
            }
        } else if (m.tag === 2) {
            var c_1 = comparer.Compare(k, m.data[0]) | 0;
            if (c_1 < 0) {
                comparer = comparer;
                k = k;
                m = m.data[2];
                continue tryFind;
            } else if (c_1 === 0) {
                return Object(__WEBPACK_IMPORTED_MODULE_2__Option__["c" /* makeSome */])(m.data[1]);
            } else {
                comparer = comparer;
                k = k;
                m = m.data[3];
                continue tryFind;
            }
        } else {
            return null;
        }
    }
}
function tree_partition1(comparer, f, k, v, acc1, acc2) {
    return f(k, v) ? [tree_add(comparer, k, v, acc1), acc2] : [acc1, tree_add(comparer, k, v, acc2)];
}
function tree_partitionAux(comparer, f, s, acc_0, acc_1) {
    var acc = [acc_0, acc_1];
    if (s.tag === 1) {
        return tree_partition1(comparer, f, s.data[0], s.data[1], acc[0], acc[1]);
    } else if (s.tag === 2) {
        var acc_2 = tree_partitionAux(comparer, f, s.data[3], acc[0], acc[1]);
        var acc_3 = tree_partition1(comparer, f, s.data[0], s.data[1], acc_2[0], acc_2[1]);
        return tree_partitionAux(comparer, f, s.data[2], acc_3[0], acc_3[1]);
    }
    return acc;
}
function tree_partition(comparer, f, s) {
    return tree_partitionAux(comparer, f, s, tree_empty(), tree_empty());
}
function tree_filter1(comparer, f, k, v, acc) {
    return f(k, v) ? tree_add(comparer, k, v, acc) : acc;
}
function tree_filterAux(comparer, f, s, acc) {
    return s.tag === 1 ? tree_filter1(comparer, f, s.data[0], s.data[1], acc) : s.tag === 2 ? tree_filterAux(comparer, f, s.data[3], tree_filter1(comparer, f, s.data[0], s.data[1], tree_filterAux(comparer, f, s.data[2], acc))) : acc;
}
function tree_filter(comparer, f, s) {
    return tree_filterAux(comparer, f, s, tree_empty());
}
function tree_spliceOutSuccessor(m) {
    if (m.tag === 1) {
        return [m.data[0], m.data[1], new MapTree(0)];
    } else if (m.tag === 2) {
        if (m.data[2].tag === 0) {
            return [m.data[0], m.data[1], m.data[3]];
        } else {
            var kvl = tree_spliceOutSuccessor(m.data[2]);
            return [kvl[0], kvl[1], tree_mk(kvl[2], m.data[0], m.data[1], m.data[3])];
        }
    }
    throw new Error("internal error: Map.spliceOutSuccessor");
}
function tree_remove(comparer, k, m) {
    if (m.tag === 1) {
        var c = comparer.Compare(k, m.data[0]);
        if (c === 0) {
            return new MapTree(0);
        } else {
            return m;
        }
    } else if (m.tag === 2) {
        var _c2 = comparer.Compare(k, m.data[0]);
        if (_c2 < 0) {
            return tree_rebalance(tree_remove(comparer, k, m.data[2]), m.data[0], m.data[1], m.data[3]);
        } else if (_c2 === 0) {
            if (m.data[2].tag === 0) {
                return m.data[3];
            } else {
                if (m.data[3].tag === 0) {
                    return m.data[2];
                } else {
                    var input = tree_spliceOutSuccessor(m.data[3]);
                    return tree_mk(m.data[2], input[0], input[1], input[2]);
                }
            }
        } else {
            return tree_rebalance(m.data[2], m.data[0], m.data[1], tree_remove(comparer, k, m.data[3]));
        }
    } else {
        return tree_empty();
    }
}
function tree_mem(comparer, k, m) {
    mem: while (true) {
        if (m.tag === 1) {
            return comparer.Compare(k, m.data[0]) === 0;
        } else if (m.tag === 2) {
            var c = comparer.Compare(k, m.data[0]) | 0;
            if (c < 0) {
                comparer = comparer;
                k = k;
                m = m.data[2];
                continue mem;
            } else if (c === 0) {
                return true;
            } else {
                comparer = comparer;
                k = k;
                m = m.data[3];
                continue mem;
            }
        } else {
            return false;
        }
    }
}
function tree_iter(f, m) {
    if (m.tag === 1) {
        f(m.data[0], m.data[1]);
    } else if (m.tag === 2) {
        tree_iter(f, m.data[2]);
        f(m.data[0], m.data[1]);
        tree_iter(f, m.data[3]);
    }
}
function tree_tryPick(f, m) {
    if (m.tag === 1) {
        return f(m.data[0], m.data[1]);
    } else if (m.tag === 2) {
        var matchValue = tree_tryPick(f, m.data[2]);
        if (matchValue == null) {
            var matchValue_1 = f(m.data[0], m.data[1]);
            if (matchValue_1 == null) {
                return tree_tryPick(f, m.data[3]);
            } else {
                var res = matchValue_1;
                return res;
            }
        } else {
            return matchValue;
        }
    } else {
        return null;
    }
}
function tree_exists(f, m) {
    return m.tag === 1 ? f(m.data[0], m.data[1]) : m.tag === 2 ? (tree_exists(f, m.data[2]) ? true : f(m.data[0], m.data[1])) ? true : tree_exists(f, m.data[3]) : false;
}
function tree_forall(f, m) {
    return m.tag === 1 ? f(m.data[0], m.data[1]) : m.tag === 2 ? (tree_forall(f, m.data[2]) ? f(m.data[0], m.data[1]) : false) ? tree_forall(f, m.data[3]) : false : true;
}
function tree_mapi(f, m) {
    return m.tag === 1 ? new MapTree(1, [m.data[0], f(m.data[0], m.data[1])]) : m.tag === 2 ? new MapTree(2, [m.data[0], f(m.data[0], m.data[1]), tree_mapi(f, m.data[2]), tree_mapi(f, m.data[3]), m.data[4]]) : tree_empty();
}
function tree_foldBack(f, m, x) {
    return m.tag === 1 ? f(m.data[0], m.data[1], x) : m.tag === 2 ? tree_foldBack(f, m.data[2], f(m.data[0], m.data[1], tree_foldBack(f, m.data[3], x))) : x;
}
function tree_fold(f, x, m) {
    return m.tag === 1 ? f(x, m.data[0], m.data[1]) : m.tag === 2 ? tree_fold(f, f(tree_fold(f, x, m.data[2]), m.data[0], m.data[1]), m.data[3]) : x;
}
// function tree_foldFromTo(
//     comparer: IComparer<any>, lo: any, hi: any,
//     f: (k:any, v: any, acc: any) => any, m: MapTree, x: any): any {
//   if (m.tag === 1) {
//     var cLoKey = comparer.Compare(lo, m.data[0]);
//     var cKeyHi = comparer.Compare(m.data[0], hi);
//     var x_1 = (cLoKey <= 0 ? cKeyHi <= 0 : false) ? f(m.data[0], m.data[1], x) : x;
//     return x_1;
//   } else if (m.tag === 2) {
//     var cLoKey = comparer.Compare(lo, m.data[0]);
//     var cKeyHi = comparer.Compare(m.data[0], hi);
//     var x_1 = cLoKey < 0 ? tree_foldFromTo(comparer, lo, hi, f, m.data[2], x) : x;
//     var x_2 = (cLoKey <= 0 ? cKeyHi <= 0 : false) ? f(m.data[0], m.data[1], x_1) : x_1;
//     var x_3 = cKeyHi < 0 ? tree_foldFromTo(comparer, lo, hi, f, m.data[3], x_2) : x_2;
//     return x_3;
//   }
//   return x;
// }
// function tree_foldSection(
//     comparer: IComparer<any>, lo: any, hi: any,
//     f: (k: any, v: any, acc: any) => any, m: MapTree, x: any) {
//   return comparer.Compare(lo, hi) === 1 ? x : tree_foldFromTo(comparer, lo, hi, f, m, x);
// }
// function tree_loop(m: MapTree, acc: any): List<[any,any]> {
//   return m.tag === 1
//     ? new List([m.data[0], m.data[1]], acc)
//     : m.tag === 2
//       ? tree_loop(m.data[2], new List([m.data[0], m.data[1]], tree_loop(m.data[3], acc)))
//       : acc;
// }
// function tree_toList(m: MapTree) {
//   return tree_loop(m, new List());
// }
// function tree_toArray(m: MapTree) {
//   return Array.from(tree_toList(m));
// }
// function tree_ofList(comparer: IComparer<any>, l: List<[any,any]>) {
//   return Seq.fold((acc: MapTree, tupledArg: [any, any]) => {
//     return tree_add(comparer, tupledArg[0], tupledArg[1], acc);
//   }, tree_empty(), l);
// }
function tree_mkFromEnumerator(comparer, acc, e) {
    var cur = e.next();
    while (!cur.done) {
        acc = tree_add(comparer, cur.value[0], cur.value[1], acc);
        cur = e.next();
    }
    return acc;
}
// function tree_ofArray(comparer: IComparer<any>, arr: ArrayLike<[any,any]>) {
//   var res = tree_empty();
//   for (var i = 0; i <= arr.length - 1; i++) {
//     res = tree_add(comparer, arr[i][0], arr[i][1], res);
//   }
//   return res;
// }
function tree_ofSeq(comparer, c) {
    var ie = c[Symbol.iterator]();
    return tree_mkFromEnumerator(comparer, tree_empty(), ie);
}
// function tree_copyToArray(s: MapTree, arr: ArrayLike<any>, i: number) {
//   tree_iter((x, y) => { arr[i++] = [x, y]; }, s);
// }
function tree_collapseLHS(stack) {
    if (stack.tail != null) {
        if (stack.head.tag === 1) {
            return stack;
        } else if (stack.head.tag === 2) {
            return tree_collapseLHS(Object(__WEBPACK_IMPORTED_MODULE_1__ListClass__["b" /* ofArray */])([stack.head.data[2], new MapTree(1, [stack.head.data[0], stack.head.data[1]]), stack.head.data[3]], stack.tail));
        } else {
            return tree_collapseLHS(stack.tail);
        }
    } else {
        return new __WEBPACK_IMPORTED_MODULE_1__ListClass__["a" /* default */]();
    }
}
function tree_mkIterator(s) {
    return { stack: tree_collapseLHS(new __WEBPACK_IMPORTED_MODULE_1__ListClass__["a" /* default */](s, new __WEBPACK_IMPORTED_MODULE_1__ListClass__["a" /* default */]())), started: false };
}
function tree_moveNext(i) {
    function current(it) {
        if (it.stack.tail == null) {
            return null;
        } else if (it.stack.head.tag === 1) {
            return [it.stack.head.data[0], it.stack.head.data[1]];
        }
        throw new Error("Please report error: Map iterator, unexpected stack for current");
    }
    if (i.started) {
        if (i.stack.tail == null) {
            return { done: true, value: null };
        } else {
            if (i.stack.head.tag === 1) {
                i.stack = tree_collapseLHS(i.stack.tail);
                return {
                    done: i.stack.tail == null,
                    value: current(i)
                };
            } else {
                throw new Error("Please report error: Map iterator, unexpected stack for moveNext");
            }
        }
    } else {
        i.started = true;
        return {
            done: i.stack.tail == null,
            value: current(i)
        };
    }
}

var FableMap = function () {
    /** Do not call, use Map.create instead. */
    function FableMap() {
        _classCallCheck(this, FableMap);

        return;
    }

    _createClass(FableMap, [{
        key: "ToString",
        value: function ToString() {
            return "map [" + Array.from(this).map(function (x) {
                return Object(__WEBPACK_IMPORTED_MODULE_5__Util__["i" /* toString */])(x);
            }).join("; ") + "]";
        }
    }, {
        key: "Equals",
        value: function Equals(m2) {
            return this.CompareTo(m2) === 0;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(m2) {
            var _this = this;

            return this === m2 ? 0 : Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["b" /* compareWith */])(function (kvp1, kvp2) {
                var c = _this.comparer.Compare(kvp1[0], kvp2[0]);
                return c !== 0 ? c : Object(__WEBPACK_IMPORTED_MODULE_5__Util__["c" /* compare */])(kvp1[1], kvp2[1]);
            }, this, m2);
        }
    }, {
        key: Symbol.iterator,
        value: function value() {
            var i = tree_mkIterator(this.tree);
            return {
                next: function next() {
                    return tree_moveNext(i);
                }
            };
        }
    }, {
        key: "entries",
        value: function entries() {
            return this[Symbol.iterator]();
        }
    }, {
        key: "keys",
        value: function keys() {
            return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["h" /* map */])(function (kv) {
                return kv[0];
            }, this);
        }
    }, {
        key: "values",
        value: function values() {
            return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["h" /* map */])(function (kv) {
                return kv[1];
            }, this);
        }
    }, {
        key: "get",
        value: function get(k) {
            return tree_find(this.comparer, k, this.tree);
        }
    }, {
        key: "has",
        value: function has(k) {
            return tree_mem(this.comparer, k, this.tree);
        }
        /** Mutating method */

    }, {
        key: "set",
        value: function set(k, v) {
            this.tree = tree_add(this.comparer, k, v, this.tree);
        }
        /** Mutating method */

    }, {
        key: "delete",
        value: function _delete(k) {
            // TODO: Is calculating the size twice is more performant than calling tree_mem?
            var oldSize = tree_size(this.tree);
            this.tree = tree_remove(this.comparer, k, this.tree);
            return oldSize > tree_size(this.tree);
        }
        /** Mutating method */

    }, {
        key: "clear",
        value: function clear() {
            this.tree = tree_empty();
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_4__Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Microsoft.FSharp.Collections.FSharpMap",
                interfaces: ["System.IEquatable", "System.IComparable", "System.Collections.Generic.IDictionary"]
            };
        }
    }, {
        key: "size",
        get: function get() {
            return tree_size(this.tree);
        }
    }]);

    return FableMap;
}();

/* harmony default export */ __webpack_exports__["b"] = (FableMap);

function from(comparer, tree) {
    var map = new FableMap();
    map.tree = tree;
    map.comparer = comparer || new __WEBPACK_IMPORTED_MODULE_0__Comparer__["a" /* default */]();
    return map;
}
function create(ie, comparer) {
    comparer = comparer || new __WEBPACK_IMPORTED_MODULE_0__Comparer__["a" /* default */]();
    return from(comparer, ie ? tree_ofSeq(comparer, ie) : tree_empty());
}
function add(k, v, map) {
    return from(map.comparer, tree_add(map.comparer, k, v, map.tree));
}
function remove(item, map) {
    return from(map.comparer, tree_remove(map.comparer, item, map.tree));
}
function containsValue(v, map) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, k) {
        return acc || Object(__WEBPACK_IMPORTED_MODULE_5__Util__["e" /* equals */])(map.get(k), v);
    }, false, map.keys());
}
function tryGetValue(map, key, defaultValue) {
    return map.has(key) ? [true, map.get(key)] : [false, defaultValue];
}
function exists(f, map) {
    return tree_exists(f, map.tree);
}
function find(k, map) {
    return tree_find(map.comparer, k, map.tree);
}
function tryFind(k, map) {
    return tree_tryFind(map.comparer, k, map.tree);
}
function filter(f, map) {
    return from(map.comparer, tree_filter(map.comparer, f, map.tree));
}
function fold(f, seed, map) {
    return tree_fold(f, seed, map.tree);
}
function foldBack(f, map, seed) {
    return tree_foldBack(f, map.tree, seed);
}
function forAll(f, map) {
    return tree_forall(f, map.tree);
}
function isEmpty(map) {
    return tree_isEmpty(map.tree);
}
function iterate(f, map) {
    tree_iter(f, map.tree);
}
function map(f, map) {
    return from(map.comparer, tree_mapi(f, map.tree));
}
function partition(f, map) {
    var rs = tree_partition(map.comparer, f, map.tree);
    return [from(map.comparer, rs[0]), from(map.comparer, rs[1])];
}
function findKey(f, map) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["i" /* pick */])(function (kv) {
        return f(kv[0], kv[1]) ? Object(__WEBPACK_IMPORTED_MODULE_2__Option__["c" /* makeSome */])(kv[0]) : null;
    }, map);
}
function tryFindKey(f, map) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["m" /* tryPick */])(function (kv) {
        return f(kv[0], kv[1]) ? Object(__WEBPACK_IMPORTED_MODULE_2__Option__["c" /* makeSome */])(kv[0]) : null;
    }, map);
}
function pick(f, map) {
    var res = tryPick(f, map);
    if (res != null) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__Option__["b" /* getValue */])(res);
    }
    throw new Error("key not found");
}
function tryPick(f, map) {
    return tree_tryPick(f, map.tree);
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fromEqualityComparer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Comparer = function () {
    function Comparer(f) {
        _classCallCheck(this, Comparer);

        this.Compare = f || __WEBPACK_IMPORTED_MODULE_1__Util__["c" /* compare */];
    }

    _createClass(Comparer, [{
        key: __WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection,
        value: function value() {
            return { interfaces: ["System.IComparer"] };
        }
    }]);

    return Comparer;
}();

/* harmony default export */ __webpack_exports__["a"] = (Comparer);

function fromEqualityComparer(comparer) {
    // Sometimes IEqualityComparer also implements IComparer
    if (typeof comparer.Compare === "function") {
        return new Comparer(comparer.Compare);
    } else {
        return new Comparer(function (x, y) {
            var xhash = comparer.GetHashCode(x);
            var yhash = comparer.GetHashCode(y);
            if (xhash === yhash) {
                return comparer.Equals(x, y) ? 0 : -1;
            } else {
                return xhash < yhash ? -1 : 1;
            }
        });
    }
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export map */
/* unused harmony export mapIndexed */
/* unused harmony export indexed */
/* unused harmony export addRangeInPlace */
/* unused harmony export copyTo */
/* unused harmony export partition */
/* harmony export (immutable) */ __webpack_exports__["b"] = permute;
/* unused harmony export removeInPlace */
/* unused harmony export setSlice */
/* unused harmony export sortInPlaceBy */
/* unused harmony export unzip */
/* unused harmony export unzip3 */
/* harmony export (immutable) */ __webpack_exports__["a"] = chunkBySize;
/* unused harmony export getSubArray */
/* unused harmony export fill */
/* unused harmony export splitAt */
function map(f, source, TargetCons) {
    var target = new TargetCons(source.length);
    for (var i = 0; i < source.length; i++) {
        target[i] = f(source[i]);
    }
    return target;
}
function mapIndexed(f, source, TargetCons) {
    var target = new TargetCons(source.length);
    for (var i = 0; i < source.length; i++) {
        target[i] = f(i, source[i]);
    }
    return target;
}
function indexed(source) {
    return mapIndexed(function (i, x) {
        return [i, x];
    }, source, Array);
}
function addRangeInPlace(range, xs) {
    var iter = range[Symbol.iterator]();
    var cur = iter.next();
    while (!cur.done) {
        xs.push(cur.value);
        cur = iter.next();
    }
}
function copyTo(source, sourceIndex, target, targetIndex, count) {
    while (count--) {
        target[targetIndex++] = source[sourceIndex++];
    }
}
function partition(f, xs) {
    var ys = [];
    var zs = [];
    var j = 0;
    var k = 0;
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i])) {
            ys[j++] = xs[i];
        } else {
            zs[k++] = xs[i];
        }
    }
    return [ys, zs];
}
function permute(f, xs) {
    // Keep the type of the array
    var ys = xs.map(function () {
        return null;
    });
    var checkFlags = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        var j = f(i);
        if (j < 0 || j >= xs.length) {
            throw new Error("Not a valid permutation");
        }
        ys[j] = xs[i];
        checkFlags[j] = 1;
    }
    for (var _i = 0; _i < xs.length; _i++) {
        if (checkFlags[_i] !== 1) {
            throw new Error("Not a valid permutation");
        }
    }
    return ys;
}
function removeInPlace(item, xs) {
    var i = xs.indexOf(item);
    if (i > -1) {
        xs.splice(i, 1);
        return true;
    }
    return false;
}
function setSlice(target, lower, upper, source) {
    var length = (upper || target.length - 1) - lower;
    if (ArrayBuffer.isView(target) && source.length <= length) {
        target.set(source, lower);
    } else {
        for (var i = lower | 0, j = 0; j <= length; i++, j++) {
            target[i] = source[j];
        }
    }
}
function sortInPlaceBy(f, xs) {
    var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return xs.sort(function (x, y) {
        x = f(x);
        y = f(y);
        return (x < y ? -1 : x === y ? 0 : 1) * dir;
    });
}
function unzip(xs) {
    var bs = new Array(xs.length);
    var cs = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        bs[i] = xs[i][0];
        cs[i] = xs[i][1];
    }
    return [bs, cs];
}
function unzip3(xs) {
    var bs = new Array(xs.length);
    var cs = new Array(xs.length);
    var ds = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        bs[i] = xs[i][0];
        cs[i] = xs[i][1];
        ds[i] = xs[i][2];
    }
    return [bs, cs, ds];
}
function chunkBySize(size, xs) {
    if (size < 1) {
        throw new Error("The input must be positive. parameter name: chunkSize");
    }
    if (xs.length === 0) {
        return [[]];
    }
    var result = [];
    // add each chunk to the result
    for (var x = 0; x < Math.ceil(xs.length / size); x++) {
        var start = x * size;
        var end = start + size;
        result.push(xs.slice(start, end));
    }
    return result;
}
function getSubArray(xs, startIndex, count) {
    return xs.slice(startIndex, startIndex + count);
}
function fill(target, targetIndex, count, value) {
    target.fill(value, targetIndex, targetIndex + count);
}
function splitAt(index, xs) {
    if (index < 0) {
        throw new Error("The input must be non-negative.");
    }
    if (index > xs.length) {
        throw new Error("The input sequence has an insufficient number of elements.");
    }
    return [xs.slice(0, index), xs.slice(index)];
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export distinctBy */
/* unused harmony export distinct */
/* unused harmony export SetTree */
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* unused harmony export isEmpty */
/* unused harmony export add */
/* unused harmony export addInPlace */
/* unused harmony export remove */
/* unused harmony export union */
/* unused harmony export op_Addition */
/* unused harmony export unionInPlace */
/* unused harmony export unionMany */
/* unused harmony export difference */
/* unused harmony export op_Subtraction */
/* unused harmony export differenceInPlace */
/* unused harmony export intersect */
/* unused harmony export intersectInPlace */
/* unused harmony export intersectMany */
/* unused harmony export isProperSubsetOf */
/* unused harmony export isProperSubset */
/* unused harmony export isSubsetOf */
/* unused harmony export isSubset */
/* unused harmony export isProperSupersetOf */
/* unused harmony export isProperSuperset */
/* unused harmony export isSupersetOf */
/* unused harmony export isSuperset */
/* unused harmony export copyTo */
/* unused harmony export partition */
/* unused harmony export filter */
/* unused harmony export map */
/* unused harmony export exists */
/* unused harmony export forAll */
/* unused harmony export fold */
/* unused harmony export foldBack */
/* unused harmony export iterate */
/* unused harmony export minimumElement */
/* unused harmony export minElement */
/* unused harmony export maximumElement */
/* unused harmony export maxElement */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comparer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__List__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Seq__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Util__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// tslint:disable:max-line-length












// ----------------------------------------------
// These functions belong to Seq.ts but are
// implemented here to prevent cyclic dependencies
function distinctBy(f, xs) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__Seq__["a" /* choose */])(function (tup) {
        return tup[0];
    }, Object(__WEBPACK_IMPORTED_MODULE_2__Seq__["k" /* scan */])(function (tup, x) {
        var acc = tup[1];
        var k = f(x);
        return acc.has(k) ? [null, acc] : [x, add(k, acc)];
    }, [null, create()], xs));
}
function distinct(xs) {
    return distinctBy(function (x) {
        return x;
    }, xs);
}
var SetTree = function SetTree(tag, data) {
    _classCallCheck(this, SetTree);

    this.tag = tag | 0;
    this.data = data;
};
var tree_tolerance = 2;
function tree_countAux(s, acc) {
    countAux: while (true) {
        if (s.tag === 1) {
            return acc + 1 | 0;
        } else if (s.tag === 0) {
            return acc | 0;
        } else {
            var _var5 = s.data[1];
            acc = tree_countAux(s.data[2], acc + 1);
            s = _var5;
            continue countAux;
        }
    }
}
function tree_count(s) {
    return tree_countAux(s, 0);
}
function tree_SetOne(n) {
    return new SetTree(1, [n]);
}
function tree_SetNode(x, l, r, h) {
    return new SetTree(2, [x, l, r, h]);
}
function tree_height(t) {
    return t.tag === 1 ? 1 : t.tag === 2 ? t.data[3] : 0;
}
function tree_mk(l, k, r) {
    var matchValue = l.tag === 0 ? r.tag === 0 ? 0 : 1 : 1;
    switch (matchValue) {
        case 0:
            return tree_SetOne(k);
        case 1:
            var hl = tree_height(l) | 0;
            var hr = tree_height(r) | 0;
            var m = (hl < hr ? hr : hl) | 0;
            return tree_SetNode(k, l, r, m + 1);
    }
    throw new Error("internal error: Set.tree_mk");
}
function tree_rebalance(t1, k, t2) {
    var t1h = tree_height(t1);
    var t2h = tree_height(t2);
    if (t2h > t1h + tree_tolerance) {
        if (t2.tag === 2) {
            if (tree_height(t2.data[1]) > t1h + 1) {
                if (t2.data[1].tag === 2) {
                    return tree_mk(tree_mk(t1, k, t2.data[1].data[1]), t2.data[1].data[0], tree_mk(t2.data[1].data[2], t2.data[0], t2.data[2]));
                } else {
                    throw new Error("rebalance");
                }
            } else {
                return tree_mk(tree_mk(t1, k, t2.data[1]), t2.data[0], t2.data[2]);
            }
        } else {
            throw new Error("rebalance");
        }
    } else {
        if (t1h > t2h + tree_tolerance) {
            if (t1.tag === 2) {
                if (tree_height(t1.data[2]) > t2h + 1) {
                    if (t1.data[2].tag === 2) {
                        return tree_mk(tree_mk(t1.data[1], t1.data[0], t1.data[2].data[1]), t1.data[2].data[0], tree_mk(t1.data[2].data[2], k, t2));
                    } else {
                        throw new Error("rebalance");
                    }
                } else {
                    return tree_mk(t1.data[1], t1.data[0], tree_mk(t1.data[2], k, t2));
                }
            } else {
                throw new Error("rebalance");
            }
        } else {
            return tree_mk(t1, k, t2);
        }
    }
}
function tree_add(comparer, k, t) {
    if (t.tag === 1) {
        var c = comparer.Compare(k, t.data[0]);
        if (c < 0) {
            return tree_SetNode(k, new SetTree(0), t, 2);
        } else if (c === 0) {
            return t;
        } else {
            return tree_SetNode(k, t, new SetTree(0), 2);
        }
    } else if (t.tag === 0) {
        return tree_SetOne(k);
    } else {
        var _c = comparer.Compare(k, t.data[0]);
        if (_c < 0) {
            return tree_rebalance(tree_add(comparer, k, t.data[1]), t.data[0], t.data[2]);
        } else if (_c === 0) {
            return t;
        } else {
            return tree_rebalance(t.data[1], t.data[0], tree_add(comparer, k, t.data[2]));
        }
    }
}
function tree_balance(comparer, t1, k, t2) {
    var matchValue = t1.tag === 1 ? t2.tag === 0 ? [1, t1] : t2.tag === 1 ? [2, t1.data[0], t2] : [2, t1.data[0], t2] : t1.tag === 2 ? t2.tag === 1 ? [3, t2.data[0], t1] : t2.tag === 2 ? [4, t1.data[3], t2.data[3], t1.data[0], t2.data[0], t1.data[1], t1.data[2], t2.data[1], t2.data[2]] : [1, t1] : [0, t2];
    switch (matchValue[0]) {
        case 0:
            return tree_add(comparer, k, matchValue[1]);
        case 1:
            return tree_add(comparer, k, matchValue[1]);
        case 2:
            return tree_add(comparer, k, tree_add(comparer, matchValue[1], matchValue[2]));
        case 3:
            return tree_add(comparer, k, tree_add(comparer, matchValue[1], matchValue[2]));
        case 4:
            if (matchValue[1] + tree_tolerance < matchValue[2]) {
                return tree_rebalance(tree_balance(comparer, t1, k, matchValue[7]), matchValue[4], matchValue[8]);
            } else if (matchValue[2] + tree_tolerance < matchValue[1]) {
                return tree_rebalance(matchValue[5], matchValue[3], tree_balance(comparer, matchValue[6], k, t2));
            } else {
                return tree_mk(t1, k, t2);
            }
    }
    throw new Error("internal error: Set.tree_balance");
}
function tree_split(comparer, pivot, t) {
    if (t.tag === 1) {
        var c = comparer.Compare(t.data[0], pivot);
        if (c < 0) {
            return [t, false, new SetTree(0)];
        } else if (c === 0) {
            return [new SetTree(0), true, new SetTree(0)];
        } else {
            return [new SetTree(0), false, t];
        }
    } else if (t.tag === 0) {
        return [new SetTree(0), false, new SetTree(0)];
    } else {
        var _c2 = comparer.Compare(pivot, t.data[0]);
        if (_c2 < 0) {
            var patternInput = tree_split(comparer, pivot, t.data[1]);
            return [patternInput[0], patternInput[1], tree_balance(comparer, patternInput[2], t.data[0], t.data[2])];
        } else if (_c2 === 0) {
            return [t.data[1], true, t.data[2]];
        } else {
            var _patternInput = tree_split(comparer, pivot, t.data[2]);
            return [tree_balance(comparer, t.data[1], t.data[0], _patternInput[0]), _patternInput[1], _patternInput[2]];
        }
    }
}
function tree_spliceOutSuccessor(t) {
    if (t.tag === 1) {
        return [t.data[0], new SetTree(0)];
    } else if (t.tag === 2) {
        if (t.data[1].tag === 0) {
            return [t.data[0], t.data[2]];
        } else {
            var patternInput = tree_spliceOutSuccessor(t.data[1]);
            return [patternInput[0], tree_mk(patternInput[1], t.data[0], t.data[2])];
        }
    } else {
        throw new Error("internal error: Map.spliceOutSuccessor");
    }
}
function tree_remove(comparer, k, t) {
    if (t.tag === 1) {
        var c = comparer.Compare(k, t.data[0]);
        if (c === 0) {
            return new SetTree(0);
        } else {
            return t;
        }
    } else if (t.tag === 2) {
        var _c3 = comparer.Compare(k, t.data[0]);
        if (_c3 < 0) {
            return tree_rebalance(tree_remove(comparer, k, t.data[1]), t.data[0], t.data[2]);
        } else if (_c3 === 0) {
            var matchValue = [t.data[1], t.data[2]];
            if (matchValue[0].tag === 0) {
                return t.data[2];
            } else if (matchValue[1].tag === 0) {
                return t.data[1];
            } else {
                var patternInput = tree_spliceOutSuccessor(t.data[2]);
                return tree_mk(t.data[1], patternInput[0], patternInput[1]);
            }
        } else {
            return tree_rebalance(t.data[1], t.data[0], tree_remove(comparer, k, t.data[2]));
        }
    } else {
        return t;
    }
}
function tree_mem(comparer, k, t) {
    mem: while (true) {
        if (t.tag === 1) {
            return comparer.Compare(k, t.data[0]) === 0;
        } else if (t.tag === 0) {
            return false;
        } else {
            var c = comparer.Compare(k, t.data[0]) | 0;
            if (c < 0) {
                comparer = comparer;
                k = k;
                t = t.data[1];
                continue mem;
            } else if (c === 0) {
                return true;
            } else {
                comparer = comparer;
                k = k;
                t = t.data[2];
                continue mem;
            }
        }
    }
}
function tree_iter(f, t) {
    if (t.tag === 1) {
        f(t.data[0]);
    } else if (t.tag !== 0) {
        tree_iter(f, t.data[1]);
        f(t.data[0]);
        tree_iter(f, t.data[2]);
    }
}
function tree_foldBack(f, m, x) {
    return m.tag === 1 ? f(m.data[0], x) : m.tag === 0 ? x : tree_foldBack(f, m.data[1], f(m.data[0], tree_foldBack(f, m.data[2], x)));
}
function tree_fold(f, x, m) {
    if (m.tag === 1) {
        return f(x, m.data[0]);
    } else if (m.tag === 0) {
        return x;
    } else {
        var x_1 = tree_fold(f, x, m.data[1]);
        var x_2 = f(x_1, m.data[0]);
        return tree_fold(f, x_2, m.data[2]);
    }
}
function tree_forall(f, m) {
    return m.tag === 1 ? f(m.data[0]) : m.tag === 0 ? true : (f(m.data[0]) ? tree_forall(f, m.data[1]) : false) ? tree_forall(f, m.data[2]) : false;
}
function tree_exists(f, m) {
    return m.tag === 1 ? f(m.data[0]) : m.tag === 0 ? false : (f(m.data[0]) ? true : tree_exists(f, m.data[1])) ? true : tree_exists(f, m.data[2]);
}
function tree_isEmpty(m) {
    return m.tag === 0 ? true : false;
}
function tree_subset(comparer, a, b) {
    return tree_forall(function (x) {
        return tree_mem(comparer, x, b);
    }, a);
}
function tree_psubset(comparer, a, b) {
    return tree_forall(function (x) {
        return tree_mem(comparer, x, b);
    }, a) ? tree_exists(function (x) {
        return !tree_mem(comparer, x, a);
    }, b) : false;
}
function tree_filterAux(comparer, f, s, acc) {
    if (s.tag === 1) {
        if (f(s.data[0])) {
            return tree_add(comparer, s.data[0], acc);
        } else {
            return acc;
        }
    } else if (s.tag === 0) {
        return acc;
    } else {
        var acc_1 = f(s.data[0]) ? tree_add(comparer, s.data[0], acc) : acc;
        return tree_filterAux(comparer, f, s.data[1], tree_filterAux(comparer, f, s.data[2], acc_1));
    }
}
function tree_filter(comparer, f, s) {
    return tree_filterAux(comparer, f, s, new SetTree(0));
}
function tree_diffAux(comparer, m, acc) {
    diffAux: while (true) {
        if (m.tag === 1) {
            return tree_remove(comparer, m.data[0], acc);
        } else if (m.tag === 0) {
            return acc;
        } else {
            var _var6 = comparer;
            var _var7 = m.data[1];
            acc = tree_diffAux(comparer, m.data[2], tree_remove(comparer, m.data[0], acc));
            comparer = _var6;
            m = _var7;
            continue diffAux;
        }
    }
}
function tree_diff(comparer, a, b) {
    return tree_diffAux(comparer, b, a);
}
function tree_union(comparer, t1, t2) {
    var matchValue = t1.tag === 0 ? [1, t2] : t1.tag === 1 ? t2.tag === 0 ? [2, t1] : t2.tag === 1 ? [3, t1.data[0], t2] : [3, t1.data[0], t2] : t2.tag === 0 ? [2, t1] : t2.tag === 1 ? [4, t2.data[0], t1] : [0, t1.data[3], t2.data[3], t1.data[0], t2.data[0], t1.data[1], t1.data[2], t2.data[1], t2.data[2]];
    switch (matchValue[0]) {
        case 0:
            if (matchValue[1] > matchValue[2]) {
                var patternInput = tree_split(comparer, matchValue[3], t2);
                return tree_balance(comparer, tree_union(comparer, matchValue[5], patternInput[0]), matchValue[3], tree_union(comparer, matchValue[6], patternInput[2]));
            } else {
                var patternInput_1 = tree_split(comparer, matchValue[4], t1);
                return tree_balance(comparer, tree_union(comparer, matchValue[7], patternInput_1[0]), matchValue[4], tree_union(comparer, matchValue[8], patternInput_1[2]));
            }
        case 1:
            return matchValue[1];
        case 2:
            return matchValue[1];
        case 3:
            return tree_add(comparer, matchValue[1], matchValue[2]);
        case 4:
            return tree_add(comparer, matchValue[1], matchValue[2]);
    }
    throw new Error("internal error: Set.tree_union");
}
function tree_intersectionAux(comparer, b, m, acc) {
    intersectionAux: while (true) {
        if (m.tag === 1) {
            if (tree_mem(comparer, m.data[0], b)) {
                return tree_add(comparer, m.data[0], acc);
            } else {
                return acc;
            }
        } else if (m.tag === 0) {
            return acc;
        } else {
            var acc_1 = tree_intersectionAux(comparer, b, m.data[2], acc);
            var acc_2 = tree_mem(comparer, m.data[0], b) ? tree_add(comparer, m.data[0], acc_1) : acc_1;
            comparer = comparer;
            b = b;
            m = m.data[1];
            acc = acc_2;
            continue intersectionAux;
        }
    }
}
function tree_intersection(comparer, a, b) {
    return tree_intersectionAux(comparer, b, a, new SetTree(0));
}
function tree_partition1(comparer, f, k, acc1, acc2) {
    return f(k) ? [tree_add(comparer, k, acc1), acc2] : [acc1, tree_add(comparer, k, acc2)];
}
function tree_partitionAux(comparer, f, s, acc_0, acc_1) {
    var acc = [acc_0, acc_1];
    if (s.tag === 1) {
        return tree_partition1(comparer, f, s.data[0], acc[0], acc[1]);
    } else if (s.tag === 0) {
        return acc;
    } else {
        var acc_2 = tree_partitionAux(comparer, f, s.data[2], acc[0], acc[1]);
        var acc_3 = tree_partition1(comparer, f, s.data[0], acc_2[0], acc_2[1]);
        return tree_partitionAux(comparer, f, s.data[1], acc_3[0], acc_3[1]);
    }
}
function tree_partition(comparer, f, s) {
    return tree_partitionAux(comparer, f, s, new SetTree(0), new SetTree(0));
}
// function tree_$MatchSetNode$MatchSetEmpty$(s: SetTree) {
//   return s.tag === 1 ? new Choice("Choice1Of2", [[s.data[0], new SetTree(0), new SetTree(0)]]) : s.tag === 0 ? new Choice("Choice2Of2", [null]) : new Choice("Choice1Of2", [[s.data[0], s.data[1], s.data[2]]]);
// }
function tree_minimumElementAux(s, n) {
    return s.tag === 1 ? s.data[0] : s.tag === 0 ? n : tree_minimumElementAux(s.data[1], s.data[0]);
}
function tree_minimumElementOpt(s) {
    return s.tag === 1 ? s.data[0] : s.tag === 0 ? null : tree_minimumElementAux(s.data[1], s.data[0]);
}
function tree_maximumElementAux(s, n) {
    return s.tag === 1 ? s.data[0] : s.tag === 0 ? n : tree_maximumElementAux(s.data[2], s.data[0]);
}
function tree_maximumElementOpt(s) {
    return s.tag === 1 ? s.data[0] : s.tag === 0 ? null : tree_maximumElementAux(s.data[2], s.data[0]);
}
function tree_minimumElement(s) {
    var matchValue = tree_minimumElementOpt(s);
    if (matchValue == null) {
        throw new Error("Set contains no elements");
    } else {
        return matchValue;
    }
}
function tree_maximumElement(s) {
    var matchValue = tree_maximumElementOpt(s);
    if (matchValue == null) {
        throw new Error("Set contains no elements");
    } else {
        return matchValue;
    }
}
function tree_collapseLHS(stack) {
    collapseLHS: while (true) {
        if (stack.tail != null) {
            if (stack.head.tag === 1) {
                return stack;
            } else if (stack.head.tag === 2) {
                stack = Object(__WEBPACK_IMPORTED_MODULE_1__List__["b" /* ofArray */])([stack.head.data[1], tree_SetOne(stack.head.data[0]), stack.head.data[2]], stack.tail);
                continue collapseLHS;
            } else {
                stack = stack.tail;
                continue collapseLHS;
            }
        } else {
            return new __WEBPACK_IMPORTED_MODULE_1__List__["a" /* default */]();
        }
    }
}
function tree_mkIterator(s) {
    return { stack: tree_collapseLHS(new __WEBPACK_IMPORTED_MODULE_1__List__["a" /* default */](s, new __WEBPACK_IMPORTED_MODULE_1__List__["a" /* default */]())), started: false };
}
// function tree_notStarted() {
//   throw new Error("Enumeration not started");
// };
// var alreadyFinished = $exports.alreadyFinished = function () {
//   throw new Error("Enumeration already started");
// };
function tree_moveNext(i) {
    function current(it) {
        if (it.stack.tail == null) {
            return null;
        } else if (it.stack.head.tag === 1) {
            return it.stack.head.data[0];
        }
        throw new Error("Please report error: Set iterator, unexpected stack for current");
    }
    if (i.started) {
        if (i.stack.tail == null) {
            return { done: true, value: null };
        } else {
            if (i.stack.head.tag === 1) {
                i.stack = tree_collapseLHS(i.stack.tail);
                return {
                    done: i.stack.tail == null,
                    value: current(i)
                };
            } else {
                throw new Error("Please report error: Set iterator, unexpected stack for moveNext");
            }
        }
    } else {
        i.started = true;
        return {
            done: i.stack.tail == null,
            value: current(i)
        };
    }
}
function tree_compareStacks(comparer, l1, l2) {
    compareStacks: while (true) {
        var matchValue = l1.tail != null ? l2.tail != null ? l2.head.tag === 1 ? l1.head.tag === 1 ? [4, l1.head.data[0], l2.head.data[0], l1.tail, l2.tail] : l1.head.tag === 2 ? l1.head.data[1].tag === 0 ? [6, l1.head.data[1], l1.head.data[0], l1.head.data[2], l2.head.data[0], l1.tail, l2.tail] : [9, l1.head.data[0], l1.head.data[1], l1.head.data[2], l1.tail] : [10, l2.head.data[0], l2.tail] : l2.head.tag === 2 ? l2.head.data[1].tag === 0 ? l1.head.tag === 1 ? [5, l1.head.data[0], l2.head.data[0], l2.head.data[2], l1.tail, l2.tail] : l1.head.tag === 2 ? l1.head.data[1].tag === 0 ? [7, l1.head.data[0], l1.head.data[2], l2.head.data[0], l2.head.data[2], l1.tail, l2.tail] : [9, l1.head.data[0], l1.head.data[1], l1.head.data[2], l1.tail] : [11, l2.head.data[0], l2.head.data[1], l2.head.data[2], l2.tail] : l1.head.tag === 1 ? [8, l1.head.data[0], l1.tail] : l1.head.tag === 2 ? [9, l1.head.data[0], l1.head.data[1], l1.head.data[2], l1.tail] : [11, l2.head.data[0], l2.head.data[1], l2.head.data[2], l2.tail] : l1.head.tag === 1 ? [8, l1.head.data[0], l1.tail] : l1.head.tag === 2 ? [9, l1.head.data[0], l1.head.data[1], l1.head.data[2], l1.tail] : [3, l1.tail, l2.tail] : [2] : l2.tail != null ? [1] : [0];
        switch (matchValue[0]) {
            case 0:
                return 0;
            case 1:
                return -1;
            case 2:
                return 1;
            case 3:
                comparer = comparer;
                l1 = matchValue[1];
                l2 = matchValue[2];
                continue compareStacks;
            case 4:
                var c = comparer.Compare(matchValue[1], matchValue[2]) | 0;
                if (c !== 0) {
                    return c | 0;
                } else {
                    comparer = comparer;
                    l1 = matchValue[3];
                    l2 = matchValue[4];
                    continue compareStacks;
                }
            case 5:
                var c_1 = comparer.Compare(matchValue[1], matchValue[2]) | 0;
                if (c_1 !== 0) {
                    return c_1 | 0;
                } else {
                    comparer = comparer;
                    l1 = new __WEBPACK_IMPORTED_MODULE_1__List__["a" /* default */](new SetTree(0), matchValue[4]);
                    l2 = new __WEBPACK_IMPORTED_MODULE_1__List__["a" /* default */](matchValue[3], matchValue[5]);
                    continue compareStacks;
                }
            case 6:
                var c_2 = comparer.Compare(matchValue[2], matchValue[4]) | 0;
                if (c_2 !== 0) {
                    return c_2 | 0;
                } else {
                    comparer = comparer;
                    l1 = new __WEBPACK_IMPORTED_MODULE_1__List__["a" /* default */](matchValue[3], matchValue[5]);
                    l2 = new __WEBPACK_IMPORTED_MODULE_1__List__["a" /* default */](matchValue[1], matchValue[6]);
                    continue compareStacks;
                }
            case 7:
                var c_3 = comparer.Compare(matchValue[1], matchValue[3]) | 0;
                if (c_3 !== 0) {
                    return c_3 | 0;
                } else {
                    comparer = comparer;
                    l1 = new __WEBPACK_IMPORTED_MODULE_1__List__["a" /* default */](matchValue[2], matchValue[5]);
                    l2 = new __WEBPACK_IMPORTED_MODULE_1__List__["a" /* default */](matchValue[4], matchValue[6]);
                    continue compareStacks;
                }
            case 8:
                comparer = comparer;
                l1 = Object(__WEBPACK_IMPORTED_MODULE_1__List__["b" /* ofArray */])([new SetTree(0), tree_SetOne(matchValue[1])], matchValue[2]);
                l2 = l2;
                continue compareStacks;
            case 9:
                comparer = comparer;
                l1 = Object(__WEBPACK_IMPORTED_MODULE_1__List__["b" /* ofArray */])([matchValue[2], tree_SetNode(matchValue[1], new SetTree(0), matchValue[3], 0)], matchValue[4]);
                l2 = l2;
                continue compareStacks;
            case 10:
                comparer = comparer;
                l1 = l1;
                l2 = Object(__WEBPACK_IMPORTED_MODULE_1__List__["b" /* ofArray */])([new SetTree(0), tree_SetOne(matchValue[1])], matchValue[2]);
                continue compareStacks;
            case 11:
                comparer = comparer;
                l1 = l1;
                l2 = Object(__WEBPACK_IMPORTED_MODULE_1__List__["b" /* ofArray */])([matchValue[2], tree_SetNode(matchValue[1], new SetTree(0), matchValue[3], 0)], matchValue[4]);
                continue compareStacks;
        }
    }
}
function tree_compare(comparer, s1, s2) {
    if (s1.tag === 0) {
        return s2.tag === 0 ? 0 : -1;
    } else {
        return s2.tag === 0 ? 1 : tree_compareStacks(comparer, Object(__WEBPACK_IMPORTED_MODULE_1__List__["b" /* ofArray */])([s1]), Object(__WEBPACK_IMPORTED_MODULE_1__List__["b" /* ofArray */])([s2]));
    }
}
function tree_mkFromEnumerator(comparer, acc, e) {
    var cur = e.next();
    while (!cur.done) {
        acc = tree_add(comparer, cur.value, acc);
        cur = e.next();
    }
    return acc;
}
function tree_ofSeq(comparer, c) {
    var ie = c[Symbol.iterator]();
    return tree_mkFromEnumerator(comparer, new SetTree(0), ie);
}

var FableSet = function () {
    /** Do not call, use Set.create instead. */
    function FableSet() {
        _classCallCheck(this, FableSet);

        return;
    }

    _createClass(FableSet, [{
        key: "ToString",
        value: function ToString() {
            return "set [" + Array.from(this).map(function (x) {
                return Object(__WEBPACK_IMPORTED_MODULE_4__Util__["i" /* toString */])(x);
            }).join("; ") + "]";
        }
    }, {
        key: "Equals",
        value: function Equals(s2) {
            return this.CompareTo(s2) === 0;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(s2) {
            return this === s2 ? 0 : tree_compare(this.comparer, this.tree, s2.tree);
        }
    }, {
        key: Symbol.iterator,
        value: function value() {
            var i = tree_mkIterator(this.tree);
            return {
                next: function next() {
                    return tree_moveNext(i);
                }
            };
        }
    }, {
        key: "values",
        value: function values() {
            return this[Symbol.iterator]();
        }
    }, {
        key: "has",
        value: function has(v) {
            return tree_mem(this.comparer, v, this.tree);
        }
        /** Mutating method */

    }, {
        key: "add",
        value: function add(v) {
            this.tree = tree_add(this.comparer, v, this.tree);
            return this;
        }
        /** Mutating method */

    }, {
        key: "delete",
        value: function _delete(v) {
            // TODO: Is calculating the size twice is more performant than calling tree_mem?
            var oldSize = tree_count(this.tree);
            this.tree = tree_remove(this.comparer, v, this.tree);
            return oldSize > tree_count(this.tree);
        }
        /** Mutating method */

    }, {
        key: "clear",
        value: function clear() {
            this.tree = new SetTree(0);
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_3__Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Microsoft.FSharp.Collections.FSharpSet",
                interfaces: ["System.IEquatable", "System.IComparable"]
            };
        }
    }, {
        key: "size",
        get: function get() {
            return tree_count(this.tree);
        }
    }]);

    return FableSet;
}();

/* harmony default export */ __webpack_exports__["b"] = (FableSet);

function from(comparer, tree) {
    var s = new FableSet();
    s.tree = tree;
    s.comparer = comparer || new __WEBPACK_IMPORTED_MODULE_0__Comparer__["a" /* default */]();
    return s;
}
function create(ie, comparer) {
    comparer = comparer || new __WEBPACK_IMPORTED_MODULE_0__Comparer__["a" /* default */]();
    return from(comparer, ie ? tree_ofSeq(comparer, ie) : new SetTree(0));
}
function isEmpty(s) {
    return tree_isEmpty(s.tree);
}
function add(item, s) {
    return from(s.comparer, tree_add(s.comparer, item, s.tree));
}
function addInPlace(item, s) {
    return s.has(item) ? false : (s.add(item), true);
}
function remove(item, s) {
    return from(s.comparer, tree_remove(s.comparer, item, s.tree));
}
function union(set1, set2) {
    return set2.tree.tag === 0 ? set1 : set1.tree.tag === 0 ? set2 : from(set1.comparer, tree_union(set1.comparer, set1.tree, set2.tree));
}
function op_Addition(set1, set2) {
    return union(set1, set2);
}
function unionInPlace(set1, set2) {
    Object(__WEBPACK_IMPORTED_MODULE_2__Seq__["g" /* iterate */])(function (x) {
        set1.add(x);
    }, set2);
}
function unionMany(sets) {
    // Pass args as union(s, acc) instead of union(acc, s)
    // to discard the comparer of the first empty set
    return Object(__WEBPACK_IMPORTED_MODULE_2__Seq__["d" /* fold */])(function (acc, s) {
        return union(s, acc);
    }, create(), sets);
}
function difference(set1, set2) {
    return set1.tree.tag === 0 ? set1 : set2.tree.tag === 0 ? set1 : from(set1.comparer, tree_diff(set1.comparer, set1.tree, set2.tree));
}
function op_Subtraction(set1, set2) {
    return difference(set1, set2);
}
function differenceInPlace(set1, set2) {
    Object(__WEBPACK_IMPORTED_MODULE_2__Seq__["g" /* iterate */])(function (x) {
        set1.delete(x);
    }, set2);
}
function intersect(set1, set2) {
    return set2.tree.tag === 0 ? set2 : set1.tree.tag === 0 ? set1 : from(set1.comparer, tree_intersection(set1.comparer, set1.tree, set2.tree));
}
function intersectInPlace(set1, set2) {
    var set2_ = set2 instanceof Set ? set2 : new Set(set2);
    Object(__WEBPACK_IMPORTED_MODULE_2__Seq__["g" /* iterate */])(function (x) {
        if (!set2_.has(x)) {
            set1.delete(x);
        }
    }, set1);
}
function intersectMany(sets) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__Seq__["j" /* reduce */])(function (s1, s2) {
        return intersect(s1, s2);
    }, sets);
}
function isProperSubsetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_psubset(set1.comparer, set1.tree, set2.tree);
    } else {
        set2 = set2 instanceof Set ? set2 : new Set(set2);
        return Object(__WEBPACK_IMPORTED_MODULE_2__Seq__["f" /* forAll */])(function (x) {
            return set2.has(x);
        }, set1) && Object(__WEBPACK_IMPORTED_MODULE_2__Seq__["c" /* exists */])(function (x) {
            return !set1.has(x);
        }, set2);
    }
}
function isProperSubset(set1, set2) {
    return isProperSubsetOf(set1, set2);
}
function isSubsetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_subset(set1.comparer, set1.tree, set2.tree);
    } else {
        set2 = set2 instanceof Set ? set2 : new Set(set2);
        return Object(__WEBPACK_IMPORTED_MODULE_2__Seq__["f" /* forAll */])(function (x) {
            return set2.has(x);
        }, set1);
    }
}
function isSubset(set1, set2) {
    return isSubsetOf(set1, set2);
}
function isProperSupersetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_psubset(set1.comparer, set2.tree, set1.tree);
    } else {
        return isProperSubset(set2 instanceof Set ? set2 : new Set(set2), set1);
    }
}
function isProperSuperset(set1, set2) {
    return isProperSupersetOf(set1, set2);
}
function isSupersetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_subset(set1.comparer, set2.tree, set1.tree);
    } else {
        return isSubset(set2 instanceof Set ? set2 : new Set(set2), set1);
    }
}
function isSuperset(set1, set2) {
    return isSupersetOf(set1, set2);
}
function copyTo(xs, arr, arrayIndex, count) {
    if (!Array.isArray(arr) && !ArrayBuffer.isView(arr)) {
        throw new Error("Array is invalid");
    }
    count = count || arr.length;
    var i = arrayIndex || 0;
    var iter = xs[Symbol.iterator]();
    while (count--) {
        var el = iter.next();
        if (el.done) {
            break;
        }
        arr[i++] = el.value;
    }
}
function partition(f, s) {
    if (s.tree.tag === 0) {
        return [s, s];
    } else {
        var tuple = tree_partition(s.comparer, f, s.tree);
        return [from(s.comparer, tuple[0]), from(s.comparer, tuple[1])];
    }
}
function filter(f, s) {
    if (s.tree.tag === 0) {
        return s;
    } else {
        return from(s.comparer, tree_filter(s.comparer, f, s.tree));
    }
}
function map(f, s) {
    var comparer = new __WEBPACK_IMPORTED_MODULE_0__Comparer__["a" /* default */]();
    return from(comparer, tree_fold(function (acc, k) {
        return tree_add(comparer, f(k), acc);
    }, new SetTree(0), s.tree));
}
function exists(f, s) {
    return tree_exists(f, s.tree);
}
function forAll(f, s) {
    return tree_forall(f, s.tree);
}
function fold(f, seed, s) {
    return tree_fold(f, seed, s.tree);
}
function foldBack(f, s, seed) {
    return tree_foldBack(f, s.tree, seed);
}
function iterate(f, s) {
    tree_iter(f, s.tree);
}
function minimumElement(s) {
    return tree_minimumElement(s.tree);
}
function minElement(s) {
    return tree_minimumElement(s.tree);
}
function maximumElement(s) {
    return tree_maximumElement(s.tree);
}
function maxElement(s) {
    return tree_maximumElement(s.tree);
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = choice1Of2;
/* harmony export (immutable) */ __webpack_exports__["b"] = choice2Of2;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




function choice1Of2(v) {
    return new Choice(0, v);
}
function choice2Of2(v) {
    return new Choice(1, v);
}

var Choice = function () {
    function Choice(tag, data) {
        _classCallCheck(this, Choice);

        this.tag = tag | 0;
        this.data = data;
    }

    _createClass(Choice, [{
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__Util__["f" /* equalsUnions */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__Util__["d" /* compareUnions */])(this, other);
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Microsoft.FSharp.Core.FSharpChoice",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["Choice1Of2", __WEBPACK_IMPORTED_MODULE_1__Util__["a" /* Any */]], ["Choice2Of2", __WEBPACK_IMPORTED_MODULE_1__Util__["a" /* Any */]]]
            };
        }
    }, {
        key: "valueIfChoice1",
        get: function get() {
            return this.tag === 0 ? this.data : null;
        }
    }, {
        key: "valueIfChoice2",
        get: function get() {
            return this.tag === 1 ? this.data : null;
        }
    }]);

    return Choice;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (Choice);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_fs__ = __webpack_require__(14);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "log", function() { return __WEBPACK_IMPORTED_MODULE_0__App_fs__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "showNotification", function() { return __WEBPACK_IMPORTED_MODULE_0__App_fs__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "btn", function() { return __WEBPACK_IMPORTED_MODULE_0__App_fs__["a"]; });


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = log;
/* harmony export (immutable) */ __webpack_exports__["c"] = showNotification;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return btn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_r_loy_nuget_packages_fable_core_1_3_17_fable_core_Option__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_r_loy_nuget_packages_fable_core_1_3_17_fable_core_Serialize__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_r_loy_nuget_packages_fable_core_1_3_17_fable_core_Async__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_r_loy_nuget_packages_fable_core_1_3_17_fable_core_AsyncBuilder__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_r_loy_nuget_packages_fable_core_1_3_17_fable_core_List__ = __webpack_require__(3);





function log(x) {
  console.log(Object(__WEBPACK_IMPORTED_MODULE_0__Users_r_loy_nuget_packages_fable_core_1_3_17_fable_core_Option__["c" /* makeSome */])(x));
  var p = document.createElement("p");
  p.textContent = Object(__WEBPACK_IMPORTED_MODULE_1__Users_r_loy_nuget_packages_fable_core_1_3_17_fable_core_Serialize__["a" /* toJson */])(x);
  document.body.appendChild(p), void 0;
}
function showNotification() {
  Object(__WEBPACK_IMPORTED_MODULE_2__Users_r_loy_nuget_packages_fable_core_1_3_17_fable_core_Async__["b" /* startImmediate */])(function (builder_) {
    return builder_.Delay(function () {
      return builder_.TryWith(builder_.Delay(function () {
        var reg = navigator.serviceWorker.register("worker.js");
        return builder_.Bind(Object(__WEBPACK_IMPORTED_MODULE_2__Users_r_loy_nuget_packages_fable_core_1_3_17_fable_core_Async__["a" /* awaitPromise */])(reg), function (_arg1) {
          return builder_.Bind(Object(__WEBPACK_IMPORTED_MODULE_2__Users_r_loy_nuget_packages_fable_core_1_3_17_fable_core_Async__["a" /* awaitPromise */])(_arg1.pushManager.getSubscription()), function (_arg2) {
            return builder_.Bind(function (builder__1) {
              return builder__1.Delay(function () {
                return _arg2 == null ? builder__1.ReturnFrom(Object(__WEBPACK_IMPORTED_MODULE_2__Users_r_loy_nuget_packages_fable_core_1_3_17_fable_core_Async__["a" /* awaitPromise */])(_arg1.pushManager.subscribe({
                  userVisibleOnly: true
                }))) : builder__1.Return(_arg2);
              });
            }(__WEBPACK_IMPORTED_MODULE_3__Users_r_loy_nuget_packages_fable_core_1_3_17_fable_core_AsyncBuilder__["f" /* singleton */]), function (_arg3) {
              log(_arg3);
              return builder_.Bind(Object(__WEBPACK_IMPORTED_MODULE_2__Users_r_loy_nuget_packages_fable_core_1_3_17_fable_core_Async__["a" /* awaitPromise */])(Notification.requestPermission()), function (_arg4) {
                if (_arg4 === "granted1") {
                  log("granted");
                  _arg1.showNotification("Vibration sample", {
                    body: "Buzz! Buzz! ",
                    vibrate: Object(__WEBPACK_IMPORTED_MODULE_4__Users_r_loy_nuget_packages_fable_core_1_3_17_fable_core_List__["b" /* ofArray */])([200, 100, 200, 100, 200, 100, 200])
                  }), void 0;
                  return builder_.Zero();
                } else {
                  log("denied");
                  return builder_.Zero();
                }
              });
            });
          });
        });
      }), function (_arg5) {
        log(_arg5);
        return builder_.Zero();
      });
    });
  }(__WEBPACK_IMPORTED_MODULE_3__Users_r_loy_nuget_packages_fable_core_1_3_17_fable_core_AsyncBuilder__["f" /* singleton */]));
}
var btn = document.getElementById("btn1");
btn.addEventListener("click", function (evt) {
  showNotification();
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deflate */
/* harmony export (immutable) */ __webpack_exports__["a"] = toJson;
/* unused harmony export inflate */
/* unused harmony export ofJson */
/* unused harmony export toJsonWithTypeInfo */
/* unused harmony export ofJsonWithTypeInfo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Date__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DateOffset__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__List__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Option__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Reflection__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Seq__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Set__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__String__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Util__ = __webpack_require__(1);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// tslint:disable:ban-types















function isDate(v) {
    return v instanceof Date;
}
function deflateDate(v) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__Date__["i" /* toString */])(v, "O");
}
function deflateValue(v) {
    if (isDate(v)) {
        return deflateDate(v);
    }
    return v;
}
function deflate(v) {
    if (Array.isArray(v)) {
        return v.map(deflateValue);
    } else if (ArrayBuffer.isView(v)) {
        return Array.from(v).map(deflateValue);
    } else if (isDate(v)) {
        return deflateDate(v);
    } else if (v != null && (typeof v === "undefined" ? "undefined" : _typeof(v)) === "object") {
        if (v instanceof __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */] || v instanceof __WEBPACK_IMPORTED_MODULE_7__Set__["b" /* default */] || v instanceof Set) {
            return Array.from(v).map(deflateValue);
        } else if (v instanceof __WEBPACK_IMPORTED_MODULE_3__Map__["b" /* default */] || v instanceof Map) {
            var stringKeys = null;
            return Object(__WEBPACK_IMPORTED_MODULE_6__Seq__["d" /* fold */])(function (o, kv) {
                if (stringKeys === null) {
                    stringKeys = typeof kv[0] === "string";
                }
                o[stringKeys ? kv[0] : toJson(kv[0])] = deflateValue(kv[1]);
                return o;
            }, {}, v);
        } else if (v instanceof __WEBPACK_IMPORTED_MODULE_4__Option__["a" /* Some */]) {
            return deflateValue(v.value);
        }
        var reflectionInfo = typeof v[__WEBPACK_IMPORTED_MODULE_9__Symbol__["a" /* default */].reflection] === "function" ? v[__WEBPACK_IMPORTED_MODULE_9__Symbol__["a" /* default */].reflection]() : {};
        if (reflectionInfo.properties) {
            return Object(__WEBPACK_IMPORTED_MODULE_6__Seq__["d" /* fold */])(function (o, prop) {
                return o[prop] = deflateValue(v[prop]), o;
            }, {}, Object.getOwnPropertyNames(reflectionInfo.properties));
        } else if (reflectionInfo.cases) {
            var caseInfo = reflectionInfo.cases[v.tag];
            var caseName = caseInfo[0];
            var fieldsLength = caseInfo.length - 1;
            if (fieldsLength === 0) {
                return caseName;
            } else {
                // Prevent undefined assignment from removing case property; see #611:
                return _defineProperty({}, caseName, v.data !== void 0 ? deflate(v.data) : null);
            }
        } else {
            return Object(__WEBPACK_IMPORTED_MODULE_6__Seq__["d" /* fold */])(function (o, prop) {
                return o[prop] = deflateValue(v[prop]), o;
            }, {}, Object.getOwnPropertyNames(v));
        }
    }
    return v;
}
function toJson(o) {
    return JSON.stringify(deflateValue(o), function (k, v) {
        return deflate(v);
    });
}
function combine(path1, path2) {
    return typeof path2 === "number" ? path1 + "[" + path2 + "]" : (path1 ? path1 + "." : "") + path2;
}
function isNullable(typ) {
    if (typeof typ === "string") {
        return typ !== "boolean" && typ !== "number";
    } else if (typ instanceof __WEBPACK_IMPORTED_MODULE_10__Util__["b" /* NonDeclaredType */]) {
        return typ.kind !== "Array" && typ.kind !== "Tuple";
    } else {
        var info = typeof typ.prototype[__WEBPACK_IMPORTED_MODULE_9__Symbol__["a" /* default */].reflection] === "function" ? typ.prototype[__WEBPACK_IMPORTED_MODULE_9__Symbol__["a" /* default */].reflection]() : null;
        return info ? info.nullable : true;
    }
}
function invalidate(val, typ, path) {
    var str = Object(__WEBPACK_IMPORTED_MODULE_8__String__["b" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_8__String__["a" /* printf */])("%A"))(val);
    throw new Error(str + " " + (path ? "(" + path + ")" : "") + " is not of type " + Object(__WEBPACK_IMPORTED_MODULE_5__Reflection__["a" /* getTypeFullName */])(typ));
}
function needsInflate(enclosing) {
    var typ = enclosing.head;
    if (typeof typ === "string") {
        return false;
    }
    if (typ instanceof __WEBPACK_IMPORTED_MODULE_10__Util__["b" /* NonDeclaredType */]) {
        switch (typ.kind) {
            case "Option":
            case "Array":
                return typ.definition != null || needsInflate(new __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */](typ.generics[0], enclosing));
            case "Tuple":
                return typ.generics.some(function (x) {
                    return needsInflate(new __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */](x, enclosing));
                });
            case "Function":
                return false;
            case "GenericParam":
                return needsInflate(Object(__WEBPACK_IMPORTED_MODULE_5__Reflection__["b" /* resolveGeneric */])(typ.definition, enclosing.tail));
            case "GenericType":
                return true;
            default:
                return false;
        }
    }
    return true;
}
function inflateArray(arr, enclosing, path) {
    if (!Array.isArray) {
        invalidate(arr, "array", path);
    }
    // TODO: Validate non-inflated elements
    return needsInflate(enclosing) ? arr.map(function (x, i) {
        return inflate(x, enclosing, combine(path, i));
    }) : arr;
}
function inflateMap(obj, keyEnclosing, valEnclosing, path) {
    var inflateKey = keyEnclosing.head !== "string";
    var inflateVal = needsInflate(valEnclosing);
    return Object.getOwnPropertyNames(obj).map(function (k) {
        var key = inflateKey ? inflate(JSON.parse(k), keyEnclosing, combine(path, k)) : k;
        var val = inflateVal ? inflate(obj[k], valEnclosing, combine(path, k)) : obj[k];
        return [key, val];
    });
}
function inflateList(val, enclosing, path) {
    var ar = [];
    var li = new __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */]();
    var cur = val;
    var inf = needsInflate(enclosing);
    while (cur.tail != null) {
        ar.push(inf ? inflate(cur.head, enclosing, path) : cur.head);
        cur = cur.tail;
    }
    ar.reverse();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = ar[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var a = _step.value;

            li = new __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */](a, li);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return li;
}
function inflateUnion(val, typ, info, path, inflateField) {
    var caseName = void 0;
    // Same shape as runtime DUs, for example, if they've been serialized with `JSON.stringify`
    if (typeof val.tag === "number") {
        return Object.assign(new typ(), val);
    } else if (typeof val === "string") {
        // Cases without fields are serialized as strings by `toJson`
        caseName = val;
    } else {
        // Non-empty cases are serialized as `{ "MyCase": [1, 2] }` by `toJson`
        caseName = Object.getOwnPropertyNames(val)[0];
    }
    // Locate case index
    var tag = -1;
    for (var i = 0; info.cases[i] != null; i++) {
        if (info.cases[i][0] === caseName) {
            tag = i;
            break;
        }
    }
    // Validate
    if (tag === -1) {
        invalidate(val, typ, path);
    }
    var caseInfo = info.cases[tag];
    var inflatedData = void 0;
    if (caseInfo.length > 2) {
        inflatedData = [];
        var data = val[caseName];
        path = combine(path, caseName);
        for (var _i = 0; _i < data.length; _i++) {
            inflatedData.push(inflateField ? inflateField(data[_i], caseInfo[_i + 1], combine(path, _i)) : data[_i]);
        }
    } else if (caseInfo.length > 1) {
        inflatedData = inflateField ? inflateField(val[caseName], caseInfo[1], combine(path, caseName)) : val[caseName];
    }
    return new typ(tag, inflatedData);
}
function inflate(val, typ, path) {
    var enclosing = null;
    if (typ instanceof __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */]) {
        enclosing = typ;
        typ = typ.head;
    } else {
        enclosing = new __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */](typ, new __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */]());
    }
    if (val == null) {
        if (!isNullable(typ)) {
            invalidate(val, typ, path);
        }
        return val;
    } else if (typeof typ === "string") {
        if ((typ === "boolean" || typ === "number" || typ === "string") && (typeof val === "undefined" ? "undefined" : _typeof(val)) !== typ) {
            invalidate(val, typ, path);
        }
        return val;
    } else if (typ instanceof __WEBPACK_IMPORTED_MODULE_10__Util__["b" /* NonDeclaredType */]) {
        switch (typ.kind) {
            case "Unit":
                return null;
            case "Option":
                return inflate(val, new __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */](typ.generics[0], enclosing), path);
            case "Array":
                if (typ.definition != null) {
                    return new typ.definition(val);
                } else {
                    return inflateArray(val, new __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */](typ.generics[0], enclosing), path);
                }
            case "Tuple":
                return typ.generics.map(function (x, i) {
                    return inflate(val[i], new __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */](x, enclosing), combine(path, i));
                });
            case "Function":
                return val;
            case "GenericParam":
                return inflate(val, Object(__WEBPACK_IMPORTED_MODULE_5__Reflection__["b" /* resolveGeneric */])(typ.definition, enclosing.tail), path);
            case "GenericType":
                var def = typ.definition;
                if (def === __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */]) {
                    return Array.isArray(val) ? Object(__WEBPACK_IMPORTED_MODULE_2__List__["b" /* ofArray */])(inflateArray(val, Object(__WEBPACK_IMPORTED_MODULE_5__Reflection__["b" /* resolveGeneric */])(0, enclosing), path)) : inflateList(val, Object(__WEBPACK_IMPORTED_MODULE_5__Reflection__["b" /* resolveGeneric */])(0, enclosing), path);
                }
                // TODO: Should we try to inflate also sets and maps serialized with `JSON.stringify`?
                if (def === __WEBPACK_IMPORTED_MODULE_7__Set__["b" /* default */]) {
                    return Object(__WEBPACK_IMPORTED_MODULE_7__Set__["a" /* create */])(inflateArray(val, Object(__WEBPACK_IMPORTED_MODULE_5__Reflection__["b" /* resolveGeneric */])(0, enclosing), path));
                }
                if (def === Set) {
                    return new Set(inflateArray(val, Object(__WEBPACK_IMPORTED_MODULE_5__Reflection__["b" /* resolveGeneric */])(0, enclosing), path));
                }
                if (def === __WEBPACK_IMPORTED_MODULE_3__Map__["b" /* default */]) {
                    return Object(__WEBPACK_IMPORTED_MODULE_3__Map__["a" /* create */])(inflateMap(val, Object(__WEBPACK_IMPORTED_MODULE_5__Reflection__["b" /* resolveGeneric */])(0, enclosing), Object(__WEBPACK_IMPORTED_MODULE_5__Reflection__["b" /* resolveGeneric */])(1, enclosing), path));
                }
                if (def === Map) {
                    return new Map(inflateMap(val, Object(__WEBPACK_IMPORTED_MODULE_5__Reflection__["b" /* resolveGeneric */])(0, enclosing), Object(__WEBPACK_IMPORTED_MODULE_5__Reflection__["b" /* resolveGeneric */])(1, enclosing), path));
                }
                return inflate(val, new __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */](typ.definition, enclosing), path);
            case "Interface":
                return typ.definition === "System.DateTimeOffset" ? Object(__WEBPACK_IMPORTED_MODULE_1__DateOffset__["a" /* parse */])(val) : val;
            default:
                // case "Interface": // case "Any":
                return val;
        }
    } else if (typeof typ === "function") {
        if (typ === Date) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__Date__["g" /* parse */])(val, true);
        }
        if (typeof typ.ofJSON === "function") {
            return typ.ofJSON(val);
        }
        var info = typeof typ.prototype[__WEBPACK_IMPORTED_MODULE_9__Symbol__["a" /* default */].reflection] === "function" ? typ.prototype[__WEBPACK_IMPORTED_MODULE_9__Symbol__["a" /* default */].reflection]() : {};
        // Union types
        if (info.cases) {
            return inflateUnion(val, typ, info, path, function (fi, t, p) {
                return inflate(fi, new __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */](t, enclosing), path);
            });
        }
        if (info.properties) {
            var newObj = new typ();
            var properties = info.properties;
            var ks = Object.getOwnPropertyNames(properties);
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = ks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var k = _step2.value;

                    newObj[k] = inflate(val[k], new __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */](properties[k], enclosing), combine(path, k));
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return newObj;
        }
        return val;
    }
    throw new Error("Unexpected type when deserializing JSON: " + typ);
}
function inflatePublic(val, genArgs) {
    return inflate(val, genArgs ? genArgs.T : null, "");
}

function ofJson(json, genArgs) {
    function raise(msg, err, json, targetType) {
        var fullMsg = "Cannot deserialize";
        if (targetType != null) {
            fullMsg += " into " + Object(__WEBPACK_IMPORTED_MODULE_5__Reflection__["a" /* getTypeFullName */])(targetType);
        }
        fullMsg += " - Error (" + msg + "): " + err.message + " - Data: '" + json + "'";
        throw new Error(fullMsg);
    }
    var value = null;
    var targetType = genArgs ? genArgs.T : null;
    try {
        value = JSON.parse(json);
    } catch (e) {
        raise("JSON.parse", e, json, targetType);
    }
    try {
        value = inflate(value, targetType, "");
    } catch (e) {
        raise("inflate", e, json, targetType);
    }
    return value;
}
// TODO: Dates and types with `toJSON` are not adding the $type field
function toJsonWithTypeInfo(val) {
    return JSON.stringify(val, function (k, v) {
        if (ArrayBuffer.isView(v)) {
            return Array.from(v);
        } else if (v != null && (typeof v === "undefined" ? "undefined" : _typeof(v)) === "object") {
            var info = typeof v[__WEBPACK_IMPORTED_MODULE_9__Symbol__["a" /* default */].reflection] === "function" ? v[__WEBPACK_IMPORTED_MODULE_9__Symbol__["a" /* default */].reflection]() : {};
            if (v instanceof __WEBPACK_IMPORTED_MODULE_2__List__["a" /* default */] || v instanceof __WEBPACK_IMPORTED_MODULE_7__Set__["b" /* default */] || v instanceof Set) {
                return {
                    $type: info.type || "System.Collections.Generic.HashSet",
                    $values: Array.from(v)
                };
            } else if (v instanceof __WEBPACK_IMPORTED_MODULE_3__Map__["b" /* default */] || v instanceof Map) {
                return Object(__WEBPACK_IMPORTED_MODULE_6__Seq__["d" /* fold */])(function (o, kv) {
                    o[kv[0]] = kv[1];return o;
                }, { $type: info.type || "System.Collections.Generic.Dictionary" }, v);
            } else if (info.properties) {
                return Object(__WEBPACK_IMPORTED_MODULE_6__Seq__["d" /* fold */])(function (o, prop) {
                    return o[prop] = v[prop], o;
                }, { $type: info.type }, Object.getOwnPropertyNames(info.properties));
            } else if (info.cases) {
                var _ref2;

                var uci = info.cases[v.tag];
                return _ref2 = {}, _defineProperty(_ref2, uci[0], v.data !== void 0 ? v.data : null), _defineProperty(_ref2, "$type", info.type), _ref2;
            }
        }
        return v;
    });
}
function ofJsonWithTypeInfo(json, genArgs) {
    var parsed = JSON.parse(json, function (key, v) {
        if (v == null) {
            return v;
        } else if ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && typeof v.$type === "string") {
            // Remove generic args and assembly info added by Newtonsoft.Json
            var type = v.$type.replace("+", ".");
            var i = type.indexOf("`");
            delete v.$type;
            if (i > -1) {
                type = type.substr(0, i);
            } else {
                i = type.indexOf(",");
                type = i > -1 ? type.substr(0, i) : type;
            }
            if (type === "System.Collections.Generic.List" || type.indexOf("[]") === type.length - 2) {
                return v.$values;
            }
            if (type === "Microsoft.FSharp.Collections.FSharpList") {
                return Object(__WEBPACK_IMPORTED_MODULE_2__List__["b" /* ofArray */])(v.$values);
            } else if (type === "Microsoft.FSharp.Collections.FSharpSet") {
                return Object(__WEBPACK_IMPORTED_MODULE_7__Set__["a" /* create */])(v.$values);
            } else if (type === "System.Collections.Generic.HashSet") {
                return new Set(v.$values);
            } else if (type === "Microsoft.FSharp.Collections.FSharpMap") {
                return Object(__WEBPACK_IMPORTED_MODULE_3__Map__["a" /* create */])(Object.getOwnPropertyNames(v).map(function (k) {
                    return [k, v[k]];
                }));
            } else if (type === "System.Collections.Generic.Dictionary") {
                return new Map(Object.getOwnPropertyNames(v).map(function (k) {
                    return [k, v[k]];
                }));
            } else {
                var typ = Object(__WEBPACK_IMPORTED_MODULE_9__Symbol__["b" /* getType */])(type);
                if (typ) {
                    if (typeof typ.ofJSON === "function") {
                        return typ.ofJSON(v);
                    }
                    var info = typeof typ.prototype[__WEBPACK_IMPORTED_MODULE_9__Symbol__["a" /* default */].reflection] === "function" ? typ.prototype[__WEBPACK_IMPORTED_MODULE_9__Symbol__["a" /* default */].reflection]() : {};
                    if (info.cases) {
                        return inflateUnion(v, typ, info, key);
                    }
                    return Object.assign(new typ(), v);
                }
            }
        } else if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:[+-]\d{2}:\d{2}|Z)$/.test(v)) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__Date__["g" /* parse */])(v, true);
        } else {
            return v;
        }
    });
    var expected = genArgs ? genArgs.T : null;
    if (parsed != null && typeof expected === "function" && !(parsed instanceof Object(__WEBPACK_IMPORTED_MODULE_10__Util__["g" /* getDefinition */])(expected))) {
        throw new Error("JSON is not of type " + expected.name + ": " + json);
    }
    return parsed;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export fromDate */
/* unused harmony export minValue */
/* unused harmony export maxValue */
/* harmony export (immutable) */ __webpack_exports__["a"] = parse;
/* unused harmony export tryParse */
/* unused harmony export create */
/* unused harmony export now */
/* unused harmony export utcNow */
/* unused harmony export toUniversalTime */
/* unused harmony export toLocalTime */
/* unused harmony export timeOfDay */
/* unused harmony export date */
/* unused harmony export day */
/* unused harmony export hour */
/* unused harmony export millisecond */
/* unused harmony export minute */
/* unused harmony export month */
/* unused harmony export second */
/* unused harmony export year */
/* unused harmony export dayOfWeek */
/* unused harmony export dayOfYear */
/* unused harmony export add */
/* unused harmony export addDays */
/* unused harmony export addHours */
/* unused harmony export addMinutes */
/* unused harmony export addSeconds */
/* unused harmony export addMilliseconds */
/* unused harmony export addYears */
/* unused harmony export addMonths */
/* unused harmony export subtract */
/* unused harmony export equals */
/* unused harmony export equalsExact */
/* unused harmony export compare */
/* unused harmony export compareTo */
/* unused harmony export op_Addition */
/* unused harmony export op_Subtraction */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Date__ = __webpack_require__(7);

function DateTimeOffset(value, offset) {
    var d = new Date(value);
    d.offset = offset != null ? offset : new Date().getTimezoneOffset() * -60000;
    return d;
}
function fromDate(date, offset) {
    var isUtc = date.kind === 1 /* UTC */;
    var offset2 = isUtc ? 0 : date.getTimezoneOffset() * -60000;
    if (offset != null && offset !== offset2) {
        throw new Error(isUtc ? "The UTC Offset for Utc DateTime instances must be 0." : "The UTC Offset of the local dateTime parameter does not match the offset argument.");
    }
    return DateTimeOffset(date.getTime(), offset2);
}
function minValue() {
    // This is "0001-01-01T00:00:00.000Z", actual JS min value is -8640000000000000
    return DateTimeOffset(-62135596800000, 0);
}
function maxValue() {
    // This is "9999-12-31T23:59:59.999Z", actual JS max value is 8640000000000000
    return DateTimeOffset(253402300799999, 0);
}
function parse(str) {
    var date = Object(__WEBPACK_IMPORTED_MODULE_0__Date__["h" /* parseRaw */])(str);
    var offsetMatch = __WEBPACK_IMPORTED_MODULE_0__Date__["d" /* offsetRegex */].exec(str);
    var offset = offsetMatch == null ? date.getTimezoneOffset() * -60000 : offsetMatch[0] === "Z" ? 0 : parseInt(offsetMatch[1], 10) * 3600000 + parseInt(offsetMatch[2], 10) * 60000;
    return DateTimeOffset(date.getTime(), offset);
}
function tryParse(v) {
    try {
        return [true, parse(v)];
    } catch (_err) {
        return [false, minValue()];
    }
}
function create(year, month, day, h, m, s, ms, offset) {
    if (offset == null) {
        offset = ms;
        ms = 0;
    }
    if (offset !== 0) {
        if (offset % 60000 !== 0) {
            throw new Error("Offset must be specified in whole minutes");
        }
        if (~~(offset / 3600000) > 14) {
            throw new Error("Offset must be within plus or minus 14 hour");
        }
    }
    var date = void 0;
    if (offset === 0) {
        date = new Date(Date.UTC(year, month - 1, day, h, m, s, ms));
        if (year <= 99) {
            date.setFullYear(year, month - 1, day);
        }
    } else {
        var str = Object(__WEBPACK_IMPORTED_MODULE_0__Date__["f" /* padWithZeros */])(year, 4) + "-" + Object(__WEBPACK_IMPORTED_MODULE_0__Date__["f" /* padWithZeros */])(month, 2) + "-" + Object(__WEBPACK_IMPORTED_MODULE_0__Date__["f" /* padWithZeros */])(day, 2) + "T" + Object(__WEBPACK_IMPORTED_MODULE_0__Date__["f" /* padWithZeros */])(h, 2) + ":" + Object(__WEBPACK_IMPORTED_MODULE_0__Date__["f" /* padWithZeros */])(m, 2) + ":" + Object(__WEBPACK_IMPORTED_MODULE_0__Date__["f" /* padWithZeros */])(s, 2) + "." + Object(__WEBPACK_IMPORTED_MODULE_0__Date__["f" /* padWithZeros */])(ms, 3) + Object(__WEBPACK_IMPORTED_MODULE_0__Date__["e" /* offsetToString */])(offset);
        date = new Date(str);
    }
    var dateValue = date.getTime();
    if (isNaN(dateValue)) {
        throw new Error("The parameters describe an unrepresentable Date");
    }
    return DateTimeOffset(dateValue, offset);
}
function now() {
    var date = new Date();
    return DateTimeOffset(date.getTime(), date.getTimezoneOffset() * -60000);
}
function utcNow() {
    return DateTimeOffset(Date.now(), 0);
}
function toUniversalTime(date) {
    return DateTimeOffset(date.getTime(), 0);
}
function toLocalTime(date) {
    return DateTimeOffset(date.getTime(), date.getTimezoneOffset() * -60000);
}
function timeOfDay(d) {
    var d2 = new Date(d.getTime() + d.offset);
    return d2.getUTCHours() * 3600000 + d2.getUTCMinutes() * 60000 + d2.getUTCSeconds() * 1000 + d2.getUTCMilliseconds();
}
function date(d) {
    var d2 = new Date(d.getTime() + d.offset);
    return Object(__WEBPACK_IMPORTED_MODULE_0__Date__["b" /* create */])(d2.getUTCFullYear(), d2.getUTCMonth() + 1, d2.getUTCDate(), 0, 0, 0, 0);
}
function day(d) {
    return new Date(d.getTime() + d.offset).getUTCDate();
}
function hour(d) {
    return new Date(d.getTime() + d.offset).getUTCHours();
}
function millisecond(d) {
    return new Date(d.getTime() + d.offset).getUTCMilliseconds();
}
function minute(d) {
    return new Date(d.getTime() + d.offset).getUTCMinutes();
}
function month(d) {
    return new Date(d.getTime() + d.offset).getUTCMonth() + 1;
}
function second(d) {
    return new Date(d.getTime() + d.offset).getUTCSeconds();
}
function year(d) {
    return new Date(d.getTime() + d.offset).getUTCFullYear();
}
function dayOfWeek(d) {
    return new Date(d.getTime() + d.offset).getUTCDay();
}
function dayOfYear(d) {
    var d2 = new Date(d.getTime() + d.offset);
    var _year = d2.getUTCFullYear();
    var _month = d2.getUTCMonth() + 1;
    var _day = d2.getUTCDate();
    for (var i = 1; i < _month; i++) {
        _day += Object(__WEBPACK_IMPORTED_MODULE_0__Date__["c" /* daysInMonth */])(_year, i);
    }
    return _day;
}
function add(d, ts) {
    return DateTimeOffset(d.getTime() + ts, d.offset);
}
function addDays(d, v) {
    return DateTimeOffset(d.getTime() + v * 86400000, d.offset);
}
function addHours(d, v) {
    return DateTimeOffset(d.getTime() + v * 3600000, d.offset);
}
function addMinutes(d, v) {
    return DateTimeOffset(d.getTime() + v * 60000, d.offset);
}
function addSeconds(d, v) {
    return DateTimeOffset(d.getTime() + v * 1000, d.offset);
}
function addMilliseconds(d, v) {
    return DateTimeOffset(d.getTime() + v, d.offset);
}
function addYears(d, v) {
    var newMonth = d.getUTCMonth() + 1;
    var newYear = d.getUTCFullYear() + v;
    var _daysInMonth = Object(__WEBPACK_IMPORTED_MODULE_0__Date__["c" /* daysInMonth */])(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, d.getUTCDate());
    return create(newYear, newMonth, newDay, d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds(), d.offset);
}
function addMonths(d, v) {
    var d2 = new Date(d.getTime() + d.offset);
    var newMonth = d2.getUTCMonth() + 1 + v;
    var newMonth_ = 0;
    var yearOffset = 0;
    if (newMonth > 12) {
        newMonth_ = newMonth % 12;
        yearOffset = Math.floor(newMonth / 12);
        newMonth = newMonth_;
    } else if (newMonth < 1) {
        newMonth_ = 12 + newMonth % 12;
        yearOffset = Math.floor(newMonth / 12) + (newMonth_ === 12 ? -1 : 0);
        newMonth = newMonth_;
    }
    var newYear = d2.getUTCFullYear() + yearOffset;
    var _daysInMonth = Object(__WEBPACK_IMPORTED_MODULE_0__Date__["c" /* daysInMonth */])(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, d2.getUTCDate());
    return create(newYear, newMonth, newDay, d2.getUTCHours(), d2.getUTCMinutes(), d2.getUTCSeconds(), d2.getUTCMilliseconds(), d.offset);
}
function subtract(d, that) {
    return typeof that === "number" ? DateTimeOffset(d.getTime() - that, d.offset) : d.getTime() - that.getTime();
}
function equals(d1, d2) {
    return d1.getTime() === d2.getTime();
}
function equalsExact(d1, d2) {
    return d1.getTime() === d2.getTime() && d1.offset === d2.offset;
}
function compare(d1, d2) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__Date__["a" /* compare */])(d1, d2);
}
var compareTo = compare;
function op_Addition(x, y) {
    return add(x, y);
}
function op_Subtraction(x, y) {
    return subtract(x, y);
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MemberInfo */
/* harmony export (immutable) */ __webpack_exports__["b"] = resolveGeneric;
/* unused harmony export getType */
/* harmony export (immutable) */ __webpack_exports__["a"] = getTypeFullName;
/* unused harmony export getName */
/* unused harmony export getPrototypeOfType */
/* unused harmony export getProperties */
/* unused harmony export getUnionCases */
/* unused harmony export getPropertyValues */
/* unused harmony export getUnionFields */
/* unused harmony export makeUnion */
/* unused harmony export getTupleElements */
/* unused harmony export isTupleType */
/* unused harmony export getFunctionElements */
/* unused harmony export isFunctionType */
/* unused harmony export getGenericArguments */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Util__ = __webpack_require__(1);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var MemberInfo = function () {
    function MemberInfo(name, index, declaringType, propertyType, unionFields) {
        _classCallCheck(this, MemberInfo);

        this.name = name;
        this.index = index;
        this.declaringType = declaringType;
        this.propertyType = propertyType;
        this.unionFields = unionFields;
    }

    _createClass(MemberInfo, [{
        key: "getUnionFields",
        value: function getUnionFields() {
            var _this = this;

            return this.unionFields.map(function (fi, i) {
                return new MemberInfo("unknown", i, _this.declaringType, fi);
            });
        }
    }]);

    return MemberInfo;
}();
function resolveGeneric(idx, enclosing) {
    try {
        var t = enclosing.head;
        if (t.generics == null) {
            return resolveGeneric(idx, enclosing.tail);
        } else {
            var name = typeof idx === "string" ? idx : Object.getOwnPropertyNames(t.generics)[idx];
            var resolved = t.generics[name];
            if (resolved == null) {
                return resolveGeneric(idx, enclosing.tail);
            } else if (resolved instanceof __WEBPACK_IMPORTED_MODULE_2__Util__["b" /* NonDeclaredType */] && resolved.kind === "GenericParam") {
                return resolveGeneric(resolved.definition, enclosing.tail);
            } else {
                return new __WEBPACK_IMPORTED_MODULE_0__List__["a" /* default */](resolved, enclosing);
            }
        }
    } catch (err) {
        throw new Error("Cannot resolve generic argument " + idx + ": " + err);
    }
}
function getType(obj) {
    var t = typeof obj === "undefined" ? "undefined" : _typeof(obj);
    switch (t) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return t;
        default:
            return Object.getPrototypeOf(obj).constructor;
    }
}
// TODO: This needs improvement, check namespace for non-custom types?
function getTypeFullName(typ, option) {
    function trim(fullName, opt) {
        if (typeof fullName !== "string") {
            return "unknown";
        }
        if (opt === "name") {
            var i = fullName.lastIndexOf(".");
            return fullName.substr(i + 1);
        }
        if (opt === "namespace") {
            var _i = fullName.lastIndexOf(".");
            return _i > -1 ? fullName.substr(0, _i) : "";
        }
        return fullName;
    }
    if (typeof typ === "string") {
        return typ;
    } else if (typ instanceof __WEBPACK_IMPORTED_MODULE_2__Util__["b" /* NonDeclaredType */]) {
        switch (typ.kind) {
            case "Unit":
                return "unit";
            case "Option":
                return getTypeFullName(typ.generics[0], option) + " option";
            case "Array":
                return getTypeFullName(typ.generics[0], option) + "[]";
            case "Tuple":
                return typ.generics.map(function (x) {
                    return getTypeFullName(x, option);
                }).join(" * ");
            case "Function":
                return "Func<" + typ.generics.map(function (x) {
                    return getTypeFullName(x, option);
                }).join(", ") + ">";
            case "GenericParam":
            case "Interface":
                return typ.definition;
            case "GenericType":
                return getTypeFullName(typ.definition, option);
            case "Any":
            default:
                return "unknown";
        }
    } else {
        // Attention: this doesn't work with Object.getPrototypeOf
        var proto = typ.prototype;
        return trim(typeof proto[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] === "function" ? proto[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]().type : null, option);
    }
}
function getName(x) {
    if (x instanceof MemberInfo) {
        return x.name;
    }
    return getTypeFullName(x, "name");
}
function getPrototypeOfType(typ) {
    if (typeof typ === "string") {
        return null;
    } else if (typ instanceof __WEBPACK_IMPORTED_MODULE_2__Util__["b" /* NonDeclaredType */]) {
        return typ.kind === "GenericType" ? typ.definition.prototype : null;
    } else {
        return typ.prototype;
    }
}
function getProperties(typ) {
    var proto = getPrototypeOfType(typ);
    if (proto != null && typeof proto[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] === "function") {
        var info = proto[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]();
        if (info.properties) {
            return Object.getOwnPropertyNames(info.properties).map(function (k, i) {
                return new MemberInfo(k, i, typ, info.properties[k]);
            });
        }
    }
    throw new Error("Type " + getTypeFullName(typ) + " doesn't contain property info.");
}
function getUnionCases(typ) {
    var proto = getPrototypeOfType(typ);
    if (proto != null && typeof proto[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] === "function") {
        var info = proto[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]();
        if (info.cases) {
            return info.cases.map(function (uci, i) {
                return new MemberInfo(uci[0], i, typ, null, uci.slice(1));
            });
        }
    }
    throw new Error("Type " + getTypeFullName(typ) + " doesn't contain union case info.");
}
function getPropertyValues(obj) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__Util__["h" /* getPropertyNames */])(obj).map(function (k) {
        return obj[k];
    });
}
function getUnionFields(obj, typ) {
    if (obj != null && typeof obj[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] === "function") {
        var info = obj[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]();
        if (info.cases) {
            var uci = info.cases[obj.tag];
            if (uci != null) {
                var fields = uci.length > 2 ? obj.data : uci.length > 1 ? [obj.data] : [];
                return [new MemberInfo(uci[0], obj.tag, typ, null, uci.slice(1)), fields];
            }
        }
    }
    throw new Error("Not an F# union type.");
}
function makeUnion(caseInfo, args) {
    var Cons = Object(__WEBPACK_IMPORTED_MODULE_2__Util__["g" /* getDefinition */])(caseInfo.declaringType);
    switch (args.length) {
        case 0:
            return new Cons(caseInfo.index);
        case 1:
            return new Cons(caseInfo.index, args[0]);
        default:
            return new Cons(caseInfo.index, args);
    }
}
function getTupleElements(typ) {
    if (typ instanceof __WEBPACK_IMPORTED_MODULE_2__Util__["b" /* NonDeclaredType */] && typ.kind === "Tuple") {
        return typ.generics;
    }
    throw new Error("Type " + getTypeFullName(typ) + " is not a tuple type.");
}
function isTupleType(typ) {
    if (typ instanceof __WEBPACK_IMPORTED_MODULE_2__Util__["b" /* NonDeclaredType */]) {
        return typ.kind === "Tuple";
    }
    return false;
}
function getFunctionElements(typ) {
    if (typ === "function") {
        throw new Error("The type of the function must be known at compile time to get the elements.");
    }
    if (typ instanceof __WEBPACK_IMPORTED_MODULE_2__Util__["b" /* NonDeclaredType */] && typ.kind === "Function") {
        return typ.generics;
    }
    throw new Error("Type " + getTypeFullName(typ) + " is not a function type.");
}
function isFunctionType(typ) {
    return typ === "function" || typ instanceof __WEBPACK_IMPORTED_MODULE_2__Util__["b" /* NonDeclaredType */] && typ.kind === "Function";
}
function getGenericArguments(typ) {
    if (typ instanceof __WEBPACK_IMPORTED_MODULE_2__Util__["b" /* NonDeclaredType */]) {
        if (Array.isArray(typ.generics)) {
            return typ.generics;
        } else {
            var dic = typ.generics;
            return Object.keys(dic).map(function (k) {
                return dic[k];
            });
        }
    }
    return [];
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export compare */
/* unused harmony export compareTo */
/* unused harmony export startsWith */
/* unused harmony export indexOfAny */
/* harmony export (immutable) */ __webpack_exports__["a"] = printf;
/* unused harmony export toConsole */
/* unused harmony export toConsoleError */
/* harmony export (immutable) */ __webpack_exports__["b"] = toText;
/* unused harmony export toFail */
/* unused harmony export fsFormat */
/* unused harmony export format */
/* unused harmony export endsWith */
/* unused harmony export initialize */
/* unused harmony export insert */
/* unused harmony export isNullOrEmpty */
/* unused harmony export isNullOrWhiteSpace */
/* unused harmony export join */
/* unused harmony export validateGuid */
/* unused harmony export newGuid */
/* unused harmony export guidToArray */
/* unused harmony export arrayToGuid */
/* unused harmony export toBase64String */
/* unused harmony export fromBase64String */
/* unused harmony export padLeft */
/* unused harmony export padRight */
/* unused harmony export remove */
/* unused harmony export replace */
/* unused harmony export replicate */
/* unused harmony export getCharAtIndex */
/* unused harmony export split */
/* unused harmony export trim */
/* unused harmony export filter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Date__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RegExp__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Util__ = __webpack_require__(1);



var fsFormatRegExp = /(^|[^%])%([0+ ]*)(-?\d+)?(?:\.(\d+))?(\w)/;
var formatRegExp = /\{(\d+)(,-?\d+)?(?:\:(.+?))?\}/g;
// From https://stackoverflow.com/a/13653180/3922220
var guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var StringComparison = {
    CurrentCulture: 0,
    CurrentCultureIgnoreCase: 1,
    InvariantCulture: 2,
    InvariantCultureIgnoreCase: 3,
    Ordinal: 4,
    OrdinalIgnoreCase: 5
};
function cmp(x, y, ic) {
    function isIgnoreCase(i) {
        return i === true || i === StringComparison.CurrentCultureIgnoreCase || i === StringComparison.InvariantCultureIgnoreCase || i === StringComparison.OrdinalIgnoreCase;
    }
    function isOrdinal(i) {
        return i === StringComparison.Ordinal || i === StringComparison.OrdinalIgnoreCase;
    }
    if (x == null) {
        return y == null ? 0 : -1;
    }
    if (y == null) {
        return 1;
    } // everything is bigger than null
    if (isOrdinal(ic)) {
        if (isIgnoreCase(ic)) {
            x = x.toLowerCase();
            y = y.toLowerCase();
        }
        return x === y ? 0 : x < y ? -1 : 1;
    } else {
        if (isIgnoreCase(ic)) {
            x = x.toLocaleLowerCase();
            y = y.toLocaleLowerCase();
        }
        return x.localeCompare(y);
    }
}
function compare() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    switch (args.length) {
        case 2:
            return cmp(args[0], args[1], false);
        case 3:
            return cmp(args[0], args[1], args[2]);
        case 4:
            return cmp(args[0], args[1], args[2] === true);
        case 5:
            return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), false);
        case 6:
            return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5]);
        case 7:
            return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5] === true);
        default:
            throw new Error("String.compare: Unsupported number of parameters");
    }
}
function compareTo(x, y) {
    return cmp(x, y, false);
}
function startsWith(str, pattern, ic) {
    if (str.length >= pattern.length) {
        return cmp(str.substr(0, pattern.length), pattern, ic) === 0;
    }
    return false;
}
function indexOfAny(str, anyOf) {
    if (str == null || str === "") {
        return -1;
    }
    var startIndex = (arguments.length <= 2 ? 0 : arguments.length - 2) > 0 ? arguments.length <= 2 ? undefined : arguments[2] : 0;
    if (startIndex < 0) {
        throw new Error("String.indexOfAny: Start index cannot be negative");
    }
    var length = (arguments.length <= 2 ? 0 : arguments.length - 2) > 1 ? arguments.length <= 3 ? undefined : arguments[3] : str.length - startIndex;
    if (length < 0) {
        throw new Error("String.indexOfAny: Length cannot be negative");
    }
    if (length > str.length - startIndex) {
        throw new Error("String.indexOfAny: Invalid startIndex and length");
    }
    str = str.substr(startIndex, length);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = anyOf[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var c = _step.value;

            var index = str.indexOf(c);
            if (index > -1) {
                return index + startIndex;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return -1;
}
function toHex(value) {
    return value < 0 ? "ff" + (16777215 - (Math.abs(value) - 1)).toString(16) : value.toString(16);
}
function printf(input) {
    return {
        input: input,
        cont: fsFormat(input)
    };
}
function toConsole(arg) {
    // Don't remove the lambda here, see #1357
    return arg.cont(function (x) {
        console.log(x);
    });
}
function toConsoleError(arg) {
    return arg.cont(function (x) {
        console.error(x);
    });
}
function toText(arg) {
    return arg.cont(function (x) {
        return x;
    });
}
function toFail(arg) {
    return arg.cont(function (x) {
        throw new Error(x);
    });
}
function formatOnce(str2, rep) {
    return str2.replace(fsFormatRegExp, function (_, prefix, flags, pad, precision, format) {
        switch (format) {
            case "f":
            case "F":
                rep = rep.toFixed(precision || 6);
                break;
            case "g":
            case "G":
                rep = rep.toPrecision(precision);
                break;
            case "e":
            case "E":
                rep = rep.toExponential(precision);
                break;
            case "O":
                rep = Object(__WEBPACK_IMPORTED_MODULE_2__Util__["i" /* toString */])(rep);
                break;
            case "A":
                rep = Object(__WEBPACK_IMPORTED_MODULE_2__Util__["i" /* toString */])(rep, true);
                break;
            case "x":
                rep = toHex(Number(rep));
                break;
            case "X":
                rep = toHex(Number(rep)).toUpperCase();
                break;
        }
        var plusPrefix = flags.indexOf("+") >= 0 && parseInt(rep, 10) >= 0;
        pad = parseInt(pad, 10);
        if (!isNaN(pad)) {
            var ch = pad >= 0 && flags.indexOf("0") >= 0 ? "0" : " ";
            rep = padLeft(rep, Math.abs(pad) - (plusPrefix ? 1 : 0), ch, pad < 0);
        }
        var once = prefix + (plusPrefix ? "+" + rep : rep);
        return once.replace(/%/g, "%%");
    });
}
function createPrinter(str, cont) {
    var printer = function printer() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        // Make a copy as the function may be used several times
        var strCopy = str;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = args[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var arg = _step2.value;

                strCopy = formatOnce(strCopy, arg);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        return fsFormatRegExp.test(strCopy) ? createPrinter(strCopy, cont) : cont(strCopy.replace(/%%/g, "%"));
    };
    // Mark it as curried so it doesn't
    // get wrapped by CurriedLambda
    printer.curried = true;
    return printer;
}
function fsFormat(str) {
    return function (cont) {
        return fsFormatRegExp.test(str) ? createPrinter(str, cont) : cont(str);
    };
}
function format(str) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
    }

    return str.replace(formatRegExp, function (match, idx, pad, pattern) {
        var rep = args[idx];
        var padSymbol = " ";
        if (typeof rep === "number") {
            switch ((pattern || "").substring(0, 1)) {
                case "f":
                case "F":
                    rep = pattern.length > 1 ? rep.toFixed(pattern.substring(1)) : rep.toFixed(2);
                    break;
                case "g":
                case "G":
                    rep = pattern.length > 1 ? rep.toPrecision(pattern.substring(1)) : rep.toPrecision();
                    break;
                case "e":
                case "E":
                    rep = pattern.length > 1 ? rep.toExponential(pattern.substring(1)) : rep.toExponential();
                    break;
                case "p":
                case "P":
                    rep = (pattern.length > 1 ? (rep * 100).toFixed(pattern.substring(1)) : (rep * 100).toFixed(2)) + " %";
                    break;
                case "x":
                    rep = toHex(Number(rep));
                    break;
                case "X":
                    rep = toHex(Number(rep)).toUpperCase();
                    break;
                default:
                    var m = /^(0+)(\.0+)?$/.exec(pattern);
                    if (m != null) {
                        var decs = 0;
                        if (m[2] != null) {
                            rep = rep.toFixed(decs = m[2].length - 1);
                        }
                        pad = "," + (m[1].length + (decs ? decs + 1 : 0)).toString();
                        padSymbol = "0";
                    } else if (pattern) {
                        rep = pattern;
                    }
            }
        } else if (typeof rep.ToString === "function") {
            rep = rep.ToString(pattern);
        } else if (rep instanceof Date) {
            rep = Object(__WEBPACK_IMPORTED_MODULE_0__Date__["i" /* toString */])(rep, pattern);
        }
        pad = parseInt((pad || "").substring(1), 10);
        if (!isNaN(pad)) {
            rep = padLeft(rep, Math.abs(pad), padSymbol, pad < 0);
        }
        return rep;
    });
}
function endsWith(str, search) {
    var idx = str.lastIndexOf(search);
    return idx >= 0 && idx === str.length - search.length;
}
function initialize(n, f) {
    if (n < 0) {
        throw new Error("String length must be non-negative");
    }
    var xs = new Array(n);
    for (var i = 0; i < n; i++) {
        xs[i] = f(i);
    }
    return xs.join("");
}
function insert(str, startIndex, value) {
    if (startIndex < 0 || startIndex > str.length) {
        throw new Error("startIndex is negative or greater than the length of this instance.");
    }
    return str.substring(0, startIndex) + value + str.substring(startIndex);
}
function isNullOrEmpty(str) {
    return typeof str !== "string" || str.length === 0;
}
function isNullOrWhiteSpace(str) {
    return typeof str !== "string" || /^\s*$/.test(str);
}
function join(delimiter, xs) {
    var xs2 = typeof xs === "string" ? [xs] : xs;
    var len = arguments.length;
    if (len > 2) {
        xs2 = Array(len - 1);
        for (var key = 1; key < len; key++) {
            xs2[key - 1] = arguments[key];
        }
    } else if (!Array.isArray(xs2)) {
        xs2 = Array.from(xs2);
    }
    return xs2.map(function (x) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__Util__["i" /* toString */])(x);
    }).join(delimiter);
}
/** Validates UUID as specified in RFC4122 (versions 1-5). Trims braces. */
function validateGuid(str, doNotThrow) {
    var trimmed = trim(str, "both", "{", "}");
    if (guidRegex.test(trimmed)) {
        return doNotThrow ? [true, trimmed] : trimmed;
    } else if (doNotThrow) {
        return [false, "00000000-0000-0000-0000-000000000000"];
    }
    throw new Error("Guid should contain 32 digits with 4 dashes: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
}
/* tslint:disable */
// From https://gist.github.com/LeverOne/1308368
function newGuid() {
    var b = "";
    for (var a = 0; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : "-") {}
    return b;
}
// Maps for number <-> hex string conversion
var _convertMapsInitialized = false;
var _byteToHex = void 0;
var _hexToByte = void 0;
function initConvertMaps() {
    _byteToHex = new Array(256);
    _hexToByte = {};
    for (var i = 0; i < 256; i++) {
        _byteToHex[i] = (i + 0x100).toString(16).substr(1);
        _hexToByte[_byteToHex[i]] = i;
    }
    _convertMapsInitialized = true;
}
/** Parse a UUID into it's component bytes */
// Adapted from https://github.com/zefferus/uuid-parse
function guidToArray(s) {
    if (!_convertMapsInitialized) {
        initConvertMaps();
    }
    var i = 0;
    var buf = new Uint8Array(16);
    s.toLowerCase().replace(/[0-9a-f]{2}/g, function (oct) {
        switch (i) {
            // .NET saves first three byte groups with differten endianness
            // See https://stackoverflow.com/a/16722909/3922220
            case 0:
            case 1:
            case 2:
            case 3:
                buf[3 - i++] = _hexToByte[oct];
                break;
            case 4:
            case 5:
                buf[9 - i++] = _hexToByte[oct];
                break;
            case 6:
            case 7:
                buf[13 - i++] = _hexToByte[oct];
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                buf[i++] = _hexToByte[oct];
                break;
        }
    });
    // Zero out remaining bytes if string was short
    while (i < 16) {
        buf[i++] = 0;
    }
    return buf;
}
/** Convert UUID byte array into a string */
function arrayToGuid(buf) {
    if (buf.length !== 16) {
        throw new Error("Byte array for GUID must be exactly 16 bytes long");
    }
    if (!_convertMapsInitialized) {
        initConvertMaps();
    }
    return _byteToHex[buf[3]] + _byteToHex[buf[2]] + _byteToHex[buf[1]] + _byteToHex[buf[0]] + "-" + _byteToHex[buf[5]] + _byteToHex[buf[4]] + "-" + _byteToHex[buf[7]] + _byteToHex[buf[6]] + "-" + _byteToHex[buf[8]] + _byteToHex[buf[9]] + "-" + _byteToHex[buf[10]] + _byteToHex[buf[11]] + _byteToHex[buf[12]] + _byteToHex[buf[13]] + _byteToHex[buf[14]] + _byteToHex[buf[15]];
}
/* tslint:enable */
function notSupported(name) {
    throw new Error("The environment doesn't support '" + name + "', please use a polyfill.");
}
function toBase64String(inArray) {
    var str = "";
    for (var i = 0; i < inArray.length; i++) {
        str += String.fromCharCode(inArray[i]);
    }
    return typeof btoa === "function" ? btoa(str) : notSupported("btoa");
}
function fromBase64String(b64Encoded) {
    var binary = typeof atob === "function" ? atob(b64Encoded) : notSupported("atob");
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}
function padLeft(str, len, ch, isRight) {
    ch = ch || " ";
    str = String(str);
    len = len - str.length;
    for (var i = 0; i < len; i++) {
        str = isRight ? str + ch : ch + str;
    }
    return str;
}
function padRight(str, len, ch) {
    return padLeft(str, len, ch, true);
}
function remove(str, startIndex, count) {
    if (startIndex >= str.length) {
        throw new Error("startIndex must be less than length of string");
    }
    if (typeof count === "number" && startIndex + count > str.length) {
        throw new Error("Index and count must refer to a location within the string.");
    }
    return str.slice(0, startIndex) + (typeof count === "number" ? str.substr(startIndex + count) : "");
}
function replace(str, search, replace) {
    return str.replace(new RegExp(Object(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(search), "g"), replace);
}
function replicate(n, x) {
    return initialize(n, function () {
        return x;
    });
}
function getCharAtIndex(input, index) {
    if (index < 0 || index > input.length) {
        throw new Error("System.IndexOutOfRangeException: Index was outside the bounds of the array.");
    }
    return input[index];
}
function split(str, splitters, count, removeEmpty) {
    count = typeof count === "number" ? count : null;
    removeEmpty = typeof removeEmpty === "number" ? removeEmpty : null;
    if (count < 0) {
        throw new Error("Count cannot be less than zero");
    }
    if (count === 0) {
        return [];
    }
    var splitters2 = splitters;
    if (!Array.isArray(splitters)) {
        var len = arguments.length;
        splitters2 = Array(len - 1);
        for (var key = 1; key < len; key++) {
            splitters2[key - 1] = arguments[key];
        }
    }
    splitters2 = splitters2.map(function (x) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(x);
    });
    splitters2 = splitters2.length > 0 ? splitters2 : [" "];
    var i = 0;
    var splits = [];
    var reg = new RegExp(splitters2.join("|"), "g");
    while (count == null || count > 1) {
        var m = reg.exec(str);
        if (m === null) {
            break;
        }
        if (!removeEmpty || m.index - i > 0) {
            count = count != null ? count - 1 : count;
            splits.push(str.substring(i, m.index));
        }
        i = reg.lastIndex;
    }
    if (!removeEmpty || str.length - i > 0) {
        splits.push(str.substring(i));
    }
    return splits;
}
function trim(str, side) {
    for (var _len4 = arguments.length, chars = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        chars[_key4 - 2] = arguments[_key4];
    }

    if (side === "both" && chars.length === 0) {
        return str.trim();
    }
    if (side === "start" || side === "both") {
        var reg = chars.length === 0 ? /^\s+/ : new RegExp("^[" + Object(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(chars.join("")) + "]+");
        str = str.replace(reg, "");
    }
    if (side === "end" || side === "both") {
        var _reg = chars.length === 0 ? /\s+$/ : new RegExp("[" + Object(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(chars.join("")) + "]+$");
        str = str.replace(_reg, "");
    }
    return str;
}
function filter(pred, x) {
    return x.split("").filter(pred).join("");
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* harmony export (immutable) */ __webpack_exports__["a"] = escape;
/* unused harmony export unescape */
/* unused harmony export isMatch */
/* unused harmony export match */
/* unused harmony export matches */
/* unused harmony export options */
/* unused harmony export replace */
/* unused harmony export split */
function create(pattern, options) {
    var flags = "g";
    flags += options & 1 ? "i" : "";
    flags += options & 2 ? "m" : "";
    return new RegExp(pattern, flags);
}
// From http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
function escape(str) {
    return str.replace(/[\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function unescape(str) {
    return str.replace(/\\([\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
}
function isMatch(str, pattern) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var reg = void 0;
    reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = create(pattern, options);
    return reg.test(str);
}
function match(str, pattern) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var reg = void 0;
    reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = create(pattern, options);
    return reg.exec(str);
}
function matches(str, pattern) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var reg = void 0;
    reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = create(pattern, options);
    if (!reg.global) {
        throw new Error("Non-global RegExp"); // Prevent infinite loop
    }
    var m = reg.exec(str);
    var matches = [];
    while (m !== null) {
        matches.push(m);
        m = reg.exec(str);
    }
    return matches;
}
function options(reg) {
    var options = 256; // ECMAScript
    options |= reg.ignoreCase ? 1 : 0;
    options |= reg.multiline ? 2 : 0;
    return options;
}
function replace(reg, input, replacement, limit) {
    var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    function replacer() {
        var res = arguments[0];
        if (limit !== 0) {
            limit--;
            var _match = [];
            var len = arguments.length;
            for (var i = 0; i < len - 2; i++) {
                _match.push(arguments[i]);
            }
            _match.index = arguments[len - 2];
            _match.input = arguments[len - 1];
            res = replacement(_match);
        }
        return res;
    }
    if (typeof reg === "string") {
        var tmp = reg;
        reg = create(input, limit);
        input = tmp;
        limit = undefined;
    }
    if (typeof replacement === "function") {
        limit = limit == null ? -1 : limit;
        return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
    } else {
        // $0 doesn't work with JS regex, see #1155
        replacement = replacement.replace(/\$0/g, function (s) {
            return "$&";
        });
        if (limit != null) {
            var m = void 0;
            var sub1 = input.substring(offset);
            var _matches = matches(reg, sub1);
            var sub2 = matches.length > limit ? (m = _matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
            return input.substring(0, offset) + sub2.replace(reg, replacement) + input.substring(offset + sub2.length);
        } else {
            return input.replace(reg, replacement);
        }
    }
}
function split(reg, input, limit) {
    var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (typeof reg === "string") {
        var tmp = reg;
        reg = create(input, limit);
        input = tmp;
        limit = undefined;
    }
    input = input.substring(offset);
    return input.split(reg, limit);
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createCancellationToken */
/* unused harmony export cancel */
/* unused harmony export cancelAfter */
/* unused harmony export isCancellationRequested */
/* unused harmony export startChild */
/* harmony export (immutable) */ __webpack_exports__["a"] = awaitPromise;
/* unused harmony export cancellationToken */
/* unused harmony export defaultCancellationToken */
/* unused harmony export catchAsync */
/* unused harmony export fromContinuations */
/* unused harmony export ignore */
/* unused harmony export parallel */
/* unused harmony export sleep */
/* unused harmony export start */
/* harmony export (immutable) */ __webpack_exports__["b"] = startImmediate;
/* unused harmony export startWithContinuations */
/* unused harmony export startAsPromise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Choice__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Seq__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








// Implemented just for type references

var Async = function Async() {
    _classCallCheck(this, Async);
};

/* unused harmony default export */ var _unused_webpack_default_export = (Async);

function emptyContinuation(x) {
    // NOP
}
function createCancellationToken(arg) {
    var token = { isCancelled: false };
    if (typeof arg === "number") {
        setTimeout(function () {
            token.isCancelled = true;
        }, arg);
    } else if (typeof arg === "boolean") {
        token.isCancelled = arg;
    }
    return token;
}
function cancel(token) {
    token.isCancelled = true;
}
function cancelAfter(token, ms) {
    setTimeout(function () {
        token.isCancelled = true;
    }, ms);
}
function isCancellationRequested(token) {
    return token != null && token.isCancelled;
}
function startChild(computation) {
    var promise = startAsPromise(computation);
    // JS Promises are hot, computation has already started
    // but we delay returning the result
    return Object(__WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["d" /* protectedCont */])(function (ctx) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["e" /* protectedReturn */])(awaitPromise(promise))(ctx);
    });
}
function awaitPromise(p) {
    return fromContinuations(function (conts) {
        return p.then(conts[0]).catch(function (err) {
            return (err instanceof __WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["a" /* OperationCanceledError */] ? conts[2] : conts[1])(err);
        });
    });
}
function cancellationToken() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["d" /* protectedCont */])(function (ctx) {
        return ctx.onSuccess(ctx.cancelToken);
    });
}
var defaultCancellationToken = { isCancelled: false };
function catchAsync(work) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["d" /* protectedCont */])(function (ctx) {
        work({
            onSuccess: function onSuccess(x) {
                return ctx.onSuccess(Object(__WEBPACK_IMPORTED_MODULE_1__Choice__["a" /* choice1Of2 */])(x));
            },
            onError: function onError(ex) {
                return ctx.onSuccess(Object(__WEBPACK_IMPORTED_MODULE_1__Choice__["b" /* choice2Of2 */])(ex));
            },
            onCancel: ctx.onCancel,
            cancelToken: ctx.cancelToken,
            trampoline: ctx.trampoline
        });
    });
}
function fromContinuations(f) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["d" /* protectedCont */])(function (ctx) {
        return f([ctx.onSuccess, ctx.onError, ctx.onCancel]);
    });
}
function ignore(computation) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["c" /* protectedBind */])(computation, function (x) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["e" /* protectedReturn */])(void 0);
    });
}
function parallel(computations) {
    return awaitPromise(Promise.all(Object(__WEBPACK_IMPORTED_MODULE_2__Seq__["h" /* map */])(function (w) {
        return startAsPromise(w);
    }, computations)));
}
function sleep(millisecondsDueTime) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["d" /* protectedCont */])(function (ctx) {
        setTimeout(function () {
            return ctx.cancelToken.isCancelled ? ctx.onCancel(new __WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["a" /* OperationCanceledError */]()) : ctx.onSuccess(void 0);
        }, millisecondsDueTime);
    });
}
function start(computation, cancellationToken) {
    return startWithContinuations(computation, cancellationToken);
}
function startImmediate(computation, cancellationToken) {
    return start(computation, cancellationToken);
}
function startWithContinuations(computation, continuation, exceptionContinuation, cancellationContinuation, cancelToken) {
    if (typeof continuation !== "function") {
        cancelToken = continuation;
        continuation = null;
    }
    var trampoline = new __WEBPACK_IMPORTED_MODULE_0__AsyncBuilder__["b" /* Trampoline */]();
    computation({
        onSuccess: continuation ? continuation : emptyContinuation,
        onError: exceptionContinuation ? exceptionContinuation : emptyContinuation,
        onCancel: cancellationContinuation ? cancellationContinuation : emptyContinuation,
        cancelToken: cancelToken ? cancelToken : defaultCancellationToken,
        trampoline: trampoline
    });
}
function startAsPromise(computation, cancellationToken) {
    return new Promise(function (resolve, reject) {
        return startWithContinuations(computation, resolve, reject, reject, cancellationToken ? cancellationToken : defaultCancellationToken);
    });
}

/***/ })
/******/ ]);