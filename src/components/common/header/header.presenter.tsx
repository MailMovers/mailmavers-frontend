/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import * as S from './header.styles';
import { MenuIcon } from './header.styles';
import type { TUserInfo } from '@/type/auth';
import { UserOutlined, MailOutlined, AlertOutlined, GiftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

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

      {/* 모바일 버전 따로 만드려 했으나 그대로 사이드바로 이용하려 함 */}
      {isOpenMenu && (
        <S.MobileFrame>
          <S.MobileBody>
            {userInfo ? (
              <>
                 <S.MobileWrapper>
                  <S.HeaderContainer>
                    <S.HeaderTitle>{userInfo?.name}님 안녕하세요!</S.HeaderTitle>
                    <S.MobileTop>
                      <CloseOutlined onClick={() => setIsOpenMenu(false)} height={44} width={44} />
                    </S.MobileTop>
                  </S.HeaderContainer>
                  <S.MenuWrapper>
                    <S.MenuContainer>
                      <S.MenuTitle><UserOutlined /> 계정 관리</S.MenuTitle>
                      <S.MenuItem onClick={() => movePage('/mypage/profile')}>내 정보 관리</S.MenuItem>
                      <S.MenuItem onClick={() => movePage('/mypage/password')}>비밀번호 변경</S.MenuItem>
                    </S.MenuContainer>
                    <S.MenuContainer>
                      <S.MenuTitle><MailOutlined /> 내 주문 관리</S.MenuTitle>
                      <S.MenuItem onClick={() => movePage('/mypage/address')}>내 주소 관리</S.MenuItem>
                      <S.MenuItem onClick={() => movePage('/mypage/history')}>보낸 편지 내역</S.MenuItem>
                      <S.MenuItem onClick={() => movePage('/mypage/payment')}>포인트 내역</S.MenuItem>
                      <S.MenuItem onClick={() => movePage('/mypage/review')}>내 후기</S.MenuItem>
                    </S.MenuContainer>
                    <S.MenuContainer>
                      <S.MenuTitle><GiftOutlined /> 상품</S.MenuTitle>
                      <S.MenuItem onClick={() => movePage('/product/list')}>상품 목록</S.MenuItem>
                    </S.MenuContainer>
                    <S.MenuContainer>
                      <S.MenuTitle><AlertOutlined /> 고객센터</S.MenuTitle>
                      <S.MenuItem>공지사항</S.MenuItem>
                      <S.MenuItem>자주 묻는 질문</S.MenuItem>
                      <S.MenuItem onClick={() => movePage('/mypage/inquiry')}>1:1 문의</S.MenuItem>
                    </S.MenuContainer>
                    <S.MenuContainer>
                      <S.MenuItem className='logout' onClick={() => movePage('/logout')}>로그아웃</S.MenuItem>
                    </S.MenuContainer>
                  </S.MenuWrapper>
                </S.MobileWrapper>
              </>
            ) : (
              <>
                <S.HeaderContainer>
                  <S.HeaderTitle>로그인이 필요합니다.</S.HeaderTitle>
                  <S.MobileTop>
                    <CloseOutlined onClick={() => setIsOpenMenu(false)} height={44} width={44} />
                  </S.MobileTop>
                </S.HeaderContainer>
                <S.Menu onClick={() => movePage('/signup')}>회원가입</S.Menu>
                <S.Menu onClick={() => movePage('/login')}>로그인</S.Menu>
                <S.Menu onClick={() => movePage('/product/list')}>상품</S.Menu>
              </>
            )}
          </S.MobileBody>
        </S.MobileFrame>
      )}
    </>
  );
}