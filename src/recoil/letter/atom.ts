import { atom } from 'recoil';

export interface LetterContent {
  writingPadId: number;
  letterId?: number;
  pageNum: number;
  content: string;
}
export const letterContentState = atom<LetterContent[]>({
  key: 'letterContentState',
  default: [],
});

export interface TLetterWrite {
  pageNum: number;
  content: string;
}
export const letterWriteList = atom<TLetterWrite[]>({
  key: 'letterWriteList',
  default: [
    {
      pageNum: 1,
      content: '',
    },
    {
      pageNum: 2,
      content: '',
    },
    {
      pageNum: 3,
      content: '',
    },
    {
      pageNum: 4,
      content: '',
    },
    {
      pageNum: 5,
      content: '',
    },
  ],
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
