import { selector } from 'recoil';
import exampleAtom from './atom';

const exampleWithParens = selector({
  key: 'exampleWithParens',
  get: ({ get }) => `Adding parens: (${get(exampleAtom).value})`,
  set: ({ get, set }, newValue) => {
    if (typeof newValue === 'string') {
      set(exampleAtom, { ...get(exampleAtom), value: newValue });
    }
  },
});

export default exampleWithParens;
