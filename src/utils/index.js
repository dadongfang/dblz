export const getSingle = function (fn) {
  var result;
  return function () {
    return result || (result = fn.apply(this, arguments));
  };
};

export var addEvent = function (elem, type, handler) {
  if (window.addEventListener) {
    addEvent = function (elem, type, handler) {
      elem.addEventListener(type, handler, false);
    };
  } else if (window.attachEvent) {
    addEvent = function (elem, type, handler) {
      elem.attachEvent('on' + type, handler);
    };
  }
  addEvent(elem, type, handler);
};

export const ossImg = function (src) {
  return 'https://wehome-image-prd.oss-cn-hangzhou.aliyuncs.com/' + src
};
