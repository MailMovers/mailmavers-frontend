'use client';

import { naverSocailLogin } from '@/api/auth';
import * as S from './SocialLogin.styles';
import Image from 'next/image';

export default function NaverLogin() {
  // const NAVER_REDIRECT_URI = process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI;
  // const NAVER_STATE_TOKEN = process.env.NEXT_PUBLIC_NAVER_STATE_TOKEN;
  // const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  // const naverLoginHandler = () => {
  //   window.location.href = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&response_type=code&redirect_uri=${NAVER_REDIRECT_URI}&state=${NAVER_STATE_TOKEN}`;
  // };

  return (
    <S.SocialBtnWrap>
      <S.SocialBtn onClick={naverSocailLogin}>
        <Image
          src={'/icon/naver_icon_reverse.png'}
          alt={'네이버 아이콘'}
          width={50}
          height={50}
        />
        {/* <span>네이버</span> */}
      </S.SocialBtn>
    </S.SocialBtnWrap>
  );
}
