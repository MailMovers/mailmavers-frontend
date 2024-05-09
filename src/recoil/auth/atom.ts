import LocalStorage from '@/common/LocalStorage';
import { atom } from 'recoil';

type TToken = {
  accessToken: string;
  refreshToken: string;
};

const getData = () => {
  if (LocalStorage.getItem('accessToken')) {
    return {
      accessToken: LocalStorage.getItem('accessToken') || '',
      refreshToken: LocalStorage.getItem('refreshToken') || '',
    };
  } else {
    return null;
  }
};

export const tokenAtom = atom<TToken | null>({
  key: 'tokenAtom',
  default: {
    accessToken: LocalStorage.getItem('accessToken') || '',
    refreshToken: LocalStorage.getItem('refreshToken') || '',
  },
});
