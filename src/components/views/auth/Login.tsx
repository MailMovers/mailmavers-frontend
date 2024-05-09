import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';
import useSWR from 'swr';

import KakaoLogin from '@/components/views/auth/KakaoLogin';
import NaverLogin from '@/components/views/auth/NaverLogin';
import GoogleLogin from '@/components/views/auth/GoogleLogin';

import useInput from '@/hooks/useInput';
import { postUserLogin } from '@/api/auth';
import { setToken } from '@/common/axio-interceptor';

import { formDivDefalutMagin } from './Signup.styles';
import { errorMessage } from './SocialLogin.styles';
import {
  wrap,
  title,
  form,
  submitBtn,
  layout,
  socialBtnContainer,
  inputGroup,
  inputLocal,
  socialBtnTitle,
  socialBtn,
  signUpPageBtn,
  isMemberPrompt,
} from './Login.styles';
import { useRecoilState } from 'recoil';
import { tokenAtom } from '@/recoil/auth/atom';

export default function LoginPage() {
  const router = useRouter();
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [token, setTokenState] = useRecoilState(tokenAtom);

  const { data: user } = useSWR(`${process.env.NEXT_PUBLIC_API_HOST}user/info`);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLogInError(false);
      postUserLogin(email, password)
        .then((res) => {
          if (res.status === 200) {
            const { accessToken, refreshToken } = res.data;
            setToken(accessToken, refreshToken);
            setTokenState({ accessToken, refreshToken });

            if (localStorage.getItem('상세페이지에서로그인') === 'true') {
              localStorage.removeItem('상세페이지에서로그인');

              router.push('/letterproducts/letter-product-detail');
            } else {
              router.push('/');
            }
          } else {
            setLogInError(true);
          }
        })
        .catch((error) => {
          console.log(error);
          setLogInError(error.response?.status === 400);
        });
    },
    [email, password]
  );

  if (user) {
    // router.push('/');
    return;
  }

  return (
    <div css={layout}>
      <section>
        <div css={wrap}>
          <h1 css={title}>로그인</h1>
          <form css={form} onSubmit={(e) => onSubmit(e)}>
            <div>
              <div css={inputGroup}>
                <span css={inputLocal}>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={onChangeEmail}
                    ref={emailRef}
                    placeholder='이메일'
                  />
                </span>
              </div>
            </div>
            <div css={formDivDefalutMagin}>
              <div css={inputGroup}>
                <span css={inputLocal}>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    value={password}
                    onChange={onChangePassword}
                    ref={passwordRef}
                    placeholder='비밀번호'
                  />
                </span>
              </div>
            </div>
            {logInError && (
              <p css={errorMessage}>
                이메일과 비밀번호 조합이 일치하지 않습니다.
              </p>
            )}
            <button css={submitBtn} type='submit'>
              로그인
            </button>
          </form>
          <div css={socialBtnContainer}>
            <div css={socialBtnTitle}>SNS 계정으로 간편하게 회원가입</div>
            <div css={socialBtn}>
              <KakaoLogin />
              <GoogleLogin />
              <NaverLogin />
            </div>
          </div>
          <p css={isMemberPrompt}>아직 메일트리 회원이 아니신가요?</p>

          <Link css={signUpPageBtn} href='/signup'>
            회원가입 하러 가기
          </Link>
        </div>
      </section>
    </div>
  );
}
