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
    () => (!!token ? `/mypage/cs-inquiries?page=${page}&limit=${LIST_PER_PAGE}` : null),
    () => getCsList(page, LIST_PER_PAGE),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );

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

    