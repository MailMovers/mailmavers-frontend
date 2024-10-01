import { atom } from 'recoil';

interface TokenState {
  accessToken: string | null;
  refreshToken: string | null;
}

export const tokenAtom = atom<TokenState>({
  key: 'tokenState' + Date.now(),
  default: {
    accessToken: null,
    refreshToken: null,
  },
});

if (module.hot) {
  module.hot.accept();
}