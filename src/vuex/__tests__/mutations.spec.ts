import mutations from '@/vuex/mutations';
import PageMode from '@/lib/pageMode';

describe('mutations', () => {
  it('changes pageMode when changePageMode was committed', () => {
    const state = {
      pageMode: PageMode.normal
    };
    const afterPageMode = PageMode.shaping;
    mutations.changePageMode(state, afterPageMode);
    expect(state.pageMode).toEqual(afterPageMode);
  });
});
