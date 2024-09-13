import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { useRecoilValue } from 'recoil';
import { Modal } from 'antd';
import { AxiosError } from 'axios';

import Loading from '@/components/common/Loading';

import { userInfoAtom } from '@/recoil/mypage/atom';
import { putPassword } from '@/api/mypage';

import type { ChangeEvent } from 'react';
import type { TUserInfo } from '@/type/auth';
import type { TPwd } from '@/api/mypage';
import type { TResMsg } from '@/type/common';

import * as S from './Password.styles';
import { useRouter } from 'next/router';

interface TWriteInfo extends TUserInfo {
  password: string;
  newPassword: string;
  newPasswordCheck: string;
}

export default function Password() {
  const [modal, contextHolder] = Modal.useModal();
  const router = useRouter();

  const { trigger, isMutating } = useSWRMutation(
    'user/update-password',
    putPassword,
    {
      onSuccess: (res) => {
        modal.success({
          title: '비밀번호 변경 완료',
          content: '비밀번호를 변경하였습니다.',
        });
        setUserEditInfo({ ...DEFAULT_INFO, ...userInfo });
        router.push('/mypage/profile');
      },
      onError: (res: AxiosError<TResMsg>) => {
        modal.error({
          title: '비밀번호 변경 실패',
          content: res.response?.data.message,
        });
        setMsgError(
          res.response?.data.message || '예상치 못한 에러가 발생했습니다.'
        );
      },
    }
  );

  const userInfo = useRecoilValue(userInfoAtom);

  const [userEditInfo, setUserEditInfo] = useState<TWriteInfo>(DEFAULT_INFO);
  const [msgError, setMsgError] = useState<string>('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'phone') {
      if (regexNumber.test(e.target.value)) {
        const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
        setUserEditInfo({ ...userEditInfo, phone: onlyNumber });
      }

      return;
    }
    setUserEditInfo({ ...userEditInfo, [e.target.id]: e.target.value });
  };

  const onSubmit = () => {
    if (!userEditInfo.newPassword) {
      setMsgError('새 비밀번호를 입력해주세요.');
      return;
    }

    if (!userEditInfo.newPasswordCheck) {
      setMsgError('비밀번호 확인을 입력해주세요.');
      return;
    }

    if (userEditInfo.password === userEditInfo.newPassword) {
      setMsgError('기존 비밀번호와 일치한 비밀번호입니다.');
      return;
    }

    if (userEditInfo.newPassword && userEditInfo.newPasswordCheck) {
      if (userEditInfo.newPassword !== userEditInfo.newPasswordCheck) {
        setMsgError('새 비밀번호가 일치하지 않습니다. 확인해주세요.');
        return;
      }
    }

    const params: TPwd = {
      password: userEditInfo.password,
      newPassword: userEditInfo.newPassword,
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
      <S.TitleContainer>
        <S.Title>안녕하세요! 테스트 님,</S.Title>
        <S.SubTitle>이곳은 <S.TitleContent>비밀번호 변경</S.TitleContent> 입니다.</S.SubTitle>
      </S.TitleContainer>
      <S.Content>
        <S.InputContainer>
            <S.InputContent>
              <span>새 비밀번호</span>
              <input
                id='newPassword'
                onChange={handleInput}
                value={userEditInfo?.newPassword}
                type='password'
              />
            </S.InputContent>
            <S.InputContent>
              <span>비밀번호 확인</span>
              <input
                id='newPasswordCheck'
                onChange={handleInput}
                value={userEditInfo?.newPasswordCheck}
                type='password'
              />
            </S.InputContent>
          </S.InputContainer>

          <S.Button onClick={onSubmit}>저장하기</S.Button>
        </S.Content>

        {msgError && <S.ErrorWrap>{msgError}</S.ErrorWrap>}

    </>
  );
}

const DEFAULT_INFO: TWriteInfo = {
  name: '',
  email: '',
  phone: '',
  created_at: '',
  password: '',
  newPassword: '',
  newPasswordCheck: '',
};

const regexNumber = /^[0-9]+$/;
