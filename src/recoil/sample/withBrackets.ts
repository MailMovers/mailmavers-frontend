import { selector } from 'recoil';
import exampleAtom from './atom';

const exampleWithBrackets = selector({
  key: 'exampleWithBrackets',
  get: ({ get }) => `Adding brackets: [${get(exampleAtom).value}]`,
  set: ({ get, set }, newValue) => {
    if (typeof newValue === 'string') {
      set(exampleAtom, { ...get(exampleAtom), value: newValue });
    }
  },
});

export default exampleWithBrackets;
