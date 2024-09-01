import Loading from '@/components/common/Loading';
import MyPageLayout from '@/components/mypage/MyPageLayout';
import * as S from 'src/components/views/mypage/Profile/Profile.styles'

export default function ProfilePageUI (props: any):JSX.Element {
    return (
        <>
          {props.contextHolder}
          <Loading spinning={props.isMutating} />
    
          <MyPageLayout>
            <S.Content>
              <p>내 정보 관리</p>
    
              <S.InputContainer>
                <S.InputContent>
                  <span>성함</span>
                  <span className='info'>{props.userEditInfo?.name}</span>
                </S.InputContent>
    
                <S.InputContent>
                  <span>이메일</span>
                  <span className='info'>{props.userEditInfo?.email}</span>
                </S.InputContent>
                <S.InputContent>
                  <span>가입일</span>
                  <span className='info'>
                    {props.userEditInfo.created_at &&
                      new Date(props.userEditInfo.created_at).toLocaleString()}
                  </span>
                </S.InputContent>
    
                <S.InputContent>
                  <span>전화번호</span>
                  <input
                    id='phone'
                    onChange={props.handleInput}
                    value={props.userEditInfo?.phone}
                  />
                </S.InputContent>
              </S.InputContainer>
              <S.Button onClick={props.onSubmit}>저장하기</S.Button>
                {props.msgError && <S.ErrorWrap>{props.msgError}</S.ErrorWrap>}
            </S.Content>
          </MyPageLayout>
        </>
      );
}