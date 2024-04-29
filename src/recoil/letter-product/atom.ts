import { atom } from 'recoil';

export const sortAtom = atom<string>({
  key: 'sortAtom',
  default: '',
});

export const ActiveTabAtom = atom<number>({
  key: 'ActiveTabAtom',
  default: 0,
});

export const productIdAtom = atom<number | null>({
  key: 'productIdAtom',
  default: null,
});

export const loginFromProductAtom = atom<boolean | null>({
  key: 'loginFromProductAtom',
  default: null,
});
