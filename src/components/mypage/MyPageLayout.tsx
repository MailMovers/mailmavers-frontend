import { useRouter, usePathname } from 'next/navigation';
import useSWR from 'swr';
import { useRecoilState, useRecoilValue } from 'recoil';

import { getUserInfo } from '@/api/auth';
import { tokenAtom } from '@/recoil/auth/atom';
import { userInfoAtom } from '@/recoil/mypage/atom';
import type { TUserInfo } from '@/type/auth';
import { windowSizeWidthAtom } from '@/recoil/width/atom';

import * as S from './MyPageLayout.style';

const MyPageLayout = ({ children }: { children?: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const windowSizeWidth = useRecoilValue(windowSizeWidthAtom);

  const token = useRecoilValue(tokenAtom);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

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

  const movePage = (path: string) => router.push(path);
  return (
    <S.Wrap>
      {windowSizeWidth > 767 && (
        <S.TopWrap>
          <S.TopContent>
            <S.TopTitle>{userInfo?.name}이윤재 님, 안녕하세요.</S.TopTitle>
            <S.PageContainer>
              <div className='page_responsive'>
                <S.PageContent
                  selected={pathname === '/mypage'}
                  onClick={() => movePage('/mypage')}
                >
                  내 정보 관리
                </S.PageContent>
                <S.PageContent
                  selected={pathname === '/mypage/password'}
                  onClick={() => movePage('/mypage/password')}
                >
                  비밀번호 변경
                </S.PageContent>
                <S.PageContent
                  selected={pathname === '/mypage/address'}
                  onClick={() => movePage('/mypage/address')}
                >
                  주소관리
                </S.PageContent>
              </div>

              <div className='page_responsive'>
                <S.PageContent
                  selected={pathname.includes('/mypage/history')}
                  onClick={() => movePage('/mypage/history')}
                >
                  보낸 편지 내역
                </S.PageContent>
                <S.PageContent
                  selected={pathname === '/mypage/review'}
                  onClick={() => movePage('/mypage/review')}
                >
                  내 후기
                </S.PageContent>
                <S.PageContent
                  selected={pathname === '/mypage/inquiry'}
                  onClick={() => movePage('/mypage/inquiry')}
                >
                  내 1:1 문의
                </S.PageContent>
                <S.PageContent
                  selected={pathname === '/mypage/payment'}
                  onClick={() => movePage('/mypage/payment')}
                >
                  포인트 내역
                </S.PageContent>
              </div>
            </S.PageContainer>
          </S.TopContent>
        </S.TopWrap>
      )}

      <S.BodyWrap>
        <S.BodyContent>{children}</S.BodyContent>
      </S.BodyWrap>
    </S.Wrap>
  );
};

export default MyPageLayout;
