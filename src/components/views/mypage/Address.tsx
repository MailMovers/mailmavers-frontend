import { useMemo, useState } from 'react';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { useRecoilValue } from 'recoil';
import { Modal } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import MyPageLayout from '@/components/mypage/MyPageLayout';
import { tokenAtom } from '@/recoil/auth/atom';

import {
  delReceiveAddr,
  delSendAddr,
  getReceiveAddrList,
  getSendAddrList,
} from '@/api/mypage';

import type { AxiosError } from 'axios';
import type { TSendInfo, TReceiveInfo } from '@/type/address';

import * as S from './Address.styles';

const { confirm } = Modal;

export default function Address() {
  const [modal, contextHolder] = Modal.useModal();

  const token = useRecoilValue(tokenAtom);

  const [isShowSend, setIsShowSend] = useState<boolean>(false);
  const [isShowRecive, setIsShowRecive] = useState<boolean>(false);

  const { data: sendList, mutate: refetchSend } = useSWR<TSendInfo[]>(
    () => (!!token ? 'address/send' : null),
    getSendAddrList,
    {
      fallbackData: [],
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );

  const { data: receiveList, mutate: refetchRecv } = useSWR<TReceiveInfo[]>(
    () => (!!token ? 'getReceiveAddrList' : null),
    getReceiveAddrList,
    {
      fallbackData: [],
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const { trigger: delSendTrigger } = useSWRMutation(
    'address/delete/send',
    delSendAddr,
    {
      onSuccess: (res) => {
        modal.success({
          title: '삭제 완료',
          content: '보내는 사람 주소를 삭제하였습니다.',
        });

        refetchSend();
      },
      onError: (_res: AxiosError) => {
        modal.error({
          title: '삭제 실패',
          content: '삭제를 실패했습니다.',
        });
      },
    }
  );

  const { trigger: delRecvTrigger } = useSWRMutation(
    'address/delete',
    delReceiveAddr,
    {
      onSuccess: (res) => {
        modal.success({
          title: '삭제 완료',
          content: '받는 사람의 주소를 삭제하였습니다.',
        });

        refetchRecv();
      },
      onError: (_res: AxiosError) => {
        modal.error({
          title: '삭제 실패',
          content: '삭제를 실패했습니다.',
        });
      },
    }
  );

  const handleDelSend = (sendAddressId: string) => {
    confirm({
      title: '삭제 확인',
      content: '정말로 삭제하시겠습니까?',
      okText: '삭제',
      cancelText: '취소',
      async onOk() {
        const param = {
          sendAddressId,
        };

        delSendTrigger(param);
      },
      onCancel() {
        return;
      },
    });
  };

  const handleDelReceive = (deliveryAddressId: string) => {
    confirm({
      title: '삭제 확인',
      content: '정말로 삭제하시겠습니까?',
      okText: '삭제',
      cancelText: '취소',
      async onOk() {
        const param = {
          deliveryAddressId,
        };

        delRecvTrigger(param);
      },
      onCancel() {
        return;
      },
    });
  };

  const viewSendList = useMemo(() => {
    if (!sendList) return [];

    if (sendList.length > 3 && !isShowSend) {
      return sendList.filter((_, idx) => idx < 3);
    }

    return sendList;
  }, [sendList, isShowSend]);

  const viewReceiveList = useMemo(() => {
    if (!receiveList) return [];

    if (receiveList.length > 3 && !isShowRecive) {
      return receiveList.filter((_, idx) => idx < 3);
    }

    return receiveList;
  }, [receiveList, isShowRecive]);

  const isMaxSendList = sendList && sendList.length > 3;
  const isMaxReceiveList = receiveList && receiveList.length > 3;

  return (
    <MyPageLayout>
      {contextHolder}
      <S.Wrap>
        <S.Content>
          <p>주소관리</p>
          <S.InfoContaier>
            <S.InfoWrap>
              <S.TitleWrap>
                <span>보내는 사람 (총 {sendList?.length || 0}개)</span>

                {isMaxSendList && isShowSend ? (
                  <UpOutlined onClick={() => setIsShowSend(false)} />
                ) : (
                  <DownOutlined onClick={() => setIsShowSend(true)} />
                )}
              </S.TitleWrap>

              <S.CardContainer>
                {viewSendList?.map((sendInfo) => {
                  return (
                    <S.CardWrap key={sendInfo.id}>
                      <div className='text_container'>
                        <div className='text_wrap'>
                          <span>{sendInfo.send_name}</span>
                          <span>{sendInfo.send_phone}</span>
                        </div>
                        <span>
                          {sendInfo.send_address} {sendInfo.send_address_detail}
                        </span>
                      </div>

                      <span
                        className='del_btn'
                        onClick={() => handleDelSend(sendInfo.id)}
                      >
                        삭제
                      </span>
                    </S.CardWrap>
                  );
                })}
              </S.CardContainer>
            </S.InfoWrap>

            <S.InfoWrap>
              <S.TitleWrap>
                <span>받는 사람 (총 {receiveList?.length || 0}개)</span>

                {isMaxReceiveList && isShowRecive ? (
                  <UpOutlined onClick={() => setIsShowRecive(false)} />
                ) : (
                  <DownOutlined onClick={() => setIsShowRecive(true)} />
                )}
              </S.TitleWrap>

              <S.CardContainer>
                {viewReceiveList?.map((receiveInfo) => {
                  return (
                    <S.CardWrap key={receiveInfo.id}>
                      <div className='text_container'>
                        <div className='text_wrap'>
                          <span>{receiveInfo.delivery_name}</span>
                          <span>{receiveInfo.delivery_phone}</span>
                        </div>
                        <span>
                          {receiveInfo.delivery_address}{' '}
                          {receiveInfo.delivery_address_detail}
                        </span>
                      </div>

                      <span
                        className='del_btn'
                        onClick={() => handleDelReceive(receiveInfo.id)}
                      >
                        삭제
                      </span>
                    </S.CardWrap>
                  );
                })}
              </S.CardContainer>
            </S.InfoWrap>
          </S.InfoContaier>
        </S.Content>
      </S.Wrap>
    </MyPageLayout>
  );
}
