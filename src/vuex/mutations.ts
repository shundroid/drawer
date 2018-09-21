import { MutationTree } from 'vuex';
import { RootState } from './state';
import PageMode from '@/lib/pageMode';

const mutations: MutationTree<RootState> = {
  changePageMode(state, pageMode: PageMode) {
    state.pageMode = pageMode;
  },
};

export default mutations;
