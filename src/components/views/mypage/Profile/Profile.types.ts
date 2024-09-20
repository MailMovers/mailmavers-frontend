import { ChangeEvent } from "react";
import { TUserInfo } from "@/type/auth";

export interface IProfileProps {
  contextHolder: React.ReactElement;
  isMutating: boolean;
  userEditInfo: TUserInfo;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  msgError: string;
  movePasswordChange: () => void;
  userInfo: TUserInfo | null;
}