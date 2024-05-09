import { atom } from 'recoil';

type TToken = {
  accessToken: string;
  refreshToken: string;
};

export const tokenAtom = atom<TToken | null>({
  key: 'tokenAtom',
  default: null,
});
