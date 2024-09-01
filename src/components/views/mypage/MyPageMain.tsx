import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { useRecoilValue } from 'recoil';
import { Modal } from 'antd';
import { AxiosError } from 'axios';
import { putPhone } from '@/api/mypage';

import MyPageLayout from '@/components/mypage/MyPageLayout';
import Loading from '@/components/common/Loading';

import { userInfoAtom } from '@/recoil/mypage/atom';

import type { ChangeEvent } from 'react';
import type { TUserInfo } from '@/type/auth';
import type { TResMsg } from '@/type/common';
import type { TPhone } from '@/api/mypage';

import * as S from './MyPageMain.styles';

export default function MyPageMain() {
  const [modal, contextHolder] = Modal.useModal();

  const { trigger, isMutating } = useSWRMutation(
    '/user/update-phone',
    putPhone,
    {
      onSuccess: (res) => {
        modal.success({
          title: '정보 변경 완료',
          content: '정보를 변경하였습니다.',
        });
        setUserEditInfo({ ...DEFAULT_INFO, ...userInfo });
      },
      onError: (res: AxiosError<TResMsg>) => {
        modal.error({
          title: '정보 변경 실패',
          content: res.response?.data.message,
        });
        setMsgError(
          res.response?.data.message || '예상치 못한 에러가 발생했습니다.'
        );
      },
    }
  );

  const userInfo = useRecoilValue(userInfoAtom);

  const [userEditInfo, setUserEditInfo] = useState<TUserInfo>(DEFAULT_INFO);
  const [msgError, setMsgError] = useState<string>('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setUserEditInfo({ ...userEditInfo, phone: e.target.value });
    }
    if (regexNumber.test(e.target.value)) {
      const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
      setUserEditInfo({ ...userEditInfo, phone: onlyNumber });
    }
    return;
  };
  
  const onSubmit = () => {
    if (!userEditInfo.phone) {
      setMsgError('전화번호를 입력해주세요.');
      return;
    }
  
    const params: TPhone = {
      newPhone: userEditInfo.phone,
    };
  
    trigger(params);
  };

  useEffect(() => {
    if (userInfo) setUserEditInfo({ ...userEditInfo, ...userInfo });
  }, [userInfo]);

  return (
    <>
      {contextHolder}
      <Loading spinning={isMutating} />

      <MyPageLayout>
        <>여기는 헤더</>
        <S.Content>
          <p>내 정보 관리</p>

          <S.InputContainer>
            <S.InputContent>
              <span>성함</span>
              <span className='info'>{userEditInfo?.name}</span>
            </S.InputContent>

            <S.InputContent>
              <span>이메일</span>
              <span className='info'>{userEditInfo?.email}</span>
            </S.InputContent>
            <S.InputContent>
              <span>가입일</span>
              <span className='info'>
                {userEditInfo.created_at &&
                  new Date(userEditInfo.created_at).toLocaleString()}
              </span>
            </S.InputContent>

            <S.InputContent>
              <span>전화번호</span>
              <input
                id='phone'
                onChange={handleInput}
                value={userEditInfo?.phone}
              />
            </S.InputContent>
          </S.InputContainer>
          <S.Button onClick={onSubmit}>저장하기</S.Button>
            {msgError && <S.ErrorWrap>{msgError}</S.ErrorWrap>}
        </S.Content>
      </MyPageLayout>
    </>
  );
}

const DEFAULT_INFO: TUserInfo = {
  name: '',
  email: '',
  phone: '',
  created_at: '',
};

const regexNumber = /^[0-9]+$/;
