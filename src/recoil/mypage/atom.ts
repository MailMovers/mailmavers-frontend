import { atom } from 'recoil';
import type { TUserInfo } from '@/type/auth';

export const userInfoAtom = atom<TUserInfo | null>({
  key: 'uniqueUserInfoAtom',
  default: null,
});

if (module.hot) {
  module.hot.accept();
}