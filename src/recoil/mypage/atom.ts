import { atom } from 'recoil';

export const userInfoAtom = atom({
  key: 'userInfoAtom',
  default: null,
});

if (module.hot) {
  module.hot.accept();
}