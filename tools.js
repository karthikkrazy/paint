parcelRequire = function(e, r, n, t) {
    var i = "function" == typeof parcelRequire && parcelRequire,
        o = "function" == typeof require && require;

    function u(n, t) {
        if (!r[n]) {
            if (!e[n]) { var f = "function" == typeof parcelRequire && parcelRequire; if (!t && f) return f(n, !0); if (i) return i(n, !0); if (o && "string" == typeof n) return o(n); var c = new Error("Cannot find module '" + n + "'"); throw c.code = "MODULE_NOT_FOUND", c }
            p.resolve = function(r) { return e[n][1][r] || r };
            var l = r[n] = new u.Module(n);
            e[n][0].call(l.exports, p, l, l.exports, this)
        }
        return r[n].exports;

        function p(e) { return u(p.resolve(e)) }
    }
    u.isParcelRequire = !0, u.Module = function(e) { this.id = e, this.bundle = u, this.exports = {} }, u.modules = e, u.cache = r, u.parent = i, u.register = function(r, n) { e[r] = [function(e, r) { r.exports = n }, {}] };
    for (var f = 0; f < n.length; f++) u(n[f]);
    if (n.length) { var c = u(n[n.length - 1]); "object" == typeof exports && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function() { return c }) : t && (this[t] = c) }
    return u
}({
    "fAfE": [function(require, module, exports) {
        var global = arguments[3];
        var e = arguments[3];
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var t = Object.freeze({});

        function n(e) { return null == e }

        function r(e) { return null != e }

        function i(e) { return !0 === e }

        function o(e) { return !1 === e }

        function a(e) { return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e }

        function s(e) { return null !== e && "object" == typeof e }
        var c = Object.prototype.toString;

        function u(e) { return c.call(e).slice(8, -1) }

        function l(e) { return "[object Object]" === c.call(e) }

        function f(e) { return "[object RegExp]" === c.call(e) }

        function p(e) { var t = parseFloat(String(e)); return t >= 0 && Math.floor(t) === t && isFinite(e) }

        function d(e) { return null == e ? "" : "object" == typeof e ? JSON.stringify(e, null, 2) : String(e) }

        function v(e) { var t = parseFloat(e); return isNaN(t) ? e : t }

        function h(e, t) { for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) n[r[i]] = !0; return t ? function(e) { return n[e.toLowerCase()] } : function(e) { return n[e] } }
        var m = h("slot,component", !0),
            y = h("key,ref,slot,slot-scope,is");

        function g(e, t) { if (e.length) { var n = e.indexOf(t); if (n > -1) return e.splice(n, 1) } }
        var _ = Object.prototype.hasOwnProperty;

        function b(e, t) { return _.call(e, t) }

        function $(e) { var t = Object.create(null); return function(n) { return t[n] || (t[n] = e(n)) } }
        var w = /-(\w)/g,
            x = $(function(e) { return e.replace(w, function(e, t) { return t ? t.toUpperCase() : "" }) }),
            C = $(function(e) { return e.charAt(0).toUpperCase() + e.slice(1) }),
            k = /\B([A-Z])/g,
            A = $(function(e) { return e.replace(k, "-$1").toLowerCase() });

        function O(e, t) {
            function n(n) { var r = arguments.length; return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t) }
            return n._length = e.length, n
        }

        function S(e, t) { return e.bind(t) }
        var T = Function.prototype.bind ? S : O;

        function E(e, t) { t = t || 0; for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t]; return r }

        function j(e, t) { for (var n in t) e[n] = t[n]; return e }

        function N(e) { for (var t = {}, n = 0; n < e.length; n++) e[n] && j(t, e[n]); return t }

        function I(e, t, n) {}
        var L = function(e, t, n) { return !1 },
            M = function(e) { return e };

        function D(e) { return e.reduce(function(e, t) { return e.concat(t.staticKeys || []) }, []).join(",") }

        function P(e, t) {
            if (e === t) return !0;
            var n = s(e),
                r = s(t);
            if (!n || !r) return !n && !r && String(e) === String(t);
            try {
                var i = Array.isArray(e),
                    o = Array.isArray(t);
                if (i && o) return e.length === t.length && e.every(function(e, n) { return P(e, t[n]) });
                if (i || o) return !1;
                var a = Object.keys(e),
                    c = Object.keys(t);
                return a.length === c.length && a.every(function(n) { return P(e[n], t[n]) })
            } catch (e) { return !1 }
        }

        function F(e, t) {
            for (var n = 0; n < e.length; n++)
                if (P(e[n], t)) return n;
            return -1
        }

        function R(e) { var t = !1; return function() { t || (t = !0, e.apply(this, arguments)) } }
        var H = "data-server-rendered",
            B = ["component", "directive", "filter"],
            U = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured"],
            z = { optionMergeStrategies: Object.create(null), silent: !1, productionTip: !1, devtools: !1, performance: !1, errorHandler: null, warnHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: L, isReservedAttr: L, isUnknownElement: L, getTagNamespace: I, parsePlatformTagName: M, mustUseProp: L, _lifecycleHooks: U };

        function V(e) { var t = (e + "").charCodeAt(0); return 36 === t || 95 === t }

        function J(e, t, n, r) { Object.defineProperty(e, t, { value: n, enumerable: !!r, writable: !0, configurable: !0 }) }
        var K = /[^\w.$]/;

        function q(e) {
            if (!K.test(e)) {
                var t = e.split(".");
                return function(e) {
                    for (var n = 0; n < t.length; n++) {
                        if (!e) return;
                        e = e[t[n]]
                    }
                    return e
                }
            }
        }
        var W, Z = "__proto__" in {},
            G = "undefined" != typeof window,
            X = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
            Y = X && WXEnvironment.platform.toLowerCase(),
            Q = G && window.navigator.userAgent.toLowerCase(),
            ee = Q && /msie|trident/.test(Q),
            te = Q && Q.indexOf("msie 9.0") > 0,
            ne = Q && Q.indexOf("edge/") > 0,
            re = Q && Q.indexOf("android") > 0 || "android" === Y,
            ie = Q && /iphone|ipad|ipod|ios/.test(Q) || "ios" === Y,
            oe = Q && /chrome\/\d+/.test(Q) && !ne,
            ae = {}.watch,
            se = !1;
        if (G) try {
            var ce = {};
            Object.defineProperty(ce, "passive", { get: function() { se = !0 } }), window.addEventListener("test-passive", null, ce)
        } catch (e) {}
        var ue = function() { return void 0 === W && (W = !G && !X && void 0 !== e && "server" === e.process.env.VUE_ENV), W },
            le = G && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

        function fe(e) { return "function" == typeof e && /native code/.test(e.toString()) }
        var pe, de = "undefined" != typeof Symbol && fe(Symbol) && "undefined" != typeof Reflect && fe(Reflect.ownKeys);
        pe = "undefined" != typeof Set && fe(Set) ? Set : function() {
            function e() { this.set = Object.create(null) }
            return e.prototype.has = function(e) { return !0 === this.set[e] }, e.prototype.add = function(e) { this.set[e] = !0 }, e.prototype.clear = function() { this.set = Object.create(null) }, e
        }();
        var ve, he, me, ye, ge = I,
            _e = I,
            be = I,
            $e = I,
            we = 0,
            xe = function() { this.id = we++, this.subs = [] };
        xe.prototype.addSub = function(e) { this.subs.push(e) }, xe.prototype.removeSub = function(e) { g(this.subs, e) }, xe.prototype.depend = function() { xe.target && xe.target.addDep(this) }, xe.prototype.notify = function() { for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update() }, xe.target = null;
        var Ce = [];

        function ke(e) { xe.target && Ce.push(xe.target), xe.target = e }

        function Ae() { xe.target = Ce.pop() }
        var Oe = function(e, t, n, r, i, o, a, s) { this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1 },
            Se = { child: { configurable: !0 } };
        Se.child.get = function() { return this.componentInstance }, Object.defineProperties(Oe.prototype, Se);
        var Te = function(e) { void 0 === e && (e = ""); var t = new Oe; return t.text = e, t.isComment = !0, t };

        function Ee(e) { return new Oe(void 0, void 0, void 0, String(e)) }

        function je(e) { var t = new Oe(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions, e.asyncFactory); return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.isCloned = !0, t }
        var Ne = Array.prototype,
            Ie = Object.create(Ne),
            Le = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
        Le.forEach(function(e) {
            var t = Ne[e];
            J(Ie, e, function() {
                for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
                var i, o = t.apply(this, n),
                    a = this.__ob__;
                switch (e) {
                    case "push":
                    case "unshift":
                        i = n;
                        break;
                    case "splice":
                        i = n.slice(2)
                }
                return i && a.observeArray(i), a.dep.notify(), o
            })
        });
        var Me = Object.getOwnPropertyNames(Ie),
            De = !0;

        function Pe(e) { De = e }
        var Fe = function(e) {
            (this.value = e, this.dep = new xe, this.vmCount = 0, J(e, "__ob__", this), Array.isArray(e)) ? ((Z ? Re : He)(e, Ie, Me), this.observeArray(e)) : this.walk(e)
        };

        function Re(e, t, n) { e.__proto__ = t }

        function He(e, t, n) {
            for (var r = 0, i = n.length; r < i; r++) {
                var o = n[r];
                J(e, o, t[o])
            }
        }

        function Be(e, t) { var n; if (s(e) && !(e instanceof Oe)) return b(e, "__ob__") && e.__ob__ instanceof Fe ? n = e.__ob__ : De && !ue() && (Array.isArray(e) || l(e)) && Object.isExtensible(e) && !e._isVue && (n = new Fe(e)), t && n && n.vmCount++, n }

        function Ue(e, t, n, r, i) {
            var o = new xe,
                a = Object.getOwnPropertyDescriptor(e, t);
            if (!a || !1 !== a.configurable) {
                var s = a && a.get;
                s || 2 !== arguments.length || (n = e[t]);
                var c = a && a.set,
                    u = !i && Be(n);
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() { var t = s ? s.call(e) : n; return xe.target && (o.depend(), u && (u.dep.depend(), Array.isArray(t) && Je(t))), t },
                    set: function(t) {
                        var r = s ? s.call(e) : n;
                        t === r || t != t && r != r || (c ? c.call(e, t) : n = t, u = !i && Be(t), o.notify())
                    }
                })
            }
        }

        function ze(e, t, n) { if (Array.isArray(e) && p(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n; if (t in e && !(t in Object.prototype)) return e[t] = n, n; var r = e.__ob__; return e._isVue || r && r.vmCount ? n : r ? (Ue(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n) }

        function Ve(e, t) {
            if (Array.isArray(e) && p(t)) e.splice(t, 1);
            else {
                var n = e.__ob__;
                e._isVue || n && n.vmCount || b(e, t) && (delete e[t], n && n.dep.notify())
            }
        }

        function Je(e) { for (var t = void 0, n = 0, r = e.length; n < r; n++)(t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && Je(t) }
        Fe.prototype.walk = function(e) { for (var t = Object.keys(e), n = 0; n < t.length; n++) Ue(e, t[n]) }, Fe.prototype.observeArray = function(e) { for (var t = 0, n = e.length; t < n; t++) Be(e[t]) };
        var Ke = z.optionMergeStrategies;

        function qe(e, t) { if (!t) return e; for (var n, r, i, o = Object.keys(t), a = 0; a < o.length; a++) r = e[n = o[a]], i = t[n], b(e, n) ? l(r) && l(i) && qe(r, i) : ze(e, n, i); return e }

        function We(e, t, n) {
            return n ? function() {
                var r = "function" == typeof t ? t.call(n, n) : t,
                    i = "function" == typeof e ? e.call(n, n) : e;
                return r ? qe(r, i) : i
            } : t ? e ? function() { return qe("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e) } : t : e
        }

        function Ze(e, t) { return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e }

        function Ge(e, t, n, r) { var i = Object.create(e || null); return t ? j(i, t) : i }
        Ke.data = function(e, t, n) { return n ? We(e, t, n) : t && "function" != typeof t ? e : We(e, t) }, U.forEach(function(e) { Ke[e] = Ze }), B.forEach(function(e) { Ke[e + "s"] = Ge }), Ke.watch = function(e, t, n, r) {
            if (e === ae && (e = void 0), t === ae && (t = void 0), !t) return Object.create(e || null);
            if (!e) return t;
            var i = {};
            for (var o in j(i, e), t) {
                var a = i[o],
                    s = t[o];
                a && !Array.isArray(a) && (a = [a]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s]
            }
            return i
        }, Ke.props = Ke.methods = Ke.inject = Ke.computed = function(e, t, n, r) { if (!e) return t; var i = Object.create(null); return j(i, e), t && j(i, t), i }, Ke.provide = We;
        var Xe = function(e, t) { return void 0 === t ? e : t };

        function Ye(e) { for (var t in e.components) Qe(t) }

        function Qe(e) { /^[a-zA-Z][\w-]*$/.test(e) || ge('Invalid component name: "' + e + '". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.'), (m(e) || z.isReservedTag(e)) && ge("Do not use built-in or reserved HTML elements as component id: " + e) }

        function et(e, t) {
            var n = e.props;
            if (n) {
                var r, i, o = {};
                if (Array.isArray(n))
                    for (r = n.length; r--;) "string" == typeof(i = n[r]) && (o[x(i)] = { type: null });
                else if (l(n))
                    for (var a in n) i = n[a], o[x(a)] = l(i) ? i : { type: i };
                else 0;
                e.props = o
            }
        }

        function tt(e, t) {
            var n = e.inject;
            if (n) {
                var r = e.inject = {};
                if (Array.isArray(n))
                    for (var i = 0; i < n.length; i++) r[n[i]] = { from: n[i] };
                else if (l(n))
                    for (var o in n) {
                        var a = n[o];
                        r[o] = l(a) ? j({ from: o }, a) : { from: a }
                    } else 0
            }
        }

        function nt(e) {
            var t = e.directives;
            if (t)
                for (var n in t) { var r = t[n]; "function" == typeof r && (t[n] = { bind: r, update: r }) }
        }

        function rt(e, t, n) { l(t) || ge('Invalid value for option "' + e + '": expected an Object, but got ' + u(t) + ".", n) }

        function it(e, t, n) {
            "function" == typeof t && (t = t.options), et(t, n), tt(t, n), nt(t);
            var r = t.extends;
            if (r && (e = it(e, r, n)), t.mixins)
                for (var i = 0, o = t.mixins.length; i < o; i++) e = it(e, t.mixins[i], n);
            var a, s = {};
            for (a in e) c(a);
            for (a in t) b(e, a) || c(a);

            function c(r) {
                var i = Ke[r] || Xe;
                s[r] = i(e[r], t[r], n, r)
            }
            return s
        }

        function ot(e, t, n, r) { if ("string" == typeof n) { var i = e[t]; if (b(i, n)) return i[n]; var o = x(n); if (b(i, o)) return i[o]; var a = C(o); if (b(i, a)) return i[a]; var s = i[n] || i[o] || i[a]; return s } }

        function at(e, t, n, r) {
            var i = t[e],
                o = !b(n, e),
                a = n[e],
                s = dt(Boolean, i.type);
            if (s > -1)
                if (o && !b(i, "default")) a = !1;
                else if ("" === a || a === A(e)) {
                var c = dt(String, i.type);
                (c < 0 || s < c) && (a = !0)
            }
            if (void 0 === a) {
                a = st(r, i, e);
                var u = De;
                Pe(!0), Be(a), Pe(u)
            }
            return a
        }

        function st(e, t, n) { if (b(t, "default")) { var r = t.default; return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== ft(t.type) ? r.call(e) : r } }

        function ct(e, t, n, r, i) {
            if (e.required && i) ge('Missing required prop: "' + t + '"', r);
            else if (null != n || e.required) {
                var o = e.type,
                    a = !o || !0 === o,
                    s = [];
                if (o) {
                    Array.isArray(o) || (o = [o]);
                    for (var c = 0; c < o.length && !a; c++) {
                        var l = lt(n, o[c]);
                        s.push(l.expectedType || ""), a = l.valid
                    }
                }
                if (a) {
                    var f = e.validator;
                    f && (f(n) || ge('Invalid prop: custom validator check failed for prop "' + t + '".', r))
                } else ge('Invalid prop: type check failed for prop "' + t + '". Expected ' + s.map(C).join(", ") + ", got " + u(n) + ".", r)
            }
        }
        var ut = /^(String|Number|Boolean|Function|Symbol)$/;

        function lt(e, t) {
            var n, r = ft(t);
            if (ut.test(r)) {
                var i = typeof e;
                (n = i === r.toLowerCase()) || "object" !== i || (n = e instanceof t)
            } else n = "Object" === r ? l(e) : "Array" === r ? Array.isArray(e) : e instanceof t;
            return { valid: n, expectedType: r }
        }

        function ft(e) { var t = e && e.toString().match(/^\s*function (\w+)/); return t ? t[1] : "" }

        function pt(e, t) { return ft(e) === ft(t) }

        function dt(e, t) {
            if (!Array.isArray(t)) return pt(t, e) ? 0 : -1;
            for (var n = 0, r = t.length; n < r; n++)
                if (pt(t[n], e)) return n;
            return -1
        }

        function vt(e, t, n) {
            if (t)
                for (var r = t; r = r.$parent;) {
                    var i = r.$options.errorCaptured;
                    if (i)
                        for (var o = 0; o < i.length; o++) try { if (!1 === i[o].call(r, e, t, n)) return } catch (e) { ht(e, r, "errorCaptured hook") }
                }
            ht(e, t, n)
        }

        function ht(e, t, n) {
            if (z.errorHandler) try { return z.errorHandler.call(null, e, t, n) } catch (e) { mt(e, null, "config.errorHandler") }
            mt(e, t, n)
        }

        function mt(e, t, n) {
            if (!G && !X || "undefined" == typeof console) throw e;
            console.error(e)
        }
        var yt, gt, _t = [],
            bt = !1;

        function $t() {
            bt = !1;
            var e = _t.slice(0);
            _t.length = 0;
            for (var t = 0; t < e.length; t++) e[t]()
        }
        var wt, xt, Ct, kt, At, Ot, St, Tt, Et, jt, Nt = !1;
        if ("undefined" != typeof setImmediate && fe(setImmediate)) gt = function() { setImmediate($t) };
        else if ("undefined" == typeof MessageChannel || !fe(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) gt = function() { setTimeout($t, 0) };
        else {
            var It = new MessageChannel,
                Lt = It.port2;
            It.port1.onmessage = $t, gt = function() { Lt.postMessage(1) }
        }
        if ("undefined" != typeof Promise && fe(Promise)) {
            var Mt = Promise.resolve();
            yt = function() { Mt.then($t), ie && setTimeout(I) }
        } else yt = gt;

        function Dt(e) { return e._withTask || (e._withTask = function() { Nt = !0; var t = e.apply(null, arguments); return Nt = !1, t }) }

        function Pt(e, t) { var n; if (_t.push(function() { if (e) try { e.call(t) } catch (e) { vt(e, t, "nextTick") } else n && n(t) }), bt || (bt = !0, Nt ? gt() : yt()), !e && "undefined" != typeof Promise) return new Promise(function(e) { n = e }) }
        var Ft = new pe;

        function Rt(e) { Ht(e, Ft), Ft.clear() }

        function Ht(e, t) {
            var n, r, i = Array.isArray(e);
            if (!(!i && !s(e) || Object.isFrozen(e) || e instanceof Oe)) {
                if (e.__ob__) {
                    var o = e.__ob__.dep.id;
                    if (t.has(o)) return;
                    t.add(o)
                }
                if (i)
                    for (n = e.length; n--;) Ht(e[n], t);
                else
                    for (n = (r = Object.keys(e)).length; n--;) Ht(e[r[n]], t)
            }
        }
        var Bt, Ut = $(function(e) {
            var t = "&" === e.charAt(0),
                n = "~" === (e = t ? e.slice(1) : e).charAt(0),
                r = "!" === (e = n ? e.slice(1) : e).charAt(0);
            return { name: e = r ? e.slice(1) : e, once: n, capture: r, passive: t }
        });

        function zt(e) {
            function t() {
                var e = arguments,
                    n = t.fns;
                if (!Array.isArray(n)) return n.apply(null, arguments);
                for (var r = n.slice(), i = 0; i < r.length; i++) r[i].apply(null, e)
            }
            return t.fns = e, t
        }

        function Vt(e, t, r, i, o) { var a, s, c, u; for (a in e) s = e[a], c = t[a], u = Ut(a), n(s) || (n(c) ? (n(s.fns) && (s = e[a] = zt(s)), r(u.name, s, u.once, u.capture, u.passive, u.params)) : s !== c && (c.fns = s, e[a] = c)); for (a in t) n(e[a]) && i((u = Ut(a)).name, t[a], u.capture) }

        function Jt(e, t, o) {
            var a;
            e instanceof Oe && (e = e.data.hook || (e.data.hook = {}));
            var s = e[t];

            function c() { o.apply(this, arguments), g(a.fns, c) }
            n(s) ? a = zt([c]) : r(s.fns) && i(s.merged) ? (a = s).fns.push(c) : a = zt([s, c]), a.merged = !0, e[t] = a
        }

        function Kt(e, t, i) {
            var o = t.options.props;
            if (!n(o)) {
                var a = {},
                    s = e.attrs,
                    c = e.props;
                if (r(s) || r(c))
                    for (var u in o) {
                        var l = A(u);
                        qt(a, c, u, l, !0) || qt(a, s, u, l, !1)
                    }
                return a
            }
        }

        function qt(e, t, n, i, o) { if (r(t)) { if (b(t, n)) return e[n] = t[n], o || delete t[n], !0; if (b(t, i)) return e[n] = t[i], o || delete t[i], !0 } return !1 }

        function Wt(e) {
            for (var t = 0; t < e.length; t++)
                if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
            return e
        }

        function Zt(e) { return a(e) ? [Ee(e)] : Array.isArray(e) ? Xt(e) : void 0 }

        function Gt(e) { return r(e) && r(e.text) && o(e.isComment) }

        function Xt(e, t) { var o, s, c, u, l = []; for (o = 0; o < e.length; o++) n(s = e[o]) || "boolean" == typeof s || (u = l[c = l.length - 1], Array.isArray(s) ? s.length > 0 && (Gt((s = Xt(s, (t || "") + "_" + o))[0]) && Gt(u) && (l[c] = Ee(u.text + s[0].text), s.shift()), l.push.apply(l, s)) : a(s) ? Gt(u) ? l[c] = Ee(u.text + s) : "" !== s && l.push(Ee(s)) : Gt(s) && Gt(u) ? l[c] = Ee(u.text + s.text) : (i(e._isVList) && r(s.tag) && n(s.key) && r(t) && (s.key = "__vlist" + t + "_" + o + "__"), l.push(s))); return l }

        function Yt(e, t) { return (e.__esModule || de && "Module" === e[Symbol.toStringTag]) && (e = e.default), s(e) ? t.extend(e) : e }

        function Qt(e, t, n, r, i) { var o = Te(); return o.asyncFactory = e, o.asyncMeta = { data: t, context: n, children: r, tag: i }, o }

        function en(e, t, o) {
            if (i(e.error) && r(e.errorComp)) return e.errorComp;
            if (r(e.resolved)) return e.resolved;
            if (i(e.loading) && r(e.loadingComp)) return e.loadingComp;
            if (!r(e.contexts)) {
                var a = e.contexts = [o],
                    c = !0,
                    u = function() { for (var e = 0, t = a.length; e < t; e++) a[e].$forceUpdate() },
                    l = R(function(n) { e.resolved = Yt(n, t), c || u() }),
                    f = R(function(t) { r(e.errorComp) && (e.error = !0, u()) }),
                    p = e(l, f);
                return s(p) && ("function" == typeof p.then ? n(e.resolved) && p.then(l, f) : r(p.component) && "function" == typeof p.component.then && (p.component.then(l, f), r(p.error) && (e.errorComp = Yt(p.error, t)), r(p.loading) && (e.loadingComp = Yt(p.loading, t), 0 === p.delay ? e.loading = !0 : setTimeout(function() { n(e.resolved) && n(e.error) && (e.loading = !0, u()) }, p.delay || 200)), r(p.timeout) && setTimeout(function() { n(e.resolved) && f(null) }, p.timeout))), c = !1, e.loading ? e.loadingComp : e.resolved
            }
            e.contexts.push(o)
        }

        function tn(e) { return e.isComment && e.asyncFactory }

        function nn(e) {
            if (Array.isArray(e))
                for (var t = 0; t < e.length; t++) { var n = e[t]; if (r(n) && (r(n.componentOptions) || tn(n))) return n }
        }

        function rn(e) {
            e._events = Object.create(null), e._hasHookEvent = !1;
            var t = e.$options._parentListeners;
            t && sn(e, t)
        }

        function on(e, t, n) { n ? Bt.$once(e, t) : Bt.$on(e, t) }

        function an(e, t) { Bt.$off(e, t) }

        function sn(e, t, n) { Bt = e, Vt(t, n || {}, on, an, e), Bt = void 0 }

        function cn(e) {
            var t = /^hook:/;
            e.prototype.$on = function(e, n) {
                if (Array.isArray(e))
                    for (var r = 0, i = e.length; r < i; r++) this.$on(e[r], n);
                else(this._events[e] || (this._events[e] = [])).push(n), t.test(e) && (this._hasHookEvent = !0);
                return this
            }, e.prototype.$once = function(e, t) {
                var n = this;

                function r() { n.$off(e, r), t.apply(n, arguments) }
                return r.fn = t, n.$on(e, r), n
            }, e.prototype.$off = function(e, t) {
                var n = this;
                if (!arguments.length) return n._events = Object.create(null), n;
                if (Array.isArray(e)) { for (var r = 0, i = e.length; r < i; r++) this.$off(e[r], t); return n }
                var o = n._events[e];
                if (!o) return n;
                if (!t) return n._events[e] = null, n;
                if (t)
                    for (var a, s = o.length; s--;)
                        if ((a = o[s]) === t || a.fn === t) { o.splice(s, 1); break }
                return n
            }, e.prototype.$emit = function(e) {
                var t = this,
                    n = t._events[e];
                if (n) { n = n.length > 1 ? E(n) : n; for (var r = E(arguments, 1), i = 0, o = n.length; i < o; i++) try { n[i].apply(t, r) } catch (n) { vt(n, t, 'event handler for "' + e + '"') } }
                return t
            }
        }

        function un(e, t) {
            var n = {};
            if (!e) return n;
            for (var r = 0, i = e.length; r < i; r++) {
                var o = e[r],
                    a = o.data;
                if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== t && o.fnContext !== t || !a || null == a.slot)(n.default || (n.default = [])).push(o);
                else {
                    var s = a.slot,
                        c = n[s] || (n[s] = []);
                    "template" === o.tag ? c.push.apply(c, o.children || []) : c.push(o)
                }
            }
            for (var u in n) n[u].every(ln) && delete n[u];
            return n
        }

        function ln(e) { return e.isComment && !e.asyncFactory || " " === e.text }

        function fn(e, t) { t = t || {}; for (var n = 0; n < e.length; n++) Array.isArray(e[n]) ? fn(e[n], t) : t[e[n].key] = e[n].fn; return t }
        var pn = null,
            dn = !1;

        function vn(e) {
            var t = e.$options,
                n = t.parent;
            if (n && !t.abstract) {
                for (; n.$options.abstract && n.$parent;) n = n.$parent;
                n.$children.push(e)
            }
            e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
        }

        function hn(e) {
            e.prototype._update = function(e, t) {
                var n = this;
                n._isMounted && $n(n, "beforeUpdate");
                var r = n.$el,
                    i = n._vnode,
                    o = pn;
                pn = n, n._vnode = e, i ? n.$el = n.__patch__(i, e) : (n.$el = n.__patch__(n.$el, e, t, !1, n.$options._parentElm, n.$options._refElm), n.$options._parentElm = n.$options._refElm = null), pn = o, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
            }, e.prototype.$forceUpdate = function() { this._watcher && this._watcher.update() }, e.prototype.$destroy = function() {
                var e = this;
                if (!e._isBeingDestroyed) {
                    $n(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                    var t = e.$parent;
                    !t || t._isBeingDestroyed || e.$options.abstract || g(t.$children, e), e._watcher && e._watcher.teardown();
                    for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                    e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), $n(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
                }
            }
        }

        function mn(e, t, n) { var r; return e.$el = t, e.$options.render || (e.$options.render = Te), $n(e, "beforeMount"), r = function() { e._update(e._render(), n) }, new Pn(e, r, I, null, !0), n = !1, null == e.$vnode && (e._isMounted = !0, $n(e, "mounted")), e }

        function yn(e, n, r, i, o) {
            var a = !!(o || e.$options._renderChildren || i.data.scopedSlots || e.$scopedSlots !== t);
            if (e.$options._parentVnode = i, e.$vnode = i, e._vnode && (e._vnode.parent = i), e.$options._renderChildren = o, e.$attrs = i.data.attrs || t, e.$listeners = r || t, n && e.$options.props) {
                Pe(!1);
                for (var s = e._props, c = e.$options._propKeys || [], u = 0; u < c.length; u++) {
                    var l = c[u],
                        f = e.$options.props;
                    s[l] = at(l, f, n, e)
                }
                Pe(!0), e.$options.propsData = n
            }
            r = r || t;
            var p = e.$options._parentListeners;
            e.$options._parentListeners = r, sn(e, r, p), a && (e.$slots = un(o, i.context), e.$forceUpdate())
        }

        function gn(e) {
            for (; e && (e = e.$parent);)
                if (e._inactive) return !0;
            return !1
        }

        function _n(e, t) {
            if (t) { if (e._directInactive = !1, gn(e)) return } else if (e._directInactive) return;
            if (e._inactive || null === e._inactive) {
                e._inactive = !1;
                for (var n = 0; n < e.$children.length; n++) _n(e.$children[n]);
                $n(e, "activated")
            }
        }

        function bn(e, t) {
            if (!(t && (e._directInactive = !0, gn(e)) || e._inactive)) {
                e._inactive = !0;
                for (var n = 0; n < e.$children.length; n++) bn(e.$children[n]);
                $n(e, "deactivated")
            }
        }

        function $n(e, t) {
            ke();
            var n = e.$options[t];
            if (n)
                for (var r = 0, i = n.length; r < i; r++) try { n[r].call(e) } catch (n) { vt(n, e, t + " hook") }
            e._hasHookEvent && e.$emit("hook:" + t), Ae()
        }
        var wn = 100,
            xn = [],
            Cn = [],
            kn = {},
            An = {},
            On = !1,
            Sn = !1,
            Tn = 0;

        function En() { Tn = xn.length = Cn.length = 0, kn = {}, On = Sn = !1 }

        function jn() {
            var e, t;
            for (Sn = !0, xn.sort(function(e, t) { return e.id - t.id }), Tn = 0; Tn < xn.length; Tn++) t = (e = xn[Tn]).id, kn[t] = null, e.run();
            var n = Cn.slice(),
                r = xn.slice();
            En(), Ln(n), Nn(r), le && z.devtools && le.emit("flush")
        }

        function Nn(e) {
            for (var t = e.length; t--;) {
                var n = e[t],
                    r = n.vm;
                r._watcher === n && r._isMounted && $n(r, "updated")
            }
        }

        function In(e) { e._inactive = !1, Cn.push(e) }

        function Ln(e) { for (var t = 0; t < e.length; t++) e[t]._inactive = !0, _n(e[t], !0) }

        function Mn(e) {
            var t = e.id;
            if (null == kn[t]) {
                if (kn[t] = !0, Sn) {
                    for (var n = xn.length - 1; n > Tn && xn[n].id > e.id;) n--;
                    xn.splice(n + 1, 0, e)
                } else xn.push(e);
                On || (On = !0, Pt(jn))
            }
        }
        var Dn = 0,
            Pn = function(e, t, n, r, i) { this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++Dn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new pe, this.newDepIds = new pe, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = q(t), this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get() };
        Pn.prototype.get = function() {
            var e;
            ke(this);
            var t = this.vm;
            try { e = this.getter.call(t, t) } catch (e) {
                if (!this.user) throw e;
                vt(e, t, 'getter for watcher "' + this.expression + '"')
            } finally { this.deep && Rt(e), Ae(), this.cleanupDeps() }
            return e
        }, Pn.prototype.addDep = function(e) {
            var t = e.id;
            this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
        }, Pn.prototype.cleanupDeps = function() {
            for (var e = this.deps.length; e--;) {
                var t = this.deps[e];
                this.newDepIds.has(t.id) || t.removeSub(this)
            }
            var n = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
        }, Pn.prototype.update = function() { this.lazy ? this.dirty = !0 : this.sync ? this.run() : Mn(this) }, Pn.prototype.run = function() { if (this.active) { var e = this.get(); if (e !== this.value || s(e) || this.deep) { var t = this.value; if (this.value = e, this.user) try { this.cb.call(this.vm, e, t) } catch (e) { vt(e, this.vm, 'callback for watcher "' + this.expression + '"') } else this.cb.call(this.vm, e, t) } } }, Pn.prototype.evaluate = function() { this.value = this.get(), this.dirty = !1 }, Pn.prototype.depend = function() { for (var e = this.deps.length; e--;) this.deps[e].depend() }, Pn.prototype.teardown = function() {
            if (this.active) {
                this.vm._isBeingDestroyed || g(this.vm._watchers, this);
                for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
                this.active = !1
            }
        };
        var Fn = { enumerable: !0, configurable: !0, get: I, set: I };

        function Rn(e, t, n) { Fn.get = function() { return this[t][n] }, Fn.set = function(e) { this[t][n] = e }, Object.defineProperty(e, n, Fn) }

        function Hn(e) {
            e._watchers = [];
            var t = e.$options;
            t.props && Bn(e, t.props), t.methods && Wn(e, t.methods), t.data ? Un(e) : Be(e._data = {}, !0), t.computed && Jn(e, t.computed), t.watch && t.watch !== ae && Zn(e, t.watch)
        }

        function Bn(e, t) {
            var n = e.$options.propsData || {},
                r = e._props = {},
                i = e.$options._propKeys = [];
            !e.$parent || Pe(!1);
            var o = function(o) {
                i.push(o);
                var a = at(o, t, n, e);
                Ue(r, o, a), o in e || Rn(e, "_props", o)
            };
            for (var a in t) o(a);
            Pe(!0)
        }

        function Un(e) {
            var t = e.$options.data;
            l(t = e._data = "function" == typeof t ? zn(t, e) : t || {}) || (t = {});
            for (var n = Object.keys(t), r = e.$options.props, i = (e.$options.methods, n.length); i--;) {
                var o = n[i];
                0, r && b(r, o) || V(o) || Rn(e, "_data", o)
            }
            Be(t, !0)
        }

        function zn(e, t) { ke(); try { return e.call(t, t) } catch (e) { return vt(e, t, "data()"), {} } finally { Ae() } }
        var Vn = { lazy: !0 };

        function Jn(e, t) {
            var n = e._computedWatchers = Object.create(null),
                r = ue();
            for (var i in t) {
                var o = t[i],
                    a = "function" == typeof o ? o : o.get;
                0, r || (n[i] = new Pn(e, a || I, I, Vn)), i in e || Kn(e, i, o)
            }
        }

        function Kn(e, t, n) { var r = !ue(); "function" == typeof n ? (Fn.get = r ? qn(t) : n, Fn.set = I) : (Fn.get = n.get ? r && !1 !== n.cache ? qn(t) : n.get : I, Fn.set = n.set ? n.set : I), Object.defineProperty(e, t, Fn) }

        function qn(e) { return function() { var t = this._computedWatchers && this._computedWatchers[e]; if (t) return t.dirty && t.evaluate(), xe.target && t.depend(), t.value } }

        function Wn(e, t) { e.$options.props; for (var n in t) e[n] = null == t[n] ? I : T(t[n], e) }

        function Zn(e, t) {
            for (var n in t) {
                var r = t[n];
                if (Array.isArray(r))
                    for (var i = 0; i < r.length; i++) Gn(e, n, r[i]);
                else Gn(e, n, r)
            }
        }

        function Gn(e, t, n, r) { return l(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r) }

        function Xn(e) {
            var t = { get: function() { return this._data } },
                n = { get: function() { return this._props } };
            Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = ze, e.prototype.$delete = Ve, e.prototype.$watch = function(e, t, n) {
                if (l(t)) return Gn(this, e, t, n);
                (n = n || {}).user = !0;
                var r = new Pn(this, e, t, n);
                return n.immediate && t.call(this, r.value),
                    function() { r.teardown() }
            }
        }

        function Yn(e) {
            var t = e.$options.provide;
            t && (e._provided = "function" == typeof t ? t.call(e) : t)
        }

        function Qn(e) {
            var t = er(e.$options.inject, e);
            t && (Pe(!1), Object.keys(t).forEach(function(n) { Ue(e, n, t[n]) }), Pe(!0))
        }

        function er(e, t) {
            if (e) {
                for (var n = Object.create(null), r = de ? Reflect.ownKeys(e).filter(function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }) : Object.keys(e), i = 0; i < r.length; i++) {
                    for (var o = r[i], a = e[o].from, s = t; s;) {
                        if (s._provided && b(s._provided, a)) { n[o] = s._provided[a]; break }
                        s = s.$parent
                    }
                    if (!s)
                        if ("default" in e[o]) {
                            var c = e[o].default;
                            n[o] = "function" == typeof c ? c.call(t) : c
                        } else 0
                }
                return n
            }
        }

        function tr(e, t) {
            var n, i, o, a, c;
            if (Array.isArray(e) || "string" == typeof e)
                for (n = new Array(e.length), i = 0, o = e.length; i < o; i++) n[i] = t(e[i], i);
            else if ("number" == typeof e)
                for (n = new Array(e), i = 0; i < e; i++) n[i] = t(i + 1, i);
            else if (s(e))
                for (a = Object.keys(e), n = new Array(a.length), i = 0, o = a.length; i < o; i++) c = a[i], n[i] = t(e[c], c, i);
            return r(n) && (n._isVList = !0), n
        }

        function nr(e, t, n, r) {
            var i, o = this.$scopedSlots[e];
            if (o) n = n || {}, r && (n = j(j({}, r), n)), i = o(n) || t;
            else {
                var a = this.$slots[e];
                a && (a._rendered = !0), i = a || t
            }
            var s = n && n.slot;
            return s ? this.$createElement("template", { slot: s }, i) : i
        }

        function rr(e) { return ot(this.$options, "filters", e, !0) || M }

        function ir(e, t) { return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t }

        function or(e, t, n, r, i) { var o = z.keyCodes[t] || n; return i && r && !z.keyCodes[t] ? ir(i, r) : o ? ir(o, e) : r ? A(r) !== t : void 0 }

        function ar(e, t, n, r, i) {
            if (n)
                if (s(n)) {
                    var o;
                    Array.isArray(n) && (n = N(n));
                    var a = function(a) {
                        if ("class" === a || "style" === a || y(a)) o = e;
                        else {
                            var s = e.attrs && e.attrs.type;
                            o = r || z.mustUseProp(t, s, a) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                        }
                        a in o || (o[a] = n[a], i && ((e.on || (e.on = {}))["update:" + a] = function(e) { n[a] = e }))
                    };
                    for (var c in n) a(c)
                } else;
            return e
        }

        function sr(e, t) {
            var n = this._staticTrees || (this._staticTrees = []),
                r = n[e];
            return r && !t ? r : (ur(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r)
        }

        function cr(e, t, n) { return ur(e, "__once__" + t + (n ? "_" + n : ""), !0), e }

        function ur(e, t, n) {
            if (Array.isArray(e))
                for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && lr(e[r], t + "_" + r, n);
            else lr(e, t, n)
        }

        function lr(e, t, n) { e.isStatic = !0, e.key = t, e.isOnce = n }

        function fr(e, t) {
            if (t)
                if (l(t)) {
                    var n = e.on = e.on ? j({}, e.on) : {};
                    for (var r in t) {
                        var i = n[r],
                            o = t[r];
                        n[r] = i ? [].concat(i, o) : o
                    }
                } else;
            return e
        }

        function pr(e) { e._o = cr, e._n = v, e._s = d, e._l = tr, e._t = nr, e._q = P, e._i = F, e._m = sr, e._f = rr, e._k = or, e._b = ar, e._v = Ee, e._e = Te, e._u = fn, e._g = fr }

        function dr(e, n, r, o, a) {
            var s, c = a.options;
            b(o, "_uid") ? (s = Object.create(o))._original = o : (s = o, o = o._original);
            var u = i(c._compiled),
                l = !u;
            this.data = e, this.props = n, this.children = r, this.parent = o, this.listeners = e.on || t, this.injections = er(c.inject, o), this.slots = function() { return un(r, o) }, u && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = e.scopedSlots || t), c._scopeId ? this._c = function(e, t, n, r) { var i = kr(s, e, t, n, r, l); return i && !Array.isArray(i) && (i.fnScopeId = c._scopeId, i.fnContext = o), i } : this._c = function(e, t, n, r) { return kr(s, e, t, n, r, l) }
        }

        function vr(e, n, i, o, a) {
            var s = e.options,
                c = {},
                u = s.props;
            if (r(u))
                for (var l in u) c[l] = at(l, u, n || t);
            else r(i.attrs) && mr(c, i.attrs), r(i.props) && mr(c, i.props);
            var f = new dr(i, c, a, o, e),
                p = s.render.call(null, f._c, f);
            if (p instanceof Oe) return hr(p, i, f.parent, s);
            if (Array.isArray(p)) { for (var d = Zt(p) || [], v = new Array(d.length), h = 0; h < d.length; h++) v[h] = hr(d[h], i, f.parent, s); return v }
        }

        function hr(e, t, n, r) { var i = je(e); return i.fnContext = n, i.fnOptions = r, t.slot && ((i.data || (i.data = {})).slot = t.slot), i }

        function mr(e, t) { for (var n in t) e[x(n)] = t[n] }
        pr(dr.prototype);
        var yr = {
                init: function(e, t, n, r) {
                    if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                        var i = e;
                        yr.prepatch(i, i)
                    } else {
                        (e.componentInstance = br(e, pn, n, r)).$mount(t ? e.elm : void 0, t)
                    }
                },
                prepatch: function(e, t) {
                    var n = t.componentOptions;
                    yn(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
                },
                insert: function(e) {
                    var t = e.context,
                        n = e.componentInstance;
                    n._isMounted || (n._isMounted = !0, $n(n, "mounted")), e.data.keepAlive && (t._isMounted ? In(n) : _n(n, !0))
                },
                destroy: function(e) {
                    var t = e.componentInstance;
                    t._isDestroyed || (e.data.keepAlive ? bn(t, !0) : t.$destroy())
                }
            },
            gr = Object.keys(yr);

        function _r(e, t, o, a, c) {
            if (!n(e)) {
                var u = o.$options._base;
                if (s(e) && (e = u.extend(e)), "function" == typeof e) {
                    var l;
                    if (n(e.cid) && void 0 === (e = en(l = e, u, o))) return Qt(l, t, o, a, c);
                    t = t || {}, Lr(e), r(t.model) && wr(e.options, t);
                    var f = Kt(t, e, c);
                    if (i(e.options.functional)) return vr(e, f, t, o, a);
                    var p = t.on;
                    if (t.on = t.nativeOn, i(e.options.abstract)) {
                        var d = t.slot;
                        t = {}, d && (t.slot = d)
                    }
                    $r(t);
                    var v = e.options.name || c;
                    return new Oe("vue-component-" + e.cid + (v ? "-" + v : ""), t, void 0, void 0, void 0, o, { Ctor: e, propsData: f, listeners: p, tag: c, children: a }, l)
                }
            }
        }

        function br(e, t, n, i) {
            var o = { _isComponent: !0, parent: t, _parentVnode: e, _parentElm: n || null, _refElm: i || null },
                a = e.data.inlineTemplate;
            return r(a) && (o.render = a.render, o.staticRenderFns = a.staticRenderFns), new e.componentOptions.Ctor(o)
        }

        function $r(e) {
            for (var t = e.hook || (e.hook = {}), n = 0; n < gr.length; n++) {
                var r = gr[n];
                t[r] = yr[r]
            }
        }

        function wr(e, t) {
            var n = e.model && e.model.prop || "value",
                i = e.model && e.model.event || "input";
            (t.props || (t.props = {}))[n] = t.model.value;
            var o = t.on || (t.on = {});
            r(o[i]) ? o[i] = [t.model.callback].concat(o[i]) : o[i] = t.model.callback
        }
        var xr = 1,
            Cr = 2;

        function kr(e, t, n, r, o, s) { return (Array.isArray(n) || a(n)) && (o = r, r = n, n = void 0), i(s) && (o = Cr), Ar(e, t, n, r, o) }

        function Ar(e, t, n, i, o) {
            if (r(n) && r(n.__ob__)) return Te();
            if (r(n) && r(n.is) && (t = n.is), !t) return Te();
            var a, s, c;
            (Array.isArray(i) && "function" == typeof i[0] && ((n = n || {}).scopedSlots = { default: i[0] }, i.length = 0), o === Cr ? i = Zt(i) : o === xr && (i = Wt(i)), "string" == typeof t) ? (s = e.$vnode && e.$vnode.ns || z.getTagNamespace(t), a = z.isReservedTag(t) ? new Oe(z.parsePlatformTagName(t), n, i, void 0, void 0, e) : r(c = ot(e.$options, "components", t)) ? _r(c, n, e, i, t) : new Oe(t, n, i, void 0, void 0, e)) : a = _r(t, n, e, i);
            return Array.isArray(a) ? a : r(a) ? (r(s) && Or(a, s), r(n) && Sr(n), a) : Te()
        }

        function Or(e, t, o) {
            if (e.ns = t, "foreignObject" === e.tag && (t = void 0, o = !0), r(e.children))
                for (var a = 0, s = e.children.length; a < s; a++) {
                    var c = e.children[a];
                    r(c.tag) && (n(c.ns) || i(o) && "svg" !== c.tag) && Or(c, t, o)
                }
        }

        function Sr(e) { s(e.style) && Rt(e.style), s(e.class) && Rt(e.class) }

        function Tr(e) {
            e._vnode = null, e._staticTrees = null;
            var n = e.$options,
                r = e.$vnode = n._parentVnode,
                i = r && r.context;
            e.$slots = un(n._renderChildren, i), e.$scopedSlots = t, e._c = function(t, n, r, i) { return kr(e, t, n, r, i, !1) }, e.$createElement = function(t, n, r, i) { return kr(e, t, n, r, i, !0) };
            var o = r && r.data;
            Ue(e, "$attrs", o && o.attrs || t, null, !0), Ue(e, "$listeners", n._parentListeners || t, null, !0)
        }

        function Er(e) {
            pr(e.prototype), e.prototype.$nextTick = function(e) { return Pt(e, this) }, e.prototype._render = function() {
                var e, n = this,
                    r = n.$options,
                    i = r.render,
                    o = r._parentVnode;
                o && (n.$scopedSlots = o.data.scopedSlots || t), n.$vnode = o;
                try { e = i.call(n._renderProxy, n.$createElement) } catch (t) { vt(t, n, "render"), e = n._vnode }
                return e instanceof Oe || (e = Te()), e.parent = o, e
            }
        }
        var jr = 0;

        function Nr(e) {
            e.prototype._init = function(e) {
                var t = this;
                t._uid = jr++, t._isVue = !0, e && e._isComponent ? Ir(t, e) : t.$options = it(Lr(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, vn(t), rn(t), Tr(t), $n(t, "beforeCreate"), Qn(t), Hn(t), Yn(t), $n(t, "created"), t.$options.el && t.$mount(t.$options.el)
            }
        }

        function Ir(e, t) {
            var n = e.$options = Object.create(e.constructor.options),
                r = t._parentVnode;
            n.parent = t.parent, n._parentVnode = r, n._parentElm = t._parentElm, n._refElm = t._refElm;
            var i = r.componentOptions;
            n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
        }

        function Lr(e) {
            var t = e.options;
            if (e.super) {
                var n = Lr(e.super);
                if (n !== e.superOptions) {
                    e.superOptions = n;
                    var r = Mr(e);
                    r && j(e.extendOptions, r), (t = e.options = it(n, e.extendOptions)).name && (t.components[t.name] = e)
                }
            }
            return t
        }

        function Mr(e) {
            var t, n = e.options,
                r = e.extendOptions,
                i = e.sealedOptions;
            for (var o in n) n[o] !== i[o] && (t || (t = {}), t[o] = Dr(n[o], r[o], i[o]));
            return t
        }

        function Dr(e, t, n) {
            if (Array.isArray(e)) {
                var r = [];
                n = Array.isArray(n) ? n : [n], t = Array.isArray(t) ? t : [t];
                for (var i = 0; i < e.length; i++)(t.indexOf(e[i]) >= 0 || n.indexOf(e[i]) < 0) && r.push(e[i]);
                return r
            }
            return e
        }

        function Pr(e) { this._init(e) }

        function Fr(e) { e.use = function(e) { var t = this._installedPlugins || (this._installedPlugins = []); if (t.indexOf(e) > -1) return this; var n = E(arguments, 1); return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this } }

        function Rr(e) { e.mixin = function(e) { return this.options = it(this.options, e), this } }

        function Hr(e) {
            e.cid = 0;
            var t = 1;
            e.extend = function(e) {
                e = e || {};
                var n = this,
                    r = n.cid,
                    i = e._Ctor || (e._Ctor = {});
                if (i[r]) return i[r];
                var o = e.name || n.options.name;
                var a = function(e) { this._init(e) };
                return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = t++, a.options = it(n.options, e), a.super = n, a.options.props && Br(a), a.options.computed && Ur(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, B.forEach(function(e) { a[e] = n[e] }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = j({}, a.options), i[r] = a, a
            }
        }

        function Br(e) { var t = e.options.props; for (var n in t) Rn(e.prototype, "_props", n) }

        function Ur(e) { var t = e.options.computed; for (var n in t) Kn(e.prototype, n, t[n]) }

        function zr(e) { B.forEach(function(t) { e[t] = function(e, n) { return n ? ("component" === t && l(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = { bind: n, update: n }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e] } }) }

        function Vr(e) { return e && (e.Ctor.options.name || e.tag) }

        function Jr(e, t) { return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!f(e) && e.test(t) }

        function Kr(e, t) {
            var n = e.cache,
                r = e.keys,
                i = e._vnode;
            for (var o in n) {
                var a = n[o];
                if (a) {
                    var s = Vr(a.componentOptions);
                    s && !t(s) && qr(n, o, r, i)
                }
            }
        }

        function qr(e, t, n, r) { var i = e[t];!i || r && i.tag === r.tag || i.componentInstance.$destroy(), e[t] = null, g(n, t) }
        Nr(Pr), Xn(Pr), cn(Pr), hn(Pr), Er(Pr);
        var Wr = [String, RegExp, Array],
            Zr = {
                name: "keep-alive",
                abstract: !0,
                props: { include: Wr, exclude: Wr, max: [String, Number] },
                created: function() { this.cache = Object.create(null), this.keys = [] },
                destroyed: function() { for (var e in this.cache) qr(this.cache, e, this.keys) },
                mounted: function() {
                    var e = this;
                    this.$watch("include", function(t) { Kr(e, function(e) { return Jr(t, e) }) }), this.$watch("exclude", function(t) { Kr(e, function(e) { return !Jr(t, e) }) })
                },
                render: function() {
                    var e = this.$slots.default,
                        t = nn(e),
                        n = t && t.componentOptions;
                    if (n) {
                        var r = Vr(n),
                            i = this.include,
                            o = this.exclude;
                        if (i && (!r || !Jr(i, r)) || o && r && Jr(o, r)) return t;
                        var a = this.cache,
                            s = this.keys,
                            c = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                        a[c] ? (t.componentInstance = a[c].componentInstance, g(s, c), s.push(c)) : (a[c] = t, s.push(c), this.max && s.length > parseInt(this.max) && qr(a, s[0], s, this._vnode)), t.data.keepAlive = !0
                    }
                    return t || e && e[0]
                }
            },
            Gr = { KeepAlive: Zr };

        function Xr(e) {
            var t = { get: function() { return z } };
            Object.defineProperty(e, "config", t), e.util = { warn: ge, extend: j, mergeOptions: it, defineReactive: Ue }, e.set = ze, e.delete = Ve, e.nextTick = Pt, e.options = Object.create(null), B.forEach(function(t) { e.options[t + "s"] = Object.create(null) }), e.options._base = e, j(e.options.components, Gr), Fr(e), Rr(e), Hr(e), zr(e)
        }
        Xr(Pr), Object.defineProperty(Pr.prototype, "$isServer", { get: ue }), Object.defineProperty(Pr.prototype, "$ssrContext", { get: function() { return this.$vnode && this.$vnode.ssrContext } }), Object.defineProperty(Pr, "FunctionalRenderContext", { value: dr }), Pr.version = "2.5.16";
        var Yr = h("style,class"),
            Qr = h("input,textarea,option,select,progress"),
            ei = function(e, t, n) { return "value" === n && Qr(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e },
            ti = h("contenteditable,draggable,spellcheck"),
            ni = h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
            ri = "http://www.w3.org/1999/xlink",
            ii = function(e) { return ":" === e.charAt(5) && "xlink" === e.slice(0, 5) },
            oi = function(e) { return ii(e) ? e.slice(6, e.length) : "" },
            ai = function(e) { return null == e || !1 === e };

        function si(e) { for (var t = e.data, n = e, i = e; r(i.componentInstance);)(i = i.componentInstance._vnode) && i.data && (t = ci(i.data, t)); for (; r(n = n.parent);) n && n.data && (t = ci(t, n.data)); return ui(t.staticClass, t.class) }

        function ci(e, t) { return { staticClass: li(e.staticClass, t.staticClass), class: r(e.class) ? [e.class, t.class] : t.class } }

        function ui(e, t) { return r(e) || r(t) ? li(e, fi(t)) : "" }

        function li(e, t) { return e ? t ? e + " " + t : e : t || "" }

        function fi(e) { return Array.isArray(e) ? pi(e) : s(e) ? di(e) : "string" == typeof e ? e : "" }

        function pi(e) { for (var t, n = "", i = 0, o = e.length; i < o; i++) r(t = fi(e[i])) && "" !== t && (n && (n += " "), n += t); return n }

        function di(e) { var t = ""; for (var n in e) e[n] && (t && (t += " "), t += n); return t }
        var vi = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
            hi = h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
            mi = h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
            yi = function(e) { return "pre" === e },
            gi = function(e) { return hi(e) || mi(e) };

        function _i(e) { return mi(e) ? "svg" : "math" === e ? "math" : void 0 }
        var bi = Object.create(null);

        function $i(e) { if (!G) return !0; if (gi(e)) return !1; if (e = e.toLowerCase(), null != bi[e]) return bi[e]; var t = document.createElement(e); return e.indexOf("-") > -1 ? bi[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : bi[e] = /HTMLUnknownElement/.test(t.toString()) }
        var wi = h("text,number,password,search,email,tel,url");

        function xi(e) { if ("string" == typeof e) { var t = document.querySelector(e); return t || document.createElement("div") } return e }

        function Ci(e, t) { var n = document.createElement(e); return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n) }

        function ki(e, t) { return document.createElementNS(vi[e], t) }

        function Ai(e) { return document.createTextNode(e) }

        function Oi(e) { return document.createComment(e) }

        function Si(e, t, n) { e.insertBefore(t, n) }

        function Ti(e, t) { e.removeChild(t) }

        function Ei(e, t) { e.appendChild(t) }

        function ji(e) { return e.parentNode }

        function Ni(e) { return e.nextSibling }

        function Ii(e) { return e.tagName }

        function Li(e, t) { e.textContent = t }

        function Mi(e, t) { e.setAttribute(t, "") }
        var Di = Object.freeze({ createElement: Ci, createElementNS: ki, createTextNode: Ai, createComment: Oi, insertBefore: Si, removeChild: Ti, appendChild: Ei, parentNode: ji, nextSibling: Ni, tagName: Ii, setTextContent: Li, setStyleScope: Mi }),
            Pi = { create: function(e, t) { Fi(t) }, update: function(e, t) { e.data.ref !== t.data.ref && (Fi(e, !0), Fi(t)) }, destroy: function(e) { Fi(e, !0) } };

        function Fi(e, t) {
            var n = e.data.ref;
            if (r(n)) {
                var i = e.context,
                    o = e.componentInstance || e.elm,
                    a = i.$refs;
                t ? Array.isArray(a[n]) ? g(a[n], o) : a[n] === o && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(o) < 0 && a[n].push(o) : a[n] = [o] : a[n] = o
            }
        }
        var Ri = new Oe("", {}, []),
            Hi = ["create", "activate", "update", "remove", "destroy"];

        function Bi(e, t) { return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && r(e.data) === r(t.data) && Ui(e, t) || i(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && n(t.asyncFactory.error)) }

        function Ui(e, t) {
            if ("input" !== e.tag) return !0;
            var n, i = r(n = e.data) && r(n = n.attrs) && n.type,
                o = r(n = t.data) && r(n = n.attrs) && n.type;
            return i === o || wi(i) && wi(o)
        }

        function zi(e, t, n) { var i, o, a = {}; for (i = t; i <= n; ++i) r(o = e[i].key) && (a[o] = i); return a }

        function Vi(e) {
            var t, o, s = {},
                c = e.modules,
                u = e.nodeOps;
            for (t = 0; t < Hi.length; ++t)
                for (s[Hi[t]] = [], o = 0; o < c.length; ++o) r(c[o][Hi[t]]) && s[Hi[t]].push(c[o][Hi[t]]);

            function l(e) {
                var t = u.parentNode(e);
                r(t) && u.removeChild(t, e)
            }

            function f(e, t, n, o, a, c, l) {
                if (r(e.elm) && r(c) && (e = c[l] = je(e)), e.isRootInsert = !a, ! function(e, t, n, o) {
                        var a = e.data;
                        if (r(a)) {
                            var c = r(e.componentInstance) && a.keepAlive;
                            if (r(a = a.hook) && r(a = a.init) && a(e, !1, n, o), r(e.componentInstance)) return p(e, t), i(c) && function(e, t, n, i) {
                                var o, a = e;
                                for (; a.componentInstance;)
                                    if (a = a.componentInstance._vnode, r(o = a.data) && r(o = o.transition)) {
                                        for (o = 0; o < s.activate.length; ++o) s.activate[o](Ri, a);
                                        t.push(a);
                                        break
                                    }
                                d(n, e.elm, i)
                            }(e, t, n, o), !0
                        }
                    }(e, t, n, o)) {
                    var f = e.data,
                        h = e.children,
                        m = e.tag;
                    r(m) ? (e.elm = e.ns ? u.createElementNS(e.ns, m) : u.createElement(m, e), g(e), v(e, h, t), r(f) && y(e, t), d(n, e.elm, o)) : i(e.isComment) ? (e.elm = u.createComment(e.text), d(n, e.elm, o)) : (e.elm = u.createTextNode(e.text), d(n, e.elm, o))
                }
            }

            function p(e, t) { r(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, m(e) ? (y(e, t), g(e)) : (Fi(e), t.push(e)) }

            function d(e, t, n) { r(e) && (r(n) ? n.parentNode === e && u.insertBefore(e, t, n) : u.appendChild(e, t)) }

            function v(e, t, n) { if (Array.isArray(t)) { 0; for (var r = 0; r < t.length; ++r) f(t[r], n, e.elm, null, !0, t, r) } else a(e.text) && u.appendChild(e.elm, u.createTextNode(String(e.text))) }

            function m(e) { for (; e.componentInstance;) e = e.componentInstance._vnode; return r(e.tag) }

            function y(e, n) {
                for (var i = 0; i < s.create.length; ++i) s.create[i](Ri, e);
                r(t = e.data.hook) && (r(t.create) && t.create(Ri, e), r(t.insert) && n.push(e))
            }

            function g(e) {
                var t;
                if (r(t = e.fnScopeId)) u.setStyleScope(e.elm, t);
                else
                    for (var n = e; n;) r(t = n.context) && r(t = t.$options._scopeId) && u.setStyleScope(e.elm, t), n = n.parent;
                r(t = pn) && t !== e.context && t !== e.fnContext && r(t = t.$options._scopeId) && u.setStyleScope(e.elm, t)
            }

            function _(e, t, n, r, i, o) { for (; r <= i; ++r) f(n[r], o, e, t, !1, n, r) }

            function b(e) {
                var t, n, i = e.data;
                if (r(i))
                    for (r(t = i.hook) && r(t = t.destroy) && t(e), t = 0; t < s.destroy.length; ++t) s.destroy[t](e);
                if (r(t = e.children))
                    for (n = 0; n < e.children.length; ++n) b(e.children[n])
            }

            function $(e, t, n, i) {
                for (; n <= i; ++n) {
                    var o = t[n];
                    r(o) && (r(o.tag) ? (w(o), b(o)) : l(o.elm))
                }
            }

            function w(e, t) {
                if (r(t) || r(e.data)) {
                    var n, i = s.remove.length + 1;
                    for (r(t) ? t.listeners += i : t = function(e, t) {
                            function n() { 0 == --n.listeners && l(e) }
                            return n.listeners = t, n
                        }(e.elm, i), r(n = e.componentInstance) && r(n = n._vnode) && r(n.data) && w(n, t), n = 0; n < s.remove.length; ++n) s.remove[n](e, t);
                    r(n = e.data.hook) && r(n = n.remove) ? n(e, t) : t()
                } else l(e.elm)
            }

            function x(e, t, n, i) { for (var o = n; o < i; o++) { var a = t[o]; if (r(a) && Bi(e, a)) return o } }

            function C(e, t, o, a) {
                if (e !== t) {
                    var c = t.elm = e.elm;
                    if (i(e.isAsyncPlaceholder)) r(t.asyncFactory.resolved) ? O(e.elm, t, o) : t.isAsyncPlaceholder = !0;
                    else if (i(t.isStatic) && i(e.isStatic) && t.key === e.key && (i(t.isCloned) || i(t.isOnce))) t.componentInstance = e.componentInstance;
                    else {
                        var l, p = t.data;
                        r(p) && r(l = p.hook) && r(l = l.prepatch) && l(e, t);
                        var d = e.children,
                            v = t.children;
                        if (r(p) && m(t)) {
                            for (l = 0; l < s.update.length; ++l) s.update[l](e, t);
                            r(l = p.hook) && r(l = l.update) && l(e, t)
                        }
                        n(t.text) ? r(d) && r(v) ? d !== v && function(e, t, i, o, a) {
                            var s, c, l, p = 0,
                                d = 0,
                                v = t.length - 1,
                                h = t[0],
                                m = t[v],
                                y = i.length - 1,
                                g = i[0],
                                b = i[y],
                                w = !a;
                            for (; p <= v && d <= y;) n(h) ? h = t[++p] : n(m) ? m = t[--v] : Bi(h, g) ? (C(h, g, o), h = t[++p], g = i[++d]) : Bi(m, b) ? (C(m, b, o), m = t[--v], b = i[--y]) : Bi(h, b) ? (C(h, b, o), w && u.insertBefore(e, h.elm, u.nextSibling(m.elm)), h = t[++p], b = i[--y]) : Bi(m, g) ? (C(m, g, o), w && u.insertBefore(e, m.elm, h.elm), m = t[--v], g = i[++d]) : (n(s) && (s = zi(t, p, v)), n(c = r(g.key) ? s[g.key] : x(g, t, p, v)) ? f(g, o, e, h.elm, !1, i, d) : Bi(l = t[c], g) ? (C(l, g, o), t[c] = void 0, w && u.insertBefore(e, l.elm, h.elm)) : f(g, o, e, h.elm, !1, i, d), g = i[++d]);
                            p > v ? _(e, n(i[y + 1]) ? null : i[y + 1].elm, i, d, y, o) : d > y && $(0, t, p, v)
                        }(c, d, v, o, a) : r(v) ? (r(e.text) && u.setTextContent(c, ""), _(c, null, v, 0, v.length - 1, o)) : r(d) ? $(0, d, 0, d.length - 1) : r(e.text) && u.setTextContent(c, "") : e.text !== t.text && u.setTextContent(c, t.text), r(p) && r(l = p.hook) && r(l = l.postpatch) && l(e, t)
                    }
                }
            }

            function k(e, t, n) {
                if (i(n) && r(e.parent)) e.parent.data.pendingInsert = t;
                else
                    for (var o = 0; o < t.length; ++o) t[o].data.hook.insert(t[o])
            }
            var A = h("attrs,class,staticClass,staticStyle,key");

            function O(e, t, n, o) {
                var a, s = t.tag,
                    c = t.data,
                    u = t.children;
                if (o = o || c && c.pre, t.elm = e, i(t.isComment) && r(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
                if (r(c) && (r(a = c.hook) && r(a = a.init) && a(t, !0), r(a = t.componentInstance))) return p(t, n), !0;
                if (r(s)) {
                    if (r(u))
                        if (e.hasChildNodes())
                            if (r(a = c) && r(a = a.domProps) && r(a = a.innerHTML)) { if (a !== e.innerHTML) return !1 } else {
                                for (var l = !0, f = e.firstChild, d = 0; d < u.length; d++) {
                                    if (!f || !O(f, u[d], n, o)) { l = !1; break }
                                    f = f.nextSibling
                                }
                                if (!l || f) return !1
                            }
                    else v(t, u, n);
                    if (r(c)) {
                        var h = !1;
                        for (var m in c)
                            if (!A(m)) { h = !0, y(t, n); break }!h && c.class && Rt(c.class)
                    }
                } else e.data !== t.text && (e.data = t.text);
                return !0
            }
            return function(e, t, o, a, c, l) {
                if (!n(t)) {
                    var p, d = !1,
                        v = [];
                    if (n(e)) d = !0, f(t, v, c, l);
                    else {
                        var h = r(e.nodeType);
                        if (!h && Bi(e, t)) C(e, t, v, a);
                        else {
                            if (h) {
                                if (1 === e.nodeType && e.hasAttribute(H) && (e.removeAttribute(H), o = !0), i(o) && O(e, t, v)) return k(t, v, !0), e;
                                p = e, e = new Oe(u.tagName(p).toLowerCase(), {}, [], void 0, p)
                            }
                            var y = e.elm,
                                g = u.parentNode(y);
                            if (f(t, v, y._leaveCb ? null : g, u.nextSibling(y)), r(t.parent))
                                for (var _ = t.parent, w = m(t); _;) {
                                    for (var x = 0; x < s.destroy.length; ++x) s.destroy[x](_);
                                    if (_.elm = t.elm, w) {
                                        for (var A = 0; A < s.create.length; ++A) s.create[A](Ri, _);
                                        var S = _.data.hook.insert;
                                        if (S.merged)
                                            for (var T = 1; T < S.fns.length; T++) S.fns[T]()
                                    } else Fi(_);
                                    _ = _.parent
                                }
                            r(g) ? $(0, [e], 0, 0) : r(e.tag) && b(e)
                        }
                    }
                    return k(t, v, d), t.elm
                }
                r(e) && b(e)
            }
        }
        var Ji = { create: Ki, update: Ki, destroy: function(e) { Ki(e, Ri) } };

        function Ki(e, t) {
            (e.data.directives || t.data.directives) && qi(e, t)
        }

        function qi(e, t) {
            var n, r, i, o = e === Ri,
                a = t === Ri,
                s = Zi(e.data.directives, e.context),
                c = Zi(t.data.directives, t.context),
                u = [],
                l = [];
            for (n in c) r = s[n], i = c[n], r ? (i.oldValue = r.value, Xi(i, "update", t, e), i.def && i.def.componentUpdated && l.push(i)) : (Xi(i, "bind", t, e), i.def && i.def.inserted && u.push(i));
            if (u.length) {
                var f = function() { for (var n = 0; n < u.length; n++) Xi(u[n], "inserted", t, e) };
                o ? Jt(t, "insert", f) : f()
            }
            if (l.length && Jt(t, "postpatch", function() { for (var n = 0; n < l.length; n++) Xi(l[n], "componentUpdated", t, e) }), !o)
                for (n in s) c[n] || Xi(s[n], "unbind", e, e, a)
        }
        var Wi = Object.create(null);

        function Zi(e, t) { var n, r, i = Object.create(null); if (!e) return i; for (n = 0; n < e.length; n++)(r = e[n]).modifiers || (r.modifiers = Wi), i[Gi(r)] = r, r.def = ot(t.$options, "directives", r.name, !0); return i }

        function Gi(e) { return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".") }

        function Xi(e, t, n, r, i) { var o = e.def && e.def[t]; if (o) try { o(n.elm, e, n, r, i) } catch (r) { vt(r, n.context, "directive " + e.name + " " + t + " hook") } }
        var Yi = [Pi, Ji];

        function Qi(e, t) {
            var i = t.componentOptions;
            if (!(r(i) && !1 === i.Ctor.options.inheritAttrs || n(e.data.attrs) && n(t.data.attrs))) {
                var o, a, s = t.elm,
                    c = e.data.attrs || {},
                    u = t.data.attrs || {};
                for (o in r(u.__ob__) && (u = t.data.attrs = j({}, u)), u) a = u[o], c[o] !== a && eo(s, o, a);
                for (o in (ee || ne) && u.value !== c.value && eo(s, "value", u.value), c) n(u[o]) && (ii(o) ? s.removeAttributeNS(ri, oi(o)) : ti(o) || s.removeAttribute(o))
            }
        }

        function eo(e, t, n) { e.tagName.indexOf("-") > -1 ? to(e, t, n) : ni(t) ? ai(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : ti(t) ? e.setAttribute(t, ai(n) || "false" === n ? "false" : "true") : ii(t) ? ai(n) ? e.removeAttributeNS(ri, oi(t)) : e.setAttributeNS(ri, t, n) : to(e, t, n) }

        function to(e, t, n) {
            if (ai(n)) e.removeAttribute(t);
            else {
                if (ee && !te && "TEXTAREA" === e.tagName && "placeholder" === t && !e.__ieph) {
                    var r = function(t) { t.stopImmediatePropagation(), e.removeEventListener("input", r) };
                    e.addEventListener("input", r), e.__ieph = !0
                }
                e.setAttribute(t, n)
            }
        }
        var no = { create: Qi, update: Qi };

        function ro(e, t) {
            var i = t.elm,
                o = t.data,
                a = e.data;
            if (!(n(o.staticClass) && n(o.class) && (n(a) || n(a.staticClass) && n(a.class)))) {
                var s = si(t),
                    c = i._transitionClasses;
                r(c) && (s = li(s, fi(c))), s !== i._prevClass && (i.setAttribute("class", s), i._prevClass = s)
            }
        }
        var io, oo, ao, so, co, uo, lo, fo = { create: ro, update: ro },
            po = /[\w).+\-_$\]]/;

        function vo(e) {
            var t, n, r, i, o, a = !1,
                s = !1,
                c = !1,
                u = !1,
                l = 0,
                f = 0,
                p = 0,
                d = 0;
            for (r = 0; r < e.length; r++)
                if (n = t, t = e.charCodeAt(r), a) 39 === t && 92 !== n && (a = !1);
                else if (s) 34 === t && 92 !== n && (s = !1);
            else if (c) 96 === t && 92 !== n && (c = !1);
            else if (u) 47 === t && 92 !== n && (u = !1);
            else if (124 !== t || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || l || f || p) {
                switch (t) {
                    case 34:
                        s = !0;
                        break;
                    case 39:
                        a = !0;
                        break;
                    case 96:
                        c = !0;
                        break;
                    case 40:
                        p++;
                        break;
                    case 41:
                        p--;
                        break;
                    case 91:
                        f++;
                        break;
                    case 93:
                        f--;
                        break;
                    case 123:
                        l++;
                        break;
                    case 125:
                        l--
                }
                if (47 === t) {
                    for (var v = r - 1, h = void 0; v >= 0 && " " === (h = e.charAt(v)); v--);
                    h && po.test(h) || (u = !0)
                }
            } else void 0 === i ? (d = r + 1, i = e.slice(0, r).trim()) : m();

            function m() {
                (o || (o = [])).push(e.slice(d, r).trim()), d = r + 1
            }
            if (void 0 === i ? i = e.slice(0, r).trim() : 0 !== d && m(), o)
                for (r = 0; r < o.length; r++) i = ho(i, o[r]);
            return i
        }

        function ho(e, t) {
            var n = t.indexOf("(");
            if (n < 0) return '_f("' + t + '")(' + e + ")";
            var r = t.slice(0, n),
                i = t.slice(n + 1);
            return '_f("' + r + '")(' + e + (")" !== i ? "," + i : i)
        }

        function mo(e) { console.error("[Vue compiler]: " + e) }

        function yo(e, t) { return e ? e.map(function(e) { return e[t] }).filter(function(e) { return e }) : [] }

        function go(e, t, n) {
            (e.props || (e.props = [])).push({ name: t, value: n }), e.plain = !1
        }

        function _o(e, t, n) {
            (e.attrs || (e.attrs = [])).push({ name: t, value: n }), e.plain = !1
        }

        function bo(e, t, n) { e.attrsMap[t] = n, e.attrsList.push({ name: t, value: n }) }

        function $o(e, t, n, r, i, o) {
            (e.directives || (e.directives = [])).push({ name: t, rawName: n, value: r, arg: i, modifiers: o }), e.plain = !1
        }

        function wo(e, n, r, i, o, a) {
            var s;
            (i = i || t).capture && (delete i.capture, n = "!" + n), i.once && (delete i.once, n = "~" + n), i.passive && (delete i.passive, n = "&" + n), "click" === n && (i.right ? (n = "contextmenu", delete i.right) : i.middle && (n = "mouseup")), i.native ? (delete i.native, s = e.nativeEvents || (e.nativeEvents = {})) : s = e.events || (e.events = {});
            var c = { value: r.trim() };
            i !== t && (c.modifiers = i);
            var u = s[n];
            Array.isArray(u) ? o ? u.unshift(c) : u.push(c) : s[n] = u ? o ? [c, u] : [u, c] : c, e.plain = !1
        }

        function xo(e, t, n) { var r = Co(e, ":" + t) || Co(e, "v-bind:" + t); if (null != r) return vo(r); if (!1 !== n) { var i = Co(e, t); if (null != i) return JSON.stringify(i) } }

        function Co(e, t, n) {
            var r;
            if (null != (r = e.attrsMap[t]))
                for (var i = e.attrsList, o = 0, a = i.length; o < a; o++)
                    if (i[o].name === t) { i.splice(o, 1); break }
            return n && delete e.attrsMap[t], r
        }

        function ko(e, t, n) {
            var r = n || {},
                i = r.number,
                o = "$$v";
            r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (o = "_n(" + o + ")");
            var a = Ao(t, o);
            e.model = { value: "(" + t + ")", expression: '"' + t + '"', callback: "function ($$v) {" + a + "}" }
        }

        function Ao(e, t) { var n = Oo(e); return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")" }

        function Oo(e) { if (e = e.trim(), io = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < io - 1) return (so = e.lastIndexOf(".")) > -1 ? { exp: e.slice(0, so), key: '"' + e.slice(so + 1) + '"' } : { exp: e, key: null }; for (oo = e, so = co = uo = 0; !To();) Eo(ao = So()) ? No(ao) : 91 === ao && jo(ao); return { exp: e.slice(0, co), key: e.slice(co + 1, uo) } }

        function So() { return oo.charCodeAt(++so) }

        function To() { return so >= io }

        function Eo(e) { return 34 === e || 39 === e }

        function jo(e) {
            var t = 1;
            for (co = so; !To();)
                if (Eo(e = So())) No(e);
                else if (91 === e && t++, 93 === e && t--, 0 === t) { uo = so; break }
        }

        function No(e) { for (var t = e; !To() && (e = So()) !== t;); }
        var Io, Lo = "__r",
            Mo = "__c";

        function Do(e, t, n) {
            lo = n;
            var r = t.value,
                i = t.modifiers,
                o = e.tag,
                a = e.attrsMap.type;
            if (e.component) return ko(e, r, i), !1;
            if ("select" === o) Ro(e, r, i);
            else if ("input" === o && "checkbox" === a) Po(e, r, i);
            else if ("input" === o && "radio" === a) Fo(e, r, i);
            else if ("input" === o || "textarea" === o) Ho(e, r, i);
            else { if (!z.isReservedTag(o)) return ko(e, r, i), !1 }
            return !0
        }

        function Po(e, t, n) {
            var r = n && n.number,
                i = xo(e, "value") || "null",
                o = xo(e, "true-value") || "true",
                a = xo(e, "false-value") || "false";
            go(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), wo(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Ao(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Ao(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Ao(t, "$$c") + "}", null, !0)
        }

        function Fo(e, t, n) {
            var r = n && n.number,
                i = xo(e, "value") || "null";
            go(e, "checked", "_q(" + t + "," + (i = r ? "_n(" + i + ")" : i) + ")"), wo(e, "change", Ao(t, i), null, !0)
        }

        function Ro(e, t, n) {
            var r = "var $$selectedVal = " + ('Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "})") + ";";
            wo(e, "change", r = r + " " + Ao(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0)
        }

        function Ho(e, t, n) {
            var r = e.attrsMap.type,
                i = n || {},
                o = i.lazy,
                a = i.number,
                s = i.trim,
                c = !o && "range" !== r,
                u = o ? "change" : "range" === r ? Lo : "input",
                l = "$event.target.value";
            s && (l = "$event.target.value.trim()"), a && (l = "_n(" + l + ")");
            var f = Ao(t, l);
            c && (f = "if($event.target.composing)return;" + f), go(e, "value", "(" + t + ")"), wo(e, u, f, null, !0), (s || a) && wo(e, "blur", "$forceUpdate()")
        }

        function Bo(e) {
            if (r(e[Lo])) {
                var t = ee ? "change" : "input";
                e[t] = [].concat(e[Lo], e[t] || []), delete e[Lo]
            }
            r(e[Mo]) && (e.change = [].concat(e[Mo], e.change || []), delete e[Mo])
        }

        function Uo(e, t, n) { var r = Io; return function i() { null !== e.apply(null, arguments) && Vo(t, i, n, r) } }

        function zo(e, t, n, r, i) { t = Dt(t), n && (t = Uo(t, e, r)), Io.addEventListener(e, t, se ? { capture: r, passive: i } : r) }

        function Vo(e, t, n, r) {
            (r || Io).removeEventListener(e, t._withTask || t, n)
        }

        function Jo(e, t) {
            if (!n(e.data.on) || !n(t.data.on)) {
                var r = t.data.on || {},
                    i = e.data.on || {};
                Io = t.elm, Bo(r), Vt(r, i, zo, Vo, t.context), Io = void 0
            }
        }
        var Ko = { create: Jo, update: Jo };

        function qo(e, t) {
            if (!n(e.data.domProps) || !n(t.data.domProps)) {
                var i, o, a = t.elm,
                    s = e.data.domProps || {},
                    c = t.data.domProps || {};
                for (i in r(c.__ob__) && (c = t.data.domProps = j({}, c)), s) n(c[i]) && (a[i] = "");
                for (i in c) {
                    if (o = c[i], "textContent" === i || "innerHTML" === i) {
                        if (t.children && (t.children.length = 0), o === s[i]) continue;
                        1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                    }
                    if ("value" === i) {
                        a._value = o;
                        var u = n(o) ? "" : String(o);
                        Wo(a, u) && (a.value = u)
                    } else a[i] = o
                }
            }
        }

        function Wo(e, t) { return !e.composing && ("OPTION" === e.tagName || Zo(e, t) || Go(e, t)) }

        function Zo(e, t) { var n = !0; try { n = document.activeElement !== e } catch (e) {} return n && e.value !== t }

        function Go(e, t) {
            var n = e.value,
                i = e._vModifiers;
            if (r(i)) { if (i.lazy) return !1; if (i.number) return v(n) !== v(t); if (i.trim) return n.trim() !== t.trim() }
            return n !== t
        }
        var Xo = { create: qo, update: qo },
            Yo = $(function(e) {
                var t = {},
                    n = /:(.+)/;
                return e.split(/;(?![^(]*\))/g).forEach(function(e) {
                    if (e) {
                        var r = e.split(n);
                        r.length > 1 && (t[r[0].trim()] = r[1].trim())
                    }
                }), t
            });

        function Qo(e) { var t = ea(e.style); return e.staticStyle ? j(e.staticStyle, t) : t }

        function ea(e) { return Array.isArray(e) ? N(e) : "string" == typeof e ? Yo(e) : e }

        function ta(e, t) {
            var n, r = {};
            if (t)
                for (var i = e; i.componentInstance;)(i = i.componentInstance._vnode) && i.data && (n = Qo(i.data)) && j(r, n);
            (n = Qo(e.data)) && j(r, n);
            for (var o = e; o = o.parent;) o.data && (n = Qo(o.data)) && j(r, n);
            return r
        }
        var na, ra = /^--/,
            ia = /\s*!important$/,
            oa = function(e, t, n) {
                if (ra.test(t)) e.style.setProperty(t, n);
                else if (ia.test(n)) e.style.setProperty(t, n.replace(ia, ""), "important");
                else {
                    var r = sa(t);
                    if (Array.isArray(n))
                        for (var i = 0, o = n.length; i < o; i++) e.style[r] = n[i];
                    else e.style[r] = n
                }
            },
            aa = ["Webkit", "Moz", "ms"],
            sa = $(function(e) { if (na = na || document.createElement("div").style, "filter" !== (e = x(e)) && e in na) return e; for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < aa.length; n++) { var r = aa[n] + t; if (r in na) return r } });

        function ca(e, t) {
            var i = t.data,
                o = e.data;
            if (!(n(i.staticStyle) && n(i.style) && n(o.staticStyle) && n(o.style))) {
                var a, s, c = t.elm,
                    u = o.staticStyle,
                    l = o.normalizedStyle || o.style || {},
                    f = u || l,
                    p = ea(t.data.style) || {};
                t.data.normalizedStyle = r(p.__ob__) ? j({}, p) : p;
                var d = ta(t, !0);
                for (s in f) n(d[s]) && oa(c, s, "");
                for (s in d)(a = d[s]) !== f[s] && oa(c, s, null == a ? "" : a)
            }
        }
        var ua = { create: ca, update: ca };

        function la(e, t) {
            if (t && (t = t.trim()))
                if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) { return e.classList.add(t) }) : e.classList.add(t);
                else {
                    var n = " " + (e.getAttribute("class") || "") + " ";
                    n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
                }
        }

        function fa(e, t) {
            if (t && (t = t.trim()))
                if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) { return e.classList.remove(t) }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
                else {
                    for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                    (n = n.trim()) ? e.setAttribute("class", n): e.removeAttribute("class")
                }
        }

        function pa(e) { if (e) { if ("object" == typeof e) { var t = {}; return !1 !== e.css && j(t, da(e.name || "v")), j(t, e), t } return "string" == typeof e ? da(e) : void 0 } }
        var da = $(function(e) { return { enterClass: e + "-enter", enterToClass: e + "-enter-to", enterActiveClass: e + "-enter-active", leaveClass: e + "-leave", leaveToClass: e + "-leave-to", leaveActiveClass: e + "-leave-active" } }),
            va = G && !te,
            ha = "transition",
            ma = "animation",
            ya = "transition",
            ga = "transitionend",
            _a = "animation",
            ba = "animationend";
        va && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (ya = "WebkitTransition", ga = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (_a = "WebkitAnimation", ba = "webkitAnimationEnd"));
        var $a = G ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) { return e() };

        function wa(e) { $a(function() { $a(e) }) }

        function xa(e, t) {
            var n = e._transitionClasses || (e._transitionClasses = []);
            n.indexOf(t) < 0 && (n.push(t), la(e, t))
        }

        function Ca(e, t) { e._transitionClasses && g(e._transitionClasses, t), fa(e, t) }

        function ka(e, t, n) {
            var r = Oa(e, t),
                i = r.type,
                o = r.timeout,
                a = r.propCount;
            if (!i) return n();
            var s = i === ha ? ga : ba,
                c = 0,
                u = function() { e.removeEventListener(s, l), n() },
                l = function(t) { t.target === e && ++c >= a && u() };
            setTimeout(function() { c < a && u() }, o + 1), e.addEventListener(s, l)
        }
        var Aa = /\b(transform|all)(,|$)/;

        function Oa(e, t) {
            var n, r = window.getComputedStyle(e),
                i = r[ya + "Delay"].split(", "),
                o = r[ya + "Duration"].split(", "),
                a = Sa(i, o),
                s = r[_a + "Delay"].split(", "),
                c = r[_a + "Duration"].split(", "),
                u = Sa(s, c),
                l = 0,
                f = 0;
            return t === ha ? a > 0 && (n = ha, l = a, f = o.length) : t === ma ? u > 0 && (n = ma, l = u, f = c.length) : f = (n = (l = Math.max(a, u)) > 0 ? a > u ? ha : ma : null) ? n === ha ? o.length : c.length : 0, { type: n, timeout: l, propCount: f, hasTransform: n === ha && Aa.test(r[ya + "Property"]) }
        }

        function Sa(e, t) { for (; e.length < t.length;) e = e.concat(e); return Math.max.apply(null, t.map(function(t, n) { return Ta(t) + Ta(e[n]) })) }

        function Ta(e) { return 1e3 * Number(e.slice(0, -1)) }

        function Ea(e, t) {
            var i = e.elm;
            r(i._leaveCb) && (i._leaveCb.cancelled = !0, i._leaveCb());
            var o = pa(e.data.transition);
            if (!n(o) && !r(i._enterCb) && 1 === i.nodeType) {
                for (var a = o.css, c = o.type, u = o.enterClass, l = o.enterToClass, f = o.enterActiveClass, p = o.appearClass, d = o.appearToClass, h = o.appearActiveClass, m = o.beforeEnter, y = o.enter, g = o.afterEnter, _ = o.enterCancelled, b = o.beforeAppear, $ = o.appear, w = o.afterAppear, x = o.appearCancelled, C = o.duration, k = pn, A = pn.$vnode; A && A.parent;) k = (A = A.parent).context;
                var O = !k._isMounted || !e.isRootInsert;
                if (!O || $ || "" === $) {
                    var S = O && p ? p : u,
                        T = O && h ? h : f,
                        E = O && d ? d : l,
                        j = O && b || m,
                        N = O && "function" == typeof $ ? $ : y,
                        I = O && w || g,
                        L = O && x || _,
                        M = v(s(C) ? C.enter : C);
                    0;
                    var D = !1 !== a && !te,
                        P = La(N),
                        F = i._enterCb = R(function() { D && (Ca(i, E), Ca(i, T)), F.cancelled ? (D && Ca(i, S), L && L(i)) : I && I(i), i._enterCb = null });
                    e.data.show || Jt(e, "insert", function() {
                        var t = i.parentNode,
                            n = t && t._pending && t._pending[e.key];
                        n && n.tag === e.tag && n.elm._leaveCb && n.elm._leaveCb(), N && N(i, F)
                    }), j && j(i), D && (xa(i, S), xa(i, T), wa(function() { Ca(i, S), F.cancelled || (xa(i, E), P || (Ia(M) ? setTimeout(F, M) : ka(i, c, F))) })), e.data.show && (t && t(), N && N(i, F)), D || P || F()
                }
            }
        }

        function ja(e, t) {
            var i = e.elm;
            r(i._enterCb) && (i._enterCb.cancelled = !0, i._enterCb());
            var o = pa(e.data.transition);
            if (n(o) || 1 !== i.nodeType) return t();
            if (!r(i._leaveCb)) {
                var a = o.css,
                    c = o.type,
                    u = o.leaveClass,
                    l = o.leaveToClass,
                    f = o.leaveActiveClass,
                    p = o.beforeLeave,
                    d = o.leave,
                    h = o.afterLeave,
                    m = o.leaveCancelled,
                    y = o.delayLeave,
                    g = o.duration,
                    _ = !1 !== a && !te,
                    b = La(d),
                    $ = v(s(g) ? g.leave : g);
                0;
                var w = i._leaveCb = R(function() { i.parentNode && i.parentNode._pending && (i.parentNode._pending[e.key] = null), _ && (Ca(i, l), Ca(i, f)), w.cancelled ? (_ && Ca(i, u), m && m(i)) : (t(), h && h(i)), i._leaveCb = null });
                y ? y(x) : x()
            }

            function x() { w.cancelled || (e.data.show || ((i.parentNode._pending || (i.parentNode._pending = {}))[e.key] = e), p && p(i), _ && (xa(i, u), xa(i, f), wa(function() { Ca(i, u), w.cancelled || (xa(i, l), b || (Ia($) ? setTimeout(w, $) : ka(i, c, w))) })), d && d(i, w), _ || b || w()) }
        }

        function Na(e, t, n) { "number" != typeof e ? ge("<transition> explicit " + t + " duration is not a valid number - got " + JSON.stringify(e) + ".", n.context) : isNaN(e) && ge("<transition> explicit " + t + " duration is NaN - the duration expression might be incorrect.", n.context) }

        function Ia(e) { return "number" == typeof e && !isNaN(e) }

        function La(e) { if (n(e)) return !1; var t = e.fns; return r(t) ? La(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1 }

        function Ma(e, t) {!0 !== t.data.show && Ea(t) }
        var Da = G ? { create: Ma, activate: Ma, remove: function(e, t) {!0 !== e.data.show ? ja(e, t) : t() } } : {},
            Pa = [no, fo, Ko, Xo, ua, Da],
            Fa = Pa.concat(Yi),
            Ra = Vi({ nodeOps: Di, modules: Fa });
        te && document.addEventListener("selectionchange", function() {
            var e = document.activeElement;
            e && e.vmodel && qa(e, "input")
        });
        var Ha = {
            inserted: function(e, t, n, r) { "select" === n.tag ? (r.elm && !r.elm._vOptions ? Jt(n, "postpatch", function() { Ha.componentUpdated(e, t, n) }) : Ba(e, t, n.context), e._vOptions = [].map.call(e.options, Va)) : ("textarea" === n.tag || wi(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Ja), e.addEventListener("compositionend", Ka), e.addEventListener("change", Ka), te && (e.vmodel = !0))) },
            componentUpdated: function(e, t, n) {
                if ("select" === n.tag) {
                    Ba(e, t, n.context);
                    var r = e._vOptions,
                        i = e._vOptions = [].map.call(e.options, Va);
                    if (i.some(function(e, t) { return !P(e, r[t]) }))(e.multiple ? t.value.some(function(e) { return za(e, i) }) : t.value !== t.oldValue && za(t.value, i)) && qa(e, "change")
                }
            }
        };

        function Ba(e, t, n) { Ua(e, t, n), (ee || ne) && setTimeout(function() { Ua(e, t, n) }, 0) }

        function Ua(e, t, n) {
            var r = t.value,
                i = e.multiple;
            if (!i || Array.isArray(r)) {
                for (var o, a, s = 0, c = e.options.length; s < c; s++)
                    if (a = e.options[s], i) o = F(r, Va(a)) > -1, a.selected !== o && (a.selected = o);
                    else if (P(Va(a), r)) return void(e.selectedIndex !== s && (e.selectedIndex = s));
                i || (e.selectedIndex = -1)
            }
        }

        function za(e, t) { return t.every(function(t) { return !P(t, e) }) }

        function Va(e) { return "_value" in e ? e._value : e.value }

        function Ja(e) { e.target.composing = !0 }

        function Ka(e) { e.target.composing && (e.target.composing = !1, qa(e.target, "input")) }

        function qa(e, t) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(t, !0, !0), e.dispatchEvent(n)
        }

        function Wa(e) { return !e.componentInstance || e.data && e.data.transition ? e : Wa(e.componentInstance._vnode) }
        var Za = {
                bind: function(e, t, n) {
                    var r = t.value,
                        i = (n = Wa(n)).data && n.data.transition,
                        o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                    r && i ? (n.data.show = !0, Ea(n, function() { e.style.display = o })) : e.style.display = r ? o : "none"
                },
                update: function(e, t, n) { var r = t.value;!r != !t.oldValue && ((n = Wa(n)).data && n.data.transition ? (n.data.show = !0, r ? Ea(n, function() { e.style.display = e.__vOriginalDisplay }) : ja(n, function() { e.style.display = "none" })) : e.style.display = r ? e.__vOriginalDisplay : "none") },
                unbind: function(e, t, n, r, i) { i || (e.style.display = e.__vOriginalDisplay) }
            },
            Ga = { model: Ha, show: Za },
            Xa = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String, duration: [Number, String, Object] };

        function Ya(e) { var t = e && e.componentOptions; return t && t.Ctor.options.abstract ? Ya(nn(t.children)) : e }

        function Qa(e) {
            var t = {},
                n = e.$options;
            for (var r in n.propsData) t[r] = e[r];
            var i = n._parentListeners;
            for (var o in i) t[x(o)] = i[o];
            return t
        }

        function es(e, t) { if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", { props: t.componentOptions.propsData }) }

        function ts(e) {
            for (; e = e.parent;)
                if (e.data.transition) return !0
        }

        function ns(e, t) { return t.key === e.key && t.tag === e.tag }
        var rs = {
                name: "transition",
                props: Xa,
                abstract: !0,
                render: function(e) {
                    var t = this,
                        n = this.$slots.default;
                    if (n && (n = n.filter(function(e) { return e.tag || tn(e) })).length) {
                        0;
                        var r = this.mode;
                        0;
                        var i = n[0];
                        if (ts(this.$vnode)) return i;
                        var o = Ya(i);
                        if (!o) return i;
                        if (this._leaving) return es(e, i);
                        var s = "__transition-" + this._uid + "-";
                        o.key = null == o.key ? o.isComment ? s + "comment" : s + o.tag : a(o.key) ? 0 === String(o.key).indexOf(s) ? o.key : s + o.key : o.key;
                        var c = (o.data || (o.data = {})).transition = Qa(this),
                            u = this._vnode,
                            l = Ya(u);
                        if (o.data.directives && o.data.directives.some(function(e) { return "show" === e.name }) && (o.data.show = !0), l && l.data && !ns(o, l) && !tn(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
                            var f = l.data.transition = j({}, c);
                            if ("out-in" === r) return this._leaving = !0, Jt(f, "afterLeave", function() { t._leaving = !1, t.$forceUpdate() }), es(e, i);
                            if ("in-out" === r) {
                                if (tn(o)) return u;
                                var p, d = function() { p() };
                                Jt(c, "afterEnter", d), Jt(c, "enterCancelled", d), Jt(f, "delayLeave", function(e) { p = e })
                            }
                        }
                        return i
                    }
                }
            },
            is = j({ tag: String, moveClass: String }, Xa);
        delete is.mode;
        var os = {
            props: is,
            render: function(e) {
                for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = Qa(this), s = 0; s < i.length; s++) {
                    var c = i[s];
                    if (c.tag)
                        if (null != c.key && 0 !== String(c.key).indexOf("__vlist")) o.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a;
                        else;
                }
                if (r) {
                    for (var u = [], l = [], f = 0; f < r.length; f++) {
                        var p = r[f];
                        p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? u.push(p) : l.push(p)
                    }
                    this.kept = e(t, null, u), this.removed = l
                }
                return e(t, null, o)
            },
            beforeUpdate: function() { this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept },
            updated: function() {
                var e = this.prevChildren,
                    t = this.moveClass || (this.name || "v") + "-move";
                e.length && this.hasMove(e[0].elm, t) && (e.forEach(as), e.forEach(ss), e.forEach(cs), this._reflow = document.body.offsetHeight, e.forEach(function(e) {
                    if (e.data.moved) {
                        var n = e.elm,
                            r = n.style;
                        xa(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(ga, n._moveCb = function e(r) { r && !/transform$/.test(r.propertyName) || (n.removeEventListener(ga, e), n._moveCb = null, Ca(n, t)) })
                    }
                }))
            },
            methods: {
                hasMove: function(e, t) {
                    if (!va) return !1;
                    if (this._hasMove) return this._hasMove;
                    var n = e.cloneNode();
                    e._transitionClasses && e._transitionClasses.forEach(function(e) { fa(n, e) }), la(n, t), n.style.display = "none", this.$el.appendChild(n);
                    var r = Oa(n);
                    return this.$el.removeChild(n), this._hasMove = r.hasTransform
                }
            }
        };

        function as(e) { e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb() }

        function ss(e) { e.data.newPos = e.elm.getBoundingClientRect() }

        function cs(e) {
            var t = e.data.pos,
                n = e.data.newPos,
                r = t.left - n.left,
                i = t.top - n.top;
            if (r || i) {
                e.data.moved = !0;
                var o = e.elm.style;
                o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s"
            }
        }
        var us = { Transition: rs, TransitionGroup: os };
        Pr.config.mustUseProp = ei, Pr.config.isReservedTag = gi, Pr.config.isReservedAttr = Yr, Pr.config.getTagNamespace = _i, Pr.config.isUnknownElement = $i, j(Pr.options.directives, Ga), j(Pr.options.components, us), Pr.prototype.__patch__ = G ? Ra : I, Pr.prototype.$mount = function(e, t) { return mn(this, e = e && G ? xi(e) : void 0, t) }, G && setTimeout(function() { z.devtools && le && le.emit("init", Pr) }, 0);
        var ls = /\{\{((?:.|\n)+?)\}\}/g,
            fs = /[-.*+?^${}()|[\]\/\\]/g,
            ps = $(function(e) {
                var t = e[0].replace(fs, "\\$&"),
                    n = e[1].replace(fs, "\\$&");
                return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
            });

        function ds(e, t) {
            var n = t ? ps(t) : ls;
            if (n.test(e)) {
                for (var r, i, o, a = [], s = [], c = n.lastIndex = 0; r = n.exec(e);) {
                    (i = r.index) > c && (s.push(o = e.slice(c, i)), a.push(JSON.stringify(o)));
                    var u = vo(r[1].trim());
                    a.push("_s(" + u + ")"), s.push({ "@binding": u }), c = i + r[0].length
                }
                return c < e.length && (s.push(o = e.slice(c)), a.push(JSON.stringify(o))), { expression: a.join("+"), tokens: s }
            }
        }

        function vs(e, t) {
            t.warn;
            var n = Co(e, "class");
            n && (e.staticClass = JSON.stringify(n));
            var r = xo(e, "class", !1);
            r && (e.classBinding = r)
        }

        function hs(e) { var t = ""; return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t }
        var ms = { staticKeys: ["staticClass"], transformNode: vs, genData: hs };

        function ys(e, t) {
            t.warn;
            var n = Co(e, "style");
            n && (e.staticStyle = JSON.stringify(Yo(n)));
            var r = xo(e, "style", !1);
            r && (e.styleBinding = r)
        }

        function gs(e) { var t = ""; return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t }
        var _s, bs = { staticKeys: ["staticStyle"], transformNode: ys, genData: gs },
            $s = { decode: function(e) { return (_s = _s || document.createElement("div")).innerHTML = e, _s.textContent } },
            ws = h("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
            xs = h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
            Cs = h("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
            ks = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
            As = "[a-zA-Z_][\\w\\-\\.]*",
            Os = "((?:" + As + "\\:)?" + As + ")",
            Ss = new RegExp("^<" + Os),
            Ts = /^\s*(\/?)>/,
            Es = new RegExp("^<\\/" + Os + "[^>]*>"),
            js = /^<!DOCTYPE [^>]+>/i,
            Ns = /^<!\--/,
            Is = /^<!\[/,
            Ls = !1;
        "x".replace(/x(.)?/g, function(e, t) { Ls = "" === t });
        var Ms = h("script,style,textarea", !0),
            Ds = {},
            Ps = { "&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#10;": "\n", "&#9;": "\t" },
            Fs = /&(?:lt|gt|quot|amp);/g,
            Rs = /&(?:lt|gt|quot|amp|#10|#9);/g,
            Hs = h("pre,textarea", !0),
            Bs = function(e, t) { return e && Hs(e) && "\n" === t[0] };

        function Us(e, t) { var n = t ? Rs : Fs; return e.replace(n, function(e) { return Ps[e] }) }

        function zs(e, t) {
            for (var n, r, i = [], o = t.expectHTML, a = t.isUnaryTag || L, s = t.canBeLeftOpenTag || L, c = 0; e;) {
                if (n = e, r && Ms(r)) {
                    var u = 0,
                        l = r.toLowerCase(),
                        f = Ds[l] || (Ds[l] = new RegExp("([\\s\\S]*?)(</" + l + "[^>]*>)", "i")),
                        p = e.replace(f, function(e, n, r) { return u = r.length, Ms(l) || "noscript" === l || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Bs(l, n) && (n = n.slice(1)), t.chars && t.chars(n), "" });
                    c += e.length - p.length, e = p, A(l, c - u, c)
                } else {
                    var d = e.indexOf("<");
                    if (0 === d) {
                        if (Ns.test(e)) { var v = e.indexOf("--\x3e"); if (v >= 0) { t.shouldKeepComment && t.comment(e.substring(4, v)), x(v + 3); continue } }
                        if (Is.test(e)) { var h = e.indexOf("]>"); if (h >= 0) { x(h + 2); continue } }
                        var m = e.match(js);
                        if (m) { x(m[0].length); continue }
                        var y = e.match(Es);
                        if (y) {
                            var g = c;
                            x(y[0].length), A(y[1], g, c);
                            continue
                        }
                        var _ = C();
                        if (_) { k(_), Bs(r, e) && x(1); continue }
                    }
                    var b = void 0,
                        $ = void 0,
                        w = void 0;
                    if (d >= 0) {
                        for ($ = e.slice(d); !(Es.test($) || Ss.test($) || Ns.test($) || Is.test($) || (w = $.indexOf("<", 1)) < 0);) d += w, $ = e.slice(d);
                        b = e.substring(0, d), x(d)
                    }
                    d < 0 && (b = e, e = ""), t.chars && b && t.chars(b)
                }
                if (e === n) { t.chars && t.chars(e); break }
            }

            function x(t) { c += t, e = e.substring(t) }

            function C() { var t = e.match(Ss); if (t) { var n, r, i = { tagName: t[1], attrs: [], start: c }; for (x(t[0].length); !(n = e.match(Ts)) && (r = e.match(ks));) x(r[0].length), i.attrs.push(r); if (n) return i.unarySlash = n[1], x(n[0].length), i.end = c, i } }

            function k(e) {
                var n = e.tagName,
                    c = e.unarySlash;
                o && ("p" === r && Cs(n) && A(r), s(n) && r === n && A(n));
                for (var u = a(n) || !!c, l = e.attrs.length, f = new Array(l), p = 0; p < l; p++) {
                    var d = e.attrs[p];
                    Ls && -1 === d[0].indexOf('""') && ("" === d[3] && delete d[3], "" === d[4] && delete d[4], "" === d[5] && delete d[5]);
                    var v = d[3] || d[4] || d[5] || "",
                        h = "a" === n && "href" === d[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                    f[p] = { name: d[1], value: Us(v, h) }
                }
                u || (i.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: f }), r = n), t.start && t.start(n, f, u, e.start, e.end)
            }

            function A(e, n, o) {
                var a, s;
                if (null == n && (n = c), null == o && (o = c), e && (s = e.toLowerCase()), e)
                    for (a = i.length - 1; a >= 0 && i[a].lowerCasedTag !== s; a--);
                else a = 0;
                if (a >= 0) {
                    for (var u = i.length - 1; u >= a; u--) t.end && t.end(i[u].tag, n, o);
                    i.length = a, r = a && i[a - 1].tag
                } else "br" === s ? t.start && t.start(e, [], !0, n, o) : "p" === s && (t.start && t.start(e, [], !1, n, o), t.end && t.end(e, n, o))
            }
            A()
        }
        var Vs, Js, Ks, qs, Ws, Zs, Gs, Xs, Ys = /^@|^v-on:/,
            Qs = /^v-|^@|^:/,
            ec = /([^]*?)\s+(?:in|of)\s+([^]*)/,
            tc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
            nc = /^\(|\)$/g,
            rc = /:(.*)$/,
            ic = /^:|^v-bind:/,
            oc = /\.[^.]+/g,
            ac = $($s.decode);

        function sc(e, t, n) { return { type: 1, tag: e, attrsList: t, attrsMap: Ac(t), parent: n, children: [] } }

        function cc(e, t) {
            Vs = t.warn || mo, Zs = t.isPreTag || L, Gs = t.mustUseProp || L, Xs = t.getTagNamespace || L, Ks = yo(t.modules, "transformNode"), qs = yo(t.modules, "preTransformNode"), Ws = yo(t.modules, "postTransformNode"), Js = t.delimiters;
            var n, r, i = [],
                o = !1 !== t.preserveWhitespace,
                a = !1,
                s = !1;

            function c(e) { e.pre && (a = !1), Zs(e.tag) && (s = !1); for (var n = 0; n < Ws.length; n++) Ws[n](e, t) }
            return zs(e, {
                warn: Vs,
                expectHTML: t.expectHTML,
                isUnaryTag: t.isUnaryTag,
                canBeLeftOpenTag: t.canBeLeftOpenTag,
                shouldDecodeNewlines: t.shouldDecodeNewlines,
                shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
                shouldKeepComment: t.comments,
                start: function(e, o, u) {
                    var l = r && r.ns || Xs(e);
                    ee && "svg" === l && (o = jc(o));
                    var f = sc(e, o, r);
                    l && (f.ns = l), Sc(f) && !ue() && (f.forbidden = !0);
                    for (var p = 0; p < qs.length; p++) f = qs[p](f, t) || f;

                    function d(e) { 0 }
                    if (a || (uc(f), f.pre && (a = !0)), Zs(f.tag) && (s = !0), a ? lc(f) : f.processed || (vc(f), mc(f), bc(f), fc(f, t)), n ? i.length || n.if && (f.elseif || f.else) && (d(), _c(n, { exp: f.elseif, block: f })) : (n = f, d()), r && !f.forbidden)
                        if (f.elseif || f.else) yc(f, r);
                        else if (f.slotScope) {
                        r.plain = !1;
                        var v = f.slotTarget || '"default"';
                        (r.scopedSlots || (r.scopedSlots = {}))[v] = f
                    } else r.children.push(f), f.parent = r;
                    u ? c(f) : (r = f, i.push(f))
                },
                end: function() {
                    var e = i[i.length - 1],
                        t = e.children[e.children.length - 1];
                    t && 3 === t.type && " " === t.text && !s && e.children.pop(), i.length -= 1, r = i[i.length - 1], c(e)
                },
                chars: function(e) { if (r && (!ee || "textarea" !== r.tag || r.attrsMap.placeholder !== e)) { var t, n = r.children; if (e = s || e.trim() ? Oc(r) ? e : ac(e) : o && n.length ? " " : "") !a && " " !== e && (t = ds(e, Js)) ? n.push({ type: 2, expression: t.expression, tokens: t.tokens, text: e }) : " " === e && n.length && " " === n[n.length - 1].text || n.push({ type: 3, text: e }) } },
                comment: function(e) { r.children.push({ type: 3, text: e, isComment: !0 }) }
            }), n
        }

        function uc(e) { null != Co(e, "v-pre") && (e.pre = !0) }

        function lc(e) {
            var t = e.attrsList.length;
            if (t)
                for (var n = e.attrs = new Array(t), r = 0; r < t; r++) n[r] = { name: e.attrsList[r].name, value: JSON.stringify(e.attrsList[r].value) };
            else e.pre || (e.plain = !0)
        }

        function fc(e, t) {
            pc(e), e.plain = !e.key && !e.attrsList.length, dc(e), $c(e), wc(e);
            for (var n = 0; n < Ks.length; n++) e = Ks[n](e, t) || e;
            xc(e)
        }

        function pc(e) {
            var t = xo(e, "key");
            t && (e.key = t)
        }

        function dc(e) {
            var t = xo(e, "ref");
            t && (e.ref = t, e.refInFor = Cc(e))
        }

        function vc(e) {
            var t;
            if (t = Co(e, "v-for")) {
                var n = hc(t);
                n && j(e, n)
            }
        }

        function hc(e) {
            var t = e.match(ec);
            if (t) {
                var n = {};
                n.for = t[2].trim();
                var r = t[1].trim().replace(nc, ""),
                    i = r.match(tc);
                return i ? (n.alias = r.replace(tc, ""), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r, n
            }
        }

        function mc(e) {
            var t = Co(e, "v-if");
            if (t) e.if = t, _c(e, { exp: t, block: e });
            else {
                null != Co(e, "v-else") && (e.else = !0);
                var n = Co(e, "v-else-if");
                n && (e.elseif = n)
            }
        }

        function yc(e, t) {
            var n = gc(t.children);
            n && n.if && _c(n, { exp: e.elseif, block: e })
        }

        function gc(e) {
            for (var t = e.length; t--;) {
                if (1 === e[t].type) return e[t];
                e.pop()
            }
        }

        function _c(e, t) { e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t) }

        function bc(e) { null != Co(e, "v-once") && (e.once = !0) }

        function $c(e) {
            if ("slot" === e.tag) e.slotName = xo(e, "name");
            else {
                var t;
                "template" === e.tag ? (t = Co(e, "scope"), e.slotScope = t || Co(e, "slot-scope")) : (t = Co(e, "slot-scope")) && (e.slotScope = t);
                var n = xo(e, "slot");
                n && (e.slotTarget = '""' === n ? '"default"' : n, "template" === e.tag || e.slotScope || _o(e, "slot", n))
            }
        }

        function wc(e) {
            var t;
            (t = xo(e, "is")) && (e.component = t), null != Co(e, "inline-template") && (e.inlineTemplate = !0)
        }

        function xc(e) {
            var t, n, r, i, o, a, s, c = e.attrsList;
            for (t = 0, n = c.length; t < n; t++) {
                if (r = i = c[t].name, o = c[t].value, Qs.test(r))
                    if (e.hasBindings = !0, (a = kc(r)) && (r = r.replace(oc, "")), ic.test(r)) r = r.replace(ic, ""), o = vo(o), s = !1, a && (a.prop && (s = !0, "innerHtml" === (r = x(r)) && (r = "innerHTML")), a.camel && (r = x(r)), a.sync && wo(e, "update:" + x(r), Ao(o, "$event"))), s || !e.component && Gs(e.tag, e.attrsMap.type, r) ? go(e, r, o) : _o(e, r, o);
                    else if (Ys.test(r)) wo(e, r = r.replace(Ys, ""), o, a, !1, Vs);
                else {
                    var u = (r = r.replace(Qs, "")).match(rc),
                        l = u && u[1];
                    l && (r = r.slice(0, -(l.length + 1))), $o(e, r, i, o, l, a)
                } else _o(e, r, JSON.stringify(o)), !e.component && "muted" === r && Gs(e.tag, e.attrsMap.type, r) && go(e, r, "true")
            }
        }

        function Cc(e) {
            for (var t = e; t;) {
                if (void 0 !== t.for) return !0;
                t = t.parent
            }
            return !1
        }

        function kc(e) { var t = e.match(oc); if (t) { var n = {}; return t.forEach(function(e) { n[e.slice(1)] = !0 }), n } }

        function Ac(e) { for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value; return t }

        function Oc(e) { return "script" === e.tag || "style" === e.tag }

        function Sc(e) { return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type) }
        var Tc = /^xmlns:NS\d+/,
            Ec = /^NS\d+:/;

        function jc(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var r = e[n];
                Tc.test(r.name) || (r.name = r.name.replace(Ec, ""), t.push(r))
            }
            return t
        }

        function Nc(e, t) { for (var n = e; n;) n.for && n.alias === t && Vs("<" + e.tag + ' v-model="' + t + '">: You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.'), n = n.parent }

        function Ic(e, t) {
            if ("input" === e.tag) {
                var n, r = e.attrsMap;
                if (!r["v-model"]) return;
                if ((r[":type"] || r["v-bind:type"]) && (n = xo(e, "type")), r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"), n) {
                    var i = Co(e, "v-if", !0),
                        o = i ? "&&(" + i + ")" : "",
                        a = null != Co(e, "v-else", !0),
                        s = Co(e, "v-else-if", !0),
                        c = Lc(e);
                    vc(c), bo(c, "type", "checkbox"), fc(c, t), c.processed = !0, c.if = "(" + n + ")==='checkbox'" + o, _c(c, { exp: c.if, block: c });
                    var u = Lc(e);
                    Co(u, "v-for", !0), bo(u, "type", "radio"), fc(u, t), _c(c, { exp: "(" + n + ")==='radio'" + o, block: u });
                    var l = Lc(e);
                    return Co(l, "v-for", !0), bo(l, ":type", n), fc(l, t), _c(c, { exp: i, block: l }), a ? c.else = !0 : s && (c.elseif = s), c
                }
            }
        }

        function Lc(e) { return sc(e.tag, e.attrsList.slice(), e.parent) }
        var Mc = { preTransformNode: Ic },
            Dc = [ms, bs, Mc];

        function Pc(e, t) { t.value && go(e, "textContent", "_s(" + t.value + ")") }

        function Fc(e, t) { t.value && go(e, "innerHTML", "_s(" + t.value + ")") }
        var Rc, Hc, Bc = { model: Do, text: Pc, html: Fc },
            Uc = { expectHTML: !0, modules: Dc, directives: Bc, isPreTag: yi, isUnaryTag: ws, mustUseProp: ei, canBeLeftOpenTag: xs, isReservedTag: gi, getTagNamespace: _i, staticKeys: D(Dc) },
            zc = $(Jc);

        function Vc(e, t) { e && (Rc = zc(t.staticKeys || ""), Hc = t.isReservedTag || L, Kc(e), qc(e, !1)) }

        function Jc(e) { return h("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : "")) }

        function Kc(e) {
            if (e.static = Wc(e), 1 === e.type) {
                if (!Hc(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;
                for (var t = 0, n = e.children.length; t < n; t++) {
                    var r = e.children[t];
                    Kc(r), r.static || (e.static = !1)
                }
                if (e.ifConditions)
                    for (var i = 1, o = e.ifConditions.length; i < o; i++) {
                        var a = e.ifConditions[i].block;
                        Kc(a), a.static || (e.static = !1)
                    }
            }
        }

        function qc(e, t) {
            if (1 === e.type) {
                if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void(e.staticRoot = !0);
                if (e.staticRoot = !1, e.children)
                    for (var n = 0, r = e.children.length; n < r; n++) qc(e.children[n], t || !!e.for);
                if (e.ifConditions)
                    for (var i = 1, o = e.ifConditions.length; i < o; i++) qc(e.ifConditions[i].block, t)
            }
        }

        function Wc(e) { return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || m(e.tag) || !Hc(e.tag) || Zc(e) || !Object.keys(e).every(Rc)))) }

        function Zc(e) { for (; e.parent;) { if ("template" !== (e = e.parent).tag) return !1; if (e.for) return !0 } return !1 }
        var Gc = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
            Xc = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
            Yc = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
            Qc = { esc: "Escape", tab: "Tab", enter: "Enter", space: " ", up: ["Up", "ArrowUp"], left: ["Left", "ArrowLeft"], right: ["Right", "ArrowRight"], down: ["Down", "ArrowDown"], delete: ["Backspace", "Delete"] },
            eu = function(e) { return "if(" + e + ")return null;" },
            tu = { stop: "$event.stopPropagation();", prevent: "$event.preventDefault();", self: eu("$event.target !== $event.currentTarget"), ctrl: eu("!$event.ctrlKey"), shift: eu("!$event.shiftKey"), alt: eu("!$event.altKey"), meta: eu("!$event.metaKey"), left: eu("'button' in $event && $event.button !== 0"), middle: eu("'button' in $event && $event.button !== 1"), right: eu("'button' in $event && $event.button !== 2") };

        function nu(e, t, n) { var r = t ? "nativeOn:{" : "on:{"; for (var i in e) r += '"' + i + '":' + ru(i, e[i]) + ","; return r.slice(0, -1) + "}" }

        function ru(e, t) {
            if (!t) return "function(){}";
            if (Array.isArray(t)) return "[" + t.map(function(t) { return ru(e, t) }).join(",") + "]";
            var n = Xc.test(t.value),
                r = Gc.test(t.value);
            if (t.modifiers) {
                var i = "",
                    o = "",
                    a = [];
                for (var s in t.modifiers)
                    if (tu[s]) o += tu[s], Yc[s] && a.push(s);
                    else if ("exact" === s) {
                    var c = t.modifiers;
                    o += eu(["ctrl", "shift", "alt", "meta"].filter(function(e) { return !c[e] }).map(function(e) { return "$event." + e + "Key" }).join("||"))
                } else a.push(s);
                return a.length && (i += iu(a)), o && (i += o), "function($event){" + i + (n ? "return " + t.value + "($event)" : r ? "return (" + t.value + ")($event)" : t.value) + "}"
            }
            return n || r ? t.value : "function($event){" + t.value + "}"
        }

        function iu(e) { return "if(!('button' in $event)&&" + e.map(ou).join("&&") + ")return null;" }

        function ou(e) {
            var t = parseInt(e, 10);
            if (t) return "$event.keyCode!==" + t;
            var n = Yc[e],
                r = Qc[e];
            return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")"
        }

        function au(e, t) { e.wrapListeners = function(e) { return "_g(" + e + "," + t.value + ")" } }

        function su(e, t) { e.wrapData = function(n) { return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")" } }
        var cu = { on: au, bind: su, cloak: I },
            uu = function(e) {
                this.options = e, this.warn = e.warn || mo, this.transforms = yo(e.modules, "transformCode"), this.dataGenFns = yo(e.modules, "genData"), this.directives = j(j({}, cu), e.directives);
                var t = e.isReservedTag || L;
                this.maybeComponent = function(e) { return !t(e.tag) }, this.onceId = 0, this.staticRenderFns = []
            };

        function lu(e, t) { var n = new uu(t); return { render: "with(this){return " + (e ? fu(e, n) : '_c("div")') + "}", staticRenderFns: n.staticRenderFns } }

        function fu(e, t) {
            if (e.staticRoot && !e.staticProcessed) return pu(e, t);
            if (e.once && !e.onceProcessed) return du(e, t);
            if (e.for && !e.forProcessed) return mu(e, t);
            if (e.if && !e.ifProcessed) return vu(e, t);
            if ("template" !== e.tag || e.slotTarget) {
                if ("slot" === e.tag) return Tu(e, t);
                var n;
                if (e.component) n = Eu(e.component, e, t);
                else {
                    var r = e.plain ? void 0 : yu(e, t),
                        i = e.inlineTemplate ? null : xu(e, t, !0);
                    n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")"
                }
                for (var o = 0; o < t.transforms.length; o++) n = t.transforms[o](e, n);
                return n
            }
            return xu(e, t) || "void 0"
        }

        function pu(e, t) { return e.staticProcessed = !0, t.staticRenderFns.push("with(this){return " + fu(e, t) + "}"), "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")" }

        function du(e, t) {
            if (e.onceProcessed = !0, e.if && !e.ifProcessed) return vu(e, t);
            if (e.staticInFor) {
                for (var n = "", r = e.parent; r;) {
                    if (r.for) { n = r.key; break }
                    r = r.parent
                }
                return n ? "_o(" + fu(e, t) + "," + t.onceId++ + "," + n + ")" : fu(e, t)
            }
            return pu(e, t)
        }

        function vu(e, t, n, r) { return e.ifProcessed = !0, hu(e.ifConditions.slice(), t, n, r) }

        function hu(e, t, n, r) {
            if (!e.length) return r || "_e()";
            var i = e.shift();
            return i.exp ? "(" + i.exp + ")?" + o(i.block) + ":" + hu(e, t, n, r) : "" + o(i.block);

            function o(e) { return n ? n(e, t) : e.once ? du(e, t) : fu(e, t) }
        }

        function mu(e, t, n, r) {
            var i = e.for,
                o = e.alias,
                a = e.iterator1 ? "," + e.iterator1 : "",
                s = e.iterator2 ? "," + e.iterator2 : "";
            return e.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || fu)(e, t) + "})"
        }

        function yu(e, t) {
            var n = "{",
                r = gu(e, t);
            r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');
            for (var i = 0; i < t.dataGenFns.length; i++) n += t.dataGenFns[i](e);
            if (e.attrs && (n += "attrs:{" + ju(e.attrs) + "},"), e.props && (n += "domProps:{" + ju(e.props) + "},"), e.events && (n += nu(e.events, !1, t.warn) + ","), e.nativeEvents && (n += nu(e.nativeEvents, !0, t.warn) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += bu(e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
                var o = _u(e, t);
                o && (n += o + ",")
            }
            return n = n.replace(/,$/, "") + "}", e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n
        }

        function gu(e, t) {
            var n = e.directives;
            if (n) {
                var r, i, o, a, s = "directives:[",
                    c = !1;
                for (r = 0, i = n.length; r < i; r++) {
                    o = n[r], a = !0;
                    var u = t.directives[o.name];
                    u && (a = !!u(e, o, t.warn)), a && (c = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ',arg:"' + o.arg + '"' : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},")
                }
                return c ? s.slice(0, -1) + "]" : void 0
            }
        }

        function _u(e, t) { var n = e.children[0]; if (1 === n.type) { var r = lu(n, t.options); return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function(e) { return "function(){" + e + "}" }).join(",") + "]}" } }

        function bu(e, t) { return "scopedSlots:_u([" + Object.keys(e).map(function(n) { return $u(n, e[n], t) }).join(",") + "])" }

        function $u(e, t, n) { return t.for && !t.forProcessed ? wu(e, t, n) : "{key:" + e + ",fn:" + ("function(" + String(t.slotScope) + "){return " + ("template" === t.tag ? t.if ? t.if+"?" + (xu(t, n) || "undefined") + ":undefined" : xu(t, n) || "undefined" : fu(t, n)) + "}") + "}" }

        function wu(e, t, n) {
            var r = t.for,
                i = t.alias,
                o = t.iterator1 ? "," + t.iterator1 : "",
                a = t.iterator2 ? "," + t.iterator2 : "";
            return t.forProcessed = !0, "_l((" + r + "),function(" + i + o + a + "){return " + $u(e, t, n) + "})"
        }

        function xu(e, t, n, r, i) {
            var o = e.children;
            if (o.length) {
                var a = o[0];
                if (1 === o.length && a.for && "template" !== a.tag && "slot" !== a.tag) return (r || fu)(a, t);
                var s = n ? Cu(o, t.maybeComponent) : 0,
                    c = i || Au;
                return "[" + o.map(function(e) { return c(e, t) }).join(",") + "]" + (s ? "," + s : "")
            }
        }

        function Cu(e, t) { for (var n = 0, r = 0; r < e.length; r++) { var i = e[r]; if (1 === i.type) { if (ku(i) || i.ifConditions && i.ifConditions.some(function(e) { return ku(e.block) })) { n = 2; break }(t(i) || i.ifConditions && i.ifConditions.some(function(e) { return t(e.block) })) && (n = 1) } } return n }

        function ku(e) { return void 0 !== e.for || "template" === e.tag || "slot" === e.tag }

        function Au(e, t) { return 1 === e.type ? fu(e, t) : 3 === e.type && e.isComment ? Su(e) : Ou(e) }

        function Ou(e) { return "_v(" + (2 === e.type ? e.expression : Nu(JSON.stringify(e.text))) + ")" }

        function Su(e) { return "_e(" + JSON.stringify(e.text) + ")" }

        function Tu(e, t) {
            var n = e.slotName || '"default"',
                r = xu(e, t),
                i = "_t(" + n + (r ? "," + r : ""),
                o = e.attrs && "{" + e.attrs.map(function(e) { return x(e.name) + ":" + e.value }).join(",") + "}",
                a = e.attrsMap["v-bind"];
            return !o && !a || r || (i += ",null"), o && (i += "," + o), a && (i += (o ? "" : ",null") + "," + a), i + ")"
        }

        function Eu(e, t, n) { var r = t.inlineTemplate ? null : xu(t, n, !0); return "_c(" + e + "," + yu(t, n) + (r ? "," + r : "") + ")" }

        function ju(e) {
            for (var t = "", n = 0; n < e.length; n++) {
                var r = e[n];
                t += '"' + r.name + '":' + Nu(r.value) + ","
            }
            return t.slice(0, -1)
        }

        function Nu(e) { return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") }
        var Iu = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"),
            Lu = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)"),
            Mu = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

        function Du(e) { var t = []; return e && Pu(e, t), t }

        function Pu(e, t) {
            if (1 === e.type) {
                for (var n in e.attrsMap)
                    if (Qs.test(n)) {
                        var r = e.attrsMap[n];
                        r && ("v-for" === n ? Ru(e, 'v-for="' + r + '"', t) : Ys.test(n) ? Fu(r, n + '="' + r + '"', t) : Bu(r, n + '="' + r + '"', t))
                    }
                if (e.children)
                    for (var i = 0; i < e.children.length; i++) Pu(e.children[i], t)
            } else 2 === e.type && Bu(e.expression, e.text, t)
        }

        function Fu(e, t, n) {
            var r = e.replace(Mu, ""),
                i = r.match(Lu);
            i && "$" !== r.charAt(i.index - 1) && n.push('avoid using JavaScript unary operator as property name: "' + i[0] + '" in expression ' + t.trim()), Bu(e, t, n)
        }

        function Ru(e, t, n) { Bu(e.for || "", t, n), Hu(e.alias, "v-for alias", t, n), Hu(e.iterator1, "v-for iterator", t, n), Hu(e.iterator2, "v-for iterator", t, n) }

        function Hu(e, t, n, r) { if ("string" == typeof e) try { new Function("var " + e + "=_") } catch (i) { r.push("invalid " + t + ' "' + e + '" in expression: ' + n.trim()) } }

        function Bu(e, t, n) {
            try { new Function("return " + e) } catch (i) {
                var r = e.replace(Mu, "").match(Iu);
                r ? n.push('avoid using JavaScript keyword as property name: "' + r[0] + '"\n  Raw expression: ' + t.trim()) : n.push("invalid expression: " + i.message + " in\n\n    " + e + "\n\n  Raw expression: " + t.trim() + "\n")
            }
        }

        function Uu(e, t) { try { return new Function(e) } catch (n) { return t.push({ err: n, code: e }), I } }

        function zu(e) {
            var t = Object.create(null);
            return function(n, r, i) {
                (r = j({}, r)).warn;
                delete r.warn;
                var o = r.delimiters ? String(r.delimiters) + n : n;
                if (t[o]) return t[o];
                var a = e(n, r);
                var s = {},
                    c = [];
                return s.render = Uu(a.render, c), s.staticRenderFns = a.staticRenderFns.map(function(e) { return Uu(e, c) }), t[o] = s
            }
        }

        function Vu(e) {
            return function(t) {
                function n(n, r) {
                    var i = Object.create(t),
                        o = [],
                        a = [];
                    if (i.warn = function(e, t) {
                            (t ? a : o).push(e)
                        }, r)
                        for (var s in r.modules && (i.modules = (t.modules || []).concat(r.modules)), r.directives && (i.directives = j(Object.create(t.directives || null), r.directives)), r) "modules" !== s && "directives" !== s && (i[s] = r[s]);
                    var c = e(n, i);
                    return c.errors = o, c.tips = a, c
                }
                return { compile: n, compileToFunctions: zu(n) }
            }
        }
        var Ju, Ku = Vu(function(e, t) { var n = cc(e.trim(), t);!1 !== t.optimize && Vc(n, t); var r = lu(n, t); return { ast: n, render: r.render, staticRenderFns: r.staticRenderFns } }),
            qu = Ku(Uc),
            Wu = qu.compileToFunctions;

        function Zu(e) { return (Ju = Ju || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', Ju.innerHTML.indexOf("&#10;") > 0 }
        var Gu = !!G && Zu(!1),
            Xu = !!G && Zu(!0),
            Yu = $(function(e) { var t = xi(e); return t && t.innerHTML }),
            Qu = Pr.prototype.$mount;

        function el(e) { if (e.outerHTML) return e.outerHTML; var t = document.createElement("div"); return t.appendChild(e.cloneNode(!0)), t.innerHTML }
        Pr.prototype.$mount = function(e, t) {
            if ((e = e && xi(e)) === document.body || e === document.documentElement) return this;
            var n = this.$options;
            if (!n.render) {
                var r = n.template;
                if (r)
                    if ("string" == typeof r) "#" === r.charAt(0) && (r = Yu(r));
                    else {
                        if (!r.nodeType) return this;
                        r = r.innerHTML
                    }
                else e && (r = el(e));
                if (r) {
                    0;
                    var i = Wu(r, { shouldDecodeNewlines: Gu, shouldDecodeNewlinesForHref: Xu, delimiters: n.delimiters, comments: n.comments }, this),
                        o = i.render,
                        a = i.staticRenderFns;
                    n.render = o, n.staticRenderFns = a
                }
            }
            return Qu.call(this, e, t)
        }, Pr.compile = Wu, exports.default = Pr;
    }, {}],
    "70rD": [function(require, module, exports) {

    }, {}],
    "Wqy/": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var t = { 3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile", 5: "class enum extends super const export import", 6: "enum", strict: "implements interface let package private protected public static yield", strictBind: "eval arguments" },
            e = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
            i = { 5: e, 6: e + " const class extends export import super" },
            s = /^in(stanceof)?$/,
            r = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
            a = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
            n = new RegExp("[" + r + "]"),
            o = new RegExp("[" + r + a + "]");
        r = a = null;
        var h = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 477, 28, 11, 0, 9, 21, 190, 52, 76, 44, 33, 24, 27, 35, 30, 0, 12, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 54, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 86, 26, 230, 43, 117, 63, 32, 0, 257, 0, 11, 39, 8, 0, 22, 0, 12, 39, 3, 3, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 270, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 68, 12, 0, 67, 12, 65, 1, 31, 6129, 15, 754, 9486, 286, 82, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 4149, 196, 60, 67, 1213, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541],
            p = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 525, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 280, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1016, 45, 17, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 2214, 6, 110, 6, 6, 9, 792487, 239];

        function c(t, e) { for (var i = 65536, s = 0; s < e.length; s += 2) { if ((i += e[s]) > t) return !1; if ((i += e[s + 1]) >= t) return !0 } }

        function u(t, e) { return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && n.test(String.fromCharCode(t)) : !1 !== e && c(t, h))) }

        function l(t, e) { return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && o.test(String.fromCharCode(t)) : !1 !== e && (c(t, h) || c(t, p))))) }
        var d = function(t, e) { void 0 === e && (e = {}), this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop || null, this.updateContext = null };

        function f(t, e) { return new d(t, { beforeExpr: !0, binop: e }) }
        var m = { beforeExpr: !0 },
            x = { startsExpr: !0 },
            g = {};

        function v(t, e) { return void 0 === e && (e = {}), e.keyword = t, g[t] = new d(t, e) }
        var y = { num: new d("num", x), regexp: new d("regexp", x), string: new d("string", x), name: new d("name", x), eof: new d("eof"), bracketL: new d("[", { beforeExpr: !0, startsExpr: !0 }), bracketR: new d("]"), braceL: new d("{", { beforeExpr: !0, startsExpr: !0 }), braceR: new d("}"), parenL: new d("(", { beforeExpr: !0, startsExpr: !0 }), parenR: new d(")"), comma: new d(",", m), semi: new d(";", m), colon: new d(":", m), dot: new d("."), question: new d("?", m), arrow: new d("=>", m), template: new d("template"), invalidTemplate: new d("invalidTemplate"), ellipsis: new d("...", m), backQuote: new d("`", x), dollarBraceL: new d("${", { beforeExpr: !0, startsExpr: !0 }), eq: new d("=", { beforeExpr: !0, isAssign: !0 }), assign: new d("_=", { beforeExpr: !0, isAssign: !0 }), incDec: new d("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }), prefix: new d("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }), logicalOR: f("||", 1), logicalAND: f("&&", 2), bitwiseOR: f("|", 3), bitwiseXOR: f("^", 4), bitwiseAND: f("&", 5), equality: f("==/!=/===/!==", 6), relational: f("</>/<=/>=", 7), bitShift: f("<</>>/>>>", 8), plusMin: new d("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }), modulo: f("%", 10), star: f("*", 10), slash: f("/", 10), starstar: new d("**", { beforeExpr: !0 }), _break: v("break"), _case: v("case", m), _catch: v("catch"), _continue: v("continue"), _debugger: v("debugger"), _default: v("default", m), _do: v("do", { isLoop: !0, beforeExpr: !0 }), _else: v("else", m), _finally: v("finally"), _for: v("for", { isLoop: !0 }), _function: v("function", x), _if: v("if"), _return: v("return", m), _switch: v("switch"), _throw: v("throw", m), _try: v("try"), _var: v("var"), _const: v("const"), _while: v("while", { isLoop: !0 }), _with: v("with"), _new: v("new", { beforeExpr: !0, startsExpr: !0 }), _this: v("this", x), _super: v("super", x), _class: v("class", x), _extends: v("extends", m), _export: v("export"), _import: v("import"), _null: v("null", x), _true: v("true", x), _false: v("false", x), _in: v("in", { beforeExpr: !0, binop: 7 }), _instanceof: v("instanceof", { beforeExpr: !0, binop: 7 }), _typeof: v("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }), _void: v("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }), _delete: v("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 }) },
            _ = /\r\n?|\n|\u2028|\u2029/,
            b = new RegExp(_.source, "g");

        function k(t, e) { return 10 === t || 13 === t || !e && (8232 === t || 8233 === t) }
        var C = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
            S = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
            E = Object.prototype,
            w = E.hasOwnProperty,
            A = E.toString;

        function I(t, e) { return w.call(t, e) }
        var P = Array.isArray || function(t) { return "[object Array]" === A.call(t) },
            L = function(t, e) { this.line = t, this.column = e };
        L.prototype.offset = function(t) { return new L(this.line, this.column + t) };
        var N = function(t, e, i) { this.start = e, this.end = i, null !== t.sourceFile && (this.source = t.sourceFile) };

        function T(t, e) { for (var i = 1, s = 0;;) { b.lastIndex = s; var r = b.exec(t); if (!(r && r.index < e)) return new L(i, e - s);++i, s = r.index + r[0].length } }
        var V = { ecmaVersion: 7, sourceType: "script", onInsertedSemicolon: null, onTrailingComma: null, allowReserved: null, allowReturnOutsideFunction: !1, allowImportExportEverywhere: !1, allowAwaitOutsideFunction: !1, allowHashBang: !1, locations: !1, onToken: null, onComment: null, ranges: !1, program: null, sourceFile: null, directSourceFile: null, preserveParens: !1, plugins: {} };

        function R(t) {
            var e = {};
            for (var i in V) e[i] = t && I(t, i) ? t[i] : V[i];
            if (e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009), null == e.allowReserved && (e.allowReserved = e.ecmaVersion < 5), P(e.onToken)) {
                var s = e.onToken;
                e.onToken = function(t) { return s.push(t) }
            }
            return P(e.onComment) && (e.onComment = D(e, e.onComment)), e
        }

        function D(t, e) {
            return function(i, s, r, a, n, o) {
                var h = { type: i ? "Block" : "Line", value: s, start: r, end: a };
                t.locations && (h.loc = new N(this, n, o)), t.ranges && (h.range = [r, a]), e.push(h)
            }
        }
        var O = {};

        function B(t) { return new RegExp("^(?:" + t.replace(/ /g, "|") + ")$") }
        var M = function(e, s, r) {
            this.options = e = R(e), this.sourceFile = e.sourceFile, this.keywords = B(i[e.ecmaVersion >= 6 ? 6 : 5]);
            var a = "";
            if (!e.allowReserved) { for (var n = e.ecmaVersion; !(a = t[n]); n--); "module" === e.sourceType && (a += " await") }
            this.reservedWords = B(a);
            var o = (a ? a + " " : "") + t.strict;
            this.reservedWordsStrict = B(o), this.reservedWordsStrictBind = B(o + " " + t.strictBind), this.input = String(s), this.containsEsc = !1, this.loadPlugins(e.plugins), r ? (this.pos = r, this.lineStart = this.input.lastIndexOf("\n", r - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(_).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = y.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === e.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.inFunction = this.inGenerator = this.inAsync = !1, this.yieldPos = this.awaitPos = 0, this.labels = [], 0 === this.pos && e.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterFunctionScope(), this.regexpState = null
        };
        M.prototype.isKeyword = function(t) { return this.keywords.test(t) }, M.prototype.isReservedWord = function(t) { return this.reservedWords.test(t) }, M.prototype.extend = function(t, e) { this[t] = e(this[t]) }, M.prototype.loadPlugins = function(t) {
            for (var e in t) {
                var i = O[e];
                if (!i) throw new Error("Plugin '" + e + "' not found");
                i(this, t[e])
            }
        }, M.prototype.parse = function() { var t = this.options.program || this.startNode(); return this.nextToken(), this.parseTopLevel(t) };
        var F = M.prototype,
            U = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)"|;)/;

        function G() { this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1 }
        F.strictDirective = function(t) {
            for (;;) {
                S.lastIndex = t, t += S.exec(this.input)[0].length;
                var e = U.exec(this.input.slice(t));
                if (!e) return !1;
                if ("use strict" === (e[1] || e[2])) return !0;
                t += e[0].length
            }
        }, F.eat = function(t) { return this.type === t && (this.next(), !0) }, F.isContextual = function(t) { return this.type === y.name && this.value === t && !this.containsEsc }, F.eatContextual = function(t) { return !!this.isContextual(t) && (this.next(), !0) }, F.expectContextual = function(t) { this.eatContextual(t) || this.unexpected() }, F.canInsertSemicolon = function() { return this.type === y.eof || this.type === y.braceR || _.test(this.input.slice(this.lastTokEnd, this.start)) }, F.insertSemicolon = function() { if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0 }, F.semicolon = function() { this.eat(y.semi) || this.insertSemicolon() || this.unexpected() }, F.afterTrailingComma = function(t, e) { if (this.type === t) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), e || this.next(), !0 }, F.expect = function(t) { this.eat(t) || this.unexpected() }, F.unexpected = function(t) { this.raise(null != t ? t : this.start, "Unexpected token") }, F.checkPatternErrors = function(t, e) {
            if (t) {
                t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
                var i = e ? t.parenthesizedAssign : t.parenthesizedBind;
                i > -1 && this.raiseRecoverable(i, "Parenthesized pattern")
            }
        }, F.checkExpressionErrors = function(t, e) {
            if (!t) return !1;
            var i = t.shorthandAssign,
                s = t.doubleProto;
            if (!e) return i >= 0 || s >= 0;
            i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property")
        }, F.checkYieldAwaitInDefaultParams = function() { this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value") }, F.isSimpleAssignTarget = function(t) { return "ParenthesizedExpression" === t.type ? this.isSimpleAssignTarget(t.expression) : "Identifier" === t.type || "MemberExpression" === t.type };
        var q = M.prototype;
        q.parseTopLevel = function(t) {
            var e = {};
            for (t.body || (t.body = []); this.type !== y.eof;) {
                var i = this.parseStatement(!0, !0, e);
                t.body.push(i)
            }
            return this.adaptDirectivePrologue(t.body), this.next(), this.options.ecmaVersion >= 6 && (t.sourceType = this.options.sourceType), this.finishNode(t, "Program")
        };
        var H = { kind: "loop" },
            W = { kind: "switch" };
        q.isLet = function() {
            if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
            S.lastIndex = this.pos;
            var t = S.exec(this.input),
                e = this.pos + t[0].length,
                i = this.input.charCodeAt(e);
            if (91 === i || 123 === i) return !0;
            if (u(i, !0)) { for (var r = e + 1; l(this.input.charCodeAt(r), !0);) ++r; var a = this.input.slice(e, r); if (!s.test(a)) return !0 }
            return !1
        }, q.isAsyncFunction = function() {
            if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
            S.lastIndex = this.pos;
            var t = S.exec(this.input),
                e = this.pos + t[0].length;
            return !(_.test(this.input.slice(this.pos, e)) || "function" !== this.input.slice(e, e + 8) || e + 8 !== this.input.length && l(this.input.charAt(e + 8)))
        }, q.parseStatement = function(t, e, i) {
            var s, r = this.type,
                a = this.startNode();
            switch (this.isLet() && (r = y._var, s = "let"), r) {
                case y._break:
                case y._continue:
                    return this.parseBreakContinueStatement(a, r.keyword);
                case y._debugger:
                    return this.parseDebuggerStatement(a);
                case y._do:
                    return this.parseDoStatement(a);
                case y._for:
                    return this.parseForStatement(a);
                case y._function:
                    return !t && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(a, !1);
                case y._class:
                    return t || this.unexpected(), this.parseClass(a, !0);
                case y._if:
                    return this.parseIfStatement(a);
                case y._return:
                    return this.parseReturnStatement(a);
                case y._switch:
                    return this.parseSwitchStatement(a);
                case y._throw:
                    return this.parseThrowStatement(a);
                case y._try:
                    return this.parseTryStatement(a);
                case y._const:
                case y._var:
                    return s = s || this.value, t || "var" === s || this.unexpected(), this.parseVarStatement(a, s);
                case y._while:
                    return this.parseWhileStatement(a);
                case y._with:
                    return this.parseWithStatement(a);
                case y.braceL:
                    return this.parseBlock();
                case y.semi:
                    return this.parseEmptyStatement(a);
                case y._export:
                case y._import:
                    return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), r === y._import ? this.parseImport(a) : this.parseExport(a, i);
                default:
                    if (this.isAsyncFunction()) return t || this.unexpected(), this.next(), this.parseFunctionStatement(a, !0);
                    var n = this.value,
                        o = this.parseExpression();
                    return r === y.name && "Identifier" === o.type && this.eat(y.colon) ? this.parseLabeledStatement(a, n, o) : this.parseExpressionStatement(a, o)
            }
        }, q.parseBreakContinueStatement = function(t, e) {
            var i = "break" === e;
            this.next(), this.eat(y.semi) || this.insertSemicolon() ? t.label = null : this.type !== y.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
            for (var s = 0; s < this.labels.length; ++s) { var r = this.labels[s]; if (null == t.label || r.name === t.label.name) { if (null != r.kind && (i || "loop" === r.kind)) break; if (t.label && i) break } }
            return s === this.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, i ? "BreakStatement" : "ContinueStatement")
        }, q.parseDebuggerStatement = function(t) { return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement") }, q.parseDoStatement = function(t) { return this.next(), this.labels.push(H), t.body = this.parseStatement(!1), this.labels.pop(), this.expect(y._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(y.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement") }, q.parseForStatement = function(t) {
            this.next();
            var e = this.options.ecmaVersion >= 9 && this.inAsync && this.eatContextual("await") ? this.lastTokStart : -1;
            if (this.labels.push(H), this.enterLexicalScope(), this.expect(y.parenL), this.type === y.semi) return e > -1 && this.unexpected(e), this.parseFor(t, null);
            var i = this.isLet();
            if (this.type === y._var || this.type === y._const || i) {
                var s = this.startNode(),
                    r = i ? "let" : this.value;
                return this.next(), this.parseVar(s, !0, r), this.finishNode(s, "VariableDeclaration"), !(this.type === y._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) || 1 !== s.declarations.length || "var" !== r && s.declarations[0].init ? (e > -1 && this.unexpected(e), this.parseFor(t, s)) : (this.options.ecmaVersion >= 9 && (this.type === y._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.parseForIn(t, s))
            }
            var a = new G,
                n = this.parseExpression(!0, a);
            return this.type === y._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === y._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.toAssignable(n, !1, a), this.checkLVal(n), this.parseForIn(t, n)) : (this.checkExpressionErrors(a, !0), e > -1 && this.unexpected(e), this.parseFor(t, n))
        }, q.parseFunctionStatement = function(t, e) { return this.next(), this.parseFunction(t, !0, !1, e) }, q.parseIfStatement = function(t) { return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement(!this.strict && this.type === y._function), t.alternate = this.eat(y._else) ? this.parseStatement(!this.strict && this.type === y._function) : null, this.finishNode(t, "IfStatement") }, q.parseReturnStatement = function(t) { return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(y.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement") }, q.parseSwitchStatement = function(t) {
            var e;
            this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(y.braceL), this.labels.push(W), this.enterLexicalScope();
            for (var i = !1; this.type !== y.braceR;)
                if (this.type === y._case || this.type === y._default) {
                    var s = this.type === y._case;
                    e && this.finishNode(e, "SwitchCase"), t.cases.push(e = this.startNode()), e.consequent = [], this.next(), s ? e.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, e.test = null), this.expect(y.colon)
                } else e || this.unexpected(), e.consequent.push(this.parseStatement(!0));
            return this.exitLexicalScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement")
        }, q.parseThrowStatement = function(t) { return this.next(), _.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement") };
        var j = [];
        q.parseTryStatement = function(t) {
            if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === y._catch) {
                var e = this.startNode();
                this.next(), this.eat(y.parenL) ? (e.param = this.parseBindingAtom(), this.enterLexicalScope(), this.checkLVal(e.param, "let"), this.expect(y.parenR)) : (this.options.ecmaVersion < 10 && this.unexpected(), e.param = null, this.enterLexicalScope()), e.body = this.parseBlock(!1), this.exitLexicalScope(), t.handler = this.finishNode(e, "CatchClause")
            }
            return t.finalizer = this.eat(y._finally) ? this.parseBlock() : null, t.handler || t.finalizer || this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement")
        }, q.parseVarStatement = function(t, e) { return this.next(), this.parseVar(t, !1, e), this.semicolon(), this.finishNode(t, "VariableDeclaration") }, q.parseWhileStatement = function(t) { return this.next(), t.test = this.parseParenExpression(), this.labels.push(H), t.body = this.parseStatement(!1), this.labels.pop(), this.finishNode(t, "WhileStatement") }, q.parseWithStatement = function(t) { return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement(!1), this.finishNode(t, "WithStatement") }, q.parseEmptyStatement = function(t) { return this.next(), this.finishNode(t, "EmptyStatement") }, q.parseLabeledStatement = function(t, e, i) {
            for (var s = 0, r = this.labels; s < r.length; s += 1) { r[s].name === e && this.raise(i.start, "Label '" + e + "' is already declared") }
            for (var a = this.type.isLoop ? "loop" : this.type === y._switch ? "switch" : null, n = this.labels.length - 1; n >= 0; n--) {
                var o = this.labels[n];
                if (o.statementStart !== t.start) break;
                o.statementStart = this.start, o.kind = a
            }
            return this.labels.push({ name: e, kind: a, statementStart: this.start }), t.body = this.parseStatement(!0), ("ClassDeclaration" === t.body.type || "VariableDeclaration" === t.body.type && "var" !== t.body.kind || "FunctionDeclaration" === t.body.type && (this.strict || t.body.generator)) && this.raiseRecoverable(t.body.start, "Invalid labeled declaration"), this.labels.pop(), t.label = i, this.finishNode(t, "LabeledStatement")
        }, q.parseExpressionStatement = function(t, e) { return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement") }, q.parseBlock = function(t) {
            void 0 === t && (t = !0);
            var e = this.startNode();
            for (e.body = [], this.expect(y.braceL), t && this.enterLexicalScope(); !this.eat(y.braceR);) {
                var i = this.parseStatement(!0);
                e.body.push(i)
            }
            return t && this.exitLexicalScope(), this.finishNode(e, "BlockStatement")
        }, q.parseFor = function(t, e) { return t.init = e, this.expect(y.semi), t.test = this.type === y.semi ? null : this.parseExpression(), this.expect(y.semi), t.update = this.type === y.parenR ? null : this.parseExpression(), this.expect(y.parenR), this.exitLexicalScope(), t.body = this.parseStatement(!1), this.labels.pop(), this.finishNode(t, "ForStatement") }, q.parseForIn = function(t, e) { var i = this.type === y._in ? "ForInStatement" : "ForOfStatement"; return this.next(), "ForInStatement" === i && ("AssignmentPattern" === e.type || "VariableDeclaration" === e.type && null != e.declarations[0].init && (this.strict || "Identifier" !== e.declarations[0].id.type)) && this.raise(e.start, "Invalid assignment in for-in loop head"), t.left = e, t.right = "ForInStatement" === i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(y.parenR), this.exitLexicalScope(), t.body = this.parseStatement(!1), this.labels.pop(), this.finishNode(t, i) }, q.parseVar = function(t, e, i) { for (t.declarations = [], t.kind = i;;) { var s = this.startNode(); if (this.parseVarId(s, i), this.eat(y.eq) ? s.init = this.parseMaybeAssign(e) : "const" !== i || this.type === y._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? "Identifier" === s.id.type || e && (this.type === y._in || this.isContextual("of")) ? s.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), t.declarations.push(this.finishNode(s, "VariableDeclarator")), !this.eat(y.comma)) break } return t }, q.parseVarId = function(t, e) { t.id = this.parseBindingAtom(e), this.checkLVal(t.id, e, !1) }, q.parseFunction = function(t, e, i, s) {
            this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) && (t.generator = this.eat(y.star)), this.options.ecmaVersion >= 8 && (t.async = !!s), e && (t.id = "nullableID" === e && this.type !== y.name ? null : this.parseIdent(), t.id && this.checkLVal(t.id, "var"));
            var r = this.inGenerator,
                a = this.inAsync,
                n = this.yieldPos,
                o = this.awaitPos,
                h = this.inFunction;
            return this.inGenerator = t.generator, this.inAsync = t.async, this.yieldPos = 0, this.awaitPos = 0, this.inFunction = !0, this.enterFunctionScope(), e || (t.id = this.type === y.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, i), this.inGenerator = r, this.inAsync = a, this.yieldPos = n, this.awaitPos = o, this.inFunction = h, this.finishNode(t, e ? "FunctionDeclaration" : "FunctionExpression")
        }, q.parseFunctionParams = function(t) { this.expect(y.parenL), t.params = this.parseBindingList(y.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams() }, q.parseClass = function(t, e) {
            this.next(), this.parseClassId(t, e), this.parseClassSuper(t);
            var i = this.startNode(),
                s = !1;
            for (i.body = [], this.expect(y.braceL); !this.eat(y.braceR);) {
                var r = this.parseClassMember(i);
                r && "MethodDefinition" === r.type && "constructor" === r.kind && (s && this.raise(r.start, "Duplicate constructor in the same class"), s = !0)
            }
            return t.body = this.finishNode(i, "ClassBody"), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression")
        }, q.parseClassMember = function(t) {
            var e = this;
            if (this.eat(y.semi)) return null;
            var i = this.startNode(),
                s = function(t, s) {
                    void 0 === s && (s = !1);
                    var r = e.start,
                        a = e.startLoc;
                    return !!e.eatContextual(t) && (!(e.type === y.parenL || s && e.canInsertSemicolon()) || (i.key && e.unexpected(), i.computed = !1, i.key = e.startNodeAt(r, a), i.key.name = t, e.finishNode(i.key, "Identifier"), !1))
                };
            i.kind = "method", i.static = s("static");
            var r = this.eat(y.star),
                a = !1;
            r || (this.options.ecmaVersion >= 8 && s("async", !0) ? (a = !0, r = this.options.ecmaVersion >= 9 && this.eat(y.star)) : s("get") ? i.kind = "get" : s("set") && (i.kind = "set")), i.key || this.parsePropertyName(i);
            var n = i.key;
            return i.computed || i.static || !("Identifier" === n.type && "constructor" === n.name || "Literal" === n.type && "constructor" === n.value) ? i.static && "Identifier" === n.type && "prototype" === n.name && this.raise(n.start, "Classes may not have a static property named prototype") : ("method" !== i.kind && this.raise(n.start, "Constructor can't have get/set modifier"), r && this.raise(n.start, "Constructor can't be a generator"), a && this.raise(n.start, "Constructor can't be an async method"), i.kind = "constructor"), this.parseClassMethod(t, i, r, a), "get" === i.kind && 0 !== i.value.params.length && this.raiseRecoverable(i.value.start, "getter should have no params"), "set" === i.kind && 1 !== i.value.params.length && this.raiseRecoverable(i.value.start, "setter should have exactly one param"), "set" === i.kind && "RestElement" === i.value.params[0].type && this.raiseRecoverable(i.value.params[0].start, "Setter cannot use rest params"), i
        }, q.parseClassMethod = function(t, e, i, s) { e.value = this.parseMethod(i, s), t.body.push(this.finishNode(e, "MethodDefinition")) }, q.parseClassId = function(t, e) { t.id = this.type === y.name ? this.parseIdent() : !0 === e ? this.unexpected() : null }, q.parseClassSuper = function(t) { t.superClass = this.eat(y._extends) ? this.parseExprSubscripts() : null }, q.parseExport = function(t, e) {
            if (this.next(), this.eat(y.star)) return this.expectContextual("from"), this.type !== y.string && this.unexpected(), t.source = this.parseExprAtom(), this.semicolon(), this.finishNode(t, "ExportAllDeclaration");
            if (this.eat(y._default)) {
                var i;
                if (this.checkExport(e, "default", this.lastTokStart), this.type === y._function || (i = this.isAsyncFunction())) {
                    var s = this.startNode();
                    this.next(), i && this.next(), t.declaration = this.parseFunction(s, "nullableID", !1, i)
                } else if (this.type === y._class) {
                    var r = this.startNode();
                    t.declaration = this.parseClass(r, "nullableID")
                } else t.declaration = this.parseMaybeAssign(), this.semicolon();
                return this.finishNode(t, "ExportDefaultDeclaration")
            }
            if (this.shouldParseExportStatement()) t.declaration = this.parseStatement(!0), "VariableDeclaration" === t.declaration.type ? this.checkVariableExport(e, t.declaration.declarations) : this.checkExport(e, t.declaration.id.name, t.declaration.id.start), t.specifiers = [], t.source = null;
            else {
                if (t.declaration = null, t.specifiers = this.parseExportSpecifiers(e), this.eatContextual("from")) this.type !== y.string && this.unexpected(), t.source = this.parseExprAtom();
                else {
                    for (var a = 0, n = t.specifiers; a < n.length; a += 1) {
                        var o = n[a];
                        this.checkUnreserved(o.local)
                    }
                    t.source = null
                }
                this.semicolon()
            }
            return this.finishNode(t, "ExportNamedDeclaration")
        }, q.checkExport = function(t, e, i) { t && (I(t, e) && this.raiseRecoverable(i, "Duplicate export '" + e + "'"), t[e] = !0) }, q.checkPatternExport = function(t, e) {
            var i = e.type;
            if ("Identifier" === i) this.checkExport(t, e.name, e.start);
            else if ("ObjectPattern" === i)
                for (var s = 0, r = e.properties; s < r.length; s += 1) {
                    var a = r[s];
                    this.checkPatternExport(t, a)
                } else if ("ArrayPattern" === i)
                    for (var n = 0, o = e.elements; n < o.length; n += 1) {
                        var h = o[n];
                        h && this.checkPatternExport(t, h)
                    } else "Property" === i ? this.checkPatternExport(t, e.value) : "AssignmentPattern" === i ? this.checkPatternExport(t, e.left) : "RestElement" === i ? this.checkPatternExport(t, e.argument) : "ParenthesizedExpression" === i && this.checkPatternExport(t, e.expression)
        }, q.checkVariableExport = function(t, e) {
            if (t)
                for (var i = 0, s = e; i < s.length; i += 1) {
                    var r = s[i];
                    this.checkPatternExport(t, r.id)
                }
        }, q.shouldParseExportStatement = function() { return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction() }, q.parseExportSpecifiers = function(t) {
            var e = [],
                i = !0;
            for (this.expect(y.braceL); !this.eat(y.braceR);) {
                if (i) i = !1;
                else if (this.expect(y.comma), this.afterTrailingComma(y.braceR)) break;
                var s = this.startNode();
                s.local = this.parseIdent(!0), s.exported = this.eatContextual("as") ? this.parseIdent(!0) : s.local, this.checkExport(t, s.exported.name, s.exported.start), e.push(this.finishNode(s, "ExportSpecifier"))
            }
            return e
        }, q.parseImport = function(t) { return this.next(), this.type === y.string ? (t.specifiers = j, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === y.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(t, "ImportDeclaration") }, q.parseImportSpecifiers = function() {
            var t = [],
                e = !0;
            if (this.type === y.name) { var i = this.startNode(); if (i.local = this.parseIdent(), this.checkLVal(i.local, "let"), t.push(this.finishNode(i, "ImportDefaultSpecifier")), !this.eat(y.comma)) return t }
            if (this.type === y.star) { var s = this.startNode(); return this.next(), this.expectContextual("as"), s.local = this.parseIdent(), this.checkLVal(s.local, "let"), t.push(this.finishNode(s, "ImportNamespaceSpecifier")), t }
            for (this.expect(y.braceL); !this.eat(y.braceR);) {
                if (e) e = !1;
                else if (this.expect(y.comma), this.afterTrailingComma(y.braceR)) break;
                var r = this.startNode();
                r.imported = this.parseIdent(!0), this.eatContextual("as") ? r.local = this.parseIdent() : (this.checkUnreserved(r.imported), r.local = r.imported), this.checkLVal(r.local, "let"), t.push(this.finishNode(r, "ImportSpecifier"))
            }
            return t
        }, q.adaptDirectivePrologue = function(t) { for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e) t[e].directive = t[e].expression.raw.slice(1, -1) }, q.isDirectiveCandidate = function(t) { return "ExpressionStatement" === t.type && "Literal" === t.expression.type && "string" == typeof t.expression.value && ('"' === this.input[t.start] || "'" === this.input[t.start]) };
        var z = M.prototype;
        z.toAssignable = function(t, e, i) {
            if (this.options.ecmaVersion >= 6 && t) switch (t.type) {
                case "Identifier":
                    this.inAsync && "await" === t.name && this.raise(t.start, "Can not use 'await' as identifier inside an async function");
                    break;
                case "ObjectPattern":
                case "ArrayPattern":
                case "RestElement":
                    break;
                case "ObjectExpression":
                    t.type = "ObjectPattern", i && this.checkPatternErrors(i, !0);
                    for (var s = 0, r = t.properties; s < r.length; s += 1) {
                        var a = r[s];
                        this.toAssignable(a, e), "RestElement" !== a.type || "ArrayPattern" !== a.argument.type && "ObjectPattern" !== a.argument.type || this.raise(a.argument.start, "Unexpected token")
                    }
                    break;
                case "Property":
                    "init" !== t.kind && this.raise(t.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(t.value, e);
                    break;
                case "ArrayExpression":
                    t.type = "ArrayPattern", i && this.checkPatternErrors(i, !0), this.toAssignableList(t.elements, e);
                    break;
                case "SpreadElement":
                    t.type = "RestElement", this.toAssignable(t.argument, e), "AssignmentPattern" === t.argument.type && this.raise(t.argument.start, "Rest elements cannot have a default value");
                    break;
                case "AssignmentExpression":
                    "=" !== t.operator && this.raise(t.left.end, "Only '=' operator can be used for specifying default value."), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);
                case "AssignmentPattern":
                    break;
                case "ParenthesizedExpression":
                    this.toAssignable(t.expression, e);
                    break;
                case "MemberExpression":
                    if (!e) break;
                default:
                    this.raise(t.start, "Assigning to rvalue")
            } else i && this.checkPatternErrors(i, !0);
            return t
        }, z.toAssignableList = function(t, e) {
            for (var i = t.length, s = 0; s < i; s++) {
                var r = t[s];
                r && this.toAssignable(r, e)
            }
            if (i) {
                var a = t[i - 1];
                6 === this.options.ecmaVersion && e && a && "RestElement" === a.type && "Identifier" !== a.argument.type && this.unexpected(a.argument.start)
            }
            return t
        }, z.parseSpread = function(t) { var e = this.startNode(); return this.next(), e.argument = this.parseMaybeAssign(!1, t), this.finishNode(e, "SpreadElement") }, z.parseRestBinding = function() { var t = this.startNode(); return this.next(), 6 === this.options.ecmaVersion && this.type !== y.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement") }, z.parseBindingAtom = function() {
            if (this.options.ecmaVersion >= 6) switch (this.type) {
                case y.bracketL:
                    var t = this.startNode();
                    return this.next(), t.elements = this.parseBindingList(y.bracketR, !0, !0), this.finishNode(t, "ArrayPattern");
                case y.braceL:
                    return this.parseObj(!0)
            }
            return this.parseIdent()
        }, z.parseBindingList = function(t, e, i) {
            for (var s = [], r = !0; !this.eat(t);)
                if (r ? r = !1 : this.expect(y.comma), e && this.type === y.comma) s.push(null);
                else {
                    if (i && this.afterTrailingComma(t)) break;
                    if (this.type === y.ellipsis) {
                        var a = this.parseRestBinding();
                        this.parseBindingListItem(a), s.push(a), this.type === y.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(t);
                        break
                    }
                    var n = this.parseMaybeDefault(this.start, this.startLoc);
                    this.parseBindingListItem(n), s.push(n)
                }
            return s
        }, z.parseBindingListItem = function(t) { return t }, z.parseMaybeDefault = function(t, e, i) { if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(y.eq)) return i; var s = this.startNodeAt(t, e); return s.left = i, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern") }, z.checkLVal = function(t, e, i) {
            switch (t.type) {
                case "Identifier":
                    this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (e ? "Binding " : "Assigning to ") + t.name + " in strict mode"), i && (I(i, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), i[t.name] = !0), e && "none" !== e && (("var" === e && !this.canDeclareVarName(t.name) || "var" !== e && !this.canDeclareLexicalName(t.name)) && this.raiseRecoverable(t.start, "Identifier '" + t.name + "' has already been declared"), "var" === e ? this.declareVarName(t.name) : this.declareLexicalName(t.name));
                    break;
                case "MemberExpression":
                    e && this.raiseRecoverable(t.start, "Binding member expression");
                    break;
                case "ObjectPattern":
                    for (var s = 0, r = t.properties; s < r.length; s += 1) {
                        var a = r[s];
                        this.checkLVal(a, e, i)
                    }
                    break;
                case "Property":
                    this.checkLVal(t.value, e, i);
                    break;
                case "ArrayPattern":
                    for (var n = 0, o = t.elements; n < o.length; n += 1) {
                        var h = o[n];
                        h && this.checkLVal(h, e, i)
                    }
                    break;
                case "AssignmentPattern":
                    this.checkLVal(t.left, e, i);
                    break;
                case "RestElement":
                    this.checkLVal(t.argument, e, i);
                    break;
                case "ParenthesizedExpression":
                    this.checkLVal(t.expression, e, i);
                    break;
                default:
                    this.raise(t.start, (e ? "Binding" : "Assigning to") + " rvalue")
            }
        };
        var Q = M.prototype;
        Q.checkPropClash = function(t, e, i) {
            if (!(this.options.ecmaVersion >= 9 && "SpreadElement" === t.type || this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))) {
                var s, r = t.key;
                switch (r.type) {
                    case "Identifier":
                        s = r.name;
                        break;
                    case "Literal":
                        s = String(r.value);
                        break;
                    default:
                        return
                }
                var a = t.kind;
                if (this.options.ecmaVersion >= 6) "__proto__" === s && "init" === a && (e.proto && (i && i.doubleProto < 0 ? i.doubleProto = r.start : this.raiseRecoverable(r.start, "Redefinition of __proto__ property")), e.proto = !0);
                else {
                    var n = e[s = "$" + s];
                    if (n)("init" === a ? this.strict && n.init || n.get || n.set : n.init || n[a]) && this.raiseRecoverable(r.start, "Redefinition of property");
                    else n = e[s] = { init: !1, get: !1, set: !1 };
                    n[a] = !0
                }
            }
        }, Q.parseExpression = function(t, e) {
            var i = this.start,
                s = this.startLoc,
                r = this.parseMaybeAssign(t, e);
            if (this.type === y.comma) { var a = this.startNodeAt(i, s); for (a.expressions = [r]; this.eat(y.comma);) a.expressions.push(this.parseMaybeAssign(t, e)); return this.finishNode(a, "SequenceExpression") }
            return r
        }, Q.parseMaybeAssign = function(t, e, i) {
            if (this.inGenerator && this.isContextual("yield")) return this.parseYield();
            var s = !1,
                r = -1,
                a = -1;
            e ? (r = e.parenthesizedAssign, a = e.trailingComma, e.parenthesizedAssign = e.trailingComma = -1) : (e = new G, s = !0);
            var n = this.start,
                o = this.startLoc;
            this.type !== y.parenL && this.type !== y.name || (this.potentialArrowAt = this.start);
            var h = this.parseMaybeConditional(t, e);
            if (i && (h = i.call(this, h, n, o)), this.type.isAssign) { var p = this.startNodeAt(n, o); return p.operator = this.value, p.left = this.type === y.eq ? this.toAssignable(h, !1, e) : h, s || G.call(e), e.shorthandAssign = -1, this.checkLVal(h), this.next(), p.right = this.parseMaybeAssign(t), this.finishNode(p, "AssignmentExpression") }
            return s && this.checkExpressionErrors(e, !0), r > -1 && (e.parenthesizedAssign = r), a > -1 && (e.trailingComma = a), h
        }, Q.parseMaybeConditional = function(t, e) {
            var i = this.start,
                s = this.startLoc,
                r = this.parseExprOps(t, e);
            if (this.checkExpressionErrors(e)) return r;
            if (this.eat(y.question)) { var a = this.startNodeAt(i, s); return a.test = r, a.consequent = this.parseMaybeAssign(), this.expect(y.colon), a.alternate = this.parseMaybeAssign(t), this.finishNode(a, "ConditionalExpression") }
            return r
        }, Q.parseExprOps = function(t, e) {
            var i = this.start,
                s = this.startLoc,
                r = this.parseMaybeUnary(e, !1);
            return this.checkExpressionErrors(e) ? r : r.start === i && "ArrowFunctionExpression" === r.type ? r : this.parseExprOp(r, i, s, -1, t)
        }, Q.parseExprOp = function(t, e, i, s, r) {
            var a = this.type.binop;
            if (null != a && (!r || this.type !== y._in) && a > s) {
                var n = this.type === y.logicalOR || this.type === y.logicalAND,
                    o = this.value;
                this.next();
                var h = this.start,
                    p = this.startLoc,
                    c = this.parseExprOp(this.parseMaybeUnary(null, !1), h, p, a, r),
                    u = this.buildBinary(e, i, t, c, o, n);
                return this.parseExprOp(u, e, i, s, r)
            }
            return t
        }, Q.buildBinary = function(t, e, i, s, r, a) { var n = this.startNodeAt(t, e); return n.left = i, n.operator = r, n.right = s, this.finishNode(n, a ? "LogicalExpression" : "BinaryExpression") }, Q.parseMaybeUnary = function(t, e) {
            var i, s = this.start,
                r = this.startLoc;
            if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) i = this.parseAwait(), e = !0;
            else if (this.type.prefix) {
                var a = this.startNode(),
                    n = this.type === y.incDec;
                a.operator = this.value, a.prefix = !0, this.next(), a.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(t, !0), n ? this.checkLVal(a.argument) : this.strict && "delete" === a.operator && "Identifier" === a.argument.type ? this.raiseRecoverable(a.start, "Deleting local variable in strict mode") : e = !0, i = this.finishNode(a, n ? "UpdateExpression" : "UnaryExpression")
            } else {
                if (i = this.parseExprSubscripts(t), this.checkExpressionErrors(t)) return i;
                for (; this.type.postfix && !this.canInsertSemicolon();) {
                    var o = this.startNodeAt(s, r);
                    o.operator = this.value, o.prefix = !1, o.argument = i, this.checkLVal(i), this.next(), i = this.finishNode(o, "UpdateExpression")
                }
            }
            return !e && this.eat(y.starstar) ? this.buildBinary(s, r, i, this.parseMaybeUnary(null, !1), "**", !1) : i
        }, Q.parseExprSubscripts = function(t) {
            var e = this.start,
                i = this.startLoc,
                s = this.parseExprAtom(t),
                r = "ArrowFunctionExpression" === s.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd);
            if (this.checkExpressionErrors(t) || r) return s;
            var a = this.parseSubscripts(s, e, i);
            return t && "MemberExpression" === a.type && (t.parenthesizedAssign >= a.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= a.start && (t.parenthesizedBind = -1)), a
        }, Q.parseSubscripts = function(t, e, i, s) {
            for (var r = this.options.ecmaVersion >= 8 && "Identifier" === t.type && "async" === t.name && this.lastTokEnd === t.end && !this.canInsertSemicolon() && "async" === this.input.slice(t.start, t.end), a = void 0;;)
                if ((a = this.eat(y.bracketL)) || this.eat(y.dot)) {
                    var n = this.startNodeAt(e, i);
                    n.object = t, n.property = a ? this.parseExpression() : this.parseIdent(!0), n.computed = !!a, a && this.expect(y.bracketR), t = this.finishNode(n, "MemberExpression")
                } else if (!s && this.eat(y.parenL)) {
                var o = new G,
                    h = this.yieldPos,
                    p = this.awaitPos;
                this.yieldPos = 0, this.awaitPos = 0;
                var c = this.parseExprList(y.parenR, this.options.ecmaVersion >= 8, !1, o);
                if (r && !this.canInsertSemicolon() && this.eat(y.arrow)) return this.checkPatternErrors(o, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = h, this.awaitPos = p, this.parseArrowExpression(this.startNodeAt(e, i), c, !0);
                this.checkExpressionErrors(o, !0), this.yieldPos = h || this.yieldPos, this.awaitPos = p || this.awaitPos;
                var u = this.startNodeAt(e, i);
                u.callee = t, u.arguments = c, t = this.finishNode(u, "CallExpression")
            } else {
                if (this.type !== y.backQuote) return t;
                var l = this.startNodeAt(e, i);
                l.tag = t, l.quasi = this.parseTemplate({ isTagged: !0 }), t = this.finishNode(l, "TaggedTemplateExpression")
            }
        }, Q.parseExprAtom = function(t) {
            var e, i = this.potentialArrowAt === this.start;
            switch (this.type) {
                case y._super:
                    return this.inFunction || this.raise(this.start, "'super' outside of function or class"), e = this.startNode(), this.next(), this.type !== y.dot && this.type !== y.bracketL && this.type !== y.parenL && this.unexpected(), this.finishNode(e, "Super");
                case y._this:
                    return e = this.startNode(), this.next(), this.finishNode(e, "ThisExpression");
                case y.name:
                    var s = this.start,
                        r = this.startLoc,
                        a = this.containsEsc,
                        n = this.parseIdent(this.type !== y.name);
                    if (this.options.ecmaVersion >= 8 && !a && "async" === n.name && !this.canInsertSemicolon() && this.eat(y._function)) return this.parseFunction(this.startNodeAt(s, r), !1, !1, !0);
                    if (i && !this.canInsertSemicolon()) { if (this.eat(y.arrow)) return this.parseArrowExpression(this.startNodeAt(s, r), [n], !1); if (this.options.ecmaVersion >= 8 && "async" === n.name && this.type === y.name && !a) return n = this.parseIdent(), !this.canInsertSemicolon() && this.eat(y.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(s, r), [n], !0) }
                    return n;
                case y.regexp:
                    var o = this.value;
                    return (e = this.parseLiteral(o.value)).regex = { pattern: o.pattern, flags: o.flags }, e;
                case y.num:
                case y.string:
                    return this.parseLiteral(this.value);
                case y._null:
                case y._true:
                case y._false:
                    return (e = this.startNode()).value = this.type === y._null ? null : this.type === y._true, e.raw = this.type.keyword, this.next(), this.finishNode(e, "Literal");
                case y.parenL:
                    var h = this.start,
                        p = this.parseParenAndDistinguishExpression(i);
                    return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(p) && (t.parenthesizedAssign = h), t.parenthesizedBind < 0 && (t.parenthesizedBind = h)), p;
                case y.bracketL:
                    return e = this.startNode(), this.next(), e.elements = this.parseExprList(y.bracketR, !0, !0, t), this.finishNode(e, "ArrayExpression");
                case y.braceL:
                    return this.parseObj(!1, t);
                case y._function:
                    return e = this.startNode(), this.next(), this.parseFunction(e, !1);
                case y._class:
                    return this.parseClass(this.startNode(), !1);
                case y._new:
                    return this.parseNew();
                case y.backQuote:
                    return this.parseTemplate();
                default:
                    this.unexpected()
            }
        }, Q.parseLiteral = function(t) { var e = this.startNode(); return e.value = t, e.raw = this.input.slice(this.start, this.end), this.next(), this.finishNode(e, "Literal") }, Q.parseParenExpression = function() { this.expect(y.parenL); var t = this.parseExpression(); return this.expect(y.parenR), t }, Q.parseParenAndDistinguishExpression = function(t) {
            var e, i = this.start,
                s = this.startLoc,
                r = this.options.ecmaVersion >= 8;
            if (this.options.ecmaVersion >= 6) {
                this.next();
                var a, n = this.start,
                    o = this.startLoc,
                    h = [],
                    p = !0,
                    c = !1,
                    u = new G,
                    l = this.yieldPos,
                    d = this.awaitPos;
                for (this.yieldPos = 0, this.awaitPos = 0; this.type !== y.parenR;) {
                    if (p ? p = !1 : this.expect(y.comma), r && this.afterTrailingComma(y.parenR, !0)) { c = !0; break }
                    if (this.type === y.ellipsis) { a = this.start, h.push(this.parseParenItem(this.parseRestBinding())), this.type === y.comma && this.raise(this.start, "Comma is not permitted after the rest element"); break }
                    h.push(this.parseMaybeAssign(!1, u, this.parseParenItem))
                }
                var f = this.start,
                    m = this.startLoc;
                if (this.expect(y.parenR), t && !this.canInsertSemicolon() && this.eat(y.arrow)) return this.checkPatternErrors(u, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = l, this.awaitPos = d, this.parseParenArrowList(i, s, h);
                h.length && !c || this.unexpected(this.lastTokStart), a && this.unexpected(a), this.checkExpressionErrors(u, !0), this.yieldPos = l || this.yieldPos, this.awaitPos = d || this.awaitPos, h.length > 1 ? ((e = this.startNodeAt(n, o)).expressions = h, this.finishNodeAt(e, "SequenceExpression", f, m)) : e = h[0]
            } else e = this.parseParenExpression();
            if (this.options.preserveParens) { var x = this.startNodeAt(i, s); return x.expression = e, this.finishNode(x, "ParenthesizedExpression") }
            return e
        }, Q.parseParenItem = function(t) { return t }, Q.parseParenArrowList = function(t, e, i) { return this.parseArrowExpression(this.startNodeAt(t, e), i) };
        var K = [];
        Q.parseNew = function() {
            var t = this.startNode(),
                e = this.parseIdent(!0);
            if (this.options.ecmaVersion >= 6 && this.eat(y.dot)) { t.meta = e; var i = this.containsEsc; return t.property = this.parseIdent(!0), ("target" !== t.property.name || i) && this.raiseRecoverable(t.property.start, "The only valid meta property for new is new.target"), this.inFunction || this.raiseRecoverable(t.start, "new.target can only be used in functions"), this.finishNode(t, "MetaProperty") }
            var s = this.start,
                r = this.startLoc;
            return t.callee = this.parseSubscripts(this.parseExprAtom(), s, r, !0), this.eat(y.parenL) ? t.arguments = this.parseExprList(y.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = K, this.finishNode(t, "NewExpression")
        }, Q.parseTemplateElement = function(t) {
            var e = t.isTagged,
                i = this.startNode();
            return this.type === y.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = { raw: this.value, cooked: null }) : i.value = { raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"), cooked: this.value }, this.next(), i.tail = this.type === y.backQuote, this.finishNode(i, "TemplateElement")
        }, Q.parseTemplate = function(t) {
            void 0 === t && (t = {});
            var e = t.isTagged;
            void 0 === e && (e = !1);
            var i = this.startNode();
            this.next(), i.expressions = [];
            var s = this.parseTemplateElement({ isTagged: e });
            for (i.quasis = [s]; !s.tail;) this.expect(y.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(y.braceR), i.quasis.push(s = this.parseTemplateElement({ isTagged: e }));
            return this.next(), this.finishNode(i, "TemplateLiteral")
        }, Q.isAsyncProp = function(t) { return !t.computed && "Identifier" === t.key.type && "async" === t.key.name && (this.type === y.name || this.type === y.num || this.type === y.string || this.type === y.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === y.star) && !_.test(this.input.slice(this.lastTokEnd, this.start)) }, Q.parseObj = function(t, e) {
            var i = this.startNode(),
                s = !0,
                r = {};
            for (i.properties = [], this.next(); !this.eat(y.braceR);) {
                if (s) s = !1;
                else if (this.expect(y.comma), this.afterTrailingComma(y.braceR)) break;
                var a = this.parseProperty(t, e);
                t || this.checkPropClash(a, r, e), i.properties.push(a)
            }
            return this.finishNode(i, t ? "ObjectPattern" : "ObjectExpression")
        }, Q.parseProperty = function(t, e) {
            var i, s, r, a, n = this.startNode();
            if (this.options.ecmaVersion >= 9 && this.eat(y.ellipsis)) return t ? (n.argument = this.parseIdent(!1), this.type === y.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(n, "RestElement")) : (this.type === y.parenL && e && (e.parenthesizedAssign < 0 && (e.parenthesizedAssign = this.start), e.parenthesizedBind < 0 && (e.parenthesizedBind = this.start)), n.argument = this.parseMaybeAssign(!1, e), this.type === y.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(n, "SpreadElement"));
            this.options.ecmaVersion >= 6 && (n.method = !1, n.shorthand = !1, (t || e) && (r = this.start, a = this.startLoc), t || (i = this.eat(y.star)));
            var o = this.containsEsc;
            return this.parsePropertyName(n), !t && !o && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(n) ? (s = !0, i = this.options.ecmaVersion >= 9 && this.eat(y.star), this.parsePropertyName(n, e)) : s = !1, this.parsePropertyValue(n, t, i, s, r, a, e, o), this.finishNode(n, "Property")
        }, Q.parsePropertyValue = function(t, e, i, s, r, a, n, o) {
            if ((i || s) && this.type === y.colon && this.unexpected(), this.eat(y.colon)) t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, n), t.kind = "init";
            else if (this.options.ecmaVersion >= 6 && this.type === y.parenL) e && this.unexpected(), t.kind = "init", t.method = !0, t.value = this.parseMethod(i, s);
            else if (e || o || !(this.options.ecmaVersion >= 5) || t.computed || "Identifier" !== t.key.type || "get" !== t.key.name && "set" !== t.key.name || this.type === y.comma || this.type === y.braceR) this.options.ecmaVersion >= 6 && !t.computed && "Identifier" === t.key.type ? (this.checkUnreserved(t.key), t.kind = "init", e ? t.value = this.parseMaybeDefault(r, a, t.key) : this.type === y.eq && n ? (n.shorthandAssign < 0 && (n.shorthandAssign = this.start), t.value = this.parseMaybeDefault(r, a, t.key)) : t.value = t.key, t.shorthand = !0) : this.unexpected();
            else {
                (i || s) && this.unexpected(), t.kind = t.key.name, this.parsePropertyName(t), t.value = this.parseMethod(!1);
                var h = "get" === t.kind ? 0 : 1;
                if (t.value.params.length !== h) { var p = t.value.start; "get" === t.kind ? this.raiseRecoverable(p, "getter should have no params") : this.raiseRecoverable(p, "setter should have exactly one param") } else "set" === t.kind && "RestElement" === t.value.params[0].type && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params")
            }
        }, Q.parsePropertyName = function(t) {
            if (this.options.ecmaVersion >= 6) {
                if (this.eat(y.bracketL)) return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(y.bracketR), t.key;
                t.computed = !1
            }
            return t.key = this.type === y.num || this.type === y.string ? this.parseExprAtom() : this.parseIdent(!0)
        }, Q.initFunction = function(t) { t.id = null, this.options.ecmaVersion >= 6 && (t.generator = !1, t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1) }, Q.parseMethod = function(t, e) {
            var i = this.startNode(),
                s = this.inGenerator,
                r = this.inAsync,
                a = this.yieldPos,
                n = this.awaitPos,
                o = this.inFunction;
            return this.initFunction(i), this.options.ecmaVersion >= 6 && (i.generator = t), this.options.ecmaVersion >= 8 && (i.async = !!e), this.inGenerator = i.generator, this.inAsync = i.async, this.yieldPos = 0, this.awaitPos = 0, this.inFunction = !0, this.enterFunctionScope(), this.expect(y.parenL), i.params = this.parseBindingList(y.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(i, !1), this.inGenerator = s, this.inAsync = r, this.yieldPos = a, this.awaitPos = n, this.inFunction = o, this.finishNode(i, "FunctionExpression")
        }, Q.parseArrowExpression = function(t, e, i) {
            var s = this.inGenerator,
                r = this.inAsync,
                a = this.yieldPos,
                n = this.awaitPos,
                o = this.inFunction;
            return this.enterFunctionScope(), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!i), this.inGenerator = !1, this.inAsync = t.async, this.yieldPos = 0, this.awaitPos = 0, this.inFunction = !0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0), this.inGenerator = s, this.inAsync = r, this.yieldPos = a, this.awaitPos = n, this.inFunction = o, this.finishNode(t, "ArrowFunctionExpression")
        }, Q.parseFunctionBody = function(t, e) {
            var i = e && this.type !== y.braceL,
                s = this.strict,
                r = !1;
            if (i) t.body = this.parseMaybeAssign(), t.expression = !0, this.checkParams(t, !1);
            else {
                var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
                s && !a || (r = this.strictDirective(this.end)) && a && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list");
                var n = this.labels;
                this.labels = [], r && (this.strict = !0), this.checkParams(t, !s && !r && !e && this.isSimpleParamList(t.params)), t.body = this.parseBlock(!1), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = n
            }
            this.exitFunctionScope(), this.strict && t.id && this.checkLVal(t.id, "none"), this.strict = s
        }, Q.isSimpleParamList = function(t) { for (var e = 0, i = t; e < i.length; e += 1) { if ("Identifier" !== i[e].type) return !1 } return !0 }, Q.checkParams = function(t, e) {
            for (var i = {}, s = 0, r = t.params; s < r.length; s += 1) {
                var a = r[s];
                this.checkLVal(a, "var", e ? null : i)
            }
        }, Q.parseExprList = function(t, e, i, s) {
            for (var r = [], a = !0; !this.eat(t);) {
                if (a) a = !1;
                else if (this.expect(y.comma), e && this.afterTrailingComma(t)) break;
                var n = void 0;
                i && this.type === y.comma ? n = null : this.type === y.ellipsis ? (n = this.parseSpread(s), s && this.type === y.comma && s.trailingComma < 0 && (s.trailingComma = this.start)) : n = this.parseMaybeAssign(!1, s), r.push(n)
            }
            return r
        }, Q.checkUnreserved = function(t) {
            var e = t.start,
                i = t.end,
                s = t.name;
            (this.inGenerator && "yield" === s && this.raiseRecoverable(e, "Can not use 'yield' as identifier inside a generator"), this.inAsync && "await" === s && this.raiseRecoverable(e, "Can not use 'await' as identifier inside an async function"), this.isKeyword(s) && this.raise(e, "Unexpected keyword '" + s + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(e, i).indexOf("\\")) || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(s) && (this.inAsync || "await" !== s || this.raiseRecoverable(e, "Can not use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + s + "' is reserved"))
        }, Q.parseIdent = function(t, e) { var i = this.startNode(); return t && "never" === this.options.allowReserved && (t = !1), this.type === y.name ? i.name = this.value : this.type.keyword ? (i.name = this.type.keyword, "class" !== i.name && "function" !== i.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop()) : this.unexpected(), this.next(), this.finishNode(i, "Identifier"), t || this.checkUnreserved(i), i }, Q.parseYield = function() { this.yieldPos || (this.yieldPos = this.start); var t = this.startNode(); return this.next(), this.type === y.semi || this.canInsertSemicolon() || this.type !== y.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(y.star), t.argument = this.parseMaybeAssign()), this.finishNode(t, "YieldExpression") }, Q.parseAwait = function() { this.awaitPos || (this.awaitPos = this.start); var t = this.startNode(); return this.next(), t.argument = this.parseMaybeUnary(null, !0), this.finishNode(t, "AwaitExpression") };
        var X = M.prototype;
        X.raise = function(t, e) {
            var i = T(this.input, t);
            e += " (" + i.line + ":" + i.column + ")";
            var s = new SyntaxError(e);
            throw s.pos = t, s.loc = i, s.raisedAt = this.pos, s
        }, X.raiseRecoverable = X.raise, X.curPosition = function() { if (this.options.locations) return new L(this.curLine, this.pos - this.lineStart) };
        var Y = M.prototype,
            Z = Object.assign || function(t) { for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1]; for (var s = 0, r = e; s < r.length; s += 1) { var a = r[s]; for (var n in a) I(a, n) && (t[n] = a[n]) } return t };
        Y.enterFunctionScope = function() { this.scopeStack.push({ var: {}, lexical: {}, childVar: {}, parentLexical: {} }) }, Y.exitFunctionScope = function() { this.scopeStack.pop() }, Y.enterLexicalScope = function() {
            var t = this.scopeStack[this.scopeStack.length - 1],
                e = { var: {}, lexical: {}, childVar: {}, parentLexical: {} };
            this.scopeStack.push(e), Z(e.parentLexical, t.lexical, t.parentLexical)
        }, Y.exitLexicalScope = function() {
            var t = this.scopeStack.pop(),
                e = this.scopeStack[this.scopeStack.length - 1];
            Z(e.childVar, t.var, t.childVar)
        }, Y.canDeclareVarName = function(t) { var e = this.scopeStack[this.scopeStack.length - 1]; return !I(e.lexical, t) && !I(e.parentLexical, t) }, Y.canDeclareLexicalName = function(t) { var e = this.scopeStack[this.scopeStack.length - 1]; return !I(e.lexical, t) && !I(e.var, t) && !I(e.childVar, t) }, Y.declareVarName = function(t) { this.scopeStack[this.scopeStack.length - 1].var[t] = !0 }, Y.declareLexicalName = function(t) { this.scopeStack[this.scopeStack.length - 1].lexical[t] = !0 };
        var $ = function(t, e, i) { this.type = "", this.start = e, this.end = 0, t.options.locations && (this.loc = new N(t, i)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [e, 0]) },
            J = M.prototype;

        function tt(t, e, i, s) { return t.type = e, t.end = i, this.options.locations && (t.loc.end = s), this.options.ranges && (t.range[1] = i), t }
        J.startNode = function() { return new $(this, this.start, this.startLoc) }, J.startNodeAt = function(t, e) { return new $(this, t, e) }, J.finishNode = function(t, e) { return tt.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc) }, J.finishNodeAt = function(t, e, i, s) { return tt.call(this, t, e, i, s) };
        var et = function(t, e, i, s, r) { this.token = t, this.isExpr = !!e, this.preserveSpace = !!i, this.override = s, this.generator = !!r },
            it = { b_stat: new et("{", !1), b_expr: new et("{", !0), b_tmpl: new et("${", !1), p_stat: new et("(", !1), p_expr: new et("(", !0), q_tmpl: new et("`", !0, !0, function(t) { return t.tryReadTemplateToken() }), f_stat: new et("function", !1), f_expr: new et("function", !0), f_expr_gen: new et("function", !0, !1, null, !0), f_gen: new et("function", !1, !1, null, !0) },
            st = M.prototype;
        st.initialContext = function() { return [it.b_stat] }, st.braceIsBlock = function(t) { var e = this.curContext(); return e === it.f_expr || e === it.f_stat || (t !== y.colon || e !== it.b_stat && e !== it.b_expr ? t === y._return || t === y.name && this.exprAllowed ? _.test(this.input.slice(this.lastTokEnd, this.start)) : t === y._else || t === y.semi || t === y.eof || t === y.parenR || t === y.arrow || (t === y.braceL ? e === it.b_stat : t !== y._var && t !== y.name && !this.exprAllowed) : !e.isExpr) }, st.inGeneratorContext = function() { for (var t = this.context.length - 1; t >= 1; t--) { var e = this.context[t]; if ("function" === e.token) return e.generator } return !1 }, st.updateContext = function(t) {
            var e, i = this.type;
            i.keyword && t === y.dot ? this.exprAllowed = !1 : (e = i.updateContext) ? e.call(this, t) : this.exprAllowed = i.beforeExpr
        }, y.parenR.updateContext = y.braceR.updateContext = function() {
            if (1 !== this.context.length) {
                var t = this.context.pop();
                t === it.b_stat && "function" === this.curContext().token && (t = this.context.pop()), this.exprAllowed = !t.isExpr
            } else this.exprAllowed = !0
        }, y.braceL.updateContext = function(t) { this.context.push(this.braceIsBlock(t) ? it.b_stat : it.b_expr), this.exprAllowed = !0 }, y.dollarBraceL.updateContext = function() { this.context.push(it.b_tmpl), this.exprAllowed = !0 }, y.parenL.updateContext = function(t) {
            var e = t === y._if || t === y._for || t === y._with || t === y._while;
            this.context.push(e ? it.p_stat : it.p_expr), this.exprAllowed = !0
        }, y.incDec.updateContext = function() {}, y._function.updateContext = y._class.updateContext = function(t) { t.beforeExpr && t !== y.semi && t !== y._else && (t !== y.colon && t !== y.braceL || this.curContext() !== it.b_stat) ? this.context.push(it.f_expr) : this.context.push(it.f_stat), this.exprAllowed = !1 }, y.backQuote.updateContext = function() { this.curContext() === it.q_tmpl ? this.context.pop() : this.context.push(it.q_tmpl), this.exprAllowed = !1 }, y.star.updateContext = function(t) {
            if (t === y._function) {
                var e = this.context.length - 1;
                this.context[e] === it.f_expr ? this.context[e] = it.f_expr_gen : this.context[e] = it.f_gen
            }
            this.exprAllowed = !0
        }, y.name.updateContext = function(t) {
            var e = !1;
            this.options.ecmaVersion >= 6 && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e
        };
        var rt = { $LONE: ["ASCII", "ASCII_Hex_Digit", "AHex", "Alphabetic", "Alpha", "Any", "Assigned", "Bidi_Control", "Bidi_C", "Bidi_Mirrored", "Bidi_M", "Case_Ignorable", "CI", "Cased", "Changes_When_Casefolded", "CWCF", "Changes_When_Casemapped", "CWCM", "Changes_When_Lowercased", "CWL", "Changes_When_NFKC_Casefolded", "CWKCF", "Changes_When_Titlecased", "CWT", "Changes_When_Uppercased", "CWU", "Dash", "Default_Ignorable_Code_Point", "DI", "Deprecated", "Dep", "Diacritic", "Dia", "Emoji", "Emoji_Component", "Emoji_Modifier", "Emoji_Modifier_Base", "Emoji_Presentation", "Extender", "Ext", "Grapheme_Base", "Gr_Base", "Grapheme_Extend", "Gr_Ext", "Hex_Digit", "Hex", "IDS_Binary_Operator", "IDSB", "IDS_Trinary_Operator", "IDST", "ID_Continue", "IDC", "ID_Start", "IDS", "Ideographic", "Ideo", "Join_Control", "Join_C", "Logical_Order_Exception", "LOE", "Lowercase", "Lower", "Math", "Noncharacter_Code_Point", "NChar", "Pattern_Syntax", "Pat_Syn", "Pattern_White_Space", "Pat_WS", "Quotation_Mark", "QMark", "Radical", "Regional_Indicator", "RI", "Sentence_Terminal", "STerm", "Soft_Dotted", "SD", "Terminal_Punctuation", "Term", "Unified_Ideograph", "UIdeo", "Uppercase", "Upper", "Variation_Selector", "VS", "White_Space", "space", "XID_Continue", "XIDC", "XID_Start", "XIDS"], General_Category: ["Cased_Letter", "LC", "Close_Punctuation", "Pe", "Connector_Punctuation", "Pc", "Control", "Cc", "cntrl", "Currency_Symbol", "Sc", "Dash_Punctuation", "Pd", "Decimal_Number", "Nd", "digit", "Enclosing_Mark", "Me", "Final_Punctuation", "Pf", "Format", "Cf", "Initial_Punctuation", "Pi", "Letter", "L", "Letter_Number", "Nl", "Line_Separator", "Zl", "Lowercase_Letter", "Ll", "Mark", "M", "Combining_Mark", "Math_Symbol", "Sm", "Modifier_Letter", "Lm", "Modifier_Symbol", "Sk", "Nonspacing_Mark", "Mn", "Number", "N", "Open_Punctuation", "Ps", "Other", "C", "Other_Letter", "Lo", "Other_Number", "No", "Other_Punctuation", "Po", "Other_Symbol", "So", "Paragraph_Separator", "Zp", "Private_Use", "Co", "Punctuation", "P", "punct", "Separator", "Z", "Space_Separator", "Zs", "Spacing_Mark", "Mc", "Surrogate", "Cs", "Symbol", "S", "Titlecase_Letter", "Lt", "Unassigned", "Cn", "Uppercase_Letter", "Lu"], Script: ["Adlam", "Adlm", "Ahom", "Anatolian_Hieroglyphs", "Hluw", "Arabic", "Arab", "Armenian", "Armn", "Avestan", "Avst", "Balinese", "Bali", "Bamum", "Bamu", "Bassa_Vah", "Bass", "Batak", "Batk", "Bengali", "Beng", "Bhaiksuki", "Bhks", "Bopomofo", "Bopo", "Brahmi", "Brah", "Braille", "Brai", "Buginese", "Bugi", "Buhid", "Buhd", "Canadian_Aboriginal", "Cans", "Carian", "Cari", "Caucasian_Albanian", "Aghb", "Chakma", "Cakm", "Cham", "Cherokee", "Cher", "Common", "Zyyy", "Coptic", "Copt", "Qaac", "Cuneiform", "Xsux", "Cypriot", "Cprt", "Cyrillic", "Cyrl", "Deseret", "Dsrt", "Devanagari", "Deva", "Duployan", "Dupl", "Egyptian_Hieroglyphs", "Egyp", "Elbasan", "Elba", "Ethiopic", "Ethi", "Georgian", "Geor", "Glagolitic", "Glag", "Gothic", "Goth", "Grantha", "Gran", "Greek", "Grek", "Gujarati", "Gujr", "Gurmukhi", "Guru", "Han", "Hani", "Hangul", "Hang", "Hanunoo", "Hano", "Hatran", "Hatr", "Hebrew", "Hebr", "Hiragana", "Hira", "Imperial_Aramaic", "Armi", "Inherited", "Zinh", "Qaai", "Inscriptional_Pahlavi", "Phli", "Inscriptional_Parthian", "Prti", "Javanese", "Java", "Kaithi", "Kthi", "Kannada", "Knda", "Katakana", "Kana", "Kayah_Li", "Kali", "Kharoshthi", "Khar", "Khmer", "Khmr", "Khojki", "Khoj", "Khudawadi", "Sind", "Lao", "Laoo", "Latin", "Latn", "Lepcha", "Lepc", "Limbu", "Limb", "Linear_A", "Lina", "Linear_B", "Linb", "Lisu", "Lycian", "Lyci", "Lydian", "Lydi", "Mahajani", "Mahj", "Malayalam", "Mlym", "Mandaic", "Mand", "Manichaean", "Mani", "Marchen", "Marc", "Masaram_Gondi", "Gonm", "Meetei_Mayek", "Mtei", "Mende_Kikakui", "Mend", "Meroitic_Cursive", "Merc", "Meroitic_Hieroglyphs", "Mero", "Miao", "Plrd", "Modi", "Mongolian", "Mong", "Mro", "Mroo", "Multani", "Mult", "Myanmar", "Mymr", "Nabataean", "Nbat", "New_Tai_Lue", "Talu", "Newa", "Nko", "Nkoo", "Nushu", "Nshu", "Ogham", "Ogam", "Ol_Chiki", "Olck", "Old_Hungarian", "Hung", "Old_Italic", "Ital", "Old_North_Arabian", "Narb", "Old_Permic", "Perm", "Old_Persian", "Xpeo", "Old_South_Arabian", "Sarb", "Old_Turkic", "Orkh", "Oriya", "Orya", "Osage", "Osge", "Osmanya", "Osma", "Pahawh_Hmong", "Hmng", "Palmyrene", "Palm", "Pau_Cin_Hau", "Pauc", "Phags_Pa", "Phag", "Phoenician", "Phnx", "Psalter_Pahlavi", "Phlp", "Rejang", "Rjng", "Runic", "Runr", "Samaritan", "Samr", "Saurashtra", "Saur", "Sharada", "Shrd", "Shavian", "Shaw", "Siddham", "Sidd", "SignWriting", "Sgnw", "Sinhala", "Sinh", "Sora_Sompeng", "Sora", "Soyombo", "Soyo", "Sundanese", "Sund", "Syloti_Nagri", "Sylo", "Syriac", "Syrc", "Tagalog", "Tglg", "Tagbanwa", "Tagb", "Tai_Le", "Tale", "Tai_Tham", "Lana", "Tai_Viet", "Tavt", "Takri", "Takr", "Tamil", "Taml", "Tangut", "Tang", "Telugu", "Telu", "Thaana", "Thaa", "Thai", "Tibetan", "Tibt", "Tifinagh", "Tfng", "Tirhuta", "Tirh", "Ugaritic", "Ugar", "Vai", "Vaii", "Warang_Citi", "Wara", "Yi", "Yiii", "Zanabazar_Square", "Zanb"] };
        Array.prototype.push.apply(rt.$LONE, rt.General_Category), rt.gc = rt.General_Category, rt.sc = rt.Script_Extensions = rt.scx = rt.Script;
        var at = M.prototype,
            nt = function(t) { this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : ""), this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = [] };

        function ot(t) { return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) }

        function ht(t) { return 36 === t || t >= 40 && t <= 43 || 46 === t || 63 === t || t >= 91 && t <= 94 || t >= 123 && t <= 125 }

        function pt(t) { return u(t, !0) || 36 === t || 95 === t }

        function ct(t) { return l(t, !0) || 36 === t || 95 === t || 8204 === t || 8205 === t }

        function ut(t) { return t >= 65 && t <= 90 || t >= 97 && t <= 122 }

        function lt(t) { return t >= 0 && t <= 1114111 }

        function dt(t) { return 100 === t || 68 === t || 115 === t || 83 === t || 119 === t || 87 === t }

        function ft(t) { return ut(t) || 95 === t }

        function mt(t) { return ft(t) || xt(t) }

        function xt(t) { return t >= 48 && t <= 57 }

        function gt(t) { return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102 }

        function vt(t) { return t >= 65 && t <= 70 ? t - 65 + 10 : t >= 97 && t <= 102 ? t - 97 + 10 : t - 48 }

        function yt(t) { return t >= 48 && t <= 55 }
        nt.prototype.reset = function(t, e, i) {
            var s = -1 !== i.indexOf("u");
            this.start = 0 | t, this.source = e + "", this.flags = i, this.switchU = s && this.parser.options.ecmaVersion >= 6, this.switchN = s && this.parser.options.ecmaVersion >= 9
        }, nt.prototype.raise = function(t) { this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t) }, nt.prototype.at = function(t) {
            var e = this.source,
                i = e.length;
            if (t >= i) return -1;
            var s = e.charCodeAt(t);
            return !this.switchU || s <= 55295 || s >= 57344 || t + 1 >= i ? s : (s << 10) + e.charCodeAt(t + 1) - 56613888
        }, nt.prototype.nextIndex = function(t) {
            var e = this.source,
                i = e.length;
            if (t >= i) return i;
            var s = e.charCodeAt(t);
            return !this.switchU || s <= 55295 || s >= 57344 || t + 1 >= i ? t + 1 : t + 2
        }, nt.prototype.current = function() { return this.at(this.pos) }, nt.prototype.lookahead = function() { return this.at(this.nextIndex(this.pos)) }, nt.prototype.advance = function() { this.pos = this.nextIndex(this.pos) }, nt.prototype.eat = function(t) { return this.current() === t && (this.advance(), !0) }, at.validateRegExpFlags = function(t) { for (var e = t.validFlags, i = t.flags, s = 0; s < i.length; s++) { var r = i.charAt(s); - 1 === e.indexOf(r) && this.raise(t.start, "Invalid regular expression flag"), i.indexOf(r, s + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag") } }, at.validateRegExpPattern = function(t) { this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && t.groupNames.length > 0 && (t.switchN = !0, this.regexp_pattern(t)) }, at.regexp_pattern = function(t) { t.pos = 0, t.lastIntValue = 0, t.lastStringValue = "", t.lastAssertionIsQuantifiable = !1, t.numCapturingParens = 0, t.maxBackReference = 0, t.groupNames.length = 0, t.backReferenceNames.length = 0, this.regexp_disjunction(t), t.pos !== t.source.length && (t.eat(41) && t.raise("Unmatched ')'"), (t.eat(93) || t.eat(125)) && t.raise("Lone quantifier brackets")), t.maxBackReference > t.numCapturingParens && t.raise("Invalid escape"); for (var e = 0, i = t.backReferenceNames; e < i.length; e += 1) { var s = i[e]; - 1 === t.groupNames.indexOf(s) && t.raise("Invalid named capture referenced") } }, at.regexp_disjunction = function(t) {
            for (this.regexp_alternative(t); t.eat(124);) this.regexp_alternative(t);
            this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"), t.eat(123) && t.raise("Lone quantifier brackets")
        }, at.regexp_alternative = function(t) { for (; t.pos < t.source.length && this.regexp_eatTerm(t);); }, at.regexp_eatTerm = function(t) { return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : !(t.switchU ? !this.regexp_eatAtom(t) : !this.regexp_eatExtendedAtom(t)) && (this.regexp_eatQuantifier(t), !0) }, at.regexp_eatAssertion = function(t) {
            var e = t.pos;
            if (t.lastAssertionIsQuantifiable = !1, t.eat(94) || t.eat(36)) return !0;
            if (t.eat(92)) {
                if (t.eat(66) || t.eat(98)) return !0;
                t.pos = e
            }
            if (t.eat(40) && t.eat(63)) { var i = !1; if (this.options.ecmaVersion >= 9 && (i = t.eat(60)), t.eat(61) || t.eat(33)) return this.regexp_disjunction(t), t.eat(41) || t.raise("Unterminated group"), t.lastAssertionIsQuantifiable = !i, !0 }
            return t.pos = e, !1
        }, at.regexp_eatQuantifier = function(t, e) { return void 0 === e && (e = !1), !!this.regexp_eatQuantifierPrefix(t, e) && (t.eat(63), !0) }, at.regexp_eatQuantifierPrefix = function(t, e) { return t.eat(42) || t.eat(43) || t.eat(63) || this.regexp_eatBracedQuantifier(t, e) }, at.regexp_eatBracedQuantifier = function(t, e) {
            var i = t.pos;
            if (t.eat(123)) {
                var s = 0,
                    r = -1;
                if (this.regexp_eatDecimalDigits(t) && (s = t.lastIntValue, t.eat(44) && this.regexp_eatDecimalDigits(t) && (r = t.lastIntValue), t.eat(125))) return -1 !== r && r < s && !e && t.raise("numbers out of order in {} quantifier"), !0;
                t.switchU && !e && t.raise("Incomplete quantifier"), t.pos = i
            }
            return !1
        }, at.regexp_eatAtom = function(t) { return this.regexp_eatPatternCharacters(t) || t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) }, at.regexp_eatReverseSolidusAtomEscape = function(t) {
            var e = t.pos;
            if (t.eat(92)) {
                if (this.regexp_eatAtomEscape(t)) return !0;
                t.pos = e
            }
            return !1
        }, at.regexp_eatUncapturingGroup = function(t) {
            var e = t.pos;
            if (t.eat(40)) {
                if (t.eat(63) && t.eat(58)) {
                    if (this.regexp_disjunction(t), t.eat(41)) return !0;
                    t.raise("Unterminated group")
                }
                t.pos = e
            }
            return !1
        }, at.regexp_eatCapturingGroup = function(t) {
            if (t.eat(40)) {
                if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(t) : 63 === t.current() && t.raise("Invalid group"), this.regexp_disjunction(t), t.eat(41)) return t.numCapturingParens += 1, !0;
                t.raise("Unterminated group")
            }
            return !1
        }, at.regexp_eatExtendedAtom = function(t) { return t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t) }, at.regexp_eatInvalidBracedQuantifier = function(t) { return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1 }, at.regexp_eatSyntaxCharacter = function(t) { var e = t.current(); return !!ht(e) && (t.lastIntValue = e, t.advance(), !0) }, at.regexp_eatPatternCharacters = function(t) { for (var e = t.pos, i = 0; - 1 !== (i = t.current()) && !ht(i);) t.advance(); return t.pos !== e }, at.regexp_eatExtendedPatternCharacter = function(t) { var e = t.current(); return !(-1 === e || 36 === e || e >= 40 && e <= 43 || 46 === e || 63 === e || 91 === e || 94 === e || 124 === e) && (t.advance(), !0) }, at.regexp_groupSpecifier = function(t) {
            if (t.eat(63)) {
                if (this.regexp_eatGroupName(t)) return -1 !== t.groupNames.indexOf(t.lastStringValue) && t.raise("Duplicate capture group name"), void t.groupNames.push(t.lastStringValue);
                t.raise("Invalid group")
            }
        }, at.regexp_eatGroupName = function(t) {
            if (t.lastStringValue = "", t.eat(60)) {
                if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62)) return !0;
                t.raise("Invalid capture group name")
            }
            return !1
        }, at.regexp_eatRegExpIdentifierName = function(t) { if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) { for (t.lastStringValue += ot(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t);) t.lastStringValue += ot(t.lastIntValue); return !0 } return !1 }, at.regexp_eatRegExpIdentifierStart = function(t) {
            var e = t.pos,
                i = t.current();
            return t.advance(), 92 === i && this.regexp_eatRegExpUnicodeEscapeSequence(t) && (i = t.lastIntValue), pt(i) ? (t.lastIntValue = i, !0) : (t.pos = e, !1)
        }, at.regexp_eatRegExpIdentifierPart = function(t) {
            var e = t.pos,
                i = t.current();
            return t.advance(), 92 === i && this.regexp_eatRegExpUnicodeEscapeSequence(t) && (i = t.lastIntValue), ct(i) ? (t.lastIntValue = i, !0) : (t.pos = e, !1)
        }, at.regexp_eatAtomEscape = function(t) { return !!(this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t)) || (t.switchU && (99 === t.current() && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1) }, at.regexp_eatBackReference = function(t) {
            var e = t.pos;
            if (this.regexp_eatDecimalEscape(t)) {
                var i = t.lastIntValue;
                if (t.switchU) return i > t.maxBackReference && (t.maxBackReference = i), !0;
                if (i <= t.numCapturingParens) return !0;
                t.pos = e
            }
            return !1
        }, at.regexp_eatKGroupName = function(t) {
            if (t.eat(107)) {
                if (this.regexp_eatGroupName(t)) return t.backReferenceNames.push(t.lastStringValue), !0;
                t.raise("Invalid named reference")
            }
            return !1
        }, at.regexp_eatCharacterEscape = function(t) { return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t) }, at.regexp_eatCControlLetter = function(t) {
            var e = t.pos;
            if (t.eat(99)) {
                if (this.regexp_eatControlLetter(t)) return !0;
                t.pos = e
            }
            return !1
        }, at.regexp_eatZero = function(t) { return 48 === t.current() && !xt(t.lookahead()) && (t.lastIntValue = 0, t.advance(), !0) }, at.regexp_eatControlEscape = function(t) { var e = t.current(); return 116 === e ? (t.lastIntValue = 9, t.advance(), !0) : 110 === e ? (t.lastIntValue = 10, t.advance(), !0) : 118 === e ? (t.lastIntValue = 11, t.advance(), !0) : 102 === e ? (t.lastIntValue = 12, t.advance(), !0) : 114 === e && (t.lastIntValue = 13, t.advance(), !0) }, at.regexp_eatControlLetter = function(t) { var e = t.current(); return !!ut(e) && (t.lastIntValue = e % 32, t.advance(), !0) }, at.regexp_eatRegExpUnicodeEscapeSequence = function(t) {
            var e = t.pos;
            if (t.eat(117)) {
                if (this.regexp_eatFixedHexDigits(t, 4)) {
                    var i = t.lastIntValue;
                    if (t.switchU && i >= 55296 && i <= 56319) {
                        var s = t.pos;
                        if (t.eat(92) && t.eat(117) && this.regexp_eatFixedHexDigits(t, 4)) { var r = t.lastIntValue; if (r >= 56320 && r <= 57343) return t.lastIntValue = 1024 * (i - 55296) + (r - 56320) + 65536, !0 }
                        t.pos = s, t.lastIntValue = i
                    }
                    return !0
                }
                if (t.switchU && t.eat(123) && this.regexp_eatHexDigits(t) && t.eat(125) && lt(t.lastIntValue)) return !0;
                t.switchU && t.raise("Invalid unicode escape"), t.pos = e
            }
            return !1
        }, at.regexp_eatIdentityEscape = function(t) { if (t.switchU) return !!this.regexp_eatSyntaxCharacter(t) || !!t.eat(47) && (t.lastIntValue = 47, !0); var e = t.current(); return !(99 === e || t.switchN && 107 === e) && (t.lastIntValue = e, t.advance(), !0) }, at.regexp_eatDecimalEscape = function(t) { t.lastIntValue = 0; var e = t.current(); if (e >= 49 && e <= 57) { do { t.lastIntValue = 10 * t.lastIntValue + (e - 48), t.advance() } while ((e = t.current()) >= 48 && e <= 57); return !0 } return !1 }, at.regexp_eatCharacterClassEscape = function(t) {
            var e = t.current();
            if (dt(e)) return t.lastIntValue = -1, t.advance(), !0;
            if (t.switchU && this.options.ecmaVersion >= 9 && (80 === e || 112 === e)) {
                if (t.lastIntValue = -1, t.advance(), t.eat(123) && this.regexp_eatUnicodePropertyValueExpression(t) && t.eat(125)) return !0;
                t.raise("Invalid property name")
            }
            return !1
        }, at.regexp_eatUnicodePropertyValueExpression = function(t) { var e = t.pos; if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) { var i = t.lastStringValue; if (this.regexp_eatUnicodePropertyValue(t)) { var s = t.lastStringValue; return this.regexp_validateUnicodePropertyNameAndValue(t, i, s), !0 } } if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) { var r = t.lastStringValue; return this.regexp_validateUnicodePropertyNameOrValue(t, r), !0 } return !1 }, at.regexp_validateUnicodePropertyNameAndValue = function(t, e, i) { rt.hasOwnProperty(e) && -1 !== rt[e].indexOf(i) || t.raise("Invalid property name") }, at.regexp_validateUnicodePropertyNameOrValue = function(t, e) {-1 === rt.$LONE.indexOf(e) && t.raise("Invalid property name") }, at.regexp_eatUnicodePropertyName = function(t) { var e = 0; for (t.lastStringValue = ""; ft(e = t.current());) t.lastStringValue += ot(e), t.advance(); return "" !== t.lastStringValue }, at.regexp_eatUnicodePropertyValue = function(t) { var e = 0; for (t.lastStringValue = ""; mt(e = t.current());) t.lastStringValue += ot(e), t.advance(); return "" !== t.lastStringValue }, at.regexp_eatLoneUnicodePropertyNameOrValue = function(t) { return this.regexp_eatUnicodePropertyValue(t) }, at.regexp_eatCharacterClass = function(t) {
            if (t.eat(91)) {
                if (t.eat(94), this.regexp_classRanges(t), t.eat(93)) return !0;
                t.raise("Unterminated character class")
            }
            return !1
        }, at.regexp_classRanges = function(t) { for (; this.regexp_eatClassAtom(t);) { var e = t.lastIntValue; if (t.eat(45) && this.regexp_eatClassAtom(t)) { var i = t.lastIntValue;!t.switchU || -1 !== e && -1 !== i || t.raise("Invalid character class"), -1 !== e && -1 !== i && e > i && t.raise("Range out of order in character class") } } }, at.regexp_eatClassAtom = function(t) {
            var e = t.pos;
            if (t.eat(92)) {
                if (this.regexp_eatClassEscape(t)) return !0;
                if (t.switchU) {
                    var i = t.current();
                    (99 === i || yt(i)) && t.raise("Invalid class escape"), t.raise("Invalid escape")
                }
                t.pos = e
            }
            var s = t.current();
            return 93 !== s && (t.lastIntValue = s, t.advance(), !0)
        }, at.regexp_eatClassEscape = function(t) {
            var e = t.pos;
            if (t.eat(98)) return t.lastIntValue = 8, !0;
            if (t.switchU && t.eat(45)) return t.lastIntValue = 45, !0;
            if (!t.switchU && t.eat(99)) {
                if (this.regexp_eatClassControlLetter(t)) return !0;
                t.pos = e
            }
            return this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t)
        }, at.regexp_eatClassControlLetter = function(t) { var e = t.current(); return !(!xt(e) && 95 !== e) && (t.lastIntValue = e % 32, t.advance(), !0) }, at.regexp_eatHexEscapeSequence = function(t) {
            var e = t.pos;
            if (t.eat(120)) {
                if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
                t.switchU && t.raise("Invalid escape"), t.pos = e
            }
            return !1
        }, at.regexp_eatDecimalDigits = function(t) {
            var e = t.pos,
                i = 0;
            for (t.lastIntValue = 0; xt(i = t.current());) t.lastIntValue = 10 * t.lastIntValue + (i - 48), t.advance();
            return t.pos !== e
        }, at.regexp_eatHexDigits = function(t) {
            var e = t.pos,
                i = 0;
            for (t.lastIntValue = 0; gt(i = t.current());) t.lastIntValue = 16 * t.lastIntValue + vt(i), t.advance();
            return t.pos !== e
        }, at.regexp_eatLegacyOctalEscapeSequence = function(t) {
            if (this.regexp_eatOctalDigit(t)) {
                var e = t.lastIntValue;
                if (this.regexp_eatOctalDigit(t)) {
                    var i = t.lastIntValue;
                    e <= 3 && this.regexp_eatOctalDigit(t) ? t.lastIntValue = 64 * e + 8 * i + t.lastIntValue : t.lastIntValue = 8 * e + i
                } else t.lastIntValue = e;
                return !0
            }
            return !1
        }, at.regexp_eatOctalDigit = function(t) { var e = t.current(); return yt(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1) }, at.regexp_eatFixedHexDigits = function(t, e) {
            var i = t.pos;
            t.lastIntValue = 0;
            for (var s = 0; s < e; ++s) {
                var r = t.current();
                if (!gt(r)) return t.pos = i, !1;
                t.lastIntValue = 16 * t.lastIntValue + vt(r), t.advance()
            }
            return !0
        };
        var _t = function(t) { this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new N(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]) },
            bt = M.prototype;

        function kt(t) { return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) }
        bt.next = function() { this.options.onToken && this.options.onToken(new _t(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken() }, bt.getToken = function() { return this.next(), new _t(this) }, "undefined" != typeof Symbol && (bt[Symbol.iterator] = function() { var t = this; return { next: function() { var e = t.getToken(); return { done: e.type === y.eof, value: e } } } }), bt.curContext = function() { return this.context[this.context.length - 1] }, bt.nextToken = function() { var t = this.curContext(); return t && t.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(y.eof) : t.override ? t.override(this) : void this.readToken(this.fullCharCodeAtPos()) }, bt.readToken = function(t) { return u(t, this.options.ecmaVersion >= 6) || 92 === t ? this.readWord() : this.getTokenFromCode(t) }, bt.fullCharCodeAtPos = function() { var t = this.input.charCodeAt(this.pos); return t <= 55295 || t >= 57344 ? t : (t << 10) + this.input.charCodeAt(this.pos + 1) - 56613888 }, bt.skipBlockComment = function() {
            var t, e = this.options.onComment && this.curPosition(),
                i = this.pos,
                s = this.input.indexOf("*/", this.pos += 2);
            if (-1 === s && this.raise(this.pos - 2, "Unterminated comment"), this.pos = s + 2, this.options.locations)
                for (b.lastIndex = i;
                    (t = b.exec(this.input)) && t.index < this.pos;) ++this.curLine, this.lineStart = t.index + t[0].length;
            this.options.onComment && this.options.onComment(!0, this.input.slice(i + 2, s), i, this.pos, e, this.curPosition())
        }, bt.skipLineComment = function(t) {
            for (var e = this.pos, i = this.options.onComment && this.curPosition(), s = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !k(s);) s = this.input.charCodeAt(++this.pos);
            this.options.onComment && this.options.onComment(!1, this.input.slice(e + t, this.pos), e, this.pos, i, this.curPosition())
        }, bt.skipSpace = function() {
            t: for (; this.pos < this.input.length;) {
                var t = this.input.charCodeAt(this.pos);
                switch (t) {
                    case 32:
                    case 160:
                        ++this.pos;
                        break;
                    case 13:
                        10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
                    case 10:
                    case 8232:
                    case 8233:
                        ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
                        break;
                    case 47:
                        switch (this.input.charCodeAt(this.pos + 1)) {
                            case 42:
                                this.skipBlockComment();
                                break;
                            case 47:
                                this.skipLineComment(2);
                                break;
                            default:
                                break t
                        }
                        break;
                    default:
                        if (!(t > 8 && t < 14 || t >= 5760 && C.test(String.fromCharCode(t)))) break t;
                        ++this.pos
                }
            }
        }, bt.finishToken = function(t, e) {
            this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
            var i = this.type;
            this.type = t, this.value = e, this.updateContext(i)
        }, bt.readToken_dot = function() { var t = this.input.charCodeAt(this.pos + 1); if (t >= 48 && t <= 57) return this.readNumber(!0); var e = this.input.charCodeAt(this.pos + 2); return this.options.ecmaVersion >= 6 && 46 === t && 46 === e ? (this.pos += 3, this.finishToken(y.ellipsis)) : (++this.pos, this.finishToken(y.dot)) }, bt.readToken_slash = function() { var t = this.input.charCodeAt(this.pos + 1); return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === t ? this.finishOp(y.assign, 2) : this.finishOp(y.slash, 1) }, bt.readToken_mult_modulo_exp = function(t) {
            var e = this.input.charCodeAt(this.pos + 1),
                i = 1,
                s = 42 === t ? y.star : y.modulo;
            return this.options.ecmaVersion >= 7 && 42 === t && 42 === e && (++i, s = y.starstar, e = this.input.charCodeAt(this.pos + 2)), 61 === e ? this.finishOp(y.assign, i + 1) : this.finishOp(s, i)
        }, bt.readToken_pipe_amp = function(t) { var e = this.input.charCodeAt(this.pos + 1); return e === t ? this.finishOp(124 === t ? y.logicalOR : y.logicalAND, 2) : 61 === e ? this.finishOp(y.assign, 2) : this.finishOp(124 === t ? y.bitwiseOR : y.bitwiseAND, 1) }, bt.readToken_caret = function() { return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(y.assign, 2) : this.finishOp(y.bitwiseXOR, 1) }, bt.readToken_plus_min = function(t) { var e = this.input.charCodeAt(this.pos + 1); return e === t ? 45 !== e || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !_.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(y.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === e ? this.finishOp(y.assign, 2) : this.finishOp(y.plusMin, 1) }, bt.readToken_lt_gt = function(t) {
            var e = this.input.charCodeAt(this.pos + 1),
                i = 1;
            return e === t ? (i = 62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + i) ? this.finishOp(y.assign, i + 1) : this.finishOp(y.bitShift, i)) : 33 !== e || 60 !== t || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === e && (i = 2), this.finishOp(y.relational, i)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
        }, bt.readToken_eq_excl = function(t) { var e = this.input.charCodeAt(this.pos + 1); return 61 === e ? this.finishOp(y.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === t && 62 === e && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(y.arrow)) : this.finishOp(61 === t ? y.eq : y.prefix, 1) }, bt.getTokenFromCode = function(t) {
            switch (t) {
                case 46:
                    return this.readToken_dot();
                case 40:
                    return ++this.pos, this.finishToken(y.parenL);
                case 41:
                    return ++this.pos, this.finishToken(y.parenR);
                case 59:
                    return ++this.pos, this.finishToken(y.semi);
                case 44:
                    return ++this.pos, this.finishToken(y.comma);
                case 91:
                    return ++this.pos, this.finishToken(y.bracketL);
                case 93:
                    return ++this.pos, this.finishToken(y.bracketR);
                case 123:
                    return ++this.pos, this.finishToken(y.braceL);
                case 125:
                    return ++this.pos, this.finishToken(y.braceR);
                case 58:
                    return ++this.pos, this.finishToken(y.colon);
                case 63:
                    return ++this.pos, this.finishToken(y.question);
                case 96:
                    if (this.options.ecmaVersion < 6) break;
                    return ++this.pos, this.finishToken(y.backQuote);
                case 48:
                    var e = this.input.charCodeAt(this.pos + 1);
                    if (120 === e || 88 === e) return this.readRadixNumber(16);
                    if (this.options.ecmaVersion >= 6) { if (111 === e || 79 === e) return this.readRadixNumber(8); if (98 === e || 66 === e) return this.readRadixNumber(2) }
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                    return this.readNumber(!1);
                case 34:
                case 39:
                    return this.readString(t);
                case 47:
                    return this.readToken_slash();
                case 37:
                case 42:
                    return this.readToken_mult_modulo_exp(t);
                case 124:
                case 38:
                    return this.readToken_pipe_amp(t);
                case 94:
                    return this.readToken_caret();
                case 43:
                case 45:
                    return this.readToken_plus_min(t);
                case 60:
                case 62:
                    return this.readToken_lt_gt(t);
                case 61:
                case 33:
                    return this.readToken_eq_excl(t);
                case 126:
                    return this.finishOp(y.prefix, 1)
            }
            this.raise(this.pos, "Unexpected character '" + kt(t) + "'")
        }, bt.finishOp = function(t, e) { var i = this.input.slice(this.pos, this.pos + e); return this.pos += e, this.finishToken(t, i) }, bt.readRegexp = function() {
            for (var t, e, i = this.pos;;) {
                this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
                var s = this.input.charAt(this.pos);
                if (_.test(s) && this.raise(i, "Unterminated regular expression"), t) t = !1;
                else {
                    if ("[" === s) e = !0;
                    else if ("]" === s && e) e = !1;
                    else if ("/" === s && !e) break;
                    t = "\\" === s
                }++this.pos
            }
            var r = this.input.slice(i, this.pos);
            ++this.pos;
            var a = this.pos,
                n = this.readWord1();
            this.containsEsc && this.unexpected(a);
            var o = this.regexpState || (this.regexpState = new nt(this));
            o.reset(i, r, n), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
            var h = null;
            try { h = new RegExp(r, n) } catch (t) {}
            return this.finishToken(y.regexp, { pattern: r, flags: n, value: h })
        }, bt.readInt = function(t, e) {
            for (var i = this.pos, s = 0, r = 0, a = null == e ? 1 / 0 : e; r < a; ++r) {
                var n = this.input.charCodeAt(this.pos),
                    o = void 0;
                if ((o = n >= 97 ? n - 97 + 10 : n >= 65 ? n - 65 + 10 : n >= 48 && n <= 57 ? n - 48 : 1 / 0) >= t) break;
                ++this.pos, s = s * t + o
            }
            return this.pos === i || null != e && this.pos - i !== e ? null : s
        }, bt.readRadixNumber = function(t) { this.pos += 2; var e = this.readInt(t); return null == e && this.raise(this.start + 2, "Expected number in radix " + t), u(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(y.num, e) }, bt.readNumber = function(t) {
            var e = this.pos;
            t || null !== this.readInt(10) || this.raise(e, "Invalid number");
            var i = this.pos - e >= 2 && 48 === this.input.charCodeAt(e);
            i && this.strict && this.raise(e, "Invalid number"), i && /[89]/.test(this.input.slice(e, this.pos)) && (i = !1);
            var s = this.input.charCodeAt(this.pos);
            46 !== s || i || (++this.pos, this.readInt(10), s = this.input.charCodeAt(this.pos)), 69 !== s && 101 !== s || i || (43 !== (s = this.input.charCodeAt(++this.pos)) && 45 !== s || ++this.pos, null === this.readInt(10) && this.raise(e, "Invalid number")), u(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
            var r = this.input.slice(e, this.pos),
                a = i ? parseInt(r, 8) : parseFloat(r);
            return this.finishToken(y.num, a)
        }, bt.readCodePoint = function() {
            var t;
            if (123 === this.input.charCodeAt(this.pos)) {
                this.options.ecmaVersion < 6 && this.unexpected();
                var e = ++this.pos;
                t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(e, "Code point out of bounds")
            } else t = this.readHexChar(4);
            return t
        }, bt.readString = function(t) {
            for (var e = "", i = ++this.pos;;) {
                this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                var s = this.input.charCodeAt(this.pos);
                if (s === t) break;
                92 === s ? (e += this.input.slice(i, this.pos), e += this.readEscapedChar(!1), i = this.pos) : (k(s, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos)
            }
            return e += this.input.slice(i, this.pos++), this.finishToken(y.string, e)
        };
        var Ct = {};
        bt.tryReadTemplateToken = function() {
            this.inTemplateElement = !0;
            try { this.readTmplToken() } catch (t) {
                if (t !== Ct) throw t;
                this.readInvalidTemplateToken()
            }
            this.inTemplateElement = !1
        }, bt.invalidStringToken = function(t, e) {
            if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Ct;
            this.raise(t, e)
        }, bt.readTmplToken = function() {
            for (var t = "", e = this.pos;;) {
                this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
                var i = this.input.charCodeAt(this.pos);
                if (96 === i || 36 === i && 123 === this.input.charCodeAt(this.pos + 1)) return this.pos !== this.start || this.type !== y.template && this.type !== y.invalidTemplate ? (t += this.input.slice(e, this.pos), this.finishToken(y.template, t)) : 36 === i ? (this.pos += 2, this.finishToken(y.dollarBraceL)) : (++this.pos, this.finishToken(y.backQuote));
                if (92 === i) t += this.input.slice(e, this.pos), t += this.readEscapedChar(!0), e = this.pos;
                else if (k(i)) {
                    switch (t += this.input.slice(e, this.pos), ++this.pos, i) {
                        case 13:
                            10 === this.input.charCodeAt(this.pos) && ++this.pos;
                        case 10:
                            t += "\n";
                            break;
                        default:
                            t += String.fromCharCode(i)
                    }
                    this.options.locations && (++this.curLine, this.lineStart = this.pos), e = this.pos
                } else ++this.pos
            }
        }, bt.readInvalidTemplateToken = function() {
            for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
                case "\\":
                    ++this.pos;
                    break;
                case "$":
                    if ("{" !== this.input[this.pos + 1]) break;
                case "`":
                    return this.finishToken(y.invalidTemplate, this.input.slice(this.start, this.pos))
            }
            this.raise(this.start, "Unterminated template")
        }, bt.readEscapedChar = function(t) {
            var e = this.input.charCodeAt(++this.pos);
            switch (++this.pos, e) {
                case 110:
                    return "\n";
                case 114:
                    return "\r";
                case 120:
                    return String.fromCharCode(this.readHexChar(2));
                case 117:
                    return kt(this.readCodePoint());
                case 116:
                    return "\t";
                case 98:
                    return "\b";
                case 118:
                    return "\v";
                case 102:
                    return "\f";
                case 13:
                    10 === this.input.charCodeAt(this.pos) && ++this.pos;
                case 10:
                    return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
                default:
                    if (e >= 48 && e <= 55) {
                        var i = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                            s = parseInt(i, 8);
                        return s > 255 && (i = i.slice(0, -1), s = parseInt(i, 8)), this.pos += i.length - 1, e = this.input.charCodeAt(this.pos), "0" === i && 56 !== e && 57 !== e || !this.strict && !t || this.invalidStringToken(this.pos - 1 - i.length, t ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(s)
                    }
                    return String.fromCharCode(e)
            }
        }, bt.readHexChar = function(t) {
            var e = this.pos,
                i = this.readInt(16, t);
            return null === i && this.invalidStringToken(e, "Bad character escape sequence"), i
        }, bt.readWord1 = function() {
            this.containsEsc = !1;
            for (var t = "", e = !0, i = this.pos, s = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
                var r = this.fullCharCodeAtPos();
                if (l(r, s)) this.pos += r <= 65535 ? 1 : 2;
                else {
                    if (92 !== r) break;
                    this.containsEsc = !0, t += this.input.slice(i, this.pos);
                    var a = this.pos;
                    117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
                    var n = this.readCodePoint();
                    (e ? u : l)(n, s) || this.invalidStringToken(a, "Invalid Unicode escape"), t += kt(n), i = this.pos
                }
                e = !1
            }
            return t + this.input.slice(i, this.pos)
        }, bt.readWord = function() {
            var t = this.readWord1(),
                e = y.name;
            return this.keywords.test(t) && (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + t), e = g[t]), this.finishToken(e, t)
        };
        var St, Et, wt, At = "5.7.1";

        function It(t, e) { return new M(e, t).parse() }

        function Pt(t, e, i) { var s = new M(i, t, e); return s.nextToken(), s.parseExpression() }

        function Lt(t, e) { return new M(e, t) }

        function Nt(t, e, i) { exports.parse_dammit = St = t, exports.LooseParser = Et = e, exports.pluginsLoose = wt = i }
        exports.version = At, exports.parse = It, exports.parseExpressionAt = Pt, exports.tokenizer = Lt, exports.parse_dammit = St, exports.LooseParser = Et, exports.pluginsLoose = wt, exports.addLooseExports = Nt, exports.Parser = M, exports.plugins = O, exports.defaultOptions = V, exports.Position = L, exports.SourceLocation = N, exports.getLineInfo = T, exports.Node = $, exports.TokenType = d, exports.tokTypes = y, exports.keywordTypes = g, exports.TokContext = et, exports.tokContexts = it, exports.isIdentifierChar = l, exports.isIdentifierStart = u, exports.Token = _t, exports.isNewLine = k, exports.lineBreak = _, exports.lineBreakG = b, exports.nonASCIIwhitespace = C;
    }, {}],
    "pBGv": [function(require, module, exports) {

        var t, e, n = module.exports = {};

        function r() { throw new Error("setTimeout has not been defined") }

        function o() { throw new Error("clearTimeout has not been defined") }

        function i(e) { if (t === setTimeout) return setTimeout(e, 0); if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0); try { return t(e, 0) } catch (n) { try { return t.call(null, e, 0) } catch (n) { return t.call(this, e, 0) } } }

        function u(t) { if (e === clearTimeout) return clearTimeout(t); if ((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t); try { return e(t) } catch (n) { try { return e.call(null, t) } catch (n) { return e.call(this, t) } } }! function() { try { t = "function" == typeof setTimeout ? setTimeout : r } catch (e) { t = r } try { e = "function" == typeof clearTimeout ? clearTimeout : o } catch (t) { e = o } }();
        var c, s = [],
            l = !1,
            a = -1;

        function f() { l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h()) }

        function h() {
            if (!l) {
                var t = i(f);
                l = !0;
                for (var e = s.length; e;) {
                    for (c = s, s = []; ++a < e;) c && c[a].run();
                    a = -1, e = s.length
                }
                c = null, l = !1, u(t)
            }
        }

        function m(t, e) { this.fun = t, this.array = e }

        function p() {}
        n.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            s.push(new m(t, e)), 1 !== s.length || l || i(h)
        }, m.prototype.run = function() { this.fun.apply(null, this.array) }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(t) { return [] }, n.binding = function(t) { throw new Error("process.binding is not supported") }, n.cwd = function() { return "/" }, n.chdir = function(t) { throw new Error("process.chdir is not supported") }, n.umask = function() { return 0 };
    }, {}],
    "GYcQ": [function(require, module, exports) {
        var define;
        var process = require("process");
        var global = arguments[3];
        var t, e = require("process"),
            n = arguments[3],
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            r = function(e, n) {
                var s = (e = e || require("./node/self.js")).window,
                    a = e.document,
                    o = new function() {
                        var t = /^(statics|enumerable|beans|preserve)$/,
                            e = [],
                            i = e.slice,
                            r = Object.create,
                            s = Object.getOwnPropertyDescriptor,
                            a = Object.defineProperty,
                            o = e.forEach || function(t, e) { for (var n = 0, i = this.length; n < i; n++) t.call(e, this[n], n, this) },
                            h = Object.assign || function(t) { for (var e = 1, n = arguments.length; e < n; e++) { var i = arguments[e]; for (var r in i) i.hasOwnProperty(r) && (t[r] = i[r]) } return t },
                            u = function(t, e, n) {
                                if (t) {
                                    var i = s(t, "length");
                                    (i && "number" == typeof i.value ? o : function(t, e) { for (var n in this) this.hasOwnProperty(n) && t.call(e, this[n], n, this) }).call(t, e, n = n || t)
                                }
                                return n
                            };

                        function l(e, n, i, r, o) {
                            var h = {};

                            function u(t, u) {
                                "string" == typeof(u = u || (u = s(n, t)) && (u.get ? u : u.value)) && "#" === u[0] && (u = e[u.substring(1)] || u);
                                var l, f = "function" == typeof u,
                                    d = u,
                                    _ = o || f && !u.base ? u && u.get ? t in e : e[t] : null;
                                o && _ || (f && _ && (u.base = _), f && !1 !== r && (l = t.match(/^([gs]et|is)(([A-Z])(.*))$/)) && (h[l[3].toLowerCase() + l[4]] = l[2]), d && !f && d.get && "function" == typeof d.get && c.isPlainObject(d) || (d = { value: d, writable: !0 }), (s(e, t) || { configurable: !0 }).configurable && (d.configurable = !0, d.enumerable = null != i ? i : !l), a(e, t, d))
                            }
                            if (n) {
                                for (var l in n) n.hasOwnProperty(l) && !t.test(l) && u(l);
                                for (var l in h) {
                                    var f = h[l],
                                        d = e["set" + f],
                                        _ = e["get" + f] || d && e["is" + f];
                                    !_ || !0 !== r && 0 !== _.length || u(l, { get: _, set: d })
                                }
                            }
                            return e
                        }

                        function c() {
                            for (var t = 0, e = arguments.length; t < e; t++) {
                                var n = arguments[t];
                                n && h(this, n)
                            }
                            return this
                        }
                        return l(c, {
                            inject: function(t) {
                                if (t) {
                                    var e = !0 === t.statics ? t : t.statics,
                                        n = t.beans,
                                        i = t.preserve;
                                    e !== t && l(this.prototype, t, t.enumerable, n, i), l(this, e, null, n, i)
                                }
                                for (var r = 1, s = arguments.length; r < s; r++) this.inject(arguments[r]);
                                return this
                            },
                            extend: function() { for (var t, e, n, i = this, s = 0, o = arguments.length; s < o && (!t || !e); s++) n = arguments[s], t = t || n.initialize, e = e || n.prototype; return e = (t = t || function() { i.apply(this, arguments) }).prototype = e || r(this.prototype), a(e, "constructor", { value: t, writable: !0, configurable: !0 }), l(t, this), arguments.length && this.inject.apply(t, arguments), t.base = i, t }
                        }).inject({
                            enumerable: !1,
                            initialize: c,
                            set: c,
                            inject: function() {
                                for (var t = 0, e = arguments.length; t < e; t++) {
                                    var n = arguments[t];
                                    n && l(this, n, n.enumerable, n.beans, n.preserve)
                                }
                                return this
                            },
                            extend: function() { var t = r(this); return t.inject.apply(t, arguments) },
                            each: function(t, e) { return u(this, t, e) },
                            clone: function() { return new this.constructor(this) },
                            statics: { set: h, each: u, create: r, define: a, describe: s, clone: function(t) { return h(new t.constructor, t) }, isPlainObject: function(t) { var e = null != t && t.constructor; return e && (e === Object || e === c || "Object" === e.name) }, pick: function(t, e) { return t !== n ? t : e }, slice: function(t, e, n) { return i.call(t, e, n) } }
                        })
                    };
                "undefined" != typeof module && (module.exports = o), o.inject({
                    enumerable: !1,
                    toString: function() {
                        return null != this._id ? (this._class || "Object") + (this._name ? " '" + this._name + "'" : " @" + this._id) : "{ " + o.each(this, function(t, e) {
                            if (!/^_/.test(e)) {
                                var n = void 0 === t ? "undefined" : i(t);
                                this.push(e + ": " + ("number" === n ? c.instance.number(t) : "string" === n ? "'" + t + "'" : t))
                            }
                        }, []).join(", ") + " }"
                    },
                    getClassName: function() { return this._class || "" },
                    importJSON: function(t) { return o.importJSON(t, this) },
                    exportJSON: function(t) { return o.exportJSON(this, t) },
                    toJSON: function() { return o.serialize(this) },
                    set: function(t, e) { return t && o.filter(this, t, e, this._prioritize), this }
                }, {
                    beans: !1,
                    statics: {
                        exports: {},
                        extend: function t() {
                            var e = t.base.apply(this, arguments),
                                n = e.prototype._class;
                            return n && !o.exports[n] && (o.exports[n] = e), e
                        },
                        equals: function(t, e) {
                            if (t === e) return !0;
                            if (t && t.equals) return t.equals(e);
                            if (e && e.equals) return e.equals(t);
                            if (t && e && "object" === (void 0 === t ? "undefined" : i(t)) && "object" === (void 0 === e ? "undefined" : i(e))) {
                                if (Array.isArray(t) && Array.isArray(e)) {
                                    if ((n = t.length) !== e.length) return !1;
                                    for (; n--;)
                                        if (!o.equals(t[n], e[n])) return !1
                                } else { var n, r = Object.keys(t); if ((n = r.length) !== Object.keys(e).length) return !1; for (; n--;) { var s = r[n]; if (!e.hasOwnProperty(s) || !o.equals(t[s], e[s])) return !1 } }
                                return !0
                            }
                            return !1
                        },
                        read: function(t, e, i, r) {
                            if (this === o) { var s = this.peek(t, e); return t.__index++, s }
                            var a = this.prototype,
                                h = a._readIndex,
                                u = e || h && t.__index || 0,
                                l = t.length,
                                c = t[u];
                            if (r = r || l - u, c instanceof this || i && i.readNull && null == c && r <= 1) return h && (t.__index = u + 1), c && i && i.clone ? c.clone() : c;
                            if (c = o.create(a), h && (c.__read = !0), c = c.initialize.apply(c, u > 0 || u + r < l ? o.slice(t, u, u + r) : t) || c, h) {
                                t.__index = u + c.__read;
                                var f = c.__filtered;
                                f && (t.__filtered = f, c.__filtered = n), c.__read = n
                            }
                            return c
                        },
                        peek: function(t, e) { return t[t.__index = e || t.__index || 0] },
                        remain: function(t) { return t.length - (t.__index || 0) },
                        readList: function(t, e, n, i) { for (var r, s = [], a = e || 0, o = i ? a + i : t.length, h = a; h < o; h++) s.push(Array.isArray(r = t[h]) ? this.read(r, 0, n) : this.read(t, h, n, 1)); return s },
                        readNamed: function(t, e, i, r, s) {
                            var a = this.getNamed(t, e),
                                h = a !== n;
                            if (h) {
                                var u = t.__filtered;
                                u || ((u = t.__filtered = o.create(t[0])).__unfiltered = t[0]), u[e] = n
                            }
                            var l = h ? [a] : t;
                            return this.read(l, i, r, s)
                        },
                        getNamed: function(t, e) { var i = t[0]; if (t._hasObject === n && (t._hasObject = 1 === t.length && o.isPlainObject(i)), t._hasObject) return e ? i[e] : t.__filtered || i },
                        hasNamed: function(t, e) { return !!this.getNamed(t, e) },
                        filter: function(t, e, i, r) {
                            var s;

                            function a(r) {
                                if (!(i && r in i || s && r in s)) {
                                    var a = e[r];
                                    a !== n && (t[r] = a)
                                }
                            }
                            if (r) {
                                for (var o, h = {}, u = 0, l = r.length; u < l; u++)(o = r[u]) in e && (a(o), h[o] = !0);
                                s = h
                            }
                            return Object.keys(e.__unfiltered || e).forEach(a), t
                        },
                        isPlainValue: function(t, e) { return o.isPlainObject(t) || Array.isArray(t) || e && "string" == typeof t },
                        serialize: function(t, e, n, i) {
                            e = e || {};
                            var r, s = !i;
                            if (s && (e.formatter = new c(e.precision), i = {
                                    length: 0,
                                    definitions: {},
                                    references: {},
                                    add: function(t, e) {
                                        var n = "#" + t._id,
                                            i = this.references[n];
                                        if (!i) {
                                            this.length++;
                                            var r = e.call(t),
                                                s = t._class;
                                            s && r[0] !== s && r.unshift(s), this.definitions[n] = r, i = this.references[n] = [n]
                                        }
                                        return i
                                    }
                                }), t && t._serialize) { r = t._serialize(e, i); var a = t._class;!a || t._compactSerialize || !s && n || r[0] === a || r.unshift(a) } else if (Array.isArray(t)) { r = []; for (var h = 0, u = t.length; h < u; h++) r[h] = o.serialize(t[h], e, n, i) } else if (o.isPlainObject(t)) {
                                r = {};
                                var l = Object.keys(t);
                                for (h = 0, u = l.length; h < u; h++) {
                                    var f = l[h];
                                    r[f] = o.serialize(t[f], e, n, i)
                                }
                            } else r = "number" == typeof t ? e.formatter.number(t, e.precision) : t;
                            return s && i.length > 0 ? [
                                ["dictionary", i.definitions], r
                            ] : r
                        },
                        deserialize: function(t, e, n, i, r) {
                            var s = t,
                                a = !n,
                                h = a && t && t.length && "dictionary" === t[0][0];
                            if (n = n || {}, Array.isArray(t)) {
                                var u = t[0],
                                    l = "dictionary" === u;
                                if (1 == t.length && /^#/.test(u)) return n.dictionary[u];
                                s = [];
                                for (var c = (u = o.exports[u]) ? 1 : 0, f = t.length; c < f; c++) s.push(o.deserialize(t[c], e, n, l, h));
                                if (u) {
                                    var d = s;
                                    e ? s = e(u, d, a || r) : (s = o.create(u.prototype), u.apply(s, d))
                                }
                            } else if (o.isPlainObject(t))
                                for (var _ in s = {}, i && (n.dictionary = s), t) s[_] = o.deserialize(t[_], e, n);
                            return h ? s[1] : s
                        },
                        exportJSON: function(t, e) { var n = o.serialize(t, e); return e && 0 == e.asString ? n : JSON.stringify(n) },
                        importJSON: function(t, e) {
                            return o.deserialize("string" == typeof t ? JSON.parse(t) : t, function(t, n, i) {
                                var r = i && e && e.constructor === t,
                                    s = r ? e : o.create(t.prototype);
                                if (1 === n.length && s instanceof C && (r || !(s instanceof k))) {
                                    var a = n[0];
                                    o.isPlainObject(a) && (a.insert = !1)
                                }
                                return (r ? s.set : t).apply(s, n), r && (e = null), s
                            })
                        },
                        splice: function(t, e, i, r) {
                            var s = e && e.length,
                                a = i === n;
                            (i = a ? t.length : i) > t.length && (i = t.length);
                            for (var o = 0; o < s; o++) e[o]._index = i + o;
                            if (a) return t.push.apply(t, e), [];
                            var h = [i, r];
                            e && h.push.apply(h, e);
                            for (var u = t.splice.apply(t, h), l = (o = 0, u.length); o < l; o++) u[o]._index = n;
                            for (o = i + s, l = t.length; o < l; o++) t[o]._index = o;
                            return u
                        },
                        capitalize: function(t) { return t.replace(/\b[a-z]/g, function(t) { return t.toUpperCase() }) },
                        camelize: function(t) { return t.replace(/-(.)/g, function(t, e) { return e.toUpperCase() }) },
                        hyphenate: function(t) { return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() }
                    }
                });
                var h = {
                        on: function(t, e) {
                            if ("string" != typeof t) o.each(t, function(t, e) { this.on(e, t) }, this);
                            else {
                                var n = this._eventTypes,
                                    i = n && n[t],
                                    r = this._callbacks = this._callbacks || {}; - 1 === (r = r[t] = r[t] || []).indexOf(e) && (r.push(e), i && i.install && 1 === r.length && i.install.call(this, t))
                            }
                            return this
                        },
                        off: function(t, e) {
                            if ("string" == typeof t) {
                                var n, i = this._eventTypes,
                                    r = i && i[t],
                                    s = this._callbacks && this._callbacks[t];
                                return s && (!e || -1 !== (n = s.indexOf(e)) && 1 === s.length ? (r && r.uninstall && r.uninstall.call(this, t), delete this._callbacks[t]) : -1 !== n && s.splice(n, 1)), this
                            }
                            o.each(t, function(t, e) { this.off(e, t) }, this)
                        },
                        once: function(t, e) { return this.on(t, function() { e.apply(this, arguments), this.off(t, e) }) },
                        emit: function(t, e) {
                            var n = this._callbacks && this._callbacks[t];
                            if (!n) return !1;
                            var i = o.slice(arguments, 1),
                                r = e && e.target && !e.currentTarget;
                            n = n.slice(), r && (e.currentTarget = this);
                            for (var s = 0, a = n.length; s < a; s++)
                                if (0 == n[s].apply(this, i)) { e && e.stop && e.stop(); break }
                            return r && delete e.currentTarget, !0
                        },
                        responds: function(t) { return !(!this._callbacks || !this._callbacks[t]) },
                        attach: "#on",
                        detach: "#off",
                        fire: "#emit",
                        _installEvents: function(t) {
                            var e = this._eventTypes,
                                n = this._callbacks,
                                i = t ? "install" : "uninstall";
                            if (e)
                                for (var r in n)
                                    if (n[r].length > 0) {
                                        var s = e[r],
                                            a = s && s[i];
                                        a && a.call(this, r)
                                    }
                        },
                        statics: {
                            inject: function t(e) {
                                var n = e._events;
                                if (n) {
                                    var i = {};
                                    o.each(n, function(t, n) {
                                        var r = "string" == typeof t,
                                            s = r ? t : n,
                                            a = o.capitalize(s),
                                            h = s.substring(2).toLowerCase();
                                        i[h] = r ? {} : t, s = "_" + s, e["get" + a] = function() { return this[s] }, e["set" + a] = function(t) {
                                            var e = this[s];
                                            e && this.off(h, e), t && this.on(h, t), this[s] = t
                                        }
                                    }), e._eventTypes = i
                                }
                                return t.base.apply(this, arguments)
                            }
                        }
                    },
                    u = o.extend({
                        _class: "PaperScope",
                        initialize: function t() {
                            r = this, this.settings = new o({ applyMatrix: !0, insertItems: !0, handleSize: 4, hitTolerance: 0 }), this.project = null, this.projects = [], this.tools = [], this._id = t._id++, t._scopes[this._id] = this;
                            var n = t.prototype;
                            if (!this.support) {
                                var i = it.getContext(1, 1) || {};
                                n.support = { nativeDash: "setLineDash" in i || "mozDash" in i, nativeBlendModes: rt.nativeModes }, it.release(i)
                            }
                            if (!this.agent) {
                                var s = e.navigator.userAgent.toLowerCase(),
                                    a = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(s) || [])[0],
                                    h = "darwin" === a ? "mac" : a,
                                    u = n.agent = n.browser = { platform: h };
                                h && (u[h] = !0), s.replace(/(opera|chrome|safari|webkit|firefox|msie|trident|atom|node)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g, function(t, e, n, i, r) {
                                    if (!u.chrome) {
                                        var s = "opera" === e ? i : /^(node|trident)$/.test(e) ? r : n;
                                        u.version = s, u.versionNumber = parseFloat(s), e = "trident" === e ? "msie" : e, u.name = e, u[e] = !0
                                    }
                                }), u.chrome && delete u.webkit, u.atom && delete u.chrome
                            }
                        },
                        version: "0.11.5",
                        getView: function() { var t = this.project; return t && t._view },
                        getPaper: function() { return this },
                        execute: function(t, e) { r.PaperScript.execute(t, this, e), G.updateFocus() },
                        install: function(t) { var e = this; for (var n in o.each(["project", "view", "tool"], function(n) { o.define(t, n, { configurable: !0, get: function() { return e[n] } }) }), this) !/^_/.test(n) && this[n] && (t[n] = this[n]) },
                        setup: function(t) { return r = this, this.project = new b(t), this },
                        createCanvas: function(t, e) { return it.getCanvas(t, e) },
                        activate: function() { r = this },
                        clear: function() { for (var t = this.projects, e = this.tools, n = t.length - 1; n >= 0; n--) t[n].remove(); for (n = e.length - 1; n >= 0; n--) e[n].remove() },
                        remove: function() { this.clear(), delete u._scopes[this._id] },
                        statics: new function() {
                            function t(t) {
                                return t += "Attribute",
                                    function(e, n) { return e[t](n) || e[t]("data-paper-" + n) }
                            }
                            return { _scopes: {}, _id: 0, get: function(t) { return this._scopes[t] || null }, getAttribute: t("get"), hasAttribute: t("has") }
                        }
                    }),
                    l = o.extend(h, { initialize: function(t) { this._scope = r, this._index = this._scope[this._list].push(this) - 1, !t && this._scope[this._reference] || this.activate() }, activate: function() { if (!this._scope) return !1; var t = this._scope[this._reference]; return t && t !== this && t.emit("deactivate"), this._scope[this._reference] = this, this.emit("activate", t), !0 }, isActive: function() { return this._scope[this._reference] === this }, remove: function() { return null != this._index && (o.splice(this._scope[this._list], null, this._index, 1), this._scope[this._reference] == this && (this._scope[this._reference] = null), this._scope = null, !0) }, getView: function() { return this._scope.getView() } }),
                    c = o.extend({ initialize: function(t) { this.precision = o.pick(t, 5), this.multiplier = Math.pow(10, this.precision) }, number: function(t) { return this.precision < 16 ? Math.round(t * this.multiplier) / this.multiplier : t }, pair: function(t, e, n) { return this.number(t) + (n || ",") + this.number(e) }, point: function(t, e) { return this.number(t.x) + (e || ",") + this.number(t.y) }, size: function(t, e) { return this.number(t.width) + (e || ",") + this.number(t.height) }, rectangle: function(t, e) { return this.point(t, e) + (e || ",") + this.size(t, e) } });
                c.instance = new c;
                var f = new function() {
                        var t = [
                                [.5773502691896257],
                                [0, .7745966692414834],
                                [.33998104358485626, .8611363115940526],
                                [0, .5384693101056831, .906179845938664],
                                [.2386191860831969, .6612093864662645, .932469514203152],
                                [0, .4058451513773972, .7415311855993945, .9491079123427585],
                                [.1834346424956498, .525532409916329, .7966664774136267, .9602898564975363],
                                [0, .3242534234038089, .6133714327005904, .8360311073266358, .9681602395076261],
                                [.14887433898163122, .4333953941292472, .6794095682990244, .8650633666889845, .9739065285171717],
                                [0, .26954315595234496, .5190961292068118, .7301520055740494, .8870625997680953, .978228658146057],
                                [.1252334085114689, .3678314989981802, .5873179542866175, .7699026741943047, .9041172563704749, .9815606342467192],
                                [0, .2304583159551348, .44849275103644687, .6423493394403402, .8015780907333099, .9175983992229779, .9841830547185881],
                                [.10805494870734367, .31911236892788974, .5152486363581541, .6872929048116855, .827201315069765, .9284348836635735, .9862838086968123],
                                [0, .20119409399743451, .3941513470775634, .5709721726085388, .7244177313601701, .8482065834104272, .937273392400706, .9879925180204854],
                                [.09501250983763744, .2816035507792589, .45801677765722737, .6178762444026438, .755404408355003, .8656312023878318, .9445750230732326, .9894009349916499]
                            ],
                            e = [
                                [1],
                                [.8888888888888888, .5555555555555556],
                                [.6521451548625461, .34785484513745385],
                                [.5688888888888889, .47862867049936647, .23692688505618908],
                                [.46791393457269104, .3607615730481386, .17132449237917036],
                                [.4179591836734694, .3818300505051189, .27970539148927664, .1294849661688697],
                                [.362683783378362, .31370664587788727, .22238103445337448, .10122853629037626],
                                [.3302393550012598, .31234707704000286, .26061069640293544, .1806481606948574, .08127438836157441],
                                [.29552422471475287, .26926671930999635, .21908636251598204, .1494513491505806, .06667134430868814],
                                [.2729250867779006, .26280454451024665, .23319376459199048, .18629021092773426, .1255803694649046, .05566856711617366],
                                [.24914704581340277, .2334925365383548, .20316742672306592, .16007832854334622, .10693932599531843, .04717533638651183],
                                [.2325515532308739, .22628318026289723, .2078160475368885, .17814598076194574, .13887351021978725, .09212149983772845, .04048400476531588],
                                [.2152638534631578, .2051984637212956, .18553839747793782, .15720316715819355, .12151857068790319, .08015808715976021, .03511946033175186],
                                [.2025782419255613, .19843148532711158, .1861610000155622, .16626920581699392, .13957067792615432, .10715922046717194, .07036604748810812, .03075324199611727],
                                [.1894506104550685, .18260341504492358, .16915651939500254, .14959598881657674, .12462897125553388, .09515851168249279, .062253523938647894, .027152459411754096]
                            ],
                            n = Math.abs,
                            i = Math.sqrt,
                            r = Math.pow,
                            s = Math.log2 || function(t) { return Math.log(t) * Math.LOG2E };

                        function a(t, e, n) { return t < e ? e : t > n ? n : t }

                        function o(t, e, i) {
                            function r(t) {
                                var e = 134217729 * t,
                                    n = t - e + e;
                                return [n, t - n]
                            }
                            var s = e * e - t * i,
                                a = e * e + t * i;
                            if (3 * n(s) < a) {
                                var o = r(t),
                                    h = r(e),
                                    u = r(i),
                                    l = e * e,
                                    c = t * i;
                                s = l - c + (h[0] * h[0] - l + 2 * h[0] * h[1] + h[1] * h[1] - (o[0] * u[0] - c + o[0] * u[1] + o[1] * u[0] + o[1] * u[1]))
                            }
                            return s
                        }

                        function h() { var t = Math.max.apply(Math, arguments); return t && (t < 1e-8 || t > 1e8) ? r(2, -Math.round(s(t))) : 0 }
                        return {
                            EPSILON: 1e-12,
                            MACHINE_EPSILON: 1.12e-16,
                            CURVETIME_EPSILON: 1e-8,
                            GEOMETRIC_EPSILON: 1e-7,
                            TRIGONOMETRIC_EPSILON: 1e-8,
                            KAPPA: 4 * (i(2) - 1) / 3,
                            isZero: function(t) { return t >= -1e-12 && t <= 1e-12 },
                            clamp: a,
                            integrate: function(n, i, r, s) {
                                for (var a = t[s - 2], o = e[s - 2], h = .5 * (r - i), u = h + i, l = 0, c = s + 1 >> 1, f = 1 & s ? o[l++] * n(u) : 0; l < c;) {
                                    var d = h * a[l];
                                    f += o[l++] * (n(u + d) + n(u - d))
                                }
                                return h * f
                            },
                            findRoot: function(t, e, i, r, s, o, h) {
                                for (var u = 0; u < o; u++) {
                                    var l = t(i),
                                        c = l / e(i),
                                        f = i - c;
                                    if (n(c) < h) { i = f; break }
                                    l > 0 ? (s = i, i = f <= r ? .5 * (r + s) : f) : (r = i, i = f >= s ? .5 * (r + s) : f)
                                }
                                return a(i, r, s)
                            },
                            solveQuadratic: function(t, e, r, s, u, l) {
                                var c, f = 1 / 0;
                                if (n(t) < 1e-12) {
                                    if (n(e) < 1e-12) return n(r) < 1e-12 ? -1 : 0;
                                    c = -r / e
                                } else {
                                    var d = o(t, e *= -.5, r);
                                    if (d && n(d) < 1.12e-16) {
                                        var _ = h(n(t), n(e), n(r));
                                        _ && (d = o(t *= _, e *= _, r *= _))
                                    }
                                    if (d >= -1.12e-16) {
                                        var g = d < 0 ? 0 : i(d),
                                            v = e + (e < 0 ? -g : g);
                                        0 === v ? f = -(c = r / t) : (c = v / t, f = r / v)
                                    }
                                }
                                var p = 0,
                                    m = null == u,
                                    y = u - 1e-12,
                                    w = l + 1e-12;
                                return isFinite(c) && (m || c > y && c < w) && (s[p++] = m ? c : a(c, u, l)), f !== c && isFinite(f) && (m || f > y && f < w) && (s[p++] = m ? f : a(f, u, l)), p
                            },
                            solveCubic: function(t, e, s, o, u, l, c) {
                                var d, _, g, v, p, m = h(n(t), n(e), n(s), n(o));

                                function y(n) {
                                    var i = t * (d = n);
                                    v = (i + (_ = i + e)) * d + (g = _ * d + s), p = g * d + o
                                }
                                if (m && (t *= m, e *= m, s *= m, o *= m), n(t) < 1e-12) t = e, _ = s, g = o, d = 1 / 0;
                                else if (n(o) < 1e-12) _ = e, g = s, d = 0;
                                else {
                                    y(-e / t / 3);
                                    var w = p / t,
                                        x = r(n(w), 1 / 3),
                                        b = w < 0 ? -1 : 1,
                                        C = -v / t,
                                        S = C > 0 ? 1.324717957244746 * Math.max(x, i(C)) : x,
                                        k = d - b * S;
                                    if (k !== d) {
                                        do { y(k), k = 0 === v ? d : d - p / v / (1 + 1.12e-16) } while (b * k > b * d);
                                        n(t) * d * d > n(o / d) && (_ = ((g = -o / d) - s) / d)
                                    }
                                }
                                var I = f.solveQuadratic(t, _, g, u, l, c),
                                    P = null == l;
                                return isFinite(d) && (0 === I || I > 0 && d !== u[0] && d !== u[1]) && (P || d > l - 1e-12 && d < c + 1e-12) && (u[I++] = P ? d : a(d, l, c)), I
                            }
                        }
                    },
                    d = { _id: 1, _pools: {}, get: function(t) { if (t) { var e = this._pools[t]; return e || (e = this._pools[t] = { _id: 1 }), e._id++ } return this._id++ } },
                    _ = o.extend({
                        _class: "Point",
                        _readIndex: !0,
                        initialize: function(t, e) {
                            var n = void 0 === t ? "undefined" : i(t),
                                r = this.__read,
                                s = 0;
                            if ("number" === n) {
                                var a = "number" == typeof e;
                                this._set(t, a ? e : t), r && (s = a ? 2 : 1)
                            } else if ("undefined" === n || null === t) this._set(0, 0), r && (s = null === t ? 1 : 0);
                            else {
                                var o = "string" === n ? t.split(/[\s,]+/) || [] : t;
                                s = 1, Array.isArray(o) ? this._set(+o[0], +(o.length > 1 ? o[1] : o[0])) : "x" in o ? this._set(o.x || 0, o.y || 0) : "width" in o ? this._set(o.width || 0, o.height || 0) : "angle" in o ? (this._set(o.length || 0, 0), this.setAngle(o.angle || 0)) : (this._set(0, 0), s = 0)
                            }
                            return r && (this.__read = s), this
                        },
                        set: "#initialize",
                        _set: function(t, e) { return this.x = t, this.y = e, this },
                        equals: function(t) { return this === t || t && (this.x === t.x && this.y === t.y || Array.isArray(t) && this.x === t[0] && this.y === t[1]) || !1 },
                        clone: function() { return new _(this.x, this.y) },
                        toString: function() { var t = c.instance; return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + " }" },
                        _serialize: function(t) { var e = t.formatter; return [e.number(this.x), e.number(this.y)] },
                        getLength: function() { return Math.sqrt(this.x * this.x + this.y * this.y) },
                        setLength: function(t) {
                            if (this.isZero()) {
                                var e = this._angle || 0;
                                this._set(Math.cos(e) * t, Math.sin(e) * t)
                            } else {
                                var n = t / this.getLength();
                                f.isZero(n) && this.getAngle(), this._set(this.x * n, this.y * n)
                            }
                        },
                        getAngle: function() { return 180 * this.getAngleInRadians.apply(this, arguments) / Math.PI },
                        setAngle: function(t) { this.setAngleInRadians.call(this, t * Math.PI / 180) },
                        getAngleInDegrees: "#getAngle",
                        setAngleInDegrees: "#setAngle",
                        getAngleInRadians: function() {
                            if (arguments.length) {
                                var t = _.read(arguments),
                                    e = this.getLength() * t.getLength();
                                if (f.isZero(e)) return NaN;
                                var n = this.dot(t) / e;
                                return Math.acos(n < -1 ? -1 : n > 1 ? 1 : n)
                            }
                            return this.isZero() ? this._angle || 0 : this._angle = Math.atan2(this.y, this.x)
                        },
                        setAngleInRadians: function(t) {
                            if (this._angle = t, !this.isZero()) {
                                var e = this.getLength();
                                this._set(Math.cos(t) * e, Math.sin(t) * e)
                            }
                        },
                        getQuadrant: function() { return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3 }
                    }, {
                        beans: !1,
                        getDirectedAngle: function() { var t = _.read(arguments); return 180 * Math.atan2(this.cross(t), this.dot(t)) / Math.PI },
                        getDistance: function() {
                            var t = _.read(arguments),
                                e = t.x - this.x,
                                n = t.y - this.y,
                                i = e * e + n * n;
                            return o.read(arguments) ? i : Math.sqrt(i)
                        },
                        normalize: function(t) {
                            t === n && (t = 1);
                            var e = this.getLength(),
                                i = 0 !== e ? t / e : 0,
                                r = new _(this.x * i, this.y * i);
                            return i >= 0 && (r._angle = this._angle), r
                        },
                        rotate: function(t, e) {
                            if (0 === t) return this.clone();
                            t = t * Math.PI / 180;
                            var n = e ? this.subtract(e) : this,
                                i = Math.sin(t),
                                r = Math.cos(t);
                            return n = new _(n.x * r - n.y * i, n.x * i + n.y * r), e ? n.add(e) : n
                        },
                        transform: function(t) { return t ? t._transformPoint(this) : this },
                        add: function() { var t = _.read(arguments); return new _(this.x + t.x, this.y + t.y) },
                        subtract: function() { var t = _.read(arguments); return new _(this.x - t.x, this.y - t.y) },
                        multiply: function() { var t = _.read(arguments); return new _(this.x * t.x, this.y * t.y) },
                        divide: function() { var t = _.read(arguments); return new _(this.x / t.x, this.y / t.y) },
                        modulo: function() { var t = _.read(arguments); return new _(this.x % t.x, this.y % t.y) },
                        negate: function() { return new _(-this.x, -this.y) },
                        isInside: function() { return m.read(arguments).contains(this) },
                        isClose: function() {
                            var t = _.read(arguments),
                                e = o.read(arguments);
                            return this.getDistance(t) <= e
                        },
                        isCollinear: function() { var t = _.read(arguments); return _.isCollinear(this.x, this.y, t.x, t.y) },
                        isColinear: "#isCollinear",
                        isOrthogonal: function() { var t = _.read(arguments); return _.isOrthogonal(this.x, this.y, t.x, t.y) },
                        isZero: function() { var t = f.isZero; return t(this.x) && t(this.y) },
                        isNaN: function() { return isNaN(this.x) || isNaN(this.y) },
                        isInQuadrant: function(t) { return this.x * (t > 1 && t < 4 ? -1 : 1) >= 0 && this.y * (t > 2 ? -1 : 1) >= 0 },
                        dot: function() { var t = _.read(arguments); return this.x * t.x + this.y * t.y },
                        cross: function() { var t = _.read(arguments); return this.x * t.y - this.y * t.x },
                        project: function() {
                            var t = _.read(arguments),
                                e = t.isZero() ? 0 : this.dot(t) / t.dot(t);
                            return new _(t.x * e, t.y * e)
                        },
                        statics: {
                            min: function() {
                                var t = _.read(arguments),
                                    e = _.read(arguments);
                                return new _(Math.min(t.x, e.x), Math.min(t.y, e.y))
                            },
                            max: function() {
                                var t = _.read(arguments),
                                    e = _.read(arguments);
                                return new _(Math.max(t.x, e.x), Math.max(t.y, e.y))
                            },
                            random: function() { return new _(Math.random(), Math.random()) },
                            isCollinear: function(t, e, n, i) { return Math.abs(t * i - e * n) <= 1e-8 * Math.sqrt((t * t + e * e) * (n * n + i * i)) },
                            isOrthogonal: function(t, e, n, i) { return Math.abs(t * n + e * i) <= 1e-8 * Math.sqrt((t * t + e * e) * (n * n + i * i)) }
                        }
                    }, o.each(["round", "ceil", "floor", "abs"], function(t) {
                        var e = Math[t];
                        this[t] = function() { return new _(e(this.x), e(this.y)) }
                    }, {})),
                    g = _.extend({ initialize: function(t, e, n, i) { this._x = t, this._y = e, this._owner = n, this._setter = i }, _set: function(t, e, n) { return this._x = t, this._y = e, n || this._owner[this._setter](this), this }, getX: function() { return this._x }, setX: function(t) { this._x = t, this._owner[this._setter](this) }, getY: function() { return this._y }, setY: function(t) { this._y = t, this._owner[this._setter](this) }, isSelected: function() { return !!(this._owner._selection & this._getSelection()) }, setSelected: function(t) { this._owner._changeSelection(this._getSelection(), t) }, _getSelection: function() { return "setPosition" === this._setter ? 4 : 0 } }),
                    v = o.extend({
                        _class: "Size",
                        _readIndex: !0,
                        initialize: function(t, e) {
                            var n = void 0 === t ? "undefined" : i(t),
                                r = this.__read,
                                s = 0;
                            if ("number" === n) {
                                var a = "number" == typeof e;
                                this._set(t, a ? e : t), r && (s = a ? 2 : 1)
                            } else if ("undefined" === n || null === t) this._set(0, 0), r && (s = null === t ? 1 : 0);
                            else {
                                var o = "string" === n ? t.split(/[\s,]+/) || [] : t;
                                s = 1, Array.isArray(o) ? this._set(+o[0], +(o.length > 1 ? o[1] : o[0])) : "width" in o ? this._set(o.width || 0, o.height || 0) : "x" in o ? this._set(o.x || 0, o.y || 0) : (this._set(0, 0), s = 0)
                            }
                            return r && (this.__read = s), this
                        },
                        set: "#initialize",
                        _set: function(t, e) { return this.width = t, this.height = e, this },
                        equals: function(t) { return t === this || t && (this.width === t.width && this.height === t.height || Array.isArray(t) && this.width === t[0] && this.height === t[1]) || !1 },
                        clone: function() { return new v(this.width, this.height) },
                        toString: function() { var t = c.instance; return "{ width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }" },
                        _serialize: function(t) { var e = t.formatter; return [e.number(this.width), e.number(this.height)] },
                        add: function() { var t = v.read(arguments); return new v(this.width + t.width, this.height + t.height) },
                        subtract: function() { var t = v.read(arguments); return new v(this.width - t.width, this.height - t.height) },
                        multiply: function() { var t = v.read(arguments); return new v(this.width * t.width, this.height * t.height) },
                        divide: function() { var t = v.read(arguments); return new v(this.width / t.width, this.height / t.height) },
                        modulo: function() { var t = v.read(arguments); return new v(this.width % t.width, this.height % t.height) },
                        negate: function() { return new v(-this.width, -this.height) },
                        isZero: function() { var t = f.isZero; return t(this.width) && t(this.height) },
                        isNaN: function() { return isNaN(this.width) || isNaN(this.height) },
                        statics: { min: function(t, e) { return new v(Math.min(t.width, e.width), Math.min(t.height, e.height)) }, max: function(t, e) { return new v(Math.max(t.width, e.width), Math.max(t.height, e.height)) }, random: function() { return new v(Math.random(), Math.random()) } }
                    }, o.each(["round", "ceil", "floor", "abs"], function(t) {
                        var e = Math[t];
                        this[t] = function() { return new v(e(this.width), e(this.height)) }
                    }, {})),
                    p = v.extend({ initialize: function(t, e, n, i) { this._width = t, this._height = e, this._owner = n, this._setter = i }, _set: function(t, e, n) { return this._width = t, this._height = e, n || this._owner[this._setter](this), this }, getWidth: function() { return this._width }, setWidth: function(t) { this._width = t, this._owner[this._setter](this) }, getHeight: function() { return this._height }, setHeight: function(t) { this._height = t, this._owner[this._setter](this) } }),
                    m = o.extend({
                        _class: "Rectangle",
                        _readIndex: !0,
                        beans: !0,
                        initialize: function(t, e, r, s) {
                            var a, h = void 0 === t ? "undefined" : i(t);
                            if ("number" === h ? (this._set(t, e, r, s), a = 4) : "undefined" === h || null === t ? (this._set(0, 0, 0, 0), a = null === t ? 1 : 0) : 1 === arguments.length && (Array.isArray(t) ? (this._set.apply(this, t), a = 1) : t.x !== n || t.width !== n ? (this._set(t.x || 0, t.y || 0, t.width || 0, t.height || 0), a = 1) : t.from === n && t.to === n && (this._set(0, 0, 0, 0), o.filter(this, t), a = 1)), a === n) {
                                var u, l, c = _.readNamed(arguments, "from"),
                                    f = o.peek(arguments),
                                    d = c.x,
                                    g = c.y;
                                if (f && f.x !== n || o.hasNamed(arguments, "to")) {
                                    var p = _.readNamed(arguments, "to");
                                    u = p.x - d, l = p.y - g, u < 0 && (d = p.x, u = -u), l < 0 && (g = p.y, l = -l)
                                } else {
                                    var m = v.read(arguments);
                                    u = m.width, l = m.height
                                }
                                this._set(d, g, u, l), a = arguments.__index;
                                var y = arguments.__filtered;
                                y && (this.__filtered = y)
                            }
                            return this.__read && (this.__read = a), this
                        },
                        set: "#initialize",
                        _set: function(t, e, n, i) { return this.x = t, this.y = e, this.width = n, this.height = i, this },
                        clone: function() { return new m(this.x, this.y, this.width, this.height) },
                        equals: function(t) { var e = o.isPlainValue(t) ? m.read(arguments) : t; return e === this || e && this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height || !1 },
                        toString: function() { var t = c.instance; return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + ", width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }" },
                        _serialize: function(t) { var e = t.formatter; return [e.number(this.x), e.number(this.y), e.number(this.width), e.number(this.height)] },
                        getPoint: function(t) { return new(t ? _ : g)(this.x, this.y, this, "setPoint") },
                        setPoint: function() {
                            var t = _.read(arguments);
                            this.x = t.x, this.y = t.y
                        },
                        getSize: function(t) { return new(t ? v : p)(this.width, this.height, this, "setSize") },
                        _fw: 1,
                        _fh: 1,
                        setSize: function() {
                            var t = v.read(arguments),
                                e = this._sx,
                                n = this._sy,
                                i = t.width,
                                r = t.height;
                            e && (this.x += (this.width - i) * e), n && (this.y += (this.height - r) * n), this.width = i, this.height = r, this._fw = this._fh = 1
                        },
                        getLeft: function() { return this.x },
                        setLeft: function(t) {
                            if (!this._fw) {
                                var e = t - this.x;
                                this.width -= .5 === this._sx ? 2 * e : e
                            }
                            this.x = t, this._sx = this._fw = 0
                        },
                        getTop: function() { return this.y },
                        setTop: function(t) {
                            if (!this._fh) {
                                var e = t - this.y;
                                this.height -= .5 === this._sy ? 2 * e : e
                            }
                            this.y = t, this._sy = this._fh = 0
                        },
                        getRight: function() { return this.x + this.width },
                        setRight: function(t) {
                            if (!this._fw) {
                                var e = t - this.x;
                                this.width = .5 === this._sx ? 2 * e : e
                            }
                            this.x = t - this.width, this._sx = 1, this._fw = 0
                        },
                        getBottom: function() { return this.y + this.height },
                        setBottom: function(t) {
                            if (!this._fh) {
                                var e = t - this.y;
                                this.height = .5 === this._sy ? 2 * e : e
                            }
                            this.y = t - this.height, this._sy = 1, this._fh = 0
                        },
                        getCenterX: function() { return this.x + this.width / 2 },
                        setCenterX: function(t) { this._fw || .5 === this._sx ? this.x = t - this.width / 2 : (this._sx && (this.x += 2 * (t - this.x) * this._sx), this.width = 2 * (t - this.x)), this._sx = .5, this._fw = 0 },
                        getCenterY: function() { return this.y + this.height / 2 },
                        setCenterY: function(t) { this._fh || .5 === this._sy ? this.y = t - this.height / 2 : (this._sy && (this.y += 2 * (t - this.y) * this._sy), this.height = 2 * (t - this.y)), this._sy = .5, this._fh = 0 },
                        getCenter: function(t) { return new(t ? _ : g)(this.getCenterX(), this.getCenterY(), this, "setCenter") },
                        setCenter: function() { var t = _.read(arguments); return this.setCenterX(t.x), this.setCenterY(t.y), this },
                        getArea: function() { return this.width * this.height },
                        isEmpty: function() { return 0 === this.width || 0 === this.height },
                        contains: function(t) { return t && t.width !== n || 4 === (Array.isArray(t) ? t : arguments).length ? this._containsRectangle(m.read(arguments)) : this._containsPoint(_.read(arguments)) },
                        _containsPoint: function(t) {
                            var e = t.x,
                                n = t.y;
                            return e >= this.x && n >= this.y && e <= this.x + this.width && n <= this.y + this.height
                        },
                        _containsRectangle: function(t) {
                            var e = t.x,
                                n = t.y;
                            return e >= this.x && n >= this.y && e + t.width <= this.x + this.width && n + t.height <= this.y + this.height
                        },
                        intersects: function() {
                            var t = m.read(arguments),
                                e = o.read(arguments) || 0;
                            return t.x + t.width > this.x - e && t.y + t.height > this.y - e && t.x < this.x + this.width + e && t.y < this.y + this.height + e
                        },
                        intersect: function() {
                            var t = m.read(arguments),
                                e = Math.max(this.x, t.x),
                                n = Math.max(this.y, t.y),
                                i = Math.min(this.x + this.width, t.x + t.width),
                                r = Math.min(this.y + this.height, t.y + t.height);
                            return new m(e, n, i - e, r - n)
                        },
                        unite: function() {
                            var t = m.read(arguments),
                                e = Math.min(this.x, t.x),
                                n = Math.min(this.y, t.y),
                                i = Math.max(this.x + this.width, t.x + t.width),
                                r = Math.max(this.y + this.height, t.y + t.height);
                            return new m(e, n, i - e, r - n)
                        },
                        include: function() {
                            var t = _.read(arguments),
                                e = Math.min(this.x, t.x),
                                n = Math.min(this.y, t.y),
                                i = Math.max(this.x + this.width, t.x),
                                r = Math.max(this.y + this.height, t.y);
                            return new m(e, n, i - e, r - n)
                        },
                        expand: function() {
                            var t = v.read(arguments),
                                e = t.width,
                                n = t.height;
                            return new m(this.x - e / 2, this.y - n / 2, this.width + e, this.height + n)
                        },
                        scale: function(t, e) { return this.expand(this.width * t - this.width, this.height * (e === n ? t : e) - this.height) }
                    }, o.each([
                        ["Top", "Left"],
                        ["Top", "Right"],
                        ["Bottom", "Left"],
                        ["Bottom", "Right"],
                        ["Left", "Center"],
                        ["Top", "Center"],
                        ["Right", "Center"],
                        ["Bottom", "Center"]
                    ], function(t, e) {
                        var n = t.join(""),
                            i = /^[RL]/.test(n);
                        e >= 4 && (t[1] += i ? "Y" : "X");
                        var r = t[i ? 0 : 1],
                            s = t[i ? 1 : 0],
                            a = "get" + r,
                            o = "get" + s,
                            h = "set" + r,
                            u = "set" + s,
                            l = "set" + n;
                        this["get" + n] = function(t) { return new(t ? _ : g)(this[a](), this[o](), this, l) }, this[l] = function() {
                            var t = _.read(arguments);
                            this[h](t.x), this[u](t.y)
                        }
                    }, { beans: !0 })),
                    y = m.extend({ initialize: function(t, e, n, i, r, s) { this._set(t, e, n, i, !0), this._owner = r, this._setter = s }, _set: function(t, e, n, i, r) { return this._x = t, this._y = e, this._width = n, this._height = i, r || this._owner[this._setter](this), this } }, new function() {
                        var t = m.prototype;
                        return o.each(["x", "y", "width", "height"], function(t) {
                            var e = o.capitalize(t),
                                n = "_" + t;
                            this["get" + e] = function() { return this[n] }, this["set" + e] = function(t) { this[n] = t, this._dontNotify || this._owner[this._setter](this) }
                        }, o.each(["Point", "Size", "Center", "Left", "Top", "Right", "Bottom", "CenterX", "CenterY", "TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], function(e) {
                            var n = "set" + e;
                            this[n] = function() { this._dontNotify = !0, t[n].apply(this, arguments), this._dontNotify = !1, this._owner[this._setter](this) }
                        }, {
                            isSelected: function() { return !!(2 & this._owner._selection) },
                            setSelected: function(t) {
                                var e = this._owner;
                                e._changeSelection && e._changeSelection(2, t)
                            }
                        }))
                    }),
                    w = o.extend({
                        _class: "Matrix",
                        initialize: function t(e, n) {
                            var i = arguments.length,
                                r = !0;
                            if (i >= 6 ? this._set.apply(this, arguments) : 1 === i || 2 === i ? e instanceof t ? this._set(e._a, e._b, e._c, e._d, e._tx, e._ty, n) : Array.isArray(e) ? this._set.apply(this, n ? e.concat([n]) : e) : r = !1 : i ? r = !1 : this.reset(), !r) throw new Error("Unsupported matrix parameters");
                            return this
                        },
                        set: "#initialize",
                        _set: function(t, e, n, i, r, s, a) { return this._a = t, this._b = e, this._c = n, this._d = i, this._tx = r, this._ty = s, a || this._changed(), this },
                        _serialize: function(t, e) { return o.serialize(this.getValues(), t, !0, e) },
                        _changed: function() {
                            var t = this._owner;
                            t && (t._applyMatrix ? t.transform(null, !0) : t._changed(9))
                        },
                        clone: function() { return new w(this._a, this._b, this._c, this._d, this._tx, this._ty) },
                        equals: function(t) { return t === this || t && this._a === t._a && this._b === t._b && this._c === t._c && this._d === t._d && this._tx === t._tx && this._ty === t._ty },
                        toString: function() { var t = c.instance; return "[[" + [t.number(this._a), t.number(this._c), t.number(this._tx)].join(", ") + "], [" + [t.number(this._b), t.number(this._d), t.number(this._ty)].join(", ") + "]]" },
                        reset: function(t) { return this._a = this._d = 1, this._b = this._c = this._tx = this._ty = 0, t || this._changed(), this },
                        apply: function(t, e) { var n = this._owner; return !!n && (n.transform(null, !0, o.pick(t, !0), e), this.isIdentity()) },
                        translate: function() {
                            var t = _.read(arguments),
                                e = t.x,
                                n = t.y;
                            return this._tx += e * this._a + n * this._c, this._ty += e * this._b + n * this._d, this._changed(), this
                        },
                        scale: function() {
                            var t = _.read(arguments),
                                e = _.read(arguments, 0, { readNull: !0 });
                            return e && this.translate(e), this._a *= t.x, this._b *= t.x, this._c *= t.y, this._d *= t.y, e && this.translate(e.negate()), this._changed(), this
                        },
                        rotate: function(t) {
                            t *= Math.PI / 180;
                            var e = _.read(arguments, 1),
                                n = e.x,
                                i = e.y,
                                r = Math.cos(t),
                                s = Math.sin(t),
                                a = n - n * r + i * s,
                                o = i - n * s - i * r,
                                h = this._a,
                                u = this._b,
                                l = this._c,
                                c = this._d;
                            return this._a = r * h + s * l, this._b = r * u + s * c, this._c = -s * h + r * l, this._d = -s * u + r * c, this._tx += a * h + o * l, this._ty += a * u + o * c, this._changed(), this
                        },
                        shear: function() {
                            var t = _.read(arguments),
                                e = _.read(arguments, 0, { readNull: !0 });
                            e && this.translate(e);
                            var n = this._a,
                                i = this._b;
                            return this._a += t.y * this._c, this._b += t.y * this._d, this._c += t.x * n, this._d += t.x * i, e && this.translate(e.negate()), this._changed(), this
                        },
                        skew: function() {
                            var t = _.read(arguments),
                                e = _.read(arguments, 0, { readNull: !0 }),
                                n = Math.PI / 180,
                                i = new _(Math.tan(t.x * n), Math.tan(t.y * n));
                            return this.shear(i, e)
                        },
                        append: function(t, e) {
                            if (t) {
                                var n = this._a,
                                    i = this._b,
                                    r = this._c,
                                    s = this._d,
                                    a = t._a,
                                    o = t._c,
                                    h = t._b,
                                    u = t._d,
                                    l = t._tx,
                                    c = t._ty;
                                this._a = a * n + h * r, this._c = o * n + u * r, this._b = a * i + h * s, this._d = o * i + u * s, this._tx += l * n + c * r, this._ty += l * i + c * s, e || this._changed()
                            }
                            return this
                        },
                        prepend: function(t, e) {
                            if (t) {
                                var n = this._a,
                                    i = this._b,
                                    r = this._c,
                                    s = this._d,
                                    a = this._tx,
                                    o = this._ty,
                                    h = t._a,
                                    u = t._c,
                                    l = t._b,
                                    c = t._d,
                                    f = t._tx,
                                    d = t._ty;
                                this._a = h * n + u * i, this._c = h * r + u * s, this._b = l * n + c * i, this._d = l * r + c * s, this._tx = h * a + u * o + f, this._ty = l * a + c * o + d, e || this._changed()
                            }
                            return this
                        },
                        appended: function(t) { return this.clone().append(t) },
                        prepended: function(t) { return this.clone().prepend(t) },
                        invert: function() {
                            var t = this._a,
                                e = this._b,
                                n = this._c,
                                i = this._d,
                                r = this._tx,
                                s = this._ty,
                                a = t * i - e * n,
                                o = null;
                            return a && !isNaN(a) && isFinite(r) && isFinite(s) && (this._a = i / a, this._b = -e / a, this._c = -n / a, this._d = t / a, this._tx = (n * s - i * r) / a, this._ty = (e * r - t * s) / a, o = this), o
                        },
                        inverted: function() { return this.clone().invert() },
                        concatenate: "#append",
                        preConcatenate: "#prepend",
                        chain: "#appended",
                        _shiftless: function() { return new w(this._a, this._b, this._c, this._d, 0, 0) },
                        _orNullIfIdentity: function() { return this.isIdentity() ? null : this },
                        isIdentity: function() { return 1 === this._a && 0 === this._b && 0 === this._c && 1 === this._d && 0 === this._tx && 0 === this._ty },
                        isInvertible: function() { var t = this._a * this._d - this._c * this._b; return t && !isNaN(t) && isFinite(this._tx) && isFinite(this._ty) },
                        isSingular: function() { return !this.isInvertible() },
                        transform: function(t, e, n) { return arguments.length < 3 ? this._transformPoint(_.read(arguments)) : this._transformCoordinates(t, e, n) },
                        _transformPoint: function(t, e, n) {
                            var i = t.x,
                                r = t.y;
                            return e || (e = new _), e._set(i * this._a + r * this._c + this._tx, i * this._b + r * this._d + this._ty, n)
                        },
                        _transformCoordinates: function(t, e, n) {
                            for (var i = 0, r = 2 * n; i < r; i += 2) {
                                var s = t[i],
                                    a = t[i + 1];
                                e[i] = s * this._a + a * this._c + this._tx, e[i + 1] = s * this._b + a * this._d + this._ty
                            }
                            return e
                        },
                        _transformCorners: function(t) {
                            var e = t.x,
                                n = t.y,
                                i = e + t.width,
                                r = n + t.height,
                                s = [e, n, i, n, i, r, e, r];
                            return this._transformCoordinates(s, s, 4)
                        },
                        _transformBounds: function(t, e, n) {
                            for (var i = this._transformCorners(t), r = i.slice(0, 2), s = r.slice(), a = 2; a < 8; a++) {
                                var o = i[a],
                                    h = 1 & a;
                                o < r[h] ? r[h] = o : o > s[h] && (s[h] = o)
                            }
                            return e || (e = new m), e._set(r[0], r[1], s[0] - r[0], s[1] - r[1], n)
                        },
                        inverseTransform: function() { return this._inverseTransform(_.read(arguments)) },
                        _inverseTransform: function(t, e, n) {
                            var i = this._a,
                                r = this._b,
                                s = this._c,
                                a = this._d,
                                o = this._tx,
                                h = this._ty,
                                u = i * a - r * s,
                                l = null;
                            if (u && !isNaN(u) && isFinite(o) && isFinite(h)) {
                                var c = t.x - this._tx,
                                    f = t.y - this._ty;
                                e || (e = new _), l = e._set((c * a - f * s) / u, (f * i - c * r) / u, n)
                            }
                            return l
                        },
                        decompose: function() {
                            var t, e, n, i = this._a,
                                r = this._b,
                                s = this._c,
                                a = this._d,
                                o = i * a - r * s,
                                h = Math.sqrt,
                                u = Math.atan2,
                                l = 180 / Math.PI;
                            if (0 !== i || 0 !== r) {
                                var c = h(i * i + r * r);
                                t = Math.acos(i / c) * (r > 0 ? 1 : -1), e = [c, o / c], n = [u(i * s + r * a, c * c), 0]
                            } else if (0 !== s || 0 !== a) {
                                var f = h(s * s + a * a);
                                t = Math.asin(s / f) * (a > 0 ? 1 : -1), e = [o / f, f], n = [0, u(i * s + r * a, f * f)]
                            } else t = 0, n = e = [0, 0];
                            return { translation: this.getTranslation(), rotation: t * l, scaling: new _(e), skewing: new _(n[0] * l, n[1] * l) }
                        },
                        getValues: function() { return [this._a, this._b, this._c, this._d, this._tx, this._ty] },
                        getTranslation: function() { return new _(this._tx, this._ty) },
                        getScaling: function() { return (this.decompose() || {}).scaling },
                        getRotation: function() { return (this.decompose() || {}).rotation },
                        applyToContext: function(t) { this.isIdentity() || t.transform(this._a, this._b, this._c, this._d, this._tx, this._ty) }
                    }, o.each(["a", "b", "c", "d", "tx", "ty"], function(t) {
                        var e = o.capitalize(t),
                            n = "_" + t;
                        this["get" + e] = function() { return this[n] }, this["set" + e] = function(t) { this[n] = t, this._changed() }
                    }, {})),
                    x = o.extend({
                        _class: "Line",
                        initialize: function(t, e, n, i, r) {
                            var s = !1;
                            arguments.length >= 4 ? (this._px = t, this._py = e, this._vx = n, this._vy = i, s = r) : (this._px = t.x, this._py = t.y, this._vx = e.x, this._vy = e.y, s = n), s || (this._vx -= this._px, this._vy -= this._py)
                        },
                        getPoint: function() { return new _(this._px, this._py) },
                        getVector: function() { return new _(this._vx, this._vy) },
                        getLength: function() { return this.getVector().getLength() },
                        intersect: function(t, e) { return x.intersect(this._px, this._py, this._vx, this._vy, t._px, t._py, t._vx, t._vy, !0, e) },
                        getSide: function(t, e) { return x.getSide(this._px, this._py, this._vx, this._vy, t.x, t.y, !0, e) },
                        getDistance: function(t) { return Math.abs(this.getSignedDistance(t)) },
                        getSignedDistance: function(t) { return x.getSignedDistance(this._px, this._py, this._vx, this._vy, t.x, t.y, !0) },
                        isCollinear: function(t) { return _.isCollinear(this._vx, this._vy, t._vx, t._vy) },
                        isOrthogonal: function(t) { return _.isOrthogonal(this._vx, this._vy, t._vx, t._vy) },
                        statics: {
                            intersect: function(t, e, n, i, r, s, a, o, h, u) {
                                h || (n -= t, i -= e, a -= r, o -= s);
                                var l = n * o - i * a;
                                if (!f.isZero(l)) {
                                    var c = t - r,
                                        d = e - s,
                                        g = (a * d - o * c) / l,
                                        v = (n * d - i * c) / l;
                                    if (u || -1e-12 < g && g < 1 + 1e-12 && -1e-12 < v && v < 1 + 1e-12) return u || (g = g <= 0 ? 0 : g >= 1 ? 1 : g), new _(t + g * n, e + g * i)
                                }
                            },
                            getSide: function(t, e, n, i, r, s, a, o) {
                                a || (n -= t, i -= e);
                                var h = r - t,
                                    u = h * i - (s - e) * n;
                                return !o && f.isZero(u) && (u = (h * n + h * n) / (n * n + i * i)) >= 0 && u <= 1 && (u = 0), u < 0 ? -1 : u > 0 ? 1 : 0
                            },
                            getSignedDistance: function(t, e, n, i, r, s, a) { return a || (n -= t, i -= e), 0 === n ? i > 0 ? r - t : t - r : 0 === i ? n < 0 ? s - e : e - s : ((r - t) * i - (s - e) * n) / Math.sqrt(n * n + i * i) },
                            getDistance: function(t, e, n, i, r, s, a) { return Math.abs(x.getSignedDistance(t, e, n, i, r, s, a)) }
                        }
                    }),
                    b = l.extend({
                        _class: "Project",
                        _list: "projects",
                        _reference: "project",
                        _compactSerialize: !0,
                        initialize: function(t) { l.call(this, !0), this._children = [], this._namedChildren = {}, this._activeLayer = null, this._currentStyle = new Z(null, null, this), this._view = G.create(this, t || it.getCanvas(1, 1)), this._selectionItems = {}, this._selectionCount = 0, this._updateVersion = 0 },
                        _serialize: function(t, e) { return o.serialize(this._children, t, !0, e) },
                        _changed: function(t, e) {
                            if (1 & t) {
                                var n = this._view;
                                n && (n._needsUpdate = !0, !n._requested && n._autoUpdate && n.requestUpdate())
                            }
                            var i = this._changes;
                            if (i && e) {
                                var r = this._changesById,
                                    s = e._id,
                                    a = r[s];
                                a ? a.flags |= t : i.push(r[s] = { item: e, flags: t })
                            }
                        },
                        clear: function() { for (var t = this._children, e = t.length - 1; e >= 0; e--) t[e].remove() },
                        isEmpty: function() { return !this._children.length },
                        remove: function t() { return !!t.base.call(this) && (this._view && this._view.remove(), !0) },
                        getView: function() { return this._view },
                        getCurrentStyle: function() { return this._currentStyle },
                        setCurrentStyle: function(t) { this._currentStyle.set(t) },
                        getIndex: function() { return this._index },
                        getOptions: function() { return this._scope.settings },
                        getLayers: function() { return this._children },
                        getActiveLayer: function() { return this._activeLayer || new k({ project: this, insert: !0 }) },
                        getSymbolDefinitions: function() {
                            var t = [],
                                e = {};
                            return this.getItems({
                                class: A,
                                match: function(n) {
                                    var i = n._definition,
                                        r = i._id;
                                    return e[r] || (e[r] = !0, t.push(i)), !1
                                }
                            }), t
                        },
                        getSymbols: "getSymbolDefinitions",
                        getSelectedItems: function() {
                            var t = this._selectionItems,
                                e = [];
                            for (var n in t) {
                                var i = t[n],
                                    r = i._selection;
                                1 & r && i.isInserted() ? e.push(i) : r || this._updateSelection(i)
                            }
                            return e
                        },
                        _updateSelection: function(t) {
                            var e = t._id,
                                n = this._selectionItems;
                            t._selection ? n[e] !== t && (this._selectionCount++, n[e] = t) : n[e] === t && (this._selectionCount--, delete n[e])
                        },
                        selectAll: function() { for (var t = this._children, e = 0, n = t.length; e < n; e++) t[e].setFullySelected(!0) },
                        deselectAll: function() { var t = this._selectionItems; for (var e in t) t[e].setFullySelected(!1) },
                        addLayer: function(t) { return this.insertLayer(n, t) },
                        insertLayer: function(t, e) {
                            if (e instanceof k) {
                                e._remove(!1, !0), o.splice(this._children, [e], t, 0), e._setProject(this, !0);
                                var n = e._name;
                                n && e.setName(n), this._changes && e._changed(5), this._activeLayer || (this._activeLayer = e)
                            } else e = null;
                            return e
                        },
                        _insertItem: function(t, e, i) { return e = this.insertLayer(t, e) || (this._activeLayer || this._insertItem(n, new k(C.NO_INSERT), !0)).insertChild(t, e), i && e.activate && e.activate(), e },
                        getItems: function(t) { return C._getItems(this, t) },
                        getItem: function(t) { return C._getItems(this, t, null, null, !0)[0] || null },
                        importJSON: function(t) { this.activate(); var e = this._activeLayer; return o.importJSON(t, e && e.isEmpty() && e) },
                        removeOn: function(t) {
                            var e = this._removeSets;
                            if (e) {
                                "mouseup" === t && (e.mousedrag = null);
                                var n = e[t];
                                if (n) {
                                    for (var i in n) {
                                        var r = n[i];
                                        for (var s in e) {
                                            var a = e[s];
                                            a && a != n && delete a[r._id]
                                        }
                                        r.remove()
                                    }
                                    e[t] = null
                                }
                            }
                        },
                        draw: function(t, e, n) {
                            this._updateVersion++, t.save(), e.applyToContext(t);
                            for (var i = this._children, r = new o({ offset: new _(0, 0), pixelRatio: n, viewMatrix: e.isIdentity() ? null : e, matrices: [new w], updateMatrix: !0 }), s = 0, a = i.length; s < a; s++) i[s].draw(t, r);
                            if (t.restore(), this._selectionCount > 0) {
                                t.save(), t.strokeWidth = 1;
                                var h = this._selectionItems,
                                    u = this._scope.settings.handleSize,
                                    l = this._updateVersion;
                                for (var c in h) h[c]._drawSelection(t, e, u, h, l);
                                t.restore()
                            }
                        }
                    }),
                    C = o.extend(h, { statics: { extend: function t(e) { return e._serializeFields && (e._serializeFields = o.set({}, this.prototype._serializeFields, e._serializeFields)), t.base.apply(this, arguments) }, NO_INSERT: { insert: !1 } }, _class: "Item", _name: null, _applyMatrix: !0, _canApplyMatrix: !0, _canScaleStroke: !1, _pivot: null, _visible: !0, _blendMode: "normal", _opacity: 1, _locked: !1, _guide: !1, _clipMask: !1, _selection: 0, _selectBounds: !0, _selectChildren: !1, _serializeFields: { name: null, applyMatrix: null, matrix: new w, pivot: null, visible: !0, blendMode: "normal", opacity: 1, locked: !1, guide: !1, clipMask: !1, selected: !1, data: {} }, _prioritize: ["applyMatrix"] }, new function() { var t = ["onMouseDown", "onMouseUp", "onMouseDrag", "onClick", "onDoubleClick", "onMouseMove", "onMouseEnter", "onMouseLeave"]; return o.each(t, function(t) { this._events[t] = { install: function(t) { this.getView()._countItemEvent(t, 1) }, uninstall: function(t) { this.getView()._countItemEvent(t, -1) } } }, { _events: { onFrame: { install: function() { this.getView()._animateItem(this, !0) }, uninstall: function() { this.getView()._animateItem(this, !1) } }, onLoad: {}, onError: {} }, statics: { _itemHandlers: t } }) }, {
                        initialize: function() {},
                        _initialize: function(t, e) {
                            var i = t && o.isPlainObject(t),
                                s = i && !0 === t.internal,
                                a = this._matrix = new w,
                                h = i && t.project || r.project,
                                u = r.settings;
                            return this._id = s ? null : d.get(), this._parent = this._index = null, this._applyMatrix = this._canApplyMatrix && u.applyMatrix, e && a.translate(e), a._owner = this, this._style = new Z(h._currentStyle, this, h), s || i && 0 == t.insert || !u.insertItems && (!i || !0 !== t.insert) ? this._setProject(h) : (i && t.parent || h)._insertItem(n, this, !0), i && t !== C.NO_INSERT && this.set(t, { internal: !0, insert: !0, project: !0, parent: !0 }), i
                        },
                        _serialize: function(t, e) {
                            var n = {},
                                i = this;

                            function r(r) {
                                for (var s in r) {
                                    var a = i[s];
                                    o.equals(a, "leading" === s ? 1.2 * r.fontSize : r[s]) || (n[s] = o.serialize(a, t, "data" !== s, e))
                                }
                            }
                            return r(this._serializeFields), this instanceof S || r(this._style._defaults), [this._class, n]
                        },
                        _changed: function(t) {
                            var e = this._symbol,
                                i = this._parent || e,
                                r = this._project;
                            8 & t && (this._bounds = this._position = this._decomposed = this._globalMatrix = n), i && 40 & t && C._clearBoundsCache(i), 2 & t && C._clearBoundsCache(this), r && r._changed(t, this), e && e._changed(t)
                        },
                        getId: function() { return this._id },
                        getName: function() { return this._name },
                        setName: function(t) {
                            if (this._name && this._removeNamed(), t === +t + "") throw new Error("Names consisting only of numbers are not supported.");
                            var e = this._getOwner();
                            if (t && e) {
                                var i = e._children,
                                    r = e._namedChildren;
                                (r[t] = r[t] || []).push(this), t in i || (i[t] = this)
                            }
                            this._name = t || n, this._changed(128)
                        },
                        getStyle: function() { return this._style },
                        setStyle: function(t) { this.getStyle().set(t) }
                    }, o.each(["locked", "visible", "blendMode", "opacity", "guide"], function(t) {
                        var e = o.capitalize(t),
                            n = "_" + t,
                            i = { locked: 128, visible: 137 };
                        this["get" + e] = function() { return this[n] }, this["set" + e] = function(e) { e != this[n] && (this[n] = e, this._changed(i[t] || 129)) }
                    }, {}), {
                        beans: !0,
                        getSelection: function() { return this._selection },
                        setSelection: function(t) {
                            if (t !== this._selection) {
                                this._selection = t;
                                var e = this._project;
                                e && (e._updateSelection(this), this._changed(129))
                            }
                        },
                        _changeSelection: function(t, e) {
                            var n = this._selection;
                            this.setSelection(e ? n | t : n & ~t)
                        },
                        isSelected: function() {
                            if (this._selectChildren)
                                for (var t = this._children, e = 0, n = t.length; e < n; e++)
                                    if (t[e].isSelected()) return !0;
                            return !!(1 & this._selection)
                        },
                        setSelected: function(t) {
                            if (this._selectChildren)
                                for (var e = this._children, n = 0, i = e.length; n < i; n++) e[n].setSelected(t);
                            this._changeSelection(1, t)
                        },
                        isFullySelected: function() {
                            var t = this._children,
                                e = !!(1 & this._selection);
                            if (t && e) {
                                for (var n = 0, i = t.length; n < i; n++)
                                    if (!t[n].isFullySelected()) return !1;
                                return !0
                            }
                            return e
                        },
                        setFullySelected: function(t) {
                            var e = this._children;
                            if (e)
                                for (var n = 0, i = e.length; n < i; n++) e[n].setFullySelected(t);
                            this._changeSelection(1, t)
                        },
                        isClipMask: function() { return this._clipMask },
                        setClipMask: function(t) { this._clipMask != (t = !!t) && (this._clipMask = t, t && (this.setFillColor(null), this.setStrokeColor(null)), this._changed(129), this._parent && this._parent._changed(1024)) },
                        getData: function() { return this._data || (this._data = {}), this._data },
                        setData: function(t) { this._data = t },
                        getPosition: function(t) {
                            var e = this._position,
                                n = t ? _ : g;
                            if (!e) {
                                var i = this._pivot;
                                e = this._position = i ? this._matrix._transformPoint(i) : this.getBounds().getCenter(!0)
                            }
                            return new n(e.x, e.y, this, "setPosition")
                        },
                        setPosition: function() { this.translate(_.read(arguments).subtract(this.getPosition(!0))) },
                        getPivot: function() { var t = this._pivot; return t ? new g(t.x, t.y, this, "setPivot") : null },
                        setPivot: function() { this._pivot = _.read(arguments, 0, { clone: !0, readNull: !0 }), this._position = n }
                    }, o.each({ getStrokeBounds: { stroke: !0 }, getHandleBounds: { handle: !0 }, getInternalBounds: { internal: !0 } }, function(t, e) { this[e] = function(e) { return this.getBounds(e, t) } }, {
                        beans: !0,
                        getBounds: function(t, e) {
                            var n = e || t instanceof w,
                                i = o.set({}, n ? e : t, this._boundsOptions);
                            i.stroke && !this.getStrokeScaling() || (i.cacheItem = this);
                            var r = this._getCachedBounds(n && t, i).rect;
                            return arguments.length ? r : new y(r.x, r.y, r.width, r.height, this, "setBounds")
                        },
                        setBounds: function() {
                            var t = m.read(arguments),
                                e = this.getBounds(),
                                n = this._matrix,
                                i = new w,
                                r = t.getCenter();
                            i.translate(r), t.width == e.width && t.height == e.height || (n.isInvertible() || (n.set(n._backup || (new w).translate(n.getTranslation())), e = this.getBounds()), i.scale(0 !== e.width ? t.width / e.width : 0, 0 !== e.height ? t.height / e.height : 0)), r = e.getCenter(), i.translate(-r.x, -r.y), this.transform(i)
                        },
                        _getBounds: function(t, e) { var n = this._children; return n && n.length ? (C._updateBoundsCache(this, e.cacheItem), C._getBounds(n, t, e)) : new m },
                        _getBoundsCacheKey: function(t, e) { return [t.stroke ? 1 : 0, t.handle ? 1 : 0, e ? 1 : 0].join("") },
                        _getCachedBounds: function(t, e, n) {
                            t = t && t._orNullIfIdentity();
                            var i = e.internal && !n,
                                r = e.cacheItem,
                                s = i ? null : this._matrix._orNullIfIdentity(),
                                a = r && (!t || t.equals(s)) && this._getBoundsCacheKey(e, i),
                                o = this._bounds;
                            if (C._updateBoundsCache(this._parent || this._symbol, r), a && o && a in o) return { rect: (f = o[a]).rect.clone(), nonscaling: f.nonscaling };
                            var h = this._getBounds(t || s, e),
                                u = h.rect || h,
                                l = this._style,
                                c = h.nonscaling || l.hasStroke() && !l.getStrokeScaling();
                            if (a) { o || (this._bounds = o = {}); var f = o[a] = { rect: u.clone(), nonscaling: c, internal: i } }
                            return { rect: u, nonscaling: c }
                        },
                        _getStrokeMatrix: function(t, e) {
                            var n = this.getStrokeScaling() ? null : e && e.internal ? this : this._parent || this._symbol && this._symbol._item,
                                i = n ? n.getViewMatrix().invert() : t;
                            return i && i._shiftless()
                        },
                        statics: {
                            _updateBoundsCache: function(t, e) {
                                if (t && e) {
                                    var n = e._id,
                                        i = t._boundsCache = t._boundsCache || { ids: {}, list: [] };
                                    i.ids[n] || (i.list.push(e), i.ids[n] = e)
                                }
                            },
                            _clearBoundsCache: function(t) {
                                var e = t._boundsCache;
                                if (e) {
                                    t._bounds = t._position = t._boundsCache = n;
                                    for (var i = 0, r = e.list, s = r.length; i < s; i++) {
                                        var a = r[i];
                                        a !== t && (a._bounds = a._position = n, a._boundsCache && C._clearBoundsCache(a))
                                    }
                                }
                            },
                            _getBounds: function(t, e, n) {
                                var i = 1 / 0,
                                    r = -i,
                                    s = i,
                                    a = r,
                                    o = !1;
                                n = n || {};
                                for (var h = 0, u = t.length; h < u; h++) {
                                    var l = t[h];
                                    if (l._visible && !l.isEmpty()) {
                                        var c = l._getCachedBounds(e && e.appended(l._matrix), n, !0),
                                            f = c.rect;
                                        i = Math.min(f.x, i), s = Math.min(f.y, s), r = Math.max(f.x + f.width, r), a = Math.max(f.y + f.height, a), c.nonscaling && (o = !0)
                                    }
                                }
                                return { rect: isFinite(i) ? new m(i, s, r - i, a - s) : new m, nonscaling: o }
                            }
                        }
                    }), {
                        beans: !0,
                        _decompose: function() { return this._applyMatrix ? null : this._decomposed || (this._decomposed = this._matrix.decompose()) },
                        getRotation: function() { var t = this._decompose(); return t ? t.rotation : 0 },
                        setRotation: function(t) {
                            var e = this.getRotation();
                            if (null != e && null != t) {
                                var n = this._decomposed;
                                this.rotate(t - e), n && (n.rotation = t, this._decomposed = n)
                            }
                        },
                        getScaling: function() {
                            var t = this._decompose(),
                                e = t && t.scaling;
                            return new g(e ? e.x : 1, e ? e.y : 1, this, "setScaling")
                        },
                        setScaling: function() {
                            var t = this.getScaling(),
                                e = _.read(arguments, 0, { clone: !0, readNull: !0 });
                            if (t && e && !t.equals(e)) {
                                var n = this.getRotation(),
                                    i = this._decomposed,
                                    r = new w,
                                    s = this.getPosition(!0);
                                r.translate(s), n && r.rotate(n), r.scale(e.x / t.x, e.y / t.y), n && r.rotate(-n), r.translate(s.negate()), this.transform(r), i && (i.scaling = e, this._decomposed = i)
                            }
                        },
                        getMatrix: function() { return this._matrix },
                        setMatrix: function() {
                            var t = this._matrix;
                            t.initialize.apply(t, arguments)
                        },
                        getGlobalMatrix: function(t) {
                            var e = this._globalMatrix,
                                n = this._project._updateVersion;
                            if (e && e._updateVersion !== n && (e = null), !e) {
                                e = this._globalMatrix = this._matrix.clone();
                                var i = this._parent;
                                i && e.prepend(i.getGlobalMatrix(!0)), e._updateVersion = n
                            }
                            return t ? e : e.clone()
                        },
                        getViewMatrix: function() { return this.getGlobalMatrix().prepend(this.getView()._matrix) },
                        getApplyMatrix: function() { return this._applyMatrix },
                        setApplyMatrix: function(t) {
                            (this._applyMatrix = this._canApplyMatrix && !!t) && this.transform(null, !0)
                        },
                        getTransformContent: "#getApplyMatrix",
                        setTransformContent: "#setApplyMatrix"
                    }, {
                        getProject: function() { return this._project },
                        _setProject: function(t, e) {
                            if (this._project !== t) {
                                this._project && this._installEvents(!1), this._project = t;
                                for (var n = this._children, i = 0, r = n && n.length; i < r; i++) n[i]._setProject(t);
                                e = !0
                            }
                            e && this._installEvents(!0)
                        },
                        getView: function() { return this._project._view },
                        _installEvents: function t(e) { t.base.call(this, e); for (var n = this._children, i = 0, r = n && n.length; i < r; i++) n[i]._installEvents(e) },
                        getLayer: function() {
                            for (var t = this; t = t._parent;)
                                if (t instanceof k) return t;
                            return null
                        },
                        getParent: function() { return this._parent },
                        setParent: function(t) { return t.addChild(this) },
                        _getOwner: "#getParent",
                        getChildren: function() { return this._children },
                        setChildren: function(t) { this.removeChildren(), this.addChildren(t) },
                        getFirstChild: function() { return this._children && this._children[0] || null },
                        getLastChild: function() { return this._children && this._children[this._children.length - 1] || null },
                        getNextSibling: function() { var t = this._getOwner(); return t && t._children[this._index + 1] || null },
                        getPreviousSibling: function() { var t = this._getOwner(); return t && t._children[this._index - 1] || null },
                        getIndex: function() { return this._index },
                        equals: function(t) { return t === this || t && this._class === t._class && this._style.equals(t._style) && this._matrix.equals(t._matrix) && this._locked === t._locked && this._visible === t._visible && this._blendMode === t._blendMode && this._opacity === t._opacity && this._clipMask === t._clipMask && this._guide === t._guide && this._equals(t) || !1 },
                        _equals: function(t) { return o.equals(this._children, t._children) },
                        clone: function(t) {
                            var e = new this.constructor(C.NO_INSERT),
                                i = this._children,
                                r = o.pick(t ? t.insert : n, t === n || !0 === t),
                                s = o.pick(t ? t.deep : n, !0);
                            i && e.copyAttributes(this), i && !s || e.copyContent(this), i || e.copyAttributes(this), r && e.insertAbove(this);
                            var a = this._name,
                                h = this._parent;
                            if (a && h) {
                                i = h._children;
                                for (var u = a, l = 1; i[a];) a = u + " " + l++;
                                a !== u && e.setName(a)
                            }
                            return e
                        },
                        copyContent: function(t) { for (var e = t._children, n = 0, i = e && e.length; n < i; n++) this.addChild(e[n].clone(!1), !0) },
                        copyAttributes: function(t, e) {
                            this.setStyle(t._style);
                            for (var n = ["_locked", "_visible", "_blendMode", "_opacity", "_clipMask", "_guide"], i = 0, r = n.length; i < r; i++) {
                                var s = n[i];
                                t.hasOwnProperty(s) && (this[s] = t[s])
                            }
                            e || this._matrix.set(t._matrix, !0), this.setApplyMatrix(t._applyMatrix), this.setPivot(t._pivot), this.setSelection(t._selection);
                            var a = t._data,
                                h = t._name;
                            this._data = a ? o.clone(a) : null, h && this.setName(h)
                        },
                        rasterize: function(t, e) {
                            var i = this.getStrokeBounds(),
                                r = (t || this.getView().getResolution()) / 72,
                                s = i.getTopLeft().floor(),
                                a = i.getBottomRight().ceil(),
                                h = new v(a.subtract(s)),
                                u = new P(C.NO_INSERT);
                            if (!h.isZero()) {
                                var l = it.getCanvas(h.multiply(r)),
                                    c = l.getContext("2d"),
                                    f = (new w).scale(r).translate(s.negate());
                                c.save(), f.applyToContext(c), this.draw(c, new o({ matrices: [f] })), c.restore(), u.setCanvas(l)
                            }
                            return u.transform((new w).translate(s.add(h.divide(2))).scale(1 / r)), (e === n || e) && u.insertAbove(this), u
                        },
                        contains: function() { return !!this._contains(this._matrix._inverseTransform(_.read(arguments))) },
                        _contains: function(t) {
                            var e = this._children;
                            if (e) {
                                for (var n = e.length - 1; n >= 0; n--)
                                    if (e[n].contains(t)) return !0;
                                return !1
                            }
                            return t.isInside(this.getInternalBounds())
                        },
                        isInside: function() { return m.read(arguments).contains(this.getBounds()) },
                        _asPathItem: function() { return new B.Rectangle({ rectangle: this.getInternalBounds(), matrix: this._matrix, insert: !1 }) },
                        intersects: function(t, e) { return t instanceof C && this._asPathItem().getIntersections(t._asPathItem(), null, e, !0).length > 0 }
                    }, new function() {
                        function t() { return this._hitTest(_.read(arguments), T.getOptions(arguments)) }

                        function e() {
                            var t = _.read(arguments),
                                e = T.getOptions(arguments),
                                n = [];
                            return this._hitTest(t, o.set({ all: n }, e)), n
                        }

                        function n(t, e, n, i) {
                            var r = this._children;
                            if (r)
                                for (var s = r.length - 1; s >= 0; s--) {
                                    var a = r[s],
                                        o = a !== i && a._hitTest(t, e, n);
                                    if (o && !e.all) return o
                                }
                            return null
                        }
                        return b.inject({ hitTest: t, hitTestAll: e, _hitTest: n }), { hitTest: t, hitTestAll: e, _hitTestChildren: n }
                    }, {
                        _hitTest: function(t, e, n) {
                            if (this._locked || !this._visible || this._guide && !e.guides || this.isEmpty()) return null;
                            var i = this._matrix,
                                r = n ? n.appended(i) : this.getGlobalMatrix().prepend(this.getView()._matrix),
                                s = Math.max(e.tolerance, 1e-12),
                                a = e._tolerancePadding = new v(B._getStrokePadding(s, i._shiftless().invert()));
                            if (!(t = i._inverseTransform(t)) || !this._children && !this.getBounds({ internal: !0, stroke: !0, handle: !0 }).expand(a.multiply(2))._containsPoint(t)) return null;
                            var h, u, l = !(e.guides && !this._guide || e.selected && !this.isSelected() || e.type && e.type !== o.hyphenate(this._class) || e.class && !(this instanceof e.class)),
                                c = e.match,
                                f = this;

                            function d(t) { return t && c && !c(t) && (t = null), t && e.all && e.all.push(t), t }

                            function _(e, n) { var i = n ? h["get" + n]() : f.getPosition(); if (t.subtract(i).divide(a).length <= 1) return new T(e, f, { name: n ? o.hyphenate(n) : e, point: i }) }
                            var g = e.position,
                                p = e.center,
                                m = e.bounds;
                            if (l && this._parent && (g || p || m)) {
                                if ((p || m) && (h = this.getInternalBounds()), !(u = g && _("position") || p && _("center", "Center")) && m)
                                    for (var y = ["TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], w = 0; w < 8 && !u; w++) u = _("bounds", y[w]);
                                u = d(u)
                            }
                            return u || (u = this._hitTestChildren(t, e, r) || l && d(this._hitTestSelf(t, e, r, this.getStrokeScaling() ? null : r._shiftless().invert())) || null), u && u.point && (u.point = i.transform(u.point)), u
                        },
                        _hitTestSelf: function(t, e) { if (e.fill && this.hasFill() && this._contains(t)) return new T("fill", this) },
                        matches: function(t, e) {
                            var n = void 0 === t ? "undefined" : i(t);
                            if ("object" === n) {
                                for (var r in t)
                                    if (t.hasOwnProperty(r) && !this.matches(r, t[r])) return !1;
                                return !0
                            }
                            if ("function" === n) return t(this);
                            if ("match" === t) return e(this);
                            var s = /^(empty|editable)$/.test(t) ? this["is" + o.capitalize(t)]() : "type" === t ? o.hyphenate(this._class) : this[t];
                            if ("class" === t) {
                                if ("function" == typeof e) return this instanceof e;
                                s = this._class
                            }
                            if ("function" == typeof e) return !!e(s);
                            if (e) {
                                if (e.test) return e.test(s);
                                if (o.isPlainObject(e)) return function t(e, n) {
                                    for (var i in e)
                                        if (e.hasOwnProperty(i)) {
                                            var r = e[i],
                                                s = n[i];
                                            if (o.isPlainObject(r) && o.isPlainObject(s)) { if (!t(r, s)) return !1 } else if (!o.equals(r, s)) return !1
                                        }
                                    return !0
                                }(e, s)
                            }
                            return o.equals(s, e)
                        },
                        getItems: function(t) { return C._getItems(this, t, this._matrix) },
                        getItem: function(t) { return C._getItems(this, t, this._matrix, null, !0)[0] || null },
                        statics: {
                            _getItems: function t(e, n, r, s, a) {
                                if (!s) {
                                    var h = "object" === (void 0 === n ? "undefined" : i(n)) && n,
                                        u = h && h.overlapping,
                                        l = h && h.inside,
                                        c = (x = u || l) && m.read([x]);
                                    s = { items: [], recursive: h && !1 !== h.recursive, inside: !!l, overlapping: !!u, rect: c, path: u && new B.Rectangle({ rectangle: c, insert: !1 }) }, h && (n = o.filter({}, n, { recursive: !0, inside: !0, overlapping: !0 }))
                                }
                                var f = e._children,
                                    d = s.items;
                                r = (c = s.rect) && (r || new w);
                                for (var _ = 0, g = f && f.length; _ < g; _++) {
                                    var v = f[_],
                                        p = r && r.appended(v._matrix),
                                        y = !0;
                                    if (c) {
                                        var x = v.getBounds(p);
                                        if (!c.intersects(x)) continue;
                                        c.contains(x) || s.overlapping && (x.contains(c) || s.path.intersects(v, p)) || (y = !1)
                                    }
                                    if (y && v.matches(n) && (d.push(v), a)) break;
                                    if (!1 !== s.recursive && t(v, n, p, s, a), a && d.length > 0) break
                                }
                                return d
                            }
                        }
                    }, {
                        importJSON: function(t) { var e = o.importJSON(t, this); return e !== this ? this.addChild(e) : e },
                        addChild: function(t) { return this.insertChild(n, t) },
                        insertChild: function(t, e) { var n = e ? this.insertChildren(t, [e]) : null; return n && n[0] },
                        addChildren: function(t) { return this.insertChildren(this._children.length, t) },
                        insertChildren: function(t, e) {
                            var n = this._children;
                            if (n && e && e.length > 0) {
                                for (var i = {}, r = (e = o.slice(e)).length - 1; r >= 0; r--) { var s = (l = e[r]) && l._id;!l || i[s] ? e.splice(r, 1) : (l._remove(!1, !0), i[s] = !0) }
                                o.splice(n, e, t, 0);
                                for (var a = this._project, h = a._changes, u = (r = 0, e.length); r < u; r++) {
                                    var l, c = (l = e[r])._name;
                                    l._parent = this, l._setProject(a, !0), c && l.setName(c), h && l._changed(5)
                                }
                                this._changed(11)
                            } else e = null;
                            return e
                        },
                        _insertItem: "#insertChild",
                        _insertAt: function(t, e) {
                            var n = t && t._getOwner(),
                                i = t !== this && n ? this : null;
                            return i && (i._remove(!1, !0), n._insertItem(t._index + e, i)), i
                        },
                        insertAbove: function(t) { return this._insertAt(t, 1) },
                        insertBelow: function(t) { return this._insertAt(t, 0) },
                        sendToBack: function() { var t = this._getOwner(); return t ? t._insertItem(0, this) : null },
                        bringToFront: function() { var t = this._getOwner(); return t ? t._insertItem(n, this) : null },
                        appendTop: "#addChild",
                        appendBottom: function(t) { return this.insertChild(0, t) },
                        moveAbove: "#insertAbove",
                        moveBelow: "#insertBelow",
                        addTo: function(t) { return t._insertItem(n, this) },
                        copyTo: function(t) { return this.clone(!1).addTo(t) },
                        reduce: function(t) { var e = this._children; if (e && 1 === e.length) { var n = e[0].reduce(t); return this._parent ? (n.insertAbove(this), this.remove()) : n.remove(), n } return this },
                        _removeNamed: function() {
                            var t = this._getOwner();
                            if (t) {
                                var e = t._children,
                                    n = t._namedChildren,
                                    i = this._name,
                                    r = n[i],
                                    s = r ? r.indexOf(this) : -1; - 1 !== s && (e[i] == this && delete e[i], r.splice(s, 1), r.length ? e[i] = r[0] : delete n[i])
                            }
                        },
                        _remove: function(t, e) {
                            var n = this._getOwner(),
                                i = this._project,
                                r = this._index;
                            return !!n && (this._name && this._removeNamed(), null != r && (i._activeLayer === this && (i._activeLayer = this.getNextSibling() || this.getPreviousSibling()), o.splice(n._children, null, r, 1)), this._installEvents(!1), t && i._changes && this._changed(5), e && n._changed(11, this), this._parent = null, !0)
                        },
                        remove: function() { return this._remove(!0, !0) },
                        replaceWith: function(t) { var e = t && t.insertBelow(this); return e && this.remove(), e },
                        removeChildren: function(t, e) {
                            if (!this._children) return null;
                            t = t || 0, e = o.pick(e, this._children.length);
                            for (var n = o.splice(this._children, null, t, e - t), i = n.length - 1; i >= 0; i--) n[i]._remove(!0, !1);
                            return n.length > 0 && this._changed(11), n
                        },
                        clear: "#removeChildren",
                        reverseChildren: function() {
                            if (this._children) {
                                this._children.reverse();
                                for (var t = 0, e = this._children.length; t < e; t++) this._children[t]._index = t;
                                this._changed(11)
                            }
                        },
                        isEmpty: function() { var t = this._children; return !t || !t.length },
                        isEditable: function() {
                            for (var t = this; t;) {
                                if (!t._visible || t._locked) return !1;
                                t = t._parent
                            }
                            return !0
                        },
                        hasFill: function() { return this.getStyle().hasFill() },
                        hasStroke: function() { return this.getStyle().hasStroke() },
                        hasShadow: function() { return this.getStyle().hasShadow() },
                        _getOrder: function(t) {
                            function e(t) {
                                var e = [];
                                do { e.unshift(t) } while (t = t._parent);
                                return e
                            }
                            for (var n = e(this), i = e(t), r = 0, s = Math.min(n.length, i.length); r < s; r++)
                                if (n[r] != i[r]) return n[r]._index < i[r]._index ? 1 : -1;
                            return 0
                        },
                        hasChildren: function() { return this._children && this._children.length > 0 },
                        isInserted: function() { return !!this._parent && this._parent.isInserted() },
                        isAbove: function(t) { return -1 === this._getOrder(t) },
                        isBelow: function(t) { return 1 === this._getOrder(t) },
                        isParent: function(t) { return this._parent === t },
                        isChild: function(t) { return t && t._parent === this },
                        isDescendant: function(t) {
                            for (var e = this; e = e._parent;)
                                if (e === t) return !0;
                            return !1
                        },
                        isAncestor: function(t) { return !!t && t.isDescendant(this) },
                        isSibling: function(t) { return this._parent === t._parent },
                        isGroupedWith: function(t) {
                            for (var e = this._parent; e;) {
                                if (e._parent && /^(Group|Layer|CompoundPath)$/.test(e._class) && t.isDescendant(e)) return !0;
                                e = e._parent
                            }
                            return !1
                        }
                    }, o.each(["rotate", "scale", "shear", "skew"], function(t) {
                        var e = "rotate" === t;
                        this[t] = function() {
                            var n = (e ? o : _).read(arguments),
                                i = _.read(arguments, 0, { readNull: !0 });
                            return this.transform((new w)[t](n, i || this.getPosition(!0)))
                        }
                    }, {
                        translate: function() { var t = new w; return this.transform(t.translate.apply(t, arguments)) },
                        transform: function(t, e, n, i) {
                            var r = this._matrix,
                                s = t && !t.isIdentity(),
                                a = (e || this._applyMatrix) && (!r.isIdentity() || s || e && n && this._children);
                            if (!s && !a) return this;
                            if (s) {
                                !t.isInvertible() && r.isInvertible() && (r._backup = r.getValues()), r.prepend(t, !0);
                                var o = this._style,
                                    h = o.getFillColor(!0),
                                    u = o.getStrokeColor(!0);
                                h && h.transform(t), u && u.transform(t)
                            }
                            if (a && (a = this._transformContent(r, n, i))) {
                                var l = this._pivot;
                                l && r._transformPoint(l, l, !0), r.reset(!0), i && this._canApplyMatrix && (this._applyMatrix = !0)
                            }
                            var c = this._bounds,
                                f = this._position;
                            (s || a) && this._changed(9);
                            var d = s && c && t.decompose();
                            if (d && d.skewing.isZero() && d.rotation % 90 == 0) {
                                for (var _ in c) {
                                    var g = c[_];
                                    if (g.nonscaling) delete c[_];
                                    else if (a || !g.internal) {
                                        var v = g.rect;
                                        t._transformBounds(v, v)
                                    }
                                }
                                this._bounds = c;
                                var p = c[this._getBoundsCacheKey(this._boundsOptions || {})];
                                p && (this._position = p.rect.getCenter(!0))
                            } else s && f && this._pivot && (this._position = t._transformPoint(f, f));
                            return this
                        },
                        _transformContent: function(t, e, n) { var i = this._children; if (i) { for (var r = 0, s = i.length; r < s; r++) i[r].transform(t, !0, e, n); return !0 } },
                        globalToLocal: function() { return this.getGlobalMatrix(!0)._inverseTransform(_.read(arguments)) },
                        localToGlobal: function() { return this.getGlobalMatrix(!0)._transformPoint(_.read(arguments)) },
                        parentToLocal: function() { return this._matrix._inverseTransform(_.read(arguments)) },
                        localToParent: function() { return this._matrix._transformPoint(_.read(arguments)) },
                        fitBounds: function(t, e) {
                            t = m.read(arguments);
                            var n = this.getBounds(),
                                i = n.height / n.width,
                                r = t.height / t.width,
                                s = (e ? i > r : i < r) ? t.width / n.width : t.height / n.height,
                                a = new m(new _, new v(n.width * s, n.height * s));
                            a.setCenter(t.getCenter()), this.setBounds(a)
                        }
                    }), {
                        _setStyles: function(t, e, n) {
                            var i = this._style,
                                s = this._matrix;
                            if (i.hasFill() && (t.fillStyle = i.getFillColor().toCanvasStyle(t, s)), i.hasStroke()) {
                                t.strokeStyle = i.getStrokeColor().toCanvasStyle(t, s), t.lineWidth = i.getStrokeWidth();
                                var a = i.getStrokeJoin(),
                                    o = i.getStrokeCap(),
                                    h = i.getMiterLimit();
                                if (a && (t.lineJoin = a), o && (t.lineCap = o), h && (t.miterLimit = h), r.support.nativeDash) {
                                    var u = i.getDashArray(),
                                        l = i.getDashOffset();
                                    u && u.length && ("setLineDash" in t ? (t.setLineDash(u), t.lineDashOffset = l) : (t.mozDash = u, t.mozDashOffset = l))
                                }
                            }
                            if (i.hasShadow()) {
                                var c = e.pixelRatio || 1,
                                    f = n._shiftless().prepend((new w).scale(c, c)),
                                    d = f.transform(new _(i.getShadowBlur(), 0)),
                                    g = f.transform(this.getShadowOffset());
                                t.shadowColor = i.getShadowColor().toCanvasStyle(t), t.shadowBlur = d.getLength(), t.shadowOffsetX = g.x, t.shadowOffsetY = g.y
                            }
                        },
                        draw: function(t, e, n) {
                            var i = this._updateVersion = this._project._updateVersion;
                            if (this._visible && 0 !== this._opacity) {
                                var r = e.matrices,
                                    s = e.viewMatrix,
                                    a = this._matrix,
                                    o = r[r.length - 1].appended(a);
                                if (o.isInvertible()) {
                                    s = s ? s.appended(o) : o, r.push(o), e.updateMatrix && (o._updateVersion = i, this._globalMatrix = o);
                                    var h, u, l, c = this._blendMode,
                                        f = this._opacity,
                                        d = "normal" === c,
                                        _ = rt.nativeModes[c],
                                        g = d && 1 === f || e.dontStart || e.clip || (_ || d && f < 1) && this._canComposite(),
                                        v = e.pixelRatio || 1;
                                    if (!g) {
                                        var p = this.getStrokeBounds(s);
                                        if (!p.width || !p.height) return;
                                        l = e.offset, u = e.offset = p.getTopLeft().floor(), h = t, t = it.getContext(p.getSize().ceil().add(1).multiply(v)), 1 !== v && t.scale(v, v)
                                    }
                                    t.save();
                                    var m = n ? n.appended(a) : this._canScaleStroke && !this.getStrokeScaling(!0) && s,
                                        y = !g && e.clipItem,
                                        w = !m || y;
                                    if (g ? (t.globalAlpha = f, _ && (t.globalCompositeOperation = c)) : w && t.translate(-u.x, -u.y), w && (g ? a : s).applyToContext(t), y && e.clipItem.draw(t, e.extend({ clip: !0 })), m) {
                                        t.setTransform(v, 0, 0, v, 0, 0);
                                        var x = e.offset;
                                        x && t.translate(-x.x, -x.y)
                                    }
                                    this._draw(t, e, s, m), t.restore(), r.pop(), e.clip && !e.dontFinish && t.clip(), g || (rt.process(c, t, h, f, u.subtract(l).multiply(v)), it.release(t), e.offset = l)
                                }
                            }
                        },
                        _isUpdated: function(t) { var e = this._parent; if (e instanceof j) return e._isUpdated(t); var n = this._updateVersion === t; return !n && e && e._visible && e._isUpdated(t) && (this._updateVersion = t, n = !0), n },
                        _drawSelection: function(t, e, n, i, r) {
                            var s = this._selection,
                                a = 1 & s,
                                o = 2 & s || a && this._selectBounds,
                                h = 4 & s;
                            if (this._drawSelected || (a = !1), (a || o || h) && this._isUpdated(r)) {
                                var u, l = this.getSelectedColor(!0) || (u = this.getLayer()) && u.getSelectedColor(!0),
                                    c = e.appended(this.getGlobalMatrix(!0)),
                                    f = n / 2;
                                if (t.strokeStyle = t.fillStyle = l ? l.toCanvasStyle(t) : "#009dec", a && this._drawSelected(t, c, i), h) {
                                    var d = this.getPosition(!0),
                                        _ = d.x,
                                        g = d.y;
                                    t.beginPath(), t.arc(_, g, f, 0, 2 * Math.PI, !0), t.stroke();
                                    for (var v = [
                                            [0, -1],
                                            [1, 0],
                                            [0, 1],
                                            [-1, 0]
                                        ], p = f, m = n + 1, y = 0; y < 4; y++) {
                                        var w = v[y],
                                            x = w[0],
                                            b = w[1];
                                        t.moveTo(_ + x * p, g + b * p), t.lineTo(_ + x * m, g + b * m), t.stroke()
                                    }
                                }
                                if (o) {
                                    var C = c._transformCorners(this.getInternalBounds());
                                    t.beginPath();
                                    for (y = 0; y < 8; y++) t[y ? "lineTo" : "moveTo"](C[y], C[++y]);
                                    t.closePath(), t.stroke();
                                    for (y = 0; y < 8; y++) t.fillRect(C[y] - f, C[++y] - f, n, n)
                                }
                            }
                        },
                        _canComposite: function() { return !1 }
                    }, o.each(["down", "drag", "up", "move"], function(t) { this["removeOn" + o.capitalize(t)] = function() { var e = {}; return e[t] = !0, this.removeOn(e) } }, {
                        removeOn: function(t) {
                            for (var e in t)
                                if (t[e]) {
                                    var n = "mouse" + e,
                                        i = this._project,
                                        r = i._removeSets = i._removeSets || {};
                                    r[n] = r[n] || {}, r[n][this._id] = this
                                }
                            return this
                        }
                    })),
                    S = C.extend({
                        _class: "Group",
                        _selectBounds: !1,
                        _selectChildren: !0,
                        _serializeFields: { children: [] },
                        initialize: function(t) { this._children = [], this._namedChildren = {}, this._initialize(t) || this.addChildren(Array.isArray(t) ? t : arguments) },
                        _changed: function t(e) { t.base.call(this, e), 1026 & e && (this._clipItem = n) },
                        _getClipItem: function() {
                            var t = this._clipItem;
                            if (t === n) {
                                t = null;
                                for (var e = this._children, i = 0, r = e.length; i < r; i++)
                                    if (e[i]._clipMask) { t = e[i]; break }
                                this._clipItem = t
                            }
                            return t
                        },
                        isClipped: function() { return !!this._getClipItem() },
                        setClipped: function(t) {
                            var e = this.getFirstChild();
                            e && e.setClipMask(t)
                        },
                        _getBounds: function t(e, n) { var i = this._getClipItem(); return i ? i._getCachedBounds(e && e.appended(i._matrix), o.set({}, n, { stroke: !1 })) : t.base.call(this, e, n) },
                        _hitTestChildren: function t(e, n, i) { var r = this._getClipItem(); return (!r || r.contains(e)) && t.base.call(this, e, n, i, r) },
                        _draw: function(t, e) {
                            var n = e.clip,
                                i = !n && this._getClipItem();
                            e = e.extend({ clipItem: i, clip: !1 }), n ? (t.beginPath(), e.dontStart = e.dontFinish = !0) : i && i.draw(t, e.extend({ clip: !0 }));
                            for (var r = this._children, s = 0, a = r.length; s < a; s++) {
                                var o = r[s];
                                o !== i && o.draw(t, e)
                            }
                        }
                    }),
                    k = S.extend({ _class: "Layer", initialize: function() { S.apply(this, arguments) }, _getOwner: function() { return this._parent || null != this._index && this._project }, isInserted: function t() { return this._parent ? t.base.call(this) : null != this._index }, activate: function() { this._project._activeLayer = this }, _hitTestSelf: function() {} }),
                    I = C.extend({
                        _class: "Shape",
                        _applyMatrix: !1,
                        _canApplyMatrix: !1,
                        _canScaleStroke: !0,
                        _serializeFields: { type: null, size: null, radius: null },
                        initialize: function(t, e) { this._initialize(t, e) },
                        _equals: function(t) { return this._type === t._type && this._size.equals(t._size) && o.equals(this._radius, t._radius) },
                        copyContent: function(t) { this.setType(t._type), this.setSize(t._size), this.setRadius(t._radius) },
                        getType: function() { return this._type },
                        setType: function(t) { this._type = t },
                        getShape: "#getType",
                        setShape: "#setType",
                        getSize: function() { var t = this._size; return new p(t.width, t.height, this, "setSize") },
                        setSize: function() {
                            var t = v.read(arguments);
                            if (this._size) {
                                if (!this._size.equals(t)) {
                                    var e = this._type,
                                        n = t.width,
                                        i = t.height;
                                    "rectangle" === e ? this._radius.set(v.min(this._radius, t.divide(2))) : "circle" === e ? (n = i = (n + i) / 2, this._radius = n / 2) : "ellipse" === e && this._radius._set(n / 2, i / 2), this._size._set(n, i), this._changed(9)
                                }
                            } else this._size = t.clone()
                        },
                        getRadius: function() { var t = this._radius; return "circle" === this._type ? t : new p(t.width, t.height, this, "setRadius") },
                        setRadius: function(t) {
                            var e = this._type;
                            if ("circle" === e) {
                                if (t === this._radius) return;
                                var n = 2 * t;
                                this._radius = t, this._size._set(n, n)
                            } else if (t = v.read(arguments), this._radius) {
                                if (this._radius.equals(t)) return;
                                if (this._radius.set(t), "rectangle" === e) {
                                    n = v.max(this._size, t.multiply(2));
                                    this._size.set(n)
                                } else "ellipse" === e && this._size._set(2 * t.width, 2 * t.height)
                            } else this._radius = t.clone();
                            this._changed(9)
                        },
                        isEmpty: function() { return !1 },
                        toPath: function(t) { var e = new(B[o.capitalize(this._type)])({ center: new _, size: this._size, radius: this._radius, insert: !1 }); return e.copyAttributes(this), r.settings.applyMatrix && e.setApplyMatrix(!0), (t === n || t) && e.insertAbove(this), e },
                        toShape: "#clone",
                        _asPathItem: function() { return this.toPath(!1) },
                        _draw: function(t, e, n, i) {
                            var r = this._style,
                                s = r.hasFill(),
                                a = r.hasStroke(),
                                o = e.dontFinish || e.clip,
                                h = !i;
                            if (s || a || o) {
                                var u = this._type,
                                    l = this._radius,
                                    c = "circle" === u;
                                if (e.dontStart || t.beginPath(), h && c) t.arc(0, 0, l, 0, 2 * Math.PI, !0);
                                else {
                                    var f = c ? l : l.width,
                                        d = c ? l : l.height,
                                        _ = this._size,
                                        g = _.width,
                                        v = _.height;
                                    if (h && "rectangle" === u && 0 === f && 0 === d) t.rect(-g / 2, -v / 2, g, v);
                                    else {
                                        var p = g / 2,
                                            m = v / 2,
                                            y = .44771525016920644,
                                            w = f * y,
                                            x = d * y,
                                            b = [-p, -m + d, -p, -m + x, -p + w, -m, -p + f, -m, p - f, -m, p - w, -m, p, -m + x, p, -m + d, p, m - d, p, m - x, p - w, m, p - f, m, -p + f, m, -p + w, m, -p, m - x, -p, m - d];
                                        i && i.transform(b, b, 32), t.moveTo(b[0], b[1]), t.bezierCurveTo(b[2], b[3], b[4], b[5], b[6], b[7]), p !== f && t.lineTo(b[8], b[9]), t.bezierCurveTo(b[10], b[11], b[12], b[13], b[14], b[15]), m !== d && t.lineTo(b[16], b[17]), t.bezierCurveTo(b[18], b[19], b[20], b[21], b[22], b[23]), p !== f && t.lineTo(b[24], b[25]), t.bezierCurveTo(b[26], b[27], b[28], b[29], b[30], b[31])
                                    }
                                }
                                t.closePath()
                            }
                            o || !s && !a || (this._setStyles(t, e, n), s && (t.fill(r.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), a && t.stroke())
                        },
                        _canComposite: function() { return !(this.hasFill() && this.hasStroke()) },
                        _getBounds: function(t, e) {
                            var n = new m(this._size).setCenter(0, 0),
                                i = this._style,
                                r = e.stroke && i.hasStroke() && i.getStrokeWidth();
                            return t && (n = t._transformBounds(n)), r ? n.expand(B._getStrokePadding(r, this._getStrokeMatrix(t, e))) : n
                        }
                    }, new function() {
                        function t(t, e, n) {
                            var i = t._radius;
                            if (!i.isZero())
                                for (var r = t._size.divide(2), s = 1; s <= 4; s++) {
                                    var a = new _(s > 1 && s < 4 ? -1 : 1, s > 2 ? -1 : 1),
                                        o = a.multiply(r),
                                        h = o.subtract(a.multiply(i));
                                    if (new m(n ? o.add(a.multiply(n)) : o, h).contains(e)) return { point: h, quadrant: s }
                                }
                        }

                        function e(t, e, n, i) { var r = t.divide(e); return (!i || r.isInQuadrant(i)) && r.subtract(r.normalize()).multiply(e).divide(n).length <= 1 }
                        return {
                            _contains: function e(n) { if ("rectangle" === this._type) { var i = t(this, n); return i ? n.subtract(i.point).divide(this._radius).getLength() <= 1 : e.base.call(this, n) } return n.divide(this.size).getLength() <= .5 },
                            _hitTestSelf: function n(i, r, s, a) {
                                var o = !1,
                                    h = this._style,
                                    u = r.stroke && h.hasStroke(),
                                    l = r.fill && h.hasFill();
                                if (u || l) {
                                    var c = this._type,
                                        f = this._radius,
                                        d = u ? h.getStrokeWidth() / 2 : 0,
                                        _ = r._tolerancePadding.add(B._getStrokePadding(d, !h.getStrokeScaling() && a));
                                    if ("rectangle" === c) {
                                        var g = _.multiply(2),
                                            v = t(this, i, g);
                                        if (v) o = e(i.subtract(v.point), f, _, v.quadrant);
                                        else {
                                            var p = new m(this._size).setCenter(0, 0),
                                                y = p.expand(g),
                                                w = p.expand(g.negate());
                                            o = y._containsPoint(i) && !w._containsPoint(i)
                                        }
                                    } else o = e(i, f, _)
                                }
                                return o ? new T(u ? "stroke" : "fill", this) : n.base.apply(this, arguments)
                            }
                        }
                    }, {
                        statics: new function() {
                            function t(t, e, n, i, r) { var s = new I(o.getNamed(r), e); return s._type = t, s._size = n, s._radius = i, s }
                            return {
                                Circle: function() {
                                    var e = _.readNamed(arguments, "center"),
                                        n = o.readNamed(arguments, "radius");
                                    return t("circle", e, new v(2 * n), n, arguments)
                                },
                                Rectangle: function() {
                                    var e = m.readNamed(arguments, "rectangle"),
                                        n = v.min(v.readNamed(arguments, "radius"), e.getSize(!0).divide(2));
                                    return t("rectangle", e.getCenter(!0), e.getSize(!0), n, arguments)
                                },
                                Ellipse: function() {
                                    var e = I._readEllipse(arguments),
                                        n = e.radius;
                                    return t("ellipse", e.center, n.multiply(2), n, arguments)
                                },
                                _readEllipse: function(t) {
                                    var e, n;
                                    if (o.hasNamed(t, "radius")) e = _.readNamed(t, "center"), n = v.readNamed(t, "radius");
                                    else {
                                        var i = m.readNamed(t, "rectangle");
                                        e = i.getCenter(!0), n = i.getSize(!0).divide(2)
                                    }
                                    return { center: e, radius: n }
                                }
                            }
                        }
                    }),
                    P = C.extend({
                        _class: "Raster",
                        _applyMatrix: !1,
                        _canApplyMatrix: !1,
                        _boundsOptions: { stroke: !1, handle: !1 },
                        _serializeFields: { crossOrigin: null, source: null },
                        _prioritize: ["crossOrigin"],
                        initialize: function(t, e) {
                            if (!this._initialize(t, e !== n && _.read(arguments, 1))) {
                                var i = "string" == typeof t ? a.getElementById(t) : t;
                                i ? this.setImage(i) : this.setSource(t)
                            }
                            this._size || (this._size = new v, this._loaded = !1)
                        },
                        _equals: function(t) { return this.getSource() === t.getSource() },
                        copyContent: function(t) {
                            var e = t._image,
                                n = t._canvas;
                            if (e) this._setImage(e);
                            else if (n) {
                                var i = it.getCanvas(t._size);
                                i.getContext("2d").drawImage(n, 0, 0), this._setImage(i)
                            }
                            this._crossOrigin = t._crossOrigin
                        },
                        getSize: function() { var t = this._size; return new p(t ? t.width : 0, t ? t.height : 0, this, "setSize") },
                        setSize: function() {
                            var t = v.read(arguments);
                            if (!t.equals(this._size))
                                if (t.width > 0 && t.height > 0) {
                                    var e = this.getElement();
                                    this._setImage(it.getCanvas(t)), e && this.getContext(!0).drawImage(e, 0, 0, t.width, t.height)
                                } else this._canvas && it.release(this._canvas), this._size = t.clone()
                        },
                        getWidth: function() { return this._size ? this._size.width : 0 },
                        setWidth: function(t) { this.setSize(t, this.getHeight()) },
                        getHeight: function() { return this._size ? this._size.height : 0 },
                        setHeight: function(t) { this.setSize(this.getWidth(), t) },
                        getLoaded: function() { return this._loaded },
                        isEmpty: function() { var t = this._size; return !t || 0 === t.width && 0 === t.height },
                        getResolution: function() {
                            var t = this._matrix,
                                e = new _(0, 0).transform(t),
                                n = new _(1, 0).transform(t).subtract(e),
                                i = new _(0, 1).transform(t).subtract(e);
                            return new v(72 / n.getLength(), 72 / i.getLength())
                        },
                        getPpi: "#getResolution",
                        getImage: function() { return this._image },
                        setImage: function(t) {
                            var e = this;

                            function n(t) {
                                var n = e.getView(),
                                    i = t && t.type || "load";
                                n && e.responds(i) && (r = n._scope, e.emit(i, new X(t)))
                            }
                            this._setImage(t), this._loaded ? setTimeout(n, 0) : t && $.add(t, { load: function(i) { e._setImage(t), n(i) }, error: n })
                        },
                        _setImage: function(t) { this._canvas && it.release(this._canvas), t && t.getContext ? (this._image = null, this._canvas = t, this._loaded = !0) : (this._image = t, this._canvas = null, this._loaded = !!(t && t.src && t.complete)), this._size = new v(t ? t.naturalWidth || t.width : 0, t ? t.naturalHeight || t.height : 0), this._context = null, this._changed(521) },
                        getCanvas: function() { if (!this._canvas) { var t = it.getContext(this._size); try { this._image && t.drawImage(this._image, 0, 0), this._canvas = t.canvas } catch (e) { it.release(t) } } return this._canvas },
                        setCanvas: "#setImage",
                        getContext: function(t) { return this._context || (this._context = this.getCanvas().getContext("2d")), t && (this._image = null, this._changed(513)), this._context },
                        setContext: function(t) { this._context = t },
                        getSource: function() { var t = this._image; return t && t.src || this.toDataURL() },
                        setSource: function(t) {
                            var n = new e.Image,
                                i = this._crossOrigin;
                            i && (n.crossOrigin = i), n.src = t, this.setImage(n)
                        },
                        getCrossOrigin: function() { var t = this._image; return t && t.crossOrigin || this._crossOrigin || "" },
                        setCrossOrigin: function(t) {
                            this._crossOrigin = t;
                            var e = this._image;
                            e && (e.crossOrigin = t)
                        },
                        getElement: function() { return this._canvas || this._loaded && this._image }
                    }, {
                        beans: !1,
                        getSubCanvas: function() {
                            var t = m.read(arguments),
                                e = it.getContext(t.getSize());
                            return e.drawImage(this.getCanvas(), t.x, t.y, t.width, t.height, 0, 0, t.width, t.height), e.canvas
                        },
                        getSubRaster: function() {
                            var t = m.read(arguments),
                                e = new P(C.NO_INSERT);
                            return e._setImage(this.getSubCanvas(t)), e.translate(t.getCenter().subtract(this.getSize().divide(2))), e._matrix.prepend(this._matrix), e.insertAbove(this), e
                        },
                        toDataURL: function() {
                            var t = this._image,
                                e = t && t.src;
                            if (/^data:/.test(e)) return e;
                            var n = this.getCanvas();
                            return n ? n.toDataURL.apply(n, arguments) : null
                        },
                        drawImage: function(t) {
                            var e = _.read(arguments, 1);
                            this.getContext(!0).drawImage(t, e.x, e.y)
                        },
                        getAverageColor: function(t) {
                            var e, n;
                            if (t ? t instanceof N ? (n = t, e = t.getBounds()) : "object" === (void 0 === t ? "undefined" : i(t)) && ("width" in t ? e = new m(t) : "x" in t && (e = new m(t.x - .5, t.y - .5, 1, 1))) : e = this.getBounds(), !e) return null;
                            var r = Math.min(e.width, 32),
                                s = Math.min(e.height, 32),
                                a = P._sampleContext;
                            a ? a.clearRect(0, 0, 33, 33) : a = P._sampleContext = it.getContext(new v(32)), a.save();
                            var h = (new w).scale(r / e.width, s / e.height).translate(-e.x, -e.y);
                            h.applyToContext(a), n && n.draw(a, new o({ clip: !0, matrices: [h] })), this._matrix.applyToContext(a);
                            var u = this.getElement(),
                                l = this._size;
                            u && a.drawImage(u, -l.width / 2, -l.height / 2), a.restore();
                            for (var c = a.getImageData(.5, .5, Math.ceil(r), Math.ceil(s)).data, f = [0, 0, 0], d = 0, _ = 0, g = c.length; _ < g; _ += 4) {
                                var p = c[_ + 3];
                                d += p, p /= 255, f[0] += c[_] * p, f[1] += c[_ + 1] * p, f[2] += c[_ + 2] * p
                            }
                            for (_ = 0; _ < 3; _++) f[_] /= d;
                            return d ? V.read(f) : null
                        },
                        getPixel: function() {
                            var t = _.read(arguments),
                                e = this.getContext().getImageData(t.x, t.y, 1, 1).data;
                            return new V("rgb", [e[0] / 255, e[1] / 255, e[2] / 255], e[3] / 255)
                        },
                        setPixel: function() {
                            var t = _.read(arguments),
                                e = V.read(arguments),
                                n = e._convert("rgb"),
                                i = e._alpha,
                                r = this.getContext(!0),
                                s = r.createImageData(1, 1),
                                a = s.data;
                            a[0] = 255 * n[0], a[1] = 255 * n[1], a[2] = 255 * n[2], a[3] = null != i ? 255 * i : 255, r.putImageData(s, t.x, t.y)
                        },
                        createImageData: function() { var t = v.read(arguments); return this.getContext().createImageData(t.width, t.height) },
                        getImageData: function() { var t = m.read(arguments); return t.isEmpty() && (t = new m(this._size)), this.getContext().getImageData(t.x, t.y, t.width, t.height) },
                        setImageData: function(t) {
                            var e = _.read(arguments, 1);
                            this.getContext(!0).putImageData(t, e.x, e.y)
                        },
                        _getBounds: function(t, e) { var n = new m(this._size).setCenter(0, 0); return t ? t._transformBounds(n) : n },
                        _hitTestSelf: function(t) { if (this._contains(t)) { var e = this; return new T("pixel", e, { offset: t.add(e._size.divide(2)).round(), color: { get: function() { return e.getPixel(this.offset) } } }) } },
                        _draw: function(t) {
                            var e = this.getElement();
                            e && (t.globalAlpha = this._opacity, t.drawImage(e, -this._size.width / 2, -this._size.height / 2))
                        },
                        _canComposite: function() { return !0 }
                    }),
                    A = C.extend({ _class: "SymbolItem", _applyMatrix: !1, _canApplyMatrix: !1, _boundsOptions: { stroke: !0 }, _serializeFields: { symbol: null }, initialize: function(t, e) { this._initialize(t, e !== n && _.read(arguments, 1)) || this.setDefinition(t instanceof M ? t : new M(t)) }, _equals: function(t) { return this._definition === t._definition }, copyContent: function(t) { this.setDefinition(t._definition) }, getDefinition: function() { return this._definition }, setDefinition: function(t) { this._definition = t, this._changed(9) }, getSymbol: "#getDefinition", setSymbol: "#setDefinition", isEmpty: function() { return this._definition._item.isEmpty() }, _getBounds: function(t, e) { var n = this._definition._item; return n._getCachedBounds(n._matrix.prepended(t), e) }, _hitTestSelf: function(t, e, n) { var i = this._definition._item._hitTest(t, e, n); return i && (i.item = this), i }, _draw: function(t, e) { this._definition._item.draw(t, e) } }),
                    M = o.extend({ _class: "SymbolDefinition", initialize: function(t, e) { this._id = d.get(), this.project = r.project, t && this.setItem(t, e) }, _serialize: function(t, e) { return e.add(this, function() { return o.serialize([this._class, this._item], t, !1, e) }) }, _changed: function(t) { 8 & t && C._clearBoundsCache(this), 1 & t && this.project._changed(t) }, getItem: function() { return this._item }, setItem: function(t, e) { t._symbol && (t = t.clone()), this._item && (this._item._symbol = null), this._item = t, t.remove(), t.setSelected(!1), e || t.setPosition(new _), t._symbol = this, this._changed(9) }, getDefinition: "#getItem", setDefinition: "#setItem", place: function(t) { return new A(this, t) }, clone: function() { return new M(this._item.clone(!1)) }, equals: function(t) { return t === this || t && this._item.equals(t._item) || !1 } }),
                    T = o.extend({ _class: "HitResult", initialize: function(t, e, n) { this.type = t, this.item = e, n && this.inject(n) }, statics: { getOptions: function(t) { var e = t && o.read(t); return o.set({ type: null, tolerance: r.settings.hitTolerance, fill: !e, stroke: !e, segments: !e, handles: !1, ends: !1, position: !1, center: !1, bounds: !1, guides: !1, selected: !1 }, e) } } }),
                    z = o.extend({
                        _class: "Segment",
                        beans: !0,
                        _selection: 0,
                        initialize: function(t, e, r, s, a, o) {
                            var h, u, l, c, f = arguments.length;
                            f > 0 && (null == t || "object" === (void 0 === t ? "undefined" : i(t)) ? 1 === f && t && "point" in t ? (h = t.point, u = t.handleIn, l = t.handleOut, c = t.selection) : (h = t, u = e, l = r, c = s) : (h = [t, e], u = r !== n ? [r, s] : null, l = a !== n ? [a, o] : null)), new O(h, this, "_point"), new O(u, this, "_handleIn"), new O(l, this, "_handleOut"), c && this.setSelection(c)
                        },
                        _serialize: function(t, e) {
                            var n = this._point,
                                i = this._selection,
                                r = i || this.hasHandles() ? [n, this._handleIn, this._handleOut] : n;
                            return i && r.push(i), o.serialize(r, t, !0, e)
                        },
                        _changed: function(t) {
                            var e = this._path;
                            if (e) {
                                var n, i = e._curves,
                                    r = this._index;
                                i && (t && t !== this._point && t !== this._handleIn || !(n = r > 0 ? i[r - 1] : e._closed ? i[i.length - 1] : null) || n._changed(), t && t !== this._point && t !== this._handleOut || !(n = i[r]) || n._changed()), e._changed(25)
                            }
                        },
                        getPoint: function() { return this._point },
                        setPoint: function() { this._point.set(_.read(arguments)) },
                        getHandleIn: function() { return this._handleIn },
                        setHandleIn: function() { this._handleIn.set(_.read(arguments)) },
                        getHandleOut: function() { return this._handleOut },
                        setHandleOut: function() { this._handleOut.set(_.read(arguments)) },
                        hasHandles: function() { return !this._handleIn.isZero() || !this._handleOut.isZero() },
                        isSmooth: function() {
                            var t = this._handleIn,
                                e = this._handleOut;
                            return !t.isZero() && !e.isZero() && t.isCollinear(e)
                        },
                        clearHandles: function() { this._handleIn._set(0, 0), this._handleOut._set(0, 0) },
                        getSelection: function() { return this._selection },
                        setSelection: function(t) {
                            var e = this._selection,
                                n = this._path;
                            this._selection = t = t || 0, n && t !== e && (n._updateSelection(this, e, t), n._changed(129))
                        },
                        _changeSelection: function(t, e) {
                            var n = this._selection;
                            this.setSelection(e ? n | t : n & ~t)
                        },
                        isSelected: function() { return !!(7 & this._selection) },
                        setSelected: function(t) { this._changeSelection(7, t) },
                        getIndex: function() { return this._index !== n ? this._index : null },
                        getPath: function() { return this._path || null },
                        getCurve: function() {
                            var t = this._path,
                                e = this._index;
                            return t ? (e > 0 && !t._closed && e === t._segments.length - 1 && e--, t.getCurves()[e] || null) : null
                        },
                        getLocation: function() { var t = this.getCurve(); return t ? new E(t, this === t._segment1 ? 0 : 1) : null },
                        getNext: function() { var t = this._path && this._path._segments; return t && (t[this._index + 1] || this._path._closed && t[0]) || null },
                        smooth: function(t, e, i) {
                            var r = t || {},
                                s = r.type,
                                a = r.factor,
                                o = this.getPrevious(),
                                h = this.getNext(),
                                u = (o || this)._point,
                                l = this._point,
                                c = (h || this)._point,
                                f = u.getDistance(l),
                                d = l.getDistance(c);
                            if (s && "catmull-rom" !== s) {
                                if ("geometric" !== s) throw new Error("Smoothing method '" + s + "' not supported.");
                                if (o && h) {
                                    var g = u.subtract(c),
                                        v = a === n ? .4 : a,
                                        p = v * f / (f + d);
                                    e || this.setHandleIn(g.multiply(p)), i || this.setHandleOut(g.multiply(p - v))
                                }
                            } else {
                                var m = a === n ? .5 : a,
                                    y = Math.pow(f, m),
                                    w = y * y,
                                    x = Math.pow(d, m),
                                    b = x * x;
                                if (!e && o) {
                                    var C = 2 * b + 3 * x * y + w,
                                        S = 3 * x * (x + y);
                                    this.setHandleIn(0 !== S ? new _((b * u._x + C * l._x - w * c._x) / S - l._x, (b * u._y + C * l._y - w * c._y) / S - l._y) : new _)
                                }
                                if (!i && h) {
                                    C = 2 * w + 3 * y * x + b, S = 3 * y * (y + x);
                                    this.setHandleOut(0 !== S ? new _((w * c._x + C * l._x - b * u._x) / S - l._x, (w * c._y + C * l._y - b * u._y) / S - l._y) : new _)
                                }
                            }
                        },
                        getPrevious: function() { var t = this._path && this._path._segments; return t && (t[this._index - 1] || this._path._closed && t[t.length - 1]) || null },
                        isFirst: function() { return !this._index },
                        isLast: function() { var t = this._path; return t && this._index === t._segments.length - 1 || !1 },
                        reverse: function() {
                            var t = this._handleIn,
                                e = this._handleOut,
                                n = t.clone();
                            t.set(e), e.set(n)
                        },
                        reversed: function() { return new z(this._point, this._handleOut, this._handleIn) },
                        remove: function() { return !!this._path && !!this._path.removeSegment(this._index) },
                        clone: function() { return new z(this._point, this._handleIn, this._handleOut) },
                        equals: function(t) { return t === this || t && this._class === t._class && this._point.equals(t._point) && this._handleIn.equals(t._handleIn) && this._handleOut.equals(t._handleOut) || !1 },
                        toString: function() { var t = ["point: " + this._point]; return this._handleIn.isZero() || t.push("handleIn: " + this._handleIn), this._handleOut.isZero() || t.push("handleOut: " + this._handleOut), "{ " + t.join(", ") + " }" },
                        transform: function(t) { this._transformCoordinates(t, new Array(6), !0), this._changed() },
                        interpolate: function(t, e, n) {
                            var i = 1 - n,
                                r = n,
                                s = t._point,
                                a = e._point,
                                o = t._handleIn,
                                h = e._handleIn,
                                u = e._handleOut,
                                l = t._handleOut;
                            this._point._set(i * s._x + r * a._x, i * s._y + r * a._y, !0), this._handleIn._set(i * o._x + r * h._x, i * o._y + r * h._y, !0), this._handleOut._set(i * l._x + r * u._x, i * l._y + r * u._y, !0), this._changed()
                        },
                        _transformCoordinates: function(t, e, n) {
                            var i = this._point,
                                r = n && this._handleIn.isZero() ? null : this._handleIn,
                                s = n && this._handleOut.isZero() ? null : this._handleOut,
                                a = i._x,
                                o = i._y,
                                h = 2;
                            return e[0] = a, e[1] = o, r && (e[h++] = r._x + a, e[h++] = r._y + o), s && (e[h++] = s._x + a, e[h++] = s._y + o), t && (t._transformCoordinates(e, e, h / 2), a = e[0], o = e[1], n ? (i._x = a, i._y = o, h = 2, r && (r._x = e[h++] - a, r._y = e[h++] - o), s && (s._x = e[h++] - a, s._y = e[h++] - o)) : (r || (e[h++] = a, e[h++] = o), s || (e[h++] = a, e[h++] = o))), e
                        }
                    }),
                    O = _.extend({
                        initialize: function(t, e, i) {
                            var r, s, a;
                            if (t)
                                if ((r = t[0]) !== n) s = t[1];
                                else {
                                    var o = t;
                                    (r = o.x) === n && (r = (o = _.read(arguments)).x), s = o.y, a = o.selected
                                }
                            else r = s = 0;
                            this._x = r, this._y = s, this._owner = e, e[i] = this, a && this.setSelected(!0)
                        },
                        _set: function(t, e) { return this._x = t, this._y = e, this._owner._changed(this), this },
                        getX: function() { return this._x },
                        setX: function(t) { this._x = t, this._owner._changed(this) },
                        getY: function() { return this._y },
                        setY: function(t) { this._y = t, this._owner._changed(this) },
                        isZero: function() { var t = f.isZero; return t(this._x) && t(this._y) },
                        isSelected: function() { return !!(this._owner._selection & this._getSelection()) },
                        setSelected: function(t) { this._owner._changeSelection(this._getSelection(), t) },
                        _getSelection: function() { var t = this._owner; return this === t._point ? 1 : this === t._handleIn ? 2 : this === t._handleOut ? 4 : 0 }
                    }),
                    L = o.extend({
                        _class: "Curve",
                        beans: !0,
                        initialize: function(t, e, n, i, r, s, a, o) {
                            var h, u, l, c, f, d, _ = arguments.length;
                            3 === _ ? (this._path = t, h = e, u = n) : _ ? 1 === _ ? "segment1" in t ? (h = new z(t.segment1), u = new z(t.segment2)) : "point1" in t ? (l = t.point1, f = t.handle1, d = t.handle2, c = t.point2) : Array.isArray(t) && (l = [t[0], t[1]], c = [t[6], t[7]], f = [t[2] - t[0], t[3] - t[1]], d = [t[4] - t[6], t[5] - t[7]]) : 2 === _ ? (h = new z(t), u = new z(e)) : 4 === _ ? (l = t, f = e, d = n, c = i) : 8 === _ && (l = [t, e], c = [a, o], f = [n - t, i - e], d = [r - a, s - o]) : (h = new z, u = new z), this._segment1 = h || new z(l, null, f), this._segment2 = u || new z(c, d, null)
                        },
                        _serialize: function(t, e) { return o.serialize(this.hasHandles() ? [this.getPoint1(), this.getHandle1(), this.getHandle2(), this.getPoint2()] : [this.getPoint1(), this.getPoint2()], t, !0, e) },
                        _changed: function() { this._length = this._bounds = n },
                        clone: function() { return new L(this._segment1, this._segment2) },
                        toString: function() { var t = ["point1: " + this._segment1._point]; return this._segment1._handleOut.isZero() || t.push("handle1: " + this._segment1._handleOut), this._segment2._handleIn.isZero() || t.push("handle2: " + this._segment2._handleIn), t.push("point2: " + this._segment2._point), "{ " + t.join(", ") + " }" },
                        classify: function() { return L.classify(this.getValues()) },
                        remove: function() {
                            var t = !1;
                            if (this._path) {
                                var e = this._segment2,
                                    n = e._handleOut;
                                (t = e.remove()) && this._segment1._handleOut.set(n)
                            }
                            return t
                        },
                        getPoint1: function() { return this._segment1._point },
                        setPoint1: function() { this._segment1._point.set(_.read(arguments)) },
                        getPoint2: function() { return this._segment2._point },
                        setPoint2: function() { this._segment2._point.set(_.read(arguments)) },
                        getHandle1: function() { return this._segment1._handleOut },
                        setHandle1: function() { this._segment1._handleOut.set(_.read(arguments)) },
                        getHandle2: function() { return this._segment2._handleIn },
                        setHandle2: function() { this._segment2._handleIn.set(_.read(arguments)) },
                        getSegment1: function() { return this._segment1 },
                        getSegment2: function() { return this._segment2 },
                        getPath: function() { return this._path },
                        getIndex: function() { return this._segment1._index },
                        getNext: function() { var t = this._path && this._path._curves; return t && (t[this._segment1._index + 1] || this._path._closed && t[0]) || null },
                        getPrevious: function() { var t = this._path && this._path._curves; return t && (t[this._segment1._index - 1] || this._path._closed && t[t.length - 1]) || null },
                        isFirst: function() { return !this._segment1._index },
                        isLast: function() { var t = this._path; return t && this._segment1._index === t._curves.length - 1 || !1 },
                        isSelected: function() { return this.getPoint1().isSelected() && this.getHandle1().isSelected() && this.getHandle2().isSelected() && this.getPoint2().isSelected() },
                        setSelected: function(t) { this.getPoint1().setSelected(t), this.getHandle1().setSelected(t), this.getHandle2().setSelected(t), this.getPoint2().setSelected(t) },
                        getValues: function(t) { return L.getValues(this._segment1, this._segment2, t) },
                        getPoints: function() { for (var t = this.getValues(), e = [], n = 0; n < 8; n += 2) e.push(new _(t[n], t[n + 1])); return e }
                    }, {
                        getLength: function() { return null == this._length && (this._length = L.getLength(this.getValues(), 0, 1)), this._length },
                        getArea: function() { return L.getArea(this.getValues()) },
                        getLine: function() { return new x(this._segment1._point, this._segment2._point) },
                        getPart: function(t, e) { return new L(L.getPart(this.getValues(), t, e)) },
                        getPartLength: function(t, e) { return L.getLength(this.getValues(), t, e) },
                        divideAt: function(t) { return this.divideAtTime(t && t.curve === this ? t.time : this.getTimeAt(t)) },
                        divideAtTime: function(t, e) {
                            var n = null;
                            if (t >= 1e-8 && t <= 1 - 1e-8) {
                                var i = L.subdivide(this.getValues(), t),
                                    r = i[0],
                                    s = i[1],
                                    a = e || this.hasHandles(),
                                    o = this._segment1,
                                    h = this._segment2,
                                    u = this._path;
                                a && (o._handleOut._set(r[2] - r[0], r[3] - r[1]), h._handleIn._set(s[4] - s[6], s[5] - s[7]));
                                var l = r[6],
                                    c = r[7],
                                    f = new z(new _(l, c), a && new _(r[4] - l, r[5] - c), a && new _(s[2] - l, s[3] - c));
                                u ? (u.insert(o._index + 1, f), n = this.getNext()) : (this._segment2 = f, this._changed(), n = new L(f, h))
                            }
                            return n
                        },
                        splitAt: function(t) { var e = this._path; return e ? e.splitAt(t) : null },
                        splitAtTime: function(t) { return this.splitAt(this.getLocationAtTime(t)) },
                        divide: function(t, e) { return this.divideAtTime(t === n ? .5 : e ? t : this.getTimeAt(t)) },
                        split: function(t, e) { return this.splitAtTime(t === n ? .5 : e ? t : this.getTimeAt(t)) },
                        reversed: function() { return new L(this._segment2.reversed(), this._segment1.reversed()) },
                        clearHandles: function() { this._segment1._handleOut._set(0, 0), this._segment2._handleIn._set(0, 0) },
                        statics: {
                            getValues: function(t, e, n, i) {
                                var r = t._point,
                                    s = t._handleOut,
                                    a = e._handleIn,
                                    o = e._point,
                                    h = r.x,
                                    u = r.y,
                                    l = o.x,
                                    c = o.y,
                                    f = i ? [h, u, h, u, l, c, l, c] : [h, u, h + s._x, u + s._y, l + a._x, c + a._y, l, c];
                                return n && n._transformCoordinates(f, f, 4), f
                            },
                            subdivide: function(t, e) {
                                var i = t[0],
                                    r = t[1],
                                    s = t[2],
                                    a = t[3],
                                    o = t[4],
                                    h = t[5],
                                    u = t[6],
                                    l = t[7];
                                e === n && (e = .5);
                                var c = 1 - e,
                                    f = c * i + e * s,
                                    d = c * r + e * a,
                                    _ = c * s + e * o,
                                    g = c * a + e * h,
                                    v = c * o + e * u,
                                    p = c * h + e * l,
                                    m = c * f + e * _,
                                    y = c * d + e * g,
                                    w = c * _ + e * v,
                                    x = c * g + e * p,
                                    b = c * m + e * w,
                                    C = c * y + e * x;
                                return [
                                    [i, r, f, d, m, y, b, C],
                                    [b, C, w, x, v, p, u, l]
                                ]
                            },
                            getMonoCurves: function(t, e) {
                                var n = [],
                                    i = e ? 0 : 1,
                                    r = t[i + 0],
                                    s = t[i + 2],
                                    a = t[i + 4],
                                    o = t[i + 6];
                                if (r >= s == s >= a && s >= a == a >= o || L.isStraight(t)) n.push(t);
                                else {
                                    var h = 3 * (s - a) - r + o,
                                        u = 2 * (r + a) - 4 * s,
                                        l = s - r,
                                        c = [],
                                        d = f.solveQuadratic(h, u, l, c, 1e-8, 1 - 1e-8);
                                    if (d) {
                                        c.sort();
                                        var _ = c[0],
                                            g = L.subdivide(t, _);
                                        n.push(g[0]), d > 1 && (_ = (c[1] - _) / (1 - _), g = L.subdivide(g[1], _), n.push(g[0])), n.push(g[1])
                                    } else n.push(t)
                                }
                                return n
                            },
                            solveCubic: function(t, e, n, i, r, s) {
                                var a = t[e],
                                    o = t[e + 2],
                                    h = t[e + 4],
                                    u = t[e + 6],
                                    l = 0;
                                if (!(a < n && u < n && o < n && h < n || a > n && u > n && o > n && h > n)) {
                                    var c = 3 * (o - a),
                                        d = 3 * (h - o) - c,
                                        _ = u - a - c - d;
                                    l = f.solveCubic(_, d, c, a - n, i, r, s)
                                }
                                return l
                            },
                            getTimeOf: function(t, e) {
                                var n = new _(t[0], t[1]),
                                    i = new _(t[6], t[7]);
                                if (null === (e.isClose(n, 1e-12) ? 0 : e.isClose(i, 1e-12) ? 1 : null))
                                    for (var r = [e.x, e.y], s = [], a = 0; a < 2; a++)
                                        for (var o = L.solveCubic(t, a, r[a], s, 0, 1), h = 0; h < o; h++) { var u = s[h]; if (e.isClose(L.getPoint(t, u), 1e-7)) return u }
                                return e.isClose(n, 1e-7) ? 0 : e.isClose(i, 1e-7) ? 1 : null
                            },
                            getNearestTime: function(t, e) {
                                if (L.isStraight(t)) {
                                    var n = t[0],
                                        i = t[1],
                                        r = t[6] - n,
                                        s = t[7] - i,
                                        a = r * r + s * s;
                                    if (0 === a) return 0;
                                    var o = ((e.x - n) * r + (e.y - i) * s) / a;
                                    return o < 1e-12 ? 0 : o > .999999999999 ? 1 : L.getTimeOf(t, new _(n + o * r, i + o * s))
                                }
                                var h = 1 / 0,
                                    u = 0;

                                function l(n) { if (n >= 0 && n <= 1) { var i = e.getDistance(L.getPoint(t, n), !0); if (i < h) return h = i, u = n, !0 } }
                                for (var c = 0; c <= 100; c++) l(c / 100);
                                for (var f = .005; f > 1e-8;) l(u - f) || l(u + f) || (f /= 2);
                                return u
                            },
                            getPart: function(t, e, n) {
                                var i = e > n;
                                if (i) {
                                    var r = e;
                                    e = n, n = r
                                }
                                return e > 0 && (t = L.subdivide(t, e)[1]), n < 1 && (t = L.subdivide(t, (n - e) / (1 - e))[0]), i ? [t[6], t[7], t[4], t[5], t[2], t[3], t[0], t[1]] : t
                            },
                            isFlatEnough: function(t, e) {
                                var n = t[0],
                                    i = t[1],
                                    r = t[2],
                                    s = t[3],
                                    a = t[4],
                                    o = t[5],
                                    h = t[6],
                                    u = t[7],
                                    l = 3 * r - 2 * n - h,
                                    c = 3 * s - 2 * i - u,
                                    f = 3 * a - 2 * h - n,
                                    d = 3 * o - 2 * u - i;
                                return Math.max(l * l, f * f) + Math.max(c * c, d * d) <= 16 * e * e
                            },
                            getArea: function(t) {
                                var e = t[0],
                                    n = t[1],
                                    i = t[2],
                                    r = t[3],
                                    s = t[4],
                                    a = t[5],
                                    o = t[6],
                                    h = t[7];
                                return 3 * ((h - n) * (i + s) - (o - e) * (r + a) + r * (e - s) - i * (n - a) + h * (s + e / 3) - o * (a + n / 3)) / 20
                            },
                            getBounds: function(t) { for (var e = t.slice(0, 2), n = e.slice(), i = [0, 0], r = 0; r < 2; r++) L._addBounds(t[r], t[r + 2], t[r + 4], t[r + 6], r, 0, e, n, i); return new m(e[0], e[1], n[0] - e[0], n[1] - e[1]) },
                            _addBounds: function(t, e, n, i, r, s, a, o, h) {
                                function u(t, e) {
                                    var n = t - e,
                                        i = t + e;
                                    n < a[r] && (a[r] = n), i > o[r] && (o[r] = i)
                                }
                                s /= 2;
                                var l = a[r] - s,
                                    c = o[r] + s;
                                if (t < l || e < l || n < l || i < l || t > c || e > c || n > c || i > c)
                                    if (e < t != e < i && n < t != n < i) u(t, s), u(i, s);
                                    else {
                                        var d = 3 * (e - n) - t + i,
                                            _ = 2 * (t + n) - 4 * e,
                                            g = e - t,
                                            v = f.solveQuadratic(d, _, g, h);
                                        u(i, 0);
                                        for (var p = 0; p < v; p++) {
                                            var m = h[p],
                                                y = 1 - m;
                                            1e-8 <= m && m <= 1 - 1e-8 && u(y * y * y * t + 3 * y * y * m * e + 3 * y * m * m * n + m * m * m * i, s)
                                        }
                                    }
                            }
                        }
                    }, o.each(["getBounds", "getStrokeBounds", "getHandleBounds"], function(t) { this[t] = function() { this._bounds || (this._bounds = {}); var e = this._bounds[t]; return e || (e = this._bounds[t] = B[t]([this._segment1, this._segment2], !1, this._path)), e.clone() } }, {}), o.each({
                        isStraight: function(t, e, n, i) {
                            if (e.isZero() && n.isZero()) return !0;
                            var r = i.subtract(t);
                            if (r.isZero()) return !1;
                            if (r.isCollinear(e) && r.isCollinear(n)) {
                                var s = new x(t, i);
                                if (s.getDistance(t.add(e)) < 1e-7 && s.getDistance(i.add(n)) < 1e-7) {
                                    var a = r.dot(r),
                                        o = r.dot(e) / a,
                                        h = r.dot(n) / a;
                                    return o >= 0 && o <= 1 && h <= 0 && h >= -1
                                }
                            }
                            return !1
                        },
                        isLinear: function(t, e, n, i) { var r = i.subtract(t).divide(3); return e.equals(r) && n.negate().equals(r) }
                    }, function(t, e) {
                        this[e] = function(e) {
                            var n = this._segment1,
                                i = this._segment2;
                            return t(n._point, n._handleOut, i._handleIn, i._point, e)
                        }, this.statics[e] = function(e, n) {
                            var i = e[0],
                                r = e[1],
                                s = e[6],
                                a = e[7];
                            return t(new _(i, r), new _(e[2] - i, e[3] - r), new _(e[4] - s, e[5] - a), new _(s, a), n)
                        }
                    }, { statics: {}, hasHandles: function() { return !this._segment1._handleOut.isZero() || !this._segment2._handleIn.isZero() }, hasLength: function(t) { return (!this.getPoint1().equals(this.getPoint2()) || this.hasHandles()) && this.getLength() > (t || 0) }, isCollinear: function(t) { return t && this.isStraight() && t.isStraight() && this.getLine().isCollinear(t.getLine()) }, isHorizontal: function() { return this.isStraight() && Math.abs(this.getTangentAtTime(.5).y) < 1e-8 }, isVertical: function() { return this.isStraight() && Math.abs(this.getTangentAtTime(.5).x) < 1e-8 } }), {
                        beans: !1,
                        getLocationAt: function(t, e) { return this.getLocationAtTime(e ? t : this.getTimeAt(t)) },
                        getLocationAtTime: function(t) { return null != t && t >= 0 && t <= 1 ? new E(this, t) : null },
                        getTimeAt: function(t, e) { return L.getTimeAt(this.getValues(), t, e) },
                        getParameterAt: "#getTimeAt",
                        getOffsetAtTime: function(t) { return this.getPartLength(0, t) },
                        getLocationOf: function() { return this.getLocationAtTime(this.getTimeOf(_.read(arguments))) },
                        getOffsetOf: function() { var t = this.getLocationOf.apply(this, arguments); return t ? t.getOffset() : null },
                        getTimeOf: function() { return L.getTimeOf(this.getValues(), _.read(arguments)) },
                        getParameterOf: "#getTimeOf",
                        getNearestLocation: function() {
                            var t = _.read(arguments),
                                e = this.getValues(),
                                n = L.getNearestTime(e, t),
                                i = L.getPoint(e, n);
                            return new E(this, n, i, null, t.getDistance(i))
                        },
                        getNearestPoint: function() { var t = this.getNearestLocation.apply(this, arguments); return t ? t.getPoint() : t }
                    }, new function() { var t = ["getPoint", "getTangent", "getNormal", "getWeightedTangent", "getWeightedNormal", "getCurvature"]; return o.each(t, function(t) { this[t + "At"] = function(e, n) { var i = this.getValues(); return L[t](i, n ? e : L.getTimeAt(i, e)) }, this[t + "AtTime"] = function(e) { return L[t](this.getValues(), e) } }, { statics: { _evaluateMethods: t } }) }, new function() {
                        function t(t) {
                            var e = t[0],
                                n = t[1],
                                i = t[2],
                                r = t[3],
                                s = t[4],
                                a = t[5],
                                o = t[6],
                                h = t[7],
                                u = 9 * (i - s) + 3 * (o - e),
                                l = 6 * (e + s) - 12 * i,
                                c = 3 * (i - e),
                                f = 9 * (r - a) + 3 * (h - n),
                                d = 6 * (n + a) - 12 * r,
                                _ = 3 * (r - n);
                            return function(t) {
                                var e = (u * t + l) * t + c,
                                    n = (f * t + d) * t + _;
                                return Math.sqrt(e * e + n * n)
                            }
                        }

                        function e(t, e) { return Math.max(2, Math.min(16, Math.ceil(32 * Math.abs(e - t)))) }

                        function i(t, e, n, i) {
                            if (null == e || e < 0 || e > 1) return null;
                            var r = t[0],
                                s = t[1],
                                a = t[2],
                                o = t[3],
                                h = t[4],
                                u = t[5],
                                l = t[6],
                                c = t[7],
                                d = f.isZero;
                            d(a - r) && d(o - s) && (a = r, o = s), d(h - l) && d(u - c) && (h = l, u = c);
                            var g, v, p = 3 * (a - r),
                                m = 3 * (h - a) - p,
                                y = l - r - p - m,
                                w = 3 * (o - s),
                                x = 3 * (u - o) - w,
                                b = c - s - w - x;
                            if (0 === n) g = 0 === e ? r : 1 === e ? l : ((y * e + m) * e + p) * e + r, v = 0 === e ? s : 1 === e ? c : ((b * e + x) * e + w) * e + s;
                            else {
                                if (e < 1e-8 ? (g = p, v = w) : e > 1 - 1e-8 ? (g = 3 * (l - h), v = 3 * (c - u)) : (g = (3 * y * e + 2 * m) * e + p, v = (3 * b * e + 2 * x) * e + w), i) {
                                    0 === g && 0 === v && (e < 1e-8 || e > 1 - 1e-8) && (g = h - a, v = u - o);
                                    var C = Math.sqrt(g * g + v * v);
                                    C && (g /= C, v /= C)
                                }
                                if (3 === n) {
                                    h = 6 * y * e + 2 * m, u = 6 * b * e + 2 * x;
                                    var S = Math.pow(g * g + v * v, 1.5);
                                    g = 0 !== S ? (g * u - v * h) / S : 0, v = 0
                                }
                            }
                            return 2 === n ? new _(v, -g) : new _(g, v)
                        }
                        return {
                            statics: {
                                classify: function(t) {
                                    var e = t[0],
                                        i = t[1],
                                        r = t[2],
                                        s = t[3],
                                        a = t[4],
                                        o = t[5],
                                        h = t[6],
                                        u = t[7],
                                        l = r * (i - u) + s * (h - e) + e * u - i * h,
                                        c = 3 * (a * (s - i) + o * (e - r) + r * i - s * e),
                                        d = c - l,
                                        _ = d - l + (e * (u - o) + i * (a - h) + h * o - u * a),
                                        g = Math.sqrt(_ * _ + d * d + c * c),
                                        v = 0 !== g ? 1 / g : 0,
                                        p = f.isZero;

                                    function m(t, e, i) {
                                        var r = e !== n,
                                            s = r && e > 0 && e < 1,
                                            a = r && i > 0 && i < 1;
                                        return !r || (s || a) && ("loop" !== t || s && a) || (t = "arch", s = a = !1), { type: t, roots: s || a ? s && a ? e < i ? [e, i] : [i, e] : [s ? e : i] : null }
                                    }
                                    if (d *= v, c *= v, p(_ *= v)) return p(d) ? m(p(c) ? "line" : "quadratic") : m("serpentine", c / (3 * d));
                                    var y = 3 * d * d - 4 * _ * c;
                                    if (p(y)) return m("cusp", d / (2 * _));
                                    var w = y > 0 ? Math.sqrt(y / 3) : Math.sqrt(-y),
                                        x = 2 * _;
                                    return m(y > 0 ? "serpentine" : "loop", (d + w) / x, (d - w) / x)
                                },
                                getLength: function(i, r, s, a) {
                                    if (r === n && (r = 0), s === n && (s = 1), L.isStraight(i)) {
                                        var o = i;
                                        s < 1 && (o = L.subdivide(o, s)[0], r /= s), r > 0 && (o = L.subdivide(o, r)[1]);
                                        var h = o[6] - o[0],
                                            u = o[7] - o[1];
                                        return Math.sqrt(h * h + u * u)
                                    }
                                    return f.integrate(a || t(i), r, s, e(r, s))
                                },
                                getTimeAt: function(i, r, s) {
                                    if (s === n && (s = r < 0 ? 1 : 0), 0 === r) return s;
                                    var a = Math.abs,
                                        o = r > 0,
                                        h = o ? s : 0,
                                        u = o ? 1 : s,
                                        l = t(i),
                                        c = L.getLength(i, h, u, l),
                                        d = a(r) - c;
                                    if (a(d) < 1e-12) return o ? u : h;
                                    if (d > 1e-12) return null;
                                    var _ = r / c,
                                        g = 0;
                                    return f.findRoot(function(t) { return g += f.integrate(l, s, t, e(s, t)), s = t, g - r }, l, s + _, h, u, 32, 1e-12)
                                },
                                getPoint: function(t, e) { return i(t, e, 0, !1) },
                                getTangent: function(t, e) { return i(t, e, 1, !0) },
                                getWeightedTangent: function(t, e) { return i(t, e, 1, !1) },
                                getNormal: function(t, e) { return i(t, e, 2, !0) },
                                getWeightedNormal: function(t, e) { return i(t, e, 2, !1) },
                                getCurvature: function(t, e) { return i(t, e, 3, !1).x },
                                getPeaks: function(t) {
                                    var e = t[0],
                                        n = t[1],
                                        i = t[2],
                                        r = t[3],
                                        s = t[4],
                                        a = t[5],
                                        o = 3 * i - e - 3 * s + t[6],
                                        h = 3 * e - 6 * i + 3 * s,
                                        u = -3 * e + 3 * i,
                                        l = 3 * r - n - 3 * a + t[7],
                                        c = 3 * n - 6 * r + 3 * a,
                                        d = -3 * n + 3 * r,
                                        _ = [];
                                    return f.solveCubic(9 * (o * o + l * l), 9 * (o * h + c * l), 2 * (h * h + c * c) + 3 * (u * o + d * l), u * h + c * d, _, 1e-8, 1 - 1e-8), _.sort()
                                }
                            }
                        }
                    }, new function() {
                        function t(t, e, n, i, r, s, a) {
                            var o = !a && n.getPrevious() === r,
                                h = !a && n !== r && n.getNext() === r;
                            if (null !== i && i >= (o ? 1e-8 : 0) && i <= (h ? 1 - 1e-8 : 1) && null !== s && s >= (h ? 1e-8 : 0) && s <= (o ? 1 - 1e-8 : 1)) {
                                var u = new E(n, i, null, a),
                                    l = new E(r, s, null, a);
                                u._intersection = l, l._intersection = u, e && !e(u) || E.insert(t, u, !0)
                            }
                        }

                        function e(t, e, i, r) { return t[0][1] < i ? n(t, !0, i) : e[0][1] > r ? n(e, !1, r) : t[0][0] }

                        function n(t, e, n) {
                            for (var i = t[0][0], r = t[0][1], s = 1, a = t.length; s < a; s++) {
                                var o = t[s][0],
                                    h = t[s][1];
                                if (e ? h >= n : h <= n) return h === n ? o : i + (n - r) * (o - i) / (h - r);
                                i = o, r = h
                            }
                            return null
                        }

                        function i(t, e, n, i, r) {
                            var s = f.isZero;
                            if (s(i) && s(r)) { var a = L.getTimeOf(t, new _(e, n)); return null === a ? [] : [a] }
                            for (var o = Math.atan2(-r, i), h = Math.sin(o), u = Math.cos(o), l = [], c = [], d = 0; d < 8; d += 2) {
                                var g = t[d] - e,
                                    v = t[d + 1] - n;
                                l.push(g * u - v * h, g * h + v * u)
                            }
                            return L.solveCubic(l, 1, 0, c, 0, 1), c
                        }

                        function r(n, r, s, o, h, u) {
                            var l = Math.min,
                                c = Math.max;
                            if (c(n[0], n[2], n[4], n[6]) + 1e-12 > l(r[0], r[2], r[4], r[6]) && l(n[0], n[2], n[4], n[6]) - 1e-12 < c(r[0], r[2], r[4], r[6]) && c(n[1], n[3], n[5], n[7]) + 1e-12 > l(r[1], r[3], r[5], r[7]) && l(n[1], n[3], n[5], n[7]) - 1e-12 < c(r[1], r[3], r[5], r[7])) {
                                var f = a(n, r);
                                if (f)
                                    for (var d = 0; d < 2; d++) {
                                        var g = f[d];
                                        t(h, u, s, g[0], o, g[1], !0)
                                    } else {
                                        var v = L.isStraight(n),
                                            p = L.isStraight(r),
                                            m = v && p,
                                            y = v && !p,
                                            w = h.length;
                                        if ((m ? function(e, n, i, r, s, a) {
                                                var o = x.intersect(e[0], e[1], e[6], e[7], n[0], n[1], n[6], n[7]);
                                                o && t(s, a, i, L.getTimeOf(e, o), r, L.getTimeOf(n, o))
                                            } : v || p ? function(e, n, r, s, a, o, h) {
                                                for (var u = n[0], l = n[1], c = i(e, u, l, n[6] - u, n[7] - l), f = 0, d = c.length; f < d; f++) {
                                                    var _ = c[f],
                                                        g = L.getPoint(e, _),
                                                        v = L.getTimeOf(n, g);
                                                    null !== v && t(a, o, h ? s : r, h ? v : _, h ? r : s, h ? _ : v)
                                                }
                                            } : function n(i, r, s, a, o, h, u, l, c, f, d, _, g) {
                                                if (++c >= 4096 || ++l >= 40) return c;
                                                var v, p, m = r[0],
                                                    y = r[1],
                                                    w = r[6],
                                                    b = r[7],
                                                    C = x.getSignedDistance,
                                                    S = C(m, y, w, b, r[2], r[3]),
                                                    k = C(m, y, w, b, r[4], r[5]),
                                                    I = S * k > 0 ? .75 : 4 / 9,
                                                    P = I * Math.min(0, S, k),
                                                    A = I * Math.max(0, S, k),
                                                    M = C(m, y, w, b, i[0], i[1]),
                                                    T = C(m, y, w, b, i[2], i[3]),
                                                    z = C(m, y, w, b, i[4], i[5]),
                                                    O = C(m, y, w, b, i[6], i[7]),
                                                    E = function(t, e, n, i) {
                                                        var r, s = [0, t],
                                                            a = [1 / 3, e],
                                                            o = [2 / 3, n],
                                                            h = [1, i],
                                                            u = e - (2 * t + i) / 3,
                                                            l = n - (t + 2 * i) / 3;
                                                        if (u * l < 0) r = [
                                                            [s, a, h],
                                                            [s, o, h]
                                                        ];
                                                        else {
                                                            var c = u / l;
                                                            r = [c >= 2 ? [s, a, h] : c <= .5 ? [s, o, h] : [s, a, o, h],
                                                                [s, h]
                                                            ]
                                                        }
                                                        return (u || l) < 0 ? r.reverse() : r
                                                    }(M, T, z, O),
                                                    N = E[0],
                                                    B = E[1];
                                                if (0 === S && 0 === k && 0 === M && 0 === T && 0 === z && 0 === O || null == (v = e(N, B, P, A)) || null == (p = e(N.reverse(), B.reverse(), P, A))) return c;
                                                var j = f + (d - f) * v,
                                                    F = f + (d - f) * p;
                                                if (Math.max(g - _, F - j) < 1e-9) {
                                                    var D = (j + F) / 2,
                                                        R = (_ + g) / 2;
                                                    t(o, h, u ? a : s, u ? R : D, u ? s : a, u ? D : R)
                                                } else if (i = L.getPart(i, v, p), p - v > .8)
                                                    if (F - j > g - _) D = (j + F) / 2, c = n(r, (q = L.subdivide(i, .5))[0], a, s, o, h, !u, l, c, _, g, j, D), c = n(r, q[1], a, s, o, h, !u, l, c, _, g, D, F);
                                                    else {
                                                        var q;
                                                        R = (_ + g) / 2, c = n((q = L.subdivide(r, .5))[0], i, a, s, o, h, !u, l, c, _, R, j, F), c = n(q[1], i, a, s, o, h, !u, l, c, R, g, j, F)
                                                    }
                                                else c = g - _ >= 1e-9 ? n(r, i, a, s, o, h, !u, l, c, _, g, j, F) : n(i, r, s, a, o, h, u, l, c, j, F, _, g);
                                                return c
                                            })(y ? r : n, y ? n : r, y ? o : s, y ? s : o, h, u, y, 0, 0, 0, 1, 0, 1), !m || h.length === w)
                                            for (d = 0; d < 4; d++) {
                                                var b = d >> 1,
                                                    C = 1 & d,
                                                    S = 6 * b,
                                                    k = 6 * C,
                                                    I = new _(n[S], n[S + 1]),
                                                    P = new _(r[k], r[k + 1]);
                                                I.isClose(P, 1e-12) && t(h, u, s, b, o, C)
                                            }
                                    }
                            }
                            return h
                        }

                        function s(e, n, i, r) {
                            var s = L.classify(e);
                            if ("loop" === s.type) {
                                var a = s.roots;
                                t(i, r, n, a[0], n, a[1])
                            }
                            return i
                        }

                        function a(t, e) {
                            function n(t) {
                                var e = t[6] - t[0],
                                    n = t[7] - t[1];
                                return e * e + n * n
                            }
                            var i = Math.abs,
                                r = x.getDistance,
                                s = L.isStraight(t),
                                a = L.isStraight(e),
                                o = s && a,
                                h = n(t) < n(e),
                                u = h ? e : t,
                                l = h ? t : e,
                                c = u[0],
                                f = u[1],
                                d = u[6] - c,
                                g = u[7] - f;
                            if (r(c, f, d, g, l[0], l[1], !0) < 1e-7 && r(c, f, d, g, l[6], l[7], !0) < 1e-7) !o && r(c, f, d, g, u[2], u[3], !0) < 1e-7 && r(c, f, d, g, u[4], u[5], !0) < 1e-7 && r(c, f, d, g, l[2], l[3], !0) < 1e-7 && r(c, f, d, g, l[4], l[5], !0) < 1e-7 && (s = a = o = !0);
                            else if (o) return null;
                            if (s ^ a) return null;
                            for (var v = [t, e], p = [], m = 0; m < 4 && p.length < 2; m++) {
                                var y = 1 & m,
                                    w = 1 ^ y,
                                    b = m >> 1,
                                    C = L.getTimeOf(v[y], new _(v[w][b ? 6 : 0], v[w][b ? 7 : 1]));
                                if (null != C) {
                                    var S = y ? [b, C] : [C, b];
                                    (!p.length || i(S[0] - p[0][0]) > 1e-8 && i(S[1] - p[0][1]) > 1e-8) && p.push(S)
                                }
                                if (m > 2 && !p.length) break
                            }
                            if (2 !== p.length) p = null;
                            else if (!o) {
                                var k = L.getPart(t, p[0][0], p[1][0]),
                                    I = L.getPart(e, p[0][1], p[1][1]);
                                (i(I[2] - k[2]) > 1e-7 || i(I[3] - k[3]) > 1e-7 || i(I[4] - k[4]) > 1e-7 || i(I[5] - k[5]) > 1e-7) && (p = null)
                            }
                            return p
                        }
                        return {
                            getIntersections: function(t) {
                                var e = this.getValues(),
                                    n = t && t !== this && t.getValues();
                                return n ? r(e, n, this, t, []) : s(e, this, [])
                            },
                            statics: {
                                getOverlaps: a,
                                getIntersections: function(t, e, n, i, a, o) {
                                    var h = !e;
                                    h && (e = t);
                                    for (var u, l, c = t.length, f = e.length, d = [], _ = [], g = 0; g < f; g++) d[g] = e[g].getValues(a);
                                    for (g = 0; g < c; g++) {
                                        var v = t[g],
                                            p = h ? d[g] : v.getValues(i),
                                            m = v.getPath();
                                        m !== l && (l = m, u = [], _.push(u)), h && s(p, v, u, n);
                                        for (var y = h ? g + 1 : 0; y < f; y++) {
                                            if (o && u.length) return u;
                                            r(p, d[y], v, e[y], u, n)
                                        }
                                    }
                                    u = [], g = 0;
                                    for (var w = _.length; g < w; g++) u.push.apply(u, _[g]);
                                    return u
                                },
                                getCurveLineIntersections: i
                            }
                        }
                    }),
                    E = o.extend({
                        _class: "CurveLocation",
                        initialize: function(t, e, n, i, r) {
                            if (e >= .99999999) {
                                var s = t.getNext();
                                s && (e = 0, t = s)
                            }
                            this._setCurve(t), this._time = e, this._point = n || t.getPointAtTime(e), this._overlap = i, this._distance = r, this._intersection = this._next = this._previous = null
                        },
                        _setCurve: function(t) {
                            var e = t._path;
                            this._path = e, this._version = e ? e._version : 0, this._curve = t, this._segment = null, this._segment1 = t._segment1, this._segment2 = t._segment2
                        },
                        _setSegment: function(t) { this._setCurve(t.getCurve()), this._segment = t, this._time = t === this._segment1 ? 0 : 1, this._point = t._point.clone() },
                        getSegment: function() {
                            var t = this._segment;
                            if (!t) {
                                var e = this.getCurve(),
                                    n = this.getTime();
                                0 === n ? t = e._segment1 : 1 === n ? t = e._segment2 : null != n && (t = e.getPartLength(0, n) < e.getPartLength(n, 1) ? e._segment1 : e._segment2), this._segment = t
                            }
                            return t
                        },
                        getCurve: function() {
                            var t = this._path,
                                e = this;

                            function n(t) { var n = t && t.getCurve(); if (n && null != (e._time = n.getTimeOf(e._point))) return e._setCurve(n), n }
                            return t && t._version !== this._version && (this._time = this._offset = this._curveOffset = this._curve = null), this._curve || n(this._segment) || n(this._segment1) || n(this._segment2.getPrevious())
                        },
                        getPath: function() { var t = this.getCurve(); return t && t._path },
                        getIndex: function() { var t = this.getCurve(); return t && t.getIndex() },
                        getTime: function() {
                            var t = this.getCurve(),
                                e = this._time;
                            return t && null == e ? this._time = t.getTimeOf(this._point) : e
                        },
                        getParameter: "#getTime",
                        getPoint: function() { return this._point },
                        getOffset: function() {
                            var t = this._offset;
                            if (null == t) {
                                t = 0;
                                var e = this.getPath(),
                                    n = this.getIndex();
                                if (e && null != n)
                                    for (var i = e.getCurves(), r = 0; r < n; r++) t += i[r].getLength();
                                this._offset = t += this.getCurveOffset()
                            }
                            return t
                        },
                        getCurveOffset: function() {
                            var t = this._curveOffset;
                            if (null == t) {
                                var e = this.getCurve(),
                                    n = this.getTime();
                                this._curveOffset = t = null != n && e && e.getPartLength(0, n)
                            }
                            return t
                        },
                        getIntersection: function() { return this._intersection },
                        getDistance: function() { return this._distance },
                        divide: function() {
                            var t = this.getCurve(),
                                e = t && t.divideAtTime(this.getTime());
                            return e && this._setSegment(e._segment1), e
                        },
                        split: function() {
                            var t = this.getCurve(),
                                e = t._path,
                                n = t && t.splitAtTime(this.getTime());
                            return n && this._setSegment(e.getLastSegment()), n
                        },
                        equals: function(t, e) {
                            var n = this === t;
                            if (!n && t instanceof E) {
                                var i = this.getCurve(),
                                    r = t.getCurve(),
                                    s = i._path;
                                if (s === r._path) {
                                    var a = Math.abs,
                                        o = a(this.getOffset() - t.getOffset()),
                                        h = !e && this._intersection,
                                        u = !e && t._intersection;
                                    n = (o < 1e-7 || s && a(s.getLength() - o) < 1e-7) && (!h && !u || h && u && h.equals(u, !0))
                                }
                            }
                            return n
                        },
                        toString: function() {
                            var t = [],
                                e = this.getPoint(),
                                n = c.instance;
                            e && t.push("point: " + e);
                            var i = this.getIndex();
                            null != i && t.push("index: " + i);
                            var r = this.getTime();
                            return null != r && t.push("time: " + n.number(r)), null != this._distance && t.push("distance: " + n.number(this._distance)), "{ " + t.join(", ") + " }"
                        },
                        isTouching: function() {
                            var t = this._intersection;
                            if (t && this.getTangent().isCollinear(t.getTangent())) {
                                var e = this.getCurve(),
                                    n = t.getCurve();
                                return !(e.isStraight() && n.isStraight() && e.getLine().intersect(n.getLine()))
                            }
                            return !1
                        },
                        isCrossing: function() {
                            var t = this._intersection;
                            if (!t) return !1;
                            var e = this.getTime(),
                                n = t.getTime(),
                                i = e >= 1e-8 && e <= 1 - 1e-8,
                                r = n >= 1e-8 && n <= 1 - 1e-8;
                            if (i && r) return !this.isTouching();
                            var s = this.getCurve(),
                                a = e < 1e-8 ? s.getPrevious() : s,
                                o = t.getCurve(),
                                h = n < 1e-8 ? o.getPrevious() : o;
                            if (e > 1 - 1e-8 && (s = s.getNext()), n > 1 - 1e-8 && (o = o.getNext()), !(a && s && h && o)) return !1;
                            var u = [];

                            function l(t, e) {
                                var n = t.getValues(),
                                    i = L.classify(n).roots || L.getPeaks(n),
                                    r = i.length,
                                    s = e && r > 1 ? i[r - 1] : r > 0 ? i[0] : .5;
                                u.push(L.getLength(n, e ? s : 0, e ? 1 : s) / 2)
                            }

                            function c(t, e, n) { return e < n ? t > e && t < n : t > e || t < n }
                            i || (l(a, !0), l(s, !1)), r || (l(h, !0), l(o, !1));
                            var f = this.getPoint(),
                                d = Math.min.apply(Math, u),
                                _ = i ? s.getTangentAtTime(e) : s.getPointAt(d).subtract(f),
                                g = i ? _.negate() : a.getPointAt(-d).subtract(f),
                                v = r ? o.getTangentAtTime(n) : o.getPointAt(d).subtract(f),
                                p = r ? v.negate() : h.getPointAt(-d).subtract(f),
                                m = g.getAngle(),
                                y = _.getAngle(),
                                w = p.getAngle(),
                                x = v.getAngle();
                            return !!(i ? c(m, w, x) ^ c(y, w, x) && c(m, x, w) ^ c(y, x, w) : c(w, m, y) ^ c(x, m, y) && c(w, y, m) ^ c(x, y, m))
                        },
                        hasOverlap: function() { return !!this._overlap }
                    }, o.each(L._evaluateMethods, function(t) {
                        var e = t + "At";
                        this[t] = function() {
                            var t = this.getCurve(),
                                n = this.getTime();
                            return null != n && t && t[e](n, !0)
                        }
                    }, { preserve: !0 }), new function() {
                        function t(t, e, n) {
                            var i = t.length,
                                r = 0,
                                s = i - 1;

                            function a(n, r) { for (var s = n + r; s >= -1 && s <= i; s += r) { var a = t[(s % i + i) % i]; if (!e.getPoint().isClose(a.getPoint(), 1e-7)) break; if (e.equals(a)) return a } return null }
                            for (; r <= s;) {
                                var o, h = r + s >>> 1,
                                    u = t[h];
                                if (n && (o = e.equals(u) ? u : a(h, -1) || a(h, 1))) return e._overlap && (o._overlap = o._intersection._overlap = !0), o;
                                var l = e.getPath(),
                                    c = u.getPath();
                                (l !== c ? l._id - c._id : e.getIndex() + e.getTime() - (u.getIndex() + u.getTime())) < 0 ? s = h - 1 : r = h + 1
                            }
                            return t.splice(r, 0, e), e
                        }
                        return { statics: { insert: t, expand: function(e) { for (var n = e.slice(), i = e.length - 1; i >= 0; i--) t(n, e[i]._intersection, !1); return n } } }
                    }),
                    N = C.extend({
                        _class: "PathItem",
                        _selectBounds: !1,
                        _canScaleStroke: !0,
                        beans: !0,
                        initialize: function() {},
                        statics: {
                            create: function(t) {
                                var e, n, i;
                                if (o.isPlainObject(t) ? (n = t.segments, e = t.pathData) : Array.isArray(t) ? n = t : "string" == typeof t && (e = t), n) {
                                    var r = n[0];
                                    i = r && Array.isArray(r[0])
                                } else e && (i = (e.match(/m/gi) || []).length > 1 || /z\s*\S+/i.test(e));
                                return new(i ? j : B)(t)
                            }
                        },
                        _asPathItem: function() { return this },
                        isClockwise: function() { return this.getArea() >= 0 },
                        setClockwise: function(t) { this.isClockwise() != (t = !!t) && this.reverse() },
                        setPathData: function(t) {
                            var e, n, i, r = t && t.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/gi),
                                s = !1,
                                a = new _,
                                o = new _;

                            function h(t, n) { var i = +e[t]; return s && (i += a[n]), i }

                            function u(t) { return new _(h(t, "x"), h(t + 1, "y")) }
                            this.clear();
                            for (var l = 0, c = r && r.length; l < c; l++) {
                                var f = r[l],
                                    d = f[0],
                                    g = d.toLowerCase(),
                                    p = (e = f.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g)) && e.length;
                                switch (s = d === g, "z" !== n || /[mz]/.test(g) || this.moveTo(a), g) {
                                    case "m":
                                    case "l":
                                        for (var m = "m" === g, y = 0; y < p; y += 2) this[m ? "moveTo" : "lineTo"](a = u(y)), m && (o = a, m = !1);
                                        i = a;
                                        break;
                                    case "h":
                                    case "v":
                                        var w = "h" === g ? "x" : "y";
                                        a = a.clone();
                                        for (y = 0; y < p; y++) a[w] = h(y, w), this.lineTo(a);
                                        i = a;
                                        break;
                                    case "c":
                                        for (y = 0; y < p; y += 6) this.cubicCurveTo(u(y), i = u(y + 2), a = u(y + 4));
                                        break;
                                    case "s":
                                        for (y = 0; y < p; y += 4) this.cubicCurveTo(/[cs]/.test(n) ? a.multiply(2).subtract(i) : a, i = u(y), a = u(y + 2)), n = g;
                                        break;
                                    case "q":
                                        for (y = 0; y < p; y += 4) this.quadraticCurveTo(i = u(y), a = u(y + 2));
                                        break;
                                    case "t":
                                        for (y = 0; y < p; y += 2) this.quadraticCurveTo(i = /[qt]/.test(n) ? a.multiply(2).subtract(i) : a, a = u(y)), n = g;
                                        break;
                                    case "a":
                                        for (y = 0; y < p; y += 7) this.arcTo(a = u(y + 5), new v(+e[y], +e[y + 1]), +e[y + 2], +e[y + 4], +e[y + 3]);
                                        break;
                                    case "z":
                                        this.closePath(1e-12), a = o
                                }
                                n = g
                            }
                        },
                        _canComposite: function() { return !(this.hasFill() && this.hasStroke()) },
                        _contains: function(t) { var e = t.isInside(this.getBounds({ internal: !0, handle: !0 })) ? this._getWinding(t) : {}; return e.onPath || !!("evenodd" === this.getFillRule() ? 1 & e.windingL || 1 & e.windingR : e.winding) },
                        getIntersections: function(t, e, n, i) {
                            var r = this === t || !t,
                                s = this._matrix._orNullIfIdentity(),
                                a = r ? s : (n || t._matrix)._orNullIfIdentity();
                            return r || this.getBounds(s).intersects(t.getBounds(a), 1e-12) ? L.getIntersections(this.getCurves(), !r && t.getCurves(), e, s, a, i) : []
                        },
                        getCrossings: function(t) { return this.getIntersections(t, function(t) { return t.hasOverlap() || t.isCrossing() }) },
                        getNearestLocation: function() {
                            for (var t = _.read(arguments), e = this.getCurves(), n = 1 / 0, i = null, r = 0, s = e.length; r < s; r++) {
                                var a = e[r].getNearestLocation(t);
                                a._distance < n && (n = a._distance, i = a)
                            }
                            return i
                        },
                        getNearestPoint: function() { var t = this.getNearestLocation.apply(this, arguments); return t ? t.getPoint() : t },
                        interpolate: function(t, e, n) {
                            var i = !this._children,
                                r = i ? "_segments" : "_children",
                                s = t[r],
                                a = e[r],
                                o = this[r];
                            if (!s || !a || s.length !== a.length) throw new Error("Invalid operands in interpolate() call: " + t + ", " + e);
                            var h = o.length,
                                u = a.length;
                            if (h < u)
                                for (var l = i ? z : B, c = h; c < u; c++) this.add(new l);
                            else h > u && this[i ? "removeSegments" : "removeChildren"](u, h);
                            for (c = 0; c < u; c++) o[c].interpolate(s[c], a[c], n);
                            i && (this.setClosed(t._closed), this._changed(9))
                        },
                        compare: function(t) {
                            var e = !1;
                            if (t) {
                                var n = this._children || [this],
                                    i = t._children ? t._children.slice() : [t],
                                    r = n.length,
                                    s = i.length,
                                    a = [],
                                    o = 0;
                                e = !0;
                                for (var h = r - 1; h >= 0 && e; h--) {
                                    var u = n[h];
                                    e = !1;
                                    for (var l = s - 1; l >= 0 && !e; l--) u.compare(i[l]) && (a[l] || (a[l] = !0, o++), e = !0)
                                }
                                e = e && o === s
                            }
                            return e
                        }
                    }),
                    B = N.extend({
                        _class: "Path",
                        _serializeFields: { segments: [], closed: !1 },
                        initialize: function(t) {
                            this._closed = !1, this._segments = [], this._version = 0;
                            var e = Array.isArray(t) ? "object" === i(t[0]) ? t : arguments : !t || t.size !== n || t.x === n && t.point === n ? null : arguments;
                            e && e.length > 0 ? this.setSegments(e) : (this._curves = n, this._segmentSelection = 0, e || "string" != typeof t || (this.setPathData(t), t = null)), this._initialize(!e && t)
                        },
                        _equals: function(t) { return this._closed === t._closed && o.equals(this._segments, t._segments) },
                        copyContent: function(t) { this.setSegments(t._segments), this._closed = t._closed },
                        _changed: function t(e) {
                            if (t.base.call(this, e), 8 & e) {
                                if (this._length = this._area = n, 16 & e) this._version++;
                                else if (this._curves)
                                    for (var i = 0, r = this._curves.length; i < r; i++) this._curves[i]._changed()
                            } else 32 & e && (this._bounds = n)
                        },
                        getStyle: function() { var t = this._parent; return (t instanceof j ? t : this)._style },
                        getSegments: function() { return this._segments },
                        setSegments: function(t) {
                            var e = this.isFullySelected(),
                                i = t && t.length;
                            if (this._segments.length = 0, this._segmentSelection = 0, this._curves = n, i) { var r = t[i - 1]; "boolean" == typeof r && (this.setClosed(r), i--), this._add(z.readList(t, 0, {}, i)) }
                            e && this.setFullySelected(!0)
                        },
                        getFirstSegment: function() { return this._segments[0] },
                        getLastSegment: function() { return this._segments[this._segments.length - 1] },
                        getCurves: function() {
                            var t = this._curves,
                                e = this._segments;
                            if (!t) {
                                var n = this._countCurves();
                                t = this._curves = new Array(n);
                                for (var i = 0; i < n; i++) t[i] = new L(this, e[i], e[i + 1] || e[0])
                            }
                            return t
                        },
                        getFirstCurve: function() { return this.getCurves()[0] },
                        getLastCurve: function() { var t = this.getCurves(); return t[t.length - 1] },
                        isClosed: function() { return this._closed },
                        setClosed: function(t) {
                            if (this._closed != (t = !!t)) {
                                if (this._closed = t, this._curves) {
                                    var e = this._curves.length = this._countCurves();
                                    t && (this._curves[e - 1] = new L(this, this._segments[e - 1], this._segments[0]))
                                }
                                this._changed(25)
                            }
                        }
                    }, {
                        beans: !0,
                        getPathData: function(t, e) {
                            var n, i, r, s, a, o, h, u, l = this._segments,
                                f = l.length,
                                d = new c(e),
                                _ = new Array(6),
                                g = !0,
                                v = [];

                            function p(e, l) {
                                if (e._transformCoordinates(t, _), n = _[0], i = _[1], g) v.push("M" + d.pair(n, i)), g = !1;
                                else if (a = _[2], o = _[3], a === n && o === i && h === r && u === s) {
                                    if (!l) {
                                        var c = n - r,
                                            f = i - s;
                                        v.push(0 === c ? "v" + d.number(f) : 0 === f ? "h" + d.number(c) : "l" + d.pair(c, f))
                                    }
                                } else v.push("c" + d.pair(h - r, u - s) + " " + d.pair(a - r, o - s) + " " + d.pair(n - r, i - s));
                                r = n, s = i, h = _[4], u = _[5]
                            }
                            if (!f) return "";
                            for (var m = 0; m < f; m++) p(l[m]);
                            return this._closed && f > 0 && (p(l[0], !0), v.push("z")), v.join("")
                        },
                        isEmpty: function() { return !this._segments.length },
                        _transformContent: function(t) { for (var e = this._segments, n = new Array(6), i = 0, r = e.length; i < r; i++) e[i]._transformCoordinates(t, n, !0); return !0 },
                        _add: function(t, e) {
                            for (var n = this._segments, i = this._curves, r = t.length, s = null == e, a = (e = s ? n.length : e, 0); a < r; a++) {
                                var o = t[a];
                                o._path && (o = t[a] = o.clone()), o._path = this, o._index = e + a, o._selection && this._updateSelection(o, 0, o._selection)
                            }
                            if (s) n.push.apply(n, t);
                            else {
                                n.splice.apply(n, [e, 0].concat(t));
                                a = e + r;
                                for (var h = n.length; a < h; a++) n[a]._index = a
                            }
                            if (i) {
                                var u = this._countCurves(),
                                    l = e > 0 && e + r - 1 === u ? e - 1 : e,
                                    c = l,
                                    f = Math.min(l + r, u);
                                t._curves && (i.splice.apply(i, [l, 0].concat(t._curves)), c += t._curves.length);
                                for (a = c; a < f; a++) i.splice(a, 0, new L(this, null, null));
                                this._adjustCurves(l, f)
                            }
                            return this._changed(25), t
                        },
                        _adjustCurves: function(t, e) {
                            for (var n, i = this._segments, r = this._curves, s = t; s < e; s++)(n = r[s])._path = this, n._segment1 = i[s], n._segment2 = i[s + 1] || i[0], n._changed();
                            (n = r[this._closed && !t ? i.length - 1 : t - 1]) && (n._segment2 = i[t] || i[0], n._changed()), (n = r[e]) && (n._segment1 = i[e], n._changed())
                        },
                        _countCurves: function() { var t = this._segments.length; return !this._closed && t > 0 ? t - 1 : t },
                        add: function(t) { return arguments.length > 1 && "number" != typeof t ? this._add(z.readList(arguments)) : this._add([z.read(arguments)])[0] },
                        insert: function(t, e) { return arguments.length > 2 && "number" != typeof e ? this._add(z.readList(arguments, 1), t) : this._add([z.read(arguments, 1)], t)[0] },
                        addSegment: function() { return this._add([z.read(arguments)])[0] },
                        insertSegment: function(t) { return this._add([z.read(arguments, 1)], t)[0] },
                        addSegments: function(t) { return this._add(z.readList(t)) },
                        insertSegments: function(t, e) { return this._add(z.readList(e), t) },
                        removeSegment: function(t) { return this.removeSegments(t, t + 1)[0] || null },
                        removeSegments: function(t, e, n) {
                            t = t || 0, e = o.pick(e, this._segments.length);
                            var i = this._segments,
                                r = this._curves,
                                s = i.length,
                                a = i.splice(t, e - t),
                                h = a.length;
                            if (!h) return a;
                            for (var u = 0; u < h; u++) {
                                var l = a[u];
                                l._selection && this._updateSelection(l, l._selection, 0), l._index = l._path = null
                            }
                            u = t;
                            for (var c = i.length; u < c; u++) i[u]._index = u;
                            if (r) {
                                var f = t > 0 && e === s + (this._closed ? 1 : 0) ? t - 1 : t;
                                for (u = (r = r.splice(f, h)).length - 1; u >= 0; u--) r[u]._path = null;
                                n && (a._curves = r.slice(1)), this._adjustCurves(f, f)
                            }
                            return this._changed(25), a
                        },
                        clear: "#removeSegments",
                        hasHandles: function() {
                            for (var t = this._segments, e = 0, n = t.length; e < n; e++)
                                if (t[e].hasHandles()) return !0;
                            return !1
                        },
                        clearHandles: function() { for (var t = this._segments, e = 0, n = t.length; e < n; e++) t[e].clearHandles() },
                        getLength: function() {
                            if (null == this._length) {
                                for (var t = this.getCurves(), e = 0, n = 0, i = t.length; n < i; n++) e += t[n].getLength();
                                this._length = e
                            }
                            return this._length
                        },
                        getArea: function() {
                            var t = this._area;
                            if (null == t) {
                                var e = this._segments,
                                    n = this._closed;
                                t = 0;
                                for (var i = 0, r = e.length; i < r; i++) {
                                    var s = i + 1 === r;
                                    t += L.getArea(L.getValues(e[i], e[s ? 0 : i + 1], null, s && !n))
                                }
                                this._area = t
                            }
                            return t
                        },
                        isFullySelected: function() { var t = this._segments.length; return this.isSelected() && t > 0 && this._segmentSelection === 7 * t },
                        setFullySelected: function(t) { t && this._selectSegments(!0), this.setSelected(t) },
                        setSelection: function t(e) { 1 & e || this._selectSegments(!1), t.base.call(this, e) },
                        _selectSegments: function(t) {
                            var e = this._segments,
                                n = e.length,
                                i = t ? 7 : 0;
                            this._segmentSelection = i * n;
                            for (var r = 0; r < n; r++) e[r]._selection = i
                        },
                        _updateSelection: function(t, e, n) { t._selection = n, (this._segmentSelection += n - e) > 0 && this.setSelected(!0) },
                        divideAt: function(t) { var e, n = this.getLocationAt(t); return n && (e = n.getCurve().divideAt(n.getCurveOffset())) ? e._segment1 : null },
                        splitAt: function(t) {
                            var e = this.getLocationAt(t),
                                n = e && e.index,
                                i = e && e.time;
                            i > 1 - 1e-8 && (n++, i = 0);
                            var r = this.getCurves();
                            if (n >= 0 && n < r.length) { i >= 1e-8 && r[n++].divideAtTime(i); var s, a = this.removeSegments(n, this._segments.length, !0); return this._closed ? (this.setClosed(!1), s = this) : ((s = new B(C.NO_INSERT)).insertAbove(this), s.copyAttributes(this)), s._add(a, 0), this.addSegment(a[0]), s }
                            return null
                        },
                        split: function(t, e) { var i, r = e === n ? t : (i = this.getCurves()[t]) && i.getLocationAtTime(e); return null != r ? this.splitAt(r) : null },
                        join: function(t, e) {
                            var n = e || 0;
                            if (t && t !== this) {
                                var i = t._segments,
                                    r = this.getLastSegment(),
                                    s = t.getLastSegment();
                                if (!s) return this;
                                r && r._point.isClose(s._point, n) && t.reverse();
                                var a = t.getFirstSegment();
                                if (r && r._point.isClose(a._point, n)) r.setHandleOut(a._handleOut), this._add(i.slice(1));
                                else {
                                    var o = this.getFirstSegment();
                                    o && o._point.isClose(a._point, n) && t.reverse(), s = t.getLastSegment(), o && o._point.isClose(s._point, n) ? (o.setHandleIn(s._handleIn), this._add(i.slice(0, i.length - 1), 0)) : this._add(i.slice())
                                }
                                t._closed && this._add([i[0]]), t.remove()
                            }
                            var h = this.getFirstSegment(),
                                u = this.getLastSegment();
                            return h !== u && h._point.isClose(u._point, n) && (h.setHandleIn(u._handleIn), u.remove(), this.setClosed(!0)), this
                        },
                        reduce: function(t) { for (var e = this.getCurves(), n = t && t.simplify, i = n ? 1e-7 : 0, r = e.length - 1; r >= 0; r--) { var s = e[r];!s.hasHandles() && (!s.hasLength(i) || n && s.isCollinear(s.getNext())) && s.remove() } return this },
                        reverse: function() {
                            this._segments.reverse();
                            for (var t = 0, e = this._segments.length; t < e; t++) {
                                var n = this._segments[t],
                                    i = n._handleIn;
                                n._handleIn = n._handleOut, n._handleOut = i, n._index = t
                            }
                            this._curves = null, this._changed(9)
                        },
                        flatten: function(t) { for (var e = new F(this, t || .25, 256, !0).parts, n = e.length, i = [], r = 0; r < n; r++) i.push(new z(e[r].curve.slice(0, 2)));!this._closed && n > 0 && i.push(new z(e[n - 1].curve.slice(6))), this.setSegments(i) },
                        simplify: function(t) { var e = new D(this).fit(t || 2.5); return e && this.setSegments(e), !!e },
                        smooth: function(t) {
                            var e = this,
                                i = t || {},
                                r = i.type || "asymmetric",
                                s = this._segments,
                                a = s.length,
                                o = this._closed;

                            function h(t, n) {
                                var i = t && t.index;
                                if (null != i) {
                                    var r = t.path;
                                    if (r && r !== e) throw new Error(t._class + " " + i + " of " + r + " is not part of " + e);
                                    n && t instanceof L && i++
                                } else i = "number" == typeof t ? t : n;
                                return Math.min(i < 0 && o ? i % a : i < 0 ? i + a : i, a - 1)
                            }
                            var u = o && i.from === n && i.to === n,
                                l = h(i.from, 0),
                                c = h(i.to, a - 1);
                            if (l > c)
                                if (o) l -= a;
                                else {
                                    var f = l;
                                    l = c, c = f
                                }
                            if (/^(?:asymmetric|continuous)$/.test(r)) {
                                var d = "asymmetric" === r,
                                    _ = Math.min,
                                    g = c - l + 1,
                                    v = g - 1,
                                    p = u ? _(g, 4) : 1,
                                    m = p,
                                    y = p,
                                    w = [];
                                if (o || (m = _(1, l), y = _(1, a - c - 1)), (v += m + y) <= 1) return;
                                for (var x = 0, b = l - m; x <= v; x++, b++) w[x] = s[(b < 0 ? b + a : b) % a]._point;
                                var C = w[0]._x + 2 * w[1]._x,
                                    S = w[0]._y + 2 * w[1]._y,
                                    k = 2,
                                    I = v - 1,
                                    P = [C],
                                    A = [S],
                                    M = [k],
                                    T = [],
                                    z = [];
                                for (x = 1; x < v; x++) {
                                    var O = x < I,
                                        E = O ? 4 : d ? 2 : 7,
                                        N = O ? 4 : d ? 3 : 8,
                                        B = O ? 2 : d ? 0 : 1,
                                        j = (O ? 1 : d ? 1 : 2) / k;
                                    k = M[x] = E - j, C = P[x] = N * w[x]._x + B * w[x + 1]._x - j * C, S = A[x] = N * w[x]._y + B * w[x + 1]._y - j * S
                                }
                                T[I] = P[I] / M[I], z[I] = A[I] / M[I];
                                for (x = v - 2; x >= 0; x--) T[x] = (P[x] - T[x + 1]) / M[x], z[x] = (A[x] - z[x + 1]) / M[x];
                                T[v] = (3 * w[v]._x - T[I]) / 2, z[v] = (3 * w[v]._y - z[I]) / 2;
                                x = m;
                                var F = v - y;
                                for (b = l; x <= F; x++, b++) {
                                    var D = s[b < 0 ? b + a : b],
                                        R = D._point,
                                        q = T[x] - R._x,
                                        V = z[x] - R._y;
                                    (u || x < F) && D.setHandleOut(q, V), (u || x > m) && D.setHandleIn(-q, -V)
                                }
                            } else
                                for (x = l; x <= c; x++) s[x < 0 ? x + a : x].smooth(i, !u && x === l, !u && x === c)
                        },
                        toShape: function(t) {
                            if (!this._closed) return null;
                            var e, i, r, s, a, o, h, u = this._segments;

                            function l(t, e) {
                                var n = u[t],
                                    i = n.getNext(),
                                    r = u[e],
                                    s = r.getNext();
                                return n._handleOut.isZero() && i._handleIn.isZero() && r._handleOut.isZero() && s._handleIn.isZero() && i._point.subtract(n._point).isCollinear(s._point.subtract(r._point))
                            }

                            function c(t) {
                                var e = u[t],
                                    n = e.getNext(),
                                    i = e._handleOut,
                                    r = n._handleIn;
                                if (i.isOrthogonal(r)) {
                                    var s = e._point,
                                        a = n._point,
                                        o = new x(s, i, !0).intersect(new x(a, r, !0), !0);
                                    return o && f.isZero(i.getLength() / o.subtract(s).getLength() - .5522847498307936) && f.isZero(r.getLength() / o.subtract(a).getLength() - .5522847498307936)
                                }
                                return !1
                            }

                            function d(t, e) { return u[t]._point.getDistance(u[e]._point) }
                            if (!this.hasHandles() && 4 === u.length && l(0, 2) && l(1, 3) && (a = u[1], o = a.getPrevious(), h = a.getNext(), o._handleOut.isZero() && a._handleIn.isZero() && a._handleOut.isZero() && h._handleIn.isZero() && a._point.subtract(o._point).isOrthogonal(h._point.subtract(a._point))) ? (e = I.Rectangle, i = new v(d(0, 3), d(0, 1)), s = u[1]._point.add(u[2]._point).divide(2)) : 8 === u.length && c(0) && c(2) && c(4) && c(6) && l(1, 5) && l(3, 7) ? (e = I.Rectangle, r = (i = new v(d(1, 6), d(0, 3))).subtract(new v(d(0, 7), d(1, 2))).divide(2), s = u[3]._point.add(u[4]._point).divide(2)) : 4 === u.length && c(0) && c(1) && c(2) && c(3) && (f.isZero(d(0, 2) - d(1, 3)) ? (e = I.Circle, r = d(0, 2) / 2) : (e = I.Ellipse, r = new v(d(2, 0) / 2, d(3, 1) / 2)), s = u[1]._point), e) {
                                var _ = this.getPosition(!0),
                                    g = new e({ center: _, size: i, radius: r, insert: !1 });
                                return g.copyAttributes(this, !0), g._matrix.prepend(this._matrix), g.rotate(s.subtract(_).getAngle() + 90), (t === n || t) && g.insertAbove(this), g
                            }
                            return null
                        },
                        toPath: "#clone",
                        compare: function t(e) {
                            if (!e || e instanceof j) return t.base.call(this, e);
                            var n = this.getCurves(),
                                i = e.getCurves(),
                                r = n.length,
                                s = i.length;
                            if (!r || !s) return r == s;
                            for (var a, o, h = n[0].getValues(), u = [], l = 0, c = 0, f = 0; f < s; f++) { var d = i[f].getValues(); if (u.push(d), v = L.getOverlaps(h, d)) { a = !f && v[0][0] > 0 ? s - 1 : f, o = v[0][1]; break } }
                            var _, g = Math.abs;
                            for (d = u[a]; h && d;) {
                                var v;
                                if (v = L.getOverlaps(h, d))
                                    if (g(v[0][0] - c) < 1e-8) { 1 === (c = v[1][0]) && (h = ++l < r ? n[l].getValues() : null, c = 0); var p = v[0][1]; if (g(p - o) < 1e-8) { if (_ || (_ = [a, p]), 1 === (o = v[1][1]) && (++a >= s && (a = 0), d = u[a] || i[a].getValues(), o = 0), !h) return _[0] === a && _[1] === o; continue } }
                                break
                            }
                            return !1
                        },
                        _hitTestSelf: function(t, e, n, i) {
                            var r, s, a, o, h, u, l = this,
                                c = this.getStyle(),
                                f = this._segments,
                                d = f.length,
                                _ = this._closed,
                                g = e._tolerancePadding,
                                v = g,
                                p = e.stroke && c.hasStroke(),
                                m = e.fill && c.hasFill(),
                                y = e.curves,
                                w = p ? c.getStrokeWidth() / 2 : m && e.tolerance > 0 || y ? 0 : null;

                            function x(e, n) { return t.subtract(e).divide(n).length <= 1 }

                            function b(t, n, i) { if (!e.selected || n.isSelected()) { var r = t._point; if (n !== r && (n = n.add(r)), x(n, v)) return new T(i, l, { segment: t, point: n }) } }

                            function C(t, n) { return (n || e.segments) && b(t, t._point, "segment") || !n && e.handles && (b(t, t._handleIn, "handle-in") || b(t, t._handleOut, "handle-out")) }

                            function S(t) { o.add(t) }

                            function k(e) { var n, h = _ || e._index > 0 && e._index < d - 1; return "round" === (h ? r : s) ? x(e._point, v) : (o = new B({ internal: !0, closed: !0 }), h ? e.isSmooth() || B._addBevelJoin(e, r, w, a, null, i, S, !0) : "square" === s && B._addSquareCap(e, s, w, null, i, S, !0), o.isEmpty() ? void 0 : o.contains(t) || (n = o.getNearestLocation(t)) && x(n.getPoint(), g)) }
                            if (null !== w && (w > 0 ? (r = c.getStrokeJoin(), s = c.getStrokeCap(), a = c.getMiterLimit(), v = v.add(B._getStrokePadding(w, i))) : r = s = "round"), !e.ends || e.segments || _) {
                                if (e.segments || e.handles)
                                    for (var I = 0; I < d; I++)
                                        if (u = C(f[I])) return u
                            } else if (u = C(f[0], !0) || C(f[d - 1], !0)) return u;
                            if (null !== w) {
                                if (h = this.getNearestLocation(t)) {
                                    var P = h.getTime();
                                    0 === P || 1 === P && d > 1 ? k(h.getSegment()) || (h = null) : x(h.getPoint(), v) || (h = null)
                                }
                                if (!h && "miter" === r && d > 1)
                                    for (I = 0; I < d; I++) { var A = f[I]; if (t.getDistance(A._point) <= a * w && k(A)) { h = A.getLocation(); break } }
                            }
                            return !h && m && this._contains(t) || h && !p && !y ? new T("fill", this) : h ? new T(p ? "stroke" : "curve", this, { location: h, point: h.getPoint() }) : null
                        }
                    }, o.each(L._evaluateMethods, function(t) { this[t + "At"] = function(e) { var n = this.getLocationAt(e); return n && n[t]() } }, {
                        beans: !1,
                        getLocationOf: function() { for (var t = _.read(arguments), e = this.getCurves(), n = 0, i = e.length; n < i; n++) { var r = e[n].getLocationOf(t); if (r) return r } return null },
                        getOffsetOf: function() { var t = this.getLocationOf.apply(this, arguments); return t ? t.getOffset() : null },
                        getLocationAt: function(t) {
                            if ("number" == typeof t) {
                                for (var e = this.getCurves(), n = 0, i = 0, r = e.length; i < r; i++) {
                                    var s = n,
                                        a = e[i];
                                    if ((n += a.getLength()) > t) return a.getLocationAt(t - s)
                                }
                                if (e.length > 0 && t <= this.getLength()) return new E(e[e.length - 1], 1)
                            } else if (t && t.getPath && t.getPath() === this) return t;
                            return null
                        }
                    }), new function() {
                        function t(t, e, n) {
                            var i, r, s, a, o, h, u, l, c = e._segments,
                                f = c.length,
                                d = new Array(6),
                                _ = !0;

                            function g(e) {
                                if (n) e._transformCoordinates(n, d), i = d[0], r = d[1];
                                else {
                                    var c = e._point;
                                    i = c._x, r = c._y
                                }
                                if (_) t.moveTo(i, r), _ = !1;
                                else {
                                    if (n) o = d[2], h = d[3];
                                    else {
                                        var f = e._handleIn;
                                        o = i + f._x, h = r + f._y
                                    }
                                    o === i && h === r && u === s && l === a ? t.lineTo(i, r) : t.bezierCurveTo(u, l, o, h, i, r)
                                }
                                if (s = i, a = r, n) u = d[4], l = d[5];
                                else {
                                    f = e._handleOut;
                                    u = s + f._x, l = a + f._y
                                }
                            }
                            for (var v = 0; v < f; v++) g(c[v]);
                            e._closed && f > 0 && g(c[0])
                        }
                        return {
                            _draw: function(e, n, i, s) {
                                var a = n.dontStart,
                                    o = n.dontFinish || n.clip,
                                    h = this.getStyle(),
                                    u = h.hasFill(),
                                    l = h.hasStroke(),
                                    c = h.getDashArray(),
                                    f = !r.support.nativeDash && l && c && c.length;

                                function d(t) { return c[(t % f + f) % f] }
                                if (a || e.beginPath(), (u || l && !f || o) && (t(e, this, s), this._closed && e.closePath()), !o && (u || l) && (this._setStyles(e, n, i), u && (e.fill(h.getFillRule()), e.shadowColor = "rgba(0,0,0,0)"), l)) {
                                    if (f) {
                                        a || e.beginPath();
                                        var _, g = new F(this, .25, 32, !1, s),
                                            v = g.length,
                                            p = -h.getDashOffset(),
                                            m = 0;
                                        for (p %= v; p > 0;) p -= d(m--) + d(m--);
                                        for (; p < v;) _ = p + d(m++), (p > 0 || _ > 0) && g.drawPart(e, Math.max(p, 0), Math.max(_, 0)), p = _ + d(m++)
                                    }
                                    e.stroke()
                                }
                            },
                            _drawSelected: function(e, n) {
                                e.beginPath(), t(e, this, n), e.stroke(),
                                    function(t, e, n, i) {
                                        var r, s, a = i / 2,
                                            o = new Array(6);

                                        function h(e) {
                                            var n = o[e],
                                                i = o[e + 1];
                                            r == n && s == i || (t.beginPath(), t.moveTo(r, s), t.lineTo(n, i), t.stroke(), t.beginPath(), t.arc(n, i, a, 0, 2 * Math.PI, !0), t.fill())
                                        }
                                        for (var u = 0, l = e.length; u < l; u++) {
                                            var c = e[u],
                                                f = c._selection;
                                            if (c._transformCoordinates(n, o), r = o[0], s = o[1], 2 & f && h(2), 4 & f && h(4), t.fillRect(r - a, s - a, i, i), !(1 & f)) {
                                                var d = t.fillStyle;
                                                t.fillStyle = "#ffffff", t.fillRect(r - a + 1, s - a + 1, i - 2, i - 2), t.fillStyle = d
                                            }
                                        }
                                    }(e, this._segments, n, r.settings.handleSize)
                            }
                        }
                    }, new function() {
                        function t(t) { var e = t._segments; if (!e.length) throw new Error("Use a moveTo() command first"); return e[e.length - 1] }
                        return {
                            moveTo: function() {
                                var t = this._segments;
                                1 === t.length && this.removeSegment(0), t.length || this._add([new z(_.read(arguments))])
                            },
                            moveBy: function() { throw new Error("moveBy() is unsupported on Path items.") },
                            lineTo: function() { this._add([new z(_.read(arguments))]) },
                            cubicCurveTo: function() {
                                var e = _.read(arguments),
                                    n = _.read(arguments),
                                    i = _.read(arguments),
                                    r = t(this);
                                r.setHandleOut(e.subtract(r._point)), this._add([new z(i, n.subtract(i))])
                            },
                            quadraticCurveTo: function() {
                                var e = _.read(arguments),
                                    n = _.read(arguments),
                                    i = t(this)._point;
                                this.cubicCurveTo(e.add(i.subtract(e).multiply(1 / 3)), e.add(n.subtract(e).multiply(1 / 3)), n)
                            },
                            curveTo: function() {
                                var e = _.read(arguments),
                                    n = _.read(arguments),
                                    i = o.pick(o.read(arguments), .5),
                                    r = 1 - i,
                                    s = t(this)._point,
                                    a = e.subtract(s.multiply(r * r)).subtract(n.multiply(i * i)).divide(2 * i * r);
                                if (a.isNaN()) throw new Error("Cannot put a curve through points with parameter = " + i);
                                this.quadraticCurveTo(a, n)
                            },
                            arcTo: function() {
                                var e, n, i, r, s = Math.abs,
                                    a = Math.sqrt,
                                    h = t(this),
                                    u = h._point,
                                    l = _.read(arguments),
                                    c = o.peek(arguments);
                                if ("boolean" == typeof(y = o.pick(c, !0))) var d = (C = u.add(l).divide(2)).add(C.subtract(u).rotate(y ? -90 : 90));
                                else if (o.remain(arguments) <= 2) d = l, l = _.read(arguments);
                                else {
                                    var g = v.read(arguments),
                                        p = f.isZero;
                                    if (p(g.width) || p(g.height)) return this.lineTo(l);
                                    var m = o.read(arguments),
                                        y = !!o.read(arguments),
                                        b = !!o.read(arguments),
                                        C = u.add(l).divide(2),
                                        S = (W = u.subtract(C).rotate(-m)).x,
                                        k = W.y,
                                        I = s(g.width),
                                        P = s(g.height),
                                        A = I * I,
                                        M = P * P,
                                        T = S * S,
                                        O = k * k,
                                        L = a(T / A + O / M);
                                    if (L > 1 && (A = (I *= L) * I, M = (P *= L) * P), s(L = (A * M - A * O - M * T) / (A * O + M * T)) < 1e-12 && (L = 0), L < 0) throw new Error("Cannot create an arc with the given arguments");
                                    e = new _(I * k / P, -P * S / I).multiply((b === y ? -1 : 1) * a(L)).rotate(m).add(C), n = (i = (r = (new w).translate(e).rotate(m).scale(I, P))._inverseTransform(u)).getDirectedAngle(r._inverseTransform(l)), !y && n > 0 ? n -= 360 : y && n < 0 && (n += 360)
                                }
                                if (d) {
                                    var E = new x(u.add(d).divide(2), d.subtract(u).rotate(90), !0),
                                        N = new x(d.add(l).divide(2), l.subtract(d).rotate(90), !0),
                                        B = new x(u, l),
                                        j = B.getSide(d);
                                    if (!(e = E.intersect(N, !0))) { if (!j) return this.lineTo(l); throw new Error("Cannot create an arc with the given arguments") }
                                    n = (i = u.subtract(e)).getDirectedAngle(l.subtract(e));
                                    var F = B.getSide(e);
                                    0 === F ? n = j * s(n) : j === F && (n += n < 0 ? 360 : -360)
                                }
                                for (var D = s(n), R = D >= 360 ? 4 : Math.ceil((D - 1e-7) / 90), q = n / R, V = q * Math.PI / 360, U = 4 / 3 * Math.sin(V) / (1 + Math.cos(V)), H = [], Z = 0; Z <= R; Z++) {
                                    var W = l,
                                        $ = null;
                                    if (Z < R && ($ = i.rotate(90).multiply(U), r ? (W = r._transformPoint(i), $ = r._transformPoint(i.add($)).subtract(W)) : W = e.add(i)), Z) {
                                        var G = i.rotate(-90).multiply(U);
                                        r && (G = r._transformPoint(i.add(G)).subtract(W)), H.push(new z(W, G, $))
                                    } else h.setHandleOut($);
                                    i = i.rotate(q)
                                }
                                this._add(H)
                            },
                            lineBy: function() {
                                var e = _.read(arguments),
                                    n = t(this)._point;
                                this.lineTo(n.add(e))
                            },
                            curveBy: function() {
                                var e = _.read(arguments),
                                    n = _.read(arguments),
                                    i = o.read(arguments),
                                    r = t(this)._point;
                                this.curveTo(r.add(e), r.add(n), i)
                            },
                            cubicCurveBy: function() {
                                var e = _.read(arguments),
                                    n = _.read(arguments),
                                    i = _.read(arguments),
                                    r = t(this)._point;
                                this.cubicCurveTo(r.add(e), r.add(n), r.add(i))
                            },
                            quadraticCurveBy: function() {
                                var e = _.read(arguments),
                                    n = _.read(arguments),
                                    i = t(this)._point;
                                this.quadraticCurveTo(i.add(e), i.add(n))
                            },
                            arcBy: function() {
                                var e = t(this)._point,
                                    n = e.add(_.read(arguments)),
                                    i = o.pick(o.peek(arguments), !0);
                                "boolean" == typeof i ? this.arcTo(n, i) : this.arcTo(n, e.add(_.read(arguments)))
                            },
                            closePath: function(t) { this.setClosed(!0), this.join(this, t) }
                        }
                    }, {
                        _getBounds: function(t, e) { var n = e.handle ? "getHandleBounds" : e.stroke ? "getStrokeBounds" : "getBounds"; return B[n](this._segments, this._closed, this, t, e) },
                        statics: {
                            getBounds: function(t, e, n, i, r, s) {
                                var a = t[0];
                                if (!a) return new m;
                                var o = new Array(6),
                                    h = a._transformCoordinates(i, new Array(6)),
                                    u = h.slice(0, 2),
                                    l = u.slice(),
                                    c = new Array(2);

                                function f(t) {
                                    t._transformCoordinates(i, o);
                                    for (var e = 0; e < 2; e++) L._addBounds(h[e], h[e + 4], o[e + 2], o[e], e, s ? s[e] : 0, u, l, c);
                                    var n = h;
                                    h = o, o = n
                                }
                                for (var d = 1, _ = t.length; d < _; d++) f(t[d]);
                                return e && f(a), new m(u[0], u[1], l[0] - u[0], l[1] - u[1])
                            },
                            getStrokeBounds: function(t, e, n, i, r) {
                                var s = n.getStyle(),
                                    a = s.hasStroke(),
                                    o = s.getStrokeWidth(),
                                    h = a && n._getStrokeMatrix(i, r),
                                    u = a && B._getStrokePadding(o, h),
                                    l = B.getBounds(t, e, n, i, r, u);
                                if (!a) return l;
                                var c = o / 2,
                                    f = s.getStrokeJoin(),
                                    d = s.getStrokeCap(),
                                    _ = s.getMiterLimit(),
                                    g = new m(new v(u));

                                function p(t) { l = l.include(t) }

                                function y(t) { l = l.unite(g.setCenter(t._point.transform(i))) }

                                function w(t, e) { "round" === e || t.isSmooth() ? y(t) : B._addBevelJoin(t, e, c, _, i, h, p) }

                                function x(t, e) { "round" === e ? y(t) : B._addSquareCap(t, e, c, i, h, p) }
                                for (var b = t.length - (e ? 0 : 1), C = 1; C < b; C++) w(t[C], f);
                                return e ? w(t[0], f) : b > 0 && (x(t[0], d), x(t[t.length - 1], d)), l
                            },
                            _getStrokePadding: function(t, e) {
                                if (!e) return [t, t];
                                var n = new _(t, 0).transform(e),
                                    i = new _(0, t).transform(e),
                                    r = n.getAngleInRadians(),
                                    s = n.getLength(),
                                    a = i.getLength(),
                                    o = Math.sin(r),
                                    h = Math.cos(r),
                                    u = Math.tan(r),
                                    l = Math.atan2(a * u, s),
                                    c = Math.atan2(a, u * s);
                                return [Math.abs(s * Math.cos(l) * h + a * Math.sin(l) * o), Math.abs(a * Math.sin(c) * h + s * Math.cos(c) * o)]
                            },
                            _addBevelJoin: function(t, e, n, i, r, s, a, o) {
                                var h = t.getCurve(),
                                    u = h.getPrevious(),
                                    l = h.getPoint1().transform(r),
                                    c = u.getNormalAtTime(1).multiply(n).transform(s),
                                    f = h.getNormalAtTime(0).multiply(n).transform(s);
                                if (c.getDirectedAngle(f) < 0 && (c = c.negate(), f = f.negate()), o && a(l), a(l.add(c)), "miter" === e) {
                                    var d = new x(l.add(c), new _(-c.y, c.x), !0).intersect(new x(l.add(f), new _(-f.y, f.x), !0), !0);
                                    d && l.getDistance(d) <= i * n && a(d)
                                }
                                a(l.add(f))
                            },
                            _addSquareCap: function(t, e, n, i, r, s, a) {
                                var o = t._point.transform(i),
                                    h = t.getLocation(),
                                    u = h.getNormal().multiply(0 === h.getTime() ? n : -n).transform(r);
                                "square" === e && (a && (s(o.subtract(u)), s(o.add(u))), o = o.add(u.rotate(-90))), s(o.add(u)), s(o.subtract(u))
                            },
                            getHandleBounds: function(t, e, n, i, r) {
                                var s, a, o = n.getStyle();
                                if (r.stroke && o.hasStroke()) {
                                    var h = n._getStrokeMatrix(i, r),
                                        u = o.getStrokeWidth() / 2,
                                        l = u;
                                    "miter" === o.getStrokeJoin() && (l = u * o.getMiterLimit()), "square" === o.getStrokeCap() && (l = Math.max(l, u * Math.SQRT2)), s = B._getStrokePadding(u, h), a = B._getStrokePadding(l, h)
                                }
                                for (var c = new Array(6), f = 1 / 0, d = -f, _ = f, g = d, v = 0, p = t.length; v < p; v++) {
                                    t[v]._transformCoordinates(i, c);
                                    for (var y = 0; y < 6; y += 2) {
                                        var w = y ? s : a,
                                            x = w ? w[0] : 0,
                                            b = w ? w[1] : 0,
                                            C = c[y],
                                            S = c[y + 1],
                                            k = C - x,
                                            I = C + x,
                                            P = S - b,
                                            A = S + b;
                                        k < f && (f = k), I > d && (d = I), P < _ && (_ = P), A > g && (g = A)
                                    }
                                }
                                return new m(f, _, d - f, g - _)
                            }
                        }
                    });
                B.inject({
                    statics: new function() {
                        var t = .5522847498307936,
                            e = [new z([-1, 0], [0, t], [0, -t]), new z([0, -1], [-t, 0], [t, 0]), new z([1, 0], [0, -t], [0, t]), new z([0, 1], [t, 0], [-t, 0])];

                        function n(t, e, n) {
                            var i = o.getNamed(n),
                                r = new B(i && 0 == i.insert && C.NO_INSERT);
                            return r._add(t), r._closed = e, r.set(i, { insert: !0 })
                        }

                        function i(t, i, r) {
                            for (var s = new Array(4), a = 0; a < 4; a++) {
                                var o = e[a];
                                s[a] = new z(o._point.multiply(i).add(t), o._handleIn.multiply(i), o._handleOut.multiply(i))
                            }
                            return n(s, !0, r)
                        }
                        return {
                            Line: function() { return n([new z(_.readNamed(arguments, "from")), new z(_.readNamed(arguments, "to"))], !1, arguments) },
                            Circle: function() {
                                var t = _.readNamed(arguments, "center"),
                                    e = o.readNamed(arguments, "radius");
                                return i(t, new v(e), arguments)
                            },
                            Rectangle: function() {
                                var e, i = m.readNamed(arguments, "rectangle"),
                                    r = v.readNamed(arguments, "radius", 0, { readNull: !0 }),
                                    s = i.getBottomLeft(!0),
                                    a = i.getTopLeft(!0),
                                    o = i.getTopRight(!0),
                                    h = i.getBottomRight(!0);
                                if (!r || r.isZero()) e = [new z(s), new z(a), new z(o), new z(h)];
                                else {
                                    var u = (r = v.min(r, i.getSize(!0).divide(2))).width,
                                        l = r.height,
                                        c = u * t,
                                        f = l * t;
                                    e = [new z(s.add(u, 0), null, [-c, 0]), new z(s.subtract(0, l), [0, f]), new z(a.add(0, l), null, [0, -f]), new z(a.add(u, 0), [-c, 0], null), new z(o.subtract(u, 0), null, [c, 0]), new z(o.add(0, l), [0, -f], null), new z(h.subtract(0, l), null, [0, f]), new z(h.subtract(u, 0), [c, 0])]
                                }
                                return n(e, !0, arguments)
                            },
                            RoundRectangle: "#Rectangle",
                            Ellipse: function() { var t = I._readEllipse(arguments); return i(t.center, t.radius, arguments) },
                            Oval: "#Ellipse",
                            Arc: function() {
                                var t = _.readNamed(arguments, "from"),
                                    e = _.readNamed(arguments, "through"),
                                    n = _.readNamed(arguments, "to"),
                                    i = o.getNamed(arguments),
                                    r = new B(i && 0 == i.insert && C.NO_INSERT);
                                return r.moveTo(t), r.arcTo(e, n), r.set(i)
                            },
                            RegularPolygon: function() { for (var t = _.readNamed(arguments, "center"), e = o.readNamed(arguments, "sides"), i = o.readNamed(arguments, "radius"), r = 360 / e, s = e % 3 == 0, a = new _(0, s ? -i : i), h = s ? -1 : .5, u = new Array(e), l = 0; l < e; l++) u[l] = new z(t.add(a.rotate((l + h) * r))); return n(u, !0, arguments) },
                            Star: function() { for (var t = _.readNamed(arguments, "center"), e = 2 * o.readNamed(arguments, "points"), i = o.readNamed(arguments, "radius1"), r = o.readNamed(arguments, "radius2"), s = 360 / e, a = new _(0, -1), h = new Array(e), u = 0; u < e; u++) h[u] = new z(t.add(a.rotate(s * u).multiply(u % 2 ? r : i))); return n(h, !0, arguments) }
                        }
                    }
                });
                var j = N.extend({
                    _class: "CompoundPath",
                    _serializeFields: { children: [] },
                    beans: !0,
                    initialize: function(t) { this._children = [], this._namedChildren = {}, this._initialize(t) || ("string" == typeof t ? this.setPathData(t) : this.addChildren(Array.isArray(t) ? t : arguments)) },
                    insertChildren: function t(e, n) {
                        var i = n,
                            r = i[0];
                        r && "number" == typeof r[0] && (i = [i]);
                        for (var s = n.length - 1; s >= 0; s--) {
                            var a = i[s];
                            i !== n || a instanceof B || (i = o.slice(i)), Array.isArray(a) ? i[s] = new B({ segments: a, insert: !1 }) : a instanceof j && (i.splice.apply(i, [s, 1].concat(a.removeChildren())), a.remove())
                        }
                        return t.base.call(this, e, i)
                    },
                    reduce: function t(e) {
                        for (var n = this._children, i = n.length - 1; i >= 0; i--) {
                            var r;
                            (r = n[i].reduce(e)).isEmpty() && r.remove()
                        }
                        return n.length ? t.base.call(this) : ((r = new B(C.NO_INSERT)).copyAttributes(this), r.insertAbove(this), this.remove(), r)
                    },
                    isClosed: function() {
                        for (var t = this._children, e = 0, n = t.length; e < n; e++)
                            if (!t[e]._closed) return !1;
                        return !0
                    },
                    setClosed: function(t) { for (var e = this._children, n = 0, i = e.length; n < i; n++) e[n].setClosed(t) },
                    getFirstSegment: function() { var t = this.getFirstChild(); return t && t.getFirstSegment() },
                    getLastSegment: function() { var t = this.getLastChild(); return t && t.getLastSegment() },
                    getCurves: function() { for (var t = this._children, e = [], n = 0, i = t.length; n < i; n++) e.push.apply(e, t[n].getCurves()); return e },
                    getFirstCurve: function() { var t = this.getFirstChild(); return t && t.getFirstCurve() },
                    getLastCurve: function() { var t = this.getLastChild(); return t && t.getLastCurve() },
                    getArea: function() { for (var t = this._children, e = 0, n = 0, i = t.length; n < i; n++) e += t[n].getArea(); return e },
                    getLength: function() { for (var t = this._children, e = 0, n = 0, i = t.length; n < i; n++) e += t[n].getLength(); return e },
                    getPathData: function(t, e) {
                        for (var n = this._children, i = [], r = 0, s = n.length; r < s; r++) {
                            var a = n[r],
                                o = a._matrix;
                            i.push(a.getPathData(t && !o.isIdentity() ? t.appended(o) : t, e))
                        }
                        return i.join("")
                    },
                    _hitTestChildren: function t(e, n, i) { return t.base.call(this, e, n.class === B || "path" === n.type ? n : o.set({}, n, { fill: !1 }), i) },
                    _draw: function(t, e, n, i) {
                        var r = this._children;
                        if (r.length) {
                            e = e.extend({ dontStart: !0, dontFinish: !0 }), t.beginPath();
                            for (var s = 0, a = r.length; s < a; s++) r[s].draw(t, e, i);
                            if (!e.clip) {
                                this._setStyles(t, e, n);
                                var o = this._style;
                                o.hasFill() && (t.fill(o.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), o.hasStroke() && t.stroke()
                            }
                        }
                    },
                    _drawSelected: function(t, e, n) {
                        for (var i = this._children, r = 0, s = i.length; r < s; r++) {
                            var a = i[r],
                                o = a._matrix;
                            n[a._id] || a._drawSelected(t, o.isIdentity() ? e : e.appended(o))
                        }
                    }
                }, new function() {
                    function t(t, e) { var n = t._children; if (e && !n.length) throw new Error("Use a moveTo() command first"); return n[n.length - 1] }
                    return o.each(["lineTo", "cubicCurveTo", "quadraticCurveTo", "curveTo", "arcTo", "lineBy", "cubicCurveBy", "quadraticCurveBy", "curveBy", "arcBy"], function(e) {
                        this[e] = function() {
                            var n = t(this, !0);
                            n[e].apply(n, arguments)
                        }
                    }, {
                        moveTo: function() {
                            var e = t(this),
                                n = e && e.isEmpty() ? e : new B(C.NO_INSERT);
                            n !== e && this.addChild(n), n.moveTo.apply(n, arguments)
                        },
                        moveBy: function() {
                            var e = t(this, !0),
                                n = e && e.getLastSegment(),
                                i = _.read(arguments);
                            this.moveTo(n ? i.add(n._point) : i)
                        },
                        closePath: function(e) { t(this, !0).closePath(e) }
                    })
                }, o.each(["reverse", "flatten", "simplify", "smooth"], function(t) { this[t] = function(e) { for (var n, i = this._children, r = 0, s = i.length; r < s; r++) n = i[r][t](e) || n; return n } }, {}));
                N.inject(new function() {
                    var t = Math.min,
                        e = Math.max,
                        i = Math.abs,
                        r = { unite: { 1: !0, 2: !0 }, intersect: { 2: !0 }, subtract: { 1: !0 }, exclude: { 1: !0, "-1": !0 } };

                    function s(t, e) { var n = t.clone(!1).reduce({ simplify: !0 }).transform(null, !0, !0); return e ? n.resolveCrossings().reorient("nonzero" === n.getFillRule(), !0) : n }

                    function a(t, e, n, i, r) { var s = new j(C.NO_INSERT); return s.addChildren(t, !0), s = s.reduce({ simplify: e }), r && 0 == r.insert || s.insertAbove(i && n.isSibling(i) && n.getIndex() < i.getIndex() ? i : n), s.copyAttributes(n, !0), s }

                    function h(t, e, n, i) {
                        if (i && (0 == i.trace || i.stroke) && /^(subtract|intersect)$/.test(n)) return u(t, e, n);
                        var o = s(t, !0),
                            h = e && t !== e && s(e, !0),
                            l = r[n];
                        l[n] = !0, h && (l.subtract || l.exclude) ^ h.isClockwise() ^ o.isClockwise() && h.reverse();
                        var c, f = _(E.expand(o.getCrossings(h))),
                            g = o._children || [o],
                            m = h && (h._children || [h]),
                            y = [],
                            w = [];

                        function x(t) {
                            for (var e = 0, n = t.length; e < n; e++) {
                                var i = t[e];
                                y.push.apply(y, i._segments), w.push.apply(w, i.getCurves()), i._overlapsOnly = !0
                            }
                        }
                        if (f.length) {
                            x(g), m && x(m);
                            for (var b = 0, C = f.length; b < C; b++) v(f[b]._segment, o, h, w, l);
                            for (b = 0, C = y.length; b < C; b++) {
                                var S = y[b],
                                    k = S._intersection;
                                S._winding || v(S, o, h, w, l), k && k._overlap || (S._path._overlapsOnly = !1)
                            }
                            c = p(y, l)
                        } else c = d(m ? g.concat(m) : g.slice(), function(t) { return !!l[t] });
                        return a(c, !0, t, e, i)
                    }

                    function u(t, e, n) {
                        var i = s(t),
                            r = s(e),
                            o = i.getCrossings(r),
                            h = "subtract" === n,
                            u = "divide" === n,
                            l = {},
                            c = [];

                        function f(t) { if (!l[t._id] && (u || r.contains(t.getPointAt(t.getLength() / 2)) ^ h)) return c.unshift(t), l[t._id] = !0 }
                        for (var d = o.length - 1; d >= 0; d--) {
                            var _ = o[d].split();
                            _ && (f(_) && _.getFirstSegment().setHandleIn(0, 0), i.getLastSegment().setHandleOut(0, 0))
                        }
                        return f(i), a(c, !1, t, e)
                    }

                    function l(t, e) {
                        for (var n = t; n;) {
                            if (n === e) return;
                            n = n._previous
                        }
                        for (; t._next && t._next !== e;) t = t._next;
                        if (!t._next) {
                            for (; e._previous;) e = e._previous;
                            t._next = e, e._previous = t
                        }
                    }

                    function c(t) { for (var e = t.length - 1; e >= 0; e--) t[e].clearHandles() }

                    function d(t, e, n) {
                        var r = t && t.length;
                        if (r) {
                            var s = o.each(t, function(t, e) { this[t._id] = { container: null, winding: t.isClockwise() ? 1 : -1, index: e } }, {}),
                                a = t.slice().sort(function(t, e) { return i(e.getArea()) - i(t.getArea()) }),
                                h = a[0];
                            null == n && (n = h.isClockwise());
                            for (var u = 0; u < r; u++) {
                                for (var l = a[u], c = s[l._id], f = l.getInteriorPoint(), d = 0, _ = u - 1; _ >= 0; _--) {
                                    var g = a[_];
                                    if (g.contains(f)) {
                                        var v = s[g._id];
                                        d = v.winding, c.winding += d, c.container = v.exclude ? v.container : g;
                                        break
                                    }
                                }
                                if (e(c.winding) === e(d)) c.exclude = !0, t[c.index] = null;
                                else {
                                    var p = c.container;
                                    l.setClockwise(p ? !p.isClockwise() : n)
                                }
                            }
                        }
                        return t
                    }

                    function _(t, e, n) {
                        var i, r, s, a = e && [],
                            o = !1,
                            h = n || [],
                            u = n && {};

                        function f(t) { return t._path._id + "." + t._segment1._index }
                        for (var d = (n && n.length) - 1; d >= 0; d--) {
                            (_ = n[d])._path && (u[f(_)] = !0)
                        }
                        for (d = t.length - 1; d >= 0; d--) {
                            var _, g, v = t[d],
                                p = v._time,
                                m = p,
                                y = e && !e(v);
                            if ((_ = v._curve) && (_ !== r ? (o = !_.hasHandles() || u && u[f(_)], i = [], s = null, r = _) : s >= 1e-8 && (p /= s)), y) i && i.push(v);
                            else {
                                if (e && a.unshift(v), s = m, p < 1e-8) g = _._segment1;
                                else if (p > 1 - 1e-8) g = _._segment2;
                                else {
                                    var w = _.divideAtTime(p, !0);
                                    o && h.push(_, w), g = w._segment1;
                                    for (var x = i.length - 1; x >= 0; x--) {
                                        var b = i[x];
                                        b._time = (b._time - p) / (1 - p)
                                    }
                                }
                                v._setSegment(g);
                                var C = g._intersection,
                                    S = v._intersection;
                                if (C) { l(C, S); for (var k = C; k;) l(k._intersection, C), k = k._next } else g._intersection = S
                            }
                        }
                        return n || c(h), a || t
                    }

                    function g(n, r, s, a, o) {
                        var h, u, l = s ? 1 : 0,
                            c = 1 ^ l,
                            f = [n.x, n.y],
                            d = f[l],
                            _ = f[c],
                            v = 1e-6,
                            p = d - 1e-9,
                            m = d + 1e-9,
                            y = 0,
                            w = 0,
                            x = 0,
                            b = 0,
                            C = !1,
                            S = !1,
                            k = 1,
                            I = [];

                        function P(i) {
                            var u = i[c + 0],
                                f = i[c + 6];
                            if (!(_ < t(u, f) || _ > e(u, f))) {
                                var y = i[l + 0],
                                    w = i[l + 2],
                                    S = i[l + 4],
                                    P = i[l + 6];
                                if (u !== f) {
                                    var A = _ === u ? 0 : _ === f ? 1 : p > e(y, w, S, P) || m < t(y, w, S, P) ? 1 : L.solveCubic(i, c, _, I, 0, 1) > 0 ? I[0] : 1,
                                        M = 0 === A ? y : 1 === A ? P : L.getPoint(i, A)[s ? "y" : "x"],
                                        T = u > f ? 1 : -1,
                                        z = h[c] > h[c + 6] ? 1 : -1,
                                        O = h[l + 6];
                                    return _ !== u ? (M < p ? x += T : M > m ? b += T : C = !0, M > d - v && M < d + v && (k /= 2)) : (T !== z ? y < p ? x += T : y > m && (b += T) : y != O && (O < m && M > m ? (b += T, C = !0) : O > p && M < p && (x += T, C = !0)), k = 0), h = i, !o && M > p && M < m && 0 === L.getTangent(i, A)[s ? "x" : "y"] && g(n, r, !s, a, !0)
                                }(y < m && P > p || P < m && y > p) && (C = !0)
                            }
                        }

                        function A(n) {
                            var i = n[c + 0],
                                r = n[c + 2],
                                a = n[c + 4],
                                o = n[c + 6];
                            if (_ <= e(i, r, a, o) && _ >= t(i, r, a, o))
                                for (var h, u = n[l + 0], f = n[l + 2], d = n[l + 4], g = n[l + 6], v = p > e(u, f, d, g) || m < t(u, f, d, g) ? [n] : L.getMonoCurves(n, s), y = 0, w = v.length; y < w; y++)
                                    if (h = P(v[y])) return h
                        }
                        for (var M = 0, T = r.length; M < T; M++) {
                            var z, O = r[M],
                                E = O._path,
                                N = O.getValues();
                            if (!(M && r[M - 1]._path === E || (h = null, E._closed || (u = L.getValues(E.getLastCurve().getSegment2(), O.getSegment1(), null, !a))[c] !== u[c + 6] && (h = u), h))) {
                                h = N;
                                for (var B = E.getLastCurve(); B && B !== O;) {
                                    var j = B.getValues();
                                    if (j[c] !== j[c + 6]) { h = j; break }
                                    B = B.getPrevious()
                                }
                            }
                            if (z = A(N)) return z;
                            if (M + 1 === T || r[M + 1]._path !== E) { if (u && (z = A(u))) return z;!C || x || b || (x = b = E.isClockwise(a) ^ s ? 1 : -1), y += x, w += b, x = b = 0, C && (S = !0, C = !1), u = null }
                        }
                        return y = i(y), w = i(w), { winding: e(y, w), windingL: y, windingR: w, quality: k, onPath: S }
                    }

                    function v(t, e, n, r, s) {
                        var a = [],
                            o = t,
                            h = 0;
                        do {
                            var u = (y = t.getCurve()).getLength();
                            a.push({ segment: t, curve: y, length: u }), h += u, t = t.getNext()
                        } while (t && !t._intersection && t !== o);
                        for (var l = [.5, .25, .75], c = { winding: 0, quality: -1 }, d = 0; d < l.length && c.quality < .5; d++) {
                            u = h * l[d];
                            for (var _ = 0, v = a.length; _ < v; _++) {
                                var p = a[_],
                                    m = p.length;
                                if (u <= m) {
                                    var y, w = (y = p.curve)._path,
                                        x = w._parent,
                                        b = x instanceof j ? x : w,
                                        C = f.clamp(y.getTimeAt(u), 1e-8, 1 - 1e-8),
                                        S = y.getPointAtTime(C),
                                        k = i(y.getTangentAtTime(C).y) < Math.SQRT1_2,
                                        I = s.subtract && n && (b === e && n._getWinding(S, k, !0).winding || b === n && !e._getWinding(S, k, !0).winding) ? { winding: 0, quality: 1 } : g(S, r, k, !0);
                                    I.quality > c.quality && (c = I);
                                    break
                                }
                                u -= m
                            }
                        }
                        for (_ = a.length - 1; _ >= 0; _--) a[_].segment._winding = c
                    }

                    function p(t, e) {
                        var n, i = [];

                        function r(t) { var n; return !(!t || t._visited || e && (!e[(n = t._winding || {}).winding] || e.unite && 2 === n.winding && n.windingL && n.windingR)) }

                        function s(t) {
                            if (t)
                                for (var e = 0, i = n.length; e < i; e++)
                                    if (t === n[e]) return !0;
                            return !1
                        }

                        function a(t) { for (var e = t._segments, n = 0, i = e.length; n < i; n++) e[n]._visited = !0 }

                        function o(t, e) {
                            var i = t._intersection,
                                a = i,
                                o = [];

                            function h(i, a) {
                                for (; i && i !== a;) {
                                    var h = i._segment,
                                        u = h && h._path;
                                    if (u) {
                                        var l = h.getNext() || u.getFirstSegment(),
                                            c = l._intersection;
                                        h !== t && (s(h) || s(l) || l && r(h) && (r(l) || c && r(c._segment))) && o.push(h), e && n.push(h)
                                    }
                                    i = i._next
                                }
                            }
                            if (e && (n = [t]), i) {
                                for (h(i); i && i._prev;) i = i._prev;
                                h(i, a)
                            }
                            return o
                        }
                        t.sort(function(t, e) {
                            var n = t._intersection,
                                i = e._intersection,
                                r = !(!n || !n._overlap),
                                s = !(!i || !i._overlap),
                                a = t._path,
                                o = e._path;
                            return r ^ s ? r ? 1 : -1 : !n ^ !i ? n ? 1 : -1 : a !== o ? a._id - o._id : t._index - e._index
                        });
                        for (var h = 0, u = t.length; h < u; h++) {
                            var l, c, f, d = t[h],
                                _ = r(d),
                                g = null,
                                v = !1,
                                p = !0,
                                m = [];
                            if (_ && d._path._overlapsOnly) {
                                var y = d._path,
                                    w = d._intersection._segment._path;
                                y.compare(w) && (y.getArea() && i.push(y.clone(!1)), a(y), a(w), _ = !1)
                            }
                            for (; _;) {
                                var x = !g,
                                    b = o(d, x),
                                    S = b.shift(),
                                    k = !(v = !x && (s(d) || s(S))) && S;
                                if (x && (g = new B(C.NO_INSERT), l = null), v) {
                                    (d.isFirst() || d.isLast()) && (p = d._path._closed), d._visited = !0;
                                    break
                                }
                                if (k && l && (m.push(l), l = null), l || (k && b.push(d), l = { start: g._segments.length, crossings: b, visited: c = [], handleIn: f }), k && (d = S), !r(d)) {
                                    g.removeSegments(l.start);
                                    for (var I = 0, P = c.length; I < P; I++) c[I]._visited = !1;
                                    c.length = 0;
                                    do {
                                        (d = l && l.crossings.shift()) && d._path || (d = null, (l = m.pop()) && (c = l.visited, f = l.handleIn))
                                    } while (l && !r(d));
                                    if (!d) break
                                }
                                var A = d.getNext();
                                g.add(new z(d._point, f, A && d._handleOut)), d._visited = !0, c.push(d), d = A || d._path.getFirstSegment(), f = A && A._handleIn
                            }
                            v && (p && (g.getFirstSegment().setHandleIn(f), g.setClosed(p)), 0 !== g.getArea() && i.push(g))
                        }
                        return i
                    }
                    return {
                        _getWinding: function(t, e, n) { return g(t, this.getCurves(), e, n) },
                        unite: function(t, e) { return h(this, t, "unite", e) },
                        intersect: function(t, e) { return h(this, t, "intersect", e) },
                        subtract: function(t, e) { return h(this, t, "subtract", e) },
                        exclude: function(t, e) { return h(this, t, "exclude", e) },
                        divide: function(t, e) { return e && (0 == e.trace || e.stroke) ? u(this, t, "divide") : a([this.subtract(t, e), this.intersect(t, e)], !0, this, t, e) },
                        resolveCrossings: function() {
                            var t = this._children,
                                e = t || [this];

                            function n(t, e) { var n = t && t._intersection; return n && n._overlap && n._path === e }
                            var i = !1,
                                r = !1,
                                s = this.getIntersections(null, function(t) { return t.hasOverlap() && (i = !0) || t.isCrossing() && (r = !0) }),
                                a = i && r && [];
                            if (s = E.expand(s), i)
                                for (var h = _(s, function(t) { return t.hasOverlap() }, a), u = h.length - 1; u >= 0; u--) {
                                    var l = h[u],
                                        f = l._path,
                                        d = l._segment,
                                        g = d.getPrevious(),
                                        v = d.getNext();
                                    n(g, f) && n(v, f) && (d.remove(), g._handleOut._set(0, 0), v._handleIn._set(0, 0), g === d || g.getCurve().hasLength() || (v._handleIn.set(g._handleIn), g.remove()))
                                }
                            r && (_(s, i && function(t) {
                                var e = t.getCurve(),
                                    n = t.getSegment(),
                                    i = t._intersection,
                                    r = i._curve,
                                    s = i._segment;
                                if (e && r && e._path && r._path) return !0;
                                n && (n._intersection = null), s && (s._intersection = null)
                            }, a), a && c(a), e = p(o.each(e, function(t) { this.push.apply(this, t._segments) }, [])));
                            var m, y = e.length;
                            return y > 1 && t ? (e !== t && this.setChildren(e), m = this) : 1 !== y || t || (e[0] !== this && this.setSegments(e[0].removeSegments()), m = this), m || ((m = new j(C.NO_INSERT)).addChildren(e), (m = m.reduce()).copyAttributes(this), this.replaceWith(m)), m
                        },
                        reorient: function(t, e) { var i = this._children; return i && i.length ? this.setChildren(d(this.removeChildren(), function(e) { return !!(t ? e : 1 & e) }, e)) : e !== n && this.setClockwise(e), this },
                        getInteriorPoint: function() {
                            var n = this.getBounds().getCenter(!0);
                            if (!this.contains(n)) {
                                for (var i = this.getCurves(), r = n.y, s = [], a = [], o = 0, h = i.length; o < h; o++) {
                                    var u = i[o].getValues(),
                                        l = u[1],
                                        c = u[3],
                                        f = u[5],
                                        d = u[7];
                                    if (r >= t(l, c, f, d) && r <= e(l, c, f, d))
                                        for (var _ = L.getMonoCurves(u), g = 0, v = _.length; g < v; g++) {
                                            var p = _[g],
                                                m = p[1],
                                                y = p[7];
                                            if (m !== y && (r >= m && r <= y || r >= y && r <= m)) {
                                                var w = r === m ? p[0] : r === y ? p[6] : 1 === L.solveCubic(p, 1, r, a, 0, 1) ? L.getPoint(p, a[0]).x : (p[0] + p[6]) / 2;
                                                s.push(w)
                                            }
                                        }
                                }
                                s.length > 1 && (s.sort(function(t, e) { return t - e }), n.x = (s[0] + s[1]) / 2)
                            }
                            return n
                        }
                    }
                });
                var F = o.extend({
                        _class: "PathFlattener",
                        initialize: function(t, e, n, i, r) {
                            var s, a = [],
                                o = [],
                                h = 0,
                                u = 1 / (n || 32),
                                l = t._segments,
                                c = l[0];

                            function f(t, n) {
                                var s = L.getValues(t, n, r);
                                a.push(s),
                                    function t(n, r, s, a) {
                                        if (!(a - s > u) || i && L.isStraight(n) || L.isFlatEnough(n, e || .25)) {
                                            var l = n[6] - n[0],
                                                c = n[7] - n[1],
                                                f = Math.sqrt(l * l + c * c);
                                            f > 0 && (h += f, o.push({ offset: h, curve: n, index: r, time: a }))
                                        } else {
                                            var d = L.subdivide(n, .5),
                                                _ = (s + a) / 2;
                                            t(d[0], r, s, _), t(d[1], r, _, a)
                                        }
                                    }(s, t._index, 0, 1)
                            }
                            for (var d = 1, _ = l.length; d < _; d++) f(c, s = l[d]), c = s;
                            t._closed && f(s, l[0]), this.curves = a, this.parts = o, this.length = h, this.index = 0
                        },
                        _get: function(t) {
                            for (var e, n = this.parts, i = n.length, r = this.index; e = r, r && !(n[--r].offset < t););
                            for (; e < i; e++) {
                                var s = n[e];
                                if (s.offset >= t) {
                                    this.index = e;
                                    var a = n[e - 1],
                                        o = a && a.index === s.index ? a.time : 0,
                                        h = a ? a.offset : 0;
                                    return { index: s.index, time: o + (s.time - o) * (t - h) / (s.offset - h) }
                                }
                            }
                            return { index: n[i - 1].index, time: 1 }
                        },
                        drawPart: function(t, e, n) {
                            for (var i = this._get(e), r = this._get(n), s = i.index, a = r.index; s <= a; s++) {
                                var o = L.getPart(this.curves[s], s === i.index ? i.time : 0, s === r.index ? r.time : 1);
                                s === i.index && t.moveTo(o[0], o[1]), t.bezierCurveTo.apply(t, o.slice(2))
                            }
                        }
                    }, o.each(L._evaluateMethods, function(t) { this[t + "At"] = function(e) { var n = this._get(e); return L[t](this.curves[n.index], n.time) } }, {})),
                    D = o.extend({
                        initialize: function(t) {
                            for (var e, n = this.points = [], i = t._segments, r = t._closed, s = 0, a = i.length; s < a; s++) {
                                var o = i[s].point;
                                e && e.equals(o) || n.push(e = o.clone())
                            }
                            r && (n.unshift(n[n.length - 1]), n.push(n[1])), this.closed = r
                        },
                        fit: function(t) {
                            var e = this.points,
                                n = e.length,
                                i = null;
                            return n > 0 && (i = [new z(e[0])], n > 1 && (this.fitCubic(i, t, 0, n - 1, e[1].subtract(e[0]), e[n - 2].subtract(e[n - 1])), this.closed && (i.shift(), i.pop()))), i
                        },
                        fitCubic: function(t, e, n, i, r, s) {
                            var a = this.points;
                            if (i - n != 1) {
                                for (var o, h = this.chordLengthParameterize(n, i), u = Math.max(e, e * e), l = !0, c = 0; c <= 4; c++) {
                                    var f = this.generateBezier(n, i, h, r, s),
                                        d = this.findMaxError(n, i, f, h);
                                    if (d.error < e && l) return void this.addCurve(t, f);
                                    if (o = d.index, d.error >= u) break;
                                    l = this.reparameterize(n, i, h, f), u = d.error
                                }
                                var _ = a[o - 1].subtract(a[o + 1]);
                                this.fitCubic(t, e, n, o, r, _), this.fitCubic(t, e, o, i, _.negate(), s)
                            } else {
                                var g = a[n],
                                    v = a[i],
                                    p = g.getDistance(v) / 3;
                                this.addCurve(t, [g, g.add(r.normalize(p)), v.add(s.normalize(p)), v])
                            }
                        },
                        addCurve: function(t, e) { t[t.length - 1].setHandleOut(e[1].subtract(e[0])), t.push(new z(e[3], e[2].subtract(e[3]))) },
                        generateBezier: function(t, e, n, i, r) {
                            for (var s = Math.abs, a = this.points, o = a[t], h = a[e], u = [
                                    [0, 0],
                                    [0, 0]
                                ], l = [0, 0], c = 0, f = e - t + 1; c < f; c++) {
                                var d = n[c],
                                    _ = 1 - d,
                                    g = 3 * d * _,
                                    v = _ * _ * _,
                                    p = g * _,
                                    m = g * d,
                                    y = d * d * d,
                                    w = i.normalize(p),
                                    x = r.normalize(m),
                                    b = a[t + c].subtract(o.multiply(v + p)).subtract(h.multiply(m + y));
                                u[0][0] += w.dot(w), u[0][1] += w.dot(x), u[1][0] = u[0][1], u[1][1] += x.dot(x), l[0] += w.dot(b), l[1] += x.dot(b)
                            }
                            var C, S, k = u[0][0] * u[1][1] - u[1][0] * u[0][1];
                            if (s(k) > 1e-12) {
                                var I = u[0][0] * l[1] - u[1][0] * l[0];
                                C = (l[0] * u[1][1] - l[1] * u[0][1]) / k, S = I / k
                            } else {
                                var P = u[0][0] + u[0][1],
                                    A = u[1][0] + u[1][1];
                                C = S = s(P) > 1e-12 ? l[0] / P : s(A) > 1e-12 ? l[1] / A : 0
                            }
                            var M, T, z = h.getDistance(o),
                                O = 1e-12 * z;
                            if (C < O || S < O) C = S = z / 3;
                            else {
                                var L = h.subtract(o);
                                M = i.normalize(C), T = r.normalize(S), M.dot(L) - T.dot(L) > z * z && (C = S = z / 3, M = T = null)
                            }
                            return [o, o.add(M || i.normalize(C)), h.add(T || r.normalize(S)), h]
                        },
                        reparameterize: function(t, e, n, i) {
                            for (var r = t; r <= e; r++) n[r - t] = this.findRoot(i, this.points[r], n[r - t]);
                            r = 1;
                            for (var s = n.length; r < s; r++)
                                if (n[r] <= n[r - 1]) return !1;
                            return !0
                        },
                        findRoot: function(t, e, n) {
                            for (var i = [], r = [], s = 0; s <= 2; s++) i[s] = t[s + 1].subtract(t[s]).multiply(3);
                            for (s = 0; s <= 1; s++) r[s] = i[s + 1].subtract(i[s]).multiply(2);
                            var a = this.evaluate(3, t, n),
                                o = this.evaluate(2, i, n),
                                h = this.evaluate(1, r, n),
                                u = a.subtract(e),
                                l = o.dot(o) + u.dot(h);
                            return f.isZero(l) ? n : n - u.dot(o) / l
                        },
                        evaluate: function(t, e, n) {
                            for (var i = e.slice(), r = 1; r <= t; r++)
                                for (var s = 0; s <= t - r; s++) i[s] = i[s].multiply(1 - n).add(i[s + 1].multiply(n));
                            return i[0]
                        },
                        chordLengthParameterize: function(t, e) {
                            for (var n = [0], i = t + 1; i <= e; i++) n[i - t] = n[i - t - 1] + this.points[i].getDistance(this.points[i - 1]);
                            i = 1;
                            for (var r = e - t; i <= r; i++) n[i] /= n[r];
                            return n
                        },
                        findMaxError: function(t, e, n, i) {
                            for (var r = Math.floor((e - t + 1) / 2), s = 0, a = t + 1; a < e; a++) {
                                var o = this.evaluate(3, n, i[a - t]).subtract(this.points[a]),
                                    h = o.x * o.x + o.y * o.y;
                                h >= s && (s = h, r = a)
                            }
                            return { error: s, index: r }
                        }
                    }),
                    R = C.extend({
                        _class: "TextItem",
                        _applyMatrix: !1,
                        _canApplyMatrix: !1,
                        _serializeFields: { content: null },
                        _boundsOptions: { stroke: !1, handle: !1 },
                        initialize: function(t) {
                            this._content = "", this._lines = [];
                            var e = t && o.isPlainObject(t) && t.x === n && t.y === n;
                            this._initialize(e && t, !e && _.read(arguments))
                        },
                        _equals: function(t) { return this._content === t._content },
                        copyContent: function(t) { this.setContent(t._content) },
                        getContent: function() { return this._content },
                        setContent: function(t) { this._content = "" + t, this._lines = this._content.split(/\r\n|\n|\r/gm), this._changed(265) },
                        isEmpty: function() { return !this._content },
                        getCharacterStyle: "#getStyle",
                        setCharacterStyle: "#setStyle",
                        getParagraphStyle: "#getStyle",
                        setParagraphStyle: "#setStyle"
                    }),
                    q = R.extend({
                        _class: "PointText",
                        initialize: function() { R.apply(this, arguments) },
                        getPoint: function() { var t = this._matrix.getTranslation(); return new g(t.x, t.y, this, "setPoint") },
                        setPoint: function() {
                            var t = _.read(arguments);
                            this.translate(t.subtract(this._matrix.getTranslation()))
                        },
                        _draw: function(t, e, n) {
                            if (this._content) {
                                this._setStyles(t, e, n);
                                var i = this._lines,
                                    r = this._style,
                                    s = r.hasFill(),
                                    a = r.hasStroke(),
                                    o = r.getLeading(),
                                    h = t.shadowColor;
                                t.font = r.getFontStyle(), t.textAlign = r.getJustification();
                                for (var u = 0, l = i.length; u < l; u++) {
                                    t.shadowColor = h;
                                    var c = i[u];
                                    s && (t.fillText(c, 0, 0), t.shadowColor = "rgba(0,0,0,0)"), a && t.strokeText(c, 0, 0), t.translate(0, o)
                                }
                            }
                        },
                        _getBounds: function(t, e) {
                            var n = this._style,
                                i = this._lines,
                                r = i.length,
                                s = n.getJustification(),
                                a = n.getLeading(),
                                o = this.getView().getTextWidth(n.getFontStyle(), i),
                                h = 0;
                            "left" !== s && (h -= o / ("center" === s ? 2 : 1));
                            var u = new m(h, r ? -.75 * a : 0, o, r * a);
                            return t ? t._transformBounds(u, u) : u
                        }
                    }),
                    V = o.extend(new function() {
                        var t, e = { gray: ["gray"], rgb: ["red", "green", "blue"], hsb: ["hue", "saturation", "brightness"], hsl: ["hue", "saturation", "lightness"], gradient: ["gradient", "origin", "destination", "highlight"] },
                            n = {},
                            r = {};
                        var a = [
                                [0, 3, 1],
                                [2, 0, 1],
                                [1, 0, 3],
                                [1, 2, 0],
                                [3, 1, 0],
                                [0, 1, 2]
                            ],
                            h = {
                                "rgb-hsb": function(t, e, n) {
                                    var i = Math.max(t, e, n),
                                        r = i - Math.min(t, e, n);
                                    return [0 === r ? 0 : 60 * (i == t ? (e - n) / r + (e < n ? 6 : 0) : i == e ? (n - t) / r + 2 : (t - e) / r + 4), 0 === i ? 0 : r / i, i]
                                },
                                "hsb-rgb": function(t, e, n) {
                                    var i, r = (t = (t / 60 % 6 + 6) % 6) - (i = Math.floor(t)),
                                        s = [n, n * (1 - e), n * (1 - e * r), n * (1 - e * (1 - r))];
                                    return [s[(i = a[i])[0]], s[i[1]], s[i[2]]]
                                },
                                "rgb-hsl": function(t, e, n) {
                                    var i = Math.max(t, e, n),
                                        r = Math.min(t, e, n),
                                        s = i - r,
                                        a = 0 === s,
                                        o = (i + r) / 2;
                                    return [a ? 0 : 60 * (i == t ? (e - n) / s + (e < n ? 6 : 0) : i == e ? (n - t) / s + 2 : (t - e) / s + 4), a ? 0 : o < .5 ? s / (i + r) : s / (2 - i - r), o]
                                },
                                "hsl-rgb": function(t, e, n) {
                                    if (0 === e) return [n, n, n];
                                    for (var i = [(t = (t / 360 % 1 + 1) % 1) + 1 / 3, t, t - 1 / 3], r = n < .5 ? n * (1 + e) : n + e - n * e, s = 2 * n - r, a = [], o = 0; o < 3; o++) {
                                        var h = i[o];
                                        h < 0 && (h += 1), h > 1 && (h -= 1), a[o] = 6 * h < 1 ? s + 6 * (r - s) * h : 2 * h < 1 ? r : 3 * h < 2 ? s + (r - s) * (2 / 3 - h) * 6 : s
                                    }
                                    return a
                                },
                                "rgb-gray": function(t, e, n) { return [.2989 * t + .587 * e + .114 * n] },
                                "gray-rgb": function(t) { return [t, t, t] },
                                "gray-hsb": function(t) { return [0, 0, t] },
                                "gray-hsl": function(t) { return [0, 0, t] },
                                "gradient-rgb": function() { return [] },
                                "rgb-gradient": function() { return [] }
                            };
                        return o.each(e, function(t, i) {
                            n[i] = [], o.each(t, function(t, r) {
                                var s = o.capitalize(t),
                                    a = /^(hue|saturation)$/.test(t),
                                    h = n[i][r] = "gradient" === t ? function(t) { var e = this._components[0]; return e !== (t = U.read(Array.isArray(t) ? t : arguments, 0, { readNull: !0 })) && (e && e._removeOwner(this), t && t._addOwner(this)), t } : "gradient" === i ? function() { return _.read(arguments, 0, { readNull: "highlight" === t, clone: !0 }) } : function(t) { return null == t || isNaN(t) ? 0 : t };
                                this["get" + s] = function() { return this._type === i || a && /^hs[bl]$/.test(this._type) ? this._components[r] : this._convert(i)[r] }, this["set" + s] = function(t) { this._type === i || a && /^hs[bl]$/.test(this._type) || (this._components = this._convert(i), this._properties = e[i], this._type = i), this._components[r] = h.call(this, t), this._changed() }
                            }, this)
                        }, {
                            _class: "Color",
                            _readIndex: !0,
                            initialize: function a(h) {
                                var u, l, c, f, d = arguments,
                                    _ = this.__read,
                                    g = 0;
                                Array.isArray(h) && (h = (d = h)[0]);
                                var v = null != h && (void 0 === h ? "undefined" : i(h));
                                if ("string" === v && h in e && (u = h, h = d[1], Array.isArray(h) ? (l = h, c = d[2]) : (_ && (g = 1), d = o.slice(d, 1), v = void 0 === h ? "undefined" : i(h))), !l) {
                                    if (f = "number" === v ? d : "object" === v && null != h.length ? h : null) {
                                        u || (u = f.length >= 3 ? "rgb" : "gray");
                                        var p = e[u].length;
                                        c = f[p], _ && (g += f === arguments ? p + (null != c ? 1 : 0) : 1), f.length > p && (f = o.slice(f, 0, p))
                                    } else if ("string" === v) u = "rgb", 4 === (l = function(e) {
                                        var n, i = e.match(/^#(\w{1,2})(\w{1,2})(\w{1,2})$/);
                                        if (i) {
                                            n = [0, 0, 0];
                                            for (var a = 0; a < 3; a++) {
                                                var o = i[a + 1];
                                                n[a] = parseInt(1 == o.length ? o + o : o, 16) / 255
                                            }
                                        } else if (i = e.match(/^rgba?\((.*)\)$/)) { a = 0; for (var h = (n = i[1].split(",")).length; a < h; a++) o = +n[a], n[a] = a < 3 ? o / 255 : o } else if (s) {
                                            var u = r[e];
                                            if (!u) {
                                                t || ((t = it.getContext(1, 1)).globalCompositeOperation = "copy"), t.fillStyle = "rgba(0,0,0,0)", t.fillStyle = e, t.fillRect(0, 0, 1, 1);
                                                var l = t.getImageData(0, 0, 1, 1).data;
                                                u = r[e] = [l[0] / 255, l[1] / 255, l[2] / 255]
                                            }
                                            n = u.slice()
                                        } else n = [0, 0, 0];
                                        return n
                                    }(h)).length && (c = l[3], l.length--);
                                    else if ("object" === v)
                                        if (h.constructor === a) {
                                            if (u = h._type, l = h._components.slice(), c = h._alpha, "gradient" === u)
                                                for (var m = 1, y = l.length; m < y; m++) {
                                                    var w = l[m];
                                                    w && (l[m] = w.clone())
                                                }
                                        } else if (h.constructor === U) u = "gradient", f = d;
                                    else {
                                        var x = e[u = "hue" in h ? "lightness" in h ? "hsl" : "hsb" : "gradient" in h || "stops" in h || "radial" in h ? "gradient" : "gray" in h ? "gray" : "rgb"],
                                            b = n[u];
                                        this._components = l = [];
                                        for (m = 0, y = x.length; m < y; m++) { null == (C = h[x[m]]) && !m && "gradient" === u && "stops" in h && (C = { stops: h.stops, radial: h.radial }), null != (C = b[m].call(this, C)) && (l[m] = C) }
                                        c = h.alpha
                                    }
                                    _ && u && (g = 1)
                                }
                                if (this._type = u || "rgb", !l) {
                                    this._components = l = [];
                                    for (m = 0, y = (b = n[this._type]).length; m < y; m++) {
                                        var C;
                                        null != (C = b[m].call(this, f && f[m])) && (l[m] = C)
                                    }
                                }
                                return this._components = l, this._properties = e[this._type], this._alpha = c, _ && (this.__read = g), this
                            },
                            set: "#initialize",
                            _serialize: function(t, e) { var n = this.getComponents(); return o.serialize(/^(gray|rgb)$/.test(this._type) ? n : [this._type].concat(n), t, !0, e) },
                            _changed: function() { this._canvasStyle = null, this._owner && this._owner._changed(65) },
                            _convert: function(t) { var e; return this._type === t ? this._components.slice() : (e = h[this._type + "-" + t]) ? e.apply(this, this._components) : h["rgb-" + t].apply(this, h[this._type + "-rgb"].apply(this, this._components)) },
                            convert: function(t) { return new V(t, this._convert(t), this._alpha) },
                            getType: function() { return this._type },
                            setType: function(t) { this._components = this._convert(t), this._properties = e[t], this._type = t },
                            getComponents: function() { var t = this._components.slice(); return null != this._alpha && t.push(this._alpha), t },
                            getAlpha: function() { return null != this._alpha ? this._alpha : 1 },
                            setAlpha: function(t) { this._alpha = null == t ? null : Math.min(Math.max(t, 0), 1), this._changed() },
                            hasAlpha: function() { return null != this._alpha },
                            equals: function(t) { var e = o.isPlainValue(t, !0) ? V.read(arguments) : t; return e === this || e && this._class === e._class && this._type === e._type && this.getAlpha() === e.getAlpha() && o.equals(this._components, e._components) || !1 },
                            toString: function() {
                                for (var t = this._properties, e = [], n = "gradient" === this._type, i = c.instance, r = 0, s = t.length; r < s; r++) {
                                    var a = this._components[r];
                                    null != a && e.push(t[r] + ": " + (n ? a : i.number(a)))
                                }
                                return null != this._alpha && e.push("alpha: " + i.number(this._alpha)), "{ " + e.join(", ") + " }"
                            },
                            toCSS: function(t) {
                                var e = this._convert("rgb"),
                                    n = t || null == this._alpha ? 1 : this._alpha;

                                function i(t) { return Math.round(255 * (t < 0 ? 0 : t > 1 ? 1 : t)) }
                                return e = [i(e[0]), i(e[1]), i(e[2])], n < 1 && e.push(n < 0 ? 0 : n), t ? "#" + ((1 << 24) + (e[0] << 16) + (e[1] << 8) + e[2]).toString(16).slice(1) : (4 == e.length ? "rgba(" : "rgb(") + e.join(",") + ")"
                            },
                            toCanvasStyle: function(t, e) {
                                if (this._canvasStyle) return this._canvasStyle;
                                if ("gradient" !== this._type) return this._canvasStyle = this.toCSS();
                                var n, i = this._components,
                                    r = i[0],
                                    s = r._stops,
                                    a = i[1],
                                    o = i[2],
                                    h = i[3],
                                    u = e && e.inverted();
                                if (u && (a = u._transformPoint(a), o = u._transformPoint(o), h && (h = u._transformPoint(h))), r._radial) {
                                    var l = o.getDistance(a);
                                    if (h) {
                                        var c = h.subtract(a);
                                        c.getLength() > l && (h = a.add(c.normalize(l - .1)))
                                    }
                                    var f = h || a;
                                    n = t.createRadialGradient(f.x, f.y, 0, a.x, a.y, l)
                                } else n = t.createLinearGradient(a.x, a.y, o.x, o.y);
                                for (var d = 0, _ = s.length; d < _; d++) {
                                    var g = s[d],
                                        v = g._offset;
                                    n.addColorStop(null == v ? d / (_ - 1) : v, g._color.toCanvasStyle())
                                }
                                return this._canvasStyle = n
                            },
                            transform: function(t) {
                                if ("gradient" === this._type) {
                                    for (var e = this._components, n = 1, i = e.length; n < i; n++) {
                                        var r = e[n];
                                        t._transformPoint(r, r, !0)
                                    }
                                    this._changed()
                                }
                            },
                            statics: { _types: e, random: function() { var t = Math.random; return new V(t(), t(), t()) } }
                        })
                    }, new function() { return o.each({ add: function(t, e) { return t + e }, subtract: function(t, e) { return t - e }, multiply: function(t, e) { return t * e }, divide: function(t, e) { return t / e } }, function(t, e) { this[e] = function(e) { e = V.read(arguments); for (var n = this._type, i = this._components, r = e._convert(n), s = 0, a = i.length; s < a; s++) r[s] = t(i[s], r[s]); return new V(n, r, null != this._alpha ? t(this._alpha, e.getAlpha()) : null) } }, {}) }),
                    U = o.extend({
                        _class: "Gradient",
                        initialize: function(t, e) { this._id = d.get(), t && o.isPlainObject(t) && (this.set(t), t = e = null), null == this._stops && this.setStops(t || ["white", "black"]), null == this._radial && this.setRadial("string" == typeof e && "radial" === e || e || !1) },
                        _serialize: function(t, e) { return e.add(this, function() { return o.serialize([this._stops, this._radial], t, !0, e) }) },
                        _changed: function() { for (var t = 0, e = this._owners && this._owners.length; t < e; t++) this._owners[t]._changed() },
                        _addOwner: function(t) { this._owners || (this._owners = []), this._owners.push(t) },
                        _removeOwner: function(t) { var e = this._owners ? this._owners.indexOf(t) : -1; - 1 != e && (this._owners.splice(e, 1), this._owners.length || (this._owners = n)) },
                        clone: function() { for (var t = [], e = 0, n = this._stops.length; e < n; e++) t[e] = this._stops[e].clone(); return new U(t, this._radial) },
                        getStops: function() { return this._stops },
                        setStops: function(t) {
                            if (t.length < 2) throw new Error("Gradient stop list needs to contain at least two stops.");
                            var e = this._stops;
                            if (e)
                                for (var i = 0, r = e.length; i < r; i++) e[i]._owner = n;
                            for (i = 0, r = (e = this._stops = H.readList(t, 0, { clone: !0 })).length; i < r; i++) e[i]._owner = this;
                            this._changed()
                        },
                        getRadial: function() { return this._radial },
                        setRadial: function(t) { this._radial = t, this._changed() },
                        equals: function(t) {
                            if (t === this) return !0;
                            if (t && this._class === t._class) {
                                var e = this._stops,
                                    n = t._stops,
                                    i = e.length;
                                if (i === n.length) {
                                    for (var r = 0; r < i; r++)
                                        if (!e[r].equals(n[r])) return !1;
                                    return !0
                                }
                            }
                            return !1
                        }
                    }),
                    H = o.extend({
                        _class: "GradientStop",
                        initialize: function(t, e) {
                            var r = t,
                                s = e;
                            "object" === (void 0 === t ? "undefined" : i(t)) && e === n && (Array.isArray(t) && "number" != typeof t[0] ? (r = t[0], s = t[1]) : ("color" in t || "offset" in t || "rampPoint" in t) && (r = t.color, s = t.offset || t.rampPoint || 0)), this.setColor(r), this.setOffset(s)
                        },
                        clone: function() { return new H(this._color.clone(), this._offset) },
                        _serialize: function(t, e) {
                            var n = this._color,
                                i = this._offset;
                            return o.serialize(null == i ? [n] : [n, i], t, !0, e)
                        },
                        _changed: function() { this._owner && this._owner._changed(65) },
                        getOffset: function() { return this._offset },
                        setOffset: function(t) { this._offset = t, this._changed() },
                        getRampPoint: "#getOffset",
                        setRampPoint: "#setOffset",
                        getColor: function() { return this._color },
                        setColor: function() {
                            var t = V.read(arguments, 0, { clone: !0 });
                            t && (t._owner = this), this._color = t, this._changed()
                        },
                        equals: function(t) { return t === this || t && this._class === t._class && this._color.equals(t._color) && this._offset == t._offset || !1 }
                    }),
                    Z = o.extend(new function() {
                        var t = { fillColor: null, fillRule: "nonzero", strokeColor: null, strokeWidth: 1, strokeCap: "butt", strokeJoin: "miter", strokeScaling: !0, miterLimit: 10, dashOffset: 0, dashArray: [], shadowColor: null, shadowBlur: 0, shadowOffset: new _, selectedColor: null },
                            e = o.set({}, t, { fontFamily: "sans-serif", fontWeight: "normal", fontSize: 12, leading: null, justification: "left" }),
                            i = o.set({}, e, { fillColor: new V }),
                            s = { strokeWidth: 97, strokeCap: 97, strokeJoin: 97, strokeScaling: 105, miterLimit: 97, fontFamily: 9, fontWeight: 9, fontSize: 9, font: 9, leading: 9, justification: 9 },
                            a = { beans: !0 },
                            h = { _class: "Style", beans: !0, initialize: function(n, s, a) { this._values = {}, this._owner = s, this._project = s && s._project || a || r.project, this._defaults = !s || s instanceof S ? e : s instanceof R ? i : t, n && this.set(n) } };
                        return o.each(e, function(t, e) {
                            var i = /Color$/.test(e),
                                r = "shadowOffset" === e,
                                u = o.capitalize(e),
                                l = s[e],
                                c = "set" + u,
                                f = "get" + u;
                            h[c] = function(t) {
                                var r = this._owner,
                                    s = r && r._children;
                                if (s && s.length > 0 && !(r instanceof j))
                                    for (var a = 0, o = s.length; a < o; a++) s[a]._style[c](t);
                                else if (e in this._defaults) {
                                    var h = this._values[e];
                                    h !== t && (i && (h && h._owner !== n && (h._owner = n), t && t.constructor === V && (t._owner && (t = t.clone()), t._owner = r)), this._values[e] = t, r && r._changed(l || 65))
                                }
                            }, h[f] = function(t) {
                                var s, a = this._owner,
                                    h = a && a._children;
                                if (e in this._defaults && (!h || !h.length || t || a instanceof j))
                                    if ((s = this._values[e]) === n)(s = this._defaults[e]) && s.clone && (s = s.clone());
                                    else { var u = i ? V : r ? _ : null;!u || s && s.constructor === u || (this._values[e] = s = u.read([s], 0, { readNull: !0, clone: !0 }), s && i && (s._owner = a)) }
                                else if (h)
                                    for (var l = 0, c = h.length; l < c; l++) { var d = h[l]._style[f](); if (l) { if (!o.equals(s, d)) return n } else s = d }
                                return s
                            }, a[f] = function(t) { return this._style[f](t) }, a[c] = function(t) { this._style[c](t) }
                        }), o.each({ Font: "FontFamily", WindingRule: "FillRule" }, function(t, e) {
                            var n = "get" + e,
                                i = "set" + e;
                            h[n] = a[n] = "#get" + t, h[i] = a[i] = "#set" + t
                        }), C.inject(a), h
                    }, {
                        set: function(t) {
                            var e = t instanceof Z,
                                n = e ? t._values : t;
                            if (n)
                                for (var i in n)
                                    if (i in this._defaults) {
                                        var r = n[i];
                                        this[i] = r && e && r.clone ? r.clone() : r
                                    }
                        },
                        equals: function(t) {
                            function e(t, e, i) {
                                var r = t._values,
                                    s = e._values,
                                    a = e._defaults;
                                for (var h in r) {
                                    var u = r[h],
                                        l = s[h];
                                    if (!(i && h in s || o.equals(u, l === n ? a[h] : l))) return !1
                                }
                                return !0
                            }
                            return t === this || t && this._class === t._class && e(this, t) && e(t, this, !0) || !1
                        },
                        hasFill: function() { var t = this.getFillColor(); return !!t && t.alpha > 0 },
                        hasStroke: function() { var t = this.getStrokeColor(); return !!t && t.alpha > 0 && this.getStrokeWidth() > 0 },
                        hasShadow: function() { var t = this.getShadowColor(); return !!t && t.alpha > 0 && (this.getShadowBlur() > 0 || !this.getShadowOffset().isZero()) },
                        getView: function() { return this._project._view },
                        getFontStyle: function() { var t = this.getFontSize(); return this.getFontWeight() + " " + t + (/[a-z]/i.test(t + "") ? " " : "px ") + this.getFontFamily() },
                        getFont: "#getFontFamily",
                        setFont: "#setFontFamily",
                        getLeading: function t() {
                            var e = t.base.call(this),
                                n = this.getFontSize();
                            return /pt|em|%|px/.test(n) && (n = this.getView().getPixelSize(n)), null != e ? e : 1.2 * n
                        }
                    }),
                    W = new function() {
                        function t(t, e, n, i) {
                            for (var r = ["", "webkit", "moz", "Moz", "ms", "o"], s = e[0].toUpperCase() + e.substring(1), a = 0; a < 6; a++) {
                                var o = r[a],
                                    h = o ? o + s : e;
                                if (h in t) {
                                    if (!n) return t[h];
                                    t[h] = i;
                                    break
                                }
                            }
                        }
                        return {
                            getStyles: function(t) {
                                var e = t && 9 !== t.nodeType ? t.ownerDocument : t,
                                    n = e && e.defaultView;
                                return n && n.getComputedStyle(t, "")
                            },
                            getBounds: function(t, e) {
                                var n, i = t.ownerDocument,
                                    r = i.body,
                                    s = i.documentElement;
                                try { n = t.getBoundingClientRect() } catch (t) { n = { left: 0, top: 0, width: 0, height: 0 } }
                                var a = n.left - (s.clientLeft || r.clientLeft || 0),
                                    o = n.top - (s.clientTop || r.clientTop || 0);
                                if (!e) {
                                    var h = i.defaultView;
                                    a += h.pageXOffset || s.scrollLeft || r.scrollLeft, o += h.pageYOffset || s.scrollTop || r.scrollTop
                                }
                                return new m(a, o, n.width, n.height)
                            },
                            getViewportBounds: function(t) {
                                var e = t.ownerDocument,
                                    n = e.defaultView,
                                    i = e.documentElement;
                                return new m(0, 0, n.innerWidth || i.clientWidth, n.innerHeight || i.clientHeight)
                            },
                            getOffset: function(t, e) { return W.getBounds(t, e).getPoint() },
                            getSize: function(t) { return W.getBounds(t, !0).getSize() },
                            isInvisible: function(t) { return W.getSize(t).equals(new v(0, 0)) },
                            isInView: function(t) { return !W.isInvisible(t) && W.getViewportBounds(t).intersects(W.getBounds(t, !0)) },
                            isInserted: function(t) { return a.body.contains(t) },
                            getPrefixed: function(e, n) { return e && t(e, n) },
                            setPrefixed: function(e, n, r) {
                                if ("object" === (void 0 === n ? "undefined" : i(n)))
                                    for (var s in n) t(e, s, !0, n[s]);
                                else t(e, n, !0, r)
                            }
                        }
                    },
                    $ = {
                        add: function(t, e) {
                            if (t)
                                for (var n in e)
                                    for (var i = e[n], r = n.split(/[\s,]+/g), s = 0, a = r.length; s < a; s++) t.addEventListener(r[s], i, !1)
                        },
                        remove: function(t, e) {
                            if (t)
                                for (var n in e)
                                    for (var i = e[n], r = n.split(/[\s,]+/g), s = 0, a = r.length; s < a; s++) t.removeEventListener(r[s], i, !1)
                        },
                        getPoint: function(t) { var e = t.targetTouches ? t.targetTouches.length ? t.targetTouches[0] : t.changedTouches[0] : t; return new _(e.pageX || e.clientX + a.documentElement.scrollLeft, e.pageY || e.clientY + a.documentElement.scrollTop) },
                        getTarget: function(t) { return t.target || t.srcElement },
                        getRelatedTarget: function(t) { return t.relatedTarget || t.toElement },
                        getOffset: function(t, e) { return $.getPoint(t).subtract(W.getOffset(e || $.getTarget(t))) }
                    };
                $.requestAnimationFrame = new function() {
                    var t, e = W.getPrefixed(s, "requestAnimationFrame"),
                        n = !1,
                        i = [];

                    function r() {
                        var t = i;
                        i = [];
                        for (var s = 0, a = t.length; s < a; s++) t[s]();
                        (n = e && i.length) && e(r)
                    }
                    return function(s) { i.push(s), e ? n || (e(r), n = !0) : t || (t = setInterval(r, 1e3 / 60)) }
                };
                var G = o.extend(h, {
                        _class: "View",
                        initialize: function t(e, n) {
                            function i(t) { return n[t] || parseInt(n.getAttribute(t), 10) }

                            function o() { var t = W.getSize(n); return t.isNaN() || t.isZero() ? new v(i("width"), i("height")) : t }
                            var h;
                            if (s && n) {
                                this._id = n.getAttribute("id"), null == this._id && n.setAttribute("id", this._id = "view-" + t._id++), $.add(n, this._viewEvents);
                                if (W.setPrefixed(n.style, { userDrag: "none", userSelect: "none", touchCallout: "none", contentZooming: "none", tapHighlightColor: "rgba(0,0,0,0)" }), u.hasAttribute(n, "resize")) {
                                    var l = this;
                                    $.add(s, this._windowEvents = { resize: function() { l.setViewSize(o()) } })
                                }
                                if (h = o(), u.hasAttribute(n, "stats") && "undefined" != typeof Stats) {
                                    this._stats = new Stats;
                                    var c = this._stats.domElement,
                                        f = c.style,
                                        d = W.getOffset(n);
                                    f.position = "absolute", f.left = d.x + "px", f.top = d.y + "px", a.body.appendChild(c)
                                }
                            } else h = new v(n), n = null;
                            this._project = e, this._scope = e._scope, this._element = n, this._pixelRatio || (this._pixelRatio = s && s.devicePixelRatio || 1), this._setElementSize(h.width, h.height), this._viewSize = h, t._views.push(this), t._viewsById[this._id] = this, (this._matrix = new w)._owner = this, t._focused || (t._focused = this), this._frameItems = {}, this._frameItemCount = 0, this._itemEvents = { native: {}, virtual: {} }, this._autoUpdate = !r.agent.node, this._needsUpdate = !1
                        },
                        remove: function() {
                            if (!this._project) return !1;
                            G._focused === this && (G._focused = null), G._views.splice(G._views.indexOf(this), 1), delete G._viewsById[this._id];
                            var t = this._project;
                            return t._view === this && (t._view = null), $.remove(this._element, this._viewEvents), $.remove(s, this._windowEvents), this._element = this._project = null, this.off("frame"), this._animate = !1, this._frameItems = {}, !0
                        },
                        _events: o.each(C._itemHandlers.concat(["onResize", "onKeyDown", "onKeyUp"]), function(t) { this[t] = {} }, { onFrame: { install: function() { this.play() }, uninstall: function() { this.pause() } } }),
                        _animate: !1,
                        _time: 0,
                        _count: 0,
                        getAutoUpdate: function() { return this._autoUpdate },
                        setAutoUpdate: function(t) { this._autoUpdate = t, t && this.requestUpdate() },
                        update: function() {},
                        draw: function() { this.update() },
                        requestUpdate: function() {
                            if (!this._requested) {
                                var t = this;
                                $.requestAnimationFrame(function() {
                                    if (t._requested = !1, t._animate) {
                                        t.requestUpdate();
                                        var e = t._element;
                                        W.getPrefixed(a, "hidden") && "true" !== u.getAttribute(e, "keepalive") || !W.isInView(e) || t._handleFrame()
                                    }
                                    t._autoUpdate && t.update()
                                }), this._requested = !0
                            }
                        },
                        play: function() { this._animate = !0, this.requestUpdate() },
                        pause: function() { this._animate = !1 },
                        _handleFrame: function() {
                            r = this._scope;
                            var t = Date.now() / 1e3,
                                e = this._last ? t - this._last : 0;
                            this._last = t, this.emit("frame", new o({ delta: e, time: this._time += e, count: this._count++ })), this._stats && this._stats.update()
                        },
                        _animateItem: function(t, e) {
                            var n = this._frameItems;
                            e ? (n[t._id] = { item: t, time: 0, count: 0 }, 1 == ++this._frameItemCount && this.on("frame", this._handleFrameItems)) : (delete n[t._id], 0 == --this._frameItemCount && this.off("frame", this._handleFrameItems))
                        },
                        _handleFrameItems: function(t) {
                            for (var e in this._frameItems) {
                                var n = this._frameItems[e];
                                n.item.emit("frame", new o(t, { time: n.time += t.delta, count: n.count++ }))
                            }
                        },
                        _changed: function() { this._project._changed(2049), this._bounds = this._decomposed = n },
                        getElement: function() { return this._element },
                        getPixelRatio: function() { return this._pixelRatio },
                        getResolution: function() { return 72 * this._pixelRatio },
                        getViewSize: function() { var t = this._viewSize; return new p(t.width, t.height, this, "setViewSize") },
                        setViewSize: function() {
                            var t = v.read(arguments),
                                e = t.subtract(this._viewSize);
                            e.isZero() || (this._setElementSize(t.width, t.height), this._viewSize.set(t), this._changed(), this.emit("resize", { size: t, delta: e }), this._autoUpdate && this.update())
                        },
                        _setElementSize: function(t, e) {
                            var n = this._element;
                            n && (n.width !== t && (n.width = t), n.height !== e && (n.height = e))
                        },
                        getBounds: function() { return this._bounds || (this._bounds = this._matrix.inverted()._transformBounds(new m(new _, this._viewSize))), this._bounds },
                        getSize: function() { return this.getBounds().getSize() },
                        isVisible: function() { return W.isInView(this._element) },
                        isInserted: function() { return W.isInserted(this._element) },
                        getPixelSize: function(t) {
                            var e, n = this._element;
                            if (n) {
                                var i = n.parentNode,
                                    r = a.createElement("div");
                                r.style.fontSize = t, i.appendChild(r), e = parseFloat(W.getStyles(r).fontSize), i.removeChild(r)
                            } else e = parseFloat(e);
                            return e
                        },
                        getTextWidth: function(t, e) { return 0 }
                    }, o.each(["rotate", "scale", "shear", "skew"], function(t) {
                        var e = "rotate" === t;
                        this[t] = function() {
                            var n = (e ? o : _).read(arguments),
                                i = _.read(arguments, 0, { readNull: !0 });
                            return this.transform((new w)[t](n, i || this.getCenter(!0)))
                        }
                    }, {
                        _decompose: function() { return this._decomposed || (this._decomposed = this._matrix.decompose()) },
                        translate: function() { var t = new w; return this.transform(t.translate.apply(t, arguments)) },
                        getCenter: function() { return this.getBounds().getCenter() },
                        setCenter: function() {
                            var t = _.read(arguments);
                            this.translate(this.getCenter().subtract(t))
                        },
                        getZoom: function() {
                            var t = this._decompose(),
                                e = t && t.scaling;
                            return e ? (e.x + e.y) / 2 : 0
                        },
                        setZoom: function(t) { this.transform((new w).scale(t / this.getZoom(), this.getCenter())) },
                        getRotation: function() { var t = this._decompose(); return t && t.rotation },
                        setRotation: function(t) {
                            var e = this.getRotation();
                            null != e && null != t && this.rotate(t - e)
                        },
                        getScaling: function() {
                            var t = this._decompose(),
                                e = t && t.scaling;
                            return e ? new g(e.x, e.y, this, "setScaling") : n
                        },
                        setScaling: function() {
                            var t = this.getScaling(),
                                e = _.read(arguments, 0, { clone: !0, readNull: !0 });
                            t && e && this.scale(e.x / t.x, e.y / t.y)
                        },
                        getMatrix: function() { return this._matrix },
                        setMatrix: function() {
                            var t = this._matrix;
                            t.initialize.apply(t, arguments)
                        },
                        transform: function(t) { this._matrix.append(t) },
                        scrollBy: function() { this.translate(_.read(arguments).negate()) }
                    }), { projectToView: function() { return this._matrix._transformPoint(_.read(arguments)) }, viewToProject: function() { return this._matrix._inverseTransform(_.read(arguments)) }, getEventPoint: function(t) { return this.viewToProject($.getOffset(t, this._element)) } }, { statics: { _views: [], _viewsById: {}, _id: 0, create: function(t, e) { return a && "string" == typeof e && (e = a.getElementById(e)), new(s ? J : G)(t, e) } } }, new function() {
                        if (s) {
                            var t, e, n, i, o, h = !1,
                                u = !1,
                                l = s.navigator;
                            l.pointerEnabled || l.msPointerEnabled ? (n = "pointerdown MSPointerDown", i = "pointermove MSPointerMove", o = "pointerup pointercancel MSPointerUp MSPointerCancel") : (n = "touchstart", i = "touchmove", o = "touchend touchcancel", "ontouchstart" in s && l.userAgent.match(/mobile|tablet|ip(ad|hone|od)|android|silk/i) || (n += " mousedown", i += " mousemove", o += " mouseup"));
                            var c = {},
                                f = {
                                    mouseout: function(t) {
                                        var e = G._focused,
                                            n = $.getRelatedTarget(t);
                                        if (e && (!n || "HTML" === n.nodeName)) {
                                            var i = $.getOffset(t, e._element),
                                                r = i.x,
                                                s = Math.abs,
                                                a = s(r),
                                                o = a - (1 << 25);
                                            i.x = s(o) < a ? o * (r < 0 ? -1 : 1) : r, A(e, t, e.viewToProject(i))
                                        }
                                    },
                                    scroll: P
                                };
                            c[n] = function(t) {
                                var e = G._focused = I(t);
                                h || (h = !0, e._handleMouseEvent("mousedown", t))
                            }, f[i] = function(n) {
                                var i = G._focused;
                                if (!u) {
                                    var r = I(n);
                                    r ? i !== r && (i && A(i, n), t || (t = i), i = G._focused = e = r) : e && e === i && (t && !t.isInserted() && (t = null), i = G._focused = t, t = null, P())
                                }
                                i && A(i, n)
                            }, f[n] = function() { u = !0 }, f[o] = function(t) {
                                var e = G._focused;
                                e && h && e._handleMouseEvent("mouseup", t), u = h = !1
                            }, $.add(a, f), $.add(s, { load: P });
                            var d, _, g, v, p, m, y, w, x = !1,
                                b = !1,
                                C = { doubleclick: "click", mousedrag: "mousemove" },
                                S = !1,
                                k = { mousedown: { mousedown: 1, mousedrag: 1, click: 1, doubleclick: 1 }, mouseup: { mouseup: 1, mousedrag: 1, click: 1, doubleclick: 1 }, mousemove: { mousedrag: 1, mousemove: 1, mouseenter: 1, mouseleave: 1 } };
                            return {
                                _viewEvents: c,
                                _handleMouseEvent: function(t, e, n) {
                                    var i = this._itemEvents,
                                        r = i.native[t],
                                        s = "mousemove" === t,
                                        a = this._scope.tool,
                                        o = this;

                                    function u(t) { return i.virtual[t] || o.responds(t) || a && a.responds(t) }
                                    s && h && u("mousedrag") && (t = "mousedrag"), n || (n = this.getEventPoint(e));
                                    var l = this.getBounds().contains(n),
                                        c = r && l && o._project.hitTest(n, { tolerance: 0, fill: !0, stroke: !0 }),
                                        f = c && c.item || null,
                                        C = !1,
                                        k = {};
                                    if (k[t.substr(5)] = !0, r && f !== v && (v && M(v, null, "mouseleave", e, n), f && M(f, null, "mouseenter", e, n), v = f), S ^ l && (M(this, null, l ? "mouseenter" : "mouseleave", e, n), l ? this : null, C = !0), !l && !k.drag || n.equals(_) || (T(this, f, s ? t : "mousemove", e, n, _), C = !0), S = l, k.down && l || k.up && d) {
                                        if (T(this, f, t, e, n, d), k.down) {
                                            if (w = f === m && Date.now() - y < 300, g = m = f, !b && f) {
                                                for (var I = f; I && !I.responds("mousedrag");) I = I._parent;
                                                I && (p = f)
                                            }
                                            d = n
                                        } else k.up && (b || f !== g || (y = Date.now(), T(this, f, w ? "doubleclick" : "click", e, n, d), w = !1), g = p = null);
                                        S = !1, C = !0
                                    }
                                    _ = n, C && a && (x = a._handleMouseEvent(t, e, n, k) || x), (x && !k.move || k.down && u("mouseup")) && e.preventDefault()
                                },
                                _handleKeyEvent: function(t, e, n, i) {
                                    var s, a = this._scope,
                                        o = a.tool;

                                    function h(o) { o.responds(t) && (r = a, o.emit(t, s = s || new K(t, e, n, i))) }
                                    this.isVisible() && (h(this), o && o.responds(t) && h(o))
                                },
                                _countItemEvent: function(t, e) {
                                    var n = this._itemEvents,
                                        i = n.native,
                                        r = n.virtual;
                                    for (var s in k) i[s] = (i[s] || 0) + (k[s][t] || 0) * e;
                                    r[t] = (r[t] || 0) + e
                                },
                                statics: { updateFocus: P }
                            }
                        }

                        function I(t) { var e = $.getTarget(t); return e.getAttribute && G._viewsById[e.getAttribute("id")] }

                        function P() {
                            var t = G._focused;
                            if (!t || !t.isVisible())
                                for (var n = 0, i = G._views.length; n < i; n++)
                                    if ((t = G._views[n]).isVisible()) { G._focused = e = t; break }
                        }

                        function A(t, e, n) { t._handleMouseEvent("mousemove", e, n) }

                        function M(t, e, n, i, r, s, a) {
                            var o, h = !1;

                            function u(t, n) { if (t.responds(n)) { if (o || (o = new Q(n, i, r, e || t, s ? r.subtract(s) : null)), t.emit(n, o) && (x = !0, o.prevented && (b = !0), o.stopped)) return h = !0 } else { var a = C[n]; if (a) return u(t, a) } }
                            for (; t && t !== a && !u(t, n);) t = t._parent;
                            return h
                        }

                        function T(t, e, n, i, r, s) { return t._project.removeOn(n), b = x = !1, p && M(p, null, n, i, r, s) || e && e !== p && !e.isDescendant(p) && M(e, null, n, i, r, s, p) || M(t, p || e || t, n, i, r, s) }
                    }),
                    J = G.extend({
                        _class: "CanvasView",
                        initialize: function(t, e) {
                            if (!(e instanceof s.HTMLCanvasElement)) {
                                var n = v.read(arguments, 1);
                                if (n.isZero()) throw new Error("Cannot create CanvasView with the provided argument: " + o.slice(arguments, 1));
                                e = it.getCanvas(n)
                            }
                            var i = this._context = e.getContext("2d");
                            if (i.save(), this._pixelRatio = 1, !/^off|false$/.test(u.getAttribute(e, "hidpi"))) {
                                var r = s.devicePixelRatio || 1,
                                    a = W.getPrefixed(i, "backingStorePixelRatio") || 1;
                                this._pixelRatio = r / a
                            }
                            G.call(this, t, e), this._needsUpdate = !0
                        },
                        remove: function t() { return this._context.restore(), t.base.call(this) },
                        _setElementSize: function t(e, n) {
                            var i = this._pixelRatio;
                            if (t.base.call(this, e * i, n * i), 1 !== i) {
                                var r = this._element,
                                    s = this._context;
                                if (!u.hasAttribute(r, "resize")) {
                                    var a = r.style;
                                    a.width = e + "px", a.height = n + "px"
                                }
                                s.restore(), s.save(), s.scale(i, i)
                            }
                        },
                        getPixelSize: function t(e) {
                            var n, i = r.agent;
                            if (i && i.firefox) n = t.base.call(this, e);
                            else {
                                var s = this._context,
                                    a = s.font;
                                s.font = e + " serif", n = parseFloat(s.font), s.font = a
                            }
                            return n
                        },
                        getTextWidth: function(t, e) {
                            var n = this._context,
                                i = n.font,
                                r = 0;
                            n.font = t;
                            for (var s = 0, a = e.length; s < a; s++) r = Math.max(r, n.measureText(e[s]).width);
                            return n.font = i, r
                        },
                        update: function() {
                            if (!this._needsUpdate) return !1;
                            var t = this._project,
                                e = this._context,
                                n = this._viewSize;
                            return e.clearRect(0, 0, n.width + 1, n.height + 1), t && t.draw(e, this._matrix, this._pixelRatio), this._needsUpdate = !1, !0
                        }
                    }),
                    X = o.extend({ _class: "Event", initialize: function(t) { this.event = t, this.type = t && t.type }, prevented: !1, stopped: !1, preventDefault: function() { this.prevented = !0, this.event.preventDefault() }, stopPropagation: function() { this.stopped = !0, this.event.stopPropagation() }, stop: function() { this.stopPropagation(), this.preventDefault() }, getTimeStamp: function() { return this.event.timeStamp }, getModifiers: function() { return Y.modifiers } }),
                    K = X.extend({ _class: "KeyEvent", initialize: function(t, e, n, i) { this.type = t, this.event = e, this.key = n, this.character = i }, toString: function() { return "{ type: '" + this.type + "', key: '" + this.key + "', character: '" + this.character + "', modifiers: " + this.getModifiers() + " }" } }),
                    Y = new function() {
                        var t, e, i = { "\t": "tab", " ": "space", "\b": "backspace", "": "delete", Spacebar: "space", Del: "delete", Win: "meta", Esc: "escape" },
                            h = { tab: "\t", space: " ", enter: "\r" },
                            u = {},
                            l = {},
                            c = new o({ shift: !1, control: !1, alt: !1, meta: !1, capsLock: !1, space: !1 }).inject({ option: { get: function() { return this.alt } }, command: { get: function() { var t = r && r.agent; return t && t.mac ? this.meta : this.control } } });

                        function f(t) { var e = t.key || t.keyIdentifier; return e = /^U\+/.test(e) ? String.fromCharCode(parseInt(e.substr(2), 16)) : /^Arrow[A-Z]/.test(e) ? e.substr(5) : "Unidentified" === e || e === n ? String.fromCharCode(t.keyCode) : e, i[e] || (e.length > 1 ? o.hyphenate(e) : e.toLowerCase()) }

                        function d(e, n, i, s) {
                            var a, h = G._focused;
                            if (u[n] = e, e ? l[n] = i : delete l[n], n.length > 1 && (a = o.camelize(n)) in c) {
                                c[a] = e;
                                var f = r && r.agent;
                                if ("meta" === a && f && f.mac)
                                    if (e) t = {};
                                    else {
                                        for (var _ in t) _ in l && d(!1, _, t[_], s);
                                        t = null
                                    }
                            } else e && t && (t[n] = i);
                            h && h._handleKeyEvent(e ? "keydown" : "keyup", s, n, i)
                        }
                        return $.add(a, {
                            keydown: function(t) {
                                var n = f(t),
                                    i = r && r.agent;
                                n.length > 1 || i && i.chrome && (t.altKey || i.mac && t.metaKey || !i.mac && t.ctrlKey) ? d(!0, n, h[n] || (n.length > 1 ? "" : n), t) : e = n
                            },
                            keypress: function(t) {
                                if (e) {
                                    var n = f(t),
                                        i = t.charCode,
                                        r = i >= 32 ? String.fromCharCode(i) : n.length > 1 ? "" : n;
                                    n !== e && (n = r.toLowerCase()), d(!0, n, r, t), e = null
                                }
                            },
                            keyup: function(t) {
                                var e = f(t);
                                e in l && d(!1, e, l[e], t)
                            }
                        }), $.add(s, { blur: function(t) { for (var e in l) d(!1, e, l[e], t) } }), { modifiers: c, isDown: function(t) { return !!u[t] } }
                    },
                    Q = X.extend({ _class: "MouseEvent", initialize: function(t, e, n, i, r) { this.type = t, this.event = e, this.point = n, this.target = i, this.delta = r }, toString: function() { return "{ type: '" + this.type + "', point: " + this.point + ", target: " + this.target + (this.delta ? ", delta: " + this.delta : "") + ", modifiers: " + this.getModifiers() + " }" } }),
                    tt = X.extend({
                        _class: "ToolEvent",
                        _item: null,
                        initialize: function(t, e, n) { this.tool = t, this.type = e, this.event = n },
                        _choosePoint: function(t, e) { return t || (e ? e.clone() : null) },
                        getPoint: function() { return this._choosePoint(this._point, this.tool._point) },
                        setPoint: function(t) { this._point = t },
                        getLastPoint: function() { return this._choosePoint(this._lastPoint, this.tool._lastPoint) },
                        setLastPoint: function(t) { this._lastPoint = t },
                        getDownPoint: function() { return this._choosePoint(this._downPoint, this.tool._downPoint) },
                        setDownPoint: function(t) { this._downPoint = t },
                        getMiddlePoint: function() { return !this._middlePoint && this.tool._lastPoint ? this.tool._point.add(this.tool._lastPoint).divide(2) : this._middlePoint },
                        setMiddlePoint: function(t) { this._middlePoint = t },
                        getDelta: function() { return !this._delta && this.tool._lastPoint ? this.tool._point.subtract(this.tool._lastPoint) : this._delta },
                        setDelta: function(t) { this._delta = t },
                        getCount: function() { return this.tool[/^mouse(down|up)$/.test(this.type) ? "_downCount" : "_moveCount"] },
                        setCount: function(t) { this.tool[/^mouse(down|up)$/.test(this.type) ? "downCount" : "count"] = t },
                        getItem: function() {
                            if (!this._item) {
                                var t = this.tool._scope.project.hitTest(this.getPoint());
                                if (t) {
                                    for (var e = t.item, n = e._parent;
                                        /^(Group|CompoundPath)$/.test(n._class);) e = n, n = n._parent;
                                    this._item = e
                                }
                            }
                            return this._item
                        },
                        setItem: function(t) { this._item = t },
                        toString: function() { return "{ type: " + this.type + ", point: " + this.getPoint() + ", count: " + this.getCount() + ", modifiers: " + this.getModifiers() + " }" }
                    }),
                    et = l.extend({
                        _class: "Tool",
                        _list: "tools",
                        _reference: "tool",
                        _events: ["onMouseDown", "onMouseUp", "onMouseDrag", "onMouseMove", "onActivate", "onDeactivate", "onEditOptions", "onKeyDown", "onKeyUp"],
                        initialize: function(t) { l.call(this), this._moveCount = -1, this._downCount = -1, this.set(t) },
                        getMinDistance: function() { return this._minDistance },
                        setMinDistance: function(t) { this._minDistance = t, null != t && null != this._maxDistance && t > this._maxDistance && (this._maxDistance = t) },
                        getMaxDistance: function() { return this._maxDistance },
                        setMaxDistance: function(t) { this._maxDistance = t, null != this._minDistance && null != t && t < this._minDistance && (this._minDistance = t) },
                        getFixedDistance: function() { return this._minDistance == this._maxDistance ? this._minDistance : null },
                        setFixedDistance: function(t) { this._minDistance = this._maxDistance = t },
                        _handleMouseEvent: function(t, e, n, i) {
                            r = this._scope, i.drag && !this.responds(t) && (t = "mousemove");
                            var s = i.move || i.drag,
                                a = this.responds(t),
                                o = this.minDistance,
                                h = this.maxDistance,
                                u = !1,
                                l = this;

                            function c(t, e) {
                                var r = n,
                                    a = s ? l._point : l._downPoint || r;
                                if (s) {
                                    if (l._moveCount && r.equals(a)) return !1;
                                    if (a && (null != t || null != e)) {
                                        var o = r.subtract(a),
                                            h = o.getLength();
                                        if (h < (t || 0)) return !1;
                                        e && (r = a.add(o.normalize(Math.min(h, e))))
                                    }
                                    l._moveCount++
                                }
                                return l._point = r, l._lastPoint = a || r, i.down && (l._moveCount = -1, l._downPoint = r, l._downCount++), !0
                            }

                            function f() { a && (u = l.emit(t, new tt(l, t, e)) || u) }
                            if (i.down) c(), f();
                            else if (i.up) c(null, h), f();
                            else if (a)
                                for (; c(o, h);) f();
                            return u
                        }
                    }),
                    nt = {
                        request: function(t) {
                            var n = new e.XMLHttpRequest;
                            return n.open((t.method || "get").toUpperCase(), t.url, o.pick(t.async, !0)), t.mimeType && n.overrideMimeType(t.mimeType), n.onload = function() {
                                var e = n.status;
                                0 === e || 200 === e ? t.onLoad && t.onLoad.call(n, n.responseText) : n.onerror()
                            }, n.onerror = function() {
                                var e = n.status,
                                    i = 'Could not load "' + t.url + '" (Status: ' + e + ")";
                                if (!t.onError) throw new Error(i);
                                t.onError(i, e)
                            }, n.send(null)
                        }
                    },
                    it = {
                        canvases: [],
                        getCanvas: function(t, e) { if (!s) return null; var n, r = !0; "object" === (void 0 === t ? "undefined" : i(t)) && (e = t.height, t = t.width), this.canvases.length ? n = this.canvases.pop() : (n = a.createElement("canvas"), r = !1); var o = n.getContext("2d"); if (!o) throw new Error("Canvas " + n + " is unable to provide a 2D context."); return n.width === t && n.height === e ? r && o.clearRect(0, 0, t + 1, e + 1) : (n.width = t, n.height = e), o.save(), n },
                        getContext: function(t, e) { var n = this.getCanvas(t, e); return n ? n.getContext("2d") : null },
                        release: function(t) {
                            var e = t && t.canvas ? t.canvas : t;
                            e && e.getContext && (e.getContext("2d").restore(), this.canvases.push(e))
                        }
                    },
                    rt = new function() {
                        var t, e, n, i, r, s, a, h, u, l, c, f = Math.min,
                            d = Math.max,
                            _ = Math.abs;

                        function g(t, e, n) { return .2989 * t + .587 * e + .114 * n }

                        function v(t, e, n, i) {
                            var r = i - g(t, e, n),
                                s = (i = g(u = t + r, l = e + r, c = n + r), f(u, l, c)),
                                a = d(u, l, c);
                            if (s < 0) {
                                var o = i - s;
                                u = i + (u - i) * i / o, l = i + (l - i) * i / o, c = i + (c - i) * i / o
                            }
                            if (a > 255) {
                                var h = 255 - i,
                                    _ = a - i;
                                u = i + (u - i) * h / _, l = i + (l - i) * h / _, c = i + (c - i) * h / _
                            }
                        }

                        function p(t, e, n) { return d(t, e, n) - f(t, e, n) }

                        function m(t, e, n, i) {
                            var r, s = [t, e, n],
                                a = d(t, e, n),
                                o = f(t, e, n);
                            r = 0 === f(o = o === t ? 0 : o === e ? 1 : 2, a = a === t ? 0 : a === e ? 1 : 2) ? 1 === d(o, a) ? 2 : 1 : 0, s[a] > s[o] ? (s[r] = (s[r] - s[o]) * i / (s[a] - s[o]), s[a] = i) : s[r] = s[a] = 0, s[o] = 0, u = s[0], l = s[1], c = s[2]
                        }
                        var y = {
                                multiply: function() { u = r * t / 255, l = s * e / 255, c = a * n / 255 },
                                screen: function() { u = r + t - r * t / 255, l = s + e - s * e / 255, c = a + n - a * n / 255 },
                                overlay: function() { u = r < 128 ? 2 * r * t / 255 : 255 - 2 * (255 - r) * (255 - t) / 255, l = s < 128 ? 2 * s * e / 255 : 255 - 2 * (255 - s) * (255 - e) / 255, c = a < 128 ? 2 * a * n / 255 : 255 - 2 * (255 - a) * (255 - n) / 255 },
                                "soft-light": function() {
                                    var i = t * r / 255;
                                    u = i + r * (255 - (255 - r) * (255 - t) / 255 - i) / 255, l = (i = e * s / 255) + s * (255 - (255 - s) * (255 - e) / 255 - i) / 255, c = (i = n * a / 255) + a * (255 - (255 - a) * (255 - n) / 255 - i) / 255
                                },
                                "hard-light": function() { u = t < 128 ? 2 * t * r / 255 : 255 - 2 * (255 - t) * (255 - r) / 255, l = e < 128 ? 2 * e * s / 255 : 255 - 2 * (255 - e) * (255 - s) / 255, c = n < 128 ? 2 * n * a / 255 : 255 - 2 * (255 - n) * (255 - a) / 255 },
                                "color-dodge": function() { u = 0 === r ? 0 : 255 === t ? 255 : f(255, 255 * r / (255 - t)), l = 0 === s ? 0 : 255 === e ? 255 : f(255, 255 * s / (255 - e)), c = 0 === a ? 0 : 255 === n ? 255 : f(255, 255 * a / (255 - n)) },
                                "color-burn": function() { u = 255 === r ? 255 : 0 === t ? 0 : d(0, 255 - 255 * (255 - r) / t), l = 255 === s ? 255 : 0 === e ? 0 : d(0, 255 - 255 * (255 - s) / e), c = 255 === a ? 255 : 0 === n ? 0 : d(0, 255 - 255 * (255 - a) / n) },
                                darken: function() { u = r < t ? r : t, l = s < e ? s : e, c = a < n ? a : n },
                                lighten: function() { u = r > t ? r : t, l = s > e ? s : e, c = a > n ? a : n },
                                difference: function() {
                                    (u = r - t) < 0 && (u = -u), (l = s - e) < 0 && (l = -l), (c = a - n) < 0 && (c = -c)
                                },
                                exclusion: function() { u = r + t * (255 - r - r) / 255, l = s + e * (255 - s - s) / 255, c = a + n * (255 - a - a) / 255 },
                                hue: function() { m(t, e, n, p(r, s, a)), v(u, l, c, g(r, s, a)) },
                                saturation: function() { m(r, s, a, p(t, e, n)), v(u, l, c, g(r, s, a)) },
                                luminosity: function() { v(r, s, a, g(t, e, n)) },
                                color: function() { v(t, e, n, g(r, s, a)) },
                                add: function() { u = f(r + t, 255), l = f(s + e, 255), c = f(a + n, 255) },
                                subtract: function() { u = d(r - t, 0), l = d(s - e, 0), c = d(a - n, 0) },
                                average: function() { u = (r + t) / 2, l = (s + e) / 2, c = (a + n) / 2 },
                                negation: function() { u = 255 - _(255 - t - r), l = 255 - _(255 - e - s), c = 255 - _(255 - n - a) }
                            },
                            w = this.nativeModes = o.each(["source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "lighter", "darker", "copy", "xor"], function(t) { this[t] = !0 }, {}),
                            x = it.getContext(1, 1);
                        x && (o.each(y, function(t, e) {
                            var n = "darken" === e,
                                i = !1;
                            x.save();
                            try { x.fillStyle = n ? "#300" : "#a00", x.fillRect(0, 0, 1, 1), x.globalCompositeOperation = e, x.globalCompositeOperation === e && (x.fillStyle = n ? "#a00" : "#300", x.fillRect(0, 0, 1, 1), i = x.getImageData(0, 0, 1, 1).data[0] !== n ? 170 : 51) } catch (t) {}
                            x.restore(), w[e] = i
                        }), it.release(x)), this.process = function(o, f, d, _, g) {
                            var v = f.canvas,
                                p = "normal" === o;
                            if (p || w[o]) d.save(), d.setTransform(1, 0, 0, 1, 0, 0), d.globalAlpha = _, p || (d.globalCompositeOperation = o), d.drawImage(v, g.x, g.y), d.restore();
                            else {
                                var m = y[o];
                                if (!m) return;
                                for (var x = d.getImageData(g.x, g.y, v.width, v.height), b = x.data, C = f.getImageData(0, 0, v.width, v.height).data, S = 0, k = b.length; S < k; S += 4) {
                                    t = C[S], r = b[S], e = C[S + 1], s = b[S + 1], n = C[S + 2], a = b[S + 2], i = C[S + 3], h = b[S + 3], m();
                                    var I = i * _ / 255,
                                        P = 1 - I;
                                    b[S] = I * u + P * r, b[S + 1] = I * l + P * s, b[S + 2] = I * c + P * a, b[S + 3] = i * _ + P * h
                                }
                                d.putImageData(x, g.x, g.y)
                            }
                        }
                    },
                    st = new function() {
                        var t = "http://www.w3.org/2000/svg",
                            e = "http://www.w3.org/2000/xmlns",
                            n = "http://www.w3.org/1999/xlink",
                            i = { href: n, xlink: e, xmlns: e + "/", "xmlns:xlink": e + "/" };

                        function r(t, e, n) {
                            for (var r in e) {
                                var s = e[r],
                                    a = i[r];
                                "number" == typeof s && n && (s = n.number(s)), a ? t.setAttributeNS(a, r, s) : t.setAttribute(r, s)
                            }
                            return t
                        }
                        return {
                            svg: t,
                            xmlns: e,
                            xlink: n,
                            create: function(e, n, i) { return r(a.createElementNS(t, e), n, i) },
                            get: function(t, e) {
                                var n = i[e],
                                    r = n ? t.getAttributeNS(n, e) : t.getAttribute(e);
                                return "null" === r ? null : r
                            },
                            set: r
                        }
                    },
                    at = o.each({ fillColor: ["fill", "color"], fillRule: ["fill-rule", "string"], strokeColor: ["stroke", "color"], strokeWidth: ["stroke-width", "number"], strokeCap: ["stroke-linecap", "string"], strokeJoin: ["stroke-linejoin", "string"], strokeScaling: ["vector-effect", "lookup", { true: "none", false: "non-scaling-stroke" }, function(t, e) { return !e && (t instanceof N || t instanceof I || t instanceof R) }], miterLimit: ["stroke-miterlimit", "number"], dashArray: ["stroke-dasharray", "array"], dashOffset: ["stroke-dashoffset", "number"], fontFamily: ["font-family", "string"], fontWeight: ["font-weight", "string"], fontSize: ["font-size", "number"], justification: ["text-anchor", "lookup", { left: "start", center: "middle", right: "end" }], opacity: ["opacity", "number"], blendMode: ["mix-blend-mode", "style"] }, function(t, e) {
                        var n = o.capitalize(e),
                            i = t[2];
                        this[e] = { type: t[1], property: e, attribute: t[0], toSVG: i, fromSVG: i && o.each(i, function(t, e) { this[t] = e }, {}), exportFilter: t[3], get: "get" + n, set: "set" + n }
                    }, {});
                return new function() {
                    var t;

                    function n(e, n, i) {
                        var r = new o,
                            s = e.getTranslation();
                        if (n) {
                            var a = (e = e._shiftless())._inverseTransform(s);
                            r[i ? "cx" : "x"] = a.x, r[i ? "cy" : "y"] = a.y, s = null
                        }
                        if (!e.isIdentity()) {
                            var h = e.decompose();
                            if (h) {
                                var u = [],
                                    l = h.rotation,
                                    c = h.scaling,
                                    d = h.skewing;
                                s && !s.isZero() && u.push("translate(" + t.point(s) + ")"), l && u.push("rotate(" + t.number(l) + ")"), f.isZero(c.x - 1) && f.isZero(c.y - 1) || u.push("scale(" + t.point(c) + ")"), d.x && u.push("skewX(" + t.number(d.x) + ")"), d.y && u.push("skewY(" + t.number(d.y) + ")"), r.transform = u.join(" ")
                            } else r.transform = "matrix(" + e.getValues().join(",") + ")"
                        }
                        return r
                    }

                    function i(e, i) {
                        for (var r = n(e._matrix), s = e._children, a = st.create("g", r, t), o = 0, h = s.length; o < h; o++) {
                            var u = s[o],
                                c = g(u, i);
                            if (c)
                                if (u.isClipMask()) {
                                    var f = st.create("clipPath");
                                    f.appendChild(c), l(u, f, "clip"), st.set(a, { "clip-path": "url(#" + f.id + ")" })
                                } else a.appendChild(c)
                        }
                        return a
                    }

                    function r(e) {
                        var i = e._type,
                            r = e._radius,
                            s = n(e._matrix, !0, "rectangle" !== i);
                        if ("rectangle" === i) {
                            i = "rect";
                            var a = e._size,
                                o = a.width,
                                h = a.height;
                            s.x -= o / 2, s.y -= h / 2, s.width = o, s.height = h, r.isZero() && (r = null)
                        }
                        return r && ("circle" === i ? s.r = r : (s.rx = r.width, s.ry = r.height)), st.create(i, s, t)
                    }
                    var s, a = {
                        Group: i,
                        Layer: i,
                        Raster: function(e, i) {
                            var r = n(e._matrix, !0),
                                s = e.getSize(),
                                a = e.getImage();
                            return r.x -= s.width / 2, r.y -= s.height / 2, r.width = s.width, r.height = s.height, r.href = 0 == i.embedImages && a && a.src || e.toDataURL(), st.create("image", r, t)
                        },
                        Path: function(e, i) {
                            var s = i.matchShapes;
                            if (s) { var a = e.toShape(!1); if (a) return r(a) }
                            var o, h = e._segments,
                                u = h.length,
                                l = n(e._matrix);
                            if (s && u >= 2 && !e.hasHandles())
                                if (u > 2) {
                                    o = e._closed ? "polygon" : "polyline";
                                    for (var c = [], f = 0; f < u; f++) c.push(t.point(h[f]._point));
                                    l.points = c.join(" ")
                                } else {
                                    o = "line";
                                    var d = h[0]._point,
                                        _ = h[1]._point;
                                    l.set({ x1: d.x, y1: d.y, x2: _.x, y2: _.y })
                                }
                            else o = "path", l.d = e.getPathData(null, i.precision);
                            return st.create(o, l, t)
                        },
                        Shape: r,
                        CompoundPath: function(e, i) {
                            var r = n(e._matrix),
                                s = e.getPathData(null, i.precision);
                            return s && (r.d = s), st.create("path", r, t)
                        },
                        SymbolItem: function(e, i) {
                            var r = n(e._matrix, !0),
                                s = e._definition,
                                a = u(s, "symbol"),
                                o = s._item,
                                h = o.getBounds();
                            return a || ((a = st.create("symbol", { viewBox: t.rectangle(h) })).appendChild(g(o, i)), l(s, a, "symbol")), r.href = "#" + a.id, r.x += h.x, r.y += h.y, r.width = h.width, r.height = h.height, r.overflow = "visible", st.create("use", r, t)
                        },
                        PointText: function(e) { var i = st.create("text", n(e._matrix, !0), t); return i.textContent = e._content, i }
                    };

                    function h(e, n, i) {
                        var r = {},
                            s = !i && e.getParent(),
                            a = [];
                        return null != e._name && (r.id = e._name), o.each(at, function(n) {
                            var i = n.get,
                                h = n.type,
                                c = e[i]();
                            if (n.exportFilter ? n.exportFilter(e, c) : !s || !o.equals(s[i](), c)) {
                                if ("color" === h && null != c) {
                                    var f = c.getAlpha();
                                    f < 1 && (r[n.attribute + "-opacity"] = f)
                                }
                                "style" === h ? a.push(n.attribute + ": " + c) : r[n.attribute] = null == c ? "none" : "color" === h ? c.gradient ? function(e) {
                                    var n = u(e, "color");
                                    if (!n) {
                                        var i, r = e.getGradient(),
                                            s = r._radial,
                                            a = e.getOrigin(),
                                            o = e.getDestination();
                                        if (s) {
                                            i = { cx: a.x, cy: a.y, r: a.getDistance(o) };
                                            var h = e.getHighlight();
                                            h && (i.fx = h.x, i.fy = h.y)
                                        } else i = { x1: a.x, y1: a.y, x2: o.x, y2: o.y };
                                        i.gradientUnits = "userSpaceOnUse", n = st.create((s ? "radial" : "linear") + "Gradient", i, t);
                                        for (var c = r._stops, f = 0, d = c.length; f < d; f++) {
                                            var _ = c[f],
                                                g = _._color,
                                                v = g.getAlpha(),
                                                p = _._offset;
                                            i = { offset: null == p ? f / (d - 1) : p }, g && (i["stop-color"] = g.toCSS(!0)), v < 1 && (i["stop-opacity"] = v), n.appendChild(st.create("stop", i, t))
                                        }
                                        l(e, n, "color")
                                    }
                                    return "url(#" + n.id + ")"
                                }(c) : c.toCSS(!0) : "array" === h ? c.join(",") : "lookup" === h ? n.toSVG[c] : c
                            }
                        }), a.length && (r.style = a.join(";")), 1 === r.opacity && delete r.opacity, e._visible || (r.visibility = "hidden"), st.set(n, r, t)
                    }

                    function u(t, e) { return s || (s = { ids: {}, svgs: {} }), t && s.svgs[e + "-" + (t._id || t.__id || (t.__id = d.get("svg")))] }

                    function l(t, e, n) {
                        s || u();
                        var i = s.ids[n] = (s.ids[n] || 0) + 1;
                        e.id = n + "-" + i, s.svgs[n + "-" + (t._id || t.__id)] = e
                    }

                    function _(t, n) {
                        var i = t,
                            r = null;
                        if (s) {
                            for (var a in i = "svg" === t.nodeName.toLowerCase() && t, s.svgs) r || (i || (i = st.create("svg")).appendChild(t), r = i.insertBefore(st.create("defs"), i.firstChild)), r.appendChild(s.svgs[a]);
                            s = null
                        }
                        return n.asString ? (new e.XMLSerializer).serializeToString(i) : i
                    }

                    function g(t, e, n) {
                        var i = a[t._class],
                            r = i && i(t, e);
                        if (r) {
                            var s = e.onExport;
                            s && (r = s(t, r, e) || r);
                            var o = JSON.stringify(t._data);
                            o && "{}" !== o && "null" !== o && r.setAttribute("data-paper-data", o)
                        }
                        return r && h(t, r, n)
                    }

                    function v(e) { return e || (e = {}), t = new c(e.precision), e }
                    C.inject({ exportSVG: function(t) { return _(g(this, t = v(t), !0), t) } }), b.inject({
                        exportSVG: function(e) {
                            e = v(e);
                            var i = this._children,
                                r = this.getView(),
                                s = o.pick(e.bounds, "view"),
                                a = e.matrix || "view" === s && r._matrix,
                                h = a && w.read([a]),
                                u = "view" === s ? new m([0, 0], r.getViewSize()) : "content" === s ? C._getBounds(i, h, { stroke: !0 }).rect : m.read([s], 0, { readNull: !0 }),
                                l = { version: "1.1", xmlns: st.svg, "xmlns:xlink": st.xlink };
                            u && (l.width = u.width, l.height = u.height, (u.x || u.y) && (l.viewBox = t.rectangle(u)));
                            var c = st.create("svg", l, t),
                                f = c;
                            h && !h.isIdentity() && (f = c.appendChild(st.create("g", n(h), t)));
                            for (var d = 0, p = i.length; d < p; d++) f.appendChild(g(i[d], e, !0));
                            return _(c, e)
                        }
                    })
                }, new function() {
                    var t, h = {};

                    function u(e, n, i, r, s) {
                        var a = st.get(e, n),
                            o = null == a ? r ? null : i ? "" : 0 : i ? a : parseFloat(a);
                        return /%\s*$/.test(a) ? o / 100 * (s ? 1 : t[/x|^width/.test(n) ? "width" : "height"]) : o
                    }

                    function l(t, e, n, i, r) { return e = u(t, e || "x", !1, i, r), n = u(t, n || "y", !1, i, r), !i || null != e && null != n ? new _(e, n) : null }

                    function c(t, e, n, i, r) { return e = u(t, e || "width", !1, i, r), n = u(t, n || "height", !1, i, r), !i || null != e && null != n ? new v(e, n) : null }

                    function f(t, e, n) { return "none" === t ? null : "number" === e ? parseFloat(t) : "array" === e ? t ? t.split(/[\s,]+/g).map(parseFloat) : [] : "color" === e ? O(t) || t : "lookup" === e ? n[t] : t }

                    function d(t, e, n, i) {
                        var r = t.childNodes,
                            s = "clippath" === e,
                            a = "defs" === e,
                            o = new S,
                            h = o._project,
                            u = h._currentStyle,
                            l = [];
                        if (s || a || (o = z(o, t, i), h._currentStyle = o._style.clone()), i)
                            for (var c = t.querySelectorAll("defs"), f = 0, d = c.length; f < d; f++) L(c[f], n, !1);
                        for (f = 0, d = r.length; f < d; f++) {
                            var _, g = r[f];
                            1 !== g.nodeType || /^defs$/i.test(g.nodeName) || !(_ = L(g, n, !1)) || _ instanceof M || l.push(_)
                        }
                        return o.addChildren(l), s && (o = z(o.reduce(), t, i)), h._currentStyle = u, (s || a) && (o.remove(), o = null), o
                    }

                    function g(t, e) { for (var n = t.getAttribute("points").match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g), i = [], r = 0, s = n.length; r < s; r += 2) i.push(new _(parseFloat(n[r]), parseFloat(n[r + 1]))); var a = new B(i); return "polygon" === e && a.closePath(), a }

                    function p(t, e) {
                        var n, i = (u(t, "href", !0) || "").substring(1),
                            r = "radialgradient" === e;
                        if (i)(n = h[i].getGradient())._radial ^ r && ((n = n.clone())._radial = r);
                        else {
                            for (var s = t.childNodes, a = [], o = 0, c = s.length; o < c; o++) {
                                var f = s[o];
                                1 === f.nodeType && a.push(z(new H, f))
                            }
                            n = new U(a, r)
                        }
                        var d, _, g, v = "userSpaceOnUse" !== u(t, "gradientUnits", !0);
                        return r ? (_ = (d = l(t, "cx", "cy", !1, v)).add(u(t, "r", !1, !1, v), 0), g = l(t, "fx", "fy", !0, v)) : (d = l(t, "x1", "y1", !1, v), _ = l(t, "x2", "y2", !1, v)), z(new V(n, d, _, g), t)._scaleToBounds = v, null
                    }
                    var y = {
                        "#document": function(t, e, n, i) { for (var r = t.childNodes, s = 0, a = r.length; s < a; s++) { var o = r[s]; if (1 === o.nodeType) return L(o, n, i) } },
                        g: d,
                        svg: d,
                        clippath: d,
                        polygon: g,
                        polyline: g,
                        path: function(t) { return N.create(t.getAttribute("d")) },
                        lineargradient: p,
                        radialgradient: p,
                        image: function(t) {
                            var e = new P(u(t, "href", !0));
                            return e.on("load", function() {
                                var e = c(t);
                                this.setSize(e);
                                var n = this._matrix._transformPoint(l(t).add(e.divide(2)));
                                this.translate(n)
                            }), e
                        },
                        symbol: function(t, e, n, i) { return new M(d(t, e, n, i), !0) },
                        defs: d,
                        use: function(t) {
                            var e = (u(t, "href", !0) || "").substring(1),
                                n = h[e],
                                i = l(t);
                            return n ? n instanceof M ? n.place(i) : n.clone().translate(i) : null
                        },
                        circle: function(t) { return new I.Circle(l(t, "cx", "cy"), u(t, "r")) },
                        ellipse: function(t) { return new I.Ellipse({ center: l(t, "cx", "cy"), radius: c(t, "rx", "ry") }) },
                        rect: function(t) { return new I.Rectangle(new m(l(t), c(t)), c(t, "rx", "ry")) },
                        line: function(t) { return new B.Line(l(t, "x1", "y1"), l(t, "x2", "y2")) },
                        text: function(t) { var e = new q(l(t).add(l(t, "dx", "dy"))); return e.setContent(t.textContent.trim() || ""), e }
                    };

                    function x(t, e, n, i) {
                        if (t.transform) {
                            for (var r = (i.getAttribute(n) || "").split(/\)\s*/g), s = new w, a = 0, o = r.length; a < o; a++) {
                                var h = r[a];
                                if (!h) break;
                                for (var u = h.split(/\(\s*/), l = u[0], c = u[1].split(/[\s,]+/g), f = 0, d = c.length; f < d; f++) c[f] = parseFloat(c[f]);
                                switch (l) {
                                    case "matrix":
                                        s.append(new w(c[0], c[1], c[2], c[3], c[4], c[5]));
                                        break;
                                    case "rotate":
                                        s.rotate(c[0], c[1], c[2]);
                                        break;
                                    case "translate":
                                        s.translate(c[0], c[1]);
                                        break;
                                    case "scale":
                                        s.scale(c);
                                        break;
                                    case "skewX":
                                        s.skew(c[0], 0);
                                        break;
                                    case "skewY":
                                        s.skew(0, c[0])
                                }
                            }
                            t.transform(s)
                        }
                    }

                    function k(t, e, n) {
                        var i = "fill-opacity" === n ? "getFillColor" : "getStrokeColor",
                            r = t[i] && t[i]();
                        r && r.setAlpha(parseFloat(e))
                    }
                    var A = o.set(o.each(at, function(t) {
                        this[t.attribute] = function(e, n) {
                            if (e[t.set] && (e[t.set](f(n, t.type, t.fromSVG)), "color" === t.type)) {
                                var i = e[t.get]();
                                if (i && i._scaleToBounds) {
                                    var r = e.getBounds();
                                    i.transform((new w).translate(r.getPoint()).scale(r.getSize()))
                                }
                            }
                        }
                    }, {}), {
                        id: function(t, e) { h[e] = t, t.setName && t.setName(e) },
                        "clip-path": function(t, e) {
                            var n = O(e);
                            if (n) {
                                if ((n = n.clone()).setClipMask(!0), !(t instanceof S)) return new S(n, t);
                                t.insertChild(0, n)
                            }
                        },
                        gradientTransform: x,
                        transform: x,
                        "fill-opacity": k,
                        "stroke-opacity": k,
                        visibility: function(t, e) { t.setVisible && t.setVisible("visible" === e) },
                        display: function(t, e) { t.setVisible && t.setVisible(null !== e) },
                        "stop-color": function(t, e) { t.setColor && t.setColor(e) },
                        "stop-opacity": function(t, e) { t._color && t._color.setAlpha(parseFloat(e)) },
                        offset: function(t, e) {
                            if (t.setOffset) {
                                var n = e.match(/(.*)%$/);
                                t.setOffset(n ? n[1] / 100 : parseFloat(e))
                            }
                        },
                        viewBox: function(t, e, n, i, r) {
                            var s, a = new m(f(e, "array")),
                                o = c(i, null, null, !0);
                            if (t instanceof S) {
                                var h = o ? o.divide(a.getSize()) : 1,
                                    u = (new w).scale(h).translate(a.getPoint().negate());
                                s = t
                            } else t instanceof M && (o && a.setSize(o), s = t._item);
                            if (s) {
                                if ("visible" !== T(i, "overflow", r)) {
                                    var l = new I.Rectangle(a);
                                    l.setClipMask(!0), s.addChild(l)
                                }
                                u && s.transform(u)
                            }
                        }
                    });

                    function T(t, e, i) {
                        var r = t.attributes[e],
                            s = r && r.value;
                        if (!s) {
                            var a = o.camelize(e);
                            (s = t.style[a]) || i.node[a] === i.parent[a] || (s = i.node[a])
                        }
                        return s ? "none" === s ? null : s : n
                    }

                    function z(t, e, i) {
                        if (e.style) {
                            var r = e.parentNode,
                                s = { node: W.getStyles(e) || {}, parent: !i && !/^defs$/i.test(r.tagName) && W.getStyles(r) || {} };
                            o.each(A, function(i, r) {
                                var a = T(e, r, s);
                                t = a !== n && i(t, a, r, e, s) || t
                            })
                        }
                        return t
                    }

                    function O(t) {
                        var e = t && t.match(/\((?:["'#]*)([^"')]+)/),
                            n = e && e[1],
                            i = n && h[s ? n.replace(s.location.href.split("#")[0] + "#", "") : n];
                        return i && i._scaleToBounds && ((i = i.clone())._scaleToBounds = !0), i
                    }

                    function L(e, n, i) {
                        var s, u, l, f = e.nodeName.toLowerCase(),
                            d = "#document" !== f,
                            _ = a.body;
                        i && d && (t = r.getView().getSize(), t = c(e, null, null, !0) || t, s = st.create("svg", { style: "stroke-width: 1px; stroke-miterlimit: 10" }), u = e.parentNode, l = e.nextSibling, s.appendChild(e), _.appendChild(s));
                        var g = r.settings,
                            v = g.applyMatrix,
                            p = g.insertItems;
                        g.applyMatrix = !1, g.insertItems = !1;
                        var m = y[f],
                            w = m && m(e, f, n, i) || null;
                        if (g.insertItems = p, g.applyMatrix = v, w) {
                            !d || w instanceof S || (w = z(w, e, i));
                            var x = n.onImport,
                                b = d && e.getAttribute("data-paper-data");
                            x && (w = x(e, w, n) || w), n.expandShapes && w instanceof I && (w.remove(), w = w.toPath()), b && (w._data = JSON.parse(b))
                        }
                        return s && (_.removeChild(s), u && (l ? u.insertBefore(e, l) : u.appendChild(e))), i && (h = {}, w && o.pick(n.applyMatrix, v) && w.matrix.apply(!0, !0)), w
                    }

                    function E(t, s, o) {
                        if (!t) return null;
                        s = "function" == typeof s ? { onLoad: s } : s || {};
                        var h = r,
                            u = null;

                        function l(a) {
                            try {
                                var l = "object" === (void 0 === a ? "undefined" : i(a)) ? a : (new e.DOMParser).parseFromString(a, "image/svg+xml");
                                if (!l.nodeName) throw l = null, new Error("Unsupported SVG source: " + t);
                                r = h, u = L(l, s, !0), s && !1 === s.insert || o._insertItem(n, u);
                                var f = s.onLoad;
                                f && f(u, a)
                            } catch (t) { c(t) }
                        }

                        function c(t, e) {
                            var n = s.onError;
                            if (!n) throw new Error(t);
                            n(t, e)
                        }
                        if ("string" != typeof t || /^.*</.test(t)) {
                            if ("undefined" != typeof File && t instanceof File) { var f = new FileReader; return f.onload = function() { l(f.result) }, f.onerror = function() { c(f.error) }, f.readAsText(t) }
                            l(t)
                        } else {
                            var d = a.getElementById(t);
                            d ? l(d) : nt.request({ url: t, async: !0, onLoad: l, onError: c })
                        }
                        return u
                    }
                    C.inject({ importSVG: function(t, e) { return E(t, e, this) } }), b.inject({ importSVG: function(t, e) { return this.activate(), E(t, e, this) } })
                }, o.exports.PaperScript = function() {
                    var n, h, l, c, f = this,
                        d = f.acorn;
                    if (!d && "undefined" != typeof require) try { d = require("acorn") } catch (t) {}
                    d || (d = n = h = {}, l = this, c = function(t) {
                        "use strict";
                        var e, n, i, r;
                        t.version = "0.5.0", t.parse = function(t, r) {
                            return n = String(t), i = n.length, a(r), Wt(),
                                function(t) {
                                    p = m = o, e.locations && (y = new Zt);
                                    w = b = null, x = [], Yt();
                                    var n = t || le(),
                                        i = !0;
                                    t || (n.body = []);
                                    for (; f !== T;) {
                                        var r = be();
                                        n.body.push(r), i && de(r) && oe(!0), i = !1
                                    }
                                    return fe(n, "Program")
                                }(e.program)
                        };
                        var s = t.defaultOptions = { ecmaVersion: 5, strictSemicolons: !1, allowTrailingCommas: !0, forbidReserved: !1, allowReturnOutsideFunction: !1, locations: !1, onComment: null, ranges: !1, program: null, sourceFile: null, directSourceFile: null };

                        function a(t) {
                            for (var n in e = t || {}, s) Object.prototype.hasOwnProperty.call(e, n) || (e[n] = s[n]);
                            r = e.sourceFile || null
                        }
                        var o, h, u, l, c, f, d, _, g, v, p, m, y, w, x, b, C = t.getLineInfo = function(t, e) { for (var n = 1, i = 0;;) { Vt.lastIndex = i; var r = Vt.exec(t); if (!(r && r.index < e)) break;++n, i = r.index + r[0].length } return { line: n, column: e - i } };

                        function S(t, e) {
                            var i = C(n, t);
                            e += " (" + i.line + ":" + i.column + ")";
                            var r = new SyntaxError(e);
                            throw r.pos = t, r.loc = i, r.raisedAt = o, r
                        }
                        t.tokenize = function(t, r) {
                            n = String(t), i = n.length, a(r), Wt();
                            var s = {};

                            function p(t) { return m = u, Yt(t), s.start = h, s.end = u, s.startLoc = l, s.endLoc = c, s.type = f, s.value = d, s }
                            return p.jumpTo = function(t, i) {
                                var r;
                                if (o = t, e.locations)
                                    for (g = 1, v = Vt.lastIndex = 0;
                                        (r = Vt.exec(n)) && r.index < t;) ++g, v = r.index + r[0].length;
                                _ = i, Xt()
                            }, p
                        };
                        var k = [],
                            I = { type: "num" },
                            P = { type: "regexp" },
                            A = { type: "string" },
                            M = { type: "name" },
                            T = { type: "eof" },
                            z = { keyword: "break" },
                            O = { keyword: "case", beforeExpr: !0 },
                            L = { keyword: "catch" },
                            E = { keyword: "continue" },
                            N = { keyword: "debugger" },
                            B = { keyword: "default" },
                            j = { keyword: "do", isLoop: !0 },
                            F = { keyword: "else", beforeExpr: !0 },
                            D = { keyword: "finally" },
                            R = { keyword: "for", isLoop: !0 },
                            q = { keyword: "function" },
                            V = { keyword: "if" },
                            U = { keyword: "return", beforeExpr: !0 },
                            H = { keyword: "switch" },
                            Z = { keyword: "throw", beforeExpr: !0 },
                            W = { keyword: "try" },
                            $ = { keyword: "var" },
                            G = { keyword: "while", isLoop: !0 },
                            J = { keyword: "with" },
                            X = { keyword: "new", beforeExpr: !0 },
                            K = { keyword: "this" },
                            Y = { keyword: "null", atomValue: null },
                            Q = { keyword: "true", atomValue: !0 },
                            tt = { keyword: "false", atomValue: !1 },
                            et = { keyword: "in", binop: 7, beforeExpr: !0 },
                            nt = { break: z, case: O, catch: L, continue: E, debugger: N, default: B, do: j, else: F, finally: D, for: R, function: q, if: V, return: U, switch: H, throw: Z, try: W, var: $, while: G, with: J, null: Y, true: Q, false: tt, new: X, in: et, instanceof: { keyword: "instanceof", binop: 7, beforeExpr: !0 }, this: K, typeof: { keyword: "typeof", prefix: !0, beforeExpr: !0 }, void: { keyword: "void", prefix: !0, beforeExpr: !0 }, delete: { keyword: "delete", prefix: !0, beforeExpr: !0 } },
                            it = { type: "[", beforeExpr: !0 },
                            rt = { type: "]" },
                            st = { type: "{", beforeExpr: !0 },
                            at = { type: "}" },
                            ot = { type: "(", beforeExpr: !0 },
                            ht = { type: ")" },
                            ut = { type: ",", beforeExpr: !0 },
                            lt = { type: ";", beforeExpr: !0 },
                            ct = { type: ":", beforeExpr: !0 },
                            ft = { type: "." },
                            dt = { type: "?", beforeExpr: !0 },
                            _t = { binop: 10, beforeExpr: !0 },
                            gt = { isAssign: !0, beforeExpr: !0 },
                            vt = { isAssign: !0, beforeExpr: !0 },
                            pt = { postfix: !0, prefix: !0, isUpdate: !0 },
                            mt = { prefix: !0, beforeExpr: !0 },
                            yt = { binop: 1, beforeExpr: !0 },
                            wt = { binop: 2, beforeExpr: !0 },
                            xt = { binop: 3, beforeExpr: !0 },
                            bt = { binop: 4, beforeExpr: !0 },
                            Ct = { binop: 5, beforeExpr: !0 },
                            St = { binop: 6, beforeExpr: !0 },
                            kt = { binop: 7, beforeExpr: !0 },
                            It = { binop: 8, beforeExpr: !0 },
                            Pt = { binop: 9, prefix: !0, beforeExpr: !0 },
                            At = { binop: 10, beforeExpr: !0 };
                        for (var Mt in t.tokTypes = { bracketL: it, bracketR: rt, braceL: st, braceR: at, parenL: ot, parenR: ht, comma: ut, semi: lt, colon: ct, dot: ft, question: dt, slash: _t, eq: gt, name: M, eof: T, num: I, regexp: P, string: A }, nt) t.tokTypes["_" + Mt] = nt[Mt];

                        function Tt(t) {
                            t = t.split(" ");
                            var e = "",
                                n = [];
                            t: for (var i = 0; i < t.length; ++i) {
                                for (var r = 0; r < n.length; ++r)
                                    if (n[r][0].length == t[i].length) { n[r].push(t[i]); continue t }
                                n.push([t[i]])
                            }

                            function s(t) {
                                if (1 == t.length) return e += "return str === " + JSON.stringify(t[0]) + ";";
                                e += "switch(str){";
                                for (var n = 0; n < t.length; ++n) e += "case " + JSON.stringify(t[n]) + ":";
                                e += "return true}return false;"
                            }
                            if (n.length > 3) {
                                n.sort(function(t, e) { return e.length - t.length }), e += "switch(str.length){";
                                for (i = 0; i < n.length; ++i) {
                                    var a = n[i];
                                    e += "case " + a[0].length + ":", s(a)
                                }
                                e += "}"
                            } else s(t);
                            return new Function("str", e)
                        }
                        var zt, Ot = Tt("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"),
                            Lt = Tt("class enum extends super const export import"),
                            Et = Tt("implements interface let package private protected public static yield"),
                            Nt = Tt("eval arguments"),
                            Bt = Tt("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"),
                            jt = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                            Ft = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                            Dt = new RegExp("[" + Ft + "]"),
                            Rt = new RegExp("[" + Ft + "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿]"),
                            qt = /[\n\r\u2028\u2029]/,
                            Vt = /\r\n|[\n\r\u2028\u2029]/g,
                            Ut = t.isIdentifierStart = function(t) { return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || t >= 170 && Dt.test(String.fromCharCode(t))) },
                            Ht = t.isIdentifierChar = function(t) { return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || t >= 170 && Rt.test(String.fromCharCode(t)))) };

                        function Zt() { this.line = g, this.column = o - v }

                        function Wt() { g = 1, o = v = 0, _ = !0, Xt() }

                        function $t(t, n) { u = o, e.locations && (c = new Zt), f = t, Xt(), d = n, _ = t.beforeExpr }

                        function Gt() {
                            var t, i = e.onComment && e.locations && new Zt,
                                r = o,
                                s = n.indexOf("*/", o += 2);
                            if (-1 === s && S(o - 2, "Unterminated comment"), o = s + 2, e.locations)
                                for (Vt.lastIndex = r;
                                    (t = Vt.exec(n)) && t.index < o;) ++g, v = t.index + t[0].length;
                            e.onComment && e.onComment(!0, n.slice(r + 2, s), r, o, i, e.locations && new Zt)
                        }

                        function Jt() {
                            for (var t = o, r = e.onComment && e.locations && new Zt, s = n.charCodeAt(o += 2); o < i && 10 !== s && 13 !== s && 8232 !== s && 8233 !== s;) ++o, s = n.charCodeAt(o);
                            e.onComment && e.onComment(!1, n.slice(t + 2, o), t, o, r, e.locations && new Zt)
                        }

                        function Xt() {
                            for (; o < i;) {
                                var t = n.charCodeAt(o);
                                if (32 === t) ++o;
                                else if (13 === t) {++o, 10 === (r = n.charCodeAt(o)) && ++o, e.locations && (++g, v = o) } else if (10 === t || 8232 === t || 8233 === t) ++o, e.locations && (++g, v = o);
                                else if (t > 8 && t < 14) ++o;
                                else if (47 === t) {
                                    var r;
                                    if (42 === (r = n.charCodeAt(o + 1))) Gt();
                                    else {
                                        if (47 !== r) break;
                                        Jt()
                                    }
                                } else if (160 === t) ++o;
                                else { if (!(t >= 5760 && jt.test(String.fromCharCode(t)))) break;++o }
                            }
                        }

                        function Kt(t) {
                            switch (t) {
                                case 46:
                                    return function() { var t = n.charCodeAt(o + 1); return t >= 48 && t <= 57 ? ne(!0) : (++o, $t(ft)) }();
                                case 40:
                                    return ++o, $t(ot);
                                case 41:
                                    return ++o, $t(ht);
                                case 59:
                                    return ++o, $t(lt);
                                case 44:
                                    return ++o, $t(ut);
                                case 91:
                                    return ++o, $t(it);
                                case 93:
                                    return ++o, $t(rt);
                                case 123:
                                    return ++o, $t(st);
                                case 125:
                                    return ++o, $t(at);
                                case 58:
                                    return ++o, $t(ct);
                                case 63:
                                    return ++o, $t(dt);
                                case 48:
                                    var r = n.charCodeAt(o + 1);
                                    if (120 === r || 88 === r) return function() {
                                        o += 2;
                                        var t = ee(16);
                                        null == t && S(h + 2, "Expected hexadecimal number");
                                        Ut(n.charCodeAt(o)) && S(o, "Identifier directly after number");
                                        return $t(I, t)
                                    }();
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    return ne(!1);
                                case 34:
                                case 39:
                                    return function(t) {
                                        o++;
                                        for (var r = "";;) {
                                            o >= i && S(h, "Unterminated string constant");
                                            var s = n.charCodeAt(o);
                                            if (s === t) return ++o, $t(A, r);
                                            if (92 === s) {
                                                s = n.charCodeAt(++o);
                                                var a = /^[0-7]+/.exec(n.slice(o, o + 3));
                                                for (a && (a = a[0]); a && parseInt(a, 8) > 255;) a = a.slice(0, -1);
                                                if ("0" === a && (a = null), ++o, a) b && S(o - 2, "Octal literal in strict mode"), r += String.fromCharCode(parseInt(a, 8)), o += a.length - 1;
                                                else switch (s) {
                                                    case 110:
                                                        r += "\n";
                                                        break;
                                                    case 114:
                                                        r += "\r";
                                                        break;
                                                    case 120:
                                                        r += String.fromCharCode(ie(2));
                                                        break;
                                                    case 117:
                                                        r += String.fromCharCode(ie(4));
                                                        break;
                                                    case 85:
                                                        r += String.fromCharCode(ie(8));
                                                        break;
                                                    case 116:
                                                        r += "\t";
                                                        break;
                                                    case 98:
                                                        r += "\b";
                                                        break;
                                                    case 118:
                                                        r += "\v";
                                                        break;
                                                    case 102:
                                                        r += "\f";
                                                        break;
                                                    case 48:
                                                        r += "\0";
                                                        break;
                                                    case 13:
                                                        10 === n.charCodeAt(o) && ++o;
                                                    case 10:
                                                        e.locations && (v = o, ++g);
                                                        break;
                                                    default:
                                                        r += String.fromCharCode(s)
                                                }
                                            } else 13 !== s && 10 !== s && 8232 !== s && 8233 !== s || S(h, "Unterminated string constant"), r += String.fromCharCode(s), ++o
                                        }
                                    }(t);
                                case 47:
                                    return function() { var t = n.charCodeAt(o + 1); return _ ? (++o, te()) : 61 === t ? Qt(vt, 2) : Qt(_t, 1) }();
                                case 37:
                                case 42:
                                    return 61 === n.charCodeAt(o + 1) ? Qt(vt, 2) : Qt(At, 1);
                                case 124:
                                case 38:
                                    return function(t) { var e = n.charCodeAt(o + 1); return e === t ? Qt(124 === t ? yt : wt, 2) : 61 === e ? Qt(vt, 2) : Qt(124 === t ? xt : Ct, 1) }(t);
                                case 94:
                                    return 61 === n.charCodeAt(o + 1) ? Qt(vt, 2) : Qt(bt, 1);
                                case 43:
                                case 45:
                                    return function(t) { var e = n.charCodeAt(o + 1); return e === t ? 45 == e && 62 == n.charCodeAt(o + 2) && qt.test(n.slice(m, o)) ? (o += 3, Jt(), Xt(), Yt()) : Qt(pt, 2) : 61 === e ? Qt(vt, 2) : Qt(Pt, 1) }(t);
                                case 60:
                                case 62:
                                    return function(t) {
                                        var e = n.charCodeAt(o + 1),
                                            i = 1;
                                        return e === t ? (i = 62 === t && 62 === n.charCodeAt(o + 2) ? 3 : 2, 61 === n.charCodeAt(o + i) ? Qt(vt, i + 1) : Qt(It, i)) : 33 == e && 60 == t && 45 == n.charCodeAt(o + 2) && 45 == n.charCodeAt(o + 3) ? (o += 4, Jt(), Xt(), Yt()) : (61 === e && (i = 61 === n.charCodeAt(o + 2) ? 3 : 2), Qt(kt, i))
                                    }(t);
                                case 61:
                                case 33:
                                    return function(t) { return 61 === n.charCodeAt(o + 1) ? Qt(St, 61 === n.charCodeAt(o + 2) ? 3 : 2) : Qt(61 === t ? gt : mt, 1) }(t);
                                case 126:
                                    return Qt(mt, 1)
                            }
                            return !1
                        }

                        function Yt(t) {
                            if (t ? o = h + 1 : h = o, e.locations && (l = new Zt), t) return te();
                            if (o >= i) return $t(T);
                            var r = n.charCodeAt(o);
                            if (Ut(r) || 92 === r) return se();
                            var s = Kt(r);
                            if (!1 === s) {
                                var a = String.fromCharCode(r);
                                if ("\\" === a || Dt.test(a)) return se();
                                S(o, "Unexpected character '" + a + "'")
                            }
                            return s
                        }

                        function Qt(t, e) {
                            var i = n.slice(o, o + e);
                            o += e, $t(t, i)
                        }

                        function te() {
                            for (var t, e, r = o;;) {
                                o >= i && S(r, "Unterminated regular expression");
                                var s = n.charAt(o);
                                if (qt.test(s) && S(r, "Unterminated regular expression"), t) t = !1;
                                else {
                                    if ("[" === s) e = !0;
                                    else if ("]" === s && e) e = !1;
                                    else if ("/" === s && !e) break;
                                    t = "\\" === s
                                }++o
                            }
                            var a = n.slice(r, o);
                            ++o;
                            var h = re();
                            h && !/^[gmsiy]*$/.test(h) && S(r, "Invalid regexp flag");
                            try { var u = new RegExp(a, h) } catch (t) { t instanceof SyntaxError && S(r, t.message), S(t) }
                            return $t(P, u)
                        }

                        function ee(t, e) { for (var i = o, r = 0, s = 0, a = null == e ? 1 / 0 : e; s < a; ++s) { var h, u = n.charCodeAt(o); if ((h = u >= 97 ? u - 97 + 10 : u >= 65 ? u - 65 + 10 : u >= 48 && u <= 57 ? u - 48 : 1 / 0) >= t) break;++o, r = r * t + h } return o === i || null != e && o - i !== e ? null : r }

                        function ne(t) {
                            var e = o,
                                i = !1,
                                r = 48 === n.charCodeAt(o);
                            t || null !== ee(10) || S(e, "Invalid number"), 46 === n.charCodeAt(o) && (++o, ee(10), i = !0);
                            var s = n.charCodeAt(o);
                            69 !== s && 101 !== s || (43 !== (s = n.charCodeAt(++o)) && 45 !== s || ++o, null === ee(10) && S(e, "Invalid number"), i = !0), Ut(n.charCodeAt(o)) && S(o, "Identifier directly after number");
                            var a, h = n.slice(e, o);
                            return i ? a = parseFloat(h) : r && 1 !== h.length ? /[89]/.test(h) || b ? S(e, "Invalid number") : a = parseInt(h, 8) : a = parseInt(h, 10), $t(I, a)
                        }

                        function ie(t) { var e = ee(16, t); return null === e && S(h, "Bad character escape sequence"), e }

                        function re() {
                            zt = !1;
                            for (var t, e = !0, i = o;;) {
                                var r = n.charCodeAt(o);
                                if (Ht(r)) zt && (t += n.charAt(o)), ++o;
                                else {
                                    if (92 !== r) break;
                                    zt || (t = n.slice(i, o)), zt = !0, 117 != n.charCodeAt(++o) && S(o, "Expecting Unicode escape sequence \\uXXXX"), ++o;
                                    var s = ie(4),
                                        a = String.fromCharCode(s);
                                    a || S(o - 1, "Invalid Unicode escape"), (e ? Ut(s) : Ht(s)) || S(o - 4, "Invalid Unicode escape"), t += a
                                }
                                e = !1
                            }
                            return zt ? t : n.slice(i, o)
                        }

                        function se() {
                            var t = re(),
                                e = M;
                            return !zt && Bt(t) && (e = nt[t]), $t(e, t)
                        }

                        function ae() { p = h, m = u, y = c, Yt() }

                        function oe(t) {
                            if (b = t, o = h, e.locations)
                                for (; o < v;) v = n.lastIndexOf("\n", v - 2) + 1, --g;
                            Xt(), Yt()
                        }

                        function he() { this.type = null, this.start = h, this.end = null }

                        function ue() { this.start = l, this.end = null, null !== r && (this.source = r) }

                        function le() { var t = new he; return e.locations && (t.loc = new ue), e.directSourceFile && (t.sourceFile = e.directSourceFile), e.ranges && (t.range = [h, 0]), t }

                        function ce(t) { var n = new he; return n.start = t.start, e.locations && (n.loc = new ue, n.loc.start = t.loc.start), e.ranges && (n.range = [t.range[0], 0]), n }

                        function fe(t, n) { return t.type = n, t.end = m, e.locations && (t.loc.end = y), e.ranges && (t.range[1] = m), t }

                        function de(t) { return e.ecmaVersion >= 5 && "ExpressionStatement" === t.type && "Literal" === t.expression.type && "use strict" === t.expression.value }

                        function _e(t) { if (f === t) return ae(), !0 }

                        function ge() { return !e.strictSemicolons && (f === T || f === at || qt.test(n.slice(m, h))) }

                        function ve() { _e(lt) || ge() || me() }

                        function pe(t) { f === t ? ae() : me() }

                        function me() { S(h, "Unexpected token") }

                        function ye(t) { "Identifier" !== t.type && "MemberExpression" !== t.type && S(t.start, "Assigning to rvalue"), b && "Identifier" === t.type && Nt(t.name) && S(t.start, "Assigning to " + t.name + " in strict mode") }
                        var we = { kind: "loop" },
                            xe = { kind: "switch" };

                        function be() {
                            (f === _t || f === vt && "/=" == d) && Yt(!0);
                            var t = f,
                                i = le();
                            switch (t) {
                                case z:
                                case E:
                                    ae();
                                    var r = t === z;
                                    _e(lt) || ge() ? i.label = null : f !== M ? me() : (i.label = Be(), ve());
                                    for (var s = 0; s < x.length; ++s) { var a = x[s]; if (null == i.label || a.name === i.label.name) { if (null != a.kind && (r || "loop" === a.kind)) break; if (i.label && r) break } }
                                    return s === x.length && S(i.start, "Unsyntactic " + t.keyword), fe(i, r ? "BreakStatement" : "ContinueStatement");
                                case N:
                                    return ae(), ve(), fe(i, "DebuggerStatement");
                                case j:
                                    return ae(), x.push(we), i.body = be(), x.pop(), pe(G), i.test = Ce(), ve(), fe(i, "DoWhileStatement");
                                case R:
                                    if (ae(), x.push(we), pe(ot), f === lt) return ke(i, null);
                                    if (f === $) { var o = le(); return ae(), Pe(o, !0), fe(o, "VariableDeclaration"), 1 === o.declarations.length && _e(et) ? Ie(i, o) : ke(i, o) }
                                    o = Ae(!1, !0);
                                    return _e(et) ? (ye(o), Ie(i, o)) : ke(i, o);
                                case q:
                                    return ae(), Ee(i, !0);
                                case V:
                                    return ae(), i.test = Ce(), i.consequent = be(), i.alternate = _e(F) ? be() : null, fe(i, "IfStatement");
                                case U:
                                    return w || e.allowReturnOutsideFunction || S(h, "'return' outside of function"), ae(), _e(lt) || ge() ? i.argument = null : (i.argument = Ae(), ve()), fe(i, "ReturnStatement");
                                case H:
                                    ae(), i.discriminant = Ce(), i.cases = [], pe(st), x.push(xe);
                                    for (var u, l; f != at;)
                                        if (f === O || f === B) {
                                            var c = f === O;
                                            u && fe(u, "SwitchCase"), i.cases.push(u = le()), u.consequent = [], ae(), c ? u.test = Ae() : (l && S(p, "Multiple default clauses"), l = !0, u.test = null), pe(ct)
                                        } else u || me(), u.consequent.push(be());
                                    return u && fe(u, "SwitchCase"), ae(), x.pop(), fe(i, "SwitchStatement");
                                case Z:
                                    return ae(), qt.test(n.slice(m, h)) && S(m, "Illegal newline after throw"), i.argument = Ae(), ve(), fe(i, "ThrowStatement");
                                case W:
                                    if (ae(), i.block = Se(), i.handler = null, f === L) {
                                        var _ = le();
                                        ae(), pe(ot), _.param = Be(), b && Nt(_.param.name) && S(_.param.start, "Binding " + _.param.name + " in strict mode"), pe(ht), _.guard = null, _.body = Se(), i.handler = fe(_, "CatchClause")
                                    }
                                    return i.guardedHandlers = k, i.finalizer = _e(D) ? Se() : null, i.handler || i.finalizer || S(i.start, "Missing catch or finally clause"), fe(i, "TryStatement");
                                case $:
                                    return ae(), Pe(i), ve(), fe(i, "VariableDeclaration");
                                case G:
                                    return ae(), i.test = Ce(), x.push(we), i.body = be(), x.pop(), fe(i, "WhileStatement");
                                case J:
                                    return b && S(h, "'with' in strict mode"), ae(), i.object = Ce(), i.body = be(), fe(i, "WithStatement");
                                case st:
                                    return Se();
                                case lt:
                                    return ae(), fe(i, "EmptyStatement");
                                default:
                                    var g = d,
                                        v = Ae();
                                    if (t === M && "Identifier" === v.type && _e(ct)) { for (s = 0; s < x.length; ++s) x[s].name === g && S(v.start, "Label '" + g + "' is already declared"); var y = f.isLoop ? "loop" : f === H ? "switch" : null; return x.push({ name: g, kind: y }), i.body = be(), x.pop(), i.label = v, fe(i, "LabeledStatement") }
                                    return i.expression = v, ve(), fe(i, "ExpressionStatement")
                            }
                        }

                        function Ce() { pe(ot); var t = Ae(); return pe(ht), t }

                        function Se(t) {
                            var e, n = le(),
                                i = !0,
                                r = !1;
                            for (n.body = [], pe(st); !_e(at);) {
                                var s = be();
                                n.body.push(s), i && t && de(s) && (e = r, oe(r = !0)), i = !1
                            }
                            return r && !e && oe(!1), fe(n, "BlockStatement")
                        }

                        function ke(t, e) { return t.init = e, pe(lt), t.test = f === lt ? null : Ae(), pe(lt), t.update = f === ht ? null : Ae(), pe(ht), t.body = be(), x.pop(), fe(t, "ForStatement") }

                        function Ie(t, e) { return t.left = e, t.right = Ae(), pe(ht), t.body = be(), x.pop(), fe(t, "ForInStatement") }

                        function Pe(t, e) { for (t.declarations = [], t.kind = "var";;) { var n = le(); if (n.id = Be(), b && Nt(n.id.name) && S(n.id.start, "Binding " + n.id.name + " in strict mode"), n.init = _e(gt) ? Ae(!0, e) : null, t.declarations.push(fe(n, "VariableDeclarator")), !_e(ut)) break } return t }

                        function Ae(t, e) { var n = Me(e); if (!t && f === ut) { var i = ce(n); for (i.expressions = [n]; _e(ut);) i.expressions.push(Me(e)); return fe(i, "SequenceExpression") } return n }

                        function Me(t) {
                            var e = function(t) {
                                var e = function(t) {
                                    return function t(e, n, i) {
                                        var r = f.binop;
                                        if (null != r && (!i || f !== et) && r > n) {
                                            var s = ce(e);
                                            s.left = e, s.operator = d;
                                            var a = f;
                                            ae(), s.right = t(Te(), r, i);
                                            var o = fe(s, a === yt || a === wt ? "LogicalExpression" : "BinaryExpression");
                                            return t(o, n, i)
                                        }
                                        return e
                                    }(Te(), -1, t)
                                }(t);
                                if (_e(dt)) { var n = ce(e); return n.test = e, n.consequent = Ae(!0), pe(ct), n.alternate = Ae(!0, t), fe(n, "ConditionalExpression") }
                                return e
                            }(t);
                            if (f.isAssign) { var n = ce(e); return n.operator = d, n.left = e, ae(), n.right = Me(t), ye(e), fe(n, "AssignmentExpression") }
                            return e
                        }

                        function Te() {
                            if (f.prefix) {
                                var t = le(),
                                    e = f.isUpdate;
                                return t.operator = d, t.prefix = !0, _ = !0, ae(), t.argument = Te(), e ? ye(t.argument) : b && "delete" === t.operator && "Identifier" === t.argument.type && S(t.start, "Deleting local variable in strict mode"), fe(t, e ? "UpdateExpression" : "UnaryExpression")
                            }
                            for (var n = ze(Oe()); f.postfix && !ge();) {
                                (t = ce(n)).operator = d, t.prefix = !1, t.argument = n, ye(n), ae(), n = fe(t, "UpdateExpression")
                            }
                            return n
                        }

                        function ze(t, e) { var n; return _e(ft) ? ((n = ce(t)).object = t, n.property = Be(!0), n.computed = !1, ze(fe(n, "MemberExpression"), e)) : _e(it) ? ((n = ce(t)).object = t, n.property = Ae(), n.computed = !0, pe(rt), ze(fe(n, "MemberExpression"), e)) : !e && _e(ot) ? ((n = ce(t)).callee = t, n.arguments = Ne(ht, !1), ze(fe(n, "CallExpression"), e)) : t }

                        function Oe() {
                            switch (f) {
                                case K:
                                    var t = le();
                                    return ae(), fe(t, "ThisExpression");
                                case M:
                                    return Be();
                                case I:
                                case A:
                                case P:
                                    return (t = le()).value = d, t.raw = n.slice(h, u), ae(), fe(t, "Literal");
                                case Y:
                                case Q:
                                case tt:
                                    return (t = le()).value = f.atomValue, t.raw = f.keyword, ae(), fe(t, "Literal");
                                case ot:
                                    var i = l,
                                        r = h;
                                    ae();
                                    var s = Ae();
                                    return s.start = r, s.end = u, e.locations && (s.loc.start = i, s.loc.end = c), e.ranges && (s.range = [r, u]), pe(ht), s;
                                case it:
                                    t = le();
                                    return ae(), t.elements = Ne(rt, !0, !0), fe(t, "ArrayExpression");
                                case st:
                                    return function() {
                                        var t = le(),
                                            n = !0,
                                            i = !1;
                                        t.properties = [], ae();
                                        for (; !_e(at);) {
                                            if (n) n = !1;
                                            else if (pe(ut), e.allowTrailingCommas && _e(at)) break;
                                            var r, s = { key: Le() },
                                                a = !1;
                                            if (_e(ct) ? (s.value = Ae(!0), r = s.kind = "init") : e.ecmaVersion >= 5 && "Identifier" === s.key.type && ("get" === s.key.name || "set" === s.key.name) ? (a = i = !0, r = s.kind = s.key.name, s.key = Le(), f !== ot && me(), s.value = Ee(le(), !1)) : me(), "Identifier" === s.key.type && (b || i))
                                                for (var o = 0; o < t.properties.length; ++o) {
                                                    var h = t.properties[o];
                                                    if (h.key.name === s.key.name) {
                                                        var u = r == h.kind || a && "init" === h.kind || "init" === r && ("get" === h.kind || "set" === h.kind);
                                                        u && !b && "init" === r && "init" === h.kind && (u = !1), u && S(s.key.start, "Redefinition of property")
                                                    }
                                                }
                                            t.properties.push(s)
                                        }
                                        return fe(t, "ObjectExpression")
                                    }();
                                case q:
                                    t = le();
                                    return ae(), Ee(t, !1);
                                case X:
                                    return function() {
                                        var t = le();
                                        ae(), t.callee = ze(Oe(), !0), _e(ot) ? t.arguments = Ne(ht, !1) : t.arguments = k;
                                        return fe(t, "NewExpression")
                                    }();
                                default:
                                    me()
                            }
                        }

                        function Le() { return f === I || f === A ? Oe() : Be(!0) }

                        function Ee(t, e) {
                            f === M ? t.id = Be() : e ? me() : t.id = null, t.params = [];
                            var n = !0;
                            for (pe(ot); !_e(ht);) n ? n = !1 : pe(ut), t.params.push(Be());
                            var i = w,
                                r = x;
                            if (w = !0, x = [], t.body = Se(!0), w = i, x = r, b || t.body.body.length && de(t.body.body[0]))
                                for (var s = t.id ? -1 : 0; s < t.params.length; ++s) {
                                    var a = s < 0 ? t.id : t.params[s];
                                    if ((Et(a.name) || Nt(a.name)) && S(a.start, "Defining '" + a.name + "' in strict mode"), s >= 0)
                                        for (var o = 0; o < s; ++o) a.name === t.params[o].name && S(a.start, "Argument name clash in strict mode")
                                }
                            return fe(t, e ? "FunctionDeclaration" : "FunctionExpression")
                        }

                        function Ne(t, n, i) {
                            for (var r = [], s = !0; !_e(t);) {
                                if (s) s = !1;
                                else if (pe(ut), n && e.allowTrailingCommas && _e(t)) break;
                                i && f === ut ? r.push(null) : r.push(Ae(!0))
                            }
                            return r
                        }

                        function Be(t) { var i = le(); return t && "everywhere" == e.forbidReserved && (t = !1), f === M ? (!t && (e.forbidReserved && (3 === e.ecmaVersion ? Ot : Lt)(d) || b && Et(d)) && -1 == n.slice(h, u).indexOf("\\") && S(h, "The keyword '" + d + "' is reserved"), i.name = d) : t && f.keyword ? i.name = f.keyword : me(), _ = !1, ae(), fe(i, "Identifier") }
                    }, "object" == (void 0 === n ? "undefined" : i(n)) && "object" == (void 0 === h ? "undefined" : i(h)) ? c(n) : "function" == typeof t && t.amd ? t(["exports"], c) : c(l.acorn || (l.acorn = {})), d.version || (d = null));

                    function g(t, e) { return (f.acorn || d).parse(t, e) }
                    var p = { "+": "__add", "-": "__subtract", "*": "__multiply", "/": "__divide", "%": "__modulo", "==": "__equals", "!=": "__equals" },
                        m = { "-": "__negate", "+": "__self" },
                        y = o.each(["add", "subtract", "multiply", "divide", "modulo", "equals", "negate"], function(t) { this["__" + t] = "#" + t }, { __self: function() { return this } });

                    function w(t, e, n) {
                        var i = p[e];
                        if (t && t[i]) { var r = t[i](n); return "!=" === e ? !r : r }
                        switch (e) {
                            case "+":
                                return t + n;
                            case "-":
                                return t - n;
                            case "*":
                                return t * n;
                            case "/":
                                return t / n;
                            case "%":
                                return t % n;
                            case "==":
                                return t == n;
                            case "!=":
                                return t != n
                        }
                    }

                    function x(t, e) {
                        var n = m[t];
                        if (e && e[n]) return e[n]();
                        switch (t) {
                            case "+":
                                return +e;
                            case "-":
                                return -e
                        }
                    }

                    function b(t, n) {
                        if (!t) return "";
                        var o = [];

                        function h(t) {
                            for (var e = 0, n = o.length; e < n; e++) {
                                var i = o[e];
                                if (i[0] >= t) break;
                                t += i[1]
                            }
                            return t
                        }

                        function u(e) { return t.substring(h(e.range[0]), h(e.range[1])) }

                        function l(e, n) {
                            for (var i = h(e.range[0]), r = h(e.range[1]), s = 0, a = o.length - 1; a >= 0; a--)
                                if (i > o[a][0]) { s = a + 1; break }
                            o.splice(s, 0, [i, n.length - r + i]), t = t.substring(0, i) + n + t.substring(r)
                        }
                        var c, f = (n = n || {}).url || "",
                            d = r.agent,
                            _ = d.versionNumber,
                            v = !1,
                            y = n.sourceMaps,
                            w = n.source || t,
                            x = /\r\n|\n|\r/gm,
                            b = n.offset || 0;
                        if (y && (d.chrome && _ >= 30 || d.webkit && _ >= 537.76 || d.firefox && _ >= 23 || d.node)) {
                            if (d.node) b -= 2;
                            else if (s && f && !s.location.href.indexOf(f)) {
                                var C = a.getElementsByTagName("html")[0].innerHTML;
                                b = C.substr(0, C.indexOf(t) + 1).match(x).length + 1
                            }
                            var S = ["AA" + function(t) {
                                var e = "";
                                for (t = (Math.abs(t) << 1) + (t < 0 ? 1 : 0); t || !e;) {
                                    var n = 31 & t;
                                    (t >>= 5) && (n |= 32), e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [n]
                                }
                                return e
                            }((v = b > 0 && !(d.chrome && _ >= 36 || d.safari && _ >= 600 || d.firefox && _ >= 40 || d.node)) ? 0 : b) + "A"];
                            S.length = (t.match(x) || []).length + 1 + (v ? b : 0), c = { version: 3, file: f, names: [], mappings: S.join(";AACA"), sourceRoot: "", sources: [f], sourcesContent: [w] }
                        }
                        return function e(n, r) {
                            if (n) {
                                for (var s in n)
                                    if ("range" !== s && "loc" !== s) {
                                        var a = n[s];
                                        if (Array.isArray(a))
                                            for (var o = 0, c = a.length; o < c; o++) e(a[o], n);
                                        else a && "object" === (void 0 === a ? "undefined" : i(a)) && e(a, n)
                                    }
                                switch (n.type) {
                                    case "UnaryExpression":
                                        if (n.operator in m && "Literal" !== n.argument.type) {
                                            var f = u(n.argument);
                                            l(n, '$__("' + n.operator + '", ' + f + ")")
                                        }
                                        break;
                                    case "BinaryExpression":
                                        if (n.operator in p && "Literal" !== n.left.type) {
                                            var d = u(n.left),
                                                _ = u(n.right),
                                                g = function(e, n) { return t.substring(h(e.range[1]), h(n.range[0])) }(n.left, n.right),
                                                v = n.operator;
                                            l(n, "__$__(" + d + "," + g.replace(new RegExp("\\" + v), '"' + v + '"') + ", " + _ + ")")
                                        }
                                        break;
                                    case "UpdateExpression":
                                    case "AssignmentExpression":
                                        var y = r && r.type;
                                        if (!("ForStatement" === y || "BinaryExpression" === y && /^[=!<>]/.test(r.operator) || "MemberExpression" === y && r.computed))
                                            if ("UpdateExpression" === n.type) {
                                                var w = (f = u(n.argument)) + " = " + (x = "__$__(" + f + ', "' + n.operator[0] + '", 1)');
                                                n.prefix || "AssignmentExpression" !== y && "VariableDeclarator" !== y || (u(r.left || r.id) === f && (w = x), w = f + "; " + w), l(n, w)
                                            } else if (/^.=$/.test(n.operator) && "Literal" !== n.left.type) {
                                            d = u(n.left), _ = u(n.right);
                                            var x = d + " = __$__(" + d + ', "' + n.operator[0] + '", ' + _ + ")";
                                            l(n, /^\(.*\)$/.test(u(n)) ? "(" + x + ")" : x)
                                        }
                                }
                            }
                        }(g(t, { ranges: !0, preserveParens: !0 })), c && (v && (t = new Array(b + 1).join("\n") + t), /^(inline|both)$/.test(y) && (t += "\n//# sourceMappingURL=data:application/json;base64," + e.btoa(unescape(encodeURIComponent(JSON.stringify(c))))), t += "\n//# sourceURL=" + (f || "paperscript")), { url: f, source: w, code: t, map: c }
                    }

                    function C(t, e, n) {
                        r = e;
                        var s, h = e.getView(),
                            u = /\btool\.\w+|\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/.test(t) && !/\bnew\s+Tool\b/.test(t) ? new et : null,
                            l = u ? u._events : [],
                            c = ["onFrame", "onResize"].concat(l),
                            f = [],
                            d = [],
                            g = "object" === (void 0 === t ? "undefined" : i(t)) ? t : b(t, n);

                        function v(e, n) { for (var i in e) !n && /^_/.test(i) || !new RegExp("([\\b\\s\\W]|^)" + i.replace(/\$/g, "\\$") + "\\b").test(t) || (f.push(i), d.push(e[i])) }
                        t = g.code, v({ __$__: w, $__: x, paper: e, view: h, tool: u }, !0), v(e), (c = o.each(c, function(e) { new RegExp("\\s+" + e + "\\b").test(t) && (f.push(e), this.push(e + ": " + e)) }, []).join(", ")) && (t += "\nreturn { " + c + " };");
                        var p = r.agent;
                        if (a && (p.chrome || p.firefox && p.versionNumber < 40)) {
                            var m = a.createElement("script"),
                                y = a.head || a.getElementsByTagName("head")[0];
                            p.firefox && (t = "\n" + t), m.appendChild(a.createTextNode("paper._execute = function(" + f + ") {" + t + "\n}")), y.appendChild(m), s = r._execute, delete r._execute, y.removeChild(m)
                        } else s = Function(f, t);
                        var C = s.apply(e, d) || {};
                        return o.each(l, function(t) {
                            var e = C[t];
                            e && (u[t] = e)
                        }), h && (C.onResize && h.setOnResize(C.onResize), h.emit("resize", { size: h.size, delta: new _ }), C.onFrame && h.setOnFrame(C.onFrame), h.requestUpdate()), g
                    }

                    function S(t) {
                        if (/^text\/(?:x-|)paperscript$/.test(t.type) && "true" !== u.getAttribute(t, "ignore")) {
                            var e = u.getAttribute(t, "canvas"),
                                n = a.getElementById(e),
                                i = t.src || t.getAttribute("data-src"),
                                r = u.hasAttribute(t, "async");
                            if (!n) throw new Error('Unable to find canvas with id "' + e + '"');
                            var s = u.get(n.getAttribute("data-paper-scope")) || (new u).setup(n);
                            return n.setAttribute("data-paper-scope", s._id), i ? nt.request({ url: i, async: r, mimeType: "text/plain", onLoad: function(t) { C(t, s, i) } }) : C(t.innerHTML, s, t.baseURI), t.setAttribute("data-paper-ignore", "true"), s
                        }
                    }

                    function k() { o.each(a && a.getElementsByTagName("script"), S) }
                    return _.inject(y), v.inject(y), V.inject(y), s && ("complete" === a.readyState ? setTimeout(k) : $.add(s, { load: k })), { compile: b, execute: C, load: function(t) { return t ? S(t) : k() }, parse: g }
                }.call(this), (r = new(u.inject(o.exports, { Base: o, Numerical: f, Key: Y, DomEvent: $, DomElement: W, document: a, window: s, Symbol: M, PlacedSymbol: A }))).agent.node && require("./node/extend.js")(r), "function" == typeof t && t.amd ? t("paper", r) : "object" === ("undefined" == typeof module ? "undefined" : i(module)) && module && (module.exports = r), r
            }.call(this, "object" === ("undefined" == typeof self ? "undefined" : i(self)) ? self : null);
    }, { "./node/self.js": "70rD", "acorn": "Wqy/", "./node/extend.js": "70rD", "process": "pBGv" }],
    "NHlQ": [function(require, module, exports) {
        var define;
        var e;
        ! function(t, n, r) {
            if (t) {
                for (var i, o = { 8: "backspace", 9: "tab", 13: "enter", 16: "shift", 17: "ctrl", 18: "alt", 20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down", 45: "ins", 46: "del", 91: "meta", 93: "meta", 224: "meta" }, a = { 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, c = { "~": "`", "!": "1", "@": "2", "#": "3", $: "4", "%": "5", "^": "6", "&": "7", "*": "8", "(": "9", ")": "0", _: "-", "+": "=", ":": ";", '"': "'", "<": ",", ">": ".", "?": "/", "|": "\\" }, s = { option: "alt", command: "meta", return: "enter", escape: "esc", plus: "+", mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl" }, l = 1; l < 20; ++l) o[111 + l] = "f" + l;
                for (l = 0; l <= 9; ++l) o[l + 96] = l.toString();
                y.prototype.bind = function(e, t, n) { return e = e instanceof Array ? e : [e], this._bindMultiple.call(this, e, t, n), this }, y.prototype.unbind = function(e, t) { return this.bind.call(this, e, function() {}, t) }, y.prototype.trigger = function(e, t) { return this._directMap[e + ":" + t] && this._directMap[e + ":" + t]({}, e), this }, y.prototype.reset = function() { return this._callbacks = {}, this._directMap = {}, this }, y.prototype.stopCallback = function(e, t) { return !((" " + t.className + " ").indexOf(" mousetrap ") > -1) && (! function e(t, r) { return null !== t && t !== n && (t === r || e(t.parentNode, r)) }(t, this.target) && ("INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.isContentEditable)) }, y.prototype.handleKey = function() { return this._handleKey.apply(this, arguments) }, y.addKeycodes = function(e) {
                    for (var t in e) e.hasOwnProperty(t) && (o[t] = e[t]);
                    i = null
                }, y.init = function() { var e = y(n); for (var t in e) "_" !== t.charAt(0) && (y[t] = function(t) { return function() { return e[t].apply(e, arguments) } }(t)) }, y.init(), t.Mousetrap = y, "undefined" != typeof module && module.exports && (module.exports = y), "function" == typeof e && e.amd && e(function() { return y })
            }

            function u(e, t, n) { e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n) }

            function f(e) { if ("keypress" == e.type) { var t = String.fromCharCode(e.which); return e.shiftKey || (t = t.toLowerCase()), t } return o[e.which] ? o[e.which] : a[e.which] ? a[e.which] : String.fromCharCode(e.which).toLowerCase() }

            function p(e) { return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e }

            function h(e, t, n) {
                return n || (n = function() {
                    if (!i)
                        for (var e in i = {}, o) e > 95 && e < 112 || o.hasOwnProperty(e) && (i[o[e]] = e);
                    return i
                }()[e] ? "keydown" : "keypress"), "keypress" == n && t.length && (n = "keydown"), n
            }

            function d(e, t) { var n, r, i, o = []; for (n = function(e) { return "+" === e ? ["+"] : (e = e.replace(/\+{2}/g, "+plus")).split("+") }(e), i = 0; i < n.length; ++i) r = n[i], s[r] && (r = s[r]), t && "keypress" != t && c[r] && (r = c[r], o.push("shift")), p(r) && o.push(r); return { key: r, modifiers: o, action: t = h(r, o, t) } }

            function y(e) {
                var t = this;
                if (e = e || n, !(t instanceof y)) return new y(e);
                t.target = e, t._callbacks = {}, t._directMap = {};
                var r, i = {},
                    o = !1,
                    a = !1,
                    c = !1;

                function s(e) {
                    e = e || {};
                    var t, n = !1;
                    for (t in i) e[t] ? n = !0 : i[t] = 0;
                    n || (c = !1)
                }

                function l(e, n, r, o, a, c) {
                    var s, l, u, f, h = [],
                        d = r.type;
                    if (!t._callbacks[e]) return [];
                    for ("keyup" == d && p(e) && (n = [e]), s = 0; s < t._callbacks[e].length; ++s)
                        if (l = t._callbacks[e][s], (o || !l.seq || i[l.seq] == l.level) && d == l.action && ("keypress" == d && !r.metaKey && !r.ctrlKey || (u = n, f = l.modifiers, u.sort().join(",") === f.sort().join(",")))) {
                            var y = !o && l.combo == a,
                                m = o && l.seq == o && l.level == c;
                            (y || m) && t._callbacks[e].splice(s, 1), h.push(l)
                        }
                    return h
                }

                function h(e, n, r, i) { t.stopCallback(n, n.target || n.srcElement, r, i) || !1 === e(n, r) && (function(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1 }(n), function(e) { e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0 }(n)) }

                function m(e) {
                    "number" != typeof e.which && (e.which = e.keyCode);
                    var n = f(e);
                    n && ("keyup" != e.type || o !== n ? t.handleKey(n, function(e) { var t = []; return e.shiftKey && t.push("shift"), e.altKey && t.push("alt"), e.ctrlKey && t.push("ctrl"), e.metaKey && t.push("meta"), t }(e), e) : o = !1)
                }

                function k(e, t, n, a) {
                    function l(t) { return function() { c = t, ++i[e], clearTimeout(r), r = setTimeout(s, 1e3) } }

                    function u(t) { h(n, t, e), "keyup" !== a && (o = f(t)), setTimeout(s, 10) }
                    i[e] = 0;
                    for (var p = 0; p < t.length; ++p) {
                        var y = p + 1 === t.length ? u : l(a || d(t[p + 1]).action);
                        v(t[p], y, a, e, p)
                    }
                }

                function v(e, n, r, i, o) {
                    t._directMap[e + ":" + r] = n;
                    var a, c = (e = e.replace(/\s+/g, " ")).split(" ");
                    c.length > 1 ? k(e, c, n, r) : (a = d(e, r), t._callbacks[a.key] = t._callbacks[a.key] || [], l(a.key, a.modifiers, { type: a.action }, i, e, o), t._callbacks[a.key][i ? "unshift" : "push"]({ callback: n, modifiers: a.modifiers, action: a.action, seq: i, level: o, combo: e }))
                }
                t._handleKey = function(e, t, n) {
                    var r, i = l(e, t, n),
                        o = {},
                        u = 0,
                        f = !1;
                    for (r = 0; r < i.length; ++r) i[r].seq && (u = Math.max(u, i[r].level));
                    for (r = 0; r < i.length; ++r)
                        if (i[r].seq) {
                            if (i[r].level != u) continue;
                            f = !0, o[i[r].seq] = 1, h(i[r].callback, n, i[r].combo, i[r].seq)
                        } else f || h(i[r].callback, n, i[r].combo);
                    var d = "keypress" == n.type && a;
                    n.type != c || p(e) || d || s(o), a = f && "keydown" == n.type
                }, t._bindMultiple = function(e, t, n) { for (var r = 0; r < e.length; ++r) v(e[r], t, n) }, u(e, "keypress", m), u(e, "keydown", m), u(e, "keyup", m)
            }
        }("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null);
    }, {}],
    "Lpkl": [function(require, module, exports) {
        var global = arguments[3];
        var n = arguments[3];
        ! function() {
            function t(n) { return "array with " + n.length + " items.\n[" + n.map(r).join(",") + "]\n" }

            function r(n, r) { if (function(n) { return "string" == typeof n || "number" == typeof n || "boolean" == typeof n }(n)) return JSON.stringify(n); if (n instanceof Error) return n.name + " " + n.message; if (Array.isArray(n)) return t(n); if ((e = n) && "number" == typeof e.length) return t(Array.prototype.slice.call(n, 0)); var e, o; try { o = JSON.stringify(n, null, 2) } catch (t) { o = "{ cannot stringify arg " + r + ', it has type "' + typeof n + '"', o += "object" == typeof n ? " with keys " + Object.keys(n).join(", ") + " }" : " }" } return o }

            function e(n) { var t = "function" == typeof n ? n : null; if (t && (n = t()), !n) { var e = [].slice.call(arguments, 1); return t && e.unshift(t.toString()), new Error(function(n) { return n.reduce(function(n, t, e) { if (e && !/\n$/.test(n) && (n += " "), "string" == typeof t) return n + t; if ("function" == typeof t) { var o; try { o = t() } catch (n) { o = "[function " + t.name + " threw error!]" } return n + o } return n + r(t, e) }, "") }(e)) } }
            var o = function() { var n = e.apply(null, arguments); if (n) throw n },
                i = function() {
                    var n = e.apply(null, arguments);
                    n && setTimeout(function() { throw n }, 0)
                };

            function f(n, t, r, e) { n[r] = n[e] = t }
            o.async = i, o.globalRegister = function() { "object" == typeof n && (f(n, o, "lazyAss", "la"), f(n, i, "lazyAssync", "lac")) }, "object" == typeof window && (f(window, o, "lazyAss", "la"), f(window, i, "lazyAssync", "lac")), "object" == typeof module && (module.exports = o)
        }();
    }, {}],
    "Yq8M": [function(require, module, exports) {
        var global = arguments[3];
        var n = arguments[3];
        ! function() {
            "use strict";
            if ("function" != typeof Function.prototype.bind) throw new Error("Missing Function.prototype.bind, please load es5-shim first");

            function r(n, r) { return function(t) { if (r && arguments.length > 2) throw new Error("Curry2 function " + n.name + " called with too many arguments " + arguments.length); return 2 === arguments.length ? n(arguments[0], arguments[1]) : function(r) { return n(t, r) } } }

            function t(n) { return "function" == typeof n }

            function e(n) { return "string" == typeof n }

            function i(n) { return e(n) && n }

            function o(n) { return "object" == typeof n && !Array.isArray(n) && !f(n) && !y(n) }

            function u(n) { return "number" == typeof n && !isNaN(n) && n !== 1 / 0 && n !== -1 / 0 }

            function f(n) { return null === n }

            function a(n) { return u(n) && n > 0 }

            function c(n) { return u(n) && n < 0 }

            function y(n) { return n instanceof Date }

            function l(n, r) { return e(n) && e(r) && 0 === r.indexOf(n) }
            var s = l.bind(null, "http://"),
                p = l.bind(null, "https://");
            var m = {
                maybe: {},
                verify: {},
                not: {},
                every: function n(r) {
                    var t, e;
                    for (t in r)
                        if (r.hasOwnProperty(t)) { if (o(e = r[t]) && !1 === n(e)) return !1; if (!1 === e) return !1 }
                    return !0
                },
                map: function n(r, e) { var i, u, f = {}; for (i in e) e.hasOwnProperty(i) && (t(u = e[i]) ? f[i] = u(r[i]) : o(u) && (f[i] = n(r[i], u))); return f }
            };

            function g(n) { return void 0 !== n }

            function h(n, r) { if (2 !== arguments.length) throw new Error("Expected two arguments to check.has, got only " + arguments.length); return Boolean(n && r && "string" == typeof r && void 0 !== n[r]) }

            function d(n, r) { return m.verify.fn(m.every, "missing check.every method"), m.verify.fn(m.map, "missing check.map method"), m.verify.object(n, "missing object to check"), m.verify.object(r, "missing predicates object"), Object.keys(r).forEach(function(n) { if (!m.fn(r[n])) throw new Error("not a predicate function for " + n + " but " + r[n]) }), m.every(m.map(n, r)) }

            function v(n, r) { return d(r, n) }
            var b = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
            var w = /^[0-9a-f]{40}$/;
            var j = /^[0-9a-f]{7}$/;
            if (!m.defend) {
                m.defend = function(n) {
                    var r = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        return function(n, r, t) {
                            m.verify.fn(n, "expected a function"), m.verify.array(r, "expected list of predicates"), m.verify.defined(t, "missing args");
                            var e = 0,
                                i = 0,
                                o = r.length;
                            for (e = 0; e < o; e += 1) {
                                var u = r[e];
                                if (m.fn(u)) {
                                    if (!u.call(null, t[i])) { var f = "Argument " + (i + 1) + ": " + t[i] + " does not pass predicate"; throw m.unemptyString(r[e + 1]) && (f += ": " + r[e + 1]), new Error(f) }
                                    i += 1
                                }
                            }
                            return n.apply(null, t)
                        }(n, r, arguments)
                    }
                }
            }

            function A(n) { return function() { return !n.apply(null, arguments) } }
            m.mixin || (m.mixin = function(n, r) {
                if (e(n) && t(r)) {
                    var u = n;
                    n = r, r = u
                }
                if (!t(n)) throw new Error("expected predicate function");
                if (i(r) || (r = n.name), !i(r)) throw new Error("predicate function missing name\n" + n.toString());

                function f(n, r, e) {
                    if (!o(n)) throw new Error("missing object " + n);
                    if (!i(r)) throw new Error("missing name");
                    if (!t(e)) throw new Error("missing function");
                    n[r] || (n[r] = e)
                }
                var a;
                f(m, r, n), f(m.maybe, r, (a = n, function() { return !(m.defined(arguments[0]) && !m.nulled(arguments[0])) || a.apply(null, arguments) })), f(m.not, r, A(n)), f(m.verify, r, function(n, r) { return function() { var t; if (!1 === n.apply(null, arguments)) throw t = arguments[arguments.length - 1], new Error(m.unemptyString(t) ? t : r) } }(n, r + " failed"))
            }), m.then || (m.then = function(n, r) { return function() { if ("function" == typeof n ? n.apply(null, arguments) : n) return r.apply(null, arguments) } });
            var O = { then: t };
            O.catch = t, O.finally = t;
            var x = v.bind(null, O);
            var E = { nulled: f, fn: t, string: e, unemptyString: i, object: o, number: u, array: Array.isArray, positiveNumber: a, negativeNumber: c, positive: a, negative: c, defined: g, same: function(n, r) { return n === r }, allSame: function(n) { if (!m.array(n)) return !1; if (!n.length) return !0; var r = n[0]; return n.every(function(n) { return n === r }) }, bit: function(n) { return 0 === n || 1 === n }, bool: function(n) { return "boolean" == typeof n }, has: h, lowerCase: function(n) { return m.string(n) && n.toLowerCase() === n }, unemptyArray: function(n) { return m.array(n) && n.length > 0 }, arrayOfStrings: function(n, r) { var t = m.array(n) && n.every(m.string); return t && m.bool(r) && r ? n.every(m.lowerCase) : t }, arrayOfArraysOfStrings: function(n, r) { return m.array(n) && n.every(function(n) { return m.arrayOfStrings(n, r) }) }, all: d, schema: r(v), raises: function(n, r) { m.verify.fn(n, "expected function that raises"); try { n() } catch (n) { return void 0 === r || "function" == typeof r && r(n) } return !1 }, empty: function(n) { return "string" == typeof n || Array.isArray(n) ? !n.length : n instanceof Object && !Object.keys(n).length }, found: function(n) { return n >= 0 }, emptyString: function(n) { return "" === n }, unempty: function(n) { return "string" == typeof n || Array.isArray(n) ? n.length : !(n instanceof Object) || Object.keys(n).length }, unit: function(n) { return m.number(n) && n >= 0 && n <= 1 }, hexRgb: function(n) { return m.string(n) && b.test(n) }, sameLength: function(n, r) { return typeof n == typeof r && n && r && n.length === r.length }, commitId: function(n) { return m.string(n) && 40 === n.length && w.test(n) }, shortCommitId: function(n) { return m.string(n) && 7 === n.length && j.test(n) }, index: function(n, r) { return g(n) && h(n, "length") && r >= 0 && r < n.length }, git: function(n) { return m.unemptyString(n) && /^git@/.test(n) }, arrayOf: function(n, r) { return m.array(r) && r.every(n) }, badItems: function(n, r) { return m.verify.array(r, "expected array to find bad items"), r.filter(A(n)) }, oneOf: r(function(n, r) { return m.verify.array(n, "expected an array"), -1 !== n.indexOf(r) }, !0), promise: function(n) { return m.object(n) && x(n) }, validDate: function(n) { return m.date(n) && m.number(Number(n)) }, equal: r(function(n, r) { return n === r }), or: function() { var n = Array.prototype.slice.call(arguments, 0); if (!n.length) throw new Error("empty list of arguments to or"); return function() { var r = Array.prototype.slice.call(arguments, 0); return n.some(function(n) { try { return m.fn(n) ? n.apply(null, r) : Boolean(n) } catch (n) { return !1 } }) } }, and: function() { var n = Array.prototype.slice.call(arguments, 0); if (!n.length) throw new Error("empty list of arguments to or"); return function() { var r = Array.prototype.slice.call(arguments, 0); return n.every(function(n) { return m.fn(n) ? n.apply(null, r) : Boolean(n) }) } }, primitive: function(n) { var r = typeof n; return "number" === r || "boolean" === r || "string" === r || "symbol" === r }, zero: function(n) { return "number" == typeof n && 0 === n }, date: y, regexp: function(n) { return n instanceof RegExp }, instance: function(n, r) { return n instanceof r }, emptyObject: function(n) { return o(n) && 0 === Object.keys(n).length }, length: r(function n(r, t) { return "number" == typeof r && "number" != typeof t ? n(t, r) : (Array.isArray(r) || e(r)) && r.length === t }), floatNumber: function(n) { return u(n) && n % 1 != 0 }, intNumber: function(n) { return u(n) && n % 1 == 0 }, startsWith: l, webUrl: function(n) { return e(n) && (s(n) || p(n)) }, semver: function(n) { return m.unemptyString(n) && /^\d+\.\d+\.\d+$/.test(n) }, type: r(function(n, r) { return typeof r === n }) };
            Object.keys(E).forEach(function(n) { m.mixin(E[n], n) }), "object" == typeof module && (module.exports = m), "object" == typeof window && (window.check = m), "object" == typeof n && (n.check = m)
        }();
    }, {}],
    "plKm": [function(require, module, exports) {
        const e = require("lazy-ass"),
            t = require("check-more-types");

        function a(a) {
            e(t.object(a), "missing opts"), e(t.unemptyString(a.data), "missing data string", a), a.type = a.type || "text/plain";
            var n = "text/plain" === a.type ? "data:text/plain;charset=utf-8," + encodeURIComponent(a.data) : "data:" + a.type + "base64," + window.btoa(unescape(encodeURIComponent(a.data))),
                o = document.createElement("a");
            o.download = a.filename || "data.txt", o.href = n, document.body.appendChild(o), o.click(), t.fn(o.remove) ? o.remove() : e.async(!1, "Missing element remove() method ...")
        }
        module.exports = a;
    }, { "lazy-ass": "Lpkl", "check-more-types": "Yq8M" }],
    "A2is": [function(require, module, exports) {
        "use strict";
        module.exports = function(e) { return encodeURIComponent(e).replace(/[!'()*]/g, function(e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase() }) };
    }, {}],
    "J4Nk": [function(require, module, exports) {
        "use strict";
        var r = Object.getOwnPropertySymbols,
            t = Object.prototype.hasOwnProperty,
            e = Object.prototype.propertyIsEnumerable;

        function n(r) { if (null == r) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(r) }

        function o() { try { if (!Object.assign) return !1; var r = new String("abc"); if (r[5] = "de", "5" === Object.getOwnPropertyNames(r)[0]) return !1; for (var t = {}, e = 0; e < 10; e++) t["_" + String.fromCharCode(e)] = e; if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(r) { return t[r] }).join("")) return !1; var n = {}; return "abcdefghijklmnopqrst".split("").forEach(function(r) { n[r] = r }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("") } catch (r) { return !1 } }
        module.exports = o() ? Object.assign : function(o, c) { for (var a, i, s = n(o), f = 1; f < arguments.length; f++) { for (var u in a = Object(arguments[f])) t.call(a, u) && (s[u] = a[u]); if (r) { i = r(a); for (var b = 0; b < i.length; b++) e.call(a, i[b]) && (s[i[b]] = a[i[b]]) } } return s };
    }, {}],
    "/Fvp": [function(require, module, exports) {
        "use strict";
        var r = require("strict-uri-encode"),
            n = require("object-assign");

        function e(r) {
            switch (r.arrayFormat) {
                case "index":
                    return function(n, e, t) { return null === e ? [o(n, r), "[", t, "]"].join("") : [o(n, r), "[", o(t, r), "]=", o(e, r)].join("") };
                case "bracket":
                    return function(n, e) { return null === e ? o(n, r) : [o(n, r), "[]=", o(e, r)].join("") };
                default:
                    return function(n, e) { return null === e ? o(n, r) : [o(n, r), "=", o(e, r)].join("") }
            }
        }

        function t(r) {
            var n;
            switch (r.arrayFormat) {
                case "index":
                    return function(r, e, t) { n = /\[(\d*)\]$/.exec(r), r = r.replace(/\[\d*\]$/, ""), n ? (void 0 === t[r] && (t[r] = {}), t[r][n[1]] = e) : t[r] = e };
                case "bracket":
                    return function(r, e, t) { n = /(\[\])$/.exec(r), r = r.replace(/\[\]$/, ""), n ? void 0 !== t[r] ? t[r] = [].concat(t[r], e) : t[r] = [e] : t[r] = e };
                default:
                    return function(r, n, e) { void 0 !== e[r] ? e[r] = [].concat(e[r], n) : e[r] = n }
            }
        }

        function o(n, e) { return e.encode ? e.strict ? r(n) : encodeURIComponent(n) : n }

        function c(r) { return Array.isArray(r) ? r.sort() : "object" == typeof r ? c(Object.keys(r)).sort(function(r, n) { return Number(r) - Number(n) }).map(function(n) { return r[n] }) : r }
        exports.extract = function(r) { return r.split("?")[1] || "" }, exports.parse = function(r, e) {
            var o = t(e = n({ arrayFormat: "none" }, e)),
                i = Object.create(null);
            return "string" != typeof r ? i : (r = r.trim().replace(/^(\?|#|&)/, "")) ? (r.split("&").forEach(function(r) {
                var n = r.replace(/\+/g, " ").split("="),
                    e = n.shift(),
                    t = n.length > 0 ? n.join("=") : void 0;
                t = void 0 === t ? null : decodeURIComponent(t), o(decodeURIComponent(e), t, i)
            }), Object.keys(i).sort().reduce(function(r, n) { var e = i[n]; return Boolean(e) && "object" == typeof e && !Array.isArray(e) ? r[n] = c(e) : r[n] = e, r }, Object.create(null))) : i
        }, exports.stringify = function(r, t) { var c = e(t = n({ encode: !0, strict: !0, arrayFormat: "none" }, t)); return r ? Object.keys(r).sort().map(function(n) { var e = r[n]; if (void 0 === e) return ""; if (null === e) return o(n, t); if (Array.isArray(e)) { var i = []; return e.slice().forEach(function(r) { void 0 !== r && i.push(c(n, r, i.length)) }), i.join("&") } return o(n, t) + "=" + o(e, t) }).filter(function(r) { return r.length > 0 }).join("&") : "" };
    }, { "strict-uri-encode": "A2is", "object-assign": "J4Nk" }],
    "ED/T": [function(require, module, exports) {
        "use strict";
        module.exports = function(r, n) { return function() { for (var t = new Array(arguments.length), e = 0; e < t.length; e++) t[e] = arguments[e]; return r.apply(n, t) } };
    }, {}],
    "S1cf": [function(require, module, exports) {
        "use strict";
        var e = require("./helpers/bind"),
            n = Object.prototype.toString;

        function r(e) { return "[object Array]" === n.call(e) }

        function t(e) { return "[object ArrayBuffer]" === n.call(e) }

        function o(e) { return "undefined" != typeof FormData && e instanceof FormData }

        function f(e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer }

        function i(e) { return "string" == typeof e }

        function u(e) { return "number" == typeof e }

        function c(e) { return void 0 === e }

        function a(e) { return null !== e && "object" == typeof e }

        function l(e) { return "[object Date]" === n.call(e) }

        function s(e) { return "[object File]" === n.call(e) }

        function y(e) { return "[object Blob]" === n.call(e) }

        function p(e) { return "[object Function]" === n.call(e) }

        function d(e) { return a(e) && p(e.pipe) }

        function b(e) { return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams }

        function m(e) { return e.replace(/^\s*/, "").replace(/\s*$/, "") }

        function j() { return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement }

        function B(e, n) {
            if (null != e)
                if ("object" == typeof e || r(e) || (e = [e]), r(e))
                    for (var t = 0, o = e.length; t < o; t++) n.call(null, e[t], t, e);
                else
                    for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && n.call(null, e[f], f, e)
        }

        function A() {
            var e = {};

            function n(n, r) { "object" == typeof e[r] && "object" == typeof n ? e[r] = A(e[r], n) : e[r] = n }
            for (var r = 0, t = arguments.length; r < t; r++) B(arguments[r], n);
            return e
        }

        function h(n, r, t) { return B(r, function(r, o) { n[o] = t && "function" == typeof r ? e(r, t) : r }), n }
        module.exports = { isArray: r, isArrayBuffer: t, isFormData: o, isArrayBufferView: f, isString: i, isNumber: u, isObject: a, isUndefined: c, isDate: l, isFile: s, isBlob: y, isFunction: p, isStream: d, isURLSearchParams: b, isStandardBrowserEnv: j, forEach: B, merge: A, extend: h, trim: m };
    }, { "./helpers/bind": "ED/T" }],
    "M8l6": [function(require, module, exports) {
        "use strict";
        var e = require("../utils");
        module.exports = function(t, r) { e.forEach(t, function(e, o) { o !== r && o.toUpperCase() === r.toUpperCase() && (t[r] = e, delete t[o]) }) };
    }, { "../utils": "S1cf" }],
    "YdsM": [function(require, module, exports) {
        "use strict";
        module.exports = function(e, o, n, r) { return e.config = o, n && (e.code = n), e.response = r, e };
    }, {}],
    "3bIi": [function(require, module, exports) {
        "use strict";
        var r = require("./enhanceError");
        module.exports = function(e, n, o, t) { var u = new Error(e); return r(u, n, o, t) };
    }, { "./enhanceError": "YdsM" }],
    "aS8y": [function(require, module, exports) {
        "use strict";
        var t = require("./createError");
        module.exports = function(s, e, a) {
            var u = a.config.validateStatus;
            a.status && u && !u(a.status) ? e(t("Request failed with status code " + a.status, a.config, null, a)) : s(a)
        };
    }, { "./createError": "3bIi" }],
    "H6Qo": [function(require, module, exports) {
        "use strict";
        var e = require("./../utils");

        function r(e) { return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }
        module.exports = function(i, n, t) {
            if (!n) return i;
            var a;
            if (t) a = t(n);
            else if (e.isURLSearchParams(n)) a = n.toString();
            else {
                var c = [];
                e.forEach(n, function(i, n) { null != i && (e.isArray(i) && (n += "[]"), e.isArray(i) || (i = [i]), e.forEach(i, function(i) { e.isDate(i) ? i = i.toISOString() : e.isObject(i) && (i = JSON.stringify(i)), c.push(r(n) + "=" + r(i)) })) }), a = c.join("&")
            }
            return a && (i += (-1 === i.indexOf("?") ? "?" : "&") + a), i
        };
    }, { "./../utils": "S1cf" }],
    "ZeD7": [function(require, module, exports) {
        "use strict";
        var r = require("./../utils");
        module.exports = function(t) { var s, e, i, u = {}; return t ? (r.forEach(t.split("\n"), function(t) { i = t.indexOf(":"), s = r.trim(t.substr(0, i)).toLowerCase(), e = r.trim(t.substr(i + 1)), s && (u[s] = u[s] ? u[s] + ", " + e : e) }), u) : u };
    }, { "./../utils": "S1cf" }],
    "/w7L": [function(require, module, exports) {
        "use strict";
        var t = require("./../utils");
        module.exports = t.isStandardBrowserEnv() ? function() {
            var r, e = /(msie|trident)/i.test(navigator.userAgent),
                o = document.createElement("a");

            function a(t) { var r = t; return e && (o.setAttribute("href", r), r = o.href), o.setAttribute("href", r), { href: o.href, protocol: o.protocol ? o.protocol.replace(/:$/, "") : "", host: o.host, search: o.search ? o.search.replace(/^\?/, "") : "", hash: o.hash ? o.hash.replace(/^#/, "") : "", hostname: o.hostname, port: o.port, pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname } }
            return r = a(window.location.href),
                function(e) { var o = t.isString(e) ? a(e) : e; return o.protocol === r.protocol && o.host === r.host }
        }() : function() { return !0 };
    }, { "./../utils": "S1cf" }],
    "mmkS": [function(require, module, exports) {
        "use strict";
        var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        function t() { this.message = "String contains an invalid character" }

        function o(o) {
            for (var e, a, n = String(o), c = "", i = 0, h = r; n.charAt(0 | i) || (h = "=", i % 1); c += h.charAt(63 & e >> 8 - i % 1 * 8)) {
                if ((a = n.charCodeAt(i += .75)) > 255) throw new t;
                e = e << 8 | a
            }
            return c
        }
        t.prototype = new Error, t.prototype.code = 5, t.prototype.name = "InvalidCharacterError", module.exports = o;
    }, {}],
    "dn2M": [function(require, module, exports) {
        "use strict";
        var e = require("./../utils");
        module.exports = e.isStandardBrowserEnv() ? {
            write: function(n, t, o, r, i, u) {
                var s = [];
                s.push(n + "=" + encodeURIComponent(t)), e.isNumber(o) && s.push("expires=" + new Date(o).toGMTString()), e.isString(r) && s.push("path=" + r), e.isString(i) && s.push("domain=" + i), !0 === u && s.push("secure"), document.cookie = s.join("; ")
            },
            read: function(e) { var n = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return n ? decodeURIComponent(n[3]) : null },
            remove: function(e) { this.write(e, "", Date.now() - 864e5) }
        } : { write: function() {}, read: function() { return null }, remove: function() {} };
    }, { "./../utils": "S1cf" }],
    "KRuG": [function(require, module, exports) {
        "use strict";
        var e = require("./../utils"),
            r = require("./../core/settle"),
            o = require("./../helpers/buildURL"),
            t = require("./../helpers/parseHeaders"),
            s = require("./../helpers/isURLSameOrigin"),
            n = require("../core/createError"),
            i = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || require("./../helpers/btoa");
        module.exports = function(a) {
            return new Promise(function(u, d) {
                var p = a.data,
                    l = a.headers;
                e.isFormData(p) && delete l["Content-Type"];
                var f = new XMLHttpRequest,
                    c = "onreadystatechange",
                    w = !1;
                if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in f || s(a.url) || (f = new window.XDomainRequest, c = "onload", w = !0, f.onprogress = function() {}, f.ontimeout = function() {}), a.auth) {
                    var h = a.auth.username || "",
                        m = a.auth.password || "";
                    l.Authorization = "Basic " + i(h + ":" + m)
                }
                if (f.open(a.method.toUpperCase(), o(a.url, a.params, a.paramsSerializer), !0), f.timeout = a.timeout, f[c] = function() {
                        if (f && (4 === f.readyState || w) && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
                            var e = "getAllResponseHeaders" in f ? t(f.getAllResponseHeaders()) : null,
                                o = { data: a.responseType && "text" !== a.responseType ? f.response : f.responseText, status: 1223 === f.status ? 204 : f.status, statusText: 1223 === f.status ? "No Content" : f.statusText, headers: e, config: a, request: f };
                            r(u, d, o), f = null
                        }
                    }, f.onerror = function() { d(n("Network Error", a)), f = null }, f.ontimeout = function() { d(n("timeout of " + a.timeout + "ms exceeded", a, "ECONNABORTED")), f = null }, e.isStandardBrowserEnv()) {
                    var y = require("./../helpers/cookies"),
                        q = (a.withCredentials || s(a.url)) && a.xsrfCookieName ? y.read(a.xsrfCookieName) : void 0;
                    q && (l[a.xsrfHeaderName] = q)
                }
                if ("setRequestHeader" in f && e.forEach(l, function(e, r) { void 0 === p && "content-type" === r.toLowerCase() ? delete l[r] : f.setRequestHeader(r, e) }), a.withCredentials && (f.withCredentials = !0), a.responseType) try { f.responseType = a.responseType } catch (e) { if ("json" !== f.responseType) throw e }
                "function" == typeof a.onDownloadProgress && f.addEventListener("progress", a.onDownloadProgress), "function" == typeof a.onUploadProgress && f.upload && f.upload.addEventListener("progress", a.onUploadProgress), a.cancelToken && a.cancelToken.promise.then(function(e) { f && (f.abort(), d(e), f = null) }), void 0 === p && (p = null), f.send(p)
            })
        };
    }, { "./../utils": "S1cf", "./../core/settle": "aS8y", "./../helpers/buildURL": "H6Qo", "./../helpers/parseHeaders": "ZeD7", "./../helpers/isURLSameOrigin": "/w7L", "../core/createError": "3bIi", "./../helpers/btoa": "mmkS", "./../helpers/cookies": "dn2M" }],
    "BXyq": [function(require, module, exports) {
        var process = require("process");
        var e = require("process"),
            t = require("./utils"),
            r = require("./helpers/normalizeHeaderName"),
            n = /^\)\]\}',?\n/,
            a = { "Content-Type": "application/x-www-form-urlencoded" };

        function i(e, r) {!t.isUndefined(e) && t.isUndefined(e["Content-Type"]) && (e["Content-Type"] = r) }

        function o() { var t; return "undefined" != typeof XMLHttpRequest ? t = require("./adapters/xhr") : void 0 !== e && (t = require("./adapters/http")), t }
        var s = { adapter: o(), transformRequest: [function(e, n) { return r(n, "Content-Type"), t.isFormData(e) || t.isArrayBuffer(e) || t.isStream(e) || t.isFile(e) || t.isBlob(e) ? e : t.isArrayBufferView(e) ? e.buffer : t.isURLSearchParams(e) ? (i(n, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : t.isObject(e) ? (i(n, "application/json;charset=utf-8"), JSON.stringify(e)) : e }], transformResponse: [function(e) { if ("string" == typeof e) { e = e.replace(n, ""); try { e = JSON.parse(e) } catch (e) {} } return e }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function(e) { return e >= 200 && e < 300 }, headers: { common: { Accept: "application/json, text/plain, */*" } } };
        t.forEach(["delete", "get", "head"], function(e) { s.headers[e] = {} }), t.forEach(["post", "put", "patch"], function(e) { s.headers[e] = t.merge(a) }), module.exports = s;
    }, { "./utils": "S1cf", "./helpers/normalizeHeaderName": "M8l6", "./adapters/xhr": "KRuG", "./adapters/http": "KRuG", "process": "pBGv" }],
    "rj2i": [function(require, module, exports) {
        "use strict";
        var t = require("./../utils");

        function e() { this.handlers = [] }
        e.prototype.use = function(t, e) { return this.handlers.push({ fulfilled: t, rejected: e }), this.handlers.length - 1 }, e.prototype.eject = function(t) { this.handlers[t] && (this.handlers[t] = null) }, e.prototype.forEach = function(e) { t.forEach(this.handlers, function(t) { null !== t && e(t) }) }, module.exports = e;
    }, { "./../utils": "S1cf" }],
    "woEt": [function(require, module, exports) {
        "use strict";
        var r = require("./../utils");
        module.exports = function(t, u, e) { return r.forEach(e, function(r) { t = r(t, u) }), t };
    }, { "./../utils": "S1cf" }],
    "V3+0": [function(require, module, exports) {
        "use strict";
        module.exports = function(t) { return !(!t || !t.__CANCEL__) };
    }, {}],
    "uz6X": [function(require, module, exports) {
        "use strict";
        var e = require("./../utils"),
            r = require("./transformData"),
            a = require("../cancel/isCancel"),
            t = require("../defaults");

        function s(e) { e.cancelToken && e.cancelToken.throwIfRequested() }
        module.exports = function(n) { return s(n), n.headers = n.headers || {}, n.data = r(n.data, n.headers, n.transformRequest), n.headers = e.merge(n.headers.common || {}, n.headers[n.method] || {}, n.headers || {}), e.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) { delete n.headers[e] }), (n.adapter || t.adapter)(n).then(function(e) { return s(n), e.data = r(e.data, e.headers, n.transformResponse), e }, function(e) { return a(e) || (s(n), e && e.response && (e.response.data = r(e.response.data, e.response.headers, n.transformResponse))), Promise.reject(e) }) };
    }, { "./../utils": "S1cf", "./transformData": "woEt", "../cancel/isCancel": "V3+0", "../defaults": "BXyq" }],
    "7/2Y": [function(require, module, exports) {
        "use strict";
        module.exports = function(t) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t) };
    }, {}],
    "a2Uu": [function(require, module, exports) {
        "use strict";
        module.exports = function(e, r) { return e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") };
    }, {}],
    "OvAf": [function(require, module, exports) {
        "use strict";
        var e = require("./../defaults"),
            t = require("./../utils"),
            r = require("./InterceptorManager"),
            s = require("./dispatchRequest"),
            u = require("./../helpers/isAbsoluteURL"),
            i = require("./../helpers/combineURLs");

        function o(e) { this.defaults = e, this.interceptors = { request: new r, response: new r } }
        o.prototype.request = function(r) {
            "string" == typeof r && (r = t.merge({ url: arguments[0] }, arguments[1])), (r = t.merge(e, this.defaults, { method: "get" }, r)).baseURL && !u(r.url) && (r.url = i(r.baseURL, r.url));
            var o = [s, void 0],
                n = Promise.resolve(r);
            for (this.interceptors.request.forEach(function(e) { o.unshift(e.fulfilled, e.rejected) }), this.interceptors.response.forEach(function(e) { o.push(e.fulfilled, e.rejected) }); o.length;) n = n.then(o.shift(), o.shift());
            return n
        }, t.forEach(["delete", "get", "head"], function(e) { o.prototype[e] = function(r, s) { return this.request(t.merge(s || {}, { method: e, url: r })) } }), t.forEach(["post", "put", "patch"], function(e) { o.prototype[e] = function(r, s, u) { return this.request(t.merge(u || {}, { method: e, url: r, data: s })) } }), module.exports = o;
    }, { "./../defaults": "BXyq", "./../utils": "S1cf", "./InterceptorManager": "rj2i", "./dispatchRequest": "uz6X", "./../helpers/isAbsoluteURL": "7/2Y", "./../helpers/combineURLs": "a2Uu" }],
    "mI+K": [function(require, module, exports) {
        "use strict";

        function t(t) { this.message = t }
        t.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, t.prototype.__CANCEL__ = !0, module.exports = t;
    }, {}],
    "tsWd": [function(require, module, exports) {
        "use strict";
        var e = require("./Cancel");

        function n(n) {
            if ("function" != typeof n) throw new TypeError("executor must be a function.");
            var o;
            this.promise = new Promise(function(e) { o = e });
            var r = this;
            n(function(n) { r.reason || (r.reason = new e(n), o(r.reason)) })
        }
        n.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, n.source = function() { var e; return { token: new n(function(n) { e = n }), cancel: e } }, module.exports = n;
    }, { "./Cancel": "mI+K" }],
    "X8jb": [function(require, module, exports) {
        "use strict";
        module.exports = function(n) { return function(t) { return n.apply(null, t) } };
    }, {}],
    "nUiQ": [function(require, module, exports) {
        "use strict";
        var e = require("./utils"),
            r = require("./helpers/bind"),
            n = require("./core/Axios"),
            t = require("./defaults");

        function u(t) {
            var u = new n(t),
                l = r(n.prototype.request, u);
            return e.extend(l, n.prototype, u), e.extend(l, u), l
        }
        var l = u(t);
        l.Axios = n, l.create = function(r) { return u(e.merge(t, r)) }, l.Cancel = require("./cancel/Cancel"), l.CancelToken = require("./cancel/CancelToken"), l.isCancel = require("./cancel/isCancel"), l.all = function(e) { return Promise.all(e) }, l.spread = require("./helpers/spread"), module.exports = l, module.exports.default = l;
    }, { "./utils": "S1cf", "./helpers/bind": "ED/T", "./core/Axios": "OvAf", "./defaults": "BXyq", "./cancel/Cancel": "mI+K", "./cancel/CancelToken": "tsWd", "./cancel/isCancel": "V3+0", "./helpers/spread": "X8jb" }],
    "dZBD": [function(require, module, exports) {
        module.exports = require("./lib/axios");
    }, { "./lib/axios": "nUiQ" }],
    "DXry": [function(require, module, exports) {
        var e, t, n, r = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            o = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" };

        function f(e) { return r.lastIndex = 0, r.test(e) ? '"' + e.replace(r, function(e) { var t = o[e]; return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + e + '"' }

        function u(r, o, i) {
            var l, c, p, a, s, b = e,
                g = o[r];
            switch (g && "object" == typeof g && "function" == typeof g.toJSON && (g = g.toJSON(r)), "function" == typeof n && (g = n.call(o, r, g)), typeof g) {
                case "string":
                    return f(g);
                case "number":
                    return isFinite(g) ? String(g) : "null";
                case "boolean":
                case "null":
                    return String(g);
                case "object":
                    if (!g) return "null";
                    if (e += t, s = [], "[object Array]" === Object.prototype.toString.apply(g)) { for (a = g.length, l = 0; l < a; l += 1) s[l] = u(l, g, i) || "null"; return p = 0 === s.length ? "[]" : e ? e.length + s.join(", ").length + 4 > i ? "[\n" + e + s.join(",\n" + e) + "\n" + b + "]" : "[ " + s.join(", ") + " ]" : "[" + s.join(",") + "]", e = b, p }
                    if (n && "object" == typeof n)
                        for (a = n.length, l = 0; l < a; l += 1) "string" == typeof n[l] && (p = u(c = n[l], g, i)) && s.push(f(c) + (e ? ": " : ":") + p);
                    else
                        for (c in g) Object.prototype.hasOwnProperty.call(g, c) && (p = u(c, g, i)) && s.push(f(c) + (e ? ": " : ":") + p);
                    return p = 0 === s.length ? "{}" : e ? e.length + s.join(", ").length + 4 > i ? "{\n" + e + s.join(",\n" + e) + "\n" + b + "}" : "{ " + s.join(", ") + " }" : "{" + s.join(",") + "}", e = b, p
            }
        }

        function i(r, o, f, i) {
            var l;
            if (e = "", t = "", i || (i = 0), "number" != typeof i) throw new Error("beaufifier: limit must be a number");
            if ("number" == typeof f)
                for (l = 0; l < f; l += 1) t += " ";
            else "string" == typeof f && (t = f);
            if (n = o, o && "function" != typeof o && ("object" != typeof o || "number" != typeof o.length)) throw new Error("beautifier: wrong replacer parameter");
            return u("", { "": r }, i)
        }
        module.exports = i;
    }, {}],
    "2JJl": [function(require, module, exports) {
        "use strict";
        var e = Object.prototype.hasOwnProperty,
            t = "~";

        function n() {}

        function r(e, t, n) { this.fn = e, this.context = t, this.once = n || !1 }

        function o(e, n, o, s, i) {
            if ("function" != typeof o) throw new TypeError("The listener must be a function");
            var c = new r(o, s || e, i),
                f = t ? t + n : n;
            return e._events[f] ? e._events[f].fn ? e._events[f] = [e._events[f], c] : e._events[f].push(c) : (e._events[f] = c, e._eventsCount++), e
        }

        function s(e, t) { 0 == --e._eventsCount ? e._events = new n : delete e._events[t] }

        function i() { this._events = new n, this._eventsCount = 0 }
        Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (t = !1)), i.prototype.eventNames = function() { var n, r, o = []; if (0 === this._eventsCount) return o; for (r in n = this._events) e.call(n, r) && o.push(t ? r.slice(1) : r); return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(n)) : o }, i.prototype.listeners = function(e) {
            var n = t ? t + e : e,
                r = this._events[n];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var o = 0, s = r.length, i = new Array(s); o < s; o++) i[o] = r[o].fn;
            return i
        }, i.prototype.listenerCount = function(e) {
            var n = t ? t + e : e,
                r = this._events[n];
            return r ? r.fn ? 1 : r.length : 0
        }, i.prototype.emit = function(e, n, r, o, s, i) {
            var c = t ? t + e : e;
            if (!this._events[c]) return !1;
            var f, u, a = this._events[c],
                l = arguments.length;
            if (a.fn) {
                switch (a.once && this.removeListener(e, a.fn, void 0, !0), l) {
                    case 1:
                        return a.fn.call(a.context), !0;
                    case 2:
                        return a.fn.call(a.context, n), !0;
                    case 3:
                        return a.fn.call(a.context, n, r), !0;
                    case 4:
                        return a.fn.call(a.context, n, r, o), !0;
                    case 5:
                        return a.fn.call(a.context, n, r, o, s), !0;
                    case 6:
                        return a.fn.call(a.context, n, r, o, s, i), !0
                }
                for (u = 1, f = new Array(l - 1); u < l; u++) f[u - 1] = arguments[u];
                a.fn.apply(a.context, f)
            } else {
                var v, h = a.length;
                for (u = 0; u < h; u++) switch (a[u].once && this.removeListener(e, a[u].fn, void 0, !0), l) {
                    case 1:
                        a[u].fn.call(a[u].context);
                        break;
                    case 2:
                        a[u].fn.call(a[u].context, n);
                        break;
                    case 3:
                        a[u].fn.call(a[u].context, n, r);
                        break;
                    case 4:
                        a[u].fn.call(a[u].context, n, r, o);
                        break;
                    default:
                        if (!f)
                            for (v = 1, f = new Array(l - 1); v < l; v++) f[v - 1] = arguments[v];
                        a[u].fn.apply(a[u].context, f)
                }
            }
            return !0
        }, i.prototype.on = function(e, t, n) { return o(this, e, t, n, !1) }, i.prototype.once = function(e, t, n) { return o(this, e, t, n, !0) }, i.prototype.removeListener = function(e, n, r, o) {
            var i = t ? t + e : e;
            if (!this._events[i]) return this;
            if (!n) return s(this, i), this;
            var c = this._events[i];
            if (c.fn) c.fn !== n || o && !c.once || r && c.context !== r || s(this, i);
            else {
                for (var f = 0, u = [], a = c.length; f < a; f++)(c[f].fn !== n || o && !c[f].once || r && c[f].context !== r) && u.push(c[f]);
                u.length ? this._events[i] = 1 === u.length ? u[0] : u : s(this, i)
            }
            return this
        }, i.prototype.removeAllListeners = function(e) { var r; return e ? (r = t ? t + e : e, this._events[r] && s(this, r)) : (this._events = new n, this._eventsCount = 0), this }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prefixed = t, i.EventEmitter = i, "undefined" != typeof module && (module.exports = i);
    }, {}],
    "rcym": [function(require, module, exports) {
        var r = [].indexOf;
        module.exports = function(e, n) {
            if (r) return e.indexOf(n);
            for (var f = 0; f < e.length; ++f)
                if (e[f] === n) return f;
            return -1
        };
    }, {}],
    "2qy9": [function(require, module, exports) {
        var indexOf = require("indexof"),
            Object_keys = function(e) { if (Object.keys) return Object.keys(e); var t = []; for (var r in e) t.push(r); return t },
            forEach = function(e, t) { if (e.forEach) return e.forEach(t); for (var r = 0; r < e.length; r++) t(e[r], r, e) },
            defineProp = function() {
                try {
                    return Object.defineProperty({}, "_", {}),
                        function(e, t, r) { Object.defineProperty(e, t, { writable: !0, enumerable: !1, configurable: !0, value: r }) }
                } catch (e) { return function(e, t, r) { e[t] = r } }
            }(),
            globals = ["Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape"];

        function Context() {}
        Context.prototype = {};
        var Script = exports.Script = function(e) {
            if (!(this instanceof Script)) return new Script(e);
            this.code = e
        };
        Script.prototype.runInContext = function(e) {
            if (!(e instanceof Context)) throw new TypeError("needs a 'context' argument.");
            var t = document.createElement("iframe");
            t.style || (t.style = {}), t.style.display = "none", document.body.appendChild(t);
            var r = t.contentWindow,
                n = r.eval,
                o = r.execScript;
            !n && o && (o.call(r, "null"), n = r.eval), forEach(Object_keys(e), function(t) { r[t] = e[t] }), forEach(globals, function(t) { e[t] && (r[t] = e[t]) });
            var c = Object_keys(r),
                i = n.call(r, this.code);
            return forEach(Object_keys(r), function(t) {
                (t in e || -1 === indexOf(c, t)) && (e[t] = r[t])
            }), forEach(globals, function(t) { t in e || defineProp(e, t, r[t]) }), document.body.removeChild(t), i
        }, Script.prototype.runInThisContext = function() { return eval(this.code) }, Script.prototype.runInNewContext = function(e) {
            var t = Script.createContext(e),
                r = this.runInContext(t);
            return forEach(Object_keys(t), function(r) { e[r] = t[r] }), r
        }, forEach(Object_keys(Script.prototype), function(e) { exports[e] = Script[e] = function(t) { var r = Script(t); return r[e].apply(r, [].slice.call(arguments, 1)) } }), exports.createScript = function(e) { return exports.Script(e) }, exports.createContext = Script.createContext = function(e) { var t = new Context; return "object" == typeof e && forEach(Object_keys(e), function(r) { t[r] = e[r] }), t };
    }, { "indexof": "rcym" }],
    "XveT": [function(require, module, exports) {
        var define;
        var __dirname = "/Users/baku/Dropbox/Works/2018/04_ui-study/pentool/node_modules/localeval";
        var global = arguments[3];
        var e, r = "/Users/baku/Dropbox/Works/2018/04_ui-study/pentool/node_modules/localeval",
            t = arguments[3],
            n = "object" == typeof exports;
        ! function(r, t) { "object" == typeof exports ? module.exports = t() : "function" == typeof e && e.amd ? e(t) : r.localeval = t(r).localeval }(this, function(e) {
            if (n) {
                var t, o = function() {
                        var e = require("child_process");
                        t = e.fork(r + "/child.js")
                    },
                    a = function(e, r, n, a) {
                        if (null == n) return require("vm").runInNewContext(e, r);
                        null == t && o();
                        var c = setTimeout(function() { t.kill("SIGKILL"), a && a(new Error("The script took more than " + n + "ms. Abort.")), o() }, n);
                        t.once("message", function(e) { clearTimeout(c), a && (e.error ? (console.log(JSON.stringify(e.error)), a(e.error)) : a(null, e.result)) }), t.send({ code: e, sandbox: r })
                    };
                return a.clear = function() { t.kill("SIGKILL") }, a
            }
            var c, i = ["break", "do", "in", "typeof", "case", "else", "instanceof", "var", "catch", "export", "new", "void", "class", "extends", "return", "while", "const", "finally", "super", "with", "continue", "for", "switch", "yield", "debugger", "function", "this", "delete", "import", "try", "enum", "implements", "package", "protected", "static", "interface", "private", "public", "eval"],
                l = /^[$_a-zA-Z][$_a-zA-Z0-9]*$/,
                u = function(e) { return -1 === f.indexOf(e) && -1 === i.indexOf(e) && l.test(e) },
                f = ["JSON", "Object", "Function", "Array", "String", "Boolean", "Number", "Date", "RegExp", "Error", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
                s = function(e) { if (e.prototype) { for (var r = Object.create(null), t = Object.getOwnPropertyNames(e.prototype), n = 0; n < t.length; n++) r[t[n]] = e.prototype[t[n]]; return r } },
                p = function(e, r) {
                    if (e.prototype)
                        for (var t = Object.getOwnPropertyNames(r), n = 0; n < t.length; n++) try { e.prototype[t[n]] = r[t[n]] } catch (e) {}
                },
                y = function(e) {
                    for (var r = Object.create(null), t = Object.getOwnPropertyNames(e), n = 0; n < t.length; n++)
                        if (r[t[n]] = e[t[n]], "object" == typeof e[t[n]]) try { delete e[t[n]] } catch (e) {}
                    return r
                },
                d = function(e, r) { for (var t = Object.getOwnPropertyNames(r), n = 0; n < t.length; n++) try { e[t[n]] = r[t[n]] } catch (e) {} },
                v = function(e, r) {
                    if (r)
                        for (var t = Object.getOwnPropertyNames(e), n = 0; n < t.length; n++)
                            if (void 0 === r[t[n]]) try { delete e[t[n]] } catch (e) {}
                },
                g = [JSON, Object, Function, Array, String, Boolean, Number, Date, RegExp, Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError],
                b = new Array(g.length),
                m = new Array(g.length),
                O = function(r, t) {
                    t = t || Object.create(null);
                    var n = "var ";
                    for (var o in t) n += o + '=$sandbox$["' + o + '"],';
                    n += "undefined;";
                    var a = f.concat("$sandbox$"),
                        c = JSON.stringify('"use strict";' + r + "\n//# sourceURL=sandbox.js\n"),
                        i = Function.apply(null, a.concat("" + function() {
                            var r = "var ";
                            if (Object.getOwnPropertyNames)
                                for (var t, n = e; null != n;) {
                                    t = Object.getOwnPropertyNames(n);
                                    for (var o = 0; o < t.length; o++) u(t[o]) && (r += t[o] + ",");
                                    n = Object.getPrototypeOf(n)
                                } else
                                    for (var a in e) u(a) && (r += a + ",");
                            return r += "undefined;"
                        }() + n + "\nreturn eval(" + c + ")"));
                    i.displayName = "sandbox",
                        function() { for (var e = 0; e < g.length; e++) b[e] = s(g[e]), p(g[e], s(g[e])), m[e] = y(g[e]) }();
                    var l = i.apply(0, g.concat(t));
                    return function() { for (var e = 0; e < g.length; e++) v(g[e].prototype, b[e]), p(g[e], b[e]), v(g[e], m[e]), d(g[e], m[e]) }(), l
                };
            o = function() { c = new Worker("worker.68ddec59.js") };
            return {
                localeval: function(e, r, t, n) {
                    if (null == t) return O(e, r);
                    null == c && o();
                    var a = setTimeout(function() { c.terminate(), n && n(new Error("The script took more than " + t + "ms. Abort.")), o() }, t);
                    c.onmessage = function(e) { clearTimeout(a), n && (e.data.error ? n(e.data.error) : n(null, e.data.result)) }, c.postMessage({ code: e, sandbox: r })
                }
            }
        });
    }, {
        "child_process": "70rD",
        "vm": "2qy9",
        "./worker.js": [
            ["worker.68ddec59.js", "pQ0D"], "pQ0D"
        ]
    }],
    "V2aH": [function(require, module, exports) {
        "use strict";
        module.exports = function(t, e, n, l, r, u, o, s) {
            4 === arguments.length ? (o = l[0], s = l[1], r = n[0], u = n[1], n = e[0], l = e[1], e = (t = t[0])[1]) : 2 === arguments.length && (s = e[3], o = e[2], u = e[1], r = e[0], l = t[3], n = t[2], e = t[1], t = t[0]);
            var c = t * l - e * n,
                g = r * s - u * o,
                h = t - n,
                i = e - l,
                a = r - o,
                d = u - s,
                f = h * d - i * a;
            return 0 === f ? null : [(c * a - h * g) / f, (c * d - i * g) / f]
        };
    }, {}],
    "+Wle": [function(require, module, exports) {
        "use strict";
        module.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
    }, {}],
    "jl5Q": [function(require, module, exports) {
        module.exports = function(r) { return !(!r || "string" == typeof r) && (r instanceof Array || Array.isArray(r) || r.length >= 0 && (r.splice instanceof Function || Object.getOwnPropertyDescriptor(r, r.length - 1) && "String" !== r.constructor.name)) };
    }, {}],
    "3zuf": [function(require, module, exports) {
        "use strict";
        var r = require("is-arrayish"),
            t = Array.prototype.concat,
            e = Array.prototype.slice,
            a = module.exports = function(a) {
                for (var n = [], o = 0, u = a.length; o < u; o++) {
                    var c = a[o];
                    r(c) ? n = t.call(n, e.call(c)) : n.push(c)
                }
                return n
            };
        a.wrap = function(r) { return function() { return r(a(arguments)) } };
    }, { "is-arrayish": "jl5Q" }],
    "bWbw": [function(require, module, exports) {
        var r = require("color-name"),
            t = require("simple-swizzle"),
            a = {};
        for (var e in r) r.hasOwnProperty(e) && (a[r[e]] = e);
        var n = module.exports = { to: {} };

        function s(r, t, a) { return Math.min(Math.max(t, r), a) }

        function o(r) { var t = r.toString(16).toUpperCase(); return t.length < 2 ? "0" + t : t }
        n.get = function(r) {
            var t, a;
            switch (r.substring(0, 3).toLowerCase()) {
                case "hsl":
                    t = n.get.hsl(r), a = "hsl";
                    break;
                case "hwb":
                    t = n.get.hwb(r), a = "hwb";
                    break;
                default:
                    t = n.get.rgb(r), a = "rgb"
            }
            return t ? { model: a, value: t } : null
        }, n.get.rgb = function(t) {
            if (!t) return null;
            var a, e, n, o = [0, 0, 0, 1];
            if (a = t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
                for (n = a[2], a = a[1], e = 0; e < 3; e++) {
                    var u = 2 * e;
                    o[e] = parseInt(a.slice(u, u + 2), 16)
                }
                n && (o[3] = Math.round(parseInt(n, 16) / 255 * 100) / 100)
            } else if (a = t.match(/^#([a-f0-9]{3,4})$/i)) {
                for (n = (a = a[1])[3], e = 0; e < 3; e++) o[e] = parseInt(a[e] + a[e], 16);
                n && (o[3] = Math.round(parseInt(n + n, 16) / 255 * 100) / 100)
            } else if (a = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)) {
                for (e = 0; e < 3; e++) o[e] = parseInt(a[e + 1], 0);
                a[4] && (o[3] = parseFloat(a[4]))
            } else {
                if (!(a = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/))) return (a = t.match(/(\D+)/)) ? "transparent" === a[1] ? [0, 0, 0, 0] : (o = r[a[1]]) ? (o[3] = 1, o) : null : null;
                for (e = 0; e < 3; e++) o[e] = Math.round(2.55 * parseFloat(a[e + 1]));
                a[4] && (o[3] = parseFloat(a[4]))
            }
            for (e = 0; e < 3; e++) o[e] = s(o[e], 0, 255);
            return o[3] = s(o[3], 0, 1), o
        }, n.get.hsl = function(r) { if (!r) return null; var t = r.match(/^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/); if (t) { var a = parseFloat(t[4]); return [(parseFloat(t[1]) % 360 + 360) % 360, s(parseFloat(t[2]), 0, 100), s(parseFloat(t[3]), 0, 100), s(isNaN(a) ? 1 : a, 0, 1)] } return null }, n.get.hwb = function(r) { if (!r) return null; var t = r.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/); if (t) { var a = parseFloat(t[4]); return [(parseFloat(t[1]) % 360 + 360) % 360, s(parseFloat(t[2]), 0, 100), s(parseFloat(t[3]), 0, 100), s(isNaN(a) ? 1 : a, 0, 1)] } return null }, n.to.hex = function() { var r = t(arguments); return "#" + o(r[0]) + o(r[1]) + o(r[2]) + (r[3] < 1 ? o(Math.round(255 * r[3])) : "") }, n.to.rgb = function() { var r = t(arguments); return r.length < 4 || 1 === r[3] ? "rgb(" + Math.round(r[0]) + ", " + Math.round(r[1]) + ", " + Math.round(r[2]) + ")" : "rgba(" + Math.round(r[0]) + ", " + Math.round(r[1]) + ", " + Math.round(r[2]) + ", " + r[3] + ")" }, n.to.rgb.percent = function() {
            var r = t(arguments),
                a = Math.round(r[0] / 255 * 100),
                e = Math.round(r[1] / 255 * 100),
                n = Math.round(r[2] / 255 * 100);
            return r.length < 4 || 1 === r[3] ? "rgb(" + a + "%, " + e + "%, " + n + "%)" : "rgba(" + a + "%, " + e + "%, " + n + "%, " + r[3] + ")"
        }, n.to.hsl = function() { var r = t(arguments); return r.length < 4 || 1 === r[3] ? "hsl(" + r[0] + ", " + r[1] + "%, " + r[2] + "%)" : "hsla(" + r[0] + ", " + r[1] + "%, " + r[2] + "%, " + r[3] + ")" }, n.to.hwb = function() {
            var r = t(arguments),
                a = "";
            return r.length >= 4 && 1 !== r[3] && (a = ", " + r[3]), "hwb(" + r[0] + ", " + r[1] + "%, " + r[2] + "%" + a + ")"
        }, n.to.keyword = function(r) { return a[r.slice(0, 3)] };
    }, { "color-name": "+Wle", "simple-swizzle": "3zuf" }],
    "Lr6W": [function(require, module, exports) {
        module.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
    }, {}],
    "v4cc": [function(require, module, exports) {
        var r = require("color-name"),
            n = {};
        for (var a in r) r.hasOwnProperty(a) && (n[r[a]] = a);
        var t = module.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
        for (var e in t)
            if (t.hasOwnProperty(e)) {
                if (!("channels" in t[e])) throw new Error("missing channels property: " + e);
                if (!("labels" in t[e])) throw new Error("missing channel labels property: " + e);
                if (t[e].labels.length !== t[e].channels) throw new Error("channel and label counts mismatch: " + e);
                var h = t[e].channels,
                    u = t[e].labels;
                delete t[e].channels, delete t[e].labels, Object.defineProperty(t[e], "channels", { value: h }), Object.defineProperty(t[e], "labels", { value: u })
            }

        function o(r, n) { return Math.pow(r[0] - n[0], 2) + Math.pow(r[1] - n[1], 2) + Math.pow(r[2] - n[2], 2) }
        t.rgb.hsl = function(r) {
            var n, a, t = r[0] / 255,
                e = r[1] / 255,
                h = r[2] / 255,
                u = Math.min(t, e, h),
                o = Math.max(t, e, h),
                c = o - u;
            return o === u ? n = 0 : t === o ? n = (e - h) / c : e === o ? n = 2 + (h - t) / c : h === o && (n = 4 + (t - e) / c), (n = Math.min(60 * n, 360)) < 0 && (n += 360), a = (u + o) / 2, [n, 100 * (o === u ? 0 : a <= .5 ? c / (o + u) : c / (2 - o - u)), 100 * a]
        }, t.rgb.hsv = function(r) {
            var n, a, t, e, h, u = r[0] / 255,
                o = r[1] / 255,
                c = r[2] / 255,
                s = Math.max(u, o, c),
                l = s - Math.min(u, o, c),
                i = function(r) { return (s - r) / 6 / l + .5 };
            return 0 === l ? e = h = 0 : (h = l / s, n = i(u), a = i(o), t = i(c), u === s ? e = t - a : o === s ? e = 1 / 3 + n - t : c === s && (e = 2 / 3 + a - n), e < 0 ? e += 1 : e > 1 && (e -= 1)), [360 * e, 100 * h, 100 * s]
        }, t.rgb.hwb = function(r) {
            var n = r[0],
                a = r[1],
                e = r[2];
            return [t.rgb.hsl(r)[0], 100 * (1 / 255 * Math.min(n, Math.min(a, e))), 100 * (e = 1 - 1 / 255 * Math.max(n, Math.max(a, e)))]
        }, t.rgb.cmyk = function(r) {
            var n, a = r[0] / 255,
                t = r[1] / 255,
                e = r[2] / 255;
            return [100 * ((1 - a - (n = Math.min(1 - a, 1 - t, 1 - e))) / (1 - n) || 0), 100 * ((1 - t - n) / (1 - n) || 0), 100 * ((1 - e - n) / (1 - n) || 0), 100 * n]
        }, t.rgb.keyword = function(a) {
            var t = n[a];
            if (t) return t;
            var e, h = 1 / 0;
            for (var u in r)
                if (r.hasOwnProperty(u)) {
                    var c = o(a, r[u]);
                    c < h && (h = c, e = u)
                }
            return e
        }, t.keyword.rgb = function(n) { return r[n] }, t.rgb.xyz = function(r) {
            var n = r[0] / 255,
                a = r[1] / 255,
                t = r[2] / 255;
            return [100 * (.4124 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .3576 * (a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92) + .1805 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92)), 100 * (.2126 * n + .7152 * a + .0722 * t), 100 * (.0193 * n + .1192 * a + .9505 * t)]
        }, t.rgb.lab = function(r) {
            var n = t.rgb.xyz(r),
                a = n[0],
                e = n[1],
                h = n[2];
            return e /= 100, h /= 108.883, a = (a /= 95.047) > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, [116 * (e = e > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116) - 16, 500 * (a - e), 200 * (e - (h = h > .008856 ? Math.pow(h, 1 / 3) : 7.787 * h + 16 / 116))]
        }, t.hsl.rgb = function(r) {
            var n, a, t, e, h, u = r[0] / 360,
                o = r[1] / 100,
                c = r[2] / 100;
            if (0 === o) return [h = 255 * c, h, h];
            n = 2 * c - (a = c < .5 ? c * (1 + o) : c + o - c * o), e = [0, 0, 0];
            for (var s = 0; s < 3; s++)(t = u + 1 / 3 * -(s - 1)) < 0 && t++, t > 1 && t--, h = 6 * t < 1 ? n + 6 * (a - n) * t : 2 * t < 1 ? a : 3 * t < 2 ? n + (a - n) * (2 / 3 - t) * 6 : n, e[s] = 255 * h;
            return e
        }, t.hsl.hsv = function(r) {
            var n = r[0],
                a = r[1] / 100,
                t = r[2] / 100,
                e = a,
                h = Math.max(t, .01);
            return a *= (t *= 2) <= 1 ? t : 2 - t, e *= h <= 1 ? h : 2 - h, [n, 100 * (0 === t ? 2 * e / (h + e) : 2 * a / (t + a)), 100 * ((t + a) / 2)]
        }, t.hsv.rgb = function(r) {
            var n = r[0] / 60,
                a = r[1] / 100,
                t = r[2] / 100,
                e = Math.floor(n) % 6,
                h = n - Math.floor(n),
                u = 255 * t * (1 - a),
                o = 255 * t * (1 - a * h),
                c = 255 * t * (1 - a * (1 - h));
            switch (t *= 255, e) {
                case 0:
                    return [t, c, u];
                case 1:
                    return [o, t, u];
                case 2:
                    return [u, t, c];
                case 3:
                    return [u, o, t];
                case 4:
                    return [c, u, t];
                case 5:
                    return [t, u, o]
            }
        }, t.hsv.hsl = function(r) {
            var n, a, t, e = r[0],
                h = r[1] / 100,
                u = r[2] / 100,
                o = Math.max(u, .01);
            return t = (2 - h) * u, a = h * o, [e, 100 * (a = (a /= (n = (2 - h) * o) <= 1 ? n : 2 - n) || 0), 100 * (t /= 2)]
        }, t.hwb.rgb = function(r) {
            var n, a, t, e, h, u, o, c = r[0] / 360,
                s = r[1] / 100,
                l = r[2] / 100,
                i = s + l;
            switch (i > 1 && (s /= i, l /= i), t = 6 * c - (n = Math.floor(6 * c)), 0 != (1 & n) && (t = 1 - t), e = s + t * ((a = 1 - l) - s), n) {
                default:
                    case 6:
                    case 0:
                    h = a,
                u = e,
                o = s;
                break;
                case 1:
                        h = e,
                    u = a,
                    o = s;
                    break;
                case 2:
                        h = s,
                    u = a,
                    o = e;
                    break;
                case 3:
                        h = s,
                    u = e,
                    o = a;
                    break;
                case 4:
                        h = e,
                    u = s,
                    o = a;
                    break;
                case 5:
                        h = a,
                    u = s,
                    o = e
            }
            return [255 * h, 255 * u, 255 * o]
        }, t.cmyk.rgb = function(r) {
            var n = r[0] / 100,
                a = r[1] / 100,
                t = r[2] / 100,
                e = r[3] / 100;
            return [255 * (1 - Math.min(1, n * (1 - e) + e)), 255 * (1 - Math.min(1, a * (1 - e) + e)), 255 * (1 - Math.min(1, t * (1 - e) + e))]
        }, t.xyz.rgb = function(r) {
            var n, a, t, e = r[0] / 100,
                h = r[1] / 100,
                u = r[2] / 100;
            return a = -.9689 * e + 1.8758 * h + .0415 * u, t = .0557 * e + -.204 * h + 1.057 * u, n = (n = 3.2406 * e + -1.5372 * h + -.4986 * u) > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : 12.92 * a, t = t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, [255 * (n = Math.min(Math.max(0, n), 1)), 255 * (a = Math.min(Math.max(0, a), 1)), 255 * (t = Math.min(Math.max(0, t), 1))]
        }, t.xyz.lab = function(r) {
            var n = r[0],
                a = r[1],
                t = r[2];
            return a /= 100, t /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116) - 16, 500 * (n - a), 200 * (a - (t = t > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116))]
        }, t.lab.xyz = function(r) {
            var n, a, t, e = r[0];
            n = r[1] / 500 + (a = (e + 16) / 116), t = a - r[2] / 200;
            var h = Math.pow(a, 3),
                u = Math.pow(n, 3),
                o = Math.pow(t, 3);
            return a = h > .008856 ? h : (a - 16 / 116) / 7.787, n = u > .008856 ? u : (n - 16 / 116) / 7.787, t = o > .008856 ? o : (t - 16 / 116) / 7.787, [n *= 95.047, a *= 100, t *= 108.883]
        }, t.lab.lch = function(r) {
            var n, a = r[0],
                t = r[1],
                e = r[2];
            return (n = 360 * Math.atan2(e, t) / 2 / Math.PI) < 0 && (n += 360), [a, Math.sqrt(t * t + e * e), n]
        }, t.lch.lab = function(r) {
            var n, a = r[0],
                t = r[1];
            return n = r[2] / 360 * 2 * Math.PI, [a, t * Math.cos(n), t * Math.sin(n)]
        }, t.rgb.ansi16 = function(r) {
            var n = r[0],
                a = r[1],
                e = r[2],
                h = 1 in arguments ? arguments[1] : t.rgb.hsv(r)[2];
            if (0 === (h = Math.round(h / 50))) return 30;
            var u = 30 + (Math.round(e / 255) << 2 | Math.round(a / 255) << 1 | Math.round(n / 255));
            return 2 === h && (u += 60), u
        }, t.hsv.ansi16 = function(r) { return t.rgb.ansi16(t.hsv.rgb(r), r[2]) }, t.rgb.ansi256 = function(r) {
            var n = r[0],
                a = r[1],
                t = r[2];
            return n === a && a === t ? n < 8 ? 16 : n > 248 ? 231 : Math.round((n - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(n / 255 * 5) + 6 * Math.round(a / 255 * 5) + Math.round(t / 255 * 5)
        }, t.ansi16.rgb = function(r) { var n = r % 10; if (0 === n || 7 === n) return r > 50 && (n += 3.5), [n = n / 10.5 * 255, n, n]; var a = .5 * (1 + ~~(r > 50)); return [(1 & n) * a * 255, (n >> 1 & 1) * a * 255, (n >> 2 & 1) * a * 255] }, t.ansi256.rgb = function(r) { if (r >= 232) { var n = 10 * (r - 232) + 8; return [n, n, n] } var a; return r -= 16, [Math.floor(r / 36) / 5 * 255, Math.floor((a = r % 36) / 6) / 5 * 255, a % 6 / 5 * 255] }, t.rgb.hex = function(r) { var n = (((255 & Math.round(r[0])) << 16) + ((255 & Math.round(r[1])) << 8) + (255 & Math.round(r[2]))).toString(16).toUpperCase(); return "000000".substring(n.length) + n }, t.hex.rgb = function(r) {
            var n = r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
            if (!n) return [0, 0, 0];
            var a = n[0];
            3 === n[0].length && (a = a.split("").map(function(r) { return r + r }).join(""));
            var t = parseInt(a, 16);
            return [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }, t.rgb.hcg = function(r) {
            var n, a = r[0] / 255,
                t = r[1] / 255,
                e = r[2] / 255,
                h = Math.max(Math.max(a, t), e),
                u = Math.min(Math.min(a, t), e),
                o = h - u;
            return n = o <= 0 ? 0 : h === a ? (t - e) / o % 6 : h === t ? 2 + (e - a) / o : 4 + (a - t) / o + 4, n /= 6, [360 * (n %= 1), 100 * o, 100 * (o < 1 ? u / (1 - o) : 0)]
        }, t.hsl.hcg = function(r) {
            var n = r[1] / 100,
                a = r[2] / 100,
                t = 1,
                e = 0;
            return (t = a < .5 ? 2 * n * a : 2 * n * (1 - a)) < 1 && (e = (a - .5 * t) / (1 - t)), [r[0], 100 * t, 100 * e]
        }, t.hsv.hcg = function(r) {
            var n = r[1] / 100,
                a = r[2] / 100,
                t = n * a,
                e = 0;
            return t < 1 && (e = (a - t) / (1 - t)), [r[0], 100 * t, 100 * e]
        }, t.hcg.rgb = function(r) {
            var n = r[0] / 360,
                a = r[1] / 100,
                t = r[2] / 100;
            if (0 === a) return [255 * t, 255 * t, 255 * t];
            var e, h = [0, 0, 0],
                u = n % 1 * 6,
                o = u % 1,
                c = 1 - o;
            switch (Math.floor(u)) {
                case 0:
                    h[0] = 1, h[1] = o, h[2] = 0;
                    break;
                case 1:
                    h[0] = c, h[1] = 1, h[2] = 0;
                    break;
                case 2:
                    h[0] = 0, h[1] = 1, h[2] = o;
                    break;
                case 3:
                    h[0] = 0, h[1] = c, h[2] = 1;
                    break;
                case 4:
                    h[0] = o, h[1] = 0, h[2] = 1;
                    break;
                default:
                    h[0] = 1, h[1] = 0, h[2] = c
            }
            return e = (1 - a) * t, [255 * (a * h[0] + e), 255 * (a * h[1] + e), 255 * (a * h[2] + e)]
        }, t.hcg.hsv = function(r) {
            var n = r[1] / 100,
                a = n + r[2] / 100 * (1 - n),
                t = 0;
            return a > 0 && (t = n / a), [r[0], 100 * t, 100 * a]
        }, t.hcg.hsl = function(r) {
            var n = r[1] / 100,
                a = r[2] / 100 * (1 - n) + .5 * n,
                t = 0;
            return a > 0 && a < .5 ? t = n / (2 * a) : a >= .5 && a < 1 && (t = n / (2 * (1 - a))), [r[0], 100 * t, 100 * a]
        }, t.hcg.hwb = function(r) {
            var n = r[1] / 100,
                a = n + r[2] / 100 * (1 - n);
            return [r[0], 100 * (a - n), 100 * (1 - a)]
        }, t.hwb.hcg = function(r) {
            var n = r[1] / 100,
                a = 1 - r[2] / 100,
                t = a - n,
                e = 0;
            return t < 1 && (e = (a - t) / (1 - t)), [r[0], 100 * t, 100 * e]
        }, t.apple.rgb = function(r) { return [r[0] / 65535 * 255, r[1] / 65535 * 255, r[2] / 65535 * 255] }, t.rgb.apple = function(r) { return [r[0] / 255 * 65535, r[1] / 255 * 65535, r[2] / 255 * 65535] }, t.gray.rgb = function(r) { return [r[0] / 100 * 255, r[0] / 100 * 255, r[0] / 100 * 255] }, t.gray.hsl = t.gray.hsv = function(r) { return [0, 0, r[0]] }, t.gray.hwb = function(r) { return [0, 100, r[0]] }, t.gray.cmyk = function(r) { return [0, 0, 0, r[0]] }, t.gray.lab = function(r) { return [r[0], 0, 0] }, t.gray.hex = function(r) {
            var n = 255 & Math.round(r[0] / 100 * 255),
                a = ((n << 16) + (n << 8) + n).toString(16).toUpperCase();
            return "000000".substring(a.length) + a
        }, t.rgb.gray = function(r) { return [(r[0] + r[1] + r[2]) / 3 / 255 * 100] };
    }, { "color-name": "Lr6W" }],
    "ZMFB": [function(require, module, exports) {
        var n = require("./conversions");

        function r() { for (var r = {}, e = Object.keys(n), t = e.length, a = 0; a < t; a++) r[e[a]] = { distance: -1, parent: null }; return r }

        function e(e) {
            var t = r(),
                a = [e];
            for (t[e].distance = 0; a.length;)
                for (var o = a.pop(), u = Object.keys(n[o]), c = u.length, i = 0; i < c; i++) {
                    var s = u[i],
                        f = t[s]; - 1 === f.distance && (f.distance = t[o].distance + 1, f.parent = o, a.unshift(s))
                }
            return t
        }

        function t(n, r) { return function(e) { return r(n(e)) } }

        function a(r, e) { for (var a = [e[r].parent, r], o = n[e[r].parent][r], u = e[r].parent; e[u].parent;) a.unshift(e[u].parent), o = t(n[e[u].parent][u], o), u = e[u].parent; return o.conversion = a, o }
        module.exports = function(n) {
            for (var r = e(n), t = {}, o = Object.keys(r), u = o.length, c = 0; c < u; c++) {
                var i = o[c];
                null !== r[i].parent && (t[i] = a(i, r))
            }
            return t
        };
    }, { "./conversions": "v4cc" }],
    "rLkC": [function(require, module, exports) {
        var e = require("./conversions"),
            n = require("./route"),
            r = {},
            o = Object.keys(e);

        function t(e) { var n = function(n) { return null == n ? n : (arguments.length > 1 && (n = Array.prototype.slice.call(arguments)), e(n)) }; return "conversion" in e && (n.conversion = e.conversion), n }

        function c(e) {
            var n = function(n) {
                if (null == n) return n;
                arguments.length > 1 && (n = Array.prototype.slice.call(arguments));
                var r = e(n);
                if ("object" == typeof r)
                    for (var o = r.length, t = 0; t < o; t++) r[t] = Math.round(r[t]);
                return r
            };
            return "conversion" in e && (n.conversion = e.conversion), n
        }
        o.forEach(function(o) {
            r[o] = {}, Object.defineProperty(r[o], "channels", { value: e[o].channels }), Object.defineProperty(r[o], "labels", { value: e[o].labels });
            var i = n(o);
            Object.keys(i).forEach(function(e) {
                var n = i[e];
                r[o][e] = c(n), r[o][e].raw = t(n)
            })
        }), module.exports = r;
    }, { "./conversions": "v4cc", "./route": "ZMFB" }],
    "oOZe": [function(require, module, exports) {
        "use strict";
        var r = require("color-string"),
            t = require("color-convert"),
            o = [].slice,
            n = ["keyword", "gray", "hex"],
            e = {};
        Object.keys(t).forEach(function(r) { e[o.call(t[r].labels).sort().join("")] = r });
        var i = {};

        function a(h, l) {
            if (!(this instanceof a)) return new a(h, l);
            if (l && l in n && (l = null), l && !(l in t)) throw new Error("Unknown model: " + l);
            var s, c;
            if (h)
                if (h instanceof a) this.model = h.model, this.color = h.color.slice(), this.valpha = h.valpha;
                else if ("string" == typeof h) {
                var u = r.get(h);
                if (null === u) throw new Error("Unable to parse color from string: " + h);
                this.model = u.model, c = t[this.model].channels, this.color = u.value.slice(0, c), this.valpha = "number" == typeof u.value[c] ? u.value[c] : 1
            } else if (h.length) {
                this.model = l || "rgb", c = t[this.model].channels;
                var v = o.call(h, 0, c);
                this.color = f(v, c), this.valpha = "number" == typeof h[c] ? h[c] : 1
            } else if ("number" == typeof h) h &= 16777215, this.model = "rgb", this.color = [h >> 16 & 255, h >> 8 & 255, 255 & h], this.valpha = 1;
            else {
                this.valpha = 1;
                var p = Object.keys(h);
                "alpha" in h && (p.splice(p.indexOf("alpha"), 1), this.valpha = "number" == typeof h.alpha ? h.alpha : 0);
                var b = p.sort().join("");
                if (!(b in e)) throw new Error("Unable to parse color from object: " + JSON.stringify(h));
                this.model = e[b];
                var m = t[this.model].labels,
                    g = [];
                for (s = 0; s < m.length; s++) g.push(h[m[s]]);
                this.color = f(g)
            } else this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
            if (i[this.model])
                for (c = t[this.model].channels, s = 0; s < c; s++) {
                    var d = i[this.model][s];
                    d && (this.color[s] = d(this.color[s]))
                }
            this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
        }

        function h(r, t) { return Number(r.toFixed(t)) }

        function l(r) { return function(t) { return h(t, r) } }

        function s(r, t, o) {
            return (r = Array.isArray(r) ? r : [r]).forEach(function(r) {
                    (i[r] || (i[r] = []))[t] = o
                }), r = r[0],
                function(n) { var e; return arguments.length ? (o && (n = o(n)), (e = this[r]()).color[t] = n, e) : (e = this[r]().color[t], o && (e = o(e)), e) }
        }

        function c(r) { return function(t) { return Math.max(0, Math.min(r, t)) } }

        function u(r) { return Array.isArray(r) ? r : [r] }

        function f(r, t) { for (var o = 0; o < t; o++) "number" != typeof r[o] && (r[o] = 0); return r }
        a.prototype = {
            toString: function() { return this.string() },
            toJSON: function() { return this[this.model]() },
            string: function(t) {
                var o = this.model in r.to ? this : this.rgb(),
                    n = 1 === (o = o.round("number" == typeof t ? t : 1)).valpha ? o.color : o.color.concat(this.valpha);
                return r.to[o.model](n)
            },
            percentString: function(t) {
                var o = this.rgb().round("number" == typeof t ? t : 1),
                    n = 1 === o.valpha ? o.color : o.color.concat(this.valpha);
                return r.to.rgb.percent(n)
            },
            array: function() { return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha) },
            object: function() { for (var r = {}, o = t[this.model].channels, n = t[this.model].labels, e = 0; e < o; e++) r[n[e]] = this.color[e]; return 1 !== this.valpha && (r.alpha = this.valpha), r },
            unitArray: function() { var r = this.rgb().color; return r[0] /= 255, r[1] /= 255, r[2] /= 255, 1 !== this.valpha && r.push(this.valpha), r },
            unitObject: function() { var r = this.rgb().object(); return r.r /= 255, r.g /= 255, r.b /= 255, 1 !== this.valpha && (r.alpha = this.valpha), r },
            round: function(r) { return r = Math.max(r || 0, 0), new a(this.color.map(l(r)).concat(this.valpha), this.model) },
            alpha: function(r) { return arguments.length ? new a(this.color.concat(Math.max(0, Math.min(1, r))), this.model) : this.valpha },
            red: s("rgb", 0, c(255)),
            green: s("rgb", 1, c(255)),
            blue: s("rgb", 2, c(255)),
            hue: s(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function(r) { return (r % 360 + 360) % 360 }),
            saturationl: s("hsl", 1, c(100)),
            lightness: s("hsl", 2, c(100)),
            saturationv: s("hsv", 1, c(100)),
            value: s("hsv", 2, c(100)),
            chroma: s("hcg", 1, c(100)),
            gray: s("hcg", 2, c(100)),
            white: s("hwb", 1, c(100)),
            wblack: s("hwb", 2, c(100)),
            cyan: s("cmyk", 0, c(100)),
            magenta: s("cmyk", 1, c(100)),
            yellow: s("cmyk", 2, c(100)),
            black: s("cmyk", 3, c(100)),
            x: s("xyz", 0, c(100)),
            y: s("xyz", 1, c(100)),
            z: s("xyz", 2, c(100)),
            l: s("lab", 0, c(100)),
            a: s("lab", 1),
            b: s("lab", 2),
            keyword: function(r) { return arguments.length ? new a(r) : t[this.model].keyword(this.color) },
            hex: function(t) { return arguments.length ? new a(t) : r.to.hex(this.rgb().round().color) },
            rgbNumber: function() { var r = this.rgb().color; return (255 & r[0]) << 16 | (255 & r[1]) << 8 | 255 & r[2] },
            luminosity: function() {
                for (var r = this.rgb().color, t = [], o = 0; o < r.length; o++) {
                    var n = r[o] / 255;
                    t[o] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                }
                return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
            },
            contrast: function(r) {
                var t = this.luminosity(),
                    o = r.luminosity();
                return t > o ? (t + .05) / (o + .05) : (o + .05) / (t + .05)
            },
            level: function(r) { var t = this.contrast(r); return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "" },
            isDark: function() { var r = this.rgb().color; return (299 * r[0] + 587 * r[1] + 114 * r[2]) / 1e3 < 128 },
            isLight: function() { return !this.isDark() },
            negate: function() { for (var r = this.rgb(), t = 0; t < 3; t++) r.color[t] = 255 - r.color[t]; return r },
            lighten: function(r) { var t = this.hsl(); return t.color[2] += t.color[2] * r, t },
            darken: function(r) { var t = this.hsl(); return t.color[2] -= t.color[2] * r, t },
            saturate: function(r) { var t = this.hsl(); return t.color[1] += t.color[1] * r, t },
            desaturate: function(r) { var t = this.hsl(); return t.color[1] -= t.color[1] * r, t },
            whiten: function(r) { var t = this.hwb(); return t.color[1] += t.color[1] * r, t },
            blacken: function(r) { var t = this.hwb(); return t.color[2] += t.color[2] * r, t },
            grayscale: function() {
                var r = this.rgb().color,
                    t = .3 * r[0] + .59 * r[1] + .11 * r[2];
                return a.rgb(t, t, t)
            },
            fade: function(r) { return this.alpha(this.valpha - this.valpha * r) },
            opaquer: function(r) { return this.alpha(this.valpha + this.valpha * r) },
            rotate: function(r) {
                var t = this.hsl(),
                    o = t.color[0];
                return o = (o = (o + r) % 360) < 0 ? 360 + o : o, t.color[0] = o, t
            },
            mix: function(r, t) {
                var o = r.rgb(),
                    n = this.rgb(),
                    e = void 0 === t ? .5 : t,
                    i = 2 * e - 1,
                    h = o.alpha() - n.alpha(),
                    l = ((i * h == -1 ? i : (i + h) / (1 + i * h)) + 1) / 2,
                    s = 1 - l;
                return a.rgb(l * o.red() + s * n.red(), l * o.green() + s * n.green(), l * o.blue() + s * n.blue(), o.alpha() * e + n.alpha() * (1 - e))
            }
        }, Object.keys(t).forEach(function(r) {
            if (-1 === n.indexOf(r)) {
                var e = t[r].channels;
                a.prototype[r] = function() { if (this.model === r) return new a(this); if (arguments.length) return new a(arguments, r); var o = "number" == typeof arguments[e] ? e : this.valpha; return new a(u(t[this.model][r].raw(this.color)).concat(o), r) }, a[r] = function(t) { return "number" == typeof t && (t = f(o.call(arguments), e)), new a(t, r) }
            }
        }), module.exports = a;
    }, { "color-string": "bWbw", "color-convert": "rLkC" }],
    "h3IC": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e },
            t = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t }
            }(),
            n = function e(t, n, r) { null === t && (t = Function.prototype); var o = Object.getOwnPropertyDescriptor(t, n); if (void 0 === o) { var i = Object.getPrototypeOf(t); return null === i ? void 0 : e(i, n, r) } if ("value" in o) return o.value; var a = o.get; return void 0 !== a ? a.call(r) : void 0 },
            r = require("eventemitter3"),
            o = y(r),
            i = require("paper"),
            a = y(i),
            s = require("mousetrap"),
            u = y(s),
            l = require("localeval"),
            c = y(l),
            d = require("lines-intersection"),
            f = y(d),
            h = require("json-beautify"),
            v = y(h),
            p = require("color"),
            g = y(p);

        function y(e) { return e && e.__esModule ? e : { default: e } }

        function m(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function b(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function w(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var _ = function(r) {
                function i(t, n, r) {
                    m(this, i);
                    var o = b(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                    o.code = t.code, o.metadata = e({}, t), delete o.metadata.code, o.project = n, o.parameters = r, o.el = n.view.element, o.globalVariables = e({}, P);
                    var a = k(o.code),
                        s = e({}, M, { globalVariables: o.globalVariables, parameters: r }),
                        u = (0, c.default)(a, s);
                    return o.isDrawing = !1, o.isDragging = !1, o.isPressing = !1, o.on(u), o._onMousedown = o._onMousedown.bind(o), o._onMousemove = o._onMousemove.bind(o), o._onMouseup = o._onMouseup.bind(o), o
                }
                return w(i, o.default), t(i, [{ key: "pause", value: function() { this.el.removeEventListener("mousedown", this._onMousedown), window.removeEventListener("mousemove", this._onMousemove), window.removeEventListener("mousewheel", this._onMousemove), window.removeEventListener("mouseup", this._onMouseup) } }, { key: "resume", value: function() { this.el.addEventListener("mousedown", this._onMousedown), window.addEventListener("mousemove", this._onMousemove), window.addEventListener("mousewheel", this._onMousemove), window.addEventListener("mouseup", this._onMouseup) } }, { key: "deactivate", value: function() { this.isDrawing && this.end(), this.pause() } }, { key: "activate", value: function() { this.resume() } }, { key: "on", value: function() { for (var e = this, t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o]; "string" == typeof r[0] ? n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "on", this).apply(this, r) : Object.keys(r[0]).forEach(function(t) { n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "on", e).call(e, t, r[0][t]) }) } }, { key: "end", value: function() { this.isDrawing = !1, this.isDragging = !1, this.isPressiong = !1, this.project.layers.guide.removeChildren(), this.project.layers.guide.bringToFront(), u.default.unbind(["enter", "esc"]), this.emit("end") } }, { key: "exportText", value: function() { return "/*\n" + (0, v.default)(this.metadata, null, 2, 20) + "\n*/\n\n" + this.code } }, {
                    key: "_onMousedown",
                    value: function(e) {
                        var t = this._transformMouseEvent(e);
                        this.isDragging = !0, this.isPressing = !0, this.isDrawing || (u.default.bind(["enter", "esc"], this.end.bind(this)), this.isDrawing = !0, this.globalVariables.pressCount = 0, this.emit("begin", t)), this.globalVariables.pressCount += 1, this.emit("press", t)
                    }
                }, {
                    key: "_onMousemove",
                    value: function(e) {
                        var t = this._transformMouseEvent(e);
                        this.isDrawing && (this.isDragging ? this.emit("drag", t) : this.emit("move", t))
                    }
                }, {
                    key: "_onMouseup",
                    value: function(e) {
                        if (this.isPressing) {
                            this.isDragging = !1, this.isPressing = !1;
                            var t = this._transformMouseEvent(e);
                            this.isDrawing && this.emit("release", t)
                        }
                    }
                }, {
                    key: "_transformMouseEvent",
                    value: function(e) {
                        var t = new a.default.Point(e.x, e.y),
                            n = this.project.view.viewToProject(t);
                        this.globalVariables.mouse = n, this.globalVariables.mouseX = n.x, this.globalVariables.mouseY = n.y;
                        var r = n.x,
                            o = n.y;
                        return { altKey: e.altKey, shiftKey: e.shiftKey, x: r, y: o }
                    }
                }]), i
            }(),
            P = { mouse: new a.default.Point(0, 0), mouseX: 0, mouseY: 0, pressCount: 0, GUIDE: "#3e999f" },
            M = {
                Point: a.default.Point,
                Group: a.default.Group,
                Path: a.default.Path,
                Matrix: a.default.Matrix,
                Line: a.default.Path.Line,
                Circle: a.default.Path.Circle,
                Rectangle: a.default.Path.Rectangle,
                Ellipse: a.default.Path.Ellipse,
                Arc: a.default.Path.Arc,
                RegularPolygon: a.default.Path.RegularPolygon,
                Star: a.default.Path.Star,
                Color: g.default,
                Guide: {
                    add: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "stroke"; return e.addTo(a.default.project.layers.guide), "stroke" == t ? (e.strokeColor = "#3e999f", e.strokeWidth = .5, e.fillColor = null, e.strokeScaling = !1) : (e.fillColor = "#3e999f", e.strokeWidth = null), e },
                    addPoint: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "fill",
                            n = new a.default.Path.Circle(e, 3);
                        return n.applyMatrix = !1, n.scaling = 1 / a.default.project.view.scaling.x, n.addTo(a.default.project.layers.guide), "stroke" == t ? (n.strokeColor = "#3e999f", n.strokeWidth = .5, n.strokeScaling = !1, n.fillColor = "white") : (n.fillColor = "#3e999f", n.strokeWidth = null), n.data.isMarker = !0, n
                    },
                    addLine: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5,
                            r = new a.default.Path.Line(e, t);
                        return r.addTo(a.default.project.layers.guide), r.strokeColor = "#3e999f", r.strokeWidth = .5, r.strokeScaling = !1, r.data.originalStrokeWidth = n, r
                    }
                },
                getIntersection: function(e, t, n, r) { var o = (0, f.default)(e.x, e.y, t.x, t.y, n.x, n.y, r.x, r.y); return o ? new a.default.Point(o[0], o[1]) : null },
                console: console,
                degrees: function(e) { return 180 * e / Math.PI },
                radians: function(e) { return e * Math.PI / 180 },
                PI_2: 2 * Math.PI
            };

        function k(e) { return "try {\n\twith (globalVariables) {\n\t\twith (parameters) {\n\t\t\t" + e + "\n\t\t}\n\t}\n} catch (err) {\n\tconsole.error(err)\n}\n\nlet events = {}\n\ntry {\n\tif (begin) events.begin = begin\n} catch (err) {}\n\ntry {\n\tif (end) events.end = end\n} catch (err) {}\n\ntry {\n\tif (press) events.press = press\n} catch (err) {}\n\ntry {\n\tif (release) events.release = release\n} catch (err) {}\n\ntry {\n\tif (move) events.move = move\n} catch (err) {}\n\ntry {\n\tif (drag) events.drag = drag\n} catch (err) {}\n\nevents" }
        Object.getOwnPropertyNames(Math).forEach(function(e) { return M[e] = Math[e] }), _.compile = function(e, t) { return new _(e, a.default.project, t) }, _.parseToolText = function(t) {
            var n = t.match(/\/\*([\s\S]*?)\*\/[\n]*([\s\S]*)/m),
                r = n[2],
                o = void 0;
            try { o = JSON.parse(n[1]) } catch (e) { console.error("Invalid metadata", n[1]) }
            return o.parameters = o.parameters || [], e({}, o, { code: r })
        }, exports.default = _;
    }, { "eventemitter3": "2JJl", "paper": "GYcQ", "mousetrap": "NHlQ", "localeval": "XveT", "lines-intersection": "V2aH", "json-beautify": "DXry", "color": "oOZe" }],
    "TvWe": [function(require, module, exports) {
        function t(t) { return t = t || 7, Math.random().toString(35).substr(2, t) }
        module.exports = t;
    }, {}],
    "i9/H": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var t = Object.assign || function(t) { for (var n = 1; n < arguments.length; n++) { var e = arguments[n]; for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]) } return t },
            n = require("uid"),
            e = l(n),
            r = require("fs"),
            i = l(r),
            o = require("./tool"),
            a = l(o);

        function l(t) { return t && t.__esModule ? t : { default: t } }
        var s = ['/*\n{\n  "id": "pencil",\n  "label": "Pencil",\n\t"icon": "✎",\n\t"parameters": [\n\t\t{\n\t\t\t"name": "strokeColor",\n\t\t\t"type": "color",\n\t\t\t"default": "#282a2e"\n\t\t},\n\t\t{\n\t\t\t"name": "strokeWidth",\n\t\t\t"type": "float",\n\t\t\t"default": 2\n\t\t}\n\t]\n}\n*/\n\nlet path\n\nfunction press() {\n\n\tpath = new Path()\n\tpath.strokeWidth = strokeWidth\n\tpath.strokeColor = strokeColor\t\n\tpath.moveTo(mouse)\n\n}\n\nfunction drag() {\n\n\tpath.lineTo(mouse)\n\t\n}', '/*\n{\n  "id": "rectangle",\n  "label": "Rectangle",\n  "icon": "■",\n  "parameters": [\n    {\n      "name": "fillColor",\n      "type": "color",\n      "default": "#282a2e"\n    }\n  ]\n}\n*/\n\nlet from, rect\n\nfunction press() {\n  \n  from = mouse\n}\n\nfunction drag() {\n  \n  if (rect) rect.remove()\n  rect = new Rectangle(from, mouse)\n  rect.fillColor = fillColor\n}\n\nfunction release() {\n  \n  rect = null\n}', '/*\n{\n  "id": "centered-circle",\n  "label": "Centered Circle",\n\t"icon": "●",\n\t"parameters": [\n\t\t{\n\t\t\t"name": "fillColor",\n\t\t\t"type": "color",\n\t\t\t"default": "#292a2e"\n\t\t}\n\t]\n}\n*/\n\nlet circle, center\n\nfunction press() {\n\n\tcenter = mouse\n}\n\nfunction drag() {\t\t\n\tconst d = mouse.subtract(center)\n\tconst r = d.length\n\t\n\tif (circle) circle.remove()\n\tcircle = new Path.Circle(center, r)\n\tcircle.fillColor = fillColor\n}\n\nfunction release() {\n\tcircle = null\n}', '/*\n{\n  "id": "bezier",\n  "label": "Bezier",\n  "icon": "✑",\n\t"parameters": [\n\t\t{\n\t\t\t"name": "strokeColor",\n\t\t\t"type": "color",\n\t\t\t"default": "#282a2e"\n\t\t},\n\t\t{\n\t\t\t"name": "strokeWidth",\n\t\t\t"type": "float",\n\t\t\t"default": 2\n\t\t}\n\t]\n}\n*/\n\nlet path\nlet anchor, handleIn, handleOut, prevHandleOut, tangent, prevTangent\nlet anchorPt\n\nfunction begin() {\n\n\tpath = new Path()\n\tpath.strokeColor = strokeColor\n\tpath.strokeWidth = strokeWidth\n\n\tpath.moveTo(mouse)\n}\n\nfunction press() {\n\t\n\tanchorPt = mouse\n\t\n\tif (tangent) {\n\t\ttangent.removeSegment(0)\n\t}\n\tif (prevTangent) prevTangent.remove()\n\tprevTangent = tangent\n\t\n\tif (handleIn) handleIn.remove()\n\t\n\tif (prevHandleOut) prevHandleOut.remove()\n\tprevHandleOut = handleOut\n\t\n\ttangent = new Path()\n\ttangent.moveTo(mouse)\n\ttangent.lineTo(mouse)\n\ttangent.lineTo(mouse)\n\tGuide.add(tangent)\n\t\n\thandleIn = Guide.addPoint(mouse, \'stroke\')\n\thandleOut = Guide.addPoint(mouse, \'stroke\')\n\tanchor = Guide.addPoint(mouse)\n}\n\nfunction release() {\n\tpath.cubicCurveTo(mouse, mouse, mouse)\n}\n\nfunction move() {\n\n\tpath.lastSegment.point = mouse\n}\n\nfunction drag({altKey}) {\n\t\t\n\tconst d = mouse.subtract(anchorPt)\n\t\n\tpath.lastSegment.handleOut = anchorPt\n\thandleOut.position = mouse\n\ttangent.lastSegment.point = mouse\n\t\n\tif (!altKey) {\n\t\t\t\n\t\t const handleInPt = anchorPt.subtract(d)\n\n\t\tpath.lastSegment.handleIn.set(-d.x, -d.y)\n\t\thandleIn.position = handleInPt\n\t\ttangent.firstSegment.point = handleInPt\n\t}\n}\n\nfunction end() {\n\n\tpath.removeSegment(path.segments.length - 1)\n}', '/*\n{\n  "id": "spray",\n  "label": "Spray",\n  "icon": "∵",\n  "parameters": [\n    {\n      "name": "fillColor",\n      "type": "color",\n      "default": "#282a2e"\n    },\n    {\n      "name": "fillColor2",\n      "type": "color",\n      "default": "#f9faf9"\n    },\n    {\n      "name": "minRadius",\n      "type": "float",\n      "default": 5\n    },\n    {\n      "name": "maxRadius",\n      "type": "float",\n      "default": 20\n    },\n    {\n      "name": "jitter",\n      "type": "float",\n      "default": 40\n    }\n  ]\n}\n*/\n\nfunction drag() {\n\t\t\n\tconst radius = mix(minRadius, maxRadius, random())\n\tconst offset = new Point(\n\t\tmix(-jitter, jitter, random()),\n\t\tmix(-jitter, jitter, random())\n\t)\n\t\n\tconst pt = mouse.add(offset)\n\tconst t = random()\n\t\n\tlet circle = new Circle(pt, radius)\n\t\n\tlet colorA = Color(fillColor)\n\tlet colorB = Color(fillColor2)\n\t\n\tcircle.fillColor = colorA.mix(colorB, random()).string()\n}\n\nfunction mix(a, b, t) {\n\treturn a + (b - a) * t\n}', '/*\n{\n  "id": "graph",\n  "label": "Graph",\n\t"icon": "✣",\n\t"parameters": [\n\t\t{\n\t\t\t"name": "fillColor",\n\t\t\t"type": "color",\n\t\t\t"default": "#282a2e"\n\t\t},\n\t\t{\n\t\t\t"name": "strokeColor",\n\t\t\t"type": "color",\n\t\t\t"default": "#282a2e"\n\t\t},\n\t\t{\n\t\t\t"name": "strokeWidth",\n\t\t\t"type": "float",\n\t\t\t"default": 2\n\t\t},\n\t\t{\n\t\t\t"name": "dotRadius",\n\t\t\t"type": "float",\n\t\t\t"default": 3\n\t\t}\n\t]\n}\n*/\n\nlet points, lines\n\nfunction begin() {\n\tpoints = []\n}\n\nfunction press() {\n\n\tcircle = new Circle(mouse, dotRadius)\n\tcircle.fillColor = fillColor\n}\n\nfunction release() {\n\t\t\n\tcircle = null\n\t\n\tpoints.push(mouse)\n\t\n\tlines = points.map((pt) => {\n\t\t\t\n\t\tconst line = new Line(pt, mouse)\n\t\tline.strokeWidth = strokeWidth\n\t\tline.strokeColor = strokeColor\n\t\t\n\t\treturn line\n\t})\n}\n\nfunction move() {\n\t\t\n\tif (circle) {\n\t\tcircle.position = mouse\n\t}\n\t\n\tif (lines) {\n\t\tlines.forEach((line) => {\n\t\t\tline.lastSegment.point = mouse\n\t\t})\n\t}\n}\n\nfunction drag(e) {\n\t\t\n\tmove(e)\n}\n\nfunction end() {\n\t\t\n\tif (lines) {\n\t\tlines.forEach(line => line.remove())\n\t}\n\t\n\tpoints = lines = circle = null\n}', '/*\n{\n  "id": "triangle-strip",\n  "label": "Triangle Strip",\n  "icon": "〼",\n  "parameters": [\n    {\n      "name": "fillColor",\n      "type": "color",\n      "default": "#282a2e"\n    },\n    {\n      "name": "fillColor2",\n      "type": "color",\n      "default": "#f9faf9"\n    }\n  ]\n}\n*/\nlet pt0, pt1, triangle\nlet guideEdge\n\nfunction begin() {\n\t\n\tguideEdge = Guide.addLine(mouse, mouse, 3)\n}\n\nfunction release() {\n\t\t\n\tpt0 = pt1\n\tpt1 = mouse\n\t\n\tif (pt0 && pt1) {\n\n\t\tlet colorA = Color(fillColor)\n\t\tlet colorB = Color(fillColor2)\n\n\t\ttriangle = new Path()\n\t\ttriangle.fillColor = colorA.mix(colorB, random()).string()\n\t\ttriangle.moveTo(pt0)\n\t\ttriangle.lineTo(pt1)\n\t\ttriangle.lineTo(mouse)\n\t\t\n\t\tguideEdge.firstSegment.point = pt0\n\t\tguideEdge.lastSegment.point = pt1\n\t}\n\t\t\n}\n\nfunction move() {\n\t\t\n\tif (guideEdge && !pt0 && pt1) {\n\t\tguideEdge.lastSegment.point = mouse\n\t}\n\t\n\tif (triangle) {\n\t\ttriangle.lastSegment.point = mouse\n\t}\n\t\t\n}\n\nfunction drag(e) {\n\t\n\tmove(e)\n}\n\nfunction end() {\n\t\t\n\tif (triangle) triangle.remove()\n\t\n\tpt0 = pt1 = triangle = null\n}', '/*\n{\n  "id": "arc-strip",\n  "label": "Arc Strip",\n\t"icon": "⌒",\n\t"parameters": [\n\t\t{\n\t\t\t"name": "strokeColor",\n\t\t\t"type": "color",\n\t\t\t"default": "#282a2e"\n\t\t},\n\t\t{\n\t\t\t"name": "strokeWidth",\n\t\t\t"type": "float",\n\t\t\t"default": 2\n\t\t},\n\t\t{\n\t\t\t"name": "dotRadius",\n\t\t\t"type": "float",\n\t\t\t"default": 5\n\t\t}\n\t]\n}\n*/\n\n// Inspired by Raven Kwok\'s study:\n// https:/\twitter.com/RavenKwok/status/1007881883059814407\n\nlet pt0, pt1, arc\nlet circle0, circle1, mouseCircle\n\nfunction press() {\n\t\t\n\tmouseCircle = new Circle(mouse, dotRadius)\n\tmouseCircle.fillColor = GUIDE\n}\n\nfunction release() {\n\t\n\tpt0 = pt1\n\tpt1 = mouse\n\t\n\tif (pt0 && pt1) {\n\t\tarc = genArc()\n\t}\n\n\tif (circle0) {\n\t\t circle0.fillColor = strokeColor\n\t}\n\t\n\tcircle0 = circle1\n\tcircle1 = mouseCircle\n}\n\nfunction move() {\n\t\n\tif (arc) {\n\t\tarc.remove()\n\t\tarc = genArc()\n\t}\n}\n\nfunction drag(e) {\n\tmove(e)\n\t\n\tmouseCircle.position = mouse\n}\n\nfunction end() {\n\t\n\tif (arc) arc.remove()\n\t\n\tif (circle0) circle0.fillColor = strokeColor\n\tif (circle1) circle1.fillColor = strokeColor\n\t\n\tpt0 = pt1 = arc = null\n}\n\nfunction genArc() {\n\t\n\tlet item\n\t\n\tif (pt1.equals(pt0) || pt1.equals(mouse)) {\n\t\titem = new Line(pt0, mouse) \n\t} else {\n\t\titem = new Arc(pt0, pt1, mouse)\n\t}\n\t\n\titem.strokeColor = strokeColor\n\titem.strokeWidth = strokeWidth\n\t\n\tif (circle0) circle0.bringToFront()\n\tif (circle1) circle1.bringToFront()\n\tif (mouseCircle) mouseCircle.bringToFront()\n\t\n\treturn item\n}', '/*\n{\n  "id": "radial-line",\n  "label": "Radial Line",\n\t"icon": "✳",\n\t"parameters": [\n    {\n      "name": "strokeColor",\n      "type": "color",\n      "default": "#282a2e"\n\t\t},\n\t\t{\n\t\t\t"name": "strokeWidth",\n\t\t\t"type": "float",\n\t\t\t"default": 2\n\t\t}\n  ]\n}\n*/\n\nlet center, centerGuide, dirGuide\n\nlet dir, mindist, maxdist\nlet line\n\nfunction begin() {\n\t\n\tcenter = mouse\n\t\n\tcenterGuide = Guide.addPoint(mouse)\n\tdirGuide = Guide.addLine(mouse, mouse)\n}\n\nfunction press({altKey}) {\n\t\n\tif (pressCount == 1) return\n\t  \n\tline = new Line(mouse, mouse)\n\tline.strokeColor = strokeColor\n\tline.strokeWidth = strokeWidth\n\t\n\tmindist = center.getDistance(mouse)\n\tmaxdist = mindist\n}\n\nfunction release() {\n\t\n\tif (line && mindist == maxdist) {\n\t  line.remove()\n\t}\n\t\n\tfirstClick = false\n}\n\nfunction move({altKey}) {\n\n\tif (altKey) return\n\t\n\tdir = mouse.subtract(center).normalize()\n\t\n\tdirGuide.firstSegment.point = dir.multiply(-10000000).add(center)\n\tdirGuide.lastSegment.point  = dir.multiply(10000000).add(center)\n}\n\nfunction drag() {\n\t\n\tif (pressCount == 1) {\n\t  center = mouse\n\t  centerGuide.position = mouse\n\t} else {\n  \tconst dist = dir.dot(mouse.subtract(center))\n  \t\n  \tmindist = min(dist, mindist)\n  \tmaxdist = max(dist, maxdist)\n  \t\n  \tline.firstSegment.point = center.add(dir.multiply(mindist))\n  \tline.lastSegment.point = center.add(dir.multiply(maxdist))\n\t}\n}', "/*\n{\n  \"id\": \"dubins-path\",\n  \"label\": \"Dubins Path\",\n  \"icon\": \"ல\",\n  \"parameters\": [\n    {\n      \"name\": \"strokeColor\",\n      \"type\": \"color\",\n      \"default\": \"#282a2e\"\n    },\n    {\n      \"name\": \"strokeWidth\",\n      \"type\": \"float\",\n      \"default\": 2\n    }\n  ]\n}\n*/\n\nconst LSL = 'LSL'\nconst LSR = 'LSR'\nconst RSL = 'RSL'\nconst RSR = 'RSR'\nconst RLR = 'RLR'\nconst LRL = 'LRL'\n\nconst RESULT_OK = Symbol('RESULT_OK') /* No error */\nconst RESULT_COCONFIGS = Symbol('RESULT_COCONFIGS') /* Colocated configurations */\nconst RESULT_PARAM = Symbol('RESULT_PARAM') /* Path parameterisitation error */\nconst RESULT_BADRHO = Symbol('RESULT_BADRHO') /* the rho value is invalid */\nconst RESULT_NOPATH = Symbol('RESULT_NOPATH') /* no connection between configurations with this word */\n\nconst PIH  = PI / 2\n\nconst PATH_TYPES = [LSL, LSR, RSL, RSR, RLR, LRL]\n\nlet p0, p1, tan0, tan1\nlet path\n\nlet circle0, circle1, circlem\nlet gp0, gp1, gtan0, gtan1, gh0, gh1\n\nlet radius = 11\n\nfunction genCurve() {\n\t\n\tconst theta0 = tan0.angleInRadians\n\tconst theta1 = tan1.angleInRadians\n\n\tconst dp = dubinsShortestPath(\n\t\t[p0.x, p0.y, theta0],\n\t\t[p1.x, p1.y, theta1],\n\t\tradius)\n\n\tif (!dp) return\n\t\n\tconst {type, param} = dp\n\t\n\tconst dir0 = type[0] == 'L' ? 1 : -1\n\tconst dir1 = type[2] == 'L' ? 1 : -1\n\t\n\tconst c0 = tan0\n\t\t.multiply(radius)\n\t\t.rotate(dir0 * 90)\n\t\t.add(p0)\n\t\n\tconst c1 = tan1\n\t\t.multiply(radius)\n\t\t.rotate(dir1 * 90)\n\t\t.add(p1)\n\n\tconst t0 = p0.rotate(degrees(dir0 * param[0]), c0)\n\tconst t1 = p1.rotate(degrees(dir1 * -param[2]), c1)\n\t\n\tconst t0m = p0.rotate(degrees(dir0 * param[0] / 2), c0)\n\tconst t1m = p1.rotate(degrees(dir1 * -param[2] / 2), c1)\n\t\t\n\t// first\n\tif (path) path.remove()\n\tpath = new Path()\n\tpath.strokeWidth = strokeWidth\n\tpath.strokeColor = strokeColor\n\tpath.moveTo(p0)\n\tpath.arcTo(t0m, t0)\n\t\n\tif (circle0) circle0.remove()\n\tcircle0 = new Circle(c0, radius)\n\tGuide.add(circle0, 'stroke')\n\t\n\t// intermediate\n\tif (circlem) circlem.remove()\n\tif (type[1] == 'S') {\n\t\tpath.lineTo(t1)\n\t} else {\n\t\tconst cm = getIntersection(c0, t0, c1, t1)\n\t\tconst dirm = type[1] == 'L' ? 1 : -1\n\t\tconst tmm = t0.rotate(degrees(dirm * param[1] / 2), cm)\n\t\t\n\t\tpath.arcTo(tmm, t1)\n\t\t\n\t\tcirclem = new Circle(cm, radius)\n\t\tGuide.add(circlem, 'stroke')\n\t}\n\t\n\t// last\n\tpath.arcTo(t1m, p1)\n\t\t\n\tif (circle1) circle1.remove()\n\tcircle1 = new Circle(c1, radius)\n\tGuide.add(circle1, 'stroke')\n}\n\nfunction begin() {\n\ttan0 = new Point(0, 1)\n}\n\nfunction press() {\n\tradius = 1\n\tp1 = mouse\n\t\n\tif (gtan0) gtan0.remove()\n\tif (gh0) gh0.remove()\n\t\n\tgp0 = gp1\n\tgh0 = gh1\n\tgtan0 = gtan1\n\t\n\tgtan1 = Guide.addLine(p1, p1)\n\tgh1 = Guide.addPoint(p1, 'stroke')\n\tgp1 = Guide.addPoint(p1)\n\t\n\ttan1 = (p0 && !p0.equals(p1)) ? p1.subtract(p0).normalize(): new Point(1, 0)\n\t\n\tif (pressCount > 1) {\n\t\tgenCurve()\n\t}\n}\n\nfunction drag() {\n\ttan1 = mouse.subtract(p1).normalize()\n\tgh1.position = mouse\n\tgtan1.lastSegment.point = mouse\n\t\n\tif (pressCount == 1) {\n\t\treturn\n\t}\n\t\n\tradius = Math.max(1, mouse.getDistance(p1))\n\tgenCurve()\n}\n\nfunction release() {\n\tp0 = p1\n\ttan0 = tan1\n\t\n\tpath = null\n\t\n\tif (circle0) circle0.remove()\n\tif (circle1) circle1.remove()\n\tif (circlem) circlem.remove()\n\t\n}\n\n//-------------------------\n// dubin's curve: https://github.com/AndrewWalker/Dubins-Curves\n\nfunction mod2pi(theta) {\n\treturn (theta % PI_2 + PI_2) % PI_2\n}\n\nfunction dubinsShortestPath(q0, q1, rho)\n{\n\tlet path = {\n\t\tqi: null,\n\t\tparam: new Array(3),\n\t\trho: null,\n\t\ttype: null\n\t}\n\n\tlet ir = {}\n\tlet params = new Array(3)\n\tlet cost\n\tlet best_cost = Number.MAX_VALUE\n\tlet best_word\n\terrcode = dubinsIntermediateResults(ir, q0, q1, rho)\n\tif(errcode != RESULT_OK) {\n\t\treturn null//errcode\n\t}\n\n\tpath.qi = q0\n\tpath.rho = rho\n\n\tPATH_TYPES.forEach(pathType => {\n\t\tlet errcode = dubinsWord(ir, pathType, params)\n\t\tif(errcode == RESULT_OK) {\n\t\t\tcost = params[0] + params[1] + params[2]\n\t\t\tif(cost < best_cost) {\n\t\t\t\tbest_word = pathType\n\t\t\t\tbest_cost = cost\n\t\t\t\tpath.param[0] = params[0]\n\t\t\t\tpath.param[1] = params[1]\n\t\t\t\tpath.param[2] = params[2]\n\t\t\t\tpath.type = pathType\n\t\t\t}\n\t\t}\n\t})\n\n\tif (!best_word) {\n\t\treturn null//RESULT_NOPATH\n\t}\n\treturn path\n}\n\nfunction dubinsIntermediateResults(ir, q0, q1, rho)\n{\n\tlet dx, dy, D, d, theta, alpha, beta\n\tif( rho <= 0.0 ) {\n\t\treturn RESULT_BADRHO\n\t}\n\n\tdx = q1[0] - q0[0]\n\tdy = q1[1] - q0[1]\n\tD = sqrt(dx * dx + dy * dy)\n\td = D / rho\n\ttheta = 0\n\n\t/* test required to prevent domain errors if dx=0 and dy=0 */\n\tif(d > 0) {\n\t\ttheta = mod2pi(atan2( dy, dx ))\n\t}\n\talpha = mod2pi(q0[2] - theta)\n\tbeta  = mod2pi(q1[2] - theta)\n\n\tir.alpha = alpha\n\tir.beta  = beta\n\tir.d     = d\n\tir.sa    = sin(alpha)\n\tir.sb    = sin(beta)\n\tir.ca    = cos(alpha)\n\tir.cb    = cos(beta)\n\tir.c_ab  = cos(alpha - beta)\n\tir.d_sq  = d * d\n\n\treturn RESULT_OK\n}\n\nfunction dubinsWord(ir, pathType, out) {\n\tlet result\n\tswitch(pathType) {\n\t\tcase LSL:\n\t\t\tresult = dubinsLSL(ir, out)\n\t\t\tbreak\n\t\tcase RSL:\n\t\t\tresult = dubinsRSL(ir, out)\n\t\t\tbreak\n\t\tcase LSR:\n\t\t\tresult = dubinsLSR(ir, out)\n\t\t\tbreak\n\t\tcase RSR:\n\t\t\tresult = dubinsRSR(ir, out)\n\t\t\tbreak\n\t\tcase LRL:\n\t\t\tresult = dubinsLRL(ir, out)\n\t\t\tbreak\n\t\tcase RLR:\n\t\t\tresult = dubinsRLR(ir, out)\n\t\t\tbreak\n\t\tdefault:\n\t\t\tresult = RESULT_NOPATH\n\t}\n\treturn result\n}\n\n\nfunction dubinsLSL(ir, out) \n{\n\tlet tmp0, tmp1, p_sq\n\t\n\ttmp0 = ir.d + ir.sa - ir.sb\n\tp_sq = 2 + ir.d_sq - (2*ir.c_ab) + (2 * ir.d * (ir.sa - ir.sb))\n\n\tif(p_sq >= 0) {\n\t\ttmp1 = atan2( (ir.cb - ir.ca), tmp0 )\n\t\tout[0] = mod2pi(tmp1 - ir.alpha)\n\t\tout[1] = sqrt(p_sq)\n\t\tout[2] = mod2pi(ir.beta - tmp1)\n\t\treturn RESULT_OK\n\t}\n\treturn RESULT_NOPATH\n}\n\nfunction dubinsRSR(ir, out) \n{\n\tlet tmp0 = ir.d - ir.sa + ir.sb\n\tlet p_sq = 2 + ir.d_sq - (2 * ir.c_ab) + (2 * ir.d * (ir.sb - ir.sa))\n\tif (p_sq >= 0 ) {\n\t\tlet tmp1 = atan2( (ir.ca - ir.cb), tmp0 )\n\t\tout[0] = mod2pi(ir.alpha - tmp1)\n\t\tout[1] = sqrt(p_sq)\n\t\tout[2] = mod2pi(tmp1 -ir.beta)\n\t\treturn RESULT_OK\n\t}\n\treturn RESULT_NOPATH\n}\n\nfunction dubinsLSR(ir, out) \n{\n\tlet p_sq = -2 + (ir.d_sq) + (2 * ir.c_ab) + (2 * ir.d * (ir.sa + ir.sb))\n\tif(p_sq >= 0) {\n\t\tlet p    = sqrt(p_sq)\n\t\tlet tmp0 = atan2( (-ir.ca - ir.cb), (ir.d + ir.sa + ir.sb) ) - atan2(-2.0, p)\n\t\tout[0] = mod2pi(tmp0 - ir.alpha)\n\t\tout[1] = p\n\t\tout[2] = mod2pi(tmp0 - mod2pi(ir.beta))\n\t\treturn RESULT_OK\n\t}\n\treturn RESULT_NOPATH\n}\n\nfunction dubinsRSL(ir, out) \n{\n\tlet p_sq = -2 + ir.d_sq + (2 * ir.c_ab) - (2 * ir.d * (ir.sa + ir.sb))\n\tif(p_sq >= 0) {\n\t\tlet p    = sqrt(p_sq)\n\t\tlet tmp0 = atan2( (ir.ca + ir.cb), (ir.d - ir.sa - ir.sb) ) - atan2(2.0, p)\n\t\tout[0] = mod2pi(ir.alpha - tmp0)\n\t\tout[1] = p\n\t\tout[2] = mod2pi(ir.beta - tmp0)\n\t\treturn RESULT_OK\n\t}\n\treturn RESULT_NOPATH\n}\n\nfunction dubinsRLR(ir, out) \n{\n\tlet tmp0 = (6. - ir.d_sq + 2*ir.c_ab + 2*ir.d*(ir.sa - ir.sb)) / 8.\n\tlet phi  = atan2( ir.ca - ir.cb, ir.d - ir.sa + ir.sb )\n\tif (abs(tmp0) <= 1) {\n\t\tlet p = mod2pi(PI_2 - acos(tmp0) )\n\t\tlet t = mod2pi(ir.alpha - phi + mod2pi(p/2.))\n\t\tout[0] = t\n\t\tout[1] = p\n\t\tout[2] = mod2pi(ir.alpha - ir.beta - t + mod2pi(p))\n\t\treturn RESULT_OK\n\t}\n\treturn RESULT_NOPATH\n}\n\nfunction dubinsLRL(ir, out)\n{\n\tlet tmp0 = (6. - ir.d_sq + 2*ir.c_ab + 2*ir.d*(ir.sb - ir.sa)) / 8.\n\tlet phi = atan2( ir.ca - ir.cb, ir.d + ir.sa - ir.sb )\n\tif (abs(tmp0) <= 1) {\n\t\tlet p = mod2pi( PI_2 - acos( tmp0) )\n\t\tlet t = mod2pi(-ir.alpha - phi + p/2.)\n\t\tout[0] = t\n\t\tout[1] = p\n\t\tout[2] = mod2pi(mod2pi(ir.beta) - ir.alpha -t + mod2pi(p))\n\t\treturn RESULT_OK\n\t}\n\treturn RESULT_NOPATH\n}", '/*\n{\n  "id": "9rfp2dve67",\n  "label": "Concentric Circles",\n  "icon": "◎",\n  "parameters": [\n    {\n      "name": "strokeColor",\n      "type": "color",\n      "default": "#282a2e"\n    },\n    {\n      "name": "strokeWidth",\n      "type": "float",\n      "default": 2\n    }\n  ]\n}\n*/\n\nlet center, centerGuide, circleGuide\n\nlet radius, minAngle, maxAngle\nlet arc\nlet prevAngle\nlet turn\n\nconst PIH = PI / 2\n\nfunction begin() {\n\t\n\tcenter = mouse\n\t\n\tcenterGuide = Guide.addPoint(mouse)\n\t\n\tcircleGuide = new Circle(mouse, 1)\n\tcircleGuide.applyMatrix = false\n\tGuide.add(circleGuide)\n}\n\nfunction press({altKey}) {\n\t\n\tif (pressCount == 1) return\n\t\n\tminAngle = mouse.subtract(center).angle\n\tmaxAngle = prevAngle = minAngle\n\tturn = 0\n}\n\nfunction release() {\n\t\n\tarc = null\t\n\tfirstClick = false\n}\n\nfunction move({altKey}) {\n\n\tif (altKey) return\n\t\n\tradius = mouse.subtract(center).length\n\tcircleGuide.scaling = radius\n}\n\nfunction drag() {\n\t\n\tif (pressCount == 1) {\n\t  center = mouse\n\t  centerGuide.position = mouse\n\t  circleGuide.position = mouse\n\t} else {\n\t\t\n  \tlet angle = mouse.subtract(center).angle\n  \t\n  \tif (prevAngle > 90 && angle < -90) {\n  \t\tturn += 1\n  \t} else if (prevAngle < -90 && angle > 90) {\n  \t\tturn -= 1\n  \t}\n  \t\n  \tprevAngle = angle\n\n  \tangle = angle + turn * 360 \t\n  \t\n  \tminAngle = min(angle, minAngle)\n  \tmaxAngle = max(angle, maxAngle)\n  \t\n  \tif (arc) arc.remove()\n  \t\n  \tif (abs(maxAngle - minAngle) > 360) {\n  \t\tarc = new Circle(center, radius)\n  \t} else {  \t\n\t  \tconst start = new Point(radius, 0).rotate(minAngle).add(center)\n\t  \tconst mid = new Point(radius, 0).rotate((minAngle + maxAngle) / 2).add(center)\n\t  \tconst end = new Point(radius, 0).rotate(maxAngle).add(center)\n\t  \t\n\t  \tarc = new Arc(start, mid, end)\n  \t}\n  \t\n  \tarc.strokeColor = strokeColor\n  \tarc.strokeWidth = strokeWidth\n\t}\n}'].map(a.default.parseToolText),
            c = a.default.parseToolText('/*\n{\n  "id": "",\n\t"label": "New Tool",\n\t"icon": "N",\n\t"parameters": [\n\t\t{\n\t\t\t"name": "strokeColor",\n\t\t\t"type": "color",\n\t\t\t"default": "#282a2e"\n\t\t},\n\t\t{\n\t\t\t"name": "strokeWidth",\n\t\t\t"type": "float",\n\t\t\t"default": 2\n\t\t}\n\t]\n}\n*/\n\nlet path\n\nfunction begin() {\n\n}\n\nfunction press() {\n\n\tpath = new Path()\n\tpath.strokeWidth = strokeWidth\n\tpath.strokeColor = strokeColor\t\n\tpath.moveTo(mouse)\n\n}\n\nfunction drag() {\n\n\tpath.lineTo(mouse)\n\t\n}\n\nfunction release() {\n\n}\n\nfunction move() {\n\n}\n\nfunction end() {\n\n}');

        function u() { return t({}, c, { id: (0, e.default)(10) }) }
        console.log(s), exports.default = { presets: s, createNew: u };
    }, { "uid": "TvWe", "fs": "70rD", "./tool": "h3IC" }],
    "JIpZ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = require("uid"),
            t = i(e);

        function i(e) { return e && e.__esModule ? e : { default: e } }
        exports.default = {
            props: ["hide", "value", "lang"],
            data: function() { return { editorId: "editor-" + (0, t.default)(10) } },
            watch: { value: function(e) { this.editor.getValue() != e && this.editor.setValue(e, -1) } },
            mounted: function() {
                var e = this,
                    t = this.lang || "text";
                this.editor = ace.edit(this.editorId), this.editor.setValue(this.value, -1), this.editor.setTheme("ace/theme/tomorrow_night"), this.editor.getSession().setOptions({ mode: "ace/mode/" + t, tabSize: 2, useSoftTabs: !1 }), this.editor.getSession().on("change", function() { e.$emit("input", e.editor.getValue()) }), this.editor.renderer.setShowGutter(!1), this.editor.setHighlightActiveLine(!1), this.editor.$blockScrolling = 1 / 0, this.editor.commands.addCommand({ mame: "save", bindKey: { win: "Ctrl-S", mac: "Cmd-S" }, exec: function() { return e.$emit("save", e.editor.getValue()) } })
            }
        };
        (function() {
            var t = exports.default || module.exports;
            "function" == typeof t && (t = t.options), Object.assign(t, {
                render: function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", { staticClass: "tool-editor__code-wrapper", class: { hide: this.hide } }, [e("div", { staticClass: "tool-editor__code", attrs: { id: this.editorId } })])
                },
                staticRenderFns: [],
                _compiled: !0,
                _scopeId: null,
                functional: void 0
            });
        })();
    }, { "uid": "TvWe" }],
    "6yCf": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var r = require("color"),
            e = t(r);

        function t(r) { return r && r.__esModule ? r : { default: r } }

        function o(r) { if (Array.isArray(r)) { for (var e = 0, t = Array(r.length); e < r.length; e++) t[e] = r[e]; return t } return Array.from(r) }
        console.log(e.default), exports.default = {
            props: ["value", "structure"],
            methods: {
                onChange: function() {
                    for (var r = arguments.length, e = Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                    this.$emit.apply(this, ["update"].concat(o(e)))
                },
                isLight: function(r) { return (0, e.default)(r).isLight() }
            }
        };
        (function() {
            var a = exports.default || module.exports;
            "function" == typeof a && (a = a.options), Object.assign(a, {
                render: function() {
                    var a = this,
                        e = a.$createElement,
                        t = a._self._c || e;
                    return t("ul", { staticClass: "parameter-control" }, a._l(a.structure, function(e) { return t("li", { staticClass: "param" }, [t("label", { staticClass: "param__label" }, [a._v(a._s(e.label || e.name))]), "float" == e.type ? t("input", { staticClass: "param__input", attrs: { type: "number" }, domProps: { value: a.value[e.name] }, on: { change: function(t) { a.onChange(e.name, parseFloat(t.target.value)) } } }) : a._e(), "color" == e.type ? t("input", { staticClass: "param__input", class: { light: a.isLight(a.value[e.name]) }, style: { backgroundColor: a.value[e.name] }, attrs: { type: "text" }, domProps: { value: a.value[e.name] }, on: { change: function(t) { a.onChange(e.name, t.target.value) } } }) : a._e()]) }))
                },
                staticRenderFns: [],
                _compiled: !0,
                _scopeId: null,
                functional: void 0
            });
        })();
    }, { "color": "oOZe" }],
    "Js2s": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var o = arguments[t]; for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]) } return e },
            t = require("paper"),
            o = y(t),
            a = require("mousetrap"),
            i = y(a),
            r = require("download-as-file"),
            s = y(r),
            n = require("query-string"),
            l = y(n),
            c = require("axios"),
            d = y(c),
            u = require("json-beautify"),
            h = y(u),
            v = require("./tool"),
            f = y(v),
            p = require("./tool-presets.js"),
            m = y(p),
            T = require("./Editor.vue"),
            I = y(T),
            g = require("./ParameterControl.vue"),
            x = y(g);

        function y(e) { return e && e.__esModule ? e : { default: e } }
        window.paper = o.default, exports.default = {
            mounted: function() {
                var e = this,
                    t = l.default.parse(location.search).tool_url;
                t && this.loadToolFromURL(t), this.canvas = this.$el.querySelector(".artboard"), o.default.setup(this.canvas), o.default.project.currentStyle.strokeCap = "round", o.default.project.currentStyle.strokeJoin = "round";
                o.default.project;
                var a = o.default.project.activeLayer,
                    r = new o.default.Layer;
                r.bringToFront(), r.name = "guide";
                o.default.project.view.applyMatrix = !1, o.default.project.view.on("zoom", function(e) { r.children.forEach(function(t) {! function e(t, o) { t.data.isMarker && (t.scaling = 1 / o), t.children && t.children.forEach(function(t) { return e(t, o) }) }(t, e) }) }), a.activate();
                var s = void 0,
                    n = void 0,
                    c = !1,
                    d = function(e) {
                        var t = e.x,
                            o = e.y;
                        e.target;
                        c = !0, s = t, n = o
                    },
                    u = function(e) {
                        var t = e.x,
                            a = e.y;
                        e.target;
                        if (c) {
                            var i = o.default.project.activeLayer,
                                r = t - s,
                                l = a - n;
                            i.translate(r, l), s = t, n = a
                        }
                    },
                    h = function() { c = !1 };
                i.default.bind("space", function(t) { e.pan = !0, e.toolInstances[e.activeToolId].pause(), e.canvas.addEventListener("mousedown", d), e.canvas.addEventListener("mousemove", u), e.canvas.addEventListener("mouseup", h) }, "keydown"), i.default.bind("space", function() { e.pan = !1, e.toolInstances[e.activeToolId].resume(), e.canvas.removeEventListener("mousedown", d), e.canvas.removeEventListener("mousemove", u), e.canvas.removeEventListener("mouseup", h) }, "keyup"), this.canvas.addEventListener("mousewheel", function(e) {
                    var t = o.default.project.view;
                    if (e.altKey || e.ctrlKey) {
                        var a = 1 + -e.deltaY / 100,
                            i = new o.default.Point(e.x, e.y);
                        t.scale(a, i), t.emit("zoom", t.scaling.x)
                    } else t.translate(-e.deltaX, -e.deltaY)
                }), i.default.bind(["command+del", "command+backspace"], this.clearArtboard), this.toolInstances = {}, this.tools.forEach(function(t) { e.toolInstances[t.id] = f.default.compile(t, e.parameters) }), this.switchTool()
            },
            methods: {
                recompileActiveTool: function() {
                    this.toolInstances[this.activeToolId] && this.toolInstances[this.activeToolId].deactivate(), this.activeTool.code = this.editingCode, this.$set(this.activeTool, "parameters", JSON.parse(this.editingParameters));
                    var e = f.default.compile(this.activeTool, this.parameters);
                    this.toolInstances[this.activeToolId] = e, e.activate()
                },
                addTool: function() {
                    this.tools.push(m.default.createNew()), this.activeToolIndex = this.tools.length - 1;
                    var e = f.default.compile(this.activeTool, this.parameters);
                    this.toolInstances[this.activeToolId] = e, e.activate()
                },
                deleteTool: function() { this.tools.splice(this.activeToolIndex, 1), this.activeToolIndex = Math.min(this.activeToolIndex, this.tools.length - 1) },
                clearArtboard: function() { o.default.project.activeLayer.removeChildren(), this.toolInstances[this.activeToolId].end() },
                exportSVG: function() {
                    var e = o.default.project.exportSVG({ bounds: o.default.project.activeLayer.strokeBounds }).outerHTML;
                    (0, s.default)({ data: e, filename: "artboard.svg" })
                },
                moveUpTool: function() {
                    if (this.activeToolIndex > 0) {
                        var e = this.activeTool;
                        this.activeTool = this.tools[this.activeToolIndex - 1], this.tools[this.activeToolIndex - 1] = e, this.activeToolIndex -= 1
                    }
                },
                moveDownTool: function() {
                    if (this.activeToolIndex < this.tools.length - 1) {
                        var e = this.activeTool;
                        this.activeTool = this.tools[this.activeToolIndex + 1], this.tools[this.activeToolIndex + 1] = e, this.activeToolIndex += 1
                    }
                },
                switchTool: function() {
                    var e = this;
                    this.editingCode = this.activeTool.code, this.$set(this, "editingParameters", this.JSONStringify(this.activeTool.parameters)), Object.keys(this.toolInstances).forEach(function(t) {
                        var o = e.toolInstances[t];
                        t === e.activeToolId ? o.activate() : o.deactivate()
                    }), Object.keys(this.parameters).forEach(function(t) { e.$set(e.parametersCache, t, e.parameters[t]), e.$delete(e.parameters, t) }), this.activeTool.parameters && this.activeTool.parameters.forEach(function(t) {
                        var o = void 0;
                        o = void 0 !== e.parametersCache[t.name] ? e.parametersCache[t.name] : t.default, e.$set(e.parameters, t.name, o)
                    })
                },
                downloadTool: function() {
                    var e = this.toolInstances[this.activeToolId].exportText();
                    (0, s.default)({ data: e, filename: this.activeTool.label + ".js" })
                },
                loadToolFromURL: function(e) {
                    var t = this;
                    d.default.get(e).then(function(o) {
                        var a = o.data,
                            i = f.default.parseToolText(a);
                        if (-1 == t.tools.map(function(e) { return e.id }).indexOf(i.id)) {
                            t.tools.push(i), t.activeToolIndex = t.tools.length - 1;
                            var r = f.default.compile(i, t.parameters);
                            t.toolInstances[i.id] = r, r.activate()
                        } else console.error("Invalid Tool File: ", e)
                    }).catch(function(t) { console.error("Failed to Load Tool from ", e, t) })
                },
                resetTools: function() { localStorage.clear(), location.reload() },
                openToolURLPrompt: function() {
                    var e = prompt("Please Enter the URL", "");
                    e && this.loadToolFromURL(e)
                },
                updateParameter: function(e, t) { this.parameters[e] = t },
                JSONStringify: function(e) { return (0, h.default)(e, null, 2, 20) }
            },
            data: function() { var e = JSON.parse(localStorage.getItem("tools")) || m.default.presets; return { tools: e, parameters: {}, parametersCache: JSON.parse(localStorage.getItem("parametersCache")) || {}, editingCode: e[0].code, editingParameters: this.JSONStringify(e[0].parameters), activeToolIndex: parseInt(localStorage.getItem("activeToolIndex")) || 0, pan: !1, showSidebar: !0, toolEditMode: "code", openToolEditorMenu: !1, openSettingsMenu: !1 } },
            computed: { activeTool: function() { return this.tools[this.activeToolIndex] }, activeToolId: function() { return this.activeTool.id }, isDirty: function() { return this.editingCode != this.activeTool.code || this.JSONStringify(this.activeTool.parameters) != this.editingParameters } },
            watch: {
                tools: { handler: function() { this.switchTool(), localStorage.setItem("tools", JSON.stringify(this.tools)) }, deep: !0 },
                parameters: {
                    handler: function() {
                        var t = e({}, this.parametersCache, this.parameters);
                        localStorage.setItem("parametersCache", JSON.stringify(t))
                    },
                    deep: !0
                },
                parametersCache: {
                    handler: function() {
                        var t = e({}, this.parametersCache, this.parameters);
                        localStorage.setItem("parametersCache", JSON.stringify(t))
                    },
                    deep: !0
                },
                activeToolIndex: function(e, t) { this.switchTool(), localStorage.setItem("activeToolIndex", e) }
            },
            components: { Editor: I.default, ParameterControl: x.default }
        };
        (function() {
            var o = exports.default || module.exports;
            "function" == typeof o && (o = o.options), Object.assign(o, {
                render: function() {
                    var o = this,
                        t = o.$createElement,
                        e = o._self._c || t;
                    return e("div", [e("canvas", { staticClass: "artboard", class: { pan: o.pan }, attrs: { resize: "resize" } }), e("aside", { staticClass: "sidebar", class: { show: o.showSidebar } }, [e("div", { staticClass: "sidebar__split", on: { click: function(t) { o.showSidebar = !o.showSidebar } } }), e("div", { staticClass: "tool-editor" }, [e("div", { staticClass: "tool-editor__header" }, [e("input", { directives: [{ name: "model", rawName: "v-model", value: o.tools[o.activeToolIndex].icon, expression: "tools[activeToolIndex].icon" }], staticClass: "icon", attrs: { type: "text", maxlength: "2" }, domProps: { value: o.tools[o.activeToolIndex].icon }, on: { input: function(t) { t.target.composing || o.$set(o.tools[o.activeToolIndex], "icon", t.target.value) } } }), e("input", { directives: [{ name: "model", rawName: "v-model", value: o.tools[o.activeToolIndex].label, expression: "tools[activeToolIndex].label" }], staticClass: "label", attrs: { type: "text", maxlength: "20" }, domProps: { value: o.tools[o.activeToolIndex].label }, on: { input: function(t) { t.target.composing || o.$set(o.tools[o.activeToolIndex], "label", t.target.value) } } }), e("button", { staticClass: "btn-update", class: { dirty: o.isDirty }, on: { click: o.recompileActiveTool } }, [o._v("Update")]), e("button", { staticClass: "btn-menu", on: { click: function(t) { o.openToolEditorMenu = !o.openToolEditorMenu } } }, [o._v("⠇")]), o.openToolEditorMenu ? e("ul", { staticClass: "menu", on: { click: function(t) { o.openToolEditorMenu = !1 } } }, [e("li", { on: { click: o.deleteTool } }, [o._v("Delete")]), e("li", { on: { click: o.moveUpTool } }, [o._v("Move Up")]), e("li", { on: { click: o.moveDownTool } }, [o._v("Move Down")]), e("li", { on: { click: o.downloadTool } }, [o._v("Download File")])]) : o._e(), o.openToolEditorMenu ? e("div", { staticClass: "fill", on: { click: function(t) { o.openToolEditorMenu = !1 } } }) : o._e()]), e("div", { staticClass: "tool-editor__editors" }, [e("Editor", { attrs: { hide: "code" != o.toolEditMode, lang: "javascript" }, on: { save: o.recompileActiveTool }, model: { value: o.editingCode, callback: function(t) { o.editingCode = t }, expression: "editingCode" } }), e("Editor", { attrs: { hide: "params" != o.toolEditMode, lang: "json" }, on: { save: o.recompileActiveTool }, model: { value: o.editingParameters, callback: function(t) { o.editingParameters = t }, expression: "editingParameters" } })], 1), e("div", { staticClass: "tool-editor__tab" }, [e("button", { class: { active: "code" == o.toolEditMode }, on: { click: function(t) { o.toolEditMode = "code" } } }, [o._v("Code")]), e("button", { class: { active: "params" == o.toolEditMode }, on: { click: function(t) { o.toolEditMode = "params" } } }, [o._v("Params")])])]), o.activeTool.parameters && o.activeTool.parameters.length > 0 ? e("ParameterControl", { attrs: { structure: o.tools[o.activeToolIndex].parameters }, on: { update: o.updateParameter }, model: { value: o.parameters, callback: function(t) { o.parameters = t }, expression: "parameters" } }) : o._e(), o._m(0)], 1), e("nav", { staticClass: "toolbar" }, [e("ul", { staticClass: "toolbar__tools" }, [o._l(o.tools, function(t, i) { return e("li", { key: i, class: { active: i === o.activeToolIndex } }, [e("input", { directives: [{ name: "model", rawName: "v-model", value: o.activeToolIndex, expression: "activeToolIndex" }], attrs: { type: "radio", id: t.label }, domProps: { value: i, checked: o._q(o.activeToolIndex, i) }, on: { change: function(t) { o.activeToolIndex = i } } }), e("label", { attrs: { for: t.label } }, [o._v(o._s(t.label))]), e("div", { class: { icon: !0, tinyletter: t.icon.length > 1 } }, [o._v(o._s(t.icon))])]) }), e("li", { staticClass: "add", on: { click: o.addTool } })], 2)]), e("div", { staticClass: "settings-button", on: { click: function(t) { o.openSettingsMenu = !o.openSettingsMenu } } }), o.openSettingsMenu ? e("ul", { staticClass: "menu settings", on: { click: function(t) { o.openSettingsMenu = !1 } } }, [e("li", { on: { click: o.clearArtboard } }, [o._v("Clear All")]), e("li", { on: { click: o.exportSVG } }, [o._v("Export SVG")]), e("li", { on: { click: o.resetTools } }, [o._v("Reset Tools")]), e("li", { on: { click: o.openToolURLPrompt } }, [o._v("Load Tool from URL")])]) : o._e(), o.openSettingsMenu ? e("div", { staticClass: "fill", on: { click: function(t) { o.openSettingsMenu = !1 } } }) : o._e()])
                },
                staticRenderFns: [function() {
                    var o = this.$createElement,
                        t = this._self._c || o;
                    return t("div", { staticClass: "sidebar__credit" }, [this._v("Created by "), t("a", { attrs: { href: "https://baku89.com", target: "_blank" } }, [this._v("Baku Hashimoto")]), this._v(" "), t("a", { attrs: { href: "https://github.com/baku89/pentool", target: "_blank" } }, [this._v("GitHob")])])
                }],
                _compiled: !0,
                _scopeId: null,
                functional: void 0
            });
        })();
    }, { "paper": "GYcQ", "mousetrap": "NHlQ", "download-as-file": "plKm", "query-string": "/Fvp", "axios": "dZBD", "json-beautify": "DXry", "./tool": "h3IC", "./tool-presets.js": "i9/H", "./Editor.vue": "JIpZ", "./ParameterControl.vue": "6yCf" }],
    "Focm": [function(require, module, exports) {
        "use strict";
        var e = require("vue/dist/vue.esm.js"),
            u = r(e),
            t = require("./App.vue"),
            n = r(t);

        function r(e) { return e && e.__esModule ? e : { default: e } }
        var a = new u.default(n.default);
        a.$mount("#app"), window.addEventListener("mousewheel", function(e) { e.preventDefault() });
    }, { "vue/dist/vue.esm.js": "fAfE", "./App.vue": "Js2s" }]
}, {}, ["Focm"], null)