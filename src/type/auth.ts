export type TToken = {
  accessToken: string;
  refreshToken: string;
} | null; // null을 허용하도록 수정

export type TUserInfo = {
  name: string; //'박현민';
  email: string; //'test0123@naver.com';
  phone: string; // '01012345678';
  created_at: string; // 2023-12-19T14:27:55.000Z
};
