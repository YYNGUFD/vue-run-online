 
import VueRunOnline from "./vue-run-sfc";

const install = function(Vue, options = {}) {
  Vue.component("vue-run-online", VueRunOnline);
  Vue.prototype.$VueRunOnline= options;
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install
};

export { VueRunOnline };
