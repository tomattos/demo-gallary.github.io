import Vue from "vue";
import App from "./App.vue";

import "./assets/style/index.css";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
