/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat ? function (e) {
      return t.flat.call(e)
    } : function (e) {
      return t.concat.apply([], e)
    },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    },
    x = function (e) {
      return null != e && e === e.window
    },
    E = C.document,
    c = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

  function b(e, t, n) {
    var r, i, o = (n = n || E).createElement("script");
    if (o.text = e, t)
      for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o)
  }

  function w(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
  }
  var f = "3.6.0",
    S = function (e, t) {
      return new S.fn.init(e, t)
    };

  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }
  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function () {
      return s.call(this)
    },
    get: function (e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function (e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function (e) {
      return S.each(this, e)
    },
    map: function (n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e)
      }))
    },
    slice: function () {
      return this.pushStack(s.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    even: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2
      }))
    },
    odd: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2
      }))
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e, t, n, r, i, o, a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
      if (null != (e = arguments[s]))
        for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e)
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    globalEval: function (e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n)
    },
    each: function (e, t) {
      var n, r = 0;
      if (p(e)) {
        for (n = e.length; r < n; r++)
          if (!1 === t.call(e[r], r, e[r])) break
      } else
        for (r in e)
          if (!1 === t.call(e[r], r, e[r])) break;
      return e
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : i.call(t, e, n)
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r
    },
    map: function (e, t, n) {
      var r, i, o = 0,
        a = [];
      if (p(e))
        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
      else
        for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a)
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase()
  });
  var d = function (n) {
    var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (e[n] === t) return n;
        return -1
      },
      R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
      F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      },
      oe = function () {
        T()
      },
      ae = be(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t))
        } : function (e, t) {
          var n = e.length,
            r = 0;
          while (e[n++] = t[r++]);
          e.length = n - 1
        }
      }
    }

    function se(t, e, n, r) {
      var i, o, a, s, u, l, c, f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t)))
          if (i = u[1]) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
          } if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",")
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n
          } catch (e) {
            N(t, !0)
          } finally {
            s === S && e.removeAttribute("id")
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r)
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
      }
    }

    function le(e) {
      return e[S] = !0, e
    }

    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t
    }

    function pe(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n)
        while (n = n.nextSibling)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t
      }
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n
      }
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
      }
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n, r = a([], e.length, o),
            i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
        })
      })
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e
    }
    for (e in d = se.support = {}, i = se.isXML = function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || n && n.nodeName || "HTML")
      }, T = se.setDocument = function (e) {
        var t, n, r = e ? e.ownerDocument || e : p;
        return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
          return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
        }), d.attributes = ce(function (e) {
          return e.className = "i", !e.getAttribute("className")
        }), d.getElementsByTagName = ce(function (e) {
          return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
        }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
          return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
        }), d.getById ? (b.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            return e.getAttribute("id") === t
          }
        }, b.find.ID = function (e, t) {
          if ("undefined" != typeof t.getElementById && E) {
            var n = t.getElementById(e);
            return n ? [n] : []
          }
        }) : (b.filter.ID = function (e) {
          var n = e.replace(te, ne);
          return function (e) {
            var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
            return t && t.value === n
          }
        }, b.find.ID = function (e, t) {
          if ("undefined" != typeof t.getElementById && E) {
            var n, r, i, o = t.getElementById(e);
            if (o) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
              i = t.getElementsByName(e), r = 0;
              while (o = i[r++])
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
            }
            return []
          }
        }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
          return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
        } : function (e, t) {
          var n, r = [],
            i = 0,
            o = t.getElementsByTagName(e);
          if ("*" === e) {
            while (n = o[i++]) 1 === n.nodeType && r.push(n);
            return r
          }
          return o
        }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
          if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
        }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
          var t;
          a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
        }), ce(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = C.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
        })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
          d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
        }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
          return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
        } : function (e, t) {
          if (t)
            while (t = t.parentNode)
              if (t === e) return !0;
          return !1
        }, j = t ? function (e, t) {
          if (e === t) return l = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
        } : function (e, t) {
          if (e === t) return l = !0, 0;
          var n, r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
          if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
          if (i === o) return pe(e, t);
          n = e;
          while (n = n.parentNode) a.unshift(n);
          n = t;
          while (n = n.parentNode) s.unshift(n);
          while (a[r] === s[r]) r++;
          return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
        }), C
      }, se.matches = function (e, t) {
        return se(e, null, null, t)
      }, se.matchesSelector = function (e, t) {
        if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
          var n = c.call(e, t);
          if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
        } catch (e) {
          N(t, !0)
        }
        return 0 < se(t, C, null, [e]).length
      }, se.contains = function (e, t) {
        return (e.ownerDocument || e) != C && T(e), y(e, t)
      }, se.attr = function (e, t) {
        (e.ownerDocument || e) != C && T(e);
        var n = b.attrHandle[t.toLowerCase()],
          r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
        return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }, se.escape = function (e) {
        return (e + "").replace(re, ie)
      }, se.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, se.uniqueSort = function (e) {
        var t, n = [],
          r = 0,
          i = 0;
        if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
          while (t = e[i++]) t === e[i] && (r = n.push(i));
          while (r--) e.splice(n[r], 1)
        }
        return u = null, e
      }, o = se.getText = function (e) {
        var t, n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
          } else if (3 === i || 4 === i) return e.nodeValue
        } else
          while (t = e[r++]) n += o(t);
        return n
      }, (b = se.selectors = {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function (e) {
            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
          },
          PSEUDO: function (e) {
            var t, n = !e[6] && e[2];
            return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e ? function () {
              return !0
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
              return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
            }
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v ? function (e) {
              return !!e.parentNode
            } : function (e, t, n) {
              var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;
              if (c) {
                if (y) {
                  while (l) {
                    a = e;
                    while (a = a[l])
                      if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                    u = l = "only" === h && !u && "nextSibling"
                  }
                  return !0
                }
                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                  d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                  while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                    if (1 === a.nodeType && ++d && a === e) {
                      i[h] = [k, s, d];
                      break
                    }
                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                  while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                return (d -= v) === g || d % g == 0 && 0 <= d / g
              }
            }
          },
          PSEUDO: function (e, o) {
            var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
            return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
              var n, r = a(e, o),
                i = r.length;
              while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
            }) : function (e) {
              return a(e, 0, t)
            }) : a
          }
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S] ? le(function (e, t, n, r) {
              var i, o = s(e, null, r, []),
                a = e.length;
              while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
            }) : function (e, t, n) {
              return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
            }
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length
            }
          }),
          contains: le(function (t) {
            return t = t.replace(te, ne),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t)
              }
          }),
          lang: le(function (n) {
            return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
              function (e) {
                var t;
                do {
                  if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1
              }
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id
          },
          root: function (e) {
            return e === a
          },
          focus: function (e) {
            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function (e) {
            return !b.pseudos.empty(e)
          },
          header: function (e) {
            return J.test(e.nodeName)
          },
          input: function (e) {
            return Q.test(e.nodeName)
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function (e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: ve(function () {
            return [0]
          }),
          last: ve(function (e, t) {
            return [t - 1]
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
            return e
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
            return e
          })
        }
      }).pseudos.nth = b.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) b.pseudos[e] = de(e);
    for (e in {
        submit: !0,
        reset: !0
      }) b.pseudos[e] = he(e);

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r
    }

    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u])
          if (1 === e.nodeType || f) return s(e, t, n);
        return !1
      } : function (e, t, n) {
        var r, i, o, a = [k, p];
        if (n) {
          while (e = e[u])
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0
        } else
          while (e = e[u])
            if (1 === e.nodeType || f)
              if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
              else {
                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                if ((i[c] = a)[2] = s(e, t, n)) return !0
              } return !1
      }
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--)
          if (!i[r](e, t, n)) return !1;
        return !0
      } : i[0]
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i, o, a, s = [],
          u = [],
          l = t.length,
          c = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
            return n
          }(h || "*", n.nodeType ? [n] : n, []),
          f = !d || !e && h ? c : Te(c, s, d, n, r),
          p = g ? y || (e ? d : l || v) ? [] : t : f;
        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;
          while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;
              while (o--)(a = p[o]) && i.push(f[o] = a);
              y(null, p = [], i, r)
            }
            o = p.length;
            while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
      })
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
          return e === i
        }, a, !0), l = be(function (e) {
          return -1 < P(i, e)
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r
        }]; s < r; s++)
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++)
              if (b.relative[e[n].type]) break;
            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
          }
          c.push(t)
        } return we(c)
    }
    return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
      var n, r, i, o, a, s, u, l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
            value: n,
            type: r[0].replace($, " ")
          }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break
      }
      return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
    }, f = se.compile = function (e, t) {
      var n, v, y, m, x, r, i = [],
        o = [],
        a = A[e + " "];
      if (!a) {
        t || (t = h(e)), n = t.length;
        while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
          var o, a, s, u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = w,
            d = e || x && b.find.TAG("*", i),
            h = k += null == p ? 1 : Math.random() || .1,
            g = d.length;
          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);
              while (s = v[a++])
                if (s(o, t || C, n)) {
                  r.push(o);
                  break
                } i && (k = h)
            }
            m && ((o = !s && o) && u--, e && c.push(o))
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u)
                while (l--) c[l] || f[l] || (f[l] = q.call(r));
              f = Te(f)
            }
            H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
          }
          return i && (k = h, w = p), c
        }, m ? le(r) : r))).selector = e
      }
      return a
    }, g = se.select = function (e, t, n, r) {
      var i, o, a, s, u, l = "function" == typeof e && e,
        c = !r && h(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        i = G.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break
          }
        }
      }
      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
    }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), ce(function (e) {
      return null == e.getAttribute("disabled")
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), se
  }(C);
  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e)
        } return r
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    },
    k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r
    }) : S.filter(n, e, r)
  }
  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, S.fn.extend({
    find: function (e) {
      var t, n, r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++)
          if (S.contains(i[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
      return 1 < r ? S.uniqueSort(n) : n
    },
    filter: function (e) {
      return this.pushStack(j(this, e || [], !1))
    },
    not: function (e) {
      return this.pushStack(j(this, e || [], !0))
    },
    is: function (e) {
      return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
    }
  });
  var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || D, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this
      }
      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
  }).prototype = S.fn, D = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
    H = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++)
          if (S.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n, r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
              o.push(n);
              break
            } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
    },
    index: function (e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), S.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function (e) {
      return h(e, "parentNode")
    },
    parentsUntil: function (e, t, n) {
      return h(e, "parentNode", n)
    },
    next: function (e) {
      return O(e, "nextSibling")
    },
    prev: function (e) {
      return O(e, "previousSibling")
    },
    nextAll: function (e) {
      return h(e, "nextSibling")
    },
    prevAll: function (e) {
      return h(e, "previousSibling")
    },
    nextUntil: function (e, t, n) {
      return h(e, "nextSibling", n)
    },
    prevUntil: function (e, t, n) {
      return h(e, "previousSibling", n)
    },
    siblings: function (e) {
      return T((e.parentNode || {}).firstChild, e)
    },
    children: function (e) {
      return T(e.firstChild)
    },
    contents: function (e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
    }
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e
  }

  function M(e) {
    throw e
  }

  function I(e, t, n, r) {
    var i;
    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0
    }), n) : S.extend({}, r);
    var i, t, o, a, s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
        }
        r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
      },
      f = {
        add: function () {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            S.each(e, function (e, t) {
              m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
            })
          }(arguments), t && !i && c()), this
        },
        remove: function () {
          return S.each(arguments, function (e, t) {
            var n;
            while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
          }), this
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length
        },
        empty: function () {
          return s && (s = []), this
        },
        disable: function () {
          return a = u = [], s = t = "", this
        },
        disabled: function () {
          return !s
        },
        lock: function () {
          return a = u = [], t || i || (s = t = ""), this
        },
        locked: function () {
          return !!a
        },
        fireWith: function (e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
        },
        fire: function () {
          return f.fireWith(this, arguments), this
        },
        fired: function () {
          return !!o
        }
      };
    return f
  }, S.extend({
    Deferred: function (e) {
      var o = [
          ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
          ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
        ],
        i = "pending",
        a = {
          state: function () {
            return i
          },
          always: function () {
            return s.done(arguments).fail(arguments), this
          },
          "catch": function (e) {
            return a.then(null, e)
          },
          pipe: function () {
            var i = arguments;
            return S.Deferred(function (r) {
              S.each(o, function (e, t) {
                var n = m(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                })
              }), i = null
            }).promise()
          },
          then: function (t, n, r) {
            var u = 0;

            function l(i, o, a, s) {
              return function () {
                var n = this,
                  r = arguments,
                  e = function () {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                    }
                  },
                  t = s ? e : function () {
                    try {
                      e()
                    } catch (e) {
                      S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                    }
                  };
                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
              }
            }
            return S.Deferred(function (e) {
              o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
            }).promise()
          },
          promise: function (e) {
            return null != e ? S.extend(e, a) : a
          }
        },
        s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
          r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
        }, s[t[0] + "With"] = n.fireWith
      }), a.promise(s), e && e.call(s, s), s
    },
    when: function (e) {
      var n = arguments.length,
        t = n,
        r = Array(t),
        i = s.call(arguments),
        o = S.Deferred(),
        a = function (t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
          }
        };
      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
      while (t--) I(i[t], a(t), o.reject);
      return o.promise()
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e
    })
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
  }
  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e)
    }), this
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
      else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
          return l.call(S(e), n)
        })), t))
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase()
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U)
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function G() {
    this.expando = S.expando + G.uid++
  }
  G.uid = 1, G.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function (e, t, n) {
      var r, i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;
      else
        for (r in t) i[X(r)] = t[r];
      return i
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function (e, t) {
      var n, r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
          while (n--) delete r[t[n]]
        }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t)
    }
  };
  var Y = new G,
    Q = new G,
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
        } catch (e) {}
        Q.set(e, t, n)
      } else n = void 0;
    return n
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e)
    },
    data: function (e, t, n) {
      return Q.access(e, t, n)
    },
    removeData: function (e, t) {
      Q.remove(e, t)
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n)
    },
    _removeData: function (e, t) {
      Y.remove(e, t)
    }
  }), S.fn.extend({
    data: function (n, e) {
      var t, r, i, o = this[0],
        a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          Y.set(o, "hasDataAttrs", !0)
        }
        return i
      }
      return "object" == typeof n ? this.each(function () {
        Q.set(this, n)
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e)
        })
      }, null, e, 1 < arguments.length, null, !0)
    },
    removeData: function (e) {
      return this.each(function () {
        Q.remove(this, e)
      })
    }
  }), S.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
    },
    dequeue: function (e, t) {
      t = t || "fx";
      var n = S.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = S._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t)
      }, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n])
        })
      })
    }
  }), S.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
      })
    },
    dequeue: function (e) {
      return this.each(function () {
        S.dequeue(this, e)
      })
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", [])
    },
    promise: function (e, t) {
      var n, r = 1,
        i = S.Deferred(),
        o = this,
        a = this.length,
        s = function () {
          --r || i.resolveWith(o, [o])
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t)
    }
  });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e)
    },
    oe = {
      composed: !0
    };
  re.getRootNode && (ie = function (e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
  });
  var ae = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
  };

  function se(e, t, n, r) {
    var i, o, a = 20,
      s = r ? function () {
        return r.cur()
      } : function () {
        return S.css(e, t, "")
      },
      u = s(),
      l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, S.style(e, t, c + l), n = n || []
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
  }
  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e
  }
  S.fn.extend({
    show: function () {
      return le(this, !0)
    },
    hide: function () {
      return le(this)
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide()
      })
    }
  });
  var ce, fe, pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
  }
  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
    } else p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++])
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
      c = 0;
      while (o = a[c++]) he.test(o.type || "") && n.push(o)
    }
    return f
  }
  var be = /^([^.]*)(?:\.(.+)|)/;

  function we() {
    return !0
  }

  function Te() {
    return !1
  }

  function Ce(e, t) {
    return e === function () {
      try {
        return E.activeElement
      } catch (e) {}
    }() == ("focus" === t)
  }

  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
      return e
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
    else if (!i) return e;
    return 1 === o && (a = i, (i = function (e) {
      return S().off(e), a.apply(this, arguments)
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n)
    })
  }

  function Se(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function (e) {
        var t, n, r = Y.get(this, i);
        if (1 & e.isTrigger && this[i]) {
          if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
          else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation())
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
  }
  S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
        }), l = (e = (e || "").match(P) || [""]).length;
        while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && S.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
      }
    },
    remove: function (e, t, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
            while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
          } else
            for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events")
      }
    },
    dispatch: function (e) {
      var t, n, r, i, o, a, s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result
      }
    },
    handlers: function (e, t) {
      var n, r, i, o, a, s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && s.push({
              elem: l,
              handlers: o
            })
          } return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent)
        } : function () {
          if (this.originalEvent) return this.originalEvent[t]
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          })
        }
      })
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
        },
        trigger: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
        },
        _default: function (e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Te,
    isPropagationStopped: Te,
    isImmediatePropagationStopped: Te,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function () {
        return Se(this, e, Ce), !1
      },
      trigger: function () {
        return Se(this, e), !0
      },
      _default: function () {
        return !0
      },
      delegateType: t
    }
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function (e) {
        var t, n = e.relatedTarget,
          r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
      }
    }
  }), S.fn.extend({
    on: function (e, t, n, r) {
      return Ee(this, e, t, n, r)
    },
    one: function (e, t, n, r) {
      return Ee(this, e, t, n, r, 1)
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
        S.event.remove(this, e, n, t)
      })
    }
  });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function je(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
  }

  function De(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function qe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in Y.remove(t, "handle events"), s)
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
    }
  }

  function He(n, r, i, o) {
    r = g(r);
    var e, t, a, s, u, l, c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
    });
    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(Ne, ""), u, l))
    }
    return n
  }

  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e
    },
    clone: function (e, t, n) {
      var r, i, o, a, s, u, l, c = e.cloneNode(!0),
        f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
        else Le(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events)
              for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0
          }
          n[Q.expando] && (n[Q.expando] = void 0)
        }
    }
  }), S.fn.extend({
    detach: function (e) {
      return Oe(this, e, !0)
    },
    remove: function (e) {
      return Oe(this, e)
    },
    text: function (e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function () {
      return He(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
      })
    },
    prepend: function () {
      return He(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = je(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function () {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function () {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      return this
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t)
      })
    },
    html: function (e) {
      return $(this, function (e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function () {
      var n = [];
      return He(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
      }, n)
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      return this.pushStack(n)
    }
  });
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = function (e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = C), t.getComputedStyle(e)
    },
    Me = function (e, t, n) {
      var r, i, o = {};
      for (i in t) o[i] = e.style[i], e.style[i] = t[i];
      for (i in r = n.call(e), t) e.style[i] = o[i];
      return r
    },
    Ie = new RegExp(ne.join("|"), "i");

  function We(e, t, n) {
    var r, i, o, a, s = e.style;
    return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
  }

  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }! function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
      }
    }

    function t(e) {
      return Math.round(parseFloat(e))
    }
    var n, r, i, o, a, s, u = E.createElement("div"),
      l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function () {
        return e(), r
      },
      pixelBoxStyles: function () {
        return e(), o
      },
      pixelPosition: function () {
        return e(), n
      },
      reliableMarginLeft: function () {
        return e(), s
      },
      scrollboxSize: function () {
        return e(), i
      },
      reliableTrDimensions: function () {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
      }
    }))
  }();
  var Be = ["Webkit", "Moz", "ms"],
    $e = E.createElement("div").style,
    _e = {};

  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return t || (e in $e ? e : _e[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = Be.length;
      while (n--)
        if ((e = Be[n] + t) in $e) return e
    }(e) || e)
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ge = {
      letterSpacing: "0",
      fontWeight: "400"
    };

  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }

  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
  }

  function Je(e, t, n) {
    var r = Re(e),
      i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = We(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto"
    }
    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
  }

  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i)
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = X(t),
          u = Xe.test(t),
          l = e.style;
        if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
      }
    },
    css: function (e, t, n, r) {
      var i, o, a, s = X(t);
      return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function (e, t, n) {
        if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () {
          return Je(e, u, n)
        })
      },
      set: function (e, t, n) {
        var r, i = Re(e),
          o = !y.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
          s = n ? Qe(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)
      }
    }
  }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left
    })) + "px"
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        return n
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Ye)
  }), S.fn.extend({
    css: function (e, t) {
      return $(this, function (e, t, n) {
        var r, i, o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
          return o
        }
        return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
      }, e, t, 1 < arguments.length)
    }
  }), ((S.Tween = Ke).prototype = {
    constructor: Ke,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
    },
    cur: function () {
      var e = Ke.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
    },
    run: function (e) {
      var t, n = Ke.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
    }
  }).init.prototype = Ke.prototype, (Ke.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      },
      set: function (e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }).scrollTop = Ke.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, S.easing = {
    linear: function (e) {
      return e
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, S.fx = Ke.prototype.init, S.fx.step = {};
  var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;

  function ot() {
    et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick())
  }

  function at() {
    return C.setTimeout(function () {
      Ze = void 0
    }), Ze = Date.now()
  }

  function st(e, t) {
    var n, r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function ut(e, t, n) {
    for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
      if (r = i[o].call(n, t, e)) return r
  }

  function lt(o, e, t) {
    var n, a, r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem
      }),
      u = function () {
        if (a) return !1;
        for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, {
          specialEasing: {},
          easing: S.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
        }
      }),
      c = l.props;
    for (! function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
            for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
          else t[r] = i
      }(c, l.opts.specialEasing); r < i; r++)
      if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l
  }
  S.Animation = S.extend(lt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n
      }]
    },
    tweener: function (e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
    },
    prefilters: [function (e, t, n) {
      var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        v = Y.get(e, "fxshow");
      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
          a.unqueued || s()
        }), a.unqueued++, p.always(function () {
          p.always(function () {
            a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
          })
        })), t)
        if (i = t[r], rt.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0
          }
          d[r] = v && v[r] || S.style(e, r)
        } if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
        for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
            h.display = l
          }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
          })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
        })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
    }],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
    }, r
  }, S.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function (t, e, n, r) {
      var i = S.isEmptyObject(t),
        o = S.speed(e, n, r),
        a = function () {
          var e = lt(this, S.extend({}, t), o);
          (i || Y.get(this, "finish")) && e.stop(!0)
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
    },
    stop: function (i, e, o) {
      var a = function (e) {
        var t = e.stop;
        delete e.stop, t(o)
      };
      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
          t = null != i && i + "queueHooks",
          n = S.timers,
          r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);
        else
          for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || S.dequeue(this, i)
      })
    },
    finish: function (a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e, t = Y.get(this),
          n = t[a + "queue"],
          r = t[a + "queueHooks"],
          i = S.timers,
          o = n ? n.length : 0;
        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];
    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
    }
  }), S.each({
    slideDown: st("show"),
    slideUp: st("hide"),
    slideToggle: st("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n)
    }
  }), S.timers = [], S.fx.tick = function () {
    var e, t = 0,
      n = S.timers;
    for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || S.fx.stop(), Ze = void 0
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start()
  }, S.fx.interval = 13, S.fx.start = function () {
    et || (et = !0, ot())
  }, S.fx.stop = function () {
    et = null
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);
      t.stop = function () {
        C.clearTimeout(n)
      }
    })
  }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
  var ct, ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length)
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e)
      })
    }
  }), S.extend({
    attr: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n, r = 0,
        i = t && t.match(P);
      if (i && 1 === e.nodeType)
        while (n = i[r++]) e.removeAttribute(n)
    }
  }), ct = {
    set: function (e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = ft[t] || S.find.attr;
    ft[t] = function (e, t, n) {
      var r, i, o = t.toLowerCase();
      return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r
    }
  });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;

  function ht(e) {
    return (e.match(P) || []).join(" ")
  }

  function gt(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function vt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e]
      })
    }
  }), S.extend({
    prop: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this
  }), S.fn.extend({
    addClass: function (t) {
      var e, n, r, i, o, a, s, u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, gt(this)))
      });
      if ((e = vt(t)).length)
        while (n = this[u++])
          if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
            a = 0;
            while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (s = ht(r)) && n.setAttribute("class", s)
          } return this
    },
    removeClass: function (t) {
      var e, n, r, i, o, a, s, u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, gt(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = vt(t)).length)
        while (n = this[u++])
          if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
            a = 0;
            while (o = e[a++])
              while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
            i !== (s = ht(r)) && n.setAttribute("class", s)
          } return this
    },
    toggleClass: function (i, t) {
      var o = typeof i,
        a = "string" === o || Array.isArray(i);
      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, gt(this), t), t)
      }) : this.each(function () {
        var e, t, n, r;
        if (a) {
          t = 0, n = S(this), r = vt(i);
          while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
        } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
      })
    },
    hasClass: function (e) {
      var t, n, r = 0;
      t = " " + e + " ";
      while (n = this[r++])
        if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
      return !1
    }
  });
  var yt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r, e, i, t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + ""
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : ht(S.text(e))
        }
      },
      select: {
        get: function (e) {
          var t, n, r, i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++)
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t)
            } return s
        },
        set: function (e, t) {
          var n, r, i = e.options,
            o = S.makeArray(t),
            a = i.length;
          while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), y.focusin = "onfocusin" in C;
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation()
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i, o, a, s, u, l, c, f, p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event, n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t)
    }
  }), S.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this)
      })
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0)
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function (e) {
      S.event.simulate(r, e.target, S.event.fix(e))
    };
    S.event.special[r] = {
      setup: function () {
        var e = this.ownerDocument || this.document || this,
          t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
      },
      teardown: function () {
        var e = this.ownerDocument || this.document || this,
          t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
      }
    }
  });
  var bt = C.location,
    wt = {
      guid: Date.now()
    },
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = (new C.DOMParser).parseFromString(e, "text/xml")
    } catch (e) {}
    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
      return e.textContent
    }).join("\n") : e)), t
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;

  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
    });
    else if (r || "object" !== w(e)) i(n, e);
    else
      for (t in e) At(n + "[" + t + "]", e[t], r, i)
  }
  S.param = function (e, t) {
    var n, r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value)
    });
    else
      for (n in e) At(n, e[n], t, i);
    return r.join("&")
  }, S.fn.extend({
    serialize: function () {
      return S.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Et, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(Et, "\r\n")
        }
      }).get()
    }
  });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = "*/".concat("*"),
    Mt = E.createElement("a");

  function It(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n, r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
    }
  }

  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
      }), r
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*")
  }

  function Ft(e, t) {
    var n, r, i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e
  }
  Mt.href = bt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: bt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Rt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
    },
    ajaxPrefilter: It(Ot),
    ajaxTransport: It(Pt),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
        y = v.context || v,
        m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
        x = S.Deferred(),
        b = S.Callbacks("once memory"),
        w = v.statusCode || {},
        a = {},
        s = {},
        u = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (h) {
              if (!n) {
                n = {};
                while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
              }
              t = n[e.toLowerCase() + " "]
            }
            return null == t ? null : t.join(", ")
          },
          getAllResponseHeaders: function () {
            return h ? p : null
          },
          setRequestHeader: function (e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
          },
          overrideMimeType: function (e) {
            return null == h && (v.mimeType = e), this
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (h) T.always(e[T.status]);
              else
                for (t in e) w[t] = [w[t], e[t]];
            return this
          },
          abort: function (e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this
          }
        };
      if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");
        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
        } catch (e) {
          v.crossDomain = !0
        }
      }
      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout")
        }, v.timeout));
        try {
          h = !1, c.send(a, l)
        } catch (e) {
          if (h) throw e;
          l(-1, e)
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i, o, a, s, u, l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r, i, o, a, s = e.contents,
            u = e.dataTypes;
          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r)
            for (i in s)
              if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break
              } if (u[0] in n) o = u[0];
          else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break
              }
              a || (a = i)
            }
            o = o || a
          }
          if (o) return o !== u[0] && u.unshift(o), n[o]
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
          if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
              if ("*" === o) o = u;
              else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
              for (i in l)
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break
                } if (!0 !== a)
              if (a && e["throws"]) t = a(t);
              else try {
                t = a(t)
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                }
              }
          }
          return {
            state: "success",
            data: t
          }
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
      }
      return T
    },
    getJSON: function (e, t, n) {
      return S.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return S.get(e, void 0, t, "script")
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e))
    }
  }), S.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function () {}
      },
      dataFilter: function (e) {
        S.globalEval(e, t, n)
      }
    })
  }, S.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e
      }).append(this)), this
    },
    wrapInner: function (n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e))
      }) : this.each(function () {
        var e = S(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n)
      })
    },
    wrap: function (t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t)
      })
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes)
      }), this
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e)
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest
    } catch (e) {}
  };
  var Bt = {
      0: 200,
      1223: 204
    },
    $t = S.ajaxSettings.xhr();
  y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) {
    var o, a;
    if (y.cors || $t && !i.crossDomain) return {
      send: function (e, t) {
        var n, r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
          for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
        o = function (e) {
          return function () {
            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()))
          }
        }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            o && a()
          })
        }, o = o("abort");
        try {
          r.send(i.hasContent && i.data || null)
        } catch (e) {
          if (o) throw e
        }
      },
      abort: function () {
        o && o()
      }
    }
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return S.globalEval(e), e
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), S.ajaxTransport("script", function (n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function (e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", i = function (e) {
          r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
        }), E.head.appendChild(r[0])
      },
      abort: function () {
        i && i()
      }
    }
  });
  var _t, zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return this[e] = !0, e
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0]
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0
    }), "script"
  }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o
  }, S.fn.load = function (e, t, n) {
    var r, i, o, a = this,
      s = e.indexOf(" ");
    return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem
    }).length
  }, S.offset = {
    setOffset: function (e, t, n) {
      var r, i, o, a, s, u, l = S.css(e, "position"),
        c = S(e),
        f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
    }
  }, S.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e)
      });
      var e, n, r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0
    },
    position: function () {
      if (this[0]) {
        var e, t, n, r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
        else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === S.css(e, "position")) e = e.offsetParent;
        return e || re
      })
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;
    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
      }, t, e, arguments.length)
    }
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
      if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t
    })
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
          i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
        }, s, n ? e : void 0, n)
      }
    })
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), S.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
      return this.off(e, null, t)
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    },
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
  });
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
      return e.apply(t || this, r.concat(s.call(arguments)))
    }).guid = e.guid = e.guid || S.guid++, i
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0)
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Xt, "")
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S
  });
  var Vt = C.jQuery,
    Gt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
  var b, c, d, e, f, g, h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c)
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    },
    z = function (c) {
      return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
    },
    A = function () {
      a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length;)
        if (b.pop() + "Transition" in a) return !0;
      return !1
    };
  t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g, h = c.items;
        for (e = 0; e < h.length; e++)
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;
            break
          }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
      if (b.isOpen) return void b.updateItemHTML();
      b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close()
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close()
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
      }
      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type)
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      }) : b.wrap.css({
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
        height: d.height(),
        position: "absolute"
      }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close()
      }), v.on("resize" + p, function () {
        b.updateSize()
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o)
      }
      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
    },
    close: function () {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close()
      }, b.st.removalDelay)) : b._close())
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {
          marginRight: ""
        };
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
      }
      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), b.wH = d
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
    },
    appendContent: function (a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
    },
    parseEl: function (c) {
      var d, e = b.items[c];
      if (e.tagName ? e = {
          el: a(e)
        } : (d = e.type, e = {
          data: e,
          src: e.src
        }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break
          } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
      }
      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
    },
    addGroup: function (a, c) {
      var d = function (d) {
        d.mfpEl = this, b._openClick(d, a, c)
      };
      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
    },
    _openClick: function (c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = {
          status: a,
          text: d
        };
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation()
        }), b.container.addClass("mfp-s-" + a), c = a
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0
        } else if (e && a.contains(document, c)) return !0;
        return !1
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a)
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
    },
    _hasScrollBar: function (a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
        if (void 0 === d || d === !1) return !0;
        if (e = c.split("_"), e.length > 1) {
          var f = b.find(p + "-" + e[0]);
          if (f.length > 0) {
            var g = e[1];
            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
          }
        } else b.find(p + "-" + c).html(d)
      })
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
      }
      return b.scrollbarSize
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function (b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
    },
    close: function () {
      return a.magnificPopup.instance && a.magnificPopup.instance.close()
    },
    registerModule: function (b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, a.fn.magnificPopup = function (c) {
    A();
    var d = a(this);
    if ("string" == typeof c)
      if ("open" === c) {
        var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
          g = parseInt(arguments[1], 10) || 0;
        f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
          mfpEl: e
        }, d, f)
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d
  };
  var C, D, E, F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), E = null)
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function () {
        b.types.push(F), w(h + "." + F, function () {
          G()
        })
      },
      getInline: function (c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");
          return c.inlineElement = f, f
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
      }
    }
  });
  var H, I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H)
    },
    K = function () {
      J(), b.req && b.req.abort()
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function () {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src,
          success: function (d, e, f) {
            var g = {
              data: d,
              xhr: f
            };
            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q)
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
          },
          error: function () {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), ""
      }
    }
  });
  var L, M = function (c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;
    var d = b.st.image.titleSrc;
    if (d) {
      if (a.isFunction(d)) return d.call(b, c);
      if (c.el) return c.el.attr(d) || ""
    }
    return ""
  };
  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
        }
      },
      _onImageHasSize: function (a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L), L = setInterval(function () {
              return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
            }, f)
          };
        e(1)
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
          },
          g = function () {
            c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
        }
        return b._parseMarkup(d, {
          title: M(c),
          img_replaceWith: c.img
        }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
      }
    }
  });
  var N, O = function () {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
  };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img")
      }
    },
    proto: {
      initZoom: function () {
        var a, c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e, f, g = c.duration,
            j = function (a) {
              var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden"
                },
                f = "transition";
              return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
            },
            k = function () {
              b.content.css("visibility", "visible")
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded")
                  }, 16)
                }, g)
              }, 16)
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;
                f = j(a)
              }
              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset())
              }, 16)
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null)
          })
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
      }
    }
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function () {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0))
        }), w(h + "." + P, function () {
          R()
        })
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
      }
    }
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
          })
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
              e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
              f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
            e.click(function () {
              b.prev()
            }), f.click(function () {
              b.next()
            }), b.container.append(e.add(f))
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null
          }, 16)
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
        })) : !1
      },
      next: function () {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
      },
      prev: function () {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
      },
      goTo: function (a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML()
      },
      preloadNearbyImages: function () {
        var a, c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
      },
      _preloadItem: function (c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
          }).attr("src", d.src)), d.preloaded = !0
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a
        })
      },
      ratio: 1
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
            b.img.css({
              "max-width": b.img[0].naturalWidth / c,
              width: "100%"
            })
          }), w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c)
          }))
        }
      }
    }
  }), A()
});

/*!
 * Bootstrap v5.1.0 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory());
}(this, (function () {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  const toType = obj => {
    if (obj === null || obj === undefined) {
      return `${obj}`;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = `#${hrefAttr.split('#')[1]}`;
      }

      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
  };

  const getSelectorFromElement = element => {
    const selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  const isElement$1 = obj => {
    if (!obj || typeof obj !== 'object') {
      return false;
    }

    if (typeof obj.jquery !== 'undefined') {
      obj = obj[0];
    }

    return typeof obj.nodeType !== 'undefined';
  };

  const getElement = obj => {
    if (isElement$1(obj)) {
      // it's a jQuery object or a node element
      return obj.jquery ? obj[0] : obj;
    }

    if (typeof obj === 'string' && obj.length > 0) {
      return document.querySelector(obj);
    }

    return null;
  };

  const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = value && isElement$1(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    });
  };

  const isVisible = element => {
    if (!isElement$1(element) || element.getClientRects().length === 0) {
      return false;
    }

    return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
  };

  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }

    if (element.classList.contains('disabled')) {
      return true;
    }

    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };

  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  const noop = () => {};
  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */


  const reflow = element => {
    // eslint-disable-next-line no-unused-expressions
    element.offsetHeight;
  };

  const getjQuery = () => {
    const {
      jQuery
    } = window;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  const DOMContentLoadedCallbacks = [];

  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
          DOMContentLoadedCallbacks.forEach(callback => callback());
        });
      }

      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };

  const isRTL = () => document.documentElement.dir === 'rtl';

  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  const execute = callback => {
    if (typeof callback === 'function') {
      callback();
    }
  };

  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }

    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;

    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }

      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };

    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */


  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

    if (index === -1) {
      return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
    }

    const listLength = list.length;
    index += shouldGetNext ? 1 : -1;

    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }

    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage

  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const customEventsRegex = /^(mouseenter|mouseleave)/i;
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */

  function getUidEvent(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }

  function getEvent(element) {
    const uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);

      for (let {
          target
        } = event; target && target !== this; target = target.parentNode) {
        for (let i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;

            if (handler.oneOff) {
              // eslint-disable-next-line unicorn/consistent-destructuring
              EventHandler.off(element, event.type, selector, fn);
            }

            return fn.apply(target, [event]);
          }
        }
      } // To please ESLint


      return null;
    };
  }

  function findHandler(events, handler, delegationSelector = null) {
    const uidEventList = Object.keys(events);

    for (let i = 0, len = uidEventList.length; i < len; i++) {
      const event = events[uidEventList[i]];

      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }

    return null;
  }

  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    const delegation = typeof handler === 'string';
    const originalHandler = delegation ? delegationFn : handler;
    let typeEvent = getTypeEvent(originalTypeEvent);
    const isNative = nativeEvents.has(typeEvent);

    if (!isNative) {
      typeEvent = originalTypeEvent;
    }

    return [delegation, originalHandler, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does


    if (customEventsRegex.test(originalTypeEvent)) {
      const wrapFn = fn => {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };

      if (delegationFn) {
        delegationFn = wrapFn(delegationFn);
      } else {
        handler = wrapFn(handler);
      }
    }

    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
    const events = getEvent(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }

    const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(handlerKey => {
      if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }

  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }

  const EventHandler = {
    on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },

    one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },

    off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getEvent(element);
      const isNamespace = originalTypeEvent.startsWith('.');

      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }

        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }

      if (isNamespace) {
        Object.keys(events).forEach(elementEvent => {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }

      const storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(keyHandlers => {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          const event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },

    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      const isNative = nativeEvents.has(typeEvent);
      let jQueryEvent;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      let evt = null;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles,
          cancelable: true
        });
      } // merge custom information in our event


      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(key => {
          Object.defineProperty(evt, key, {
            get() {
              return args[key];
            }

          });
        });
      }

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }

      return evt;
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  const elementMap = new Map();
  var Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }

      instanceMap.set(key, instance);
    },

    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }

      return null;
    },

    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }

      const instanceMap = elementMap.get(element);
      instanceMap.delete(key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const VERSION = '5.1.0';

  class BaseComponent {
    constructor(element) {
      element = getElement(element);

      if (!element) {
        return;
      }

      this._element = element;
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      Object.getOwnPropertyNames(this).forEach(propertyName => {
        this[propertyName] = null;
      });
    }

    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    /** Static */


    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }

    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }

    static get VERSION() {
      return VERSION;
    }

    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }

    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }

    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }

      if (isDisabled(this)) {
        return;
      }

      const target = getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

      instance[method]();
    });
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$d = 'alert';
  const DATA_KEY$c = 'bs.alert';
  const EVENT_KEY$c = `.${DATA_KEY$c}`;
  const EVENT_CLOSE = `close${EVENT_KEY$c}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$c}`;
  const CLASS_NAME_FADE$5 = 'fade';
  const CLASS_NAME_SHOW$8 = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$d;
    } // Public


    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

      if (closeEvent.defaultPrevented) {
        return;
      }

      this._element.classList.remove(CLASS_NAME_SHOW$8);

      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    } // Private


    _destroyElement() {
      this._element.remove();

      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Alert.getOrCreateInstance(this);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  enableDismissTrigger(Alert, 'close');
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Alert to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Alert);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$c = 'button';
  const DATA_KEY$b = 'bs.button';
  const EVENT_KEY$b = `.${DATA_KEY$b}`;
  const DATA_API_KEY$7 = '.data-api';
  const CLASS_NAME_ACTIVE$3 = 'active';
  const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$b}${DATA_API_KEY$7}`;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$c;
    } // Public


    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Button.getOrCreateInstance(this);

        if (config === 'toggle') {
          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Button to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Button);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  function normalizeData(val) {
    if (val === 'true') {
      return true;
    }

    if (val === 'false') {
      return false;
    }

    if (val === Number(val).toString()) {
      return Number(val);
    }

    if (val === '' || val === 'null') {
      return null;
    }

    return val;
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }

  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },

    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },

    getDataAttributes(element) {
      if (!element) {
        return {};
      }

      const attributes = {};
      Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      });
      return attributes;
    },

    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    },

    offset(element) {
      const rect = element.getBoundingClientRect();
      return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset
      };
    },

    position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const NODE_TEXT = 3;
  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },

    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },

    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },

    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (ancestor.matches(selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents;
    },

    prev(element, selector) {
      let previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },

    next(element, selector) {
      let next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    },

    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(', ');
      return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$b = 'carousel';
  const DATA_KEY$a = 'bs.carousel';
  const EVENT_KEY$a = `.${DATA_KEY$a}`;
  const DATA_API_KEY$6 = '.data-api';
  const ARROW_LEFT_KEY = 'ArrowLeft';
  const ARROW_RIGHT_KEY = 'ArrowRight';
  const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  const SWIPE_THRESHOLD = 40;
  const Default$a = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  const DefaultType$a = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  const ORDER_NEXT = 'next';
  const ORDER_PREV = 'prev';
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';
  const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
  };
  const EVENT_SLIDE = `slide${EVENT_KEY$a}`;
  const EVENT_SLID = `slid${EVENT_KEY$a}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY$a}`;
  const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$a}`;
  const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$a}`;
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$a}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$a}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY$a}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$a}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY$a}`;
  const EVENT_DRAG_START = `dragstart${EVENT_KEY$a}`;
  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$a}${DATA_API_KEY$6}`;
  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
  const CLASS_NAME_CAROUSEL = 'carousel';
  const CLASS_NAME_ACTIVE$2 = 'active';
  const CLASS_NAME_SLIDE = 'slide';
  const CLASS_NAME_END = 'carousel-item-end';
  const CLASS_NAME_START = 'carousel-item-start';
  const CLASS_NAME_NEXT = 'carousel-item-next';
  const CLASS_NAME_PREV = 'carousel-item-prev';
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SELECTOR_ACTIVE$1 = '.active';
  const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  const SELECTOR_ITEM = '.carousel-item';
  const SELECTOR_ITEM_IMG = '.carousel-item img';
  const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  const SELECTOR_INDICATORS = '.carousel-indicators';
  const SELECTOR_INDICATOR = '[data-bs-target]';
  const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  const POINTER_TYPE_TOUCH = 'touch';
  const POINTER_TYPE_PEN = 'pen';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Carousel extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent);

      this._addEventListeners();
    } // Getters


    static get Default() {
      return Default$a;
    }

    static get NAME() {
      return NAME$b;
    } // Public


    next() {
      this._slide(ORDER_NEXT);
    }

    nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }

    prev() {
      this._slide(ORDER_PREV);
    }

    pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
        triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    }

    cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config && this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    }

    to(index) {
      this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      const activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

      this._slide(order, this._items[index]);
    } // Private


    _getConfig(config) {
      config = {
        ...Default$a,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$b, config, DefaultType$a);
      return config;
    }

    _handleSwipe() {
      const absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      const direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0;

      if (!direction) {
        return;
      }

      this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }

    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
      }

      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER, event => this.pause(event));
        EventHandler.on(this._element, EVENT_MOUSELEAVE, event => this.cycle(event));
      }

      if (this._config.touch && this._touchSupported) {
        this._addTouchEventListeners();
      }
    }

    _addTouchEventListeners() {
      const start = event => {
        if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
          this.touchStartX = event.clientX;
        } else if (!this._pointerEvent) {
          this.touchStartX = event.touches[0].clientX;
        }
      };

      const move = event => {
        // ensure swiping with one touch and not pinching
        this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
      };

      const end = event => {
        if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
          this.touchDeltaX = event.clientX - this.touchStartX;
        }

        this._handleSwipe();

        if (this._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          this.pause();

          if (this.touchTimeout) {
            clearTimeout(this.touchTimeout);
          }

          this.touchTimeout = setTimeout(event => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
        }
      };

      SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
        EventHandler.on(itemImg, EVENT_DRAG_START, e => e.preventDefault());
      });

      if (this._pointerEvent) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, event => start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, event => end(event));

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, event => start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, event => move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, event => end(event));
      }
    }

    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      const direction = KEY_TO_DIRECTION[event.key];

      if (direction) {
        event.preventDefault();

        this._slide(direction);
      }
    }

    _getItemIndex(element) {
      this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
      return this._items.indexOf(element);
    }

    _getItemByOrder(order, activeElement) {
      const isNext = order === ORDER_NEXT;
      return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
    }

    _triggerSlideEvent(relatedTarget, eventDirectionName) {
      const targetIndex = this._getItemIndex(relatedTarget);

      const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

      return EventHandler.trigger(this._element, EVENT_SLIDE, {
        relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
    }

    _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute('aria-current');
        const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

        for (let i = 0; i < indicators.length; i++) {
          if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
            indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
            indicators[i].setAttribute('aria-current', 'true');
            break;
          }
        }
      }
    }

    _updateInterval() {
      const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      if (!element) {
        return;
      }

      const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }

    _slide(directionOrOrder, element) {
      const order = this._directionToOrder(directionOrOrder);

      const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      const activeElementIndex = this._getItemIndex(activeElement);

      const nextElement = element || this._getItemByOrder(order, activeElement);

      const nextElementIndex = this._getItemIndex(nextElement);

      const isCycling = Boolean(this._interval);
      const isNext = order === ORDER_NEXT;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

      const eventDirectionName = this._orderToDirection(order);

      if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
        this._isSliding = false;
        return;
      }

      if (this._isSliding) {
        return;
      }

      const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.defaultPrevented) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;

      const triggerSlidEvent = () => {
        EventHandler.trigger(this._element, EVENT_SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });
      };

      if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);

        const completeCallBack = () => {
          nextElement.classList.remove(directionalClassName, orderClassName);
          nextElement.classList.add(CLASS_NAME_ACTIVE$2);
          activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
          this._isSliding = false;
          setTimeout(triggerSlidEvent, 0);
        };

        this._queueCallback(completeCallBack, activeElement, true);
      } else {
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        this._isSliding = false;
        triggerSlidEvent();
      }

      if (isCycling) {
        this.cycle();
      }
    }

    _directionToOrder(direction) {
      if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
        return direction;
      }

      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }

      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }

    _orderToDirection(order) {
      if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
        return order;
      }

      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }

      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    } // Static


    static carouselInterface(element, config) {
      const data = Carousel.getOrCreateInstance(element, config);
      let {
        _config
      } = data;

      if (typeof config === 'object') {
        _config = {
          ..._config,
          ...config
        };
      }

      const action = typeof config === 'string' ? config : _config.slide;

      if (typeof config === 'number') {
        data.to(config);
      } else if (typeof action === 'string') {
        if (typeof data[action] === 'undefined') {
          throw new TypeError(`No method named "${action}"`);
        }

        data[action]();
      } else if (_config.interval && _config.ride) {
        data.pause();
        data.cycle();
      }
    }

    static jQueryInterface(config) {
      return this.each(function () {
        Carousel.carouselInterface(this, config);
      });
    }

    static dataApiClickHandler(event) {
      const target = getElementFromSelector(this);

      if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
        return;
      }

      const config = {
        ...Manipulator.getDataAttributes(target),
        ...Manipulator.getDataAttributes(this)
      };
      const slideIndex = this.getAttribute('data-bs-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel.carouselInterface(target, config);

      if (slideIndex) {
        Carousel.getInstance(target).to(slideIndex);
      }

      event.preventDefault();
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (let i = 0, len = carousels.length; i < len; i++) {
      Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Carousel to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Carousel);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$a = 'collapse';
  const DATA_KEY$9 = 'bs.collapse';
  const EVENT_KEY$9 = `.${DATA_KEY$9}`;
  const DATA_API_KEY$5 = '.data-api';
  const Default$9 = {
    toggle: true,
    parent: null
  };
  const DefaultType$9 = {
    toggle: 'boolean',
    parent: '(null|element)'
  };
  const EVENT_SHOW$5 = `show${EVENT_KEY$9}`;
  const EVENT_SHOWN$5 = `shown${EVENT_KEY$9}`;
  const EVENT_HIDE$5 = `hide${EVENT_KEY$9}`;
  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$9}`;
  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$9}${DATA_API_KEY$5}`;
  const CLASS_NAME_SHOW$7 = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.show, .collapsing';
  const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Collapse extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._isTransitioning = false;
      this._config = this._getConfig(config);
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

      for (let i = 0, len = toggleList.length; i < len; i++) {
        const elem = toggleList[i];
        const selector = getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter(foundElem => foundElem === this._element);

        if (selector !== null && filterElement.length) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._initializeChildren();

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    static get Default() {
      return Default$9;
    }

    static get NAME() {
      return NAME$a;
    } // Public


    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }

    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }

      let actives = [];
      let activesData;

      if (this._config.parent) {
        const children = SelectorEngine.find(`.${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`, this._config.parent);
        actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(elem => !children.includes(elem)); // remove children if greater depth
      }

      const container = SelectorEngine.findOne(this._selector);

      if (actives.length) {
        const tempActiveData = actives.find(elem => container !== elem);
        activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

      if (startEvent.defaultPrevented) {
        return;
      }

      actives.forEach(elemActive => {
        if (container !== elemActive) {
          Collapse.getOrCreateInstance(elemActive, {
            toggle: false
          }).hide();
        }

        if (!activesData) {
          Data.set(elemActive, DATA_KEY$9, null);
        }
      });

      const dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      this._addAriaAndCollapsedClass(this._triggerArray, true);

      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

        this._element.style[dimension] = '';
        EventHandler.trigger(this._element, EVENT_SHOWN$5);
      };

      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;

      this._queueCallback(complete, this._element, true);

      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }

    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

      if (startEvent.defaultPrevented) {
        return;
      }

      const dimension = this._getDimension();

      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

      const triggerArrayLength = this._triggerArray.length;

      for (let i = 0; i < triggerArrayLength; i++) {
        const trigger = this._triggerArray[i];
        const elem = getElementFromSelector(trigger);

        if (elem && !this._isShown(elem)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }

      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE);

        EventHandler.trigger(this._element, EVENT_HIDDEN$5);
      };

      this._element.style[dimension] = '';

      this._queueCallback(complete, this._element, true);
    }

    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
    } // Private


    _getConfig(config) {
      config = {
        ...Default$9,
        ...Manipulator.getDataAttributes(this._element),
        ...config
      };
      config.toggle = Boolean(config.toggle); // Coerce string values

      config.parent = getElement(config.parent);
      typeCheckConfig(NAME$a, config, DefaultType$9);
      return config;
    }

    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }

    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }

      const children = SelectorEngine.find(`.${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`, this._config.parent);
      SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(elem => !children.includes(elem)).forEach(element => {
        const selected = getElementFromSelector(element);

        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      });
    }

    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }

      triggerArray.forEach(elem => {
        if (isOpen) {
          elem.classList.remove(CLASS_NAME_COLLAPSED);
        } else {
          elem.classList.add(CLASS_NAME_COLLAPSED);
        }

        elem.setAttribute('aria-expanded', isOpen);
      });
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const _config = {};

        if (typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        const data = Collapse.getOrCreateInstance(this, _config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }

    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);
    selectorElements.forEach(element => {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Collapse to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Collapse);

  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/ [].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getWindow(node) {
    if (node == null) {
      return window;
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }

  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }

    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$2,
    requires: ['computeStyles']
  };

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }

  var round$1 = Math.round;

  function getBoundingClientRect(element, includeScale) {
    if (includeScale === void 0) {
      includeScale = false;
    }

    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;

    if (isHTMLElement(element) && includeScale) {
      // Fallback to 1 in case both values are `0`
      scaleX = rect.width / element.offsetWidth || 1;
      scaleY = rect.height / element.offsetHeight || 1;
    }

    return {
      width: round$1(rect.width / scaleX),
      height: round$1(rect.height / scaleY),
      top: round$1(rect.top / scaleY),
      right: round$1(rect.right / scaleX),
      bottom: round$1(rect.bottom / scaleY),
      left: round$1(rect.left / scaleX),
      x: round$1(rect.left / scaleX),
      y: round$1(rect.top / scaleY)
    };
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


    return false;
  }

  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
      element.document) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return ( // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || ( // DOM Element detected
        isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
      getComputedStyle$1(element).position === 'fixed') {
      return null;
    }

    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var isIE = navigator.userAgent.indexOf('Trident') !== -1;

    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle$1(element);

      if (elementCss.position === 'fixed') {
        return null;
      }
    }

    var currentNode = getParentNode(element);

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect$1(_ref2) {
    var state = _ref2.state,
      options = _ref2.options;
    var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {

      return;
    }

    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
      y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(round(x * dpr) / dpr) || 0,
      y: round(round(y * dpr) / dpr) || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

    var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);

        if (getComputedStyle$1(offsetParent).position !== 'static') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


      offsetParent = offsetParent;

      if (placement === top) {
        sideY = bottom; // $FlowFixMe[prop-missing]

        y -= offsetParent[heightProp] - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left) {
        sideX = right; // $FlowFixMe[prop-missing]

        x -= offsetParent[widthProp] - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref4) {
    var state = _ref4.state,
      options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

    var commonStyles = {
      placement: getBasePlacement(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };

  var passive = {
    passive: true
  };

  function effect(_ref) {
    var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
    var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
  };

  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };

  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: 'end',
    end: 'start'
  };

  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
      // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
      // errors due to floating point numbers, so we need to check precision.
      // Safari returns a number <= 0, usually < -1 when pinch-zoomed
      // Feature detection fails in mobile emulation mode in Chrome.
      // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
      // 0.001
      // Fallback here: "Not Safari" userAgent

      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen;

    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle$1(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen;

    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var referenceElement = state.elements.reference;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(referenceElement);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
          return check;
        })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
      name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
        placement: placement
      })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
    var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
      name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
    var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis || checkAltAxis) {
      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
      var max$1 = popperOffsets[mainAxis] - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
      var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

      if (checkMainAxis) {
        var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
      }

      if (checkAltAxis) {
        var _mainSide = mainAxis === 'x' ? top : left;

        var _altSide = mainAxis === 'x' ? bottom : right;

        var _offset = popperOffsets[altAxis];

        var _min = _offset + overflow[_mainSide];

        var _max = _offset - overflow[_altSide];

        var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
      }
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = rect.width / element.offsetWidth || 1;
    var scaleY = rect.height / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  } // Returns the composite rect of an element relative to its offsetParent.
  // Composite means it takes into account transforms as well as layout.


  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
        isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(options) {
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          }); // Validate the provided modifiers so that the consumer will get warned

          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {

            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });

          for (var index = 0; index < state.orderedModifiers.length; index++) {

            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {

        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }
  var createPopper$2 = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
  var createPopper$1 = /*#__PURE__*/ popperGenerator({
    defaultModifiers: defaultModifiers$1
  }); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/ popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  var Popper = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    popperGenerator: popperGenerator,
    detectOverflow: detectOverflow,
    createPopperBase: createPopper$2,
    createPopper: createPopper,
    createPopperLite: createPopper$1,
    top: top,
    bottom: bottom,
    right: right,
    left: left,
    auto: auto,
    basePlacements: basePlacements,
    start: start,
    end: end,
    clippingParents: clippingParents,
    viewport: viewport,
    popper: popper,
    reference: reference,
    variationPlacements: variationPlacements,
    placements: placements,
    beforeRead: beforeRead,
    read: read,
    afterRead: afterRead,
    beforeMain: beforeMain,
    main: main,
    afterMain: afterMain,
    beforeWrite: beforeWrite,
    write: write,
    afterWrite: afterWrite,
    modifierPhases: modifierPhases,
    applyStyles: applyStyles$1,
    arrow: arrow$1,
    computeStyles: computeStyles$1,
    eventListeners: eventListeners,
    flip: flip$1,
    hide: hide$1,
    offset: offset$1,
    popperOffsets: popperOffsets$1,
    preventOverflow: preventOverflow$1
  });

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$9 = 'dropdown';
  const DATA_KEY$8 = 'bs.dropdown';
  const EVENT_KEY$8 = `.${DATA_KEY$8}`;
  const DATA_API_KEY$4 = '.data-api';
  const ESCAPE_KEY$2 = 'Escape';
  const SPACE_KEY = 'Space';
  const TAB_KEY$1 = 'Tab';
  const ARROW_UP_KEY = 'ArrowUp';
  const ARROW_DOWN_KEY = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY$2}`);
  const EVENT_HIDE$4 = `hide${EVENT_KEY$8}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$8}`;
  const EVENT_SHOW$4 = `show${EVENT_KEY$8}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$8}`;
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$8}${DATA_API_KEY$4}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$8}${DATA_API_KEY$4}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$8}${DATA_API_KEY$4}`;
  const CLASS_NAME_SHOW$6 = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_NAVBAR = 'navbar';
  const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
  const SELECTOR_MENU = '.dropdown-menu';
  const SELECTOR_NAVBAR_NAV = '.navbar-nav';
  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  const Default$8 = {
    offset: [0, 2],
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null,
    autoClose: true
  };
  const DefaultType$8 = {
    offset: '(array|string|function)',
    boundary: '(string|element)',
    reference: '(string|element|object)',
    display: 'string',
    popperConfig: '(null|object|function)',
    autoClose: '(boolean|string)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();
    } // Getters


    static get Default() {
      return Default$8;
    }

    static get DefaultType() {
      return DefaultType$8;
    }

    static get NAME() {
      return NAME$9;
    } // Public


    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }

    show() {
      if (isDisabled(this._element) || this._isShown(this._menu)) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      }

      const parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

      if (this._inNavbar) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'none');
      } else {
        this._createPopper(parent);
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
        [].concat(...document.body.children).forEach(elem => EventHandler.on(elem, 'mouseover', noop));
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      this._menu.classList.add(CLASS_NAME_SHOW$6);

      this._element.classList.add(CLASS_NAME_SHOW$6);

      EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
    }

    hide() {
      if (isDisabled(this._element) || !this._isShown(this._menu)) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };

      this._completeHide(relatedTarget);
    }

    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }

      super.dispose();
    }

    update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper) {
        this._popper.update();
      }
    } // Private


    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

      if (hideEvent.defaultPrevented) {
        return;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(elem => EventHandler.off(elem, 'mouseover', noop));
      }

      if (this._popper) {
        this._popper.destroy();
      }

      this._menu.classList.remove(CLASS_NAME_SHOW$6);

      this._element.classList.remove(CLASS_NAME_SHOW$6);

      this._element.setAttribute('aria-expanded', 'false');

      Manipulator.removeDataAttribute(this._menu, 'popper');
      EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
    }

    _getConfig(config) {
      config = {
        ...this.constructor.Default,
        ...Manipulator.getDataAttributes(this._element),
        ...config
      };
      typeCheckConfig(NAME$9, config, this.constructor.DefaultType);

      if (typeof config.reference === 'object' && !isElement$1(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$9.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }

      return config;
    }

    _createPopper(parent) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }

      let referenceElement = this._element;

      if (this._config.reference === 'parent') {
        referenceElement = parent;
      } else if (isElement$1(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === 'object') {
        referenceElement = this._config.reference;
      }

      const popperConfig = this._getPopperConfig();

      const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
      this._popper = createPopper(referenceElement, this._menu, popperConfig);

      if (isDisplayStatic) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static');
      }
    }

    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$6);
    }

    _getMenuElement() {
      return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }

    _getPlacement() {
      const parentDropdown = this._element.parentNode;

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      } // We need to trim the value because custom properties can also include spaces


      const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }

    _detectNavbar() {
      return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
        return offset.split(',').map(val => Number.parseInt(val, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }

      return {
        ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);

      if (!items.length) {
        return;
      } // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY


      getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Dropdown.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

    static clearMenus(event) {
      if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1)) {
        return;
      }

      const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

      for (let i = 0, len = toggles.length; i < len; i++) {
        const context = Dropdown.getInstance(toggles[i]);

        if (!context || context._config.autoClose === false) {
          continue;
        }

        if (!context._isShown()) {
          continue;
        }

        const relatedTarget = {
          relatedTarget: context._element
        };

        if (event) {
          const composedPath = event.composedPath();
          const isMenuTarget = composedPath.includes(context._menu);

          if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
            continue;
          } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


          if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
            continue;
          }

          if (event.type === 'click') {
            relatedTarget.clickEvent = event;
          }
        }

        context._completeHide(relatedTarget);
      }
    }

    static getParentFromElement(element) {
      return getElementFromSelector(element) || element.parentNode;
    }

    static dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
        return;
      }

      const isActive = this.classList.contains(CLASS_NAME_SHOW$6);

      if (!isActive && event.key === ESCAPE_KEY$2) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (isDisabled(this)) {
        return;
      }

      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
      const instance = Dropdown.getOrCreateInstance(getToggleButton);

      if (event.key === ESCAPE_KEY$2) {
        instance.hide();
        return;
      }

      if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
        if (!isActive) {
          instance.show();
        }

        instance._selectMenuItem(event);

        return;
      }

      if (!isActive || event.key === SPACE_KEY) {
        Dropdown.clearMenus();
      }
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Dropdown to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Dropdown);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';

  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
    }

    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }

    hide() {
      const width = this.getWidth();

      this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


      this._setElementAttributes(this._element, 'paddingRight', calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


      this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);

      this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);
    }

    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');

      this._element.style.overflow = 'hidden';
    }

    _setElementAttributes(selector, styleProp, callback) {
      const scrollbarWidth = this.getWidth();

      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }

        this._saveInitialAttribute(element, styleProp);

        const calculatedValue = window.getComputedStyle(element)[styleProp];
        element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

    reset() {
      this._resetElementAttributes(this._element, 'overflow');

      this._resetElementAttributes(this._element, 'paddingRight');

      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
    }

    _saveInitialAttribute(element, styleProp) {
      const actualValue = element.style[styleProp];

      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProp, actualValue);
      }
    }

    _resetElementAttributes(selector, styleProp) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProp);

        if (typeof value === 'undefined') {
          element.style.removeProperty(styleProp);
        } else {
          Manipulator.removeDataAttribute(element, styleProp);
          element.style[styleProp] = value;
        }
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

    _applyManipulationCallback(selector, callBack) {
      if (isElement$1(selector)) {
        callBack(selector);
      } else {
        SelectorEngine.find(selector, this._element).forEach(callBack);
      }
    }

    isOverflowing() {
      return this.getWidth() > 0;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  const Default$7 = {
    className: 'modal-backdrop',
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    isAnimated: false,
    rootElement: 'body',
    // give the choice to place backdrop under different elements
    clickCallback: null
  };
  const DefaultType$7 = {
    className: 'string',
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: '(element|string)',
    clickCallback: '(function|null)'
  };
  const NAME$8 = 'backdrop';
  const CLASS_NAME_FADE$4 = 'fade';
  const CLASS_NAME_SHOW$5 = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$8}`;

  class Backdrop {
    constructor(config) {
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }

    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._append();

      if (this._config.isAnimated) {
        reflow(this._getElement());
      }

      this._getElement().classList.add(CLASS_NAME_SHOW$5);

      this._emulateAnimation(() => {
        execute(callback);
      });
    }

    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._getElement().classList.remove(CLASS_NAME_SHOW$5);

      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    } // Private


    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = this._config.className;

        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }

        this._element = backdrop;
      }

      return this._element;
    }

    _getConfig(config) {
      config = {
        ...Default$7,
        ...(typeof config === 'object' ? config : {})
      }; // use getElement() with the default "body" to get a fresh Element on each instantiation

      config.rootElement = getElement(config.rootElement);
      typeCheckConfig(NAME$8, config, DefaultType$7);
      return config;
    }

    _append() {
      if (this._isAppended) {
        return;
      }

      this._config.rootElement.append(this._getElement());

      EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }

    dispose() {
      if (!this._isAppended) {
        return;
      }

      EventHandler.off(this._element, EVENT_MOUSEDOWN);

      this._element.remove();

      this._isAppended = false;
    }

    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  const Default$6 = {
    trapElement: null,
    // The element to trap focus inside of
    autofocus: true
  };
  const DefaultType$6 = {
    trapElement: 'element',
    autofocus: 'boolean'
  };
  const NAME$7 = 'focustrap';
  const DATA_KEY$7 = 'bs.focustrap';
  const EVENT_KEY$7 = `.${DATA_KEY$7}`;
  const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$7}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$7}`;
  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';

  class FocusTrap {
    constructor(config) {
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }

    activate() {
      const {
        trapElement,
        autofocus
      } = this._config;

      if (this._isActive) {
        return;
      }

      if (autofocus) {
        trapElement.focus();
      }

      EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN$1, event => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
      this._isActive = true;
    }

    deactivate() {
      if (!this._isActive) {
        return;
      }

      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$7);
    } // Private


    _handleFocusin(event) {
      const {
        target
      } = event;
      const {
        trapElement
      } = this._config;

      if (target === document || target === trapElement || trapElement.contains(target)) {
        return;
      }

      const elements = SelectorEngine.focusableChildren(trapElement);

      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }

    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }

      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }

    _getConfig(config) {
      config = {
        ...Default$6,
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$7, config, DefaultType$6);
      return config;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$6 = 'modal';
  const DATA_KEY$6 = 'bs.modal';
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$3 = '.data-api';
  const ESCAPE_KEY$1 = 'Escape';
  const Default$5 = {
    backdrop: true,
    keyboard: true,
    focus: true
  };
  const DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
  };
  const EVENT_HIDE$3 = `hide${EVENT_KEY$6}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$6}`;
  const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$6}`;
  const EVENT_SHOW$3 = `show${EVENT_KEY$6}`;
  const EVENT_SHOWN$3 = `shown${EVENT_KEY$6}`;
  const EVENT_RESIZE = `resize${EVENT_KEY$6}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$6}`;
  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$6}`;
  const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY$6}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$6}`;
  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE$3 = 'fade';
  const CLASS_NAME_SHOW$4 = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
    } // Getters


    static get Default() {
      return Default$5;
    }

    static get NAME() {
      return NAME$6;
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;

      if (this._isAnimated()) {
        this._isTransitioning = true;
      }

      this._scrollBar.hide();

      document.body.classList.add(CLASS_NAME_OPEN);

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
        EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, event => {
          if (event.target === this._element) {
            this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(() => this._showElement(relatedTarget));
    }

    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._isShown = false;

      const isAnimated = this._isAnimated();

      if (isAnimated) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      this._focustrap.deactivate();

      this._element.classList.remove(CLASS_NAME_SHOW$4);

      EventHandler.off(this._element, EVENT_CLICK_DISMISS);
      EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

      this._queueCallback(() => this._hideModal(), this._element, isAnimated);
    }

    dispose() {
      [window, this._dialog].forEach(htmlElement => EventHandler.off(htmlElement, EVENT_KEY$6));

      this._backdrop.dispose();

      this._focustrap.deactivate();

      super.dispose();
    }

    handleUpdate() {
      this._adjustDialog();
    } // Private


    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value
        isAnimated: this._isAnimated()
      });
    }

    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }

    _getConfig(config) {
      config = {
        ...Default$5,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$6, config, DefaultType$5);
      return config;
    }

    _showElement(relatedTarget) {
      const isAnimated = this._isAnimated();

      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.append(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.scrollTop = 0;

      if (modalBody) {
        modalBody.scrollTop = 0;
      }

      if (isAnimated) {
        reflow(this._element);
      }

      this._element.classList.add(CLASS_NAME_SHOW$4);

      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }

        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };

      this._queueCallback(transitionComplete, this._dialog, isAnimated);
    }

    _setEscapeEvent() {
      if (this._isShown) {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
          if (this._config.keyboard && event.key === ESCAPE_KEY$1) {
            event.preventDefault();
            this.hide();
          } else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) {
            this._triggerBackdropTransition();
          }
        });
      } else {
        EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
      }
    }

    _setResizeEvent() {
      if (this._isShown) {
        EventHandler.on(window, EVENT_RESIZE, () => this._adjustDialog());
      } else {
        EventHandler.off(window, EVENT_RESIZE);
      }
    }

    _hideModal() {
      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);

        this._resetAdjustments();

        this._scrollBar.reset();

        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      });
    }

    _showBackdrop(callback) {
      EventHandler.on(this._element, EVENT_CLICK_DISMISS, event => {
        if (this._ignoreBackdropClick) {
          this._ignoreBackdropClick = false;
          return;
        }

        if (event.target !== event.currentTarget) {
          return;
        }

        if (this._config.backdrop === true) {
          this.hide();
        } else if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();
        }
      });

      this._backdrop.show(callback);
    }

    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }

    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

      if (hideEvent.defaultPrevented) {
        return;
      }

      const {
        classList,
        scrollHeight,
        style
      } = this._element;
      const isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

      if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
        return;
      }

      if (!isModalOverflowing) {
        style.overflowY = 'hidden';
      }

      classList.add(CLASS_NAME_STATIC);

      this._queueCallback(() => {
        classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          this._queueCallback(() => {
            style.overflowY = '';
          }, this._dialog);
        }
      }, this._dialog);

      this._element.focus();
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------


    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      const scrollbarWidth = this._scrollBar.getWidth();

      const isBodyOverflowing = scrollbarWidth > 0;

      if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
        this._element.style.paddingLeft = `${scrollbarWidth}px`;
      }

      if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
        this._element.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    } // Static


    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](relatedTarget);
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    EventHandler.one(target, EVENT_SHOW$3, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      EventHandler.one(target, EVENT_HIDDEN$3, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Modal);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$5 = 'offcanvas';
  const DATA_KEY$5 = 'bs.offcanvas';
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const DATA_API_KEY$2 = '.data-api';
  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$5}${DATA_API_KEY$2}`;
  const ESCAPE_KEY = 'Escape';
  const Default$4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  const DefaultType$4 = {
    backdrop: 'boolean',
    keyboard: 'boolean',
    scroll: 'boolean'
  };
  const CLASS_NAME_SHOW$3 = 'show';
  const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW$2 = `show${EVENT_KEY$5}`;
  const EVENT_SHOWN$2 = `shown${EVENT_KEY$5}`;
  const EVENT_HIDE$2 = `hide${EVENT_KEY$5}`;
  const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$5}`;
  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$5}${DATA_API_KEY$2}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$5}`;
  const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();

      this._addEventListeners();
    } // Getters


    static get NAME() {
      return NAME$5;
    }

    static get Default() {
      return Default$4;
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
      if (this._isShown) {
        return;
      }

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
        relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;
      this._element.style.visibility = 'visible';

      this._backdrop.show();

      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.classList.add(CLASS_NAME_SHOW$3);

      const completeCallBack = () => {
        if (!this._config.scroll) {
          this._focustrap.activate();
        }

        EventHandler.trigger(this._element, EVENT_SHOWN$2, {
          relatedTarget
        });
      };

      this._queueCallback(completeCallBack, this._element, true);
    }

    hide() {
      if (!this._isShown) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._focustrap.deactivate();

      this._element.blur();

      this._isShown = false;

      this._element.classList.remove(CLASS_NAME_SHOW$3);

      this._backdrop.hide();

      const completeCallback = () => {
        this._element.setAttribute('aria-hidden', true);

        this._element.removeAttribute('aria-modal');

        this._element.removeAttribute('role');

        this._element.style.visibility = 'hidden';

        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }

        EventHandler.trigger(this._element, EVENT_HIDDEN$2);
      };

      this._queueCallback(completeCallback, this._element, true);
    }

    dispose() {
      this._backdrop.dispose();

      this._focustrap.deactivate();

      super.dispose();
    } // Private


    _getConfig(config) {
      config = {
        ...Default$4,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$5, config, DefaultType$4);
      return config;
    }

    _initializeBackDrop() {
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: this._config.backdrop,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide()
      });
    }

    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }

    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (this._config.keyboard && event.key === ESCAPE_KEY) {
          this.hide();
        }
      });
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Offcanvas.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$2, () => {
      // focus on trigger when it is closed
      if (isVisible(this)) {
        this.focus();
      }
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

    const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

    if (allReadyOpen && allReadyOpen !== target) {
      Offcanvas.getInstance(allReadyOpen).hide();
    }

    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => SelectorEngine.find(OPEN_SELECTOR).forEach(el => Offcanvas.getOrCreateInstance(el).show()));
  enableDismissTrigger(Offcanvas);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  defineJQueryPlugin(Offcanvas);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  const allowedAttribute = (attr, allowedAttributeList) => {
    const attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attrName)) {
      if (uriAttrs.has(attrName)) {
        return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
      }

      return true;
    }

    const regExp = allowedAttributeList.filter(attrRegex => attrRegex instanceof RegExp); // Check if a regular expression validates the attribute.

    for (let i = 0, len = regExp.length; i < len; i++) {
      if (regExp[i].test(attrName)) {
        return true;
      }
    }

    return false;
  };

  const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };

  function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const allowlistKeys = Object.keys(allowList);
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

    for (let i = 0, len = elements.length; i < len; i++) {
      const el = elements[i];
      const elName = el.nodeName.toLowerCase();

      if (!allowlistKeys.includes(elName)) {
        el.remove();
        continue;
      }

      const attributeList = [].concat(...el.attributes);
      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
      attributeList.forEach(attr => {
        if (!allowedAttribute(attr, allowedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$4 = 'tooltip';
  const DATA_KEY$4 = 'bs.tooltip';
  const EVENT_KEY$4 = `.${DATA_KEY$4}`;
  const CLASS_PREFIX$1 = 'bs-tooltip';
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
  };
  const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  const Default$3 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [0, 0],
    container: false,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
  };
  const Event$2 = {
    HIDE: `hide${EVENT_KEY$4}`,
    HIDDEN: `hidden${EVENT_KEY$4}`,
    SHOW: `show${EVENT_KEY$4}`,
    SHOWN: `shown${EVENT_KEY$4}`,
    INSERTED: `inserted${EVENT_KEY$4}`,
    CLICK: `click${EVENT_KEY$4}`,
    FOCUSIN: `focusin${EVENT_KEY$4}`,
    FOCUSOUT: `focusout${EVENT_KEY$4}`,
    MOUSEENTER: `mouseenter${EVENT_KEY$4}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY$4}`
  };
  const CLASS_NAME_FADE$2 = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW$2 = 'show';
  const HOVER_STATE_SHOW = 'show';
  const HOVER_STATE_OUT = 'out';
  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  const EVENT_MODAL_HIDE = 'hide.bs.modal';
  const TRIGGER_HOVER = 'hover';
  const TRIGGER_FOCUS = 'focus';
  const TRIGGER_CLICK = 'click';
  const TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }

      super(element); // private

      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this._config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    static get Default() {
      return Default$3;
    }

    static get NAME() {
      return NAME$4;
    }

    static get Event() {
      return Event$2;
    }

    static get DefaultType() {
      return DefaultType$3;
    } // Public


    enable() {
      this._isEnabled = true;
    }

    disable() {
      this._isEnabled = false;
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }

    toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        const context = this._initializeOnDelegatedTarget(event);

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    }

    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

      if (this.tip) {
        this.tip.remove();
      }

      if (this._popper) {
        this._popper.destroy();
      }

      super.dispose();
    }

    show() {
      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }

      if (!(this.isWithContent() && this._isEnabled)) {
        return;
      }

      const showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }

      const tip = this.getTipElement();
      const tipId = getUID(this.constructor.NAME);
      tip.setAttribute('id', tipId);

      this._element.setAttribute('aria-describedby', tipId);

      if (this._config.animation) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }

      const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

      const attachment = this._getAttachment(placement);

      this._addAttachmentClass(attachment);

      const {
        container
      } = this._config;
      Data.set(tip, this.constructor.DATA_KEY, this);

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
      }

      if (this._popper) {
        this._popper.update();
      } else {
        this._popper = createPopper(this._element, tip, this._getPopperConfig(attachment));
      }

      tip.classList.add(CLASS_NAME_SHOW$2);

      const customClass = this._resolvePossibleFunction(this._config.customClass);

      if (customClass) {
        tip.classList.add(...customClass.split(' '));
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(element => {
          EventHandler.on(element, 'mouseover', noop);
        });
      }

      const complete = () => {
        const prevHoverState = this._hoverState;
        this._hoverState = null;
        EventHandler.trigger(this._element, this.constructor.Event.SHOWN);

        if (prevHoverState === HOVER_STATE_OUT) {
          this._leave(null, this);
        }
      };

      const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

      this._queueCallback(complete, this.tip, isAnimated);
    }

    hide() {
      if (!this._popper) {
        return;
      }

      const tip = this.getTipElement();

      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }

        if (this._hoverState !== HOVER_STATE_SHOW) {
          tip.remove();
        }

        this._cleanTipClass();

        this._element.removeAttribute('aria-describedby');

        EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);

        if (this._popper) {
          this._popper.destroy();

          this._popper = null;
        }
      };

      const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(element => EventHandler.off(element, 'mouseover', noop));
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

      this._queueCallback(complete, this.tip, isAnimated);

      this._hoverState = '';
    }

    update() {
      if (this._popper !== null) {
        this._popper.update();
      }
    } // Protected


    isWithContent() {
      return Boolean(this.getTitle());
    }

    getTipElement() {
      if (this.tip) {
        return this.tip;
      }

      const element = document.createElement('div');
      element.innerHTML = this._config.template;
      const tip = element.children[0];
      this.setContent(tip);
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      this.tip = tip;
      return this.tip;
    }

    setContent(tip) {
      this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
    }

    _sanitizeAndSetContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);

      if (!content && templateElement) {
        templateElement.remove();
        return;
      } // we use append for html objects to maintain js events


      this.setElementContent(templateElement, content);
    }

    setElementContent(element, content) {
      if (element === null) {
        return;
      }

      if (isElement$1(content)) {
        content = getElement(content); // content is a DOM node or a jQuery

        if (this._config.html) {
          if (content.parentNode !== element) {
            element.innerHTML = '';
            element.append(content);
          }
        } else {
          element.textContent = content.textContent;
        }

        return;
      }

      if (this._config.html) {
        if (this._config.sanitize) {
          content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
        }

        element.innerHTML = content;
      } else {
        element.textContent = content;
      }
    }

    getTitle() {
      const title = this._element.getAttribute('data-bs-original-title') || this._config.title;

      return this._resolvePossibleFunction(title);
    }

    updateAttachment(attachment) {
      if (attachment === 'right') {
        return 'end';
      }

      if (attachment === 'left') {
        return 'start';
      }

      return attachment;
    } // Private


    _initializeOnDelegatedTarget(event, context) {
      return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
        return offset.split(',').map(val => Number.parseInt(val, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _resolvePossibleFunction(content) {
      return typeof content === 'function' ? content.call(this._element) : content;
    }

    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: 'onChange',
          enabled: true,
          phase: 'afterWrite',
          fn: data => this._handlePopperPlacementChange(data)
        }],
        onFirstUpdate: data => {
          if (data.options.placement !== data.placement) {
            this._handlePopperPlacementChange(data);
          }
        }
      };
      return {
        ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

    _addAttachmentClass(attachment) {
      this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(attachment)}`);
    }

    _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    }

    _setListeners() {
      const triggers = this._config.trigger.split(' ');

      triggers.forEach(trigger => {
        if (trigger === 'click') {
          EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, event => this.toggle(event));
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          EventHandler.on(this._element, eventIn, this._config.selector, event => this._enter(event));
          EventHandler.on(this._element, eventOut, this._config.selector, event => this._leave(event));
        }
      });

      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };

      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

      if (this._config.selector) {
        this._config = {
          ...this._config,
          trigger: 'manual',
          selector: ''
        };
      } else {
        this._fixTitle();
      }
    }

    _fixTitle() {
      const title = this._element.getAttribute('title');

      const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

      if (title || originalTitleType !== 'string') {
        this._element.setAttribute('data-bs-original-title', title || '');

        if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
          this._element.setAttribute('aria-label', title);
        }

        this._element.setAttribute('title', '');
      }
    }

    _enter(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context._config.delay || !context._config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context._config.delay.show);
    }

    _leave(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context._config.delay || !context._config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context._config.delay.hide);
    }

    _isWithActiveTrigger() {
      for (const trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    }

    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      Object.keys(dataAttributes).forEach(dataAttr => {
        if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
          delete dataAttributes[dataAttr];
        }
      });
      config = {
        ...this.constructor.Default,
        ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
      config.container = config.container === false ? document.body : getElement(config.container);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
      }

      return config;
    }

    _getDelegateConfig() {
      const config = {};

      for (const key in this._config) {
        if (this.constructor.Default[key] !== this._config[key]) {
          config[key] = this._config[key];
        }
      } // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // `Object.fromEntries(keysWithDifferentValues)`


      return config;
    }

    _cleanTipClass() {
      const tip = this.getTipElement();
      const basicClassPrefixRegex = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, 'g');
      const tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
      }
    }

    _getBasicClassPrefix() {
      return CLASS_PREFIX$1;
    }

    _handlePopperPlacementChange(popperData) {
      const {
        state
      } = popperData;

      if (!state) {
        return;
      }

      this.tip = state.elements.popper;

      this._cleanTipClass();

      this._addAttachmentClass(this._getAttachment(state.placement));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tooltip.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tooltip to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Tooltip);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$3 = 'popover';
  const DATA_KEY$3 = 'bs.popover';
  const EVENT_KEY$3 = `.${DATA_KEY$3}`;
  const CLASS_PREFIX = 'bs-popover';
  const Default$2 = {
    ...Tooltip.Default,
    placement: 'right',
    offset: [0, 8],
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
  };
  const DefaultType$2 = {
    ...Tooltip.DefaultType,
    content: '(string|element|function)'
  };
  const Event$1 = {
    HIDE: `hide${EVENT_KEY$3}`,
    HIDDEN: `hidden${EVENT_KEY$3}`,
    SHOW: `show${EVENT_KEY$3}`,
    SHOWN: `shown${EVENT_KEY$3}`,
    INSERTED: `inserted${EVENT_KEY$3}`,
    CLICK: `click${EVENT_KEY$3}`,
    FOCUSIN: `focusin${EVENT_KEY$3}`,
    FOCUSOUT: `focusout${EVENT_KEY$3}`,
    MOUSEENTER: `mouseenter${EVENT_KEY$3}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY$3}`
  };
  const SELECTOR_TITLE = '.popover-header';
  const SELECTOR_CONTENT = '.popover-body';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }

    static get NAME() {
      return NAME$3;
    }

    static get Event() {
      return Event$1;
    }

    static get DefaultType() {
      return DefaultType$2;
    } // Overrides


    isWithContent() {
      return this.getTitle() || this._getContent();
    }

    setContent(tip) {
      this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TITLE);

      this._sanitizeAndSetContent(tip, this._getContent(), SELECTOR_CONTENT);
    } // Private


    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }

    _getBasicClassPrefix() {
      return CLASS_PREFIX;
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Popover.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Popover to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Popover);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$2 = 'scrollspy';
  const DATA_KEY$2 = 'bs.scrollspy';
  const EVENT_KEY$2 = `.${DATA_KEY$2}`;
  const DATA_API_KEY$1 = '.data-api';
  const Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  const DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;
  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE$1 = 'active';
  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}, .${CLASS_NAME_DROPDOWN_ITEM}`;
  const SELECTOR_DROPDOWN$1 = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  const METHOD_OFFSET = 'offset';
  const METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
      this._config = this._getConfig(config);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      EventHandler.on(this._scrollElement, EVENT_SCROLL, () => this._process());
      this.refresh();

      this._process();
    } // Getters


    static get Default() {
      return Default$1;
    }

    static get NAME() {
      return NAME$2;
    } // Public


    refresh() {
      const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      const targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
      targets.map(element => {
        const targetSelector = getSelectorFromElement(element);
        const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

        if (target) {
          const targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => {
        this._offsets.push(item[0]);

        this._targets.push(item[1]);
      });
    }

    dispose() {
      EventHandler.off(this._scrollElement, EVENT_KEY$2);
      super.dispose();
    } // Private


    _getConfig(config) {
      config = {
        ...Default$1,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' && config ? config : {})
      };
      config.target = getElement(config.target) || document.documentElement;
      typeCheckConfig(NAME$2, config, DefaultType$1);
      return config;
    }

    _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }

    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }

    _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }

    _process() {
      const scrollTop = this._getScrollTop() + this._config.offset;

      const scrollHeight = this._getScrollHeight();

      const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        const target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (let i = this._offsets.length; i--;) {
        const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    }

    _activate(target) {
      this._activeTarget = target;

      this._clear();

      const queries = SELECTOR_LINK_ITEMS.split(',').map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);
      const link = SelectorEngine.findOne(queries.join(','), this._config.target);
      link.classList.add(CLASS_NAME_ACTIVE$1);

      if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
      } else {
        SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup => {
          // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
          SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item

          SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(navItem => {
            SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1));
          });
        });
      }

      EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }

    _clear() {
      SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(node => node.classList.contains(CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove(CLASS_NAME_ACTIVE$1));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = ScrollSpy.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    SelectorEngine.find(SELECTOR_DATA_SPY).forEach(spy => new ScrollSpy(spy));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .ScrollSpy to jQuery only if jQuery is present
   */

  defineJQueryPlugin(ScrollSpy);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$1 = 'tab';
  const DATA_KEY$1 = 'bs.tab';
  const EVENT_KEY$1 = `.${DATA_KEY$1}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;
  const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_FADE$1 = 'fade';
  const CLASS_NAME_SHOW$1 = 'show';
  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_ACTIVE = '.active';
  const SELECTOR_ACTIVE_UL = ':scope > li > .active';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tab extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$1;
    } // Public


    show() {
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
        return;
      }

      let previous;
      const target = getElementFromSelector(this._element);

      const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

      if (listElement) {
        const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
        previous = SelectorEngine.find(itemSelector, listElement);
        previous = previous[previous.length - 1];
      }

      const hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
        relatedTarget: this._element
      }) : null;
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
        relatedTarget: previous
      });

      if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
        return;
      }

      this._activate(this._element, listElement);

      const complete = () => {
        EventHandler.trigger(previous, EVENT_HIDDEN$1, {
          relatedTarget: this._element
        });
        EventHandler.trigger(this._element, EVENT_SHOWN$1, {
          relatedTarget: previous
        });
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    } // Private


    _activate(element, container, callback) {
      const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
      const active = activeElements[0];
      const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

      const complete = () => this._transitionComplete(element, active, callback);

      if (active && isTransitioning) {
        active.classList.remove(CLASS_NAME_SHOW$1);

        this._queueCallback(complete, element, true);
      } else {
        complete();
      }
    }

    _transitionComplete(element, active, callback) {
      if (active) {
        active.classList.remove(CLASS_NAME_ACTIVE);
        const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

        if (dropdownChild) {
          dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      element.classList.add(CLASS_NAME_ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$1)) {
        element.classList.add(CLASS_NAME_SHOW$1);
      }

      let parent = element.parentNode;

      if (parent && parent.nodeName === 'LI') {
        parent = parent.parentNode;
      }

      if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
        const dropdownElement = element.closest(SELECTOR_DROPDOWN);

        if (dropdownElement) {
          SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(dropdown => dropdown.classList.add(CLASS_NAME_ACTIVE));
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tab.getOrCreateInstance(this);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    const data = Tab.getOrCreateInstance(this);
    data.show();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tab to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Tab);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = 'toast';
  const DATA_KEY = 'bs.toast';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';
  const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  const Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Toast extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;

      this._setListeners();
    } // Getters


    static get DefaultType() {
      return DefaultType;
    }

    static get Default() {
      return Default;
    }

    static get NAME() {
      return NAME;
    } // Public


    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }

      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);

        EventHandler.trigger(this._element, EVENT_SHOWN);

        this._maybeScheduleHide();
      };

      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOW);

      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }

    hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE); // @deprecated


        this._element.classList.remove(CLASS_NAME_SHOWING);

        this._element.classList.remove(CLASS_NAME_SHOW);

        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };

      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }

    dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }

      super.dispose();
    } // Private


    _getConfig(config) {
      config = {
        ...Default,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' && config ? config : {})
      };
      typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    }

    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }

      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }

      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }

    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          this._hasMouseInteraction = isInteracting;
          break;

        case 'focusin':
        case 'focusout':
          this._hasKeyboardInteraction = isInteracting;
          break;
      }

      if (isInteracting) {
        this._clearTimeout();

        return;
      }

      const nextElement = event.relatedTarget;

      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }

      this._maybeScheduleHide();
    }

    _setListeners() {
      EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
    }

    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Toast.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config](this);
        }
      });
    }

  }

  enableDismissTrigger(Toast);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Toast to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Toast);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var index_umd = {
    Alert,
    Button,
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Offcanvas,
    Popover,
    ScrollSpy,
    Tab,
    Toast,
    Tooltip
  };

  return index_umd;

})));
//# sourceMappingURL=bootstrap.bundle.js.map


/*! jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.effects.core.js, jquery.effects.blind.js, jquery.effects.bounce.js, jquery.effects.clip.js, jquery.effects.drop.js, jquery.effects.explode.js, jquery.effects.fade.js, jquery.effects.fold.js, jquery.effects.highlight.js, jquery.effects.pulsate.js, jquery.effects.scale.js, jquery.effects.shake.js, jquery.effects.slide.js, jquery.effects.transfer.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.tabs.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) {
  function c(b, c) {
    var e = b.nodeName.toLowerCase();
    if ("area" === e) {
      var f = b.parentNode,
        g = f.name,
        h;
      return !b.href || !g || f.nodeName.toLowerCase() !== "map" ? !1 : (h = a("img[usemap=#" + g + "]")[0], !!h && d(h))
    }
    return (/input|select|textarea|button|object/.test(e) ? !b.disabled : "a" == e ? b.href || c : c) && d(b)
  }

  function d(b) {
    return !a(b).parents().andSelf().filter(function () {
      return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this)
    }).length
  }
  a.ui = a.ui || {};
  if (a.ui.version) return;
  a.extend(a.ui, {
    version: "1.8.22",
    keyCode: {
      ALT: 18,
      BACKSPACE: 8,
      CAPS_LOCK: 20,
      COMMA: 188,
      COMMAND: 91,
      COMMAND_LEFT: 91,
      COMMAND_RIGHT: 93,
      CONTROL: 17,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      INSERT: 45,
      LEFT: 37,
      MENU: 93,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SHIFT: 16,
      SPACE: 32,
      TAB: 9,
      UP: 38,
      WINDOWS: 91
    }
  }), a.fn.extend({
    propAttr: a.fn.prop || a.fn.attr,
    _focus: a.fn.focus,
    focus: function (b, c) {
      return typeof b == "number" ? this.each(function () {
        var d = this;
        setTimeout(function () {
          a(d).focus(), c && c.call(d)
        }, b)
      }) : this._focus.apply(this, arguments)
    },
    scrollParent: function () {
      var b;
      return a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? b = this.parents().filter(function () {
        return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
      }).eq(0) : b = this.parents().filter(function () {
        return /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
      }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
    },
    zIndex: function (c) {
      if (c !== b) return this.css("zIndex", c);
      if (this.length) {
        var d = a(this[0]),
          e, f;
        while (d.length && d[0] !== document) {
          e = d.css("position");
          if (e === "absolute" || e === "relative" || e === "fixed") {
            f = parseInt(d.css("zIndex"), 10);
            if (!isNaN(f) && f !== 0) return f
          }
          d = d.parent()
        }
      }
      return 0
    },
    disableSelection: function () {
      return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
        a.preventDefault()
      })
    },
    enableSelection: function () {
      return this.unbind(".ui-disableSelection")
    }
  }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (c, d) {
    function h(b, c, d, f) {
      return a.each(e, function () {
        c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0, d && (c -= parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0), f && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0)
      }), c
    }
    var e = d === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
      f = d.toLowerCase(),
      g = {
        innerWidth: a.fn.innerWidth,
        innerHeight: a.fn.innerHeight,
        outerWidth: a.fn.outerWidth,
        outerHeight: a.fn.outerHeight
      };
    a.fn["inner" + d] = function (c) {
      return c === b ? g["inner" + d].call(this) : this.each(function () {
        a(this).css(f, h(this, c) + "px")
      })
    }, a.fn["outer" + d] = function (b, c) {
      return typeof b != "number" ? g["outer" + d].call(this, b) : this.each(function () {
        a(this).css(f, h(this, b, !0, c) + "px")
      })
    }
  }), a.extend(a.expr[":"], {
    data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
      return function (c) {
        return !!a.data(c, b)
      }
    }) : function (b, c, d) {
      return !!a.data(b, d[3])
    },
    focusable: function (b) {
      return c(b, !isNaN(a.attr(b, "tabindex")))
    },
    tabbable: function (b) {
      var d = a.attr(b, "tabindex"),
        e = isNaN(d);
      return (e || d >= 0) && c(b, !e)
    }
  }), a(function () {
    var b = document.body,
      c = b.appendChild(c = document.createElement("div"));
    c.offsetHeight, a.extend(c.style, {
      minHeight: "100px",
      height: "auto",
      padding: 0,
      borderWidth: 0
    }), a.support.minHeight = c.offsetHeight === 100, a.support.selectstart = "onselectstart" in c, b.removeChild(c).style.display = "none"
  }), a.curCSS || (a.curCSS = a.css), a.extend(a.ui, {
    plugin: {
      add: function (b, c, d) {
        var e = a.ui[b].prototype;
        for (var f in d) e.plugins[f] = e.plugins[f] || [], e.plugins[f].push([c, d[f]])
      },
      call: function (a, b, c) {
        var d = a.plugins[b];
        if (!d || !a.element[0].parentNode) return;
        for (var e = 0; e < d.length; e++) a.options[d[e][0]] && d[e][1].apply(a.element, c)
      }
    },
    contains: function (a, b) {
      return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b)
    },
    hasScroll: function (b, c) {
      if (a(b).css("overflow") === "hidden") return !1;
      var d = c && c === "left" ? "scrollLeft" : "scrollTop",
        e = !1;
      return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
    },
    isOverAxis: function (a, b, c) {
      return a > b && a < b + c
    },
    isOver: function (b, c, d, e, f, g) {
      return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g)
    }
  })
})(jQuery),
function (a, b) {
  if (a.cleanData) {
    var c = a.cleanData;
    a.cleanData = function (b) {
      for (var d = 0, e;
        (e = b[d]) != null; d++) try {
        a(e).triggerHandler("remove")
      } catch (f) {}
      c(b)
    }
  } else {
    var d = a.fn.remove;
    a.fn.remove = function (b, c) {
      return this.each(function () {
        return c || (!b || a.filter(b, [this]).length) && a("*", this).add([this]).each(function () {
          try {
            a(this).triggerHandler("remove")
          } catch (b) {}
        }), d.call(a(this), b, c)
      })
    }
  }
  a.widget = function (b, c, d) {
    var e = b.split(".")[0],
      f;
    b = b.split(".")[1], f = e + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][f] = function (c) {
      return !!a.data(c, b)
    }, a[e] = a[e] || {}, a[e][b] = function (a, b) {
      arguments.length && this._createWidget(a, b)
    };
    var g = new c;
    g.options = a.extend(!0, {}, g.options), a[e][b].prototype = a.extend(!0, g, {
      namespace: e,
      widgetName: b,
      widgetEventPrefix: a[e][b].prototype.widgetEventPrefix || b,
      widgetBaseClass: f
    }, d), a.widget.bridge(b, a[e][b])
  }, a.widget.bridge = function (c, d) {
    a.fn[c] = function (e) {
      var f = typeof e == "string",
        g = Array.prototype.slice.call(arguments, 1),
        h = this;
      return e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e, f && e.charAt(0) === "_" ? h : (f ? this.each(function () {
        var d = a.data(this, c),
          f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d;
        if (f !== d && f !== b) return h = f, !1
      }) : this.each(function () {
        var b = a.data(this, c);
        b ? b.option(e || {})._init() : a.data(this, c, new d(e, this))
      }), h)
    }
  }, a.Widget = function (a, b) {
    arguments.length && this._createWidget(a, b)
  }, a.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    options: {
      disabled: !1
    },
    _createWidget: function (b, c) {
      a.data(c, this.widgetName, this), this.element = a(c), this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), b);
      var d = this;
      this.element.bind("remove." + this.widgetName, function () {
        d.destroy()
      }), this._create(), this._trigger("create"), this._init()
    },
    _getCreateOptions: function () {
      return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
    },
    _create: function () {},
    _init: function () {},
    destroy: function () {
      this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled")
    },
    widget: function () {
      return this.element
    },
    option: function (c, d) {
      var e = c;
      if (arguments.length === 0) return a.extend({}, this.options);
      if (typeof c == "string") {
        if (d === b) return this.options[c];
        e = {}, e[c] = d
      }
      return this._setOptions(e), this
    },
    _setOptions: function (b) {
      var c = this;
      return a.each(b, function (a, b) {
        c._setOption(a, b)
      }), this
    },
    _setOption: function (a, b) {
      return this.options[a] = b, a === "disabled" && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", b), this
    },
    enable: function () {
      return this._setOption("disabled", !1)
    },
    disable: function () {
      return this._setOption("disabled", !0)
    },
    _trigger: function (b, c, d) {
      var e, f, g = this.options[b];
      d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent;
      if (f)
        for (e in f) e in c || (c[e] = f[e]);
      return this.element.trigger(c, d), !(a.isFunction(g) && g.call(this.element[0], c, d) === !1 || c.isDefaultPrevented())
    }
  }
}(jQuery),
function (a, b) {
  var c = !1;
  a(document).mouseup(function (a) {
    c = !1
  }), a.widget("ui.mouse", {
    options: {
      cancel: ":input,option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function () {
      var b = this;
      this.element.bind("mousedown." + this.widgetName, function (a) {
        return b._mouseDown(a)
      }).bind("click." + this.widgetName, function (c) {
        if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1
      }), this.started = !1
    },
    _mouseDestroy: function () {
      this.element.unbind("." + this.widgetName), a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function (b) {
      if (c) return;
      this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
      var d = this,
        e = b.which == 1,
        f = typeof this.options.cancel == "string" && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
      if (!e || f || !this._mouseCapture(b)) return !0;
      this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
        d.mouseDelayMet = !0
      }, this.options.delay));
      if (this._mouseDistanceMet(b) && this._mouseDelayMet(b)) {
        this._mouseStarted = this._mouseStart(b) !== !1;
        if (!this._mouseStarted) return b.preventDefault(), !0
      }
      return !0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (a) {
        return d._mouseMove(a)
      }, this._mouseUpDelegate = function (a) {
        return d._mouseUp(a)
      }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), c = !0, !0
    },
    _mouseMove: function (b) {
      return !a.browser.msie || document.documentMode >= 9 || !!b.button ? this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted) : this._mouseUp(b)
    },
    _mouseUp: function (b) {
      return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target == this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1
    },
    _mouseDistanceMet: function (a) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function (a) {
      return this.mouseDelayMet
    },
    _mouseStart: function (a) {},
    _mouseDrag: function (a) {},
    _mouseStop: function (a) {},
    _mouseCapture: function (a) {
      return !0
    }
  })
}(jQuery),
function (a, b) {
  a.widget("ui.draggable", a.ui.mouse, {
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1
    },
    _create: function () {
      this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
    },
    destroy: function () {
      if (!this.element.data("draggable")) return;
      return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
    },
    _mouseCapture: function (b) {
      var c = this.options;
      return this.helper || c.disabled || a(b.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(b), this.handle ? (c.iframeFix && a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function () {
        a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
          width: this.offsetWidth + "px",
          height: this.offsetHeight + "px",
          position: "absolute",
          opacity: "0.001",
          zIndex: 1e3
        }).css(a(this).offset()).appendTo("body")
      }), !0) : !1)
    },
    _mouseStart: function (b) {
      var c = this.options;
      return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, a.extend(this.offset, {
        click: {
          left: b.pageX - this.offset.left,
          top: b.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), c.containment && this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
    },
    _mouseDrag: function (b, c) {
      this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute");
      if (!c) {
        var d = this._uiHash();
        if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
        this.position = d.position
      }
      if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
      if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
      return a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
    },
    _mouseStop: function (b) {
      var c = !1;
      a.ui.ddmanager && !this.options.dropBehaviour && (c = a.ui.ddmanager.drop(this, b)), this.dropped && (c = this.dropped, this.dropped = !1);
      var d = this.element[0],
        e = !1;
      while (d && (d = d.parentNode)) d == document && (e = !0);
      if (!e && this.options.helper === "original") return !1;
      if (this.options.revert == "invalid" && !c || this.options.revert == "valid" && c || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, c)) {
        var f = this;
        a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
          f._trigger("stop", b) !== !1 && f._clear()
        })
      } else this._trigger("stop", b) !== !1 && this._clear();
      return !1
    },
    _mouseUp: function (b) {
      return this.options.iframeFix === !0 && a("div.ui-draggable-iframeFix").each(function () {
        this.parentNode.removeChild(this)
      }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b)
    },
    cancel: function () {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
    },
    _getHandle: function (b) {
      var c = !this.options.handle || !a(this.options.handle, this.element).length ? !0 : !1;
      return a(this.options.handle, this.element).find("*").andSelf().each(function () {
        this == b.target && (c = !0)
      }), c
    },
    _createHelper: function (b) {
      var c = this.options,
        d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : c.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
      return d.parents("body").length || d.appendTo(c.appendTo == "parent" ? this.element[0].parentNode : c.appendTo), d[0] != this.element[0] && !/(fixed|absolute)/.test(d.css("position")) && d.css("position", "absolute"), d
    },
    _adjustOffsetFromHelper: function (b) {
      typeof b == "string" && (b = b.split(" ")), a.isArray(b) && (b = {
        left: +b[0],
        top: +b[1] || 0
      }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent();
      var b = this.offsetParent.offset();
      this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop());
      if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) b = {
        top: 0,
        left: 0
      };
      return {
        top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function () {
      if (this.cssPosition == "relative") {
        var a = this.element.position();
        return {
          top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        }
      }
      return {
        top: 0,
        left: 0
      }
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      }
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function () {
      var b = this.options;
      b.containment == "parent" && (b.containment = this.helper[0].parentNode);
      if (b.containment == "document" || b.containment == "window") this.containment = [b.containment == "document" ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, b.containment == "document" ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (b.containment == "document" ? 0 : a(window).scrollLeft()) + a(b.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b.containment == "document" ? 0 : a(window).scrollTop()) + (a(b.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
      if (!/^(document|window|parent)$/.test(b.containment) && b.containment.constructor != Array) {
        var c = a(b.containment),
          d = c[0];
        if (!d) return;
        var e = c.offset(),
          f = a(d).css("overflow") != "hidden";
        this.containment = [(parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0), (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0), (f ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c
      } else b.containment.constructor == Array && (this.containment = b.containment)
    },
    _convertPositionTo: function (b, c) {
      c || (c = this.position);
      var d = b == "absolute" ? 1 : -1,
        e = this.options,
        f = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
        g = /(html|body)/i.test(f[0].tagName);
      return {
        top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * d),
        left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * d)
      }
    },
    _generatePosition: function (b) {
      var c = this.options,
        d = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
        e = /(html|body)/i.test(d[0].tagName),
        f = b.pageX,
        g = b.pageY;
      if (this.originalPosition) {
        var h;
        if (this.containment) {
          if (this.relative_container) {
            var i = this.relative_container.offset();
            h = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]
          } else h = this.containment;
          b.pageX - this.offset.click.left < h[0] && (f = h[0] + this.offset.click.left), b.pageY - this.offset.click.top < h[1] && (g = h[1] + this.offset.click.top), b.pageX - this.offset.click.left > h[2] && (f = h[2] + this.offset.click.left), b.pageY - this.offset.click.top > h[3] && (g = h[3] + this.offset.click.top)
        }
        if (c.grid) {
          var j = c.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1] : this.originalPageY;
          g = h ? j - this.offset.click.top < h[1] || j - this.offset.click.top > h[3] ? j - this.offset.click.top < h[1] ? j + c.grid[1] : j - c.grid[1] : j : j;
          var k = c.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0] : this.originalPageX;
          f = h ? k - this.offset.click.left < h[0] || k - this.offset.click.left > h[2] ? k - this.offset.click.left < h[0] ? k + c.grid[0] : k - c.grid[0] : k : k
        }
      }
      return {
        top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()),
        left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft())
      }
    },
    _clear: function () {
      this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
    },
    _trigger: function (b, c, d) {
      return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), b == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, d)
    },
    plugins: {},
    _uiHash: function (a) {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      }
    }
  }), a.extend(a.ui.draggable, {
    version: "1.8.22"
  }), a.ui.plugin.add("draggable", "connectToSortable", {
    start: function (b, c) {
      var d = a(this).data("draggable"),
        e = d.options,
        f = a.extend({}, c, {
          item: d.element
        });
      d.sortables = [], a(e.connectToSortable).each(function () {
        var c = a.data(this, "sortable");
        c && !c.options.disabled && (d.sortables.push({
          instance: c,
          shouldRevert: c.options.revert
        }), c.refreshPositions(), c._trigger("activate", b, f))
      })
    },
    stop: function (b, c) {
      var d = a(this).data("draggable"),
        e = a.extend({}, c, {
          item: d.element
        });
      a.each(d.sortables, function () {
        this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, d.options.helper == "original" && this.instance.currentItem.css({
          top: "auto",
          left: "auto"
        })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e))
      })
    },
    drag: function (b, c) {
      var d = a(this).data("draggable"),
        e = this,
        f = function (b) {
          var c = this.offset.click.top,
            d = this.offset.click.left,
            e = this.positionAbs.top,
            f = this.positionAbs.left,
            g = b.height,
            h = b.width,
            i = b.top,
            j = b.left;
          return a.ui.isOver(e + c, f + d, i, j, g, h)
        };
      a.each(d.sortables, function (f) {
        this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
          return c.helper[0]
        }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", b), d.dropped = !1)
      })
    }
  }), a.ui.plugin.add("draggable", "cursor", {
    start: function (b, c) {
      var d = a("body"),
        e = a(this).data("draggable").options;
      d.css("cursor") && (e._cursor = d.css("cursor")), d.css("cursor", e.cursor)
    },
    stop: function (b, c) {
      var d = a(this).data("draggable").options;
      d._cursor && a("body").css("cursor", d._cursor)
    }
  }), a.ui.plugin.add("draggable", "opacity", {
    start: function (b, c) {
      var d = a(c.helper),
        e = a(this).data("draggable").options;
      d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity)
    },
    stop: function (b, c) {
      var d = a(this).data("draggable").options;
      d._opacity && a(c.helper).css("opacity", d._opacity)
    }
  }), a.ui.plugin.add("draggable", "scroll", {
    start: function (b, c) {
      var d = a(this).data("draggable");
      d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML" && (d.overflowOffset = d.scrollParent.offset())
    },
    drag: function (b, c) {
      var d = a(this).data("draggable"),
        e = d.options,
        f = !1;
      if (d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML") {
        if (!e.axis || e.axis != "x") d.overflowOffset.top + d.scrollParent[0].offsetHeight - b.pageY < e.scrollSensitivity ? d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop - e.scrollSpeed);
        if (!e.axis || e.axis != "y") d.overflowOffset.left + d.scrollParent[0].offsetWidth - b.pageX < e.scrollSensitivity ? d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft - e.scrollSpeed)
      } else {
        if (!e.axis || e.axis != "x") b.pageY - a(document).scrollTop() < e.scrollSensitivity ? f = a(document).scrollTop(a(document).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < e.scrollSensitivity && (f = a(document).scrollTop(a(document).scrollTop() + e.scrollSpeed));
        if (!e.axis || e.axis != "y") b.pageX - a(document).scrollLeft() < e.scrollSensitivity ? f = a(document).scrollLeft(a(document).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < e.scrollSensitivity && (f = a(document).scrollLeft(a(document).scrollLeft() + e.scrollSpeed))
      }
      f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
    }
  }), a.ui.plugin.add("draggable", "snap", {
    start: function (b, c) {
      var d = a(this).data("draggable"),
        e = d.options;
      d.snapElements = [], a(e.snap.constructor != String ? e.snap.items || ":data(draggable)" : e.snap).each(function () {
        var b = a(this),
          c = b.offset();
        this != d.element[0] && d.snapElements.push({
          item: this,
          width: b.outerWidth(),
          height: b.outerHeight(),
          top: c.top,
          left: c.left
        })
      })
    },
    drag: function (b, c) {
      var d = a(this).data("draggable"),
        e = d.options,
        f = e.snapTolerance,
        g = c.offset.left,
        h = g + d.helperProportions.width,
        i = c.offset.top,
        j = i + d.helperProportions.height;
      for (var k = d.snapElements.length - 1; k >= 0; k--) {
        var l = d.snapElements[k].left,
          m = l + d.snapElements[k].width,
          n = d.snapElements[k].top,
          o = n + d.snapElements[k].height;
        if (!(l - f < g && g < m + f && n - f < i && i < o + f || l - f < g && g < m + f && n - f < j && j < o + f || l - f < h && h < m + f && n - f < i && i < o + f || l - f < h && h < m + f && n - f < j && j < o + f)) {
          d.snapElements[k].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {
            snapItem: d.snapElements[k].item
          })), d.snapElements[k].snapping = !1;
          continue
        }
        if (e.snapMode != "inner") {
          var p = Math.abs(n - j) <= f,
            q = Math.abs(o - i) <= f,
            r = Math.abs(l - h) <= f,
            s = Math.abs(m - g) <= f;
          p && (c.position.top = d._convertPositionTo("relative", {
            top: n - d.helperProportions.height,
            left: 0
          }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {
            top: o,
            left: 0
          }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {
            top: 0,
            left: l - d.helperProportions.width
          }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {
            top: 0,
            left: m
          }).left - d.margins.left)
        }
        var t = p || q || r || s;
        if (e.snapMode != "outer") {
          var p = Math.abs(n - i) <= f,
            q = Math.abs(o - j) <= f,
            r = Math.abs(l - g) <= f,
            s = Math.abs(m - h) <= f;
          p && (c.position.top = d._convertPositionTo("relative", {
            top: n,
            left: 0
          }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {
            top: o - d.helperProportions.height,
            left: 0
          }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {
            top: 0,
            left: l
          }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {
            top: 0,
            left: m - d.helperProportions.width
          }).left - d.margins.left)
        }!d.snapElements[k].snapping && (p || q || r || s || t) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {
          snapItem: d.snapElements[k].item
        })), d.snapElements[k].snapping = p || q || r || s || t
      }
    }
  }), a.ui.plugin.add("draggable", "stack", {
    start: function (b, c) {
      var d = a(this).data("draggable").options,
        e = a.makeArray(a(d.stack)).sort(function (b, c) {
          return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
        });
      if (!e.length) return;
      var f = parseInt(e[0].style.zIndex) || 0;
      a(e).each(function (a) {
        this.style.zIndex = f + a
      }), this[0].style.zIndex = f + e.length
    }
  }), a.ui.plugin.add("draggable", "zIndex", {
    start: function (b, c) {
      var d = a(c.helper),
        e = a(this).data("draggable").options;
      d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex)
    },
    stop: function (b, c) {
      var d = a(this).data("draggable").options;
      d._zIndex && a(c.helper).css("zIndex", d._zIndex)
    }
  })
}(jQuery),
function (a, b) {
  a.widget("ui.droppable", {
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      activeClass: !1,
      addClasses: !0,
      greedy: !1,
      hoverClass: !1,
      scope: "default",
      tolerance: "intersect"
    },
    _create: function () {
      var b = this.options,
        c = b.accept;
      this.isover = 0, this.isout = 1, this.accept = a.isFunction(c) ? c : function (a) {
        return a.is(c)
      }, this.proportions = {
        width: this.element[0].offsetWidth,
        height: this.element[0].offsetHeight
      }, a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || [], a.ui.ddmanager.droppables[b.scope].push(this), b.addClasses && this.element.addClass("ui-droppable")
    },
    destroy: function () {
      var b = a.ui.ddmanager.droppables[this.options.scope];
      for (var c = 0; c < b.length; c++) b[c] == this && b.splice(c, 1);
      return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this
    },
    _setOption: function (b, c) {
      b == "accept" && (this.accept = a.isFunction(c) ? c : function (a) {
        return a.is(c)
      }), a.Widget.prototype._setOption.apply(this, arguments)
    },
    _activate: function (b) {
      var c = a.ui.ddmanager.current;
      this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c))
    },
    _deactivate: function (b) {
      var c = a.ui.ddmanager.current;
      this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c))
    },
    _over: function (b) {
      var c = a.ui.ddmanager.current;
      if (!c || (c.currentItem || c.element)[0] == this.element[0]) return;
      this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
    },
    _out: function (b) {
      var c = a.ui.ddmanager.current;
      if (!c || (c.currentItem || c.element)[0] == this.element[0]) return;
      this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
    },
    _drop: function (b, c) {
      var d = c || a.ui.ddmanager.current;
      if (!d || (d.currentItem || d.element)[0] == this.element[0]) return !1;
      var e = !1;
      return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
        var b = a.data(this, "droppable");
        if (b.options.greedy && !b.options.disabled && b.options.scope == d.options.scope && b.accept.call(b.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(b, {
            offset: b.element.offset()
          }), b.options.tolerance)) return e = !0, !1
      }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1
    },
    ui: function (a) {
      return {
        draggable: a.currentItem || a.element,
        helper: a.helper,
        position: a.position,
        offset: a.positionAbs
      }
    }
  }), a.extend(a.ui.droppable, {
    version: "1.8.22"
  }), a.ui.intersect = function (b, c, d) {
    if (!c.offset) return !1;
    var e = (b.positionAbs || b.position.absolute).left,
      f = e + b.helperProportions.width,
      g = (b.positionAbs || b.position.absolute).top,
      h = g + b.helperProportions.height,
      i = c.offset.left,
      j = i + c.proportions.width,
      k = c.offset.top,
      l = k + c.proportions.height;
    switch (d) {
      case "fit":
        return i <= e && f <= j && k <= g && h <= l;
      case "intersect":
        return i < e + b.helperProportions.width / 2 && f - b.helperProportions.width / 2 < j && k < g + b.helperProportions.height / 2 && h - b.helperProportions.height / 2 < l;
      case "pointer":
        var m = (b.positionAbs || b.position.absolute).left + (b.clickOffset || b.offset.click).left,
          n = (b.positionAbs || b.position.absolute).top + (b.clickOffset || b.offset.click).top,
          o = a.ui.isOver(n, m, k, i, c.proportions.height, c.proportions.width);
        return o;
      case "touch":
        return (g >= k && g <= l || h >= k && h <= l || g < k && h > l) && (e >= i && e <= j || f >= i && f <= j || e < i && f > j);
      default:
        return !1
    }
  }, a.ui.ddmanager = {
    current: null,
    droppables: {
      "default": []
    },
    prepareOffsets: function (b, c) {
      var d = a.ui.ddmanager.droppables[b.options.scope] || [],
        e = c ? c.type : null,
        f = (b.currentItem || b.element).find(":data(droppable)").andSelf();
      g: for (var h = 0; h < d.length; h++) {
        if (d[h].options.disabled || b && !d[h].accept.call(d[h].element[0], b.currentItem || b.element)) continue;
        for (var i = 0; i < f.length; i++)
          if (f[i] == d[h].element[0]) {
            d[h].proportions.height = 0;
            continue g
          } d[h].visible = d[h].element.css("display") != "none";
        if (!d[h].visible) continue;
        e == "mousedown" && d[h]._activate.call(d[h], c), d[h].offset = d[h].element.offset(), d[h].proportions = {
          width: d[h].element[0].offsetWidth,
          height: d[h].element[0].offsetHeight
        }
      }
    },
    drop: function (b, c) {
      var d = !1;
      return a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () {
        if (!this.options) return;
        !this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, c))
      }), d
    },
    dragStart: function (b, c) {
      b.element.parents(":not(body,html)").bind("scroll.droppable", function () {
        b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
      })
    },
    drag: function (b, c) {
      b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () {
        if (this.options.disabled || this.greedyChild || !this.visible) return;
        var d = a.ui.intersect(b, this, this.options.tolerance),
          e = !d && this.isover == 1 ? "isout" : d && this.isover == 0 ? "isover" : null;
        if (!e) return;
        var f;
        if (this.options.greedy) {
          var g = this.element.parents(":data(droppable):eq(0)");
          g.length && (f = a.data(g[0], "droppable"), f.greedyChild = e == "isover" ? 1 : 0)
        }
        f && e == "isover" && (f.isover = 0, f.isout = 1, f._out.call(f, c)), this[e] = 1, this[e == "isout" ? "isover" : "isout"] = 0, this[e == "isover" ? "_over" : "_out"].call(this, c), f && e == "isout" && (f.isout = 0, f.isover = 1, f._over.call(f, c))
      })
    },
    dragStop: function (b, c) {
      b.element.parents(":not(body,html)").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
    }
  }
}(jQuery),
function (a, b) {
  a.widget("ui.resizable", a.ui.mouse, {
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 1e3
    },
    _create: function () {
      var b = this,
        c = this.options;
      this.element.addClass("ui-resizable"), a.extend(this, {
        _aspectRatio: !!c.aspectRatio,
        aspectRatio: c.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper: c.helper || c.ghost || c.animate ? c.helper || "ui-resizable-helper" : null
      }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
        position: this.element.css("position"),
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        top: this.element.css("top"),
        left: this.element.css("left")
      })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
        marginLeft: this.originalElement.css("marginLeft"),
        marginTop: this.originalElement.css("marginTop"),
        marginRight: this.originalElement.css("marginRight"),
        marginBottom: this.originalElement.css("marginBottom")
      }), this.originalElement.css({
        marginLeft: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0
      }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
        position: "static",
        zoom: 1,
        display: "block"
      })), this.originalElement.css({
        margin: this.originalElement.css("margin")
      }), this._proportionallyResize()), this.handles = c.handles || (a(".ui-resizable-handle", this.element).length ? {
        n: ".ui-resizable-n",
        e: ".ui-resizable-e",
        s: ".ui-resizable-s",
        w: ".ui-resizable-w",
        se: ".ui-resizable-se",
        sw: ".ui-resizable-sw",
        ne: ".ui-resizable-ne",
        nw: ".ui-resizable-nw"
      } : "e,s,se");
      if (this.handles.constructor == String) {
        this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
        var d = this.handles.split(",");
        this.handles = {};
        for (var e = 0; e < d.length; e++) {
          var f = a.trim(d[e]),
            g = "ui-resizable-" + f,
            h = a('<div class="ui-resizable-handle ' + g + '"></div>');
          h.css({
            zIndex: c.zIndex
          }), "se" == f && h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[f] = ".ui-resizable-" + f, this.element.append(h)
        }
      }
      this._renderAxis = function (b) {
        b = b || this.element;
        for (var c in this.handles) {
          this.handles[c].constructor == String && (this.handles[c] = a(this.handles[c], this.element).show());
          if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
            var d = a(this.handles[c], this.element),
              e = 0;
            e = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth();
            var f = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join("");
            b.css(f, e), this._proportionallyResize()
          }
          if (!a(this.handles[c]).length) continue
        }
      }, this._renderAxis(this.element), this._handles = a(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
        if (!b.resizing) {
          if (this.className) var a = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
          b.axis = a && a[1] ? a[1] : "se"
        }
      }), c.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").hover(function () {
        if (c.disabled) return;
        a(this).removeClass("ui-resizable-autohide"), b._handles.show()
      }, function () {
        if (c.disabled) return;
        b.resizing || (a(this).addClass("ui-resizable-autohide"), b._handles.hide())
      })), this._mouseInit()
    },
    destroy: function () {
      this._mouseDestroy();
      var b = function (b) {
        a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
      };
      if (this.elementIsWrapper) {
        b(this.element);
        var c = this.element;
        c.after(this.originalElement.css({
          position: c.css("position"),
          width: c.outerWidth(),
          height: c.outerHeight(),
          top: c.css("top"),
          left: c.css("left")
        })).remove()
      }
      return this.originalElement.css("resize", this.originalResizeStyle), b(this.originalElement), this
    },
    _mouseCapture: function (b) {
      var c = !1;
      for (var d in this.handles) a(this.handles[d])[0] == b.target && (c = !0);
      return !this.options.disabled && c
    },
    _mouseStart: function (b) {
      var d = this.options,
        e = this.element.position(),
        f = this.element;
      this.resizing = !0, this.documentScroll = {
        top: a(document).scrollTop(),
        left: a(document).scrollLeft()
      }, (f.is(".ui-draggable") || /absolute/.test(f.css("position"))) && f.css({
        position: "absolute",
        top: e.top,
        left: e.left
      }), this._renderProxy();
      var g = c(this.helper.css("left")),
        h = c(this.helper.css("top"));
      d.containment && (g += a(d.containment).scrollLeft() || 0, h += a(d.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
        left: g,
        top: h
      }, this.size = this._helper ? {
        width: f.outerWidth(),
        height: f.outerHeight()
      } : {
        width: f.width(),
        height: f.height()
      }, this.originalSize = this._helper ? {
        width: f.outerWidth(),
        height: f.outerHeight()
      } : {
        width: f.width(),
        height: f.height()
      }, this.originalPosition = {
        left: g,
        top: h
      }, this.sizeDiff = {
        width: f.outerWidth() - f.width(),
        height: f.outerHeight() - f.height()
      }, this.originalMousePosition = {
        left: b.pageX,
        top: b.pageY
      }, this.aspectRatio = typeof d.aspectRatio == "number" ? d.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
      var i = a(".ui-resizable-" + this.axis).css("cursor");
      return a("body").css("cursor", i == "auto" ? this.axis + "-resize" : i), f.addClass("ui-resizable-resizing"), this._propagate("start", b), !0
    },
    _mouseDrag: function (b) {
      var c = this.helper,
        d = this.options,
        e = {},
        f = this,
        g = this.originalMousePosition,
        h = this.axis,
        i = b.pageX - g.left || 0,
        j = b.pageY - g.top || 0,
        k = this._change[h];
      if (!k) return !1;
      var l = k.apply(this, [b, i, j]),
        m = a.browser.msie && a.browser.version < 7,
        n = this.sizeDiff;
      this._updateVirtualBoundaries(b.shiftKey);
      if (this._aspectRatio || b.shiftKey) l = this._updateRatio(l, b);
      return l = this._respectSize(l, b), this._propagate("resize", b), c.css({
        top: this.position.top + "px",
        left: this.position.left + "px",
        width: this.size.width + "px",
        height: this.size.height + "px"
      }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(l), this._trigger("resize", b, this.ui()), !1
    },
    _mouseStop: function (b) {
      this.resizing = !1;
      var c = this.options,
        d = this;
      if (this._helper) {
        var e = this._proportionallyResizeElements,
          f = e.length && /textarea/i.test(e[0].nodeName),
          g = f && a.ui.hasScroll(e[0], "left") ? 0 : d.sizeDiff.height,
          h = f ? 0 : d.sizeDiff.width,
          i = {
            width: d.helper.width() - h,
            height: d.helper.height() - g
          },
          j = parseInt(d.element.css("left"), 10) + (d.position.left - d.originalPosition.left) || null,
          k = parseInt(d.element.css("top"), 10) + (d.position.top - d.originalPosition.top) || null;
        c.animate || this.element.css(a.extend(i, {
          top: k,
          left: j
        })), d.helper.height(d.size.height), d.helper.width(d.size.width), this._helper && !c.animate && this._proportionallyResize()
      }
      return a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
    },
    _updateVirtualBoundaries: function (a) {
      var b = this.options,
        c, e, f, g, h;
      h = {
        minWidth: d(b.minWidth) ? b.minWidth : 0,
        maxWidth: d(b.maxWidth) ? b.maxWidth : Infinity,
        minHeight: d(b.minHeight) ? b.minHeight : 0,
        maxHeight: d(b.maxHeight) ? b.maxHeight : Infinity
      };
      if (this._aspectRatio || a) c = h.minHeight * this.aspectRatio, f = h.minWidth / this.aspectRatio, e = h.maxHeight * this.aspectRatio, g = h.maxWidth / this.aspectRatio, c > h.minWidth && (h.minWidth = c), f > h.minHeight && (h.minHeight = f), e < h.maxWidth && (h.maxWidth = e), g < h.maxHeight && (h.maxHeight = g);
      this._vBoundaries = h
    },
    _updateCache: function (a) {
      var b = this.options;
      this.offset = this.helper.offset(), d(a.left) && (this.position.left = a.left), d(a.top) && (this.position.top = a.top), d(a.height) && (this.size.height = a.height), d(a.width) && (this.size.width = a.width)
    },
    _updateRatio: function (a, b) {
      var c = this.options,
        e = this.position,
        f = this.size,
        g = this.axis;
      return d(a.height) ? a.width = a.height * this.aspectRatio : d(a.width) && (a.height = a.width / this.aspectRatio), g == "sw" && (a.left = e.left + (f.width - a.width), a.top = null), g == "nw" && (a.top = e.top + (f.height - a.height), a.left = e.left + (f.width - a.width)), a
    },
    _respectSize: function (a, b) {
      var c = this.helper,
        e = this._vBoundaries,
        f = this._aspectRatio || b.shiftKey,
        g = this.axis,
        h = d(a.width) && e.maxWidth && e.maxWidth < a.width,
        i = d(a.height) && e.maxHeight && e.maxHeight < a.height,
        j = d(a.width) && e.minWidth && e.minWidth > a.width,
        k = d(a.height) && e.minHeight && e.minHeight > a.height;
      j && (a.width = e.minWidth), k && (a.height = e.minHeight), h && (a.width = e.maxWidth), i && (a.height = e.maxHeight);
      var l = this.originalPosition.left + this.originalSize.width,
        m = this.position.top + this.size.height,
        n = /sw|nw|w/.test(g),
        o = /nw|ne|n/.test(g);
      j && n && (a.left = l - e.minWidth), h && n && (a.left = l - e.maxWidth), k && o && (a.top = m - e.minHeight), i && o && (a.top = m - e.maxHeight);
      var p = !a.width && !a.height;
      return p && !a.left && a.top ? a.top = null : p && !a.top && a.left && (a.left = null), a
    },
    _proportionallyResize: function () {
      var b = this.options;
      if (!this._proportionallyResizeElements.length) return;
      var c = this.helper || this.element;
      for (var d = 0; d < this._proportionallyResizeElements.length; d++) {
        var e = this._proportionallyResizeElements[d];
        if (!this.borderDif) {
          var f = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")],
            g = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")];
          this.borderDif = a.map(f, function (a, b) {
            var c = parseInt(a, 10) || 0,
              d = parseInt(g[b], 10) || 0;
            return c + d
          })
        }
        if (!a.browser.msie || !a(c).is(":hidden") && !a(c).parents(":hidden").length) e.css({
          height: c.height() - this.borderDif[0] - this.borderDif[2] || 0,
          width: c.width() - this.borderDif[1] - this.borderDif[3] || 0
        });
        else continue
      }
    },
    _renderProxy: function () {
      var b = this.element,
        c = this.options;
      this.elementOffset = b.offset();
      if (this._helper) {
        this.helper = this.helper || a('<div style="overflow:hidden;"></div>');
        var d = a.browser.msie && a.browser.version < 7,
          e = d ? 1 : 0,
          f = d ? 2 : -1;
        this.helper.addClass(this._helper).css({
          width: this.element.outerWidth() + f,
          height: this.element.outerHeight() + f,
          position: "absolute",
          left: this.elementOffset.left - e + "px",
          top: this.elementOffset.top - e + "px",
          zIndex: ++c.zIndex
        }), this.helper.appendTo("body").disableSelection()
      } else this.helper = this.element
    },
    _change: {
      e: function (a, b, c) {
        return {
          width: this.originalSize.width + b
        }
      },
      w: function (a, b, c) {
        var d = this.options,
          e = this.originalSize,
          f = this.originalPosition;
        return {
          left: f.left + b,
          width: e.width - b
        }
      },
      n: function (a, b, c) {
        var d = this.options,
          e = this.originalSize,
          f = this.originalPosition;
        return {
          top: f.top + c,
          height: e.height - c
        }
      },
      s: function (a, b, c) {
        return {
          height: this.originalSize.height + c
        }
      },
      se: function (b, c, d) {
        return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
      },
      sw: function (b, c, d) {
        return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
      },
      ne: function (b, c, d) {
        return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
      },
      nw: function (b, c, d) {
        return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
      }
    },
    _propagate: function (b, c) {
      a.ui.plugin.call(this, b, [c, this.ui()]), b != "resize" && this._trigger(b, c, this.ui())
    },
    plugins: {},
    ui: function () {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      }
    }
  }), a.extend(a.ui.resizable, {
    version: "1.8.22"
  }), a.ui.plugin.add("resizable", "alsoResize", {
    start: function (b, c) {
      var d = a(this).data("resizable"),
        e = d.options,
        f = function (b) {
          a(b).each(function () {
            var b = a(this);
            b.data("resizable-alsoresize", {
              width: parseInt(b.width(), 10),
              height: parseInt(b.height(), 10),
              left: parseInt(b.css("left"), 10),
              top: parseInt(b.css("top"), 10)
            })
          })
        };
      typeof e.alsoResize == "object" && !e.alsoResize.parentNode ? e.alsoResize.length ? (e.alsoResize = e.alsoResize[0], f(e.alsoResize)) : a.each(e.alsoResize, function (a) {
        f(a)
      }) : f(e.alsoResize)
    },
    resize: function (b, c) {
      var d = a(this).data("resizable"),
        e = d.options,
        f = d.originalSize,
        g = d.originalPosition,
        h = {
          height: d.size.height - f.height || 0,
          width: d.size.width - f.width || 0,
          top: d.position.top - g.top || 0,
          left: d.position.left - g.left || 0
        },
        i = function (b, d) {
          a(b).each(function () {
            var b = a(this),
              e = a(this).data("resizable-alsoresize"),
              f = {},
              g = d && d.length ? d : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
            a.each(g, function (a, b) {
              var c = (e[b] || 0) + (h[b] || 0);
              c && c >= 0 && (f[b] = c || null)
            }), b.css(f)
          })
        };
      typeof e.alsoResize == "object" && !e.alsoResize.nodeType ? a.each(e.alsoResize, function (a, b) {
        i(a, b)
      }) : i(e.alsoResize)
    },
    stop: function (b, c) {
      a(this).removeData("resizable-alsoresize")
    }
  }), a.ui.plugin.add("resizable", "animate", {
    stop: function (b, c) {
      var d = a(this).data("resizable"),
        e = d.options,
        f = d._proportionallyResizeElements,
        g = f.length && /textarea/i.test(f[0].nodeName),
        h = g && a.ui.hasScroll(f[0], "left") ? 0 : d.sizeDiff.height,
        i = g ? 0 : d.sizeDiff.width,
        j = {
          width: d.size.width - i,
          height: d.size.height - h
        },
        k = parseInt(d.element.css("left"), 10) + (d.position.left - d.originalPosition.left) || null,
        l = parseInt(d.element.css("top"), 10) + (d.position.top - d.originalPosition.top) || null;
      d.element.animate(a.extend(j, l && k ? {
        top: l,
        left: k
      } : {}), {
        duration: e.animateDuration,
        easing: e.animateEasing,
        step: function () {
          var c = {
            width: parseInt(d.element.css("width"), 10),
            height: parseInt(d.element.css("height"), 10),
            top: parseInt(d.element.css("top"), 10),
            left: parseInt(d.element.css("left"), 10)
          };
          f && f.length && a(f[0]).css({
            width: c.width,
            height: c.height
          }), d._updateCache(c), d._propagate("resize", b)
        }
      })
    }
  }), a.ui.plugin.add("resizable", "containment", {
    start: function (b, d) {
      var e = a(this).data("resizable"),
        f = e.options,
        g = e.element,
        h = f.containment,
        i = h instanceof a ? h.get(0) : /parent/.test(h) ? g.parent().get(0) : h;
      if (!i) return;
      e.containerElement = a(i);
      if (/document/.test(h) || h == document) e.containerOffset = {
        left: 0,
        top: 0
      }, e.containerPosition = {
        left: 0,
        top: 0
      }, e.parentData = {
        element: a(document),
        left: 0,
        top: 0,
        width: a(document).width(),
        height: a(document).height() || document.body.parentNode.scrollHeight
      };
      else {
        var j = a(i),
          k = [];
        a(["Top", "Right", "Left", "Bottom"]).each(function (a, b) {
          k[a] = c(j.css("padding" + b))
        }), e.containerOffset = j.offset(), e.containerPosition = j.position(), e.containerSize = {
          height: j.innerHeight() - k[3],
          width: j.innerWidth() - k[1]
        };
        var l = e.containerOffset,
          m = e.containerSize.height,
          n = e.containerSize.width,
          o = a.ui.hasScroll(i, "left") ? i.scrollWidth : n,
          p = a.ui.hasScroll(i) ? i.scrollHeight : m;
        e.parentData = {
          element: i,
          left: l.left,
          top: l.top,
          width: o,
          height: p
        }
      }
    },
    resize: function (b, c) {
      var d = a(this).data("resizable"),
        e = d.options,
        f = d.containerSize,
        g = d.containerOffset,
        h = d.size,
        i = d.position,
        j = d._aspectRatio || b.shiftKey,
        k = {
          top: 0,
          left: 0
        },
        l = d.containerElement;
      l[0] != document && /static/.test(l.css("position")) && (k = g), i.left < (d._helper ? g.left : 0) && (d.size.width = d.size.width + (d._helper ? d.position.left - g.left : d.position.left - k.left), j && (d.size.height = d.size.width / d.aspectRatio), d.position.left = e.helper ? g.left : 0), i.top < (d._helper ? g.top : 0) && (d.size.height = d.size.height + (d._helper ? d.position.top - g.top : d.position.top), j && (d.size.width = d.size.height * d.aspectRatio), d.position.top = d._helper ? g.top : 0), d.offset.left = d.parentData.left + d.position.left, d.offset.top = d.parentData.top + d.position.top;
      var m = Math.abs((d._helper ? d.offset.left - k.left : d.offset.left - k.left) + d.sizeDiff.width),
        n = Math.abs((d._helper ? d.offset.top - k.top : d.offset.top - g.top) + d.sizeDiff.height),
        o = d.containerElement.get(0) == d.element.parent().get(0),
        p = /relative|absolute/.test(d.containerElement.css("position"));
      o && p && (m -= d.parentData.left), m + d.size.width >= d.parentData.width && (d.size.width = d.parentData.width - m, j && (d.size.height = d.size.width / d.aspectRatio)), n + d.size.height >= d.parentData.height && (d.size.height = d.parentData.height - n, j && (d.size.width = d.size.height * d.aspectRatio))
    },
    stop: function (b, c) {
      var d = a(this).data("resizable"),
        e = d.options,
        f = d.position,
        g = d.containerOffset,
        h = d.containerPosition,
        i = d.containerElement,
        j = a(d.helper),
        k = j.offset(),
        l = j.outerWidth() - d.sizeDiff.width,
        m = j.outerHeight() - d.sizeDiff.height;
      d._helper && !e.animate && /relative/.test(i.css("position")) && a(this).css({
        left: k.left - h.left - g.left,
        width: l,
        height: m
      }), d._helper && !e.animate && /static/.test(i.css("position")) && a(this).css({
        left: k.left - h.left - g.left,
        width: l,
        height: m
      })
    }
  }), a.ui.plugin.add("resizable", "ghost", {
    start: function (b, c) {
      var d = a(this).data("resizable"),
        e = d.options,
        f = d.size;
      d.ghost = d.originalElement.clone(), d.ghost.css({
        opacity: .25,
        display: "block",
        position: "relative",
        height: f.height,
        width: f.width,
        margin: 0,
        left: 0,
        top: 0
      }).addClass("ui-resizable-ghost").addClass(typeof e.ghost == "string" ? e.ghost : ""), d.ghost.appendTo(d.helper)
    },
    resize: function (b, c) {
      var d = a(this).data("resizable"),
        e = d.options;
      d.ghost && d.ghost.css({
        position: "relative",
        height: d.size.height,
        width: d.size.width
      })
    },
    stop: function (b, c) {
      var d = a(this).data("resizable"),
        e = d.options;
      d.ghost && d.helper && d.helper.get(0).removeChild(d.ghost.get(0))
    }
  }), a.ui.plugin.add("resizable", "grid", {
    resize: function (b, c) {
      var d = a(this).data("resizable"),
        e = d.options,
        f = d.size,
        g = d.originalSize,
        h = d.originalPosition,
        i = d.axis,
        j = e._aspectRatio || b.shiftKey;
      e.grid = typeof e.grid == "number" ? [e.grid, e.grid] : e.grid;
      var k = Math.round((f.width - g.width) / (e.grid[0] || 1)) * (e.grid[0] || 1),
        l = Math.round((f.height - g.height) / (e.grid[1] || 1)) * (e.grid[1] || 1);
      /^(se|s|e)$/.test(i) ? (d.size.width = g.width + k, d.size.height = g.height + l) : /^(ne)$/.test(i) ? (d.size.width = g.width + k, d.size.height = g.height + l, d.position.top = h.top - l) : /^(sw)$/.test(i) ? (d.size.width = g.width + k, d.size.height = g.height + l, d.position.left = h.left - k) : (d.size.width = g.width + k, d.size.height = g.height + l, d.position.top = h.top - l, d.position.left = h.left - k)
    }
  });
  var c = function (a) {
      return parseInt(a, 10) || 0
    },
    d = function (a) {
      return !isNaN(parseInt(a, 10))
    }
}(jQuery),
function (a, b) {
  a.widget("ui.selectable", a.ui.mouse, {
    options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch"
    },
    _create: function () {
      var b = this;
      this.element.addClass("ui-selectable"), this.dragged = !1;
      var c;
      this.refresh = function () {
        c = a(b.options.filter, b.element[0]), c.addClass("ui-selectee"), c.each(function () {
          var b = a(this),
            c = b.offset();
          a.data(this, "selectable-item", {
            element: this,
            $element: b,
            left: c.left,
            top: c.top,
            right: c.left + b.outerWidth(),
            bottom: c.top + b.outerHeight(),
            startselected: !1,
            selected: b.hasClass("ui-selected"),
            selecting: b.hasClass("ui-selecting"),
            unselecting: b.hasClass("ui-unselecting")
          })
        })
      }, this.refresh(), this.selectees = c.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>")
    },
    destroy: function () {
      return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this
    },
    _mouseStart: function (b) {
      var c = this;
      this.opos = [b.pageX, b.pageY];
      if (this.options.disabled) return;
      var d = this.options;
      this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({
        left: b.clientX,
        top: b.clientY,
        width: 0,
        height: 0
      }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
        var d = a.data(this, "selectable-item");
        d.startselected = !0, !b.metaKey && !b.ctrlKey && (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {
          unselecting: d.element
        }))
      }), a(b.target).parents().andSelf().each(function () {
        var d = a.data(this, "selectable-item");
        if (d) {
          var e = !b.metaKey && !b.ctrlKey || !d.$element.hasClass("ui-selected");
          return d.$element.removeClass(e ? "ui-unselecting" : "ui-selected").addClass(e ? "ui-selecting" : "ui-unselecting"), d.unselecting = !e, d.selecting = e, d.selected = e, e ? c._trigger("selecting", b, {
            selecting: d.element
          }) : c._trigger("unselecting", b, {
            unselecting: d.element
          }), !1
        }
      })
    },
    _mouseDrag: function (b) {
      var c = this;
      this.dragged = !0;
      if (this.options.disabled) return;
      var d = this.options,
        e = this.opos[0],
        f = this.opos[1],
        g = b.pageX,
        h = b.pageY;
      if (e > g) {
        var i = g;
        g = e, e = i
      }
      if (f > h) {
        var i = h;
        h = f, f = i
      }
      return this.helper.css({
        left: e,
        top: f,
        width: g - e,
        height: h - f
      }), this.selectees.each(function () {
        var i = a.data(this, "selectable-item");
        if (!i || i.element == c.element[0]) return;
        var j = !1;
        d.tolerance == "touch" ? j = !(i.left > g || i.right < e || i.top > h || i.bottom < f) : d.tolerance == "fit" && (j = i.left > e && i.right < g && i.top > f && i.bottom < h), j ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, c._trigger("selecting", b, {
          selecting: i.element
        }))) : (i.selecting && ((b.metaKey || b.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), c._trigger("unselecting", b, {
          unselecting: i.element
        }))), i.selected && !b.metaKey && !b.ctrlKey && !i.startselected && (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, c._trigger("unselecting", b, {
          unselecting: i.element
        })))
      }), !1
    },
    _mouseStop: function (b) {
      var c = this;
      this.dragged = !1;
      var d = this.options;
      return a(".ui-unselecting", this.element[0]).each(function () {
        var d = a.data(this, "selectable-item");
        d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {
          unselected: d.element
        })
      }), a(".ui-selecting", this.element[0]).each(function () {
        var d = a.data(this, "selectable-item");
        d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {
          selected: d.element
        })
      }), this._trigger("stop", b), this.helper.remove(), !1
    }
  }), a.extend(a.ui.selectable, {
    version: "1.8.22"
  })
}(jQuery),
function (a, b) {
  a.widget("ui.sortable", a.ui.mouse, {
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3
    },
    _create: function () {
      var a = this.options;
      this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? a.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
    },
    destroy: function () {
      a.Widget.prototype.destroy.call(this), this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
      for (var b = this.items.length - 1; b >= 0; b--) this.items[b].item.removeData(this.widgetName + "-item");
      return this
    },
    _setOption: function (b, c) {
      b === "disabled" ? (this.options[b] = c, this.widget()[c ? "addClass" : "removeClass"]("ui-sortable-disabled")) : a.Widget.prototype._setOption.apply(this, arguments)
    },
    _mouseCapture: function (b, c) {
      var d = this;
      if (this.reverting) return !1;
      if (this.options.disabled || this.options.type == "static") return !1;
      this._refreshItems(b);
      var e = null,
        f = this,
        g = a(b.target).parents().each(function () {
          if (a.data(this, d.widgetName + "-item") == f) return e = a(this), !1
        });
      a.data(b.target, d.widgetName + "-item") == f && (e = a(b.target));
      if (!e) return !1;
      if (this.options.handle && !c) {
        var h = !1;
        a(this.options.handle, e).find("*").andSelf().each(function () {
          this == b.target && (h = !0)
        });
        if (!h) return !1
      }
      return this.currentItem = e, this._removeCurrentsFromItems(), !0
    },
    _mouseStart: function (b, c, d) {
      var e = this.options,
        f = this;
      this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, a.extend(this.offset, {
        click: {
          left: b.pageX - this.offset.left,
          top: b.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0]
      }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), e.containment && this._setContainment(), e.cursor && (a("body").css("cursor") && (this._storedCursor = a("body").css("cursor")), a("body").css("cursor", e.cursor)), e.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", e.opacity)), e.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", e.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
      if (!d)
        for (var g = this.containers.length - 1; g >= 0; g--) this.containers[g]._trigger("activate", b, f._uiHash(this));
      return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
    },
    _mouseDrag: function (b) {
      this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
      if (this.options.scroll) {
        var c = this.options,
          d = !1;
        this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < c.scrollSensitivity ? this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + c.scrollSpeed : b.pageY - this.overflowOffset.top < c.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - c.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < c.scrollSensitivity ? this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + c.scrollSpeed : b.pageX - this.overflowOffset.left < c.scrollSensitivity && (this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft - c.scrollSpeed)) : (b.pageY - a(document).scrollTop() < c.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - c.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < c.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + c.scrollSpeed)), b.pageX - a(document).scrollLeft() < c.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - c.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < c.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() + c.scrollSpeed))), d !== !1 && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)
      }
      this.positionAbs = this._convertPositionTo("absolute");
      if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
      if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
      for (var e = this.items.length - 1; e >= 0; e--) {
        var f = this.items[e],
          g = f.item[0],
          h = this._intersectsWithPointer(f);
        if (!h) continue;
        if (g != this.currentItem[0] && this.placeholder[h == 1 ? "next" : "prev"]()[0] != g && !a.ui.contains(this.placeholder[0], g) && (this.options.type == "semi-dynamic" ? !a.ui.contains(this.element[0], g) : !0)) {
          this.direction = h == 1 ? "down" : "up";
          if (this.options.tolerance == "pointer" || this._intersectsWithSides(f)) this._rearrange(b, f);
          else break;
          this._trigger("change", b, this._uiHash());
          break
        }
      }
      return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
    },
    _mouseStop: function (b, c) {
      if (!b) return;
      a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b);
      if (this.options.revert) {
        var d = this,
          e = d.placeholder.offset();
        d.reverting = !0, a(this.helper).animate({
          left: e.left - this.offset.parent.left - d.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
          top: e.top - this.offset.parent.top - d.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
        }, parseInt(this.options.revert, 10) || 500, function () {
          d._clear(b)
        })
      } else this._clear(b, c);
      return !1
    },
    cancel: function () {
      var b = this;
      if (this.dragging) {
        this._mouseUp({
          target: null
        }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
        for (var c = this.containers.length - 1; c >= 0; c--) this.containers[c]._trigger("deactivate", null, b._uiHash(this)), this.containers[c].containerCache.over && (this.containers[c]._trigger("out", null, b._uiHash(this)), this.containers[c].containerCache.over = 0)
      }
      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
    },
    serialize: function (b) {
      var c = this._getItemsAsjQuery(b && b.connected),
        d = [];
      return b = b || {}, a(c).each(function () {
        var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[-=_](.+)/);
        c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
      }), !d.length && b.key && d.push(b.key + "="), d.join("&")
    },
    toArray: function (b) {
      var c = this._getItemsAsjQuery(b && b.connected),
        d = [];
      return b = b || {}, c.each(function () {
        d.push(a(b.item || this).attr(b.attribute || "id") || "")
      }), d
    },
    _intersectsWith: function (a) {
      var b = this.positionAbs.left,
        c = b + this.helperProportions.width,
        d = this.positionAbs.top,
        e = d + this.helperProportions.height,
        f = a.left,
        g = f + a.width,
        h = a.top,
        i = h + a.height,
        j = this.offset.click.top,
        k = this.offset.click.left,
        l = d + j > h && d + j < i && b + k > f && b + k < g;
      return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? l : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i
    },
    _intersectsWithPointer: function (b) {
      var c = this.options.axis === "x" || a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top, b.height),
        d = this.options.axis === "y" || a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left, b.width),
        e = c && d,
        f = this._getDragVerticalDirection(),
        g = this._getDragHorizontalDirection();
      return e ? this.floating ? g && g == "right" || f == "down" ? 2 : 1 : f && (f == "down" ? 2 : 1) : !1
    },
    _intersectsWithSides: function (b) {
      var c = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top + b.height / 2, b.height),
        d = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left + b.width / 2, b.width),
        e = this._getDragVerticalDirection(),
        f = this._getDragHorizontalDirection();
      return this.floating && f ? f == "right" && d || f == "left" && !d : e && (e == "down" && c || e == "up" && !c)
    },
    _getDragVerticalDirection: function () {
      var a = this.positionAbs.top - this.lastPositionAbs.top;
      return a != 0 && (a > 0 ? "down" : "up")
    },
    _getDragHorizontalDirection: function () {
      var a = this.positionAbs.left - this.lastPositionAbs.left;
      return a != 0 && (a > 0 ? "right" : "left")
    },
    refresh: function (a) {
      return this._refreshItems(a), this.refreshPositions(), this
    },
    _connectWith: function () {
      var a = this.options;
      return a.connectWith.constructor == String ? [a.connectWith] : a.connectWith
    },
    _getItemsAsjQuery: function (b) {
      var c = this,
        d = [],
        e = [],
        f = this._connectWith();
      if (f && b)
        for (var g = f.length - 1; g >= 0; g--) {
          var h = a(f[g]);
          for (var i = h.length - 1; i >= 0; i--) {
            var j = a.data(h[i], this.widgetName);
            j && j != this && !j.options.disabled && e.push([a.isFunction(j.options.items) ? j.options.items.call(j.element) : a(j.options.items, j.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), j])
          }
        }
      e.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
      for (var g = e.length - 1; g >= 0; g--) e[g][0].each(function () {
        d.push(this)
      });
      return a(d)
    },
    _removeCurrentsFromItems: function () {
      var a = this.currentItem.find(":data(" + this.widgetName + "-item)");
      for (var b = 0; b < this.items.length; b++)
        for (var c = 0; c < a.length; c++) a[c] == this.items[b].item[0] && this.items.splice(b, 1)
    },
    _refreshItems: function (b) {
      this.items = [], this.containers = [this];
      var c = this.items,
        d = this,
        e = [
          [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
            item: this.currentItem
          }) : a(this.options.items, this.element), this]
        ],
        f = this._connectWith();
      if (f && this.ready)
        for (var g = f.length - 1; g >= 0; g--) {
          var h = a(f[g]);
          for (var i = h.length - 1; i >= 0; i--) {
            var j = a.data(h[i], this.widgetName);
            j && j != this && !j.options.disabled && (e.push([a.isFunction(j.options.items) ? j.options.items.call(j.element[0], b, {
              item: this.currentItem
            }) : a(j.options.items, j.element), j]), this.containers.push(j))
          }
        }
      for (var g = e.length - 1; g >= 0; g--) {
        var k = e[g][1],
          l = e[g][0];
        for (var i = 0, m = l.length; i < m; i++) {
          var n = a(l[i]);
          n.data(this.widgetName + "-item", k), c.push({
            item: n,
            instance: k,
            width: 0,
            height: 0,
            left: 0,
            top: 0
          })
        }
      }
    },
    refreshPositions: function (b) {
      this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      for (var c = this.items.length - 1; c >= 0; c--) {
        var d = this.items[c];
        if (d.instance != this.currentContainer && this.currentContainer && d.item[0] != this.currentItem[0]) continue;
        var e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item;
        b || (d.width = e.outerWidth(), d.height = e.outerHeight());
        var f = e.offset();
        d.left = f.left, d.top = f.top
      }
      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
      else
        for (var c = this.containers.length - 1; c >= 0; c--) {
          var f = this.containers[c].element.offset();
          this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight()
        }
      return this
    },
    _createPlaceholder: function (b) {
      var c = b || this,
        d = c.options;
      if (!d.placeholder || d.placeholder.constructor == String) {
        var e = d.placeholder;
        d.placeholder = {
          element: function () {
            var b = a(document.createElement(c.currentItem[0].nodeName)).addClass(e || c.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
            return e || (b.style.visibility = "hidden"), b
          },
          update: function (a, b) {
            if (e && !d.forcePlaceholderSize) return;
            b.height() || b.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") || 0, 10)), b.width() || b.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") || 0, 10))
          }
        }
      }
      c.placeholder = a(d.placeholder.element.call(c.element, c.currentItem)), c.currentItem.after(c.placeholder), d.placeholder.update(c, c.placeholder)
    },
    _contactContainers: function (b) {
      var c = null,
        d = null;
      for (var e = this.containers.length - 1; e >= 0; e--) {
        if (a.ui.contains(this.currentItem[0], this.containers[e].element[0])) continue;
        if (this._intersectsWith(this.containers[e].containerCache)) {
          if (c && a.ui.contains(this.containers[e].element[0], c.element[0])) continue;
          c = this.containers[e], d = e
        } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", b, this._uiHash(this)), this.containers[e].containerCache.over = 0)
      }
      if (!c) return;
      if (this.containers.length === 1) this.containers[d]._trigger("over", b, this._uiHash(this)), this.containers[d].containerCache.over = 1;
      else if (this.currentContainer != this.containers[d]) {
        var f = 1e4,
          g = null,
          h = this.positionAbs[this.containers[d].floating ? "left" : "top"];
        for (var i = this.items.length - 1; i >= 0; i--) {
          if (!a.ui.contains(this.containers[d].element[0], this.items[i].item[0])) continue;
          var j = this.containers[d].floating ? this.items[i].item.offset().left : this.items[i].item.offset().top;
          Math.abs(j - h) < f && (f = Math.abs(j - h), g = this.items[i], this.direction = j - h > 0 ? "down" : "up")
        }
        if (!g && !this.options.dropOnEmpty) return;
        this.currentContainer = this.containers[d], g ? this._rearrange(b, g, null, !0) : this._rearrange(b, null, this.containers[d].element, !0), this._trigger("change", b, this._uiHash()), this.containers[d]._trigger("change", b, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", b, this._uiHash(this)), this.containers[d].containerCache.over = 1
      }
    },
    _createHelper: function (b) {
      var c = this.options,
        d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : c.helper == "clone" ? this.currentItem.clone() : this.currentItem;
      return d.parents("body").length || a(c.appendTo != "parent" ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] == this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css("position"),
        top: this.currentItem.css("top"),
        left: this.currentItem.css("left")
      }), (d[0].style.width == "" || c.forceHelperSize) && d.width(this.currentItem.width()), (d[0].style.height == "" || c.forceHelperSize) && d.height(this.currentItem.height()), d
    },
    _adjustOffsetFromHelper: function (b) {
      typeof b == "string" && (b = b.split(" ")), a.isArray(b) && (b = {
        left: +b[0],
        top: +b[1] || 0
      }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent();
      var b = this.offsetParent.offset();
      this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop());
      if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) b = {
        top: 0,
        left: 0
      };
      return {
        top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function () {
      if (this.cssPosition == "relative") {
        var a = this.currentItem.position();
        return {
          top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        }
      }
      return {
        top: 0,
        left: 0
      }
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      }
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function () {
      var b = this.options;
      b.containment == "parent" && (b.containment = this.helper[0].parentNode);
      if (b.containment == "document" || b.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a(b.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a(b.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
      if (!/^(document|window|parent)$/.test(b.containment)) {
        var c = a(b.containment)[0],
          d = a(b.containment).offset(),
          e = a(c).css("overflow") != "hidden";
        this.containment = [d.left + (parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"), 10) || 0) - this.margins.left, d.top + (parseInt(a(c).css("borderTopWidth"), 10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0) - this.margins.top, d.left + (e ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(a(c).css("borderLeftWidth"), 10) || 0) - (parseInt(a(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, d.top + (e ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(a(c).css("borderTopWidth"), 10) || 0) - (parseInt(a(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
      }
    },
    _convertPositionTo: function (b, c) {
      c || (c = this.position);
      var d = b == "absolute" ? 1 : -1,
        e = this.options,
        f = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
        g = /(html|body)/i.test(f[0].tagName);
      return {
        top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * d),
        left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * d)
      }
    },
    _generatePosition: function (b) {
      var c = this.options,
        d = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
        e = /(html|body)/i.test(d[0].tagName);
      this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
      var f = b.pageX,
        g = b.pageY;
      if (this.originalPosition) {
        this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top));
        if (c.grid) {
          var h = this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1];
          g = this.containment ? h - this.offset.click.top < this.containment[1] || h - this.offset.click.top > this.containment[3] ? h - this.offset.click.top < this.containment[1] ? h + c.grid[1] : h - c.grid[1] : h : h;
          var i = this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0];
          f = this.containment ? i - this.offset.click.left < this.containment[0] || i - this.offset.click.left > this.containment[2] ? i - this.offset.click.left < this.containment[0] ? i + c.grid[0] : i - c.grid[0] : i : i
        }
      }
      return {
        top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()),
        left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft())
      }
    },
    _rearrange: function (a, b, c, d) {
      c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var e = this,
        f = this.counter;
      window.setTimeout(function () {
        f == e.counter && e.refreshPositions(!d)
      }, 0)
    },
    _clear: function (b, c) {
      this.reverting = !1;
      var d = [],
        e = this;
      !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
      if (this.helper[0] == this.currentItem[0]) {
        for (var f in this._storedCSS)
          if (this._storedCSS[f] == "auto" || this._storedCSS[f] == "static") this._storedCSS[f] = "";
        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
      } else this.currentItem.show();
      this.fromOutside && !c && d.push(function (a) {
        this._trigger("receive", a, this._uiHash(this.fromOutside))
      }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !c && d.push(function (a) {
        this._trigger("update", a, this._uiHash())
      });
      if (!a.ui.contains(this.element[0], this.currentItem[0])) {
        c || d.push(function (a) {
          this._trigger("remove", a, this._uiHash())
        });
        for (var f = this.containers.length - 1; f >= 0; f--) a.ui.contains(this.containers[f].element[0], this.currentItem[0]) && !c && (d.push(function (a) {
          return function (b) {
            a._trigger("receive", b, this._uiHash(this))
          }
        }.call(this, this.containers[f])), d.push(function (a) {
          return function (b) {
            a._trigger("update", b, this._uiHash(this))
          }
        }.call(this, this.containers[f])))
      }
      for (var f = this.containers.length - 1; f >= 0; f--) c || d.push(function (a) {
        return function (b) {
          a._trigger("deactivate", b, this._uiHash(this))
        }
      }.call(this, this.containers[f])), this.containers[f].containerCache.over && (d.push(function (a) {
        return function (b) {
          a._trigger("out", b, this._uiHash(this))
        }
      }.call(this, this.containers[f])), this.containers[f].containerCache.over = 0);
      this._storedCursor && a("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
      if (this.cancelHelperRemoval) {
        if (!c) {
          this._trigger("beforeStop", b, this._uiHash());
          for (var f = 0; f < d.length; f++) d[f].call(this, b);
          this._trigger("stop", b, this._uiHash())
        }
        return this.fromOutside = !1, !1
      }
      c || this._trigger("beforeStop", b, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
      if (!c) {
        for (var f = 0; f < d.length; f++) d[f].call(this, b);
        this._trigger("stop", b, this._uiHash())
      }
      return this.fromOutside = !1, !0
    },
    _trigger: function () {
      a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
    },
    _uiHash: function (b) {
      var c = b || this;
      return {
        helper: c.helper,
        placeholder: c.placeholder || a([]),
        position: c.position,
        originalPosition: c.originalPosition,
        offset: c.positionAbs,
        item: c.currentItem,
        sender: b ? b.element : null
      }
    }
  }), a.extend(a.ui.sortable, {
    version: "1.8.22"
  })
}(jQuery), jQuery.effects || function (a, b) {
    function c(b) {
      var c;
      return b && b.constructor == Array && b.length == 3 ? b : (c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)) ? [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3], 10)] : (c = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b)) ? [parseFloat(c[1]) * 2.55, parseFloat(c[2]) * 2.55, parseFloat(c[3]) * 2.55] : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)) ? [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)] : (c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b)) ? [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16)] : (c = /rgba\(0, 0, 0, 0\)/.exec(b)) ? e.transparent : e[a.trim(b).toLowerCase()]
    }

    function d(b, d) {
      var e;
      do {
        e = (a.curCSS || a.css)(b, d);
        if (e != "" && e != "transparent" || a.nodeName(b, "body")) break;
        d = "backgroundColor"
      } while (b = b.parentNode);
      return c(e)
    }

    function h() {
      var a = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
        b = {},
        c, d;
      if (a && a.length && a[0] && a[a[0]]) {
        var e = a.length;
        while (e--) c = a[e], typeof a[c] == "string" && (d = c.replace(/\-(\w)/g, function (a, b) {
          return b.toUpperCase()
        }), b[d] = a[c])
      } else
        for (c in a) typeof a[c] == "string" && (b[c] = a[c]);
      return b
    }

    function i(b) {
      var c, d;
      for (c in b) d = b[c], (d == null || a.isFunction(d) || c in g || /scrollbar/.test(c) || !/color/i.test(c) && isNaN(parseFloat(d))) && delete b[c];
      return b
    }

    function j(a, b) {
      var c = {
          _: 0
        },
        d;
      for (d in b) a[d] != b[d] && (c[d] = b[d]);
      return c
    }

    function k(b, c, d, e) {
      typeof b == "object" && (e = c, d = null, c = b, b = c.effect), a.isFunction(c) && (e = c, d = null, c = {});
      if (typeof c == "number" || a.fx.speeds[c]) e = d, d = c, c = {};
      return a.isFunction(d) && (e = d, d = null), c = c || {}, d = d || c.duration, d = a.fx.off ? 0 : typeof d == "number" ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, e = e || c.complete, [b, c, d, e]
    }

    function l(b) {
      return !b || typeof b == "number" || a.fx.speeds[b] ? !0 : typeof b == "string" && !a.effects[b] ? !0 : !1
    }
    a.effects = {}, a.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function (b, e) {
      a.fx.step[e] = function (a) {
        a.colorInit || (a.start = d(a.elem, e), a.end = c(a.end), a.colorInit = !0), a.elem.style[e] = "rgb(" + Math.max(Math.min(parseInt(a.pos * (a.end[0] - a.start[0]) + a.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[1] - a.start[1]) + a.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[2] - a.start[2]) + a.start[2], 10), 255), 0) + ")"
      }
    });
    var e = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
      },
      f = ["add", "remove", "toggle"],
      g = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1
      };
    a.effects.animateClass = function (b, c, d, e) {
      return a.isFunction(d) && (e = d, d = null), this.queue(function () {
        var g = a(this),
          k = g.attr("style") || " ",
          l = i(h.call(this)),
          m, n = g.attr("class") || "";
        a.each(f, function (a, c) {
          b[c] && g[c + "Class"](b[c])
        }), m = i(h.call(this)), g.attr("class", n), g.animate(j(l, m), {
          queue: !1,
          duration: c,
          easing: d,
          complete: function () {
            a.each(f, function (a, c) {
              b[c] && g[c + "Class"](b[c])
            }), typeof g.attr("style") == "object" ? (g.attr("style").cssText = "", g.attr("style").cssText = k) : g.attr("style", k), e && e.apply(this, arguments), a.dequeue(this)
          }
        })
      })
    }, a.fn.extend({
      _addClass: a.fn.addClass,
      addClass: function (b, c, d, e) {
        return c ? a.effects.animateClass.apply(this, [{
          add: b
        }, c, d, e]) : this._addClass(b)
      },
      _removeClass: a.fn.removeClass,
      removeClass: function (b, c, d, e) {
        return c ? a.effects.animateClass.apply(this, [{
          remove: b
        }, c, d, e]) : this._removeClass(b)
      },
      _toggleClass: a.fn.toggleClass,
      toggleClass: function (c, d, e, f, g) {
        return typeof d == "boolean" || d === b ? e ? a.effects.animateClass.apply(this, [d ? {
          add: c
        } : {
          remove: c
        }, e, f, g]) : this._toggleClass(c, d) : a.effects.animateClass.apply(this, [{
          toggle: c
        }, d, e, f])
      },
      switchClass: function (b, c, d, e, f) {
        return a.effects.animateClass.apply(this, [{
          add: c,
          remove: b
        }, d, e, f])
      }
    }), a.extend(a.effects, {
      version: "1.8.22",
      save: function (a, b) {
        for (var c = 0; c < b.length; c++) b[c] !== null && a.data("ec.storage." + b[c], a[0].style[b[c]])
      },
      restore: function (a, b) {
        for (var c = 0; c < b.length; c++) b[c] !== null && a.css(b[c], a.data("ec.storage." + b[c]))
      },
      setMode: function (a, b) {
        return b == "toggle" && (b = a.is(":hidden") ? "show" : "hide"), b
      },
      getBaseline: function (a, b) {
        var c, d;
        switch (a[0]) {
          case "top":
            c = 0;
            break;
          case "middle":
            c = .5;
            break;
          case "bottom":
            c = 1;
            break;
          default:
            c = a[0] / b.height
        }
        switch (a[1]) {
          case "left":
            d = 0;
            break;
          case "center":
            d = .5;
            break;
          case "right":
            d = 1;
            break;
          default:
            d = a[1] / b.width
        }
        return {
          x: d,
          y: c
        }
      },
      createWrapper: function (b) {
        if (b.parent().is(".ui-effects-wrapper")) return b.parent();
        var c = {
            width: b.outerWidth(!0),
            height: b.outerHeight(!0),
            "float": b.css("float")
          },
          d = a("<div></div>").addClass("ui-effects-wrapper").css({
            fontSize: "100%",
            background: "transparent",
            border: "none",
            margin: 0,
            padding: 0
          }),
          e = document.activeElement;
        try {
          e.id
        } catch (f) {
          e = document.body
        }
        return b.wrap(d), (b[0] === e || a.contains(b[0], e)) && a(e).focus(), d = b.parent(), b.css("position") == "static" ? (d.css({
          position: "relative"
        }), b.css({
          position: "relative"
        })) : (a.extend(c, {
          position: b.css("position"),
          zIndex: b.css("z-index")
        }), a.each(["top", "left", "bottom", "right"], function (a, d) {
          c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
        }), b.css({
          position: "relative",
          top: 0,
          left: 0,
          right: "auto",
          bottom: "auto"
        })), d.css(c).show()
      },
      removeWrapper: function (b) {
        var c, d = document.activeElement;
        return b.parent().is(".ui-effects-wrapper") ? (c = b.parent().replaceWith(b), (b[0] === d || a.contains(b[0], d)) && a(d).focus(), c) : b
      },
      setTransition: function (b, c, d, e) {
        return e = e || {}, a.each(c, function (a, c) {
          var f = b.cssUnit(c);
          f[0] > 0 && (e[c] = f[0] * d + f[1])
        }), e
      }
    }), a.fn.extend({
      effect: function (b, c, d, e) {
        var f = k.apply(this, arguments),
          g = {
            options: f[1],
            duration: f[2],
            callback: f[3]
          },
          h = g.options.mode,
          i = a.effects[b];
        return a.fx.off || !i ? h ? this[h](g.duration, g.callback) : this.each(function () {
          g.callback && g.callback.call(this)
        }) : i.call(this, g)
      },
      _show: a.fn.show,
      show: function (a) {
        if (l(a)) return this._show.apply(this, arguments);
        var b = k.apply(this, arguments);
        return b[1].mode = "show", this.effect.apply(this, b)
      },
      _hide: a.fn.hide,
      hide: function (a) {
        if (l(a)) return this._hide.apply(this, arguments);
        var b = k.apply(this, arguments);
        return b[1].mode = "hide", this.effect.apply(this, b)
      },
      __toggle: a.fn.toggle,
      toggle: function (b) {
        if (l(b) || typeof b == "boolean" || a.isFunction(b)) return this.__toggle.apply(this, arguments);
        var c = k.apply(this, arguments);
        return c[1].mode = "toggle", this.effect.apply(this, c)
      },
      cssUnit: function (b) {
        var c = this.css(b),
          d = [];
        return a.each(["em", "px", "%", "pt"], function (a, b) {
          c.indexOf(b) > 0 && (d = [parseFloat(c), b])
        }), d
      }
    }), a.easing.jswing = a.easing.swing, a.extend(a.easing, {
      def: "easeOutQuad",
      swing: function (b, c, d, e, f) {
        return a.easing[a.easing.def](b, c, d, e, f)
      },
      easeInQuad: function (a, b, c, d, e) {
        return d * (b /= e) * b + c
      },
      easeOutQuad: function (a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
      },
      easeInOutQuad: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
      },
      easeInCubic: function (a, b, c, d, e) {
        return d * (b /= e) * b * b + c
      },
      easeOutCubic: function (a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
      },
      easeInOutCubic: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
      },
      easeInQuart: function (a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
      },
      easeOutQuart: function (a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
      },
      easeInOutQuart: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
      },
      easeInQuint: function (a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
      },
      easeOutQuint: function (a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
      },
      easeInOutQuint: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
      },
      easeInSine: function (a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
      },
      easeOutSine: function (a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
      },
      easeInOutSine: function (a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
      },
      easeInExpo: function (a, b, c, d, e) {
        return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
      },
      easeOutExpo: function (a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
      },
      easeInOutExpo: function (a, b, c, d, e) {
        return b == 0 ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
      },
      easeInCirc: function (a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
      },
      easeOutCirc: function (a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
      },
      easeInOutCirc: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
      },
      easeInElastic: function (a, b, c, d, e) {
        var f = 1.70158,
          g = 0,
          h = d;
        if (b == 0) return c;
        if ((b /= e) == 1) return c + d;
        g || (g = e * .3);
        if (h < Math.abs(d)) {
          h = d;
          var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c
      },
      easeOutElastic: function (a, b, c, d, e) {
        var f = 1.70158,
          g = 0,
          h = d;
        if (b == 0) return c;
        if ((b /= e) == 1) return c + d;
        g || (g = e * .3);
        if (h < Math.abs(d)) {
          h = d;
          var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
      },
      easeInOutElastic: function (a, b, c, d, e) {
        var f = 1.70158,
          g = 0,
          h = d;
        if (b == 0) return c;
        if ((b /= e / 2) == 2) return c + d;
        g || (g = e * .3 * 1.5);
        if (h < Math.abs(d)) {
          h = d;
          var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return b < 1 ? -0.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * .5 + d + c
      },
      easeInBack: function (a, c, d, e, f, g) {
        return g == b && (g = 1.70158), e * (c /= f) * c * ((g + 1) * c - g) + d
      },
      easeOutBack: function (a, c, d, e, f, g) {
        return g == b && (g = 1.70158), e * ((c = c / f - 1) * c * ((g + 1) * c + g) + 1) + d
      },
      easeInOutBack: function (a, c, d, e, f, g) {
        return g == b && (g = 1.70158), (c /= f / 2) < 1 ? e / 2 * c * c * (((g *= 1.525) + 1) * c - g) + d : e / 2 * ((c -= 2) * c * (((g *= 1.525) + 1) * c + g) + 2) + d
      },
      easeInBounce: function (b, c, d, e, f) {
        return e - a.easing.easeOutBounce(b, f - c, 0, e, f) + d
      },
      easeOutBounce: function (a, b, c, d, e) {
        return (b /= e) < 1 / 2.75 ? d * 7.5625 * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
      },
      easeInOutBounce: function (b, c, d, e, f) {
        return c < f / 2 ? a.easing.easeInBounce(b, c * 2, 0, e, f) * .5 + d : a.easing.easeOutBounce(b, c * 2 - f, 0, e, f) * .5 + e * .5 + d
      }
    })
  }(jQuery),
  function (a, b) {
    a.effects.blind = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["position", "top", "bottom", "left", "right"],
          e = a.effects.setMode(c, b.options.mode || "hide"),
          f = b.options.direction || "vertical";
        a.effects.save(c, d), c.show();
        var g = a.effects.createWrapper(c).css({
            overflow: "hidden"
          }),
          h = f == "vertical" ? "height" : "width",
          i = f == "vertical" ? g.height() : g.width();
        e == "show" && g.css(h, 0);
        var j = {};
        j[h] = e == "show" ? i : 0, g.animate(j, b.duration, b.options.easing, function () {
          e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
        })
      })
    }
  }(jQuery),
  function (a, b) {
    a.effects.bounce = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["position", "top", "bottom", "left", "right"],
          e = a.effects.setMode(c, b.options.mode || "effect"),
          f = b.options.direction || "up",
          g = b.options.distance || 20,
          h = b.options.times || 5,
          i = b.duration || 250;
        /show|hide/.test(e) && d.push("opacity"), a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
        var j = f == "up" || f == "down" ? "top" : "left",
          k = f == "up" || f == "left" ? "pos" : "neg",
          g = b.options.distance || (j == "top" ? c.outerHeight(!0) / 3 : c.outerWidth(!0) / 3);
        e == "show" && c.css("opacity", 0).css(j, k == "pos" ? -g : g), e == "hide" && (g = g / (h * 2)), e != "hide" && h--;
        if (e == "show") {
          var l = {
            opacity: 1
          };
          l[j] = (k == "pos" ? "+=" : "-=") + g, c.animate(l, i / 2, b.options.easing), g = g / 2, h--
        }
        for (var m = 0; m < h; m++) {
          var n = {},
            p = {};
          n[j] = (k == "pos" ? "-=" : "+=") + g, p[j] = (k == "pos" ? "+=" : "-=") + g, c.animate(n, i / 2, b.options.easing).animate(p, i / 2, b.options.easing), g = e == "hide" ? g * 2 : g / 2
        }
        if (e == "hide") {
          var l = {
            opacity: 0
          };
          l[j] = (k == "pos" ? "-=" : "+=") + g, c.animate(l, i / 2, b.options.easing, function () {
            c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments)
          })
        } else {
          var n = {},
            p = {};
          n[j] = (k == "pos" ? "-=" : "+=") + g, p[j] = (k == "pos" ? "+=" : "-=") + g, c.animate(n, i / 2, b.options.easing).animate(p, i / 2, b.options.easing, function () {
            a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments)
          })
        }
        c.queue("fx", function () {
          c.dequeue()
        }), c.dequeue()
      })
    }
  }(jQuery),
  function (a, b) {
    a.effects.clip = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["position", "top", "bottom", "left", "right", "height", "width"],
          e = a.effects.setMode(c, b.options.mode || "hide"),
          f = b.options.direction || "vertical";
        a.effects.save(c, d), c.show();
        var g = a.effects.createWrapper(c).css({
            overflow: "hidden"
          }),
          h = c[0].tagName == "IMG" ? g : c,
          i = {
            size: f == "vertical" ? "height" : "width",
            position: f == "vertical" ? "top" : "left"
          },
          j = f == "vertical" ? h.height() : h.width();
        e == "show" && (h.css(i.size, 0), h.css(i.position, j / 2));
        var k = {};
        k[i.size] = e == "show" ? j : 0, k[i.position] = e == "show" ? 0 : j / 2, h.animate(k, {
          queue: !1,
          duration: b.duration,
          easing: b.options.easing,
          complete: function () {
            e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
          }
        })
      })
    }
  }(jQuery),
  function (a, b) {
    a.effects.drop = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["position", "top", "bottom", "left", "right", "opacity"],
          e = a.effects.setMode(c, b.options.mode || "hide"),
          f = b.options.direction || "left";
        a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
        var g = f == "up" || f == "down" ? "top" : "left",
          h = f == "up" || f == "left" ? "pos" : "neg",
          i = b.options.distance || (g == "top" ? c.outerHeight(!0) / 2 : c.outerWidth(!0) / 2);
        e == "show" && c.css("opacity", 0).css(g, h == "pos" ? -i : i);
        var j = {
          opacity: e == "show" ? 1 : 0
        };
        j[g] = (e == "show" ? h == "pos" ? "+=" : "-=" : h == "pos" ? "-=" : "+=") + i, c.animate(j, {
          queue: !1,
          duration: b.duration,
          easing: b.options.easing,
          complete: function () {
            e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue()
          }
        })
      })
    }
  }(jQuery),
  function (a, b) {
    a.effects.explode = function (b) {
      return this.queue(function () {
        var c = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3,
          d = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3;
        b.options.mode = b.options.mode == "toggle" ? a(this).is(":visible") ? "hide" : "show" : b.options.mode;
        var e = a(this).show().css("visibility", "hidden"),
          f = e.offset();
        f.top -= parseInt(e.css("marginTop"), 10) || 0, f.left -= parseInt(e.css("marginLeft"), 10) || 0;
        var g = e.outerWidth(!0),
          h = e.outerHeight(!0);
        for (var i = 0; i < c; i++)
          for (var j = 0; j < d; j++) e.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -j * (g / d),
            top: -i * (h / c)
          }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: g / d,
            height: h / c,
            left: f.left + j * (g / d) + (b.options.mode == "show" ? (j - Math.floor(d / 2)) * (g / d) : 0),
            top: f.top + i * (h / c) + (b.options.mode == "show" ? (i - Math.floor(c / 2)) * (h / c) : 0),
            opacity: b.options.mode == "show" ? 0 : 1
          }).animate({
            left: f.left + j * (g / d) + (b.options.mode == "show" ? 0 : (j - Math.floor(d / 2)) * (g / d)),
            top: f.top + i * (h / c) + (b.options.mode == "show" ? 0 : (i - Math.floor(c / 2)) * (h / c)),
            opacity: b.options.mode == "show" ? 1 : 0
          }, b.duration || 500);
        setTimeout(function () {
          b.options.mode == "show" ? e.css({
            visibility: "visible"
          }) : e.css({
            visibility: "visible"
          }).hide(), b.callback && b.callback.apply(e[0]), e.dequeue(), a("div.ui-effects-explode").remove()
        }, b.duration || 500)
      })
    }
  }(jQuery),
  function (a, b) {
    a.effects.fade = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = a.effects.setMode(c, b.options.mode || "hide");
        c.animate({
          opacity: d
        }, {
          queue: !1,
          duration: b.duration,
          easing: b.options.easing,
          complete: function () {
            b.callback && b.callback.apply(this, arguments), c.dequeue()
          }
        })
      })
    }
  }(jQuery),
  function (a, b) {
    a.effects.fold = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["position", "top", "bottom", "left", "right"],
          e = a.effects.setMode(c, b.options.mode || "hide"),
          f = b.options.size || 15,
          g = !!b.options.horizFirst,
          h = b.duration ? b.duration / 2 : a.fx.speeds._default / 2;
        a.effects.save(c, d), c.show();
        var i = a.effects.createWrapper(c).css({
            overflow: "hidden"
          }),
          j = e == "show" != g,
          k = j ? ["width", "height"] : ["height", "width"],
          l = j ? [i.width(), i.height()] : [i.height(), i.width()],
          m = /([0-9]+)%/.exec(f);
        m && (f = parseInt(m[1], 10) / 100 * l[e == "hide" ? 0 : 1]), e == "show" && i.css(g ? {
          height: 0,
          width: f
        } : {
          height: f,
          width: 0
        });
        var n = {},
          p = {};
        n[k[0]] = e == "show" ? l[0] : f, p[k[1]] = e == "show" ? l[1] : 0, i.animate(n, h, b.options.easing).animate(p, h, b.options.easing, function () {
          e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
        })
      })
    }
  }(jQuery),
  function (a, b) {
    a.effects.highlight = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["backgroundImage", "backgroundColor", "opacity"],
          e = a.effects.setMode(c, b.options.mode || "show"),
          f = {
            backgroundColor: c.css("backgroundColor")
          };
        e == "hide" && (f.opacity = 0), a.effects.save(c, d), c.show().css({
          backgroundImage: "none",
          backgroundColor: b.options.color || "#ffff99"
        }).animate(f, {
          queue: !1,
          duration: b.duration,
          easing: b.options.easing,
          complete: function () {
            e == "hide" && c.hide(), a.effects.restore(c, d), e == "show" && !a.support.opacity && this.style.removeAttribute("filter"), b.callback && b.callback.apply(this, arguments), c.dequeue()
          }
        })
      })
    }
  }(jQuery),
  function (a, b) {
    a.effects.pulsate = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = a.effects.setMode(c, b.options.mode || "show"),
          e = (b.options.times || 5) * 2 - 1,
          f = b.duration ? b.duration / 2 : a.fx.speeds._default / 2,
          g = c.is(":visible"),
          h = 0;
        g || (c.css("opacity", 0).show(), h = 1), (d == "hide" && g || d == "show" && !g) && e--;
        for (var i = 0; i < e; i++) c.animate({
          opacity: h
        }, f, b.options.easing), h = (h + 1) % 2;
        c.animate({
          opacity: h
        }, f, b.options.easing, function () {
          h == 0 && c.hide(), b.callback && b.callback.apply(this, arguments)
        }), c.queue("fx", function () {
          c.dequeue()
        }).dequeue()
      })
    }
  }(jQuery),
  function (a, b) {
    a.effects.puff = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = a.effects.setMode(c, b.options.mode || "hide"),
          e = parseInt(b.options.percent, 10) || 150,
          f = e / 100,
          g = {
            height: c.height(),
            width: c.width()
          };
        a.extend(b.options, {
          fade: !0,
          mode: d,
          percent: d == "hide" ? e : 100,
          from: d == "hide" ? g : {
            height: g.height * f,
            width: g.width * f
          }
        }), c.effect("scale", b.options, b.duration, b.callback), c.dequeue()
      })
    }, a.effects.scale = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = a.extend(!0, {}, b.options),
          e = a.effects.setMode(c, b.options.mode || "effect"),
          f = parseInt(b.options.percent, 10) || (parseInt(b.options.percent, 10) == 0 ? 0 : e == "hide" ? 0 : 100),
          g = b.options.direction || "both",
          h = b.options.origin;
        e != "effect" && (d.origin = h || ["middle", "center"], d.restore = !0);
        var i = {
          height: c.height(),
          width: c.width()
        };
        c.from = b.options.from || (e == "show" ? {
          height: 0,
          width: 0
        } : i);
        var j = {
          y: g != "horizontal" ? f / 100 : 1,
          x: g != "vertical" ? f / 100 : 1
        };
        c.to = {
          height: i.height * j.y,
          width: i.width * j.x
        }, b.options.fade && (e == "show" && (c.from.opacity = 0, c.to.opacity = 1), e == "hide" && (c.from.opacity = 1, c.to.opacity = 0)), d.from = c.from, d.to = c.to, d.mode = e, c.effect("size", d, b.duration, b.callback), c.dequeue()
      })
    }, a.effects.size = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
          e = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
          f = ["width", "height", "overflow"],
          g = ["fontSize"],
          h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
          i = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
          j = a.effects.setMode(c, b.options.mode || "effect"),
          k = b.options.restore || !1,
          l = b.options.scale || "both",
          m = b.options.origin,
          n = {
            height: c.height(),
            width: c.width()
          };
        c.from = b.options.from || n, c.to = b.options.to || n;
        if (m) {
          var p = a.effects.getBaseline(m, n);
          c.from.top = (n.height - c.from.height) * p.y, c.from.left = (n.width - c.from.width) * p.x, c.to.top = (n.height - c.to.height) * p.y, c.to.left = (n.width - c.to.width) * p.x
        }
        var q = {
          from: {
            y: c.from.height / n.height,
            x: c.from.width / n.width
          },
          to: {
            y: c.to.height / n.height,
            x: c.to.width / n.width
          }
        };
        if (l == "box" || l == "both") q.from.y != q.to.y && (d = d.concat(h), c.from = a.effects.setTransition(c, h, q.from.y, c.from), c.to = a.effects.setTransition(c, h, q.to.y, c.to)), q.from.x != q.to.x && (d = d.concat(i), c.from = a.effects.setTransition(c, i, q.from.x, c.from), c.to = a.effects.setTransition(c, i, q.to.x, c.to));
        (l == "content" || l == "both") && q.from.y != q.to.y && (d = d.concat(g), c.from = a.effects.setTransition(c, g, q.from.y, c.from), c.to = a.effects.setTransition(c, g, q.to.y, c.to)), a.effects.save(c, k ? d : e), c.show(), a.effects.createWrapper(c), c.css("overflow", "hidden").css(c.from);
        if (l == "content" || l == "both") h = h.concat(["marginTop", "marginBottom"]).concat(g), i = i.concat(["marginLeft", "marginRight"]), f = d.concat(h).concat(i), c.find("*[width]").each(function () {
          var c = a(this);
          k && a.effects.save(c, f);
          var d = {
            height: c.height(),
            width: c.width()
          };
          c.from = {
            height: d.height * q.from.y,
            width: d.width * q.from.x
          }, c.to = {
            height: d.height * q.to.y,
            width: d.width * q.to.x
          }, q.from.y != q.to.y && (c.from = a.effects.setTransition(c, h, q.from.y, c.from), c.to = a.effects.setTransition(c, h, q.to.y, c.to)), q.from.x != q.to.x && (c.from = a.effects.setTransition(c, i, q.from.x, c.from), c.to = a.effects.setTransition(c, i, q.to.x, c.to)), c.css(c.from), c.animate(c.to, b.duration, b.options.easing, function () {
            k && a.effects.restore(c, f)
          })
        });
        c.animate(c.to, {
          queue: !1,
          duration: b.duration,
          easing: b.options.easing,
          complete: function () {
            c.to.opacity === 0 && c.css("opacity", c.from.opacity), j == "hide" && c.hide(), a.effects.restore(c, k ? d : e), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue()
          }
        })
      })
    }
  }(jQuery),
  function (a, b) {
    a.effects.shake = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["position", "top", "bottom", "left", "right"],
          e = a.effects.setMode(c, b.options.mode || "effect"),
          f = b.options.direction || "left",
          g = b.options.distance || 20,
          h = b.options.times || 3,
          i = b.duration || b.options.duration || 140;
        a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
        var j = f == "up" || f == "down" ? "top" : "left",
          k = f == "up" || f == "left" ? "pos" : "neg",
          l = {},
          m = {},
          n = {};
        l[j] = (k == "pos" ? "-=" : "+=") + g, m[j] = (k == "pos" ? "+=" : "-=") + g * 2, n[j] = (k == "pos" ? "-=" : "+=") + g * 2, c.animate(l, i, b.options.easing);
        for (var p = 1; p < h; p++) c.animate(m, i, b.options.easing).animate(n, i, b.options.easing);
        c.animate(m, i, b.options.easing).animate(l, i / 2, b.options.easing, function () {
          a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments)
        }), c.queue("fx", function () {
          c.dequeue()
        }), c.dequeue()
      })
    }
  }(jQuery),
  function (a, b) {
    a.effects.slide = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["position", "top", "bottom", "left", "right"],
          e = a.effects.setMode(c, b.options.mode || "show"),
          f = b.options.direction || "left";
        a.effects.save(c, d), c.show(), a.effects.createWrapper(c).css({
          overflow: "hidden"
        });
        var g = f == "up" || f == "down" ? "top" : "left",
          h = f == "up" || f == "left" ? "pos" : "neg",
          i = b.options.distance || (g == "top" ? c.outerHeight(!0) : c.outerWidth(!0));
        e == "show" && c.css(g, h == "pos" ? isNaN(i) ? "-" + i : -i : i);
        var j = {};
        j[g] = (e == "show" ? h == "pos" ? "+=" : "-=" : h == "pos" ? "-=" : "+=") + i, c.animate(j, {
          queue: !1,
          duration: b.duration,
          easing: b.options.easing,
          complete: function () {
            e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue()
          }
        })
      })
    }
  }(jQuery),
  function (a, b) {
    a.effects.transfer = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = a(b.options.to),
          e = d.offset(),
          f = {
            top: e.top,
            left: e.left,
            height: d.innerHeight(),
            width: d.innerWidth()
          },
          g = c.offset(),
          h = a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({
            top: g.top,
            left: g.left,
            height: c.innerHeight(),
            width: c.innerWidth(),
            position: "absolute"
          }).animate(f, b.duration, b.options.easing, function () {
            h.remove(), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
          })
      })
    }
  }(jQuery),
  function (a, b) {
    a.widget("ui.accordion", {
      options: {
        active: 0,
        animated: "slide",
        autoHeight: !0,
        clearStyle: !1,
        collapsible: !1,
        event: "click",
        fillSpace: !1,
        header: "> li > :first-child,> :not(li):even",
        icons: {
          header: "ui-icon-triangle-1-e",
          headerSelected: "ui-icon-triangle-1-s"
        },
        navigation: !1,
        navigationFilter: function () {
          return this.href.toLowerCase() === location.href.toLowerCase()
        }
      },
      _create: function () {
        var b = this,
          c = b.options;
        b.running = 0, b.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), b.headers = b.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function () {
          if (c.disabled) return;
          a(this).addClass("ui-state-hover")
        }).bind("mouseleave.accordion", function () {
          if (c.disabled) return;
          a(this).removeClass("ui-state-hover")
        }).bind("focus.accordion", function () {
          if (c.disabled) return;
          a(this).addClass("ui-state-focus")
        }).bind("blur.accordion", function () {
          if (c.disabled) return;
          a(this).removeClass("ui-state-focus")
        }), b.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
        if (c.navigation) {
          var d = b.element.find("a").filter(c.navigationFilter).eq(0);
          if (d.length) {
            var e = d.closest(".ui-accordion-header");
            e.length ? b.active = e : b.active = d.closest(".ui-accordion-content").prev()
          }
        }
        b.active = b._findActive(b.active || c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), b.active.next().addClass("ui-accordion-content-active"), b._createIcons(), b.resize(), b.element.attr("role", "tablist"), b.headers.attr("role", "tab").bind("keydown.accordion", function (a) {
          return b._keydown(a)
        }).next().attr("role", "tabpanel"), b.headers.not(b.active || "").attr({
          "aria-expanded": "false",
          "aria-selected": "false",
          tabIndex: -1
        }).next().hide(), b.active.length ? b.active.attr({
          "aria-expanded": "true",
          "aria-selected": "true",
          tabIndex: 0
        }) : b.headers.eq(0).attr("tabIndex", 0), a.browser.safari || b.headers.find("a").attr("tabIndex", -1), c.event && b.headers.bind(c.event.split(" ").join(".accordion ") + ".accordion", function (a) {
          b._clickHandler.call(b, a, this), a.preventDefault()
        })
      },
      _createIcons: function () {
        var b = this.options;
        b.icons && (a("<span></span>").addClass("ui-icon " + b.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(b.icons.header).toggleClass(b.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
      },
      _destroyIcons: function () {
        this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons")
      },
      destroy: function () {
        var b = this.options;
        this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
        var c = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
        return (b.autoHeight || b.fillHeight) && c.css("height", ""), a.Widget.prototype.destroy.call(this)
      },
      _setOption: function (b, c) {
        a.Widget.prototype._setOption.apply(this, arguments), b == "active" && this.activate(c), b == "icons" && (this._destroyIcons(), c && this._createIcons()), b == "disabled" && this.headers.add(this.headers.next())[c ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
      },
      _keydown: function (b) {
        if (this.options.disabled || b.altKey || b.ctrlKey) return;
        var c = a.ui.keyCode,
          d = this.headers.length,
          e = this.headers.index(b.target),
          f = !1;
        switch (b.keyCode) {
          case c.RIGHT:
          case c.DOWN:
            f = this.headers[(e + 1) % d];
            break;
          case c.LEFT:
          case c.UP:
            f = this.headers[(e - 1 + d) % d];
            break;
          case c.SPACE:
          case c.ENTER:
            this._clickHandler({
              target: b.target
            }, b.target), b.preventDefault()
        }
        return f ? (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus(), !1) : !0
      },
      resize: function () {
        var b = this.options,
          c;
        if (b.fillSpace) {
          if (a.browser.msie) {
            var d = this.element.parent().css("overflow");
            this.element.parent().css("overflow", "hidden")
          }
          c = this.element.parent().height(), a.browser.msie && this.element.parent().css("overflow", d), this.headers.each(function () {
            c -= a(this).outerHeight(!0)
          }), this.headers.next().each(function () {
            a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
          }).css("overflow", "auto")
        } else b.autoHeight && (c = 0, this.headers.next().each(function () {
          c = Math.max(c, a(this).height("").height())
        }).height(c));
        return this
      },
      activate: function (a) {
        this.options.active = a;
        var b = this._findActive(a)[0];
        return this._clickHandler({
          target: b
        }, b), this
      },
      _findActive: function (b) {
        return b ? typeof b == "number" ? this.headers.filter(":eq(" + b + ")") : this.headers.not(this.headers.not(b)) : b === !1 ? a([]) : this.headers.filter(":eq(0)")
      },
      _clickHandler: function (b, c) {
        var d = this.options;
        if (d.disabled) return;
        if (!b.target) {
          if (!d.collapsible) return;
          this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header), this.active.next().addClass("ui-accordion-content-active");
          var e = this.active.next(),
            f = {
              options: d,
              newHeader: a([]),
              oldHeader: d.active,
              newContent: a([]),
              oldContent: e
            },
            g = this.active = a([]);
          this._toggle(g, e, f);
          return
        }
        var h = a(b.currentTarget || c),
          i = h[0] === this.active[0];
        d.active = d.collapsible && i ? !1 : this.headers.index(h);
        if (this.running || !d.collapsible && i) return;
        var j = this.active,
          g = h.next(),
          e = this.active.next(),
          f = {
            options: d,
            newHeader: i && d.collapsible ? a([]) : h,
            oldHeader: this.active,
            newContent: i && d.collapsible ? a([]) : g,
            oldContent: e
          },
          k = this.headers.index(this.active[0]) > this.headers.index(h[0]);
        this.active = i ? a([]) : h, this._toggle(g, e, f, i, k), j.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header), i || (h.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected), h.next().addClass("ui-accordion-content-active"));
        return
      },
      _toggle: function (b, c, d, e, f) {
        var g = this,
          h = g.options;
        g.toShow = b, g.toHide = c, g.data = d;
        var i = function () {
          if (!g) return;
          return g._completed.apply(g, arguments)
        };
        g._trigger("changestart", null, g.data), g.running = c.size() === 0 ? b.size() : c.size();
        if (h.animated) {
          var j = {};
          h.collapsible && e ? j = {
            toShow: a([]),
            toHide: c,
            complete: i,
            down: f,
            autoHeight: h.autoHeight || h.fillSpace
          } : j = {
            toShow: b,
            toHide: c,
            complete: i,
            down: f,
            autoHeight: h.autoHeight || h.fillSpace
          }, h.proxied || (h.proxied = h.animated), h.proxiedDuration || (h.proxiedDuration = h.duration), h.animated = a.isFunction(h.proxied) ? h.proxied(j) : h.proxied, h.duration = a.isFunction(h.proxiedDuration) ? h.proxiedDuration(j) : h.proxiedDuration;
          var k = a.ui.accordion.animations,
            l = h.duration,
            m = h.animated;
          m && !k[m] && !a.easing[m] && (m = "slide"), k[m] || (k[m] = function (a) {
            this.slide(a, {
              easing: m,
              duration: l || 700
            })
          }), k[m](j)
        } else h.collapsible && e ? b.toggle() : (c.hide(), b.show()), i(!0);
        c.prev().attr({
          "aria-expanded": "false",
          "aria-selected": "false",
          tabIndex: -1
        }).blur(), b.prev().attr({
          "aria-expanded": "true",
          "aria-selected": "true",
          tabIndex: 0
        }).focus()
      },
      _completed: function (a) {
        this.running = a ? 0 : --this.running;
        if (this.running) return;
        this.options.clearStyle && this.toShow.add(this.toHide).css({
          height: "",
          overflow: ""
        }), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data)
      }
    }), a.extend(a.ui.accordion, {
      version: "1.8.22",
      animations: {
        slide: function (b, c) {
          b = a.extend({
            easing: "swing",
            duration: 300
          }, b, c);
          if (!b.toHide.size()) {
            b.toShow.animate({
              height: "show",
              paddingTop: "show",
              paddingBottom: "show"
            }, b);
            return
          }
          if (!b.toShow.size()) {
            b.toHide.animate({
              height: "hide",
              paddingTop: "hide",
              paddingBottom: "hide"
            }, b);
            return
          }
          var d = b.toShow.css("overflow"),
            e = 0,
            f = {},
            g = {},
            h = ["height", "paddingTop", "paddingBottom"],
            i, j = b.toShow;
          i = j[0].style.width, j.width(j.parent().width() - parseFloat(j.css("paddingLeft")) - parseFloat(j.css("paddingRight")) - (parseFloat(j.css("borderLeftWidth")) || 0) - (parseFloat(j.css("borderRightWidth")) || 0)), a.each(h, function (c, d) {
            g[d] = "hide";
            var e = ("" + a.css(b.toShow[0], d)).match(/^([\d+-.]+)(.*)$/);
            f[d] = {
              value: e[1],
              unit: e[2] || "px"
            }
          }), b.toShow.css({
            height: 0,
            overflow: "hidden"
          }).show(), b.toHide.filter(":hidden").each(b.complete).end().filter(":visible").animate(g, {
            step: function (a, c) {
              c.prop == "height" && (e = c.end - c.start === 0 ? 0 : (c.now - c.start) / (c.end - c.start)), b.toShow[0].style[c.prop] = e * f[c.prop].value + f[c.prop].unit
            },
            duration: b.duration,
            easing: b.easing,
            complete: function () {
              b.autoHeight || b.toShow.css("height", ""), b.toShow.css({
                width: i,
                overflow: d
              }), b.complete()
            }
          })
        },
        bounceslide: function (a) {
          this.slide(a, {
            easing: a.down ? "easeOutBounce" : "swing",
            duration: a.down ? 1e3 : 200
          })
        }
      }
    })
  }(jQuery),
  function (a, b) {
    var c = 0;
    a.widget("ui.autocomplete", {
      options: {
        appendTo: "body",
        autoFocus: !1,
        delay: 300,
        minLength: 1,
        position: {
          my: "left top",
          at: "left bottom",
          collision: "none"
        },
        source: null
      },
      pending: 0,
      _create: function () {
        var b = this,
          c = this.element[0].ownerDocument,
          d;
        this.isMultiLine = this.element.is("textarea"), this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
          role: "textbox",
          "aria-autocomplete": "list",
          "aria-haspopup": "true"
        }).bind("keydown.autocomplete", function (c) {
          if (b.options.disabled || b.element.propAttr("readOnly")) return;
          d = !1;
          var e = a.ui.keyCode;
          switch (c.keyCode) {
            case e.PAGE_UP:
              b._move("previousPage", c);
              break;
            case e.PAGE_DOWN:
              b._move("nextPage", c);
              break;
            case e.UP:
              b._keyEvent("previous", c);
              break;
            case e.DOWN:
              b._keyEvent("next", c);
              break;
            case e.ENTER:
            case e.NUMPAD_ENTER:
              b.menu.active && (d = !0, c.preventDefault());
            case e.TAB:
              if (!b.menu.active) return;
              b.menu.select(c);
              break;
            case e.ESCAPE:
              b.element.val(b.term), b.close(c);
              break;
            default:
              clearTimeout(b.searching), b.searching = setTimeout(function () {
                b.term != b.element.val() && (b.selectedItem = null, b.search(null, c))
              }, b.options.delay)
          }
        }).bind("keypress.autocomplete", function (a) {
          d && (d = !1, a.preventDefault())
        }).bind("focus.autocomplete", function () {
          if (b.options.disabled) return;
          b.selectedItem = null, b.previous = b.element.val()
        }).bind("blur.autocomplete", function (a) {
          if (b.options.disabled) return;
          clearTimeout(b.searching), b.closing = setTimeout(function () {
            b.close(a), b._change(a)
          }, 150)
        }), this._initSource(), this.menu = a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo || "body", c)[0]).mousedown(function (c) {
          var d = b.menu.element[0];
          a(c.target).closest(".ui-menu-item").length || setTimeout(function () {
            a(document).one("mousedown", function (c) {
              c.target !== b.element[0] && c.target !== d && !a.ui.contains(d, c.target) && b.close()
            })
          }, 1), setTimeout(function () {
            clearTimeout(b.closing)
          }, 13)
        }).menu({
          focus: function (a, c) {
            var d = c.item.data("item.autocomplete");
            !1 !== b._trigger("focus", a, {
              item: d
            }) && /^key/.test(a.originalEvent.type) && b.element.val(d.value)
          },
          selected: function (a, d) {
            var e = d.item.data("item.autocomplete"),
              f = b.previous;
            b.element[0] !== c.activeElement && (b.element.focus(), b.previous = f, setTimeout(function () {
              b.previous = f, b.selectedItem = e
            }, 1)), !1 !== b._trigger("select", a, {
              item: e
            }) && b.element.val(e.value), b.term = b.element.val(), b.close(a), b.selectedItem = e
          },
          blur: function (a, c) {
            b.menu.element.is(":visible") && b.element.val() !== b.term && b.element.val(b.term)
          }
        }).zIndex(this.element.zIndex() + 1).css({
          top: 0,
          left: 0
        }).hide().data("menu"), a.fn.bgiframe && this.menu.element.bgiframe(), b.beforeunloadHandler = function () {
          b.element.removeAttr("autocomplete")
        }, a(window).bind("beforeunload", b.beforeunloadHandler)
      },
      destroy: function () {
        this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), a(window).unbind("beforeunload", this.beforeunloadHandler), a.Widget.prototype.destroy.call(this)
      },
      _setOption: function (b, c) {
        a.Widget.prototype._setOption.apply(this, arguments), b === "source" && this._initSource(), b === "appendTo" && this.menu.element.appendTo(a(c || "body", this.element[0].ownerDocument)[0]), b === "disabled" && c && this.xhr && this.xhr.abort()
      },
      _initSource: function () {
        var b = this,
          c, d;
        a.isArray(this.options.source) ? (c = this.options.source, this.source = function (b, d) {
          d(a.ui.autocomplete.filter(c, b.term))
        }) : typeof this.options.source == "string" ? (d = this.options.source, this.source = function (c, e) {
          b.xhr && b.xhr.abort(), b.xhr = a.ajax({
            url: d,
            data: c,
            dataType: "json",
            success: function (a, b) {
              e(a)
            },
            error: function () {
              e([])
            }
          })
        }) : this.source = this.options.source
      },
      search: function (a, b) {
        a = a != null ? a : this.element.val(), this.term = this.element.val();
        if (a.length < this.options.minLength) return this.close(b);
        clearTimeout(this.closing);
        if (this._trigger("search", b) === !1) return;
        return this._search(a)
      },
      _search: function (a) {
        this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
          term: a
        }, this._response())
      },
      _response: function () {
        var a = this,
          b = ++c;
        return function (d) {
          b === c && a.__response(d), a.pending--, a.pending || a.element.removeClass("ui-autocomplete-loading")
        }
      },
      __response: function (a) {
        !this.options.disabled && a && a.length ? (a = this._normalize(a), this._suggest(a), this._trigger("open")) : this.close()
      },
      close: function (a) {
        clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", a))
      },
      _change: function (a) {
        this.previous !== this.element.val() && this._trigger("change", a, {
          item: this.selectedItem
        })
      },
      _normalize: function (b) {
        return b.length && b[0].label && b[0].value ? b : a.map(b, function (b) {
          return typeof b == "string" ? {
            label: b,
            value: b
          } : a.extend({
            label: b.label || b.value,
            value: b.value || b.label
          }, b)
        })
      },
      _suggest: function (b) {
        var c = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
        this._renderMenu(c, b), this.menu.deactivate(), this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({
          of: this.element
        }, this.options.position)), this.options.autoFocus && this.menu.next(new a.Event("mouseover"))
      },
      _resizeMenu: function () {
        var a = this.menu.element;
        a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
      },
      _renderMenu: function (b, c) {
        var d = this;
        a.each(c, function (a, c) {
          d._renderItem(b, c)
        })
      },
      _renderItem: function (b, c) {
        return a("<li></li>").data("item.autocomplete", c).append(a("<a></a>").text(c.label)).appendTo(b)
      },
      _move: function (a, b) {
        if (!this.menu.element.is(":visible")) {
          this.search(null, b);
          return
        }
        if (this.menu.first() && /^previous/.test(a) || this.menu.last() && /^next/.test(a)) {
          this.element.val(this.term), this.menu.deactivate();
          return
        }
        this.menu[a](b)
      },
      widget: function () {
        return this.menu.element
      },
      _keyEvent: function (a, b) {
        if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(a, b), b.preventDefault()
      }
    }), a.extend(a.ui.autocomplete, {
      escapeRegex: function (a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
      },
      filter: function (b, c) {
        var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
        return a.grep(b, function (a) {
          return d.test(a.label || a.value || a)
        })
      }
    })
  }(jQuery),
  function (a) {
    a.widget("ui.menu", {
      _create: function () {
        var b = this;
        this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
          role: "listbox",
          "aria-activedescendant": "ui-active-menuitem"
        }).click(function (c) {
          if (!a(c.target).closest(".ui-menu-item a").length) return;
          c.preventDefault(), b.select(c)
        }), this.refresh()
      },
      refresh: function () {
        var b = this,
          c = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
        c.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function (c) {
          b.activate(c, a(this).parent())
        }).mouseleave(function () {
          b.deactivate()
        })
      },
      activate: function (a, b) {
        this.deactivate();
        if (this.hasScroll()) {
          var c = b.offset().top - this.element.offset().top,
            d = this.element.scrollTop(),
            e = this.element.height();
          c < 0 ? this.element.scrollTop(d + c) : c >= e && this.element.scrollTop(d + c - e + b.height())
        }
        this.active = b.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", a, {
          item: b
        })
      },
      deactivate: function () {
        if (!this.active) return;
        this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null
      },
      next: function (a) {
        this.move("next", ".ui-menu-item:first", a)
      },
      previous: function (a) {
        this.move("prev", ".ui-menu-item:last", a)
      },
      first: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length
      },
      last: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length
      },
      move: function (a, b, c) {
        if (!this.active) {
          this.activate(c, this.element.children(b));
          return
        }
        var d = this.active[a + "All"](".ui-menu-item").eq(0);
        d.length ? this.activate(c, d) : this.activate(c, this.element.children(b))
      },
      nextPage: function (b) {
        if (this.hasScroll()) {
          if (!this.active || this.last()) {
            this.activate(b, this.element.children(".ui-menu-item:first"));
            return
          }
          var c = this.active.offset().top,
            d = this.element.height(),
            e = this.element.children(".ui-menu-item").filter(function () {
              var b = a(this).offset().top - c - d + a(this).height();
              return b < 10 && b > -10
            });
          e.length || (e = this.element.children(".ui-menu-item:last")), this.activate(b, e)
        } else this.activate(b, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
      },
      previousPage: function (b) {
        if (this.hasScroll()) {
          if (!this.active || this.first()) {
            this.activate(b, this.element.children(".ui-menu-item:last"));
            return
          }
          var c = this.active.offset().top,
            d = this.element.height(),
            e = this.element.children(".ui-menu-item").filter(function () {
              var b = a(this).offset().top - c + d - a(this).height();
              return b < 10 && b > -10
            });
          e.length || (e = this.element.children(".ui-menu-item:first")), this.activate(b, e)
        } else this.activate(b, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
      },
      hasScroll: function () {
        return this.element.height() < this.element[a.fn.prop ? "prop" : "attr"]("scrollHeight")
      },
      select: function (a) {
        this._trigger("selected", a, {
          item: this.active
        })
      }
    })
  }(jQuery),
  function (a, b) {
    var c, d, e, f, g = "ui-button ui-widget ui-state-default ui-corner-all",
      h = "ui-state-hover ui-state-active ",
      i = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
      j = function () {
        var b = a(this).find(":ui-button");
        setTimeout(function () {
          b.button("refresh")
        }, 1)
      },
      k = function (b) {
        var c = b.name,
          d = b.form,
          e = a([]);
        return c && (d ? e = a(d).find("[name='" + c + "']") : e = a("[name='" + c + "']", b.ownerDocument).filter(function () {
          return !this.form
        })), e
      };
    a.widget("ui.button", {
      options: {
        disabled: null,
        text: !0,
        label: null,
        icons: {
          primary: null,
          secondary: null
        }
      },
      _create: function () {
        this.element.closest("form").unbind("reset.button").bind("reset.button", j), typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.propAttr("disabled") : this.element.propAttr("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
        var b = this,
          h = this.options,
          i = this.type === "checkbox" || this.type === "radio",
          l = "ui-state-hover" + (i ? "" : " ui-state-active"),
          m = "ui-state-focus";
        h.label === null && (h.label = this.buttonElement.html()), this.buttonElement.addClass(g).attr("role", "button").bind("mouseenter.button", function () {
          if (h.disabled) return;
          a(this).addClass("ui-state-hover"), this === c && a(this).addClass("ui-state-active")
        }).bind("mouseleave.button", function () {
          if (h.disabled) return;
          a(this).removeClass(l)
        }).bind("click.button", function (a) {
          h.disabled && (a.preventDefault(), a.stopImmediatePropagation())
        }), this.element.bind("focus.button", function () {
          b.buttonElement.addClass(m)
        }).bind("blur.button", function () {
          b.buttonElement.removeClass(m)
        }), i && (this.element.bind("change.button", function () {
          if (f) return;
          b.refresh()
        }), this.buttonElement.bind("mousedown.button", function (a) {
          if (h.disabled) return;
          f = !1, d = a.pageX, e = a.pageY
        }).bind("mouseup.button", function (a) {
          if (h.disabled) return;
          if (d !== a.pageX || e !== a.pageY) f = !0
        })), this.type === "checkbox" ? this.buttonElement.bind("click.button", function () {
          if (h.disabled || f) return !1;
          a(this).toggleClass("ui-state-active"), b.buttonElement.attr("aria-pressed", b.element[0].checked)
        }) : this.type === "radio" ? this.buttonElement.bind("click.button", function () {
          if (h.disabled || f) return !1;
          a(this).addClass("ui-state-active"), b.buttonElement.attr("aria-pressed", "true");
          var c = b.element[0];
          k(c).not(c).map(function () {
            return a(this).button("widget")[0]
          }).removeClass("ui-state-active").attr("aria-pressed", "false")
        }) : (this.buttonElement.bind("mousedown.button", function () {
          if (h.disabled) return !1;
          a(this).addClass("ui-state-active"), c = this, a(document).one("mouseup", function () {
            c = null
          })
        }).bind("mouseup.button", function () {
          if (h.disabled) return !1;
          a(this).removeClass("ui-state-active")
        }).bind("keydown.button", function (b) {
          if (h.disabled) return !1;
          (b.keyCode == a.ui.keyCode.SPACE || b.keyCode == a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active")
        }).bind("keyup.button", function () {
          a(this).removeClass("ui-state-active")
        }), this.buttonElement.is("a") && this.buttonElement.keyup(function (b) {
          b.keyCode === a.ui.keyCode.SPACE && a(this).click()
        })), this._setOption("disabled", h.disabled), this._resetButton()
      },
      _determineButtonType: function () {
        this.element.is(":checkbox") ? this.type = "checkbox" : this.element.is(":radio") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button";
        if (this.type === "checkbox" || this.type === "radio") {
          var a = this.element.parents().filter(":last"),
            b = "label[for='" + this.element.attr("id") + "']";
          this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible");
          var c = this.element.is(":checked");
          c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", c)
        } else this.buttonElement = this.element
      },
      widget: function () {
        return this.buttonElement
      },
      destroy: function () {
        this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(g + " " + h + " " + i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), a.Widget.prototype.destroy.call(this)
      },
      _setOption: function (b, c) {
        a.Widget.prototype._setOption.apply(this, arguments);
        if (b === "disabled") {
          c ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1);
          return
        }
        this._resetButton()
      },
      refresh: function () {
        var b = this.element.is(":disabled");
        b !== this.options.disabled && this._setOption("disabled", b), this.type === "radio" ? k(this.element[0]).each(function () {
          a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
        }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
      },
      _resetButton: function () {
        if (this.type === "input") {
          this.options.label && this.element.val(this.options.label);
          return
        }
        var b = this.buttonElement.removeClass(i),
          c = a("<span></span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),
          d = this.options.icons,
          e = d.primary && d.secondary,
          f = [];
        d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", c))) : f.push("ui-button-text-only"), b.addClass(f.join(" "))
      }
    }), a.widget("ui.buttonset", {
      options: {
        items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
      },
      _create: function () {
        this.element.addClass("ui-buttonset")
      },
      _init: function () {
        this.refresh()
      },
      _setOption: function (b, c) {
        b === "disabled" && this.buttons.button("option", b, c), a.Widget.prototype._setOption.apply(this, arguments)
      },
      refresh: function () {
        var b = this.element.css("direction") === "rtl";
        this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
          return a(this).button("widget")[0]
        }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end()
      },
      destroy: function () {
        this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
          return a(this).button("widget")[0]
        }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), a.Widget.prototype.destroy.call(this)
      }
    })
  }(jQuery),
  function ($, undefined) {
    function Datepicker() {
      this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
      }, this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1
      }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }

    function bindHover(a) {
      var b = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return a.bind("mouseout", function (a) {
        var c = $(a.target).closest(b);
        if (!c.length) return;
        c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
      }).bind("mouseover", function (c) {
        var d = $(c.target).closest(b);
        if ($.datepicker._isDisabledDatepicker(instActive.inline ? a.parent()[0] : instActive.input[0]) || !d.length) return;
        d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), d.addClass("ui-state-hover"), d.hasClass("ui-datepicker-prev") && d.addClass("ui-datepicker-prev-hover"), d.hasClass("ui-datepicker-next") && d.addClass("ui-datepicker-next-hover")
      })
    }

    function extendRemove(a, b) {
      $.extend(a, b);
      for (var c in b)
        if (b[c] == null || b[c] == undefined) a[c] = b[c];
      return a
    }

    function isArray(a) {
      return a && ($.browser.safari && typeof a == "object" && a.length || a.constructor && a.constructor.toString().match(/\Array\(\)/))
    }
    $.extend($.ui, {
      datepicker: {
        version: "1.8.22"
      }
    });
    var PROP_NAME = "datepicker",
      dpuuid = (new Date).getTime(),
      instActive;
    $.extend(Datepicker.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      log: function () {
        this.debug && console.log.apply("", arguments)
      },
      _widgetDatepicker: function () {
        return this.dpDiv
      },
      setDefaults: function (a) {
        return extendRemove(this._defaults, a || {}), this
      },
      _attachDatepicker: function (target, settings) {
        var inlineSettings = null;
        for (var attrName in this._defaults) {
          var attrValue = target.getAttribute("date:" + attrName);
          if (attrValue) {
            inlineSettings = inlineSettings || {};
            try {
              inlineSettings[attrName] = eval(attrValue)
            } catch (err) {
              inlineSettings[attrName] = attrValue
            }
          }
        }
        var nodeName = target.nodeName.toLowerCase(),
          inline = nodeName == "div" || nodeName == "span";
        target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
        var inst = this._newInst($(target), inline);
        inst.settings = $.extend({}, settings || {}, inlineSettings || {}), nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
      },
      _newInst: function (a, b) {
        var c = a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
        return {
          id: c,
          input: a,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: b,
          dpDiv: b ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
        }
      },
      _connectDatepicker: function (a, b) {
        var c = $(a);
        b.append = $([]), b.trigger = $([]);
        if (c.hasClass(this.markerClassName)) return;
        this._attachments(c, b), c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (a, c, d) {
          b.settings[c] = d
        }).bind("getData.datepicker", function (a, c) {
          return this._get(b, c)
        }), this._autoSize(b), $.data(a, PROP_NAME, b), b.settings.disabled && this._disableDatepicker(a)
      },
      _attachments: function (a, b) {
        var c = this._get(b, "appendText"),
          d = this._get(b, "isRTL");
        b.append && b.append.remove(), c && (b.append = $('<span class="' + this._appendClass + '">' + c + "</span>"), a[d ? "before" : "after"](b.append)), a.unbind("focus", this._showDatepicker), b.trigger && b.trigger.remove();
        var e = this._get(b, "showOn");
        (e == "focus" || e == "both") && a.focus(this._showDatepicker);
        if (e == "button" || e == "both") {
          var f = this._get(b, "buttonText"),
            g = this._get(b, "buttonImage");
          b.trigger = $(this._get(b, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
            src: g,
            alt: f,
            title: f
          }) : $('<button type="button"></button>').addClass(this._triggerClass).html(g == "" ? f : $("<img/>").attr({
            src: g,
            alt: f,
            title: f
          }))), a[d ? "before" : "after"](b.trigger), b.trigger.click(function () {
            return $.datepicker._datepickerShowing && $.datepicker._lastInput == a[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != a[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(a[0])) : $.datepicker._showDatepicker(a[0]), !1
          })
        }
      },
      _autoSize: function (a) {
        if (this._get(a, "autoSize") && !a.inline) {
          var b = new Date(2009, 11, 20),
            c = this._get(a, "dateFormat");
          if (c.match(/[DM]/)) {
            var d = function (a) {
              var b = 0,
                c = 0;
              for (var d = 0; d < a.length; d++) a[d].length > b && (b = a[d].length, c = d);
              return c
            };
            b.setMonth(d(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort"))), b.setDate(d(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay())
          }
          a.input.attr("size", this._formatDate(a, b).length)
        }
      },
      _inlineDatepicker: function (a, b) {
        var c = $(a);
        if (c.hasClass(this.markerClassName)) return;
        c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker", function (a, c, d) {
          b.settings[c] = d
        }).bind("getData.datepicker", function (a, c) {
          return this._get(b, c)
        }), $.data(a, PROP_NAME, b), this._setDate(b, this._getDefaultDate(b), !0), this._updateDatepicker(b), this._updateAlternate(b), b.settings.disabled && this._disableDatepicker(a), b.dpDiv.css("display", "block")
      },
      _dialogDatepicker: function (a, b, c, d, e) {
        var f = this._dialogInst;
        if (!f) {
          this.uuid += 1;
          var g = "dp" + this.uuid;
          this._dialogInput = $('<input type="text" id="' + g + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), f = this._dialogInst = this._newInst(this._dialogInput, !1), f.settings = {}, $.data(this._dialogInput[0], PROP_NAME, f)
        }
        extendRemove(f.settings, d || {}), b = b && b.constructor == Date ? this._formatDate(f, b) : b, this._dialogInput.val(b), this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null;
        if (!this._pos) {
          var h = document.documentElement.clientWidth,
            i = document.documentElement.clientHeight,
            j = document.documentElement.scrollLeft || document.body.scrollLeft,
            k = document.documentElement.scrollTop || document.body.scrollTop;
          this._pos = [h / 2 - 100 + j, i / 2 - 150 + k]
        }
        return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), f.settings.onSelect = c, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, f), this
      },
      _destroyDatepicker: function (a) {
        var b = $(a),
          c = $.data(a, PROP_NAME);
        if (!b.hasClass(this.markerClassName)) return;
        var d = a.nodeName.toLowerCase();
        $.removeData(a, PROP_NAME), d == "input" ? (c.append.remove(), c.trigger.remove(), b.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (d == "div" || d == "span") && b.removeClass(this.markerClassName).empty()
      },
      _enableDatepicker: function (a) {
        var b = $(a),
          c = $.data(a, PROP_NAME);
        if (!b.hasClass(this.markerClassName)) return;
        var d = a.nodeName.toLowerCase();
        if (d == "input") a.disabled = !1, c.trigger.filter("button").each(function () {
          this.disabled = !1
        }).end().filter("img").css({
          opacity: "1.0",
          cursor: ""
        });
        else if (d == "div" || d == "span") {
          var e = b.children("." + this._inlineClass);
          e.children().removeClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
        }
        this._disabledInputs = $.map(this._disabledInputs, function (b) {
          return b == a ? null : b
        })
      },
      _disableDatepicker: function (a) {
        var b = $(a),
          c = $.data(a, PROP_NAME);
        if (!b.hasClass(this.markerClassName)) return;
        var d = a.nodeName.toLowerCase();
        if (d == "input") a.disabled = !0, c.trigger.filter("button").each(function () {
          this.disabled = !0
        }).end().filter("img").css({
          opacity: "0.5",
          cursor: "default"
        });
        else if (d == "div" || d == "span") {
          var e = b.children("." + this._inlineClass);
          e.children().addClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
        }
        this._disabledInputs = $.map(this._disabledInputs, function (b) {
          return b == a ? null : b
        }), this._disabledInputs[this._disabledInputs.length] = a
      },
      _isDisabledDatepicker: function (a) {
        if (!a) return !1;
        for (var b = 0; b < this._disabledInputs.length; b++)
          if (this._disabledInputs[b] == a) return !0;
        return !1
      },
      _getInst: function (a) {
        try {
          return $.data(a, PROP_NAME)
        } catch (b) {
          throw "Missing instance data for this datepicker"
        }
      },
      _optionDatepicker: function (a, b, c) {
        var d = this._getInst(a);
        if (arguments.length == 2 && typeof b == "string") return b == "defaults" ? $.extend({}, $.datepicker._defaults) : d ? b == "all" ? $.extend({}, d.settings) : this._get(d, b) : null;
        var e = b || {};
        typeof b == "string" && (e = {}, e[b] = c);
        if (d) {
          this._curInst == d && this._hideDatepicker();
          var f = this._getDateDatepicker(a, !0),
            g = this._getMinMaxDate(d, "min"),
            h = this._getMinMaxDate(d, "max");
          extendRemove(d.settings, e), g !== null && e.dateFormat !== undefined && e.minDate === undefined && (d.settings.minDate = this._formatDate(d, g)), h !== null && e.dateFormat !== undefined && e.maxDate === undefined && (d.settings.maxDate = this._formatDate(d, h)), this._attachments($(a), d), this._autoSize(d), this._setDate(d, f), this._updateAlternate(d), this._updateDatepicker(d)
        }
      },
      _changeDatepicker: function (a, b, c) {
        this._optionDatepicker(a, b, c)
      },
      _refreshDatepicker: function (a) {
        var b = this._getInst(a);
        b && this._updateDatepicker(b)
      },
      _setDateDatepicker: function (a, b) {
        var c = this._getInst(a);
        c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
      },
      _getDateDatepicker: function (a, b) {
        var c = this._getInst(a);
        return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
      },
      _doKeyDown: function (a) {
        var b = $.datepicker._getInst(a.target),
          c = !0,
          d = b.dpDiv.is(".ui-datepicker-rtl");
        b._keyEvent = !0;
        if ($.datepicker._datepickerShowing) switch (a.keyCode) {
          case 9:
            $.datepicker._hideDatepicker(), c = !1;
            break;
          case 13:
            var e = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", b.dpDiv);
            e[0] && $.datepicker._selectDay(a.target, b.selectedMonth, b.selectedYear, e[0]);
            var f = $.datepicker._get(b, "onSelect");
            if (f) {
              var g = $.datepicker._formatDate(b);
              f.apply(b.input ? b.input[0] : null, [g, b])
            } else $.datepicker._hideDatepicker();
            return !1;
          case 27:
            $.datepicker._hideDatepicker();
            break;
          case 33:
            $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M");
            break;
          case 34:
            $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M");
            break;
          case 35:
            (a.ctrlKey || a.metaKey) && $.datepicker._clearDate(a.target), c = a.ctrlKey || a.metaKey;
            break;
          case 36:
            (a.ctrlKey || a.metaKey) && $.datepicker._gotoToday(a.target), c = a.ctrlKey || a.metaKey;
            break;
          case 37:
            (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? 1 : -1, "D"), c = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M");
            break;
          case 38:
            (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, -7, "D"), c = a.ctrlKey || a.metaKey;
            break;
          case 39:
            (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? -1 : 1, "D"), c = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M");
            break;
          case 40:
            (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, 7, "D"), c = a.ctrlKey || a.metaKey;
            break;
          default:
            c = !1
        } else a.keyCode == 36 && a.ctrlKey ? $.datepicker._showDatepicker(this) : c = !1;
        c && (a.preventDefault(), a.stopPropagation())
      },
      _doKeyPress: function (a) {
        var b = $.datepicker._getInst(a.target);
        if ($.datepicker._get(b, "constrainInput")) {
          var c = $.datepicker._possibleChars($.datepicker._get(b, "dateFormat")),
            d = String.fromCharCode(a.charCode == undefined ? a.keyCode : a.charCode);
          return a.ctrlKey || a.metaKey || d < " " || !c || c.indexOf(d) > -1
        }
      },
      _doKeyUp: function (a) {
        var b = $.datepicker._getInst(a.target);
        if (b.input.val() != b.lastVal) try {
          var c = $.datepicker.parseDate($.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, $.datepicker._getFormatConfig(b));
          c && ($.datepicker._setDateFromField(b), $.datepicker._updateAlternate(b), $.datepicker._updateDatepicker(b))
        } catch (d) {
          $.datepicker.log(d)
        }
        return !0
      },
      _showDatepicker: function (a) {
        a = a.target || a, a.nodeName.toLowerCase() != "input" && (a = $("input", a.parentNode)[0]);
        if ($.datepicker._isDisabledDatepicker(a) || $.datepicker._lastInput == a) return;
        var b = $.datepicker._getInst(a);
        $.datepicker._curInst && $.datepicker._curInst != b && ($.datepicker._curInst.dpDiv.stop(!0, !0), b && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
        var c = $.datepicker._get(b, "beforeShow"),
          d = c ? c.apply(a, [a, b]) : {};
        if (d === !1) return;
        extendRemove(b.settings, d), b.lastVal = null, $.datepicker._lastInput = a, $.datepicker._setDateFromField(b), $.datepicker._inDialog && (a.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(a), $.datepicker._pos[1] += a.offsetHeight);
        var e = !1;
        $(a).parents().each(function () {
          return e |= $(this).css("position") == "fixed", !e
        }), e && $.browser.opera && ($.datepicker._pos[0] -= document.documentElement.scrollLeft, $.datepicker._pos[1] -= document.documentElement.scrollTop);
        var f = {
          left: $.datepicker._pos[0],
          top: $.datepicker._pos[1]
        };
        $.datepicker._pos = null, b.dpDiv.empty(), b.dpDiv.css({
          position: "absolute",
          display: "block",
          top: "-1000px"
        }), $.datepicker._updateDatepicker(b), f = $.datepicker._checkOffset(b, f, e), b.dpDiv.css({
          position: $.datepicker._inDialog && $.blockUI ? "static" : e ? "fixed" : "absolute",
          display: "none",
          left: f.left + "px",
          top: f.top + "px"
        });
        if (!b.inline) {
          var g = $.datepicker._get(b, "showAnim"),
            h = $.datepicker._get(b, "duration"),
            i = function () {
              var a = b.dpDiv.find("iframe.ui-datepicker-cover");
              if (!!a.length) {
                var c = $.datepicker._getBorders(b.dpDiv);
                a.css({
                  left: -c[0],
                  top: -c[1],
                  width: b.dpDiv.outerWidth(),
                  height: b.dpDiv.outerHeight()
                })
              }
            };
          b.dpDiv.zIndex($(a).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects[g] ? b.dpDiv.show(g, $.datepicker._get(b, "showOptions"), h, i) : b.dpDiv[g || "show"](g ? h : null, i), (!g || !h) && i(), b.input.is(":visible") && !b.input.is(":disabled") && b.input.focus(), $.datepicker._curInst = b
        }
      },
      _updateDatepicker: function (a) {
        var b = this;
        b.maxRows = 4;
        var c = $.datepicker._getBorders(a.dpDiv);
        instActive = a, a.dpDiv.empty().append(this._generateHTML(a)), this._attachHandlers(a);
        var d = a.dpDiv.find("iframe.ui-datepicker-cover");
        !d.length || d.css({
          left: -c[0],
          top: -c[1],
          width: a.dpDiv.outerWidth(),
          height: a.dpDiv.outerHeight()
        }), a.dpDiv.find("." + this._dayOverClass + " a").mouseover();
        var e = this._getNumberOfMonths(a),
          f = e[1],
          g = 17;
        a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), f > 1 && a.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", g * f + "em"), a.dpDiv[(e[0] != 1 || e[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), a == $.datepicker._curInst && $.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input[0] != document.activeElement && a.input.focus();
        if (a.yearshtml) {
          var h = a.yearshtml;
          setTimeout(function () {
            h === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml), h = a.yearshtml = null
          }, 0)
        }
      },
      _getBorders: function (a) {
        var b = function (a) {
          return {
            thin: 1,
            medium: 2,
            thick: 3
          } [a] || a
        };
        return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
      },
      _checkOffset: function (a, b, c) {
        var d = a.dpDiv.outerWidth(),
          e = a.dpDiv.outerHeight(),
          f = a.input ? a.input.outerWidth() : 0,
          g = a.input ? a.input.outerHeight() : 0,
          h = document.documentElement.clientWidth + (c ? 0 : $(document).scrollLeft()),
          i = document.documentElement.clientHeight + (c ? 0 : $(document).scrollTop());
        return b.left -= this._get(a, "isRTL") ? d - f : 0, b.left -= c && b.left == a.input.offset().left ? $(document).scrollLeft() : 0, b.top -= c && b.top == a.input.offset().top + g ? $(document).scrollTop() : 0, b.left -= Math.min(b.left, b.left + d > h && h > d ? Math.abs(b.left + d - h) : 0), b.top -= Math.min(b.top, b.top + e > i && i > e ? Math.abs(e + g) : 0), b
      },
      _findPos: function (a) {
        var b = this._getInst(a),
          c = this._get(b, "isRTL");
        while (a && (a.type == "hidden" || a.nodeType != 1 || $.expr.filters.hidden(a))) a = a[c ? "previousSibling" : "nextSibling"];
        var d = $(a).offset();
        return [d.left, d.top]
      },
      _hideDatepicker: function (a) {
        var b = this._curInst;
        if (!b || a && b != $.data(a, PROP_NAME)) return;
        if (this._datepickerShowing) {
          var c = this._get(b, "showAnim"),
            d = this._get(b, "duration"),
            e = function () {
              $.datepicker._tidyDialog(b)
            };
          $.effects && $.effects[c] ? b.dpDiv.hide(c, $.datepicker._get(b, "showOptions"), d, e) : b.dpDiv[c == "slideDown" ? "slideUp" : c == "fadeIn" ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1;
          var f = this._get(b, "onClose");
          f && f.apply(b.input ? b.input[0] : null, [b.input ? b.input.val() : "", b]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
            position: "absolute",
            left: "0",
            top: "-100px"
          }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
        }
      },
      _tidyDialog: function (a) {
        a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
      },
      _checkExternalClick: function (a) {
        if (!$.datepicker._curInst) return;
        var b = $(a.target),
          c = $.datepicker._getInst(b[0]);
        (b[0].id != $.datepicker._mainDivId && b.parents("#" + $.datepicker._mainDivId).length == 0 && !b.hasClass($.datepicker.markerClassName) && !b.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || b.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != c) && $.datepicker._hideDatepicker()
      },
      _adjustDate: function (a, b, c) {
        var d = $(a),
          e = this._getInst(d[0]);
        if (this._isDisabledDatepicker(d[0])) return;
        this._adjustInstDate(e, b + (c == "M" ? this._get(e, "showCurrentAtPos") : 0), c), this._updateDatepicker(e)
      },
      _gotoToday: function (a) {
        var b = $(a),
          c = this._getInst(b[0]);
        if (this._get(c, "gotoCurrent") && c.currentDay) c.selectedDay = c.currentDay, c.drawMonth = c.selectedMonth = c.currentMonth, c.drawYear = c.selectedYear = c.currentYear;
        else {
          var d = new Date;
          c.selectedDay = d.getDate(), c.drawMonth = c.selectedMonth = d.getMonth(), c.drawYear = c.selectedYear = d.getFullYear()
        }
        this._notifyChange(c), this._adjustDate(b)
      },
      _selectMonthYear: function (a, b, c) {
        var d = $(a),
          e = this._getInst(d[0]);
        e["selected" + (c == "M" ? "Month" : "Year")] = e["draw" + (c == "M" ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10), this._notifyChange(e), this._adjustDate(d)
      },
      _selectDay: function (a, b, c, d) {
        var e = $(a);
        if ($(d).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0])) return;
        var f = this._getInst(e[0]);
        f.selectedDay = f.currentDay = $("a", d).html(), f.selectedMonth = f.currentMonth = b, f.selectedYear = f.currentYear = c, this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear))
      },
      _clearDate: function (a) {
        var b = $(a),
          c = this._getInst(b[0]);
        this._selectDate(b, "")
      },
      _selectDate: function (a, b) {
        var c = $(a),
          d = this._getInst(c[0]);
        b = b != null ? b : this._formatDate(d), d.input && d.input.val(b), this._updateAlternate(d);
        var e = this._get(d, "onSelect");
        e ? e.apply(d.input ? d.input[0] : null, [b, d]) : d.input && d.input.trigger("change"), d.inline ? this._updateDatepicker(d) : (this._hideDatepicker(), this._lastInput = d.input[0], typeof d.input[0] != "object" && d.input.focus(), this._lastInput = null)
      },
      _updateAlternate: function (a) {
        var b = this._get(a, "altField");
        if (b) {
          var c = this._get(a, "altFormat") || this._get(a, "dateFormat"),
            d = this._getDate(a),
            e = this.formatDate(c, d, this._getFormatConfig(a));
          $(b).each(function () {
            $(this).val(e)
          })
        }
      },
      noWeekends: function (a) {
        var b = a.getDay();
        return [b > 0 && b < 6, ""]
      },
      iso8601Week: function (a) {
        var b = new Date(a.getTime());
        b.setDate(b.getDate() + 4 - (b.getDay() || 7));
        var c = b.getTime();
        return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
      },
      parseDate: function (a, b, c) {
        if (a == null || b == null) throw "Invalid arguments";
        b = typeof b == "object" ? b.toString() : b + "";
        if (b == "") return null;
        var d = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff;
        d = typeof d != "string" ? d : (new Date).getFullYear() % 100 + parseInt(d, 10);
        var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
          f = (c ? c.dayNames : null) || this._defaults.dayNames,
          g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
          h = (c ? c.monthNames : null) || this._defaults.monthNames,
          i = -1,
          j = -1,
          k = -1,
          l = -1,
          m = !1,
          n = function (b) {
            var c = s + 1 < a.length && a.charAt(s + 1) == b;
            return c && s++, c
          },
          o = function (a) {
            var c = n(a),
              d = a == "@" ? 14 : a == "!" ? 20 : a == "y" && c ? 4 : a == "o" ? 3 : 2,
              e = new RegExp("^\\d{1," + d + "}"),
              f = b.substring(r).match(e);
            if (!f) throw "Missing number at position " + r;
            return r += f[0].length, parseInt(f[0], 10)
          },
          p = function (a, c, d) {
            var e = $.map(n(a) ? d : c, function (a, b) {
                return [
                  [b, a]
                ]
              }).sort(function (a, b) {
                return -(a[1].length - b[1].length)
              }),
              f = -1;
            $.each(e, function (a, c) {
              var d = c[1];
              if (b.substr(r, d.length).toLowerCase() == d.toLowerCase()) return f = c[0], r += d.length, !1
            });
            if (f != -1) return f + 1;
            throw "Unknown name at position " + r
          },
          q = function () {
            if (b.charAt(r) != a.charAt(s)) throw "Unexpected literal at position " + r;
            r++
          },
          r = 0;
        for (var s = 0; s < a.length; s++)
          if (m) a.charAt(s) == "'" && !n("'") ? m = !1 : q();
          else switch (a.charAt(s)) {
            case "d":
              k = o("d");
              break;
            case "D":
              p("D", e, f);
              break;
            case "o":
              l = o("o");
              break;
            case "m":
              j = o("m");
              break;
            case "M":
              j = p("M", g, h);
              break;
            case "y":
              i = o("y");
              break;
            case "@":
              var t = new Date(o("@"));
              i = t.getFullYear(), j = t.getMonth() + 1, k = t.getDate();
              break;
            case "!":
              var t = new Date((o("!") - this._ticksTo1970) / 1e4);
              i = t.getFullYear(), j = t.getMonth() + 1, k = t.getDate();
              break;
            case "'":
              n("'") ? q() : m = !0;
              break;
            default:
              q()
          }
        if (r < b.length) throw "Extra/unparsed characters found in date: " + b.substring(r);
        i == -1 ? i = (new Date).getFullYear() : i < 100 && (i += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (i <= d ? 0 : -100));
        if (l > -1) {
          j = 1, k = l;
          do {
            var u = this._getDaysInMonth(i, j - 1);
            if (k <= u) break;
            j++, k -= u
          } while (!0)
        }
        var t = this._daylightSavingAdjust(new Date(i, j - 1, k));
        if (t.getFullYear() != i || t.getMonth() + 1 != j || t.getDate() != k) throw "Invalid date";
        return t
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
      formatDate: function (a, b, c) {
        if (!b) return "";
        var d = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
          e = (c ? c.dayNames : null) || this._defaults.dayNames,
          f = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
          g = (c ? c.monthNames : null) || this._defaults.monthNames,
          h = function (b) {
            var c = m + 1 < a.length && a.charAt(m + 1) == b;
            return c && m++, c
          },
          i = function (a, b, c) {
            var d = "" + b;
            if (h(a))
              while (d.length < c) d = "0" + d;
            return d
          },
          j = function (a, b, c, d) {
            return h(a) ? d[b] : c[b]
          },
          k = "",
          l = !1;
        if (b)
          for (var m = 0; m < a.length; m++)
            if (l) a.charAt(m) == "'" && !h("'") ? l = !1 : k += a.charAt(m);
            else switch (a.charAt(m)) {
              case "d":
                k += i("d", b.getDate(), 2);
                break;
              case "D":
                k += j("D", b.getDay(), d, e);
                break;
              case "o":
                k += i("o", Math.round(((new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
                break;
              case "m":
                k += i("m", b.getMonth() + 1, 2);
                break;
              case "M":
                k += j("M", b.getMonth(), f, g);
                break;
              case "y":
                k += h("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
                break;
              case "@":
                k += b.getTime();
                break;
              case "!":
                k += b.getTime() * 1e4 + this._ticksTo1970;
                break;
              case "'":
                h("'") ? k += "'" : l = !0;
                break;
              default:
                k += a.charAt(m)
            }
        return k
      },
      _possibleChars: function (a) {
        var b = "",
          c = !1,
          d = function (b) {
            var c = e + 1 < a.length && a.charAt(e + 1) == b;
            return c && e++, c
          };
        for (var e = 0; e < a.length; e++)
          if (c) a.charAt(e) == "'" && !d("'") ? c = !1 : b += a.charAt(e);
          else switch (a.charAt(e)) {
            case "d":
            case "m":
            case "y":
            case "@":
              b += "0123456789";
              break;
            case "D":
            case "M":
              return null;
            case "'":
              d("'") ? b += "'" : c = !0;
              break;
            default:
              b += a.charAt(e)
          }
        return b
      },
      _get: function (a, b) {
        return a.settings[b] !== undefined ? a.settings[b] : this._defaults[b]
      },
      _setDateFromField: function (a, b) {
        if (a.input.val() == a.lastVal) return;
        var c = this._get(a, "dateFormat"),
          d = a.lastVal = a.input ? a.input.val() : null,
          e, f;
        e = f = this._getDefaultDate(a);
        var g = this._getFormatConfig(a);
        try {
          e = this.parseDate(c, d, g) || f
        } catch (h) {
          this.log(h), d = b ? "" : d
        }
        a.selectedDay = e.getDate(), a.drawMonth = a.selectedMonth = e.getMonth(), a.drawYear = a.selectedYear = e.getFullYear(), a.currentDay = d ? e.getDate() : 0, a.currentMonth = d ? e.getMonth() : 0, a.currentYear = d ? e.getFullYear() : 0, this._adjustInstDate(a)
      },
      _getDefaultDate: function (a) {
        return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
      },
      _determineDate: function (a, b, c) {
        var d = function (a) {
            var b = new Date;
            return b.setDate(b.getDate() + a), b
          },
          e = function (b) {
            try {
              return $.datepicker.parseDate($.datepicker._get(a, "dateFormat"), b, $.datepicker._getFormatConfig(a))
            } catch (c) {}
            var d = (b.toLowerCase().match(/^c/) ? $.datepicker._getDate(a) : null) || new Date,
              e = d.getFullYear(),
              f = d.getMonth(),
              g = d.getDate(),
              h = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
              i = h.exec(b);
            while (i) {
              switch (i[2] || "d") {
                case "d":
                case "D":
                  g += parseInt(i[1], 10);
                  break;
                case "w":
                case "W":
                  g += parseInt(i[1], 10) * 7;
                  break;
                case "m":
                case "M":
                  f += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f));
                  break;
                case "y":
                case "Y":
                  e += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f))
              }
              i = h.exec(b)
            }
            return new Date(e, f, g)
          },
          f = b == null || b === "" ? c : typeof b == "string" ? e(b) : typeof b == "number" ? isNaN(b) ? c : d(b) : new Date(b.getTime());
        return f = f && f.toString() == "Invalid Date" ? c : f, f && (f.setHours(0), f.setMinutes(0), f.setSeconds(0), f.setMilliseconds(0)), this._daylightSavingAdjust(f)
      },
      _daylightSavingAdjust: function (a) {
        return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
      },
      _setDate: function (a, b, c) {
        var d = !b,
          e = a.selectedMonth,
          f = a.selectedYear,
          g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
        a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), (e != a.selectedMonth || f != a.selectedYear) && !c && this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
      },
      _getDate: function (a) {
        var b = !a.currentYear || a.input && a.input.val() == "" ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
        return b
      },
      _attachHandlers: function (a) {
        var b = this._get(a, "stepMonths"),
          c = "#" + a.id;
        a.dpDiv.find("[data-handler]").map(function () {
          var a = {
            prev: function () {
              window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, -b, "M")
            },
            next: function () {
              window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, +b, "M")
            },
            hide: function () {
              window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
            },
            today: function () {
              window["DP_jQuery_" + dpuuid].datepicker._gotoToday(c)
            },
            selectDay: function () {
              return window["DP_jQuery_" + dpuuid].datepicker._selectDay(c, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
            },
            selectMonth: function () {
              return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c, this, "M"), !1
            },
            selectYear: function () {
              return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c, this, "Y"), !1
            }
          };
          $(this).bind(this.getAttribute("data-event"), a[this.getAttribute("data-handler")])
        })
      },
      _generateHTML: function (a) {
        var b = new Date;
        b = this._daylightSavingAdjust(new Date(b.getFullYear(), b.getMonth(), b.getDate()));
        var c = this._get(a, "isRTL"),
          d = this._get(a, "showButtonPanel"),
          e = this._get(a, "hideIfNoPrevNext"),
          f = this._get(a, "navigationAsDateFormat"),
          g = this._getNumberOfMonths(a),
          h = this._get(a, "showCurrentAtPos"),
          i = this._get(a, "stepMonths"),
          j = g[0] != 1 || g[1] != 1,
          k = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
          l = this._getMinMaxDate(a, "min"),
          m = this._getMinMaxDate(a, "max"),
          n = a.drawMonth - h,
          o = a.drawYear;
        n < 0 && (n += 12, o--);
        if (m) {
          var p = this._daylightSavingAdjust(new Date(m.getFullYear(), m.getMonth() - g[0] * g[1] + 1, m.getDate()));
          p = l && p < l ? l : p;
          while (this._daylightSavingAdjust(new Date(o, n, 1)) > p) n--, n < 0 && (n = 11, o--)
        }
        a.drawMonth = n, a.drawYear = o;
        var q = this._get(a, "prevText");
        q = f ? this.formatDate(q, this._daylightSavingAdjust(new Date(o, n - i, 1)), this._getFormatConfig(a)) : q;
        var r = this._canAdjustMonth(a, -1, o, n) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>" : e ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>",
          s = this._get(a, "nextText");
        s = f ? this.formatDate(s, this._daylightSavingAdjust(new Date(o, n + i, 1)), this._getFormatConfig(a)) : s;
        var t = this._canAdjustMonth(a, 1, o, n) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>" : e ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>",
          u = this._get(a, "currentText"),
          v = this._get(a, "gotoCurrent") && a.currentDay ? k : b;
        u = f ? this.formatDate(u, v, this._getFormatConfig(a)) : u;
        var w = a.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(a, "closeText") + "</button>",
          x = d ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (c ? w : "") + (this._isInRange(a, v) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + u + "</button>" : "") + (c ? "" : w) + "</div>" : "",
          y = parseInt(this._get(a, "firstDay"), 10);
        y = isNaN(y) ? 0 : y;
        var z = this._get(a, "showWeek"),
          A = this._get(a, "dayNames"),
          B = this._get(a, "dayNamesShort"),
          C = this._get(a, "dayNamesMin"),
          D = this._get(a, "monthNames"),
          E = this._get(a, "monthNamesShort"),
          F = this._get(a, "beforeShowDay"),
          G = this._get(a, "showOtherMonths"),
          H = this._get(a, "selectOtherMonths"),
          I = this._get(a, "calculateWeek") || this.iso8601Week,
          J = this._getDefaultDate(a),
          K = "";
        for (var L = 0; L < g[0]; L++) {
          var M = "";
          this.maxRows = 4;
          for (var N = 0; N < g[1]; N++) {
            var O = this._daylightSavingAdjust(new Date(o, n, a.selectedDay)),
              P = " ui-corner-all",
              Q = "";
            if (j) {
              Q += '<div class="ui-datepicker-group';
              if (g[1] > 1) switch (N) {
                case 0:
                  Q += " ui-datepicker-group-first", P = " ui-corner-" + (c ? "right" : "left");
                  break;
                case g[1] - 1:
                  Q += " ui-datepicker-group-last", P = " ui-corner-" + (c ? "left" : "right");
                  break;
                default:
                  Q += " ui-datepicker-group-middle", P = ""
              }
              Q += '">'
            }
            Q += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + P + '">' + (/all|left/.test(P) && L == 0 ? c ? t : r : "") + (/all|right/.test(P) && L == 0 ? c ? r : t : "") + this._generateMonthYearHeader(a, n, o, l, m, L > 0 || N > 0, D, E) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
            var R = z ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : "";
            for (var S = 0; S < 7; S++) {
              var T = (S + y) % 7;
              R += "<th" + ((S + y + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + A[T] + '">' + C[T] + "</span></th>"
            }
            Q += R + "</tr></thead><tbody>";
            var U = this._getDaysInMonth(o, n);
            o == a.selectedYear && n == a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, U));
            var V = (this._getFirstDayOfMonth(o, n) - y + 7) % 7,
              W = Math.ceil((V + U) / 7),
              X = j ? this.maxRows > W ? this.maxRows : W : W;
            this.maxRows = X;
            var Y = this._daylightSavingAdjust(new Date(o, n, 1 - V));
            for (var Z = 0; Z < X; Z++) {
              Q += "<tr>";
              var _ = z ? '<td class="ui-datepicker-week-col">' + this._get(a, "calculateWeek")(Y) + "</td>" : "";
              for (var S = 0; S < 7; S++) {
                var ba = F ? F.apply(a.input ? a.input[0] : null, [Y]) : [!0, ""],
                  bb = Y.getMonth() != n,
                  bc = bb && !H || !ba[0] || l && Y < l || m && Y > m;
                _ += '<td class="' + ((S + y + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (bb ? " ui-datepicker-other-month" : "") + (Y.getTime() == O.getTime() && n == a.selectedMonth && a._keyEvent || J.getTime() == Y.getTime() && J.getTime() == O.getTime() ? " " + this._dayOverClass : "") + (bc ? " " + this._unselectableClass + " ui-state-disabled" : "") + (bb && !G ? "" : " " + ba[1] + (Y.getTime() == k.getTime() ? " " + this._currentClass : "") + (Y.getTime() == b.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!bb || G) && ba[2] ? ' title="' + ba[2] + '"' : "") + (bc ? "" : ' data-handler="selectDay" data-event="click" data-month="' + Y.getMonth() + '" data-year="' + Y.getFullYear() + '"') + ">" + (bb && !G ? "&#xa0;" : bc ? '<span class="ui-state-default">' + Y.getDate() + "</span>" : '<a class="ui-state-default' + (Y.getTime() == b.getTime() ? " ui-state-highlight" : "") + (Y.getTime() == k.getTime() ? " ui-state-active" : "") + (bb ? " ui-priority-secondary" : "") + '" href="#">' + Y.getDate() + "</a>") + "</td>", Y.setDate(Y.getDate() + 1), Y = this._daylightSavingAdjust(Y)
              }
              Q += _ + "</tr>"
            }
            n++, n > 11 && (n = 0, o++), Q += "</tbody></table>" + (j ? "</div>" + (g[0] > 0 && N == g[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), M += Q
          }
          K += M
        }
        return K += x + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), a._keyEvent = !1, K
      },
      _generateMonthYearHeader: function (a, b, c, d, e, f, g, h) {
        var i = this._get(a, "changeMonth"),
          j = this._get(a, "changeYear"),
          k = this._get(a, "showMonthAfterYear"),
          l = '<div class="ui-datepicker-title">',
          m = "";
        if (f || !i) m += '<span class="ui-datepicker-month">' + g[b] + "</span>";
        else {
          var n = d && d.getFullYear() == c,
            o = e && e.getFullYear() == c;
          m += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
          for (var p = 0; p < 12; p++)(!n || p >= d.getMonth()) && (!o || p <= e.getMonth()) && (m += '<option value="' + p + '"' + (p == b ? ' selected="selected"' : "") + ">" + h[p] + "</option>");
          m += "</select>"
        }
        k || (l += m + (f || !i || !j ? "&#xa0;" : ""));
        if (!a.yearshtml) {
          a.yearshtml = "";
          if (f || !j) l += '<span class="ui-datepicker-year">' + c + "</span>";
          else {
            var q = this._get(a, "yearRange").split(":"),
              r = (new Date).getFullYear(),
              s = function (a) {
                var b = a.match(/c[+-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+-].*/) ? r + parseInt(a, 10) : parseInt(a, 10);
                return isNaN(b) ? r : b
              },
              t = s(q[0]),
              u = Math.max(t, s(q[1] || ""));
            t = d ? Math.max(t, d.getFullYear()) : t, u = e ? Math.min(u, e.getFullYear()) : u, a.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
            for (; t <= u; t++) a.yearshtml += '<option value="' + t + '"' + (t == c ? ' selected="selected"' : "") + ">" + t + "</option>";
            a.yearshtml += "</select>", l += a.yearshtml, a.yearshtml = null
          }
        }
        return l += this._get(a, "yearSuffix"), k && (l += (f || !i || !j ? "&#xa0;" : "") + m), l += "</div>", l
      },
      _adjustInstDate: function (a, b, c) {
        var d = a.drawYear + (c == "Y" ? b : 0),
          e = a.drawMonth + (c == "M" ? b : 0),
          f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + (c == "D" ? b : 0),
          g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
        a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), (c == "M" || c == "Y") && this._notifyChange(a)
      },
      _restrictMinMax: function (a, b) {
        var c = this._getMinMaxDate(a, "min"),
          d = this._getMinMaxDate(a, "max"),
          e = c && b < c ? c : b;
        return e = d && e > d ? d : e, e
      },
      _notifyChange: function (a) {
        var b = this._get(a, "onChangeMonthYear");
        b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
      },
      _getNumberOfMonths: function (a) {
        var b = this._get(a, "numberOfMonths");
        return b == null ? [1, 1] : typeof b == "number" ? [1, b] : b
      },
      _getMinMaxDate: function (a, b) {
        return this._determineDate(a, this._get(a, b + "Date"), null)
      },
      _getDaysInMonth: function (a, b) {
        return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
      },
      _getFirstDayOfMonth: function (a, b) {
        return (new Date(a, b, 1)).getDay()
      },
      _canAdjustMonth: function (a, b, c, d) {
        var e = this._getNumberOfMonths(a),
          f = this._daylightSavingAdjust(new Date(c, d + (b < 0 ? b : e[0] * e[1]), 1));
        return b < 0 && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
      },
      _isInRange: function (a, b) {
        var c = this._getMinMaxDate(a, "min"),
          d = this._getMinMaxDate(a, "max");
        return (!c || b.getTime() >= c.getTime()) && (!d || b.getTime() <= d.getTime())
      },
      _getFormatConfig: function (a) {
        var b = this._get(a, "shortYearCutoff");
        return b = typeof b != "string" ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
          shortYearCutoff: b,
          dayNamesShort: this._get(a, "dayNamesShort"),
          dayNames: this._get(a, "dayNames"),
          monthNamesShort: this._get(a, "monthNamesShort"),
          monthNames: this._get(a, "monthNames")
        }
      },
      _formatDate: function (a, b, c, d) {
        b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
        var e = b ? typeof b == "object" ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
        return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
      }
    }), $.fn.datepicker = function (a) {
      if (!this.length) return this;
      $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), $.datepicker.initialized = !0);
      var b = Array.prototype.slice.call(arguments, 1);
      return typeof a != "string" || a != "isDisabled" && a != "getDate" && a != "widget" ? a == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b)) : this.each(function () {
        typeof a == "string" ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this].concat(b)) : $.datepicker._attachDatepicker(this, a)
      }) : $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b))
    }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.8.22", window["DP_jQuery_" + dpuuid] = $
  }(jQuery),
  function (a, b) {
    var c = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
      d = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
      },
      e = {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
      },
      f = a.attrFn || {
        val: !0,
        css: !0,
        html: !0,
        text: !0,
        data: !0,
        width: !0,
        height: !0,
        offset: !0,
        click: !0
      };
    a.widget("ui.dialog", {
      options: {
        autoOpen: !0,
        buttons: {},
        closeOnEscape: !0,
        closeText: "close",
        dialogClass: "",
        draggable: !0,
        hide: null,
        height: "auto",
        maxHeight: !1,
        maxWidth: !1,
        minHeight: 150,
        minWidth: 150,
        modal: !1,
        position: {
          my: "center",
          at: "center",
          collision: "fit",
          using: function (b) {
            var c = a(this).css(b).offset().top;
            c < 0 && a(this).css("top", b.top - c)
          }
        },
        resizable: !0,
        show: null,
        stack: !0,
        title: "",
        width: 300,
        zIndex: 1e3
      },
      _create: function () {
        this.originalTitle = this.element.attr("title"), typeof this.originalTitle != "string" && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
        var b = this,
          d = b.options,
          e = d.title || "&#160;",
          f = a.ui.dialog.getTitleId(b.element),
          g = (b.uiDialog = a("<div></div>")).appendTo(document.body).hide().addClass(c + d.dialogClass).css({
            zIndex: d.zIndex
          }).attr("tabIndex", -1).css("outline", 0).keydown(function (c) {
            d.closeOnEscape && !c.isDefaultPrevented() && c.keyCode && c.keyCode === a.ui.keyCode.ESCAPE && (b.close(c), c.preventDefault())
          }).attr({
            role: "dialog",
            "aria-labelledby": f
          }).mousedown(function (a) {
            b.moveToTop(!1, a)
          }),
          h = b.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g),
          i = (b.uiDialogTitlebar = a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),
          j = a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function () {
            j.addClass("ui-state-hover")
          }, function () {
            j.removeClass("ui-state-hover")
          }).focus(function () {
            j.addClass("ui-state-focus")
          }).blur(function () {
            j.removeClass("ui-state-focus")
          }).click(function (a) {
            return b.close(a), !1
          }).appendTo(i),
          k = (b.uiDialogTitlebarCloseText = a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(d.closeText).appendTo(j),
          l = a("<span></span>").addClass("ui-dialog-title").attr("id", f).html(e).prependTo(i);
        a.isFunction(d.beforeclose) && !a.isFunction(d.beforeClose) && (d.beforeClose = d.beforeclose), i.find("*").add(i).disableSelection(), d.draggable && a.fn.draggable && b._makeDraggable(), d.resizable && a.fn.resizable && b._makeResizable(), b._createButtons(d.buttons), b._isOpen = !1, a.fn.bgiframe && g.bgiframe()
      },
      _init: function () {
        this.options.autoOpen && this.open()
      },
      destroy: function () {
        var a = this;
        return a.overlay && a.overlay.destroy(), a.uiDialog.hide(), a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), a.uiDialog.remove(), a.originalTitle && a.element.attr("title", a.originalTitle), a
      },
      widget: function () {
        return this.uiDialog
      },
      close: function (b) {
        var c = this,
          d, e;
        if (!1 === c._trigger("beforeClose", b)) return;
        return c.overlay && c.overlay.destroy(), c.uiDialog.unbind("keypress.ui-dialog"), c._isOpen = !1, c.options.hide ? c.uiDialog.hide(c.options.hide, function () {
          c._trigger("close", b)
        }) : (c.uiDialog.hide(), c._trigger("close", b)), a.ui.dialog.overlay.resize(), c.options.modal && (d = 0, a(".ui-dialog").each(function () {
          this !== c.uiDialog[0] && (e = a(this).css("z-index"), isNaN(e) || (d = Math.max(d, e)))
        }), a.ui.dialog.maxZ = d), c
      },
      isOpen: function () {
        return this._isOpen
      },
      moveToTop: function (b, c) {
        var d = this,
          e = d.options,
          f;
        return e.modal && !b || !e.stack && !e.modal ? d._trigger("focus", c) : (e.zIndex > a.ui.dialog.maxZ && (a.ui.dialog.maxZ = e.zIndex), d.overlay && (a.ui.dialog.maxZ += 1, d.overlay.$el.css("z-index", a.ui.dialog.overlay.maxZ = a.ui.dialog.maxZ)), f = {
          scrollTop: d.element.scrollTop(),
          scrollLeft: d.element.scrollLeft()
        }, a.ui.dialog.maxZ += 1, d.uiDialog.css("z-index", a.ui.dialog.maxZ), d.element.attr(f), d._trigger("focus", c), d)
      },
      open: function () {
        if (this._isOpen) return;
        var b = this,
          c = b.options,
          d = b.uiDialog;
        return b.overlay = c.modal ? new a.ui.dialog.overlay(b) : null, b._size(), b._position(c.position), d.show(c.show), b.moveToTop(!0), c.modal && d.bind("keydown.ui-dialog", function (b) {
          if (b.keyCode !== a.ui.keyCode.TAB) return;
          var c = a(":tabbable", this),
            d = c.filter(":first"),
            e = c.filter(":last");
          if (b.target === e[0] && !b.shiftKey) return d.focus(1), !1;
          if (b.target === d[0] && b.shiftKey) return e.focus(1), !1
        }), a(b.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus(), b._isOpen = !0, b._trigger("open"), b
      },
      _createButtons: function (b) {
        var c = this,
          d = !1,
          e = a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
          g = a("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);
        c.uiDialog.find(".ui-dialog-buttonpane").remove(), typeof b == "object" && b !== null && a.each(b, function () {
          return !(d = !0)
        }), d && (a.each(b, function (b, d) {
          d = a.isFunction(d) ? {
            click: d,
            text: b
          } : d;
          var e = a('<button type="button"></button>').click(function () {
            d.click.apply(c.element[0], arguments)
          }).appendTo(g);
          a.each(d, function (a, b) {
            if (a === "click") return;
            a in f ? e[a](b) : e.attr(a, b)
          }), a.fn.button && e.button()
        }), e.appendTo(c.uiDialog))
      },
      _makeDraggable: function () {
        function f(a) {
          return {
            position: a.position,
            offset: a.offset
          }
        }
        var b = this,
          c = b.options,
          d = a(document),
          e;
        b.uiDialog.draggable({
          cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
          handle: ".ui-dialog-titlebar",
          containment: "document",
          start: function (d, g) {
            e = c.height === "auto" ? "auto" : a(this).height(), a(this).height(a(this).height()).addClass("ui-dialog-dragging"), b._trigger("dragStart", d, f(g))
          },
          drag: function (a, c) {
            b._trigger("drag", a, f(c))
          },
          stop: function (g, h) {
            c.position = [h.position.left - d.scrollLeft(), h.position.top - d.scrollTop()], a(this).removeClass("ui-dialog-dragging").height(e), b._trigger("dragStop", g, f(h)), a.ui.dialog.overlay.resize()
          }
        })
      },
      _makeResizable: function (c) {
        function h(a) {
          return {
            originalPosition: a.originalPosition,
            originalSize: a.originalSize,
            position: a.position,
            size: a.size
          }
        }
        c = c === b ? this.options.resizable : c;
        var d = this,
          e = d.options,
          f = d.uiDialog.css("position"),
          g = typeof c == "string" ? c : "n,e,s,w,se,sw,ne,nw";
        d.uiDialog.resizable({
          cancel: ".ui-dialog-content",
          containment: "document",
          alsoResize: d.element,
          maxWidth: e.maxWidth,
          maxHeight: e.maxHeight,
          minWidth: e.minWidth,
          minHeight: d._minHeight(),
          handles: g,
          start: function (b, c) {
            a(this).addClass("ui-dialog-resizing"), d._trigger("resizeStart", b, h(c))
          },
          resize: function (a, b) {
            d._trigger("resize", a, h(b))
          },
          stop: function (b, c) {
            a(this).removeClass("ui-dialog-resizing"), e.height = a(this).height(), e.width = a(this).width(), d._trigger("resizeStop", b, h(c)), a.ui.dialog.overlay.resize()
          }
        }).css("position", f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
      },
      _minHeight: function () {
        var a = this.options;
        return a.height === "auto" ? a.minHeight : Math.min(a.minHeight, a.height)
      },
      _position: function (b) {
        var c = [],
          d = [0, 0],
          e;
        if (b) {
          if (typeof b == "string" || typeof b == "object" && "0" in b) c = b.split ? b.split(" ") : [b[0], b[1]], c.length === 1 && (c[1] = c[0]), a.each(["left", "top"], function (a, b) {
            +c[a] === c[a] && (d[a] = c[a], c[a] = b)
          }), b = {
            my: c.join(" "),
            at: c.join(" "),
            offset: d.join(" ")
          };
          b = a.extend({}, a.ui.dialog.prototype.options.position, b)
        } else b = a.ui.dialog.prototype.options.position;
        e = this.uiDialog.is(":visible"), e || this.uiDialog.show(), this.uiDialog.css({
          top: 0,
          left: 0
        }).position(a.extend({
          of: window
        }, b)), e || this.uiDialog.hide()
      },
      _setOptions: function (b) {
        var c = this,
          f = {},
          g = !1;
        a.each(b, function (a, b) {
          c._setOption(a, b), a in d && (g = !0), a in e && (f[a] = b)
        }), g && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", f)
      },
      _setOption: function (b, d) {
        var e = this,
          f = e.uiDialog;
        switch (b) {
          case "beforeclose":
            b = "beforeClose";
            break;
          case "buttons":
            e._createButtons(d);
            break;
          case "closeText":
            e.uiDialogTitlebarCloseText.text("" + d);
            break;
          case "dialogClass":
            f.removeClass(e.options.dialogClass).addClass(c + d);
            break;
          case "disabled":
            d ? f.addClass("ui-dialog-disabled") : f.removeClass("ui-dialog-disabled");
            break;
          case "draggable":
            var g = f.is(":data(draggable)");
            g && !d && f.draggable("destroy"), !g && d && e._makeDraggable();
            break;
          case "position":
            e._position(d);
            break;
          case "resizable":
            var h = f.is(":data(resizable)");
            h && !d && f.resizable("destroy"), h && typeof d == "string" && f.resizable("option", "handles", d), !h && d !== !1 && e._makeResizable(d);
            break;
          case "title":
            a(".ui-dialog-title", e.uiDialogTitlebar).html("" + (d || "&#160;"))
        }
        a.Widget.prototype._setOption.apply(e, arguments)
      },
      _size: function () {
        var b = this.options,
          c, d, e = this.uiDialog.is(":visible");
        this.element.show().css({
          width: "auto",
          minHeight: 0,
          height: 0
        }), b.minWidth > b.width && (b.width = b.minWidth), c = this.uiDialog.css({
          height: "auto",
          width: b.width
        }).height(), d = Math.max(0, b.minHeight - c);
        if (b.height === "auto")
          if (a.support.minHeight) this.element.css({
            minHeight: d,
            height: "auto"
          });
          else {
            this.uiDialog.show();
            var f = this.element.css("height", "auto").height();
            e || this.uiDialog.hide(), this.element.height(Math.max(f, d))
          }
        else this.element.height(Math.max(b.height - c, 0));
        this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
      }
    }), a.extend(a.ui.dialog, {
      version: "1.8.22",
      uuid: 0,
      maxZ: 0,
      getTitleId: function (a) {
        var b = a.attr("id");
        return b || (this.uuid += 1, b = this.uuid), "ui-dialog-title-" + b
      },
      overlay: function (b) {
        this.$el = a.ui.dialog.overlay.create(b)
      }
    }), a.extend(a.ui.dialog.overlay, {
      instances: [],
      oldInstances: [],
      maxZ: 0,
      events: a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (a) {
        return a + ".dialog-overlay"
      }).join(" "),
      create: function (b) {
        this.instances.length === 0 && (setTimeout(function () {
          a.ui.dialog.overlay.instances.length && a(document).bind(a.ui.dialog.overlay.events, function (b) {
            if (a(b.target).zIndex() < a.ui.dialog.overlay.maxZ) return !1
          })
        }, 1), a(document).bind("keydown.dialog-overlay", function (c) {
          b.options.closeOnEscape && !c.isDefaultPrevented() && c.keyCode && c.keyCode === a.ui.keyCode.ESCAPE && (b.close(c), c.preventDefault())
        }), a(window).bind("resize.dialog-overlay", a.ui.dialog.overlay.resize));
        var c = (this.oldInstances.pop() || a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
          width: this.width(),
          height: this.height()
        });
        return a.fn.bgiframe && c.bgiframe(), this.instances.push(c), c
      },
      destroy: function (b) {
        var c = a.inArray(b, this.instances);
        c != -1 && this.oldInstances.push(this.instances.splice(c, 1)[0]), this.instances.length === 0 && a([document, window]).unbind(".dialog-overlay"), b.remove();
        var d = 0;
        a.each(this.instances, function () {
          d = Math.max(d, this.css("z-index"))
        }), this.maxZ = d
      },
      height: function () {
        var b, c;
        return a.browser.msie && a.browser.version < 7 ? (b = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), c = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), b < c ? a(window).height() + "px" : b + "px") : a(document).height() + "px"
      },
      width: function () {
        var b, c;
        return a.browser.msie ? (b = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), c = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), b < c ? a(window).width() + "px" : b + "px") : a(document).width() + "px"
      },
      resize: function () {
        var b = a([]);
        a.each(a.ui.dialog.overlay.instances, function () {
          b = b.add(this)
        }), b.css({
          width: 0,
          height: 0
        }).css({
          width: a.ui.dialog.overlay.width(),
          height: a.ui.dialog.overlay.height()
        })
      }
    }), a.extend(a.ui.dialog.overlay.prototype, {
      destroy: function () {
        a.ui.dialog.overlay.destroy(this.$el)
      }
    })
  }(jQuery),
  function (a, b) {
    a.ui = a.ui || {};
    var c = /left|center|right/,
      d = /top|center|bottom/,
      e = "center",
      f = {},
      g = a.fn.position,
      h = a.fn.offset;
    a.fn.position = function (b) {
        if (!b || !b.of) return g.apply(this, arguments);
        b = a.extend({}, b);
        var h = a(b.of),
          i = h[0],
          j = (b.collision || "flip").split(" "),
          k = b.offset ? b.offset.split(" ") : [0, 0],
          l, m, n;
        return i.nodeType === 9 ? (l = h.width(), m = h.height(), n = {
          top: 0,
          left: 0
        }) : i.setTimeout ? (l = h.width(), m = h.height(), n = {
          top: h.scrollTop(),
          left: h.scrollLeft()
        }) : i.preventDefault ? (b.at = "left top", l = m = 0, n = {
          top: b.of.pageY,
          left: b.of.pageX
        }) : (l = h.outerWidth(), m = h.outerHeight(), n = h.offset()), a.each(["my", "at"], function () {
          var a = (b[this] || "").split(" ");
          a.length === 1 && (a = c.test(a[0]) ? a.concat([e]) : d.test(a[0]) ? [e].concat(a) : [e, e]), a[0] = c.test(a[0]) ? a[0] : e, a[1] = d.test(a[1]) ? a[1] : e, b[this] = a
        }), j.length === 1 && (j[1] = j[0]), k[0] = parseInt(k[0], 10) || 0, k.length === 1 && (k[1] = k[0]), k[1] = parseInt(k[1], 10) || 0, b.at[0] === "right" ? n.left += l : b.at[0] === e && (n.left += l / 2), b.at[1] === "bottom" ? n.top += m : b.at[1] === e && (n.top += m / 2), n.left += k[0], n.top += k[1], this.each(function () {
          var c = a(this),
            d = c.outerWidth(),
            g = c.outerHeight(),
            h = parseInt(a.curCSS(this, "marginLeft", !0)) || 0,
            i = parseInt(a.curCSS(this, "marginTop", !0)) || 0,
            o = d + h + (parseInt(a.curCSS(this, "marginRight", !0)) || 0),
            p = g + i + (parseInt(a.curCSS(this, "marginBottom", !0)) || 0),
            q = a.extend({}, n),
            r;
          b.my[0] === "right" ? q.left -= d : b.my[0] === e && (q.left -= d / 2), b.my[1] === "bottom" ? q.top -= g : b.my[1] === e && (q.top -= g / 2), f.fractions || (q.left = Math.round(q.left), q.top = Math.round(q.top)), r = {
            left: q.left - h,
            top: q.top - i
          }, a.each(["left", "top"], function (c, e) {
            a.ui.position[j[c]] && a.ui.position[j[c]][e](q, {
              targetWidth: l,
              targetHeight: m,
              elemWidth: d,
              elemHeight: g,
              collisionPosition: r,
              collisionWidth: o,
              collisionHeight: p,
              offset: k,
              my: b.my,
              at: b.at
            })
          }), a.fn.bgiframe && c.bgiframe(), c.offset(a.extend(q, {
            using: b.using
          }))
        })
      }, a.ui.position = {
        fit: {
          left: function (b, c) {
            var d = a(window),
              e = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft();
            b.left = e > 0 ? b.left - e : Math.max(b.left - c.collisionPosition.left, b.left)
          },
          top: function (b, c) {
            var d = a(window),
              e = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop();
            b.top = e > 0 ? b.top - e : Math.max(b.top - c.collisionPosition.top, b.top)
          }
        },
        flip: {
          left: function (b, c) {
            if (c.at[0] === e) return;
            var d = a(window),
              f = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft(),
              g = c.my[0] === "left" ? -c.elemWidth : c.my[0] === "right" ? c.elemWidth : 0,
              h = c.at[0] === "left" ? c.targetWidth : -c.targetWidth,
              i = -2 * c.offset[0];
            b.left += c.collisionPosition.left < 0 ? g + h + i : f > 0 ? g + h + i : 0
          },
          top: function (b, c) {
            if (c.at[1] === e) return;
            var d = a(window),
              f = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop(),
              g = c.my[1] === "top" ? -c.elemHeight : c.my[1] === "bottom" ? c.elemHeight : 0,
              h = c.at[1] === "top" ? c.targetHeight : -c.targetHeight,
              i = -2 * c.offset[1];
            b.top += c.collisionPosition.top < 0 ? g + h + i : f > 0 ? g + h + i : 0
          }
        }
      }, a.offset.setOffset || (a.offset.setOffset = function (b, c) {
        /static/.test(a.curCSS(b, "position")) && (b.style.position = "relative");
        var d = a(b),
          e = d.offset(),
          f = parseInt(a.curCSS(b, "top", !0), 10) || 0,
          g = parseInt(a.curCSS(b, "left", !0), 10) || 0,
          h = {
            top: c.top - e.top + f,
            left: c.left - e.left + g
          };
        "using" in c ? c.using.call(b, h) : d.css(h)
      }, a.fn.offset = function (b) {
        var c = this[0];
        return !c || !c.ownerDocument ? null : b ? a.isFunction(b) ? this.each(function (c) {
          a(this).offset(b.call(this, c, a(this).offset()))
        }) : this.each(function () {
          a.offset.setOffset(this, b)
        }) : h.call(this)
      }),
      function () {
        var b = document.getElementsByTagName("body")[0],
          c = document.createElement("div"),
          d, e, g, h, i;
        d = document.createElement(b ? "div" : "body"), g = {
          visibility: "hidden",
          width: 0,
          height: 0,
          border: 0,
          margin: 0,
          background: "none"
        }, b && a.extend(g, {
          position: "absolute",
          left: "-1000px",
          top: "-1000px"
        });
        for (var j in g) d.style[j] = g[j];
        d.appendChild(c), e = b || document.documentElement, e.insertBefore(d, e.firstChild), c.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", h = a(c).offset(function (a, b) {
          return b
        }).offset(), d.innerHTML = "", e.removeChild(d), i = h.top + h.left + (b ? 2e3 : 0), f.fractions = i > 21 && i < 22
      }()
  }(jQuery),
  function (a, b) {
    a.widget("ui.progressbar", {
      options: {
        value: 0,
        max: 100
      },
      min: 0,
      _create: function () {
        this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
          role: "progressbar",
          "aria-valuemin": this.min,
          "aria-valuemax": this.options.max,
          "aria-valuenow": this._value()
        }), this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
      },
      destroy: function () {
        this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), a.Widget.prototype.destroy.apply(this, arguments)
      },
      value: function (a) {
        return a === b ? this._value() : (this._setOption("value", a), this)
      },
      _setOption: function (b, c) {
        b === "value" && (this.options.value = c, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), a.Widget.prototype._setOption.apply(this, arguments)
      },
      _value: function () {
        var a = this.options.value;
        return typeof a != "number" && (a = 0), Math.min(this.options.max, Math.max(this.min, a))
      },
      _percentage: function () {
        return 100 * this._value() / this.options.max
      },
      _refreshValue: function () {
        var a = this.value(),
          b = this._percentage();
        this.oldValue !== a && (this.oldValue = a, this._trigger("change")), this.valueDiv.toggle(a > this.min).toggleClass("ui-corner-right", a === this.options.max).width(b.toFixed(0) + "%"), this.element.attr("aria-valuenow", a)
      }
    }), a.extend(a.ui.progressbar, {
      version: "1.8.22"
    })
  }(jQuery),
  function (a, b) {
    var c = 5;
    a.widget("ui.slider", a.ui.mouse, {
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null
      },
      _create: function () {
        var b = this,
          d = this.options,
          e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
          f = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
          g = d.values && d.values.length || 1,
          h = [];
        this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (d.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = a([]), d.range && (d.range === !0 && (d.values || (d.values = [this._valueMin(), this._valueMin()]), d.values.length && d.values.length !== 2 && (d.values = [d.values[0], d.values[0]])), this.range = a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (d.range === "min" || d.range === "max" ? " ui-slider-range-" + d.range : "")));
        for (var i = e.length; i < g; i += 1) h.push(f);
        this.handles = e.add(a(h.join("")).appendTo(b.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (a) {
          a.preventDefault()
        }).hover(function () {
          d.disabled || a(this).addClass("ui-state-hover")
        }, function () {
          a(this).removeClass("ui-state-hover")
        }).focus(function () {
          d.disabled ? a(this).blur() : (a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), a(this).addClass("ui-state-focus"))
        }).blur(function () {
          a(this).removeClass("ui-state-focus")
        }), this.handles.each(function (b) {
          a(this).data("index.ui-slider-handle", b)
        }), this.handles.keydown(function (d) {
          var e = a(this).data("index.ui-slider-handle"),
            f, g, h, i;
          if (b.options.disabled) return;
          switch (d.keyCode) {
            case a.ui.keyCode.HOME:
            case a.ui.keyCode.END:
            case a.ui.keyCode.PAGE_UP:
            case a.ui.keyCode.PAGE_DOWN:
            case a.ui.keyCode.UP:
            case a.ui.keyCode.RIGHT:
            case a.ui.keyCode.DOWN:
            case a.ui.keyCode.LEFT:
              d.preventDefault();
              if (!b._keySliding) {
                b._keySliding = !0, a(this).addClass("ui-state-active"), f = b._start(d, e);
                if (f === !1) return
              }
          }
          i = b.options.step, b.options.values && b.options.values.length ? g = h = b.values(e) : g = h = b.value();
          switch (d.keyCode) {
            case a.ui.keyCode.HOME:
              h = b._valueMin();
              break;
            case a.ui.keyCode.END:
              h = b._valueMax();
              break;
            case a.ui.keyCode.PAGE_UP:
              h = b._trimAlignValue(g + (b._valueMax() - b._valueMin()) / c);
              break;
            case a.ui.keyCode.PAGE_DOWN:
              h = b._trimAlignValue(g - (b._valueMax() - b._valueMin()) / c);
              break;
            case a.ui.keyCode.UP:
            case a.ui.keyCode.RIGHT:
              if (g === b._valueMax()) return;
              h = b._trimAlignValue(g + i);
              break;
            case a.ui.keyCode.DOWN:
            case a.ui.keyCode.LEFT:
              if (g === b._valueMin()) return;
              h = b._trimAlignValue(g - i)
          }
          b._slide(d, e, h)
        }).keyup(function (c) {
          var d = a(this).data("index.ui-slider-handle");
          b._keySliding && (b._keySliding = !1, b._stop(c, d), b._change(c, d), a(this).removeClass("ui-state-active"))
        }), this._refreshValue(), this._animateOff = !1
      },
      destroy: function () {
        return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
      },
      _mouseCapture: function (b) {
        var c = this.options,
          d, e, f, g, h, i, j, k, l;
        return c.disabled ? !1 : (this.elementSize = {
          width: this.element.outerWidth(),
          height: this.element.outerHeight()
        }, this.elementOffset = this.element.offset(), d = {
          x: b.pageX,
          y: b.pageY
        }, e = this._normValueFromMouse(d), f = this._valueMax() - this._valueMin() + 1, h = this, this.handles.each(function (b) {
          var c = Math.abs(e - h.values(b));
          f > c && (f = c, g = a(this), i = b)
        }), c.range === !0 && this.values(1) === c.min && (i += 1, g = a(this.handles[i])), j = this._start(b, i), j === !1 ? !1 : (this._mouseSliding = !0, h._handleIndex = i, g.addClass("ui-state-active").focus(), k = g.offset(), l = !a(b.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = l ? {
          left: 0,
          top: 0
        } : {
          left: b.pageX - k.left - g.width() / 2,
          top: b.pageY - k.top - g.height() / 2 - (parseInt(g.css("borderTopWidth"), 10) || 0) - (parseInt(g.css("borderBottomWidth"), 10) || 0) + (parseInt(g.css("marginTop"), 10) || 0)
        }, this.handles.hasClass("ui-state-hover") || this._slide(b, i, e), this._animateOff = !0, !0))
      },
      _mouseStart: function (a) {
        return !0
      },
      _mouseDrag: function (a) {
        var b = {
            x: a.pageX,
            y: a.pageY
          },
          c = this._normValueFromMouse(b);
        return this._slide(a, this._handleIndex, c), !1
      },
      _mouseStop: function (a) {
        return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
      },
      _detectOrientation: function () {
        this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
      },
      _normValueFromMouse: function (a) {
        var b, c, d, e, f;
        return this.orientation === "horizontal" ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), d < 0 && (d = 0), this.orientation === "vertical" && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f)
      },
      _start: function (a, b) {
        var c = {
          handle: this.handles[b],
          value: this.value()
        };
        return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c)
      },
      _slide: function (a, b, c) {
        var d, e, f;
        this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (b === 0 && c > d || b === 1 && c < d) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
          handle: this.handles[b],
          value: c,
          values: e
        }), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c, !0))) : c !== this.value() && (f = this._trigger("slide", a, {
          handle: this.handles[b],
          value: c
        }), f !== !1 && this.value(c))
      },
      _stop: function (a, b) {
        var c = {
          handle: this.handles[b],
          value: this.value()
        };
        this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c)
      },
      _change: function (a, b) {
        if (!this._keySliding && !this._mouseSliding) {
          var c = {
            handle: this.handles[b],
            value: this.value()
          };
          this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("change", a, c)
        }
      },
      value: function (a) {
        if (arguments.length) {
          this.options.value = this._trimAlignValue(a), this._refreshValue(), this._change(null, 0);
          return
        }
        return this._value()
      },
      values: function (b, c) {
        var d, e, f;
        if (arguments.length > 1) {
          this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), this._change(null, b);
          return
        }
        if (!arguments.length) return this._values();
        if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value();
        d = this.options.values, e = arguments[0];
        for (f = 0; f < d.length; f += 1) d[f] = this._trimAlignValue(e[f]), this._change(null, f);
        this._refreshValue()
      },
      _setOption: function (b, c) {
        var d, e = 0;
        a.isArray(this.options.values) && (e = this.options.values.length), a.Widget.prototype._setOption.apply(this, arguments);
        switch (b) {
          case "disabled":
            c ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
            break;
          case "orientation":
            this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
            break;
          case "value":
            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
            break;
          case "values":
            this._animateOff = !0, this._refreshValue();
            for (d = 0; d < e; d += 1) this._change(null, d);
            this._animateOff = !1
        }
      },
      _value: function () {
        var a = this.options.value;
        return a = this._trimAlignValue(a), a
      },
      _values: function (a) {
        var b, c, d;
        if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b), b;
        c = this.options.values.slice();
        for (d = 0; d < c.length; d += 1) c[d] = this._trimAlignValue(c[d]);
        return c
      },
      _trimAlignValue: function (a) {
        if (a <= this._valueMin()) return this._valueMin();
        if (a >= this._valueMax()) return this._valueMax();
        var b = this.options.step > 0 ? this.options.step : 1,
          c = (a - this._valueMin()) % b,
          d = a - c;
        return Math.abs(c) * 2 >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5))
      },
      _valueMin: function () {
        return this.options.min
      },
      _valueMax: function () {
        return this.options.max
      },
      _refreshValue: function () {
        var b = this.options.range,
          c = this.options,
          d = this,
          e = this._animateOff ? !1 : c.animate,
          f, g = {},
          h, i, j, k;
        this.options.values && this.options.values.length ? this.handles.each(function (b, i) {
          f = (d.values(b) - d._valueMin()) / (d._valueMax() - d._valueMin()) * 100, g[d.orientation === "horizontal" ? "left" : "bottom"] = f + "%", a(this).stop(1, 1)[e ? "animate" : "css"](g, c.animate), d.options.range === !0 && (d.orientation === "horizontal" ? (b === 0 && d.range.stop(1, 1)[e ? "animate" : "css"]({
            left: f + "%"
          }, c.animate), b === 1 && d.range[e ? "animate" : "css"]({
            width: f - h + "%"
          }, {
            queue: !1,
            duration: c.animate
          })) : (b === 0 && d.range.stop(1, 1)[e ? "animate" : "css"]({
            bottom: f + "%"
          }, c.animate), b === 1 && d.range[e ? "animate" : "css"]({
            height: f - h + "%"
          }, {
            queue: !1,
            duration: c.animate
          }))), h = f
        }) : (i = this.value(), j = this._valueMin(), k = this._valueMax(), f = k !== j ? (i - j) / (k - j) * 100 : 0, g[d.orientation === "horizontal" ? "left" : "bottom"] = f + "%", this.handle.stop(1, 1)[e ? "animate" : "css"](g, c.animate), b === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[e ? "animate" : "css"]({
          width: f + "%"
        }, c.animate), b === "max" && this.orientation === "horizontal" && this.range[e ? "animate" : "css"]({
          width: 100 - f + "%"
        }, {
          queue: !1,
          duration: c.animate
        }), b === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[e ? "animate" : "css"]({
          height: f + "%"
        }, c.animate), b === "max" && this.orientation === "vertical" && this.range[e ? "animate" : "css"]({
          height: 100 - f + "%"
        }, {
          queue: !1,
          duration: c.animate
        }))
      }
    }), a.extend(a.ui.slider, {
      version: "1.8.22"
    })
  }(jQuery),
  function (a, b) {
    function e() {
      return ++c
    }

    function f() {
      return ++d
    }
    var c = 0,
      d = 0;
    a.widget("ui.tabs", {
      options: {
        add: null,
        ajaxOptions: null,
        cache: !1,
        cookie: null,
        collapsible: !1,
        disable: null,
        disabled: [],
        enable: null,
        event: "click",
        fx: null,
        idPrefix: "ui-tabs-",
        load: null,
        panelTemplate: "<div></div>",
        remove: null,
        select: null,
        show: null,
        spinner: "<em>Loading&#8230;</em>",
        tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
      },
      _create: function () {
        this._tabify(!0)
      },
      _setOption: function (a, b) {
        if (a == "selected") {
          if (this.options.collapsible && b == this.options.selected) return;
          this.select(b)
        } else this.options[a] = b, this._tabify()
      },
      _tabId: function (a) {
        return a.title && a.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + e()
      },
      _sanitizeSelector: function (a) {
        return a.replace(/:/g, "\\:")
      },
      _cookie: function () {
        var b = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + f());
        return a.cookie.apply(null, [b].concat(a.makeArray(arguments)))
      },
      _ui: function (a, b) {
        return {
          tab: a,
          panel: b,
          index: this.anchors.index(a)
        }
      },
      _cleanup: function () {
        this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function () {
          var b = a(this);
          b.html(b.data("label.tabs")).removeData("label.tabs")
        })
      },
      _tabify: function (c) {
        function m(b, c) {
          b.css("display", ""), !a.support.opacity && c.opacity && b[0].style.removeAttribute("filter")
        }
        var d = this,
          e = this.options,
          f = /^#.+/;
        this.list = this.element.find("ol,ul").eq(0), this.lis = a(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function () {
          return a("a", this)[0]
        }), this.panels = a([]), this.anchors.each(function (b, c) {
          var g = a(c).attr("href"),
            h = g.split("#")[0],
            i;
          h && (h === location.toString().split("#")[0] || (i = a("base")[0]) && h === i.href) && (g = c.hash, c.href = g);
          if (f.test(g)) d.panels = d.panels.add(d.element.find(d._sanitizeSelector(g)));
          else if (g && g !== "#") {
            a.data(c, "href.tabs", g), a.data(c, "load.tabs", g.replace(/#.*$/, ""));
            var j = d._tabId(c);
            c.href = "#" + j;
            var k = d.element.find("#" + j);
            k.length || (k = a(e.panelTemplate).attr("id", j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(d.panels[b - 1] || d.list), k.data("destroy.tabs", !0)), d.panels = d.panels.add(k)
          } else e.disabled.push(b)
        }), c ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), e.selected === b ? (location.hash && this.anchors.each(function (a, b) {
          if (b.hash == location.hash) return e.selected = a, !1
        }), typeof e.selected != "number" && e.cookie && (e.selected = parseInt(d._cookie(), 10)), typeof e.selected != "number" && this.lis.filter(".ui-tabs-selected").length && (e.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), e.selected = e.selected || (this.lis.length ? 0 : -1)) : e.selected === null && (e.selected = -1), e.selected = e.selected >= 0 && this.anchors[e.selected] || e.selected < 0 ? e.selected : 0, e.disabled = a.unique(e.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"), function (a, b) {
          return d.lis.index(a)
        }))).sort(), a.inArray(e.selected, e.disabled) != -1 && e.disabled.splice(a.inArray(e.selected, e.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), e.selected >= 0 && this.anchors.length && (d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(e.selected).addClass("ui-tabs-selected ui-state-active"), d.element.queue("tabs", function () {
          d._trigger("show", null, d._ui(d.anchors[e.selected], d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash))[0]))
        }), this.load(e.selected)), a(window).bind("unload", function () {
          d.lis.add(d.anchors).unbind(".tabs"), d.lis = d.anchors = d.panels = null
        })) : e.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[e.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), e.cookie && this._cookie(e.selected, e.cookie);
        for (var g = 0, h; h = this.lis[g]; g++) a(h)[a.inArray(g, e.disabled) != -1 && !a(h).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
        e.cache === !1 && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs");
        if (e.event !== "mouseover") {
          var i = function (a, b) {
              b.is(":not(.ui-state-disabled)") && b.addClass("ui-state-" + a)
            },
            j = function (a, b) {
              b.removeClass("ui-state-" + a)
            };
          this.lis.bind("mouseover.tabs", function () {
            i("hover", a(this))
          }), this.lis.bind("mouseout.tabs", function () {
            j("hover", a(this))
          }), this.anchors.bind("focus.tabs", function () {
            i("focus", a(this).closest("li"))
          }), this.anchors.bind("blur.tabs", function () {
            j("focus", a(this).closest("li"))
          })
        }
        var k, l;
        e.fx && (a.isArray(e.fx) ? (k = e.fx[0], l = e.fx[1]) : k = l = e.fx);
        var n = l ? function (b, c) {
            a(b).closest("li").addClass("ui-tabs-selected ui-state-active"), c.hide().removeClass("ui-tabs-hide").animate(l, l.duration || "normal", function () {
              m(c, l), d._trigger("show", null, d._ui(b, c[0]))
            })
          } : function (b, c) {
            a(b).closest("li").addClass("ui-tabs-selected ui-state-active"), c.removeClass("ui-tabs-hide"), d._trigger("show", null, d._ui(b, c[0]))
          },
          o = k ? function (a, b) {
            b.animate(k, k.duration || "normal", function () {
              d.lis.removeClass("ui-tabs-selected ui-state-active"), b.addClass("ui-tabs-hide"), m(b, k), d.element.dequeue("tabs")
            })
          } : function (a, b, c) {
            d.lis.removeClass("ui-tabs-selected ui-state-active"), b.addClass("ui-tabs-hide"), d.element.dequeue("tabs")
          };
        this.anchors.bind(e.event + ".tabs", function () {
          var b = this,
            c = a(b).closest("li"),
            f = d.panels.filter(":not(.ui-tabs-hide)"),
            g = d.element.find(d._sanitizeSelector(b.hash));
          if (c.hasClass("ui-tabs-selected") && !e.collapsible || c.hasClass("ui-state-disabled") || c.hasClass("ui-state-processing") || d.panels.filter(":animated").length || d._trigger("select", null, d._ui(this, g[0])) === !1) return this.blur(), !1;
          e.selected = d.anchors.index(this), d.abort();
          if (e.collapsible) {
            if (c.hasClass("ui-tabs-selected")) return e.selected = -1, e.cookie && d._cookie(e.selected, e.cookie), d.element.queue("tabs", function () {
              o(b, f)
            }).dequeue("tabs"), this.blur(), !1;
            if (!f.length) return e.cookie && d._cookie(e.selected, e.cookie), d.element.queue("tabs", function () {
              n(b, g)
            }), d.load(d.anchors.index(this)), this.blur(), !1
          }
          e.cookie && d._cookie(e.selected, e.cookie);
          if (g.length) f.length && d.element.queue("tabs", function () {
            o(b, f)
          }), d.element.queue("tabs", function () {
            n(b, g)
          }), d.load(d.anchors.index(this));
          else throw "jQuery UI Tabs: Mismatching fragment identifier.";
          a.browser.msie && this.blur()
        }), this.anchors.bind("click.tabs", function () {
          return !1
        })
      },
      _getIndex: function (a) {
        return typeof a == "string" && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a
      },
      destroy: function () {
        var b = this.options;
        return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function () {
          var b = a.data(this, "href.tabs");
          b && (this.href = b);
          var c = a(this).unbind(".tabs");
          a.each(["href", "load", "cache"], function (a, b) {
            c.removeData(b + ".tabs")
          })
        }), this.lis.unbind(".tabs").add(this.panels).each(function () {
          a.data(this, "destroy.tabs") ? a(this).remove() : a(this).removeClass(["ui-state-default", "ui-corner-top", "ui-tabs-selected", "ui-state-active", "ui-state-hover", "ui-state-focus", "ui-state-disabled", "ui-tabs-panel", "ui-widget-content", "ui-corner-bottom", "ui-tabs-hide"].join(" "))
        }), b.cookie && this._cookie(null, b.cookie), this
      },
      add: function (c, d, e) {
        e === b && (e = this.anchors.length);
        var f = this,
          g = this.options,
          h = a(g.tabTemplate.replace(/#\{href\}/g, c).replace(/#\{label\}/g, d)),
          i = c.indexOf("#") ? this._tabId(a("a", h)[0]) : c.replace("#", "");
        h.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
        var j = f.element.find("#" + i);
        return j.length || (j = a(g.panelTemplate).attr("id", i).data("destroy.tabs", !0)), j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), e >= this.lis.length ? (h.appendTo(this.list), j.appendTo(this.list[0].parentNode)) : (h.insertBefore(this.lis[e]), j.insertBefore(this.panels[e])), g.disabled = a.map(g.disabled, function (a, b) {
          return a >= e ? ++a : a
        }), this._tabify(), this.anchors.length == 1 && (g.selected = 0, h.addClass("ui-tabs-selected ui-state-active"), j.removeClass("ui-tabs-hide"), this.element.queue("tabs", function () {
          f._trigger("show", null, f._ui(f.anchors[0], f.panels[0]))
        }), this.load(0)), this._trigger("add", null, this._ui(this.anchors[e], this.panels[e])), this
      },
      remove: function (b) {
        b = this._getIndex(b);
        var c = this.options,
          d = this.lis.eq(b).remove(),
          e = this.panels.eq(b).remove();
        return d.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(b + (b + 1 < this.anchors.length ? 1 : -1)), c.disabled = a.map(a.grep(c.disabled, function (a, c) {
          return a != b
        }), function (a, c) {
          return a >= b ? --a : a
        }), this._tabify(), this._trigger("remove", null, this._ui(d.find("a")[0], e[0])), this
      },
      enable: function (b) {
        b = this._getIndex(b);
        var c = this.options;
        if (a.inArray(b, c.disabled) == -1) return;
        return this.lis.eq(b).removeClass("ui-state-disabled"), c.disabled = a.grep(c.disabled, function (a, c) {
          return a != b
        }), this._trigger("enable", null, this._ui(this.anchors[b], this.panels[b])), this
      },
      disable: function (a) {
        a = this._getIndex(a);
        var b = this,
          c = this.options;
        return a != c.selected && (this.lis.eq(a).addClass("ui-state-disabled"), c.disabled.push(a), c.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[a], this.panels[a]))), this
      },
      select: function (a) {
        a = this._getIndex(a);
        if (a == -1)
          if (this.options.collapsible && this.options.selected != -1) a = this.options.selected;
          else return this;
        return this.anchors.eq(a).trigger(this.options.event + ".tabs"), this
      },
      load: function (b) {
        b = this._getIndex(b);
        var c = this,
          d = this.options,
          e = this.anchors.eq(b)[0],
          f = a.data(e, "load.tabs");
        this.abort();
        if (!f || this.element.queue("tabs").length !== 0 && a.data(e, "cache.tabs")) {
          this.element.dequeue("tabs");
          return
        }
        this.lis.eq(b).addClass("ui-state-processing");
        if (d.spinner) {
          var g = a("span", e);
          g.data("label.tabs", g.html()).html(d.spinner)
        }
        return this.xhr = a.ajax(a.extend({}, d.ajaxOptions, {
          url: f,
          success: function (f, g) {
            c.element.find(c._sanitizeSelector(e.hash)).html(f), c._cleanup(), d.cache && a.data(e, "cache.tabs", !0), c._trigger("load", null, c._ui(c.anchors[b], c.panels[b]));
            try {
              d.ajaxOptions.success(f, g)
            } catch (h) {}
          },
          error: function (a, f, g) {
            c._cleanup(), c._trigger("load", null, c._ui(c.anchors[b], c.panels[b]));
            try {
              d.ajaxOptions.error(a, f, b, e)
            } catch (g) {}
          }
        })), c.element.dequeue("tabs"), this
      },
      abort: function () {
        return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this
      },
      url: function (a, b) {
        return this.anchors.eq(a).removeData("cache.tabs").data("load.tabs", b), this
      },
      length: function () {
        return this.anchors.length
      }
    }), a.extend(a.ui.tabs, {
      version: "1.8.22"
    }), a.extend(a.ui.tabs.prototype, {
      rotation: null,
      rotate: function (a, b) {
        var c = this,
          d = this.options,
          e = c._rotate || (c._rotate = function (b) {
            clearTimeout(c.rotation), c.rotation = setTimeout(function () {
              var a = d.selected;
              c.select(++a < c.anchors.length ? a : 0)
            }, a), b && b.stopPropagation()
          }),
          f = c._unrotate || (c._unrotate = b ? function (a) {
            e()
          } : function (a) {
            a.clientX && c.rotate(null)
          });
        return a ? (this.element.bind("tabsshow", e), this.anchors.bind(d.event + ".tabs", f), e()) : (clearTimeout(c.rotation), this.element.unbind("tabsshow", e), this.anchors.unbind(d.event + ".tabs", f), delete this._rotate, delete this._unrotate), this
      }
    })
  }(jQuery);
/*
jQuery.wizard v1.0.0
https://github.com/kflorence/jquery-wizard/
An asynchronous form wizard that supports branching.

Requires:
 - jQuery 1.3.2+
 - jQuery UI widget 1.8.0+

Copyright (c) 2011 Kyle Florence
Dual licensed under the MIT and GPLv2 licenses.
*/

(function ($, undefined) {

  var excludesFilter,
    count = 0,
    selector = {},
    className = {},

    // Reference to commonly used methods
    aps = Array.prototype.slice,

    // Used to normalize function arguments that can be either
    // an array of values or a single value
    arr = function (obj) {
      return $.isArray(obj) ? obj : [obj];
    },

    // Commonly used strings
    id = "id",
    form = "form",
    click = "click",
    submit = "submit",
    disabled = "disabled",
    wizard = "wizard",

    def = "default",
    num = "number",
    obj = "object",
    str = "string",
    bool = "boolean",

    // Events
    afterBackward = "afterBackward",
    afterDestroy = "afterDestroy",
    afterForward = "afterForward",
    afterSelect = "afterSelect",
    beforeBackward = "beforeBackward",
    beforeDestroy = "beforeDestroy",
    beforeForward = "beforeForward",
    beforeSelect = "beforeSelect",
    beforeSubmit = "beforeSubmit";

  // Generate selectors and class names for common wizard elements
  $.each("branch form header step wrapper".split(" "), function () {
    selector[this] = "." + (className[this] = wizard + "-" + this);
  });

  $.widget("kf." + wizard, {
    version: "1.0.0",
    options: {
      animations: {
        show: {
          options: {
            duration: 0
          },
          properties: {
            opacity: "show"
          }
        },
        hide: {
          options: {
            duration: 0
          },
          properties: {
            opacity: "hide"
          }
        }
      },
      backward: ".backward",
      branches: ".branch",
      disabled: false,
      enableSubmit: false,
      forward: ".forward",
      header: ":header:first",
      initialStep: 0,
      stateAttribute: "data-state",
      stepClasses: {
        current: "current",
        exclude: "exclude",
        stop: "stop",
        submit: "submit",
        unidirectional: "unidirectional"
      },
      steps: ".step",
      submit: ":submit",
      transitions: {},
      unidirectional: false,

      /* callbacks */
      afterBackward: null,
      afterDestroy: null,
      afterForward: null,
      afterSelect: null,
      beforeBackward: null,
      beforeDestroy: null,
      beforeForward: null,
      beforeSelect: null,
      create: null
    },

    _create: function () {
      var $form, $header,
        self = this,
        o = self.options,
        $element = self.element,
        $steps = $element.find(o.steps),
        $stepsWrapper = $steps.eq(0).parent();

      if ($element[0].elements) {
        $form = $element;

        // If element isn't form, look inside and outside element
      } else if (!($form = $element.find(form)).length) {
        $form = $element.closest(form);
      }

      // If header isn't found in element, look in form scope
      if (!($header = $element.find(o.header)).length) {
        $header = $form.find(o.header);
      }

      self.elements = {
        form: $form.addClass(className.form),
        submit: $form.find(o.submit),
        forward: $form.find(o.forward),
        backward: $form.find(o.backward),
        header: $header.addClass(className.header),
        steps: $element.find(o.steps).hide().addClass(className.step),
        branches: $element.find(o.branches).add($stepsWrapper).addClass(className.branch),
        stepsWrapper: $stepsWrapper.addClass(className.wrapper),
        wizard: $element.addClass(wizard)
      };

      if (!$stepsWrapper.attr(id)) {

        // stepsWrapper must have an ID as it also functions as the default branch
        $stepsWrapper.attr(id, wizard + "-" + (++count));
      }

      self.elements.forward.click(function (event) {
        event.preventDefault();
        self.forward(event);
      });

      self.elements.backward.click(function (event) {
        event.preventDefault();
        self.backward(event);
      });

      self._currentState = {
        branchesActivated: [],
        stepsActivated: []
      };

      self._stepCount = self.elements.steps.length;
      self._lastStepIndex = self._stepCount - 1;

      // Cache branch labels for quick access later
      self._branchLabels = [];
      self.elements.steps.each(function (i) {
        self._branchLabels[i] = $(this).parent().attr(id);
      });

      // Called in the context of jQuery's .filter() method in _state()
      self._excludesFilter = function () {
        return !$(this).hasClass(o.stepClasses.exclude);
      };

      // Add default transition function if one wasn't defined
      if (!o.transitions[def]) {
        o.transitions[def] = function (step) {
          return self.stepIndex(step.nextAll(selector.step));
        };
      }

      // Select initial step
      self.select.apply(self, arr(o.initialStep));
    },

    _fastForward: function (toIndex, relative, callback) {
      var i = 0,
        self = this,
        stepIndex = self._currentState.stepIndex,
        stepsTaken = [stepIndex];

      if ($.isFunction(relative)) {
        callback = relative;
        relative = undefined;
      }

      (function next() {
        self._transition(stepIndex, function (step, branch) {
          if ((stepIndex = self.stepIndex(step, branch)) === -1) {
            throw new Error('[_fastForward]: Invalid step "' + step + '"');

          } else if ($.inArray(stepIndex, stepsTaken) >= 0) {
            throw new Error('[_fastForward]: Recursion detected on step "' + step + '"');

          } else {
            stepsTaken.push(stepIndex);

            if (stepIndex === self._lastStepIndex ||
              (relative ? ++i : stepIndex) === toIndex) {
              callback.call(self, stepIndex, stepsTaken);

            } else {
              next();
            }
          }
        });
      })();
    },

    _find: function (needles, haystack, wrap) {
      var element, i, l, needle, type,
        found = [],
        $haystack = haystack instanceof jQuery ? haystack : $(haystack);

      function matchElement(i, current) {
        if (current === needle) {
          element = current;

          // Break from .each loop
          return false;
        }
      }

      if (needles !== null && $haystack.length) {
        needles = arr(needles);

        for (i = 0, l = needles.length; i < l; i++) {
          element = null;
          needle = needles[i];
          type = typeof needle;

          if (type === num) {
            element = $haystack.get(needle);

          } else if (type === str) {
            element = document.getElementById(needle.replace('#', ''));

          } else if (type === obj) {
            if (needle instanceof jQuery && needle.length) {
              needle = needle[0];
            }

            if (needle.nodeType) {
              $haystack.each(matchElement);
            }
          }

          if (element) {
            found.push(element);
          }
        }
      }

      // Returns a jQuery object by default. If the wrap argument is
      // false, it will return an array of elements instead.
      return wrap === false ? found : $(found);
    },

    _move: function (step, branch, relative, history, callback) {
      var self = this,
        current = self._currentState;

      if (typeof branch === bool) {
        callback = history;
        history = relative;
        relative = branch;
        branch = undefined;
      }

      function move(stepIndex, stepsTaken) {
        callback.call(self, stepIndex, $.isArray(history) ?
          history : history !== false ? stepsTaken : undefined);
      }

      if (relative === true) {
        if (step > 0) {
          self._fastForward(step, relative, move);

        } else {
          callback.call(self, current.stepsActivated[
            // Normalize to zero if negative
            Math.max(0, step + (current.stepsActivated.length - 1))]);
        }

        // Don't attempt to move to invalid steps
      } else if ((step = self.stepIndex(step, branch)) !== -1) {
        if (step > current.stepIndex) {
          self._fastForward(step, move);

        } else {
          move.call(self, step);
        }
      }
    },

    _state: function (stepIndex, stepsTaken) {
      if (!this.isValidStepIndex(stepIndex)) {
        return null;
      }

      var o = this.options,
        state = $.extend(true, {}, this._currentState);

      // stepsTaken must be an array of at least one step
      stepsTaken = arr(stepsTaken || stepIndex);

      state.step = this.elements.steps.eq(stepIndex);
      state.branch = state.step.parent();
      state.branchStepCount = state.branch.children(selector.step).length;
      state.isMovingForward = stepIndex > state.stepIndex;
      state.stepIndexInBranch = state.branch.children(selector.step).index(state.step);

      var branchLabel, indexOfBranch, indexOfStep,
        i = 0,
        l = stepsTaken.length;

      for (; i < l; i++) {
        stepIndex = stepsTaken[i];
        branchLabel = this._branchLabels[stepIndex];

        // Going forward
        if (!state.stepIndex || state.stepIndex < stepIndex) {

          // No duplicate steps
          if ($.inArray(stepIndex, state.stepsActivated) < 0) {
            state.stepsActivated.push(stepIndex);

            // No duplicate branch labels
            if ($.inArray(branchLabel, state.branchesActivated) < 0) {
              state.branchesActivated.push(branchLabel);
            }
          }

          // Going backward
        } else if (state.stepIndex > stepIndex) {
          indexOfBranch = $.inArray(branchLabel, state.branchesActivated) + 1;
          indexOfStep = $.inArray(stepIndex, state.stepsActivated) + 1;

          // Don't remove initial branch
          if (indexOfBranch > 0) {
            state.branchesActivated.splice(indexOfBranch,
              // IE requires this argument
              state.branchesActivated.length - 1);
          }

          // Don't remove the initial step
          if (indexOfStep > 0) {
            state.stepsActivated.splice(indexOfStep,
              // IE requires this argument
              state.stepsActivated.length - 1);
          }
        }

        state.stepIndex = stepIndex;
        state.branchLabel = branchLabel;
      }

      // Steps completed: the number of steps we have visited
      state.stepsComplete = Math.max(0, this._find(
        state.stepsActivated, this.elements.steps
      ).filter(this._excludesFilter).length - 1);

      // Steps possible: the number of steps in all of the branches we have visited
      state.stepsPossible = Math.max(0, this._find(
        state.branchesActivated, this.elements.branches
      ).children(selector.step).filter(this._excludesFilter).length - 1);

      $.extend(state, {
        branchLabel: this._branchLabels[stepIndex],
        isFirstStep: stepIndex === 0,
        isFirstStepInBranch: state.stepIndexInBranch === 0,
        isLastStep: stepIndex === this._lastStepIndex,
        isLastStepInBranch: state.stepIndexInBranch === state.branchStepCount - 1,
        percentComplete: (100 * state.stepsComplete / state.stepsPossible),
        stepsRemaining: (state.stepsPossible - state.stepsComplete)
      });

      return state;
    },

    _transition: function (step, branch, action) {
      var self = this;

      // args: action
      // step becomes the current step
      if ($.isFunction(step)) {
        action = step;
        step = self._currentState.stepIndex;
        branch = undefined;

        // args: step, action
      } else if ($.isFunction(branch)) {
        action = branch;
        branch = undefined;
      }

      var response,
        o = self.options,
        $step = self.step(step, branch),
        stateName = $step.attr(o.stateAttribute),
        transitionFunc = stateName ? o.transitions[stateName] : o.transitions[def];

      if ($.isFunction(transitionFunc)) {
        response = transitionFunc.call(self, $step, function () {
          return action.apply(self, aps.call(arguments));
        });

      } else {
        response = stateName;
      }

      // A response of 'undefined' or 'false' will halt immediate action
      // waiting instead for the transition function to handle the call
      if (response !== undefined && response !== false) {

        // Response could be array like [ step, branch ]
        action.apply(self, arr(response));
      }

      // The immediate response
      return response;
    },

    _update: function (event, state) {
      var current = this._currentState,
        o = this.options;

      if (current.step) {
        if (o.disabled || !state ||
          state.stepIndex === current.stepIndex ||
          !this._trigger(beforeSelect, event, state) ||
          (state.isMovingForward && !this._trigger(beforeForward, event, state)) ||
          (!state.isMovingForward && !this._trigger(beforeBackward, event, state))) {

          return;
        }

        current.step.removeClass(o.stepClasses.current)
          .animate(o.animations.hide.properties,
            // Fixes #3583 - http://bugs.jquery.com/ticket/3583
            $.extend({}, o.animations.hide.options));
      }

      // Note that this does not affect the value of 'current'
      this._currentState = state;

      state.step.addClass(o.stepClasses.current)
        .animate(o.animations.show.properties,
          // Fixes #3583 - http://bugs.jquery.com/ticket/3583
          $.extend({}, o.animations.show.options));

      if (state.isFirstStep || o.unidirectional ||
        state.step.hasClass(o.stepClasses.unidirectional)) {
        this.elements.backward.attr(disabled, true);

      } else {
        this.elements.backward.removeAttr(disabled);
      }

      if ((state.isLastStepInBranch && !state.step.attr(o.stateAttribute)) ||
        state.step.hasClass(o.stepClasses.stop)) {
        this.elements.forward.attr(disabled, true);

      } else {
        this.elements.forward.removeAttr(disabled);
      }

      if (o.enableSubmit || state.step.hasClass(o.stepClasses.submit)) {
        this.elements.submit.removeAttr(disabled);

      } else {
        this.elements.submit.attr(disabled, true);
      }

      if (current.step) {
        this._trigger(afterSelect, event, state);
        this._trigger(state.isMovingForward ? afterForward : afterBackward, event, state);
      }
    },

    backward: function (event, howMany) {
      if (typeof event === num) {
        howMany = event;
        event = undefined;

      }

      if (howMany === undefined) {
        howMany = 1;
      }

      if (this._currentState.isFirstStep || typeof howMany !== num) {
        return;
      }

      this._move(-howMany, true, false, function (stepIndex, stepsTaken) {
        this._update(event, this._state(stepIndex, stepsTaken));
      });
    },

    branch: function (branch) {
      return arguments.length ?
        this._find(branch, this.elements.branches) : this._currentState.branch;
    },

    branches: function (branch) {
      return arguments.length ?
        this.branch(branch).children(selector.branch) : this.elements.branches;
    },

    branchesActivated: function () {
      return this._find(this._currentState.branchesActivated, this.elements.branches);
    },

    destroy: function () {
      var $elements = this.elements;

      if (!this._trigger(beforeDestroy, null, this.state())) {
        return;
      }

      this.element.removeClass(wizard);

      $elements.form.removeClass(className.form);
      $elements.header.removeClass(className.header);
      $elements.steps.show().removeClass(className.step);
      $elements.stepsWrapper.removeClass(className.wrapper);
      $elements.branches.removeClass(className.branch);

      $.Widget.prototype.destroy.call(this);

      this._trigger(afterDestroy);
    },

    form: function () {
      return this.elements.form;
    },

    forward: function (event, howMany, history) {
      if (typeof event === num) {
        history = howMany;
        howMany = event;
        event = undefined;

      }

      if (howMany === undefined) {
        howMany = 1;
      }

      if (this._currentState.isLastStep || typeof howMany !== num) {
        return;
      }

      this._move(howMany, true, history, function (stepIndex, stepsTaken) {
        this._update(event, this._state(stepIndex, stepsTaken));
      });
    },

    isValidStep: function (step, branch) {
      return this.isValidStepIndex(this.stepIndex(step, branch));
    },

    isValidStepIndex: function (stepIndex) {
      return typeof stepIndex === num && stepIndex >= 0 && stepIndex <= this._lastStepIndex;
    },

    stepCount: function () {
      return this._stepCount;
    },

    select: function (event, step, branch, relative, history) {

      // args: step, branch, relative, history
      if (!(event instanceof $.Event)) {
        history = relative;
        relative = branch;
        branch = step;
        step = event;
        event = undefined;
      }

      if (step === undefined) {
        return;
      }

      // args: [ step, branch ], relative, history
      if ($.isArray(step)) {
        history = relative;
        relative = branch;
        branch = step[1];
        step = step[0];

        // args: step, relative, history
      } else if (typeof branch === bool) {
        history = relative;
        relative = branch;
        branch = undefined;

        // args: step, history
      } else if ($.isArray(branch)) {
        history = branch;
        branch = undefined;
      }

      this._move(step, branch, relative, history, function (stepIndex, stepsTaken) {
        this._update(event, this._state(stepIndex, stepsTaken));
      });
    },

    state: function (step, branch, stepsTaken) {
      if (!arguments.length) {
        return this._currentState;
      }

      // args: [ step, branch ], stepsTaken
      if ($.isArray(step)) {
        stepsTaken = branch;
        branch = step[1];
        step = step[0];

        // args: step, stepsTaken
      } else if ($.isArray(branch)) {
        stepsTaken = branch;
        branch = undefined;
      }

      return this._state(this.stepIndex(step, branch), stepsTaken);
    },

    step: function (step, branch) {
      if (!arguments.length) {
        return this._currentState.step;
      }

      // args: [ step, branch ]
      if ($.isArray(step)) {
        branch = step[1];
        step = step[0];
      }

      var $step,
        type = typeof step;

      // Searching for a step by index
      if (type === num) {
        $step = this._find(step,
          // Search within branch, if defined, otherwise search all steps
          branch !== undefined ? this.steps(branch) : this.elements.steps);

        // Searching for a step or branch by string ID, DOM element or jQuery object
      } else {
        $step = this._find(step, this.elements.steps.add(this.elements.branches));

        if ($step && $step.hasClass(className.branch)) {

          // If a branch is found, the arguments are essentially flip-flopped
          $step = this._find(branch || 0, this.steps($step));
        }
      }

      return $step;
    },

    stepIndex: function (step, branch, relative) {
      if (!arguments.length) {
        return this._currentState.stepIndex;
      }

      var $step;

      // args: [ step, branch ], relative
      if ($.isArray(step)) {
        relative = branch;
        branch = step[1];
        step = step[0];

        // args: step, relative
      } else if (typeof branch === bool) {
        relative = branch;
        branch = undefined;
      }

      return ($step = this.step(step, branch)) ?
        // The returned index can be relative to a branch, or to all steps
        (relative ? $step.siblings(selector.step).andSelf() : this.elements.steps).index($step) :
        -1;
    },

    steps: function (branch) {
      return arguments.length ?
        this.branch(branch).children(selector.step) : this.elements.steps;
    },

    stepsActivated: function () {
      return this._find(this._currentState.stepsActivated, this.elements.steps);
    },

    submit: function () {
      this.elements.form.submit();
    }
  });

})(jQuery);
/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 JÃ¶rn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

  $.extend($.fn, {
    // http://docs.jquery.com/Plugins/Validation/validate
    validate: function (options) {

      // if nothing is selected, return nothing; can't chain anyway
      if (!this.length) {
        if (options && options.debug && window.console) {
          console.warn("Nothing selected, can't validate, returning nothing.");
        }
        return;
      }

      // check if a validator for this form was already created
      var validator = $.data(this[0], "validator");
      if (validator) {
        return validator;
      }

      // Add novalidate tag if HTML5.
      this.attr("novalidate", "novalidate");

      validator = new $.validator(options, this[0]);
      $.data(this[0], "validator", validator);

      if (validator.settings.onsubmit) {

        this.validateDelegate(":submit", "click", function (event) {
          if (validator.settings.submitHandler) {
            validator.submitButton = event.target;
          }
          // allow suppressing validation by adding a cancel class to the submit button
          if ($(event.target).hasClass("cancel")) {
            validator.cancelSubmit = true;
          }

          // allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
          if ($(event.target).attr("formnovalidate") !== undefined) {
            validator.cancelSubmit = true;
          }
        });

        // validate the form on submit
        this.submit(function (event) {
          if (validator.settings.debug) {
            // prevent form submit to be able to see console output
            event.preventDefault();
          }

          function handle() {
            var hidden;
            if (validator.settings.submitHandler) {
              if (validator.submitButton) {
                // insert a hidden input as a replacement for the missing submit button
                hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
              }
              validator.settings.submitHandler.call(validator, validator.currentForm, event);
              if (validator.submitButton) {
                // and clean up afterwards; thanks to no-block-scope, hidden can be referenced
                hidden.remove();
              }
              return false;
            }
            return true;
          }

          // prevent submit for invalid forms or custom submit handlers
          if (validator.cancelSubmit) {
            validator.cancelSubmit = false;
            return handle();
          }
          if (validator.form()) {
            if (validator.pendingRequest) {
              validator.formSubmitted = true;
              return false;
            }
            return handle();
          } else {
            validator.focusInvalid();
            return false;
          }
        });
      }

      return validator;
    },
    // http://docs.jquery.com/Plugins/Validation/valid
    valid: function () {
      if ($(this[0]).is("form")) {
        return this.validate().form();
      } else {
        var valid = true;
        var validator = $(this[0].form).validate();
        this.each(function () {
          valid = valid && validator.element(this);
        });
        return valid;
      }
    },
    // attributes: space seperated list of attributes to retrieve and remove
    removeAttrs: function (attributes) {
      var result = {},
        $element = this;
      $.each(attributes.split(/\s/), function (index, value) {
        result[value] = $element.attr(value);
        $element.removeAttr(value);
      });
      return result;
    },
    // http://docs.jquery.com/Plugins/Validation/rules
    rules: function (command, argument) {
      var element = this[0];

      if (command) {
        var settings = $.data(element.form, "validator").settings;
        var staticRules = settings.rules;
        var existingRules = $.validator.staticRules(element);
        switch (command) {
          case "add":
            $.extend(existingRules, $.validator.normalizeRule(argument));
            // remove messages from rules, but allow them to be set separetely
            delete existingRules.messages;
            staticRules[element.name] = existingRules;
            if (argument.messages) {
              settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
            }
            break;
          case "remove":
            if (!argument) {
              delete staticRules[element.name];
              return existingRules;
            }
            var filtered = {};
            $.each(argument.split(/\s/), function (index, method) {
              filtered[method] = existingRules[method];
              delete existingRules[method];
            });
            return filtered;
        }
      }

      var data = $.validator.normalizeRules(
        $.extend({},
          $.validator.classRules(element),
          $.validator.attributeRules(element),
          $.validator.dataRules(element),
          $.validator.staticRules(element)
        ), element);

      // make sure required is at front
      if (data.required) {
        var param = data.required;
        delete data.required;
        data = $.extend({
          required: param
        }, data);
      }

      return data;
    }
  });

  // Custom selectors
  $.extend($.expr[":"], {
    // http://docs.jquery.com/Plugins/Validation/blank
    blank: function (a) {
      return !$.trim("" + $(a).val());
    },
    // http://docs.jquery.com/Plugins/Validation/filled
    filled: function (a) {
      return !!$.trim("" + $(a).val());
    },
    // http://docs.jquery.com/Plugins/Validation/unchecked
    unchecked: function (a) {
      return !$(a).prop("checked");
    }
  });

  // constructor for validator
  $.validator = function (options, form) {
    this.settings = $.extend(true, {}, $.validator.defaults, options);
    this.currentForm = form;
    this.init();
  };

  $.validator.format = function (source, params) {
    if (arguments.length === 1) {
      return function () {
        var args = $.makeArray(arguments);
        args.unshift(source);
        return $.validator.format.apply(this, args);
      };
    }
    if (arguments.length > 2 && params.constructor !== Array) {
      params = $.makeArray(arguments).slice(1);
    }
    if (params.constructor !== Array) {
      params = [params];
    }
    $.each(params, function (i, n) {
      source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
        return n;
      });
    });
    return source;
  };

  $.extend($.validator, {

    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "span",
      focusInvalid: true,
      errorContainer: $([]),
      errorLabelContainer: $([]),
      onsubmit: true,
      ignore: ":hidden",
      ignoreTitle: false,
      onfocusin: function (element, event) {
        this.lastActive = element;

        // hide error label and remove error class on focus if enabled
        if (this.settings.focusCleanup && !this.blockFocusCleanup) {
          if (this.settings.unhighlight) {
            this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
          }
          this.addWrapper(this.errorsFor(element)).hide();
        }
      },
      onfocusout: function (element, event) {
        if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
          this.element(element);
        }
      },
      onkeyup: function (element, event) {
        if (event.which === 9 && this.elementValue(element) === "") {
          return;
        } else if (element.name in this.submitted || element === this.lastElement) {
          this.element(element);
        }
      },
      onclick: function (element, event) {
        // click on selects, radiobuttons and checkboxes
        if (element.name in this.submitted) {
          this.element(element);
        }
        // or option elements, check parent select in that case
        else if (element.parentNode.name in this.submitted) {
          this.element(element.parentNode);
        }
      },
      highlight: function (element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).addClass(errorClass).removeClass(validClass);
        } else {
          $(element).addClass(errorClass).removeClass(validClass);
        }
      },
      unhighlight: function (element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).removeClass(errorClass).addClass(validClass);
        } else {
          $(element).removeClass(errorClass).addClass(validClass);
        }
      }
    },

    // http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
    setDefaults: function (settings) {
      $.extend($.validator.defaults, settings);
    },

    messages: {
      required: "Required",
      remote: "Please fix this field.",
      email: "Wrong email.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: $.validator.format("Please enter no more than {0} characters."),
      minlength: $.validator.format("Please enter at least {0} characters."),
      rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
      range: $.validator.format("Please enter a value between {0} and {1}."),
      max: $.validator.format("Please enter a value less than or equal to {0}."),
      min: $.validator.format("Please enter a value greater than or equal to {0}.")
    },

    autoCreateRanges: false,

    prototype: {

      init: function () {
        this.labelContainer = $(this.settings.errorLabelContainer);
        this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
        this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
        this.submitted = {};
        this.valueCache = {};
        this.pendingRequest = 0;
        this.pending = {};
        this.invalid = {};
        this.reset();

        var groups = (this.groups = {});
        $.each(this.settings.groups, function (key, value) {
          if (typeof value === "string") {
            value = value.split(/\s/);
          }
          $.each(value, function (index, name) {
            groups[name] = key;
          });
        });
        var rules = this.settings.rules;
        $.each(rules, function (key, value) {
          rules[key] = $.validator.normalizeRule(value);
        });

        function delegate(event) {
          var validator = $.data(this[0].form, "validator"),
            eventType = "on" + event.type.replace(/^validate/, "");
          if (!validator) return;
          validator.settings[eventType] && validator.settings[eventType].call(validator, this[0], event);
        }
        $(this.currentForm)
          .validateDelegate(":text, [type='password'], [type='file'], select, textarea, " +
            "[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
            "[type='email'], [type='datetime'], [type='date'], [type='month'], " +
            "[type='week'], [type='time'], [type='datetime-local'], " +
            "[type='range'], [type='color'] ",
            "focusin focusout keyup", delegate)
          .validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

        if (this.settings.invalidHandler) {
          $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
        }
      },

      // http://docs.jquery.com/Plugins/Validation/Validator/form
      form: function () {
        this.checkForm();
        $.extend(this.submitted, this.errorMap);
        this.invalid = $.extend({}, this.errorMap);
        if (!this.valid()) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
        }
        this.showErrors();
        return this.valid();
      },

      checkForm: function () {
        this.prepareForm();
        for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
          this.check(elements[i]);
        }
        return this.valid();
      },

      // http://docs.jquery.com/Plugins/Validation/Validator/element
      element: function (element) {
        element = this.validationTargetFor(this.clean(element));
        this.lastElement = element;
        this.prepareElement(element);
        this.currentElements = $(element);
        var result = this.check(element) !== false;
        if (result) {
          delete this.invalid[element.name];
        } else {
          this.invalid[element.name] = true;
        }
        if (!this.numberOfInvalids()) {
          // Hide error containers on last error
          this.toHide = this.toHide.add(this.containers);
        }
        this.showErrors();
        return result;
      },

      // http://docs.jquery.com/Plugins/Validation/Validator/showErrors
      showErrors: function (errors) {
        if (errors) {
          // add items to error list and map
          $.extend(this.errorMap, errors);
          this.errorList = [];
          for (var name in errors) {
            this.errorList.push({
              message: errors[name],
              element: this.findByName(name)[0]
            });
          }
          // remove items from success list
          this.successList = $.grep(this.successList, function (element) {
            return !(element.name in errors);
          });
        }
        if (this.settings.showErrors) {
          this.settings.showErrors.call(this, this.errorMap, this.errorList);
        } else {
          this.defaultShowErrors();
        }
      },

      // http://docs.jquery.com/Plugins/Validation/Validator/resetForm
      resetForm: function () {
        if ($.fn.resetForm) {
          $(this.currentForm).resetForm();
        }
        this.submitted = {};
        this.lastElement = null;
        this.prepareForm();
        this.hideErrors();
        this.elements().removeClass(this.settings.errorClass).removeData("previousValue");
      },

      numberOfInvalids: function () {
        return this.objectLength(this.invalid);
      },

      objectLength: function (obj) {
        var count = 0;
        for (var i in obj) {
          count++;
        }
        return count;
      },

      hideErrors: function () {
        this.addWrapper(this.toHide).hide();
      },

      valid: function () {
        return this.size() === 0;
      },

      size: function () {
        return this.errorList.length;
      },

      focusInvalid: function () {
        if (this.settings.focusInvalid) {
          try {
            $(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
              .filter(":visible")
              .focus()
              // manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
              .trigger("focusin");
          } catch (e) {
            // ignore IE throwing errors when focusing hidden elements
          }
        }
      },

      findLastActive: function () {
        var lastActive = this.lastActive;
        return lastActive && $.grep(this.errorList, function (n) {
          return n.element.name === lastActive.name;
        }).length === 1 && lastActive;
      },

      elements: function () {
        var validator = this,
          rulesCache = {};

        // select all valid inputs inside the form (no submit or reset buttons)
        return $(this.currentForm)
          .find("input, select, textarea")
          .not(":submit, :reset, :image, [disabled]")
          .not(this.settings.ignore)
          .filter(function () {
            if (!this.name && validator.settings.debug && window.console) {
              console.error("%o has no name assigned", this);
            }

            // select only the first element for each name, and only those with rules specified
            if (this.name in rulesCache || !validator.objectLength($(this).rules())) {
              return false;
            }

            rulesCache[this.name] = true;
            return true;
          });
      },

      clean: function (selector) {
        return $(selector)[0];
      },

      errors: function () {
        var errorClass = this.settings.errorClass.replace(" ", ".");
        return $(this.settings.errorElement + "." + errorClass, this.errorContext);
      },

      reset: function () {
        this.successList = [];
        this.errorList = [];
        this.errorMap = {};
        this.toShow = $([]);
        this.toHide = $([]);
        this.currentElements = $([]);
      },

      prepareForm: function () {
        this.reset();
        this.toHide = this.errors().add(this.containers);
      },

      prepareElement: function (element) {
        this.reset();
        this.toHide = this.errorsFor(element);
      },

      elementValue: function (element) {
        var type = $(element).attr("type"),
          val = $(element).val();

        if (type === "radio" || type === "checkbox") {
          return $("input[name='" + $(element).attr("name") + "']:checked").val();
        }

        if (typeof val === "string") {
          return val.replace(/\r/g, "");
        }
        return val;
      },

      check: function (element) {
        element = this.validationTargetFor(this.clean(element));

        var rules = $(element).rules();
        var dependencyMismatch = false;
        var val = this.elementValue(element);
        var result;

        for (var method in rules) {
          var rule = {
            method: method,
            parameters: rules[method]
          };
          try {

            result = $.validator.methods[method].call(this, val, element, rule.parameters);

            // if a method indicates that the field is optional and therefore valid,
            // don't mark it as valid when there are no other rules
            if (result === "dependency-mismatch") {
              dependencyMismatch = true;
              continue;
            }
            dependencyMismatch = false;

            if (result === "pending") {
              this.toHide = this.toHide.not(this.errorsFor(element));
              return;
            }

            if (!result) {
              this.formatAndAdd(element, rule);
              return false;
            }
          } catch (e) {
            if (this.settings.debug && window.console) {
              console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
            }
            throw e;
          }
        }
        if (dependencyMismatch) {
          return;
        }
        if (this.objectLength(rules)) {
          this.successList.push(element);
        }
        return true;
      },

      // return the custom message for the given element and validation method
      // specified in the element's HTML5 data attribute
      customDataMessage: function (element, method) {
        return $(element).data("msg-" + method.toLowerCase()) || (element.attributes && $(element).attr("data-msg-" + method.toLowerCase()));
      },

      // return the custom message for the given element name and validation method
      customMessage: function (name, method) {
        var m = this.settings.messages[name];
        return m && (m.constructor === String ? m : m[method]);
      },

      // return the first defined argument, allowing empty strings
      findDefined: function () {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] !== undefined) {
            return arguments[i];
          }
        }
        return undefined;
      },

      defaultMessage: function (element, method) {
        return this.findDefined(
          this.customMessage(element.name, method),
          this.customDataMessage(element, method),
          // title is never undefined, so handle empty string as undefined
          !this.settings.ignoreTitle && element.title || undefined,
          $.validator.messages[method],
          "<strong>Warning: No message defined for " + element.name + "</strong>"
        );
      },

      formatAndAdd: function (element, rule) {
        var message = this.defaultMessage(element, rule.method),
          theregex = /\$?\{(\d+)\}/g;
        if (typeof message === "function") {
          message = message.call(this, rule.parameters, element);
        } else if (theregex.test(message)) {
          message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
        }
        this.errorList.push({
          message: message,
          element: element
        });

        this.errorMap[element.name] = message;
        this.submitted[element.name] = message;
      },

      addWrapper: function (toToggle) {
        if (this.settings.wrapper) {
          toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
        }
        return toToggle;
      },

      defaultShowErrors: function () {
        var i, elements;
        for (i = 0; this.errorList[i]; i++) {
          var error = this.errorList[i];
          if (this.settings.highlight) {
            this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
          }
          this.showLabel(error.element, error.message);
        }
        if (this.errorList.length) {
          this.toShow = this.toShow.add(this.containers);
        }
        if (this.settings.success) {
          for (i = 0; this.successList[i]; i++) {
            this.showLabel(this.successList[i]);
          }
        }
        if (this.settings.unhighlight) {
          for (i = 0, elements = this.validElements(); elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
          }
        }
        this.toHide = this.toHide.not(this.toShow);
        this.hideErrors();
        this.addWrapper(this.toShow).show();
      },

      validElements: function () {
        return this.currentElements.not(this.invalidElements());
      },

      invalidElements: function () {
        return $(this.errorList).map(function () {
          return this.element;
        });
      },

      showLabel: function (element, message) {
        var label = this.errorsFor(element);
        if (label.length) {
          // refresh error/success class
          label.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
          // replace message on existing label
          label.html(message);
        } else {
          // create label
          label = $("<" + this.settings.errorElement + ">")
            .attr("for", this.idOrName(element))
            .addClass(this.settings.errorClass)
            .html(message || "");
          if (this.settings.wrapper) {
            // make sure the element is visible, even in IE
            // actually showing the wrapped element is handled elsewhere
            label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
          }
          if (!this.labelContainer.append(label).length) {
            if (this.settings.errorPlacement) {
              this.settings.errorPlacement(label, $(element));
            } else {
              label.insertAfter(element);
            }
          }
        }
        if (!message && this.settings.success) {
          label.text("");
          if (typeof this.settings.success === "string") {
            label.addClass(this.settings.success);
          } else {
            this.settings.success(label, element);
          }
        }
        this.toShow = this.toShow.add(label);
      },

      errorsFor: function (element) {
        var name = this.idOrName(element);
        return this.errors().filter(function () {
          return $(this).attr("for") === name;
        });
      },

      idOrName: function (element) {
        return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
      },

      validationTargetFor: function (element) {
        // if radio/checkbox, validate first element in group instead
        if (this.checkable(element)) {
          element = this.findByName(element.name).not(this.settings.ignore)[0];
        }
        return element;
      },

      checkable: function (element) {
        return (/radio|checkbox/i).test(element.type);
      },

      findByName: function (name) {
        return $(this.currentForm).find("[name='" + name + "']");
      },

      getLength: function (value, element) {
        switch (element.nodeName.toLowerCase()) {
          case "select":
            return $("option:selected", element).length;
          case "input":
            if (this.checkable(element)) {
              return this.findByName(element.name).filter(":checked").length;
            }
        }
        return value.length;
      },

      depend: function (param, element) {
        return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
      },

      dependTypes: {
        "boolean": function (param, element) {
          return param;
        },
        "string": function (param, element) {
          return !!$(param, element.form).length;
        },
        "function": function (param, element) {
          return param(element);
        }
      },

      optional: function (element) {
        var val = this.elementValue(element);
        return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
      },

      startRequest: function (element) {
        if (!this.pending[element.name]) {
          this.pendingRequest++;
          this.pending[element.name] = true;
        }
      },

      stopRequest: function (element, valid) {
        this.pendingRequest--;
        // sometimes synchronization fails, make sure pendingRequest is never < 0
        if (this.pendingRequest < 0) {
          this.pendingRequest = 0;
        }
        delete this.pending[element.name];
        if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
          $(this.currentForm).submit();
          this.formSubmitted = false;
        } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
          this.formSubmitted = false;
        }
      },

      previousValue: function (element) {
        return $.data(element, "previousValue") || $.data(element, "previousValue", {
          old: null,
          valid: true,
          message: this.defaultMessage(element, "remote")
        });
      }

    },

    classRuleSettings: {
      required: {
        required: true
      },
      email: {
        email: true
      },
      url: {
        url: true
      },
      date: {
        date: true
      },
      dateISO: {
        dateISO: true
      },
      number: {
        number: true
      },
      digits: {
        digits: true
      },
      creditcard: {
        creditcard: true
      }
    },

    addClassRules: function (className, rules) {
      if (className.constructor === String) {
        this.classRuleSettings[className] = rules;
      } else {
        $.extend(this.classRuleSettings, className);
      }
    },

    classRules: function (element) {
      var rules = {};
      var classes = $(element).attr("class");
      if (classes) {
        $.each(classes.split(" "), function () {
          if (this in $.validator.classRuleSettings) {
            $.extend(rules, $.validator.classRuleSettings[this]);
          }
        });
      }
      return rules;
    },

    attributeRules: function (element) {
      var rules = {};
      var $element = $(element);
      var type = $element[0].getAttribute("type");

      for (var method in $.validator.methods) {
        var value;

        // support for <input required> in both html5 and older browsers
        if (method === "required") {
          value = $element.get(0).getAttribute(method);
          // Some browsers return an empty string for the required attribute
          // and non-HTML5 browsers might have required="" markup
          if (value === "") {
            value = true;
          }
          // force non-HTML5 browsers to return bool
          value = !!value;
        } else {
          value = $element.attr(method);
        }

        // convert the value to a number for number inputs, and for text for backwards compability
        // allows type="date" and others to be compared as strings
        if (/min|max/.test(method) && (type === null || /number|range|text/.test(type))) {
          value = Number(value);
        }

        if (value) {
          rules[method] = value;
        } else if (type === method && type !== 'range') {
          // exception: the jquery validate 'range' method
          // does not test for the html5 'range' type
          rules[method] = true;
        }
      }

      // maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
      if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
        delete rules.maxlength;
      }

      return rules;
    },

    dataRules: function (element) {
      var method, value,
        rules = {},
        $element = $(element);
      for (method in $.validator.methods) {
        value = $element.data("rule-" + method.toLowerCase());
        if (value !== undefined) {
          rules[method] = value;
        }
      }
      return rules;
    },

    staticRules: function (element) {
      var rules = {};
      var validator = $.data(element.form, "validator");
      if (validator.settings.rules) {
        rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
      }
      return rules;
    },

    normalizeRules: function (rules, element) {
      // handle dependency check
      $.each(rules, function (prop, val) {
        // ignore rule when param is explicitly false, eg. required:false
        if (val === false) {
          delete rules[prop];
          return;
        }
        if (val.param || val.depends) {
          var keepRule = true;
          switch (typeof val.depends) {
            case "string":
              keepRule = !!$(val.depends, element.form).length;
              break;
            case "function":
              keepRule = val.depends.call(element, element);
              break;
          }
          if (keepRule) {
            rules[prop] = val.param !== undefined ? val.param : true;
          } else {
            delete rules[prop];
          }
        }
      });

      // evaluate parameters
      $.each(rules, function (rule, parameter) {
        rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
      });

      // clean number parameters
      $.each(['minlength', 'maxlength'], function () {
        if (rules[this]) {
          rules[this] = Number(rules[this]);
        }
      });
      $.each(['rangelength', 'range'], function () {
        var parts;
        if (rules[this]) {
          if ($.isArray(rules[this])) {
            rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
          } else if (typeof rules[this] === "string") {
            parts = rules[this].split(/[\s,]+/);
            rules[this] = [Number(parts[0]), Number(parts[1])];
          }
        }
      });

      if ($.validator.autoCreateRanges) {
        // auto-create ranges
        if (rules.min && rules.max) {
          rules.range = [rules.min, rules.max];
          delete rules.min;
          delete rules.max;
        }
        if (rules.minlength && rules.maxlength) {
          rules.rangelength = [rules.minlength, rules.maxlength];
          delete rules.minlength;
          delete rules.maxlength;
        }
      }

      return rules;
    },

    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function (data) {
      if (typeof data === "string") {
        var transformed = {};
        $.each(data.split(/\s/), function () {
          transformed[this] = true;
        });
        data = transformed;
      }
      return data;
    },

    // http://docs.jquery.com/Plugins/Validation/Validator/addMethod
    addMethod: function (name, method, message) {
      $.validator.methods[name] = method;
      $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
      if (method.length < 3) {
        $.validator.addClassRules(name, $.validator.normalizeRule(name));
      }
    },

    methods: {

      // http://docs.jquery.com/Plugins/Validation/Methods/required
      required: function (value, element, param) {
        // check if dependency is met
        if (!this.depend(param, element)) {
          return "dependency-mismatch";
        }
        if (element.nodeName.toLowerCase() === "select") {
          // could be an array for select-multiple or a string, both are fine this way
          var val = $(element).val();
          return val && val.length > 0;
        }
        if (this.checkable(element)) {
          return this.getLength(value, element) > 0;
        }
        return $.trim(value).length > 0;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/email
      email: function (value, element) {
        // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
        return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/url
      url: function (value, element) {
        // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
        return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/date
      date: function (value, element) {
        return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/dateISO
      dateISO: function (value, element) {
        return this.optional(element) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/number
      number: function (value, element) {
        return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/digits
      digits: function (value, element) {
        return this.optional(element) || /^\d+$/.test(value);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/creditcard
      // based on http://en.wikipedia.org/wiki/Luhn
      creditcard: function (value, element) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        }
        // accept only spaces, digits and dashes
        if (/[^0-9 \-]+/.test(value)) {
          return false;
        }
        var nCheck = 0,
          nDigit = 0,
          bEven = false;

        value = value.replace(/\D/g, "");

        for (var n = value.length - 1; n >= 0; n--) {
          var cDigit = value.charAt(n);
          nDigit = parseInt(cDigit, 10);
          if (bEven) {
            if ((nDigit *= 2) > 9) {
              nDigit -= 9;
            }
          }
          nCheck += nDigit;
          bEven = !bEven;
        }

        return (nCheck % 10) === 0;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/minlength
      minlength: function (value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength($.trim(value), element);
        return this.optional(element) || length >= param;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/maxlength
      maxlength: function (value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength($.trim(value), element);
        return this.optional(element) || length <= param;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/rangelength
      rangelength: function (value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength($.trim(value), element);
        return this.optional(element) || (length >= param[0] && length <= param[1]);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/min
      min: function (value, element, param) {
        return this.optional(element) || value >= param;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/max
      max: function (value, element, param) {
        return this.optional(element) || value <= param;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/range
      range: function (value, element, param) {
        return this.optional(element) || (value >= param[0] && value <= param[1]);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/equalTo
      equalTo: function (value, element, param) {
        // bind to the blur event of the target in order to revalidate whenever the target field is updated
        // TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
        var target = $(param);
        if (this.settings.onfocusout) {
          target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
            $(element).valid();
          });
        }
        return value === target.val();
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/remote
      remote: function (value, element, param) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        }

        var previous = this.previousValue(element);
        if (!this.settings.messages[element.name]) {
          this.settings.messages[element.name] = {};
        }
        previous.originalMessage = this.settings.messages[element.name].remote;
        this.settings.messages[element.name].remote = previous.message;

        param = typeof param === "string" && {
          url: param
        } || param;

        if (previous.old === value) {
          return previous.valid;
        }

        previous.old = value;
        var validator = this;
        this.startRequest(element);
        var data = {};
        data[element.name] = value;
        $.ajax($.extend(true, {
          url: param,
          mode: "abort",
          port: "validate" + element.name,
          dataType: "json",
          data: data,
          success: function (response) {
            validator.settings.messages[element.name].remote = previous.originalMessage;
            var valid = response === true || response === "true";
            if (valid) {
              var submitted = validator.formSubmitted;
              validator.prepareElement(element);
              validator.formSubmitted = submitted;
              validator.successList.push(element);
              delete validator.invalid[element.name];
              validator.showErrors();
            } else {
              var errors = {};
              var message = response || validator.defaultMessage(element, "remote");
              errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
              validator.invalid[element.name] = true;
              validator.showErrors(errors);
            }
            previous.valid = valid;
            validator.stopRequest(element, valid);
          }
        }, param));
        return "pending";
      }

    }

  });

  // deprecated, use $.validator.format instead
  $.format = $.validator.format;

}(jQuery));

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
(function ($) {
  var pendingRequests = {};
  // Use a prefilter if available (1.5+)
  if ($.ajaxPrefilter) {
    $.ajaxPrefilter(function (settings, _, xhr) {
      var port = settings.port;
      if (settings.mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = xhr;
      }
    });
  } else {
    // Proxy ajax
    var ajax = $.ajax;
    $.ajax = function (settings) {
      var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
        port = ("port" in settings ? settings : $.ajaxSettings).port;
      if (mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = ajax.apply(this, arguments);
        return pendingRequests[port];
      }
      return ajax.apply(this, arguments);
    };
  }
}(jQuery));

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
(function ($) {
  $.extend($.fn, {
    validateDelegate: function (delegate, type, handler) {
      return this.bind(type, function (event) {
        var target = $(event.target);
        if (target.is(delegate)) {
          return handler.apply(target, arguments);
        }
      });
    }
  });
}(jQuery));

/**
 * Moment js required for the datepicker
 */
! function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function () {
  "use strict";
  var e, i;

  function c() {
    return e.apply(null, arguments)
  }

  function o(e) {
    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
  }

  function u(e) {
    return null != e && "[object Object]" === Object.prototype.toString.call(e)
  }

  function l(e) {
    return void 0 === e
  }

  function h(e) {
    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
  }

  function d(e) {
    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
  }

  function f(e, t) {
    var n, s = [];
    for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
    return s
  }

  function m(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }

  function _(e, t) {
    for (var n in t) m(t, n) && (e[n] = t[n]);
    return m(t, "toString") && (e.toString = t.toString), m(t, "valueOf") && (e.valueOf = t.valueOf), e
  }

  function y(e, t, n, s) {
    return Tt(e, t, n, s, !0).utc()
  }

  function g(e) {
    return null == e._pf && (e._pf = {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1
    }), e._pf
  }

  function v(e) {
    if (null == e._isValid) {
      var t = g(e),
        n = i.call(t.parsedDateParts, function (e) {
          return null != e
        }),
        s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
      if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;
      e._isValid = s
    }
    return e._isValid
  }

  function p(e) {
    var t = y(NaN);
    return null != e ? _(g(t), e) : g(t).userInvalidated = !0, t
  }
  i = Array.prototype.some ? Array.prototype.some : function (e) {
    for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
      if (s in t && e.call(this, t[s], s, t)) return !0;
    return !1
  };
  var r = c.momentProperties = [];

  function w(e, t) {
    var n, s, i;
    if (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), l(t._i) || (e._i = t._i), l(t._f) || (e._f = t._f), l(t._l) || (e._l = t._l), l(t._strict) || (e._strict = t._strict), l(t._tzm) || (e._tzm = t._tzm), l(t._isUTC) || (e._isUTC = t._isUTC), l(t._offset) || (e._offset = t._offset), l(t._pf) || (e._pf = g(t)), l(t._locale) || (e._locale = t._locale), 0 < r.length)
      for (n = 0; n < r.length; n++) l(i = t[s = r[n]]) || (e[s] = i);
    return e
  }
  var t = !1;

  function M(e) {
    w(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === t && (t = !0, c.updateOffset(this), t = !1)
  }

  function k(e) {
    return e instanceof M || null != e && null != e._isAMomentObject
  }

  function S(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
  }

  function D(e) {
    var t = +e,
      n = 0;
    return 0 !== t && isFinite(t) && (n = S(t)), n
  }

  function a(e, t, n) {
    var s, i = Math.min(e.length, t.length),
      r = Math.abs(e.length - t.length),
      a = 0;
    for (s = 0; s < i; s++)(n && e[s] !== t[s] || !n && D(e[s]) !== D(t[s])) && a++;
    return a + r
  }

  function Y(e) {
    !1 === c.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
  }

  function n(i, r) {
    var a = !0;
    return _(function () {
      if (null != c.deprecationHandler && c.deprecationHandler(null, i), a) {
        for (var e, t = [], n = 0; n < arguments.length; n++) {
          if (e = "", "object" == typeof arguments[n]) {
            for (var s in e += "\n[" + n + "] ", arguments[0]) e += s + ": " + arguments[0][s] + ", ";
            e = e.slice(0, -2)
          } else e = arguments[n];
          t.push(e)
        }
        Y(i + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack), a = !1
      }
      return r.apply(this, arguments)
    }, r)
  }
  var s, O = {};

  function T(e, t) {
    null != c.deprecationHandler && c.deprecationHandler(e, t), O[e] || (Y(t), O[e] = !0)
  }

  function b(e) {
    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
  }

  function x(e, t) {
    var n, s = _({}, e);
    for (n in t) m(t, n) && (u(e[n]) && u(t[n]) ? (s[n] = {}, _(s[n], e[n]), _(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
    for (n in e) m(e, n) && !m(t, n) && u(e[n]) && (s[n] = _({}, s[n]));
    return s
  }

  function P(e) {
    null != e && this.set(e)
  }
  c.suppressDeprecationWarnings = !1, c.deprecationHandler = null, s = Object.keys ? Object.keys : function (e) {
    var t, n = [];
    for (t in e) m(e, t) && n.push(t);
    return n
  };
  var W = {};

  function C(e, t) {
    var n = e.toLowerCase();
    W[n] = W[n + "s"] = W[t] = e
  }

  function H(e) {
    return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0
  }

  function R(e) {
    var t, n, s = {};
    for (n in e) m(e, n) && (t = H(n)) && (s[t] = e[n]);
    return s
  }
  var U = {};

  function F(e, t) {
    U[e] = t
  }

  function L(e, t, n) {
    var s = "" + Math.abs(e),
      i = t - s.length;
    return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s
  }
  var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    V = {},
    E = {};

  function I(e, t, n, s) {
    var i = s;
    "string" == typeof s && (i = function () {
      return this[s]()
    }), e && (E[e] = i), t && (E[t[0]] = function () {
      return L(i.apply(this, arguments), t[1], t[2])
    }), n && (E[n] = function () {
      return this.localeData().ordinal(i.apply(this, arguments), e)
    })
  }

  function A(e, t) {
    return e.isValid() ? (t = j(t, e.localeData()), V[t] = V[t] || function (s) {
      var e, i, t, r = s.match(N);
      for (e = 0, i = r.length; e < i; e++) E[r[e]] ? r[e] = E[r[e]] : r[e] = (t = r[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
      return function (e) {
        var t, n = "";
        for (t = 0; t < i; t++) n += b(r[t]) ? r[t].call(e, s) : r[t];
        return n
      }
    }(t), V[t](e)) : e.localeData().invalidDate()
  }

  function j(e, t) {
    var n = 5;

    function s(e) {
      return t.longDateFormat(e) || e
    }
    for (G.lastIndex = 0; 0 <= n && G.test(e);) e = e.replace(G, s), G.lastIndex = 0, n -= 1;
    return e
  }
  var Z = /\d/,
    z = /\d\d/,
    $ = /\d{3}/,
    q = /\d{4}/,
    J = /[+-]?\d{6}/,
    B = /\d\d?/,
    Q = /\d\d\d\d?/,
    X = /\d\d\d\d\d\d?/,
    K = /\d{1,3}/,
    ee = /\d{1,4}/,
    te = /[+-]?\d{1,6}/,
    ne = /\d+/,
    se = /[+-]?\d+/,
    ie = /Z|[+-]\d\d:?\d\d/gi,
    re = /Z|[+-]\d\d(?::?\d\d)?/gi,
    ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    oe = {};

  function ue(e, n, s) {
    oe[e] = b(n) ? n : function (e, t) {
      return e && s ? s : n
    }
  }

  function le(e, t) {
    return m(oe, e) ? oe[e](t._strict, t._locale) : new RegExp(he(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, i) {
      return t || n || s || i
    })))
  }

  function he(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  }
  var de = {};

  function ce(e, n) {
    var t, s = n;
    for ("string" == typeof e && (e = [e]), h(n) && (s = function (e, t) {
        t[n] = D(e)
      }), t = 0; t < e.length; t++) de[e[t]] = s
  }

  function fe(e, i) {
    ce(e, function (e, t, n, s) {
      n._w = n._w || {}, i(e, n._w, n, s)
    })
  }
  var me = 0,
    _e = 1,
    ye = 2,
    ge = 3,
    ve = 4,
    pe = 5,
    we = 6,
    Me = 7,
    ke = 8;

  function Se(e) {
    return De(e) ? 366 : 365
  }

  function De(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
  }
  I("Y", 0, 0, function () {
    var e = this.year();
    return e <= 9999 ? "" + e : "+" + e
  }), I(0, ["YY", 2], 0, function () {
    return this.year() % 100
  }), I(0, ["YYYY", 4], 0, "year"), I(0, ["YYYYY", 5], 0, "year"), I(0, ["YYYYYY", 6, !0], 0, "year"), C("year", "y"), F("year", 1), ue("Y", se), ue("YY", B, z), ue("YYYY", ee, q), ue("YYYYY", te, J), ue("YYYYYY", te, J), ce(["YYYYY", "YYYYYY"], me), ce("YYYY", function (e, t) {
    t[me] = 2 === e.length ? c.parseTwoDigitYear(e) : D(e)
  }), ce("YY", function (e, t) {
    t[me] = c.parseTwoDigitYear(e)
  }), ce("Y", function (e, t) {
    t[me] = parseInt(e, 10)
  }), c.parseTwoDigitYear = function (e) {
    return D(e) + (68 < D(e) ? 1900 : 2e3)
  };
  var Ye, Oe = Te("FullYear", !0);

  function Te(t, n) {
    return function (e) {
      return null != e ? (xe(this, t, e), c.updateOffset(this, n), this) : be(this, t)
    }
  }

  function be(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
  }

  function xe(e, t, n) {
    e.isValid() && !isNaN(n) && ("FullYear" === t && De(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
  }

  function Pe(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var n, s = (t % (n = 12) + n) % n;
    return e += (t - s) / 12, 1 === s ? De(e) ? 29 : 28 : 31 - s % 7 % 2
  }
  Ye = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
    var t;
    for (t = 0; t < this.length; ++t)
      if (this[t] === e) return t;
    return -1
  }, I("M", ["MM", 2], "Mo", function () {
    return this.month() + 1
  }), I("MMM", 0, 0, function (e) {
    return this.localeData().monthsShort(this, e)
  }), I("MMMM", 0, 0, function (e) {
    return this.localeData().months(this, e)
  }), C("month", "M"), F("month", 8), ue("M", B), ue("MM", B, z), ue("MMM", function (e, t) {
    return t.monthsShortRegex(e)
  }), ue("MMMM", function (e, t) {
    return t.monthsRegex(e)
  }), ce(["M", "MM"], function (e, t) {
    t[_e] = D(e) - 1
  }), ce(["MMM", "MMMM"], function (e, t, n, s) {
    var i = n._locale.monthsParse(e, s, n._strict);
    null != i ? t[_e] = i : g(n).invalidMonth = e
  });
  var We = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    Ce = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
  var He = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

  function Re(e, t) {
    var n;
    if (!e.isValid()) return e;
    if ("string" == typeof t)
      if (/^\d+$/.test(t)) t = D(t);
      else if (!h(t = e.localeData().monthsParse(t))) return e;
    return n = Math.min(e.date(), Pe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
  }

  function Ue(e) {
    return null != e ? (Re(this, e), c.updateOffset(this, !0), this) : be(this, "Month")
  }
  var Fe = ae;
  var Le = ae;

  function Ne() {
    function e(e, t) {
      return t.length - e.length
    }
    var t, n, s = [],
      i = [],
      r = [];
    for (t = 0; t < 12; t++) n = y([2e3, t]), s.push(this.monthsShort(n, "")), i.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
    for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) s[t] = he(s[t]), i[t] = he(i[t]);
    for (t = 0; t < 24; t++) r[t] = he(r[t]);
    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
  }

  function Ge(e) {
    var t;
    if (e < 100 && 0 <= e) {
      var n = Array.prototype.slice.call(arguments);
      n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
    } else t = new Date(Date.UTC.apply(null, arguments));
    return t
  }

  function Ve(e, t, n) {
    var s = 7 + t - n;
    return -((7 + Ge(e, 0, s).getUTCDay() - t) % 7) + s - 1
  }

  function Ee(e, t, n, s, i) {
    var r, a, o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ve(e, s, i);
    return a = o <= 0 ? Se(r = e - 1) + o : o > Se(e) ? (r = e + 1, o - Se(e)) : (r = e, o), {
      year: r,
      dayOfYear: a
    }
  }

  function Ie(e, t, n) {
    var s, i, r = Ve(e.year(), t, n),
      a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
    return a < 1 ? s = a + Ae(i = e.year() - 1, t, n) : a > Ae(e.year(), t, n) ? (s = a - Ae(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a), {
      week: s,
      year: i
    }
  }

  function Ae(e, t, n) {
    var s = Ve(e, t, n),
      i = Ve(e + 1, t, n);
    return (Se(e) - s + i) / 7
  }
  I("w", ["ww", 2], "wo", "week"), I("W", ["WW", 2], "Wo", "isoWeek"), C("week", "w"), C("isoWeek", "W"), F("week", 5), F("isoWeek", 5), ue("w", B), ue("ww", B, z), ue("W", B), ue("WW", B, z), fe(["w", "ww", "W", "WW"], function (e, t, n, s) {
    t[s.substr(0, 1)] = D(e)
  });

  function je(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t))
  }
  I("d", 0, "do", "day"), I("dd", 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e)
  }), I("ddd", 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e)
  }), I("dddd", 0, 0, function (e) {
    return this.localeData().weekdays(this, e)
  }), I("e", 0, 0, "weekday"), I("E", 0, 0, "isoWeekday"), C("day", "d"), C("weekday", "e"), C("isoWeekday", "E"), F("day", 11), F("weekday", 11), F("isoWeekday", 11), ue("d", B), ue("e", B), ue("E", B), ue("dd", function (e, t) {
    return t.weekdaysMinRegex(e)
  }), ue("ddd", function (e, t) {
    return t.weekdaysShortRegex(e)
  }), ue("dddd", function (e, t) {
    return t.weekdaysRegex(e)
  }), fe(["dd", "ddd", "dddd"], function (e, t, n, s) {
    var i = n._locale.weekdaysParse(e, s, n._strict);
    null != i ? t.d = i : g(n).invalidWeekday = e
  }), fe(["d", "e", "E"], function (e, t, n, s) {
    t[s] = D(e)
  });
  var Ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
  var ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
  var $e = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  var qe = ae;
  var Je = ae;
  var Be = ae;

  function Qe() {
    function e(e, t) {
      return t.length - e.length
    }
    var t, n, s, i, r, a = [],
      o = [],
      u = [],
      l = [];
    for (t = 0; t < 7; t++) n = y([2e3, 1]).day(t), s = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), a.push(s), o.push(i), u.push(r), l.push(s), l.push(i), l.push(r);
    for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = he(o[t]), u[t] = he(u[t]), l[t] = he(l[t]);
    this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
  }

  function Xe() {
    return this.hours() % 12 || 12
  }

  function Ke(e, t) {
    I(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t)
    })
  }

  function et(e, t) {
    return t._meridiemParse
  }
  I("H", ["HH", 2], 0, "hour"), I("h", ["hh", 2], 0, Xe), I("k", ["kk", 2], 0, function () {
    return this.hours() || 24
  }), I("hmm", 0, 0, function () {
    return "" + Xe.apply(this) + L(this.minutes(), 2)
  }), I("hmmss", 0, 0, function () {
    return "" + Xe.apply(this) + L(this.minutes(), 2) + L(this.seconds(), 2)
  }), I("Hmm", 0, 0, function () {
    return "" + this.hours() + L(this.minutes(), 2)
  }), I("Hmmss", 0, 0, function () {
    return "" + this.hours() + L(this.minutes(), 2) + L(this.seconds(), 2)
  }), Ke("a", !0), Ke("A", !1), C("hour", "h"), F("hour", 13), ue("a", et), ue("A", et), ue("H", B), ue("h", B), ue("k", B), ue("HH", B, z), ue("hh", B, z), ue("kk", B, z), ue("hmm", Q), ue("hmmss", X), ue("Hmm", Q), ue("Hmmss", X), ce(["H", "HH"], ge), ce(["k", "kk"], function (e, t, n) {
    var s = D(e);
    t[ge] = 24 === s ? 0 : s
  }), ce(["a", "A"], function (e, t, n) {
    n._isPm = n._locale.isPM(e), n._meridiem = e
  }), ce(["h", "hh"], function (e, t, n) {
    t[ge] = D(e), g(n).bigHour = !0
  }), ce("hmm", function (e, t, n) {
    var s = e.length - 2;
    t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s)), g(n).bigHour = !0
  }), ce("hmmss", function (e, t, n) {
    var s = e.length - 4,
      i = e.length - 2;
    t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s, 2)), t[pe] = D(e.substr(i)), g(n).bigHour = !0
  }), ce("Hmm", function (e, t, n) {
    var s = e.length - 2;
    t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s))
  }), ce("Hmmss", function (e, t, n) {
    var s = e.length - 4,
      i = e.length - 2;
    t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s, 2)), t[pe] = D(e.substr(i))
  });
  var tt, nt = Te("Hours", !0),
    st = {
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      longDateFormat: {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      },
      invalidDate: "Invalid date",
      ordinal: "%d",
      dayOfMonthOrdinalParse: /\d{1,2}/,
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      months: Ce,
      monthsShort: He,
      week: {
        dow: 0,
        doy: 6
      },
      weekdays: Ze,
      weekdaysMin: $e,
      weekdaysShort: ze,
      meridiemParse: /[ap]\.?m?\.?/i
    },
    it = {},
    rt = {};

  function at(e) {
    return e ? e.toLowerCase().replace("_", "-") : e
  }

  function ot(e) {
    var t = null;
    if (!it[e] && "undefined" != typeof module && module && module.exports) try {
      t = tt._abbr, require("./locale/" + e), ut(t)
    } catch (e) {}
    return it[e]
  }

  function ut(e, t) {
    var n;
    return e && ((n = l(t) ? ht(e) : lt(e, t)) ? tt = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), tt._abbr
  }

  function lt(e, t) {
    if (null === t) return delete it[e], null;
    var n, s = st;
    if (t.abbr = e, null != it[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = it[e]._config;
    else if (null != t.parentLocale)
      if (null != it[t.parentLocale]) s = it[t.parentLocale]._config;
      else {
        if (null == (n = ot(t.parentLocale))) return rt[t.parentLocale] || (rt[t.parentLocale] = []), rt[t.parentLocale].push({
          name: e,
          config: t
        }), null;
        s = n._config
      } return it[e] = new P(x(s, t)), rt[e] && rt[e].forEach(function (e) {
      lt(e.name, e.config)
    }), ut(e), it[e]
  }

  function ht(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return tt;
    if (!o(e)) {
      if (t = ot(e)) return t;
      e = [e]
    }
    return function (e) {
      for (var t, n, s, i, r = 0; r < e.length;) {
        for (t = (i = at(e[r]).split("-")).length, n = (n = at(e[r + 1])) ? n.split("-") : null; 0 < t;) {
          if (s = ot(i.slice(0, t).join("-"))) return s;
          if (n && n.length >= t && a(i, n, !0) >= t - 1) break;
          t--
        }
        r++
      }
      return tt
    }(e)
  }

  function dt(e) {
    var t, n = e._a;
    return n && -2 === g(e).overflow && (t = n[_e] < 0 || 11 < n[_e] ? _e : n[ye] < 1 || n[ye] > Pe(n[me], n[_e]) ? ye : n[ge] < 0 || 24 < n[ge] || 24 === n[ge] && (0 !== n[ve] || 0 !== n[pe] || 0 !== n[we]) ? ge : n[ve] < 0 || 59 < n[ve] ? ve : n[pe] < 0 || 59 < n[pe] ? pe : n[we] < 0 || 999 < n[we] ? we : -1, g(e)._overflowDayOfYear && (t < me || ye < t) && (t = ye), g(e)._overflowWeeks && -1 === t && (t = Me), g(e)._overflowWeekday && -1 === t && (t = ke), g(e).overflow = t), e
  }

  function ct(e, t, n) {
    return null != e ? e : null != t ? t : n
  }

  function ft(e) {
    var t, n, s, i, r, a = [];
    if (!e._d) {
      var o, u;
      for (o = e, u = new Date(c.now()), s = o._useUTC ? [u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()] : [u.getFullYear(), u.getMonth(), u.getDate()], e._w && null == e._a[ye] && null == e._a[_e] && function (e) {
          var t, n, s, i, r, a, o, u;
          if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, a = 4, n = ct(t.GG, e._a[me], Ie(bt(), 1, 4).year), s = ct(t.W, 1), ((i = ct(t.E, 1)) < 1 || 7 < i) && (u = !0);
          else {
            r = e._locale._week.dow, a = e._locale._week.doy;
            var l = Ie(bt(), r, a);
            n = ct(t.gg, e._a[me], l.year), s = ct(t.w, l.week), null != t.d ? ((i = t.d) < 0 || 6 < i) && (u = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || 6 < t.e) && (u = !0)) : i = r
          }
          s < 1 || s > Ae(n, r, a) ? g(e)._overflowWeeks = !0 : null != u ? g(e)._overflowWeekday = !0 : (o = Ee(n, s, i, r, a), e._a[me] = o.year, e._dayOfYear = o.dayOfYear)
        }(e), null != e._dayOfYear && (r = ct(e._a[me], s[me]), (e._dayOfYear > Se(r) || 0 === e._dayOfYear) && (g(e)._overflowDayOfYear = !0), n = Ge(r, 0, e._dayOfYear), e._a[_e] = n.getUTCMonth(), e._a[ye] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = a[t] = s[t];
      for (; t < 7; t++) e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
      24 === e._a[ge] && 0 === e._a[ve] && 0 === e._a[pe] && 0 === e._a[we] && (e._nextDay = !0, e._a[ge] = 0), e._d = (e._useUTC ? Ge : function (e, t, n, s, i, r, a) {
        var o;
        return e < 100 && 0 <= e ? (o = new Date(e + 400, t, n, s, i, r, a), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, s, i, r, a), o
      }).apply(null, a), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ge] = 24), e._w && void 0 !== e._w.d && e._w.d !== i && (g(e).weekdayMismatch = !0)
    }
  }
  var mt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    _t = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    yt = /Z|[+-]\d\d(?::?\d\d)?/,
    gt = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/]
    ],
    vt = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/]
    ],
    pt = /^\/?Date\((\-?\d+)/i;

  function wt(e) {
    var t, n, s, i, r, a, o = e._i,
      u = mt.exec(o) || _t.exec(o);
    if (u) {
      for (g(e).iso = !0, t = 0, n = gt.length; t < n; t++)
        if (gt[t][1].exec(u[1])) {
          i = gt[t][0], s = !1 !== gt[t][2];
          break
        } if (null == i) return void(e._isValid = !1);
      if (u[3]) {
        for (t = 0, n = vt.length; t < n; t++)
          if (vt[t][1].exec(u[3])) {
            r = (u[2] || " ") + vt[t][0];
            break
          } if (null == r) return void(e._isValid = !1)
      }
      if (!s && null != r) return void(e._isValid = !1);
      if (u[4]) {
        if (!yt.exec(u[4])) return void(e._isValid = !1);
        a = "Z"
      }
      e._f = i + (r || "") + (a || ""), Yt(e)
    } else e._isValid = !1
  }
  var Mt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

  function kt(e, t, n, s, i, r) {
    var a = [function (e) {
      var t = parseInt(e, 10); {
        if (t <= 49) return 2e3 + t;
        if (t <= 999) return 1900 + t
      }
      return t
    }(e), He.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)];
    return r && a.push(parseInt(r, 10)), a
  }
  var St = {
    UT: 0,
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
  };

  function Dt(e) {
    var t, n, s, i = Mt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
    if (i) {
      var r = kt(i[4], i[3], i[2], i[5], i[6], i[7]);
      if (t = i[1], n = r, s = e, t && ze.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (g(s).weekdayMismatch = !0, !(s._isValid = !1))) return;
      e._a = r, e._tzm = function (e, t, n) {
        if (e) return St[e];
        if (t) return 0;
        var s = parseInt(n, 10),
          i = s % 100;
        return (s - i) / 100 * 60 + i
      }(i[8], i[9], i[10]), e._d = Ge.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), g(e).rfc2822 = !0
    } else e._isValid = !1
  }

  function Yt(e) {
    if (e._f !== c.ISO_8601)
      if (e._f !== c.RFC_2822) {
        e._a = [], g(e).empty = !0;
        var t, n, s, i, r, a, o, u, l = "" + e._i,
          h = l.length,
          d = 0;
        for (s = j(e._f, e._locale).match(N) || [], t = 0; t < s.length; t++) i = s[t], (n = (l.match(le(i, e)) || [])[0]) && (0 < (r = l.substr(0, l.indexOf(n))).length && g(e).unusedInput.push(r), l = l.slice(l.indexOf(n) + n.length), d += n.length), E[i] ? (n ? g(e).empty = !1 : g(e).unusedTokens.push(i), a = i, u = e, null != (o = n) && m(de, a) && de[a](o, u._a, u, a)) : e._strict && !n && g(e).unusedTokens.push(i);
        g(e).charsLeftOver = h - d, 0 < l.length && g(e).unusedInput.push(l), e._a[ge] <= 12 && !0 === g(e).bigHour && 0 < e._a[ge] && (g(e).bigHour = void 0), g(e).parsedDateParts = e._a.slice(0), g(e).meridiem = e._meridiem, e._a[ge] = function (e, t, n) {
          var s;
          if (null == n) return t;
          return null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0)), t)
        }(e._locale, e._a[ge], e._meridiem), ft(e), dt(e)
      } else Dt(e);
    else wt(e)
  }

  function Ot(e) {
    var t, n, s, i, r = e._i,
      a = e._f;
    return e._locale = e._locale || ht(e._l), null === r || void 0 === a && "" === r ? p({
      nullInput: !0
    }) : ("string" == typeof r && (e._i = r = e._locale.preparse(r)), k(r) ? new M(dt(r)) : (d(r) ? e._d = r : o(a) ? function (e) {
      var t, n, s, i, r;
      if (0 === e._f.length) return g(e).invalidFormat = !0, e._d = new Date(NaN);
      for (i = 0; i < e._f.length; i++) r = 0, t = w({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], Yt(t), v(t) && (r += g(t).charsLeftOver, r += 10 * g(t).unusedTokens.length, g(t).score = r, (null == s || r < s) && (s = r, n = t));
      _(e, n || t)
    }(e) : a ? Yt(e) : l(n = (t = e)._i) ? t._d = new Date(c.now()) : d(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? (s = t, null === (i = pt.exec(s._i)) ? (wt(s), !1 === s._isValid && (delete s._isValid, Dt(s), !1 === s._isValid && (delete s._isValid, c.createFromInputFallback(s)))) : s._d = new Date(+i[1])) : o(n) ? (t._a = f(n.slice(0), function (e) {
      return parseInt(e, 10)
    }), ft(t)) : u(n) ? function (e) {
      if (!e._d) {
        var t = R(e._i);
        e._a = f([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
          return e && parseInt(e, 10)
        }), ft(e)
      }
    }(t) : h(n) ? t._d = new Date(n) : c.createFromInputFallback(t), v(e) || (e._d = null), e))
  }

  function Tt(e, t, n, s, i) {
    var r, a = {};
    return !0 !== n && !1 !== n || (s = n, n = void 0), (u(e) && function (e) {
      if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
      var t;
      for (t in e)
        if (e.hasOwnProperty(t)) return !1;
      return !0
    }(e) || o(e) && 0 === e.length) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = i, a._l = n, a._i = e, a._f = t, a._strict = s, (r = new M(dt(Ot(a))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r
  }

  function bt(e, t, n, s) {
    return Tt(e, t, n, s, !1)
  }
  c.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
  }), c.ISO_8601 = function () {}, c.RFC_2822 = function () {};
  var xt = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
      var e = bt.apply(null, arguments);
      return this.isValid() && e.isValid() ? e < this ? this : e : p()
    }),
    Pt = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
      var e = bt.apply(null, arguments);
      return this.isValid() && e.isValid() ? this < e ? this : e : p()
    });

  function Wt(e, t) {
    var n, s;
    if (1 === t.length && o(t[0]) && (t = t[0]), !t.length) return bt();
    for (n = t[0], s = 1; s < t.length; ++s) t[s].isValid() && !t[s][e](n) || (n = t[s]);
    return n
  }
  var Ct = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

  function Ht(e) {
    var t = R(e),
      n = t.year || 0,
      s = t.quarter || 0,
      i = t.month || 0,
      r = t.week || t.isoWeek || 0,
      a = t.day || 0,
      o = t.hour || 0,
      u = t.minute || 0,
      l = t.second || 0,
      h = t.millisecond || 0;
    this._isValid = function (e) {
      for (var t in e)
        if (-1 === Ye.call(Ct, t) || null != e[t] && isNaN(e[t])) return !1;
      for (var n = !1, s = 0; s < Ct.length; ++s)
        if (e[Ct[s]]) {
          if (n) return !1;
          parseFloat(e[Ct[s]]) !== D(e[Ct[s]]) && (n = !0)
        } return !0
    }(t), this._milliseconds = +h + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = ht(), this._bubble()
  }

  function Rt(e) {
    return e instanceof Ht
  }

  function Ut(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
  }

  function Ft(e, n) {
    I(e, 0, 0, function () {
      var e = this.utcOffset(),
        t = "+";
      return e < 0 && (e = -e, t = "-"), t + L(~~(e / 60), 2) + n + L(~~e % 60, 2)
    })
  }
  Ft("Z", ":"), Ft("ZZ", ""), ue("Z", re), ue("ZZ", re), ce(["Z", "ZZ"], function (e, t, n) {
    n._useUTC = !0, n._tzm = Nt(re, e)
  });
  var Lt = /([\+\-]|\d\d)/gi;

  function Nt(e, t) {
    var n = (t || "").match(e);
    if (null === n) return null;
    var s = ((n[n.length - 1] || []) + "").match(Lt) || ["-", 0, 0],
      i = 60 * s[1] + D(s[2]);
    return 0 === i ? 0 : "+" === s[0] ? i : -i
  }

  function Gt(e, t) {
    var n, s;
    return t._isUTC ? (n = t.clone(), s = (k(e) || d(e) ? e.valueOf() : bt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), c.updateOffset(n, !1), n) : bt(e).local()
  }

  function Vt(e) {
    return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
  }

  function Et() {
    return !!this.isValid() && (this._isUTC && 0 === this._offset)
  }
  c.updateOffset = function () {};
  var It = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
    At = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function jt(e, t) {
    var n, s, i, r = e,
      a = null;
    return Rt(e) ? r = {
      ms: e._milliseconds,
      d: e._days,
      M: e._months
    } : h(e) ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (a = It.exec(e)) ? (n = "-" === a[1] ? -1 : 1, r = {
      y: 0,
      d: D(a[ye]) * n,
      h: D(a[ge]) * n,
      m: D(a[ve]) * n,
      s: D(a[pe]) * n,
      ms: D(Ut(1e3 * a[we])) * n
    }) : (a = At.exec(e)) ? (n = "-" === a[1] ? -1 : 1, r = {
      y: Zt(a[2], n),
      M: Zt(a[3], n),
      w: Zt(a[4], n),
      d: Zt(a[5], n),
      h: Zt(a[6], n),
      m: Zt(a[7], n),
      s: Zt(a[8], n)
    }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (i = function (e, t) {
      var n;
      if (!e.isValid() || !t.isValid()) return {
        milliseconds: 0,
        months: 0
      };
      t = Gt(t, e), e.isBefore(t) ? n = zt(e, t) : ((n = zt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
      return n
    }(bt(r.from), bt(r.to)), (r = {}).ms = i.milliseconds, r.M = i.months), s = new Ht(r), Rt(e) && m(e, "_locale") && (s._locale = e._locale), s
  }

  function Zt(e, t) {
    var n = e && parseFloat(e.replace(",", "."));
    return (isNaN(n) ? 0 : n) * t
  }

  function zt(e, t) {
    var n = {};
    return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
  }

  function $t(s, i) {
    return function (e, t) {
      var n;
      return null === t || isNaN(+t) || (T(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), qt(this, jt(e = "string" == typeof e ? +e : e, t), s), this
    }
  }

  function qt(e, t, n, s) {
    var i = t._milliseconds,
      r = Ut(t._days),
      a = Ut(t._months);
    e.isValid() && (s = null == s || s, a && Re(e, be(e, "Month") + a * n), r && xe(e, "Date", be(e, "Date") + r * n), i && e._d.setTime(e._d.valueOf() + i * n), s && c.updateOffset(e, r || a))
  }
  jt.fn = Ht.prototype, jt.invalid = function () {
    return jt(NaN)
  };
  var Jt = $t(1, "add"),
    Bt = $t(-1, "subtract");

  function Qt(e, t) {
    var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
      s = e.clone().add(n, "months");
    return -(n + (t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s))) || 0
  }

  function Xt(e) {
    var t;
    return void 0 === e ? this._locale._abbr : (null != (t = ht(e)) && (this._locale = t), this)
  }
  c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  var Kt = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
    return void 0 === e ? this.localeData() : this.locale(e)
  });

  function en() {
    return this._locale
  }
  var tn = 126227808e5;

  function nn(e, t) {
    return (e % t + t) % t
  }

  function sn(e, t, n) {
    return e < 100 && 0 <= e ? new Date(e + 400, t, n) - tn : new Date(e, t, n).valueOf()
  }

  function rn(e, t, n) {
    return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - tn : Date.UTC(e, t, n)
  }

  function an(e, t) {
    I(0, [e, e.length], 0, t)
  }

  function on(e, t, n, s, i) {
    var r;
    return null == e ? Ie(this, s, i).year : ((r = Ae(e, s, i)) < t && (t = r), function (e, t, n, s, i) {
      var r = Ee(e, t, n, s, i),
        a = Ge(r.year, 0, r.dayOfYear);
      return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
    }.call(this, e, t, n, s, i))
  }
  I(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100
  }), I(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100
  }), an("gggg", "weekYear"), an("ggggg", "weekYear"), an("GGGG", "isoWeekYear"), an("GGGGG", "isoWeekYear"), C("weekYear", "gg"), C("isoWeekYear", "GG"), F("weekYear", 1), F("isoWeekYear", 1), ue("G", se), ue("g", se), ue("GG", B, z), ue("gg", B, z), ue("GGGG", ee, q), ue("gggg", ee, q), ue("GGGGG", te, J), ue("ggggg", te, J), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) {
    t[s.substr(0, 2)] = D(e)
  }), fe(["gg", "GG"], function (e, t, n, s) {
    t[s] = c.parseTwoDigitYear(e)
  }), I("Q", 0, "Qo", "quarter"), C("quarter", "Q"), F("quarter", 7), ue("Q", Z), ce("Q", function (e, t) {
    t[_e] = 3 * (D(e) - 1)
  }), I("D", ["DD", 2], "Do", "date"), C("date", "D"), F("date", 9), ue("D", B), ue("DD", B, z), ue("Do", function (e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
  }), ce(["D", "DD"], ye), ce("Do", function (e, t) {
    t[ye] = D(e.match(B)[0])
  });
  var un = Te("Date", !0);
  I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), C("dayOfYear", "DDD"), F("dayOfYear", 4), ue("DDD", K), ue("DDDD", $), ce(["DDD", "DDDD"], function (e, t, n) {
    n._dayOfYear = D(e)
  }), I("m", ["mm", 2], 0, "minute"), C("minute", "m"), F("minute", 14), ue("m", B), ue("mm", B, z), ce(["m", "mm"], ve);
  var ln = Te("Minutes", !1);
  I("s", ["ss", 2], 0, "second"), C("second", "s"), F("second", 15), ue("s", B), ue("ss", B, z), ce(["s", "ss"], pe);
  var hn, dn = Te("Seconds", !1);
  for (I("S", 0, 0, function () {
      return ~~(this.millisecond() / 100)
    }), I(0, ["SS", 2], 0, function () {
      return ~~(this.millisecond() / 10)
    }), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0, function () {
      return 10 * this.millisecond()
    }), I(0, ["SSSSS", 5], 0, function () {
      return 100 * this.millisecond()
    }), I(0, ["SSSSSS", 6], 0, function () {
      return 1e3 * this.millisecond()
    }), I(0, ["SSSSSSS", 7], 0, function () {
      return 1e4 * this.millisecond()
    }), I(0, ["SSSSSSSS", 8], 0, function () {
      return 1e5 * this.millisecond()
    }), I(0, ["SSSSSSSSS", 9], 0, function () {
      return 1e6 * this.millisecond()
    }), C("millisecond", "ms"), F("millisecond", 16), ue("S", K, Z), ue("SS", K, z), ue("SSS", K, $), hn = "SSSS"; hn.length <= 9; hn += "S") ue(hn, ne);

  function cn(e, t) {
    t[we] = D(1e3 * ("0." + e))
  }
  for (hn = "S"; hn.length <= 9; hn += "S") ce(hn, cn);
  var fn = Te("Milliseconds", !1);
  I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");
  var mn = M.prototype;

  function _n(e) {
    return e
  }
  mn.add = Jt, mn.calendar = function (e, t) {
    var n = e || bt(),
      s = Gt(n, this).startOf("day"),
      i = c.calendarFormat(this, s) || "sameElse",
      r = t && (b(t[i]) ? t[i].call(this, n) : t[i]);
    return this.format(r || this.localeData().calendar(i, this, bt(n)))
  }, mn.clone = function () {
    return new M(this)
  }, mn.diff = function (e, t, n) {
    var s, i, r;
    if (!this.isValid()) return NaN;
    if (!(s = Gt(e, this)).isValid()) return NaN;
    switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = H(t)) {
      case "year":
        r = Qt(this, s) / 12;
        break;
      case "month":
        r = Qt(this, s);
        break;
      case "quarter":
        r = Qt(this, s) / 3;
        break;
      case "second":
        r = (this - s) / 1e3;
        break;
      case "minute":
        r = (this - s) / 6e4;
        break;
      case "hour":
        r = (this - s) / 36e5;
        break;
      case "day":
        r = (this - s - i) / 864e5;
        break;
      case "week":
        r = (this - s - i) / 6048e5;
        break;
      default:
        r = this - s
    }
    return n ? r : S(r)
  }, mn.endOf = function (e) {
    var t;
    if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid()) return this;
    var n = this._isUTC ? rn : sn;
    switch (e) {
      case "year":
        t = n(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
        break;
      case "month":
        t = n(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case "isoWeek":
        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        t = this._d.valueOf(), t += 36e5 - nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
        break;
      case "minute":
        t = this._d.valueOf(), t += 6e4 - nn(t, 6e4) - 1;
        break;
      case "second":
        t = this._d.valueOf(), t += 1e3 - nn(t, 1e3) - 1;
        break
    }
    return this._d.setTime(t), c.updateOffset(this, !0), this
  }, mn.format = function (e) {
    e || (e = this.isUtc() ? c.defaultFormatUtc : c.defaultFormat);
    var t = A(this, e);
    return this.localeData().postformat(t)
  }, mn.from = function (e, t) {
    return this.isValid() && (k(e) && e.isValid() || bt(e).isValid()) ? jt({
      to: this,
      from: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
  }, mn.fromNow = function (e) {
    return this.from(bt(), e)
  }, mn.to = function (e, t) {
    return this.isValid() && (k(e) && e.isValid() || bt(e).isValid()) ? jt({
      from: this,
      to: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
  }, mn.toNow = function (e) {
    return this.to(bt(), e)
  }, mn.get = function (e) {
    return b(this[e = H(e)]) ? this[e]() : this
  }, mn.invalidAt = function () {
    return g(this).overflow
  }, mn.isAfter = function (e, t) {
    var n = k(e) ? e : bt(e);
    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
  }, mn.isBefore = function (e, t) {
    var n = k(e) ? e : bt(e);
    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
  }, mn.isBetween = function (e, t, n, s) {
    var i = k(e) ? e : bt(e),
      r = k(t) ? t : bt(t);
    return !!(this.isValid() && i.isValid() && r.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === s[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
  }, mn.isSame = function (e, t) {
    var n, s = k(e) ? e : bt(e);
    return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
  }, mn.isSameOrAfter = function (e, t) {
    return this.isSame(e, t) || this.isAfter(e, t)
  }, mn.isSameOrBefore = function (e, t) {
    return this.isSame(e, t) || this.isBefore(e, t)
  }, mn.isValid = function () {
    return v(this)
  }, mn.lang = Kt, mn.locale = Xt, mn.localeData = en, mn.max = Pt, mn.min = xt, mn.parsingFlags = function () {
    return _({}, g(this))
  }, mn.set = function (e, t) {
    if ("object" == typeof e)
      for (var n = function (e) {
          var t = [];
          for (var n in e) t.push({
            unit: n,
            priority: U[n]
          });
          return t.sort(function (e, t) {
            return e.priority - t.priority
          }), t
        }(e = R(e)), s = 0; s < n.length; s++) this[n[s].unit](e[n[s].unit]);
    else if (b(this[e = H(e)])) return this[e](t);
    return this
  }, mn.startOf = function (e) {
    var t;
    if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid()) return this;
    var n = this._isUTC ? rn : sn;
    switch (e) {
      case "year":
        t = n(this.year(), 0, 1);
        break;
      case "quarter":
        t = n(this.year(), this.month() - this.month() % 3, 1);
        break;
      case "month":
        t = n(this.year(), this.month(), 1);
        break;
      case "week":
        t = n(this.year(), this.month(), this.date() - this.weekday());
        break;
      case "isoWeek":
        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date());
        break;
      case "hour":
        t = this._d.valueOf(), t -= nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
        break;
      case "minute":
        t = this._d.valueOf(), t -= nn(t, 6e4);
        break;
      case "second":
        t = this._d.valueOf(), t -= nn(t, 1e3);
        break
    }
    return this._d.setTime(t), c.updateOffset(this, !0), this
  }, mn.subtract = Bt, mn.toArray = function () {
    var e = this;
    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
  }, mn.toObject = function () {
    var e = this;
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds()
    }
  }, mn.toDate = function () {
    return new Date(this.valueOf())
  }, mn.toISOString = function (e) {
    if (!this.isValid()) return null;
    var t = !0 !== e,
      n = t ? this.clone().utc() : this;
    return n.year() < 0 || 9999 < n.year() ? A(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : b(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", A(n, "Z")) : A(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
  }, mn.inspect = function () {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var e = "moment",
      t = "";
    this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
    var n = "[" + e + '("]',
      s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
      i = t + '[")]';
    return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i)
  }, mn.toJSON = function () {
    return this.isValid() ? this.toISOString() : null
  }, mn.toString = function () {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
  }, mn.unix = function () {
    return Math.floor(this.valueOf() / 1e3)
  }, mn.valueOf = function () {
    return this._d.valueOf() - 6e4 * (this._offset || 0)
  }, mn.creationData = function () {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    }
  }, mn.year = Oe, mn.isLeapYear = function () {
    return De(this.year())
  }, mn.weekYear = function (e) {
    return on.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
  }, mn.isoWeekYear = function (e) {
    return on.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
  }, mn.quarter = mn.quarters = function (e) {
    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
  }, mn.month = Ue, mn.daysInMonth = function () {
    return Pe(this.year(), this.month())
  }, mn.week = mn.weeks = function (e) {
    var t = this.localeData().week(this);
    return null == e ? t : this.add(7 * (e - t), "d")
  }, mn.isoWeek = mn.isoWeeks = function (e) {
    var t = Ie(this, 1, 4).week;
    return null == e ? t : this.add(7 * (e - t), "d")
  }, mn.weeksInYear = function () {
    var e = this.localeData()._week;
    return Ae(this.year(), e.dow, e.doy)
  }, mn.isoWeeksInYear = function () {
    return Ae(this.year(), 1, 4)
  }, mn.date = un, mn.day = mn.days = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var t, n, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - s, "d")) : s
  }, mn.weekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == e ? t : this.add(e - t, "d")
  }, mn.isoWeekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;
    if (null == e) return this.day() || 7;
    var t, n, s = (t = e, n = this.localeData(), "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
    return this.day(this.day() % 7 ? s : s - 7)
  }, mn.dayOfYear = function (e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return null == e ? t : this.add(e - t, "d")
  }, mn.hour = mn.hours = nt, mn.minute = mn.minutes = ln, mn.second = mn.seconds = dn, mn.millisecond = mn.milliseconds = fn, mn.utcOffset = function (e, t, n) {
    var s, i = this._offset || 0;
    if (!this.isValid()) return null != e ? this : NaN;
    if (null == e) return this._isUTC ? i : Vt(this);
    if ("string" == typeof e) {
      if (null === (e = Nt(re, e))) return this
    } else Math.abs(e) < 16 && !n && (e *= 60);
    return !this._isUTC && t && (s = Vt(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), i !== e && (!t || this._changeInProgress ? qt(this, jt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, c.updateOffset(this, !0), this._changeInProgress = null)), this
  }, mn.utc = function (e) {
    return this.utcOffset(0, e)
  }, mn.local = function (e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Vt(this), "m")), this
  }, mn.parseZone = function () {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
    else if ("string" == typeof this._i) {
      var e = Nt(ie, this._i);
      null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
    }
    return this
  }, mn.hasAlignedHourOffset = function (e) {
    return !!this.isValid() && (e = e ? bt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
  }, mn.isDST = function () {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
  }, mn.isLocal = function () {
    return !!this.isValid() && !this._isUTC
  }, mn.isUtcOffset = function () {
    return !!this.isValid() && this._isUTC
  }, mn.isUtc = Et, mn.isUTC = Et, mn.zoneAbbr = function () {
    return this._isUTC ? "UTC" : ""
  }, mn.zoneName = function () {
    return this._isUTC ? "Coordinated Universal Time" : ""
  }, mn.dates = n("dates accessor is deprecated. Use date instead.", un), mn.months = n("months accessor is deprecated. Use month instead", Ue), mn.years = n("years accessor is deprecated. Use year instead", Oe), mn.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
  }), mn.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
    if (!l(this._isDSTShifted)) return this._isDSTShifted;
    var e = {};
    if (w(e, this), (e = Ot(e))._a) {
      var t = e._isUTC ? y(e._a) : bt(e._a);
      this._isDSTShifted = this.isValid() && 0 < a(e._a, t.toArray())
    } else this._isDSTShifted = !1;
    return this._isDSTShifted
  });
  var yn = P.prototype;

  function gn(e, t, n, s) {
    var i = ht(),
      r = y().set(s, t);
    return i[n](r, e)
  }

  function vn(e, t, n) {
    if (h(e) && (t = e, e = void 0), e = e || "", null != t) return gn(e, t, n, "month");
    var s, i = [];
    for (s = 0; s < 12; s++) i[s] = gn(e, s, n, "month");
    return i
  }

  function pn(e, t, n, s) {
    t = ("boolean" == typeof e ? h(t) && (n = t, t = void 0) : (t = e, e = !1, h(n = t) && (n = t, t = void 0)), t || "");
    var i, r = ht(),
      a = e ? r._week.dow : 0;
    if (null != n) return gn(t, (n + a) % 7, s, "day");
    var o = [];
    for (i = 0; i < 7; i++) o[i] = gn(t, (i + a) % 7, s, "day");
    return o
  }
  yn.calendar = function (e, t, n) {
    var s = this._calendar[e] || this._calendar.sameElse;
    return b(s) ? s.call(t, n) : s
  }, yn.longDateFormat = function (e) {
    var t = this._longDateFormat[e],
      n = this._longDateFormat[e.toUpperCase()];
    return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
      return e.slice(1)
    }), this._longDateFormat[e])
  }, yn.invalidDate = function () {
    return this._invalidDate
  }, yn.ordinal = function (e) {
    return this._ordinal.replace("%d", e)
  }, yn.preparse = _n, yn.postformat = _n, yn.relativeTime = function (e, t, n, s) {
    var i = this._relativeTime[n];
    return b(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
  }, yn.pastFuture = function (e, t) {
    var n = this._relativeTime[0 < e ? "future" : "past"];
    return b(n) ? n(t) : n.replace(/%s/i, t)
  }, yn.set = function (e) {
    var t, n;
    for (n in e) b(t = e[n]) ? this[n] = t : this["_" + n] = t;
    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
  }, yn.months = function (e, t) {
    return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || We).test(t) ? "format" : "standalone"][e.month()] : o(this._months) ? this._months : this._months.standalone
  }, yn.monthsShort = function (e, t) {
    return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[We.test(t) ? "format" : "standalone"][e.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
  }, yn.monthsParse = function (e, t, n) {
    var s, i, r;
    if (this._monthsParseExact) return function (e, t, n) {
      var s, i, r, a = e.toLocaleLowerCase();
      if (!this._monthsParse)
        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) r = y([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
      return n ? "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null
    }.call(this, e, t, n);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
      if (i = y([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
      if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
      if (!n && this._monthsParse[s].test(e)) return s
    }
  }, yn.monthsRegex = function (e) {
    return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = Le), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
  }, yn.monthsShortRegex = function (e) {
    return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Fe), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
  }, yn.week = function (e) {
    return Ie(e, this._week.dow, this._week.doy).week
  }, yn.firstDayOfYear = function () {
    return this._week.doy
  }, yn.firstDayOfWeek = function () {
    return this._week.dow
  }, yn.weekdays = function (e, t) {
    var n = o(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
    return !0 === e ? je(n, this._week.dow) : e ? n[e.day()] : n
  }, yn.weekdaysMin = function (e) {
    return !0 === e ? je(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
  }, yn.weekdaysShort = function (e) {
    return !0 === e ? je(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
  }, yn.weekdaysParse = function (e, t, n) {
    var s, i, r;
    if (this._weekdaysParseExact) return function (e, t, n) {
      var s, i, r, a = e.toLocaleLowerCase();
      if (!this._weekdaysParse)
        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) r = y([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
      return n ? "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null
    }.call(this, e, t, n);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
      if (i = y([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
      if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
      if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
      if (!n && this._weekdaysParse[s].test(e)) return s
    }
  }, yn.weekdaysRegex = function (e) {
    return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = qe), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
  }, yn.weekdaysShortRegex = function (e) {
    return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Je), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
  }, yn.weekdaysMinRegex = function (e) {
    return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Be), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
  }, yn.isPM = function (e) {
    return "p" === (e + "").toLowerCase().charAt(0)
  }, yn.meridiem = function (e, t, n) {
    return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
  }, ut("en", {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (e) {
      var t = e % 10;
      return e + (1 === D(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
    }
  }), c.lang = n("moment.lang is deprecated. Use moment.locale instead.", ut), c.langData = n("moment.langData is deprecated. Use moment.localeData instead.", ht);
  var wn = Math.abs;

  function Mn(e, t, n, s) {
    var i = jt(t, n);
    return e._milliseconds += s * i._milliseconds, e._days += s * i._days, e._months += s * i._months, e._bubble()
  }

  function kn(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e)
  }

  function Sn(e) {
    return 4800 * e / 146097
  }

  function Dn(e) {
    return 146097 * e / 4800
  }

  function Yn(e) {
    return function () {
      return this.as(e)
    }
  }
  var On = Yn("ms"),
    Tn = Yn("s"),
    bn = Yn("m"),
    xn = Yn("h"),
    Pn = Yn("d"),
    Wn = Yn("w"),
    Cn = Yn("M"),
    Hn = Yn("Q"),
    Rn = Yn("y");

  function Un(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN
    }
  }
  var Fn = Un("milliseconds"),
    Ln = Un("seconds"),
    Nn = Un("minutes"),
    Gn = Un("hours"),
    Vn = Un("days"),
    En = Un("months"),
    In = Un("years");
  var An = Math.round,
    jn = {
      ss: 44,
      s: 45,
      m: 45,
      h: 22,
      d: 26,
      M: 11
    };
  var Zn = Math.abs;

  function zn(e) {
    return (0 < e) - (e < 0) || +e
  }

  function $n() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e, t, n = Zn(this._milliseconds) / 1e3,
      s = Zn(this._days),
      i = Zn(this._months);
    t = S((e = S(n / 60)) / 60), n %= 60, e %= 60;
    var r = S(i / 12),
      a = i %= 12,
      o = s,
      u = t,
      l = e,
      h = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
      d = this.asSeconds();
    if (!d) return "P0D";
    var c = d < 0 ? "-" : "",
      f = zn(this._months) !== zn(d) ? "-" : "",
      m = zn(this._days) !== zn(d) ? "-" : "",
      _ = zn(this._milliseconds) !== zn(d) ? "-" : "";
    return c + "P" + (r ? f + r + "Y" : "") + (a ? f + a + "M" : "") + (o ? m + o + "D" : "") + (u || l || h ? "T" : "") + (u ? _ + u + "H" : "") + (l ? _ + l + "M" : "") + (h ? _ + h + "S" : "")
  }
  var qn = Ht.prototype;
  return qn.isValid = function () {
    return this._isValid
  }, qn.abs = function () {
    var e = this._data;
    return this._milliseconds = wn(this._milliseconds), this._days = wn(this._days), this._months = wn(this._months), e.milliseconds = wn(e.milliseconds), e.seconds = wn(e.seconds), e.minutes = wn(e.minutes), e.hours = wn(e.hours), e.months = wn(e.months), e.years = wn(e.years), this
  }, qn.add = function (e, t) {
    return Mn(this, e, t, 1)
  }, qn.subtract = function (e, t) {
    return Mn(this, e, t, -1)
  }, qn.as = function (e) {
    if (!this.isValid()) return NaN;
    var t, n, s = this._milliseconds;
    if ("month" === (e = H(e)) || "quarter" === e || "year" === e) switch (t = this._days + s / 864e5, n = this._months + Sn(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12
    } else switch (t = this._days + Math.round(Dn(this._months)), e) {
      case "week":
        return t / 7 + s / 6048e5;
      case "day":
        return t + s / 864e5;
      case "hour":
        return 24 * t + s / 36e5;
      case "minute":
        return 1440 * t + s / 6e4;
      case "second":
        return 86400 * t + s / 1e3;
      case "millisecond":
        return Math.floor(864e5 * t) + s;
      default:
        throw new Error("Unknown unit " + e)
    }
  }, qn.asMilliseconds = On, qn.asSeconds = Tn, qn.asMinutes = bn, qn.asHours = xn, qn.asDays = Pn, qn.asWeeks = Wn, qn.asMonths = Cn, qn.asQuarters = Hn, qn.asYears = Rn, qn.valueOf = function () {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * D(this._months / 12) : NaN
  }, qn._bubble = function () {
    var e, t, n, s, i, r = this._milliseconds,
      a = this._days,
      o = this._months,
      u = this._data;
    return 0 <= r && 0 <= a && 0 <= o || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * kn(Dn(o) + a), o = a = 0), u.milliseconds = r % 1e3, e = S(r / 1e3), u.seconds = e % 60, t = S(e / 60), u.minutes = t % 60, n = S(t / 60), u.hours = n % 24, o += i = S(Sn(a += S(n / 24))), a -= kn(Dn(i)), s = S(o / 12), o %= 12, u.days = a, u.months = o, u.years = s, this
  }, qn.clone = function () {
    return jt(this)
  }, qn.get = function (e) {
    return e = H(e), this.isValid() ? this[e + "s"]() : NaN
  }, qn.milliseconds = Fn, qn.seconds = Ln, qn.minutes = Nn, qn.hours = Gn, qn.days = Vn, qn.weeks = function () {
    return S(this.days() / 7)
  }, qn.months = En, qn.years = In, qn.humanize = function (e) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var t, n, s, i, r, a, o, u, l, h, d, c = this.localeData(),
      f = (n = !e, s = c, i = jt(t = this).abs(), r = An(i.as("s")), a = An(i.as("m")), o = An(i.as("h")), u = An(i.as("d")), l = An(i.as("M")), h = An(i.as("y")), (d = r <= jn.ss && ["s", r] || r < jn.s && ["ss", r] || a <= 1 && ["m"] || a < jn.m && ["mm", a] || o <= 1 && ["h"] || o < jn.h && ["hh", o] || u <= 1 && ["d"] || u < jn.d && ["dd", u] || l <= 1 && ["M"] || l < jn.M && ["MM", l] || h <= 1 && ["y"] || ["yy", h])[2] = n, d[3] = 0 < +t, d[4] = s, function (e, t, n, s, i) {
        return i.relativeTime(t || 1, !!n, e, s)
      }.apply(null, d));
    return e && (f = c.pastFuture(+this, f)), c.postformat(f)
  }, qn.toISOString = $n, qn.toString = $n, qn.toJSON = $n, qn.locale = Xt, qn.localeData = en, qn.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", $n), qn.lang = Kt, I("X", 0, 0, "unix"), I("x", 0, 0, "valueOf"), ue("x", se), ue("X", /[+-]?\d+(\.\d{1,3})?/), ce("X", function (e, t, n) {
    n._d = new Date(1e3 * parseFloat(e, 10))
  }), ce("x", function (e, t, n) {
    n._d = new Date(D(e))
  }), c.version = "2.24.0", e = bt, c.fn = mn, c.min = function () {
    return Wt("isBefore", [].slice.call(arguments, 0))
  }, c.max = function () {
    return Wt("isAfter", [].slice.call(arguments, 0))
  }, c.now = function () {
    return Date.now ? Date.now() : +new Date
  }, c.utc = y, c.unix = function (e) {
    return bt(1e3 * e)
  }, c.months = function (e, t) {
    return vn(e, t, "months")
  }, c.isDate = d, c.locale = ut, c.invalid = p, c.duration = jt, c.isMoment = k, c.weekdays = function (e, t, n) {
    return pn(e, t, n, "weekdays")
  }, c.parseZone = function () {
    return bt.apply(null, arguments).parseZone()
  }, c.localeData = ht, c.isDuration = Rt, c.monthsShort = function (e, t) {
    return vn(e, t, "monthsShort")
  }, c.weekdaysMin = function (e, t, n) {
    return pn(e, t, n, "weekdaysMin")
  }, c.defineLocale = lt, c.updateLocale = function (e, t) {
    if (null != t) {
      var n, s, i = st;
      null != (s = ot(e)) && (i = s._config), (n = new P(t = x(i, t))).parentLocale = it[e], it[e] = n, ut(e)
    } else null != it[e] && (null != it[e].parentLocale ? it[e] = it[e].parentLocale : null != it[e] && delete it[e]);
    return it[e]
  }, c.locales = function () {
    return s(it)
  }, c.weekdaysShort = function (e, t, n) {
    return pn(e, t, n, "weekdaysShort")
  }, c.normalizeUnits = H, c.relativeTimeRounding = function (e) {
    return void 0 === e ? An : "function" == typeof e && (An = e, !0)
  }, c.relativeTimeThreshold = function (e, t) {
    return void 0 !== jn[e] && (void 0 === t ? jn[e] : (jn[e] = t, "s" === e && (jn.ss = t - 1), !0))
  }, c.calendarFormat = function (e, t) {
    var n = e.diff(t, "days", !0);
    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
  }, c.prototype = mn, c.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
  }, c
});
/**
 * @version: 2.1.24
 * @author: Dan Grossman http://www.dangrossman.info/
 * @copyright: Copyright (c) 2012-2016 Dan Grossman. All rights reserved.
 * @license: Licensed under the MIT license. See https://www.opensource.org/licenses/mit-license.php
 * @website: https://www.improvely.com/
 */
// Follow the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Make globaly available as well
    define(['moment', 'jquery'], function (moment, jquery) {
      return (root.daterangepicker = factory(moment, jquery));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node / Browserify
    //isomorphic issue
    var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;
    if (!jQuery) {
      jQuery = require('jquery');
      if (!jQuery.fn) jQuery.fn = {};
    }
    module.exports = factory(require('moment'), jQuery);
  } else {
    // Browser globals
    root.daterangepicker = factory(root.moment, root.jQuery);
  }
}(this, function (moment, $) {
  var DateRangePicker = function (element, options, cb) {

    //default settings for options
    // If there is parentEl options we set it
    // Otherwise we check if inline options is set and we set the element.parent() by default or the body for a tootlip picker
    this.parentEl = (options && options.parentEl && $(options.parentEl).length) ? $(options.parentEl) :
      (options && options.inline) ? element.parent() : $('body');
    this.element = $(element);
    this.startDate = moment().startOf('day');
    this.endDate = moment().endOf('day');
    this.minDate = false;
    this.maxDate = false;
    this.dateLimit = false;
    this.autoApply = false;
    this.singleDatePicker = false;
    this.showDropdowns = false;
    this.showWeekNumbers = false;
    this.showISOWeekNumbers = false;
    this.showCustomRangeLabel = true;
    this.timePicker = false;
    this.timePicker24Hour = false;
    this.timePickerIncrement = 1;
    this.timePickerSeconds = false;
    this.linkedCalendars = true;
    this.autoUpdateInput = true;
    this.alwaysShowCalendars = false;
    this.inline = false;
    this.ranges = {};

    this.opens = 'right';
    if (this.element.hasClass('pull-right'))
      this.opens = 'left';

    this.drops = 'down';
    if (this.element.hasClass('dropup'))
      this.drops = 'up';

    this.buttonClasses = 'btn btn-sm';
    this.applyClass = 'btn-success';
    this.cancelClass = 'btn-default';

    this.locale = {
      direction: 'ltr',
      format: 'MM/DD/YYYY',
      separator: ' - ',
      applyLabel: 'Apply',
      cancelLabel: 'Cancel',
      weekLabel: 'W',
      customRangeLabel: 'Custom Range',
      daysOfWeek: moment.weekdaysMin(),
      monthNames: moment.monthsShort(),
      firstDay: moment.localeData().firstDayOfWeek()
    };

    this.callback = function () {};

    //some state information
    this.isShowing = false;
    this.leftCalendar = {};
    this.rightCalendar = {};

    //custom options from user
    if (typeof options !== 'object' || options === null)
      options = {};

    //allow setting options with data attributes
    //data-api options will be overwritten with custom javascript options
    options = $.extend(this.element.data(), options);

    //
    // handle all the possible options overriding defaults
    //

    if (typeof options.locale === 'object') {

      if (typeof options.locale.direction === 'string')
        this.locale.direction = options.locale.direction;

      if (typeof options.locale.format === 'string')
        this.locale.format = options.locale.format;

      if (typeof options.locale.separator === 'string')
        this.locale.separator = options.locale.separator;

      if (typeof options.locale.daysOfWeek === 'object')
        this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

      if (typeof options.locale.monthNames === 'object')
        this.locale.monthNames = options.locale.monthNames.slice();

      if (typeof options.locale.firstDay === 'number')
        this.locale.firstDay = options.locale.firstDay;

      if (typeof options.locale.applyLabel === 'string')
        this.locale.applyLabel = options.locale.applyLabel;

      if (typeof options.locale.cancelLabel === 'string')
        this.locale.cancelLabel = options.locale.cancelLabel;

      if (typeof options.locale.weekLabel === 'string')
        this.locale.weekLabel = options.locale.weekLabel;

      if (typeof options.locale.customRangeLabel === 'string')
        this.locale.customRangeLabel = options.locale.customRangeLabel;

    }

    if (typeof options.startDate === 'string')
      this.startDate = moment(options.startDate, this.locale.format);

    if (typeof options.endDate === 'string')
      this.endDate = moment(options.endDate, this.locale.format);

    if (typeof options.minDate === 'string')
      this.minDate = moment(options.minDate, this.locale.format);

    if (typeof options.maxDate === 'string')
      this.maxDate = moment(options.maxDate, this.locale.format);

    if (typeof options.startDate === 'object')
      this.startDate = moment(options.startDate);

    if (typeof options.endDate === 'object')
      this.endDate = moment(options.endDate);

    if (typeof options.minDate === 'object')
      this.minDate = moment(options.minDate);

    if (typeof options.maxDate === 'object')
      this.maxDate = moment(options.maxDate);

    // sanity check for bad options
    if (this.minDate && this.startDate.isBefore(this.minDate))
      this.startDate = this.minDate.clone();

    // sanity check for bad options
    if (this.maxDate && this.endDate.isAfter(this.maxDate))
      this.endDate = this.maxDate.clone();

    if (typeof options.applyClass === 'string')
      this.applyClass = options.applyClass;

    if (typeof options.cancelClass === 'string')
      this.cancelClass = options.cancelClass;

    if (typeof options.dateLimit === 'object')
      this.dateLimit = options.dateLimit;

    if (typeof options.opens === 'string')
      this.opens = options.opens;

    if (typeof options.drops === 'string')
      this.drops = options.drops;

    if (typeof options.showWeekNumbers === 'boolean')
      this.showWeekNumbers = options.showWeekNumbers;

    if (typeof options.showISOWeekNumbers === 'boolean')
      this.showISOWeekNumbers = options.showISOWeekNumbers;

    if (typeof options.buttonClasses === 'string')
      this.buttonClasses = options.buttonClasses;

    if (typeof options.buttonClasses === 'object')
      this.buttonClasses = options.buttonClasses.join(' ');

    if (typeof options.showDropdowns === 'boolean')
      this.showDropdowns = options.showDropdowns;

    if (typeof options.showCustomRangeLabel === 'boolean')
      this.showCustomRangeLabel = options.showCustomRangeLabel;

    if (typeof options.singleDatePicker === 'boolean') {
      this.singleDatePicker = options.singleDatePicker;
      if (this.singleDatePicker)
        this.endDate = this.startDate.clone();
    }

    if (typeof options.timePicker === 'boolean')
      this.timePicker = options.timePicker;

    if (typeof options.timePickerSeconds === 'boolean')
      this.timePickerSeconds = options.timePickerSeconds;

    if (typeof options.timePickerIncrement === 'number')
      this.timePickerIncrement = options.timePickerIncrement;

    if (typeof options.timePicker24Hour === 'boolean')
      this.timePicker24Hour = options.timePicker24Hour;

    if (typeof options.autoApply === 'boolean')
      this.autoApply = options.autoApply;

    if (typeof options.autoUpdateInput === 'boolean')
      this.autoUpdateInput = options.autoUpdateInput;

    if (typeof options.linkedCalendars === 'boolean')
      this.linkedCalendars = options.linkedCalendars;

    if (typeof options.isInvalidDate === 'function')
      this.isInvalidDate = options.isInvalidDate;

    if (typeof options.isCustomDate === 'function')
      this.isCustomDate = options.isCustomDate;

    if (typeof options.alwaysShowCalendars === 'boolean')
      this.alwaysShowCalendars = options.alwaysShowCalendars;

    if (typeof options.inline === 'boolean')
      this.inline = options.inline;

    // update day names order to firstDay
    if (this.locale.firstDay != 0) {
      var iterator = this.locale.firstDay;
      while (iterator > 0) {
        this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
        iterator--;
      }
    }

    //html template for the picker UI
    if (typeof options.template !== 'string' && !(options.template instanceof $))
      options.template = '<div class="daterangepicker ' + (this.inline ? 'daterangepicker-inline' : 'daterangepicker-tooltip dropdown-menu') + '">' +
      '<div class="calendar left">' +
      '<div class="daterangepicker_input">' +
      '<input class="input-mini form-control" type="text" name="daterangepicker_start" value="" />' +
      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
      '<div class="calendar-time">' +
      '<div></div>' +
      '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
      '</div>' +
      '</div>' +
      '<div class="calendar-table"></div>' +
      '</div>' +
      '<div class="calendar right">' +
      '<div class="daterangepicker_input">' +
      '<input class="input-mini form-control" type="text" name="daterangepicker_end" value="" />' +
      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
      '<div class="calendar-time">' +
      '<div></div>' +
      '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
      '</div>' +
      '</div>' +
      '<div class="calendar-table"></div>' +
      '</div>' +
      '<div class="ranges">' +
      '<div class="range_inputs">' +
      '<button class="applyBtn" disabled="disabled" type="button"></button>' +
      '<button class="cancelBtn" type="button"></button>' +
      '</div>' +
      '</div>' +
      '</div>';

    this.container = $(options.template).appendTo(this.parentEl);
    this.container.addClass(this.locale.direction);

    var start, end, range;

    //if no start/end dates set, check if an input element contains initial values
    if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
      if ($(this.element).is('input[type=text]')) {
        var val = $(this.element).val(),
          split = val.split(this.locale.separator);

        start = end = null;

        if (split.length == 2) {
          start = moment(split[0], this.locale.format);
          end = moment(split[1], this.locale.format);
        } else if (this.singleDatePicker && val !== "") {
          start = moment(val, this.locale.format);
          end = moment(val, this.locale.format);
        }
        if (start !== null && end !== null) {
          this.setStartDate(start);
          this.setEndDate(end);
        }
      }
    }

    if (typeof options.ranges === 'object') {
      for (range in options.ranges) {

        if (typeof options.ranges[range][0] === 'string')
          start = moment(options.ranges[range][0], this.locale.format);
        else
          start = moment(options.ranges[range][0]);

        if (typeof options.ranges[range][1] === 'string')
          end = moment(options.ranges[range][1], this.locale.format);
        else
          end = moment(options.ranges[range][1]);

        // If the start or end date exceed those allowed by the minDate or dateLimit
        // options, shorten the range to the allowable period.
        if (this.minDate && start.isBefore(this.minDate))
          start = this.minDate.clone();

        var maxDate = this.maxDate;
        if (this.dateLimit && maxDate && start.clone().add(this.dateLimit).isAfter(maxDate))
          maxDate = start.clone().add(this.dateLimit);
        if (maxDate && end.isAfter(maxDate))
          end = maxDate.clone();

        // If the end of the range is before the minimum or the start of the range is
        // after the maximum, don't display this range option at all.
        if ((this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day')) ||
          (maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')))
          continue;

        //Support unicode chars in the range names.
        var elem = document.createElement('textarea');
        elem.innerHTML = range;
        var rangeHtml = elem.value;

        this.ranges[rangeHtml] = [start, end];
      }

      var list = '<ul>';
      for (range in this.ranges) {
        list += '<li data-range-key="' + range + '">' + range + '</li>';
      }
      if (this.showCustomRangeLabel) {
        list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>';
      }
      list += '</ul>';
      this.container.find('.ranges').prepend(list);
    }

    if (typeof cb === 'function') {
      this.callback = cb;
    }

    if (!this.timePicker) {
      this.startDate = this.startDate.startOf('day');
      this.endDate = this.endDate.endOf('day');
      this.container.find('.calendar-time').hide();
    }

    // can't be used together for now
    // You can only use it with inline option
    if (this.timePicker && this.autoApply && !this.inline)
      this.autoApply = false;

    if (this.autoApply && typeof options.ranges !== 'object') {
      this.container.find('.ranges').hide();
    } else if (this.autoApply) {
      this.container.find('.applyBtn, .cancelBtn').addClass('hide');
    }

    if (this.singleDatePicker) {
      this.container.addClass('single');
      this.container.find('.calendar.left').addClass('single');
      this.container.find('.calendar.left').show();
      this.container.find('.calendar.right').hide();
      this.container.find('.daterangepicker_input input, .daterangepicker_input > i').hide();
      if (this.timePicker) {
        this.container.find('.ranges ul').hide();
      } else {
        this.container.find('.ranges').hide();
      }
    }

    if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {
      this.container.addClass('show-calendar');
    }

    this.container.addClass('opens' + this.opens);

    //swap the position of the predefined ranges if opens right
    if (typeof options.ranges !== 'undefined' && this.opens == 'right') {
      this.container.find('.ranges').prependTo(this.container.find('.calendar.left').parent());
    }

    //apply CSS classes and labels to buttons
    this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
    if (this.applyClass.length)
      this.container.find('.applyBtn').addClass(this.applyClass);
    if (this.cancelClass.length)
      this.container.find('.cancelBtn').addClass(this.cancelClass);
    this.container.find('.applyBtn').html(this.locale.applyLabel);
    this.container.find('.cancelBtn').html(this.locale.cancelLabel);

    //
    // event listeners
    //

    this.container.find('.calendar')
      .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
      .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
      .on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
      .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
      .on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this))
      .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
      .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
      .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))
      .on('click.daterangepicker', '.daterangepicker_input input', $.proxy(this.showCalendars, this))
      .on('focus.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsFocused, this))
      .on('blur.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsBlurred, this))
      .on('change.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this));

    this.container.find('.ranges')
      .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
      .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))
      .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))
      .on('mouseenter.daterangepicker', 'li', $.proxy(this.hoverRange, this))
      .on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));

    if (this.element.is('input') || this.element.is('button')) {
      this.element.on({
        'click.daterangepicker': $.proxy(this.show, this),
        'focus.daterangepicker': $.proxy(this.show, this),
        'keyup.daterangepicker': $.proxy(this.elementChanged, this),
        'keydown.daterangepicker': $.proxy(this.keydown, this)
      });
    } else {
      this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
    }

    //
    // if attached to a text input, set the initial value
    //

    if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
      this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
      this.element.trigger('change');
    } else if (this.element.is('input') && this.autoUpdateInput) {
      this.element.val(this.startDate.format(this.locale.format));
      this.element.trigger('change');
    }

    // Show the daterangepicker since it's started for inline mode
    if (this.inline)
      this.show()
  };

  DateRangePicker.prototype = {

    constructor: DateRangePicker,

    setStartDate: function (startDate) {
      if (typeof startDate === 'string')
        this.startDate = moment(startDate, this.locale.format);

      if (typeof startDate === 'object')
        this.startDate = moment(startDate);

      if (!this.timePicker)
        this.startDate = this.startDate.startOf('day');

      if (this.timePicker && this.timePickerIncrement)
        this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

      if (this.minDate && this.startDate.isBefore(this.minDate)) {
        this.startDate = this.minDate;
        if (this.timePicker && this.timePickerIncrement)
          this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
      }

      if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
        this.startDate = this.maxDate;
        if (this.timePicker && this.timePickerIncrement)
          this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
      }

      if (!this.isShowing)
        this.updateElement();

      this.updateMonthsInView();
    },

    setEndDate: function (endDate) {
      if (typeof endDate === 'string')
        this.endDate = moment(endDate, this.locale.format);

      if (typeof endDate === 'object')
        this.endDate = moment(endDate);

      if (!this.timePicker)
        this.endDate = this.endDate.endOf('day');

      if (this.timePicker && this.timePickerIncrement)
        this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

      if (this.endDate.isBefore(this.startDate))
        this.endDate = this.startDate.clone();

      if (this.maxDate && this.endDate.isAfter(this.maxDate))
        this.endDate = this.maxDate;

      if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate))
        this.endDate = this.startDate.clone().add(this.dateLimit);

      this.previousRightTime = this.endDate.clone();

      if (!this.isShowing)
        this.updateElement();

      this.updateMonthsInView();
    },

    isInvalidDate: function () {
      return false;
    },

    isCustomDate: function () {
      return false;
    },

    updateView: function () {
      if (this.timePicker) {
        this.renderTimePicker('left');
        this.renderTimePicker('right');
        if (!this.endDate) {
          this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
        } else {
          this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
        }
      }
      if (this.endDate) {
        this.container.find('input[name="daterangepicker_end"]').removeClass('active');
        this.container.find('input[name="daterangepicker_start"]').addClass('active');
      } else {
        this.container.find('input[name="daterangepicker_end"]').addClass('active');
        this.container.find('input[name="daterangepicker_start"]').removeClass('active');
      }
      this.updateMonthsInView();
      this.updateCalendars();
      this.updateFormInputs();
    },

    updateMonthsInView: function () {
      if (this.endDate) {

        //if both dates are visible already, do nothing
        if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
          (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM')) &&
          (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
        ) {
          return;
        }

        this.leftCalendar.month = this.startDate.clone().date(2);
        if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
          this.rightCalendar.month = this.endDate.clone().date(2);
        } else {
          this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
        }

      } else {
        if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
          this.leftCalendar.month = this.startDate.clone().date(2);
          this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
        }
      }
      if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
        this.rightCalendar.month = this.maxDate.clone().date(2);
        this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
      }
    },

    updateCalendars: function () {

      if (this.timePicker) {
        var hour, minute, second;
        if (this.endDate) {
          hour = parseInt(this.container.find('.left .hourselect').val(), 10);
          minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
          second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
          if (!this.timePicker24Hour) {
            var ampm = this.container.find('.left .ampmselect').val();
            if (ampm === 'PM' && hour < 12)
              hour += 12;
            if (ampm === 'AM' && hour === 12)
              hour = 0;
          }
        } else {
          hour = parseInt(this.container.find('.right .hourselect').val(), 10);
          minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
          second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
          if (!this.timePicker24Hour) {
            var ampm = this.container.find('.right .ampmselect').val();
            if (ampm === 'PM' && hour < 12)
              hour += 12;
            if (ampm === 'AM' && hour === 12)
              hour = 0;
          }
        }
        this.leftCalendar.month.hour(hour).minute(minute).second(second);
        this.rightCalendar.month.hour(hour).minute(minute).second(second);
      }

      this.renderCalendar('left');
      this.renderCalendar('right');

      //highlight any predefined range matching the current start and end dates
      this.container.find('.ranges li').removeClass('active');
      if (this.endDate == null) return;

      this.calculateChosenLabel();
    },

    renderCalendar: function (side) {

      //
      // Build the matrix of dates that will populate the calendar
      //

      var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
      var month = calendar.month.month();
      var year = calendar.month.year();
      var hour = calendar.month.hour();
      var minute = calendar.month.minute();
      var second = calendar.month.second();
      var daysInMonth = moment([year, month]).daysInMonth();
      var firstDay = moment([year, month, 1]);
      var lastDay = moment([year, month, daysInMonth]);
      var lastMonth = moment(firstDay).subtract(1, 'month').month();
      var lastYear = moment(firstDay).subtract(1, 'month').year();
      var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
      var dayOfWeek = firstDay.day();

      //initialize a 6 rows x 7 columns array for the calendar
      var calendar = [];
      calendar.firstDay = firstDay;
      calendar.lastDay = lastDay;

      for (var i = 0; i < 6; i++) {
        calendar[i] = [];
      }

      //populate the calendar with date objects
      var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
      if (startDay > daysInLastMonth)
        startDay -= 7;

      if (dayOfWeek == this.locale.firstDay)
        startDay = daysInLastMonth - 6;

      var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

      var col, row;
      for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
        if (i > 0 && col % 7 === 0) {
          col = 0;
          row++;
        }
        calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
        curDate.hour(12);

        if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
          calendar[row][col] = this.minDate.clone();
        }

        if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
          calendar[row][col] = this.maxDate.clone();
        }

      }

      //make the calendar object available to hoverDate/clickDate
      if (side == 'left') {
        this.leftCalendar.calendar = calendar;
      } else {
        this.rightCalendar.calendar = calendar;
      }

      //
      // Display the calendar
      //

      var minDate = side == 'left' ? this.minDate : this.startDate;
      var maxDate = this.maxDate;
      var selected = side == 'left' ? this.startDate : this.endDate;
      var arrow = this.locale.direction == 'ltr' ? {
        left: 'chevron-left',
        right: 'chevron-right'
      } : {
        left: 'chevron-right',
        right: 'chevron-left'
      };

      var html = '<table class="table-condensed">';
      html += '<thead>';
      html += '<tr>';

      // add empty cell for week number
      if (this.showWeekNumbers || this.showISOWeekNumbers)
        html += '<th></th>';

      if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
        html += '<th class="prev available"><i class="bi bi-chevron-left"></i></th>';
      } else {
        html += '<th></th>';
      }

      var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

      if (this.showDropdowns) {
        var currentMonth = calendar[1][1].month();
        var currentYear = calendar[1][1].year();
        var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
        var minYear = (minDate && minDate.year()) || (currentYear - 50);
        var inMinYear = currentYear == minYear;
        var inMaxYear = currentYear == maxYear;

        var monthHtml = '<select class="monthselect">';
        for (var m = 0; m < 12; m++) {
          if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
            monthHtml += "<option value='" + m + "'" +
              (m === currentMonth ? " selected='selected'" : "") +
              ">" + this.locale.monthNames[m] + "</option>";
          } else {
            monthHtml += "<option value='" + m + "'" +
              (m === currentMonth ? " selected='selected'" : "") +
              " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
          }
        }
        monthHtml += "</select>";

        var yearHtml = '<select class="yearselect">';
        for (var y = minYear; y <= maxYear; y++) {
          yearHtml += '<option value="' + y + '"' +
            (y === currentYear ? ' selected="selected"' : '') +
            '>' + y + '</option>';
        }
        yearHtml += '</select>';

        dateHtml = monthHtml + yearHtml;
      }

      html += '<th colspan="5" class="month">' + dateHtml + '</th>';
      if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
        html += '<th class="next available"><i class="bi bi-chevron-right"></i></th>';
      } else {
        html += '<th></th>';
      }

      html += '</tr>';
      html += '<tr>';

      // add week number label
      if (this.showWeekNumbers || this.showISOWeekNumbers)
        html += '<th class="week">' + this.locale.weekLabel + '</th>';

      $.each(this.locale.daysOfWeek, function (index, dayOfWeek) {
        html += '<th>' + dayOfWeek + '</th>';
      });

      html += '</tr>';
      html += '</thead>';
      html += '<tbody>';

      //adjust maxDate to reflect the dateLimit setting in order to
      //grey out end dates beyond the dateLimit
      if (this.endDate == null && this.dateLimit) {
        var maxLimit = this.startDate.clone().add(this.dateLimit).endOf('day');
        if (!maxDate || maxLimit.isBefore(maxDate)) {
          maxDate = maxLimit;
        }
      }

      for (var row = 0; row < 6; row++) {
        html += '<tr>';

        // add week number
        if (this.showWeekNumbers)
          html += '<td class="week">' + calendar[row][0].week() + '</td>';
        else if (this.showISOWeekNumbers)
          html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

        for (var col = 0; col < 7; col++) {

          var classes = [];

          //highlight today's date
          if (calendar[row][col].isSame(new Date(), "day"))
            classes.push('today');

          //highlight weekends
          if (calendar[row][col].isoWeekday() > 5)
            classes.push('weekend');

          //grey out the dates in other months displayed at beginning and end of this calendar
          if (calendar[row][col].month() != calendar[1][1].month())
            classes.push('off');

          //don't allow selection of dates before the minimum date
          if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
            classes.push('off', 'disabled');

          //don't allow selection of dates after the maximum date
          if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
            classes.push('off', 'disabled');

          //don't allow selection of date if a custom function decides it's invalid
          if (this.isInvalidDate(calendar[row][col]))
            classes.push('off', 'disabled');

          //highlight the currently selected start date
          if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
            classes.push('active', 'start-date');

          //highlight the currently selected end date
          if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
            classes.push('active', 'end-date');

          //highlight dates in-between the selected dates
          if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
            classes.push('in-range');

          //apply custom classes for this date
          var isCustom = this.isCustomDate(calendar[row][col]);
          if (isCustom !== false) {
            if (typeof isCustom === 'string')
              classes.push(isCustom);
            else
              Array.prototype.push.apply(classes, isCustom);
          }

          var cname = '',
            disabled = false;
          for (var i = 0; i < classes.length; i++) {
            cname += classes[i] + ' ';
            if (classes[i] == 'disabled')
              disabled = true;
          }
          if (!disabled)
            cname += 'available';

          html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

        }
        html += '</tr>';
      }

      html += '</tbody>';
      html += '</table>';

      this.container.find('.calendar.' + side + ' .calendar-table').html(html);

    },

    renderTimePicker: function (side) {

      // Don't bother updating the time picker if it's currently disabled
      // because an end date hasn't been clicked yet
      if (side == 'right' && !this.endDate) return;

      var html, selected, minDate, maxDate = this.maxDate;

      if (this.dateLimit && (!this.maxDate || this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate)))
        maxDate = this.startDate.clone().add(this.dateLimit);

      if (side == 'left') {
        selected = this.startDate.clone();
        minDate = this.minDate;
      } else if (side == 'right') {
        selected = this.endDate.clone();
        minDate = this.startDate;

        //Preserve the time already selected
        var timeSelector = this.container.find('.calendar.right .calendar-time div');
        if (!this.endDate && timeSelector.html() != '') {

          selected.hour(timeSelector.find('.hourselect option:selected').val() || selected.hour());
          selected.minute(timeSelector.find('.minuteselect option:selected').val() || selected.minute());
          selected.second(timeSelector.find('.secondselect option:selected').val() || selected.second());

          if (!this.timePicker24Hour) {
            var ampm = timeSelector.find('.ampmselect option:selected').val();
            if (ampm === 'PM' && selected.hour() < 12)
              selected.hour(selected.hour() + 12);
            if (ampm === 'AM' && selected.hour() === 12)
              selected.hour(0);
          }

        }

        if (selected.isBefore(this.startDate))
          selected = this.startDate.clone();

        if (maxDate && selected.isAfter(maxDate))
          selected = maxDate.clone();

      }

      //
      // hours
      //

      html = '<select class="hourselect">';

      var start = this.timePicker24Hour ? 0 : 1;
      var end = this.timePicker24Hour ? 23 : 12;

      for (var i = start; i <= end; i++) {
        var i_in_24 = i;
        if (!this.timePicker24Hour)
          i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

        var time = selected.clone().hour(i_in_24);
        var disabled = false;
        if (minDate && time.minute(59).isBefore(minDate))
          disabled = true;
        if (maxDate && time.minute(0).isAfter(maxDate))
          disabled = true;

        if (i_in_24 == selected.hour() && !disabled) {
          html += '<option value="' + i + '" selected="selected">' + i + '</option>';
        } else if (disabled) {
          html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
        } else {
          html += '<option value="' + i + '">' + i + '</option>';
        }
      }

      html += '</select> ';

      //
      // minutes
      //

      html += ': <select class="minuteselect">';

      for (var i = 0; i < 60; i += this.timePickerIncrement) {
        var padded = i < 10 ? '0' + i : i;
        var time = selected.clone().minute(i);

        var disabled = false;
        if (minDate && time.second(59).isBefore(minDate))
          disabled = true;
        if (maxDate && time.second(0).isAfter(maxDate))
          disabled = true;

        if (selected.minute() == i && !disabled) {
          html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
        } else if (disabled) {
          html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
        } else {
          html += '<option value="' + i + '">' + padded + '</option>';
        }
      }

      html += '</select> ';

      //
      // seconds
      //

      if (this.timePickerSeconds) {
        html += ': <select class="secondselect">';

        for (var i = 0; i < 60; i++) {
          var padded = i < 10 ? '0' + i : i;
          var time = selected.clone().second(i);

          var disabled = false;
          if (minDate && time.isBefore(minDate))
            disabled = true;
          if (maxDate && time.isAfter(maxDate))
            disabled = true;

          if (selected.second() == i && !disabled) {
            html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
          } else if (disabled) {
            html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
          } else {
            html += '<option value="' + i + '">' + padded + '</option>';
          }
        }

        html += '</select> ';
      }

      //
      // AM/PM
      //

      if (!this.timePicker24Hour) {
        html += '<select class="ampmselect">';

        var am_html = '';
        var pm_html = '';

        if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
          am_html = ' disabled="disabled" class="disabled"';

        if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
          pm_html = ' disabled="disabled" class="disabled"';

        if (selected.hour() >= 12) {
          html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
        } else {
          html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
        }

        html += '</select>';
      }

      this.container.find('.calendar.' + side + ' .calendar-time div').html(html);

    },

    updateFormInputs: function () {

      //ignore mouse movements while an above-calendar text input has focus
      if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
        return;

      this.container.find('input[name=daterangepicker_start]').val(this.startDate.format(this.locale.format));
      if (this.endDate)
        this.container.find('input[name=daterangepicker_end]').val(this.endDate.format(this.locale.format));

      if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
        this.container.find('button.applyBtn').removeAttr('disabled');
      } else {
        this.container.find('button.applyBtn').attr('disabled', 'disabled');
      }

    },

    move: function () {
      // Should not move if it's inline mode
      if (this.inline)
        return;

      var parentOffset = {
          top: 0,
          left: 0
        },
        containerTop;
      var parentRightEdge = $(window).width();
      if (!this.parentEl.is('body')) {
        parentOffset = {
          top: this.parentEl.offset().top - this.parentEl.scrollTop(),
          left: this.parentEl.offset().left - this.parentEl.scrollLeft()
        };
        parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
      }

      if (this.drops == 'up')
        containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
      else
        containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
      this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('dropup');

      if (this.opens == 'left') {
        this.container.css({
          top: containerTop,
          right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
          left: 'auto'
        });
        if (this.container.offset().left < 0) {
          this.container.css({
            right: 'auto',
            left: 9
          });
        }
      } else if (this.opens == 'center') {
        this.container.css({
          top: containerTop,
          left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2 -
            this.container.outerWidth() / 2,
          right: 'auto'
        });
        if (this.container.offset().left < 0) {
          this.container.css({
            right: 'auto',
            left: 9
          });
        }
      } else {
        this.container.css({
          top: containerTop,
          left: this.element.offset().left - parentOffset.left,
          right: 'auto'
        });
        if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
          this.container.css({
            left: 'auto',
            right: 0
          });
        }
      }
    },

    show: function (e) {
      if (this.isShowing) return;

      // Create a click proxy that is private to this instance of datepicker, for unbinding
      this._outsideClickProxy = $.proxy(function (e) {
        this.outsideClick(e);
      }, this);

      // Bind global datepicker mousedown for hiding and
      $(document)
        .on('mousedown.daterangepicker', this._outsideClickProxy)
        // also support mobile devices
        .on('touchend.daterangepicker', this._outsideClickProxy)
        // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
        .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
        // and also close when focus changes to outside the picker (eg. tabbing between controls)
        .on('focusin.daterangepicker', this._outsideClickProxy);

      // Reposition the picker if the window is resized while it's open
      $(window).on('resize.daterangepicker', $.proxy(function (e) {
        this.move(e);
      }, this));

      this.oldStartDate = this.startDate.clone();
      this.oldEndDate = this.endDate.clone();
      this.previousRightTime = this.endDate.clone();

      this.updateView();
      this.container.show();
      this.move();
      this.element.trigger('show.daterangepicker', this);
      this.isShowing = true;
    },

    hide: function (e) {
      if (!this.isShowing) return;

      //if picker is attached to a text input, update it
      this.updateElement();

      $(document).off('.daterangepicker');
      $(window).off('.daterangepicker');
      this.container.hide();
      this.element.trigger('hide.daterangepicker', this);
      this.isShowing = false;
    },

    toggle: function (e) {
      if (this.isShowing && !this.inline) {
        this.hide();
      } else {
        this.show();
      }
    },

    outsideClick: function (e) {
      var target = $(e.target);
      // if the page is clicked anywhere except within the daterangerpicker/button
      // itself then call this.hide()
      if (
        // ie modal dialog fix
        e.type == "focusin" ||
        target.closest(this.element).length ||
        target.closest(this.container).length ||
        target.closest('.calendar-table').length ||
        this.inline
      ) return;
      this.hide();
      this.element.trigger('outsideClick.daterangepicker', this);
    },

    showCalendars: function () {
      this.container.addClass('show-calendar');
      this.move();
      this.element.trigger('showCalendar.daterangepicker', this);
    },

    hideCalendars: function () {
      this.container.removeClass('show-calendar');
      this.element.trigger('hideCalendar.daterangepicker', this);
    },

    hoverRange: function (e) {

      //ignore mouse movements while an above-calendar text input has focus
      if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
        return;

      var label = e.target.getAttribute('data-range-key');

      if (label == this.locale.customRangeLabel) {
        this.updateView();
      } else {
        var dates = this.ranges[label];
        this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.locale.format));
        this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.locale.format));
      }

    },

    clickRange: function (e) {
      var label = e.target.getAttribute('data-range-key');
      this.chosenLabel = label;
      if (label == this.locale.customRangeLabel) {
        this.showCalendars();
      } else {
        var dates = this.ranges[label];
        this.startDate = dates[0];
        this.endDate = dates[1];

        if (!this.timePicker) {
          this.startDate.startOf('day');
          this.endDate.endOf('day');
        }

        if (!this.alwaysShowCalendars)
          this.hideCalendars();
        this.clickApply();
      }
    },

    clickPrev: function (e) {
      var cal = $(e.target).parents('.calendar');
      if (cal.hasClass('left')) {
        this.leftCalendar.month.subtract(1, 'month');
        if (this.linkedCalendars)
          this.rightCalendar.month.subtract(1, 'month');
      } else {
        this.rightCalendar.month.subtract(1, 'month');
      }
      this.updateCalendars();
    },

    clickNext: function (e) {
      var cal = $(e.target).parents('.calendar');
      if (cal.hasClass('left')) {
        this.leftCalendar.month.add(1, 'month');
      } else {
        this.rightCalendar.month.add(1, 'month');
        if (this.linkedCalendars)
          this.leftCalendar.month.add(1, 'month');
      }
      this.updateCalendars();
    },

    hoverDate: function (e) {

      //ignore mouse movements while an above-calendar text input has focus
      //if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
      //    return;

      //ignore dates that can't be selected
      if (!$(e.target).hasClass('available')) return;

      //have the text inputs above calendars reflect the date being hovered over
      var title = $(e.target).attr('data-title');
      var row = title.substr(1, 1);
      var col = title.substr(3, 1);
      var cal = $(e.target).parents('.calendar');
      var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

      if (this.endDate && !this.container.find('input[name=daterangepicker_start]').is(":focus")) {
        this.container.find('input[name=daterangepicker_start]').val(date.format(this.locale.format));
      } else if (!this.endDate && !this.container.find('input[name=daterangepicker_end]').is(":focus")) {
        this.container.find('input[name=daterangepicker_end]').val(date.format(this.locale.format));
      }

      //highlight the dates between the start date and the date being hovered as a potential end date
      var leftCalendar = this.leftCalendar;
      var rightCalendar = this.rightCalendar;
      var startDate = this.startDate;
      if (!this.endDate) {
        this.container.find('.calendar td').each(function (index, el) {

          //skip week numbers, only look at dates
          if ($(el).hasClass('week')) return;

          var title = $(el).attr('data-title');
          var row = title.substr(1, 1);
          var col = title.substr(3, 1);
          var cal = $(el).parents('.calendar');
          var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

          if ((dt.isAfter(startDate) && dt.isBefore(date)) || dt.isSame(date, 'day')) {
            $(el).addClass('in-range');
          } else {
            $(el).removeClass('in-range');
          }

        });
      }

    },

    clickDate: function (e) {

      if (!$(e.target).hasClass('available')) return;

      var title = $(e.target).attr('data-title');
      var row = title.substr(1, 1);
      var col = title.substr(3, 1);
      var cal = $(e.target).parents('.calendar');
      var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

      //
      // this function needs to do a few things:
      // * alternate between selecting a start and end date for the range,
      // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
      // * if autoapply is enabled, and an end date was chosen, apply the selection
      // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
      // * if one of the inputs above the calendars was focused, cancel that manual input
      //

      if (this.endDate || date.isBefore(this.startDate, 'day')) { //picking start
        if (this.timePicker) {
          var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
          if (!this.timePicker24Hour) {
            var ampm = this.container.find('.left .ampmselect').val();
            if (ampm === 'PM' && hour < 12)
              hour += 12;
            if (ampm === 'AM' && hour === 12)
              hour = 0;
          }
          var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
          var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
          date = date.clone().hour(hour).minute(minute).second(second);
        }
        this.endDate = null;
        this.setStartDate(date.clone());
      } else if (!this.endDate && date.isBefore(this.startDate)) {
        //special case: clicking the same date for start/end,
        //but the time of the end date is before the start date
        this.setEndDate(this.startDate.clone());
      } else { // picking end
        if (this.timePicker) {
          var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
          if (!this.timePicker24Hour) {
            var ampm = this.container.find('.right .ampmselect').val();
            if (ampm === 'PM' && hour < 12)
              hour += 12;
            if (ampm === 'AM' && hour === 12)
              hour = 0;
          }
          var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
          var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
          date = date.clone().hour(hour).minute(minute).second(second);
        }
        this.setEndDate(date.clone());
        if (this.autoApply) {
          this.calculateChosenLabel();
          this.clickApply();
        }
      }

      if (this.singleDatePicker) {
        this.setEndDate(this.startDate);
        if (!this.timePicker)
          this.clickApply();
      }

      this.updateView();

      //This is to cancel the blur event handler if the mouse was in one of the inputs
      e.stopPropagation();

    },

    calculateChosenLabel: function () {
      var customRange = true;
      var i = 0;
      for (var range in this.ranges) {
        if (this.timePicker) {
          if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
            customRange = false;
            this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
            break;
          }
        } else {
          //ignore times when comparing dates if time picker is not enabled
          if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
            customRange = false;
            this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
            break;
          }
        }
        i++;
      }
      if (customRange && this.showCustomRangeLabel) {
        this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
        this.showCalendars();
      }
    },

    clickApply: function (e) {
      // Should not hide the picker if it's inline mode, but should update the parentElement
      (!this.inline) ? this.hide(): this.updateElement();
      this.element.trigger('apply.daterangepicker', this);
    },

    clickCancel: function (e) {
      this.startDate = this.oldStartDate;
      this.endDate = this.oldEndDate;
      // Should not hide the picker if it's inline mode, but should update the parentElement
      (!this.inline) ? this.hide(): this.updateElement();
      this.element.trigger('cancel.daterangepicker', this);
    },

    monthOrYearChanged: function (e) {
      var isLeft = $(e.target).closest('.calendar').hasClass('left'),
        leftOrRight = isLeft ? 'left' : 'right',
        cal = this.container.find('.calendar.' + leftOrRight);

      // Month must be Number for new moment versions
      var month = parseInt(cal.find('.monthselect').val(), 10);
      var year = cal.find('.yearselect').val();

      if (!isLeft) {
        if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
          month = this.startDate.month();
          year = this.startDate.year();
        }
      }

      if (this.minDate) {
        if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
          month = this.minDate.month();
          year = this.minDate.year();
        }
      }

      if (this.maxDate) {
        if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
          month = this.maxDate.month();
          year = this.maxDate.year();
        }
      }

      if (isLeft) {
        this.leftCalendar.month.month(month).year(year);
        if (this.linkedCalendars)
          this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
      } else {
        this.rightCalendar.month.month(month).year(year);
        if (this.linkedCalendars)
          this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
      }
      this.updateCalendars();
    },

    timeChanged: function (e) {

      var cal = $(e.target).closest('.calendar'),
        isLeft = cal.hasClass('left');

      var hour = parseInt(cal.find('.hourselect').val(), 10);
      var minute = parseInt(cal.find('.minuteselect').val(), 10);
      var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

      if (!this.timePicker24Hour) {
        var ampm = cal.find('.ampmselect').val();
        if (ampm === 'PM' && hour < 12)
          hour += 12;
        if (ampm === 'AM' && hour === 12)
          hour = 0;
      }

      if (isLeft) {
        var start = this.startDate.clone();
        start.hour(hour);
        start.minute(minute);
        start.second(second);
        this.setStartDate(start);
        if (this.singleDatePicker) {
          this.endDate = this.startDate.clone();
        } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
          this.setEndDate(start.clone());
        }
      } else if (this.endDate) {
        var end = this.endDate.clone();
        end.hour(hour);
        end.minute(minute);
        end.second(second);
        this.setEndDate(end);
      }

      // Update the parent element with the autoplay option in inline mode
      if (this.inline && this.autoApply)
        this.updateElement()

      //update the calendars so all clickable dates reflect the new time component
      this.updateCalendars();

      //update the form inputs above the calendars with the new time
      this.updateFormInputs();

      //re-render the time pickers because changing one selection can affect what's enabled in another
      this.renderTimePicker('left');
      this.renderTimePicker('right');

    },

    formInputsChanged: function (e) {
      var isRight = $(e.target).closest('.calendar').hasClass('right');
      var start = moment(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format);
      var end = moment(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);

      if (start.isValid() && end.isValid()) {

        if (isRight && end.isBefore(start))
          start = end.clone();

        this.setStartDate(start);
        this.setEndDate(end);

        if (isRight) {
          this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format));
        } else {
          this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format));
        }

      }

      this.updateView();

      // Update the parent element with the autoplay option in inline mode
      if (this.inline && this.autoApply)
        this.updateElement()
    },

    formInputsFocused: function (e) {

      // Highlight the focused input
      this.container.find('input[name="daterangepicker_start"], input[name="daterangepicker_end"]').removeClass('active');
      $(e.target).addClass('active');

      // Set the state such that if the user goes back to using a mouse,
      // the calendars are aware we're selecting the end of the range, not
      // the start. This allows someone to edit the end of a date range without
      // re-selecting the beginning, by clicking on the end date input then
      // using the calendar.
      var isRight = $(e.target).closest('.calendar').hasClass('right');
      if (isRight) {
        this.endDate = null;
        this.setStartDate(this.startDate.clone());
        this.updateView();
      }

    },

    formInputsBlurred: function (e) {

      // this function has one purpose right now: if you tab from the first
      // text input to the second in the UI, the endDate is nulled so that
      // you can click another, but if you tab out without clicking anything
      // or changing the input value, the old endDate should be retained

      if (!this.endDate) {
        var val = this.container.find('input[name="daterangepicker_end"]').val();
        var end = moment(val, this.locale.format);
        if (end.isValid()) {
          this.setEndDate(end);
          this.updateView();
        }
      }

    },

    elementChanged: function () {
      if (!this.element.is('input')) return;
      if (!this.element.val().length) return;
      if (this.element.val().length < this.locale.format.length) return;

      var dateString = this.element.val().split(this.locale.separator),
        start = null,
        end = null;

      if (dateString.length === 2) {
        start = moment(dateString[0], this.locale.format);
        end = moment(dateString[1], this.locale.format);
      }

      if (this.singleDatePicker || start === null || end === null) {
        start = moment(this.element.val(), this.locale.format);
        end = start;
      }

      if (!start.isValid() || !end.isValid()) return;

      this.setStartDate(start);
      this.setEndDate(end);
      this.updateView();
    },

    keydown: function (e) {
      //hide on tab or enter
      if ((e.keyCode === 9) || (e.keyCode === 13)) {
        this.hide();
      }
    },

    updateElement: function () {

      //incomplete date selection, revert to last values
      if (!this.endDate) {
        this.startDate = this.oldStartDate.clone();
        this.endDate = this.oldEndDate.clone();
      }

      //if a new date range was selected, invoke the user callback function
      if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
        this.callback(this.startDate, this.endDate, this.chosenLabel);

      if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
        this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
        this.element.trigger('change');
      } else if (this.element.is('input') && this.autoUpdateInput) {
        this.element.val(this.startDate.format(this.locale.format));
        this.element.trigger('change');
      }
    },

    remove: function () {
      this.container.remove();
      this.element.off('.daterangepicker');
      this.element.removeData();
    }

  };

  $.fn.daterangepicker = function (options, callback) {
    this.each(function () {
      var el = $(this);
      if (el.data('daterangepicker'))
        el.data('daterangepicker').remove();
      el.data('daterangepicker', new DateRangePicker(el, options, callback));
    });
    return this;
  };

  return DateRangePicker;

}));

jQuery(document).ready(function () {
  // This button will increment the value
  $('.qtyplus').on('click', function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('name');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment
      $('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(1);
    }
  });
  // This button will decrement the value till 0
  $('.qtyminus').on('click', function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('name');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
      // Decrement one
      $('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
});