(window._iconfont_svg_string_ =
  '<svg><symbol id="icon-all" viewBox="0 0 1024 1024"><path d="M490.666667 533.333333v256a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h256z m298.666666 0a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64V533.333333h256z m-362.666666 64h-192v192h192v-192z m362.666666 0h-192v192h192v-192zM426.666667 170.666667a64 64 0 0 1 64 64v256H234.666667a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h192z m266.666666 0a160 160 0 1 1 0 320 160 160 0 0 1 0-320zM426.666667 234.666667h-192v192h192v-192z m266.666666 0a96 96 0 1 0 0 192 96 96 0 0 0 0-192z" fill="#007FFC" ></path></symbol><symbol id="icon-copy" viewBox="0 0 1024 1024"><path d="M576 384a64 64 0 0 1 64 64v341.333333a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V448a64 64 0 0 1 64-64h341.333333z m0 64H234.666667v341.333333h341.333333V448z m-64 192v64H298.666667v-64h213.333333zM789.333333 170.666667a64 64 0 0 1 64 64v341.333333a64 64 0 0 1-64 64h-106.666666v-64h106.666666V234.666667H448v106.666666h-64v-106.666666a64 64 0 0 1 64-64h341.333333zM512 533.333333v64H298.666667v-64h213.333333z" fill="#007FFC" ></path></symbol><symbol id="icon-editor" viewBox="0 0 1024 1024"><path d="M694.037333 213.333333v64H234.666667v469.333334h512V512h64v234.666667a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V277.333333a64 64 0 0 1 64-64h459.370666z m136.746667 24.234667l45.098667 45.397333-343.722667 341.290667 0.128 0.128-46.592 1.578667 1.322667-47.274667 0.085333 0.106667 343.68-341.226667z" fill="#007FFC" ></path></symbol><symbol id="icon-ashbin" viewBox="0 0 1024 1024"><path d="M341.013333 394.666667l27.754667 393.450666h271.829333l27.733334-393.450666h64.106666L704.426667 792.618667a64 64 0 0 1-63.829334 59.498666H368.768a64 64 0 0 1-63.829333-59.52L276.885333 394.666667h64.128z m139.306667 19.818666v298.666667h-64v-298.666667h64z m117.013333 0v298.666667h-64v-298.666667h64zM181.333333 288h640v64h-640v-64z m453.482667-106.666667v64h-256v-64h256z" fill="#007FFC" ></path></symbol><symbol id="icon-smile" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m161.877333 330.517334l60.245334 21.632c-81.066667 225.578667-385.088 225.578667-445.077334-2.688l61.909334-16.256c43.477333 165.504 262.506667 165.504 322.922666-2.688zM426.666667 362.666667a42.666667 42.666667 0 0 1 42.666666 42.666666v64a42.666667 42.666667 0 1 1-85.333333 0v-64a42.666667 42.666667 0 0 1 42.666667-42.666666z m170.666666 0a42.666667 42.666667 0 0 1 42.666667 42.666666v64a42.666667 42.666667 0 1 1-85.333333 0v-64a42.666667 42.666667 0 0 1 42.666666-42.666666z" fill="#007FFC" ></path></symbol></svg>'),
  (function (n) {
    var t = (t = document.getElementsByTagName('script'))[t.length - 1],
      e = t.getAttribute('data-injectcss'),
      t = t.getAttribute('data-disable-injectsvg');
    if (!t) {
      var i,
        o,
        a,
        l,
        v,
        h = function (t, e) {
          e.parentNode.insertBefore(t, e);
        };
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0;
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
          );
        } catch (t) {
          console && console.log(t);
        }
      }
      (i = function () {
        var t,
          e = document.createElement('div');
        (e.innerHTML = n._iconfont_svg_string_),
          (e = e.getElementsByTagName('svg')[0]) &&
            (e.setAttribute('aria-hidden', 'true'),
            (e.style.position = 'absolute'),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = 'hidden'),
            (e = e),
            (t = document.body).firstChild ? h(e, t.firstChild) : t.appendChild(e));
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(i, 0)
            : ((o = function () {
                document.removeEventListener('DOMContentLoaded', o, !1), i();
              }),
              document.addEventListener('DOMContentLoaded', o, !1))
          : document.attachEvent &&
            ((a = i),
            (l = n.document),
            (v = !1),
            s(),
            (l.onreadystatechange = function () {
              'complete' == l.readyState && ((l.onreadystatechange = null), d());
            }));
    }
    function d() {
      v || ((v = !0), a());
    }
    function s() {
      try {
        l.documentElement.doScroll('left');
      } catch (t) {
        return void setTimeout(s, 50);
      }
      d();
    }
  })(window);
