import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import useSWR from 'swr';
import styled from '@emotion/styled';
import { CommentOutlined } from '@ant-design/icons';
import { Modal, Pagination } from 'antd';

import MyPageLayout from '@/components/mypage/MyPageLayout';
import InquireDetailPopup from '@/components/mypage/InquireDetailPopup';
import InquirePopup from '@/components/mypage/InquirePopup';

import { userInfoAtom } from '@/recoil/mypage/atom';
import { tokenAtom } from '@/recoil/auth/atom';

import { TCsListResult, getCsList } from '@/api/mypage';

import { TCsInfo } from '@/type/mypage';

import type { TUserInfo } from '@/type/auth';

interface TWriteInfo extends TUserInfo {
  password: string;
  newPassword: string;
  newPasswordCheck: string;
}

export default function Home() {
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
    <>
      {contextHolder}

      <MyPageLayout>
        <Wrap>
          <Header>
            <span className='title'>내 1:1문의</span>
          </Header>

          <Body>
            <InfoContaier>
              <InfoWrap>
                <TitleWrap>
                  <span>제목</span>
                  <span>날짜</span>
                </TitleWrap>

                <CardContainer>
                  {data &&
                    data.csList.map((csInfo) => {
                      return (
                        <CardWrap
                          key={csInfo.id}
                          onClick={() => setSelectCs(csInfo)}
                        >
                          <div className='text_container'>
                            <div className='text_wrap'>
                              <span>{csInfo.title}</span>
                            </div>
                          </div>

                          <div className='created_at'>
                            <span>
                              {' '}
                              {csInfo.created_at &&
                                new Date(csInfo.created_at).toLocaleString()}
                            </span>
                          </div>
                        </CardWrap>
                      );
                    })}
                </CardContainer>
              </InfoWrap>
            </InfoContaier>

            <Pagination
              total={data ? Number(data.total || 0) : 0}
              current={Number(page)}
              onChange={(value) => setPage(String(value))}
            />
          </Body>

          {!openInquire && !selectCs && (
            <InquireBtn onClick={() => setOpenInquire(true)}>
              <CommentOutlined />
            </InquireBtn>
          )}

          {openInquire && (
            <InquirePopup
              close={() => setOpenInquire(false)}
              callback={() => refetch()}
            />
          )}

          {selectCs && (
            <InquireDetailPopup
              csInfo={selectCs}
              close={() => setSelectCs(null)}
            />
          )}
        </Wrap>
      </MyPageLayout>
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

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  @media (max-width: 480px) {
    max-width: 400px;
  }
`;

const Header = styled.div`
  width: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--default, #333);
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 480px) {
    max-width: 400px;
  }

  .inquiry_btn {
    width: 84px;
    height: 40px;
    flex-shrink: 0;

    border-radius: 5px;
    background: var(--yellow, #ffb930);

    color: var(--white, #fff);
    font-size: 16px;
    font-weight: 700;
  }
  .none {
    width: 84px;
  }
`;

const Body = styled.div`
  margin-top: 50px;
  width: 1000px;
  min-height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 480px) {
    max-width: 400px;
  }
`;

const InfoContaier = styled.div`
  width: 650px;
  display: flex;
  gap: 50px;

  @media (max-width: 480px) {
    max-width: 400px;
    padding: 0 20px;
  }
`;

const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px;
  background: var(--yellowgreen, #f8f7ea);

  span {
    color: var(--primary, #4a743c);
    font-size: 16px;
    font-weight: 500;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardWrap = styled.div<{ isLast?: boolean }>`
  padding: 20px 10px 20px 20px;

  display: flex;
  justify-content: space-between;
  align-items: end;

  color: var(--grey666, #666);
  font-size: 14px;
  font-weight: 400;

  border-bottom: ${({ isLast }) => (isLast ? '' : '1px solid #f3f3f3')};
  cursor: pointer;

  .text_container {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .text_wrap {
      display: flex;
      gap: 20px;
      color: var(--grey666, #666);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
  }

  .created_at {
    display: flex;
    gap: 20px;
    border: 1px solid bl;

    color: var(--grey666, #666);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  .del_btn {
    cursor: pointer;
  }
`;

const InquireBtn = styled.div`
  position: fixed;
  bottom: 5%;
  left: 90%;

  width: 80px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50px;
  background: var(--yellow, #ffb930);

  z-index: 8;

  cursor: pointer;

  span {
    color: #fff;
    font-size: 50px;
  }

  @media all and (max-width: 480px) {
    left: 75%;
    bottom: 10%;

    width: 50px;
    height: 50px;

    span {
      color: #fff;
      font-size: 30px;
    }
  }
`;
