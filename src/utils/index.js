/**
 * @description 房后函数
 * @param {Function} func 要实行的函数
 * @param {Number} wait 防抖时间
 * @param {Boolean} immediate 是否先立即执行一次函数
 */
function debounce(func, wait, immediate = false) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer !== null) {
      clearTimeout(timer);
    }
    if (immediate) {
      const callNow = !timer;
      timer = setTimeout(() => {
        func.apply(context, args);
      }, wait);
      if (callNow) {
        func.apply(context, args);
      }
    } else {
      timer = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}

function throttle(func, wait) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        func.apply(context, args);
      }, wait);
    }
  };
}

export default {
  debounce,
  throttle,
};
