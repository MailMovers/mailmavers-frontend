/** @jsxImportSource @emotion/react */

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import useSWR from 'swr';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

import { initAxios } from '@/common/axio-interceptor';
import LocalStorage from '@/common/LocalStorage';

import { getUserInfo } from '@/api/auth';

import { tokenAtom } from '@/recoil/auth/atom';
import { userInfoAtom } from '@/recoil/mypage/atom';
import { windowSizeWidthAtom, useWindowSizeEffect } from '@/recoil/width/atom';
import {
  isConfirmPage,
  isEditPage,
  isPaymentPage,
  isPhotoSelectPage,
  isSelectPage,
  isSendPage,
} from '@/utils/routeHelpers';

import { Common } from 'styles/common';

import type { TUserInfo } from '@/type/auth';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const windowSizeWidth = useRecoilValue(windowSizeWidthAtom);

  const isAnyPage = [
    isSelectPage,
    isEditPage,
    isPhotoSelectPage,
    isSendPage,
    isConfirmPage,
    isPaymentPage,
  ].some((checkPage) => checkPage(pathname));

  const [token, setToken] = useRecoilState(tokenAtom);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  useSWR<TUserInfo | null>(
    () => (!!token && !userInfo ? 'getUserInfo' : null),
    getUserInfo,
    {
      fallbackData: null,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      onSuccess: (data) => data && setUserInfo(data),
    }
  );

  const movePage = (path: string) => {
    setIsOpenMenu(false);
    router.push(path);
  };

  useEffect(() => {
    if (!token) {
      const accessToken = LocalStorage.getItem('accessToken');
      const refreshToken = LocalStorage.getItem('refreshToken');

      if (accessToken && refreshToken) {
        setToken({ accessToken, refreshToken });
        initAxios({ accessToken, refreshToken });
      }

      return;
    }

    initAxios();
  }, []);

  useWindowSizeEffect();

  return (
    <>
      <Frame>
        <Wrap>
          <Link href={'/'}>
            <StyledImage src='/images/logo.png' alt='로고'/>
          </Link>

          {windowSizeWidth > 767 ? (
            <div css={btnContainer}>
              {/* <Link href={'/'}>
          <span css={btnText}>공지사항</span>
        </Link> */}
              <div css={mobileBtnWrap}>
                {!token && (
                  <Link href={'/signup'}>
                    <span css={btnText}>회원가입</span>
                  </Link>
                )}

                {!token && (
                  <Link href={'/login'}>
                    <span css={btnText}>로그인</span>
                  </Link>
                )}

                {token && (
                  <Link href={'/logout'}>
                    <span css={btnText}>로그아웃</span>
                  </Link>
                )}

                {token && (
                  <Link href={'/mypage'}>
                    <span css={btnText}>마이페이지</span>
                  </Link>
                )}
              </div>

              {!isAnyPage && (
                <Link href={'/letterproducts'} css={button}>
                  편지쓰기
                </Link>
              )}
            </div>
          ) : (
            <MenuIcon
              width={50}
              height={50}
              alt='햄버거 아이콘'
              onClick={() => setIsOpenMenu(true)}
            />
          )}
        </Wrap>
      </Frame>
      <FrameFixedBox />

      {isOpenMenu && (
        <MobileFrame>
          <MobileTop>
            <StyledImage src='/images/logo.png' alt='로고' />
            <CloseOutlined
              onClick={() => setIsOpenMenu(false)}
              height={44}
              width={44}
            />
          </MobileTop>
          <MoblileBody>
            {userInfo && (
              <>
                <MyInfo>{userInfo?.name}님, 안녕하세요.</MyInfo>
                <Menu onClick={() => movePage('/mypage')}>내 정보 관리</Menu>
                <Menu onClick={() => movePage('/mypage/password')}>
                  비밀번호 관리
                </Menu>
                <Menu onClick={() => movePage('/mypage/address')}>
                  주소관리
                </Menu>
                <Menu onClick={() => movePage('/mypage/history')}>
                  보낸 편지 내역
                </Menu>
                <Menu onClick={() => movePage('/mypage/review')}>내 후기</Menu>
                <Menu onClick={() => movePage('/mypage/inquiry')}>
                  내 1:1 문의
                </Menu>
                <Menu onClick={() => movePage('/mypage/payment')}>
                  포인트 내역
                </Menu>
                <Menu onClick={() => movePage('/logout')}>로그아웃</Menu>
              </>
            )}

            {!userInfo && (
              <>
                <Menu onClick={() => movePage('/signup')}>회원가입</Menu>
                <Menu onClick={() => movePage('/login')}>로그인</Menu>
              </>
            )}
          </MoblileBody>
        </MobileFrame>
      )}
    </>
  );
}

const Frame = styled.div`
  width: 1200px;
  height: 85px;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
;

  @media all and (max-width: 767px) {
    background-color: #fffff0;
    position: fixed;
    top: 0;
    z-index: 10;
  }
`;

const FrameFixedBox = styled.div`
  @media all and (min-width: 1200px),
    all and (min-width: 768px) and (max-width: 1199px) {
    display: none;
  }

  @media all and (max-width: 767px) {
    width: 100%;
    height: 85px;
    z-index: 1;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media all and (min-width: 1200px) {
    min-width: 1200px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
    padding: 0 3em;
  }

  @media all and (max-width: 767px) {
    width: 100%;
    padding: 0 1.5em;
  }
`;

const inputWrap = css`
  width: 285px;
  height: 40px;
  padding: 0 1em;

  border: 1px solid var(--greyD9, #d9d9d9);
  border-radius: 5px;

  input {
    width: 100%;
    height: 100%;
    padding-right: 1em;

    border: 0;

    background: url('/icon/search.svg') no-repeat right;
    background-size: 20px;

    outline: none;
  }
`;

const btnContainer = css`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    cursor: pointer;
  }
`;

const mobileBtnWrap = css`
  display: flex;

  @media all and (min-width: 1200px),
    all and (min-width: 381px) and (max-width: 1199px) {
    align-items: center;
    gap: 20px;
  }

  @media all and (min-width: 351px) and (max-width: 380px) {
    align-items: center;
    gap: 8px;
  }

  @media all and (max-width: 350px) {
    flex-direction: column;
    align-items: end;
  }
`;

const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.25em;
  height: 2.5em;
  flex-shrink: 0;

  border-radius: 5px;
  background: ${Common.colors.yellow};
  color: ${Common.colors.white};
  font-size: ${Common.fontSize.fs14};
  font-weight: 700;
`;

const btnText = css`
  /* @media all and (min-width: 381px) and (max-width: 767px), and (max-width: 380px),  and (max-width: 380px) { */
  @media all and (min-width: 381px) and (max-width: 767px),
    all and (max-width: 380px) {
    font-size: ${Common.fontSize.fs12};
    font-weight: 500;
  }
`;

export const StyledImage = styled.img`
  height: 46px;
  cursor: pointer;
`;

const MenuIcon = styled(MenuOutlined)`
  @media all and (min-width: 480) {
    display: none;
  }
  width: 10%;
  height: 10%;

  font-size: 20px;
`;

const MobileFrame = styled.div`
  position: fixed;
  inset: 0px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  isolation: isolate;
  /* background-color: #f8f6f0; */
  background-color: #fff;
  z-index: 11;
`;
const MobileTop = styled.div`
  height: 85px;
  width: 100%;
  padding: 0 1.2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
`;

const MoblileBody = styled.div`
  height: calc(100% - 85px);

  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
`;

const MyInfo = styled.div`
  padding: 15px;
  color: var(--default, #333);
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Menu = styled.div`
  padding: 15px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #333;
  cursor: pointer;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
`;
