import { atom } from 'recoil';

const exampleAtom = atom<{ name: string; value: string }>({
  key: 'exampleAtom',
  default: {
    name: 'example',
    value: 'Example Value!',
  },
});

export default exampleAtom;
