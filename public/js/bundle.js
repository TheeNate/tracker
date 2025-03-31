/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/RopeSignatureManager.js":
/*!************************************************!*\
  !*** ./src/js/modules/RopeSignatureManager.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RopeSignatureManager)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api */ "./src/js/utils/api.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var RopeSignatureManager = /*#__PURE__*/function () {
  function RopeSignatureManager(uiManager) {
    _classCallCheck(this, RopeSignatureManager);
    this.api = new _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.uiManager = uiManager;
    this.initModal();
  }
  return _createClass(RopeSignatureManager, [{
    key: "initModal",
    value: function initModal() {
      var _this = this;
      this.modal = document.getElementById('ropeSignatureModal');
      this.form = document.getElementById('ropeSignatureForm');
      this.closeBtn = this.modal.querySelector('.close');
      this.form.addEventListener('submit', function (e) {
        e.preventDefault();
        _this.requestSignature();
      });
      this.closeBtn.addEventListener('click', function () {
        _this.modal.style.display = 'none';
      });
    }
  }, {
    key: "openSignatureModal",
    value: function openSignatureModal(entryId) {
      this.currentEntryId = entryId;
      this.modal.style.display = 'block';
    }
  }, {
    key: "requestSignature",
    value: function () {
      var _requestSignature = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this$form$supervisor, _this$form$asnt, _this$form$certLevel;
        var supervisorName, supervisorEmail, supervisorCompany, asnt, certLevel, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              supervisorName = this.form.supervisorName.value;
              supervisorEmail = this.form.supervisorEmail.value;
              supervisorCompany = ((_this$form$supervisor = this.form.supervisorCompany) === null || _this$form$supervisor === void 0 ? void 0 : _this$form$supervisor.value) || '';
              asnt = ((_this$form$asnt = this.form.asnt) === null || _this$form$asnt === void 0 ? void 0 : _this$form$asnt.value) || '';
              certLevel = ((_this$form$certLevel = this.form.certLevel) === null || _this$form$certLevel === void 0 ? void 0 : _this$form$certLevel.value) || '';
              _context.prev = 5;
              _context.next = 8;
              return this.api.post('/api/rope-signatures/request', {
                entryId: this.currentEntryId,
                supervisorName: supervisorName,
                supervisorEmail: supervisorEmail,
                supervisorCompany: supervisorCompany,
                asnt: asnt,
                certLevel: certLevel
              });
            case 8:
              response = _context.sent;
              if (response.success) {
                alert('Signature request sent!');
                this.modal.style.display = 'none';
              } else {
                alert('Request failed: ' + response.message);
              }
              _context.next = 16;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](5);
              console.error(_context.t0);
              alert('Something went wrong. Try again.');
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[5, 12]]);
      }));
      function requestSignature() {
        return _requestSignature.apply(this, arguments);
      }
      return requestSignature;
    }()
  }]);
}();


/***/ }),

/***/ "./src/js/modules/entryManager.js":
/*!****************************************!*\
  !*** ./src/js/modules/entryManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EntryManager)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api */ "./src/js/utils/api.js");
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dateUtils */ "./src/js/utils/dateUtils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Entry Manager
 * Handles all operations related to entry data (CRUD operations)
 */



var EntryManager = /*#__PURE__*/function () {
  function EntryManager(uiManager) {
    _classCallCheck(this, EntryManager);
    this.uiManager = uiManager;
    this.methodsCache = [];
    this.companiesCache = [];
    this.api = new _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  /**
   * Fetch all methods from the server
   */
  return _createClass(EntryManager, [{
    key: "fetchMethods",
    value: (function () {
      var _fetchMethods = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.api.get('/api/methods');
            case 3:
              response = _context.sent;
              if (response.success) {
                this.methodsCache = response.data || ['UT', 'UTT', 'RT', 'MT', 'PT'];
              } else {
                console.error('Error fetching methods:', response.message);
                this.methodsCache = ['UT', 'UTT', 'RT', 'MT', 'PT']; // Default fallback
              }
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error('Error fetching methods:', _context.t0);
              this.methodsCache = ['UT', 'UTT', 'RT', 'MT', 'PT']; // Default fallback
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 7]]);
      }));
      function fetchMethods() {
        return _fetchMethods.apply(this, arguments);
      }
      return fetchMethods;
    }()
    /**
     * Fetch all companies from the server
     */
    )
  }, {
    key: "fetchCompanies",
    value: (function () {
      var _fetchCompanies = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return this.api.get('/api/companies');
            case 3:
              response = _context2.sent;
              if (response.success) {
                this.companiesCache = response.data || ['Mistras', 'Company B'];
              } else {
                console.error('Error fetching companies:', response.message);
                this.companiesCache = ['Mistras', 'Company B']; // Default fallback
              }
              _context2.next = 11;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error('Error fetching companies:', _context2.t0);
              this.companiesCache = ['Mistras', 'Company B']; // Default fallback
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 7]]);
      }));
      function fetchCompanies() {
        return _fetchCompanies.apply(this, arguments);
      }
      return fetchCompanies;
    }()
    /**
     * Fetch all entries from the server
     */
    )
  }, {
    key: "fetchEntries",
    value: (function () {
      var _fetchEntries = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response, entries, formattedEntries;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return this.api.get('/api/entries');
            case 3:
              response = _context3.sent;
              if (response.success) {
                _context3.next = 7;
                break;
              }
              console.error('Error fetching entries:', response.message);
              return _context3.abrupt("return");
            case 7:
              entries = response.data; // Format dates and prepare entries for display
              formattedEntries = entries.map(function (entry) {
                return _objectSpread(_objectSpread({}, entry), {}, {
                  formattedDate: (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__.formatDateForInput)(entry.entry_date)
                });
              }); // Update UI with entries
              this.uiManager.renderEntries(formattedEntries, this.methodsCache, this.companiesCache);

              // Update totals
              this.uiManager.updateTotals();
              _context3.next = 16;
              break;
            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              console.error('Error fetching entries:', _context3.t0);
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 13]]);
      }));
      function fetchEntries() {
        return _fetchEntries.apply(this, arguments);
      }
      return fetchEntries;
    }()
    /**
     * Add a new entry
     */
    )
  }, {
    key: "addNewEntry",
    value: (function () {
      var _addNewEntry = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var response, newEntry;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return this.api.post('/api/entries', {
                empty: true
              });
            case 3:
              response = _context4.sent;
              if (response.success) {
                _context4.next = 7;
                break;
              }
              alert("Error adding blank entry to database.");
              return _context4.abrupt("return");
            case 7:
              // Create a new entry with the returned ID
              newEntry = {
                id: response.insertedId,
                entry_date: null,
                method: '',
                location: '',
                hours: 0,
                company: '',
                formattedDate: ''
              }; // Update UI with the new entry
              this.uiManager.addEntryRow(newEntry, this.methodsCache, this.companiesCache);

              // Update totals
              this.uiManager.updateTotals();
              _context4.next = 16;
              break;
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](0);
              console.error('Error adding new entry:', _context4.t0);
              alert('Failed to add new entry. Please try again.');
            case 16:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[0, 12]]);
      }));
      function addNewEntry() {
        return _addNewEntry.apply(this, arguments);
      }
      return addNewEntry;
    }()
    /**
     * Update an existing entry
     */
    )
  }, {
    key: "updateEntry",
    value: (function () {
      var _updateEntry = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(entryId, data) {
        var response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return this.api.put("/api/entries/".concat(entryId), data);
            case 3:
              response = _context5.sent;
              if (response.success) {
                _context5.next = 7;
                break;
              }
              console.error('Update failed:', response.message);
              return _context5.abrupt("return", false);
            case 7:
              // Update totals after successful update
              this.uiManager.updateTotals();
              return _context5.abrupt("return", true);
            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](0);
              console.error('Error updating entry:', _context5.t0);
              return _context5.abrupt("return", false);
            case 15:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 11]]);
      }));
      function updateEntry(_x, _x2) {
        return _updateEntry.apply(this, arguments);
      }
      return updateEntry;
    }()
    /**
     * Delete an entry
     */
    )
  }, {
    key: "deleteEntry",
    value: (function () {
      var _deleteEntry = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(entryId) {
        var response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              if (entryId) {
                _context6.next = 3;
                break;
              }
              return _context6.abrupt("return", true);
            case 3:
              if (confirm("Are you sure you want to delete this entry? This cannot be undone.")) {
                _context6.next = 5;
                break;
              }
              return _context6.abrupt("return", false);
            case 5:
              _context6.next = 7;
              return this.api["delete"]("/api/entries/".concat(entryId));
            case 7:
              response = _context6.sent;
              if (response.success) {
                _context6.next = 11;
                break;
              }
              alert("Failed to delete entry: " + (response.message || "Unknown error"));
              return _context6.abrupt("return", false);
            case 11:
              // Update totals after deletion
              this.uiManager.updateTotals();
              return _context6.abrupt("return", true);
            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6["catch"](0);
              console.error('Error deleting entry:', _context6.t0);
              alert("Network error when trying to delete entry. Please try again.");
              return _context6.abrupt("return", false);
            case 20:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[0, 15]]);
      }));
      function deleteEntry(_x3) {
        return _deleteEntry.apply(this, arguments);
      }
      return deleteEntry;
    }()
    /**
     * Add a new method
     */
    )
  }, {
    key: "addMethod",
    value: (function () {
      var _addMethod = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(methodName) {
        var response;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              if (methodName) {
                _context7.next = 3;
                break;
              }
              return _context7.abrupt("return", false);
            case 3:
              _context7.next = 5;
              return this.api.post('/api/methods', {
                methodName: methodName
              });
            case 5:
              response = _context7.sent;
              if (response.success) {
                _context7.next = 9;
                break;
              }
              alert('Error adding method: ' + (response.message || 'Unknown error'));
              return _context7.abrupt("return", false);
            case 9:
              // Add to the cache if not already present
              if (!this.methodsCache.includes(methodName)) {
                this.methodsCache.push(methodName);
                this.methodsCache.sort();
              }

              // Update all method selects
              this.uiManager.updateMethodSelects(this.methodsCache);
              return _context7.abrupt("return", true);
            case 14:
              _context7.prev = 14;
              _context7.t0 = _context7["catch"](0);
              console.error('Error adding method:', _context7.t0);
              alert('Error adding method.');
              return _context7.abrupt("return", false);
            case 19:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[0, 14]]);
      }));
      function addMethod(_x4) {
        return _addMethod.apply(this, arguments);
      }
      return addMethod;
    }()
    /**
     * Add a new company
     */
    )
  }, {
    key: "addCompany",
    value: (function () {
      var _addCompany = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(companyName) {
        var response;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              if (companyName) {
                _context8.next = 3;
                break;
              }
              return _context8.abrupt("return", false);
            case 3:
              _context8.next = 5;
              return this.api.post('/api/companies', {
                companyName: companyName
              });
            case 5:
              response = _context8.sent;
              if (response.success) {
                _context8.next = 9;
                break;
              }
              alert('Error adding company: ' + (response.message || 'Unknown error'));
              return _context8.abrupt("return", false);
            case 9:
              // Add to the cache if not already present
              if (!this.companiesCache.includes(companyName)) {
                this.companiesCache.push(companyName);
                this.companiesCache.sort();
              }

              // Update all company selects
              this.uiManager.updateCompanySelects(this.companiesCache);
              return _context8.abrupt("return", true);
            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8["catch"](0);
              console.error('Error adding company:', _context8.t0);
              alert('Error adding company.');
              return _context8.abrupt("return", false);
            case 19:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[0, 14]]);
      }));
      function addCompany(_x5) {
        return _addCompany.apply(this, arguments);
      }
      return addCompany;
    }()
    /**
     * Get entry data
     * Extracts entry data from a row
     */
    )
  }, {
    key: "getEntryDataFromRow",
    value: function getEntryDataFromRow(row) {
      return {
        entryDate: row.cells[1].querySelector('input[type="date"]').value,
        method: row.cells[2].querySelector('select').value,
        location: row.cells[3].querySelector('input[type="text"]').value,
        hours: parseFloat(row.cells[4].querySelector('input[type="number"]').value) || 0,
        company: row.cells[5].querySelector('select').value
      };
    }

    /**
     * Calculate entry totals by method
     */
  }, {
    key: "calculateTotals",
    value: function calculateTotals() {
      var rows = document.querySelectorAll('#trackerTable tbody tr');
      var totalHours = 0;
      var methodTotals = {};
      rows.forEach(function (row) {
        var methodSelect = row.querySelector('.methodSelect');
        var hoursInput = row.querySelector('input[type="number"]');
        if (methodSelect && hoursInput) {
          var method = methodSelect.value;
          var hours = parseFloat(hoursInput.value) || 0;
          if (method && method !== 'ADD METHOD') {
            totalHours += hours;
            if (!methodTotals[method]) {
              methodTotals[method] = 0;
            }
            methodTotals[method] += hours;
          }
        }
      });
      return {
        totalHours: totalHours,
        methodTotals: methodTotals
      };
    }
  }]);
}();


/***/ }),

/***/ "./src/js/modules/exportManager.js":
/*!*****************************************!*\
  !*** ./src/js/modules/exportManager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExportManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Export Manager
 * Handles PDF exports and reports
 */
var ExportManager = /*#__PURE__*/function () {
  function ExportManager(entryManager) {
    _classCallCheck(this, ExportManager);
    this.entryManager = entryManager;
  }

  /**
   * Export entries to PDF
   */
  return _createClass(ExportManager, [{
    key: "exportToPDF",
    value: function exportToPDF() {
      // Access jsPDF from global scope (loaded via CDN)
      var jsPDF = window.jspdf.jsPDF;
      var doc = new jsPDF();

      // Add title
      doc.text("NDT HOURS TRACKER", 10, 10);

      // Gather table data
      var rows = document.querySelectorAll('#trackerTable tbody tr');
      var tableData = [];
      rows.forEach(function (row) {
        var date = row.cells[1].querySelector('input').value;
        var method = row.cells[2].querySelector('select').value;
        var location = row.cells[3].querySelector('input').value;
        var hours = row.cells[4].querySelector('input').value;
        var company = row.cells[5].querySelector('select').value;

        // For the supervisor column:
        var supervisorText = '';
        var supervisorCell = row.cells[6];
        if (supervisorCell.querySelector('button')) {
          supervisorText = "Pending Signature";
        } else {
          supervisorText = supervisorCell.textContent.trim();
        }

        // Only include rows with data
        if (date || method || location || hours || company || supervisorText) {
          tableData.push([date, method, location, hours, company, supervisorText]);
        }
      });

      // Create the table in the PDF
      doc.autoTable({
        head: [['DATE', 'METHOD', 'LOCATION', 'HOURS', 'COMPANY', 'SUPERVISOR']],
        body: tableData,
        startY: 20
      });

      // Total hours
      var totalHours = document.getElementById('totalHoursValue').textContent;
      doc.text("Total Hours: ".concat(totalHours), 10, doc.lastAutoTable.finalY + 10);

      // Method breakdown data
      var methodRows = document.querySelectorAll('#methodTable tbody tr');
      var methodData = [];
      methodRows.forEach(function (row) {
        var cells = row.querySelectorAll('td');
        var method = cells[0].textContent;
        var hrs = cells[1].textContent;
        methodData.push([method, hrs]);
      });

      // Add method breakdown table
      doc.autoTable({
        head: [['Method', 'Hours']],
        body: methodData,
        startY: doc.lastAutoTable.finalY + 20
      });

      // Add a footer with current date
      var now = new Date();
      var dateStr = now.toLocaleDateString();
      doc.setFontSize(10);
      doc.text("Generated on ".concat(dateStr), 10, doc.internal.pageSize.height - 10);

      // Save the PDF
      doc.save('NDT_HOURS_TRACKER.pdf');
    }

    /**
     * Future enhancement: Export to CSV
     */
  }, {
    key: "exportToCSV",
    value: function exportToCSV() {
      // Placeholder for future implementation
    }

    /**
     * Future enhancement: Export to Excel
     */
  }, {
    key: "exportToExcel",
    value: function exportToExcel() {
      // Placeholder for future implementation
    }
  }]);
}();


/***/ }),

/***/ "./src/js/modules/ropeEntryManager.js":
/*!********************************************!*\
  !*** ./src/js/modules/ropeEntryManager.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RopeEntryManager)
/* harmony export */ });
/* harmony import */ var _utils_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api.js */ "./src/js/utils/api.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var RopeEntryManager = /*#__PURE__*/function () {
  function RopeEntryManager(uiManager) {
    _classCallCheck(this, RopeEntryManager);
    this.uiManager = uiManager;
    this.api = new _utils_api_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  return _createClass(RopeEntryManager, [{
    key: "fetchEntries",
    value: function () {
      var _fetchEntries = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.api.get('/api/rope-entries');
            case 3:
              response = _context.sent;
              if (response.success) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return", console.error('Fetch failed:', response.message));
            case 6:
              this.uiManager.renderEntries(response.data);
              this.uiManager.updateTotal();
              _context.next = 13;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error('Fetch error:', _context.t0);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 10]]);
      }));
      function fetchEntries() {
        return _fetchEntries.apply(this, arguments);
      }
      return fetchEntries;
    }()
  }, {
    key: "addNewEntry",
    value: function () {
      var _addNewEntry = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response, newEntry;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return this.api.post('/api/rope-entries', {
                date_from: null,
                date_to: null,
                company: '',
                location: '',
                tasks: '',
                industry: '',
                details: '',
                supervisor: '',
                rope_hours: 0,
                signature_hash: ''
              });
            case 3:
              response = _context2.sent;
              if (response.success) {
                newEntry = _objectSpread({
                  id: response.insertedId
                }, response.data);
                this.uiManager.addEntryRow(newEntry);
                this.uiManager.updateTotal();
              }
              _context2.next = 10;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error('Add error:', _context2.t0);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 7]]);
      }));
      function addNewEntry() {
        return _addNewEntry.apply(this, arguments);
      }
      return addNewEntry;
    }()
  }, {
    key: "updateEntry",
    value: function () {
      var _updateEntry = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id, data) {
        var res;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return this.api.put("/api/rope-entries/".concat(id), data);
            case 3:
              res = _context3.sent;
              if (!res.success) console.error('Update failed:', res.message);
              this.uiManager.updateTotal();
              _context3.next = 11;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.error('Update error:', _context3.t0);
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 8]]);
      }));
      function updateEntry(_x, _x2) {
        return _updateEntry.apply(this, arguments);
      }
      return updateEntry;
    }()
  }, {
    key: "deleteEntry",
    value: function () {
      var _deleteEntry = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
        var res;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!id || !confirm("Delete this entry?"))) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return", false);
            case 2:
              _context4.prev = 2;
              _context4.next = 5;
              return this.api["delete"]("/api/rope-entries/".concat(id));
            case 5:
              res = _context4.sent;
              if (res.success) {
                _context4.next = 8;
                break;
              }
              return _context4.abrupt("return", alert("Failed to delete entry."));
            case 8:
              this.uiManager.updateTotal();
              return _context4.abrupt("return", true);
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](2);
              console.error(_context4.t0);
              alert("Delete failed.");
              return _context4.abrupt("return", false);
            case 17:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[2, 12]]);
      }));
      function deleteEntry(_x3) {
        return _deleteEntry.apply(this, arguments);
      }
      return deleteEntry;
    }()
  }, {
    key: "calculateTotal",
    value: function calculateTotal() {
      var rows = document.querySelectorAll('#ropeTable tbody tr');
      var total = 0;
      rows.forEach(function (row) {
        var hours = parseFloat(row.querySelector('input[type="number"]').value) || 0;
        total += hours;
      });
      return total;
    }
  }]);
}();


/***/ }),

/***/ "./src/js/modules/ropeUIManager.js":
/*!*****************************************!*\
  !*** ./src/js/modules/ropeUIManager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RopeUIManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var RopeUIManager = /*#__PURE__*/function () {
  function RopeUIManager(entryManager) {
    _classCallCheck(this, RopeUIManager);
    this.entryManager = entryManager;
    this.tableBody = document.querySelector('#ropeTable tbody');
    this.totalHoursDisplay = document.querySelector('#totalRopeHoursValue');
    this.init();
  }
  return _createClass(RopeUIManager, [{
    key: "init",
    value: function init() {
      var _this = this;
      // Add line button
      document.getElementById('addRopeLineBtn').addEventListener('click', function () {
        _this.entryManager.addNewEntry();
      });
    }
  }, {
    key: "renderEntries",
    value: function renderEntries() {
      var _this2 = this;
      var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.tableBody.innerHTML = '';
      entries.forEach(function (entry) {
        return _this2.addEntryRow(entry);
      });
    }
  }, {
    key: "addEntryRow",
    value: function addEntryRow(entry) {
      var _this3 = this;
      var row = document.createElement('tr');
      row.innerHTML = "\n        <td><span class=\"delete-btn\">&times;</span></td>\n        <td><input type=\"date\" value=\"".concat(entry.date_from || '', "\"></td>\n        <td><input type=\"date\" value=\"").concat(entry.date_to || '', "\"></td>\n        <td><input type=\"text\" value=\"").concat(entry.company || '', "\"></td>\n        <td><input type=\"text\" value=\"").concat(entry.location || '', "\"></td>\n        <td><input type=\"text\" value=\"").concat(entry.tasks || '', "\"></td>\n        <td><input type=\"text\" value=\"").concat(entry.industry || '', "\"></td>\n        <td><input type=\"text\" value=\"").concat(entry.details || '', "\"></td>\n        <td><input type=\"text\" value=\"").concat(entry.supervisor || '', "\"></td>\n        <td><input type=\"number\" min=\"0\" step=\"0.1\" value=\"").concat(entry.rope_hours || 0, "\"></td>\n        <td><button class=\"signBtn\">Request Signature</button></td>\n        <td class=\"hash-cell\">").concat(entry.signature_hash || '', "</td>\n      ");

      // Event: Delete
      row.querySelector('.delete-btn').addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var success;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this3.entryManager.deleteEntry(entry.id);
            case 2:
              success = _context.sent;
              if (success) row.remove();
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      })));

      // Event: Auto-save on change
      var inputs = row.querySelectorAll('input');
      inputs.forEach(function (input) {
        input.addEventListener('change', function () {
          var updated = _this3.getRowData(row);
          _this3.entryManager.updateEntry(entry.id, updated);
        });
      });
      this.tableBody.appendChild(row);
      var signBtn = row.querySelector('.signBtn');
      signBtn.addEventListener('click', function () {
        if (_this3.signatureManager) {
          _this3.signatureManager.openSignatureModal(entry.id);
        } else {
          console.warn('signatureManager not found');
        }
      });
    }
  }, {
    key: "updateTotal",
    value: function updateTotal() {
      var total = this.entryManager.calculateTotal();
      this.totalHoursDisplay.textContent = total.toFixed(1);
    }
  }, {
    key: "getRowData",
    value: function getRowData(row) {
      var inputs = row.querySelectorAll('input');
      return {
        date_from: inputs[0].value,
        date_to: inputs[1].value,
        company: inputs[2].value,
        location: inputs[3].value,
        tasks: inputs[4].value,
        industry: inputs[5].value,
        details: inputs[6].value,
        supervisor: inputs[7].value,
        rope_hours: parseFloat(inputs[8].value) || 0,
        signature_hash: row.querySelector('.hash-cell').textContent
      };
    }
  }]);
}();


/***/ }),

/***/ "./src/js/modules/signatureManager.js":
/*!********************************************!*\
  !*** ./src/js/modules/signatureManager.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignatureManager)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api */ "./src/js/utils/api.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Signature Manager
 * Handles signature requesting, verification, and display
 */


var SignatureManager = /*#__PURE__*/function () {
  function SignatureManager(uiManager) {
    _classCallCheck(this, SignatureManager);
    this.uiManager = uiManager;
    this.api = new _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.currentRow = null;
  }

  /**
   * Open the signature request modal
   * @param {HTMLElement} row - The row element requesting a signature
   */
  return _createClass(SignatureManager, [{
    key: "openSignatureModal",
    value: function openSignatureModal(row) {
      this.currentRow = row;
      document.getElementById('signatureModal').style.display = 'block';
    }

    /**
     * Request a signature for an entry
     * @param {Object} formData - Form data from the signature request form
     */
  }, {
    key: "requestSignature",
    value: (function () {
      var _requestSignature = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(formData) {
        var entryId, method, hours, requestData, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (this.currentRow) {
                _context.next = 4;
                break;
              }
              alert('Error: No row selected for signature');
              return _context.abrupt("return", false);
            case 4:
              // Get entry data from the current row
              entryId = this.currentRow.dataset.entryId || null;
              method = this.currentRow.querySelector('.methodSelect').value;
              hours = this.currentRow.querySelector('input[type="number"]').value; // Combine with form data
              requestData = _objectSpread({
                entryId: entryId,
                method: method,
                hours: hours
              }, formData); // Send signature request
              _context.next = 10;
              return this.api.post('/api/signatures/request', requestData);
            case 10:
              response = _context.sent;
              if (response.success) {
                _context.next = 14;
                break;
              }
              alert('Error sending signature request: ' + (response.message || 'Unknown error'));
              return _context.abrupt("return", false);
            case 14:
              // Update row with signature ID
              this.currentRow.dataset.signatureID = response.insertedID;
              alert('Signature request email sent successfully!');
              return _context.abrupt("return", true);
            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](0);
              console.error('Error requesting signature:', _context.t0);
              alert('Error sending signature request.');
              return _context.abrupt("return", false);
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 19]]);
      }));
      function requestSignature(_x) {
        return _requestSignature.apply(this, arguments);
      }
      return requestSignature;
    }()
    /**
     * Show verification details in a modal
     * @param {Object} verificationData - Data needed for verification display
     */
    )
  }, {
    key: "showVerificationDetails",
    value: (function () {
      var _showVerificationDetails = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(verificationData) {
        var signatureId, method, hours, supervisor, timestampHash, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              signatureId = verificationData.signatureId, method = verificationData.method, hours = verificationData.hours, supervisor = verificationData.supervisor, timestampHash = verificationData.timestampHash; // Set the values in the modal
              document.getElementById('verifyMethod').textContent = method;
              document.getElementById('verifyHours').textContent = hours;
              document.getElementById('verifySupervisor').textContent = supervisor;
              document.getElementById('verifyDate').textContent = 'Loading...'; // Will be updated
              document.getElementById('verifyHash').textContent = timestampHash || 'No hash available';

              // Show the modal
              document.getElementById('verificationModal').style.display = 'block';

              // If we have more details, fetch them
              if (!signatureId) {
                _context2.next = 19;
                break;
              }
              _context2.prev = 8;
              _context2.next = 11;
              return this.api.get("/api/signatures/verify/".concat(signatureId));
            case 11:
              response = _context2.sent;
              if (response.success) {
                document.getElementById('verifyDate').textContent = new Date(response.verification_date).toLocaleDateString();
              }
              _context2.next = 19;
              break;
            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](8);
              console.error('Error fetching verification details:', _context2.t0);
              document.getElementById('verifyDate').textContent = 'Date unavailable';
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[8, 15]]);
      }));
      function showVerificationDetails(_x2) {
        return _showVerificationDetails.apply(this, arguments);
      }
      return showVerificationDetails;
    }()
    /**
     * Refresh signatures and update UI
     */
    )
  }, {
    key: "refreshSignatures",
    value: (function () {
      var _refreshSignatures = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response, signatures;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return this.api.get('/api/signatures');
            case 3:
              response = _context3.sent;
              if (response.success) {
                _context3.next = 7;
                break;
              }
              console.error('Error fetching signatures:', response.message);
              return _context3.abrupt("return");
            case 7:
              signatures = response.data || [];
              console.log('Received signatures:', signatures);

              // Update UI with signature data
              this.uiManager.updateSignatures(signatures);
              _context3.next = 15;
              break;
            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              console.error('Error refreshing signatures:', _context3.t0);
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 12]]);
      }));
      function refreshSignatures() {
        return _refreshSignatures.apply(this, arguments);
      }
      return refreshSignatures;
    }()
    /**
     * Disable inputs in a signed row
     * @param {HTMLElement} row - The row element to disable
     */
    )
  }, {
    key: "disableSignedRow",
    value: function disableSignedRow(row) {
      // Delegate to UI manager
      this.uiManager.disableSignedRow(row);
    }
  }]);
}();


/***/ }),

/***/ "./src/js/modules/uiManager.js":
/*!*************************************!*\
  !*** ./src/js/modules/uiManager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UIManager)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api */ "./src/js/utils/api.js");
/* harmony import */ var _utils_domUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/domUtils */ "./src/js/utils/domUtils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * UI Manager
 * Handles all UI interactions, rendering, and DOM updates
 */



var UIManager = /*#__PURE__*/function () {
  function UIManager() {
    _classCallCheck(this, UIManager);
    this.api = new _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.eventHandlers = {};
    this.currentMethodSelect = null;
    this.currentCompanySelect = null;
  }

  /**
   * Initialize event listeners for UI elements
   * @param {Object} handlers - Object containing event handler functions
   */
  return _createClass(UIManager, [{
    key: "initializeEventListeners",
    value: function initializeEventListeners(handlers) {
      this.eventHandlers = handlers;

      // Add event listener for logout button
      document.getElementById('logoutBtn').addEventListener('click', handlers.onLogout);

      // Add event listener for add line button
      document.getElementById('addLineBtn').addEventListener('click', handlers.onAddLine);

      // Add event listener for export PDF button
      document.getElementById('exportPDFBtn').addEventListener('click', handlers.onExportPDF);

      // Add event listener for refresh signatures button
      document.getElementById('refreshBtn').addEventListener('click', handlers.onRefreshSignatures);

      // Add event listener for changes to entries
      document.addEventListener('change', this.handleTableChanges.bind(this));

      // Add event listener for input to update totals
      document.addEventListener('input', this.handleInputChanges.bind(this));

      // Add event listener for clicks (delete, sign, verify buttons)
      document.addEventListener('click', this.handleButtonClicks.bind(this));

      // Event delegation for verification modal
      document.addEventListener('click', function (event) {
        // Close button click
        if (event.target.closest('.verification-modal .close')) {
          document.getElementById('verificationModal').style.display = 'none';
        }

        // Click outside modal
        if (event.target.classList.contains('verification-modal')) {
          event.target.style.display = 'none';
        }
      });

      // Set up modal close buttons
      this.setupModals();

      // Initialize signature form
      this.setupSignatureForm();
    }

    /**
     * Handle changes to table values
     * @param {Event} event - Change event
     */
  }, {
    key: "handleTableChanges",
    value: function handleTableChanges(event) {
      // Handle method select change
      if (event.target.classList.contains('methodSelect')) {
        if (event.target.value === 'ADD METHOD') {
          var newMethod = prompt('Enter new method:');
          if (newMethod && this.eventHandlers.onAddMethod) {
            this.currentMethodSelect = event.target;
            this.eventHandlers.onAddMethod(newMethod);
          } else {
            event.target.value = '';
          }
        }
        this.updateTotals();
      }
      // Handle company select change
      else if (event.target.classList.contains('companySelect')) {
        if (event.target.value === 'ADD COMPANY') {
          var newCompany = prompt('Enter new company:');
          if (newCompany && this.eventHandlers.onAddCompany) {
            this.currentCompanySelect = event.target;
            this.eventHandlers.onAddCompany(newCompany);
          } else {
            event.target.value = '';
          }
        }
      }

      // Handle any change within a table row
      var row = event.target.closest('tr');
      if (row && row.dataset.entryId) {
        // Check if this is a signed row
        if (row.classList.contains('signed-row')) {
          alert("This entry has been signed and cannot be modified.");
          // Reset the field to its original value
          event.target.value = event.target.defaultValue;
          return;
        }

        // Get entry data
        var entryId = row.dataset.entryId;
        var dateValue = row.cells[1].querySelector('input[type="date"]').value;
        var methodValue = row.cells[2].querySelector('select').value;
        var locationValue = row.cells[3].querySelector('input[type="text"]').value;
        var hoursValue = parseFloat(row.cells[4].querySelector('input[type="number"]').value) || 0;
        var companyValue = row.cells[5].querySelector('select').value;

        // Call the update handler
        if (this.eventHandlers.onUpdateEntry) {
          this.eventHandlers.onUpdateEntry(entryId, {
            entryDate: dateValue,
            method: methodValue,
            location: locationValue,
            hours: hoursValue,
            company: companyValue
          });

          // Update the defaultValue to match the new value (for reset-on-sign)
          if (event.target.tagName === 'INPUT') {
            event.target.defaultValue = event.target.value;
          }
        }
      }
    }

    /**
     * Handle input changes for numbers to update totals
     * @param {Event} event - Input event
     */
  }, {
    key: "handleInputChanges",
    value: function handleInputChanges(event) {
      if (event.target.type === 'number' && event.target.closest('#trackerTable')) {
        this.updateTotals();
      }
    }

    /**
     * Handle button clicks within the table
     * @param {Event} event - Click event
     */
  }, {
    key: "handleButtonClicks",
    value: function handleButtonClicks(event) {
      var _this = this;
      // Handle delete button clicks
      if (event.target.classList.contains('delete-btn')) {
        var row = event.target.closest('tr');
        var entryId = row.dataset.entryId;
        if (this.eventHandlers.onDeleteEntry) {
          this.eventHandlers.onDeleteEntry(entryId).then(function (success) {
            if (success) {
              row.remove();
              _this.updateTotals();
            }
          });
        }
      }

      // Handle signature request button clicks
      if (event.target.classList.contains('signBtn')) {
        var _row = event.target.closest('tr');
        if (this.eventHandlers.onRequestSignature) {
          this.eventHandlers.onRequestSignature(_row);
        }
      }

      // Handle verification button clicks
      if (event.target.classList.contains('verify-btn')) {
        var signatureId = event.target.dataset.signature;
        var method = event.target.dataset.method;
        var hours = event.target.dataset.hours;
        var supervisor = event.target.closest('tr').querySelector('td:nth-child(7)').textContent.trim();
        var hash = event.target.dataset.hash;
        if (this.eventHandlers.onVerifySignature) {
          this.eventHandlers.onVerifySignature({
            signatureId: signatureId,
            method: method,
            hours: hours,
            supervisor: supervisor,
            timestampHash: hash
          });
        }
      }
    }

    /**
     * Set up modals and their close buttons
     */
  }, {
    key: "setupModals",
    value: function setupModals() {
      // Set up close buttons for all modals
      document.querySelectorAll('.modal .close').forEach(function (closeBtn) {
        closeBtn.addEventListener('click', function () {
          closeBtn.closest('.modal').style.display = 'none';
        });
      });

      // Close modal when clicking outside
      window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
          event.target.style.display = 'none';
        }
      });
    }

    /**
     * Set up signature form submission
     */
  }, {
    key: "setupSignatureForm",
    value: function setupSignatureForm() {
      var _this2 = this;
      var signatureForm = document.getElementById('signatureForm');
      if (signatureForm) {
        signatureForm.addEventListener('submit', function (event) {
          event.preventDefault();

          // Collect form data
          var formData = {
            name: document.getElementById('supervisorName').value,
            email: document.getElementById('supervisorEmail').value,
            company: document.getElementById('supervisorCompany').value,
            asnt: document.getElementById('asnt').value,
            certLevel: document.getElementById('certLevel').value
          };

          // Call the submission handler
          if (_this2.eventHandlers.onSubmitSignature) {
            _this2.eventHandlers.onSubmitSignature(formData).then(function (success) {
              if (success) {
                // Reset the form
                signatureForm.reset();
                // Hide the modal
                document.getElementById('signatureModal').style.display = 'none';
              }
            });
          }
        });
      }
    }

    /**
     * Fetch and display user info
     */
  }, {
    key: "fetchUserInfo",
    value: (function () {
      var _fetchUserInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.api.get('/api/user');
            case 3:
              response = _context.sent;
              if (response.success) {
                // Display user name
                document.getElementById('userDisplay').textContent = "Welcome, ".concat(response.user.full_name);

                // Update the page title
                document.querySelector('h1').textContent = "".concat(response.user.full_name, "'s NDT Hours Tracker");
              }
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error('Error fetching user info:', _context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 7]]);
      }));
      function fetchUserInfo() {
        return _fetchUserInfo.apply(this, arguments);
      }
      return fetchUserInfo;
    }()
    /**
     * Render entries in the table
     * @param {Array} entries - Array of entry objects
     * @param {Array} methods - Array of available methods
     * @param {Array} companies - Array of available companies
     */
    )
  }, {
    key: "renderEntries",
    value: function renderEntries(entries, methods, companies) {
      var _this3 = this;
      var tableBody = document.querySelector('#trackerTable tbody');
      tableBody.innerHTML = ''; // Clear existing rows

      entries.forEach(function (entry) {
        var newRow = _this3.createEntryRow(entry, methods, companies);
        tableBody.appendChild(newRow);
      });
    }

    /**
     * Add a single entry row to the table
     * @param {Object} entry - Entry data
     * @param {Array} methods - Array of available methods
     * @param {Array} companies - Array of available companies
     */
  }, {
    key: "addEntryRow",
    value: function addEntryRow(entry, methods, companies) {
      var tableBody = document.querySelector('#trackerTable tbody');
      var newRow = this.createEntryRow(entry, methods, companies);
      tableBody.appendChild(newRow);
      return newRow;
    }

    /**
     * Create an entry row element
     * @param {Object} entry - Entry data
     * @param {Array} methods - Array of available methods
     * @param {Array} companies - Array of available companies
     * @returns {HTMLElement} - The created row element
     */
  }, {
    key: "createEntryRow",
    value: function createEntryRow(entry, methods, companies) {
      var row = document.createElement('tr');
      row.dataset.entryId = entry.id;

      // Method options
      var methodOptions = methods.map(function (method) {
        return "<option ".concat(entry.method === method ? 'selected' : '', ">").concat(method, "</option>");
      }).join('');

      // Company options
      var companyOptions = companies.map(function (company) {
        return "<option ".concat(entry.company === company ? 'selected' : '', ">").concat(company, "</option>");
      }).join('');
      row.innerHTML = "\n      <td><span class=\"delete-btn\">&times;</span></td>\n      <td><input type=\"date\" value=\"".concat(entry.formattedDate || '', "\"></td>\n      <td>\n        <select class=\"methodSelect\">\n          <option value=\"\" ").concat(entry.method === '' ? 'selected' : '', ">Select Method</option>\n          ").concat(methodOptions, "\n          <option>ADD METHOD</option>\n        </select>\n      </td>\n      <td><input type=\"text\" value=\"").concat(entry.location || '', "\"></td>\n      <td><input type=\"number\" min=\"0\" step=\"0.1\" value=\"").concat(entry.hours || 0, "\"></td>\n      <td>\n        <select class=\"companySelect\">\n          <option value=\"\" ").concat(entry.company === '' ? 'selected' : '', ">Select Company</option>\n          ").concat(companyOptions, "\n          <option>ADD COMPANY</option>\n        </select>\n      </td>\n      <td><button class=\"signBtn\">Request Signature</button></td>\n      <td class=\"hash-cell\"></td>\n    ");
      return row;
    }

    /**
     * Update signatures in the table
     * @param {Array} signatures - Array of signature objects
     */
  }, {
    key: "updateSignatures",
    value: function updateSignatures(signatures) {
      var _this4 = this;
      signatures.forEach(function (sig) {
        var allRows = document.querySelectorAll('#trackerTable tbody tr');
        // Look for the row with a matching entry_id
        var matchingRow = _toConsumableArray(allRows).find(function (r) {
          return r.dataset.entryId == sig.entry_id;
        });
        if (matchingRow && sig.status === 'Confirmed') {
          // Replace the signBtn with the auto_signature text in cursive
          var signCell = matchingRow.querySelector('td:nth-child(7)');
          if (signCell) {
            signCell.innerHTML = "<span class=\"signature\">".concat(sig.auto_signature, "</span>");
          }

          // Add verification button to the last cell if we have a timestamp hash
          var verifyCell = matchingRow.querySelector('td:last-child');
          if (verifyCell && sig.timestamp_hash) {
            verifyCell.innerHTML = "<button class=\"verify-btn\" data-signature=\"".concat(sig.id, "\" \n            data-method=\"").concat(sig.method, "\" data-hours=\"").concat(sig.hours, "\" \n            data-hash=\"").concat(sig.timestamp_hash, "\">Verify</button>");
          } else if (verifyCell) {
            verifyCell.textContent = 'No hash available';
          }

          // Disable all inputs in the signed row
          _this4.disableSignedRow(matchingRow);
        }
      });
    }

    /**
     * Update method select dropdowns
     * @param {Array} methods - Array of available methods
     */
  }, {
    key: "updateMethodSelects",
    value: function updateMethodSelects(methods) {
      var methodSelects = document.querySelectorAll('.methodSelect');
      methodSelects.forEach(function (select) {
        // Get current value
        var currentValue = select.value;

        // Remove existing options except the first and last
        while (select.options.length > 2) {
          select.remove(1);
        }

        // Add methods in reverse order (they'll be inserted after the first option)
        _toConsumableArray(methods).reverse().forEach(function (method) {
          var option = document.createElement('option');
          option.value = method;
          option.text = method;
          select.insertBefore(option, select.options[1]);
        });

        // Try to restore previous value
        if (methods.includes(currentValue)) {
          select.value = currentValue;
        }
      });

      // Set the remembered current select to the new method
      if (this.currentMethodSelect) {
        this.currentMethodSelect.value = methods[methods.length - 1];
        this.updateTotals();
        this.currentMethodSelect = null;
      }
    }

    /**
     * Update company select dropdowns
     * @param {Array} companies - Array of available companies
     */
  }, {
    key: "updateCompanySelects",
    value: function updateCompanySelects(companies) {
      var companySelects = document.querySelectorAll('.companySelect');
      companySelects.forEach(function (select) {
        // Get current value
        var currentValue = select.value;

        // Remove existing options except the first and last
        while (select.options.length > 2) {
          select.remove(1);
        }

        // Add companies in reverse order (they'll be inserted after the first option)
        _toConsumableArray(companies).reverse().forEach(function (company) {
          var option = document.createElement('option');
          option.value = company;
          option.text = company;
          select.insertBefore(option, select.options[1]);
        });

        // Try to restore previous value
        if (companies.includes(currentValue)) {
          select.value = currentValue;
        }
      });

      // Set the remembered current select to the new company
      if (this.currentCompanySelect) {
        this.currentCompanySelect.value = companies[companies.length - 1];
        this.currentCompanySelect = null;
      }
    }

    /**
     * Update total hours and method breakdown
     */
  }, {
    key: "updateTotals",
    value: function updateTotals() {
      var rows = document.querySelectorAll('#trackerTable tbody tr');
      var totalHours = 0;
      var methodTotals = {};
      rows.forEach(function (row) {
        var methodSelect = row.querySelector('.methodSelect');
        var hoursInput = row.querySelector('input[type="number"]');
        if (methodSelect && hoursInput) {
          var method = methodSelect.value;
          var hours = parseFloat(hoursInput.value) || 0;
          if (method && method !== 'ADD METHOD') {
            totalHours += hours;
            if (!methodTotals[method]) {
              methodTotals[method] = 0;
            }
            methodTotals[method] += hours;
          }
        }
      });

      // Update total hours display
      document.getElementById('totalHoursValue').textContent = totalHours.toFixed(1);

      // Update method breakdown table
      var methodTableBody = document.querySelector('#methodTable tbody');
      methodTableBody.innerHTML = ''; // Clear existing rows

      for (var method in methodTotals) {
        var row = document.createElement('tr');
        var methodCell = document.createElement('td');
        methodCell.textContent = method;
        var hoursCell = document.createElement('td');
        hoursCell.textContent = methodTotals[method].toFixed(1);
        row.appendChild(methodCell);
        row.appendChild(hoursCell);
        methodTableBody.appendChild(row);
      }
    }

    /**
     * Disable inputs in a signed row
     * @param {HTMLElement} row - The row to disable
     */
  }, {
    key: "disableSignedRow",
    value: function disableSignedRow(row) {
      // Disable all inputs and selects in the row
      var inputs = row.querySelectorAll('input, select');
      inputs.forEach(function (input) {
        input.disabled = true;
        input.classList.add('signed-field'); // Add a class for styling
      });

      // Add a class to the row itself to indicate it's signed
      row.classList.add('signed-row');
    }

    /**
     * Enhance responsive behavior for mobile devices
     */
  }, {
    key: "enhanceResponsiveBehavior",
    value: function enhanceResponsiveBehavior() {
      // Adjust card layout on window resize
      var adjustLayout = function adjustLayout() {
        var isMobile = window.innerWidth <= 767;
        var tableRows = document.querySelectorAll('#trackerTable tbody tr');
        tableRows.forEach(function (row) {
          // When in mobile view, ensure the delete button is the first element
          // and is properly positioned at the top-right
          var deleteBtn = row.querySelector('.delete-btn');
          if (deleteBtn) {
            if (isMobile) {
              // Ensure delete button's parent cell has proper styling
              deleteBtn.closest('td').classList.add('delete-cell');
            } else {
              deleteBtn.closest('td').classList.remove('delete-cell');
            }
          }
        });
      };

      // Call once on load
      adjustLayout();

      // Call on window resize
      window.addEventListener('resize', adjustLayout);

      // Ensure new rows also get the proper layout
      if (this.eventHandlers.onAddLine) {
        var originalAddLine = this.eventHandlers.onAddLine;
        this.eventHandlers.onAddLine = function () {
          originalAddLine.apply(void 0, arguments);
          // Apply layout adjustments after a short delay to ensure DOM is updated
          setTimeout(adjustLayout, 100);
        };
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/js/utils/api.js":
/*!*****************************!*\
  !*** ./src/js/utils/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApiService)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * API Service
 * Handles all API communication with the server
 */
var ApiService = /*#__PURE__*/function () {
  function ApiService() {
    _classCallCheck(this, ApiService);
  }
  return _createClass(ApiService, [{
    key: "get",
    value: (
    /**
     * Make a GET request
     * @param {string} endpoint - API endpoint
     * @returns {Promise<Object>} - Response data
     */
    function () {
      var _get = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint) {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(endpoint);
            case 3:
              response = _context.sent;
              if (!(response.status === 401)) {
                _context.next = 7;
                break;
              }
              window.location.href = '/login';
              return _context.abrupt("return", {
                success: false,
                message: 'Authentication required'
              });
            case 7:
              if (response.ok) {
                _context.next = 9;
                break;
              }
              throw new Error("API Error: ".concat(response.statusText));
            case 9:
              _context.next = 11;
              return response.json();
            case 11:
              return _context.abrupt("return", _context.sent);
            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              console.error("GET ".concat(endpoint, " failed:"), _context.t0);
              return _context.abrupt("return", {
                success: false,
                message: _context.t0.message
              });
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 14]]);
      }));
      function get(_x) {
        return _get.apply(this, arguments);
      }
      return get;
    }()
    /**
     * Make a POST request
     * @param {string} endpoint - API endpoint
     * @param {Object} data - Request payload
     * @returns {Promise<Object>} - Response data
     */
    )
  }, {
    key: "post",
    value: (function () {
      var _post = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(endpoint, data) {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch(endpoint, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });
            case 3:
              response = _context2.sent;
              if (!(response.status === 401)) {
                _context2.next = 7;
                break;
              }
              window.location.href = '/login';
              return _context2.abrupt("return", {
                success: false,
                message: 'Authentication required'
              });
            case 7:
              if (response.ok) {
                _context2.next = 9;
                break;
              }
              throw new Error("API Error: ".concat(response.statusText));
            case 9:
              _context2.next = 11;
              return response.json();
            case 11:
              return _context2.abrupt("return", _context2.sent);
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              console.error("POST ".concat(endpoint, " failed:"), _context2.t0);
              return _context2.abrupt("return", {
                success: false,
                message: _context2.t0.message
              });
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 14]]);
      }));
      function post(_x2, _x3) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
    /**
     * Make a PUT request
     * @param {string} endpoint - API endpoint
     * @param {Object} data - Request payload
     * @returns {Promise<Object>} - Response data
     */
    )
  }, {
    key: "put",
    value: (function () {
      var _put = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(endpoint, data) {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return fetch(endpoint, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });
            case 3:
              response = _context3.sent;
              if (!(response.status === 401)) {
                _context3.next = 7;
                break;
              }
              window.location.href = '/login';
              return _context3.abrupt("return", {
                success: false,
                message: 'Authentication required'
              });
            case 7:
              if (response.ok) {
                _context3.next = 9;
                break;
              }
              throw new Error("API Error: ".concat(response.statusText));
            case 9:
              _context3.next = 11;
              return response.json();
            case 11:
              return _context3.abrupt("return", _context3.sent);
            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              console.error("PUT ".concat(endpoint, " failed:"), _context3.t0);
              return _context3.abrupt("return", {
                success: false,
                message: _context3.t0.message
              });
            case 18:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 14]]);
      }));
      function put(_x4, _x5) {
        return _put.apply(this, arguments);
      }
      return put;
    }()
    /**
     * Make a DELETE request
     * @param {string} endpoint - API endpoint
     * @returns {Promise<Object>} - Response data
     */
    )
  }, {
    key: "delete",
    value: (function () {
      var _delete2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(endpoint) {
        var response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return fetch(endpoint, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            case 3:
              response = _context4.sent;
              if (!(response.status === 401)) {
                _context4.next = 7;
                break;
              }
              window.location.href = '/login';
              return _context4.abrupt("return", {
                success: false,
                message: 'Authentication required'
              });
            case 7:
              if (response.ok) {
                _context4.next = 9;
                break;
              }
              throw new Error("API Error: ".concat(response.statusText));
            case 9:
              _context4.next = 11;
              return response.json();
            case 11:
              return _context4.abrupt("return", _context4.sent);
            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](0);
              console.error("DELETE ".concat(endpoint, " failed:"), _context4.t0);
              return _context4.abrupt("return", {
                success: false,
                message: _context4.t0.message
              });
            case 18:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 14]]);
      }));
      function _delete(_x6) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }())
  }]);
}();


/***/ }),

/***/ "./src/js/utils/dateUtils.js":
/*!***********************************!*\
  !*** ./src/js/utils/dateUtils.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endOfMonth: () => (/* binding */ endOfMonth),
/* harmony export */   endOfPreviousMonth: () => (/* binding */ endOfPreviousMonth),
/* harmony export */   endOfYear: () => (/* binding */ endOfYear),
/* harmony export */   formatDateForDisplay: () => (/* binding */ formatDateForDisplay),
/* harmony export */   formatDateForInput: () => (/* binding */ formatDateForInput),
/* harmony export */   startOfMonth: () => (/* binding */ startOfMonth),
/* harmony export */   startOfPreviousMonth: () => (/* binding */ startOfPreviousMonth),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/**
 * Date Utils
 * Helper functions for working with dates
 */

/**
 * Format a MySQL date for HTML date input
 * @param {string} mysqlDate - Date in MySQL format (YYYY-MM-DD)
 * @returns {string} - Formatted date string (YYYY-MM-DD)
 */
function formatDateForInput(mysqlDate) {
  if (!mysqlDate) return '';

  // Try to create a date object from the MySQL date
  var date = new Date(mysqlDate);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    console.error('Invalid date:', mysqlDate);
    return '';
  }

  // Format the date as YYYY-MM-DD for HTML date input
  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
  var day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed

  return "".concat(year, "-").concat(month, "-").concat(day);
}

/**
 * Format a date for display to users
 * @param {string|Date} date - Date to format
 * @returns {string} - Formatted date string
 */
function formatDateForDisplay(date) {
  if (!date) return '';

  // Convert to Date object if string
  var dateObj = typeof date === 'string' ? new Date(date) : date;

  // Check if the date is valid
  if (isNaN(dateObj.getTime())) {
    console.error('Invalid date:', date);
    return '';
  }

  // Format the date using browser's locale
  return dateObj.toLocaleDateString();
}

/**
 * Get the start of the current month
 * @returns {Date} - Start of current month
 */
function startOfMonth() {
  var date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * Get the end of the current month
 * @returns {Date} - End of current month
 */
function endOfMonth() {
  var date = new Date();
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

/**
 * Get the start of the previous month
 * @returns {Date} - Start of previous month
 */
function startOfPreviousMonth() {
  var date = new Date();
  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}

/**
 * Get the end of the previous month
 * @returns {Date} - End of previous month
 */
function endOfPreviousMonth() {
  var date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), 0);
}

/**
 * Get the start of the current year
 * @returns {Date} - Start of current year
 */
function startOfYear() {
  var date = new Date();
  return new Date(date.getFullYear(), 0, 1);
}

/**
 * Get the end of the current year
 * @returns {Date} - End of current year
 */
function endOfYear() {
  var date = new Date();
  return new Date(date.getFullYear(), 11, 31);
}

/***/ }),

/***/ "./src/js/utils/domUtils.js":
/*!**********************************!*\
  !*** ./src/js/utils/domUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   clearElement: () => (/* binding */ clearElement),
/* harmony export */   createElementWithAttributes: () => (/* binding */ createElementWithAttributes),
/* harmony export */   isElementVisible: () => (/* binding */ isElementVisible),
/* harmony export */   removeClass: () => (/* binding */ removeClass),
/* harmony export */   toggleClass: () => (/* binding */ toggleClass),
/* harmony export */   waitForElement: () => (/* binding */ waitForElement)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * DOM Utils
 * Helper functions for working with the DOM
 */

/**
 * Create an element with attributes and children
 * @param {string} tag - HTML tag name
 * @param {Object} attributes - Element attributes
 * @param {Array|string|HTMLElement} children - Child elements or text
 * @returns {HTMLElement} - Created element
 */
function createElementWithAttributes(tag) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var element = document.createElement(tag);

  // Set attributes
  Object.entries(attributes).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    if (key === 'className') {
      element.className = value;
    } else if (key === 'style' && _typeof(value) === 'object') {
      Object.entries(value).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          prop = _ref4[0],
          val = _ref4[1];
        element.style[prop] = val;
      });
    } else if (key.startsWith('on') && typeof value === 'function') {
      var eventName = key.slice(2).toLowerCase();
      element.addEventListener(eventName, value);
    } else {
      element.setAttribute(key, value);
    }
  });

  // Add children
  if (children) {
    if (!Array.isArray(children)) {
      children = [children];
    }
    children.forEach(function (child) {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child instanceof HTMLElement) {
        element.appendChild(child);
      }
    });
  }
  return element;
}

/**
 * Remove all children from an element
 * @param {HTMLElement} element - Element to clear
 */
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/**
 * Check if an element is visible
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} - True if element is visible
 */
function isElementVisible(element) {
  var style = window.getComputedStyle(element);
  return style.display !== 'none' && style.visibility !== 'hidden' && element.offsetParent !== null;
}

/**
 * Wait for an element to appear in the DOM
 * @param {string} selector - CSS selector for element
 * @param {number} timeout - Maximum time to wait in ms
 * @returns {Promise<HTMLElement>} - Found element
 */
function waitForElement(selector) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
  return new Promise(function (resolve, reject) {
    // Check if element already exists
    var element = document.querySelector(selector);
    if (element) {
      return resolve(element);
    }

    // Set a timeout to reject the promise
    var timeoutId = setTimeout(function () {
      observer.disconnect();
      reject(new Error("Element ".concat(selector, " not found within ").concat(timeout, "ms")));
    }, timeout);

    // Set up mutation observer to watch for the element
    var observer = new MutationObserver(function () {
      var element = document.querySelector(selector);
      if (element) {
        clearTimeout(timeoutId);
        observer.disconnect();
        resolve(element);
      }
    });

    // Start observing
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  });
}

/**
 * Add a class to an element
 * @param {HTMLElement} element - Element to modify
 * @param {string} className - Class to add
 */
function addClass(element, className) {
  if (element) {
    element.classList.add(className);
  }
}

/**
 * Remove a class from an element
 * @param {HTMLElement} element - Element to modify
 * @param {string} className - Class to remove
 */
function removeClass(element, className) {
  if (element) {
    element.classList.remove(className);
  }
}

/**
 * Toggle a class on an element
 * @param {HTMLElement} element - Element to modify
 * @param {string} className - Class to toggle
 * @param {boolean} force - Force state (optional)
 */
function toggleClass(element, className, force) {
  if (element) {
    element.classList.toggle(className, force);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_entryManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/entryManager */ "./src/js/modules/entryManager.js");
/* harmony import */ var _modules_signatureManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/signatureManager */ "./src/js/modules/signatureManager.js");
/* harmony import */ var _modules_uiManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/uiManager */ "./src/js/modules/uiManager.js");
/* harmony import */ var _modules_exportManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/exportManager */ "./src/js/modules/exportManager.js");
/* harmony import */ var _modules_ropeEntryManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ropeEntryManager.js */ "./src/js/modules/ropeEntryManager.js");
/* harmony import */ var _modules_ropeUIManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ropeUIManager.js */ "./src/js/modules/ropeUIManager.js");
/* harmony import */ var _modules_RopeSignatureManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/RopeSignatureManager.js */ "./src/js/modules/RopeSignatureManager.js");
/**
 * NDT Hours Tracker Application
 * Main entry point for the tracker application
 */









// Initialize application on DOM load
document.addEventListener('DOMContentLoaded', function () {
  var pathname = window.location.pathname;
  if (pathname === '/tracker') {
    var uiManager = new _modules_uiManager__WEBPACK_IMPORTED_MODULE_2__["default"]();
    var entryManager = new _modules_entryManager__WEBPACK_IMPORTED_MODULE_0__["default"](uiManager);
    var signatureManager = new _modules_signatureManager__WEBPACK_IMPORTED_MODULE_1__["default"](uiManager);
    var exportManager = new _modules_exportManager__WEBPACK_IMPORTED_MODULE_3__["default"](entryManager);
    uiManager.initializeEventListeners({
      onAddLine: entryManager.addNewEntry.bind(entryManager),
      onDeleteEntry: entryManager.deleteEntry.bind(entryManager),
      onUpdateEntry: entryManager.updateEntry.bind(entryManager),
      onRequestSignature: signatureManager.openSignatureModal.bind(signatureManager),
      onSubmitSignature: signatureManager.requestSignature.bind(signatureManager),
      onVerifySignature: signatureManager.showVerificationDetails.bind(signatureManager),
      onExportPDF: exportManager.exportToPDF.bind(exportManager),
      onRefreshSignatures: signatureManager.refreshSignatures.bind(signatureManager),
      onAddMethod: entryManager.addMethod.bind(entryManager),
      onAddCompany: entryManager.addCompany.bind(entryManager),
      onLogout: function onLogout() {
        window.location.href = '/logout';
      }
    });
    entryManager.fetchMethods();
    entryManager.fetchCompanies();
    entryManager.fetchEntries();
    uiManager.fetchUserInfo();
    uiManager.enhanceResponsiveBehavior();
  } else if (pathname === '/rope') {
    var ropeUI = new _modules_ropeUIManager_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    var ropeManager = new _modules_ropeEntryManager_js__WEBPACK_IMPORTED_MODULE_4__["default"](ropeUI);
    var ropeSignature = new _modules_RopeSignatureManager_js__WEBPACK_IMPORTED_MODULE_6__["default"](ropeUI);
    ropeUI.entryManager = ropeManager;
    ropeUI.signatureManager = ropeSignature;
    ropeManager.fetchEntries();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map