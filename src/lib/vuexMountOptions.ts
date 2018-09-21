import Vue, { VueConstructor } from 'vue';
import { ThisTypedShallowMountOptions } from '@vue/test-utils';

export class VuexShallowMountOptions<V extends Vue> implements ThisTypedShallowMountOptions<V> {
  localVue!: VueConstructor<V>
  store: any
}
