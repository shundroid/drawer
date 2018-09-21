import Vuex from 'vuex';
import Vue, { VueConstructor } from 'vue';
import iView from 'iview';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShapes, faImage, faICursor } from '@fortawesome/free-solid-svg-icons';
/* tslint:disable:no-var-requires */
const fontawesome = require('@fortawesome/vue-fontawesome');

export default function initVue(Vue: VueConstructor<Vue>) {
  Vue.use(Vuex);
  Vue.use(iView);
  library.add(faShapes, faImage, faICursor);
  Vue.component('fa', fontawesome.FontAwesomeIcon);
}
