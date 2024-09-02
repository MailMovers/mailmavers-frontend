import { atom } from 'recoil';

export const tokenAtom = atom({
  key: 'tokenAtom',
  default: null,
});

if (module.hot) {
  module.hot.accept();
}