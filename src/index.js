import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import "./style/reset.less";

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
