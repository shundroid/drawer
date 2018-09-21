import { Store } from 'vuex';

import state from './vuex/state';
import mutations from './vuex/mutations';

export default function makeStore() {
  return new Store({
    state,
    mutations,
    actions: {

    },
  });
}
