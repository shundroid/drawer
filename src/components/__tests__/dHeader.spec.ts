import { shallowMount, createLocalVue } from '@vue/test-utils';
import { VuexShallowMountOptions } from '@/lib/vuexMountOptions';
import Vue from 'vue';
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
    const options: VuexShallowMountOptions<Vue> = {
      localVue,
      store: new Store({
        mutations: {
          changePageMode: changePageModeSpy,
        },
      }),
    };
    const wrapper = shallowMount(DHeader, options);
    const shapes = wrapper.find('#shapesButton');
    shapes.trigger('click');
    expect(changePageModeSpy).toBeCalledWith({}, PageMode.shaping);
  });
});
