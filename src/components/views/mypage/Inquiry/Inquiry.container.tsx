import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import useSWR from 'swr';
import { Modal } from 'antd';

import { userInfoAtom } from '@/recoil/mypage/atom';
import { tokenAtom } from '@/recoil/auth/atom';

import { TCsListResult, getCsList } from '@/api/mypage';

import { TCsInfo } from '@/type/mypage';

import InquiryPageUI from './Inquiry.presenter';

const LIST_PER_PAGE = 10;

export default function InquiryPageContainer (): JSX.Element {
  const token = useRecoilValue(tokenAtom);
  const userInfo = useRecoilValue(userInfoAtom);

  const [openInquire, setOpenInquire] = useState<boolean>(false);
  const [selectCs, setSelectCs] = useState<TCsInfo | null>(null);

  const [page, setPage] = useState<string>('1');

  const { data, mutate: refetch } = useSWR<TCsListResult>(
    () => (!!token ? `/mypage/cs-inquiries` : null),
    () => getCsList(),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: false,
    }
  );

  useEffect(() => {
    if (token) {
      refetch(); // 토큰이 있을 때만 데이터 요청
    }
  }, [token, refetch]);
  
    return (
        <InquiryPageUI 
        userInfo={userInfo}
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

    