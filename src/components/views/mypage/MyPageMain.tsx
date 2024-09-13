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


const DEFAULT_INFO: TUserInfo = {
  name: '',
  email: '',
  phone: '',
  created_at: '',
};

const regexNumber = /^[0-9]+$/;



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

  return (
    <>
      {contextHolder}
      <Loading spinning={isMutating} />
      
    </>
  );
}
