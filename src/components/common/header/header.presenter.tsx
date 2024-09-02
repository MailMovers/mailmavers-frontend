/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import * as S from './header.styles';
import { MenuIcon } from './header.styles';
import type { TUserInfo } from '@/type/auth';

interface HeaderPresenterProps {
  isOpenMenu: boolean;
  setIsOpenMenu: (isOpen: boolean) => void;
  userInfo: TUserInfo | null;
  movePage: (path: string) => void;
  token: string | null;
}

export default function HeaderPresenter({ isOpenMenu, setIsOpenMenu, userInfo, movePage, token }: HeaderPresenterProps) {
  return (
    <>
      <S.Frame>
        <S.Wrap>
          <Link href={'/'}>
            <S.StyledImage src='/images/logo.png' alt='로고'/>
          </Link>
          <S.BtnContainer>
            <S.MobileBtnWrap>
              {!token && (
                <Link href={'/signup'}>
                  <S.button2>회원가입</S.button2>
                </Link>
              )}
              {!token && (
                <Link href={'/login'}>
                  <S.button2>로그인</S.button2>
                </Link>
              )}
              {token && (
                <Link href={'/logout'}>
                  <S.button>로그아웃</S.button>
                </Link>
              )}
              {token && (
                <Link href={'/mypage'}>
                  <S.button>마이페이지</S.button>
                </Link>
              )}
            </S.MobileBtnWrap>
          </S.BtnContainer>
          </S.Wrap>
          <MenuIcon
            width={50}
            height={50}
            alt='햄버거 아이콘'
            onClick={() => setIsOpenMenu(true)}
          />
      </S.Frame>

      {isOpenMenu && (
        <S.MobileFrame>
          <S.MobileTop>
            <S.StyledImage src='/images/logo.png' alt='로고' />
            <CloseOutlined onClick={() => setIsOpenMenu(false)} height={44} width={44} />
          </S.MobileTop>
          <S.MoblileBody>
            {userInfo ? (
              <>
                <S.MyInfo>{userInfo.name}님, 안녕하세요.</S.MyInfo>
                <S.Menu onClick={() => movePage('/mypage')}>내 정보 관리</S.Menu>
                <S.Menu onClick={() => movePage('/mypage/password')}>비밀번호 관리</S.Menu>
                <S.Menu onClick={() => movePage('/mypage/address')}>주소관리</S.Menu>
                <S.Menu onClick={() => movePage('/mypage/history')}>보낸 편지 내역</S.Menu>
                <S.Menu onClick={() => movePage('/mypage/review')}>내 후기</S.Menu>
                <S.Menu onClick={() => movePage('/mypage/inquiry')}>내 1:1 문의</S.Menu>
                <S.Menu onClick={() => movePage('/mypage/payment')}>포인트 내역</S.Menu>
                <S.Menu onClick={() => movePage('/logout')}>로그아웃</S.Menu>
              </>
            ) : (
              <>
                <S.Menu onClick={() => movePage('/signup')}>회원가입</S.Menu>
                <S.Menu onClick={() => movePage('/login')}>로그인</S.Menu>
              </>
            )}
          </S.MoblileBody>
        </S.MobileFrame>
      )}
    </>
  );
}