import { shallowMount, createLocalVue } from '@vue/test-utils';
import { Store } from 'vuex';
import DHeader from '@/components/dHeader.vue';
import initVue from '@/lib/initVue';
import PageMode from '@/lib/pageMode';

const localVue = createLocalVue();

describe('dHeader', () => {
  beforeAll(() => {
    initVue(localVue);
  });
  it('commits changePageMode when the shape button is clicked', () => {
    const changePageModeSpy = jest.fn();
    const store = new Store({
      mutations: {
        changePageMode: changePageModeSpy,
      },
    });
    const wrapper = shallowMount(DHeader, {
      localVue,
      store,
    });
    const shapes = wrapper.find('#shapesButton');
    shapes.trigger('click');
    expect(changePageModeSpy).toBeCalledWith({}, PageMode.shaping);
  });
  it('changes classes of shapesButton when pageMode is changed', () => {
    const store = new Store({
      state: {
        pageMode: PageMode.normal
      }
    });
    const wrapper = shallowMount(DHeader, { localVue, store });
    const shapes = wrapper.find('#shapesButton');
    expect(shapes.classes('shapes-button-active')).toBeFalsy();
    store.state.pageMode = PageMode.shaping;
    expect(shapes.classes('shapes-button-active')).toBeTruthy();
  });
});
