(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [611],
  {
    9842: function (e, t, n) {
      e.exports = (function (e) {
        var t = {};
        function n(i) {
          if (t[i]) return t[i].exports;
          var o = (t[i] = { i: i, l: !1, exports: {} });
          return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, i) {
            n.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: i });
          }),
          (n.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (n.t = function (e, t) {
            if (
              (1 & t && (e = n(e)),
              8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
            )
              return e;
            var i = Object.create(null);
            if (
              (n.r(i),
              Object.defineProperty(i, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var o in e)
                n.d(
                  i,
                  o,
                  function (t) {
                    return e[t];
                  }.bind(null, o)
                );
            return i;
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 20))
        );
      })([
        function (e, t) {
          var i,
            o = {};
          (e.exports = o),
            (o._baseDelta = 1e3 / 60),
            (o._nextId = 0),
            (o._seed = 0),
            (o._nowStartTime = +new Date()),
            (o._warnedOnce = {}),
            (o._decomp = null),
            (o.extend = function (e, t) {
              var n, i;
              "boolean" == typeof t ? ((n = 2), (i = t)) : ((n = 1), (i = !0));
              for (var r = n; r < arguments.length; r++) {
                var a = arguments[r];
                if (a)
                  for (var s in a)
                    i && a[s] && a[s].constructor === Object
                      ? e[s] && e[s].constructor !== Object
                        ? (e[s] = a[s])
                        : ((e[s] = e[s] || {}), o.extend(e[s], i, a[s]))
                      : (e[s] = a[s]);
              }
              return e;
            }),
            (o.clone = function (e, t) {
              return o.extend({}, t, e);
            }),
            (o.keys = function (e) {
              if (Object.keys) return Object.keys(e);
              var t = [];
              for (var n in e) t.push(n);
              return t;
            }),
            (o.values = function (e) {
              var t = [];
              if (Object.keys) {
                for (var n = Object.keys(e), i = 0; i < n.length; i++)
                  t.push(e[n[i]]);
                return t;
              }
              for (var o in e) t.push(e[o]);
              return t;
            }),
            (o.get = function (e, t, n, i) {
              t = t.split(".").slice(n, i);
              for (var o = 0; o < t.length; o += 1) e = e[t[o]];
              return e;
            }),
            (o.set = function (e, t, n, i, r) {
              var a = t.split(".").slice(i, r);
              return (o.get(e, t, 0, -1)[a[a.length - 1]] = n), n;
            }),
            (o.shuffle = function (e) {
              for (var t = e.length - 1; t > 0; t--) {
                var n = Math.floor(o.random() * (t + 1)),
                  i = e[t];
                (e[t] = e[n]), (e[n] = i);
              }
              return e;
            }),
            (o.choose = function (e) {
              return e[Math.floor(o.random() * e.length)];
            }),
            (o.isElement = function (e) {
              return "undefined" != typeof HTMLElement
                ? e instanceof HTMLElement
                : !!(e && e.nodeType && e.nodeName);
            }),
            (o.isArray = function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            }),
            (o.isFunction = function (e) {
              return "function" == typeof e;
            }),
            (o.isPlainObject = function (e) {
              return "object" == typeof e && e.constructor === Object;
            }),
            (o.isString = function (e) {
              return "[object String]" === toString.call(e);
            }),
            (o.clamp = function (e, t, n) {
              return e < t ? t : e > n ? n : e;
            }),
            (o.sign = function (e) {
              return e < 0 ? -1 : 1;
            }),
            (o.now = function () {
              if ("undefined" != typeof window && window.performance) {
                if (window.performance.now) return window.performance.now();
                if (window.performance.webkitNow)
                  return window.performance.webkitNow();
              }
              return Date.now ? Date.now() : new Date() - o._nowStartTime;
            }),
            (o.random = function (e, t) {
              return (
                (t = void 0 !== t ? t : 1),
                (e = void 0 !== e ? e : 0) + i() * (t - e)
              );
            }),
            (i = function () {
              return (
                (o._seed = (9301 * o._seed + 49297) % 233280), o._seed / 233280
              );
            }),
            (o.colorToNumber = function (e) {
              return (
                3 == (e = e.replace("#", "")).length &&
                  (e =
                    e.charAt(0) +
                    e.charAt(0) +
                    e.charAt(1) +
                    e.charAt(1) +
                    e.charAt(2) +
                    e.charAt(2)),
                parseInt(e, 16)
              );
            }),
            (o.logLevel = 1),
            (o.log = function () {
              console &&
                o.logLevel > 0 &&
                o.logLevel <= 3 &&
                console.log.apply(
                  console,
                  ["matter-js:"].concat(Array.prototype.slice.call(arguments))
                );
            }),
            (o.info = function () {
              console &&
                o.logLevel > 0 &&
                o.logLevel <= 2 &&
                console.info.apply(
                  console,
                  ["matter-js:"].concat(Array.prototype.slice.call(arguments))
                );
            }),
            (o.warn = function () {
              console &&
                o.logLevel > 0 &&
                o.logLevel <= 3 &&
                console.warn.apply(
                  console,
                  ["matter-js:"].concat(Array.prototype.slice.call(arguments))
                );
            }),
            (o.warnOnce = function () {
              var e = Array.prototype.slice.call(arguments).join(" ");
              o._warnedOnce[e] || (o.warn(e), (o._warnedOnce[e] = !0));
            }),
            (o.deprecated = function (e, t, n) {
              e[t] = o.chain(function () {
                o.warnOnce("\uD83D\uDD05 deprecated \uD83D\uDD05", n);
              }, e[t]);
            }),
            (o.nextId = function () {
              return o._nextId++;
            }),
            (o.indexOf = function (e, t) {
              if (e.indexOf) return e.indexOf(t);
              for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
              return -1;
            }),
            (o.map = function (e, t) {
              if (e.map) return e.map(t);
              for (var n = [], i = 0; i < e.length; i += 1) n.push(t(e[i]));
              return n;
            }),
            (o.topologicalSort = function (e) {
              var t = [],
                n = [],
                i = [];
              for (var r in e)
                n[r] || i[r] || o._topologicalSort(r, n, i, e, t);
              return t;
            }),
            (o._topologicalSort = function (e, t, n, i, r) {
              var a = i[e] || [];
              n[e] = !0;
              for (var s = 0; s < a.length; s += 1) {
                var l = a[s];
                !n[l] && (t[l] || o._topologicalSort(l, t, n, i, r));
              }
              (n[e] = !1), (t[e] = !0), r.push(e);
            }),
            (o.chain = function () {
              for (var e = [], t = 0; t < arguments.length; t += 1) {
                var n = arguments[t];
                n._chained ? e.push.apply(e, n._chained) : e.push(n);
              }
              var i = function () {
                for (
                  var t,
                    n = Array(arguments.length),
                    i = 0,
                    o = arguments.length;
                  i < o;
                  i++
                )
                  n[i] = arguments[i];
                for (i = 0; i < e.length; i += 1) {
                  var r = e[i].apply(t, n);
                  void 0 !== r && (t = r);
                }
                return t;
              };
              return (i._chained = e), i;
            }),
            (o.chainPathBefore = function (e, t, n) {
              return o.set(e, t, o.chain(n, o.get(e, t)));
            }),
            (o.chainPathAfter = function (e, t, n) {
              return o.set(e, t, o.chain(o.get(e, t), n));
            }),
            (o.setDecomp = function (e) {
              o._decomp = e;
            }),
            (o.getDecomp = function () {
              var e = o._decomp;
              try {
                e || "undefined" == typeof window || (e = window.decomp),
                  e || void 0 === n.g || (e = n.g.decomp);
              } catch (t) {
                e = null;
              }
              return e;
            });
        },
        function (e, t) {
          var n = {};
          (e.exports = n),
            (n.create = function (e) {
              var t = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
              return e && n.update(t, e), t;
            }),
            (n.update = function (e, t, n) {
              (e.min.x = 1 / 0),
                (e.max.x = -1 / 0),
                (e.min.y = 1 / 0),
                (e.max.y = -1 / 0);
              for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.x > e.max.x && (e.max.x = o.x),
                  o.x < e.min.x && (e.min.x = o.x),
                  o.y > e.max.y && (e.max.y = o.y),
                  o.y < e.min.y && (e.min.y = o.y);
              }
              n &&
                (n.x > 0 ? (e.max.x += n.x) : (e.min.x += n.x),
                n.y > 0 ? (e.max.y += n.y) : (e.min.y += n.y));
            }),
            (n.contains = function (e, t) {
              return (
                t.x >= e.min.x &&
                t.x <= e.max.x &&
                t.y >= e.min.y &&
                t.y <= e.max.y
              );
            }),
            (n.overlaps = function (e, t) {
              return (
                e.min.x <= t.max.x &&
                e.max.x >= t.min.x &&
                e.max.y >= t.min.y &&
                e.min.y <= t.max.y
              );
            }),
            (n.translate = function (e, t) {
              (e.min.x += t.x),
                (e.max.x += t.x),
                (e.min.y += t.y),
                (e.max.y += t.y);
            }),
            (n.shift = function (e, t) {
              var n = e.max.x - e.min.x,
                i = e.max.y - e.min.y;
              (e.min.x = t.x),
                (e.max.x = t.x + n),
                (e.min.y = t.y),
                (e.max.y = t.y + i);
            });
        },
        function (e, t) {
          var n = {};
          (e.exports = n),
            (n.create = function (e, t) {
              return { x: e || 0, y: t || 0 };
            }),
            (n.clone = function (e) {
              return { x: e.x, y: e.y };
            }),
            (n.magnitude = function (e) {
              return Math.sqrt(e.x * e.x + e.y * e.y);
            }),
            (n.magnitudeSquared = function (e) {
              return e.x * e.x + e.y * e.y;
            }),
            (n.rotate = function (e, t, n) {
              var i = Math.cos(t),
                o = Math.sin(t);
              n || (n = {});
              var r = e.x * i - e.y * o;
              return (n.y = e.x * o + e.y * i), (n.x = r), n;
            }),
            (n.rotateAbout = function (e, t, n, i) {
              var o = Math.cos(t),
                r = Math.sin(t);
              i || (i = {});
              var a = n.x + ((e.x - n.x) * o - (e.y - n.y) * r);
              return (
                (i.y = n.y + ((e.x - n.x) * r + (e.y - n.y) * o)), (i.x = a), i
              );
            }),
            (n.normalise = function (e) {
              var t = n.magnitude(e);
              return 0 === t ? { x: 0, y: 0 } : { x: e.x / t, y: e.y / t };
            }),
            (n.dot = function (e, t) {
              return e.x * t.x + e.y * t.y;
            }),
            (n.cross = function (e, t) {
              return e.x * t.y - e.y * t.x;
            }),
            (n.cross3 = function (e, t, n) {
              return (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x);
            }),
            (n.add = function (e, t, n) {
              return n || (n = {}), (n.x = e.x + t.x), (n.y = e.y + t.y), n;
            }),
            (n.sub = function (e, t, n) {
              return n || (n = {}), (n.x = e.x - t.x), (n.y = e.y - t.y), n;
            }),
            (n.mult = function (e, t) {
              return { x: e.x * t, y: e.y * t };
            }),
            (n.div = function (e, t) {
              return { x: e.x / t, y: e.y / t };
            }),
            (n.perp = function (e, t) {
              return { x: -((t = !0 === t ? -1 : 1) * e.y), y: t * e.x };
            }),
            (n.neg = function (e) {
              return { x: -e.x, y: -e.y };
            }),
            (n.angle = function (e, t) {
              return Math.atan2(t.y - e.y, t.x - e.x);
            }),
            (n._temp = [
              n.create(),
              n.create(),
              n.create(),
              n.create(),
              n.create(),
              n.create(),
            ]);
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(2),
            r = n(0);
          (i.create = function (e, t) {
            for (var n = [], i = 0; i < e.length; i++) {
              var o = e[i],
                r = { x: o.x, y: o.y, index: i, body: t, isInternal: !1 };
              n.push(r);
            }
            return n;
          }),
            (i.fromPath = function (e, t) {
              var n = [];
              return (
                e.replace(
                  /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                  function (e, t, i) {
                    n.push({ x: parseFloat(t), y: parseFloat(i) });
                  }
                ),
                i.create(n, t)
              );
            }),
            (i.centre = function (e) {
              for (
                var t, n, r, a = i.area(e, !0), s = { x: 0, y: 0 }, l = 0;
                l < e.length;
                l++
              )
                (r = (l + 1) % e.length),
                  (t = o.cross(e[l], e[r])),
                  (n = o.mult(o.add(e[l], e[r]), t)),
                  (s = o.add(s, n));
              return o.div(s, 6 * a);
            }),
            (i.mean = function (e) {
              for (var t = { x: 0, y: 0 }, n = 0; n < e.length; n++)
                (t.x += e[n].x), (t.y += e[n].y);
              return o.div(t, e.length);
            }),
            (i.area = function (e, t) {
              for (var n = 0, i = e.length - 1, o = 0; o < e.length; o++)
                (n += (e[i].x - e[o].x) * (e[i].y + e[o].y)), (i = o);
              return t ? n / 2 : Math.abs(n) / 2;
            }),
            (i.inertia = function (e, t) {
              for (var n, i, r = 0, a = 0, s = 0; s < e.length; s++)
                (i = (s + 1) % e.length),
                  (r +=
                    (n = Math.abs(o.cross(e[i], e[s]))) *
                    (o.dot(e[i], e[i]) +
                      o.dot(e[i], e[s]) +
                      o.dot(e[s], e[s]))),
                  (a += n);
              return (t / 6) * (r / a);
            }),
            (i.translate = function (e, t, n) {
              n = void 0 !== n ? n : 1;
              var i,
                o = e.length,
                r = t.x * n,
                a = t.y * n;
              for (i = 0; i < o; i++) (e[i].x += r), (e[i].y += a);
              return e;
            }),
            (i.rotate = function (e, t, n) {
              if (0 !== t) {
                var i,
                  o,
                  r,
                  a,
                  s = Math.cos(t),
                  l = Math.sin(t),
                  c = n.x,
                  u = n.y,
                  d = e.length;
                for (a = 0; a < d; a++)
                  (o = (i = e[a]).x - c),
                    (r = i.y - u),
                    (i.x = c + (o * s - r * l)),
                    (i.y = u + (o * l + r * s));
                return e;
              }
            }),
            (i.contains = function (e, t) {
              for (
                var n, i = t.x, o = t.y, r = e.length, a = e[r - 1], s = 0;
                s < r;
                s++
              ) {
                if (
                  ((n = e[s]),
                  (i - a.x) * (n.y - a.y) + (o - a.y) * (a.x - n.x) > 0)
                )
                  return !1;
                a = n;
              }
              return !0;
            }),
            (i.scale = function (e, t, n, r) {
              if (1 === t && 1 === n) return e;
              r = r || i.centre(e);
              for (var a, s, l = 0; l < e.length; l++)
                (a = e[l]),
                  (s = o.sub(a, r)),
                  (e[l].x = r.x + s.x * t),
                  (e[l].y = r.y + s.y * n);
              return e;
            }),
            (i.chamfer = function (e, t, n, i, a) {
              (t = "number" == typeof t ? [t] : t || [8]),
                (n = void 0 !== n ? n : -1),
                (i = i || 2),
                (a = a || 14);
              for (var s = [], l = 0; l < e.length; l++) {
                var c = e[l - 1 >= 0 ? l - 1 : e.length - 1],
                  u = e[l],
                  d = e[(l + 1) % e.length],
                  p = t[l < t.length ? l : t.length - 1];
                if (0 === p) {
                  s.push(u);
                  continue;
                }
                var f = o.normalise({ x: u.y - c.y, y: c.x - u.x }),
                  v = o.normalise({ x: d.y - u.y, y: u.x - d.x }),
                  y = Math.sqrt(2 * Math.pow(p, 2)),
                  m = o.mult(r.clone(f), p),
                  g = o.normalise(o.mult(o.add(f, v), 0.5)),
                  x = o.sub(u, o.mult(g, y)),
                  h = n;
                -1 === n && (h = 1.75 * Math.pow(p, 0.32)),
                  (h = r.clamp(h, i, a)) % 2 == 1 && (h += 1);
                for (var b = Math.acos(o.dot(f, v)) / h, S = 0; S < h; S++)
                  s.push(o.add(o.rotate(m, b * S), x));
              }
              return s;
            }),
            (i.clockwiseSort = function (e) {
              var t = i.mean(e);
              return (
                e.sort(function (e, n) {
                  return o.angle(t, e) - o.angle(t, n);
                }),
                e
              );
            }),
            (i.isConvex = function (e) {
              var t,
                n,
                i,
                o,
                r = 0,
                a = e.length;
              if (a < 3) return null;
              for (t = 0; t < a; t++)
                if (
                  ((n = (t + 1) % a),
                  (i = (t + 2) % a),
                  (o =
                    (e[n].x - e[t].x) * (e[i].y - e[n].y) -
                    (e[n].y - e[t].y) * (e[i].x - e[n].x)) < 0
                    ? (r |= 1)
                    : o > 0 && (r |= 2),
                  3 === r)
                )
                  return !1;
              return 0 !== r || null;
            }),
            (i.hull = function (e) {
              var t,
                n,
                i = [],
                r = [];
              for (
                (e = e.slice(0)).sort(function (e, t) {
                  var n = e.x - t.x;
                  return 0 !== n ? n : e.y - t.y;
                }),
                  n = 0;
                n < e.length;
                n += 1
              ) {
                for (
                  t = e[n];
                  r.length >= 2 &&
                  0 >= o.cross3(r[r.length - 2], r[r.length - 1], t);

                )
                  r.pop();
                r.push(t);
              }
              for (n = e.length - 1; n >= 0; n -= 1) {
                for (
                  t = e[n];
                  i.length >= 2 &&
                  0 >= o.cross3(i[i.length - 2], i[i.length - 1], t);

                )
                  i.pop();
                i.push(t);
              }
              return i.pop(), r.pop(), i.concat(r);
            });
        },
        function (e, t, n) {
          var i,
            o = {};
          e.exports = o;
          var r = n(3),
            a = n(2),
            s = n(7),
            l = n(0),
            c = n(1),
            u = n(11);
          (o._timeCorrection = !0),
            (o._inertiaScale = 4),
            (o._nextCollidingGroupId = 1),
            (o._nextNonCollidingGroupId = -1),
            (o._nextCategory = 1),
            (o._baseDelta = 1e3 / 60),
            (o.create = function (e) {
              var t = {
                  id: l.nextId(),
                  type: "body",
                  label: "Body",
                  parts: [],
                  plugin: {},
                  angle: 0,
                  vertices: r.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                  position: { x: 0, y: 0 },
                  force: { x: 0, y: 0 },
                  torque: 0,
                  positionImpulse: { x: 0, y: 0 },
                  constraintImpulse: { x: 0, y: 0, angle: 0 },
                  totalContacts: 0,
                  speed: 0,
                  angularSpeed: 0,
                  velocity: { x: 0, y: 0 },
                  angularVelocity: 0,
                  isSensor: !1,
                  isStatic: !1,
                  isSleeping: !1,
                  motion: 0,
                  sleepThreshold: 60,
                  density: 0.001,
                  restitution: 0,
                  friction: 0.1,
                  frictionStatic: 0.5,
                  frictionAir: 0.01,
                  collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                  slop: 0.05,
                  timeScale: 1,
                  render: {
                    visible: !0,
                    opacity: 1,
                    strokeStyle: null,
                    fillStyle: null,
                    lineWidth: null,
                    sprite: { xScale: 1, yScale: 1, xOffset: 0, yOffset: 0 },
                  },
                  events: null,
                  bounds: null,
                  chamfer: null,
                  circleRadius: 0,
                  positionPrev: null,
                  anglePrev: 0,
                  parent: null,
                  axes: null,
                  area: 0,
                  mass: 0,
                  inertia: 0,
                  deltaTime: 1e3 / 60,
                  _original: null,
                },
                n = l.extend(t, e);
              return i(n, e), n;
            }),
            (o.nextGroup = function (e) {
              return e
                ? o._nextNonCollidingGroupId--
                : o._nextCollidingGroupId++;
            }),
            (o.nextCategory = function () {
              return (o._nextCategory = o._nextCategory << 1), o._nextCategory;
            }),
            (i = function (e, t) {
              (t = t || {}),
                o.set(e, {
                  bounds: e.bounds || c.create(e.vertices),
                  positionPrev: e.positionPrev || a.clone(e.position),
                  anglePrev: e.anglePrev || e.angle,
                  vertices: e.vertices,
                  parts: e.parts || [e],
                  isStatic: e.isStatic,
                  isSleeping: e.isSleeping,
                  parent: e.parent || e,
                }),
                r.rotate(e.vertices, e.angle, e.position),
                u.rotate(e.axes, e.angle),
                c.update(e.bounds, e.vertices, e.velocity),
                o.set(e, {
                  axes: t.axes || e.axes,
                  area: t.area || e.area,
                  mass: t.mass || e.mass,
                  inertia: t.inertia || e.inertia,
                });
              var n = e.isStatic
                  ? "#14151f"
                  : l.choose([
                      "#f19648",
                      "#f5d259",
                      "#f55a3c",
                      "#063e7b",
                      "#ececd1",
                    ]),
                i = e.isStatic ? "#555" : "#ccc",
                s = e.isStatic && null === e.render.fillStyle ? 1 : 0;
              (e.render.fillStyle = e.render.fillStyle || n),
                (e.render.strokeStyle = e.render.strokeStyle || i),
                (e.render.lineWidth = e.render.lineWidth || s),
                (e.render.sprite.xOffset +=
                  -(e.bounds.min.x - e.position.x) /
                  (e.bounds.max.x - e.bounds.min.x)),
                (e.render.sprite.yOffset +=
                  -(e.bounds.min.y - e.position.y) /
                  (e.bounds.max.y - e.bounds.min.y));
            }),
            (o.set = function (e, t, n) {
              var i;
              for (i in ("string" == typeof t && ((i = t), ((t = {})[i] = n)),
              t))
                if (Object.prototype.hasOwnProperty.call(t, i))
                  switch (((n = t[i]), i)) {
                    case "isStatic":
                      o.setStatic(e, n);
                      break;
                    case "isSleeping":
                      s.set(e, n);
                      break;
                    case "mass":
                      o.setMass(e, n);
                      break;
                    case "density":
                      o.setDensity(e, n);
                      break;
                    case "inertia":
                      o.setInertia(e, n);
                      break;
                    case "vertices":
                      o.setVertices(e, n);
                      break;
                    case "position":
                      o.setPosition(e, n);
                      break;
                    case "angle":
                      o.setAngle(e, n);
                      break;
                    case "velocity":
                      o.setVelocity(e, n);
                      break;
                    case "angularVelocity":
                      o.setAngularVelocity(e, n);
                      break;
                    case "speed":
                      o.setSpeed(e, n);
                      break;
                    case "angularSpeed":
                      o.setAngularSpeed(e, n);
                      break;
                    case "parts":
                      o.setParts(e, n);
                      break;
                    case "centre":
                      o.setCentre(e, n);
                      break;
                    default:
                      e[i] = n;
                  }
            }),
            (o.setStatic = function (e, t) {
              for (var n = 0; n < e.parts.length; n++) {
                var i = e.parts[n];
                (i.isStatic = t),
                  t
                    ? ((i._original = {
                        restitution: i.restitution,
                        friction: i.friction,
                        mass: i.mass,
                        inertia: i.inertia,
                        density: i.density,
                        inverseMass: i.inverseMass,
                        inverseInertia: i.inverseInertia,
                      }),
                      (i.restitution = 0),
                      (i.friction = 1),
                      (i.mass = i.inertia = i.density = 1 / 0),
                      (i.inverseMass = i.inverseInertia = 0),
                      (i.positionPrev.x = i.position.x),
                      (i.positionPrev.y = i.position.y),
                      (i.anglePrev = i.angle),
                      (i.angularVelocity = 0),
                      (i.speed = 0),
                      (i.angularSpeed = 0),
                      (i.motion = 0))
                    : i._original &&
                      ((i.restitution = i._original.restitution),
                      (i.friction = i._original.friction),
                      (i.mass = i._original.mass),
                      (i.inertia = i._original.inertia),
                      (i.density = i._original.density),
                      (i.inverseMass = i._original.inverseMass),
                      (i.inverseInertia = i._original.inverseInertia),
                      (i._original = null));
              }
            }),
            (o.setMass = function (e, t) {
              var n = e.inertia / (e.mass / 6);
              (e.inertia = n * (t / 6)),
                (e.inverseInertia = 1 / e.inertia),
                (e.mass = t),
                (e.inverseMass = 1 / e.mass),
                (e.density = e.mass / e.area);
            }),
            (o.setDensity = function (e, t) {
              o.setMass(e, t * e.area), (e.density = t);
            }),
            (o.setInertia = function (e, t) {
              (e.inertia = t), (e.inverseInertia = 1 / e.inertia);
            }),
            (o.setVertices = function (e, t) {
              t[0].body === e
                ? (e.vertices = t)
                : (e.vertices = r.create(t, e)),
                (e.axes = u.fromVertices(e.vertices)),
                (e.area = r.area(e.vertices)),
                o.setMass(e, e.density * e.area);
              var n = r.centre(e.vertices);
              r.translate(e.vertices, n, -1),
                o.setInertia(
                  e,
                  o._inertiaScale * r.inertia(e.vertices, e.mass)
                ),
                r.translate(e.vertices, e.position),
                c.update(e.bounds, e.vertices, e.velocity);
            }),
            (o.setParts = function (e, t, n) {
              for (
                t = t.slice(0),
                  e.parts.length = 0,
                  e.parts.push(e),
                  e.parent = e,
                  i = 0;
                i < t.length;
                i++
              ) {
                var i,
                  a = t[i];
                a !== e && ((a.parent = e), e.parts.push(a));
              }
              if (1 !== e.parts.length) {
                if ((n = void 0 === n || n)) {
                  var s = [];
                  for (i = 0; i < t.length; i++) s = s.concat(t[i].vertices);
                  r.clockwiseSort(s);
                  var l = r.hull(s),
                    c = r.centre(l);
                  o.setVertices(e, l), r.translate(e.vertices, c);
                }
                var u = o._totalProperties(e);
                (e.area = u.area),
                  (e.parent = e),
                  (e.position.x = u.centre.x),
                  (e.position.y = u.centre.y),
                  (e.positionPrev.x = u.centre.x),
                  (e.positionPrev.y = u.centre.y),
                  o.setMass(e, u.mass),
                  o.setInertia(e, u.inertia),
                  o.setPosition(e, u.centre);
              }
            }),
            (o.setCentre = function (e, t, n) {
              n
                ? ((e.positionPrev.x += t.x),
                  (e.positionPrev.y += t.y),
                  (e.position.x += t.x),
                  (e.position.y += t.y))
                : ((e.positionPrev.x = t.x - (e.position.x - e.positionPrev.x)),
                  (e.positionPrev.y = t.y - (e.position.y - e.positionPrev.y)),
                  (e.position.x = t.x),
                  (e.position.y = t.y));
            }),
            (o.setPosition = function (e, t, n) {
              var i = a.sub(t, e.position);
              n
                ? ((e.positionPrev.x = e.position.x),
                  (e.positionPrev.y = e.position.y),
                  (e.velocity.x = i.x),
                  (e.velocity.y = i.y),
                  (e.speed = a.magnitude(i)))
                : ((e.positionPrev.x += i.x), (e.positionPrev.y += i.y));
              for (var o = 0; o < e.parts.length; o++) {
                var s = e.parts[o];
                (s.position.x += i.x),
                  (s.position.y += i.y),
                  r.translate(s.vertices, i),
                  c.update(s.bounds, s.vertices, e.velocity);
              }
            }),
            (o.setAngle = function (e, t, n) {
              var i = t - e.angle;
              n
                ? ((e.anglePrev = e.angle),
                  (e.angularVelocity = i),
                  (e.angularSpeed = Math.abs(i)))
                : (e.anglePrev += i);
              for (var o = 0; o < e.parts.length; o++) {
                var s = e.parts[o];
                (s.angle += i),
                  r.rotate(s.vertices, i, e.position),
                  u.rotate(s.axes, i),
                  c.update(s.bounds, s.vertices, e.velocity),
                  o > 0 && a.rotateAbout(s.position, i, e.position, s.position);
              }
            }),
            (o.setVelocity = function (e, t) {
              var n = e.deltaTime / o._baseDelta;
              (e.positionPrev.x = e.position.x - t.x * n),
                (e.positionPrev.y = e.position.y - t.y * n),
                (e.velocity.x = (e.position.x - e.positionPrev.x) / n),
                (e.velocity.y = (e.position.y - e.positionPrev.y) / n),
                (e.speed = a.magnitude(e.velocity));
            }),
            (o.getVelocity = function (e) {
              var t = o._baseDelta / e.deltaTime;
              return {
                x: (e.position.x - e.positionPrev.x) * t,
                y: (e.position.y - e.positionPrev.y) * t,
              };
            }),
            (o.getSpeed = function (e) {
              return a.magnitude(o.getVelocity(e));
            }),
            (o.setSpeed = function (e, t) {
              o.setVelocity(e, a.mult(a.normalise(o.getVelocity(e)), t));
            }),
            (o.setAngularVelocity = function (e, t) {
              var n = e.deltaTime / o._baseDelta;
              (e.anglePrev = e.angle - t * n),
                (e.angularVelocity = (e.angle - e.anglePrev) / n),
                (e.angularSpeed = Math.abs(e.angularVelocity));
            }),
            (o.getAngularVelocity = function (e) {
              return ((e.angle - e.anglePrev) * o._baseDelta) / e.deltaTime;
            }),
            (o.getAngularSpeed = function (e) {
              return Math.abs(o.getAngularVelocity(e));
            }),
            (o.setAngularSpeed = function (e, t) {
              o.setAngularVelocity(e, l.sign(o.getAngularVelocity(e)) * t);
            }),
            (o.translate = function (e, t, n) {
              o.setPosition(e, a.add(e.position, t), n);
            }),
            (o.rotate = function (e, t, n, i) {
              if (n) {
                var r = Math.cos(t),
                  a = Math.sin(t),
                  s = e.position.x - n.x,
                  l = e.position.y - n.y;
                o.setPosition(
                  e,
                  { x: n.x + (s * r - l * a), y: n.y + (s * a + l * r) },
                  i
                ),
                  o.setAngle(e, e.angle + t, i);
              } else o.setAngle(e, e.angle + t, i);
            }),
            (o.scale = function (e, t, n, i) {
              var a = 0,
                s = 0;
              i = i || e.position;
              for (var l = 0; l < e.parts.length; l++) {
                var d = e.parts[l];
                r.scale(d.vertices, t, n, i),
                  (d.axes = u.fromVertices(d.vertices)),
                  (d.area = r.area(d.vertices)),
                  o.setMass(d, e.density * d.area),
                  r.translate(d.vertices, {
                    x: -d.position.x,
                    y: -d.position.y,
                  }),
                  o.setInertia(
                    d,
                    o._inertiaScale * r.inertia(d.vertices, d.mass)
                  ),
                  r.translate(d.vertices, { x: d.position.x, y: d.position.y }),
                  l > 0 && ((a += d.area), (s += d.inertia)),
                  (d.position.x = i.x + (d.position.x - i.x) * t),
                  (d.position.y = i.y + (d.position.y - i.y) * n),
                  c.update(d.bounds, d.vertices, e.velocity);
              }
              e.parts.length > 1 &&
                ((e.area = a),
                e.isStatic ||
                  (o.setMass(e, e.density * a), o.setInertia(e, s))),
                e.circleRadius &&
                  (t === n ? (e.circleRadius *= t) : (e.circleRadius = null));
            }),
            (o.update = function (e, t) {
              var n = (t = (void 0 !== t ? t : 1e3 / 60) * e.timeScale) * t,
                i = o._timeCorrection ? t / (e.deltaTime || t) : 1,
                s = 1 - e.frictionAir * (t / l._baseDelta),
                d = (e.position.x - e.positionPrev.x) * i,
                p = (e.position.y - e.positionPrev.y) * i;
              (e.velocity.x = d * s + (e.force.x / e.mass) * n),
                (e.velocity.y = p * s + (e.force.y / e.mass) * n),
                (e.positionPrev.x = e.position.x),
                (e.positionPrev.y = e.position.y),
                (e.position.x += e.velocity.x),
                (e.position.y += e.velocity.y),
                (e.deltaTime = t),
                (e.angularVelocity =
                  (e.angle - e.anglePrev) * s * i + (e.torque / e.inertia) * n),
                (e.anglePrev = e.angle),
                (e.angle += e.angularVelocity);
              for (var f = 0; f < e.parts.length; f++) {
                var v = e.parts[f];
                r.translate(v.vertices, e.velocity),
                  f > 0 &&
                    ((v.position.x += e.velocity.x),
                    (v.position.y += e.velocity.y)),
                  0 !== e.angularVelocity &&
                    (r.rotate(v.vertices, e.angularVelocity, e.position),
                    u.rotate(v.axes, e.angularVelocity),
                    f > 0 &&
                      a.rotateAbout(
                        v.position,
                        e.angularVelocity,
                        e.position,
                        v.position
                      )),
                  c.update(v.bounds, v.vertices, e.velocity);
              }
            }),
            (o.updateVelocities = function (e) {
              var t = o._baseDelta / e.deltaTime,
                n = e.velocity;
              (n.x = (e.position.x - e.positionPrev.x) * t),
                (n.y = (e.position.y - e.positionPrev.y) * t),
                (e.speed = Math.sqrt(n.x * n.x + n.y * n.y)),
                (e.angularVelocity = (e.angle - e.anglePrev) * t),
                (e.angularSpeed = Math.abs(e.angularVelocity));
            }),
            (o.applyForce = function (e, t, n) {
              var i = { x: t.x - e.position.x, y: t.y - e.position.y };
              (e.force.x += n.x),
                (e.force.y += n.y),
                (e.torque += i.x * n.y - i.y * n.x);
            }),
            (o._totalProperties = function (e) {
              for (
                var t = {
                    mass: 0,
                    area: 0,
                    inertia: 0,
                    centre: { x: 0, y: 0 },
                  },
                  n = 1 === e.parts.length ? 0 : 1;
                n < e.parts.length;
                n++
              ) {
                var i = e.parts[n],
                  o = i.mass !== 1 / 0 ? i.mass : 1;
                (t.mass += o),
                  (t.area += i.area),
                  (t.inertia += i.inertia),
                  (t.centre = a.add(t.centre, a.mult(i.position, o)));
              }
              return (t.centre = a.div(t.centre, t.mass)), t;
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(0);
          (i.on = function (e, t, n) {
            for (var i, o = t.split(" "), r = 0; r < o.length; r++)
              (i = o[r]),
                (e.events = e.events || {}),
                (e.events[i] = e.events[i] || []),
                e.events[i].push(n);
            return n;
          }),
            (i.off = function (e, t, n) {
              if (!t) {
                e.events = {};
                return;
              }
              "function" == typeof t &&
                ((n = t), (t = o.keys(e.events).join(" ")));
              for (var i = t.split(" "), r = 0; r < i.length; r++) {
                var a = e.events[i[r]],
                  s = [];
                if (n && a)
                  for (var l = 0; l < a.length; l++) a[l] !== n && s.push(a[l]);
                e.events[i[r]] = s;
              }
            }),
            (i.trigger = function (e, t, n) {
              var i,
                r,
                a,
                s,
                l = e.events;
              if (l && o.keys(l).length > 0) {
                n || (n = {}), (i = t.split(" "));
                for (var c = 0; c < i.length; c++)
                  if ((a = l[(r = i[c])])) {
                    ((s = o.clone(n, !1)).name = r), (s.source = e);
                    for (var u = 0; u < a.length; u++) a[u].apply(e, [s]);
                  }
              }
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(5),
            r = n(0),
            a = n(1),
            s = n(4);
          (i.create = function (e) {
            return r.extend(
              {
                id: r.nextId(),
                type: "composite",
                parent: null,
                isModified: !1,
                bodies: [],
                constraints: [],
                composites: [],
                label: "Composite",
                plugin: {},
                cache: {
                  allBodies: null,
                  allConstraints: null,
                  allComposites: null,
                },
              },
              e
            );
          }),
            (i.setModified = function (e, t, n, o) {
              if (
                ((e.isModified = t),
                t &&
                  e.cache &&
                  ((e.cache.allBodies = null),
                  (e.cache.allConstraints = null),
                  (e.cache.allComposites = null)),
                n && e.parent && i.setModified(e.parent, t, n, o),
                o)
              )
                for (var r = 0; r < e.composites.length; r++) {
                  var a = e.composites[r];
                  i.setModified(a, t, n, o);
                }
            }),
            (i.add = function (e, t) {
              var n = [].concat(t);
              o.trigger(e, "beforeAdd", { object: t });
              for (var a = 0; a < n.length; a++) {
                var s = n[a];
                switch (s.type) {
                  case "body":
                    if (s.parent !== s) {
                      r.warn(
                        "Composite.add: skipped adding a compound body part (you must add its parent instead)"
                      );
                      break;
                    }
                    i.addBody(e, s);
                    break;
                  case "constraint":
                    i.addConstraint(e, s);
                    break;
                  case "composite":
                    i.addComposite(e, s);
                    break;
                  case "mouseConstraint":
                    i.addConstraint(e, s.constraint);
                }
              }
              return o.trigger(e, "afterAdd", { object: t }), e;
            }),
            (i.remove = function (e, t, n) {
              var r = [].concat(t);
              o.trigger(e, "beforeRemove", { object: t });
              for (var a = 0; a < r.length; a++) {
                var s = r[a];
                switch (s.type) {
                  case "body":
                    i.removeBody(e, s, n);
                    break;
                  case "constraint":
                    i.removeConstraint(e, s, n);
                    break;
                  case "composite":
                    i.removeComposite(e, s, n);
                    break;
                  case "mouseConstraint":
                    i.removeConstraint(e, s.constraint);
                }
              }
              return o.trigger(e, "afterRemove", { object: t }), e;
            }),
            (i.addComposite = function (e, t) {
              return (
                e.composites.push(t),
                (t.parent = e),
                i.setModified(e, !0, !0, !1),
                e
              );
            }),
            (i.removeComposite = function (e, t, n) {
              var o = r.indexOf(e.composites, t);
              if ((-1 !== o && i.removeCompositeAt(e, o), n))
                for (var a = 0; a < e.composites.length; a++)
                  i.removeComposite(e.composites[a], t, !0);
              return e;
            }),
            (i.removeCompositeAt = function (e, t) {
              return e.composites.splice(t, 1), i.setModified(e, !0, !0, !1), e;
            }),
            (i.addBody = function (e, t) {
              return e.bodies.push(t), i.setModified(e, !0, !0, !1), e;
            }),
            (i.removeBody = function (e, t, n) {
              var o = r.indexOf(e.bodies, t);
              if ((-1 !== o && i.removeBodyAt(e, o), n))
                for (var a = 0; a < e.composites.length; a++)
                  i.removeBody(e.composites[a], t, !0);
              return e;
            }),
            (i.removeBodyAt = function (e, t) {
              return e.bodies.splice(t, 1), i.setModified(e, !0, !0, !1), e;
            }),
            (i.addConstraint = function (e, t) {
              return e.constraints.push(t), i.setModified(e, !0, !0, !1), e;
            }),
            (i.removeConstraint = function (e, t, n) {
              var o = r.indexOf(e.constraints, t);
              if ((-1 !== o && i.removeConstraintAt(e, o), n))
                for (var a = 0; a < e.composites.length; a++)
                  i.removeConstraint(e.composites[a], t, !0);
              return e;
            }),
            (i.removeConstraintAt = function (e, t) {
              return (
                e.constraints.splice(t, 1), i.setModified(e, !0, !0, !1), e
              );
            }),
            (i.clear = function (e, t, n) {
              if (n)
                for (var o = 0; o < e.composites.length; o++)
                  i.clear(e.composites[o], t, !0);
              return (
                t
                  ? (e.bodies = e.bodies.filter(function (e) {
                      return e.isStatic;
                    }))
                  : (e.bodies.length = 0),
                (e.constraints.length = 0),
                (e.composites.length = 0),
                i.setModified(e, !0, !0, !1),
                e
              );
            }),
            (i.allBodies = function (e) {
              if (e.cache && e.cache.allBodies) return e.cache.allBodies;
              for (
                var t = [].concat(e.bodies), n = 0;
                n < e.composites.length;
                n++
              )
                t = t.concat(i.allBodies(e.composites[n]));
              return e.cache && (e.cache.allBodies = t), t;
            }),
            (i.allConstraints = function (e) {
              if (e.cache && e.cache.allConstraints)
                return e.cache.allConstraints;
              for (
                var t = [].concat(e.constraints), n = 0;
                n < e.composites.length;
                n++
              )
                t = t.concat(i.allConstraints(e.composites[n]));
              return e.cache && (e.cache.allConstraints = t), t;
            }),
            (i.allComposites = function (e) {
              if (e.cache && e.cache.allComposites)
                return e.cache.allComposites;
              for (
                var t = [].concat(e.composites), n = 0;
                n < e.composites.length;
                n++
              )
                t = t.concat(i.allComposites(e.composites[n]));
              return e.cache && (e.cache.allComposites = t), t;
            }),
            (i.get = function (e, t, n) {
              var o, r;
              switch (n) {
                case "body":
                  o = i.allBodies(e);
                  break;
                case "constraint":
                  o = i.allConstraints(e);
                  break;
                case "composite":
                  o = i.allComposites(e).concat(e);
              }
              return o
                ? 0 ===
                  (r = o.filter(function (e) {
                    return e.id.toString() === t.toString();
                  })).length
                  ? null
                  : r[0]
                : null;
            }),
            (i.move = function (e, t, n) {
              return i.remove(e, t), i.add(n, t), e;
            }),
            (i.rebase = function (e) {
              for (
                var t = i
                    .allBodies(e)
                    .concat(i.allConstraints(e))
                    .concat(i.allComposites(e)),
                  n = 0;
                n < t.length;
                n++
              )
                t[n].id = r.nextId();
              return e;
            }),
            (i.translate = function (e, t, n) {
              for (
                var o = n ? i.allBodies(e) : e.bodies, r = 0;
                r < o.length;
                r++
              )
                s.translate(o[r], t);
              return e;
            }),
            (i.rotate = function (e, t, n, o) {
              for (
                var r = Math.cos(t),
                  a = Math.sin(t),
                  l = o ? i.allBodies(e) : e.bodies,
                  c = 0;
                c < l.length;
                c++
              ) {
                var u = l[c],
                  d = u.position.x - n.x,
                  p = u.position.y - n.y;
                s.setPosition(u, {
                  x: n.x + (d * r - p * a),
                  y: n.y + (d * a + p * r),
                }),
                  s.rotate(u, t);
              }
              return e;
            }),
            (i.scale = function (e, t, n, o, r) {
              for (
                var a = r ? i.allBodies(e) : e.bodies, l = 0;
                l < a.length;
                l++
              ) {
                var c = a[l],
                  u = c.position.x - o.x,
                  d = c.position.y - o.y;
                s.setPosition(c, { x: o.x + u * t, y: o.y + d * n }),
                  s.scale(c, t, n);
              }
              return e;
            }),
            (i.bounds = function (e) {
              for (
                var t = i.allBodies(e), n = [], o = 0;
                o < t.length;
                o += 1
              ) {
                var r = t[o];
                n.push(r.bounds.min, r.bounds.max);
              }
              return a.create(n);
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(4),
            r = n(5),
            a = n(0);
          (i._motionWakeThreshold = 0.18),
            (i._motionSleepThreshold = 0.08),
            (i._minBias = 0.9),
            (i.update = function (e, t) {
              for (
                var n = t / a._baseDelta, r = i._motionSleepThreshold, s = 0;
                s < e.length;
                s++
              ) {
                var l = e[s],
                  c = o.getSpeed(l),
                  u = o.getAngularSpeed(l),
                  d = c * c + u * u;
                if (0 !== l.force.x || 0 !== l.force.y) {
                  i.set(l, !1);
                  continue;
                }
                var p = Math.min(l.motion, d),
                  f = Math.max(l.motion, d);
                (l.motion = i._minBias * p + (1 - i._minBias) * f),
                  l.sleepThreshold > 0 && l.motion < r
                    ? ((l.sleepCounter += 1),
                      l.sleepCounter >= l.sleepThreshold / n && i.set(l, !0))
                    : l.sleepCounter > 0 && (l.sleepCounter -= 1);
              }
            }),
            (i.afterCollisions = function (e) {
              for (var t = i._motionSleepThreshold, n = 0; n < e.length; n++) {
                var o = e[n];
                if (o.isActive) {
                  var r = o.collision,
                    a = r.bodyA.parent,
                    s = r.bodyB.parent;
                  if (
                    (!a.isSleeping || !s.isSleeping) &&
                    !a.isStatic &&
                    !s.isStatic &&
                    (a.isSleeping || s.isSleeping)
                  ) {
                    var l = a.isSleeping && !a.isStatic ? a : s,
                      c = l === a ? s : a;
                    !l.isStatic && c.motion > t && i.set(l, !1);
                  }
                }
              }
            }),
            (i.set = function (e, t) {
              var n = e.isSleeping;
              t
                ? ((e.isSleeping = !0),
                  (e.sleepCounter = e.sleepThreshold),
                  (e.positionImpulse.x = 0),
                  (e.positionImpulse.y = 0),
                  (e.positionPrev.x = e.position.x),
                  (e.positionPrev.y = e.position.y),
                  (e.anglePrev = e.angle),
                  (e.speed = 0),
                  (e.angularSpeed = 0),
                  (e.motion = 0),
                  n || r.trigger(e, "sleepStart"))
                : ((e.isSleeping = !1),
                  (e.sleepCounter = 0),
                  n && r.trigger(e, "sleepEnd"));
            });
        },
        function (e, t, n) {
          var i,
            o,
            r,
            a = {};
          e.exports = a;
          var s = n(3),
            l = n(9);
          (i = []),
            (o = { overlap: 0, axis: null }),
            (r = { overlap: 0, axis: null }),
            (a.create = function (e, t) {
              return {
                pair: null,
                collided: !1,
                bodyA: e,
                bodyB: t,
                parentA: e.parent,
                parentB: t.parent,
                depth: 0,
                normal: { x: 0, y: 0 },
                tangent: { x: 0, y: 0 },
                penetration: { x: 0, y: 0 },
                supports: [],
              };
            }),
            (a.collides = function (e, t, n) {
              if (
                (a._overlapAxes(o, e.vertices, t.vertices, e.axes),
                o.overlap <= 0 ||
                  (a._overlapAxes(r, t.vertices, e.vertices, t.axes),
                  r.overlap <= 0))
              )
                return null;
              var i,
                c,
                u = n && n.table[l.id(e, t)];
              u
                ? (c = u.collision)
                : (((c = a.create(e, t)).collided = !0),
                  (c.bodyA = e.id < t.id ? e : t),
                  (c.bodyB = e.id < t.id ? t : e),
                  (c.parentA = c.bodyA.parent),
                  (c.parentB = c.bodyB.parent)),
                (e = c.bodyA),
                (t = c.bodyB),
                (i = o.overlap < r.overlap ? o : r);
              var d = c.normal,
                p = c.supports,
                f = i.axis,
                v = f.x,
                y = f.y;
              v * (t.position.x - e.position.x) +
                y * (t.position.y - e.position.y) <
              0
                ? ((d.x = v), (d.y = y))
                : ((d.x = -v), (d.y = -y)),
                (c.tangent.x = -d.y),
                (c.tangent.y = d.x),
                (c.depth = i.overlap),
                (c.penetration.x = d.x * c.depth),
                (c.penetration.y = d.y * c.depth);
              var m = a._findSupports(e, t, d, 1),
                g = 0;
              if (
                (s.contains(e.vertices, m[0]) && (p[g++] = m[0]),
                s.contains(e.vertices, m[1]) && (p[g++] = m[1]),
                g < 2)
              ) {
                var x = a._findSupports(t, e, d, -1);
                s.contains(t.vertices, x[0]) && (p[g++] = x[0]),
                  g < 2 && s.contains(t.vertices, x[1]) && (p[g++] = x[1]);
              }
              return 0 === g && (p[g++] = m[0]), (p.length = g), c;
            }),
            (a._overlapAxes = function (e, t, n, i) {
              var o,
                r,
                a,
                s,
                l,
                c,
                u = t.length,
                d = n.length,
                p = t[0].x,
                f = t[0].y,
                v = n[0].x,
                y = n[0].y,
                m = i.length,
                g = Number.MAX_VALUE,
                x = 0;
              for (l = 0; l < m; l++) {
                var h = i[l],
                  b = h.x,
                  S = h.y,
                  w = p * b + f * S,
                  A = v * b + y * S,
                  P = w,
                  C = A;
                for (c = 1; c < u; c += 1)
                  (s = t[c].x * b + t[c].y * S) > P
                    ? (P = s)
                    : s < w && (w = s);
                for (c = 1; c < d; c += 1)
                  (s = n[c].x * b + n[c].y * S) > C
                    ? (C = s)
                    : s < A && (A = s);
                if (
                  (o = (r = P - A) < (a = C - w) ? r : a) < g &&
                  ((g = o), (x = l), o <= 0)
                )
                  break;
              }
              (e.axis = i[x]), (e.overlap = g);
            }),
            (a._projectToAxis = function (e, t, n) {
              for (
                var i = t[0].x * n.x + t[0].y * n.y, o = i, r = 1;
                r < t.length;
                r += 1
              ) {
                var a = t[r].x * n.x + t[r].y * n.y;
                a > o ? (o = a) : a < i && (i = a);
              }
              (e.min = i), (e.max = o);
            }),
            (a._findSupports = function (e, t, n, o) {
              var r,
                a,
                s,
                l,
                c,
                u = t.vertices,
                d = u.length,
                p = e.position.x,
                f = e.position.y,
                v = n.x * o,
                y = n.y * o,
                m = Number.MAX_VALUE;
              for (c = 0; c < d; c += 1)
                (l = v * (p - (a = u[c]).x) + y * (f - a.y)) < m &&
                  ((m = l), (r = a));
              return ((m =
                v * (p - (s = u[(d + r.index - 1) % d]).x) + y * (f - s.y)),
              v * (p - (a = u[(r.index + 1) % d]).x) + y * (f - a.y) < m)
                ? ((i[0] = r), (i[1] = a), i)
                : ((i[0] = r), (i[1] = s), i);
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(16);
          (i.create = function (e, t) {
            var n = e.bodyA,
              o = e.bodyB,
              r = {
                id: i.id(n, o),
                bodyA: n,
                bodyB: o,
                collision: e,
                contacts: [],
                activeContacts: [],
                separation: 0,
                isActive: !0,
                confirmedActive: !0,
                isSensor: n.isSensor || o.isSensor,
                timeCreated: t,
                timeUpdated: t,
                inverseMass: 0,
                friction: 0,
                frictionStatic: 0,
                restitution: 0,
                slop: 0,
              };
            return i.update(r, e, t), r;
          }),
            (i.update = function (e, t, n) {
              var i = e.contacts,
                r = t.supports,
                a = e.activeContacts,
                s = t.parentA,
                l = t.parentB,
                c = s.vertices.length;
              (e.isActive = !0),
                (e.timeUpdated = n),
                (e.collision = t),
                (e.separation = t.depth),
                (e.inverseMass = s.inverseMass + l.inverseMass),
                (e.friction =
                  s.friction < l.friction ? s.friction : l.friction),
                (e.frictionStatic =
                  s.frictionStatic > l.frictionStatic
                    ? s.frictionStatic
                    : l.frictionStatic),
                (e.restitution =
                  s.restitution > l.restitution
                    ? s.restitution
                    : l.restitution),
                (e.slop = s.slop > l.slop ? s.slop : l.slop),
                (t.pair = e),
                (a.length = 0);
              for (var u = 0; u < r.length; u++) {
                var d = r[u],
                  p = d.body === s ? d.index : c + d.index,
                  f = i[p];
                f ? a.push(f) : a.push((i[p] = o.create(d)));
              }
            }),
            (i.setActive = function (e, t, n) {
              t
                ? ((e.isActive = !0), (e.timeUpdated = n))
                : ((e.isActive = !1), (e.activeContacts.length = 0));
            }),
            (i.id = function (e, t) {
              return e.id < t.id
                ? "A" + e.id + "B" + t.id
                : "A" + t.id + "B" + e.id;
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(3),
            r = n(2),
            a = n(7),
            s = n(1),
            l = n(11),
            c = n(0);
          (i._warming = 0.4),
            (i._torqueDampen = 1),
            (i._minLength = 1e-6),
            (i.create = function (e) {
              var t = e;
              t.bodyA && !t.pointA && (t.pointA = { x: 0, y: 0 }),
                t.bodyB && !t.pointB && (t.pointB = { x: 0, y: 0 });
              var n = t.bodyA ? r.add(t.bodyA.position, t.pointA) : t.pointA,
                i = t.bodyB ? r.add(t.bodyB.position, t.pointB) : t.pointB,
                o = r.magnitude(r.sub(n, i));
              (t.length = void 0 !== t.length ? t.length : o),
                (t.id = t.id || c.nextId()),
                (t.label = t.label || "Constraint"),
                (t.type = "constraint"),
                (t.stiffness = t.stiffness || (t.length > 0 ? 1 : 0.7)),
                (t.damping = t.damping || 0),
                (t.angularStiffness = t.angularStiffness || 0),
                (t.angleA = t.bodyA ? t.bodyA.angle : t.angleA),
                (t.angleB = t.bodyB ? t.bodyB.angle : t.angleB),
                (t.plugin = {});
              var a = {
                visible: !0,
                lineWidth: 2,
                strokeStyle: "#ffffff",
                type: "line",
                anchors: !0,
              };
              return (
                0 === t.length && t.stiffness > 0.1
                  ? ((a.type = "pin"), (a.anchors = !1))
                  : t.stiffness < 0.9 && (a.type = "spring"),
                (t.render = c.extend(a, t.render)),
                t
              );
            }),
            (i.preSolveAll = function (e) {
              for (var t = 0; t < e.length; t += 1) {
                var n = e[t],
                  i = n.constraintImpulse;
                n.isStatic ||
                  (0 === i.x && 0 === i.y && 0 === i.angle) ||
                  ((n.position.x += i.x),
                  (n.position.y += i.y),
                  (n.angle += i.angle));
              }
            }),
            (i.solveAll = function (e, t) {
              for (
                var n = c.clamp(t / c._baseDelta, 0, 1), o = 0;
                o < e.length;
                o += 1
              ) {
                var r = e[o],
                  a = !r.bodyA || (r.bodyA && r.bodyA.isStatic),
                  s = !r.bodyB || (r.bodyB && r.bodyB.isStatic);
                (a || s) && i.solve(e[o], n);
              }
              for (o = 0; o < e.length; o += 1)
                (a = !(r = e[o]).bodyA || (r.bodyA && r.bodyA.isStatic)),
                  (s = !r.bodyB || (r.bodyB && r.bodyB.isStatic)),
                  a || s || i.solve(e[o], n);
            }),
            (i.solve = function (e, t) {
              var n = e.bodyA,
                o = e.bodyB,
                a = e.pointA,
                s = e.pointB;
              if (n || o) {
                n &&
                  !n.isStatic &&
                  (r.rotate(a, n.angle - e.angleA, a), (e.angleA = n.angle)),
                  o &&
                    !o.isStatic &&
                    (r.rotate(s, o.angle - e.angleB, s), (e.angleB = o.angle));
                var l = a,
                  c = s;
                if (
                  (n && (l = r.add(n.position, a)),
                  o && (c = r.add(o.position, s)),
                  l && c)
                ) {
                  var u = r.sub(l, c),
                    d = r.magnitude(u);
                  d < i._minLength && (d = i._minLength);
                  var p,
                    f,
                    v,
                    y,
                    m,
                    g = (d - e.length) / d,
                    x =
                      e.stiffness >= 1 || 0 === e.length
                        ? e.stiffness * t
                        : e.stiffness * t * t,
                    h = e.damping * t,
                    b = r.mult(u, g * x),
                    S = (n ? n.inverseMass : 0) + (o ? o.inverseMass : 0),
                    w =
                      S +
                      ((n ? n.inverseInertia : 0) + (o ? o.inverseInertia : 0));
                  if (h > 0) {
                    var A = r.create();
                    (v = r.div(u, d)),
                      (m = r.sub(
                        (o && r.sub(o.position, o.positionPrev)) || A,
                        (n && r.sub(n.position, n.positionPrev)) || A
                      )),
                      (y = r.dot(v, m));
                  }
                  n &&
                    !n.isStatic &&
                    ((f = n.inverseMass / S),
                    (n.constraintImpulse.x -= b.x * f),
                    (n.constraintImpulse.y -= b.y * f),
                    (n.position.x -= b.x * f),
                    (n.position.y -= b.y * f),
                    h > 0 &&
                      ((n.positionPrev.x -= h * v.x * y * f),
                      (n.positionPrev.y -= h * v.y * y * f)),
                    (p =
                      (r.cross(a, b) / w) *
                      i._torqueDampen *
                      n.inverseInertia *
                      (1 - e.angularStiffness)),
                    (n.constraintImpulse.angle -= p),
                    (n.angle -= p)),
                    o &&
                      !o.isStatic &&
                      ((f = o.inverseMass / S),
                      (o.constraintImpulse.x += b.x * f),
                      (o.constraintImpulse.y += b.y * f),
                      (o.position.x += b.x * f),
                      (o.position.y += b.y * f),
                      h > 0 &&
                        ((o.positionPrev.x += h * v.x * y * f),
                        (o.positionPrev.y += h * v.y * y * f)),
                      (p =
                        (r.cross(s, b) / w) *
                        i._torqueDampen *
                        o.inverseInertia *
                        (1 - e.angularStiffness)),
                      (o.constraintImpulse.angle += p),
                      (o.angle += p));
                }
              }
            }),
            (i.postSolveAll = function (e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t],
                  c = n.constraintImpulse;
                if (!n.isStatic && (0 !== c.x || 0 !== c.y || 0 !== c.angle)) {
                  a.set(n, !1);
                  for (var u = 0; u < n.parts.length; u++) {
                    var d = n.parts[u];
                    o.translate(d.vertices, c),
                      u > 0 && ((d.position.x += c.x), (d.position.y += c.y)),
                      0 !== c.angle &&
                        (o.rotate(d.vertices, c.angle, n.position),
                        l.rotate(d.axes, c.angle),
                        u > 0 &&
                          r.rotateAbout(
                            d.position,
                            c.angle,
                            n.position,
                            d.position
                          )),
                      s.update(d.bounds, d.vertices, n.velocity);
                  }
                  (c.angle *= i._warming),
                    (c.x *= i._warming),
                    (c.y *= i._warming);
                }
              }
            }),
            (i.pointAWorld = function (e) {
              return {
                x:
                  (e.bodyA ? e.bodyA.position.x : 0) +
                  (e.pointA ? e.pointA.x : 0),
                y:
                  (e.bodyA ? e.bodyA.position.y : 0) +
                  (e.pointA ? e.pointA.y : 0),
              };
            }),
            (i.pointBWorld = function (e) {
              return {
                x:
                  (e.bodyB ? e.bodyB.position.x : 0) +
                  (e.pointB ? e.pointB.x : 0),
                y:
                  (e.bodyB ? e.bodyB.position.y : 0) +
                  (e.pointB ? e.pointB.y : 0),
              };
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(2),
            r = n(0);
          (i.fromVertices = function (e) {
            for (var t = {}, n = 0; n < e.length; n++) {
              var i = (n + 1) % e.length,
                a = o.normalise({ x: e[i].y - e[n].y, y: e[n].x - e[i].x }),
                s = 0 === a.y ? 1 / 0 : a.x / a.y;
              t[(s = s.toFixed(3).toString())] = a;
            }
            return r.values(t);
          }),
            (i.rotate = function (e, t) {
              if (0 !== t)
                for (
                  var n = Math.cos(t), i = Math.sin(t), o = 0;
                  o < e.length;
                  o++
                ) {
                  var r,
                    a = e[o];
                  (r = a.x * n - a.y * i), (a.y = a.x * i + a.y * n), (a.x = r);
                }
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(3),
            r = n(0),
            a = n(4),
            s = n(1),
            l = n(2);
          (i.rectangle = function (e, t, n, i, s) {
            s = s || {};
            var l = {
              label: "Rectangle Body",
              position: { x: e, y: t },
              vertices: o.fromPath(
                "L 0 0 L " + n + " 0 L " + n + " " + i + " L 0 " + i
              ),
            };
            if (s.chamfer) {
              var c = s.chamfer;
              (l.vertices = o.chamfer(
                l.vertices,
                c.radius,
                c.quality,
                c.qualityMin,
                c.qualityMax
              )),
                delete s.chamfer;
            }
            return a.create(r.extend({}, l, s));
          }),
            (i.trapezoid = function (e, t, n, i, s, l) {
              l = l || {};
              var c,
                u = (1 - 2 * (s *= 0.5)) * n,
                d = n * s,
                p = d + u,
                f = p + d;
              c =
                s < 0.5
                  ? "L 0 0 L " +
                    d +
                    " " +
                    -i +
                    " L " +
                    p +
                    " " +
                    -i +
                    " L " +
                    f +
                    " 0"
                  : "L 0 0 L " + p + " " + -i + " L " + f + " 0";
              var v = {
                label: "Trapezoid Body",
                position: { x: e, y: t },
                vertices: o.fromPath(c),
              };
              if (l.chamfer) {
                var y = l.chamfer;
                (v.vertices = o.chamfer(
                  v.vertices,
                  y.radius,
                  y.quality,
                  y.qualityMin,
                  y.qualityMax
                )),
                  delete l.chamfer;
              }
              return a.create(r.extend({}, v, l));
            }),
            (i.circle = function (e, t, n, o, a) {
              o = o || {};
              var s = Math.ceil(Math.max(10, Math.min((a = a || 25), n)));
              return (
                s % 2 == 1 && (s += 1),
                i.polygon(
                  e,
                  t,
                  s,
                  n,
                  r.extend({}, { label: "Circle Body", circleRadius: n }, o)
                )
              );
            }),
            (i.polygon = function (e, t, n, s, l) {
              if (((l = l || {}), n < 3)) return i.circle(e, t, s, l);
              for (
                var c = (2 * Math.PI) / n, u = "", d = 0.5 * c, p = 0;
                p < n;
                p += 1
              ) {
                var f = d + p * c,
                  v = Math.cos(f) * s,
                  y = Math.sin(f) * s;
                u += "L " + v.toFixed(3) + " " + y.toFixed(3) + " ";
              }
              var m = {
                label: "Polygon Body",
                position: { x: e, y: t },
                vertices: o.fromPath(u),
              };
              if (l.chamfer) {
                var g = l.chamfer;
                (m.vertices = o.chamfer(
                  m.vertices,
                  g.radius,
                  g.quality,
                  g.qualityMin,
                  g.qualityMax
                )),
                  delete l.chamfer;
              }
              return a.create(r.extend({}, m, l));
            }),
            (i.fromVertices = function (e, t, n, i, c, u, d, p) {
              var f,
                v,
                y,
                m,
                g,
                x,
                h,
                b,
                S,
                w,
                A = r.getDecomp();
              for (
                f = Boolean(A && A.quickDecomp),
                  i = i || {},
                  y = [],
                  c = void 0 !== c && c,
                  u = void 0 !== u ? u : 0.01,
                  d = void 0 !== d ? d : 10,
                  p = void 0 !== p ? p : 0.01,
                  r.isArray(n[0]) || (n = [n]),
                  S = 0;
                S < n.length;
                S += 1
              )
                if (
                  ((g = n[S]),
                  (m = o.isConvex(g)) ||
                    f ||
                    r.warnOnce(
                      "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                    ),
                  m || !f)
                )
                  (g = m ? o.clockwiseSort(g) : o.hull(g)),
                    y.push({ position: { x: e, y: t }, vertices: g });
                else {
                  var P = g.map(function (e) {
                    return [e.x, e.y];
                  });
                  A.makeCCW(P),
                    !1 !== u && A.removeCollinearPoints(P, u),
                    !1 !== p &&
                      A.removeDuplicatePoints &&
                      A.removeDuplicatePoints(P, p);
                  var C = A.quickDecomp(P);
                  for (x = 0; x < C.length; x++) {
                    var B = C[x].map(function (e) {
                      return { x: e[0], y: e[1] };
                    });
                    (d > 0 && o.area(B) < d) ||
                      y.push({ position: o.centre(B), vertices: B });
                  }
                }
              for (x = 0; x < y.length; x++) y[x] = a.create(r.extend(y[x], i));
              if (c)
                for (x = 0; x < y.length; x++) {
                  var M = y[x];
                  for (h = x + 1; h < y.length; h++) {
                    var _ = y[h];
                    if (s.overlaps(M.bounds, _.bounds)) {
                      var k = M.vertices,
                        I = _.vertices;
                      for (b = 0; b < M.vertices.length; b++)
                        for (w = 0; w < _.vertices.length; w++) {
                          var T = l.magnitudeSquared(
                              l.sub(k[(b + 1) % k.length], I[w])
                            ),
                            R = l.magnitudeSquared(
                              l.sub(k[b], I[(w + 1) % I.length])
                            );
                          T < 5 &&
                            R < 5 &&
                            ((k[b].isInternal = !0), (I[w].isInternal = !0));
                        }
                    }
                  }
                }
              return y.length > 1
                ? ((v = a.create(r.extend({ parts: y.slice(0) }, i))),
                  a.setPosition(v, { x: e, y: t }),
                  v)
                : y[0];
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(0),
            r = n(8);
          (i.create = function (e) {
            return o.extend({ bodies: [], pairs: null }, e);
          }),
            (i.setBodies = function (e, t) {
              e.bodies = t.slice(0);
            }),
            (i.clear = function (e) {
              e.bodies = [];
            }),
            (i.collisions = function (e) {
              var t,
                n,
                o = [],
                a = e.pairs,
                s = e.bodies,
                l = s.length,
                c = i.canCollide,
                u = r.collides;
              for (s.sort(i._compareBoundsX), t = 0; t < l; t++) {
                var d = s[t],
                  p = d.bounds,
                  f = d.bounds.max.x,
                  v = d.bounds.max.y,
                  y = d.bounds.min.y,
                  m = d.isStatic || d.isSleeping,
                  g = d.parts.length,
                  x = 1 === g;
                for (n = t + 1; n < l; n++) {
                  var h = s[n],
                    b = h.bounds;
                  if (b.min.x > f) break;
                  if (
                    !(v < b.min.y) &&
                    !(y > b.max.y) &&
                    (!m || (!h.isStatic && !h.isSleeping)) &&
                    c(d.collisionFilter, h.collisionFilter)
                  ) {
                    var S = h.parts.length;
                    if (x && 1 === S) {
                      var w = u(d, h, a);
                      w && o.push(w);
                    } else
                      for (
                        var A = g > 1 ? 1 : 0, P = S > 1 ? 1 : 0, C = A;
                        C < g;
                        C++
                      )
                        for (
                          var B = d.parts[C], p = B.bounds, M = P;
                          M < S;
                          M++
                        ) {
                          var _ = h.parts[M],
                            b = _.bounds;
                          if (
                            !(p.min.x > b.max.x) &&
                            !(p.max.x < b.min.x) &&
                            !(p.max.y < b.min.y) &&
                            !(p.min.y > b.max.y)
                          ) {
                            var w = u(B, _, a);
                            w && o.push(w);
                          }
                        }
                  }
                }
              }
              return o;
            }),
            (i.canCollide = function (e, t) {
              return e.group === t.group && 0 !== e.group
                ? e.group > 0
                : (e.mask & t.category) != 0 && (t.mask & e.category) != 0;
            }),
            (i._compareBoundsX = function (e, t) {
              return e.bounds.min.x - t.bounds.min.x;
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(0);
          (i.create = function (e) {
            var t = {};
            return (
              e ||
                o.log(
                  "Mouse.create: element was undefined, defaulting to document.body",
                  "warn"
                ),
              (t.element = e || document.body),
              (t.absolute = { x: 0, y: 0 }),
              (t.position = { x: 0, y: 0 }),
              (t.mousedownPosition = { x: 0, y: 0 }),
              (t.mouseupPosition = { x: 0, y: 0 }),
              (t.offset = { x: 0, y: 0 }),
              (t.scale = { x: 1, y: 1 }),
              (t.wheelDelta = 0),
              (t.button = -1),
              (t.pixelRatio =
                parseInt(t.element.getAttribute("data-pixel-ratio"), 10) || 1),
              (t.sourceEvents = {
                mousemove: null,
                mousedown: null,
                mouseup: null,
                mousewheel: null,
              }),
              (t.mousemove = function (e) {
                var n = i._getRelativeMousePosition(e, t.element, t.pixelRatio);
                e.changedTouches && ((t.button = 0), e.preventDefault()),
                  (t.absolute.x = n.x),
                  (t.absolute.y = n.y),
                  (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                  (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
                  (t.sourceEvents.mousemove = e);
              }),
              (t.mousedown = function (e) {
                var n = i._getRelativeMousePosition(e, t.element, t.pixelRatio);
                e.changedTouches
                  ? ((t.button = 0), e.preventDefault())
                  : (t.button = e.button),
                  (t.absolute.x = n.x),
                  (t.absolute.y = n.y),
                  (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                  (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
                  (t.mousedownPosition.x = t.position.x),
                  (t.mousedownPosition.y = t.position.y),
                  (t.sourceEvents.mousedown = e);
              }),
              (t.mouseup = function (e) {
                var n = i._getRelativeMousePosition(e, t.element, t.pixelRatio);
                e.changedTouches && e.preventDefault(),
                  (t.button = -1),
                  (t.absolute.x = n.x),
                  (t.absolute.y = n.y),
                  (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                  (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
                  (t.mouseupPosition.x = t.position.x),
                  (t.mouseupPosition.y = t.position.y),
                  (t.sourceEvents.mouseup = e);
              }),
              (t.mousewheel = function (e) {
                (t.wheelDelta = Math.max(
                  -1,
                  Math.min(1, e.wheelDelta || -e.detail)
                )),
                  e.preventDefault();
              }),
              i.setElement(t, t.element),
              t
            );
          }),
            (i.setElement = function (e, t) {
              (e.element = t),
                t.addEventListener("mousemove", e.mousemove),
                t.addEventListener("mousedown", e.mousedown),
                t.addEventListener("mouseup", e.mouseup),
                t.addEventListener("mousewheel", e.mousewheel),
                t.addEventListener("DOMMouseScroll", e.mousewheel),
                t.addEventListener("touchmove", e.mousemove),
                t.addEventListener("touchstart", e.mousedown),
                t.addEventListener("touchend", e.mouseup);
            }),
            (i.clearSourceEvents = function (e) {
              (e.sourceEvents.mousemove = null),
                (e.sourceEvents.mousedown = null),
                (e.sourceEvents.mouseup = null),
                (e.sourceEvents.mousewheel = null),
                (e.wheelDelta = 0);
            }),
            (i.setOffset = function (e, t) {
              (e.offset.x = t.x),
                (e.offset.y = t.y),
                (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
                (e.position.y = e.absolute.y * e.scale.y + e.offset.y);
            }),
            (i.setScale = function (e, t) {
              (e.scale.x = t.x),
                (e.scale.y = t.y),
                (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
                (e.position.y = e.absolute.y * e.scale.y + e.offset.y);
            }),
            (i._getRelativeMousePosition = function (e, t, n) {
              var i,
                o,
                r = t.getBoundingClientRect(),
                a =
                  document.documentElement ||
                  document.body.parentNode ||
                  document.body,
                s =
                  void 0 !== window.pageXOffset
                    ? window.pageXOffset
                    : a.scrollLeft,
                l =
                  void 0 !== window.pageYOffset
                    ? window.pageYOffset
                    : a.scrollTop,
                c = e.changedTouches;
              return (
                c
                  ? ((i = c[0].pageX - r.left - s),
                    (o = c[0].pageY - r.top - l))
                  : ((i = e.pageX - r.left - s), (o = e.pageY - r.top - l)),
                {
                  x: i / ((t.clientWidth / (t.width || t.clientWidth)) * n),
                  y: o / ((t.clientHeight / (t.height || t.clientHeight)) * n),
                }
              );
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(0);
          (i._registry = {}),
            (i.register = function (e) {
              if (
                (i.isPlugin(e) ||
                  o.warn(
                    "Plugin.register:",
                    i.toString(e),
                    "does not implement all required fields."
                  ),
                e.name in i._registry)
              ) {
                var t = i._registry[e.name],
                  n = i.versionParse(e.version).number,
                  r = i.versionParse(t.version).number;
                n > r
                  ? (o.warn(
                      "Plugin.register:",
                      i.toString(t),
                      "was upgraded to",
                      i.toString(e)
                    ),
                    (i._registry[e.name] = e))
                  : n < r
                  ? o.warn(
                      "Plugin.register:",
                      i.toString(t),
                      "can not be downgraded to",
                      i.toString(e)
                    )
                  : e !== t &&
                    o.warn(
                      "Plugin.register:",
                      i.toString(e),
                      "is already registered to different plugin object"
                    );
              } else i._registry[e.name] = e;
              return e;
            }),
            (i.resolve = function (e) {
              return i._registry[i.dependencyParse(e).name];
            }),
            (i.toString = function (e) {
              return "string" == typeof e
                ? e
                : (e.name || "anonymous") +
                    "@" +
                    (e.version || e.range || "0.0.0");
            }),
            (i.isPlugin = function (e) {
              return e && e.name && e.version && e.install;
            }),
            (i.isUsed = function (e, t) {
              return e.used.indexOf(t) > -1;
            }),
            (i.isFor = function (e, t) {
              var n = e.for && i.dependencyParse(e.for);
              return (
                !e.for ||
                (t.name === n.name && i.versionSatisfies(t.version, n.range))
              );
            }),
            (i.use = function (e, t) {
              if (
                ((e.uses = (e.uses || []).concat(t || [])), 0 === e.uses.length)
              ) {
                o.warn(
                  "Plugin.use:",
                  i.toString(e),
                  "does not specify any dependencies to install."
                );
                return;
              }
              for (
                var n = i.dependencies(e),
                  r = o.topologicalSort(n),
                  a = [],
                  s = 0;
                s < r.length;
                s += 1
              )
                if (r[s] !== e.name) {
                  var l = i.resolve(r[s]);
                  if (!l) {
                    a.push("❌ " + r[s]);
                    continue;
                  }
                  i.isUsed(e, l.name) ||
                    (i.isFor(l, e) ||
                      (o.warn(
                        "Plugin.use:",
                        i.toString(l),
                        "is for",
                        l.for,
                        "but installed on",
                        i.toString(e) + "."
                      ),
                      (l._warned = !0)),
                    l.install
                      ? l.install(e)
                      : (o.warn(
                          "Plugin.use:",
                          i.toString(l),
                          "does not specify an install function."
                        ),
                        (l._warned = !0)),
                    l._warned
                      ? (a.push("\uD83D\uDD36 " + i.toString(l)),
                        delete l._warned)
                      : a.push("✅ " + i.toString(l)),
                    e.used.push(l.name));
                }
              a.length > 0 && o.info(a.join("  "));
            }),
            (i.dependencies = function (e, t) {
              var n = i.dependencyParse(e),
                r = n.name;
              if (!(r in (t = t || {}))) {
                (e = i.resolve(e) || e),
                  (t[r] = o.map(e.uses || [], function (t) {
                    i.isPlugin(t) && i.register(t);
                    var r = i.dependencyParse(t),
                      a = i.resolve(t);
                    return (
                      a && !i.versionSatisfies(a.version, r.range)
                        ? (o.warn(
                            "Plugin.dependencies:",
                            i.toString(a),
                            "does not satisfy",
                            i.toString(r),
                            "used by",
                            i.toString(n) + "."
                          ),
                          (a._warned = !0),
                          (e._warned = !0))
                        : a ||
                          (o.warn(
                            "Plugin.dependencies:",
                            i.toString(t),
                            "used by",
                            i.toString(n),
                            "could not be resolved."
                          ),
                          (e._warned = !0)),
                      r.name
                    );
                  }));
                for (var a = 0; a < t[r].length; a += 1)
                  i.dependencies(t[r][a], t);
                return t;
              }
            }),
            (i.dependencyParse = function (e) {
              return o.isString(e)
                ? (/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(
                    e
                  ) ||
                    o.warn(
                      "Plugin.dependencyParse:",
                      e,
                      "is not a valid dependency string."
                    ),
                  { name: e.split("@")[0], range: e.split("@")[1] || "*" })
                : { name: e.name, range: e.range || e.version };
            }),
            (i.versionParse = function (e) {
              var t =
                /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
              t.test(e) ||
                o.warn(
                  "Plugin.versionParse:",
                  e,
                  "is not a valid version or range."
                );
              var n = t.exec(e),
                i = Number(n[4]),
                r = Number(n[5]),
                a = Number(n[6]);
              return {
                isRange: Boolean(n[1] || n[2]),
                version: n[3],
                range: e,
                operator: n[1] || n[2] || "",
                major: i,
                minor: r,
                patch: a,
                parts: [i, r, a],
                prerelease: n[7],
                number: 1e8 * i + 1e4 * r + a,
              };
            }),
            (i.versionSatisfies = function (e, t) {
              t = t || "*";
              var n = i.versionParse(t),
                o = i.versionParse(e);
              if (n.isRange) {
                if ("*" === n.operator || "*" === e) return !0;
                if (">" === n.operator) return o.number > n.number;
                if (">=" === n.operator) return o.number >= n.number;
                if ("~" === n.operator)
                  return (
                    o.major === n.major &&
                    o.minor === n.minor &&
                    o.patch >= n.patch
                  );
                if ("^" === n.operator)
                  return n.major > 0
                    ? o.major === n.major && o.number >= n.number
                    : n.minor > 0
                    ? o.minor === n.minor && o.patch >= n.patch
                    : o.patch === n.patch;
              }
              return e === t || "*" === e;
            });
        },
        function (e, t) {
          var n = {};
          (e.exports = n),
            (n.create = function (e) {
              return { vertex: e, normalImpulse: 0, tangentImpulse: 0 };
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(7),
            r = n(18),
            a = n(13),
            s = n(19),
            l = n(5),
            c = n(6),
            u = n(10),
            d = n(0),
            p = n(4);
          (i.create = function (e) {
            e = e || {};
            var t = d.extend(
              {
                positionIterations: 6,
                velocityIterations: 4,
                constraintIterations: 2,
                enableSleeping: !1,
                events: [],
                plugin: {},
                gravity: { x: 0, y: 1, scale: 0.001 },
                timing: {
                  timestamp: 0,
                  timeScale: 1,
                  lastDelta: 0,
                  lastElapsed: 0,
                },
              },
              e
            );
            return (
              (t.world = e.world || c.create({ label: "World" })),
              (t.pairs = e.pairs || s.create()),
              (t.detector = e.detector || a.create()),
              (t.grid = { buckets: [] }),
              (t.world.gravity = t.gravity),
              (t.broadphase = t.grid),
              (t.metrics = {}),
              t
            );
          }),
            (i.update = function (e, t) {
              var n,
                p = d.now(),
                f = e.world,
                v = e.detector,
                y = e.pairs,
                m = e.timing,
                g = m.timestamp;
              (t = (void 0 !== t ? t : d._baseDelta) * m.timeScale),
                (m.timestamp += t),
                (m.lastDelta = t);
              var x = { timestamp: m.timestamp, delta: t };
              l.trigger(e, "beforeUpdate", x);
              var h = c.allBodies(f),
                b = c.allConstraints(f);
              for (
                f.isModified &&
                  (a.setBodies(v, h), c.setModified(f, !1, !1, !0)),
                  e.enableSleeping && o.update(h, t),
                  i._bodiesApplyGravity(h, e.gravity),
                  t > 0 && i._bodiesUpdate(h, t),
                  u.preSolveAll(h),
                  n = 0;
                n < e.constraintIterations;
                n++
              )
                u.solveAll(b, t);
              u.postSolveAll(h), (v.pairs = e.pairs);
              var S = a.collisions(v);
              s.update(y, S, g),
                e.enableSleeping && o.afterCollisions(y.list),
                y.collisionStart.length > 0 &&
                  l.trigger(e, "collisionStart", { pairs: y.collisionStart });
              var w = d.clamp(20 / e.positionIterations, 0, 1);
              for (
                r.preSolvePosition(y.list), n = 0;
                n < e.positionIterations;
                n++
              )
                r.solvePosition(y.list, t, w);
              for (
                r.postSolvePosition(h), u.preSolveAll(h), n = 0;
                n < e.constraintIterations;
                n++
              )
                u.solveAll(b, t);
              for (
                u.postSolveAll(h), r.preSolveVelocity(y.list), n = 0;
                n < e.velocityIterations;
                n++
              )
                r.solveVelocity(y.list, t);
              return (
                i._bodiesUpdateVelocities(h),
                y.collisionActive.length > 0 &&
                  l.trigger(e, "collisionActive", { pairs: y.collisionActive }),
                y.collisionEnd.length > 0 &&
                  l.trigger(e, "collisionEnd", { pairs: y.collisionEnd }),
                i._bodiesClearForces(h),
                l.trigger(e, "afterUpdate", x),
                (e.timing.lastElapsed = d.now() - p),
                e
              );
            }),
            (i.merge = function (e, t) {
              if ((d.extend(e, t), t.world)) {
                (e.world = t.world), i.clear(e);
                for (var n = c.allBodies(e.world), r = 0; r < n.length; r++) {
                  var a = n[r];
                  o.set(a, !1), (a.id = d.nextId());
                }
              }
            }),
            (i.clear = function (e) {
              s.clear(e.pairs), a.clear(e.detector);
            }),
            (i._bodiesClearForces = function (e) {
              for (var t = e.length, n = 0; n < t; n++) {
                var i = e[n];
                (i.force.x = 0), (i.force.y = 0), (i.torque = 0);
              }
            }),
            (i._bodiesApplyGravity = function (e, t) {
              var n = void 0 !== t.scale ? t.scale : 0.001,
                i = e.length;
              if ((0 !== t.x || 0 !== t.y) && 0 !== n)
                for (var o = 0; o < i; o++) {
                  var r = e[o];
                  r.isStatic ||
                    r.isSleeping ||
                    ((r.force.y += r.mass * t.y * n),
                    (r.force.x += r.mass * t.x * n));
                }
            }),
            (i._bodiesUpdate = function (e, t) {
              for (var n = e.length, i = 0; i < n; i++) {
                var o = e[i];
                o.isStatic || o.isSleeping || p.update(o, t);
              }
            }),
            (i._bodiesUpdateVelocities = function (e) {
              for (var t = e.length, n = 0; n < t; n++)
                p.updateVelocities(e[n]);
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(3),
            r = n(0),
            a = n(1);
          (i._restingThresh = 2),
            (i._restingThreshTangent = Math.sqrt(6)),
            (i._positionDampen = 0.9),
            (i._positionWarming = 0.8),
            (i._frictionNormalMultiplier = 5),
            (i._frictionMaxStatic = Number.MAX_VALUE),
            (i.preSolvePosition = function (e) {
              var t,
                n,
                i,
                o = e.length;
              for (t = 0; t < o; t++)
                (n = e[t]).isActive &&
                  ((i = n.activeContacts.length),
                  (n.collision.parentA.totalContacts += i),
                  (n.collision.parentB.totalContacts += i));
            }),
            (i.solvePosition = function (e, t, n) {
              var o,
                a,
                s,
                l,
                c,
                u,
                d,
                p,
                f = i._positionDampen * (n || 1),
                v = r.clamp(t / r._baseDelta, 0, 1),
                y = e.length;
              for (o = 0; o < y; o++)
                (a = e[o]).isActive &&
                  !a.isSensor &&
                  ((l = (s = a.collision).parentA),
                  (c = s.parentB),
                  (u = s.normal),
                  (a.separation =
                    u.x *
                      (c.positionImpulse.x +
                        s.penetration.x -
                        l.positionImpulse.x) +
                    u.y *
                      (c.positionImpulse.y +
                        s.penetration.y -
                        l.positionImpulse.y)));
              for (o = 0; o < y; o++)
                !(a = e[o]).isActive ||
                  a.isSensor ||
                  ((l = (s = a.collision).parentA),
                  (c = s.parentB),
                  (u = s.normal),
                  (p = a.separation - a.slop * v),
                  (l.isStatic || c.isStatic) && (p *= 2),
                  l.isStatic ||
                    l.isSleeping ||
                    ((d = f / l.totalContacts),
                    (l.positionImpulse.x += u.x * p * d),
                    (l.positionImpulse.y += u.y * p * d)),
                  c.isStatic ||
                    c.isSleeping ||
                    ((d = f / c.totalContacts),
                    (c.positionImpulse.x -= u.x * p * d),
                    (c.positionImpulse.y -= u.y * p * d)));
            }),
            (i.postSolvePosition = function (e) {
              for (
                var t = i._positionWarming,
                  n = e.length,
                  r = o.translate,
                  s = a.update,
                  l = 0;
                l < n;
                l++
              ) {
                var c = e[l],
                  u = c.positionImpulse,
                  d = u.x,
                  p = u.y,
                  f = c.velocity;
                if (((c.totalContacts = 0), 0 !== d || 0 !== p)) {
                  for (var v = 0; v < c.parts.length; v++) {
                    var y = c.parts[v];
                    r(y.vertices, u),
                      s(y.bounds, y.vertices, f),
                      (y.position.x += d),
                      (y.position.y += p);
                  }
                  (c.positionPrev.x += d),
                    (c.positionPrev.y += p),
                    d * f.x + p * f.y < 0
                      ? ((u.x = 0), (u.y = 0))
                      : ((u.x *= t), (u.y *= t));
                }
              }
            }),
            (i.preSolveVelocity = function (e) {
              var t,
                n,
                i = e.length;
              for (t = 0; t < i; t++) {
                var o = e[t];
                if (o.isActive && !o.isSensor) {
                  var r = o.activeContacts,
                    a = r.length,
                    s = o.collision,
                    l = s.parentA,
                    c = s.parentB,
                    u = s.normal,
                    d = s.tangent;
                  for (n = 0; n < a; n++) {
                    var p = r[n],
                      f = p.vertex,
                      v = p.normalImpulse,
                      y = p.tangentImpulse;
                    if (0 !== v || 0 !== y) {
                      var m = u.x * v + d.x * y,
                        g = u.y * v + d.y * y;
                      l.isStatic ||
                        l.isSleeping ||
                        ((l.positionPrev.x += m * l.inverseMass),
                        (l.positionPrev.y += g * l.inverseMass),
                        (l.anglePrev +=
                          l.inverseInertia *
                          ((f.x - l.position.x) * g -
                            (f.y - l.position.y) * m))),
                        c.isStatic ||
                          c.isSleeping ||
                          ((c.positionPrev.x -= m * c.inverseMass),
                          (c.positionPrev.y -= g * c.inverseMass),
                          (c.anglePrev -=
                            c.inverseInertia *
                            ((f.x - c.position.x) * g -
                              (f.y - c.position.y) * m)));
                    }
                  }
                }
              }
            }),
            (i.solveVelocity = function (e, t) {
              var n,
                o,
                a,
                s,
                l = t / r._baseDelta,
                c = l * l * l,
                u = -i._restingThresh * l,
                d = i._restingThreshTangent,
                p = i._frictionNormalMultiplier * l,
                f = i._frictionMaxStatic,
                v = e.length;
              for (a = 0; a < v; a++) {
                var y = e[a];
                if (y.isActive && !y.isSensor) {
                  var m = y.collision,
                    g = m.parentA,
                    x = m.parentB,
                    h = g.velocity,
                    b = x.velocity,
                    S = m.normal.x,
                    w = m.normal.y,
                    A = m.tangent.x,
                    P = m.tangent.y,
                    C = y.activeContacts,
                    B = C.length,
                    M = 1 / B,
                    _ = g.inverseMass + x.inverseMass,
                    k = y.friction * y.frictionStatic * p;
                  for (
                    s = 0,
                      h.x = g.position.x - g.positionPrev.x,
                      h.y = g.position.y - g.positionPrev.y,
                      b.x = x.position.x - x.positionPrev.x,
                      b.y = x.position.y - x.positionPrev.y,
                      g.angularVelocity = g.angle - g.anglePrev,
                      x.angularVelocity = x.angle - x.anglePrev;
                    s < B;
                    s++
                  ) {
                    var I = C[s],
                      T = I.vertex,
                      R = T.x - g.position.x,
                      V = T.y - g.position.y,
                      E = T.x - x.position.x,
                      L = T.y - x.position.y,
                      D = h.x - V * g.angularVelocity,
                      O = h.y + R * g.angularVelocity,
                      F = b.x - L * x.angularVelocity,
                      H = b.y + E * x.angularVelocity,
                      q = D - F,
                      j = O - H,
                      W = S * q + w * j,
                      G = A * q + P * j,
                      N = y.separation + W,
                      U = Math.min(N, 1),
                      z = (U = N < 0 ? 0 : U) * k;
                    G < -z || G > z
                      ? ((o = G > 0 ? G : -G),
                        (n = y.friction * (G > 0 ? 1 : -1) * c) < -o
                          ? (n = -o)
                          : n > o && (n = o))
                      : ((n = G), (o = f));
                    var X = R * w - V * S,
                      Q = E * w - L * S,
                      Y =
                        M /
                        (_ +
                          g.inverseInertia * X * X +
                          x.inverseInertia * Q * Q),
                      Z = (1 + y.restitution) * W * Y;
                    if (((n *= Y), W < u)) I.normalImpulse = 0;
                    else {
                      var $ = I.normalImpulse;
                      (I.normalImpulse += Z),
                        I.normalImpulse > 0 && (I.normalImpulse = 0),
                        (Z = I.normalImpulse - $);
                    }
                    if (G < -d || G > d) I.tangentImpulse = 0;
                    else {
                      var J = I.tangentImpulse;
                      (I.tangentImpulse += n),
                        I.tangentImpulse < -o && (I.tangentImpulse = -o),
                        I.tangentImpulse > o && (I.tangentImpulse = o),
                        (n = I.tangentImpulse - J);
                    }
                    var K = S * Z + A * n,
                      ee = w * Z + P * n;
                    g.isStatic ||
                      g.isSleeping ||
                      ((g.positionPrev.x += K * g.inverseMass),
                      (g.positionPrev.y += ee * g.inverseMass),
                      (g.anglePrev += (R * ee - V * K) * g.inverseInertia)),
                      x.isStatic ||
                        x.isSleeping ||
                        ((x.positionPrev.x -= K * x.inverseMass),
                        (x.positionPrev.y -= ee * x.inverseMass),
                        (x.anglePrev -= (E * ee - L * K) * x.inverseInertia));
                  }
                }
              }
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(9),
            r = n(0);
          (i.create = function (e) {
            return r.extend(
              {
                table: {},
                list: [],
                collisionStart: [],
                collisionActive: [],
                collisionEnd: [],
              },
              e
            );
          }),
            (i.update = function (e, t, n) {
              var i,
                r,
                a,
                s,
                l = e.list,
                c = l.length,
                u = e.table,
                d = t.length,
                p = e.collisionStart,
                f = e.collisionEnd,
                v = e.collisionActive;
              for (s = 0, p.length = 0, f.length = 0, v.length = 0; s < c; s++)
                l[s].confirmedActive = !1;
              for (s = 0; s < d; s++)
                (a = (i = t[s]).pair)
                  ? (a.isActive ? v.push(a) : p.push(a),
                    o.update(a, i, n),
                    (a.confirmedActive = !0))
                  : ((u[(a = o.create(i, n)).id] = a), p.push(a), l.push(a));
              var y = [];
              for (s = 0, c = l.length; s < c; s++)
                (a = l[s]).confirmedActive ||
                  (o.setActive(a, !1, n),
                  f.push(a),
                  a.collision.bodyA.isSleeping ||
                    a.collision.bodyB.isSleeping ||
                    y.push(s));
              for (s = 0; s < y.length; s++)
                (a = l[(r = y[s] - s)]), l.splice(r, 1), delete u[a.id];
            }),
            (i.clear = function (e) {
              return (
                (e.table = {}),
                (e.list.length = 0),
                (e.collisionStart.length = 0),
                (e.collisionActive.length = 0),
                (e.collisionEnd.length = 0),
                e
              );
            });
        },
        function (e, t, n) {
          var i = (e.exports = n(21));
          (i.Axes = n(11)),
            (i.Bodies = n(12)),
            (i.Body = n(4)),
            (i.Bounds = n(1)),
            (i.Collision = n(8)),
            (i.Common = n(0)),
            (i.Composite = n(6)),
            (i.Composites = n(22)),
            (i.Constraint = n(10)),
            (i.Contact = n(16)),
            (i.Detector = n(13)),
            (i.Engine = n(17)),
            (i.Events = n(5)),
            (i.Grid = n(23)),
            (i.Mouse = n(14)),
            (i.MouseConstraint = n(24)),
            (i.Pair = n(9)),
            (i.Pairs = n(19)),
            (i.Plugin = n(15)),
            (i.Query = n(25)),
            (i.Render = n(26)),
            (i.Resolver = n(18)),
            (i.Runner = n(27)),
            (i.SAT = n(28)),
            (i.Sleeping = n(7)),
            (i.Svg = n(29)),
            (i.Vector = n(2)),
            (i.Vertices = n(3)),
            (i.World = n(30)),
            (i.Engine.run = i.Runner.run),
            i.Common.deprecated(
              i.Engine,
              "run",
              "Engine.run ➤ use Matter.Runner.run(engine) instead"
            );
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(15),
            r = n(0);
          (i.name = "matter-js"),
            (i.version = "0.19.0"),
            (i.uses = []),
            (i.used = []),
            (i.use = function () {
              o.use(i, Array.prototype.slice.call(arguments));
            }),
            (i.before = function (e, t) {
              return (
                (e = e.replace(/^Matter./, "")), r.chainPathBefore(i, e, t)
              );
            }),
            (i.after = function (e, t) {
              return (e = e.replace(/^Matter./, "")), r.chainPathAfter(i, e, t);
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(6),
            r = n(10),
            a = n(0),
            s = n(4),
            l = n(12),
            c = a.deprecated;
          (i.stack = function (e, t, n, i, r, a, l) {
            for (
              var c,
                u = o.create({ label: "Stack" }),
                d = e,
                p = t,
                f = 0,
                v = 0;
              v < i;
              v++
            ) {
              for (var y = 0, m = 0; m < n; m++) {
                var g = l(d, p, m, v, c, f);
                if (g) {
                  var x = g.bounds.max.y - g.bounds.min.y,
                    h = g.bounds.max.x - g.bounds.min.x;
                  x > y && (y = x),
                    s.translate(g, { x: 0.5 * h, y: 0.5 * x }),
                    (d = g.bounds.max.x + r),
                    o.addBody(u, g),
                    (c = g),
                    (f += 1);
                } else d += r;
              }
              (p += y + a), (d = e);
            }
            return u;
          }),
            (i.chain = function (e, t, n, i, s, l) {
              for (var c = e.bodies, u = 1; u < c.length; u++) {
                var d = c[u - 1],
                  p = c[u],
                  f = d.bounds.max.y - d.bounds.min.y,
                  v = d.bounds.max.x - d.bounds.min.x,
                  y = p.bounds.max.y - p.bounds.min.y,
                  m = p.bounds.max.x - p.bounds.min.x,
                  g = {
                    bodyA: d,
                    pointA: { x: v * t, y: f * n },
                    bodyB: p,
                    pointB: { x: m * i, y: y * s },
                  },
                  x = a.extend(g, l);
                o.addConstraint(e, r.create(x));
              }
              return (e.label += " Chain"), e;
            }),
            (i.mesh = function (e, t, n, i, s) {
              var l,
                c,
                u,
                d,
                p,
                f = e.bodies;
              for (l = 0; l < n; l++) {
                for (c = 1; c < t; c++)
                  (u = f[c - 1 + l * t]),
                    (d = f[c + l * t]),
                    o.addConstraint(
                      e,
                      r.create(a.extend({ bodyA: u, bodyB: d }, s))
                    );
                if (l > 0)
                  for (c = 0; c < t; c++)
                    (u = f[c + (l - 1) * t]),
                      (d = f[c + l * t]),
                      o.addConstraint(
                        e,
                        r.create(a.extend({ bodyA: u, bodyB: d }, s))
                      ),
                      i &&
                        c > 0 &&
                        ((p = f[c - 1 + (l - 1) * t]),
                        o.addConstraint(
                          e,
                          r.create(a.extend({ bodyA: p, bodyB: d }, s))
                        )),
                      i &&
                        c < t - 1 &&
                        ((p = f[c + 1 + (l - 1) * t]),
                        o.addConstraint(
                          e,
                          r.create(a.extend({ bodyA: p, bodyB: d }, s))
                        ));
              }
              return (e.label += " Mesh"), e;
            }),
            (i.pyramid = function (e, t, n, o, r, a, l) {
              return i.stack(e, t, n, o, r, a, function (t, i, a, c, u, d) {
                var p = Math.min(o, Math.ceil(n / 2)),
                  f = u ? u.bounds.max.x - u.bounds.min.x : 0;
                if (!(c > p)) {
                  var v = (c = p - c),
                    y = n - 1 - c;
                  if (!(a < v) && !(a > y))
                    return (
                      1 === d &&
                        s.translate(u, {
                          x: (a + (n % 2 == 1 ? 1 : -1)) * f,
                          y: 0,
                        }),
                      l(e + (u ? a * f : 0) + a * r, i, a, c, u, d)
                    );
                }
              });
            }),
            (i.newtonsCradle = function (e, t, n, i, a) {
              for (
                var s = o.create({ label: "Newtons Cradle" }), c = 0;
                c < n;
                c++
              ) {
                var u = l.circle(e + c * (1.9 * i), t + a, i, {
                    inertia: 1 / 0,
                    restitution: 1,
                    friction: 0,
                    frictionAir: 1e-4,
                    slop: 1,
                  }),
                  d = r.create({
                    pointA: { x: e + c * (1.9 * i), y: t },
                    bodyB: u,
                  });
                o.addBody(s, u), o.addConstraint(s, d);
              }
              return s;
            }),
            c(
              i,
              "newtonsCradle",
              "Composites.newtonsCradle ➤ moved to newtonsCradle example"
            ),
            (i.car = function (e, t, n, i, a) {
              var c = s.nextGroup(!0),
                u = -(0.5 * n) + 20,
                d = 0.5 * n - 20,
                p = o.create({ label: "Car" }),
                f = l.rectangle(e, t, n, i, {
                  collisionFilter: { group: c },
                  chamfer: { radius: 0.5 * i },
                  density: 2e-4,
                }),
                v = l.circle(e + u, t + 0, a, {
                  collisionFilter: { group: c },
                  friction: 0.8,
                }),
                y = l.circle(e + d, t + 0, a, {
                  collisionFilter: { group: c },
                  friction: 0.8,
                }),
                m = r.create({
                  bodyB: f,
                  pointB: { x: u, y: 0 },
                  bodyA: v,
                  stiffness: 1,
                  length: 0,
                }),
                g = r.create({
                  bodyB: f,
                  pointB: { x: d, y: 0 },
                  bodyA: y,
                  stiffness: 1,
                  length: 0,
                });
              return (
                o.addBody(p, f),
                o.addBody(p, v),
                o.addBody(p, y),
                o.addConstraint(p, m),
                o.addConstraint(p, g),
                p
              );
            }),
            c(i, "car", "Composites.car ➤ moved to car example"),
            (i.softBody = function (e, t, n, o, r, s, c, u, d, p) {
              (d = a.extend({ inertia: 1 / 0 }, d)),
                (p = a.extend(
                  { stiffness: 0.2, render: { type: "line", anchors: !1 } },
                  p
                ));
              var f = i.stack(e, t, n, o, r, s, function (e, t) {
                return l.circle(e, t, u, d);
              });
              return i.mesh(f, n, o, c, p), (f.label = "Soft Body"), f;
            }),
            c(
              i,
              "softBody",
              "Composites.softBody ➤ moved to softBody and cloth examples"
            );
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(9),
            r = n(0),
            a = r.deprecated;
          (i.create = function (e) {
            return r.extend(
              {
                buckets: {},
                pairs: {},
                pairsList: [],
                bucketWidth: 48,
                bucketHeight: 48,
              },
              e
            );
          }),
            (i.update = function (e, t, n, o) {
              var r,
                a,
                s,
                l,
                c,
                u = n.world,
                d = e.buckets,
                p = !1;
              for (r = 0; r < t.length; r++) {
                var f = t[r];
                if (
                  (!f.isSleeping || o) &&
                  (!u.bounds ||
                    (!(f.bounds.max.x < u.bounds.min.x) &&
                      !(f.bounds.min.x > u.bounds.max.x) &&
                      !(f.bounds.max.y < u.bounds.min.y) &&
                      !(f.bounds.min.y > u.bounds.max.y)))
                ) {
                  var v = i._getRegion(e, f);
                  if (!f.region || v.id !== f.region.id || o) {
                    (!f.region || o) && (f.region = v);
                    var y = i._regionUnion(v, f.region);
                    for (a = y.startCol; a <= y.endCol; a++)
                      for (s = y.startRow; s <= y.endRow; s++) {
                        l = d[(c = i._getBucketId(a, s))];
                        var m =
                            a >= v.startCol &&
                            a <= v.endCol &&
                            s >= v.startRow &&
                            s <= v.endRow,
                          g =
                            a >= f.region.startCol &&
                            a <= f.region.endCol &&
                            s >= f.region.startRow &&
                            s <= f.region.endRow;
                        !m && g && g && l && i._bucketRemoveBody(e, l, f),
                          (f.region === v || (m && !g) || o) &&
                            (l || (l = i._createBucket(d, c)),
                            i._bucketAddBody(e, l, f));
                      }
                    (f.region = v), (p = !0);
                  }
                }
              }
              p && (e.pairsList = i._createActivePairsList(e));
            }),
            a(i, "update", "Grid.update ➤ replaced by Matter.Detector"),
            (i.clear = function (e) {
              (e.buckets = {}), (e.pairs = {}), (e.pairsList = []);
            }),
            a(i, "clear", "Grid.clear ➤ replaced by Matter.Detector"),
            (i._regionUnion = function (e, t) {
              var n = Math.min(e.startCol, t.startCol),
                o = Math.max(e.endCol, t.endCol),
                r = Math.min(e.startRow, t.startRow),
                a = Math.max(e.endRow, t.endRow);
              return i._createRegion(n, o, r, a);
            }),
            (i._getRegion = function (e, t) {
              var n = t.bounds,
                o = Math.floor(n.min.x / e.bucketWidth),
                r = Math.floor(n.max.x / e.bucketWidth),
                a = Math.floor(n.min.y / e.bucketHeight),
                s = Math.floor(n.max.y / e.bucketHeight);
              return i._createRegion(o, r, a, s);
            }),
            (i._createRegion = function (e, t, n, i) {
              return {
                id: e + "," + t + "," + n + "," + i,
                startCol: e,
                endCol: t,
                startRow: n,
                endRow: i,
              };
            }),
            (i._getBucketId = function (e, t) {
              return "C" + e + "R" + t;
            }),
            (i._createBucket = function (e, t) {
              return (e[t] = []);
            }),
            (i._bucketAddBody = function (e, t, n) {
              var i,
                r = e.pairs,
                a = o.id,
                s = t.length;
              for (i = 0; i < s; i++) {
                var l = t[i];
                if (n.id !== l.id && (!n.isStatic || !l.isStatic)) {
                  var c = a(n, l),
                    u = r[c];
                  u ? (u[2] += 1) : (r[c] = [n, l, 1]);
                }
              }
              t.push(n);
            }),
            (i._bucketRemoveBody = function (e, t, n) {
              var i,
                a = e.pairs,
                s = o.id;
              t.splice(r.indexOf(t, n), 1);
              var l = t.length;
              for (i = 0; i < l; i++) {
                var c = a[s(n, t[i])];
                c && (c[2] -= 1);
              }
            }),
            (i._createActivePairsList = function (e) {
              var t,
                n,
                i = e.pairs,
                o = r.keys(i),
                a = o.length,
                s = [];
              for (n = 0; n < a; n++)
                (t = i[o[n]])[2] > 0 ? s.push(t) : delete i[o[n]];
              return s;
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(3),
            r = n(7),
            a = n(14),
            s = n(5),
            l = n(13),
            c = n(10),
            u = n(6),
            d = n(0),
            p = n(1);
          (i.create = function (e, t) {
            var n = (e ? e.mouse : null) || (t ? t.mouse : null);
            n ||
              (e && e.render && e.render.canvas
                ? (n = a.create(e.render.canvas))
                : t && t.element
                ? (n = a.create(t.element))
                : ((n = a.create()),
                  d.warn(
                    "MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected"
                  )));
            var o = c.create({
                label: "Mouse Constraint",
                pointA: n.position,
                pointB: { x: 0, y: 0 },
                length: 0.01,
                stiffness: 0.1,
                angularStiffness: 1,
                render: { strokeStyle: "#90EE90", lineWidth: 3 },
              }),
              r = {
                type: "mouseConstraint",
                mouse: n,
                element: null,
                body: null,
                constraint: o,
                collisionFilter: { category: 1, mask: 4294967295, group: 0 },
              },
              l = d.extend(r, t);
            return (
              s.on(e, "beforeUpdate", function () {
                var t = u.allBodies(e.world);
                i.update(l, t), i._triggerEvents(l);
              }),
              l
            );
          }),
            (i.update = function (e, t) {
              var n = e.mouse,
                i = e.constraint,
                a = e.body;
              if (0 === n.button) {
                if (i.bodyB) r.set(i.bodyB, !1), (i.pointA = n.position);
                else
                  for (var c = 0; c < t.length; c++)
                    if (
                      ((a = t[c]),
                      p.contains(a.bounds, n.position) &&
                        l.canCollide(a.collisionFilter, e.collisionFilter))
                    )
                      for (
                        var u = a.parts.length > 1 ? 1 : 0;
                        u < a.parts.length;
                        u++
                      ) {
                        var d = a.parts[u];
                        if (o.contains(d.vertices, n.position)) {
                          (i.pointA = n.position),
                            (i.bodyB = e.body = a),
                            (i.pointB = {
                              x: n.position.x - a.position.x,
                              y: n.position.y - a.position.y,
                            }),
                            (i.angleB = a.angle),
                            r.set(a, !1),
                            s.trigger(e, "startdrag", { mouse: n, body: a });
                          break;
                        }
                      }
              } else
                (i.bodyB = e.body = null),
                  (i.pointB = null),
                  a && s.trigger(e, "enddrag", { mouse: n, body: a });
            }),
            (i._triggerEvents = function (e) {
              var t = e.mouse,
                n = t.sourceEvents;
              n.mousemove && s.trigger(e, "mousemove", { mouse: t }),
                n.mousedown && s.trigger(e, "mousedown", { mouse: t }),
                n.mouseup && s.trigger(e, "mouseup", { mouse: t }),
                a.clearSourceEvents(t);
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(2),
            r = n(8),
            a = n(1),
            s = n(12),
            l = n(3);
          (i.collides = function (e, t) {
            for (
              var n = [],
                i = t.length,
                o = e.bounds,
                s = r.collides,
                l = a.overlaps,
                c = 0;
              c < i;
              c++
            ) {
              var u = t[c],
                d = u.parts.length,
                p = 1 === d ? 0 : 1;
              if (l(u.bounds, o))
                for (var f = p; f < d; f++) {
                  var v = u.parts[f];
                  if (l(v.bounds, o)) {
                    var y = s(v, e);
                    if (y) {
                      n.push(y);
                      break;
                    }
                  }
                }
            }
            return n;
          }),
            (i.ray = function (e, t, n, r) {
              r = r || 1e-100;
              for (
                var a = o.angle(t, n),
                  l = o.magnitude(o.sub(t, n)),
                  c = (n.x + t.x) * 0.5,
                  u = (n.y + t.y) * 0.5,
                  d = s.rectangle(c, u, l, r, { angle: a }),
                  p = i.collides(d, e),
                  f = 0;
                f < p.length;
                f += 1
              ) {
                var v = p[f];
                v.body = v.bodyB = v.bodyA;
              }
              return p;
            }),
            (i.region = function (e, t, n) {
              for (var i = [], o = 0; o < e.length; o++) {
                var r = e[o],
                  s = a.overlaps(r.bounds, t);
                ((s && !n) || (!s && n)) && i.push(r);
              }
              return i;
            }),
            (i.point = function (e, t) {
              for (var n = [], i = 0; i < e.length; i++) {
                var o = e[i];
                if (a.contains(o.bounds, t))
                  for (
                    var r = 1 === o.parts.length ? 0 : 1;
                    r < o.parts.length;
                    r++
                  ) {
                    var s = o.parts[r];
                    if (a.contains(s.bounds, t) && l.contains(s.vertices, t)) {
                      n.push(o);
                      break;
                    }
                  }
              }
              return n;
            });
        },
        function (e, t, n) {
          var i,
            o,
            r,
            a,
            s,
            l,
            c,
            u,
            d = {};
          e.exports = d;
          var p = n(4),
            f = n(0),
            v = n(6),
            y = n(1),
            m = n(5),
            g = n(2),
            x = n(14);
          "undefined" != typeof window &&
            ((i =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function (e) {
                window.setTimeout(function () {
                  e(f.now());
                }, 1e3 / 60);
              }),
            (o =
              window.cancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.msCancelAnimationFrame)),
            (d._goodFps = 30),
            (d._goodDelta = 1e3 / 60),
            (d.create = function (e) {
              var t = {
                  engine: null,
                  element: null,
                  canvas: null,
                  mouse: null,
                  frameRequestId: null,
                  timing: {
                    historySize: 60,
                    delta: 0,
                    deltaHistory: [],
                    lastTime: 0,
                    lastTimestamp: 0,
                    lastElapsed: 0,
                    timestampElapsed: 0,
                    timestampElapsedHistory: [],
                    engineDeltaHistory: [],
                    engineElapsedHistory: [],
                    elapsedHistory: [],
                  },
                  options: {
                    width: 800,
                    height: 600,
                    pixelRatio: 1,
                    background: "#14151f",
                    wireframeBackground: "#14151f",
                    hasBounds: !!e.bounds,
                    enabled: !0,
                    wireframes: !0,
                    showSleeping: !0,
                    showDebug: !1,
                    showStats: !1,
                    showPerformance: !1,
                    showBounds: !1,
                    showVelocity: !1,
                    showCollisions: !1,
                    showSeparations: !1,
                    showAxes: !1,
                    showPositions: !1,
                    showAngleIndicator: !1,
                    showIds: !1,
                    showVertexNumbers: !1,
                    showConvexHulls: !1,
                    showInternalEdges: !1,
                    showMousePosition: !1,
                  },
                },
                n = f.extend(t, e);
              return (
                n.canvas &&
                  ((n.canvas.width = n.options.width || n.canvas.width),
                  (n.canvas.height = n.options.height || n.canvas.height)),
                (n.mouse = e.mouse),
                (n.engine = e.engine),
                (n.canvas = n.canvas || s(n.options.width, n.options.height)),
                (n.context = n.canvas.getContext("2d")),
                (n.textures = {}),
                (n.bounds = n.bounds || {
                  min: { x: 0, y: 0 },
                  max: { x: n.canvas.width, y: n.canvas.height },
                }),
                (n.controller = d),
                (n.options.showBroadphase = !1),
                1 !== n.options.pixelRatio &&
                  d.setPixelRatio(n, n.options.pixelRatio),
                f.isElement(n.element) && n.element.appendChild(n.canvas),
                n
              );
            }),
            (d.run = function (e) {
              !(function t(n) {
                (e.frameRequestId = i(t)),
                  r(e, n),
                  d.world(e, n),
                  (e.options.showStats || e.options.showDebug) &&
                    d.stats(e, e.context, n),
                  (e.options.showPerformance || e.options.showDebug) &&
                    d.performance(e, e.context, n);
              })();
            }),
            (d.stop = function (e) {
              o(e.frameRequestId);
            }),
            (d.setPixelRatio = function (e, t) {
              var n = e.options,
                i = e.canvas;
              "auto" === t && (t = l(i)),
                (n.pixelRatio = t),
                i.setAttribute("data-pixel-ratio", t),
                (i.width = n.width * t),
                (i.height = n.height * t),
                (i.style.width = n.width + "px"),
                (i.style.height = n.height + "px");
            }),
            (d.lookAt = function (e, t, n, i) {
              (i = void 0 === i || i),
                (t = f.isArray(t) ? t : [t]),
                (n = n || { x: 0, y: 0 });
              for (
                var o = {
                    min: { x: 1 / 0, y: 1 / 0 },
                    max: { x: -1 / 0, y: -1 / 0 },
                  },
                  r = 0;
                r < t.length;
                r += 1
              ) {
                var a = t[r],
                  s = a.bounds ? a.bounds.min : a.min || a.position || a,
                  l = a.bounds ? a.bounds.max : a.max || a.position || a;
                s &&
                  l &&
                  (s.x < o.min.x && (o.min.x = s.x),
                  l.x > o.max.x && (o.max.x = l.x),
                  s.y < o.min.y && (o.min.y = s.y),
                  l.y > o.max.y && (o.max.y = l.y));
              }
              var c = o.max.x - o.min.x + 2 * n.x,
                u = o.max.y - o.min.y + 2 * n.y,
                d = e.canvas.height,
                p = e.canvas.width / d,
                v = c / u,
                y = 1,
                m = 1;
              v > p ? (m = v / p) : (y = p / v),
                (e.options.hasBounds = !0),
                (e.bounds.min.x = o.min.x),
                (e.bounds.max.x = o.min.x + c * y),
                (e.bounds.min.y = o.min.y),
                (e.bounds.max.y = o.min.y + u * m),
                i &&
                  ((e.bounds.min.x += 0.5 * c - c * y * 0.5),
                  (e.bounds.max.x += 0.5 * c - c * y * 0.5),
                  (e.bounds.min.y += 0.5 * u - u * m * 0.5),
                  (e.bounds.max.y += 0.5 * u - u * m * 0.5)),
                (e.bounds.min.x -= n.x),
                (e.bounds.max.x -= n.x),
                (e.bounds.min.y -= n.y),
                (e.bounds.max.y -= n.y),
                e.mouse &&
                  (x.setScale(e.mouse, {
                    x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                    y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height,
                  }),
                  x.setOffset(e.mouse, e.bounds.min));
            }),
            (d.startViewTransform = function (e) {
              var t = e.bounds.max.x - e.bounds.min.x,
                n = e.bounds.max.y - e.bounds.min.y,
                i = t / e.options.width,
                o = n / e.options.height;
              e.context.setTransform(
                e.options.pixelRatio / i,
                0,
                0,
                e.options.pixelRatio / o,
                0,
                0
              ),
                e.context.translate(-e.bounds.min.x, -e.bounds.min.y);
            }),
            (d.endViewTransform = function (e) {
              e.context.setTransform(
                e.options.pixelRatio,
                0,
                0,
                e.options.pixelRatio,
                0,
                0
              );
            }),
            (d.world = function (e, t) {
              var n,
                i = f.now(),
                o = e.engine,
                r = o.world,
                a = e.canvas,
                s = e.context,
                l = e.options,
                c = e.timing,
                p = v.allBodies(r),
                h = v.allConstraints(r),
                b = l.wireframes ? l.wireframeBackground : l.background,
                S = [],
                w = [],
                A = { timestamp: o.timing.timestamp };
              if (
                (m.trigger(e, "beforeRender", A),
                e.currentBackground !== b && u(e, b),
                (s.globalCompositeOperation = "source-in"),
                (s.fillStyle = "transparent"),
                s.fillRect(0, 0, a.width, a.height),
                (s.globalCompositeOperation = "source-over"),
                l.hasBounds)
              ) {
                for (n = 0; n < p.length; n++) {
                  var P = p[n];
                  y.overlaps(P.bounds, e.bounds) && S.push(P);
                }
                for (n = 0; n < h.length; n++) {
                  var C = h[n],
                    B = C.bodyA,
                    M = C.bodyB,
                    _ = C.pointA,
                    k = C.pointB;
                  B && (_ = g.add(B.position, C.pointA)),
                    M && (k = g.add(M.position, C.pointB)),
                    _ &&
                      k &&
                      (y.contains(e.bounds, _) || y.contains(e.bounds, k)) &&
                      w.push(C);
                }
                d.startViewTransform(e),
                  e.mouse &&
                    (x.setScale(e.mouse, {
                      x: (e.bounds.max.x - e.bounds.min.x) / e.options.width,
                      y: (e.bounds.max.y - e.bounds.min.y) / e.options.height,
                    }),
                    x.setOffset(e.mouse, e.bounds.min));
              } else
                (w = h),
                  (S = p),
                  1 !== e.options.pixelRatio &&
                    e.context.setTransform(
                      e.options.pixelRatio,
                      0,
                      0,
                      e.options.pixelRatio,
                      0,
                      0
                    );
              !l.wireframes || (o.enableSleeping && l.showSleeping)
                ? d.bodies(e, S, s)
                : (l.showConvexHulls && d.bodyConvexHulls(e, S, s),
                  d.bodyWireframes(e, S, s)),
                l.showBounds && d.bodyBounds(e, S, s),
                (l.showAxes || l.showAngleIndicator) && d.bodyAxes(e, S, s),
                l.showPositions && d.bodyPositions(e, S, s),
                l.showVelocity && d.bodyVelocity(e, S, s),
                l.showIds && d.bodyIds(e, S, s),
                l.showSeparations && d.separations(e, o.pairs.list, s),
                l.showCollisions && d.collisions(e, o.pairs.list, s),
                l.showVertexNumbers && d.vertexNumbers(e, S, s),
                l.showMousePosition && d.mousePosition(e, e.mouse, s),
                d.constraints(w, s),
                l.hasBounds && d.endViewTransform(e),
                m.trigger(e, "afterRender", A),
                (c.lastElapsed = f.now() - i);
            }),
            (d.stats = function (e, t, n) {
              for (
                var i = e.engine,
                  o = i.world,
                  r = v.allBodies(o),
                  a = 0,
                  s = 0,
                  l = 0;
                l < r.length;
                l += 1
              )
                a += r[l].parts.length;
              var c = {
                Part: a,
                Body: r.length,
                Cons: v.allConstraints(o).length,
                Comp: v.allComposites(o).length,
                Pair: i.pairs.list.length,
              };
              for (var u in ((t.fillStyle = "#0e0f19"),
              t.fillRect(s, 0, 302.5, 44),
              (t.font = "12px Arial"),
              (t.textBaseline = "top"),
              (t.textAlign = "right"),
              c)) {
                var d = c[u];
                (t.fillStyle = "#aaa"),
                  t.fillText(u, s + 55, 8),
                  (t.fillStyle = "#eee"),
                  t.fillText(d, s + 55, 26),
                  (s += 55);
              }
            }),
            (d.performance = function (e, t) {
              var n = e.engine,
                i = e.timing,
                o = i.deltaHistory,
                r = i.elapsedHistory,
                s = i.timestampElapsedHistory,
                l = i.engineDeltaHistory,
                c = i.engineElapsedHistory,
                u = n.timing.lastDelta,
                p = a(o),
                f = a(r),
                v = a(l),
                y = a(c),
                m = a(s) / p || 0,
                g = 1e3 / p || 0;
              (t.fillStyle = "#0e0f19"),
                t.fillRect(0, 50, 370, 34),
                d.status(
                  t,
                  10,
                  69,
                  60,
                  4,
                  o.length,
                  Math.round(g) + " fps",
                  g / d._goodFps,
                  function (e) {
                    return o[e] / p - 1;
                  }
                ),
                d.status(
                  t,
                  82,
                  69,
                  60,
                  4,
                  l.length,
                  u.toFixed(2) + " dt",
                  d._goodDelta / u,
                  function (e) {
                    return l[e] / v - 1;
                  }
                ),
                d.status(
                  t,
                  154,
                  69,
                  60,
                  4,
                  c.length,
                  y.toFixed(2) + " ut",
                  1 - y / d._goodFps,
                  function (e) {
                    return c[e] / y - 1;
                  }
                ),
                d.status(
                  t,
                  226,
                  69,
                  60,
                  4,
                  r.length,
                  f.toFixed(2) + " rt",
                  1 - f / d._goodFps,
                  function (e) {
                    return r[e] / f - 1;
                  }
                ),
                d.status(
                  t,
                  298,
                  69,
                  60,
                  4,
                  s.length,
                  m.toFixed(2) + " x",
                  m * m * m,
                  function (e) {
                    return (s[e] / o[e] / m || 0) - 1;
                  }
                );
            }),
            (d.status = function (e, t, n, i, o, r, a, s, l) {
              (e.strokeStyle = "#888"),
                (e.fillStyle = "#444"),
                (e.lineWidth = 1),
                e.fillRect(t, n + 7, i, 1),
                e.beginPath(),
                e.moveTo(t, n + 7 - o * f.clamp(0.4 * l(0), -2, 2));
              for (var c = 0; c < i; c += 1)
                e.lineTo(
                  t + c,
                  n + 7 - (c < r ? o * f.clamp(0.4 * l(c), -2, 2) : 0)
                );
              e.stroke(),
                (e.fillStyle =
                  "hsl(" + f.clamp(25 + 95 * s, 0, 120) + ",100%,60%)"),
                e.fillRect(t, n - 7, 4, 4),
                (e.font = "12px Arial"),
                (e.textBaseline = "middle"),
                (e.textAlign = "right"),
                (e.fillStyle = "#eee"),
                e.fillText(a, t + i, n - 5);
            }),
            (d.constraints = function (e, t) {
              for (var n = t, i = 0; i < e.length; i++) {
                var o = e[i];
                if (o.render.visible && o.pointA && o.pointB) {
                  var r,
                    a,
                    s = o.bodyA,
                    l = o.bodyB;
                  if (
                    ((r = s ? g.add(s.position, o.pointA) : o.pointA),
                    "pin" === o.render.type)
                  )
                    n.beginPath(),
                      n.arc(r.x, r.y, 3, 0, 2 * Math.PI),
                      n.closePath();
                  else {
                    if (
                      ((a = l ? g.add(l.position, o.pointB) : o.pointB),
                      n.beginPath(),
                      n.moveTo(r.x, r.y),
                      "spring" === o.render.type)
                    )
                      for (
                        var c,
                          u = g.sub(a, r),
                          d = g.perp(g.normalise(u)),
                          p = Math.ceil(f.clamp(o.length / 5, 12, 20)),
                          v = 1;
                        v < p;
                        v += 1
                      )
                        (c = v % 2 == 0 ? 1 : -1),
                          n.lineTo(
                            r.x + u.x * (v / p) + d.x * c * 4,
                            r.y + u.y * (v / p) + d.y * c * 4
                          );
                    n.lineTo(a.x, a.y);
                  }
                  o.render.lineWidth &&
                    ((n.lineWidth = o.render.lineWidth),
                    (n.strokeStyle = o.render.strokeStyle),
                    n.stroke()),
                    o.render.anchors &&
                      ((n.fillStyle = o.render.strokeStyle),
                      n.beginPath(),
                      n.arc(r.x, r.y, 3, 0, 2 * Math.PI),
                      n.arc(a.x, a.y, 3, 0, 2 * Math.PI),
                      n.closePath(),
                      n.fill());
                }
              }
            }),
            (d.bodies = function (e, t, n) {
              var i,
                o,
                r,
                a,
                s = n,
                l = (e.engine, e.options),
                u = l.showInternalEdges || !l.wireframes;
              for (r = 0; r < t.length; r++)
                if ((i = t[r]).render.visible) {
                  for (a = i.parts.length > 1 ? 1 : 0; a < i.parts.length; a++)
                    if ((o = i.parts[a]).render.visible) {
                      if (
                        (l.showSleeping && i.isSleeping
                          ? (s.globalAlpha = 0.5 * o.render.opacity)
                          : 1 !== o.render.opacity &&
                            (s.globalAlpha = o.render.opacity),
                        o.render.sprite &&
                          o.render.sprite.texture &&
                          !l.wireframes)
                      ) {
                        var d = o.render.sprite,
                          p = c(e, d.texture);
                        s.translate(o.position.x, o.position.y),
                          s.rotate(o.angle),
                          s.drawImage(
                            p,
                            -(p.width * d.xOffset) * d.xScale,
                            -(p.height * d.yOffset) * d.yScale,
                            p.width * d.xScale,
                            p.height * d.yScale
                          ),
                          s.rotate(-o.angle),
                          s.translate(-o.position.x, -o.position.y);
                      } else {
                        if (o.circleRadius)
                          s.beginPath(),
                            s.arc(
                              o.position.x,
                              o.position.y,
                              o.circleRadius,
                              0,
                              2 * Math.PI
                            );
                        else {
                          s.beginPath(),
                            s.moveTo(o.vertices[0].x, o.vertices[0].y);
                          for (var f = 1; f < o.vertices.length; f++)
                            !o.vertices[f - 1].isInternal || u
                              ? s.lineTo(o.vertices[f].x, o.vertices[f].y)
                              : s.moveTo(o.vertices[f].x, o.vertices[f].y),
                              o.vertices[f].isInternal &&
                                !u &&
                                s.moveTo(
                                  o.vertices[(f + 1) % o.vertices.length].x,
                                  o.vertices[(f + 1) % o.vertices.length].y
                                );
                          s.lineTo(o.vertices[0].x, o.vertices[0].y),
                            s.closePath();
                        }
                        l.wireframes
                          ? ((s.lineWidth = 1),
                            (s.strokeStyle = "#bbb"),
                            s.stroke())
                          : ((s.fillStyle = o.render.fillStyle),
                            o.render.lineWidth &&
                              ((s.lineWidth = o.render.lineWidth),
                              (s.strokeStyle = o.render.strokeStyle),
                              s.stroke()),
                            s.fill());
                      }
                      s.globalAlpha = 1;
                    }
                }
            }),
            (d.bodyWireframes = function (e, t, n) {
              var i,
                o,
                r,
                a,
                s,
                l = n,
                c = e.options.showInternalEdges;
              for (l.beginPath(), r = 0; r < t.length; r++)
                if ((i = t[r]).render.visible)
                  for (
                    s = i.parts.length > 1 ? 1 : 0;
                    s < i.parts.length;
                    s++
                  ) {
                    for (
                      o = i.parts[s],
                        l.moveTo(o.vertices[0].x, o.vertices[0].y),
                        a = 1;
                      a < o.vertices.length;
                      a++
                    )
                      !o.vertices[a - 1].isInternal || c
                        ? l.lineTo(o.vertices[a].x, o.vertices[a].y)
                        : l.moveTo(o.vertices[a].x, o.vertices[a].y),
                        o.vertices[a].isInternal &&
                          !c &&
                          l.moveTo(
                            o.vertices[(a + 1) % o.vertices.length].x,
                            o.vertices[(a + 1) % o.vertices.length].y
                          );
                    l.lineTo(o.vertices[0].x, o.vertices[0].y);
                  }
              (l.lineWidth = 1), (l.strokeStyle = "#bbb"), l.stroke();
            }),
            (d.bodyConvexHulls = function (e, t, n) {
              var i,
                o,
                r,
                a = n;
              for (a.beginPath(), o = 0; o < t.length; o++)
                if ((i = t[o]).render.visible && 1 !== i.parts.length) {
                  for (
                    a.moveTo(i.vertices[0].x, i.vertices[0].y), r = 1;
                    r < i.vertices.length;
                    r++
                  )
                    a.lineTo(i.vertices[r].x, i.vertices[r].y);
                  a.lineTo(i.vertices[0].x, i.vertices[0].y);
                }
              (a.lineWidth = 1),
                (a.strokeStyle = "rgba(255,255,255,0.2)"),
                a.stroke();
            }),
            (d.vertexNumbers = function (e, t, n) {
              var i,
                o,
                r,
                a = n;
              for (i = 0; i < t.length; i++) {
                var s = t[i].parts;
                for (r = s.length > 1 ? 1 : 0; r < s.length; r++) {
                  var l = s[r];
                  for (o = 0; o < l.vertices.length; o++)
                    (a.fillStyle = "rgba(255,255,255,0.2)"),
                      a.fillText(
                        i + "_" + o,
                        l.position.x + (l.vertices[o].x - l.position.x) * 0.8,
                        l.position.y + (l.vertices[o].y - l.position.y) * 0.8
                      );
                }
              }
            }),
            (d.mousePosition = function (e, t, n) {
              var i = n;
              (i.fillStyle = "rgba(255,255,255,0.8)"),
                i.fillText(
                  t.position.x + "  " + t.position.y,
                  t.position.x + 5,
                  t.position.y - 5
                );
            }),
            (d.bodyBounds = function (e, t, n) {
              var i = n,
                o = (e.engine, e.options);
              i.beginPath();
              for (var r = 0; r < t.length; r++)
                if (t[r].render.visible)
                  for (
                    var a = t[r].parts, s = a.length > 1 ? 1 : 0;
                    s < a.length;
                    s++
                  ) {
                    var l = a[s];
                    i.rect(
                      l.bounds.min.x,
                      l.bounds.min.y,
                      l.bounds.max.x - l.bounds.min.x,
                      l.bounds.max.y - l.bounds.min.y
                    );
                  }
              o.wireframes
                ? (i.strokeStyle = "rgba(255,255,255,0.08)")
                : (i.strokeStyle = "rgba(0,0,0,0.1)"),
                (i.lineWidth = 1),
                i.stroke();
            }),
            (d.bodyAxes = function (e, t, n) {
              var i,
                o,
                r,
                a,
                s = n,
                l = (e.engine, e.options);
              for (s.beginPath(), o = 0; o < t.length; o++) {
                var c = t[o],
                  u = c.parts;
                if (c.render.visible) {
                  if (l.showAxes)
                    for (r = u.length > 1 ? 1 : 0; r < u.length; r++)
                      for (a = 0, i = u[r]; a < i.axes.length; a++) {
                        var d = i.axes[a];
                        s.moveTo(i.position.x, i.position.y),
                          s.lineTo(
                            i.position.x + 20 * d.x,
                            i.position.y + 20 * d.y
                          );
                      }
                  else
                    for (r = u.length > 1 ? 1 : 0; r < u.length; r++)
                      for (a = 0, i = u[r]; a < i.axes.length; a++)
                        s.moveTo(i.position.x, i.position.y),
                          s.lineTo(
                            (i.vertices[0].x +
                              i.vertices[i.vertices.length - 1].x) /
                              2,
                            (i.vertices[0].y +
                              i.vertices[i.vertices.length - 1].y) /
                              2
                          );
                }
              }
              l.wireframes
                ? ((s.strokeStyle = "indianred"), (s.lineWidth = 1))
                : ((s.strokeStyle = "rgba(255, 255, 255, 0.4)"),
                  (s.globalCompositeOperation = "overlay"),
                  (s.lineWidth = 2)),
                s.stroke(),
                (s.globalCompositeOperation = "source-over");
            }),
            (d.bodyPositions = function (e, t, n) {
              var i,
                o,
                r,
                a,
                s = n,
                l = (e.engine, e.options);
              for (s.beginPath(), r = 0; r < t.length; r++)
                if ((i = t[r]).render.visible)
                  for (a = 0; a < i.parts.length; a++)
                    (o = i.parts[a]),
                      s.arc(o.position.x, o.position.y, 3, 0, 2 * Math.PI, !1),
                      s.closePath();
              for (
                l.wireframes
                  ? (s.fillStyle = "indianred")
                  : (s.fillStyle = "rgba(0,0,0,0.5)"),
                  s.fill(),
                  s.beginPath(),
                  r = 0;
                r < t.length;
                r++
              )
                (i = t[r]).render.visible &&
                  (s.arc(
                    i.positionPrev.x,
                    i.positionPrev.y,
                    2,
                    0,
                    2 * Math.PI,
                    !1
                  ),
                  s.closePath());
              (s.fillStyle = "rgba(255,165,0,0.8)"), s.fill();
            }),
            (d.bodyVelocity = function (e, t, n) {
              var i = n;
              i.beginPath();
              for (var o = 0; o < t.length; o++) {
                var r = t[o];
                if (r.render.visible) {
                  var a = p.getVelocity(r);
                  i.moveTo(r.position.x, r.position.y),
                    i.lineTo(r.position.x + a.x, r.position.y + a.y);
                }
              }
              (i.lineWidth = 3), (i.strokeStyle = "cornflowerblue"), i.stroke();
            }),
            (d.bodyIds = function (e, t, n) {
              var i,
                o,
                r = n;
              for (i = 0; i < t.length; i++)
                if (t[i].render.visible) {
                  var a = t[i].parts;
                  for (o = a.length > 1 ? 1 : 0; o < a.length; o++) {
                    var s = a[o];
                    (r.font = "12px Arial"),
                      (r.fillStyle = "rgba(255,255,255,0.5)"),
                      r.fillText(s.id, s.position.x + 10, s.position.y - 10);
                  }
                }
            }),
            (d.collisions = function (e, t, n) {
              var i,
                o,
                r,
                a,
                s = n,
                l = e.options;
              for (s.beginPath(), r = 0; r < t.length; r++)
                if ((i = t[r]).isActive)
                  for (
                    a = 0, o = i.collision;
                    a < i.activeContacts.length;
                    a++
                  ) {
                    var c = i.activeContacts[a].vertex;
                    s.rect(c.x - 1.5, c.y - 1.5, 3.5, 3.5);
                  }
              for (
                l.wireframes
                  ? (s.fillStyle = "rgba(255,255,255,0.7)")
                  : (s.fillStyle = "orange"),
                  s.fill(),
                  s.beginPath(),
                  r = 0;
                r < t.length;
                r++
              )
                if (
                  (i = t[r]).isActive &&
                  ((o = i.collision), i.activeContacts.length > 0)
                ) {
                  var u = i.activeContacts[0].vertex.x,
                    d = i.activeContacts[0].vertex.y;
                  2 === i.activeContacts.length &&
                    ((u =
                      (i.activeContacts[0].vertex.x +
                        i.activeContacts[1].vertex.x) /
                      2),
                    (d =
                      (i.activeContacts[0].vertex.y +
                        i.activeContacts[1].vertex.y) /
                      2)),
                    o.bodyB === o.supports[0].body || !0 === o.bodyA.isStatic
                      ? s.moveTo(u - 8 * o.normal.x, d - 8 * o.normal.y)
                      : s.moveTo(u + 8 * o.normal.x, d + 8 * o.normal.y),
                    s.lineTo(u, d);
                }
              l.wireframes
                ? (s.strokeStyle = "rgba(255,165,0,0.7)")
                : (s.strokeStyle = "orange"),
                (s.lineWidth = 1),
                s.stroke();
            }),
            (d.separations = function (e, t, n) {
              var i,
                o,
                r,
                a,
                s,
                l = n,
                c = e.options;
              for (l.beginPath(), s = 0; s < t.length; s++)
                if ((i = t[s]).isActive) {
                  r = (o = i.collision).bodyA;
                  var u = 1;
                  (a = o.bodyB).isStatic || r.isStatic || (u = 0.5),
                    a.isStatic && (u = 0),
                    l.moveTo(a.position.x, a.position.y),
                    l.lineTo(
                      a.position.x - o.penetration.x * u,
                      a.position.y - o.penetration.y * u
                    ),
                    (u = 1),
                    a.isStatic || r.isStatic || (u = 0.5),
                    r.isStatic && (u = 0),
                    l.moveTo(r.position.x, r.position.y),
                    l.lineTo(
                      r.position.x + o.penetration.x * u,
                      r.position.y + o.penetration.y * u
                    );
                }
              c.wireframes
                ? (l.strokeStyle = "rgba(255,165,0,0.5)")
                : (l.strokeStyle = "orange"),
                l.stroke();
            }),
            (d.inspector = function (e, t) {
              e.engine;
              var n,
                i = e.selected,
                o = e.render,
                r = o.options;
              if (r.hasBounds) {
                var a = o.bounds.max.x - o.bounds.min.x,
                  s = o.bounds.max.y - o.bounds.min.y,
                  l = a / o.options.width,
                  c = s / o.options.height;
                t.scale(1 / l, 1 / c),
                  t.translate(-o.bounds.min.x, -o.bounds.min.y);
              }
              for (var u = 0; u < i.length; u++) {
                var d = i[u].data;
                switch (
                  (t.translate(0.5, 0.5),
                  (t.lineWidth = 1),
                  (t.strokeStyle = "rgba(255,165,0,0.9)"),
                  t.setLineDash([1, 2]),
                  d.type)
                ) {
                  case "body":
                    (n = d.bounds),
                      t.beginPath(),
                      t.rect(
                        Math.floor(n.min.x - 3),
                        Math.floor(n.min.y - 3),
                        Math.floor(n.max.x - n.min.x + 6),
                        Math.floor(n.max.y - n.min.y + 6)
                      ),
                      t.closePath(),
                      t.stroke();
                    break;
                  case "constraint":
                    var p = d.pointA;
                    d.bodyA && (p = d.pointB),
                      t.beginPath(),
                      t.arc(p.x, p.y, 10, 0, 2 * Math.PI),
                      t.closePath(),
                      t.stroke();
                }
                t.setLineDash([]), t.translate(-0.5, -0.5);
              }
              null !== e.selectStart &&
                (t.translate(0.5, 0.5),
                (t.lineWidth = 1),
                (t.strokeStyle = "rgba(255,165,0,0.6)"),
                (t.fillStyle = "rgba(255,165,0,0.1)"),
                (n = e.selectBounds),
                t.beginPath(),
                t.rect(
                  Math.floor(n.min.x),
                  Math.floor(n.min.y),
                  Math.floor(n.max.x - n.min.x),
                  Math.floor(n.max.y - n.min.y)
                ),
                t.closePath(),
                t.stroke(),
                t.fill(),
                t.translate(-0.5, -0.5)),
                r.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0);
            }),
            (r = function (e, t) {
              var n = e.engine,
                i = e.timing,
                o = i.historySize,
                r = n.timing.timestamp;
              (i.delta = t - i.lastTime || d._goodDelta),
                (i.lastTime = t),
                (i.timestampElapsed = r - i.lastTimestamp || 0),
                (i.lastTimestamp = r),
                i.deltaHistory.unshift(i.delta),
                (i.deltaHistory.length = Math.min(i.deltaHistory.length, o)),
                i.engineDeltaHistory.unshift(n.timing.lastDelta),
                (i.engineDeltaHistory.length = Math.min(
                  i.engineDeltaHistory.length,
                  o
                )),
                i.timestampElapsedHistory.unshift(i.timestampElapsed),
                (i.timestampElapsedHistory.length = Math.min(
                  i.timestampElapsedHistory.length,
                  o
                )),
                i.engineElapsedHistory.unshift(n.timing.lastElapsed),
                (i.engineElapsedHistory.length = Math.min(
                  i.engineElapsedHistory.length,
                  o
                )),
                i.elapsedHistory.unshift(i.lastElapsed),
                (i.elapsedHistory.length = Math.min(
                  i.elapsedHistory.length,
                  o
                ));
            }),
            (a = function (e) {
              for (var t = 0, n = 0; n < e.length; n += 1) t += e[n];
              return t / e.length || 0;
            }),
            (s = function (e, t) {
              var n = document.createElement("canvas");
              return (
                (n.width = e),
                (n.height = t),
                (n.oncontextmenu = function () {
                  return !1;
                }),
                (n.onselectstart = function () {
                  return !1;
                }),
                n
              );
            }),
            (l = function (e) {
              var t = e.getContext("2d");
              return (
                (window.devicePixelRatio || 1) /
                (t.webkitBackingStorePixelRatio ||
                  t.mozBackingStorePixelRatio ||
                  t.msBackingStorePixelRatio ||
                  t.oBackingStorePixelRatio ||
                  t.backingStorePixelRatio ||
                  1)
              );
            }),
            (c = function (e, t) {
              var n = e.textures[t];
              return n || ((n = e.textures[t] = new Image()).src = t), n;
            }),
            (u = function (e, t) {
              var n = t;
              /(jpg|gif|png)$/.test(t) && (n = "url(" + t + ")"),
                (e.canvas.style.background = n),
                (e.canvas.style.backgroundSize = "contain"),
                (e.currentBackground = t);
            });
        },
        function (e, t, n) {
          var i,
            o,
            r,
            a = {};
          e.exports = a;
          var s = n(5),
            l = n(17),
            c = n(0);
          "undefined" != typeof window &&
            ((i =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.msRequestAnimationFrame),
            (o =
              window.cancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.msCancelAnimationFrame)),
            i ||
              ((i = function (e) {
                r = setTimeout(function () {
                  e(c.now());
                }, 1e3 / 60);
              }),
              (o = function () {
                clearTimeout(r);
              })),
            (a.create = function (e) {
              var t = c.extend(
                {
                  fps: 60,
                  deltaSampleSize: 60,
                  counterTimestamp: 0,
                  frameCounter: 0,
                  deltaHistory: [],
                  timePrev: null,
                  frameRequestId: null,
                  isFixed: !1,
                  enabled: !0,
                },
                e
              );
              return (
                (t.delta = t.delta || 1e3 / t.fps),
                (t.deltaMin = t.deltaMin || 1e3 / t.fps),
                (t.deltaMax = t.deltaMax || 1e3 / (0.5 * t.fps)),
                (t.fps = 1e3 / t.delta),
                t
              );
            }),
            (a.run = function (e, t) {
              return (
                void 0 !== e.positionIterations && ((t = e), (e = a.create())),
                (function n(o) {
                  (e.frameRequestId = i(n)), o && e.enabled && a.tick(e, t, o);
                })(),
                e
              );
            }),
            (a.tick = function (e, t, n) {
              var i,
                o = t.timing;
              e.isFixed
                ? (i = e.delta)
                : ((i = n - e.timePrev || e.delta),
                  (e.timePrev = n),
                  e.deltaHistory.push(i),
                  (e.deltaHistory = e.deltaHistory.slice(-e.deltaSampleSize)),
                  (i =
                    (i =
                      (i = Math.min.apply(null, e.deltaHistory)) < e.deltaMin
                        ? e.deltaMin
                        : i) > e.deltaMax
                      ? e.deltaMax
                      : i),
                  (e.delta = i));
              var r = { timestamp: o.timestamp };
              s.trigger(e, "beforeTick", r),
                (e.frameCounter += 1),
                n - e.counterTimestamp >= 1e3 &&
                  ((e.fps = e.frameCounter * ((n - e.counterTimestamp) / 1e3)),
                  (e.counterTimestamp = n),
                  (e.frameCounter = 0)),
                s.trigger(e, "tick", r),
                s.trigger(e, "beforeUpdate", r),
                l.update(t, i),
                s.trigger(e, "afterUpdate", r),
                s.trigger(e, "afterTick", r);
            }),
            (a.stop = function (e) {
              o(e.frameRequestId);
            }),
            (a.start = function (e, t) {
              a.run(e, t);
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(8),
            r = n(0).deprecated;
          (i.collides = function (e, t) {
            return o.collides(e, t);
          }),
            r(i, "collides", "SAT.collides ➤ replaced by Collision.collides");
        },
        function (e, t, n) {
          var i = {};
          (e.exports = i), n(1);
          var o = n(0);
          (i.pathToVertices = function (e, t) {
            "undefined" == typeof window ||
              "SVGPathSeg" in window ||
              o.warn(
                "Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required."
              );
            var n,
              r,
              a,
              s,
              l,
              c,
              u,
              d,
              p,
              f,
              v,
              y = [],
              m = 0,
              g = 0,
              x = 0;
            t = t || 15;
            var h = function (e, t, n) {
                var i = n % 2 == 1 && n > 1;
                if (!p || e != p.x || t != p.y) {
                  p && i ? ((f = p.x), (v = p.y)) : ((f = 0), (v = 0));
                  var o = { x: f + e, y: v + t };
                  (i || !p) && (p = o), y.push(o), (g = f + e), (x = v + t);
                }
              },
              b = function (e) {
                var t = e.pathSegTypeAsLetter.toUpperCase();
                if ("Z" !== t) {
                  switch (t) {
                    case "M":
                    case "L":
                    case "T":
                    case "C":
                    case "S":
                    case "Q":
                      (g = e.x), (x = e.y);
                      break;
                    case "H":
                      g = e.x;
                      break;
                    case "V":
                      x = e.y;
                  }
                  h(g, x, e.pathSegType);
                }
              };
            for (
              i._svgPathToAbsolute(e), a = e.getTotalLength(), c = [], n = 0;
              n < e.pathSegList.numberOfItems;
              n += 1
            )
              c.push(e.pathSegList.getItem(n));
            for (u = c.concat(); m < a; ) {
              if ((l = c[e.getPathSegAtLength(m)]) != d) {
                for (; u.length && u[0] != l; ) b(u.shift());
                d = l;
              }
              switch (l.pathSegTypeAsLetter.toUpperCase()) {
                case "C":
                case "T":
                case "S":
                case "Q":
                case "A":
                  h((s = e.getPointAtLength(m)).x, s.y, 0);
              }
              m += t;
            }
            for (n = 0, r = u.length; n < r; ++n) b(u[n]);
            return y;
          }),
            (i._svgPathToAbsolute = function (e) {
              for (
                var t,
                  n,
                  i,
                  o,
                  r,
                  a,
                  s = e.pathSegList,
                  l = 0,
                  c = 0,
                  u = s.numberOfItems,
                  d = 0;
                d < u;
                ++d
              ) {
                var p = s.getItem(d),
                  f = p.pathSegTypeAsLetter;
                if (/[MLHVCSQTA]/.test(f))
                  "x" in p && (l = p.x), "y" in p && (c = p.y);
                else
                  switch (
                    ("x1" in p && (i = l + p.x1),
                    "x2" in p && (r = l + p.x2),
                    "y1" in p && (o = c + p.y1),
                    "y2" in p && (a = c + p.y2),
                    "x" in p && (l += p.x),
                    "y" in p && (c += p.y),
                    f)
                  ) {
                    case "m":
                      s.replaceItem(e.createSVGPathSegMovetoAbs(l, c), d);
                      break;
                    case "l":
                      s.replaceItem(e.createSVGPathSegLinetoAbs(l, c), d);
                      break;
                    case "h":
                      s.replaceItem(
                        e.createSVGPathSegLinetoHorizontalAbs(l),
                        d
                      );
                      break;
                    case "v":
                      s.replaceItem(e.createSVGPathSegLinetoVerticalAbs(c), d);
                      break;
                    case "c":
                      s.replaceItem(
                        e.createSVGPathSegCurvetoCubicAbs(l, c, i, o, r, a),
                        d
                      );
                      break;
                    case "s":
                      s.replaceItem(
                        e.createSVGPathSegCurvetoCubicSmoothAbs(l, c, r, a),
                        d
                      );
                      break;
                    case "q":
                      s.replaceItem(
                        e.createSVGPathSegCurvetoQuadraticAbs(l, c, i, o),
                        d
                      );
                      break;
                    case "t":
                      s.replaceItem(
                        e.createSVGPathSegCurvetoQuadraticSmoothAbs(l, c),
                        d
                      );
                      break;
                    case "a":
                      s.replaceItem(
                        e.createSVGPathSegArcAbs(
                          l,
                          c,
                          p.r1,
                          p.r2,
                          p.angle,
                          p.largeArcFlag,
                          p.sweepFlag
                        ),
                        d
                      );
                      break;
                    case "z":
                    case "Z":
                      (l = t), (c = n);
                  }
                ("M" == f || "m" == f) && ((t = l), (n = c));
              }
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(6);
          n(0),
            (i.create = o.create),
            (i.add = o.add),
            (i.remove = o.remove),
            (i.clear = o.clear),
            (i.addComposite = o.addComposite),
            (i.addBody = o.addBody),
            (i.addConstraint = o.addConstraint);
        },
      ]);
    },
  },
]);
