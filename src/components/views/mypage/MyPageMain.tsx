import { useRecoilValue } from 'recoil';
import * as S from './MyPageMain.styles';
import ProfilePageContainer from './Profile/Profile.container';
import { useMediaQuery } from 'react-responsive';
import { userInfoAtom } from '@/recoil/mypage/atom';
import { UserOutlined, MailOutlined, AlertOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';


export default function MyPageMain() {
 const router = useRouter();
  
  const mobile = useMediaQuery({ query: '(max-width: 768px)' });
  const userInfo = useRecoilValue(userInfoAtom);

  const onClickMenu = (path: string) => {
    router.push(path);
  }

  return (
    <>
    {mobile ?
    <S.MobileWrapper>
      <S.HeaderContainer>
        <S.HeaderTitle>{userInfo?.name}테스트 님 안녕하세요!</S.HeaderTitle>
      </S.HeaderContainer>
      <S.MenuWrapper>
        <S.MenuContainer>
          <S.MenuTitle><UserOutlined /> 계정 관리</S.MenuTitle>
          <S.MenuItem onClick={() => onClickMenu('/mypage/profile')}>내 정보 관리</S.MenuItem>
          <S.MenuItem onClick={() => onClickMenu('/mypage/password')}>비밀번호 변경</S.MenuItem>
        </S.MenuContainer>
        <S.MenuContainer>
          <S.MenuTitle><MailOutlined /> 내 주문 관리</S.MenuTitle>
          <S.MenuItem onClick={() => onClickMenu('/mypage/address')}>내 주소 관리</S.MenuItem>
          <S.MenuItem onClick={() => onClickMenu('/mypage/history')}>보낸 편지 내역</S.MenuItem>
          <S.MenuItem onClick={() => onClickMenu('/mypage/payment')}>포인트 내역</S.MenuItem>
          <S.MenuItem onClick={() => onClickMenu('/mypage/review')}>내 후기</S.MenuItem>
        </S.MenuContainer>
        <S.MenuContainer>
          <S.MenuTitle><AlertOutlined /> 고객센터</S.MenuTitle>
          <S.MenuItem>공지사항</S.MenuItem>
          <S.MenuItem>자주 묻는 질문</S.MenuItem>
          <S.MenuItem onClick={() => onClickMenu('/mypage/inquiry')}>1:1 문의</S.MenuItem>
        </S.MenuContainer>
      </S.MenuWrapper>
    </S.MobileWrapper>
    :
    <S.Wrapper>
      <ProfilePageContainer />
    </S.Wrapper>
     }
     
    </>
  );
}
