import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import useSWR from 'swr';
import { Modal } from 'antd';

import { userInfoAtom } from '@/recoil/mypage/atom';
import { tokenAtom } from '@/recoil/auth/atom';

import { TCsListResult, getCsList } from '@/api/mypage';

import { TCsInfo } from '@/type/mypage';

import type { TUserInfo } from '@/type/auth';

import InquiryPageUI from './Inquiry.presenter';

interface TWriteInfo extends TUserInfo {
  password: string;
  newPassword: string;
  newPasswordCheck: string;
}

const DEFAULT_INFO: TWriteInfo = {
    name: '',
    email: '',
    phone: '',
    createdAt: '',
    password: '',
    newPassword: '',

    newPasswordCheck: '',
  };

export default function InquiryPageContainer (): JSX.Element {
 const [modal, contextHolder] = Modal.useModal();
  const token = useRecoilValue(tokenAtom);

  const [openInquire, setOpenInquire] = useState<boolean>(false);
  const [selectCs, setSelectCs] = useState<TCsInfo | null>(null);

  const [page, setPage] = useState<string>('1');

  const { data, mutate: refetch } = useSWR<TCsListResult>(
    () => (!!token ? '/cs' : null),
    () => getCsList(page),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );

  const userInfo = useRecoilValue(userInfoAtom);

  const [userEditInfo, setUserEditInfo] = useState<TWriteInfo>(DEFAULT_INFO);

  useEffect(() => {
    if (userInfo) setUserEditInfo({ ...userEditInfo, ...userInfo });
  }, [userInfo]);

    return (
        <InquiryPageUI 
        userEditInfo={userEditInfo}
        data={data}
        page={page}
        setPage={setPage}
        openInquire={openInquire}
        setOpenInquire={setOpenInquire}
        selectCs={selectCs}
        setSelectCs={setSelectCs}
        refetch={refetch}
        />
    )
}

    