/* eslint-disable */

function webpSupported() {
  var webpSupported = false;
  (function () {
    var img = new Image();
    img.onload = function () {
      webpSupported = !!(img.height > 0 && img.width > 0);
    };
    img.onerror = function () {
      webpSupported = false;
    };
    img.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';
  })();
}

export { webpSupported };
