import { selector } from 'recoil';
import { letterContentState } from './atom';

export default selector({
  key: 'letterContentSelector',
  get: async ({ get }) => {
    try {
      const content = get(letterContentState);
      return content;
    } catch (err) {
      throw err;
    }
  },
  set: ({ set }, newContent) => {
    return set(letterContentState, newContent);
  },
});
