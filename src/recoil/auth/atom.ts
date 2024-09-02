import { atom } from 'recoil';

export interface TokenState {
  accessToken: string;
  refreshToken: string;
}

export const tokenAtom = atom<TokenState | null>({
  key: 'tokenAtom',
  default: null,
});

if (module.hot) {
  module.hot.accept();
}