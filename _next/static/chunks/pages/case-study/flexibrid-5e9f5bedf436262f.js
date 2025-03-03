(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [34],
  {
    9695: function (e, a, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/case-study/flexibrid",
        function () {
          return s(6466);
        },
      ]);
    },
    6466: function (e, a, s) {
      "use strict";
      s.r(a);
      var i = s(5893),
        l = s(7294),
        r = s(1915),
        t = s(6038),
        n = s(6546),
        d = s.n(n),
        c = s(2757),
        o = s(1664),
        m = s.n(o),
        x = s(9762),
        h = s(966),
        p = s(5675),
        u = s.n(p);
      t.p8.registerPlugin(c.SplitText, d());
      let f = () => {
        let e = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            window.innerWidth > 990 &&
              (() => {
                let a = e.current.querySelectorAll("[data-animate]");
                a.forEach((e) => {
                  let a = parseFloat(e.dataset.animateX),
                    s = parseFloat(e.dataset.animateY),
                    i = e.dataset.animateTrigger;
                  t.p8.to(e, {
                    xPercent: a,
                    yPercent: s,
                    scrollTrigger: {
                      trigger: i,
                      scrub: 0.6,
                      start: "0% 60%",
                      end: "100% 30%",
                    },
                  });
                });
              })();
            let a = new c.SplitText(".cs-overview-text", {
              type: "words",
              wordsClass: "overflow-hidden",
              reduceWhiteSpace: !1,
            }).words;
            t.p8.fromTo(
              a,
              { yPercent: 100, autoAlpha: 0 },
              {
                duration: 3,
                yPercent: 0,
                autoAlpha: 1,
                ease: "power2.out",
                stagger: 0.5,
                scrollTrigger: {
                  trigger: ".cs-overview-text",
                  start: "0% 60%",
                  end: "80% 40%",
                  scrub: 0.6,
                },
              }
            );
            let s = new c.SplitText(".bottom-big-lines-text", {
              type: "lines",
              linesClass: "overflow-hidden",
              reduceWhiteSpace: !1,
            }).lines;
            t.p8.fromTo(
              s,
              { yPercent: 100, autoAlpha: 0 },
              {
                duration: 3,
                yPercent: 0,
                autoAlpha: 1,
                ease: "power2.out",
                stagger: 0.4,
                scrollTrigger: {
                  trigger: ".bottom-big-lines-sec",
                  start: "0% 80%",
                  end: "80% 30%",
                  scrub: 0.6,
                },
              }
            ),
              t.p8.fromTo(
                ".top-header",
                { yPercent: -100, autoAlpha: 0 },
                {
                  duration: 0.6,
                  yPercent: 0,
                  delay: 1,
                  autoAlpha: 1,
                  ease: "power2.out",
                }
              ),
              t.p8.fromTo(
                ".first-sec",
                { y: 100, autoAlpha: 0 },
                {
                  duration: 0.6,
                  y: 0,
                  delay: 1,
                  autoAlpha: 1,
                  ease: "power2.out",
                }
              ),
              t.p8.fromTo(
                ".cs-banner",
                { scale: 1.2, autoAlpha: 0 },
                {
                  duration: 0.6,
                  scale: 1,
                  autoAlpha: 1,
                  delay: 1,
                  ease: "power2.out",
                }
              );
          }, []),
          (0, l.useEffect)(() => {
            window.scrollTo(0, 0),
              setTimeout(() => {
                d().refresh();
              }, 500);
          }, []),
          (0, i.jsx)(h.Z, {
            noHeader: !0,
            children: (0, i.jsxs)("div", {
              ref: e,
              children: [
                (0, i.jsx)("div", {
                  className: "top-header opacity-0",
                  children: (0, i.jsx)("div", {
                    className: "container",
                    children: (0, i.jsxs)("div", {
                      className: "flex justify-between py-2",
                      children: [
                        (0, i.jsx)("div", {
                          className: "text-12 font-medium uppercase md:text-16",
                          children: (0, i.jsx)(m(), {
                            href: "/",
                            children: "UNTYE",
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "text-12 uppercase md:text-16",
                          children: [
                            (0, i.jsx)("span", {
                              className: "text-green",
                              children: "Project (02)",
                            }),
                            " Flexibrid.",
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: " text-12 md:text-16",
                          children: "2023",
                        }),
                        (0, i.jsx)(m(), {
                          href: "/case-study/interio",
                          className: "block text-12 md:text-16",
                          children: (0, i.jsxs)(x.Z, {
                            children: [
                              "NEXT\xa0",
                              (0, i.jsx)("span", {
                                className: "text-green",
                                children: "[Interio]",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, i.jsx)("section", {
                  className: "overflow-hidden",
                  children: (0, i.jsx)(u(), {
                    src: "/img/flexibrid-banner.webp",
                    className: "cs-banner w-full opacity-0",
                    alt: "",
                    width: "1920",
                    height: "1080",
                    quality: "100",
                  }),
                }),
                (0, i.jsx)("section", {
                  className: "section-pad first-sec",
                  children: (0, i.jsx)("div", {
                    className: "container",
                    children: (0, i.jsxs)("div", {
                      className:
                        "mx-auto grid gap-3 md:max-w-[80%] lg:grid-cols-2",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, i.jsx)("div", {
                              className: "absolute bottom-2 right-2 z-20",
                              "data-animate": !0,
                              "data-animate-y": "-200",
                              "data-animate-trigger": ".first-sec",
                              children: (0, i.jsx)("div", {
                                className:
                                  "text-32 font-medium uppercase tracking-[2px] text-white md:text-[54px] lg:text-right",
                                children: "Casestudy",
                              }),
                            }),
                            (0, i.jsx)("div", {
                              "data-animate": !0,
                              "data-animate-y": "-20",
                              "data-animate-trigger": ".first-sec",
                              children: (0, i.jsx)("img", {
                                src: "/img/flexibrid-1.webp",
                                alt: "",
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "flex flex-col-reverse lg:flex-col ",
                          children: [
                            (0, i.jsxs)("div", {
                              className:
                                "flex flex-1 flex-col justify-center gap-3 uppercase",
                              children: [
                                (0, i.jsxs)("div", {
                                  className:
                                    "cs-overview-text text-16 font-medium uppercase",
                                  children: [
                                    "The\xa0\xa0\xa0\xa0\xa0\xa0",
                                    (0, i.jsx)("span", {
                                      className: "text-green",
                                      children: "office culture,",
                                    }),
                                    "\xa0\xa0\xa0\xa0\xa0\xa0the dress code, and\xa0\xa0\xa0\xa0",
                                    (0, i.jsx)("span", {
                                      className: "text-green",
                                      children: "9-5 days",
                                    }),
                                    "\xa0\xa0\xa0\xa0\xa0\xa0are long gone, create your own environment,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
                                    (0, i.jsx)("span", {
                                      className: "text-green",
                                      children: "decide your own",
                                    }),
                                    "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0dress code and work on your own timings.",
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className:
                                    "cs-overview-text text-16 font-medium uppercase",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: "text-green",
                                      children: " Work from wherever",
                                    }),
                                    "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0you are and whoever you are; making the remote job greater.",
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              "data-animate": !0,
                              "data-animate-y": "50",
                              "data-animate-trigger": ".first-sec",
                              children: (0, i.jsx)("div", {
                                className:
                                  "cs-project-name mb-4 text-24 font-medium uppercase leading-none lg:mb-0",
                                children: "Flexibrid",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, i.jsx)("section", {
                  className: "border-y border-y-black py-7",
                  children: (0, i.jsx)("div", {
                    className: "container",
                    children: (0, i.jsx)("div", {
                      className: "flex flex-wrap lg:ml-[25%]",
                      children: (0, i.jsx)("table", {
                        className: "cs-table w-full",
                        children: (0, i.jsxs)("tbody", {
                          children: [
                            (0, i.jsxs)("tr", {
                              children: [
                                (0, i.jsx)("td", {
                                  className: "uppercase",
                                  children: "Client",
                                }),
                                (0, i.jsx)("td", { children: "Flexibrid" }),
                              ],
                            }),
                            (0, i.jsxs)("tr", {
                              children: [
                                (0, i.jsx)("td", {
                                  className: "uppercase",
                                  children: "Year",
                                }),
                                (0, i.jsx)("td", { children: "2021" }),
                              ],
                            }),
                            (0, i.jsxs)("tr", {
                              children: [
                                (0, i.jsx)("td", {
                                  className: "uppercase",
                                  children: "Service",
                                }),
                                (0, i.jsx)("td", {
                                  children:
                                    "Strategy, Creative design, Branding, product Design",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("tr", {
                              children: [
                                (0, i.jsx)("td", {
                                  className: "uppercase",
                                  children: "Platform",
                                }),
                                (0, i.jsx)("td", { children: "Web & mobile" }),
                              ],
                            }),
                            (0, i.jsxs)("tr", {
                              children: [
                                (0, i.jsx)("td", {
                                  className: "uppercase",
                                  children: "Challenges",
                                }),
                                (0, i.jsx)("td", {
                                  children:
                                    "Overcoming challenges of an outdated website, poor user engagement, and limited brand visibility, the strategy and website design intervention for an interior college focused on revamping its online presence, improving program communication, and streamlining information architecture.",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("tr", {
                              children: [
                                (0, i.jsx)("td", {
                                  className: "uppercase",
                                  children: "Solutions",
                                }),
                                (0, i.jsx)("td", {
                                  children:
                                    "Implementing a comprehensive redesign, introducing interactive elements, and restructuring information architecture successfully addressed the challenges, resulting in a revitalized online presence, enhanced user engagement, and improved communication for an interior college. Additionally, strategic content planning and targeted digital marketing efforts increased brand visibility and interest in the college's programs.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
                (0, i.jsx)("section", {
                  className: "section-pad",
                  children: (0, i.jsx)("div", {
                    className: "container",
                    children: (0, i.jsxs)("div", {
                      className:
                        "flex flex-wrap justify-between gap-3 md:flex-nowrap",
                      children: [
                        (0, i.jsx)("div", {
                          className: "w-full md:w-1/2 ",
                          children: (0, i.jsx)("img", {
                            src: "/img/flexibrid-2.webp",
                            alt: "",
                            className: "w-full",
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "w-full md:w-1/3",
                          children: (0, i.jsx)("div", {
                            children: (0, i.jsx)("div", {
                              className: "relative z-10 ",
                              children: (0, i.jsx)("div", {
                                children: (0, i.jsx)("img", {
                                  src: "/img/flexibrid-3.webp",
                                  alt: "",
                                  className: "w-full",
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, i.jsx)("section", {
                  className: "pb-6",
                  children: (0, i.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, i.jsx)("div", {
                        className: "mb-4",
                        children: (0, i.jsx)("img", {
                          src: "/img/flexibrid-4.webp",
                          className: "w-full",
                          alt: "",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "mb-4",
                        children: (0, i.jsx)("img", {
                          src: "/img/flexibrid-5.webp",
                          className: "w-full",
                          alt: "",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("section", {
                  className: "section-pad bottom-big-lines-sec !pt-0",
                  children: (0, i.jsx)("div", {
                    className: "container",
                    children: (0, i.jsx)("div", {
                      className:
                        "bottom-big-lines-text text-32 font-medium uppercase leading-[100%] md:max-w-[92%] md:text-48",
                      children:
                        "We provide the perfect professional for the dream job. It’s not 100% remote, it's a hybrid approach for Work. Modern business is giving you the freedom to work where you feel comfortable.",
                    }),
                  }),
                }),
                (0, i.jsx)("section", {
                  className:
                    "anim-parallax-section overflow-hidden pb-7 md:pt-6",
                  children: (0, i.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "-mx-2 flex flex-wrap pb-6",
                        children: [
                          (0, i.jsx)("div", {
                            className: "w-full px-2 md:w-2/5",
                            "data-animate": !0,
                            "data-animate-y": "-10",
                            "data-animate-trigger": ".anim-parallax-section",
                            children: (0, i.jsx)("div", {
                              className: "mb-4 md:mb-0",
                              children: (0, i.jsx)("img", {
                                src: "/img/flexibrid-6.webp",
                                className: "w-full",
                                alt: "",
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "w-full px-2 md:ml-[10%] md:w-2/5",
                            "data-animate": !0,
                            "data-animate-y": "30",
                            "data-animate-trigger": ".anim-parallax-section",
                            children: (0, i.jsx)("div", {
                              className:
                                "mx-auto flex flex-col-reverse md:flex-col",
                              children: (0, i.jsx)("div", {
                                children: (0, i.jsx)("img", {
                                  src: "/img/flexibrid-7.webp",
                                  className: "w-full",
                                  alt: "",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "mb-4",
                        children: (0, i.jsx)("img", {
                          src: "/img/flexibrid-8.webp",
                          className: "w-full",
                          alt: "",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "md:w-3/5",
                        children: (0, i.jsx)("p", {
                          children:
                            "The office culture, the dress code, and 9-5 days are long gone, create your own environment, decide your own dress code and work on your own timings. Work from wherever you are and whoever you are; making the remote job greater.",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("section", {
                  className:
                    "anim-parallax-section-2 overflow-hidden pb-7 md:pt-6",
                  children: (0, i.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "-mx-2 flex flex-wrap items-end pb-6",
                        children: [
                          (0, i.jsx)("div", {
                            className: "w-full px-2 md:w-1/2",
                            "data-animate": !0,
                            "data-animate-y": "-40",
                            "data-animate-trigger": ".anim-parallax-section-2",
                            children: (0, i.jsx)("div", {
                              className: "mb-4 md:mb-0",
                              children: (0, i.jsx)("img", {
                                src: "/img/flexibrid-9.webp",
                                className: "w-full",
                                alt: "",
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "w-full px-2 md:w-1/2 md:pl-[10%]",
                            "data-animate": !0,
                            "data-animate-y": "-30",
                            "data-animate-trigger": ".anim-parallax-section-2",
                            children: (0, i.jsx)("div", {
                              className:
                                "mx-auto flex flex-col-reverse md:flex-col",
                              children: (0, i.jsx)("div", {
                                children: (0, i.jsx)("img", {
                                  src: "/img/flexibrid-10.webp",
                                  className: "w-full",
                                  alt: "",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "-mx-2 flex flex-wrap items-end md:pb-6",
                        children: [
                          (0, i.jsx)("div", {
                            className: "w-full px-2 md:w-1/2",
                            "data-animate": !0,
                            "data-animate-y": "-30",
                            "data-animate-trigger": ".anim-parallax-section-2",
                            children: (0, i.jsx)("div", {
                              className: "mb-4 md:mb-0",
                              children: (0, i.jsx)("img", {
                                src: "/img/flexibrid-11.webp",
                                className: "w-full",
                                alt: "",
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "w-full px-2 md:w-1/2 md:pl-[10%]",
                            "data-animate": !0,
                            "data-animate-y": "-20",
                            "data-animate-trigger": ".anim-parallax-section-2",
                            children: (0, i.jsx)("div", {
                              className:
                                "mx-auto flex flex-col-reverse md:flex-col",
                              children: (0, i.jsxs)("div", {
                                children: [
                                  (0, i.jsx)("img", {
                                    src: "/img/flexibrid-12.webp",
                                    className: "mb-3 w-full",
                                    alt: "",
                                  }),
                                  (0, i.jsx)("p", {
                                    children:
                                      "Making hybrid Work incredible for everyone. ",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)("section", {
                  className: "grid md:grid-cols-2",
                  children: [
                    (0, i.jsx)("div", {
                      className: "h-full",
                      children: (0, i.jsx)("img", {
                        src: "/img/interio.webp",
                        className: "h-full w-full object-cover",
                        alt: "",
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "relative h-full bg-[#111] py-4 md:py-0",
                      children: [
                        (0, i.jsx)(m(), {
                          href: "/case-study/interio",
                          children: (0, i.jsx)("video", {
                            src: "/video/next.mp4",
                            className: "h-full w-full object-cover",
                            autoPlay: !0,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "pointer-events-none absolute top-3 left-3 ",
                          children: (0, i.jsx)(r.Z, {
                            whiteButton: !0,
                            arrowColor: "#fff",
                            arrow: !0,
                            className: "!p-0 text-white",
                            children: "Next Project",
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "pointer-events-none absolute bottom-3 right-3 md:right-6 ",
                          children: (0, i.jsx)("div", {
                            className: "text-20 uppercase text-white",
                            children: "Interio",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("section", {
                  className: "py-5 md:py-7",
                  children: (0, i.jsx)("div", {
                    className:
                      "container flex flex-1 items-center overflow-hidden",
                    children: (0, i.jsxs)("div", {
                      className: "w-full py-4 md:py-0",
                      children: [
                        (0, i.jsx)("div", {
                          className: "overflow-hidden",
                          children: (0, i.jsx)("h2", {
                            className:
                              "contact-name mb-3 text-48 font-medium leading-none md:mb-0 md:whitespace-nowrap md:text-[200px]",
                            children: "UNTYE",
                          }),
                        }),
                        (0, i.jsx)("p", {
                          className:
                            "mb-4 text-14 font-medium uppercase md:max-w-[70%] md:text-20",
                          children:
                            "Got a project that's so cool, it could make an iceberg crack a smile? Let's grab a virtual brainstorm session and make it even cooler!",
                        }),
                        (0, i.jsx)(r.Z, {
                          href: "#!",
                          boxButton: !0,
                          greenButton: !0,
                          arrow: !0,
                          arrowColor: "#fff",
                          children: "Shoot me an email",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      };
      (f.hasHeaderFooter = !1), (a.default = f);
    },
  },
  function (e) {
    e.O(0, [210, 877, 675, 581, 774, 888, 179], function () {
      return e((e.s = 9695));
    }),
      (_N_E = e.O());
  },
]);
