(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [964],
  {
    6820: function (e, a, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/case-study/interio",
        function () {
          return s(1192);
        },
      ]);
    },
    1192: function (e, a, s) {
      "use strict";
      s.r(a);
      var t = s(5893),
        i = s(7294),
        l = s(1915),
        r = s(6038),
        c = s(6546),
        n = s.n(c),
        d = s(2757),
        m = s(1664),
        o = s.n(m),
        x = s(9762),
        h = s(966),
        p = s(5675),
        u = s.n(p),
        g = s(92);
      r.p8.registerPlugin(d.SplitText, n());
      let j = () => {
        let e = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            window.innerWidth > 990 &&
              (() => {
                let a = e.current.querySelectorAll("[data-animate]");
                a.forEach((e) => {
                  let a = parseFloat(e.dataset.animateX),
                    s = parseFloat(e.dataset.animateY),
                    t = e.dataset.animateTrigger;
                  r.p8.to(e, {
                    xPercent: a,
                    yPercent: s,
                    scrollTrigger: {
                      trigger: t,
                      scrub: 0.6,
                      start: "0% 60%",
                      end: "100% 30%",
                    },
                  });
                });
              })();
            let a = new d.SplitText(".cs-overview-text", {
              type: "words",
              wordsClass: "overflow-hidden",
              reduceWhiteSpace: !1,
            }).words;
            r.p8.fromTo(
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
            let s = new d.SplitText(".bottom-big-lines-text", {
              type: "lines",
              linesClass: "overflow-hidden",
              reduceWhiteSpace: !1,
            }).lines;
            r.p8.fromTo(
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
              r.p8.fromTo(
                ".top-header",
                { yPercent: -100, autoAlpha: 0 },
                {
                  duration: 0.6,
                  yPercent: 0,
                  delay: 0.5,
                  autoAlpha: 1,
                  ease: "power2.out",
                }
              ),
              r.p8.fromTo(
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
              r.p8.fromTo(
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
          (0, i.useEffect)(() => {
            window.scrollTo(0, 0),
              setTimeout(() => {
                n().refresh();
              }, 1e3);
          }, []),
          (0, t.jsx)(h.Z, {
            noHeader: !0,
            children: (0, t.jsxs)("div", {
              ref: e,
              children: [
                (0, t.jsx)("div", {
                  className: "top-header opacity-0",
                  children: (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                      className: "flex justify-between py-2",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-12 font-medium uppercase md:text-16",
                          children: (0, t.jsx)(o(), {
                            href: "/",
                            children: "UNTYE",
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "text-12 uppercase md:text-16",
                          children: [
                            " ",
                            (0, t.jsx)("span", {
                              className: "text-green",
                              children: "Project (01)",
                            }),
                            " Interio.",
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: " text-12 md:text-16",
                          children: "2023",
                        }),
                        (0, t.jsx)(o(), {
                          href: "/case-study/flexibrid",
                          className: "block text-12 md:text-16",
                          children: (0, t.jsxs)(x.Z, {
                            children: [
                              "NEXT\xa0",
                              (0, t.jsx)("span", {
                                className: "text-green",
                                children: "[Flexibrid]",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, t.jsx)("section", {
                  className: "overflow-hidden",
                  children: (0, t.jsx)(u(), {
                    src: "/img/cs-banner.webp",
                    className: "cs-banner w-full opacity-0",
                    alt: "",
                    width: "1920",
                    height: "1080",
                    quality: "100",
                  }),
                }),
                (0, t.jsx)("section", {
                  className: "section-pad first-sec opacity-0",
                  children: (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                      className: "grid gap-3 lg:grid-cols-3",
                      children: [
                        (0, t.jsx)("div", {
                          className: "lg:self-end",
                          "data-animate": !0,
                          "data-animate-x": "30",
                          "data-animate-trigger": ".first-sec",
                          children: (0, t.jsx)("div", {
                            className:
                              "text-32 font-medium uppercase tracking-[2px] md:text-[54px] lg:text-right",
                            children: "Casestudy",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          "data-animate": !0,
                          "data-animate-y": "-20",
                          "data-animate-trigger": ".first-sec",
                          children: (0, t.jsx)("img", {
                            src: "/img/cs-thumb.webp",
                            alt: "",
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex flex-col-reverse lg:flex-col ",
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "flex flex-1 flex-col justify-center gap-3 uppercase",
                              children: [
                                (0, t.jsxs)("div", {
                                  className:
                                    "cs-overview-text text-16 font-medium uppercase",
                                  children: [
                                    "we believe in the \xa0\xa0\xa0\xa0\xa0",
                                    (0, t.jsx)("span", {
                                      className: "text-green",
                                      children: "transformative",
                                    }),
                                    " ",
                                    "\xa0\xa0\xa0\xa0 power of architecture \xa0\xa0 to shape \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
                                    " ",
                                    (0, t.jsx)("span", {
                                      className: "text-green",
                                      children: "the world",
                                    }),
                                    "\xa0 around us.",
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  className:
                                    "cs-overview-text text-16 font-medium uppercase",
                                  children:
                                    "Our cutting-edge \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 curriculum, led by\xa0\xa0\xa0\xa0\xa0 seasoned professionals \xa0\xa0\xa0\xa0\xa0 and educators, blends the \xa0\xa0\xa0\xa0\xa0 principles of design.",
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              "data-animate": !0,
                              "data-animate-x": "-30",
                              "data-animate-trigger": ".first-sec",
                              children: (0, t.jsx)("div", {
                                className:
                                  "cs-project-name mb-7 text-24 font-medium uppercase leading-none lg:mb-0",
                                children: "Interiro.",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, t.jsx)("section", {
                  className: "border-y border-y-black py-7",
                  children: (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsx)("div", {
                      className: "flex flex-wrap lg:ml-[25%]",
                      children: (0, t.jsx)("table", {
                        className: "cs-table w-full",
                        children: (0, t.jsxs)("tbody", {
                          children: [
                            (0, t.jsxs)("tr", {
                              children: [
                                (0, t.jsx)("td", {
                                  className: "uppercase",
                                  children: "Client",
                                }),
                                (0, t.jsx)("td", { children: "Interiro." }),
                              ],
                            }),
                            (0, t.jsxs)("tr", {
                              children: [
                                (0, t.jsx)("td", {
                                  className: "uppercase",
                                  children: "Year",
                                }),
                                (0, t.jsx)("td", { children: "2022" }),
                              ],
                            }),
                            (0, t.jsxs)("tr", {
                              children: [
                                (0, t.jsx)("td", {
                                  className: "uppercase",
                                  children: "Service",
                                }),
                                (0, t.jsx)("td", {
                                  children: "Strategy, Creative design",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("tr", {
                              children: [
                                (0, t.jsx)("td", {
                                  className: "uppercase",
                                  children: "Platform",
                                }),
                                (0, t.jsx)("td", { children: "Web" }),
                              ],
                            }),
                            (0, t.jsxs)("tr", {
                              children: [
                                (0, t.jsx)("td", {
                                  className: "uppercase",
                                  children: "Challenges",
                                }),
                                (0, t.jsx)("td", {
                                  children:
                                    "Overcoming challenges of an outdated website, poor user engagement, and limited brand visibility, the strategy and website design intervention for an interior college focused on revamping its online presence, improving program communication, and streamlining information architecture.",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("tr", {
                              children: [
                                (0, t.jsx)("td", {
                                  className: "uppercase",
                                  children: "Solutions",
                                }),
                                (0, t.jsx)("td", {
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
                (0, t.jsx)("section", {
                  className: "section-pad",
                  children: (0, t.jsxs)("div", {
                    className: "flex flex-wrap gap-3 md:gap-0",
                    children: [
                      (0, t.jsx)("div", {
                        className: "w-full md:w-3/5 ",
                        children: (0, t.jsx)("img", {
                          src: "/img/project-img-1.webp",
                          alt: "",
                          className: "w-full",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "w-full md:w-2/5",
                        children: (0, t.jsx)("div", {
                          className: "cs-small-overview",
                          style: { "--tooltip-color": "#EBE9E4" },
                          children: (0, t.jsxs)("div", {
                            className:
                              "cs-overview-block relative z-10 mx-auto max-w-[90%] md:max-w-[60%]",
                            children: [
                              (0, t.jsxs)("div", {
                                className:
                                  "mb-5 border-x border-x-black p-3 pb-0",
                                children: [
                                  (0, t.jsx)("h3", {
                                    className: "mb-5 text-24 uppercase",
                                    children: "Bachelor In Architecture",
                                  }),
                                  (0, t.jsx)("p", {
                                    children:
                                      "3 Years program - See more details",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "/img/project-img-2.webp",
                                    alt: "",
                                    className: "w-full",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("p", {
                                children:
                                  "Interiro. College of Architecture offers Bachelor (Graduate) in Architecture and Master (Post graduate) in Digital, Landscape.",
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("section", {
                  className: "section-pad !pt-0",
                  children: (0, t.jsxs)(g.y, {
                    duration: 20,
                    elementSpacing: "gap-4",
                    className: "items-center",
                    scrollSpeedBased: !0,
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "text-72 font-medium uppercase md:text-[148px]",
                        children: "PEOPLE",
                      }),
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("img", {
                          src: "/img/line-star.svg",
                          className: "w-5 md:w-auto",
                          alt: "",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "text-72 font-medium uppercase md:text-[148px]",
                        children: "IMPACT",
                      }),
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("img", {
                          src: "/img/line-star.svg",
                          className: "w-5 md:w-auto",
                          alt: "",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "text-72 font-medium uppercase md:text-[148px]",
                        children: "EXPERIENCES",
                      }),
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("img", {
                          src: "/img/line-star.svg",
                          className: "w-5 md:w-auto",
                          alt: "",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("section", {
                  className: "pb-6",
                  children: [
                    (0, t.jsx)("div", {
                      className: "mb-6",
                      children: (0, t.jsx)("img", {
                        src: "/img/cs-thumb-3.webp",
                        className: "w-full",
                        alt: "",
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, t.jsx)("div", {
                          className: "mb-3",
                          children: (0, t.jsx)("img", {
                            src: "/img/cs-thumb-4.webp",
                            className: "w-full",
                            alt: "",
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "mb-3",
                          children: [
                            (0, t.jsx)("img", {
                              src: "/img/cs-thumb-5.webp",
                              className: "w-full",
                              alt: "",
                            }),
                            (0, t.jsx)("p", {
                              className: "pt-4 md:max-w-[50%]",
                              children:
                                "In crafting the blog section for Interiro, I aimed to create a dynamic space that mirrors the essence of our college and architecture brand. This segment serves as a digital canvas, inviting visitors to explore the intersections of creativity, design, and education.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("section", {
                  className: "anim-parallax-section overflow-hidden md:pt-6",
                  children: (0, t.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "-mx-2 flex flex-wrap pb-6",
                        children: [
                          (0, t.jsx)("div", {
                            className: "w-full px-2 md:w-3/5",
                            "data-animate": !0,
                            "data-animate-y": "-10",
                            "data-animate-trigger": ".anim-parallax-section",
                            children: (0, t.jsxs)("div", {
                              className: "mx-auto mb-4 md:mb-0 md:max-w-[75%]",
                              children: [
                                (0, t.jsx)("p", {
                                  className: "text-24 font-medium uppercase",
                                  children: "Organization",
                                }),
                                (0, t.jsx)("img", {
                                  src: "/img/cs-thumb-6.webp",
                                  className: "w-full",
                                  alt: "",
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "w-full px-2 md:w-2/5",
                            "data-animate": !0,
                            "data-animate-y": "30",
                            "data-animate-trigger": ".anim-parallax-section",
                            children: (0, t.jsxs)("div", {
                              className:
                                "mx-auto flex flex-col-reverse md:max-w-[65%] md:flex-col",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: " bg-[#EBE9E4]",
                                  children: [
                                    (0, t.jsx)("img", {
                                      src: "/img/cs-thumb-7.webp",
                                      className: "w-full",
                                      alt: "",
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "p-4",
                                      children: [
                                        (0, t.jsx)("p", {
                                          className: "mb-6 text-24",
                                          children:
                                            "The Top 5 Architecture Trends to Watch in 2023",
                                        }),
                                        (0, t.jsx)("p", {
                                          className:
                                            "font-medium text-[#F07B48] underline",
                                          children: "Read more",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("p", {
                                  className:
                                    "pt-4 text-24 font-medium uppercase",
                                  children: "News",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "-mx-2 flex flex-wrap gap-4 pb-6 md:gap-0",
                        children: [
                          (0, t.jsx)("div", {
                            className: "w-full px-2 md:w-2/5",
                            children: (0, t.jsx)("div", {
                              className: "h-full",
                              children: (0, t.jsx)("img", {
                                src: "/img/cs-thumb-8.webp",
                                className: "h-full w-full object-cover",
                                alt: "",
                              }),
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "w-full px-2 md:w-3/5",
                            children: (0, t.jsx)("div", {
                              className: "h-full",
                              children: (0, t.jsx)("img", {
                                src: "/img/cs-thumb-9.webp",
                                className: "h-full w-full object-cover",
                                alt: "",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("section", {
                  className: "section-pad bottom-big-lines-sec !pt-5",
                  children: (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsx)("div", {
                      className:
                        "bottom-big-lines-text text-32 font-medium uppercase leading-[100%] md:max-w-[92%] md:text-48",
                      children:
                        "At Interiro, we are dedicated to providing our students with an exceptional education and preparing them for successful careers in architecture and design.",
                    }),
                  }),
                }),
                (0, t.jsxs)("section", {
                  className: "grid md:grid-cols-2",
                  children: [
                    (0, t.jsx)("div", {
                      className: "h-full",
                      children: (0, t.jsx)("img", {
                        src: "/img/next-project.webp",
                        className: "h-full w-full object-cover",
                        alt: "",
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: "relative h-full bg-[#111] py-4 md:py-0",
                      children: [
                        (0, t.jsx)(o(), {
                          href: "/case-study/flexibrid",
                          children: (0, t.jsx)("video", {
                            src: "/video/next.mp4",
                            className: "h-full w-full object-cover",
                            autoPlay: !0,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "pointer-events-none absolute top-3 left-3 ",
                          children: (0, t.jsx)(l.Z, {
                            whiteButton: !0,
                            arrowColor: "#fff",
                            arrow: !0,
                            className: "!p-0 text-white",
                            children: "Next Project",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "pointer-events-none absolute bottom-3 right-3 md:right-6 ",
                          children: (0, t.jsx)("div", {
                            className: "text-20 uppercase text-white",
                            children: "Flexibrid",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("section", {
                  className: "py-5 md:py-7",
                  children: (0, t.jsx)("div", {
                    className:
                      "container flex flex-1 items-center overflow-hidden",
                    children: (0, t.jsxs)("div", {
                      className: "w-full py-4 md:py-0",
                      children: [
                        (0, t.jsx)("div", {
                          className: "overflow-hidden",
                          children: (0, t.jsx)("h2", {
                            className:
                              "contact-name mb-3 text-48 font-medium leading-none md:mb-0 md:whitespace-nowrap md:text-[200px]",
                            children: "UNTYE",
                          }),
                        }),
                        (0, t.jsx)("p", {
                          className:
                            "mb-4 text-14 font-medium uppercase md:max-w-[70%] md:text-20",
                          children:
                            "Got a project that's so cool, it could make an iceberg crack a smile? Let's grab a virtual brainstorm session and make it even cooler!",
                        }),
                        (0, t.jsx)(l.Z, {
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
      (j.hasHeaderFooter = !1), (a.default = j);
    },
  },
  function (e) {
    e.O(0, [210, 877, 675, 581, 774, 888, 179], function () {
      return e((e.s = 6820));
    }),
      (_N_E = e.O());
  },
]);
