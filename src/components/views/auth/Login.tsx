import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';
import useSWR from 'swr';
import { useRecoilState } from 'recoil';

import KakaoLogin from '@/components/views/auth/KakaoLogin';
import NaverLogin from '@/components/views/auth/NaverLogin';

import useInput from '@/hooks/useInput';
import { postUserLogin } from '@/api/auth';
import { setToken } from '@/common/axio-interceptor';
import { tokenAtom } from '@/recoil/auth/atom';

import { ErrorMessage } from './SocialLogin.styles';
import * as S from './Login.styles';

export default function LoginPage() {
  const router = useRouter();

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [IdErrorMsg, setIdErrorMsg] = useState('');
  const [PwErrorMsg, setPwErrorMsg] = useState('');

  const [token, setTokenState] = useRecoilState(tokenAtom);

  const { data: user } = useSWR(`${process.env.NEXT_PUBLIC_API_HOST}user/info`);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!email) {
        setIdErrorMsg('이메일을 작성해주세요.');
        return;
      }

      if (!password) {
        setPwErrorMsg('비밀번호를 작성해주세요.');
        return;
      }

      postUserLogin(email, password)
        .then((res) => {
          if (res.status === 201) {
            const { accessToken, refreshToken } = res.data;
            setToken(accessToken, refreshToken);
            setTokenState({ accessToken, refreshToken });
            console.log('로그인 성공');

            if (localStorage.getItem('상세페이지에서로그인') === 'true') {
              localStorage.removeItem('상세페이지에서로그인');

              router.push('/letterproducts/letter-product-detail');
            } else {
              router.push('/');
            }
          }
        })
        .catch((error) => {
          console.log(error);
          setIdErrorMsg(error.response?.data?.message as string);
        });
    },
    [email, password]
  );

  console.log('user', user);
  if (user) {
    router.push('/');
    return;
  }

  return (
    <S.Layout>
      <section>
        <S.Wrap>
          <S.TitleContainer>
            <S.Title>Mailtree</S.Title>
            <S.SubTitle>마음을 전하다</S.SubTitle>
          </S.TitleContainer>
          <S.Form onSubmit={(e) => onSubmit(e)}>
            <div>
              <S.InputGroup>
                <S.InputLocal>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={onChangeEmail}
                    ref={emailRef}
                    placeholder='이메일'
                  />
                </S.InputLocal>
              </S.InputGroup>
            </div>
            {IdErrorMsg && <ErrorMessage>{IdErrorMsg}</ErrorMessage>}
            <div>
              <S.InputGroup>
                <S.InputLocal>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    value={password}
                    onChange={onChangePassword}
                    ref={passwordRef}
                    placeholder='비밀번호'
                  />
                </S.InputLocal>
              </S.InputGroup>
            </div>
            {PwErrorMsg && <ErrorMessage>{PwErrorMsg}</ErrorMessage>}
            <S.SubmitBtn type='submit'>
              <S.SubmitBtnText>로그인</S.SubmitBtnText>
            </S.SubmitBtn>
          </S.Form>
          <S.SocialBtnContainer>
            <S.SocialBtnTitle>SNS 계정으로 간편하게 회원가입</S.SocialBtnTitle>
            <S.SocialBtn>
              <NaverLogin />
              <KakaoLogin />
            </S.SocialBtn>
          </S.SocialBtnContainer>
          <S.IsMemberPrompt>아직 메일트리 회원이 아니신가요?</S.IsMemberPrompt>

          <S.SignUpPageBtn href='/signup'>회원가입 하러 가기</S.SignUpPageBtn>
        </S.Wrap>
      </section>
    </S.Layout>
  );
}