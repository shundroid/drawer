import { shallowMount, createLocalVue } from '@vue/test-utils';
import { Store } from 'vuex';
import PageMode from '@/lib/pageMode';
import DPage from '@/components/dPage.vue';
import initVue from '@/lib/initVue';

const localVue = createLocalVue();

describe('dPage', () => {
  beforeAll(() => {
    initVue(localVue);
  });
  it('changes its cursor when pageMode is shaping', () => {
    const store = new Store({
      state: {
        pageMode: PageMode.normal,
      },
    });
    const wrapper = shallowMount(DPage, {
      localVue,
      store,
    });
    const main = wrapper.find('main');
    expect(main.classes('main-shaping')).toBeFalsy();
    store.state.pageMode = PageMode.shaping;
    expect(main.classes('main-shaping')).toBeTruthy();
  });
});
