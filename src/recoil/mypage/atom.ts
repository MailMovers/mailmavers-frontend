import { TUserInfo } from '@/type/auth';
import { atom } from 'recoil';

export const userInfoAtom = atom<TUserInfo | null>({
  key: 'userInfoAtom',
  default: null,
});
