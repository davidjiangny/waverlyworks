webpackJsonp([4], {
  Yjqb: function(e, t) {
    function o(e, t) {
      var o, n = window.pageYOffset,
        i = e - n;
      window.requestAnimationFrame(function e(c) {
        o || (o = c);
        var a = c - o,
          r = Math.min(a / t, 1);
        window.scrollTo(0, n + i * r), a < t && window.requestAnimationFrame(e)
      })
    }! function(e, t, o) {
      function n() {
        var e = window.scrollY || window.pageYOffset;
        if (a === e) return o(n);
         !r && window.innerHeight + e >= t.offsetHeight && (t.classList.add("_round"), r = !0), l && s.forEach(function(e) {
          e.parentNode.classList.contains("active") || i(e) && (e.parentNode.classList.add("active"), l--)
        }), t.classList[e > 820 ? "add" : "remove"]("_flap"), o(n)
      }

      function i(e) {
        var t = e.getBoundingClientRect();
        return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
      }
      var c = 0 === e.offsetHeight,
        a = 0;
      c || o(n);
      var r = !1,
        d = !1,
        s = Array.prototype.slice.call(document.querySelectorAll(".area-services__screen")),
        l = s.length
    }(document.querySelector(".area-header.flap"), document.body, window.requestAnimationFrame),
    function(e) {
      e = Array.prototype.slice.call(e), e.forEach(function(e) {
        e.addEventListener("click", function() {
          var t = e.getAttribute("data-anchor");
          o(document.querySelector(t).offsetTop - 200, 800)
        })
      })
    }(document.querySelectorAll("[data-anchor]")),
    function(e) {
      e && e.addEventListener("click", function() {
        document.body.classList.add("_fade-cookie");
        var e = new Date;
        e.setTime(e.getTime() + 94608e6), document.cookie = "cookie_disclaimer=true; expires=" + e.toUTCString() + "; path=/"
      }, !1)
    }(document.getElementById("cookie_agree"))
  }
}, ["Yjqb"]);
