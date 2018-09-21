import Vuex from 'vuex';
import Vue, { VueConstructor } from 'vue';
/* tslint:disable:no-var-requires */
const iView = require('iview');

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShapes, faImage, faICursor } from '@fortawesome/free-solid-svg-icons';
/* tslint:disable:no-var-requires */
const fontawesome = require('@fortawesome/vue-fontawesome');

export default function initVue(vue: VueConstructor<Vue>) {
  vue.use(Vuex);
  vue.use(iView);
  library.add(faShapes, faImage, faICursor);
  vue.component('fa', fontawesome.FontAwesomeIcon);
}
