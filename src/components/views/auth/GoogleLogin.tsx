'use client';

import { googleSocailLogin } from '@/api/auth';
import { socialBtnWrap, socialBtn, socialText } from './SocialLogin.styles';
import Image from 'next/image';

// TODO : 카카오, 네이버 동일한 화면이므로 하나의 컴포넌트로 활용할 것.
export default function GoogleLogin() {
  // const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  // const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
  // const kakaoLoginHandler = () => {
  //   window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}`;
  // };

  return (
    <div css={socialBtnWrap}>
      <button css={socialBtn} onClick={googleSocailLogin}>
        <Image
          src={'/icon/google_icon.png'}
          alt={'구글 아이콘'}
          width={22}
          height={22}
        />
        {/* <span>구글</span> */}
      </button>
    </div>
  );
}
