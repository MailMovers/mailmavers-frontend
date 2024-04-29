import { atom } from 'recoil';

interface LetterContent {
  writingPadId: number;
  letterId?: number;
  pageNum: number;
  content: string;
}
export const letterContentState = atom<LetterContent[]>({
  key: 'letterContentState',
  default: [],
});

export const loadLetterContentState = atom<LetterContent[]>({
  key: 'loadLetterContentState',
  default: [],
});

export const letterIdState = atom<number | null>({
  key: 'letterIdState',
  default: null,
});

export const letterWritingPadIdState = atom<number | null>({
  key: 'letterWritingPadIdState',
  default: null,
});

export const textLengthState = atom<number>({
  key: 'textLength',
  default: 0,
});

export const usePointState = atom({
  key: 'usePointState',
  default: 0,
});
