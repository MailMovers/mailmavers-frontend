import { RecoilState, atom, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';

const getWindowWidth = () => (typeof window !== 'undefined' ? window.innerWidth : 0);

export const windowSizeWidthAtom: RecoilState<number> = atom({
  key: 'windowSizeWidthAtom',
  default: 0,
});

export const useWindowSizeEffect = () => {
  const setWindowSizeWidth = useSetRecoilState(windowSizeWidthAtom);

  useEffect(() => {
    setWindowSizeWidth(getWindowWidth());

    const handleResize = () => {
      setWindowSizeWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWindowSizeWidth]);
};
