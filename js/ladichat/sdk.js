"use strict";
var LADICHAT_SDK_URL = "https://w.ladicdn.com/ladichat/ladichat.min.js";
!(function () {
  var i = document.currentScript,
    t = new Date().getTime(),
    e = document.createElement("script");
  (e.src = window.LADICHAT_SDK_URL + "?ver=" + t),
    (e.onload = function () {
      var t = i.id,
        e = t,
        n = i.getAttribute("wg");
      t.indexOf("_") >= 0 && ((e = t.split("_")[0]), (n = t.split("_")[1])),
        void 0 === window.LadiChat
          ? (window.LadiChat = new _LadiChat())
          : (window.LadiChat = new _LadiChat(window.LadiChat)),
        (window.LadiChat_Helper = new BaseHelper()),
        (window.LadiChat_Config = new ConfigWidget()),
        (window.LadiChat_Static_Config = new StaticConfig()),
        window.LadiChat.init({ widget_id: n, store_id: e, version: "v1.0" });
    }),
    (e.async = !0);
  var n = document.querySelector(
    'script[src^="' + window.LADICHAT_SDK_URL + '"]'
  );
  (null != n && null != n) ||
    document.getElementsByTagName("head")[0].appendChild(e);
})();
