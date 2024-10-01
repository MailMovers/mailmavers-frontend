import Loading from '@/components/common/Loading';
import * as S from 'src/components/views/mypage/Profile/Profile.styles'
import { IProfileProps } from './Profile.types';

export default function ProfilePageUI (props: IProfileProps):JSX.Element {
    return (
        <>
          {props.contextHolder}
          <Loading spinning={props.isMutating} />
          <S.Wrap>
              <S.TitleContainer>
                <S.Title>안녕하세요! {props.userInfo?.name} 님</S.Title>
                <S.SubTitle>이곳은 <S.TitleContent>내 정보 관리</S.TitleContent> 입니다.</S.SubTitle>
              </S.TitleContainer>
              <S.Content>
                <S.InputContainer>
                  <S.InputContent>
                    <S.DataTitle>성함</S.DataTitle>
                    <span className='info'>{props.userInfo?.name}</span>
                </S.InputContent>
                <S.InputContent>
                  <S.DataTitle>이메일</S.DataTitle>
                  <span className='info'>{props.userInfo?.email}</span>
                </S.InputContent>
                <S.InputContent>
                  <S.DataTitle>비밀번호</S.DataTitle>
                  <span className='info' style={{width: '150px', paddingTop: '18px', marginLeft: '20px'}}>********</span>
                  <S.PasswordChangeBtn onClick={props.movePasswordChange}>변경</S.PasswordChangeBtn>
                </S.InputContent>
                <S.InputContent>
                  <S.DataTitle>가입일</S.DataTitle>
                  <span className='info'>
                    {props.userInfo?.createdAt &&
                      new Date(props.userInfo.createdAt).toLocaleString()}
                  </span>
                </S.InputContent>
                <S.InputContent>
                  <S.DataTitle>전화번호</S.DataTitle>
                  <input
                    id='phone'
                    onChange={props.handleInput}
                    value={props.userInfo?.phone}
                  />
                </S.InputContent>
              </S.InputContainer>
              <S.Button onClick={props.onSubmit}>저장하기</S.Button>
                {props.msgError && <S.ErrorWrap>{props.msgError}</S.ErrorWrap>}
              </S.Content>
            </S.Wrap>
        </>
      );
}