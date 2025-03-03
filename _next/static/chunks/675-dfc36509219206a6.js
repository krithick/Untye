(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [675],
  {
    9749: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = r(6495).Z,
        o = r(2648).Z,
        n = r(1598).Z,
        a = r(7273).Z,
        l = n(r(7294)),
        s = o(r(3121)),
        c = r(2675),
        d = r(139),
        u = r(8730);
      r(7238);
      var f = o(r(9824));
      let g = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
      function h(e) {
        return void 0 !== e.default;
      }
      function m(e) {
        return "number" == typeof e || void 0 === e
          ? e
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function p(e, t, r, o, n) {
        if (!e || e["data-loaded-src"] === t) return;
        e["data-loaded-src"] = t;
        let a = "decode" in e ? e.decode() : Promise.resolve();
        a.catch(() => {}).then(() => {
          if (e.parentNode) {
            if (null == r ? void 0 : r.current) {
              let t = new Event("load");
              Object.defineProperty(t, "target", { writable: !1, value: e });
              let n = !1,
                a = !1;
              r.current(
                i({}, t, {
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => a,
                  persist: () => {},
                  preventDefault: () => {
                    (n = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (a = !0), t.stopPropagation();
                  },
                })
              );
            }
            (null == o ? void 0 : o.current) && o.current(e);
          }
        });
      }
      let v = l.forwardRef((e, t) => {
          var {
              imgAttributes: r,
              heightInt: o,
              widthInt: n,
              qualityInt: s,
              className: c,
              imgStyle: d,
              blurStyle: u,
              isLazy: f,
              fill: g,
              placeholder: h,
              loading: m,
              srcString: v,
              config: b,
              unoptimized: w,
              loader: y,
              onLoadRef: E,
              onLoadingCompleteRef: S,
              onLoad: _,
              onError: C,
            } = e,
            j = a(e, [
              "imgAttributes",
              "heightInt",
              "widthInt",
              "qualityInt",
              "className",
              "imgStyle",
              "blurStyle",
              "isLazy",
              "fill",
              "placeholder",
              "loading",
              "srcString",
              "config",
              "unoptimized",
              "loader",
              "onLoadRef",
              "onLoadingCompleteRef",
              "onLoad",
              "onError",
            ]);
          return (
            (m = f ? "lazy" : m),
            l.default.createElement(
              l.default.Fragment,
              null,
              l.default.createElement(
                "img",
                Object.assign({}, j, r, {
                  width: n,
                  height: o,
                  decoding: "async",
                  "data-nimg": g ? "fill" : "1",
                  className: c,
                  loading: m,
                  style: i({}, d, u),
                  ref: l.useCallback(
                    (e) => {
                      t &&
                        ("function" == typeof t
                          ? t(e)
                          : "object" == typeof t && (t.current = e)),
                        e &&
                          (C && (e.src = e.src),
                          e.complete && p(e, v, E, S, w));
                    },
                    [v, E, S, C, w, t]
                  ),
                  onLoad: (e) => {
                    let t = e.currentTarget;
                    p(t, v, E, S, w);
                  },
                  onError: (e) => {
                    let { style: t } = e.currentTarget;
                    "transparent" === t.color && (t.color = ""),
                      "blur" === h &&
                        t.backgroundImage &&
                        ((t.backgroundSize = ""),
                        (t.backgroundPosition = ""),
                        (t.backgroundRepeat = ""),
                        (t.backgroundImage = "")),
                      C && C(e);
                  },
                })
              )
            )
          );
        }),
        b = l.forwardRef((e, t) => {
          let r, o;
          var n,
            {
              src: p,
              sizes: b,
              unoptimized: w = !1,
              priority: y = !1,
              loading: E,
              className: S,
              quality: _,
              width: C,
              height: j,
              fill: z,
              style: k,
              onLoad: x,
              onLoadingComplete: R,
              placeholder: I = "empty",
              blurDataURL: O,
              layout: P,
              objectFit: N,
              objectPosition: A,
              lazyBoundary: L,
              lazyRoot: M,
            } = e,
            D = a(e, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "className",
              "quality",
              "width",
              "height",
              "fill",
              "style",
              "onLoad",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
              "layout",
              "objectFit",
              "objectPosition",
              "lazyBoundary",
              "lazyRoot",
            ]);
          let B = l.useContext(u.ImageConfigContext),
            W = l.useMemo(() => {
              let e = g || B || d.imageConfigDefault,
                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                r = e.deviceSizes.sort((e, t) => e - t);
              return i({}, e, { allSizes: t, deviceSizes: r });
            }, [B]),
            F = D,
            T = F.loader || f.default;
          if ((delete F.loader, "__next_img_default" in T)) {
            if ("custom" === W.loader)
              throw Error(
                'Image with src "'.concat(p, '" is missing "loader" prop.') +
                  "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
              );
          } else {
            let q = T;
            T = (e) => {
              let { config: t } = e,
                r = a(e, ["config"]);
              return q(r);
            };
          }
          if (P) {
            "fill" === P && (z = !0);
            let G = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[P];
            G && (k = i({}, k, G));
            let Z = { responsive: "100vw", fill: "100vw" }[P];
            Z && !b && (b = Z);
          }
          let U = "",
            V = m(C),
            J = m(j);
          if ("object" == typeof (n = p) && (h(n) || void 0 !== n.src)) {
            let H = h(p) ? p.default : p;
            if (!H.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(H)
                )
              );
            if (!H.height || !H.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(H)
                )
              );
            if (
              ((r = H.blurWidth),
              (o = H.blurHeight),
              (O = O || H.blurDataURL),
              (U = H.src),
              !z)
            ) {
              if (V || J) {
                if (V && !J) {
                  let $ = V / H.width;
                  J = Math.round(H.height * $);
                } else if (!V && J) {
                  let K = J / H.height;
                  V = Math.round(H.width * K);
                }
              } else (V = H.width), (J = H.height);
            }
          }
          let Q = !y && ("lazy" === E || void 0 === E);
          ((p = "string" == typeof p ? p : U).startsWith("data:") ||
            p.startsWith("blob:")) &&
            ((w = !0), (Q = !1)),
            W.unoptimized && (w = !0);
          let X = m(_),
            Y = Object.assign(
              z
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: N,
                    objectPosition: A,
                  }
                : {},
              { color: "transparent" },
              k
            ),
            ee =
              "blur" === I && O
                ? {
                    backgroundSize: Y.objectFit || "cover",
                    backgroundPosition: Y.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,'.concat(
                        c.getImageBlurSvg({
                          widthInt: V,
                          heightInt: J,
                          blurWidth: r,
                          blurHeight: o,
                          blurDataURL: O,
                        }),
                        '")'
                      ),
                  }
                : {},
            et = (function (e) {
              let {
                config: t,
                src: r,
                unoptimized: i,
                width: o,
                quality: n,
                sizes: a,
                loader: l,
              } = e;
              if (i) return { src: r, srcSet: void 0, sizes: void 0 };
              let { widths: s, kind: c } = (function (e, t, r) {
                  let { deviceSizes: i, allSizes: o } = e;
                  if (r) {
                    let n = /(^|\s)(1?\d?\d)vw/g,
                      a = [];
                    for (let l; (l = n.exec(r)); l) a.push(parseInt(l[2]));
                    if (a.length) {
                      let s = 0.01 * Math.min(...a);
                      return {
                        widths: o.filter((e) => e >= i[0] * s),
                        kind: "w",
                      };
                    }
                    return { widths: o, kind: "w" };
                  }
                  if ("number" != typeof t) return { widths: i, kind: "w" };
                  let c = [
                    ...new Set(
                      [t, 2 * t].map(
                        (e) => o.find((t) => t >= e) || o[o.length - 1]
                      )
                    ),
                  ];
                  return { widths: c, kind: "x" };
                })(t, o, a),
                d = s.length - 1;
              return {
                sizes: a || "w" !== c ? a : "100vw",
                srcSet: s
                  .map((e, i) =>
                    ""
                      .concat(
                        l({ config: t, src: r, quality: n, width: e }),
                        " "
                      )
                      .concat("w" === c ? e : i + 1)
                      .concat(c)
                  )
                  .join(", "),
                src: l({ config: t, src: r, quality: n, width: s[d] }),
              };
            })({
              config: W,
              src: p,
              unoptimized: w,
              width: V,
              quality: X,
              sizes: b,
              loader: T,
            }),
            er = p,
            ei = {
              imageSrcSet: et.srcSet,
              imageSizes: et.sizes,
              crossOrigin: F.crossOrigin,
            },
            eo = l.useRef(x);
          l.useEffect(() => {
            eo.current = x;
          }, [x]);
          let en = l.useRef(R);
          l.useEffect(() => {
            en.current = R;
          }, [R]);
          let ea = i(
            {
              isLazy: Q,
              imgAttributes: et,
              heightInt: J,
              widthInt: V,
              qualityInt: X,
              className: S,
              imgStyle: Y,
              blurStyle: ee,
              loading: E,
              config: W,
              fill: z,
              unoptimized: w,
              placeholder: I,
              loader: T,
              srcString: er,
              onLoadRef: eo,
              onLoadingCompleteRef: en,
            },
            F
          );
          return l.default.createElement(
            l.default.Fragment,
            null,
            l.default.createElement(v, Object.assign({}, ea, { ref: t })),
            y
              ? l.default.createElement(
                  s.default,
                  null,
                  l.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + et.src + et.srcSet + et.sizes,
                        rel: "preload",
                        as: "image",
                        href: et.srcSet ? void 0 : et.src,
                      },
                      ei
                    )
                  )
                )
              : null
          );
        });
      (t.default = b),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    2675: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getImageBlurSvg = function (e) {
          let {
              widthInt: t,
              heightInt: r,
              blurWidth: i,
              blurHeight: o,
              blurDataURL: n,
            } = e,
            a = i || t,
            l = o || r,
            s = n.startsWith("data:image/jpeg")
              ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
              : "";
          return a && l
            ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
                .concat(a, " ")
                .concat(
                  l,
                  "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"
                )
                .concat(i && o ? "1" : "20", "'/%3E")
                .concat(
                  s,
                  "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(n, "'/%3E%3C/svg%3E")
            : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(
                n,
                "'/%3E%3C/svg%3E"
              );
        });
    },
    9824: function (e, t) {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: i, quality: o } = e;
        return r.endsWith(".svg") && !t.dangerouslyAllowSVG
          ? r
          : ""
              .concat(t.path, "?url=")
              .concat(encodeURIComponent(r), "&w=")
              .concat(i, "&q=")
              .concat(o || 75);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (r.__next_img_default = !0),
        (t.default = r);
    },
    5675: function (e, t, r) {
      e.exports = r(9749);
    },
  },
]);
