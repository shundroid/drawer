import PageMode from '@/lib/pageMode';

export interface RootState {
  pageMode: PageMode;
}

const state: RootState = {
  pageMode: PageMode.normal,
};

export default state;
