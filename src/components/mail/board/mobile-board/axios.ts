import axios, { AxiosResponse } from 'axios';
import {LetterContent} from './types'


type TResonse = {
  [x: string]: any;
  message: string;
  success?: string;
};

type letterData = {
    contents: LetterContent[];
};

export const postMobileLetterContent = async (letterData: letterData) => {
   await axios.post(
      `letters/`,
      letterData
    );
    return;
  };