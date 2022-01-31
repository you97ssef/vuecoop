import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import loading from 'vuejs-loading-screen'
import Gravatar from 'vue-gravatar';

Vue.component('v-gravatar', Gravatar);

Vue.use(loading)

Vue.prototype.$api = axios.create({
    baseURL: "https://allweb.fun/coop/api/",
    params: {},
    headers: { Authorization: "b9a615a02b2596cd29659853bb6fc5ce81a56c3d" },
});

Vue.prototype.$api.interceptors.request.use(function (config) {
    if (store.state.token) {
        config.params.token = store.state.token;
    }
    return config;
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
