import { useRouter, usePathname } from 'next/navigation';
import useSWR from 'swr';
import { useRecoilState, useRecoilValue } from 'recoil';

import { getUserInfo } from '@/api/auth';
import { tokenAtom } from '@/recoil/auth/atom';
import { userInfoAtom } from '@/recoil/mypage/atom';
import type { TUserInfo } from '@/type/auth';

import * as S from './MyPageLayout.style';

const MyPageLayout = ({ children }: { children?: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  // const token = useRecoilValue<{ accessToken: string; refreshToken: string } | null>(tokenAtom);
  // const [userInfo, setUserInfo] = useRecoilState<TUserInfo | null>(userInfoAtom);

  // useSWR<TUserInfo | null>(
  //   () => (!!token && !userInfo ? 'getUserInfo' : null),
  //   getUserInfo,
  //   {
  //     fallbackData: null,
  //     revalidateOnFocus: false,
  //     revalidateOnReconnect: false,
  //     onSuccess: (data: TUserInfo | null) => {
  //       if (data) {
  //         setUserInfo(data);
  //       }
  //     },
  //   }
  // );

  const movePage = (path: string) => router.push(path);
  return (
    <S.Wrapper>
        <S.Container>
            {/* <S.TopTitle>{userInfo?.name}테스트 님, 안녕하세요.</S.TopTitle> */}
            <S.PageContainer>
                <S.PageWrapper>
                <S.PageContent
                  selected={pathname === '/mypage/profile'}
                  onClick={() => movePage('/mypage/profile')}
                >
                  내 정보 관리
                </S.PageContent>
                </S.PageWrapper>
                {/* <S.PageWrapper>
                <S.PageContent
                  selected={pathname === '/mypage/password'}
                  onClick={() => movePage('/mypage/password')}
                >
                  비밀번호 변경
                </S.PageContent>
                </S.PageWrapper> */}
                <S.PageWrapper>
                <S.PageContent
                  selected={pathname === '/mypage/address'}
                  onClick={() => movePage('/mypage/address')}
                >
                  주소관리
                </S.PageContent>
                </S.PageWrapper>
                <S.PageWrapper>
                <S.PageContent
                  selected={pathname.includes('/mypage/history')}
                  onClick={() => movePage('/mypage/history')}
                >
                  보낸 편지 내역
                </S.PageContent>
                </S.PageWrapper>
                <S.PageWrapper>
                <S.PageContent
                  selected={pathname === '/mypage/review'}
                  onClick={() => movePage('/mypage/review')}
                >
                  내 후기
                </S.PageContent>
                </S.PageWrapper>
                <S.PageWrapper>
                <S.PageContent
                  selected={pathname === '/mypage/inquiry'}
                  onClick={() => movePage('/mypage/inquiry')}
                >
                  내 1:1 문의
                </S.PageContent>
                </S.PageWrapper>
                <S.PageWrapper>
                <S.PageContent
                  selected={pathname === '/mypage/payment'}
                  onClick={() => movePage('/mypage/payment')}
                >
                  포인트 내역
                </S.PageContent>
                </S.PageWrapper>
            </S.PageContainer>
            <S.BodyWrap>
              <S.BodyContent>{children}</S.BodyContent>
            </S.BodyWrap>
        </S.Container>
    </S.Wrapper>
  );
};

export default MyPageLayout;