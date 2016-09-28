PLOVR_MODULE_INFO = {
	"page-index": ["common"],
	"common": ["base"],
	"page-settings": ["common"],
	"page-main": ["common"],
	"page-profile": ["common"],
	"base": [],
	"richtexteditor": ["common"],
	"page-mobile-live": ["base"],
	"page-org-settings": ["common"],
	"page-roundtable": ["common"],
	"page-misc": ["common"],
	"page-org-signup": ["common"],
	"page-mobile-question": ["base"]
};
PLOVR_MODULE_URIS = {
	"page-index": "../page-index.5eb66c6c.js",
	"common": "../common.09a6f3d0.js",
	"page-settings": "../page-settings.0c56f886.js",
	"page-main": "../page-main.3c3f72d5.js",
	"page-profile": "../page-profile.d78a74d5.js",
	"base": "../base.270ad8af.js",
	"richtexteditor": "../richtexteditor.4da049b9.js",
	"page-mobile-live": "../page-mobile-live.54c1c1b4.js",
	"page-org-settings": "../page-org-settings.42d62271.js",
	"page-roundtable": "../page-roundtable.23808bd8.js",
	"page-misc": "../page-misc.f3dad42c.js",
	"page-org-signup": "../page-org-signup.cd28c77c.js",
	"page-mobile-question": "../page-mobile-question.50945515.js"
};
PLOVR_MODULE_USE_DEBUG_MODE = false;
var __z_z__ = {}; (function(z) {
	var da, fa, wa, Ea;
	z.m = function(a) {
		return function() {
			return z.aa[a].apply(this, arguments)
		}
	};
	var ca = function() {
		da.Symbol || (da.Symbol = ea);
		ca = function() {}
	};
	var ea = function(a) {
		return "jscomp_symbol_" + a + fa++
	};
	var ga = function() {
		ca();
		da.Symbol.iterator || (da.Symbol.iterator = da.Symbol("iterator"));
		ga = function() {}
	};
	z.ha = function(a) {
		ga();
		if (a[da.Symbol.iterator]) return a[da.Symbol.iterator]();
		if (! (a instanceof Array || "string" == typeof a || a instanceof String)) throw new TypeError(a + " is not iterable");
		var b = 0;
		return {
			next: function() {
				return b == a.length ? {
					done: !0
				}: {
					done: !1,
					value: a[b++]
				}
			}
		}
	};
	z.ia = function(a) {
		if (! (a instanceof Array)) {
			a = z.ha(a);
			for (var b, c = []; ! (b = a.next()).done;) c.push(b.value);
			a = c
		}
		return a
	};
	z.n = function(a, b) {
		function c() {}
		c.prototype = b.prototype;
		a.prototype = new c;
		a.prototype.constructor = a;
		for (var d in b) if (da.Object.defineProperties) {
			var f = da.Object.getOwnPropertyDescriptor(b, d);
			void 0 !== f && da.Object.defineProperty(a, d, f)
		} else a[d] = b[d]
	};
	z.ja = function(a) {
		return void 0 !== a
	};
	z.r = function() {};
	z.ka = function(a) {
		a.aa = function() {
			return a.rk ? a.rk: a.rk = new a
		}
	};
	z.la = function(a) {
		var b = typeof a;
		if ("object" == b) if (a) {
			if (a instanceof Array) return "array";
			if (a instanceof Object) return b;
			var c = Object.prototype.toString.call(a);
			if ("[object Window]" == c) return "object";
			if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
			if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
		} else return "null";
		else if ("function" == b && "undefined" == typeof a.call) return "object";
		return b
	};
	z.ma = function(a) {
		return "array" == z.la(a)
	};
	z.na = function(a) {
		var b = z.la(a);
		return "array" == b || "object" == b && "number" == typeof a.length
	};
	z.oa = function(a) {
		return "string" == typeof a
	};
	z.pa = function(a) {
		return "number" == typeof a
	};
	z.qa = function(a) {
		return "function" == z.la(a)
	};
	z.sa = function(a) {
		var b = typeof a;
		return "object" == b && null != a || "function" == b
	};
	z.ta = function(a) {
		return a[z.va] || (a[z.va] = ++wa)
	};
	var xa = function(a, b, c) {
		return a.call.apply(a.bind, arguments)
	};
	var Aa = function(a, b, c) {
		if (!a) throw Error();
		if (2 < arguments.length) {
			var d = Array.prototype.slice.call(arguments, 2);
			return function() {
				var c = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(c, d);
				return a.apply(b, c)
			}
		}
		return function() {
			return a.apply(b, arguments)
		}
	};
	z.t = function(a, b, c) {
		z.t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? xa: Aa;
		return z.t.apply(null, arguments)
	};
	z.Ba = function(a, b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return function() {
			var b = c.slice();
			b.push.apply(b, arguments);
			return a.apply(this, b)
		}
	};
	z.Ca = function(a, b) {
		for (var c in b) a[c] = b[c]
	};
	var Da = function(a) {
		if (z.u.execScript) z.u.execScript(a, "JavaScript");
		else if (z.u.eval) {
			if (null == Ea) if (z.u.eval("var _evalTest_ \x3d 1;"), "undefined" != typeof z.u._evalTest_) {
				try {
					delete z.u._evalTest_
				} catch(d) {}
				Ea = !0
			} else Ea = !1;
			if (Ea) z.u.eval(a);
			else {
				var b = z.u.document,
				c = b.createElement("SCRIPT");
				c.type = "text/javascript";
				c.defer = !1;
				c.appendChild(b.createTextNode(a));
				b.body.appendChild(c);
				b.body.removeChild(c)
			}
		} else throw Error("goog.globalEval not available");
	};
	z.w = function(a, b) {
		b && (a = a.replace(/\{\$([^}]+)}/g,
		function(a, d) {
			return null != b && d in b ? b[d] : a
		}));
		return a
	};
	z.x = function(a, b) {
		var c = a.split("."),
		d = z.u;
		c[0] in d || !d.execScript || d.execScript("var " + c[0]);
		for (var f; c.length && (f = c.shift());) ! c.length && z.ja(b) ? d[f] = b: d = d[f] ? d[f] : d[f] = {}
	};
	z.y = function(a, b) {
		function c() {}
		c.prototype = b.prototype;
		a.v = b.prototype;
		a.prototype = new c;
		a.prototype.constructor = a;
		a.J_ = function(a, c, g) {
			for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
			return b.prototype[c].apply(a, h)
		}
	};
	var Fa = function(a) {
		a.prototype.then = a.prototype.then;
		a.prototype.$goog_Thenable = !0
	};
	var Ga = function(a) {
		if (!a) return ! 1;
		try {
			return !! a.$goog_Thenable
		} catch(b) {
			return ! 1
		}
	};
	var Ha = function(a) {
		if (Error.captureStackTrace) Error.captureStackTrace(this, Ha);
		else {
			var b = Error().stack;
			b && (this.stack = b)
		}
		a && (this.message = String(a))
	};
	z.Ia = function(a, b) {
		return 0 == a.lastIndexOf(b, 0)
	};
	z.Ja = function(a, b) {
		for (var c = a.split("%s"), d = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < c.length;) d += c.shift() + f.shift();
		return d + c.join("%s")
	};
	z.Ka = function(a) {
		return a.replace(/(\r\n|\r|\n)/g, "\n")
	};
	z.La = function(a) {
		return a.replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e")
	};
	z.Ma = function(a) {
		if (!Na.test(a)) return a; - 1 != a.indexOf("\x26") && (a = a.replace(Oa, "\x26amp;")); - 1 != a.indexOf("\x3c") && (a = a.replace(Pa, "\x26lt;")); - 1 != a.indexOf("\x3e") && (a = a.replace(Qa, "\x26gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ra, "\x26quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ta, "\x26#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Va, "\x26#0;"));
		return a
	};
	z.Wa = function(a, b) {
		return - 1 != a.indexOf(b)
	};
	z.Xa = function(a) {
		return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
	};
	var Ya = function(a, b) {
		var c = z.ja(void 0) ? a.toFixed(void 0) : String(a),
		d = c.indexOf("."); - 1 == d && (d = c.length);
		return Za("0", Math.max(0, b - d)) + c
	};
	z.$a = function(a, b) {
		for (var c = 0,
		d = (0, z.ab)(String(a)).split("."), f = (0, z.ab)(String(b)).split("."), g = Math.max(d.length, f.length), h = 0; 0 == c && h < g; h++) {
			var k = d[h] || "",
			l = f[h] || "",
			p = /(\d*)(\D*)/g,
			q = /(\d*)(\D*)/g;
			do {
				var v = p.exec(k) || ["", "", ""], I = q.exec(l) || ["", "", ""];
				if (0 == v[0].length && 0 == I[0].length) break;
				c = bb(0 == v[1].length ? 0 : (0, window.parseInt)(v[1], 10), 0 == I[1].length ? 0 : (0, window.parseInt)(I[1], 10)) || bb(0 == v[2].length, 0 == I[2].length) || bb(v[2], I[2])
			} while ( 0 == c )
		}
		return c
	};
	var bb = function(a, b) {
		return a < b ? -1 : a > b ? 1 : 0
	};
	z.cb = function(a) {
		return String(a).replace(/\-([a-z])/g,
		function(a, c) {
			return c.toUpperCase()
		})
	};
	z.db = function(a, b) {
		var c = z.oa(b) ? z.Xa(b) : "\\s";
		return a.replace(new RegExp("(^" + (c ? "|[" + c + "]+": "") + ")([a-z])", "g"),
		function(a, b, c) {
			return b + c.toUpperCase()
		})
	};
	var eb = function(a, b, c) {
		this.ZT = c;
		this.KP = a;
		this.sq = b;
		this.Cu = 0;
		this.At = null
	};
	var fb = function() {
		this.gw = this.An = null
	};
	var gb = function() {
		this.next = this.scope = this.fn = null
	};
	z.hb = function(a) {
		return function() {
			return a
		}
	};
	var ib = function(a) {
		return function() {
			throw Error(a);
		}
	};
	z.jb = function(a) {
		return a[a.length - 1]
	};
	z.kb = function(a, b) {
		return Array.prototype.indexOf.call(a, b, void 0)
	};
	z.A = function(a, b, c) {
		Array.prototype.forEach.call(a, b, c)
	};
	z.lb = function(a, b, c) {
		return Array.prototype.filter.call(a, b, c)
	};
	z.mb = function(a, b, c) {
		return Array.prototype.map.call(a, b, c)
	};
	z.nb = function(a, b, c) {
		return Array.prototype.reduce.call(a, b, c)
	};
	z.ob = function(a, b, c) {
		return Array.prototype.some.call(a, b, c)
	};
	z.pb = function(a, b) {
		var c = z.qb(a, b, void 0);
		return 0 > c ? null: z.oa(a) ? a.charAt(c) : a[c]
	};
	z.qb = function(a, b, c) {
		for (var d = a.length,
		f = z.oa(a) ? a.split("") : a, g = 0; g < d; g++) if (g in f && b.call(c, f[g], g, a)) return g;
		return - 1
	};
	z.rb = function(a, b) {
		return 0 <= z.kb(a, b)
	};
	z.sb = function(a, b) {
		z.rb(a, b) || a.push(b)
	};
	z.tb = function(a, b) {
		var c = z.kb(a, b),
		d; (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
		return d
	};
	z.ub = function(a) {
		return Array.prototype.concat.apply(Array.prototype, arguments)
	};
	z.vb = function(a) {
		var b = a.length;
		if (0 < b) {
			for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
			return c
		}
		return []
	};
	z.wb = function(a, b) {
		for (var c = 1; c < arguments.length; c++) {
			var d = arguments[c];
			if (z.na(d)) {
				var f = a.length || 0,
				g = d.length || 0;
				a.length = f + g;
				for (var h = 0; h < g; h++) a[f + h] = d[h]
			} else a.push(d)
		}
	};
	z.xb = function(a, b, c, d) {
		Array.prototype.splice.apply(a, z.yb(arguments, 1))
	};
	z.yb = function(a, b, c) {
		return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
	};
	var zb = function(a, b) {
		for (var c = b || a,
		d = {},
		f = 0,
		g = 0; g < a.length;) {
			var h = a[g++],
			k;
			k = h;
			k = z.sa(k) ? "o" + z.ta(k) : (typeof k).charAt(0) + k;
			Object.prototype.hasOwnProperty.call(d, k) || (d[k] = !0, c[f++] = h)
		}
		c.length = f
	};
	z.Ab = function(a) {
		return z.Wa(z.Bb, a)
	};
	var Cb = function(a) {
		for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,
		c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
		return c
	};
	z.Db = function(a, b, c) {
		for (var d in a) b.call(c, a[d], d, a)
	};
	var Eb = function(a) {
		var b = Boolean,
		c = {},
		d;
		for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
		return c
	};
	z.Fb = function(a, b) {
		for (var c in a) if (b.call(void 0, a[c], c, a)) return ! 0;
		return ! 1
	};
	z.Gb = function(a) {
		var b = [],
		c = 0,
		d;
		for (d in a) b[c++] = a[d];
		return b
	};
	z.Hb = function(a) {
		var b = [],
		c = 0,
		d;
		for (d in a) b[c++] = d;
		return b
	};
	var Ib = function(a, b) {
		return null !== a && b in a
	};
	z.Jb = function(a) {
		for (var b in a) return ! 1;
		return ! 0
	};
	z.Kb = function(a, b) {
		b in a && delete a[b]
	};
	z.Lb = function(a, b, c) {
		if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
		a[b] = c
	};
	z.Mb = function(a, b) {
		for (var c, d, f = 1; f < arguments.length; f++) {
			d = arguments[f];
			for (c in d) a[c] = d[c];
			for (var g = 0; g < Nb.length; g++) c = Nb[g],
			Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
		}
	};
	var Ob = function(a) {
		var b = arguments.length;
		if (1 == b && z.ma(arguments[0])) return Ob.apply(null, arguments[0]);
		for (var c = {},
		d = 0; d < b; d++) c[arguments[d]] = !0;
		return c
	};
	var Pb = function() {
		return z.Ab("Opera") || z.Ab("OPR")
	};
	var Qb = function() {
		return z.Ab("Trident") || z.Ab("MSIE")
	};
	var Rb = function() {
		return z.Ab("Firefox")
	};
	var Sb = function() {
		return (z.Ab("Chrome") || z.Ab("CriOS")) && !Pb() && !z.Ab("Edge")
	};
	var Tb = function() {
		function a(a) {
			a = z.pb(a, d);
			return c[a] || ""
		}
		var b = z.Bb;
		if (Qb()) return Ub(b);
		var b = Cb(b),
		c = {};
		z.A(b,
		function(a) {
			c[a[0]] = a[1]
		});
		var d = z.Ba(Ib, c);
		return Pb() ? a(["Version", "Opera", "OPR"]) : z.Ab("Edge") ? a(["Edge"]) : Sb() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
	};
	var Ub = function(a) {
		var b = /rv: *([\d\.]*)/.exec(a);
		if (b && b[1]) return b[1];
		var b = "",
		c = /MSIE +([\d\.]+)/.exec(a);
		if (c && c[1]) if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1]) if (a && a[1]) switch (a[1]) {
		case "4.0":
			b = "8.0";
			break;
		case "5.0":
			b = "9.0";
			break;
		case "6.0":
			b = "10.0";
			break;
		case "7.0":
			b = "11.0"
		} else b = "7.0";
		else b = c[1];
		return b
	};
	var Vb = function(a) {
		z.u.setTimeout(function() {
			throw a;
		},
		0)
	};
	var Wb = function() {
		var a = z.u.MessageChannel;
		"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z.Ab("Presto") && (a = function() {
			var a = window.document.createElement("IFRAME");
			a.style.display = "none";
			a.src = "";
			window.document.documentElement.appendChild(a);
			var b = a.contentWindow,
			a = b.document;
			a.open();
			a.write("");
			a.close();
			var c = "callImmediate" + Math.random(),
			d = "file:" == b.location.protocol ? "*": b.location.protocol + "//" + b.location.host,
			a = (0, z.t)(function(a) {
				if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
			},
			this);
			b.addEventListener("message", a, !1);
			this.port1 = {};
			this.port2 = {
				postMessage: function() {
					b.postMessage(c, d)
				}
			}
		});
		if ("undefined" !== typeof a && !Qb()) {
			var b = new a,
			c = {},
			d = c;
			b.port1.onmessage = function() {
				if (z.ja(c.next)) {
					c = c.next;
					var a = c.dF;
					c.dF = null;
					a()
				}
			};
			return function(a) {
				d.next = {
					dF: a
				};
				d = d.next;
				b.port2.postMessage(0)
			}
		}
		return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("SCRIPT") ?
		function(a) {
			var b = window.document.createElement("SCRIPT");
			b.onreadystatechange = function() {
				b.onreadystatechange = null;
				b.parentNode.removeChild(b);
				b = null;
				a();
				a = null
			};
			window.document.documentElement.appendChild(b)
		}: function(a) {
			z.u.setTimeout(a, 0)
		}
	};
	var Xb = function(a, b) {
		Yb || Zb();
		$b || (Yb(), $b = !0);
		ac.add(a, b)
	};
	var Zb = function() {
		if (z.u.Promise && z.u.Promise.resolve) {
			var a = z.u.Promise.resolve(void 0);
			Yb = function() {
				a.then(bc)
			}
		} else Yb = function() {
			var a = bc; ! z.qa(z.u.setImmediate) || z.u.Window && z.u.Window.prototype && !z.Ab("Edge") && z.u.Window.prototype.setImmediate == z.u.setImmediate ? (cc || (cc = Wb()), cc(a)) : z.u.setImmediate(a)
		}
	};
	var bc = function() {
		for (var a = null; a = ac.remove();) {
			try {
				a.fn.call(a.scope)
			} catch(b) {
				Vb(b)
			}
			dc.put(a)
		}
		$b = !1
	};
	var ec = function(a, b) {
		this.N = fc;
		this.Mh = void 0;
		this.Dl = this.oi = this.Ta = null;
		this.kt = this.Ey = !1;
		if (a != z.r) try {
			var c = this;
			a.call(b,
			function(a) {
				gc(c, hc, a)
			},
			function(a) {
				gc(c, ic, a)
			})
		} catch(d) {
			gc(this, ic, d)
		}
	};
	var jc = function() {
		this.next = this.context = this.Lm = this.Tp = this.Ej = null;
		this.always = !1
	};
	var kc = function(a, b, c) {
		var d = lc.get();
		d.Tp = a;
		d.Lm = b;
		d.context = c;
		return d
	};
	var mc = function(a, b) {
		if (a.N == fc) if (a.Ta) {
			var c = a.Ta;
			if (c.oi) {
				for (var d = 0,
				f = null,
				g = null,
				h = c.oi; h && (h.always || (d++, h.Ej == a && (f = h), !(f && 1 < d))); h = h.next) f || (g = h);
				f && (c.N == fc && 1 == d ? mc(c, b) : (g ? (d = g, d.next == c.Dl && (c.Dl = d), d.next = d.next.next) : nc(c), oc(c, f, ic, b)))
			}
			a.Ta = null
		} else gc(a, ic, b)
	};
	var pc = function(a, b) {
		a.oi || a.N != hc && a.N != ic || qc(a);
		a.Dl ? a.Dl.next = b: a.oi = b;
		a.Dl = b
	};
	var rc = function(a, b, c, d) {
		var f = kc(null, null, null);
		f.Ej = new ec(function(a, h) {
			f.Tp = b ?
			function(c) {
				try {
					var f = b.call(d, c);
					a(f)
				} catch(p) {
					h(p)
				}
			}: a;
			f.Lm = c ?
			function(b) {
				try {
					var f = c.call(d, b); ! z.ja(f) && b instanceof sc ? h(b) : a(f)
				} catch(p) {
					h(p)
				}
			}: h
		});
		f.Ej.Ta = a;
		pc(a, f);
		return f.Ej
	};
	var gc = function(a, b, c) {
		if (a.N == fc) {
			a == c && (b = ic, c = new TypeError("Promise cannot resolve to itself"));
			a.N = 1;
			var d;
			a: {
				var f = c,
				g = a.WY,
				h = a.XY;
				if (f instanceof ec) pc(f, kc(g || z.r, h || null, a)),
				d = !0;
				else if (Ga(f)) f.then(g, h, a),
				d = !0;
				else {
					if (z.sa(f)) try {
						var k = f.then;
						if (z.qa(k)) {
							tc(f, k, g, h, a);
							d = !0;
							break a
						}
					} catch(l) {
						h.call(a, l);
						d = !0;
						break a
					}
					d = !1
				}
			}
			d || (a.Mh = c, a.N = b, a.Ta = null, qc(a), b != ic || c instanceof sc || uc(a, c))
		}
	};
	var tc = function(a, b, c, d, f) {
		function g(a) {
			k || (k = !0, d.call(f, a))
		}
		function h(a) {
			k || (k = !0, c.call(f, a))
		}
		var k = !1;
		try {
			b.call(a, h, g)
		} catch(l) {
			g(l)
		}
	};
	var qc = function(a) {
		a.Ey || (a.Ey = !0, Xb(a.Qs, a))
	};
	var nc = function(a) {
		var b = null;
		a.oi && (b = a.oi, a.oi = b.next, b.next = null);
		a.oi || (a.Dl = null);
		return b
	};
	var oc = function(a, b, c, d) {
		if (c == ic && b.Lm && !b.always) for (; a && a.kt; a = a.Ta) a.kt = !1;
		if (b.Ej) b.Ej.Ta = null,
		vc(b, c, d);
		else try {
			b.always ? b.Tp.call(b.context) : vc(b, c, d)
		} catch(f) {
			wc.call(null, f)
		}
		lc.put(b)
	};
	var vc = function(a, b, c) {
		b == hc ? a.Tp.call(a.context, c) : a.Lm && a.Lm.call(a.context, c)
	};
	var uc = function(a, b) {
		a.kt = !0;
		Xb(function() {
			a.kt && wc.call(null, b)
		})
	};
	var sc = function(a) {
		Ha.call(this, a)
	};
	z.xc = function() {
		0 != yc && (zc[z.ta(this)] = this);
		this.Rd = this.Rd;
		this.Jk = this.Jk
	};
	z.Ac = function(a, b) {
		z.Bc(a, z.Ba(z.Cc, b))
	};
	z.Bc = function(a, b, c) {
		a.Rd ? b.call(c) : (a.Jk || (a.Jk = []), a.Jk.push(z.ja(c) ? (0, z.t)(b, c) : b))
	};
	z.Cc = function(a) {
		a && "function" == typeof a.dispose && a.dispose()
	};
	z.Dc = function(a) {
		for (var b = 0,
		c = arguments.length; b < c; ++b) {
			var d = arguments[b];
			z.na(d) ? z.Dc.apply(null, d) : z.Cc(d)
		}
	};
	z.Ec = function() {
		return z.Ab("iPhone") && !z.Ab("iPod") && !z.Ab("iPad")
	};
	var Fc = function() {
		var a = z.Bb;
		if (z.B) return /rv\:([^\);]+)(\)|;)/.exec(a);
		if (z.Gc) return /Edge\/([\d\.]+)/.exec(a);
		if (z.C) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
		if (z.D) return /WebKit\/(\S+)/.exec(a)
	};
	var Hc = function() {
		var a = z.u.document;
		return a ? a.documentMode: void 0
	};
	z.E = function(a) {
		return Ic[a] || (Ic[a] = 0 <= z.$a(z.Jc, a))
	};
	var Kc = function(a) {
		this.id = a
	};
	z.Lc = function(a, b) {
		this.type = a instanceof Kc ? String(a) : a;
		this.currentTarget = this.target = b;
		this.defaultPrevented = this.Qk = !1;
		this.XK = !0
	};
	var Mc = function(a) {
		a.preventDefault()
	};
	var Nc = function(a) {
		Nc[" "](a);
		return a
	};
	z.Oc = function(a, b) {
		try {
			return Nc(a[b]),
			!0
		} catch(c) {}
		return ! 1
	};
	z.Pc = function(a, b) {
		z.Lc.call(this, a ? a.type: "");
		this.relatedTarget = this.currentTarget = this.target = null;
		this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
		this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
		this.state = null;
		this.FB = !1;
		this.nc = null;
		a && this.init(a, b)
	};
	z.Qc = function(a, b) {
		return Rc ? a.nc.button == b: "click" == a.type ? 0 == b: !!(a.nc.button & Sc[b])
	};
	z.Tc = function(a) {
		return z.Qc(a, 0) && !(z.D && z.Uc && a.ctrlKey)
	};
	z.Vc = function(a) {
		return ! (!a || !a[Wc])
	};
	var Xc = function(a, b, c, d, f) {
		this.listener = a;
		this.proxy = null;
		this.src = b;
		this.type = c;
		this.Fl = !!d;
		this.Ff = f;
		this.key = ++Yc;
		this.Vm = this.bs = !1
	};
	var Zc = function(a) {
		a.Vm = !0;
		a.listener = null;
		a.proxy = null;
		a.src = null;
		a.Ff = null
	};
	z.$c = function(a) {
		this.src = a;
		this.pc = {};
		this.er = 0
	};
	var ad = function(a, b) {
		var c = b.type;
		if (! (c in a.pc)) return ! 1;
		var d = z.tb(a.pc[c], b);
		d && (Zc(b), 0 == a.pc[c].length && (delete a.pc[c], a.er--));
		return d
	};
	var bd = function(a, b, c, d) {
		for (var f = 0; f < a.length; ++f) {
			var g = a[f];
			if (!g.Vm && g.listener == b && g.Fl == !!c && g.Ff == d) return f
		}
		return - 1
	};
	z.F = function(a, b, c, d, f) {
		if (z.ma(b)) {
			for (var g = 0; g < b.length; g++) z.F(a, b[g], c, d, f);
			return null
		}
		c = z.cd(c);
		return z.Vc(a) ? a.g(b, c, d, f) : dd(a, b, c, !1, d, f)
	};
	var dd = function(a, b, c, d, f, g) {
		if (!b) throw Error("Invalid event type");
		var h = !!f,
		k = z.ed(a);
		k || (a[fd] = k = new z.$c(a));
		c = k.add(b, c, d, f, g);
		if (c.proxy) return c;
		d = gd();
		c.proxy = d;
		d.src = a;
		d.listener = c;
		if (a.addEventListener) a.addEventListener(b.toString(), d, h);
		else if (a.attachEvent) a.attachEvent(hd(b.toString()), d);
		else throw Error("addEventListener and attachEvent are unavailable.");
		id++;
		return c
	};
	var gd = function() {
		var a = jd,
		b = kd ?
		function(c) {
			return a.call(b.src, b.listener, c)
		}: function(c) {
			c = a.call(b.src, b.listener, c);
			if (!c) return c
		};
		return b
	};
	z.ld = function(a, b, c, d, f) {
		if (z.ma(b)) {
			for (var g = 0; g < b.length; g++) z.ld(a, b[g], c, d, f);
			return null
		}
		c = z.cd(c);
		return z.Vc(a) ? a.xa(b, c, d, f) : dd(a, b, c, !0, d, f)
	};
	z.md = function(a, b, c, d, f) {
		if (z.ma(b)) for (var g = 0; g < b.length; g++) z.md(a, b[g], c, d, f);
		else c = z.cd(c),
		z.Vc(a) ? a.oa(b, c, d, f) : a && (a = z.ed(a)) && (b = a.Go(b, c, !!d, f)) && z.nd(b)
	};
	z.nd = function(a) {
		if (z.pa(a) || !a || a.Vm) return ! 1;
		var b = a.src;
		if (z.Vc(b)) return ad(b.oe, a);
		var c = a.type,
		d = a.proxy;
		b.removeEventListener ? b.removeEventListener(c, d, a.Fl) : b.detachEvent && b.detachEvent(hd(c), d);
		id--; (c = z.ed(b)) ? (ad(c, a), 0 == c.er && (c.src = null, b[fd] = null)) : Zc(a);
		return ! 0
	};
	var hd = function(a) {
		return a in od ? od[a] : od[a] = "on" + a
	};
	z.pd = function(a, b, c, d) {
		var f = !0;
		if (a = z.ed(a)) if (b = a.pc[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
			var g = b[a];
			g && g.Fl == c && !g.Vm && (g = qd(g, d), f = f && !1 !== g)
		}
		return f
	};
	var qd = function(a, b) {
		var c = a.listener,
		d = a.Ff || a.src;
		a.bs && z.nd(a);
		return c.call(d, b)
	};
	var jd = function(a, b) {
		if (a.Vm) return ! 0;
		if (!kd) {
			var c;
			if (! (c = b)) a: {
				c = ["window", "event"];
				for (var d = z.u,
				f; f = c.shift();) if (null != d[f]) d = d[f];
				else {
					c = null;
					break a
				}
				c = d
			}
			f = c;
			c = new z.Pc(f, this);
			d = !0;
			if (! (0 > f.keyCode || void 0 != f.returnValue)) {
				a: {
					var g = !1;
					if (0 == f.keyCode) try {
						f.keyCode = -1;
						break a
					} catch(l) {
						g = !0
					}
					if (g || void 0 == f.returnValue) f.returnValue = !0
				}
				f = [];
				for (g = c.currentTarget; g; g = g.parentNode) f.push(g);
				for (var g = a.type,
				h = f.length - 1; ! c.Qk && 0 <= h; h--) {
					c.currentTarget = f[h];
					var k = z.pd(f[h], g, !0, c),
					d = d && k
				}
				for (h = 0; ! c.Qk && h < f.length; h++) c.currentTarget = f[h],
				k = z.pd(f[h], g, !1, c),
				d = d && k
			}
			return d
		}
		return qd(a, new z.Pc(b, this))
	};
	z.ed = function(a) {
		a = a[fd];
		return a instanceof z.$c ? a: null
	};
	z.cd = function(a) {
		if (z.qa(a)) return a;
		a[rd] || (a[rd] = function(b) {
			return a.handleEvent(b)
		});
		return a[rd]
	};
	z.G = function() {
		z.xc.call(this);
		this.oe = new z.$c(this);
		this.ZN = this;
		this.yB = null
	};
	z.sd = function(a, b, c, d) {
		b = a.oe.pc[String(b)];
		if (!b) return ! 0;
		b = b.concat();
		for (var f = !0,
		g = 0; g < b.length; ++g) {
			var h = b[g];
			if (h && !h.Vm && h.Fl == c) {
				var k = h.listener,
				l = h.Ff || h.src;
				h.bs && ad(a.oe, h);
				f = !1 !== k.call(l, d) && f
			}
		}
		return f && 0 != d.XK
	};
	z.td = function(a, b) {
		z.G.call(this);
		this.uh = a || 1;
		this.qn = b || z.ud;
		this.ux = (0, z.t)(this.FY, this);
		this.FA = (0, z.H)()
	};
	z.vd = function(a, b, c) {
		if (z.qa(a)) c && (a = (0, z.t)(a, c));
		else if (a && "function" == typeof a.handleEvent) a = (0, z.t)(a.handleEvent, a);
		else throw Error("Invalid listener argument");
		return 2147483647 < b ? -1 : z.ud.setTimeout(a, b || 0)
	};
	z.wd = function(a) {
		z.ud.clearTimeout(a)
	};
	z.xd = function(a) {
		z.xc.call(this);
		this.ea = a;
		this.fb = {}
	};
	z.yd = function(a, b, c, d, f, g) {
		z.ma(c) || (c && (zd[0] = c.toString()), c = zd);
		for (var h = 0; h < c.length; h++) {
			var k = z.F(b, c[h], d || a.handleEvent, f || !1, g || a.ea || a);
			if (!k) break;
			a.fb[k.key] = k
		}
		return a
	};
	var Ad = function(a, b, c, d, f, g) {
		if (z.ma(c)) for (var h = 0; h < c.length; h++) Ad(a, b, c[h], d, f, g);
		else {
			b = z.ld(b, c, d || a.handleEvent, f, g || a.ea || a);
			if (!b) return a;
			a.fb[b.key] = b
		}
		return a
	};
	z.Bd = function() {
		this.LB = "";
		this.AN = z.Cd
	};
	z.Dd = function() {
		this.Pk = "";
		this.zN = Ed;
		this.VF = null
	};
	z.Fd = function(a) {
		return a instanceof z.Dd && a.constructor === z.Dd && a.zN === Ed ? a.Pk: "type_error:SafeHtml"
	};
	z.Gd = function(a, b) {
		return (new z.Dd).hp(a, b)
	};
	z.Hd = function(a) {
		if (a.fd && "function" == typeof a.fd) return a.fd();
		if (z.oa(a)) return a.split("");
		if (z.na(a)) {
			for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
			return b
		}
		return z.Gb(a)
	};
	z.Id = function(a) {
		if (a.zd && "function" == typeof a.zd) return a.zd();
		if (!a.fd || "function" != typeof a.fd) {
			if (z.na(a) || z.oa(a)) {
				var b = [];
				a = a.length;
				for (var c = 0; c < a; c++) b.push(c);
				return b
			}
			return z.Hb(a)
		}
	};
	var Kd = function(a, b, c) {
		if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
		else if (z.na(a) || z.oa(a)) z.A(a, b, c);
		else for (var d = z.Id(a), f = z.Hd(a), g = f.length, h = 0; h < g; h++) b.call(c, f[h], d && d[h], a)
	};
	z.Ld = function() {};
	z.Md = function(a) {
		if (a instanceof z.Ld) return a;
		if ("function" == typeof a.td) return a.td(!1);
		if (z.na(a)) {
			var b = 0,
			c = new z.Ld;
			c.next = function() {
				for (;;) {
					if (b >= a.length) throw z.Nd;
					if (b in a) return a[b++];
					b++
				}
			};
			return c
		}
		throw Error("Not implemented");
	};
	z.Od = function(a, b, c) {
		if (z.na(a)) try {
			z.A(a, b, c)
		} catch(d) {
			if (d !== z.Nd) throw d;
		} else {
			a = z.Md(a);
			try {
				for (;;) b.call(c, a.next(), void 0, a)
			} catch(d) {
				if (d !== z.Nd) throw d;
			}
		}
	};
	z.Pd = function(a) {
		if (z.na(a)) return z.vb(a);
		a = z.Md(a);
		var b = [];
		z.Od(a,
		function(a) {
			b.push(a)
		});
		return b
	};
	z.Qd = function(a, b) {
		this.Nb = {};
		this.fb = [];
		this.lr = this.Oa = 0;
		var c = arguments.length;
		if (1 < c) {
			if (c % 2) throw Error("Uneven number of arguments");
			for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
		} else a && this.addAll(a)
	};
	var Rd = function(a, b) {
		return a === b
	};
	z.Sd = function(a) {
		if (a.Oa != a.fb.length) {
			for (var b = 0,
			c = 0; b < a.fb.length;) {
				var d = a.fb[b];
				z.Ud(a.Nb, d) && (a.fb[c++] = d);
				b++
			}
			a.fb.length = c
		}
		if (a.Oa != a.fb.length) {
			for (var f = {},
			c = b = 0; b < a.fb.length;) d = a.fb[b],
			z.Ud(f, d) || (a.fb[c++] = d, f[d] = 1),
			b++;
			a.fb.length = c
		}
	};
	z.Ud = function(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	};
	var Vd = function(a) {
		z.xc.call(this);
		this.dl = a;
		this.mv = []
	};
	var Wd = function() {};
	var Xd = function(a) {
		var b; (b = a.YE) || (b = {},
		Yd(a) && (b[0] = !0, b[1] = !0), b = a.YE = b);
		return b
	};
	var Zd = function() {};
	var $d = function(a) {
		return (a = Yd(a)) ? new window.ActiveXObject(a) : new window.XMLHttpRequest
	};
	var Yd = function(a) {
		if (!a.LH && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
			for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
				var d = b[c];
				try {
					return new window.ActiveXObject(d),
					a.LH = d
				} catch(f) {}
			}
			throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
		}
		return a.LH
	};
	var ae = function(a, b) {
		if (a) for (var c = a.split("\x26"), d = 0; d < c.length; d++) {
			var f = c[d].indexOf("\x3d"),
			g = null,
			h = null;
			0 <= f ? (g = c[d].substring(0, f), h = c[d].substring(f + 1)) : g = c[d];
			b(g, h ? (0, window.decodeURIComponent)(h.replace(/\+/g, " ")) : "")
		}
	};
	z.be = function(a, b) {
		var c = a.search(ce),
		d;
		a: {
			d = 0;
			for (var f = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
				var g = a.charCodeAt(d - 1);
				if (38 == g || 63 == g) if (g = a.charCodeAt(d + f), !g || 61 == g || 38 == g || 35 == g) break a;
				d += f + 1
			}
			d = -1
		}
		if (0 > d) return null;
		f = a.indexOf("\x26", d);
		if (0 > f || f > c) f = c;
		d += b.length + 1;
		return (0, window.decodeURIComponent)(a.substr(d, f - d).replace(/\+/g, " "))
	};
	z.de = function(a) {
		z.G.call(this);
		this.headers = new z.Qd;
		this.iw = a || null;
		this.gi = !1;
		this.hw = this.da = null;
		this.Zt = this.cu = "";
		this.lk = this.Rz = this.Ht = this.yy = !1;
		this.Qv = 0;
		this.Pv = null;
		this.SK = ee;
		this.qD = this.LW = this.xZ = !1
	};
	var fe = function(a) {
		return z.C && z.E(9) && z.pa(a.timeout) && z.ja(a.ontimeout)
	};
	var ge = function(a) {
		return "content-type" == a.toLowerCase()
	};
	var he = function(a) {
		a.yy || (a.yy = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
	};
	var ie = function(a) {
		if (a.gi && "undefined" != typeof z.je && (!a.hw[1] || 4 != ke(a) || 2 != z.le(a))) if (a.Ht && 4 == ke(a)) z.vd(a.VJ, 0, a);
		else if (a.dispatchEvent("readystatechange"), a.We()) {
			a.gi = !1;
			try {
				if (me(a)) a.dispatchEvent("complete"),
				a.dispatchEvent("success");
				else {
					var b;
					try {
						b = 2 < ke(a) ? a.da.statusText: ""
					} catch(c) {
						b = ""
					}
					a.Zt = b + " [" + z.le(a) + "]";
					he(a)
				}
			} finally {
				ne(a)
			}
		}
	};
	var oe = function(a, b) {
		return {
			type: b,
			lengthComputable: a.lengthComputable,
			loaded: a.loaded,
			total: a.total
		}
	};
	var ne = function(a, b) {
		if (a.da) {
			pe(a);
			var c = a.da,
			d = a.hw[0] ? z.r: null;
			a.da = null;
			a.hw = null;
			b || a.dispatchEvent("ready");
			try {
				c.onreadystatechange = d
			} catch(f) {}
		}
	};
	var pe = function(a) {
		a.da && a.qD && (a.da.ontimeout = null);
		z.pa(a.Pv) && (z.wd(a.Pv), a.Pv = null)
	};
	var me = function(a) {
		var b = z.le(a),
		c;
		a: switch (b) {
		case 200:
		case 201:
		case 202:
		case 204:
		case 206:
		case 304:
		case 1223:
			c = !0;
			break a;
		default:
			c = !1
		}
		if (!c) {
			if (b = 0 === b) a = String(a.cu).match(z.qe)[1] || null,
			!a && z.u.self && z.u.self.location && (a = z.u.self.location.protocol, a = a.substr(0, a.length - 1)),
			b = !re.test(a ? a.toLowerCase() : "");
			c = b
		}
		return c
	};
	var ke = function(a) {
		return a.da ? a.da.readyState: 0
	};
	z.le = function(a) {
		try {
			return 2 < ke(a) ? a.da.status: -1
		} catch(b) {
			return - 1
		}
	};
	z.te = function(a) {
		try {
			return a.da ? a.da.responseText: ""
		} catch(b) {
			return ""
		}
	};
	var ue = function(a) {
		z.G.call(this);
		this.qm = new Vd(a);
		this.U = new z.xd(this)
	};
	var ve = function(a, b) {
		this.vv = [];
		this.HJ = a;
		this.QF = b || null;
		this.Lo = this.Bi = !1;
		this.Mh = void 0;
		this.zC = this.XO = this.qx = !1;
		this.$v = 0;
		this.Ta = null;
		this.vx = 0
	};
	var we = function(a, b, c) {
		a.Bi = !0;
		a.Mh = c;
		a.Lo = !b;
		xe(a)
	};
	var ye = function(a, b) {
		a.pi();
		we(a, !1, b)
	};
	var ze = function(a, b, c, d) {
		a.vv.push([b, c, d]);
		a.Bi && xe(a)
	};
	var Ae = function(a) {
		return z.ob(a.vv,
		function(a) {
			return z.qa(a[1])
		})
	};
	var xe = function(a) {
		if (a.$v && a.Bi && Ae(a)) {
			var b = a.$v,
			c = Be[b];
			c && (z.u.clearTimeout(c.tb), delete Be[b]);
			a.$v = 0
		}
		a.Ta && (a.Ta.vx--, delete a.Ta);
		for (var b = a.Mh,
		d = c = !1; a.vv.length && !a.qx;) {
			var f = a.vv.shift(),
			g = f[0],
			h = f[1],
			f = f[2];
			if (g = a.Lo ? h: g) try {
				var k = g.call(f || a.QF, b);
				z.ja(k) && (a.Lo = a.Lo && (k == b || k instanceof Error), a.Mh = b = k);
				if (Ga(b) || "function" === typeof z.u.Promise && b instanceof z.u.Promise) d = !0,
				a.qx = !0
			} catch(l) {
				b = l,
				a.Lo = !0,
				Ae(a) || (c = !0)
			}
		}
		a.Mh = b;
		d && (k = (0, z.t)(a.zF, a, !0), d = (0, z.t)(a.zF, a, !1), b instanceof ve ? (ze(b, k, d), b.XO = !0) : b.then(k, d));
		c && (b = new Ce(b), Be[b.tb] = b, a.$v = b.tb)
	};
	var De = function(a) {
		Ha.call(this);
		this.deferred = a
	};
	var Ee = function(a) {
		Ha.call(this);
		this.deferred = a
	};
	var Ce = function(a) {
		this.tb = z.u.setTimeout((0, z.t)(this.DY, this), 0);
		this.Ms = a
	};
	z.Fe = function(a, b) {
		a.innerHTML = z.Fd(b)
	};
	z.Ge = function(a, b) {
		this.x = z.ja(a) ? a: 0;
		this.y = z.ja(b) ? b: 0
	};
	z.He = function(a, b) {
		this.width = a;
		this.height = b
	};
	z.Ie = function(a) {
		return a ? new z.Je(z.Ke(a)) : Le || (Le = new z.Je)
	};
	z.J = function(a) {
		return z.oa(a) ? window.document.getElementById(a) : a
	};
	z.Me = function(a, b, c) {
		return z.Ne(window.document, a, b, c)
	};
	z.L = function(a, b) {
		var c = b || window.document,
		d = null;
		return (d = c.getElementsByClassName ? c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : z.Ne(window.document, "*", a, b)[0]) || null
	};
	z.Ne = function(a, b, c, d) {
		a = d || a;
		b = b && "*" != b ? b.toUpperCase() : "";
		if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c: ""));
		if (c && a.getElementsByClassName) {
			a = a.getElementsByClassName(c);
			if (b) {
				d = {};
				for (var f = 0,
				g = 0,
				h; h = a[g]; g++) b == h.nodeName && (d[f++] = h);
				d.length = f;
				return d
			}
			return a
		}
		a = a.getElementsByTagName(b || "*");
		if (c) {
			d = {};
			for (g = f = 0; h = a[g]; g++) b = h.className,
			"function" == typeof b.split && z.rb(b.split(/\s+/), c) && (d[f++] = h);
			d.length = f;
			return d
		}
		return a
	};
	var Oe = function(a, b) {
		z.Db(b,
		function(b, d) {
			"style" == d ? a.style.cssText = b: "class" == d ? a.className = b: "for" == d ? a.htmlFor = b: Pe.hasOwnProperty(d) ? a.setAttribute(Pe[d], b) : z.Ia(d, "aria-") || z.Ia(d, "data-") ? a.setAttribute(d, b) : a[d] = b
		})
	};
	z.Qe = function(a) {
		a = (a || window).document;
		a = "CSS1Compat" == a.compatMode ? a.documentElement: a.body;
		return new z.He(a.clientWidth, a.clientHeight)
	};
	z.Re = function(a) {
		var b = z.Se(a);
		a = a.parentWindow || a.defaultView;
		return z.C && z.E("10") && a.pageYOffset != b.scrollTop ? new z.Ge(b.scrollLeft, b.scrollTop) : new z.Ge(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
	};
	z.Se = function(a) {
		return a.scrollingElement ? a.scrollingElement: z.D || "CSS1Compat" != a.compatMode ? a.body || a.documentElement: a.documentElement
	};
	z.Te = function(a) {
		return a ? a.parentWindow || a.defaultView: window
	};
	z.M = function(a, b, c) {
		return Ue(window.document, arguments)
	};
	var Ue = function(a, b) {
		var c = b[0],
		d = b[1];
		if (!Ve && d && (d.name || d.type)) {
			c = ["\x3c", c];
			d.name && c.push(' name\x3d"', z.Ma(d.name), '"');
			if (d.type) {
				c.push(' type\x3d"', z.Ma(d.type), '"');
				var f = {};
				z.Mb(f, d);
				delete f.type;
				d = f
			}
			c.push("\x3e");
			c = c.join("")
		}
		c = a.createElement(c);
		d && (z.oa(d) ? c.className = d: z.ma(d) ? c.className = d.join(" ") : Oe(c, d));
		2 < b.length && We(a, c, b, 2);
		return c
	};
	var We = function(a, b, c, d) {
		function f(c) {
			c && b.appendChild(z.oa(c) ? a.createTextNode(c) : c)
		}
		for (; d < c.length; d++) {
			var g = c[d]; ! z.na(g) || z.sa(g) && 0 < g.nodeType ? f(g) : z.A(Xe(g) ? z.vb(g) : g, f)
		}
	};
	z.Ye = function(a) {
		return z.Ze(window.document, a)
	};
	z.Ze = function(a, b) {
		var c = a.createElement("DIV");
		z.C ? (c.innerHTML = "\x3cbr\x3e" + b, c.removeChild(c.firstChild)) : c.innerHTML = b;
		if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
		else {
			for (var d = a.createDocumentFragment(); c.firstChild;) d.appendChild(c.firstChild);
			c = d
		}
		return c
	};
	z.$e = function(a) {
		if (1 != a.nodeType) return ! 1;
		switch (a.tagName) {
		case "APPLET":
		case "AREA":
		case "BASE":
		case "BR":
		case "COL":
		case "COMMAND":
		case "EMBED":
		case "FRAME":
		case "HR":
		case "IMG":
		case "INPUT":
		case "IFRAME":
		case "ISINDEX":
		case "KEYGEN":
		case "LINK":
		case "NOFRAMES":
		case "NOSCRIPT":
		case "META":
		case "OBJECT":
		case "PARAM":
		case "SCRIPT":
		case "SOURCE":
		case "STYLE":
		case "TRACK":
		case "WBR":
			return ! 1
		}
		return ! 0
	};
	z.af = function(a, b) {
		We(z.Ke(a), a, arguments, 1)
	};
	z.bf = function(a) {
		for (var b; b = a.firstChild;) a.removeChild(b)
	};
	z.cf = function(a, b) {
		b.parentNode && b.parentNode.insertBefore(a, b)
	};
	z.df = function(a, b) {
		b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
	};
	z.ef = function(a, b, c) {
		a.insertBefore(b, a.childNodes[c] || null)
	};
	z.N = function(a) {
		return a && a.parentNode ? a.parentNode.removeChild(a) : null
	};
	z.ff = function(a) {
		var b, c = a.parentNode;
		if (c && 11 != c.nodeType) {
			if (a.removeNode) return a.removeNode(!1);
			for (; b = a.firstChild;) c.insertBefore(b, a);
			return z.N(a)
		}
	};
	z.gf = function(a) {
		return hf && void 0 != a.children ? a.children: z.lb(a.childNodes,
		function(a) {
			return 1 == a.nodeType
		})
	};
	z.jf = function(a) {
		return z.ja(a.firstElementChild) ? a.firstElementChild: z.kf(a.firstChild, !0)
	};
	z.kf = function(a, b) {
		for (; a && 1 != a.nodeType;) a = b ? a.nextSibling: a.previousSibling;
		return a
	};
	z.lf = function(a) {
		return z.sa(a) && 1 == a.nodeType
	};
	var mf = function(a) {
		return z.sa(a) && a.window == a
	};
	z.nf = function(a, b) {
		if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
		if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
		for (; b && a != b;) b = b.parentNode;
		return b == a
	};
	z.Ke = function(a) {
		return 9 == a.nodeType ? a: a.ownerDocument || a.document
	};
	z.of = function(a, b) {
		if ("textContent" in a) a.textContent = b;
		else if (3 == a.nodeType) a.data = b;
		else if (a.firstChild && 3 == a.firstChild.nodeType) {
			for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
			a.firstChild.data = b
		} else z.bf(a),
		a.appendChild(z.Ke(a).createTextNode(String(b)))
	};
	z.pf = function(a, b) {
		b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
	};
	z.qf = function(a) {
		if (rf && "innerText" in a) a = z.Ka(a.innerText);
		else {
			var b = [];
			z.sf(a, b, !0);
			a = b.join("")
		}
		a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
		a = a.replace(/\u200B/g, "");
		rf || (a = a.replace(/ +/g, " "));
		" " != a && (a = a.replace(/^\s*/, ""));
		return a
	};
	z.sf = function(a, b, c) {
		if (! (a.nodeName in tf)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
		else if (a.nodeName in uf) b.push(uf[a.nodeName]);
		else for (a = a.firstChild; a;) z.sf(a, b, c),
		a = a.nextSibling
	};
	var Xe = function(a) {
		if (a && "number" == typeof a.length) {
			if (z.sa(a)) return "function" == typeof a.item || "string" == typeof a.item;
			if (z.qa(a)) return "function" == typeof a.item
		}
		return ! 1
	};
	z.vf = function(a, b, c, d) {
		if (!b && !c) return null;
		var f = b ? b.toUpperCase() : null;
		return z.wf(a,
		function(a) {
			return (!f || a.nodeName == f) && (!c || z.oa(a.className) && z.rb(a.className.split(/\s+/), c))
		},
		!0, d)
	};
	z.wf = function(a, b, c, d) {
		c || (a = a.parentNode);
		c = null == d;
		for (var f = 0; a && (c || f <= d);) {
			if (b(a)) return a;
			a = a.parentNode;
			f++
		}
		return null
	};
	z.Je = function(a) {
		this.Qa = a || z.u.document || window.document
	};
	z.xf = function(a) {
		return z.Re(a.Qa)
	};
	var yf = function(a) {
		if (a.length) {
			var b = zf.length;
			z.wb(zf, a);
			if (!b) {
				a = zf;
				var c = function() {
					var b = a.shift(),
					b = Af(b);
					a.length && ze(b, c, c, void 0);
					return b
				};
				c()
			}
		} else(new ve).ni(null)
	};
	var Af = function(a) {
		var b = {},
		c = b.document || window.document,
		d = window.document.createElement("SCRIPT"),
		f = {
			dL: d,
			Vq: void 0
		},
		g = new ve(Bf, f),
		h = null,
		k = null != b.timeout ? b.timeout: 5E3;
		0 < k && (h = window.setTimeout(function() {
			Cf(d, !0);
			ye(g, new Df(Ef, "Timeout reached for loading script " + a))
		},
		k), f.Vq = h);
		d.onload = d.onreadystatechange = function() {
			d.readyState && "loaded" != d.readyState && "complete" != d.readyState || (Cf(d, b.L_ || !1, h), g.ni(null))
		};
		d.onerror = function() {
			Cf(d, !0, h);
			ye(g, new Df(Ff, "Error while loading script " + a))
		};
		f = b.attributes || {};
		z.Mb(f, {
			type: "text/javascript",
			charset: "UTF-8",
			src: a
		});
		Oe(d, f);
		Gf(c).appendChild(d);
		return g
	};
	var Gf = function(a) {
		var b = a.getElementsByTagName("HEAD");
		return b && 0 != b.length ? b[0] : a.documentElement
	};
	var Bf = function() {
		if (this && this.dL) {
			var a = this.dL;
			a && "SCRIPT" == a.tagName && Cf(a, !0, this.Vq)
		}
	};
	var Cf = function(a, b, c) {
		null != c && z.u.clearTimeout(c);
		a.onload = z.r;
		a.onerror = z.r;
		a.onreadystatechange = z.r;
		b && window.setTimeout(function() {
			z.N(a)
		},
		0)
	};
	var Df = function(a, b) {
		var c = "Jsloader error (code #" + a + ")";
		b && (c += ": " + b);
		Ha.call(this, c);
		this.code = a
	};
	var Hf = function() {
		z.G.call(this);
		this.U = new z.xd(this);
		this.Dh = {}
	};
	var If = function(a, b) {
		a.dispatchEvent(new Jf);
		var c = a.Dh[b],
		d = c.QK,
		f = c.$B,
		g = null;
		try {
			if (a.yL || a.As && (z.Kf || Rb() && 0 <= z.$a(Tb(), "36"))) for (var h = 0; h < d.length; h++) Da(f[h] + " //@ sourceURL\x3d" + d[h]);
			else Da(f.join("\n"))
		} catch(k) {
			g = k
		}
		a.dispatchEvent(new Lf);
		g ? (c = c.zy, a.dispatchEvent(new Mf(0, g)), c && c(null)) : c.NC && c.NC();
		delete a.Dh[b]
	};
	var Lf = function() {
		z.Lc.call(this, Nf)
	};
	var Jf = function() {
		z.Lc.call(this, Of)
	};
	var Mf = function(a, b) {
		z.Lc.call(this, Pf);
		this.error = b || null
	};
	var Qf = function() {
		this.$B = this.QK = null;
		this.VI = !1;
		this.zy = this.NC = null
	};
	var Rf = function(a, b) {
		z.xc.call(this);
		this.bG = this.CF = null;
		this.bJ = b;
		this.Vj = [];
		if (a > this.bJ) throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
		for (var c = 0; c < a; c++) this.Vj.push(this.io())
	};
	var Sf = function(a, b) {
		a.Vj.length < a.bJ ? a.Vj.push(b) : a.my(b)
	};
	z.Tf = function() {
		this.jg = [];
		this.uB = new z.Qd;
		this.Wv = this.cM = this.dM = this.CL = 0;
		this.Xk = new z.Qd;
		this.Lx = this.bM = 0;
		this.aB = 1;
		this.Ns = new Rf(0, 4E3);
		this.Ns.io = function() {
			return new Uf
		};
		this.GC = new Rf(0, 50);
		this.GC.io = function() {
			return new Vf
		};
		var a = this;
		this.Iz = new Rf(0, 2E3);
		this.Iz.io = function() {
			return String(a.aB++)
		};
		this.Iz.my = function() {}
	};
	var Vf = function() {
		this.rD = this.time = this.count = 0
	};
	var Uf = function() {};
	var Wf = function(a, b, c, d) {
		var f = []; - 1 == c ? f.push("    ") : f.push(Xf(a.Os - c));
		f.push(" ", Yf(a.Os - b));
		0 == a.Ps ? f.push(" Start        ") : 1 == a.Ps ? (f.push(" Done "), f.push(Xf(a.t0 - a.startTime), " ms ")) : f.push(" Comment      ");
		f.push(d, a);
		0 < a.$L && f.push("[VarAlloc ", a.$L, "] ");
		return f.join("")
	};
	var Xf = function(a) {
		a = Math.round(a);
		var b = "";
		1E3 > a && (b = " ");
		100 > a && (b = "  ");
		10 > a && (b = "   ");
		return b + a
	};
	var Yf = function(a) {
		a = Math.round(a);
		return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
	};
	var Zf = function() {
		z.xc.call(this)
	};
	var $f = function(a, b) {
		this.Zs = a;
		this.ea = b
	};
	var ag = function(a, b) {
		z.xc.call(this);
		this.SF = a;
		this.tb = b;
		this.pB = [];
		this.iB = [];
		this.gG = []
	};
	var bg = function(a, b) {
		a.gv(a.iB, b, void 0)
	};
	var cg = function(a, b) {
		for (var c = [], d = 0; d < a.length; d++) try {
			a[d].tG(b)
		} catch(f) {
			Vb(f),
			c.push(f)
		}
		a.length = 0;
		return c.length ? c: null
	};
	var dg = function() {
		z.xc.call(this);
		this.jd = {};
		this.Pi = [];
		this.Lh = [];
		this.pq = [];
		this.Id = [];
		this.wn = [];
		this.cs = {};
		this.NF = this.Zr = new ag([], "");
		this.EI = null;
		this.jp = new ve;
		this.BP = this.PE = !1;
		this.LA = null;
		this.ms = 0;
		this.CM = this.CI = !1;
		this.oJ = null
	};
	var eg = function(a) {
		var b = a.Dc();
		b != a.CI && (a.Qs(b ? "active": "idle"), a.CI = b);
		b = 0 < a.wn.length;
		b != a.CM && (a.Qs(b ? "userActive": "userIdle"), a.CM = b)
	};
	var fg = function(a, b, c, d, f) {
		c.kq(f.ni, f);
		bg(c,
		function(a) {
			ye(f, Error(a))
		});
		gg(a, b) ? d && (hg(a, b), eg(a)) : d && hg(a, b)
	};
	var ig = function(a, b) {
		if (a.BP) {
			var c = (0, z.t)(a.nu, a, b);
			ze(a.jp, c, null, void 0)
		} else 0 == a.Pi.length ? a.nu(b) : (a.Id.push(b), eg(a))
	};
	var jg = function(a, b) {
		for (var c = 0; c < b.length; c++) if (a.jd[b[c]].Ec()) throw Error("Module already loaded: " + b[c]);
		for (var d = [], c = 0; c < b.length; c++) d = d.concat(kg(a, b[c]));
		zb(d);
		return ! a.PE && 1 < d.length ? (c = d.shift(), a.Id = z.mb(d,
		function(a) {
			return [a]
		}).concat(a.Id), [c]) : d
	};
	var kg = function(a, b) {
		var c = [];
		z.rb(a.pq, b) || c.push(b);
		for (var d = z.vb(a.jd[b].SF); d.length;) {
			var f = d.pop();
			a.jd[f].Ec() || z.rb(a.pq, f) || (c.unshift(f), Array.prototype.unshift.apply(d, a.jd[f].SF))
		}
		zb(c);
		return c
	};
	z.lg = function(a) {
		var b = dg.aa();
		b.Rd || (b.jd[a].Yp((0, z.t)(b.VG, b)) && mg(b, ng), z.tb(b.wn, a), z.tb(b.Pi, a), 0 == b.Pi.length && og(b), b.EI && a == b.EI && (b.jp.Bi || b.jp.ni()), eg(b))
	};
	var gg = function(a, b) {
		if (z.rb(a.Pi, b)) return ! 0;
		for (var c = 0; c < a.Id.length; c++) if (z.rb(a.Id[c], b)) return ! 0;
		return ! 1
	};
	var hg = function(a, b) {
		z.rb(a.wn, b) || a.wn.push(b)
	};
	var pg = function(a, b) {
		1 < a.Lh.length ? a.Id = z.mb(a.Lh,
		function(a) {
			return [a]
		}).concat(a.Id) : mg(a, b)
	};
	var mg = function(a, b) {
		var c = a.Lh;
		a.Pi.length = 0;
		for (var d = [], f = 0; f < a.Id.length; f++) {
			var g = z.lb(a.Id[f],
			function(a) {
				var b = kg(this, a);
				return z.ob(c,
				function(a) {
					return z.rb(b, a)
				})
			},
			a);
			z.wb(d, g)
		}
		for (f = 0; f < c.length; f++) z.sb(d, c[f]);
		for (f = 0; f < d.length; f++) {
			for (g = 0; g < a.Id.length; g++) z.tb(a.Id[g], d[f]);
			z.tb(a.wn, d[f])
		}
		var h = a.cs.error;
		if (h) for (f = 0; f < h.length; f++) for (var k = h[f], g = 0; g < d.length; g++) k("error", d[g], b);
		for (f = 0; f < c.length; f++) a.jd[c[f]] && a.jd[c[f]].hB(b);
		a.Lh.length = 0;
		eg(a)
	};
	var og = function(a) {
		for (; a.Id.length;) {
			var b = z.lb(a.Id.shift(),
			function(a) {
				return ! this.jd[a].Ec()
			},
			a);
			if (0 < b.length) {
				a.nu(b);
				return
			}
		}
		eg(a)
	};
	z.qg = function(a, b) {
		var c = dg.aa(),
		d = c.jd[a];
		d.Ec() ? (0, window.setTimeout)(b) : (0, window.$)('script[src*\x3d"' + d.dl.replace(/^\/static\//, "") + '"]').length ? d.kq(b) : (d = c.jd[a], d.Ec() ? (c = new $f(b, void 0), window.setTimeout((0, z.t)(c.tG, c), 0)) : gg(c, a) ? d.kq(b, void 0) : (d.kq(b, void 0), ig(c, [a])))
	};
	z.rg = function(a, b, c, d) {
		this.top = a;
		this.right = b;
		this.bottom = c;
		this.left = d
	};
	z.sg = function(a, b, c, d) {
		this.left = a;
		this.top = b;
		this.width = c;
		this.height = d
	};
	z.tg = function(a, b, c) {
		if (z.oa(b))(b = z.ug(a, b)) && (a.style[b] = c);
		else for (var d in b) {
			c = a;
			var f = b[d],
			g = z.ug(c, d);
			g && (c.style[g] = f)
		}
	};
	z.ug = function(a, b) {
		var c = vg[b];
		if (!c) {
			var d = z.cb(b),
			c = d;
			void 0 === a.style[d] && (d = (z.D ? "Webkit": z.B ? "Moz": z.C ? "ms": z.wg ? "O": null) + z.db(d), void 0 !== a.style[d] && (c = d));
			vg[b] = c
		}
		return c
	};
	z.xg = function(a, b) {
		var c = z.Ke(a);
		return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "": ""
	};
	z.yg = function(a, b) {
		return a.currentStyle ? a.currentStyle[b] : null
	};
	z.zg = function(a, b) {
		return z.xg(a, b) || z.yg(a, b) || a.style && a.style[b]
	};
	z.Ag = function(a) {
		return z.zg(a, "position")
	};
	z.Bg = function(a, b, c) {
		var d;
		b instanceof z.Ge ? (d = b.x, b = b.y) : (d = b, b = c);
		a.style.left = z.Cg(d, !1);
		a.style.top = z.Cg(b, !1)
	};
	z.Dg = function(a) {
		var b;
		try {
			b = a.getBoundingClientRect()
		} catch(c) {
			return {
				left: 0,
				top: 0,
				right: 0,
				bottom: 0
			}
		}
		z.C && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
		return b
	};
	z.Eg = function(a, b) {
		var c = z.Fg(a),
		d = z.Fg(b);
		return new z.Ge(c.x - d.x, c.y - d.y)
	};
	z.Gg = function(a) {
		a = z.Dg(a);
		return new z.Ge(a.left, a.top)
	};
	z.Fg = function(a) {
		if (1 == a.nodeType) return z.Gg(a);
		a = a.changedTouches ? a.changedTouches[0] : a;
		return new z.Ge(a.clientX, a.clientY)
	};
	z.Hg = function(a, b, c) {
		if (b instanceof z.He) c = b.height,
		b = b.width;
		else if (void 0 == c) throw Error("missing height argument");
		a.style.width = z.Cg(b, !0);
		a.style.height = z.Cg(c, !0)
	};
	z.Cg = function(a, b) {
		"number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
		return a
	};
	var Ig = function(a) {
		return z.Jg(a)
	};
	z.Jg = function(a) {
		var b = Kg;
		if ("none" != z.zg(a, "display")) return b(a);
		var c = a.style,
		d = c.display,
		f = c.visibility,
		g = c.position;
		c.visibility = "hidden";
		c.position = "absolute";
		c.display = "inline";
		a = b(a);
		c.display = d;
		c.position = g;
		c.visibility = f;
		return a
	};
	var Kg = function(a) {
		var b = a.offsetWidth,
		c = a.offsetHeight,
		d = z.D && !b && !c;
		return z.ja(b) && !d || !a.getBoundingClientRect ? new z.He(b, c) : (a = z.Dg(a), new z.He(a.right - a.left, a.bottom - a.top))
	};
	z.Lg = function(a, b) {
		var c = a.style;
		"opacity" in c ? c.opacity = b: "MozOpacity" in c ? c.MozOpacity = b: "filter" in c && (c.filter = "" === b ? "": "alpha(opacity\x3d" + 100 * b + ")")
	};
	z.P = function(a, b) {
		a.style.display = b ? "": "none"
	};
	z.Mg = function(a) {
		return "none" != a.style.display
	};
	z.Ng = function(a, b) {
		var c = z.Ie(b),
		d = null,
		f = c.ua();
		if (z.C && f.createStyleSheet) c = d = f.createStyleSheet(),
		z.C && z.ja(c.cssText) ? c.cssText = a: c.innerHTML = a;
		else {
			f = z.Ne(c.Qa, "HEAD", void 0, void 0)[0];
			f || (d = z.Ne(c.Qa, "BODY", void 0, void 0)[0], f = c.B("HEAD"), d.parentNode.insertBefore(f, d));
			var g = d = c.B("STYLE");
			z.C && z.ja(g.cssText) ? g.cssText = a: g.innerHTML = a;
			c.appendChild(f, d)
		}
	};
	z.Og = function(a) {
		return "rtl" == z.zg(a, "direction")
	};
	z.Pg = function(a, b, c, d) {
		if (/^\d+px?$/.test(b)) return (0, window.parseInt)(b, 10);
		var f = a.style[c],
		g = a.runtimeStyle[c];
		a.runtimeStyle[c] = a.currentStyle[c];
		a.style[c] = b;
		b = a.style[d];
		a.style[c] = f;
		a.runtimeStyle[c] = g;
		return b
	};
	var Qg = function(a, b) {
		var c = z.yg(a, b);
		return c ? z.Pg(a, c, "left", "pixelLeft") : 0
	};
	z.Rg = function(a) {
		if (z.C) {
			var b = Qg(a, "paddingLeft"),
			c = Qg(a, "paddingRight"),
			d = Qg(a, "paddingTop");
			a = Qg(a, "paddingBottom");
			return new z.rg(d, c, a, b)
		}
		b = z.xg(a, "paddingLeft");
		c = z.xg(a, "paddingRight");
		d = z.xg(a, "paddingTop");
		a = z.xg(a, "paddingBottom");
		return new z.rg((0, window.parseFloat)(d), (0, window.parseFloat)(c), (0, window.parseFloat)(a), (0, window.parseFloat)(b))
	};
	var Sg = function(a, b) {
		if ("none" == z.yg(a, b + "Style")) return 0;
		var c = z.yg(a, b + "Width");
		return c in Tg ? Tg[c] : z.Pg(a, c, "left", "pixelLeft")
	};
	z.Ug = function(a) {
		if (z.C && !(9 <= z.Vg)) {
			var b = Sg(a, "borderLeft"),
			c = Sg(a, "borderRight"),
			d = Sg(a, "borderTop");
			a = Sg(a, "borderBottom");
			return new z.rg(d, c, a, b)
		}
		b = z.xg(a, "borderLeftWidth");
		c = z.xg(a, "borderRightWidth");
		d = z.xg(a, "borderTopWidth");
		a = z.xg(a, "borderBottomWidth");
		return new z.rg((0, window.parseFloat)(d), (0, window.parseFloat)(c), (0, window.parseFloat)(a), (0, window.parseFloat)(b))
	};
	z.Wg = function() {
		var a = window.document.createElement("DIV");
		a.style.cssText = "overflow:auto;position:absolute;top:0;width:100px;height:100px";
		var b = window.document.createElement("DIV");
		z.Hg(b, "200px", "200px");
		a.appendChild(b);
		window.document.body.appendChild(a);
		b = a.offsetWidth - a.clientWidth;
		z.N(a);
		return b
	};
	z.Xg = function() {};
	z.Yg = function(a) {
		return ":" + (a.aB++).toString(36)
	};
	z.Q = function(a) {
		z.G.call(this);
		this.ba = a || z.Ie();
		this.Jg = Zg;
		this.tb = null;
		this.wa = !1;
		this.h = null;
		this.Ji = void 0;
		this.of = this.$c = this.Ta = this.WA = null;
		this.JM = !1
	};
	z.$g = function(a, b) {
		if (a == b) throw Error("Unable to set parent component");
		if (b && a.Ta && a.tb && z.ah(a.Ta, a.tb) && a.Ta != b) throw Error("Unable to set parent component");
		a.Ta = b;
		z.Q.v.Fb.call(a, b)
	};
	z.bh = function(a) {
		return a.$c ? a.$c.length: 0
	};
	z.ah = function(a, b) {
		var c;
		a.of && b ? (c = a.of, c = (null !== c && b in c ? c[b] : void 0) || null) : c = null;
		return c
	};
	z.ch = function(a, b) {
		return a.$c ? a.$c[b] || null: null
	};
	z.dh = function(a, b, c) {
		a.$c && z.A(a.$c, b, c)
	};
	z.eh = function(a) {
		function b() {
			f.onload = f.onerror = f.onreadystatechange = null;
			window.document.body.removeChild(f)
		}
		function c() {
			b();
			d.resolve()
		}
		var d = window.$.Deferred(),
		f = window.document.createElement("script");
		f.onload = c;
		f.onerror = function() {
			b();
			d.reject()
		};
		f.onreadystatechange = function() {
			"loaded" !== f.readyState && "complete" !== f.readyState || c()
		};
		f.src = a;
		window.document.body.appendChild(f);
		return d.promise()
	};
	z.fh = function() {
		z.gh && z.eh(window.location.protocol + "//res.wx.qq.com/open/js/jweixin-1.0.0.js").then(function() {
			window.wx && (hh(), ih())
		})
	};
	var hh = function() {
		window.$.get("/wechat/jssdkconfig", {
			url: window.location.href.split("#")[0]
		}).then(function(a) {
			window.wx.config(Object.assign({},
			a, {
				jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
			}))
		})
	};
	var ih = function() {
		window.wx.ready(function() {
			jh().then(function(a) {
				var b = Object.assign({},
				kh, a.timeline);
				window.wx.onMenuShareTimeline(b);
				a = Object.assign({},
				kh, a.appMessage);
				window.wx.onMenuShareAppMessage(a)
			})
		})
	};
	var jh = function() {
		var a = "",
		b = "";
		lh ? (a = "answer", b = lh.urlToken) : z.R ? (a = "question", b = z.R.gb) : z.mh ? (a = "collection", b = z.mh.gb) : z.nh ? (a = "people", b = z.nh.gb) : z.oh ? (a = "roundtable", b = z.oh.slug) : z.ph && window.location.pathname.match(/\/topic\/\d+$/) ? (a = "topic", b = z.ph[0][1]) : qh ? (a = "lives", b = qh.urlToken) : rh ? (a = "publications", b = rh[0] + "/" + rh[1]) : sh && (a = "publications", b = sh[0]);
		return a && b ? window.$.get("/" + a + "/" + b + "/wechat_share_info") : window.Promise.resolve(kh)
	};
	z.th = function(a, b) {
		this.ih = this.Be = this.$i = "";
		this.Rm = null;
		this.Uj = this.af = "";
		this.Se = this.JT = !1;
		var c;
		if (a instanceof z.th) this.Se = z.ja(b) ? b: a.Se,
		uh(this, a.$i),
		c = a.Be,
		z.vh(this),
		this.Be = c,
		c = a.ih,
		z.vh(this),
		this.ih = c,
		wh(this, a.Rm),
		c = a.af,
		z.vh(this),
		this.af = c,
		xh(this, a.Vd().clone()),
		c = a.Uj,
		z.vh(this),
		this.Uj = c;
		else if (a && (c = String(a).match(z.qe))) {
			this.Se = !!b;
			uh(this, c[1] || "", !0);
			var d = c[2] || "";
			z.vh(this);
			this.Be = yh(d);
			d = c[3] || "";
			z.vh(this);
			this.ih = yh(d, !0);
			wh(this, c[4]);
			d = c[5] || "";
			z.vh(this);
			this.af = yh(d, !0);
			xh(this, c[6] || "", !0);
			c = c[7] || "";
			z.vh(this);
			this.Uj = yh(c)
		} else this.Se = !!b,
		this.ze = new z.Ah(null, 0, this.Se)
	};
	var uh = function(a, b, c) {
		z.vh(a);
		a.$i = c ? yh(b, !0) : b;
		a.$i && (a.$i = a.$i.replace(/:$/, ""))
	};
	var wh = function(a, b) {
		z.vh(a);
		if (b) {
			b = Number(b);
			if ((0, window.isNaN)(b) || 0 > b) throw Error("Bad port number " + b);
			a.Rm = b
		} else a.Rm = null
	};
	var xh = function(a, b, c) {
		z.vh(a);
		b instanceof z.Ah ? (a.ze = b, a.ze.pC(a.Se)) : (c || (b = Bh(b, Ch)), a.ze = new z.Ah(b, 0, a.Se));
		return a
	};
	z.vh = function(a) {
		if (a.JT) throw Error("Tried to modify a read-only Uri");
	};
	z.Dh = function(a) {
		return a instanceof z.th ? a.clone() : new z.th(a, void 0)
	};
	var yh = function(a, b) {
		return a ? b ? (0, window.decodeURI)(a.replace(/%25/g, "%2525")) : (0, window.decodeURIComponent)(a) : ""
	};
	var Bh = function(a, b, c) {
		return z.oa(a) ? (a = (0, window.encodeURI)(a).replace(b, Eh), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
	};
	var Eh = function(a) {
		a = a.charCodeAt(0);
		return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
	};
	z.Ah = function(a, b, c) {
		this.Oa = this.Sb = null;
		this.ne = a || null;
		this.Se = !!c
	};
	var Fh = function(a) {
		a.Sb || (a.Sb = new z.Qd, a.Oa = 0, a.ne && ae(a.ne,
		function(b, c) {
			a.add((0, window.decodeURIComponent)(b.replace(/\+/g, " ")), c)
		}))
	};
	var Gh = function(a, b) {
		var c = String(b);
		a.Se && (c = c.toLowerCase());
		return c
	};
	var Hh = function() {};
	var Ih = function() {};
	var Jh = function(a) {
		this.Wc = a
	};
	var Kh = function() {
		var a = null;
		try {
			a = window.localStorage || null
		} catch(b) {}
		this.Wc = a
	};
	var Lh = function() {
		var a = null;
		try {
			a = window.sessionStorage || null
		} catch(b) {}
		this.Wc = a
	};
	var Mh = function(a, b) {
		this.HL = a;
		this.Ld = null;
		if (z.C && !(9 <= z.Vg)) {
			Nh || (Nh = new z.Qd);
			this.Ld = Nh.get(a);
			this.Ld || (b ? this.Ld = window.document.getElementById(b) : (this.Ld = window.document.createElement("userdata"), this.Ld.addBehavior("#default#userData"), window.document.body.appendChild(this.Ld)), Nh.set(a, this.Ld));
			try {
				this.Ld.load(this.HL)
			} catch(c) {
				this.Ld = null
			}
		}
	};
	var Oh = function(a) {
		return "_" + (0, window.encodeURIComponent)(a).replace(/[.!~*'()%]/g,
		function(a) {
			return Ph[a]
		})
	};
	var Qh = function(a) {
		try {
			a.Ld.save(a.HL)
		} catch(b) {
			throw "Storage mechanism: Quota exceeded";
		}
	};
	var Rh = function(a) {
		return a.Ld.XMLDocument.documentElement
	};
	var Sh = function(a, b) {
		this.Hp = a;
		this.Sm = b + "::"
	};
	var Th = function(a, b) {
		this.wA = "continuation:" + a;
		this.Wc = b || z.Uh;
		this.BH = []
	};
	var Vh = function(a, b, c, d, f, g) {
		z.oa(a) ? (this.fe = a == Wh ? b: 0, this.Yd = a == Xh ? b: 0, this.Qd = a == Yh ? b: 0, this.Cd = a == Zh ? b: 0, this.Fd = a == $h ? b: 0, this.Jd = a == ai ? b: 0) : (this.fe = a || 0, this.Yd = b || 0, this.Qd = c || 0, this.Cd = d || 0, this.Fd = f || 0, this.Jd = g || 0)
	};
	var bi = function(a, b, c) {
		z.pa(a) ? (this.fa = ci(a, b || 0, c || 1), di(this, c || 1)) : z.sa(a) ? (this.fa = ci(a.getFullYear(), a.getMonth(), a.getDate()), di(this, a.getDate())) : (this.fa = new Date((0, z.H)()), a = this.fa.getDate(), this.fa.setHours(0), this.fa.setMinutes(0), this.fa.setSeconds(0), this.fa.setMilliseconds(0), di(this, a))
	};
	var ci = function(a, b, c) {
		b = new Date(a, b, c);
		0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
		return b
	};
	var ei = function(a) {
		a = a.getTimezoneOffset();
		if (0 == a) a = "Z";
		else {
			var b = Math.abs(a) / 60,
			c = Math.floor(b),
			b = 60 * (b - c);
			a = (0 < a ? "-": "+") + Ya(c, 2) + ":" + Ya(b, 2)
		}
		return a
	};
	var di = function(a, b) {
		a.getDate() != b && a.fa.setUTCHours(a.fa.getUTCHours() + (a.getDate() < b ? 1 : -1))
	};
	var fi = function(a, b, c, d, f, g, h) {
		this.fa = z.pa(a) ? new Date(a, b || 0, c || 1, d || 0, f || 0, g || 0, h || 0) : new Date(a ? a.getTime() : (0, z.H)())
	};
	var gi = function() {};
	var hi = function(a) {
		if ("number" == typeof a) {
			var b = new gi;
			b.Ev = a;
			var c;
			c = a;
			if (0 == c) c = "Etc/GMT";
			else {
				var d = ["Etc/GMT", 0 > c ? "-": "+"];
				c = Math.abs(c);
				d.push(Math.floor(c / 60) % 100);
				c %= 60;
				0 != c && d.push(":", Ya(c, 2));
				c = d.join("")
			}
			b.UC = c;
			c = a;
			0 == c ? c = "UTC": (d = ["UTC", 0 > c ? "+": "-"], c = Math.abs(c), d.push(Math.floor(c / 60) % 100), c %= 60, 0 != c && d.push(":", c), c = d.join(""));
			a = ii(a);
			b.dD = [c, c];
			b.cl = {
				r_: a,
				dE: a
			};
			b.Zv = [];
			return b
		}
		b = new gi;
		b.UC = a.id;
		b.Ev = -a.std_offset;
		b.dD = a.names;
		b.cl = a.names_ext;
		b.Zv = a.transitions;
		return b
	};
	var ii = function(a) {
		var b = ["GMT"];
		b.push(0 >= a ? "+": "-");
		a = Math.abs(a);
		b.push(Ya(Math.floor(a / 60) % 100, 2), ":", Ya(a % 60, 2));
		return b.join("")
	};
	var ji = function(a, b) {
		for (var c = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5, d = 0; d < a.Zv.length && c >= a.Zv[d];) d += 2;
		return 0 == d ? 0 : a.Zv[d - 1]
	};
	var ki = function(a, b) {
		this.Qu = [];
		this.Hb = b || li;
		"number" == typeof a ? mi(this, a) : ni(this, a)
	};
	var ni = function(a, b) {
		for (oi && (b = b.replace(/\u200f/g, "")); b;) for (var c = 0; c < pi.length; ++c) {
			var d = b.match(pi[c]);
			if (d) {
				d = d[0];
				b = b.substring(d.length);
				0 == c && ("''" == d ? d = "'": (d = d.substring(1, d.length - 1), d = d.replace(/\'\'/, "'")));
				a.Qu.push({
					text: d,
					type: c
				});
				break
			}
		}
	};
	var mi = function(a, b) {
		var c;
		if (4 > b) c = a.Hb.YD[b];
		else if (8 > b) c = a.Hb.eE[b - 4];
		else if (12 > b) c = a.Hb.rN[b - 8],
		c = c.replace("{1}", a.Hb.YD[b - 8]),
		c = c.replace("{0}", a.Hb.eE[b - 8]);
		else {
			mi(a, 10);
			return
		}
		ni(a, c)
	};
	var qi = function(a, b) {
		var c;
		c = String(b);
		var d = a.Hb || li;
		if (void 0 !== d.UN) {
			for (var f = [], g = 0; g < c.length; g++) {
				var h = c.charCodeAt(g);
				f.push(48 <= h && 57 >= h ? String.fromCharCode(d.UN + h - 48) : c.charAt(g))
			}
			c = f.join("")
		}
		return c
	};
	var ri = function(a) {
		if (! (a.getHours && a.getSeconds && a.getMinutes)) throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");
	};
	var si = function(a, b, c, d, f, g) {
		var h = b.length;
		switch (b.charAt(0)) {
		case "G":
			return c = 0 < d.getFullYear() ? 1 : 0,
			4 <= h ? a.Hb.tN[c] : a.Hb.uN[c];
		case "y":
			return c = d.getFullYear(),
			0 > c && (c = -c),
			2 == h && (c %= 100),
			qi(a, Ya(c, h));
		case "M":
			a:
			switch (c = d.getMonth(), h) {
			case 5:
				h = a.Hb.xN[c];
				break a;
			case 4:
				h = a.Hb.vN[c];
				break a;
			case 3:
				h = a.Hb.CN[c];
				break a;
			default:
				h = qi(a, Ya(c + 1, h))
			}
			return h;
		case "k":
			return ri(f),
			qi(a, Ya(f.getHours() || 24, h));
		case "S":
			return qi(a, (f.getTime() % 1E3 / 1E3).toFixed(Math.min(3, h)).substr(2) + (3 < h ? Ya(0, h - 3) : ""));
		case "E":
			return c = d.getDay(),
			4 <= h ? a.Hb.TN[c] : a.Hb.EN[c];
		case "a":
			return ri(f),
			h = f.getHours(),
			a.Hb.qN[12 <= h && 24 > h ? 1 : 0];
		case "h":
			return ri(f),
			qi(a, Ya(f.getHours() % 12 || 12, h));
		case "K":
			return ri(f),
			qi(a, Ya(f.getHours() % 12, h));
		case "H":
			return ri(f),
			qi(a, Ya(f.getHours(), h));
		case "c":
			a:
			switch (c = d.getDay(), h) {
			case 5:
				h = a.Hb.IN[c];
				break a;
			case 4:
				h = a.Hb.LN[c];
				break a;
			case 3:
				h = a.Hb.KN[c];
				break a;
			default:
				h = qi(a, Ya(c, 1))
			}
			return h;
		case "L":
			a:
			switch (c = d.getMonth(), h) {
			case 5:
				h = a.Hb.HN[c];
				break a;
			case 4:
				h = a.Hb.GN[c];
				break a;
			case 3:
				h = a.Hb.JN[c];
				break a;
			default:
				h = qi(a, Ya(c + 1, h))
			}
			return h;
		case "Q":
			return c = Math.floor(d.getMonth() / 3),
			4 > h ? a.Hb.DN[c] : a.Hb.yN[c];
		case "d":
			return qi(a, Ya(d.getDate(), h));
		case "m":
			return ri(f),
			qi(a, Ya(f.getMinutes(), h));
		case "s":
			return ri(f),
			qi(a, Ya(f.getSeconds(), h));
		case "v":
			return h = g || hi(c.getTimezoneOffset()),
			h.UC;
		case "V":
			return a = g || hi(c.getTimezoneOffset()),
			2 >= h ? a.UC: 0 < ji(a, c) ? z.ja(a.cl.sN) ? a.cl.sN: a.cl.DST_GENERIC_LOCATION: z.ja(a.cl.dE) ? a.cl.dE: a.cl.STD_GENERIC_LOCATION;
		case "w":
			return c = a.Hb.aE,
			f = new Date(f.getFullYear(), f.getMonth(), f.getDate()),
			b = a.Hb.$D || 0,
			c = f.valueOf() + 864E5 * (((z.ja(c) ? c: 3) - b + 7) % 7 - ((f.getDay() + 6) % 7 - b + 7) % 7),
			qi(a, Ya(Math.floor(Math.round((c - (new Date((new Date(c)).getFullYear(), 0, 1)).valueOf()) / 864E5) / 7) + 1, h));
		case "z":
			return a = g || hi(c.getTimezoneOffset()),
			4 > h ? a.dD[0 < ji(a, c) ? 2 : 0] : a.dD[0 < ji(a, c) ? 3 : 1];
		case "Z":
			return f = g || hi(c.getTimezoneOffset()),
			4 > h ? (h = -(f.Ev - ji(f, c)), a = [0 > h ? "-": "+"], h = Math.abs(h), a.push(Ya(Math.floor(h / 60) % 100, 2), Ya(h % 60, 2)), h = a.join("")) : h = qi(a, ii(f.Ev - ji(f, c))),
			h;
		default:
			return ""
		}
	};
	var ti = function(a) {
		var b;
		if ("string" === typeof a) {
			b = new fi(2E3);
			a = (0, z.ab)(a);
			a = a.split( - 1 == a.indexOf("T") ? " ": "T");
			var c;
			var d = a[0].match(vi);
			if (d) {
				var f = Number(d[2]),
				g = Number(d[3]),
				h = Number(d[4]);
				c = Number(d[5]);
				var k = Number(d[6]) || 1;
				b.setFullYear(Number(d[1]));
				h ? (b.setDate(1), b.setMonth(0), b.add(new Vh(Yh, h - 1))) : c ? (b.setMonth(0), b.setDate(1), d = b.getDay() || 7, b.add(new Vh(Yh, (4 >= d ? 1 - d: 8 - d) + (Number(k) + 7 * (Number(c) - 1)) - 1))) : (f && (b.setDate(1), b.setMonth(f - 1)), g && b.setDate(g));
				c = !0
			} else c = !1;
			c && !(c = 2 > a.length) && (a = a[1], c = a.match(wi), k = 0, c && ("Z" != c[0] && (k = 60 * c[2] + Number(c[3]), k *= "-" == c[1] ? 1 : -1), k -= b.getTimezoneOffset(), a = a.substr(0, a.length - c[0].length)), (c = a.match(xi)) ? (b.setHours(Number(c[1])), b.setMinutes(Number(c[2]) || 0), b.setSeconds(Number(c[3]) || 0), b.setMilliseconds(c[4] ? 1E3 * c[4] : 0), 0 != k && b.setTime(b.getTime() + 6E4 * k), c = !0) : c = !1);
			b = (c ? b: null).fa
		} else b = new Date(a);
		return b
	};
	z.yi = function(a, b) {
		a = void 0 === a ? new Date: a;
		b = void 0 === b ? new Date: b;
		a = ti(a);
		b = ti(b);
		var c = (b - a) / 1E3;
		if (60 > c) return "刚刚";
		c = (0, window.parseInt)(c / 60);
		if (60 > c) return c + " 分钟前";
		c = (0, window.parseInt)(c / 60);
		if (24 > c) return c + " 小时前";
		var c = b.getFullYear() - a.getFullYear(),
		d = b.getMonth() - a.getMonth(),
		f = b.getDate() - a.getDate();
		return 0 === c && 0 === d ? f + " 天前": 0 === c && 1 === d || 1 === c && -11 === d ? 0 > f ? (new Date(a.getFullYear(), a.getMonth() + 1, 0)).getDate() + f + " 天前": "1 月前": 2 > c ? 1 === c && 0 <= d ? "1 年前": 12 * c + d + " 月前": c + " 年前"
	};
	z.zi = function(a, b) {
		return (new ki(void 0 === b ? "yyyy-MM-dd HH:mm:ss": b)).format(new Date(a))
	};
	z.Ai = function(a) {
		if (window.za.collect && z.sa(a) && a.action) {
			var b = {
				eventAction: a.action,
				eventCategory: a.category,
				eventLabel: a.label,
				eventValue: a.value && (0, window.parseInt)(a.value, 10),
				eventAttributes: a.attributes,
				nonInteractionType: !!a.AJ
			};
			a.Vc ? Bi.iq(b) : window.za.collect("event", b)
		}
	};
	z.Ci = function(a, b, c, d, f) {
		z.Ai({
			category: a,
			action: b,
			label: c,
			value: d,
			AJ: f,
			attributes: void 0
		})
	};
	z.Di = function(a, b, c, d, f) {
		z.Ai({
			Vc: !0,
			category: a,
			action: b,
			label: c,
			value: d,
			AJ: f,
			attributes: void 0
		})
	};
	var Ei = function() { (0, window.$)(window.document).on("click", "a[data-za-a]",
		function(a) {
			var b = (0, window.$)(a.target);
			if (a = b.data("za-a")) {
				var c = b.data("za-c"),
				d = b.data("za-l"),
				b = b.data("za-v");
				z.Di(c, a, d, b)
			}
		})
	};
	var Fi = function(a) {
		return function(b) {
			for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
			if (!window.zap) Gi.push({
				fn: a,
				IO: c
			});
			else if (window.zap.SUPPORTED) try {
				a.apply(null, [].concat(z.ia(c)))
			} catch(f) {
				window.console && window.console.error(f)
			}
		}
	};
	var Hi = function(a) {
		a = (0, window.$)(a && a.m ? a.m() : a);
		var b = [],
		c = [];
		a.add(a.parents()).filter("[data-za-module]").get().reverse().forEach(function(a) {
			var f = a.getAttribute("data-za-module");
			if (f) {
				var g = a.getAttribute("data-za-index");
				"" === g && (g = (0, window.$)(a).siblings("[data-za-index]").andSelf().index(a));
				b.push({
					module: f,
					index: g
				});
				a = (0, window.$.data)(a, "zaRespondMoudleFn");
				c.push("function" === typeof a && a() || {})
			}
		});
		return {
			path: b,
			module: c
		}
	};
	var Ii = function() {
		try {
			return "1" === window.localStorage.getItem("zap:logenabled")
		} catch(a) {
			return ! 1
		}
	};
	z.S = function(a, b, c, d, f) {
		"feed" === a && z.Wa(window.location.href, "topstory") && (a = "topstory");
		var g = (0, window.$)("#zh-question-list");
		"feed" === a && g.length && "topstory" === g.attr("data-feedtype") && (a = "topstory");
		Ji.track(a, b, c, d, !!f);
		z.Ci(a, b, c, d, !!f);
		z.Ki && window.console && window.console.log("trackEvent(new)", z.vb(arguments))
	};
	var Li = function() {
		Mi.forEach(window.clearTimeout);
		Mi = []
	};
	z.Ni = function() { (0, window.$)("#js-openInApp").on("click",
		function() {
			z.Oi();
			z.S("app-promotion", "click_zhihu_ios_open_dl_link", "header_not_logged_in")
		});
		var a = z.Dh(window.location),
		b = a.af;
		"/openinapp_instruction" === b ? (0, window.$)(".openinapp-instruction-page").data("open") && (a = a.Vd(), a.hb() && Pi(a.get("app-argument"), !0)) : Qi.test(b) && Pi(b.substring(1), !0)
	};
	z.Oi = function() {
		var a = !z.gh && !Ri,
		b = function() {
			var a = (0, window.$)('meta[name\x3d"apple-itunes-app"]').attr("content");
			return a && a.replace(/,\s*/, "\x26")
		} ();
		if (b) {
			var c = new z.Ah(b);
			a ? (0, window.setTimeout)(function() {
				Pi(c.get("app-argument"))
			}) : (c.add("origin", window.location.href), window.location.href = "/openinapp_instruction?" + c.toString())
		}
	};
	var Pi = function(a, b) {
		if (a) if ( - 1 === a.indexOf("zhihu://") && (a = "zhihu://" + a), Si) Ti(a);
		else if (window.location.href = a, z.Ui) {
			var c = !1;
			window.setTimeout(function() {
				c = !0;
				window.location.href = "https://itunes.apple.com/app/apple-store/id432274380?pt\x3d550679\x26mt\x3d8\x26ct\x3dtop_right_corner"
			},
			1E3);
			b || window.setTimeout(function() {
				c && window.location.reload()
			},
			2E3)
		}
	};
	var Ti = function(a) {
		var b = a.replace(/^zhihu/, "intent") + "/#Intent;scheme\x3dzhihu;package\x3dcom.zhihu.android;end",
		c = window.navigator.userAgent.match(/Chrome\/(\d+)/);
		25 <= (c && c[1]) ? (Mi.push(window.setTimeout(function() {
			window.location = "/app/"
		},
		1E3)), window.location = b) : Vi(a)
	};
	var Vi = function(a) {
		var b = window.document.createElement("iframe");
		b.hidden = !0;
		b.src = a;
		window.document.body.appendChild(b);
		var c = (0, z.H)();
		window.setTimeout(function() {
			600 > (0, z.H)() - c && (window.location = Wi.H_)
		},
		400)
	};
	z.Xi = function(a) {
		this.Qa = a
	};
	z.Yi = function(a) {
		a = (a.Qa.cookie || "").split(Zi);
		for (var b = [], c = [], d, f, g = 0; f = a[g]; g++) d = f.indexOf("\x3d"),
		-1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)));
		return {
			keys: b,
			values: c
		}
	};
	var $i = function() {
		z.aj.remove("actioncontinuationhash", "/")
	};
	z.bj = function(a, b) {
		b ? a.setAttribute("role", b) : a.removeAttribute("role")
	};
	z.cj = function(a, b, c) {
		z.ma(c) && (c = c.join(" "));
		var d = "aria-" + b;
		"" === c || void 0 == c ? (dj || (dj = {
			atomic: !1,
			autocomplete: "none",
			dropeffect: "none",
			haspopup: !1,
			live: "off",
			multiline: !1,
			multiselectable: !1,
			orientation: "vertical",
			readonly: !1,
			relevant: "additions text",
			required: !1,
			sort: "none",
			busy: !1,
			disabled: !1,
			hidden: !1,
			invalid: "false"
		}), c = dj, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
	};
	z.ej = function(a, b) {
		var c = a.getAttribute("aria-" + b);
		return null == c || void 0 == c ? "": String(c)
	};
	z.fj = function(a) {
		if (a.classList) return a.classList;
		a = a.className;
		return z.oa(a) && a.match(/\S+/g) || []
	};
	z.gj = function(a, b) {
		return a.classList ? a.classList.contains(b) : z.rb(z.fj(a), b)
	};
	z.hj = function(a, b) {
		a.classList ? a.classList.add(b) : z.gj(a, b) || (a.className += 0 < a.className.length ? " " + b: b)
	};
	z.ij = function(a, b) {
		if (a.classList) z.A(b,
		function(b) {
			z.hj(a, b)
		});
		else {
			var c = {};
			z.A(z.fj(a),
			function(a) {
				c[a] = !0
			});
			z.A(b,
			function(a) {
				c[a] = !0
			});
			a.className = "";
			for (var d in c) a.className += 0 < a.className.length ? " " + d: d
		}
	};
	z.jj = function(a, b) {
		a.classList ? a.classList.remove(b) : z.gj(a, b) && (a.className = z.lb(z.fj(a),
		function(a) {
			return a != b
		}).join(" "))
	};
	z.kj = function(a, b) {
		a.classList ? z.A(b,
		function(b) {
			z.jj(a, b)
		}) : a.className = z.lb(z.fj(a),
		function(a) {
			return ! z.rb(b, a)
		}).join(" ")
	};
	z.lj = function(a) {
		if (z.B) a = mj(a);
		else if (z.Uc && z.D) a: switch (a) {
		case 93:
			a = 91;
			break a
		}
		return a
	};
	var mj = function(a) {
		switch (a) {
		case 61:
			return 187;
		case 59:
			return 186;
		case 173:
			return 189;
		case 224:
			return 91;
		case 0:
			return 224;
		default:
			return a
		}
	};
	z.nj = function(a) {
		var b = a.offsetLeft,
		c = a.offsetParent;
		c || "fixed" != z.Ag(a) || (c = z.Ke(a).documentElement);
		if (!c) return b;
		if (z.B) var d = z.Ug(c),
		b = b + d.left;
		else 8 <= z.Vg && !(9 <= z.Vg) && (d = z.Ug(c), b -= d.left);
		return z.Og(c) ? c.clientWidth - (b + a.offsetWidth) : b
	};
	z.oj = function(a, b, c) {
		z.G.call(this);
		this.target = a;
		this.handle = b || a;
		this.iu = c || new z.sg(window.NaN, window.NaN, window.NaN, window.NaN);
		this.Qa = z.Ke(a);
		this.U = new z.xd(this);
		z.Ac(this, this.U);
		this.deltaY = this.deltaX = this.Iv = this.Hv = this.screenY = this.screenX = this.clientY = this.clientX = 0;
		this.lc = !0;
		this.Lj = !1;
		this.tK = !0;
		this.Hz = 0;
		this.mj = this.US = !1;
		z.F(this.handle, ["touchstart", "mousedown"], this.mn, !1, this)
	};
	var pj = function(a) {
		z.ja(a.Jg) || (a.Jg = z.Og(a.target));
		return a.Jg
	};
	var qj = function(a, b, c) {
		var d = z.xf(z.Ie(a.Qa));
		b += d.x - a.wB.x;
		c += d.y - a.wB.y;
		a.wB = d;
		a.deltaX += b;
		a.deltaY += c;
		return new z.Ge(rj(a, a.deltaX), sj(a, a.deltaY))
	};
	var tj = function(a, b, c, d) {
		a.dy(c, d);
		a.dispatchEvent(new uj("drag", a, b.clientX, b.clientY, b, c, d))
	};
	var rj = function(a, b) {
		var c = a.iu,
		d = (0, window.isNaN)(c.left) ? null: c.left,
		c = (0, window.isNaN)(c.width) ? 0 : c.width;
		return Math.min(null != d ? d + c: window.Infinity, Math.max(null != d ? d: -window.Infinity, b))
	};
	var sj = function(a, b) {
		var c = a.iu,
		d = (0, window.isNaN)(c.top) ? null: c.top,
		c = (0, window.isNaN)(c.height) ? 0 : c.height;
		return Math.min(null != d ? d + c: window.Infinity, Math.max(null != d ? d: -window.Infinity, b))
	};
	var uj = function(a, b, c, d, f, g, h) {
		z.Lc.call(this, a);
		this.clientX = c;
		this.clientY = d;
		this.WE = f;
		this.left = z.ja(g) ? g: b.deltaX;
		this.top = z.ja(h) ? h: b.deltaY;
		this.Is = b
	};
	z.vj = function(a) {
		z.G.call(this);
		this.h = a;
		a = z.C ? "focusout": "blur";
		this.cU = z.F(this.h, z.C ? "focusin": "focus", this, !z.C);
		this.dU = z.F(this.h, a, this, !z.C)
	};
	var wj = function(a, b) {
		this.h = a;
		this.ba = b
	};
	var xj = function(a, b) {
		z.Q.call(this, b);
		this.lZ = !!a;
		this.Dm = null
	};
	var yj = function(a) {
		a.ef || (a.ef = a.K().createElement("SPAN"), z.P(a.ef, !1), z.pf(a.ef, !0), a.ef.style.position = "absolute")
	};
	var zj = function(a, b) {
		a.nJ || (a.nJ = new wj(a.h, a.ba));
		var c = a.nJ;
		if (b) {
			c.rm || (c.rm = []);
			for (var d = c.ba.UQ(c.ba.ua().body), f = 0; f < d.length; f++) {
				var g = d[f];
				g == c.h || z.ej(g, "hidden") || (z.cj(g, "hidden", !0), c.rm.push(g))
			}
		} else if (c.rm) {
			for (f = 0; f < c.rm.length; f++) c.rm[f].removeAttribute("aria-hidden");
			c.rm = null
		}
	};
	var Aj = function(a, b) {
		a.Kc && z.P(a.Kc, b);
		a.Zc && z.P(a.Zc, b);
		z.P(a.m(), b);
		z.P(a.ef, b)
	};
	z.Bj = function(a, b, c) {
		xj.call(this, b, c);
		this.bd = a || "modal-dialog";
		this.yc = z.Cj()
	};
	z.Dj = function(a) {
		a.m() || a.render()
	};
	var Ej = function(a) {
		z.Dj(a);
		return a.pd
	};
	var Fj = function(a, b) {
		a.Wr = b;
		if (a.m()) {
			var c = a.Xj();
			c && z.Lg(c, a.Wr)
		}
	};
	var Gj = function(a, b) {
		a.Gm = b;
		if (a.wa) {
			var c = a.K(),
			d = a.Xj(),
			f = a.Kc;
			b ? (f && c.Qt(f, a.m()), c.Qt(d, a.m())) : (c.removeNode(f), c.removeNode(d))
		}
		a.W() && zj(a, b)
	};
	var Hj = function(a, b) {
		var c = (0, z.ab)(a.bd + "-title-draggable").split(" ");
		a.m() && (b ? z.ij(a.Xc, c) : z.kj(a.Xc, c));
		b && !a.Pb ? (a.Pb = new z.oj(a.m(), a.Xc), z.ij(a.Xc, c), z.F(a.Pb, "start", a.SX, !1, a)) : !b && a.Pb && (a.Pb.dispose(), a.Pb = null)
	};
	var Ij = function(a) {
		if (a.Gz) {
			var b = a.yc,
			c = b && b.Dx;
			c ? (b = b.get(c), a.dispatchEvent(new Jj(c, b)) && a.F(!1)) : a.F(!1)
		}
	};
	z.Kj = function(a, b) {
		a.yc = b;
		if (a.xc) {
			if (a.yc) {
				var c = a.yc;
				c.h = a.xc;
				c.render()
			} else z.Fe(a.xc, Lj);
			z.P(a.xc, !!a.yc)
		}
	};
	var Jj = function(a, b) {
		this.type = z.Mj;
		this.key = a;
		this.caption = b
	};
	z.Nj = function(a) {
		this.ba = a || z.Ie();
		z.Qd.call(this)
	};
	z.Cj = function() {
		return (new z.Nj).Nd(Oj.Wg, !0).Nd(Oj.jf, !1, !0)
	};
	z.Pj = function(a) {
		var b = !1,
		c;
		return function() {
			if (b) return c;
			b = !0;
			return c = a.apply(this, arguments)
		}
	};
	z.T = function(a) {
		z.Bj.call(this, a);
		this.yc = null;
		Qj(this)
	};
	var Qj = function(a) {
		var b = window.document.documentElement;
		a.o().g(a, "beforeshow",
		function() {
			this.Gm && (window.document.body.clientWidth < window.innerWidth && z.U.add(b, "modal-doc-overflow"), this.py = !1, Hj(this, !1), z.U.add(b, "modal-open"), this.Ck || ((0, window.$)(this.m()).wrap('\x3cdiv class\x3d"modal-wrapper"\x3e'), this.Ck = this.m().parentNode), this.EG && z.U.add(this.m(), "centered"), this.Ck.removeAttribute("hidden"))
		}).g(a, "hide",
		function() {
			this.Gm && (1 === (0, window.$)(".modal-wrapper:visible").length && (z.U.remove(b, "modal-open"), z.U.remove(b, "modal-doc-overflow")), this.Ck && this.Ck.setAttribute("hidden", ""))
		});
		z.Bc(a,
		function() {
			this.Ck && (z.N(this.Ck), this.Ck = null)
		},
		a);
		a.uT()
	};
	z.Rj = function(a) {
		a.vl && a.o().g(a.Zc || a.Kc, "click",
		function() {
			this.vl && this.F(!1)
		})
	};
	z.Sj = function(a, b) {
		a.h && a.wa && z.pa(b) && (!z.Tj || z.Uj) && (a.h.style.width = z.Cg(b, !0), a.MM = b);
		z.oa(b) && (a.h.style.width = b)
	};
	z.V = function(a, b) {
		b = void 0 === b ? z.r: b;
		var c = new z.T,
		d = ["yes", "ok"],
		f = Object.assign({
			open: !0,
			modal: !1,
			title: "消息",
			content: "",
			className: "",
			disposeOnHide: !0,
			buttons: {
				yes: "确认",
				cancel: "取消"
			}
		},
		a); (function(a, b) {
			b = void 0 === b ? {}: b;
			for (var c = Object.entries(Eb(b)).sort(function(a, b) {
				var c = z.ha(a).next().value,
				f = z.ha(b).next().value;
				return d.indexOf(c) - d.indexOf(f)
			}), f = new z.Nj, p = z.ha(c), q = p.next(); ! q.done; q = p.next()) {
				var v = z.ha(q.value),
				q = v.next().value,
				v = v.next().value;
				f.set(q, v, -1 !== d.indexOf(q))
			}
			z.Kj(a, f);
			z.U.enable(a.pg(), "with-button", !!c.length)
		})(c, f.buttons);
		c.g(z.Mj,
		function(a) {
			return b.call(c, -1 !== d.indexOf(a.key))
		});
		z.U.add(c.pg(), f.className);
		c.Fa(f.title);
		c.Dq(f.modal);
		c.ca(f.content);
		c.F(f.open);
		c.Ae(f.disposeOnHide);
		f.ga && c.ga();
		return c
	};
	var Vj = function(a) {
		var b = null;
		return function(c) {
			for (var d = [], f = 0; f < arguments.length; ++f) d[f - 0] = arguments[f];
			b && !b.Rd && b.dispose();
			return b = a.apply(null, [].concat(z.ia(d)))
		}
	};
	z.Wj = function() {
		z.G.call(this)
	};
	var Xj = function() {
		z.G.call(this);
		this.last = 0
	};
	z.Yj = function(a, b) {
		this.type = a;
		this.Pf = b
	};
	z.Zj = function(a) {
		var b = {
			qq: "/oauth/redirect/login/qqconn?next\x3d",
			sina: "/oauth/redirect/login/sina?next\x3d",
			wechat: z.gh ? "/oauth/redirect/login/wechat_mp?next\x3d": "/oauth/redirect/login/wechat?next\x3d"
		} [a];
		ak || z.gh || "sina" === a ? window.location.href = b + "/oauth/account_callback\x26from\x3d" + (0, window.encodeURIComponent)(z.be(window.location.href, "next") || window.location.pathname) : window.open(b + "/oauth/account_callback", "_blank", "top\x3d200,left\x3d400,width\x3d600,height\x3d550,directories\x3dno,menubar\x3dno,toolbar\x3dno")
	};
	z.bk = function(a, b) {
		a.g(z.W, "accountcallback", b)
	};
	z.ck = function(a) {
		z.Q.call(this);
		this.wb = a;
		this.jD = "antispam" === a ? "/antispam/captcha": "/captcha.gif";
		this.QA = 8
	};
	var dk = function(a) {
		var b = [],
		c = a.QA; (0, window.$)(".Captcha-mark", a.J).each(function(a, f) {
			var g = (0, window.$)(f);
			b.push([(0, window.parseFloat)(g.css("left")) + c, (0, window.parseFloat)(g.css("top")) + c])
		});
		a.HG.input_points = b;
		b.length ? a.sj.val(JSON.stringify(a.HG)) : a.sj.val("")
	};
	var ek = function(a) {
		a.vn && (a.HG = {
			img_size: [a.il.width(), a.il.height()]
		},
		a.sj.val(""), fk(a), (0, window.$)(".Captcha-mark", a.J).remove())
	};
	var fk = function(a) {
		a.eN.removeClass("is-hidden");
		a.sj.next(".error").remove()
	};
	z.gk = function(a) {
		"1" !== z.aj.get("login" === a.wb ? "l_n_c": "n_c") ? a.sj.attr("name", "").addClass("is-ignoreValidation") : (a.sj.attr("name", "captcha").removeClass("is-ignoreValidation"), a.fv(), a.xL && (a.il.load(function() {
			return a.J.slideDown(300)
		}), a.trackEvent("show", "Image")))
	};
	z.hk = function(a) {
		var b = ik;
		return function() {
			var c = this || z.u,
			c = c[jk] || (c[jk] = {}),
			d = b(z.ta(a), arguments);
			return c.hasOwnProperty(d) ? c[d] : c[d] = a.apply(this, arguments)
		}
	};
	var ik = function(a, b) {
		for (var c = [a], d = b.length - 1; 0 <= d; --d) c.push(typeof b[d], b[d]);
		return c.join("\x0B")
	};
	var kk = function(a, b, c) {
		z.G.call(this);
		this.J = (0, window.$)(a);
		this.NY = b;
		this.duration = c
	};
	z.lk = function(a) {
		z.T.call(this, "mutiview-dialog");
		this.ME = [];
		this.sK = [];
		this.rK = [];
		this.ZV = a;
		this.Ae(!0);
		this.BW = !0
	};
	var mk = function(a, b) {
		var c = (0, window.$)(a.Xj()),
		d = (0, window.$)(b.Xj()),
		f = c.clone();
		f.appendTo("body");
		c.css("visibility", "hidden");
		d.css("visibility", "hidden");
		b.o().g(b, nk,
		function() {
			f.remove();
			d.css("visibility", "visible")
		});
		a.BW && a.Gi() && b.Fb(a.Gi());
		a.F(!1);
		a.o().g(a, z.ok,
		function() {
			b.F(!0)
		})
	};
	var pk = function(a, b, c, d) {
		var f = a.pj,
		g = a.gl;
		c = c || f.next(".view");
		d = d || g.next(".title");
		c.length && d.length && (qk(a), c.css("visibility", "visible").removeClass("right"), d.css("visibility", "visible").removeClass("right"), f.addClass("left").onTransitionEnd(function() {
			f.css("visibility", "hidden")
		},
		300), g.addClass("left").onTransitionEnd(function() {
			g.css("visibility", "hidden")
		},
		300), a.pj = c, a.gl = d, a.sK.push(f), a.rK.push(g), a.ME.push(a.nr.hasClass("show")), rk(a, b), a.Lu())
	};
	var rk = function(a, b) {
		var c = a.nr;
		b !== a.nr.hasClass("show") && (b ? c.css("visibility", "visible").addClass("show") : window.Modernizr.csstransitions ? c.onTransitionEnd(function() {
			c.css("visibility", "hidden")
		},
		300).removeClass("show") : c.css("visibility", "hidden"))
	};
	var qk = function(a) {
		var b = a.Yc;
		b.addClass("transition").height(b.outerHeight()); (0, window.setTimeout)(function() {
			b.height(a.pj.outerHeight()).onTransitionEnd(function() {
				return b.removeClass("transition").css("height", "")
			},
			300)
		},
		17)
	};
	z.sk = function(a, b, c, d, f) {
		function g() {
			var a = b - q;
			0 < a ? (k.text(z.Ja(c(!0, p), a)), q += 1) : h(a)
		}
		function h(a) {
			a = void 0 === a ? b - q: a;
			l.stop();
			p += 1;
			k.text(z.Ja(c(!1, p), a));
			k.removeClass("disabled");
			q = 0
		}
		f = void 0 === f ? !1 : f;
		var k = (0, window.$)(a),
		l = new z.td(1E3),
		p = 0,
		q = 0;
		k.click(function(a) {
			l.enabled || d && !1 === d.call(this, a) || (l.start(), g(), k.addClass("disabled"))
		});
		l.addEventListener("tick", g, !1);
		f && (g(), k.addClass("disabled"));
		l.cancel = h;
		return l
	};
	z.tk = function(a, b) {
		var c = (0, window.$)(a);
		return function() {
			if (!c.hasClass("btn-pending")) {
				var a = b.apply(this, arguments),
				f = function() {
					c.removeClass("btn-pending")
				};
				a && a.then && (c.addClass("btn-pending"), a.then(f, f))
			}
			return ! 1
		}
	};
	z.uk = function(a, b) {
		a && (this.input = a, "string" === typeof b && (b = {
			text: b
		}), z.Mb(this.H = {},
		this.defaults, b || {}), this.qh = null, vk(this))
	};
	var vk = function(a) {
		var b = a.input,
		c = a.H;
		c.text || (c.text = b.getAttribute("placeholder"));
		if (z.wk) a.Uk(c.text);
		else {
			var d = a.label = xk(a);
			a.Uk(c.text);
			a.offsetParent().appendChild(d);
			var f = a.qh = new z.xd(a);
			f.g(b, "blur", a.check);
			f.g(b, "focus", a.hide);
			c.KE && f.g(b, "keydown", a.hide);
			f.g(d, "click",
			function() {
				this.hide();
				z.Mg(b) && b.focus()
			});
			b.h0 = (0, z.t)(a.check, a);
			yk(a);
			a.position();
			a.check()
		}
	};
	var zk = function(a) {
		if (function(a) {
			return "labels" in a ? a.labels.length: a.id && z.ob(window.document.getElementsByTagName("label"),
			function(c) {
				return c.htmlFor === a.id
			})
		} (a) || z.ej(a, "label") || z.ej(a, "labelledby")) return ! 0
	};
	var Ak = function(a, b) {
		return z.xg(a, b) || z.yg(a, b) || a.style[b]
	};
	var xk = function(a) {
		var b = a.input,
		c = z.Ug(b),
		d = z.M("label"),
		f = z.Eg(b, a.offsetParent());
		z.tg(d, {
			color: "gray",
			cursor: "text",
			position: "absolute",
			left: f.x + c.left + "px",
			top: f.y + c.top + "px",
			display: a.vh() ? "block": "none",
			width: Ak(b, "width"),
			fontSize: Ak(b, "fontSize"),
			lineHeight: Ak(b, "lineHeight"),
			fontFamily: Ak(b, "fontFamily")
		});
		return d
	};
	var yk = function(a) {
		var b = a.input;
		a = a.label;
		zk(b) || (b.id ? a.htmlFor = b.id: (a.id = z.Yg(z.Xg.aa()), z.cj(b, "labelledby", a.id)))
	};
	z.Bk = function(a) {
		z.lk.call(this, "SignFlow " + (void 0 === a ? "": a))
	};
	z.Ck = function(a) {
		a = void 0 === a ? {}: a;
		z.Bk.call(this);
		this.options = a
	};
	var Dk = function(a) {
		a.Mt((0, window.$)(".send-code", a.h),
		function() {
			window.$.post("/send_login_two_step_verification_code/sms", {
				phone_num: a.options.data.phone_num
			},
			function(b) {
				b.r && a.showErrors(b.data)
			})
		}).start()
	};
	z.Ek = function(a) {
		z.Bk.call(this, "unable-login");
		this.ix = a
	};
	var Fk = function(a) {
		a.PD = (0, window.$)(".view.start", a.Yc);
		z.Gk ? (z.gk(a.lv), pk(a, !1, a.yw, a.MD)) : ((0, window.$)("button.reset-password", a.PD).click(function() {
			z.gk(a.lv);
			pk(a, !0, a.yw, a.MD);
			z.X.trackEvent(this, {
				action: "Click",
				element: "Button",
				element_name: "ResetPassword"
			})
		}), (0, window.$)("button.sms-login", a.PD).click(function() {
			z.gk(a.Kw);
			pk(a, !0, a.kw, a.VM);
			z.X.trackEvent(this, {
				action: "Click",
				element: "Button",
				element_name: "SMSSignIn"
			})
		}))
	};
	var Hk = function(a) {
		a.yw = (0, window.$)(".view.reset-password-verification", a.Yc);
		a.MD = (0, window.$)(".title.reset-password-verification", a.hf);
		var b = (0, window.$)("form", a.yw);
		a.Te(b, a.wV,
		function(a, c) {
			z.X.trackEvent(b, {
				action: "StatusReport"
			},
			{
				status: {
					result: "Fail",
					error_msg: window.$.map(c.errorList,
					function(a) {
						return a.element.name + ":" + a.message
					}),
					event: {
						action: "GetCaptcha",
						element: "Button"
					}
				}
			})
		});
		a.Jm(function() {
			z.X.trackEvent(b, {
				action: "GetCaptcha",
				element: "Button"
			})
		},
		b);
		a.ix && (0, window.$)('input[name\x3d"account"]', b).val(a.ix);
		var c = (0, window.$)(".captcha-module", b).get(0);
		a.lv = new z.ck;
		a.lv.w(c)
	};
	var Ik = function(a) {
		a.xr = (0, window.$)(".view.reset-password", a.Yc);
		a.jN = (0, window.$)(".title.reset-password", a.hf);
		var b = (0, window.$)("form", a.xr);
		a.Te(b, a.xV,
		function(a, c) {
			z.X.trackEvent(b, {
				action: "StatusReport"
			},
			{
				status: {
					result: "Fail",
					error_msg: window.$.map(c.errorList,
					function(a) {
						return a.element.name + ":" + a.message
					}),
					event: {
						action: "ResetPassword",
						element: "Button"
					}
				}
			})
		});
		a.Jm(function() {
			z.X.trackEvent(b, {
				action: "ResetPassword",
				element: "Button"
			})
		},
		b);
		a.Nt(b);
		var c = (0, window.$)('input[name\x3d"account"]', b),
		d = (0, window.$)('input[name\x3d"verification_code"]', b),
		f = (0, window.$)(".send-code", b);
		a.kX = a.Mt(f,
		function() {
			var a = c.val(),
			f,
			k;
			this.Hf(a) ? (f = "/send_login_verification_code/email", a = {
				email: a
			},
			k = "邮箱收到的 6 位数验证码") : (f = "/send_login_verification_code/sms", a = {
				phone_num: a
			},
			k = "手机收到的 6 位数验证码");
			window.$.get(f, a,
			function(a) {
				a.r && b.data("validator").showErrors(a.data)
			});
			d.val("").attr("placeholder", k)
		})
	};
	var Jk = function(a) {
		a.kw = (0, window.$)(".view.sms-login-verification", a.Yc);
		a.VM = (0, window.$)(".title.sms-login-verification", a.hf);
		var b = (0, window.$)("form", a.kw);
		a.Te(b, a.yV,
		function(a, c) {
			z.X.trackEvent(b, {
				action: "StatusReport"
			},
			{
				status: {
					result: "Fail",
					error_msg: window.$.map(c.errorList,
					function(a) {
						return a.element.name + ":" + a.message
					}),
					event: {
						action: "GetCaptcha",
						element: "Button"
					}
				}
			})
		});
		a.Jm(function() {
			z.X.trackEvent(b, {
				action: "GetCaptcha",
				element: "Button"
			})
		},
		b); (0, window.$)('input[name\x3d"phone_num"]', b).val(a.ix);
		var c = (0, window.$)(".captcha-module", a.kw).get(0);
		a.Kw = new z.ck;
		a.Kw.w(c)
	};
	var Kk = function(a) {
		a.lw = (0, window.$)(".view.sms-login", a.Yc);
		a.UM = (0, window.$)(".title.sms-login", a.hf);
		var b = (0, window.$)("form", a.lw);
		a.Te(b, a.zV,
		function(a, c) {
			z.X.trackEvent(b, {
				action: "StatusReport"
			},
			{
				status: {
					result: "Fail",
					error_msg: window.$.map(c.errorList,
					function(a) {
						return a.element.name + ":" + a.message
					}),
					event: {
						action: "SignIn",
						element: "Button"
					}
				}
			})
		});
		a.Jm(function() {
			z.X.trackEvent(b, {
				action: "SignIn",
				element: "Button"
			})
		},
		b);
		var c = (0, window.$)('input[name\x3d"phone_num"]', b),
		d = (0, window.$)(".send-code", b);
		a.FN = a.Mt(d,
		function() {
			var a = this;
			window.$.get("/send_login_verification_code/sms", {
				phone_num: c.val()
			},
			function(c) {
				c.r && (c = c.data, a.Db(c, "account", "phone_num"), b.data("validator").showErrors(c))
			})
		})
	};
	z.Lk = function(a) {
		z.Bk.call(this, "oauth-register");
		this.Vf = a
	};
	var Mk = function(a) {
		a.he = (0, window.$)(".view.register", a.Yc);
		a.hN = (0, window.$)(".title.register", a.hf);
		var b = (0, window.$)("form", a.he);
		a.Te(b, a.Zp);
		var c = a.Vf.type;
		"wechat" !== c && "wechat_mp" !== c || (0, window.$)(".js-name", b).val(a.Vf.fullname); (b = (new z.th(window.location)).Vd().get("next")) && (0, window.$)(".switch-to-login", a.he).attr("href", "/signin?next\x3d" + b);
		b = (0, window.$)(".captcha-module", a.he).get(0);
		a.captcha = new z.ck;
		a.captcha.w(b);
		z.gk(a.captcha)
	};
	var Nk = function(a) {
		a.mw = (0, window.$)(".view.bind-login", a.Yc);
		a.WM = (0, window.$)(".title.bind-login", a.hf);
		var b = (0, window.$)("form", a.mw);
		a.Te(b, a.PU);
		a.Nt(b); (0, window.$)("input.account", b).val(a.Vf.account); (0, window.$)("button.unable-login", a.mw).click(function() {
			var b = new z.Ek;
			mk(a, b)
		})
	};
	var Ok = function(a) {
		a.ow = (0, window.$)(".view.bound", a.Yc);
		a.XM = (0, window.$)(".title.bound", a.hf);
		var b = {
			sina: "微博",
			qqconn: " QQ ",
			wechat: "微信",
			wechat_mp: "微信"
		} [a.Vf.type],
		c = z.Ja("该%s曾绑定过以下知乎帐号", b),
		b = z.Ja("不绑定，用%s创建新帐号", b); (0, window.$)("h2", a.XM).text(c); (0, window.$)(".name", a.ow).text(a.Vf.fullname); (0, window.$)("img", a.ow).attr("src", a.Vf.avatar_path); (0, window.$)("button.register", a.ow).text(b)
	};
	var Pk = function(a) {
		a.LD = (0, window.$)(".view.registered", a.Yc);
		a.iN = (0, window.$)(".title.registered", a.hf);
		var b = z.Ja("%s 已注册至如下帐号", a.Vf.account); (0, window.$)("h2", a.iN).text(b); (0, window.$)(".name", a.LD).text(a.Vf.fullname); (0, window.$)("img", a.LD).attr("src", a.Vf.avatar_path)
	};
	var Qk = function(a) {
		return {
			qqconn: "qq",
			wechat: "wechat",
			sina: "weibo",
			wechat_mp: "wechat_mp"
		} [a.Vf.type]
	};
	z.Rk = function(a) {
		a = void 0 === a ? {}: a;
		z.Q.call(this);
		this.options = a
	};
	z.Sk = function(a) {
		a = void 0 === a ? {}: a;
		z.Bk.call(this, "login");
		this.options = a
	};
	z.Tk = function(a) {
		z.xc.call(this);
		this.sw = a;
		this.wp = !1
	};
	z.Uk = function(a) {
		z.Q.call(this);
		this.Mg = a
	};
	z.Vk = function(a, b) {
		z.Q.call(this);
		this.zo = a;
		this.Mg = b
	};
	z.Wk = function(a) {
		z.Bk.call(this, "register");
		this.Mg = a
	};
	var Xk = function(a) {
		var b = (0, window.$)(".view.register", a.S()),
		c = new z.Uk(a.Mg);
		a.L(c);
		c.nd(a.Yf);
		c.w(b[0]);
		c.g("success",
		function(b) {
			pk(a, !0);
			var c = b.data;
			b = (0, window.$)(".view.verification", a.S());
			c = new z.Vk(c, a.Mg);
			a.L(c);
			c.nd(a.Yf);
			c.w(b[0])
		});
		b.on("click", ".switch-to-login",
		function() {
			var c = (0, window.$)('input[name\x3d"account"]', b),
			c = new z.Sk({
				data: {
					account: c.val()
				}
			});
			c.nd(a.Yf);
			a.qa({
				category: "sign_in",
				action: "switch_to_sign_in_box_appear"
			});
			z.X.trackEvent(b, {
				action: "Click",
				element: "Button",
				element_name: "SignIn"
			});
			c.Fb(a);
			mk(a, c)
		})
	};
	var Yk = function(a) {
		z.G.call(this);
		this.view = this.name = null;
		z.Mb(this.options = {},
		this.defaults, a || {})
	};
	var Zk = function(a, b) {
		function c(b) {
			Yk.call(this, b);
			this.name = a
		}
		z.y(c, Yk);
		z.Ca(c.prototype, b);
		$k[a] = c
	};
	var al = function(a, b) {
		var c = $k[a];
		if (!c) throw Error("Cannot find constructor");
		return new c(b)
	};
	z.bl = function(a) {
		z.Q.call(this);
		z.Mb(this.H = {},
		this.defaults, a || {});
		this.source = this.H.source;
		this.promise = window.$.Deferred().resolve();
		this.Xb = {}
	};
	z.cl = function(a, b, c) {
		a.wa && z.A(a.ib(), b, c);
		a.o().g(a, "itemcreated",
		function(a) {
			b.call(c, a.item)
		})
	};
	var dl = function(a) {
		a.Lc && (z.N(a.Lc), a.Lc = null);
		a.dispatchEvent("complete")
	};
	z.el = function(a, b) {
		var c = Array.prototype.slice.call(arguments),
		d = c.shift();
		if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
		return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,
		function(a, b, d, k, l, p, q, v) {
			if ("%" == p) return "%";
			var I = c.shift();
			if ("undefined" == typeof I) throw Error("[goog.string.format] Not enough arguments");
			arguments[0] = I;
			return fl[p].apply(null, arguments)
		})
	};
	z.gl = function(a, b, c) {
		z.xc.call(this);
		this.yk = null != c ? (0, z.t)(a, c) : a;
		this.uh = b;
		this.El = (0, z.t)(this.IV, this);
		this.gx = []
	};
	z.hl = function(a) {
		z.G.call(this);
		this.viewport = a || window;
		this.size = null;
		this.YO = z.Rg(window.document.body).top;
		this.ea = new z.xd(this);
		this.Uq = null;
		this.$P = 250;
		this.oc(); (0, window.setTimeout)((0, z.t)(this.update, this))
	};
	var il = function(a, b, c) {
		b.o().g(a, "update",
		function(a) {
			var f;
			z.Vc(b) ? f = b.hasListener("nearbottom", void 0) : (f = z.ed(b), f = !!f && f.hasListener("nearbottom", void 0));
			f && c(a.target.size) && b.dispatchEvent("nearbottom")
		})
	};
	var jl = function(a) {
		z.G.call(this);
		this.qo = this.dn = {};
		this.bu = 0;
		this.bR = Ob(kl);
		this.AY = Ob(ll);
		this.vE = !0;
		this.uO = this.yO = !1;
		this.yU = !0;
		this.xO = !1;
		this.Ow = null;
		this.yh = a;
		z.F(this.yh, "keydown", this.Cf, !1, this);
		z.B && z.F(this.yh, "keyup", this.jH, !1, this);
		z.ml && !z.B && (z.F(this.yh, "keypress", this.yH, !1, this), z.F(this.yh, "keyup", this.zH, !1, this))
	};
	var nl = function(a) {
		this.df = a || null;
		this.next = a ? null: {}
	};
	var ol = function(a, b) {
		var c;
		if (z.oa(b[a])) c = z.mb(pl(b[a]),
		function(a) {
			return a.keyCode & 255 | a.zU << 8
		});
		else {
			var d = b,
			f = a;
			z.ma(b[a]) && (d = b[a], f = 0);
			for (c = []; f < d.length; f += 2) c.push(d[f] & 255 | d[f + 1] << 8)
		}
		return c
	};
	var pl = function(a) {
		a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
		a = a.split(" ");
		for (var b = [], c, d = 0; c = a[d]; d++) {
			var f = c.split("+"),
			g = null;
			c = 0;
			for (var h, k = 0; h = f[k]; k++) {
				switch (h) {
				case "shift":
					c |= 1;
					continue;
				case "ctrl":
					c |= 2;
					continue;
				case "alt":
					c |= 4;
					continue;
				case "meta":
					c |= 8;
					continue
				}
				f = h;
				if (!ql) {
					g = {};
					h = void 0;
					for (h in z.rl) g[z.rl[h]] = z.lj((0, window.parseInt)(h, 10));
					ql = g
				}
				g = ql[f];
				break
			}
			b.push({
				keyCode: g,
				zU: c
			})
		}
		return b
	};
	var sl = function(a) {
		return z.ml && !z.B && a.ctrlKey && a.altKey && !a.shiftKey
	};
	var tl = function(a, b, c) {
		var d = b.shift(),
		f = a[d];
		if (f && (0 == b.length || f.df)) throw Error("Keyboard shortcut conflicts with existing shortcut");
		b.length ? (d = d.toString(), f = new nl, f = d in a ? a[d] : a[d] = f, tl(f.next, b, c)) : a[d] = new nl(c)
	};
	var ul = function(a, b) {
		var c = b.shift(),
		d = a[c];
		d && (0 == b.length ? d.df && delete a[c] : d.next && (ul(d.next, b), z.Jb(d.next) && delete a[c]))
	};
	var vl = function(a, b, c) {
		z.Lc.call(this, a, c);
		this.identifier = b
	};
	var wl = function(a) {
		z.xc.call(this);
		this.oc(a)
	};
	z.xl = function(a, b) {
		a.Sn.bc = b;
		return a
	};
	var yl = function(a) {
		z.Q.call(this);
		this.mk = -1;
		z.Mb(this.H = {},
		this.defaults, a || {})
	};
	var zl = function(a, b) {
		if (b !== a.index()) {
			var c = a.size(),
			d = c - 1;
			a.H.mP && (b > d ? b = 0 : 0 > b && (b = d));
			a.dispatchEvent({
				data: {
					index: b,
					size: c
				},
				type: "action"
			});
			0 > b || b > d || (a.mk = b, a.Sp(Al(a)))
		}
	};
	var Al = function(a) {
		return a.items()[a.index()]
	};
	z.Bl = function(a) {
		yl.call(this, a);
		this.kN = (0, window.$)("html, body")
	};
	var Cl = function(a) {
		return {
			k: {
				action: a.prev,
				bc: {
					group: "导航",
					name: "上一条目"
				}
			},
			j: {
				action: a.next,
				bc: {
					group: "导航",
					name: "下一条目"
				}
			},
			"g g": {
				action: a.first,
				bc: {
					group: "导航",
					name: "第一个条目"
				}
			},
			"shift+g": {
				action: a.last,
				bc: {
					group: "导航",
					name: "最后一个条目"
				}
			},
			"shift+k": {
				action: a.EX,
				bc: {
					group: "导航",
					name: "屏幕上移"
				}
			},
			"shift+j": {
				action: a.zX,
				bc: {
					group: "导航",
					name: "屏幕下移"
				}
			}
		}
	};
	z.Dl = function(a) {
		z.bl.call(this, a)
	};
	z.aa = [];
	da = "undefined" != typeof window && window === this ? this: "undefined" != typeof window.global ? window.global: this;
	fa = 0;
	z.je = z.je || {};
	z.u = this;
	z.va = "closure_uid_" + (1E9 * Math.random() >>> 0);
	wa = 0;
	z.H = Date.now ||
	function() {
		return + new Date
	};
	Ea = null;
	var Le;
	z.y(Ha, Error);
	Ha.prototype.name = "CustomError";
	var Oa, Pa, Qa, Ra, Ta, Va, Na, Za;
	z.ab = String.prototype.trim ?
	function(a) {
		return a.trim()
	}: function(a) {
		return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
	};
	Oa = /&/g;
	Pa = /</g;
	Qa = />/g;
	Ra = /"/g;
	Ta = /'/g;
	Va = /\x00/g;
	Na = /[\x00&<>"']/;
	Za = String.prototype.repeat ?
	function(a, b) {
		return a.repeat(b)
	}: function(a, b) {
		return Array(b + 1).join(a)
	};
	z.El = 2147483648 * Math.random() | 0;
	eb.prototype.get = function() {
		var a;
		0 < this.Cu ? (this.Cu--, a = this.At, this.At = a.next, a.next = null) : a = this.KP();
		return a
	};
	eb.prototype.put = function(a) {
		this.sq(a);
		this.Cu < this.ZT && (this.Cu++, a.next = this.At, this.At = a)
	};
	var dc = new eb(function() {
		return new gb
	},
	function(a) {
		a.reset()
	},
	100);
	fb.prototype.add = function(a, b) {
		var c = dc.get();
		c.set(a, b);
		this.gw ? this.gw.next = c: this.An = c;
		this.gw = c
	};
	fb.prototype.remove = function() {
		var a = null;
		this.An && (a = this.An, this.An = this.An.next, this.An || (this.gw = null), a.next = null);
		return a
	};
	gb.prototype.set = function(a, b) {
		this.fn = a;
		this.scope = b;
		this.next = null
	};
	gb.prototype.reset = function() {
		this.next = this.scope = this.fn = null
	};
	z.Fl = z.hb(!1);
	z.Gl = z.hb(!0);
	z.Hl = z.hb(null);
	a: {
		var Il = z.u.navigator;
		if (Il) {
			var Jl = Il.userAgent;
			if (Jl) {
				z.Bb = Jl;
				break a
			}
		}
		z.Bb = ""
	};
	var Nb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
	var cc;
	var Yb, $b = !1,
	ac = new fb;
	var fc = 0,
	hc = 2,
	ic = 3;
	jc.prototype.reset = function() {
		this.context = this.Lm = this.Tp = this.Ej = null;
		this.always = !1
	};
	var lc = new eb(function() {
		return new jc
	},
	function(a) {
		a.reset()
	},
	100);
	ec.prototype.then = function(a, b, c) {
		return rc(this, z.qa(a) ? a: null, z.qa(b) ? b: null, c)
	};
	Fa(ec);
	ec.prototype.cancel = function(a) {
		this.N == fc && Xb(function() {
			var b = new sc(a);
			mc(this, b)
		},
		this)
	};
	ec.prototype.WY = function(a) {
		this.N = fc;
		gc(this, hc, a)
	};
	ec.prototype.XY = function(a) {
		this.N = fc;
		gc(this, ic, a)
	};
	ec.prototype.Qs = function() {
		for (var a = null; a = nc(this);) oc(this, a, this.N, this.Mh);
		this.Ey = !1
	};
	var wc = Vb;
	z.y(sc, Ha);
	sc.prototype.name = "cancel";
	var yc = 0,
	zc = {};
	z.xc.prototype.Rd = !1;
	z.xc.prototype.dispose = function() {
		if (!this.Rd && (this.Rd = !0, this.D(), 0 != yc)) {
			var a = z.ta(this);
			delete zc[a]
		}
	};
	z.xc.prototype.D = function() {
		if (this.Jk) for (; this.Jk.length;) this.Jk.shift()()
	};
	var Ic, Nl;
	z.wg = Pb();
	z.C = Qb();
	z.Gc = z.Ab("Edge");
	z.Kl = z.Gc || z.C;
	z.B = z.Ab("Gecko") && !(z.Wa(z.Bb.toLowerCase(), "webkit") && !z.Ab("Edge")) && !(z.Ab("Trident") || z.Ab("MSIE")) && !z.Ab("Edge");
	z.D = z.Wa(z.Bb.toLowerCase(), "webkit") && !z.Ab("Edge");
	z.Tj = z.D && z.Ab("Mobile");
	z.Uc = z.Ab("Macintosh");
	z.ml = z.Ab("Windows");
	z.Ll = z.Ab("Linux") || z.Ab("CrOS");
	z.Ml = z.Ec();
	z.Jc = function() {
		if (z.wg && z.u.opera) {
			var a;
			var b = z.u.opera.version;
			try {
				a = b()
			} catch(c) {
				a = b
			}
			return a
		}
		a = ""; (b = Fc()) && (a = b ? b[1] : "");
		return z.C && (b = Hc(), b > (0, window.parseFloat)(a)) ? String(b) : a
	} ();
	Ic = {};
	Nl = z.u.document;
	z.Vg = Nl && z.C ? Hc() || ("CSS1Compat" == Nl.compatMode ? (0, window.parseInt)(z.Jc, 10) : 5) : void 0;
	var Rc = !z.C || 9 <= z.Vg,
	kd = !z.C || 9 <= z.Vg,
	Ol = z.C && !z.E("9"); ! z.D || z.E("528");
	z.B && z.E("1.9b") || z.C && z.E("8") || z.wg && z.E("9.5") || z.D && z.E("528");
	z.B && !z.E("8") || z.C && z.E("9");
	Kc.prototype.toString = function() {
		return this.id
	};
	z.Lc.prototype.stopPropagation = function() {
		this.Qk = !0
	};
	z.Lc.prototype.preventDefault = function() {
		this.defaultPrevented = !0;
		this.XK = !1
	};
	z.Pl = z.C ? "focusin": "DOMFocusIn";
	Nc[" "] = z.r;
	z.y(z.Pc, z.Lc);
	var Sc = [1, 4, 2];
	z.Pc.prototype.init = function(a, b) {
		var c = this.type = a.type,
		d = a.changedTouches ? a.changedTouches[0] : null;
		this.target = a.target || a.srcElement;
		this.currentTarget = b;
		var f = a.relatedTarget;
		f ? z.B && (z.Oc(f, "nodeName") || (f = null)) : "mouseover" == c ? f = a.fromElement: "mouseout" == c && (f = a.toElement);
		this.relatedTarget = f;
		null === d ? (this.offsetX = z.D || void 0 !== a.offsetX ? a.offsetX: a.layerX, this.offsetY = z.D || void 0 !== a.offsetY ? a.offsetY: a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX: a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY: a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX: d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY: d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
		this.button = a.button;
		this.keyCode = a.keyCode || 0;
		this.charCode = a.charCode || ("keypress" == c ? a.keyCode: 0);
		this.ctrlKey = a.ctrlKey;
		this.altKey = a.altKey;
		this.shiftKey = a.shiftKey;
		this.metaKey = a.metaKey;
		this.FB = z.Uc ? a.metaKey: a.ctrlKey;
		this.state = a.state;
		this.nc = a;
		a.defaultPrevented && this.preventDefault()
	};
	z.Pc.prototype.stopPropagation = function() {
		z.Pc.v.stopPropagation.call(this);
		this.nc.stopPropagation ? this.nc.stopPropagation() : this.nc.cancelBubble = !0
	};
	z.Pc.prototype.preventDefault = function() {
		z.Pc.v.preventDefault.call(this);
		var a = this.nc;
		if (a.preventDefault) a.preventDefault();
		else if (a.returnValue = !1, Ol) try {
			if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
		} catch(b) {}
	};
	z.Pc.prototype.MG = z.m(0);
	var Wc = "closure_listenable_" + (1E6 * Math.random() | 0),
	Yc = 0;
	z.e = z.$c.prototype;
	z.e.add = function(a, b, c, d, f) {
		var g = a.toString();
		a = this.pc[g];
		a || (a = this.pc[g] = [], this.er++);
		var h = bd(a, b, d, f); - 1 < h ? (b = a[h], c || (b.bs = !1)) : (b = new Xc(b, this.src, g, !!d, f), b.bs = c, a.push(b));
		return b
	};
	z.e.remove = function(a, b, c, d) {
		a = a.toString();
		if (! (a in this.pc)) return ! 1;
		var f = this.pc[a];
		b = bd(f, b, c, d);
		return - 1 < b ? (Zc(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete this.pc[a], this.er--), !0) : !1
	};
	z.e.removeAll = function(a) {
		a = a && a.toString();
		var b = 0,
		c;
		for (c in this.pc) if (!a || c == a) {
			for (var d = this.pc[c], f = 0; f < d.length; f++)++b,
			Zc(d[f]);
			delete this.pc[c];
			this.er--
		}
		return b
	};
	z.e.hm = z.m(2);
	z.e.Go = function(a, b, c, d) {
		a = this.pc[a.toString()];
		var f = -1;
		a && (f = bd(a, b, c, d));
		return - 1 < f ? a[f] : null
	};
	z.e.hasListener = function(a, b) {
		var c = z.ja(a),
		d = c ? a.toString() : "",
		f = z.ja(b);
		return z.Fb(this.pc,
		function(a) {
			for (var h = 0; h < a.length; ++h) if (! (c && a[h].type != d || f && a[h].Fl != b)) return ! 0;
			return ! 1
		})
	};
	var fd = "closure_lm_" + (1E6 * Math.random() | 0),
	od = {},
	id = 0,
	rd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
	z.y(z.G, z.xc);
	z.G.prototype[Wc] = !0;
	z.e = z.G.prototype;
	z.e.Gi = function() {
		return this.yB
	};
	z.e.Fb = function(a) {
		this.yB = a
	};
	z.e.addEventListener = function(a, b, c, d) {
		z.F(this, a, b, c, d)
	};
	z.e.removeEventListener = function(a, b, c, d) {
		z.md(this, a, b, c, d)
	};
	z.e.dispatchEvent = function(a) {
		var b, c = this.Gi();
		if (c) for (b = []; c; c = c.Gi()) b.push(c);
		var c = this.ZN,
		d = a.type || a;
		if (z.oa(a)) a = new z.Lc(a, c);
		else if (a instanceof z.Lc) a.target = a.target || c;
		else {
			var f = a;
			a = new z.Lc(d, c);
			z.Mb(a, f)
		}
		var f = !0,
		g;
		if (b) for (var h = b.length - 1; ! a.Qk && 0 <= h; h--) g = a.currentTarget = b[h],
		f = z.sd(g, d, !0, a) && f;
		a.Qk || (g = a.currentTarget = c, f = z.sd(g, d, !0, a) && f, a.Qk || (f = z.sd(g, d, !1, a) && f));
		if (b) for (h = 0; ! a.Qk && h < b.length; h++) g = a.currentTarget = b[h],
		f = z.sd(g, d, !1, a) && f;
		return f
	};
	z.e.D = function() {
		z.G.v.D.call(this);
		this.oe && this.oe.removeAll(void 0);
		this.yB = null
	};
	z.e.g = function(a, b, c, d) {
		return this.oe.add(String(a), b, !1, c, d)
	};
	z.e.xa = function(a, b, c, d) {
		return this.oe.add(String(a), b, !0, c, d)
	};
	z.e.oa = function(a, b, c, d) {
		return this.oe.remove(String(a), b, c, d)
	};
	z.e.hm = z.m(1);
	z.e.Go = function(a, b, c, d) {
		return this.oe.Go(String(a), b, c, d)
	};
	z.e.hasListener = function(a, b) {
		return this.oe.hasListener(z.ja(a) ? String(a) : void 0, b)
	};
	z.y(z.td, z.G);
	z.td.prototype.enabled = !1;
	z.ud = z.u;
	z.e = z.td.prototype;
	z.e.ka = null;
	z.e.setInterval = function(a) {
		this.uh = a;
		this.ka && this.enabled ? (this.stop(), this.start()) : this.ka && this.stop()
	};
	z.e.FY = function() {
		if (this.enabled) {
			var a = (0, z.H)() - this.FA;
			0 < a && a < .8 * this.uh ? this.ka = this.qn.setTimeout(this.ux, this.uh - a) : (this.ka && (this.qn.clearTimeout(this.ka), this.ka = null), this.dispatchEvent("tick"), this.enabled && (this.ka = this.qn.setTimeout(this.ux, this.uh), this.FA = (0, z.H)()))
		}
	};
	z.e.start = function() {
		this.enabled = !0;
		this.ka || (this.ka = this.qn.setTimeout(this.ux, this.uh), this.FA = (0, z.H)())
	};
	z.e.stop = function() {
		this.enabled = !1;
		this.ka && (this.qn.clearTimeout(this.ka), this.ka = null)
	};
	z.e.D = function() {
		z.td.v.D.call(this);
		this.stop();
		delete this.qn
	};
	z.y(z.xd, z.xc);
	var zd = [];
	z.e = z.xd.prototype;
	z.e.g = function(a, b, c, d) {
		return z.yd(this, a, b, c, d)
	};
	z.e.xa = function(a, b, c, d) {
		return Ad(this, a, b, c, d)
	};
	z.e.oa = function(a, b, c, d, f) {
		if (z.ma(b)) for (var g = 0; g < b.length; g++) this.oa(a, b[g], c, d, f);
		else c = c || this.handleEvent,
		f = f || this.ea || this,
		c = z.cd(c),
		d = !!d,
		b = z.Vc(a) ? a.Go(b, c, d, f) : a ? (a = z.ed(a)) ? a.Go(b, c, d, f) : null: null,
		b && (z.nd(b), delete this.fb[b.key]);
		return this
	};
	z.e.removeAll = function() {
		z.Db(this.fb,
		function(a, b) {
			this.fb.hasOwnProperty(b) && z.nd(a)
		},
		this);
		this.fb = {}
	};
	z.e.D = function() {
		z.xd.v.D.call(this);
		this.removeAll()
	};
	z.e.handleEvent = function() {
		throw Error("EventHandler.handleEvent not implemented");
	};
	z.Bd.prototype.kk = !0;
	z.Cd = {};
	z.Bd.prototype.ph = function() {
		return this.LB
	};
	z.Bd.prototype.hp = function(a) {
		this.LB = a;
		return this
	};
	z.Ql = (new z.Bd).hp("");
	z.Dd.prototype.Qz = !0;
	z.Dd.prototype.em = z.m(3);
	z.Dd.prototype.kk = !0;
	z.Dd.prototype.ph = function() {
		return this.Pk
	};
	var Ed = {};
	z.Dd.prototype.hp = function(a, b) {
		this.Pk = a;
		this.VF = b;
		return this
	};
	z.Gd("\x3c!DOCTYPE html\x3e", 0);
	var Lj = z.Gd("", 0);
	z.Rl = Math.sign ||
	function(a) {
		return 0 < a ? 1 : 0 > a ? -1 : a
	};
	z.Nd = "StopIteration" in z.u ? z.u.StopIteration: {
		message: "StopIteration",
		stack: ""
	};
	z.Ld.prototype.next = function() {
		throw z.Nd;
	};
	z.Ld.prototype.td = function() {
		return this
	};
	z.e = z.Qd.prototype;
	z.e.hb = function() {
		return this.Oa
	};
	z.e.fd = function() {
		z.Sd(this);
		for (var a = [], b = 0; b < this.fb.length; b++) a.push(this.Nb[this.fb[b]]);
		return a
	};
	z.e.zd = function() {
		z.Sd(this);
		return this.fb.concat()
	};
	z.e.eg = function(a) {
		return z.Ud(this.Nb, a)
	};
	z.e.vi = z.m(6);
	z.e.equals = function(a, b) {
		if (this === a) return ! 0;
		if (this.Oa != a.hb()) return ! 1;
		var c = b || Rd;
		z.Sd(this);
		for (var d, f = 0; d = this.fb[f]; f++) if (!c(this.get(d), a.get(d))) return ! 1;
		return ! 0
	};
	z.e.vh = function() {
		return 0 == this.Oa
	};
	z.e.clear = function() {
		this.Nb = {};
		this.lr = this.Oa = this.fb.length = 0
	};
	z.e.remove = function(a) {
		return z.Ud(this.Nb, a) ? (delete this.Nb[a], this.Oa--, this.lr++, this.fb.length > 2 * this.Oa && z.Sd(this), !0) : !1
	};
	z.e.get = function(a, b) {
		return z.Ud(this.Nb, a) ? this.Nb[a] : b
	};
	z.e.set = function(a, b) {
		z.Ud(this.Nb, a) || (this.Oa++, this.fb.push(a), this.lr++);
		this.Nb[a] = b
	};
	z.e.addAll = function(a) {
		var b;
		a instanceof z.Qd ? (b = a.zd(), a = a.fd()) : (b = z.Hb(a), a = z.Gb(a));
		for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
	};
	z.e.forEach = function(a, b) {
		for (var c = this.zd(), d = 0; d < c.length; d++) {
			var f = c[d],
			g = this.get(f);
			a.call(b, g, f, this)
		}
	};
	z.e.clone = function() {
		return new z.Qd(this)
	};
	z.e.td = function(a) {
		z.Sd(this);
		var b = 0,
		c = this.lr,
		d = this,
		f = new z.Ld;
		f.next = function() {
			if (c != d.lr) throw Error("The map has changed since the iterator was created");
			if (b >= d.fb.length) throw z.Nd;
			var f = d.fb[b++];
			return a ? f: d.Nb[f]
		};
		return f
	};
	z.y(Vd, z.xc);
	Vd.prototype.fz = function() {
		return this.mv
	};
	Vd.prototype.D = function() {
		Vd.v.D.call(this);
		this.mv = this.dl = null
	};
	z.Sl = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g: /[\\\"\x00-\x1f\x7f-\xff]/g;
	Wd.prototype.YE = null;
	var Tl;
	z.y(Zd, Wd);
	Tl = new Zd;
	var ce;
	z.qe = /^(?:([^:/ ? #.] + ) : ) ? ( ? :\ / \ / ( ? :([ ^ /?#]*)@)?([^/# ? ] * ?)( ? ::([0 - 9] + )) ? ( ? =[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/; ce = /#|$/; z.y(z.de, z.G);
	var ee = "",
	re = /^https?$/i,
	Ul = ["POST", "PUT"]; z.e = z.de.prototype; z.e.send = function(a, b, c, d) {
		if (this.da) throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + this.cu + "; newUri\x3d" + a);
		b = b ? b.toUpperCase() : "GET";
		this.cu = a;
		this.Zt = "";
		this.yy = !1;
		this.gi = !0;
		this.da = this.iw ? $d(this.iw) : $d(Tl);
		this.hw = this.iw ? Xd(this.iw) : Xd(Tl);
		this.da.onreadystatechange = (0, z.t)(this.VJ, this);
		this.LW && "onprogress" in this.da && (this.da.onprogress = (0, z.t)(function(a) {
			this.UJ(a, !0)
		},
		this), this.da.upload && (this.da.upload.onprogress = (0, z.t)(this.UJ, this)));
		try {
			this.Rz = !0,
			this.da.open(b, String(a), !0),
			this.Rz = !1
		} catch(g) {
			this.Ms(5, g);
			return
		}
		a = c || "";
		var f = this.headers.clone();
		d && Kd(d,
		function(a, b) {
			f.set(b, a)
		});
		d = z.pb(f.zd(), ge);
		c = z.u.FormData && a instanceof z.u.FormData; ! z.rb(Ul, b) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
		f.forEach(function(a, b) {
			this.da.setRequestHeader(b, a)
		},
		this);
		this.SK && (this.da.responseType = this.SK);
		Ib(this.da, "withCredentials") && (this.da.withCredentials = this.xZ);
		try {
			pe(this),
			0 < this.Qv && ((this.qD = fe(this.da)) ? (this.da.timeout = this.Qv, this.da.ontimeout = (0, z.t)(this.Vq, this)) : this.Pv = z.vd(this.Vq, this.Qv, this)),
			this.Ht = !0,
			this.da.send(a),
			this.Ht = !1
		} catch(g) {
			this.Ms(5, g)
		}
	}; z.e.Vq = function() {
		"undefined" != typeof z.je && this.da && (this.Zt = "Timed out after " + this.Qv + "ms, aborting", this.dispatchEvent("timeout"), this.abort(8))
	}; z.e.Ms = function(a, b) {
		this.gi = !1;
		this.da && (this.lk = !0, this.da.abort(), this.lk = !1);
		this.Zt = b;
		he(this);
		ne(this)
	}; z.e.abort = function() {
		this.da && this.gi && (this.gi = !1, this.lk = !0, this.da.abort(), this.lk = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ne(this))
	}; z.e.D = function() {
		this.da && (this.gi && (this.gi = !1, this.lk = !0, this.da.abort(), this.lk = !1), ne(this, !0));
		z.de.v.D.call(this)
	}; z.e.VJ = function() {
		this.Rd || (this.Rz || this.Ht || this.lk ? ie(this) : this.tV())
	}; z.e.tV = function() {
		ie(this)
	}; z.e.UJ = function(a, b) {
		this.dispatchEvent(oe(a, "progress"));
		this.dispatchEvent(oe(a, b ? "downloadprogress": "uploadprogress"))
	}; z.e.Dc = function() {
		return !! this.da
	}; z.e.We = function() {
		return 4 == ke(this)
	}; z.e.getResponseHeader = function(a) {
		return this.da && this.We() ? this.da.getResponseHeader(a) : void 0
	}; z.e.getAllResponseHeaders = function() {
		return this.da && this.We() ? this.da.getAllResponseHeaders() : ""
	}; z.y(ue, z.G); z.e = ue.prototype; z.e.fz = function() {
		return this.qm.fz()
	}; z.e.load = function() {
		for (var a = this.U,
		b = this.qm.dl,
		c = 0; c < b.length; c++) {
			var d = new z.de;
			a.g(d, "complete", (0, z.t)(this.MR, this, c));
			d.send(b[c])
		}
	}; z.e.MR = function(a, b) {
		var c = b.target;
		me(c) ? this.Bz(a, c) : this.tz(a, c)
	}; z.e.Bz = function(a, b) {
		var c = z.te(b);
		this.qm.mv[a] = c;
		a: {
			var d = this.qm,
			c = d.mv;
			if (c.length == d.dl.length) {
				for (d = 0; d < c.length; d++) if (null == c[d]) {
					c = !1;
					break a
				}
				c = !0
			} else c = !1
		}
		c && this.dispatchEvent("success");
		b.dispose()
	}; z.e.tz = function(a, b) {
		this.dispatchEvent("error");
		b.dispose()
	}; z.e.D = function() {
		ue.v.D.call(this);
		this.U.dispose();
		this.U = null;
		this.qm.dispose();
		this.qm = null
	};
	/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
	z.e = ve.prototype; z.e.cancel = function(a) {
		if (this.Bi) this.Mh instanceof ve && this.Mh.cancel();
		else {
			if (this.Ta) {
				var b = this.Ta;
				delete this.Ta;
				a ? b.cancel(a) : (b.vx--, 0 >= b.vx && b.cancel())
			}
			this.HJ ? this.HJ.call(this.QF, this) : this.zC = !0;
			this.Bi || ye(this, new Ee(this))
		}
	}; z.e.zF = function(a, b) {
		this.qx = !1;
		we(this, a, b)
	}; z.e.pi = function() {
		if (this.Bi) {
			if (!this.zC) throw new De(this);
			this.zC = !1
		}
	}; z.e.ni = function(a) {
		this.pi();
		we(this, !0, a)
	}; z.e.then = function(a, b, c) {
		var d, f, g = new ec(function(a, b) {
			d = a;
			f = b
		});
		ze(this, d,
		function(a) {
			a instanceof Ee ? g.cancel() : f(a)
		});
		return g.then(a, b, c)
	}; Fa(ve); z.y(De, Ha); De.prototype.message = "Deferred has already fired"; De.prototype.name = "AlreadyCalledError"; z.y(Ee, Ha); Ee.prototype.message = "Deferred was canceled"; Ee.prototype.name = "CanceledError"; Ce.prototype.DY = function() {
		delete Be[this.tb];
		throw this.Ms;
	};
	var Be = {};
	var Ve, hf, rf; Ve = !z.C || 9 <= z.Vg; hf = !z.B && !z.C || z.C && 9 <= z.Vg || z.B && z.E("1.9.1"); rf = z.C && !z.E("9"); z.Vl = z.C && !(9 <= z.Vg); z.e = z.Ge.prototype; z.e.clone = function() {
		return new z.Ge(this.x, this.y)
	}; z.e.ceil = function() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this
	}; z.e.floor = function() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this
	}; z.e.round = function() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this
	}; z.e.translate = function(a, b) {
		a instanceof z.Ge ? (this.x += a.x, this.y += a.y) : (this.x += a, z.pa(b) && (this.y += b));
		return this
	}; z.e.scale = function(a, b) {
		var c = z.pa(b) ? b: a;
		this.x *= a;
		this.y *= c;
		return this
	}; z.e = z.He.prototype; z.e.clone = function() {
		return new z.He(this.width, this.height)
	}; z.e.HO = function() {
		return this.width * this.height
	}; z.e.vh = function() {
		return ! this.HO()
	}; z.e.ceil = function() {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	}; z.e.floor = function() {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	}; z.e.round = function() {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	}; z.e.scale = function(a, b) {
		var c = z.pa(b) ? b: a;
		this.width *= a;
		this.height *= c;
		return this
	};
	var Pe = {
		cellpadding: "cellPadding",
		cellspacing: "cellSpacing",
		colspan: "colSpan",
		frameborder: "frameBorder",
		height: "height",
		maxlength: "maxLength",
		role: "role",
		rowspan: "rowSpan",
		type: "type",
		usemap: "useMap",
		valign: "vAlign",
		width: "width"
	},
	tf = {
		SCRIPT: 1,
		STYLE: 1,
		HEAD: 1,
		IFRAME: 1,
		OBJECT: 1
	},
	uf = {
		IMG: " ",
		BR: "\n"
	}; z.e = z.Je.prototype; z.e.K = z.Ie; z.e.ua = function() {
		return this.Qa
	}; z.e.m = function(a) {
		return z.oa(a) ? this.Qa.getElementById(a) : a
	}; z.e.$ = z.Je.prototype.m; z.e.qg = z.m(8); z.e.B = function(a, b, c) {
		return Ue(this.Qa, arguments)
	}; z.e.createElement = function(a) {
		return this.Qa.createElement(a)
	}; z.e.createTextNode = function(a) {
		return this.Qa.createTextNode(String(a))
	}; z.e.Sx = z.m(9); z.e.ab = function() {
		var a = this.Qa;
		return a.parentWindow || a.defaultView
	}; z.e.cm = z.m(10); z.e.appendChild = function(a, b) {
		a.appendChild(b)
	}; z.e.append = z.af; z.e.canHaveChildren = z.$e; z.e.nq = z.bf; z.e.Qt = z.cf; z.e.hA = z.df; z.e.removeNode = z.N; z.e.FQ = z.ff; z.e.UQ = z.gf; z.e.SG = z.jf; z.e.isElement = z.lf; z.e.isWindow = mf; z.e.contains = z.nf; z.e.wg = z.m(12); z.e.SQ = z.vf;
	var zf = [], Ff = 0, Ef = 1; z.y(Df, Ha); z.Wl = Rb(); z.Ui = z.Ec() || z.Ab("iPod"); z.Uj = z.Ab("iPad"); z.Xl = z.Ab("Android") && !(Sb() || Rb() || Pb() || z.Ab("Silk")); z.Kf = Sb(); z.Yl = z.Ab("Safari") && !(Sb() || z.Ab("Coast") || Pb() || z.Ab("Edge") || z.Ab("Silk") || z.Ab("Android")) && !(z.Ec() || z.Ab("iPad") || z.Ab("iPod")); z.y(Hf, z.G); z.e = Hf.prototype; z.e.As = !1; z.e.yL = !1; z.e.fU = function(a, b, c, d) {
		var f = this.Dh[a] || new Qf;
		f.VI = !0;
		f.NC = c || null;
		f.zy = d || null;
		if (this.Dh[a]) null != f.$B && If(this, a);
		else {
			this.Dh[a] = f;
			c = [];
			for (d = 0; d < a.length; d++) z.wb(c, b[a[d]].dl); ! this.As || this.yL || this.As && (z.Kf || Rb() && 0 <= z.$a(Tb(), "36")) ? (this.Dh[a].QK = c, b = new ue(c), c = this.U, c.g(b, "success", (0, z.t)(this.Bz, this, b, a)), c.g(b, "error", (0, z.t)(this.tz, this, b, a)), b.load()) : yf(c)
		}
	}; z.e.Bz = function(a, b) {
		var c = this.Dh[b];
		c.$B = a.fz();
		c.VI && If(this, b);
		z.vd(a.dispose, 5, a)
	}; z.e.tz = function(a, b, c) {
		var d = this.Dh[b];
		d && (delete this.Dh[b], b = d.zy, this.dispatchEvent(new Mf(0, void 0)), b && b(c));
		z.vd(a.dispose, 5, a)
	}; z.e.D = function() {
		Hf.v.D.call(this);
		this.U.dispose();
		this.U = null
	};
	var Nf = new Kc("a"), Of = new Kc("b"), Pf = new Kc("c"); z.y(Lf, z.Lc); z.y(Jf, z.Lc); z.y(Mf, z.Lc); z.y(Rf, z.xc); Rf.prototype.io = function() {
		return this.CF ? this.CF() : {}
	}; Rf.prototype.my = function(a) {
		if (this.bG) this.bG(a);
		else if (z.sa(a)) if (z.qa(a.dispose)) a.dispose();
		else for (var b in a) delete a[b]
	}; Rf.prototype.D = function() {
		Rf.v.D.call(this);
		for (var a = this.Vj; a.length;) this.my(a.pop());
		delete this.Vj
	}; Vf.prototype.toString = function() {
		var a = [];
		a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
		this.rD && a.push(" [VarAlloc \x3d ", this.rD, "]");
		return a.join("")
	}; Uf.prototype.toString = function() {
		return null == this.type ? this.pF: "[" + this.type + "] " + this.pF
	}; z.Tf.prototype.reset = function() {
		for (var a = 0; a < this.jg.length; a++) {
			var b = this.Ns.id;
			b && Sf(this.Iz, b);
			Sf(this.Ns, this.jg[a])
		}
		this.jg.length = 0;
		this.uB.clear();
		this.CL = (0, z.H)();
		this.Lx = this.bM = this.Wv = this.cM = this.dM = 0;
		b = this.Xk.zd();
		for (a = 0; a < b.length; a++) {
			var c = this.Xk.get(b[a]);
			c.count = 0;
			c.time = 0;
			c.rD = 0;
			Sf(this.GC, c)
		}
		this.Xk.clear()
	}; z.Tf.prototype.Gr = z.m(13); z.Tf.prototype.toString = function() {
		for (var a = [], b = -1, c = [], d = 0; d < this.jg.length; d++) {
			var f = this.jg[d];
			1 == f.Ps && c.pop();
			a.push(" ", Wf(f, this.CL, b, c.join("")));
			b = f.Os;
			a.push("\n");
			0 == f.Ps && c.push("|  ")
		}
		if (0 != this.uB.hb()) {
			var g = (0, z.H)();
			a.push(" Unstopped timers:\n");
			z.Od(this.uB,
			function(b) {
				a.push("  ", b, " (", g - b.startTime, " ms, started at ", Yf(b.startTime), ")\n")
			})
		}
		b = this.Xk.zd();
		for (d = 0; d < b.length; d++) c = this.Xk.get(b[d]),
		1 < c.count && a.push(" TOTAL ", c, "\n");
		a.push("Total tracers created ", this.bM, "\n", "Total comments created ", this.Lx, "\n", "Overhead start: ", this.dM, " ms\n", "Overhead end: ", this.cM, " ms\n", "Overhead comment: ", this.Wv, " ms\n");
		return a.join("")
	}; new z.Tf; z.y(Zf, z.xc); $f.prototype.tG = function(a) {
		this.Zs && (this.Zs.call(this.ea || null, a), this.Zs = this.ea = null)
	}; $f.prototype.abort = function() {
		this.ea = this.Zs = null
	}; z.y(ag, z.xc); z.e = ag.prototype; z.e.dl = null; z.e.AU = Zf; z.e.XA = null; z.e.se = function() {
		return this.tb
	}; z.e.kq = function(a, b) {
		return this.gv(this.pB, a, b)
	}; z.e.gv = function(a, b, c) {
		b = new $f(b, c);
		a.push(b);
		return b
	}; z.e.Ec = function() {
		return !! this.XA
	}; z.e.Yp = function(a) {
		var b = new this.AU;
		a();
		this.XA = b;
		b = (b = !!cg(this.gG, a())) || !!cg(this.pB, a());
		b || (this.iB.length = 0);
		return b
	}; z.e.hB = function(a) { (a = cg(this.iB, a)) && window.setTimeout(ib("Module errback failures: " + a), 0);
		this.gG.length = 0;
		this.pB.length = 0
	}; z.e.D = function() {
		ag.v.D.call(this);
		z.Cc(this.XA)
	}; z.y(dg, z.xc); z.ka(dg); dg.prototype.VG = function() {
		return this.oJ
	}; dg.prototype.Dc = function() {
		return 0 < this.Pi.length
	}; dg.prototype.nu = function(a, b, c) {
		b || (this.ms = 0);
		this.Pi = b = jg(this, a);
		this.Lh = this.PE ? a: z.vb(b);
		eg(this);
		0 != b.length && (this.pq.push.apply(this.pq, b), a = (0, z.t)(this.LA.fU, this.LA, z.vb(b), this.jd, null, (0, z.t)(this.bS, this, this.Lh, b), (0, z.t)(this.cS, this), !!c), (c = 5E3 * Math.pow(this.ms, 2)) ? window.setTimeout(a, c) : a())
	}; dg.prototype.load = function(a, b) {
		var c = [];
		zb([a], c);
		for (var d = [], f = {},
		g = 0; g < c.length; g++) {
			var h = c[g],
			k = this.jd[h];
			if (!k) throw Error("Unknown module: " + h);
			var l = new ve;
			f[h] = l;
			k.Ec() ? l.ni(this.oJ) : (fg(this, h, k, !!b, l), gg(this, h) || d.push(h))
		}
		0 < d.length && ig(this, d);
		return f[a]
	};
	var ng = 4; z.e = dg.prototype; z.e.bS = function(a, b, c) {
		this.ms++;
		this.Lh = a;
		z.A(b, z.Ba(z.tb, this.pq), this);
		401 == c ? (mg(this, 0), this.Id.length = 0) : 410 == c ? (pg(this, 3), og(this)) : 3 <= this.ms ? (pg(this, 1), og(this)) : this.nu(this.Lh, !0, 8001 == c)
	}; z.e.cS = function() {
		pg(this, 2);
		og(this)
	}; z.e.kq = function(a, b) {
		z.ma(a) || (a = [a]);
		for (var c = 0; c < a.length; c++) this.gv(a[c], b)
	}; z.e.gv = function(a, b) {
		var c = this.cs;
		c[a] || (c[a] = []);
		c[a].push(b)
	}; z.e.Qs = function(a) {
		for (var b = this.cs[a], c = 0; b && c < b.length; c++) b[c](a)
	}; z.e.D = function() {
		dg.v.D.call(this);
		z.Dc(z.Gb(this.jd), this.Zr);
		this.cs = this.Id = this.wn = this.Lh = this.Pi = this.jd = null
	};
	var Zl = dg.aa(), $l = new Hf; $l.As = !1; Zl.LA = $l;
	var am = z.u.PLOVR_MODULE_INFO,
	bm;
	for (bm in am) Zl.jd[bm] = new ag(am[bm], bm); Zl.jp.Bi || Zl.jp.ni(); Zl.NF == Zl.Zr && (Zl.NF = null, Zl.Zr.Yp((0, z.t)(Zl.VG, Zl)) && mg(Zl, ng), eg(Zl));
	var cm = z.u.PLOVR_MODULE_URIS,
	dm;
	for (dm in cm) Zl.jd[dm].dl = cm[dm]; z.lg("base"); (function() {
		function a(b, c) {
			return c.length ? a(b[c.shift()], c) : b
		} (0, window.$)(function() {
			var b = (0, window.$)('meta[name\x3d"entry"]'),
			c = b.attr("content");
			if (c) {
				var d = b.data("moduleId");
				if (d) {
					var f = b.data("params");
					z.qg(d,
					function() {
						var b = c && a(window, c.split("."));
						b && b(f)
					})
				} else window.console.warn("Module id not found!")
			} else window.console.warn("Entry \x3cmeta\x3e not found!")
		})
	})(); (function() {
		for (var a = ["ms", "moz", "webkit", "o"], b = 0, c; c = a[b] && !window.requestAnimationFrame; ++b) window.requestAnimationFrame = window[c + "RequestAnimationFrame"],
		window.cancelAnimationFrame = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"];
		if (!window.requestAnimationFrame) {
			var d = 0;
			window.requestAnimationFrame = function(a) {
				var b = (new Date).getTime(),
				c = Math.max(0, 16 - (b - d));
				d = b + c;
				return window.setTimeout(function() {
					a(b + c)
				},
				c)
			};
			window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) { (0, window.clearTimeout)(a)
			})
		}
	})(); (function() {
		var a = /^\/node\//;
		window.$.ajaxPrefilter(function(b, c) {
			var d = c.data,
			f = d && d.params;
			f && "object" === window.$.type(f) && a.test(c.url) && (d.params = JSON.stringify(f), b.data = window.$.param(d))
		})
	})(); z.e = z.rg.prototype; z.e.clone = function() {
		return new z.rg(this.top, this.right, this.bottom, this.left)
	}; z.e.contains = function(a) {
		return this && a ? a instanceof z.rg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom: a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom: !1
	}; z.e.expand = function(a, b, c, d) {
		z.sa(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
		return this
	}; z.e.ceil = function() {
		this.top = Math.ceil(this.top);
		this.right = Math.ceil(this.right);
		this.bottom = Math.ceil(this.bottom);
		this.left = Math.ceil(this.left);
		return this
	}; z.e.floor = function() {
		this.top = Math.floor(this.top);
		this.right = Math.floor(this.right);
		this.bottom = Math.floor(this.bottom);
		this.left = Math.floor(this.left);
		return this
	}; z.e.round = function() {
		this.top = Math.round(this.top);
		this.right = Math.round(this.right);
		this.bottom = Math.round(this.bottom);
		this.left = Math.round(this.left);
		return this
	}; z.e.translate = function(a, b) {
		a instanceof z.Ge ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, z.pa(b) && (this.top += b, this.bottom += b));
		return this
	}; z.e.scale = function(a, b) {
		var c = z.pa(b) ? b: a;
		this.left *= a;
		this.right *= a;
		this.top *= c;
		this.bottom *= c;
		return this
	}; z.e = z.sg.prototype; z.e.clone = function() {
		return new z.sg(this.left, this.top, this.width, this.height)
	}; z.e.iA = z.m(14); z.e.contains = function(a) {
		return a instanceof z.sg ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height: a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
	}; z.e.oh = z.m(15); z.e.ceil = function() {
		this.left = Math.ceil(this.left);
		this.top = Math.ceil(this.top);
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	}; z.e.floor = function() {
		this.left = Math.floor(this.left);
		this.top = Math.floor(this.top);
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	}; z.e.round = function() {
		this.left = Math.round(this.left);
		this.top = Math.round(this.top);
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	}; z.e.translate = function(a, b) {
		a instanceof z.Ge ? (this.left += a.x, this.top += a.y) : (this.left += a, z.pa(b) && (this.top += b));
		return this
	}; z.e.scale = function(a, b) {
		var c = z.pa(b) ? b: a;
		this.left *= a;
		this.width *= a;
		this.top *= c;
		this.height *= c;
		return this
	};
	var vg, Tg; vg = {}; z.em = z.B ? "MozUserSelect": z.D || z.Gc ? "WebkitUserSelect": null; Tg = {
		thin: 2,
		medium: 4,
		thick: 6
	}; z.ka(z.Xg); z.Xg.prototype.aB = 0; z.y(z.Q, z.G); z.Q.prototype.TS = z.Xg.aa();
	var Zg = null; z.e = z.Q.prototype; z.e.se = function() {
		return this.tb || (this.tb = z.Yg(this.TS))
	}; z.e.m = function() {
		return this.h
	}; z.e.qg = z.m(7); z.e.o = function() {
		this.Ji || (this.Ji = new z.xd(this));
		return this.Ji
	}; z.e.getParent = function() {
		return this.Ta
	}; z.e.Fb = function(a) {
		if (this.Ta && this.Ta != a) throw Error("Method not supported");
		z.Q.v.Fb.call(this, a)
	}; z.e.K = function() {
		return this.ba
	}; z.e.B = function() {
		this.h = this.ba.createElement("DIV")
	}; z.e.render = function(a) {
		this.Kh(a)
	}; z.e.Kh = function(a, b) {
		if (this.wa) throw Error("Component already rendered");
		this.h || this.B();
		a ? a.insertBefore(this.h, b || null) : this.ba.ua().body.appendChild(this.h);
		this.Ta && !this.Ta.wa || this.C()
	}; z.e.w = function(a) {
		if (this.wa) throw Error("Component already rendered");
		if (a && this.Ob(a)) {
			this.JM = !0;
			var b = z.Ke(a);
			this.ba && this.ba.ua() == b || (this.ba = z.Ie(a));
			this.T(a);
			this.C()
		} else throw Error("Invalid element to decorate");
	}; z.e.Ob = function() {
		return ! 0
	}; z.e.T = function(a) {
		this.h = a
	}; z.e.C = function() {
		this.wa = !0;
		z.dh(this,
		function(a) { ! a.wa && a.m() && a.C()
		})
	}; z.e.Ab = function() {
		z.dh(this,
		function(a) {
			a.wa && a.Ab()
		});
		this.Ji && this.Ji.removeAll();
		this.wa = !1
	}; z.e.D = function() {
		this.wa && this.Ab();
		this.Ji && (this.Ji.dispose(), delete this.Ji);
		z.dh(this,
		function(a) {
			a.dispose()
		}); ! this.JM && this.h && z.N(this.h);
		this.Ta = this.WA = this.h = this.of = this.$c = null;
		z.Q.v.D.call(this)
	}; z.e.L = function(a, b) {
		this.pl(a, z.bh(this), b)
	}; z.e.pl = function(a, b, c) {
		if (a.wa && (c || !this.wa)) throw Error("Component already rendered");
		if (0 > b || b > z.bh(this)) throw Error("Child component index out of bounds");
		this.of && this.$c || (this.of = {},
		this.$c = []);
		if (a.getParent() == this) {
			var d = a.se();
			this.of[d] = a;
			z.tb(this.$c, a)
		} else z.Lb(this.of, a.se(), a);
		z.$g(a, this);
		z.xb(this.$c, b, 0, a);
		a.wa && this.wa && a.getParent() == this ? (c = this.S(), b = c.childNodes[b] || null, b != a.m() && c.insertBefore(a.m(), b)) : c ? (this.h || this.B(), b = z.ch(this, b + 1), a.Kh(this.S(), b ? b.h: null)) : this.wa && !a.wa && a.h && a.h.parentNode && 1 == a.h.parentNode.nodeType && a.C()
	}; z.e.S = function() {
		return this.h
	}; z.e.Ed = z.m(16); z.e.Sh = z.m(17); z.e.removeChild = function(a, b) {
		if (a) {
			var c = z.oa(a) ? a: a.se();
			a = z.ah(this, c);
			c && a && (z.Kb(this.of, c), z.tb(this.$c, a), b && (a.Ab(), a.h && z.N(a.h)), z.$g(a, null))
		}
		if (!a) throw Error("Child is not in parent component");
		return a
	}; z.e.nq = z.m(11);
	var fm; (function(a) {
		fm = "div[contenteditable];.ac-row;.ac-row *;.goog-menu *;.goog-menu-button *;.goog-toolbar-button *;.goog-link-button *;.ee-menu-palette-cell *;.ee-palette-cell *".split(";");
		if (a) {
			var b = a.prototype.needsClick,
			c;
			if (window.HTMLElement) {
				var d = z.pb(["matchesSelector", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector"],
				function(a) {
					return window.HTMLElement.prototype[a]
				});
				c = d && window.HTMLElement.prototype[d]
			}
			var f = c ?
			function(a, b) {
				return c.call(a, b)
			}: function(a, b) {
				return (0, window.$)(a).is(b)
			};
			a.prototype.needsClick = function(a) {
				return z.ob(fm,
				function(b) {
					return f(a, b)
				}) ? !0 : b.call(this, a)
			}
		}
	})(window.FastClick); z.gm = "/update"; z.Ki = !1;
	var lh, qh, rh, sh, pm, qm; z.hm = {}; z.tm = {}; z.um = z.nb((0, window.$)("script.json-inline"),
	function(a, b) {
		var c = (0, window.$)(b).data("name");
		a[c] = JSON.parse(b.text);
		return a
	},
	{}); (function(a) {
		z.Y = [];
		z.Y.Lb = function() {
			return ! 1
		};
		z.Y.Ud = function() {
			return ""
		};
		z.Gk = !1;
		z.Db(a,
		function(a, c) {
			switch (c) {
			case "redirect_to":
				z.im = a;
				break;
			case "current_user":
				z.Y = a;
				z.Y.JG = a[0];
				z.Y.Lb = function() {
					return "-1" !== z.Y.Ag
				};
				z.Y.LE = a[2];
				z.Y.Ag = a[3];
				z.Y.EH = a[4];
				z.Y.Ie = a[7];
				z.Y.email = a[8];
				z.Y.e0 = a[9];
				z.Y.a0 = a[10];
				z.Y.$A = a[11];
				z.Y.zt = a[12];
				z.Y.$_ = a[13];
				z.Y.Ud = function(a) {
					var b = z.Y.LE;
					return a ? b.replace("_s", "_" + a) : b
				};
				z.Y.uJ = a[14];
				z.Y.Qc = a[15];
				z.Y.mA = a[16];
				z.Y.fW = a[17];
				z.Y.gW = a[18];
				z.Y.eW = a[19];
				break;
			case "user_status":
				z.jm = a;
				z.jm.mG = a[0];
				z.jm.px = a[1];
				break;
			case "env":
				z.Mb(z.tm, {
					ZK: a[0],
					ao: ("https:" === window.document.location.protocol ? "https://": "http://") + a[1],
					mb: a[2],
					eI: a[3],
					HC: ("https:" === window.document.location.protocol ? "https://static.": "http://static.") + a[0] + "/static",
					gr: ("https:" === window.document.location.protocol ? "https://upload.": "http://upload.") + a[0] + ":" + window.location.port,
					zI: !1,
					HT: a[4]
				});
				break;
			case "current_question":
				z.R = {
					pa: a.qid,
					gb: a.urlToken,
					status: a.status,
					pA: a.isLocked,
					Nn: a.askAboutMember,
					mQ: a.editPermission,
					ub: a.isAnon,
					eY: a.showInvitePanel,
					Q_: a.detailEditReasonRequired,
					sp: a.isEditLocked,
					Qc: a.isOrg,
					Me: 0,
					hs: 0,
					sn: null,
					N_: 0,
					c0: !1,
					v0: !0,
					Jh: [],
					G_: []
				};
				break;
			case "current_question_bio":
				z.km = a;
				break;
			case "my_answer":
				z.lm = a;
				break;
			case "current_question_owner":
				z.Y.Jh = a;
				break;
			case "current_answer":
				lh = a;
				break;
			case "bio":
				z.mm = a;
				break;
			case "current_topic":
				z.ph = a;
				break;
			case "is_editor":
				z.nm = a;
				break;
			case "current_people":
				z.nh = a;
				z.nh.JG = a[0];
				z.nh.gb = a[1];
				z.nh.id = a[3];
				break;
			case "current_roundtable":
				z.oh = a;
				break;
			case "current_list":
				z.mh = a;
				z.mh.gb = a[2];
				break;
			case "current_live":
				qh = a;
				break;
			case "current_ebook":
				rh = a;
				break;
			case "current_publications_promotion":
				sh = a;
				break;
			case "block_topic":
				z.om = a;
				break;
			case "draft":
				z.hm.ie = a.length ? a: null;
				break;
			case "disabled_components":
				pm = a;
				break;
			case "comet_path":
				z.gm = a;
				break;
			case "is_org_page":
				z.Gk = !!a;
				break;
			case "permissions":
				qm = a,
				z.rm = function(a) {
					return z.rb(qm, a)
				}
			}
		});
		z.R && (z.R.mI = !1);
		z.sm = function(a) {
			return !! pm && z.rb(pm, a)
		};
		window.navigator.userAgent.match(/iPad/i) && (z.tm.zI = !0, z.tm.mb = !0);
		if (z.tm.ZK) try {
			window.document.domain = z.tm.ZK
		} catch(b) {
			window.console && window.console.warn(b)
		}
		z.tm.ao && (z.gm = z.tm.ao + z.gm)
	})(z.um); z.x("ZH.META.currentUser.getAvatarUrl", z.Y.Ud);
	var wm, Si, Ri, ak; z.vm = /iPad|iPhone/.test(window.navigator.userAgent); wm = z.vm && window.navigator.userAgent.match(/(iPad|iPhone).+os (\d+)/i); z.xm = wm && +wm[2]; z.ym = z.tm.HT; Si = /Android/.test(window.navigator.userAgent); z.zm = z.tm.mb; z.gh = /MicroMessenger/.test(window.navigator.userAgent); Ri = /Weibo/.test(window.navigator.userAgent); z.Am = /UCBrowser/.test(window.navigator.userAgent); ak = /Mobile/.test(window.navigator.userAgent) && /CriOS/.test(window.navigator.userAgent); z.Bm = z.vm && !!window.indexedDB; z.Cm = Boolean(window.navigator.userAgent.match(/Version\/[\d\.]+.*Safari/));
	var kh = {
		title: window.document.title,
		desc: "与世界分享你的知识、经验和见解",
		link: window.location.href,
		imgUrl: window.location.protocol + "//" + window.location.hostname + "/static/revved/img/wechat-share-image.6e8f6318.png",
		type: "link"
	}; z.e = z.th.prototype; z.e.toString = function() {
		var a = [],
		b = this.$i;
		b && a.push(Bh(b, Dm, !0), ":");
		var c = this.ih;
		if (c || "file" == b) a.push("//"),
		(b = this.Be) && a.push(Bh(b, Dm, !0), "@"),
		a.push((0, window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
		c = this.Rm,
		null != c && a.push(":", String(c));
		if (c = this.af) this.ih && "/" != c.charAt(0) && a.push("/"),
		a.push(Bh(c, "/" == c.charAt(0) ? Em: Fm, !0)); (c = this.ze.toString()) && a.push("?", c); (c = this.Uj) && a.push("#", Bh(c, Gm));
		return a.join("")
	}; z.e.resolve = function(a) {
		var b = this.clone(),
		c = !!a.$i;
		c ? uh(b, a.$i) : c = !!a.Be;
		if (c) {
			var d = a.Be;
			z.vh(b);
			b.Be = d
		} else c = !!a.ih;
		c ? (d = a.ih, z.vh(b), b.ih = d) : c = null != a.Rm;
		d = a.af;
		if (c) wh(b, a.Rm);
		else if (c = !!a.af) {
			if ("/" != d.charAt(0)) if (this.ih && !this.af) d = "/" + d;
			else {
				var f = b.af.lastIndexOf("/"); - 1 != f && (d = b.af.substr(0, f + 1) + d)
			}
			f = d;
			if (".." == f || "." == f) d = "";
			else if (z.Wa(f, "./") || z.Wa(f, "/.")) {
				for (var d = z.Ia(f, "/"), f = f.split("/"), g = [], h = 0; h < f.length;) {
					var k = f[h++];
					"." == k ? d && h == f.length && g.push("") : ".." == k ? ((1 < g.length || 1 == g.length && "" != g[0]) && g.pop(), d && h == f.length && g.push("")) : (g.push(k), d = !0)
				}
				d = g.join("/")
			} else d = f
		}
		c ? (z.vh(b), b.af = d) : c = "" !== a.ze.toString();
		c ? xh(b, yh(a.ze.toString())) : c = !!a.Uj;
		c && (a = a.Uj, z.vh(b), b.Uj = a);
		return b
	}; z.e.clone = function() {
		return new z.th(this)
	}; z.e.Vd = function() {
		return this.ze
	}; z.e.pC = function(a) {
		this.Se = a;
		this.ze && this.ze.pC(a);
		return this
	};
	var Dm = /[#\/\?@]/g,
	Fm = /[\#\?:]/g,
	Em = /[\#\?]/g,
	Ch = /[\#\?@]/g,
	Gm = /#/g; z.e = z.Ah.prototype; z.e.hb = function() {
		Fh(this);
		return this.Oa
	}; z.e.add = function(a, b) {
		Fh(this);
		this.ne = null;
		a = Gh(this, a);
		var c = this.Sb.get(a);
		c || this.Sb.set(a, c = []);
		c.push(b);
		this.Oa++;
		return this
	}; z.e.remove = function(a) {
		Fh(this);
		a = Gh(this, a);
		return this.Sb.eg(a) ? (this.ne = null, this.Oa -= this.Sb.get(a).length, this.Sb.remove(a)) : !1
	}; z.e.clear = function() {
		this.Sb = this.ne = null;
		this.Oa = 0
	}; z.e.vh = function() {
		Fh(this);
		return 0 == this.Oa
	}; z.e.eg = function(a) {
		Fh(this);
		a = Gh(this, a);
		return this.Sb.eg(a)
	}; z.e.vi = z.m(5); z.e.zd = function() {
		Fh(this);
		for (var a = this.Sb.fd(), b = this.Sb.zd(), c = [], d = 0; d < b.length; d++) for (var f = a[d], g = 0; g < f.length; g++) c.push(b[d]);
		return c
	}; z.e.fd = function(a) {
		Fh(this);
		var b = [];
		if (z.oa(a)) this.eg(a) && (b = z.ub(b, this.Sb.get(Gh(this, a))));
		else {
			a = this.Sb.fd();
			for (var c = 0; c < a.length; c++) b = z.ub(b, a[c])
		}
		return b
	}; z.e.set = function(a, b) {
		Fh(this);
		this.ne = null;
		a = Gh(this, a);
		this.eg(a) && (this.Oa -= this.Sb.get(a).length);
		this.Sb.set(a, [b]);
		this.Oa++;
		return this
	}; z.e.get = function(a, b) {
		var c = a ? this.fd(a) : [];
		return 0 < c.length ? String(c[0]) : b
	}; z.e.toString = function() {
		if (this.ne) return this.ne;
		if (!this.Sb) return "";
		for (var a = [], b = this.Sb.zd(), c = 0; c < b.length; c++) for (var d = b[c], f = (0, window.encodeURIComponent)(String(d)), d = this.fd(d), g = 0; g < d.length; g++) {
			var h = f;
			"" !== d[g] && (h += "\x3d" + (0, window.encodeURIComponent)(String(d[g])));
			a.push(h)
		}
		return this.ne = a.join("\x26")
	}; z.e.clone = function() {
		var a = new z.Ah;
		a.ne = this.ne;
		this.Sb && (a.Sb = this.Sb.clone(), a.Oa = this.Oa);
		return a
	}; z.e.pC = function(a) {
		a && !this.Se && (Fh(this), this.ne = null, this.Sb.forEach(function(a, c) {
			var d = c.toLowerCase();
			c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.ne = null, this.Sb.set(Gh(this, d), z.vb(a)), this.Oa += a.length))
		},
		this));
		this.Se = a
	}; z.e.extend = function(a) {
		for (var b = 0; b < arguments.length; b++) Kd(arguments[b],
		function(a, b) {
			this.add(b, a)
		},
		this)
	}; z.y(Ih, Hh); Ih.prototype.hb = function() {
		var a = 0;
		z.Od(this.td(!0),
		function() {
			a++
		});
		return a
	}; Ih.prototype.clear = function() {
		var a = z.Pd(this.td(!0)),
		b = this;
		z.A(a,
		function(a) {
			b.remove(a)
		})
	}; z.y(Jh, Ih); z.e = Jh.prototype; z.e.zm = function() {
		if (!this.Wc) return ! 1;
		try {
			return this.Wc.setItem("__sak", "1"),
			this.Wc.removeItem("__sak"),
			!0
		} catch(a) {
			return ! 1
		}
	}; z.e.set = function(a, b) {
		try {
			this.Wc.setItem(a, b)
		} catch(c) {
			if (0 == this.Wc.length) throw "Storage mechanism: Storage disabled";
			throw "Storage mechanism: Quota exceeded";
		}
	}; z.e.get = function(a) {
		a = this.Wc.getItem(a);
		if (!z.oa(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
		return a
	}; z.e.remove = function(a) {
		this.Wc.removeItem(a)
	}; z.e.hb = function() {
		return this.Wc.length
	}; z.e.td = function(a) {
		var b = 0,
		c = this.Wc,
		d = new z.Ld;
		d.next = function() {
			if (b >= c.length) throw z.Nd;
			var d = c.key(b++);
			if (a) return d;
			d = c.getItem(d);
			if (!z.oa(d)) throw "Storage mechanism: Invalid value was encountered";
			return d
		};
		return d
	}; z.e.clear = function() {
		this.Wc.clear()
	}; z.e.key = function(a) {
		return this.Wc.key(a)
	}; z.y(Kh, Jh); z.y(Lh, Jh); z.y(Mh, Ih);
	var Ph = {
		".": ".2E",
		"!": ".21",
		"~": ".7E",
		"*": ".2A",
		"'": ".27",
		"(": ".28",
		")": ".29",
		"%": "."
	},
	Nh = null; z.e = Mh.prototype; z.e.zm = function() {
		return !! this.Ld
	}; z.e.set = function(a, b) {
		this.Ld.setAttribute(Oh(a), b);
		Qh(this)
	}; z.e.get = function(a) {
		a = this.Ld.getAttribute(Oh(a));
		if (!z.oa(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
		return a
	}; z.e.remove = function(a) {
		this.Ld.removeAttribute(Oh(a));
		Qh(this)
	}; z.e.hb = function() {
		return Rh(this).attributes.length
	}; z.e.td = function(a) {
		var b = 0,
		c = Rh(this).attributes,
		d = new z.Ld;
		d.next = function() {
			if (b >= c.length) throw z.Nd;
			var d = c[b++];
			if (a) return (0, window.decodeURIComponent)(d.nodeName.replace(/\./g, "%")).substr(1);
			d = d.nodeValue;
			if (!z.oa(d)) throw "Storage mechanism: Invalid value was encountered";
			return d
		};
		return d
	}; z.e.clear = function() {
		for (var a = Rh(this), b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
		Qh(this)
	}; z.y(Sh, Ih); Sh.prototype.set = function(a, b) {
		this.Hp.set(this.Sm + a, b)
	}; Sh.prototype.get = function(a) {
		return this.Hp.get(this.Sm + a)
	}; Sh.prototype.remove = function(a) {
		this.Hp.remove(this.Sm + a)
	}; Sh.prototype.td = function(a) {
		var b = this.Hp.td(!0),
		c = this,
		d = new z.Ld;
		d.next = function() {
			for (var d = b.next(); d.substr(0, c.Sm.length) != c.Sm;) d = b.next();
			return a ? d.substr(c.Sm.length) : c.Hp.get(d)
		};
		return d
	};
	var Hm = {
		RN: "UserDataSharedStore",
		create: function(a) {
			return Hm.IP(a) || Hm.JP(a)
		},
		IP: function(a) {
			var b = new Kh;
			return b.zm() ? a ? new Sh(b, a) : b: null
		},
		P_: function(a) {
			var b = new Lh;
			return b.zm() ? a ? new Sh(b, a) : b: null
		},
		JP: function(a) {
			a = new Mh(a || Hm.RN);
			return a.zm() ? a: null
		}
	}; z.Im = {}; z.Ca(z.Im, Hm); z.Im.create = function(a) { (a = Hm.create(a)) || (a = {
			zm: z.Fl,
			get: z.Hl,
			set: z.r,
			remove: z.r
		});
		return a
	}; z.Uh = z.Im.create(); z.e = Th.prototype; z.e.ib = function() {
		var a = this.Wc.get(this.wA);
		return a ? JSON.parse(a) : []
	}; z.e.iq = function(a) {
		var b = this.ib();
		b.push(a);
		try {
			this.Wc.set(this.wA, JSON.stringify(b))
		} catch(c) {}
	}; z.e.g = function(a) {
		this.BH.push(a)
	}; z.e.Gu = function(a) {
		this.BH.forEach(function(b) {
			return b(a)
		})
	}; z.e.restore = function() {
		var a = this.ib();
		a.length && (this.Gu(a), this.Wc.remove(this.wA))
	};
	var li; li = {
		uN: ["BC", "AD"],
		tN: ["Before Christ", "Anno Domini"],
		xN: "JFMAMJJASOND".split(""),
		HN: "JFMAMJJASOND".split(""),
		vN: "January February March April May June July August September October November December".split(" "),
		GN: "January February March April May June July August September October November December".split(" "),
		CN: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
		JN: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
		TN: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
		LN: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
		EN: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
		KN: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
		j_: "SMTWTFS".split(""),
		IN: "SMTWTFS".split(""),
		DN: ["Q1", "Q2", "Q3", "Q4"],
		yN: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
		qN: ["AM", "PM"],
		YD: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
		eE: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
		rN: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
		$D: 6,
		C_: [5, 6],
		aE: 5
	};
	var vi = /^(\d{4})(?:(?:-?(\d{2})(?:-?(\d{2}))?)|(?:-?(\d{3}))|(?:-?W(\d{2})(?:-?([1-7]))?))?$/,
	xi = /^(\d{2})(?::?(\d{2})(?::?(\d{2})(\.\d+)?)?)?$/,
	wi = /Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/; Vh.prototype.Wq = function(a) {
		var b = Math.min(this.fe, this.Yd, this.Qd, this.Cd, this.Fd, this.Jd),
		c = Math.max(this.fe, this.Yd, this.Qd, this.Cd, this.Fd, this.Jd);
		if (0 > b && 0 < c) return null;
		if (!a && 0 == b && 0 == c) return "PT0S";
		c = [];
		0 > b && c.push("-");
		c.push("P"); (this.fe || a) && c.push(Math.abs(this.fe) + "Y"); (this.Yd || a) && c.push(Math.abs(this.Yd) + "M"); (this.Qd || a) && c.push(Math.abs(this.Qd) + "D");
		if (this.Cd || this.Fd || this.Jd || a) c.push("T"),
		(this.Cd || a) && c.push(Math.abs(this.Cd) + "H"),
		(this.Fd || a) && c.push(Math.abs(this.Fd) + "M"),
		(this.Jd || a) && c.push(Math.abs(this.Jd) + "S");
		return c.join("")
	}; Vh.prototype.equals = function(a) {
		return a.fe == this.fe && a.Yd == this.Yd && a.Qd == this.Qd && a.Cd == this.Cd && a.Fd == this.Fd && a.Jd == this.Jd
	}; Vh.prototype.clone = function() {
		return new Vh(this.fe, this.Yd, this.Qd, this.Cd, this.Fd, this.Jd)
	};
	var Wh = "y",
	Xh = "m",
	Yh = "d",
	Zh = "h",
	$h = "n",
	ai = "s"; Vh.prototype.HY = function(a) {
		return new Vh(this.fe * a, this.Yd * a, this.Qd * a, this.Cd * a, this.Fd * a, this.Jd * a)
	}; Vh.prototype.add = function(a) {
		this.fe += a.fe;
		this.Yd += a.Yd;
		this.Qd += a.Qd;
		this.Cd += a.Cd;
		this.Fd += a.Fd;
		this.Jd += a.Jd
	}; z.e = bi.prototype; z.e.Xs = li.$D; z.e.Ys = li.aE; z.e.clone = function() {
		var a = new bi(this.fa);
		a.Xs = this.Xs;
		a.Ys = this.Ys;
		return a
	}; z.e.getFullYear = function() {
		return this.fa.getFullYear()
	}; z.e.getYear = function() {
		return this.getFullYear()
	}; z.e.getMonth = function() {
		return this.fa.getMonth()
	}; z.e.getDate = function() {
		return this.fa.getDate()
	}; z.e.getTime = function() {
		return this.fa.getTime()
	}; z.e.getDay = function() {
		return this.fa.getDay()
	}; z.e.getUTCFullYear = function() {
		return this.fa.getUTCFullYear()
	}; z.e.getUTCMonth = function() {
		return this.fa.getUTCMonth()
	}; z.e.getUTCDate = function() {
		return this.fa.getUTCDate()
	}; z.e.getUTCDay = function() {
		return this.fa.getDay()
	}; z.e.getUTCHours = function() {
		return this.fa.getUTCHours()
	}; z.e.getUTCMinutes = function() {
		return this.fa.getUTCMinutes()
	}; z.e.getTimezoneOffset = function() {
		return this.fa.getTimezoneOffset()
	}; z.e.set = function(a) {
		this.fa = new Date(a.getFullYear(), a.getMonth(), a.getDate())
	}; z.e.setFullYear = function(a) {
		this.fa.setFullYear(a)
	}; z.e.setYear = function(a) {
		this.setFullYear(a)
	}; z.e.setMonth = function(a) {
		this.fa.setMonth(a)
	}; z.e.setDate = function(a) {
		this.fa.setDate(a)
	}; z.e.setTime = function(a) {
		this.fa.setTime(a)
	}; z.e.setUTCFullYear = function(a) {
		this.fa.setUTCFullYear(a)
	}; z.e.setUTCMonth = function(a) {
		this.fa.setUTCMonth(a)
	}; z.e.setUTCDate = function(a) {
		this.fa.setUTCDate(a)
	}; z.e.add = function(a) {
		if (a.fe || a.Yd) {
			var b = this.getMonth() + a.Yd + 12 * a.fe,
			c = this.getYear() + Math.floor(b / 12),
			b = b % 12;
			0 > b && (b += 12);
			var d;
			a: {
				switch (b) {
				case 1:
					d = 0 != c % 4 || 0 == c % 100 && 0 != c % 400 ? 28 : 29;
					break a;
				case 5:
				case 8:
				case 10:
				case 3:
					d = 30;
					break a
				}
				d = 31
			}
			d = Math.min(d, this.getDate());
			this.setDate(1);
			this.setFullYear(c);
			this.setMonth(b);
			this.setDate(d)
		}
		a.Qd && (a = new Date((new Date(this.getYear(), this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * a.Qd), this.setDate(1), this.setFullYear(a.getFullYear()), this.setMonth(a.getMonth()), this.setDate(a.getDate()), di(this, a.getDate()))
	}; z.e.Wq = function(a, b) {
		return [this.getFullYear(), Ya(this.getMonth() + 1, 2), Ya(this.getDate(), 2)].join(a ? "-": "") + (b ? ei(this) : "")
	}; z.e.equals = function(a) {
		return ! (!a || this.getYear() != a.getYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate())
	}; z.e.toString = function() {
		return this.Wq()
	}; z.e.valueOf = function() {
		return this.fa.valueOf()
	}; z.y(fi, bi); z.e = fi.prototype; z.e.getHours = function() {
		return this.fa.getHours()
	}; z.e.getMinutes = function() {
		return this.fa.getMinutes()
	}; z.e.getSeconds = function() {
		return this.fa.getSeconds()
	}; z.e.getMilliseconds = function() {
		return this.fa.getMilliseconds()
	}; z.e.getUTCDay = function() {
		return this.fa.getUTCDay()
	}; z.e.getUTCHours = function() {
		return this.fa.getUTCHours()
	}; z.e.getUTCMinutes = function() {
		return this.fa.getUTCMinutes()
	}; z.e.getUTCSeconds = function() {
		return this.fa.getUTCSeconds()
	}; z.e.getUTCMilliseconds = function() {
		return this.fa.getUTCMilliseconds()
	}; z.e.setHours = function(a) {
		this.fa.setHours(a)
	}; z.e.setMinutes = function(a) {
		this.fa.setMinutes(a)
	}; z.e.setSeconds = function(a) {
		this.fa.setSeconds(a)
	}; z.e.setMilliseconds = function(a) {
		this.fa.setMilliseconds(a)
	}; z.e.setUTCHours = function(a) {
		this.fa.setUTCHours(a)
	}; z.e.setUTCMinutes = function(a) {
		this.fa.setUTCMinutes(a)
	}; z.e.setUTCSeconds = function(a) {
		this.fa.setUTCSeconds(a)
	}; z.e.setUTCMilliseconds = function(a) {
		this.fa.setUTCMilliseconds(a)
	}; z.e.add = function(a) {
		bi.prototype.add.call(this, a);
		a.Cd && this.setUTCHours(this.fa.getUTCHours() + a.Cd);
		a.Fd && this.setUTCMinutes(this.fa.getUTCMinutes() + a.Fd);
		a.Jd && this.setUTCSeconds(this.fa.getUTCSeconds() + a.Jd)
	}; z.e.Wq = function(a, b) {
		var c = bi.prototype.Wq.call(this, a);
		return a ? c + " " + Ya(this.getHours(), 2) + ":" + Ya(this.getMinutes(), 2) + ":" + Ya(this.getSeconds(), 2) + (b ? ei(this) : "") : c + "T" + Ya(this.getHours(), 2) + Ya(this.getMinutes(), 2) + Ya(this.getSeconds(), 2) + (b ? ei(this) : "")
	}; z.e.equals = function(a) {
		return this.getTime() == a.getTime()
	}; z.e.toString = function() {
		return this.Wq()
	}; z.e.clone = function() {
		var a = new fi(this.fa);
		a.Xs = this.Xs;
		a.Ys = this.Ys;
		return a
	};
	var pi = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvVwzZ]+/]; ki.prototype.format = function(a, b) {
		if (!a) throw Error("The date to format must be non-null.");
		var c = b ? 6E4 * (a.getTimezoneOffset() - (b.Ev - ji(b, a))) : 0,
		d = c ? new Date(a.getTime() + c) : a,
		f = d;
		b && d.getTimezoneOffset() != a.getTimezoneOffset() && (d = new Date(d.getTime() + 6E4 * (d.getTimezoneOffset() - a.getTimezoneOffset())), f = new Date(a.getTime() + (c + (0 < c ? -864E5: 864E5))));
		for (var c = [], g = 0; g < this.Qu.length; ++g) {
			var h = this.Qu[g].text;
			1 == this.Qu[g].type ? c.push(si(this, h, a, d, f, b)) : c.push(h)
		}
		return c.join("")
	};
	var oi = !1; z.x("ZH.date.parse", ti); z.x("ZH.date.fromNow", z.yi); z.x("ZH.date.format", z.zi);
	var Ji = {}; window._gaq = window._gaq || [];
	var Jm = new Th("ga"); Jm.g(function(a) {
		z.A(a,
		function(a) {
			Ji.track.apply(Ji, a)
		})
	}); Ji.track = function(a, b, c, d, f) {
		c && (c = "" + c);
		d && (d = (0, window.parseInt)(d, 10));
		window._gaq.push(["_trackEvent", a, b, c, d, !!f])
	}; Ji.SY = function() {
		window._gaq.push(["_trackPageview"])
	}; Ji.nn = function(a, b, c, d, f) {
		Jm.iq([a, b, c, d, f])
	}; Ji.OX = function() {
		Jm.restore()
	}; Ji.HX = function() {
		var a = window._gaq;
		a.push(["_addOrganic", "baidu", "word"]);
		a.push(["_addOrganic", "baidu", "wd"]);
		a.push(["_addOrganic", "sogou", "query"]);
		a.push(["_addOrganic", "so.360.cn", "q"]);
		a.push(["_addOrganic", "so.com", "q"]);
		a.push(["_addOrganic", "soso", "w"]);
		a.push(["_addOrganic", "google", "q"]);
		a.push(["_addOrganic", "sm", "q"]);
		a.push(["_addIgnoredOrganic", "知乎"]);
		a.push(["_addIgnoredOrganic", "知乎网"]);
		a.push(["_addIgnoredOrganic", "zhihu"]);
		a.push(["_addIgnoredOrganic", "zhihu.com"]);
		a.push(["_addIgnoredOrganic", "www.zhihu.com"])
	}; Ji.$N = function() {
		var a = window._gaq,
		b = z.um.ga_vars,
		c = b.user_attr.join("");
		a.push(["_setVar", c]);
		a.push(["_setCustomVar", 1, "user_attr", c, 3]);
		var d = c = 9E12;
		b.user_created && (d = b.user_created, a.push(["_setCustomVar", 2, "registration_date", z.zi(d, "yyyyMMdd"), 1]));
		var f = window.document.cookie.match(/q_c1=(\w+)\|(\w+)\|(\d+)/);
		f && (c = +f[3]);
		b.now && a.push(["_setCustomVar", 3, "entry_date", z.zi(Math.min(c, d, b.now), "yyyyMMdd"), 1]);
		b.abtest_mask && a.push(["_setCustomVar", 4, "abtest_group", b.abtest_mask, 3]); (b = window.document.cookie.match(/ng_rid=(\d+)/)) && a.push(["_setCustomVar", 5, "Web Type", 50 >= (0, window.parseInt)(b[1], 10) ? "nweb": "zhihu_web", 3])
	}; Ji.UX = function() {
		var a = window._gaq;
		a.push(["_setAccount", "UA-20961733-1"]);
		a.push(["_setDomainName", ".zhihu.com"]);
		Ji.HX();
		Ji.$N()
	}; Ji.Hr = function() {
		var a = window.document.createElement("script");
		a.async = !0;
		a.src = ("https:" === window.document.location.protocol ? "https://ssl": "http://www") + ".google-analytics.com/ga.js";
		var b = window.document.getElementsByTagName("script")[0];
		b.parentNode.insertBefore(a, b)
	}; Ji.init = function() {
		Ji.UX();
		Ji.OX();
		Ji.SY();
		Ji.Hr()
	};
	var Km; window.za = window.za || [];
	var Bi = new Th("za"); Bi.g(function(a) {
		z.A(a,
		function(a) {
			window.za.collect("event", a)
		})
	}); Km = function() {
		var a = window.za = window.za || [];
		if (a.xT) return void(window.console && window.console.error && window.console.error("Zhihu Analytics snippet included twice."));
		a.xT = !0;
		a.methods = ["init", "collect", "set", "get"];
		a.factory = function(b) {
			return function() {
				var c = Array.prototype.slice.call(arguments);
				return c.unshift(b),
				a.push(c),
				a
			}
		};
		for (var b = 0; b < a.methods.length; b++) {
			var c = a.methods[b];
			a[c] = a.factory(c)
		}
		a.load = function() {
			var a = window.document.createElement("script");
			a.type = "text/javascript";
			a.async = !0;
			a.src = ("https:" === window.document.location.protocol ? "https://": "http://") + "zhstatic.zhihu.com/za/za-0.1.1.min.js";
			var b = window.document.getElementsByTagName("script")[0];
			b.parentNode.insertBefore(a, b)
		};
		a.p_ = "0.0.9";
		a.init("ZA-11427260206", "https://zhihu-web-analytics.zhihu.com");
		a.set({
			userID: z.Y.uJ || null
		});
		a.collect("pageview");
		return a.load
	} ();
	var Lm, Gi; z.X = {}; Lm = "www4.zhihu.com" === window.location.hostname ? "https://yuzhou2.aws.dev/api/v1": "https://zhihu-web-analytics.zhihu.com/api/v1"; Gi = []; z.X.vb = function(a, b, c) {
		var d = a && a.m ? a.m() : a;
		z.Db(b,
		function(a, b) {
			d.setAttribute("data-za-" + b, a)
		}); (0, window.$.data)(d, "zaRespondMoudleFn", c)
	}; z.X.trackPageShow = Fi(function(a, b) {
		window.zap.trackPageShow(a, b)
	}); z.X.trackCardShow = Fi(function(a, b, c) {
		a = Hi(a);
		var d = a.module;
		window.zap.trackCardShow(Object.assign({},
		b, {
			path: a.path
		}), Object.assign({},
		c, {
			module: d
		}))
	}); z.X.trackEvent = Fi(function(a, b, c) {
		a = Hi(a);
		var d = a.module;
		window.zap.trackEvent(Object.assign({},
		b, {
			path: a.path
		}), Object.assign({},
		c, {
			module: d
		}))
	}); z.X.trackMonitor = Fi(function(a, b) {
		window.zap.trackMonitor(Object.assign({},
		a), Object.assign({},
		b))
	}); z.X.config = Fi(function(a) {
		window.zap.config(a)
	}); z.X.cE = "X-Za-Response-Id"; z.X.ZD = "X-ZA-Experiment"; z.X.dT = function() { (0, window.$)(window.document).on("click", "a[href]",
		function(a) {
			var b = a.currentTarget,
			c = b.getAttribute("href"); ! c || c.startsWith("#") || "http:" !== b.protocol && "https:" !== b.protocol || (a = "IMG" === a.target.nodeName ? "Image": "Link", c = b.getAttribute("data-za-element-name") || void 0, z.X.trackEvent(b, {
				action: "OpenUrl",
				element: a,
				element_name: c
			},
			{
				link: {
					url: b.href
				}
			}))
		})
	}; z.X.init = function() {
		var a;
		window.localStorage && window.ArrayBuffer && window.Uint8Array && window.DataView ? (window.localStorage.removeItem("zap:enabled"), a = !0) : a = !1;
		a && window.$.ajax({
			url: "../zap.js",
			dataType: "script",
			cache: !0
		}).then(function() {
			for (z.X.config({
				apiHost: Lm,
				enableLog: Ii(),
				userId: z.Y.uJ,
				responseId: (0, window.$)('meta[http-equiv\x3d"' + z.X.cE + '"]').attr("content"),
				experiment: (0, window.$)('meta[http-equiv\x3d"' + z.X.ZD + '"]').attr("content"),
				product: "Zhihu"
			}); Gi.length;) {
				var a = Gi.shift();
				a.fn.apply(a, [].concat(z.ia(a.IO)))
			}
			z.X.trackPageShow();
			z.X.dT();
			z.X.trackMonitor({},
			{
				monitor: {
					type: "Page",
					statusCode: 200
				}
			})
		})
	}; z.x("ZH.zap", z.X); z.X.setAttrs = z.X.vb; z.X.trackEvent = z.X.trackEvent; z.S.nn = function(a, b, c, d, f) {
		Ji.nn(a, b, c, d, f);
		z.Di(a, b, c, d, f)
	}; z.S.init = function() {
		z.S.Rn(); (0, window.setTimeout)(function() {
			Ji.init();
			window.$.support.cors && (Km(), Bi.restore(), Ei())
		});
		z.X.init()
	}; z.S.Rn = function() {
		function a(a) {
			return {
				member: "people",
				favlist: "collection"
			} [a] || a
		} (0, window.$)(window.document).on("click", "a.video-box",
		function() {
			z.S("video", "click_videobox_open")
		}); (0, window.$)("#zh-top-link-logo").click(function() {
			z.S("navigation", "visit_home", "top_logo")
		}); (0, window.$)("#zh-top-link-home").click(function() {
			z.S("navigation", "visit_home", "top_nav_home")
		}); (0, window.$)("#top-nav-dd-topic").click(function() {
			z.S("navigation", "visit_topics_activities", "top_nav_topic")
		}); (0, window.$)("#ga_sidebar_topic_all").click(function() {
			z.S("navigation", "visit_topics_activities", "sidebar_topic_all")
		});
		var b = (0, window.$)("#zh-trendings");
		b.on("click", 'li a[href^\x3d"/topic/"]',
		function(a) {
			a = (0, window.$)(a.target).closest("li").index() + 1;
			z.S("navigation", "visit_topic", "sidebar_intresting_people_" + a + "_topic")
		});
		b.on("click", 'li a[href^\x3d"/people"]',
		function(a) {
			a = (0, window.$)(a.target).closest("li").index() + 1;
			z.S("navigation", "visit_people_profile", "sidebar_interesting_people_" + a)
		}); (0, window.$)("#zh-single-question-page .zm-tag-editor-labels a.zm-item-tag").click(function() {
			z.S("question_answer", "visit_topic", "question_topic")
		});
		z.F(z.W, "ga_serach_select",
		function(a) {
			"topic" === a.data.type && z.S("search", "visit_topic", "top_search_list_" + (a.data.index + 1))
		});
		var c = (0, window.$)(".zm-topic-list-container").on("click", '.subtopic a[href^\x3d"/topic/"]',
		function() {
			z.S("topic", "visit_topic", "topic_activity_children_topic")
		}); (0, window.$)(".zm-side-section-inner.child-topic").on("click", 'a.zm-item-tag[href^\x3d"/topic/"]',
		function() {
			z.S("topic", "visit_topic", "topic_sidebar_children_topic")
		}); (0, window.$)(".zm-topic-cat-hot").on("click", 'a[href^\x3d"/topic/"]',
		function() {
			z.S("topic", "visit_topic", "topic_square_sidebar")
		}); (0, window.$)(".zm-topic-cat-sub").on("click", 'a[href^\x3d"/topic/"]',
		function() {
			z.S("topic", "visit_topic", "topic_square_list_item")
		}); (0, window.$)('a.zm-side-nav-link[href\x3d"/topics"]').click(function() {
			z.S("navigation", "visit_topic_square", "sidebar_topic_square")
		}); (0, window.$)("#zh-tooltip, #zh-hovercard").on("click", ".zh-profile-card.member .avatar-link",
		function() {
			z.S("navigation", "visit_people_profile", "hovercard_people_name")
		});
		var d = (0, window.$)("#zh-top-nav-live-new").on("click", '.zm-noti7-content-item[data-notigroupname\x3d"FOLLOW"] .zm-list-content-medium a[href^\x3d"/people"]',
		function() {
			z.S("notification", "visit_people_profile", "top_nav_noti_follower_people_name")
		}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"FOLLOW"] .zm-item-link-avatar',
		function() {
			z.S("notification", "visit_people_profile", "top_nav_noti_follower_people_avatar")
		});
		d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"VOTE_THANK"] a[href^\x3d"/people"]',
		function() {
			z.S("notification", "visit_people_profile", "top_nav_noti_vote_thank_people_name")
		});
		d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"INVITE"] a[href^\x3d"/people"]',
		function() {
			z.S("notification", "visit_people_profile", "top_nav_noti_message_invitation_people_name")
		}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION_COMMENT"] a[href^\x3d"/people"]',
		function() {
			z.S("notification", "visit_people_profile", "top_nav_noti_message_qcomment_people_name")
		}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER_COMMENT"] a[href^\x3d"/people"]',
		function() {
			z.S("notification", "visit_people_profile", "top_nav_noti_message_acomment_people_name")
		}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER"] a[href^\x3d"/people"]',
		function() {
			z.S("notification", "visit_people_profile", "top_nav_noti_message_new_answer_people_name")
		}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION"] a[href^\x3d"/people"]',
		function() {
			z.S("notification", "visit_people_profile", "top_nav_noti_message_edit_people_name")
		}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ARTICLE_PUBLISH"] .user-block a',
		function() {
			z.S("notification", "visit_people_profile", "top_nav_noti_message_new_article")
		}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ARTICLE_PUBLISH"] .column_link',
		function() {
			z.S("notification", "visit_column", "top_nav_noti_message_new_article")
		}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ARTICLE_PUBLISH"] .post-link',
		function() {
			z.S("notification", "visit_article", "top_nav_noti_message_new_article")
		}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"PUBLICATION_PUBLISH"] .user-block a',
		function() {
			z.S("notification", "visit_people_profile", "top_nav_noti_message_publication")
		}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"PUBLICATION_PUBLISH"] .question_link',
		function() {
			z.S("notification", "visit_publication", "top_nav_noti_message_publication")
		});
		var f = (0, window.$)("#js-home-feed-list");
		f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] .source a[href^\x3d"/people"]',
		function() {
			z.S("feed", "visit_people_profile", "feed_answer_vote_source_people_name")
		});
		f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] \x3e.avatar a[href^\x3d"/people"]',
		function() {
			z.S("feed", "visit_people_profile", "feed_answer_vote_source_people_avatar")
		});
		f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] .zm-item-answer-author-info a[href^\x3d"/people"]',
		function() {
			z.S("feed", "visit_people_profile", "feed_answer_vote_author_name")
		});
		f.on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] .source a[href^\x3d"/people"]',
		function() {
			z.S("feed", "visit_people_profile", "feed_answer_answer_source_people_name")
		});
		f.on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] \x3e.avatar a[href^\x3d"/people"]',
		function() {
			z.S("feed", "visit_people_profile", "feed_answer_answer_source_people_avatar")
		});
		f.on("click", 'div[data-feedtype\x3d"QUESTION_FOLLOW"] .source a[href^\x3d"/people"]',
		function() {
			z.S("feed", "visit_people_profile", "feed_question_follow_source_people_name")
		});
		f.on("click", 'div[data-feedtype\x3d"QUESTION_FOLLOW"] \x3e.avatar a[href^\x3d"/people"]',
		function() {
			z.S("feed", "visit_people_profile", "feed_question_follow_source_people_avatar")
		});
		f.on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] .source a[href^\x3d"/people"]',
		function() {
			z.S("feed", "visit_people_profile", "feed_question_ask_source_people_name")
		});
		f.on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] \x3e.avatar a[href^\x3d"/people"]',
		function() {
			z.S("feed", "visit_people_profile", "feed_question_ask_source_people_avatar")
		});
		var g = (0, window.$)("#zh-question-answer-wrap").on("click", '.zm-item-answer-author-info \x3ea[href^\x3d"/people"]',
		function() {
			z.S("question_answer", "visit_people_profile", "question_answer_author_name")
		}).on("click", ".zm-item-answer-author-info img.zm-list-avatar",
		function() {
			z.S("question_answer", "visit_people_profile", "question_answer_author_avatar")
		});
		g.on("click", ".voters a",
		function() {
			var a = (0, window.$)(this).parents(".voters").find("a").index(this) + 1;
			z.S("question_answer", "visit_people_profile", "question_answer_voters_" + a)
		});
		g.on("click", '.zm-comment-hd a[href^\x3d"/people"]',
		function() {
			z.S("question_answer", "visit_people_profile", "question_answer_comment_author_name")
		}).on("click", ".zm-comment-list img.zm-item-img-avatar",
		function() {
			z.S("question_answer", "visit_people_profile", "question_answer_comment_author_avatar")
		}); (0, window.$)(".zh-question-followers-sidebar", 'a[href^\x3d"/people"]',
		function() {
			z.S("question_answer", "visit_people_profile", "question_sidebar_followers_avatar")
		});
		z.F(z.W, "ga_serach_select",
		function(a) {
			"people" === a.data.type && z.S("search", "visit_people_profile", "top_search_list_" + (a.data.index + 1))
		}); (0, window.$)("#zh-topic-top-answerer").on("click", '.zm-topic-side-person-item-content a[href^\x3d"/people/"]',
		function() {
			z.S("topic", "visit_people_profile", "topic_sidebar_top_answerer_people_name")
		}).on("click", "img.zm-list-avatar",
		function() {
			z.S("topic", "visit_people_profile", "topic_sidebar_top_answerer_people_avatar")
		});
		d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"VOTE_THANK"] a[href^\x3d"/question"]',
		function() {
			z.S("notification", "visit_question", "top_nav_noti_vote_thank_question")
		});
		d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"INVITE"] a[href^\x3d"/question"]',
		function() {
			z.S("notification", "visit_question", "top_nav_noti_message_invitation_question")
		}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION_COMMENT"] a[href^\x3d"/question"]',
		function() {
			z.S("notification", "visit_question", "top_nav_noti_message_qcomment_question")
		}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER_COMMENT"] a[href^\x3d"/question"]',
		function() {
			z.S("notification", "visit_question", "top_nav_noti_message_acomment_question")
		}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER"] a[href^\x3d"/question"]',
		function() {
			z.S("notification", "visit_question", "top_nav_noti_message_new_answser_question")
		});
		f.on("click", 'div[data-feedtype\x3d"ROUNDTABLE_ADD_RELATED"] h2 a[href^\x3d"/question"]',
		function() {
			var a = "q" === (0, window.$)(this).closest("div[data-feedtype]").data("type");
			z.S("feed", "visit_question", a ? "roundtable_question_add": "roundtable_answer_add")
		}).on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] h2 a[href^\x3d"/question"]',
		function() {
			z.S("feed", "visit_question", "feed_answer_vote_question")
		}).on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] h2 a[href^\x3d"/question"]',
		function() {
			z.S("feed", "visit_question", "feed_answer_answer_question")
		}).on("click", 'div[data-feedtype\x3d"QUESTION_FOLLOW"] h2 a[href^\x3d"/question"]',
		function() {
			z.S("feed", "visit_question", "feed_question_follow_question")
		}).on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] a.meta-item[href^\x3d"/question"]',
		function() {
			var a = (0, window.parseInt)((0, window.$)(this).text(), 10);
			a ? z.S("feed", "visit_question", "feed_question_follow_has_answers", a) : z.S("feed", "visit_question", "feed_question_follow_has_no_answer")
		}).on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] h2 a[href^\x3d"/question"]',
		function() {
			z.S("feed", "visit_question", "feed_question_ask_question")
		});
		z.F(z.W, "ga_serach_select",
		function(a) {
			"question" === a.data.type && z.S("search", "visit_question", "top_search_list_" + (a.data.index + 1))
		}); (0, window.$)("#zh-question-related-questions").on("click", "a",
		function(a) {
			a = (0, window.$)(a.delegateTarget).find("a").index(this) + 1;
			z.S.nn("question_answer", "visit_question", "question_answer_sidebar_related_questions_" + a)
		}); (0, window.$)('#zh-question-followers-sidebar a[href^\x3d"/question"][href$\x3d"/followers"]').click(function() {
			z.S("question_answer", "visit_question_followers", "question_followers_count")
		});
		d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION"] a[href^\x3d"/question"]',
		function() {
			z.S("notification", "visit_question_log", "top_nav_noti_message_edit_question")
		}); (0, window.$)('.zu-main-sidebar a[href^\x3d"/question"][href$\x3d"/log"]').click(function() {
			z.S("question_answer", "visit_question_log", "question_log")
		}); (0, window.$)('div[data-feedtype\x3d"ANSWER_CREATE"] .answer-date-link').click(function() {
			z.S("feed", "visit_answer", "feed_answer_answer_date")
		}); (0, window.$)('div[data-feedtype\x3d"ANSWER_VOTE_UP"] .answer-date-link').click(function() {
			z.S("feed", "visit_answer", "feed_answer_vote_date")
		}); (0, window.$)("zh-single-question-page .answer-date-link").click(function() {
			z.S("question_answer", "visit_answer", "question_answer_date")
		}); (0, window.$)('a.zm-side-nav-link[href\x3d"/draft"]').click(function() {
			var a = (0, window.parseInt)((0, window.$)(this).find(".zg-num").text() || 0, 10);
			z.S("navigation", "visit_draft", "sidebar_my_draft", a)
		}); (0, window.$)('a.zm-side-nav-link[href\x3d"/collections"]').click(function() {
			var a = (0, window.parseInt)((0, window.$)(this).find(".zg-num").text() || 0, 10);
			z.S("navigation", "visit_collections", "sidebar_my_collections", a)
		}); (0, window.$)('a.zm-side-nav-link[href\x3d"/question/invited"]').click(function() {
			var a = (0, window.parseInt)((0, window.$)(this).find(".zg-num").text() || 0, 10);
			z.S("navigation", "visit_question_invited", "sidebar_question_invited", a)
		}); (0, window.$)('a[href\x3d"http://creativecommons.org"]').click(function() {
			z.S("navigation", "visit_cc_license")
		});
		z.F(z.W, "ga_click_back_to_top",
		function() {
			z.S("navigation", "click_back_to_top")
		});
		z.F(z.W, "ga_click_collapse_answer",
		function() {
			z.S("navigation", "click_collapse_answer")
		});
		z.F(z.W, "ga_click_follow",
		function(a) {
			if ("people" === a.data.type && a.data.uk) {
				var c = (0, window.$)(a.target);
				0 < c.parents("#zh-top-nav-live-new").length ? (a = d.find('a[name\x3d"focus"]').index(a.target) + 1, z.S("notification", "click_follow_people", "top_nav_noti_follower_follow", a)) : 0 < c.parents("#zh-tooltip, #zh-hovercard").length ? z.S("navigation", "click_follow_people", "hovercard_follow") : 0 < c.parents("#zh-trendings").length ? (a = b.find("a.follow").index(a.target) + 1, z.S("navigation", "click_follow_people", "sidebar_intresting_people_" + a + "_follow")) : 0 < c.parents("#zh-topic-top-answerer").length ? z.S("topic", "click_follow_people", "topic_sidebar_top_answerer_follow") : z.S("navigation", "click_follow_people", "other_follow")
			}
		});
		z.F(z.W, "ga_click_follow",
		function(a) {
			if ("people" === a.data.type && !a.data.uk) {
				var c = (0, window.$)(a.target);
				0 < c.parents("#zh-top-nav-live-new").length ? (a = d.find('a[name\x3d"focus"]').index(a.target) + 1, z.S("notification", "click_unfollow_people", "top_nav_noti_follower_unfollow", a)) : 0 < c.parents("#zh-tooltip, #zh-hovercard").length ? z.S("navigation", "click_unfollow_people", "hovercard_unfollow") : 0 < c.parents("#zh-trendings").length ? (a = b.find("a.follow").index(a.target) + 1, z.S("navigation", "click_unfollow_people", "sidebar_intresting_people_" + a + "_unfollow")) : 0 < c.parents("#zh-topic-top-answerer").length && z.S("topic", "click_unfollow_people", "topic_sidebar_top_answerer_unfollow")
			}
		});
		z.F(z.W, "ga_click_follow",
		function(a) {
			"question" === a.data.type && a.data.uk && (a = (0, window.$)(a.target), 0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length ? z.S("feed", "click_follow_question", "feed_answer_vote_follow_question") : 0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length ? z.S("feed", "click_follow_question", "feed_answer_answer_follow_question") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_FOLLOW"]').length ? z.S("feed", "click_follow_question", "feed_question_follow_follow_question") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length ? z.S("feed", "click_follow_question", "feed_question_ask_follow_question") : 0 < a.parents("#zh-question-side-header-wrap").length ? z.S("question_answer", "click_follow_question", "question_follow_question") : 0 < a.parents(".zm-topic-list-container").length && z.S("topic", "click_follow_question", "topic_activity_follow_question"))
		});
		z.F(z.W, "ga_click_follow",
		function(a) {
			"question" !== a.data.type || a.data.uk || (a = (0, window.$)(a.target), 0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length ? z.S("feed", "click_unfollow_question", "feed_answer_vote_unfollow_question") : 0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length ? z.S("feed", "click_unfollow_question", "feed_answer_answer_unfollow_question") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_unFOLLOW"]').length ? z.S("feed", "click_unfollow_question", "feed_question_follow_unfollow_question") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length ? z.S("feed", "click_unfollow_question", "feed_question_ask_unfollow_question") : 0 < a.parents("#zh-question-side-header-wrap").length ? z.S("question_answer", "click_unfollow_question", "question_unfollow_question") : 0 < a.parents(".zm-topic-list-container").length && z.S("topic", "click_unfollow_question", "topic_activity_unfollow_question"))
		});
		z.F(z.W, "ga_click_follow",
		function(a) {
			"topic" === a.data.type && a.data.uk && (a = (0, window.$)(a.target), 0 < a.parents(".zm-search-result-topic-wrap").length ? z.S("search", "click_follow_topic", "search_result_card_topic_follow") : a.hasClass("zu-edit-button") && a.parent().hasClass("source") && z.S("topstory", "click_follow_topic", "topstory_answer_promote"))
		});
		z.F(z.W, "ga_click_follow",
		function(a) {
			"topic" !== a.data.type || a.data.uk || (a = (0, window.$)(a.target), 0 < a.parents(".zm-search-result-topic-wrap").length ? z.S("search", "click_unfollow_topic", "search_result_card_topic_unfollow") : a.hasClass("zu-edit-button") && a.parent().hasClass("source") && z.S("topstory", "click_unfollow_topic", "topstory_answer_promote"))
		});
		z.F(z.W, "ga_click_follow",
		function(a) {
			"favlist" === a.data.type && (a.data.uk ? z.S("collection", "click_follow_collection", "collection_follow") : z.S("collection", "click_unfollow_collection", "collection_follow"))
		});
		z.F(z.W, "ga_click_top_nav_noti",
		function(a) {
			0 < a.data.nM ? z.S("notification", "click_top_nav_noti", "top_nav_noti_alert", a.data.nM) : z.S("notification", "click_top_nav_noti", "top_nav_noti_no_alert")
		});
		z.F(z.W, "ga_click_top_nav_noti_tab",
		function(a) {
			z.S("notification", "click_top_nav_noti_tab", ["top_nav_noti_tab_message", "top_nav_noti_tab_follower", "top_nav_noti_tab_vote"][a.data.tab])
		});
		z.F(z.W, "ga_click_enlarge_image",
		function(a) {
			a = (0, window.$)(a.target).parents("div[data-feedtype]").attr("data-feedtype");
			"ANSWER_CREATE" === a ? z.S("navigation", "click_enlarge_image", "feed_answer_answer_image") : "ANSWER_VOTE_UP" === a && z.S("navigation", "click_enlarge_image", "feed_answer_vote_image")
		});
		z.F(z.W, "ga_click_topic_more",
		function(a) {
			var b = "activity"; - 1 < window.location.href.indexOf("questions") && (b = "questions");
			a.data && a.data.pp ? z.S("feed", "click_topic_more", "topic_" + b + "_more_button") : z.S("feed", "click_topic_more", "topic_" + b + "_more_auto_load")
		});
		f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] a.inline-block[name\x3d"toggleExpanded"]',
		function() {
			z.S("feed", "click_expand", "feed_answer_vote_expand")
		}).on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] a.zm-item-vote-count[name\x3d"toggleExpanded"]',
		function() {
			z.S("feed", "click_expand", "feed_answer_vote_vote_count")
		}).on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] a.inline-block[name\x3d"toggleExpanded"]',
		function() {
			z.S("feed", "click_expand", "feed_answer_answer_expand")
		}).on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] a.zm-item-vote-count[name\x3d"toggleExpanded"]',
		function() {
			z.S("feed", "click_expand", "feed_answer_answer_vote_count")
		});
		g = (0, window.$)("zh-single-question-page").on("click", '#zh-question-detail a.inline-block[name\x3d"expand"]',
		function() {
			z.S("question_answer", "click_expand", "question_supplement_expand")
		});
		g.on("click", '.zm-item-answer a[name\x3d"more"]',
		function() {
			z.S("question_answer", "click_expand", "question_answer_voters_more")
		});
		g.on("click", "#zh-question-collapsed-switcher",
		function() {
			z.S("question_answer", "click_expand", "question_answer_folded_expand")
		});
		c.on("click", 'a.inline-block[name\x3d"expand"]',
		function() {
			z.S("topic", "click_expand", "topic_activity_expand")
		}).on("click", 'a.zm-item-vote-count[name\x3d"expand"]',
		function() {
			z.S("topic", "click_expand", "topic_activity_vote_count")
		});
		z.F(z.W, "ga_click_sorter_item",
		function(a) { (a = {
				added_time: "time",
				vote: "vote"
			} [a.data.key]) && z.S("question_answer", "click_sort_answer", "question_answer_sorting_" + a)
		});
		z.F(z.W, "ga_click_vote_up",
		function(a) {
			a = (0, window.$)(a.target.m());
			if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_up";
			else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_up";
			else if (0 < a.parents("#zh-single-question-page").length) a = "question_answer_vote_up";
			else return;
			z.S("vote", "click_vote_up_answer", a)
		});
		z.F(z.W, "ga_click_vote_down",
		function(a) {
			a = (0, window.$)(a.target.m());
			if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_down";
			else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_down";
			else if (0 < a.parents("#zh-single-question-page").length) a = "question_answer_vote_down";
			else return;
			z.S("vote", "click_vote_down_answer", a)
		});
		z.F(z.W, "ga_click_thank_answer",
		function(a) {
			a = (0, window.$)(a.target);
			if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_thank";
			else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_thank";
			else if (0 < a.parents("#zh-question-answer-wrap").length) a = "question_answer_thank";
			else if (0 < a.parents(".zm-topic-list-container").length) a = "topic_activity_thank";
			else return;
			z.S("vote", "click_thank_answer", a)
		});
		z.F(z.W, "ga_click_report_box",
		function(b) {
			z.S("report", "click_report_" + a(b.data.type) + "_box")
		});
		z.F(z.W, "ga_click_report",
		function(b) {
			z.S("report", "click_report_" + a(b.data.type))
		});
		z.F(z.W, "ga_click_collect_answer_box",
		function(a) {
			a = (0, window.$)(a.target);
			if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_collect";
			else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_collect";
			else if (0 < a.parents("#zh-single-question-page").length) a = "question_answer_collect";
			else if (0 < a.parents(".zm-topic-list-container").length) a = "topic_activity_collect";
			else return;
			z.S("collection", "click_collect_answer_box", a)
		});
		z.F(z.W, "ga_click_collect_answer",
		function(a) {
			z.S("collection", "click_collect_answer", "collection_count", a.data.count)
		});
		z.F(z.W, "ga_click_add_collection",
		function() {
			z.S("collection", "click_add_collection", "collect_answer_window_add_collection")
		});
		z.F(z.W, "ga_click_answer_not_helpful",
		function(a) {
			a = (0, window.$)(a.target);
			if (0 < a.closest('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_not_helpful";
			else if (0 < a.closest('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_not_helpful";
			else if (0 < a.closest("#zh-question-answer-wrap").length) a = "question_answer_not_helpful";
			else if (0 < a.closest(".zm-topic-list-container").length) a = "topic_activity_not_helpful";
			else return;
			z.S("vote", "click_answer_not_helpful", a)
		});
		f.on("click");
		z.F(z.W, "ga_click_question_ignore",
		function(a) {
			a = (0, window.$)(a.target);
			if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_ignore_question";
			else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_ignore_question";
			else if (0 < a.parents('div[data-feedtype\x3d"QUESTION_FOLLOW"]').length) a = "feed_question_follow_ignore_question";
			else if (0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length) a = "feed_question_ask_ignore_question";
			else return;
			z.S("feed", "click_question_ignore", a)
		});
		z.F(z.W, "ga_question_topic_edit_start",
		function() {
			z.S("edit", "click_edit_question_topic", "question_topic_edit_start")
		});
		z.F(z.W, "ga_question_topic_edit_finish_changed",
		function() {
			z.S("edit", "click_edit_question_topic", "question_topic_edit_finish_changed")
		});
		z.F(z.W, "ga_question_title_edit_start",
		function() {
			z.S("edit", "click_edit_question_titile", "question_title_edit_start")
		});
		z.F(z.W, "ga_question_title_edit_cancel",
		function() {
			z.S("edit", "click_edit_question_titile", "question_title_edit_cancel")
		});
		z.F(z.W, "ga_question_title_edit_save_changed",
		function() {
			z.S("edit", "click_edit_question_titile", "question_title_edit_save_changed")
		});
		z.F(z.W, "ga_question_title_edit_save_unchanged",
		function() {
			z.S("edit", "click_edit_question_titile", "question_title_edit_save_unchanged")
		});
		z.F(z.W, "ga_question_supplement_edit_start",
		function() {
			z.S("edit", "click_edit_question_supplement", "question_supplement_edit_start")
		});
		z.F(z.W, "ga_question_supplement_edit_cancel",
		function() {
			z.S("edit", "click_edit_question_supplement", "question_supplement_edit_cancel")
		});
		z.F(z.W, "ga_question_supplement_edit_save_changed",
		function() {
			z.S("edit", "click_edit_question_supplement", "question_supplement_edit_save_changed")
		});
		z.F(z.W, "ga_question_supplement_edit_save_unchanged",
		function() {
			z.S("edit", "click_edit_question_supplement", "question_supplement_edit_save_unchanged")
		}); (0, window.$)("#zu-top-add-question").click(function() {
			z.S("question_answer", "click_add_question", "top_nav_question_add_start")
		});
		z.F(z.W, "ga_click_add_question",
		function(a) {
			z.S("question_answer", "click_add_question", "question_add_submit_with_topics", a.data.total);
			z.S("question_answer", "click_add_question", "question_add_submit_with_suggested_topics", a.data.Lv);
			z.S("question_answer", "click_add_question", "question_add_submit_with_suggested_topics_percent", Math.round(a.data.Lv / a.data.total * 100))
		}); (0, window.$)("#zh-question-answer-form-wrap .editable").focus(function() {
			z.S("question_answer", "click_add_answer", "question_answer_add_start")
		}); (0, window.$)("#zh-question-answer-form-wrap .submit-button").click(function() {
			z.S("question_answer", "click_add_answer", "question_answer_add_publish")
		});
		z.F(z.W, "ga_hover_hovercard",
		function(a) {
			a = (0, window.$)(a.target);
			var c, d, f;
			a.is('[data-hovercard^\x3d"p$"]') ? (d = "hover_people_hovercard", 0 < a.parents("div[data-feedtype]").length ? (c = "feed", 0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length ? 0 < a.parents(".zm-item-answer-author-info").length ? f = "feed_answer_vote_author_name": 0 < a.parents("div.source").length && (f = 0 < a.find("img").length ? "feed_answer_vote_source_people_avatar": "feed_answer_vote_author_name") : 0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length ? 0 < a.parents("div.source").length && (f = 0 < a.find("img").length ? "feed_answer_answer_source_people_avatar": "feed_answer_answer_source_people_name") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_FOLLOW"]').length ? 0 < a.parents("div.source").length && (f = 0 < a.find("img").length ? "feed_question_follow_source_people_avatar": "feed_question_follow_source_people_name") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length && 0 < a.parents("div.source").length && (f = 0 < a.find("img").length ? "feed_question_ask_source_people_avatar": "feed_question_ask_source_people_name")) : 0 < a.parents("#zh-trendings").length ? (c = "navigation", window.$.contains(b.find("li:nth-child(1)").get(0), a.get(0)) ? f = "sidebar_intresting_people_1": window.$.contains(b.find("li:nth-child(2)").get(0), a.get(0)) ? f = "sidebar_intresting_people_2": window.$.contains(b.find("li:nth-child(3)").get(0), a.get(0)) && (f = "sidebar_intresting_people_3")) : 0 < a.parents("#zh-single-question-page").length ? (c = "question_answer", 0 < a.parents(".zm-item-answer-author-info").length ? f = 0 < a.find("img").length ? "question_answer_author_avatar": "question_answer_author_name": 0 < a.parents(".voters").length ? (f = a.parents(".voters").find('a[href^\x3d"/people"]').index(a.get(0)) + 1, f = "question_answer_voters_" + f) : 0 < a.parents(".zm-comment-list").length && (f = 0 < a.find("img").length ? "question_answer_comment_author_avatar": "question_answer_comment_author_name")) : 0 < a.parents("#zh-topic-top-answerer").length && (c = "topic", f = 0 < a.find("img").length ? "topic_sidebar_top_answerer_people_avatar": "topic_sidebar_top_answerer_people_name")) : a.is('[data-hovercard^\x3d"t$"]') ? (d = "hover_topic_hovercard", 0 < a.parents("#zh-single-question-page").length && (c = "question_answer", f = "question_topic")) : a.is('[data-hovercard^\x3d"c$"]') ? (d = "hover_column_hovercard", 0 < a.parents("div[data-feedtype]").length && (c = "feed", 0 < a.parents('div[data-feedtype\x3d"ARTICLE_VOTE_UP"]').length ? f = "feed_article_vote": 0 < a.parents('div[data-feedtype\x3d"ARTICLE_CREATE"]').length && (f = "feed_article_create"))) : a.is('[data-hovercard^\x3d"r$"]') && (d = "hover_roundtable_hovercard", c = "feed", 0 < a.parents('div[data-feedtype\x3d"MEMBER_FOLLOW_ROUNDTABLE"]').length ? f = "feed_follow_roundtable": 0 < a.parents('div[data-feedtype^\x3d"ROUNDTABLE"]').length && (f = "feed_roundtable_others"));
			c && d && f && z.S(c, d, f, void 0, !0)
		});
		z.F(z.W, "ga_click_sign_in",
		function(a) {
			a.data && a.data.label ? z.S("sign_in", "click_sign_in", a.data.label) : z.S("sign_in", "click_sign_in")
		});
		z.F(z.W, "ga_click_sign_in_close",
		function() {
			z.S("sign_in", "click_sign_in_close", "sign_in_box_main")
		});
		z.F(z.W, "ga_click_sign_in_weibo",
		function(a) {
			z.S("sign_in", "click_sign_in_weibo", a.label)
		});
		z.F(z.W, "ga_click_sign_in_qq",
		function(a) {
			z.S("sign_in", "click_sign_in_qq", a.label)
		});
		z.F(z.W, "ga_click_sign_in_switch",
		function(a) {
			"signin" === a.data ? z.S("sign_in", "click_sign_in_switch", "sign_in_box_switch_to_sign_in") : "signup" === a.data && z.S("sign_in", "click_sign_in_switch", "sign_in_box_switch_to_sign_up")
		});
		z.F(z.W, "ga_click_sign_in_link_account",
		function(a) {
			a.target ? (a = (0, window.$)(a.target), z.Wa(a.parent().text(), "该邮箱已注册") ? z.S("sign_in", "click_sign_in_link_account", "sign_up_error_user_exists_link_account") : z.Wa(a.parent().text(), "如果你已有知乎帐号") ? (0, window.$)(".view-warmup").is(":visible") ? z.S("sign_in", "click_sign_in_link_account", "sign_in_box_splash_link_account") : (0, window.$)(".view-info").is(":visible") && z.S("sign_in", "click_sign_in_link_account", "sign_in_box_sign_up_link_account") : z.Wa(a.text(), "返回注册") && z.S("sign_in", "click_sign_in_link_account", "sign_in_box_link_account_back")) : a.label && z.S("sign_in", "click_sign_in_link_account", a.label)
		});
		z.F(z.W, "ga_click_sign_in_connect",
		function(a) {
			z.S("sign_in", "click_sign_in_weibo", a.label)
		});
		z.F(z.W, "ga_click_sign_in_avatar",
		function() {
			z.S("sign_in", "click_sign_in_avatar", "sign_in_avatar_upload")
		});
		z.F(z.W, "ga_click_sign_in_previous_step",
		function() {
			z.S("sign_in", "click_sign_in_previous_step", "sign_in_box_follow_user_previous")
		});
		z.F(z.W, "ga_click_follow_topic",
		function(a) {
			0 < a.data ? z.S("sign_in", "click_follow_topic", "sign_in_box_follow_topic_next", a.data) : 0 === a.data && z.S("sign_in", "click_follow_topic", "sign_in_box_follow_topic_skip")
		});
		z.F(z.W, "ga_click_follow_people",
		function(a) {
			0 < a.data ? z.S("sign_in", "click_follow_people", "sign_in_box_follow_people_next", a.data) : 0 === a.data && z.S("sign_in", "click_follow_people", "sign_in_box_follow_people_skip")
		});
		z.F(z.W, "ga_click_play_video",
		function(a) {
			z.S("video", "click_play_video", a.label)
		});
		z.F(z.W, "ga_visit_home_video",
		function() {
			z.S("video", "visit_home_video", "home_play_video_auto")
		});
		z.F(z.W, "ga_click_close_video",
		function(a) {
			z.S("video", "click_close_video", a.label)
		});
		z.F(z.W, "ga_click_share_video",
		function(a) {
			z.S("video", "click_share_video", a.label)
		})
	};
	var Wi = {},
	Qi = /^\/lives\//,
	Mi = []; ["pagehide", "beforeunload", "blur"].forEach(function(a) {
		window.addEventListener(a, Li)
	});
	var Zi = /\s*;\s*/; z.e = z.Xi.prototype; z.e.isEnabled = function() {
		return window.navigator.cookieEnabled
	}; z.e.set = function(a, b, c, d, f, g) {
		if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
		if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
		z.ja(c) || (c = -1);
		f = f ? ";domain\x3d" + f: "";
		d = d ? ";path\x3d" + d: "";
		g = g ? ";secure": "";
		c = 0 > c ? "": 0 == c ? ";expires\x3d" + (new Date(1970, 1, 1)).toUTCString() : ";expires\x3d" + (new Date((0, z.H)() + 1E3 * c)).toUTCString();
		this.Qa.cookie = a + "\x3d" + b + f + d + c + g
	}; z.e.get = function(a, b) {
		for (var c = a + "\x3d",
		d = (this.Qa.cookie || "").split(Zi), f = 0, g; g = d[f]; f++) {
			if (0 == g.lastIndexOf(c, 0)) return g.substr(c.length);
			if (g == a) return ""
		}
		return b
	}; z.e.remove = function(a, b, c) {
		var d = this.eg(a);
		this.set(a, "", 0, b, c);
		return d
	}; z.e.zd = function() {
		return z.Yi(this).keys
	}; z.e.fd = function() {
		return z.Yi(this).values
	}; z.e.vh = function() {
		return ! this.Qa.cookie
	}; z.e.hb = function() {
		return this.Qa.cookie ? (this.Qa.cookie || "").split(Zi).length: 0
	}; z.e.eg = function(a) {
		return z.ja(this.get(a))
	}; z.e.vi = z.m(4); z.e.clear = function() {
		for (var a = z.Yi(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
	}; z.aj = new z.Xi(window.document); z.aj.g_ = 3950; $i(); z.U = {
		set: function(a, b) {
			a.className = b
		},
		get: function(a) {
			a = a.className;
			return z.oa(a) && a.match(/\S+/g) || []
		},
		add: function(a, b) {
			var c = z.U.get(a),
			d = z.yb(arguments, 1),
			f = c.length + d.length;
			z.U.Hr(c, d);
			z.U.set(a, c.join(" "));
			return c.length == f
		},
		remove: function(a, b) {
			var c = z.U.get(a),
			d = z.yb(arguments, 1),
			f = z.U.QG(c, d);
			z.U.set(a, f.join(" "));
			return f.length == c.length - d.length
		},
		Hr: function(a, b) {
			for (var c = 0; c < b.length; c++) z.rb(a, b[c]) || a.push(b[c])
		},
		QG: function(a, b) {
			return z.lb(a,
			function(a) {
				return ! z.rb(b, a)
			})
		},
		u0: function(a, b, c) {
			for (var d = z.U.get(a), f = !1, g = 0; g < d.length; g++) d[g] == b && (z.xb(d, g--, 1), f = !0);
			f && (d.push(c), z.U.set(a, d.join(" ")));
			return f
		},
		Tw: function(a, b, c) {
			var d = z.U.get(a);
			z.oa(b) ? z.tb(d, b) : z.ma(b) && (d = z.U.QG(d, b));
			z.oa(c) && !z.rb(d, c) ? d.push(c) : z.ma(c) && z.U.Hr(d, c);
			z.U.set(a, d.join(" "))
		},
		has: function(a, b) {
			return z.rb(z.U.get(a), b)
		},
		enable: function(a, b, c) {
			c ? z.U.add(a, b) : z.U.remove(a, b)
		},
		toggle: function(a, b) {
			var c = !z.U.has(a, b);
			z.U.enable(a, b, c);
			return c
		}
	};
	var dj; z.y(z.oj, z.G);
	var Mm = z.u.document && z.u.document.documentElement && !!z.u.document.documentElement.setCapture; z.e = z.oj.prototype; z.e.jh = z.m(18); z.e.o = function() {
		return this.U
	}; z.e.oC = z.m(19); z.e.bb = z.m(20); z.e.D = function() {
		z.oj.v.D.call(this);
		z.md(this.handle, ["touchstart", "mousedown"], this.mn, !1, this);
		this.U.removeAll();
		Mm && this.Qa.releaseCapture();
		this.handle = this.target = null
	}; z.e.mn = function(a) {
		var b = "mousedown" == a.type;
		if (!this.lc || this.Lj || b && !z.Tc(a)) this.dispatchEvent("earlycancel");
		else {
			if (0 == this.Hz) if (this.dispatchEvent(new uj("start", this, a.clientX, a.clientY, a))) this.Lj = !0,
			this.tK && a.preventDefault();
			else return;
			else this.tK && a.preventDefault();
			var b = this.Qa,
			c = b.documentElement,
			d = !Mm;
			this.U.g(b, ["touchmove", "mousemove"], this.eS, d);
			this.U.g(b, ["touchend", "mouseup"], this.Ls, d);
			Mm ? (c.setCapture(!1), this.U.g(c, "losecapture", this.Ls)) : this.U.g(z.Te(b), "blur", this.Ls);
			z.C && this.US && this.U.g(b, "dragstart", Mc);
			this.CX && this.U.g(this.CX, "scroll", this.Hu, d);
			this.clientX = this.Hv = a.clientX;
			this.clientY = this.Iv = a.clientY;
			this.screenX = a.screenX;
			this.screenY = a.screenY;
			this.deltaX = this.mj ? z.nj(this.target) : this.target.offsetLeft;
			this.deltaY = this.target.offsetTop;
			this.wB = z.xf(z.Ie(this.Qa))
		}
	}; z.e.Ls = function(a) {
		this.U.removeAll();
		Mm && this.Qa.releaseCapture();
		this.Lj ? (this.Lj = !1, this.dispatchEvent(new uj("end", this, a.clientX, a.clientY, a, rj(this, this.deltaX), sj(this, this.deltaY)))) : this.dispatchEvent("earlycancel")
	}; z.e.eS = function(a) {
		if (this.lc) {
			var b = (this.mj && pj(this) ? -1 : 1) * (a.clientX - this.clientX),
			c = a.clientY - this.clientY;
			this.clientX = a.clientX;
			this.clientY = a.clientY;
			this.screenX = a.screenX;
			this.screenY = a.screenY;
			if (!this.Lj) {
				var d = this.Hv - this.clientX,
				f = this.Iv - this.clientY;
				if (d * d + f * f > this.Hz) if (this.dispatchEvent(new uj("start", this, a.clientX, a.clientY, a))) this.Lj = !0;
				else {
					this.Rd || this.Ls(a);
					return
				}
			}
			c = qj(this, b, c);
			b = c.x;
			c = c.y;
			this.Lj && this.dispatchEvent(new uj("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (tj(this, a, b, c), a.preventDefault())
		}
	}; z.e.Hu = function(a) {
		var b = qj(this, 0, 0);
		a.clientX = this.clientX;
		a.clientY = this.clientY;
		tj(this, a, b.x, b.y)
	}; z.e.dy = function(a, b) {
		this.mj && pj(this) ? this.target.style.right = a + "px": this.target.style.left = a + "px";
		this.target.style.top = b + "px"
	}; z.y(uj, z.Lc);
	var Nm = z.C ? 'javascript:""': "about:blank"; z.y(z.vj, z.G); z.vj.prototype.handleEvent = function(a) {
		var b = new z.Pc(a.nc);
		b.type = "focusin" == a.type || "focus" == a.type ? "focusin": "focusout";
		this.dispatchEvent(b)
	}; z.vj.prototype.D = function() {
		z.vj.v.D.call(this);
		z.nd(this.cU);
		z.nd(this.dU);
		delete this.h
	}; z.y(xj, z.Q); z.e = xj.prototype; z.e.Ny = null; z.e.xb = !1; z.e.Zc = null; z.e.Kc = null; z.e.ef = null; z.e.kx = !1; z.e.V = function() {
		return "goog-modalpopup"
	}; z.e.Xj = function() {
		return this.Zc
	}; z.e.B = function() {
		xj.v.B.call(this);
		var a = this.m(),
		b = (0, z.ab)(this.V()).split(" ");
		z.ij(a, b);
		z.pf(a, !0);
		z.P(a, !1);
		this.OA();
		yj(this)
	}; z.e.OA = function() {
		this.lZ && !this.Kc && (this.Kc = this.K().B("iframe", {
			frameborder: 0,
			style: "border:0;vertical-align:bottom;" + (z.oa(void 0) ? (new z.Bd).hp(void 0).ph() : ""),
			src: Nm
		}), this.Kc.className = this.V() + "-bg", z.P(this.Kc, !1), z.Lg(this.Kc, 0));
		this.Zc || (this.Zc = this.K().B("DIV", this.V() + "-bg"), z.P(this.Zc, !1))
	}; z.e.RK = function() {
		this.kx = !1
	}; z.e.Ob = function(a) {
		return !! a && "DIV" == a.tagName
	}; z.e.T = function(a) {
		xj.v.T.call(this, a);
		a = (0, z.ab)(this.V()).split(" ");
		z.ij(this.m(), a);
		this.OA();
		yj(this);
		z.pf(this.m(), !0);
		z.P(this.m(), !1)
	}; z.e.C = function() {
		this.Kc && z.cf(this.Kc, this.m());
		z.cf(this.Zc, this.m());
		xj.v.C.call(this);
		z.df(this.ef, this.m());
		this.Ny = new z.vj(this.K().ua());
		this.o().g(this.Ny, "focusin", this.Sp);
		zj(this, !1)
	}; z.e.Ab = function() {
		this.W() && this.F(!1);
		z.Cc(this.Ny);
		xj.v.Ab.call(this);
		z.N(this.Kc);
		z.N(this.Zc);
		z.N(this.ef)
	}; z.e.F = function(a) {
		a != this.xb && (this.Ok && this.Ok.stop(), this.yl && this.yl.stop(), this.Nk && this.Nk.stop(), this.xl && this.xl.stop(), this.wa && zj(this, a), a ? this.xC() : this.um())
	}; z.e.oL = function(a, b, c, d) {
		this.Ok = a;
		this.Nk = b;
		this.yl = c;
		this.xl = d
	}; z.e.xC = function() {
		if (this.dispatchEvent("beforeshow")) {
			try {
				this.Dm = this.K().ua().activeElement
			} catch(a) {}
			this.ZB();
			this.ga();
			this.o().g(this.K().ab(), "resize", this.ZB);
			Aj(this, !0);
			this.focus();
			this.xb = !0;
			this.Ok && this.yl ? (z.ld(this.Ok, "end", this.Of, !1, this), this.yl.play(), this.Ok.play()) : this.Of()
		}
	}; z.e.um = function() {
		this.dispatchEvent("beforehide") && (this.o().oa(this.K().ab(), "resize", this.ZB), this.xb = !1, this.Nk && this.xl ? (z.ld(this.Nk, "end", this.Km, !1, this), this.xl.play(), this.Nk.play()) : this.Km(), this.VK())
	}; z.e.VK = function() {
		try {
			var a = this.K(),
			b = a.ua().body,
			c = a.ua().activeElement || b;
			if (!this.Dm || this.Dm == b) {
				this.Dm = null;
				return
			} (c == b || a.contains(this.m(), c)) && this.Dm.focus()
		} catch(d) {}
		this.Dm = null
	}; z.e.Of = function() {
		this.dispatchEvent("show")
	}; z.e.Km = function() {
		Aj(this, !1);
		this.dispatchEvent("hide")
	}; z.e.W = function() {
		return this.xb
	}; z.e.focus = function() {
		this.BG()
	}; z.e.ZB = function() {
		this.Kc && z.P(this.Kc, !1);
		this.Zc && z.P(this.Zc, !1);
		var a = this.K().ua(),
		b = z.Qe(z.Te(a) || window),
		c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)),
		a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
		this.Kc && (z.P(this.Kc, !0), z.Hg(this.Kc, c, a));
		this.Zc && (z.P(this.Zc, !0), z.Hg(this.Zc, c, a))
	}; z.e.ga = function() {
		var a = this.K().ua(),
		b = z.Te(a) || window;
		if ("fixed" == z.Ag(this.m())) var c = a = 0;
		else c = z.xf(this.K()),
		a = c.x,
		c = c.y;
		var d = z.Jg(this.m()),
		b = z.Qe(b),
		a = Math.max(a + b.width / 2 - d.width / 2, 0),
		c = Math.max(c + b.height / 2 - d.height / 2, 0);
		z.Bg(this.m(), a, c);
		z.Bg(this.ef, a, c)
	}; z.e.Sp = function(a) {
		this.kx ? this.RK() : a.target == this.ef && z.vd(this.BG, 0, this)
	}; z.e.BG = function() {
		try {
			z.C && this.K().ua().body.focus(),
			this.m().focus()
		} catch(a) {}
	}; z.e.D = function() {
		z.Cc(this.Ok);
		this.Ok = null;
		z.Cc(this.Nk);
		this.Nk = null;
		z.Cc(this.yl);
		this.yl = null;
		z.Cc(this.xl);
		this.xl = null;
		xj.v.D.call(this)
	};
	var nk, Rm, Sm, Tm, Um, Vm, Wm, Om, Xm, Oj; z.y(z.Bj, xj); z.e = z.Bj.prototype; z.e.rG = !0; z.e.Gz = !0; z.e.Gm = !0; z.e.py = !0; z.e.Wr = .5; z.e.YC = ""; z.e.Ac = null; z.e.Pb = null; z.e.cG = !1; z.e.Xc = null; z.e.pd = null; z.e.Sv = null; z.e.Md = null; z.e.pf = null; z.e.xc = null; z.e.cq = "dialog"; z.e.V = function() {
		return this.bd
	}; z.e.Fa = function(a) {
		this.YC = a;
		this.pd && z.of(this.pd, a)
	}; z.e.ca = function(a) {
		this.Ac = a = z.Gd(a, null);
		this.pf && z.Fe(this.pf, a)
	}; z.e.$a = z.m(21); z.e.Hi = function() {
		return this.cq
	}; z.e.zv = z.m(22); z.e.S = function() {
		z.Dj(this);
		return this.pf
	}; z.e.jt = function() {
		z.Dj(this);
		return this.Md
	}; z.e.bt = z.m(24); z.e.pg = function() {
		z.Dj(this);
		return this.m()
	}; z.e.Xj = function() {
		z.Dj(this);
		return z.Bj.v.Xj.call(this)
	}; z.e.Dq = function(a) {
		a != this.Gm && Gj(this, a)
	}; z.e.B = function() {
		z.Bj.v.B.call(this);
		var a = this.m(),
		b = this.K();
		this.Xc = b.B("DIV", this.bd + "-title", this.pd = b.B("SPAN", {
			className: this.bd + "-title-text",
			id: this.se()
		},
		this.YC), this.Md = b.B("SPAN", this.bd + "-title-close"));
		z.af(a, this.Xc, this.pf = b.B("DIV", this.bd + "-content"), this.xc = b.B("DIV", this.bd + "-buttons"));
		z.bj(this.pd, "heading");
		z.bj(this.Md, "button");
		z.pf(this.Md, !0);
		z.cj(this.Md, "label", Om);
		this.Sv = this.pd.id;
		z.bj(a, this.Hi());
		z.cj(a, "labelledby", this.Sv || "");
		this.Ac && z.Fe(this.pf, this.Ac);
		z.P(this.Md, this.Gz);
		this.yc && (a = this.yc, a.h = this.xc, a.render());
		z.P(this.xc, !!this.yc);
		Fj(this, this.Wr)
	}; z.e.T = function(a) {
		z.Bj.v.T.call(this, a);
		a = this.m();
		var b = this.bd + "-content";
		this.pf = z.Me(null, b, a)[0];
		this.pf || (this.pf = this.K().B("DIV", b), this.Ac && z.Fe(this.pf, this.Ac), a.appendChild(this.pf));
		var b = this.bd + "-title",
		c = this.bd + "-title-text",
		d = this.bd + "-title-close"; (this.Xc = z.Me(null, b, a)[0]) ? (this.pd = z.Me(null, c, this.Xc)[0], this.Md = z.Me(null, d, this.Xc)[0]) : (this.Xc = this.K().B("DIV", b), a.insertBefore(this.Xc, this.pf));
		this.pd ? (this.YC = z.qf(this.pd), this.pd.id || (this.pd.id = this.se())) : (this.pd = z.M("SPAN", {
			className: c,
			id: this.se()
		}), this.Xc.appendChild(this.pd));
		this.Sv = this.pd.id;
		z.cj(a, "labelledby", this.Sv || "");
		this.Md || (this.Md = this.K().B("SPAN", d), this.Xc.appendChild(this.Md));
		z.P(this.Md, this.Gz);
		b = this.bd + "-buttons"; (this.xc = z.Me(null, b, a)[0]) ? (this.yc = new z.Nj(this.K()), this.yc.w(this.xc)) : (this.xc = this.K().B("DIV", b), a.appendChild(this.xc), this.yc && (a = this.yc, a.h = this.xc, a.render()), z.P(this.xc, !!this.yc));
		Fj(this, this.Wr)
	}; z.e.C = function() {
		z.Bj.v.C.call(this);
		this.o().g(this.m(), "keydown", this.Xp).g(this.m(), "keypress", this.Xp);
		this.o().g(this.xc, "click", this.RU);
		Hj(this, this.py);
		this.o().g(this.Md, "click", this.JV);
		var a = this.m();
		z.bj(a, this.Hi());
		"" !== this.pd.id && z.cj(a, "labelledby", this.pd.id);
		this.Gm || Gj(this, !1)
	}; z.e.Ab = function() {
		this.W() && this.F(!1);
		Hj(this, !1);
		z.Bj.v.Ab.call(this)
	}; z.e.F = function(a) {
		a != this.W() && (this.wa || this.render(), z.Bj.v.F.call(this, a))
	}; z.e.Of = function() {
		z.Bj.v.Of.call(this);
		this.dispatchEvent(nk)
	}; z.e.Km = function() {
		z.Bj.v.Km.call(this);
		this.dispatchEvent(z.ok);
		this.cG && this.dispose()
	}; z.e.SX = function() {
		var a = this.K().ua(),
		b = z.Qe(z.Te(a) || window),
		c = Math.max(a.body.scrollWidth, b.width),
		a = Math.max(a.body.scrollHeight, b.height),
		d = z.Jg(this.m());
		"fixed" == z.Ag(this.m()) ? this.Pb.iu = new z.sg(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)) || new z.sg(window.NaN, window.NaN, window.NaN, window.NaN) : this.Pb.iu = new z.sg(0, 0, c - d.width, a - d.height) || new z.sg(window.NaN, window.NaN, window.NaN, window.NaN)
	}; z.e.JV = function() {
		Ij(this)
	}; z.e.Ae = function(a) {
		this.cG = a
	}; z.e.D = function() {
		this.xc = this.Md = null;
		z.Bj.v.D.call(this)
	}; z.e.RU = function(a) {
		a: {
			for (a = a.target; null != a && a != this.xc;) {
				if ("BUTTON" == a.tagName) break a;
				a = a.parentNode
			}
			a = null
		}
		if (a && !a.disabled) {
			a = a.name;
			var b = this.yc.get(a);
			this.dispatchEvent(new Jj(a, b)) && this.F(!1)
		}
	}; z.e.Xp = function(a) {
		var b = !1,
		c = !1,
		d = this.yc,
		f = a.target;
		if ("keydown" == a.type) if (this.rG && 27 == a.keyCode) {
			var g = d && d.Dx,
			f = "SELECT" == f.tagName && !f.disabled;
			g && !f ? (c = !0, b = d.get(g), b = this.dispatchEvent(new Jj(g, b))) : f || (b = !0)
		} else {
			if (9 == a.keyCode && a.shiftKey && f == this.m()) {
				this.kx = !0;
				try {
					this.ef.focus()
				} catch(l) {}
				z.vd(this.RK, 0, this)
			}
		} else if (13 == a.keyCode) {
			if ("BUTTON" == f.tagName && !f.disabled) g = f.name;
			else if (f == this.Md) Ij(this);
			else if (d) {
				var h = d.ey,
				k = h && d.Af(h),
				f = ("TEXTAREA" == f.tagName || "SELECT" == f.tagName || "A" == f.tagName) && !f.disabled; ! k || k.disabled || f || (g = h)
			}
			g && d && (c = !0, b = this.dispatchEvent(new Jj(g, String(d.get(g)))))
		} else f == this.Md && 32 == a.keyCode && Ij(this);
		if (b || c) a.stopPropagation(),
		a.preventDefault();
		b && this.F(!1)
	}; z.y(Jj, z.Lc); z.Mj = "dialogselect"; z.ok = "afterhide"; nk = "aftershow"; z.y(z.Nj, z.Qd); z.e = z.Nj.prototype; z.e.bd = "goog-buttonset"; z.e.ey = null; z.e.h = null; z.e.Dx = null; z.e.set = function(a, b, c, d) {
		z.Qd.prototype.set.call(this, a, b);
		c && (this.ey = a);
		d && (this.Dx = a);
		return this
	}; z.e.Nd = function(a, b, c) {
		return this.set(a.key, a.caption, b, c)
	}; z.e.render = function() {
		if (this.h) {
			z.Fe(this.h, Lj);
			var a = z.Ie(this.h);
			this.forEach(function(b, c) {
				var d = a.B("BUTTON", {
					name: c
				},
				b);
				c == this.ey && (d.className = this.bd + "-default");
				this.h.appendChild(d)
			},
			this)
		}
	}; z.e.w = function(a) {
		if (a && 1 == a.nodeType) {
			this.h = a;
			a = this.h.getElementsByTagName("BUTTON");
			for (var b = 0,
			c, d, f; c = a[b]; b++) if (d = c.name || c.id, f = z.qf(c) || c.value, d) {
				var g = 0 == b;
				this.set(d, f, g, c.name == z.Pm);
				g && z.hj(c, this.bd + "-default")
			}
		}
	}; z.e.m = function() {
		return this.h
	}; z.e.K = function() {
		return this.ba
	}; z.e.Af = function(a) {
		for (var b = this.h.getElementsByTagName("BUTTON"), c = 0, d; d = b[c]; c++) if (d.name == a || d.id == a) return d;
		return null
	}; z.Pm = "cancel"; z.Qm = {
		Wg: "ok",
		jf: z.Pm,
		Yg: "yes",
		fi: "no",
		vj: "save",
		uj: "continue"
	}; Rm = z.w("OK"); Sm = z.w("Cancel"); Tm = z.w("Yes"); Um = z.w("No"); Vm = z.w("Save"); Wm = z.w("Continue"); Om = z.w("Close"); Xm = {
		Wg: Rm,
		jf: Sm,
		Yg: Tm,
		fi: Um,
		vj: Vm,
		uj: Wm
	}; Oj = {
		Wg: {
			key: "ok",
			caption: Xm.Wg
		},
		jf: {
			key: z.Pm,
			caption: Xm.jf
		},
		Yg: {
			key: "yes",
			caption: Xm.Yg
		},
		fi: {
			key: "no",
			caption: Xm.fi
		},
		vj: {
			key: "save",
			caption: Xm.vj
		},
		uj: {
			key: "continue",
			caption: Xm.uj
		}
	};
	"undefined" != typeof window.document && ((new z.Nj).Nd(Oj.Wg, !0, !0), z.Cj(), (new z.Nj).Nd(Oj.Yg, !0).Nd(Oj.fi, !1, !0), (new z.Nj).Nd(Oj.Yg).Nd(Oj.fi, !0).Nd(Oj.jf, !1, !0), (new z.Nj).Nd(Oj.uj).Nd(Oj.vj).Nd(Oj.jf, !0, !0)); (function() {
		var a = z.Ui || z.Uj,
		b = a && window.navigator.userAgent.match(/OS\s(\w+)/)[1].slice(0, 3).replace(/_/g, ".");
		z.Ym = "contentEditable" in window.document.documentElement && !(a && 5 > b) && !(z.Xl && 3 > window.navigator.userAgent.match(/Android (\d)/)[1]);
		var c = (0, window.$)(window.document.documentElement);
		z.Zm = "ontouchstart" in window;
		c.addClass(z.Tj ? "mobile": "no-mobile");
		z.$m = a && 6 <= b || !z.Tj;
		"orientation" in window && (a = function() {
			var a = {
				0 : "portrait",
				90 : "landscape landscape-left",
				"-90": "landscape landscape-right"
			},
			b = a[window.orientation] || "";
			c.removeClass(z.Gb(a).join(" ")).addClass(b)
		},
		(0, window.$)(window).on("orientationchange", a), a())
	})(); Xm = {
		Wg: "确定",
		jf: "取消",
		Yg: "是",
		fi: "否",
		vj: "保存",
		uj: "继续"
	}; Oj = {
		Wg: {
			key: "ok",
			caption: Xm.Wg
		},
		jf: {
			key: z.Pm,
			caption: Xm.jf
		},
		Yg: {
			key: "yes",
			caption: Xm.Yg
		},
		fi: {
			key: "no",
			caption: Xm.fi
		},
		vj: {
			key: "save",
			caption: Xm.vj
		},
		uj: {
			key: "continue",
			caption: Xm.uj
		}
	}; z.Cj = function() {
		return (new z.Nj).Nd(Oj.jf, !1, !0).Nd(Oj.Wg, !0)
	}; z.y(z.T, z.Bj); z.x("ZH.ui.Dialog", z.T); z.e = z.T.prototype; z.e.MM = null; z.e.C = function() {
		var a = !z.Zm;
		this.py = a;
		Hj(this, a && this.wa);
		z.T.v.C.call(this);
		this.vl && z.Rj(this);
		z.Sj(this, this.MM)
	}; z.e.uT = z.Pj(function() {
		var a = z.Wg(),
		b = a / 2,
		a = z.Ja("html.modal-open {overflow:hidden}html.modal-doc-overflow {margin-right:%spx}html.modal-doc-overflow .modal-translate-shifting.sticky {transition-property:none; transform:translateX(-%spx)}html.modal-doc-overflow .modal-shifting {position:relative; right:%spx}", a, b, b);
		z.Ng(a)
	}); z.e.Zm = z.m(25); z.e.ga = function() {
		if (!this.Gm || !window.Modernizr.flexbox) if (z.T.v.ga.call(this), !this.EG) {
			var a = (0, window.$)(this.m()),
			b = (0, window.$)(window).scrollTop();
			if (!z.Tj || z.Uj) var c = (0, window.parseInt)(a.css("top").slice(0, -2)),
			b = "-\x3d" + Math.min(c - b, 60) + "px";
			a.add(this.ef).css("top", b)
		}
	}; z.e.focus = function() {
		z.Tj && !z.Uj || z.T.v.focus.call(this)
	}; z.T.prototype.setTitle = z.T.prototype.Fa; z.T.prototype.setModal = z.T.prototype.Dq; z.T.prototype.setDisposeOnHide = z.T.prototype.Ae; z.T.prototype.setVisible = z.T.prototype.F; z.T.prototype.getContentElement = z.T.prototype.S; z.T.prototype.getDialogElement = z.T.prototype.pg; z.T.prototype.listen = z.T.prototype.g; z.T.prototype.dispose = z.T.prototype.dispose; z.T.prototype.getTitleCloseElement = z.T.prototype.jt; z.x("ZH.dialog", z.V); z.V.confirm = Vj(function(a, b, c, d) {
		var f = {
			buttons: {
				yes: "确认",
				cancel: "取消"
			}
		},
		g = void 0;
		z.sa(a) ? (g = a, c = b) : g = {
			title: a,
			content: b
		};
		window.$.extend(!0, f, g);
		return z.V(f, (c || z.r).bind(d))
	}); z.V.confirm = z.V.confirm; z.V.alert = Vj(function(a, b) {
		var c = {
			title: "提示信息",
			buttons: {
				yes: "确定"
			}
		};
		z.sa(a) ? Object.assign(c, a) : c.content = a;
		return z.V(c, b)
	}); z.V.alert = z.V.alert; z.V.message = Vj(function(a, b, c) {
		if (a) {
			var d = z.V({
				title: c || "提示信息",
				content: z.La(a),
				buttons: {}
			}); (0, window.setTimeout)(function() {
				d.F(!1)
			},
			b || 2E3);
			return d
		}
	}); z.V.async = function(a) {
		var b = window.$.extend({},
		{
			title: "信息",
			zL: "加载中",
			buttons: {},
			onload: z.r
		},
		a),
		c = z.M("div", {
			className: "modal-dialog-async-loading",
			innerHTML: (b.zL || "加载中") + '\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e'
		}),
		d = z.V(b);
		d.S().appendChild(c);
		b.Nx && b.Nx.then(function(a) {
			z.N(c);
			d.Rd || (a && d.ca(a), d.ga(), b.onload(d.S(), d))
		});
		return d
	}; z.y(z.Wj, z.G); z.Wj.prototype.o = function() {
		return this.Ff || (this.Ff = new z.xd(this))
	}; z.Wj.prototype.mh = z.m(26); z.y(Xj, z.Wj); Xj.prototype.init = function() {
		if (this.h = z.J("zh-global-message")) this.rJ = z.L("zu-global-notify-msg", this.h),
		this.o().g(this.h, "click", this.Wa)
	}; Xj.prototype.Wa = function(a) {
		a.target && a.target.name && z.P(this.h, !1)
	}; Xj.prototype.fireEvent = function(a) {
		this.dispatchEvent(a)
	}; z.y(z.Yj, z.Lc); z.W = new Xj; z.W.init(); z.x("ZH.i",
	function(a) {
		z.W.dispatchEvent(new z.Yj("iframe_data", a))
	}); z.x("ZH.cm",
	function(a, b) {
		z.W.dispatchEvent(new z.Yj(a, b))
	}); z.y(z.ck, z.Q); z.e = z.ck.prototype; z.e.T = function(a) {
		z.ck.v.T.call(this, a);
		this.Aa = (0, window.$)(a).parents("form")
	}; z.e.C = function() {
		z.ck.v.C.call(this);
		this.J = (0, window.$)(this.m());
		this.il = (0, window.$)("img", this.J);
		this.sj = (0, window.$)('input[name\x3d"captcha"]', this.J);
		this.YM = (0, window.$)(".Captcha-imageConatiner", this.J);
		this.eN = (0, window.$)(".Captcha-prompt", this.J);
		this.vn = "cn" === this.J.data("type");
		ek(this);
		this.J.on("click", ".js-refreshCaptcha", this.fv.bind(this, !0));
		this.xL = !this.vn;
		this.vn && (this.il.on("click", this.lU.bind(this)), this.J.on("click", ".Captcha-mark", this.$Y.bind(this)), this.FH = this.NS.bind(this), this.Aa.on("input", "input", this.FH))
	}; z.e.lU = function(a) {
		this.trackEvent("Select", "Icon");
		if (7 === (0, window.$)(".Captcha-mark", this.J).length) this.Aa.data("validator").showErrors({
			captcha: "最多只能选择 7 个点"
		});
		else {
			fk(this);
			var b = this.il.offset(),
			c = a.pageX - b.left - this.QA;
			a = a.pageY - b.top - this.QA; (0, window.$)("\x3cspan /\x3e", {
				"class": "Captcha-mark sprite-index-icon-delete"
			}).css({
				left: c,
				top: a
			}).appendTo(this.YM).mouseenter(function() { (0, window.$)(this).addClass("sprite-index-icon-delete").removeClass("sprite-index-icon-mark")
			}).mouseleave(function() { (0, window.$)(this).addClass("sprite-index-icon-mark").removeClass("sprite-index-icon-delete")
			});
			dk(this)
		}
	}; z.e.$Y = function(a) {
		this.trackEvent("Unselect", "Icon");
		fk(this); (0, window.$)(a.target).remove();
		dk(this)
	}; z.e.fv = function(a) {
		a && this.trackEvent("Click", "Button");
		this.trackEvent("Refresh", "Image");
		this.tb = (0, z.H)().toString();
		a = (new z.Ah).add("r", this.tb);
		"login" === this.wb && a.add("type", "login");
		this.vn && a.add("lang", "cn");
		var b = xh(new z.th(this.jD), a);
		ek(this);
		this.il.fadeOut(200,
		function() { (0, window.$)(this).attr("src", b.toString()).fadeIn(200)
		})
	}; z.e.NS = function() {
		this.vn && 0 === this.Aa.serializeArray().filter(function(a) {
			return "captcha" !== a.name && "" === window.$.trim(a.value)
		}).length && (this.Aa.off("input", "input", this.FH), this.xL = !0, z.gk(this))
	}; z.e.info = function() {
		return "1" === z.aj.get("login" === this.wb ? "l_n_c": "n_c") ? {
			captcha: {
				type: this.vn ? "Chinese": "English",
				id: this.tb
			}
		}: {}
	}; z.e.trackEvent = function(a, b) {
		var c = this.info();
		"show" === a ? z.X.trackCardShow(this, {
			element: b
		},
		c) : z.X.trackEvent(this, {
			action: a,
			element: b
		},
		c)
	};
	var jk = "closure_memoize_cache_";
	var an = (0, z.t)(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(a) {
		return window.setTimeout(a, 1E3 / 60)
	},
	window); window.$.easing.easeOutCubic = function(a, b, c, d, f) {
		return d * ((b = b / f - 1) * b * b + 1) + c
	}; (function(a) {
		window.$.fn.onTransitionEnd = function(b, c) { (0, window.$)(this).one(a, b).emulateTransitionEnd(c);
			return this
		};
		window.$.fn.emulateTransitionEnd = function(b) {
			var c = !1,
			d = this; (0, window.$)(this).one(a,
			function() {
				c = !0
			}); (0, window.setTimeout)(function() {
				c || (0, window.$)(d).trigger(a)
			},
			b);
			return this
		}
	})({
		WebkitTransition: "webkitTransitionEnd",
		MozTransition: "transitionend",
		OTransition: "oTransitionEnd",
		msTransition: "MSTransitionEnd",
		transition: "transitionend"
	} [window.Modernizr.prefixed("transition") || "transition"]); (function(a) {
		window.$.fn.onAnimationEnd = function(b, c) { (0, window.$)(this).one(a, b).emulateAnimationEnd(c);
			return this
		};
		window.$.fn.emulateAnimationEnd = function(b) {
			var c = !1,
			d = this; (0, window.$)(this).one(a,
			function() {
				c = !0
			}); (0, window.setTimeout)(function() {
				c || (0, window.$)(d).trigger(a)
			},
			b);
			return this
		}
	})({
		WebkitAnimation: "webkitAnimationEnd",
		MozAnimation: "mozAnimationEnd",
		OAnimation: "oanimationend",
		msAnimation: "MSAnimationEnd",
		animation: "animationend"
	} [window.Modernizr.prefixed("animation") || "animation"]); window.$.fn.Fc = function() {
		var a = {},
		b = this.serializeArray();
		window.$.each(b,
		function() {
			a[this.name] ? (a[this.name].push || (a[this.name] = [a[this.name]]), a[this.name].push(this.value || "")) : a[this.name] = this.value || ""
		});
		return a
	}; z.y(kk, z.G); kk.prototype.play = function() {
		var a = this;
		an(function() {
			a.J.toggleClass(a.NY)
		});
		if (window.Modernizr.csstransitions) a.J.onTransitionEnd(function() {
			a.dispatchEvent("end")
		},
		a.duration);
		else a.dispatchEvent("end")
	}; kk.prototype.stop = z.r; z.n(z.lk, z.T); z.e = z.lk.prototype; z.e.B = function() {
		z.T.prototype.B.call(this);
		z.Dj(this);
		this.hf = (0, window.$)(this.Xc);
		this.Yc = (0, window.$)(this.S()); (0, window.$)(this.jt()).addClass("z-ico-close");
		this.nr = (0, window.$)('\x3cspan class\x3d"mutiview-dialog-title-back z-ico-left"\x3e\x3c/span\x3e').appendTo(this.hf)
	}; z.e.C = function() {
		z.T.prototype.C.call(this);
		this.nr.click(window.$.proxy(this.gY, this));
		var a = this.m(),
		b = this.Xj(); (0, window.$)(a).addClass(this.ZV);
		this.oL(new kk(a, "show", 300), new kk(a, "show", 300), new kk(b, "show", 300), new kk(b, "show", 300))
	}; z.e.ca = function(a, b) {
		z.T.prototype.ca.call(this, a); (0, window.$)(".title", this.Yc).replaceAll(Ej(this));
		var c = (0, window.$)(".title", this.hf).addClass("right"),
		d = (0, window.$)(".view", this.Yc).addClass("right");
		b ? (this.gl = (0, window.$)(".title." + b, this.hf), this.pj = (0, window.$)(".view." + b, this.Yc)) : (this.gl = c.first(), this.pj = d.first());
		this.gl.removeClass("right");
		this.pj.removeClass("right")
	}; z.e.gY = function() {
		var a = this.pj,
		b = this.gl,
		c = this.sK.pop(),
		d = this.rK.pop();
		c.length && d.length && (qk(this), c.css("visibility", "visible").removeClass(" left"), d.css("visibility", "visible").removeClass("left"), a.addClass("right").onTransitionEnd(function() {
			a.css("visibility", "hidden")
		},
		300), b.addClass("right").onTransitionEnd(function() {
			b.css("visibility", "hidden")
		},
		300), this.pj = c, this.gl = d, rk(this, this.ME.pop()), this.Lu())
	}; z.e.Lu = function() {}; window.$.fn.placeholder = function(a) {
		return this.each(function() {
			var b = (0, window.$)(this),
			c = b.data("placeholder");
			c || b.data("placeholder", c = new z.uk(this, a));
			c.check()
		})
	}; z.wk = "placeholder" in window.document.createElement("input"); z.e = z.uk.prototype; z.e.defaults = {
		text: "",
		offsetParent: null,
		KE: !1
	}; z.e.aP = ["paddingBottom", "paddingTop", "paddingLeft", "paddingRight"]; z.e.Uk = function(a) {
		var b = this.input,
		c = this.H;
		c.text = a || "";
		z.wk ? (zk(b) || z.cj(b, "label", c.text), b.setAttribute("placeholder", c.text)) : z.of(this.label, c.text)
	}; z.e.dispose = function() {
		this.qh && (this.qh.removeAll(), this.qh.dispose());
		z.N(this.label);
		this.label = null
	}; z.e.offsetParent = function() {
		return this.H.offsetParent || this.input.offsetParent
	}; z.e.check = function() {
		if (!z.wk) if (this.vh() && z.Mg(this.input)) {
			this.show();
			var a = this.input,
			b = z.Ug(a),
			c = this.label,
			d = z.Eg(a, this.offsetParent());
			z.tg(c, {
				left: d.x + b.left + "px",
				top: d.y + b.top + "px",
				width: Ak(a, "width"),
				fontSize: Ak(a, "fontSize"),
				lineHeight: Ak(a, "lineHeight"),
				fontFamily: Ak(a, "fontFamily")
			});
			this.offsetParent().appendChild(c)
		} else this.hide()
	}; z.e.show = function() {
		this.label && z.P(this.label, !0)
	}; z.e.hide = function() {
		this.label && z.P(this.label, !1)
	}; z.e.vh = function() {
		return ! this.input.value
	}; z.e.position = function() {
		z.A(this.aP,
		function(a) {
			this.label.style[a] = Ak(this.input, a)
		},
		this)
	}; z.cn = {
		WH: function() {
			var a = this,
			b = this.m(),
			c = (0, window.$)(".js-show-sns-buttons", b);
			c.click(function() {
				z.X.trackEvent(c, {
					action: "Click",
					element: "Button",
					element_name: "SNSSignIn"
				});
				c.onTransitionEnd(function() {
					c.css("visibility", "hidden")
				},
				250).removeClass("is-visible").next(".sns-buttons").addClass("is-visible")
			}); (0, window.$)("button.weibo", b).click(function() {
				a.qa({
					category: "sign_in_or_sign_up",
					action: "click_sign_with_weibo_start"
				});
				z.X.trackEvent(a, {
					action: "SignIn",
					element: "Button"
				},
				{
					account: {
						type: "Weibo"
					}
				});
				z.Zj("sina")
			}); (0, window.$)("button.qq", b).click(function() {
				a.qa({
					category: "sign_in_or_sign_up",
					action: "click_sign_with_qq_start"
				});
				z.X.trackEvent(a, {
					action: "SignIn",
					element: "Button"
				},
				{
					account: {
						type: "QQ"
					}
				});
				z.Zj("qq")
			}); (0, window.$)("button.wechat", b).click(function() {
				a.qa({
					category: "sign_in_or_sign_up",
					action: "click_sign_with_wechat_start"
				});
				z.X.trackEvent(a, {
					action: "SignIn",
					element: "Button"
				},
				{
					account: {
						type: "Wechat"
					}
				});
				z.Zj("wechat")
			})
		},
		qa: function(a) {
			this.Yf && !a.label && (a.label = this.Yf);
			this.dispatchEvent(window.$.extend({
				type: "trackRequested"
			},
			a)) && z.Ai(a)
		},
		Jm: function(a, b) {
			b || (b = (0, window.$)("form", this.m())); (0, window.$)(":submit", b).click(function() {
				a(b.Fc())
			}); (0, window.$)("keydown", b).click(function(c) {
				13 === c.keyCode && a(b.Fc())
			})
		},
		Te: function(a, b, c) {
			var d = (0, window.$)(".submit", a);
			a.validate(window.$.extend({},
			z.bn, {
				submitHandler: z.tk(d, window.$.proxy(b, this)),
				invalidHandler: c
			}));
			this.Aa = a
		},
		getData: function() {
			return this.Aa.Fc()
		},
		showErrors: function(a) {
			this.Aa.data("validator").showErrors(a)
		},
		Nt: function(a) {
			a = (0, window.$)(".input-wrapper.toggle-password", a);
			var b = (0, window.$)("input", a),
			c = (0, window.$)(".z-ico-show-password", a);
			c.click(function() {
				"password" === b.prop("type") ? (c.addClass("z-ico-hide-password"), b.prop("type", "text")) : (c.removeClass("z-ico-hide-password"), b.prop("type", "password"))
			})
		},
		Mt: function(a, b) {
			var c = z.sk(a, 60,
			function(a) {
				return a ? "%s 秒后重发": "重发验证码"
			},
			window.$.proxy(b, this), !0);
			z.Ac(this, c);
			return c
		},
		Xl: function() {
			var a = this;
			z.wk || (0, window.setTimeout)(function() { (0, window.$)("input[placeholder]:visible", a.Yc).placeholder()
			},
			10)
		},
		ae: function() {
			this.dispatchEvent("beforeredirect");
			var a = (new z.th(window.location.href)).Vd().get("next");
			a ? window.location.href = a: window.location.reload()
		},
		Hf: function(a) {
			return ! /^\+?[0-9]+$/.test(a)
		},
		Db: function(a, b, c) {
			a[b] && (a[c] = a[b], delete a[b])
		},
		nd: function(a) {
			this.Yf = a
		},
		dr: function(a) {
			var b = [this.getParent(), this].find(function(a) {
				return a instanceof z.lk
			});
			b ? mk(b, a) : a.F(!0)
		}
	}; z.bn = {
		ignore: ".is-ignoreValidation",
		onkeyup: !1,
		onfocusout: !1,
		validClass: "",
		focusInvalid: !1,
		highlight: z.r,
		messages: {
			fullname: {
				required: "请填写姓名"
			},
			invitation_code: {
				required: "请填写邀请码"
			},
			account: {
				required: z.Gk ? "请填写邮箱": "请填写手机号或邮箱"
			},
			agreement: {
				required: "请勾选并同意协议"
			},
			phone_num: {
				required: "请填写手机号"
			},
			email: {
				required: "请填写邮箱"
			},
			password: {
				required: "请填写密码"
			},
			verification_code: {
				required: "请填写验证码"
			}
		},
		errorPlacement: function(a, b) {
			if (!b.next(".error").length) {
				var c = b.prop("name");
				"captcha" === c && an(function() {
					b.nextAll(".Captcha-prompt").addClass("is-hidden")
				});
				"agreement" === c ? b.parents(".agreement").find(".error").remove().end().append('\n          \x3cdiv class\x3d"error"\x3e' + a.text() + "\x3c/div\x3e\n        ").find("input").focus() : a.insertAfter(b).click(function() {
					a.prev("input").focus()
				});
				an(function() {
					a.addClass("is-visible")
				});
				b.one("focus",
				function() {
					a.onTransitionEnd(function() {
						a.remove()
					},
					300).removeClass("is-visible")
				});
				if ("password" === b.prop("name")) b.one("focus",
				function() {
					"password" === b.prop("type") && (b.select(), b.off("mousedown mouseup").one("mouseup",
					function(a) {
						a.preventDefault()
					}).one("mousedown",
					function() {
						b.off("mouseup")
					}))
				})
			}
		},
		showErrors: function(a, b) {
			var c = (0, window.$)("label.error", this.currentForm);
			c.addClass("highlighted"); (0, window.setTimeout)(function() {
				c.removeClass("highlighted")
			},
			30);
			var d = this;
			b.length && window.$.each(b,
			function(a, b) {
				var c = (0, window.$)(b.element),
				k = b.message,
				l = (0, window.$)('\x3clabel class\x3d"error"\x3e' + k + "\x3c/label\x3e");
				"该邮箱已注册" !== k && "该手机号已注册" !== k || (0, window.$)('\x3cspan\x3e · \x3c/span\x3e\x3ca class\x3d"switch-to-login" href\x3d"javascript:;"\x3e直接登录\x3c/a\x3e').appendTo(l);
				an(function() {
					d.settings.errorPlacement(l, c)
				})
			})
		}
	}; z.n(z.Bk, z.lk); z.Bk.prototype.C = function() {
		z.lk.prototype.C.call(this);
		this.Xl()
	}; z.Bk.prototype.show = function() {
		var a = this;
		dn().then(function() {
			a.F(!0)
		})
	}; z.Bk.prototype.Lu = function() {
		z.lk.prototype.Lu.call(this);
		this.Xl()
	};
	var dn = z.hk(function() {
		if (z.Y.Lb()) throw Error("Logged in user should not call ZH.ui.SignDialog.prefetchTemplate");
		return window.$.get("/node/Register", {
			params: {
				is_org_page: z.Gk
			}
		})
	}); z.Ca(z.Bk.prototype, z.cn); (0, window.$)(function() {
		z.Y.Lb() || dn().then(function(a) { (0, window.$)(a).appendTo("body")
		})
	}); z.n(z.Ck, z.Bk); z.Ck.prototype.B = function() {
		z.Bk.prototype.B.call(this);
		this.ca((0, window.$)(".login-sms-verification-template").html())
	}; z.Ck.prototype.C = function() {
		z.Bk.prototype.C.call(this);
		this.Te((0, window.$)("form", this.h), this.submit);
		var a = this.options.data.phone_num; (0, window.$)('input[name\x3d"phone_num"]', this.h).val(a.slice(0, -8) + "****" + a.slice( - 4));
		Dk(this)
	}; z.Ck.prototype.submit = function() {
		var a = this,
		b = Object.assign({},
		this.options.data, this.getData());
		return window.$.post("/login/two_step_verification/sms", b,
		function(b) {
			b.r ? (b = b.data, b.password ? a.options.Cn ? (b = new a.options.Cn({
				data: {
					account: a.options.data.phone_num,
					password: a.options.data.password
				},
				qG: b
			}), b.Fb(a), a.dr(b)) : (a.options.rV(b), a.F(!1)) : a.showErrors(b)) : (a.qa({
				Vc: !0,
				category: "sign_in",
				action: "sign_in_success_phone"
			}), a.ae())
		})
	}; z.Ca(z.Ck.prototype, z.cn); z.y(z.Ek, z.Bk); z.e = z.Ek.prototype; z.e.B = function() {
		z.Ek.v.B.call(this);
		this.ca((0, window.$)(".unable-login-template").html())
	}; z.e.C = function() {
		z.Ek.v.C.call(this);
		Hk(this);
		Ik(this);
		Jk(this);
		Kk(this);
		Fk(this)
	}; z.e.wV = function(a) {
		var b = this,
		c = (0, window.$)(a);
		a = c.Fc(); (0, window.$)('input[name\x3d"account"]', this.xr).val(a.account);
		var d = this.Hf(a.account),
		f = d ? "/send_login_verification_code/email": "/send_login_verification_code/sms";
		d ? this.Db(a, "account", "email") : this.Db(a, "account", "phone_num");
		a.is_org_page = z.Gk; (0, window.$)('input[name\x3d"verification_code"]', this.xr).attr("placeholder", d ? "邮箱收到的 6 位数验证码": "手机收到的 6 位数验证码");
		return window.$.get(f, a,
		function(a) {
			if (a.r) if (200001 === a.errcode) {
				var d = '机构帐号\x3cspan\x3e · \x3c/span\x3e\x3ca href\x3d"/org/signin"\x3e点此找回\x3c/a\x3e';
				z.Gk && (d = '用户帐号\x3cspan\x3e · \x3c/span\x3e\x3ca href\x3d"/signin"\x3e点此找回\x3c/a\x3e');
				c.data("validator").showErrors({
					account: d
				})
			} else z.gk(b.lv),
			c.data("validator").showErrors(a.data);
			else pk(b, !0, this.xr, this.jN),
			b.kX.start();
			z.X.trackEvent(c, {
				action: "StatusReport"
			},
			{
				status: {
					result: a.r ? "Fail": "Success",
					error_msg: a.data ? window.$.map(a.data,
					function(a, b) {
						return b + ":" + a
					}) : null,
					event: {
						action: "GetCaptcha",
						element: "Button"
					}
				}
			})
		})
	}; z.e.xV = function(a) {
		var b = this,
		c = (0, window.$)(a);
		a = c.Fc();
		var d = this.Hf(a.account),
		f = d ? "/reset_password/email": "/reset_password/phone_num";
		d ? this.Db(a, "account", "email") : this.Db(a, "account", "phone_num");
		return window.$.post(f, a,
		function(a) {
			a.r ? c.data("validator").showErrors(a.data) : b.ae();
			z.X.trackEvent(c, {
				action: "StatusReport"
			},
			{
				status: {
					result: a.r ? "Fail": "Success",
					error_msg: a.data ? window.$.map(a.data,
					function(a, b) {
						return b + ":" + a
					}) : null,
					event: {
						action: "SignIn",
						element: "Button"
					}
				}
			})
		})
	}; z.e.yV = function(a) {
		var b = this,
		c = (0, window.$)(a);
		return window.$.get("/send_login_verification_code/sms", c.serialize(),
		function(a) {
			if (a.r) {
				z.gk(b.Kw);
				var f = a.data;
				b.Db(f, "account", "phone_num");
				c.data("validator").showErrors(f)
			} else f = (0, window.$)('input[name\x3d"phone_num"]', c).val(),
			(0, window.$)('input[name\x3d"phone_num"]', this.lw).val(f),
			pk(b, !0, this.lw, this.UM),
			b.FN.start();
			z.X.trackEvent(c, {
				action: "StatusReport"
			},
			{
				status: {
					result: a.r ? "Fail": "Success",
					error_msg: a.data ? window.$.map(a.data,
					function(a, b) {
						return b + ":" + a
					}) : null,
					event: {
						action: "GetCaptcha",
						element: "Button"
					}
				}
			})
		})
	}; z.e.zV = function(a) {
		var b = this,
		c = (0, window.$)(a);
		return window.$.post("/login/sms_code", c.serialize(),
		function(a) {
			if (a.r) {
				var f = a.data;
				b.Db(f, "account", "phone_num");
				c.data("validator").showErrors(f)
			} else b.ae();
			z.X.trackEvent(c, {
				action: "StatusReport"
			},
			{
				status: {
					result: a.r ? "Fail": "Success",
					error_msg: a.data ? window.$.map(a.data,
					function(a, b) {
						return b + ":" + a
					}) : null,
					event: {
						action: "SignIn",
						element: "Button"
					}
				}
			})
		})
	}; z.y(z.Lk, z.Bk); z.Lk.prototype.B = function() {
		z.Lk.v.B.call(this);
		var a = (0, window.$)(".oauth-register-template").html(),
		b = this.Vf.status;
		"bound" === b ? this.ca(a, "bound") : "registered" === b ? this.ca(a, "registered") : this.ca(a, "register")
	}; z.Lk.prototype.C = function() {
		z.Lk.v.C.call(this);
		Mk(this);
		Nk(this);
		Ok(this);
		Pk(this);
		var a = this;
		this.Yc.on("click", "button.bind-login",
		function() {
			pk(a, !0, a.mw, a.WM)
		}).on("click", "button.register",
		function() {
			pk(a, !0, a.he, a.hN)
		})
	}; z.Lk.prototype.Zp = function(a) {
		var b = this,
		c = (0, window.$)(a);
		b.qa({
			Vc: !0,
			category: "sign_up",
			action: "sign_up_front_end_pass_" + Qk(b)
		});
		return window.$.post("/register/sns", c.serialize(),
		function(a) {
			a.r ? (z.gk(b.captcha), c.data("validator").showErrors(a.data)) : (b.qa({
				Vc: !0,
				category: "sign_up",
				action: "sign_up_success_" + Qk(b)
			}), b.ae())
		})
	}; z.Lk.prototype.PU = function(a) {
		var b = this,
		c = (0, window.$)(a);
		b.qa({
			Vc: !0,
			category: "sign_in",
			action: "sign_in_front_end_pass_" + Qk(b)
		});
		return window.$.post("/login/bind", c.serialize(),
		function(a) {
			a.r ? c.data("validator").showErrors(a.data) : (b.qa({
				Vc: !0,
				category: "sign_in",
				action: "sign_in_success_" + Qk(b)
			}), b.ae())
		})
	}; z.n(z.Rk, z.Q); z.e = z.Rk.prototype; z.e.C = function() {
		z.Q.prototype.C.call(this);
		this.oc();
		this.$o()
	}; z.e.oc = function() {
		var a = this,
		b = this.m(),
		c = this.Aa = (0, window.$)("form", b);
		this.Te(c, this.kB,
		function(b, d) {
			z.X.trackEvent(c, {
				action: "StatusReport"
			},
			{
				status: {
					result: "Fail",
					error_msg: window.$.map(d.errorList,
					function(a) {
						return a.element.name + ":" + a.message
					}),
					event: {
						action: "SignIn",
						element: "Button"
					}
				},
				account: a.yd(c.Fc())
			})
		});
		this.Nt(c);
		this.WH();
		var d = (0, window.$)(".captcha-module", b).get(0);
		this.captcha = new z.ck("login");
		this.captcha.w(d);
		z.gk(this.captcha);
		var f = (0, window.$)("input.account", c); (0, window.$)("button.unable-login", b).click(function() {
			var b = new z.Ek(f.val());
			a.dr(b);
			z.X.trackEvent(c, {
				action: "Click",
				element: "Button",
				element_name: "UnableSignIn"
			})
		});
		this.options.data && (b = this.options.data.account, d = this.options.data.password, b && f.val(b), d && (0, window.$)("[name\x3dpassword]", c).val(d));
		this.options.qG && this.showErrors(this.options.qG);
		this.Jm(function(b) {
			z.X.trackEvent(c, {
				action: "SignIn",
				element: "Button"
			},
			{
				account: a.yd(b)
			})
		})
	}; z.e.yd = function(a) {
		a = a.phone_num || a.account;
		var b = {
			type: "Zhihu"
		};
		this.Uh && this.Hf(a) ? b.email = a || null: b.phone = a || null;
		return b
	}; z.e.kB = function(a) {
		var b = this; (0, window.$)(a);
		var c = this.getData();
		a = this.Hf(c.account);
		this.qa({
			Vc: !0,
			category: "sign_in",
			action: "sign_in_front_end_pass_" + (a ? "email": "phone")
		});
		var d = a ? "/login/email": "/login/phone_num";
		a ? this.Db(c, "account", "email") : this.Db(c, "account", "phone_num");
		return window.$.post(d, c,
		function(a) {
			z.X.trackEvent((0, window.$)("form", b.m()), {
				action: "StatusReport"
			},
			{
				status: {
					result: a && a.r ? "Fail": "Success",
					error_msg: a.data ? window.$.map(a.data,
					function(a, b) {
						return b + ":" + a
					}) : null,
					event: {
						action: "SignIn",
						element: "Button"
					}
				},
				account: b.yd((0, window.$)("form", b.m()).Fc())
			});
			if (a && a.r) {
				var d = a.errcode;
				1991831 === d ? (a = new z.Ck({
					data: {
						phone_num: c.phone_num,
						password: c.password
					},
					Cn: b.options.Cn
				}), a.Fb(b), b.dr(a)) : 200001 === d ? (a = '机构帐号\x3cspan\x3e · \x3c/span\x3e\x3ca href\x3d"/org/signin"\x3e点此登录\x3c/a\x3e', z.Gk && (a = '个人帐号\x3cspan\x3e · \x3c/span\x3e\x3ca href\x3d"/signin"\x3e点此登录\x3c/a\x3e'), b.showErrors({
					account: a
				})) : (z.gk(b.captcha), b.showErrors(a.data))
			} else b.ae()
		})
	}; z.e.$o = function() {
		z.bk(this.o(), this.cB)
	}; z.e.cB = function(a) {
		a = a.Pf;
		var b = {
			qqconn: "qq",
			wechat: "wechat",
			sina: "weibo"
		} [a.type];
		1 === a.login ? (z.X.trackEvent((0, window.$)(".sns-buttons ." + b, this.m()), {
			action: "StatusReport"
		},
		{
			status: {
				result: "Success",
				event: {
					action: "SignIn",
					element: "Button"
				}
			},
			account: {
				type: {
					qqconn: "QQ",
					wechat: "Wechat",
					sina: "Weibo"
				} [a.type]
			}
		}), this.ae()) : (a = new z.Lk(a), a.nd(this.Yf), this.dr(a))
	}; z.Ca(z.Rk.prototype, z.cn); z.n(z.Sk, z.Bk); z.Sk.prototype.B = function() {
		z.Bk.prototype.B.call(this);
		this.ca((0, window.$)(".login-template").html())
	}; z.Sk.prototype.C = function() {
		z.Bk.prototype.C.call(this);
		var a = new z.Rk(Object.assign({
			Cn: z.Sk
		},
		this.options));
		this.L(a);
		a.nd(this.Yf);
		a.w(this.S());
		this.qa({
			category: "sign_in",
			action: "popup_sign_in_box_appear"
		})
	}; z.Ca(z.Sk.prototype, z.cn); z.y(z.Tk, z.xc); z.Tk.prototype.start = function() {
		if (!this.wp) {
			this.wp = !0;
			this.Be = {};
			var a = z.Qe();
			this.Be.viewport = [a.width, a.height, (0, z.H)()];
			var b = [],
			c = 0,
			d = 0; (0, window.$)(window.document).on("mousemove.recording",
			function(a) {
				c = a.clientX;
				d = a.clientY
			});
			var f = this,
			g = function() { (0, window.setTimeout)(function() {
					150 <= b.length && b.shift();
					b.push([c, d, (0, z.H)()]);
					f.wp && g()
				},
				500)
			};
			g();
			this.Be.trace = b;
			var h = {};
			this.sw.on("keydown.recording keyup.recording mouseenter.recording mouseleave.recording click.recording", "input",
			function(a) {
				var b = a.target.name,
				c = h[b];
				c || (c = h[b] = {
					mouse: [],
					keyborad: []
				});
				"mouseenter" === a.type || "mouseleave" === a.type || "click" === a.type ? c.mouse.push([a.type, a.offsetX, a.offsetY, (0, z.H)()]) : "password" === b ? c.keyborad.push([a.type, (0, z.H)()]) : c.keyborad.push([a.type, a.keyCode, (0, z.H)()])
			});
			h.submit = [];
			this.sw.on("mousedown.recording mouseenter.recording mouseleave.recording", ":submit",
			function(a) {
				h.submit.push([a.type, a.offsetX, a.offsetY, (0, z.H)()])
			});
			this.Be.register = h
		}
	}; z.Tk.prototype.stop = function() {
		this.wp && (this.wp = !1, (0, window.$)(window.document).off(".recording"), this.sw.off(".recording"));
		return this.Be
	}; z.Tk.prototype.D = function() {
		z.Tk.v.D.call(this);
		this.stop();
		this.Be = null
	}; z.n(z.Uk, z.Q); z.e = z.Uk.prototype; z.e.C = function() {
		z.Q.prototype.C.call(this);
		this.nf();
		this.$o()
	}; z.e.nf = function() {
		var a = this,
		b = this.m(),
		c = (0, window.$)("form", b);
		this.Uh = !(0, window.$)('input[name\x3d"phone_num"]', c).length;
		this.Te(c, this.Zp,
		function(b, f) {
			z.X.trackEvent(c, {
				action: "StatusReport"
			},
			{
				status: {
					result: "Fail",
					error_msg: window.$.map(f.errorList,
					function(a) {
						return a.element.name + ":" + a.message
					}),
					event: {
						action: "SignUp",
						element: "Button"
					}
				},
				account: a.yd(c.Fc())
			})
		});
		this.Nt(c);
		this.WH();
		b = (0, window.$)(".captcha-module", b).get(0);
		this.captcha = new z.ck;
		this.captcha.w(b);
		z.gk(this.captcha);
		this.tn = new z.Tk(c);
		this.tn.start();
		z.Ac(this, this.tn);
		this.Jm(function(b) {
			z.X.trackEvent(c, {
				action: "SignUp",
				element: "Button"
			},
			{
				account: a.yd(b)
			})
		})
	}; z.e.yd = function(a) {
		var b = a.phone_num || a.account;
		a = {
			type: "Zhihu",
			name: a.fullname || null
		};
		this.Uh && this.Hf(b) ? a.email = b || null: a.phone = b || null;
		return a
	}; z.e.Zp = function(a) {
		var b = (0, window.$)(a),
		c = b.data("validator"),
		d = b.Fc();
		a = this.Uh ? this.Hf(d.account) : !1;
		this.qa({
			Vc: !0,
			category: "sign_up",
			action: "sign_up_front_end_pass_" + (a ? "email": "phone")
		});
		var f = a ? "/register/email": "/register/phone_num/validation";
		a ? this.Db(d, "account", "email") : this.Db(d, "account", "phone_num");
		var g = this.tn.stop();
		d.userInfo = JSON.stringify(g);
		if (a) {
			var h = this;
			return window.$.post(f, d,
			function(a) {
				a.r ? (z.gk(h.captcha), c.showErrors(a.data)) : (h.qa({
					Vc: !0,
					category: "sign_up",
					action: "sign_up_success_email"
				}), h.Mg && Ji.nn("sign_up", "sign_up_success", h.Mg), h.ae());
				z.X.trackEvent(b, {
					action: "StatusReport"
				},
				{
					status: {
						result: a.r ? "Fail": "Success",
						error_msg: a.data ? window.$.map(a.data,
						function(a, b) {
							return b + ":" + a
						}) : null,
						event: {
							action: "SignUp",
							element: "Button"
						}
					},
					account: h.yd(b.Fc())
				})
			})
		}
		var k = this;
		return window.$.post(f, d,
		function(a) {
			a.r ? (z.gk(k.captcha), k.Uh || k.Db(a.data, "account", "phone_num"), c.showErrors(a.data)) : k.dispatchEvent({
				type: "success",
				data: d
			});
			z.X.trackEvent(b, {
				action: "StatusReport"
			},
			{
				status: {
					result: a.r ? "Fail": "Success",
					error_msg: a.data ? window.$.map(a.data,
					function(a, b) {
						return b + ":" + a
					}) : null,
					event: {
						action: "SignUp",
						element: "Button"
					}
				},
				account: k.yd(b.Fc())
			})
		})
	}; z.e.$o = function() {
		z.bk(this.o(), this.cB)
	}; z.e.cB = function(a) {
		a = a.Pf;
		var b = {
			qqconn: "qq",
			wechat: "wechat",
			sina: "weibo"
		} [a.type];
		1 === a.login ? (this.qa({
			Vc: !0,
			category: "sign_in",
			action: "sign_in_success_" + b
		}), this.ae()) : (a = new z.Lk(a), a.Fb(this), a.nd(this.Yf), this.dr(a))
	}; z.Ca(z.Uk.prototype, z.cn); z.n(z.Vk, z.Q); z.Vk.prototype.C = function() {
		z.Q.prototype.C.call(this);
		this.nf();
		this.o().g(this, "hide", this.kF)
	}; z.Vk.prototype.nf = function() {
		var a = (0, window.$)("form", this.m());
		this.Te(a, this.sV);
		var b = (0, window.$)(".send-code", a),
		c = (0, window.$)('input[name\x3d"phone_num"]', a);
		this.ka = this.Mt(b,
		function() {
			var b = c.val(),
			f = this;
			window.$.get("/send_register_verification_code/sms", window.$.param({
				phone_num: b
			}),
			function(b) {
				b.r && (b = b.data, f.Db(b, "account", "phone_num"), a.data("validator").showErrors(b))
			})
		});
		c.val(this.zo.phone_num);
		window.$.get("/send_register_verification_code/sms", {
			phone_num: this.zo.phone_num
		});
		this.ka.start()
	}; z.Vk.prototype.sV = function(a) {
		var b = this,
		c = (0, window.$)(a);
		a = window.$.extend({},
		this.zo, c.Fc());
		return window.$.post("/register/phone_num", a,
		function(a) {
			a.r ? (a = a.data, b.Db(a, "account", "phone_num"), c.data("validator").showErrors(a)) : (b.qa({
				Vc: !0,
				category: "sign_up",
				action: "sign_up_success_phone"
			}), b.Mg && Ji.nn("sign_up", "sign_up_success", b.Mg), b.ae())
		})
	}; z.Ca(z.Vk.prototype, z.cn); z.n(z.Wk, z.Bk); z.e = z.Wk.prototype; z.e.B = function() {
		z.Bk.prototype.B.call(this);
		this.ca((0, window.$)(".register-template").html() + (0, window.$)(".phone-verification-template").html())
	}; z.e.C = function() {
		z.Bk.prototype.C.call(this);
		Xk(this);
		this.o().g(this, "hide", this.kF);
		this.o().g(this, "beforeredirect", this.SW);
		this.qa({
			category: "sign_up",
			action: "popup_sign_up_box_appear"
		});
		this.Mg && Ji.track("sign_up", "show_sign_up_dialog", this.Mg)
	}; z.e.zq = z.m(27); z.e.kF = function() {
		this.Gj = "";
		$i()
	}; z.e.SW = function() {
		var a = this.Gj;
		a ? z.aj.set("actioncontinuationhash", (0, window.encodeURIComponent)(a), 60, "/") : $i()
	}; z.Ca(z.Wk.prototype, z.cn); z.y(Yk, z.G);
	var $k = {}; Yk.prototype.defaults = {}; Yk.prototype.o = function() {
		return this.qh || (this.qh = new z.xd(this))
	}; Yk.prototype.init = function() {}; Yk.prototype.D = function() {
		Yk.v.D.call(this);
		this.view && (z.Kb(this.view.Xb, this.name), this.view = null);
		this.qh && (this.qh.dispose(), this.qh = null)
	}; z.y(z.bl, z.Q); z.e = z.bl.prototype; z.e.defaults = {
		source: null,
		use: ["autoload", "shortcut"],
		Uf: !0,
		Cl: "zg-btn-white zu-button-more"
	}; z.e.use = function(a, b) {
		var c = al(a, b);
		c.view = this;
		this.wa ? c.init(this) : this.o().g(this, "initialized",
		function() {
			c.init(this)
		});
		this.Xb[a] = c;
		return this
	}; z.e.eh = function() { ! this.Lc && this.H.Uf && (this.Lc = this.Wn(), z.df(this.Lc, this.h), this.o().g(this.Lc, "click", this.zg))
	}; z.e.C = function() {
		z.bl.v.C.call(this);
		this.eh();
		z.A(this.ib(), this.ss, this);
		z.A(this.H.use, this.use, this);
		this.dispatchEvent("initialized")
	}; z.e.D = function() {
		z.Db(this.Xb,
		function(a) {
			a.dispose()
		});
		this.Xb = null;
		this.Lc && (z.N(this.Lc), this.Lc = null);
		z.bl.v.D.call(this)
	}; z.e.ib = function() {
		return z.gf(this.h)
	}; z.e.ss = function(a, b) {
		this.Fu(a, b);
		this.dispatchEvent({
			type: "itemcreated",
			item: a,
			index: b
		})
	}; z.e.Fu = z.r; z.e.hV = function(a) {
		if (a) {
			var b = a.results,
			c = !b || !b.length;
			c || this.render(b);
			this.dispatchEvent("next"); (c || !1 === a.next) && dl(this)
		}
	}; z.e.render = function(a, b) {
		a = window.$.isArray(a) ? a.join("") : a;
		var c = z.Ye(a + " ");
		z.A(window.$.makeArray(z.gf(c)), this.ss, this);
		z.ef(this.h, c, b)
	}; z.e.zg = function() {
		if (!1 !== this.dispatchEvent("beforeloadnext") && !this.vp()) return this.Cv(!0),
		this.promise = this.source().done((0, z.t)(this.hV, this)).always((0, z.t)(z.Ba(this.Cv, !1), this))
	}; z.e.vp = function() {
		return this.promise && "pending" === this.promise.state()
	}; z.e.Af = function() {
		return this.Lc
	}; z.e.Wn = function() {
		return z.M("a", {
			"aria-role": "button",
			"class": this.H.Cl
		},
		"更多")
	}; z.e.Cv = function(a) {
		this.Lc && (this.Lc.innerHTML = a ? '\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e 加载中': "更多", z.U.enable(this.Lc, "loading", a))
	};
	var fl = {
		s: function(a, b, c) {
			return (0, window.isNaN)(c) || "" == c || a.length >= c ? a: a = -1 < b.indexOf("-", 0) ? a + Za(" ", c - a.length) : Za(" ", c - a.length) + a
		},
		f: function(a, b, c, d, f) {
			d = a.toString(); (0, window.isNaN)(f) || "" == f || (d = (0, window.parseFloat)(a).toFixed(f));
			var g;
			g = 0 > a ? "-": 0 <= b.indexOf("+") ? "+": 0 <= b.indexOf(" ") ? " ": "";
			0 <= a && (d = g + d);
			if ((0, window.isNaN)(c) || d.length >= c) return d;
			d = (0, window.isNaN)(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
			a = c - d.length - g.length;
			return d = 0 <= b.indexOf("-", 0) ? g + d + Za(" ", a) : g + Za(0 <= b.indexOf("0", 0) ? "0": " ", a) + d
		},
		d: function(a, b, c, d, f, g, h, k) {
			return fl.f((0, window.parseInt)(a, 10), b, c, d, 0, g, h, k)
		}
	}; fl.i = fl.d; fl.u = fl.d; Zk("activeSource", {
		defaults: {
			fP: "%d 条新动态",
			Cl: "zu-main-feed-fresh-button",
			s0: z.r
		},
		init: function(a) {
			this.data = [];
			this.button = this.Wn();
			z.cf(this.button, a.m());
			this.o().g(this.button, "click",
			function() {
				a.render(this.data, 0);
				this.setData([])
			});
			var b = this,
			c = this.options.source(function(a) {
				a && a.length && b.setData(a.concat(b.data))
			},
			function() {
				return b.data
			});
			if (!c || !z.qa(c.dispose)) throw Error("Source must return a disposable object.");
			this.hQ = c
		},
		setData: function(a) {
			this.data = a;
			this.XU()
		},
		XU: function() {
			var a = this.data.length;
			z.of(this.button, z.el(this.options.fP, a));
			z.P(this.button, !!a)
		},
		Wn: function() {
			return z.M("a", {
				href: "javascript:;",
				style: "display:none",
				"class": this.options.Cl
			})
		},
		dispose: function() {
			Yk.prototype.dispose.call(this);
			z.Cc(this.hQ);
			this.options = null;
			this.button && (z.N(this.button), this.button = null)
		}
	}); z.y(z.gl, z.xc); z.e = z.gl.prototype; z.e.Av = !1; z.e.CB = 0; z.e.ka = null; z.e.fire = function(a) {
		this.gx = arguments;
		this.ka || this.CB ? this.Av = !0 : this.hh()
	}; z.e.stop = function() {
		this.ka && (z.wd(this.ka), this.ka = null, this.Av = !1, this.gx = [])
	}; z.e.pause = function() {
		this.CB++
	}; z.e.D = function() {
		z.gl.v.D.call(this);
		this.stop()
	}; z.e.IV = function() {
		this.ka = null;
		this.Av && !this.CB && (this.Av = !1, this.hh())
	}; z.e.hh = function() {
		this.ka = z.vd(this.El, this.uh);
		this.yk.apply(null, this.gx)
	}; z.y(z.hl, z.G); z.hl.prototype.oc = function() {
		var a = this.Uq = new z.gl(this.update, this.$P, this);
		this.ea.g(this.viewport, ["scroll", "resize"],
		function() {
			a.fire()
		})
	}; z.hl.prototype.o = function() {
		return this.ea
	}; z.hl.prototype.D = function() {
		z.hl.v.D.call(this);
		this.ea.dispose();
		this.ea = null;
		this.Uq.dispose();
		this.Uq = null
	}; z.hl.prototype.update = function() {
		this.size = (mf(this.viewport) ? z.Qe: Ig)(this.viewport);
		this.dispatchEvent("update")
	}; z.en = new z.hl; (0, window.$)(function() {
		z.en.update()
	}); Zk("autoload", {
		defaults: {
			Tr: !0,
			viewport: window,
			r0: function() {
				return ! 0
			}
		},
		init: function(a) {
			if (a.Af() && (!this.options.Tr || z.Y.Lb())) {
				var b = this.options.viewport,
				c = new z.hl(b);
				z.Ac(this, c);
				il(c, this,
				function(c) {
					return z.Mg(a.Af()) ? 400 >= (mf(b) ? a.Af().getBoundingClientRect().top - c.height: b.scrollHeight - b.scrollTop - c.height) : !1
				});
				this.o().g(a, "complete", this.dispose).g(a, "next",
				function() {
					this.enable()
				});
				this.enable()
			}
		},
		enable: function() {
			this.o().xa(this, "nearbottom",
			function() {
				this.view.zg()
			})
		}
	}); Zk("childConstructor", {
		defaults: {
			Hj: null,
			factory: null
		},
		init: function(a) {
			z.qa(this.options.Hj) && z.cl(a, this.DP, this);
			z.qa(this.options.factory) && z.cl(a, this.JW, this)
		},
		DP: function(a) {
			var b = new this.options.Hj;
			this.view.L(b);
			b.w(a)
		},
		JW: function(a) {
			var b = this.options.factory(a);
			this.view.L(b);
			b.w(a)
		}
	}); Zk("dataPagingSource", {
		defaults: {
			gF: !0
		},
		init: function(a) {
			var b = (0, window.$)(a.m()).data("paging"),
			c = "on" === (0, window.$)(a.m()).data("debugmode") ? "\x26debug\x3dTrue": "",
			d = b.next ? b.next + c: "";
			d || dl(a);
			a.source = function() {
				return window.$.get(d).then(function(a) {
					d = a.paging.next ? a.paging.next + c: "";
					return {
						results: a.htmls,
						next: !!d
					}
				})
			}
		}
	}); Zk("expandLimit", {
		defaults: {
			HY: 3
		},
		init: function(a) {
			z.Y.Lb() || this.o().g(a, "beforeloadnext",
			function() {
				var a = new z.Wk;
				a.nd("expand");
				a.show();
				return ! 1
			})
		}
	}); Zk("locationSource", {
		defaults: {
			hu: 20,
			param: null,
			AB: !1,
			offset: function(a) {
				return a.length
			}
		},
		init: function(a) {
			function b(a) {
				return {
					start: c.AB ? z.jb(a).id.split("-")[1] : 0,
					offset: c.offset(a)
				}
			}
			var c = this.options,
			d = c.url || window.location.href,
			f = a.ib().length; (!f || f < c.hu) && dl(a);
			a.source = function() {
				return window.$.post(d, (c.param || b)(a.ib())).then(function(b) {
					if (!b.r) {
						b = b.msg;
						var d = b[0];
						z.pa(d) && d < c.hu && dl(a);
						return {
							results: b[1]
						}
					}
				})
			}
		}
	}); Zk("nodeSource", {
		defaults: {
			gF: !0,
			offset: null,
			filter: null
		},
		init: function(a) {
			var b = this.options,
			c = (0, window.$)(a.m()).data("init");
			if (c) {
				var d = "/node/" + c.nodename,
				f = c.params,
				g = f.offset || 0,
				c = f.limit,
				h = f.pagesize;
				b.gF && c && a.ib().length < c && dl(a);
				a.source = function() {
					var c = void 0,
					c = b.offset ? b.offset() : g + a.ib().length;
					return window.$.post(d, {
						method: "next",
						params: window.$.extend(f, {
							offset: c
						})
					}).then(function(a) {
						var c = !0;
						h && !a.r && a.msg.length < h && (c = !1);
						var d = a.msg;
						b.filter && "function" === typeof b.filter && (d = b.filter(a.msg));
						return ! a.r && {
							results: d,
							next: c
						}
					})
				}
			}
		}
	}); z.rl = {
		8 : "backspace",
		9 : "tab",
		13 : "enter",
		16 : "shift",
		17 : "ctrl",
		18 : "alt",
		19 : "pause",
		20 : "caps-lock",
		27 : "esc",
		32 : "space",
		33 : "pg-up",
		34 : "pg-down",
		35 : "end",
		36 : "home",
		37 : "left",
		38 : "up",
		39 : "right",
		40 : "down",
		45 : "insert",
		46 : "delete",
		48 : "0",
		49 : "1",
		50 : "2",
		51 : "3",
		52 : "4",
		53 : "5",
		54 : "6",
		55 : "7",
		56 : "8",
		57 : "9",
		59 : "semicolon",
		61 : "equals",
		65 : "a",
		66 : "b",
		67 : "c",
		68 : "d",
		69 : "e",
		70 : "f",
		71 : "g",
		72 : "h",
		73 : "i",
		74 : "j",
		75 : "k",
		76 : "l",
		77 : "m",
		78 : "n",
		79 : "o",
		80 : "p",
		81 : "q",
		82 : "r",
		83 : "s",
		84 : "t",
		85 : "u",
		86 : "v",
		87 : "w",
		88 : "x",
		89 : "y",
		90 : "z",
		93 : "context",
		96 : "num-0",
		97 : "num-1",
		98 : "num-2",
		99 : "num-3",
		100 : "num-4",
		101 : "num-5",
		102 : "num-6",
		103 : "num-7",
		104 : "num-8",
		105 : "num-9",
		106 : "num-multiply",
		107 : "num-plus",
		109 : "num-minus",
		110 : "num-period",
		111 : "num-division",
		112 : "f1",
		113 : "f2",
		114 : "f3",
		115 : "f4",
		116 : "f5",
		117 : "f6",
		118 : "f7",
		119 : "f8",
		120 : "f9",
		121 : "f10",
		122 : "f11",
		123 : "f12",
		186 : "semicolon",
		187 : "equals",
		189 : "dash",
		188 : ",",
		190 : ".",
		191 : "/",
		192 : "`",
		219 : "open-square-bracket",
		220 : "\\",
		221 : "close-square-bracket",
		222 : "single-quote",
		224 : "win"
	};
	var ql; z.y(jl, z.G);
	var kl = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19], ll = "color date datetime datetime-local email month number password search tel text time url week".split(" "); z.e = jl.prototype; z.e.WW = function(a, b) {
		tl(this.dn, ol(1, arguments), a)
	}; z.e.aZ = function(a) {
		ul(this.dn, ol(0, arguments))
	}; z.e.gD = function() {
		this.dn = {}
	}; z.e.D = function() {
		jl.v.D.call(this);
		this.gD();
		z.md(this.yh, "keydown", this.Cf, !1, this);
		z.B && z.md(this.yh, "keyup", this.jH, !1, this);
		z.ml && !z.B && (z.md(this.yh, "keypress", this.yH, !1, this), z.md(this.yh, "keyup", this.zH, !1, this));
		this.yh = null
	}; z.e.jH = function(a) {
		if (z.Uc) {
			if (224 == a.keyCode) {
				this.jJ = !0;
				z.vd(function() {
					this.jJ = !1
				},
				400, this);
				return
			}
			var b = a.metaKey || this.jJ;
			67 != a.keyCode && 88 != a.keyCode && 86 != a.keyCode || !b || (a.metaKey = b, this.Cf(a))
		}
		32 == this.Ow && 32 == a.keyCode && a.preventDefault();
		this.Ow = null
	}; z.e.yH = function(a) {
		32 < a.keyCode && sl(a) && (this.rI = !0)
	}; z.e.zH = function(a) { ! this.rI && sl(a) && this.Cf(a)
	}; z.e.Cf = function(a) {
		var b;
		b = a.keyCode;
		if (16 == b || 17 == b || 18 == b) b = !1;
		else {
			var c = a.target,
			d = "TEXTAREA" == c.tagName || "INPUT" == c.tagName || "BUTTON" == c.tagName || "SELECT" == c.tagName,
			f = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
			b = !d && !f || this.bR[b] || this.uO ? !0 : f ? !1 : this.yU && (a.altKey || a.ctrlKey || a.metaKey) ? !0 : "INPUT" == c.tagName && this.AY[c.type] ? 13 == b: "INPUT" == c.tagName || "BUTTON" == c.tagName ? this.xO ? !0 : 32 != b: !1
		}
		if (b) if ("keydown" == a.type && sl(a)) this.rI = !1;
		else {
			b = z.lj(a.keyCode);
			c = b & 255 | ((a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0)) << 8;
			if (!this.qo[c] || 1500 <= (0, z.H)() - this.bu) this.qo = this.dn,
			this.bu = (0, z.H)();
			if (c = this.qo[c]) c.next ? (this.qo = c.next, this.bu = (0, z.H)(), a.preventDefault()) : (this.qo = this.dn, this.bu = (0, z.H)(), this.vE && a.preventDefault(), this.yO && a.stopPropagation(), c = c.df, d = a.target, f = this.dispatchEvent(new vl("shortcut", c, d)), (f &= this.dispatchEvent(new vl("shortcut_" + c, c, d))) || a.preventDefault(), z.B && (this.Ow = b))
		}
	}; z.y(vl, z.Lc); z.y(wl, z.xc); z.fn = []; z.e = wl.prototype; z.e.oc = function(a) {
		z.fn.push(this);
		this.Al = new z.Qd;
		this.ea = new jl(a);
		this.ea.vE = !1;
		this.ea.addEventListener("shortcut", this.MV, !1, this)
	}; z.e.register = function(a, b, c) {
		this.Sn = {
			key: a,
			action: b,
			context: c
		};
		this.ea.WW(a, a);
		this.Al.set(a, this.Sn);
		return this
	}; z.e.bZ = function(a) {
		this.Sn = null;
		this.ea.aZ(a, a);
		this.Al.remove(a);
		return this
	}; z.e.unregister = function(a) {
		z.A(z.ma(a) ? a: [a], this.bZ, this)
	}; z.e.gD = function() {
		this.Sn = null;
		this.ea.gD();
		this.Al.clear();
		return this
	}; z.e.MV = function(a) {
		var b = this.Al.get(a.identifier);
		b && b.action.call(b.context, a)
	}; z.e.D = function() {
		wl.v.D.call(this);
		z.tb(z.fn, this);
		this.ea.dispose();
		this.Al = this.Sn = this.ea = null
	}; z.gn = new wl(window.document); z.gn.PM = function(a) {
		return new wl(a)
	}; z.y(yl, z.Q); z.e = yl.prototype; z.e.defaults = {
		items: "\x3eli",
		mP: !1,
		KQ: !0,
		className: "navigable",
		DG: "navigable-focusin"
	}; z.e.C = function() {
		yl.v.C.call(this);
		var a = this.H;
		this.J = (0, window.$)(this.h).addClass(a.className).data("navigable", this).on("focusin.navigable focusout.navigable", a.items, window.$.proxy(this.cV, this));
		this.ag()
	}; z.e.D = function() {
		yl.v.D.call(this);
		this.J.removeClass(this.H.className).data("navigable", null).off(".navigable");
		this.J = null
	}; z.e.ag = z.r; z.e.index = function() {
		return this.mk
	}; z.e.size = function() {
		return this.items().length
	}; z.e.prev = function() {
		zl(this, this.index() - 1)
	}; z.e.next = function() {
		zl(this, this.index() + 1)
	}; z.e.first = function() {
		zl(this, 0)
	}; z.e.last = function() {
		zl(this, this.size() - 1)
	}; z.e.cV = function(a) {
		var b = this.H,
		c = a.currentTarget,
		d = (0, window.$)(c);
		"focusin" === a.type ? (d.addClass(b.DG), this.mk = window.$.inArray(c, this.items())) : d.removeClass(b.DG)
	}; z.e.Sp = function(a) {
		this.H.KQ && (a.tabIndex = -1, a.focus());
		this.dispatchEvent({
			data: {
				item: a
			},
			type: "focus"
		})
	}; z.e.items = function() {
		var a = this.H.items;
		return a ? (0, window.$)(a, this.J).get() : this.J.children().get()
	}; z.y(z.Bl, yl); z.Mb(z.Bl.prototype.defaults = {
		BX: 200,
		offsetTop: 0
	},
	yl.prototype.defaults); z.e = z.Bl.prototype; z.e.ag = function() {
		z.Db(Cl(this),
		function(a, b) {
			z.xl(z.gn.register(b, a.action, this), a.bc)
		},
		this)
	}; z.e.D = function() {
		z.Bl.v.D.call(this);
		z.gn.unregister(z.Hb(Cl(this)))
	}; z.e.Sp = function(a) {
		z.Bl.v.Sp.call(this, a);
		var b = this.H;
		this.scrollTo((0, window.$)(a).offset().top + b.offsetTop, b.BX, "easeOutCubic")
	}; z.e.scrollTo = function(a, b, c) {
		this.kN.stop().animate({
			scrollTop: a
		},
		b, c)
	}; z.e.zX = function() {
		this.scrollTo("+\x3d60", 100)
	}; z.e.EX = function() {
		this.scrollTo("-\x3d60", 100)
	}; Zk("shortcut", {
		defaults: {
			items: "\x3ediv"
		},
		init: function(a) {
			a.ib().length && (this.Mp = new z.Bl(this.options), this.Mp.w(a.m()), this.o().g(this.Mp, "action",
			function(b) {
				b.data.index >= b.data.size && a.Af() && z.Mg(a.Af()) && a.Af().click()
			}))
		},
		dispose: function() {
			Yk.prototype.dispose.call(this);
			this.Mp && (this.Mp.dispose(), this.Mp = null)
		}
	}); z.y(z.Dl, z.bl);
}).call(this, __z_z__);