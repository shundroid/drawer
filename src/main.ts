import Vue from 'vue';
import initVue from '@/lib/initVue';
import App from './App.vue';
import makeStore from './store';

initVue(Vue);
Vue.config.productionTip = false;

new Vue({
  store: makeStore(),
  render: (h) => h(App),
}).$mount('#app');
