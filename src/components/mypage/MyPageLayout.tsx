import { useRouter, usePathname } from 'next/navigation';

import * as S from './MyPageLayout.style';

const MyPageLayout = ({ children }: { children?: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const movePage = (path: string) => router.push(path);
  return (
    <S.Wrapper>
        <S.Container>
            <S.PageContainer>
                <S.PageWrapper>
                <S.PageContent
                  selected={pathname === '/mypage/profile' || pathname === '/mypage'}
                  onClick={() => movePage('/mypage/profile')}
                >
                  내 정보 관리
                </S.PageContent>
                </S.PageWrapper>
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