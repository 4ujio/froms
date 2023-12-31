import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//axios
import { apiGet, apiPost } from "../api/api";
Vue.prototype.$apiGet = apiGet;
Vue.prototype.$apiPost = apiPost;

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

//element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
