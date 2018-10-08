import { shallowMount, createLocalVue } from '@vue/test-utils';
import DAddingShape from '@/components/dRect.vue';
import initVue from '@/lib/initVue';

const localVue = createLocalVue();

describe('dAddingShape', () => {
  beforeAll(() => {
    initVue(localVue);
  });
  it('changes its size correctly with its props', () => {
    const wrapper = shallowMount(DAddingShape, {
      localVue,
      propsData: {
        beginX: 10,
        beginY: 20,
        endX: 0,
        endY: 1000
      },
    });
    expect(wrapper.attributes("x")).toBe("0");
    expect(wrapper.attributes("y")).toBe("20");
    expect(wrapper.attributes("width")).toBe("10");
    expect(wrapper.attributes("height")).toBe("980");
  });
});
