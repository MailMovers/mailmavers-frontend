import type { ChangeEvent, Dispatch, SetStateAction } from "react";


export interface IBoardCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: any;

}

export interface IBoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: () => void;
  onClickUpdate: () => void;
  writer: string;
  password: string;
  contents: string;
  setStar: Dispatch<SetStateAction<number>>;
  isEdit?: boolean;
  el?: any; 
}
