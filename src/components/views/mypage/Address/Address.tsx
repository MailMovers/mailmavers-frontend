import { useMemo, useState } from 'react';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { useRecoilValue } from 'recoil';
import { Modal } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

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
import { userInfoAtom } from '@/recoil/mypage/atom';
import { mockReceiveList, mockSendList } from './Address.mock';

const { confirm } = Modal;

export default function Address(props: any): JSX.Element {
  const [modal, contextHolder] = Modal.useModal();

  const [sendList] = useState(mockSendList)
  const [receiveList] = useState(mockReceiveList)

  const token = useRecoilValue(tokenAtom);
  const userInfo = useRecoilValue(userInfoAtom);

  const [isShowSend, setIsShowSend] = useState<boolean>(false);
  const [isShowRecive, setIsShowRecive] = useState<boolean>(false);

  // const { data: sendList, mutate: refetchSend } = useSWR<TSendInfo[]>(
  //   () => (!!token ? 'address/send' : null),
  //   getSendAddrList,
  //   {
  //     fallbackData: [], // 데이터 로드전 빈배열이 기본값
  //     revalidateOnFocus: false, // 포커스 재활성화 시 재검증 X
  //     revalidateOnReconnect: false, // 네트워크 재연결 시 재검증 X
  //     revalidateOnMount: true, // 컴포넌트 마운트 시 재검증 O
  //   }
  // );

  // const { data: receiveList, mutate: refetchRecv } = useSWR<TReceiveInfo[]>(
  //   () => (!!token ? 'getReceiveAddrList' : null),
  //   getReceiveAddrList,
  //   {
  //     fallbackData: [],
  //     revalidateOnFocus: false,
  //     revalidateOnReconnect: false,
  //   }
  // );

  // const { trigger: delSendTrigger } = useSWRMutation(
  //   'address/delete/send',
  //   delSendAddr,
  //   {
  //     onSuccess: (res) => {
  //       modal.success({
  //         title: '삭제 완료',
  //         content: '보내는 사람 주소를 삭제하였습니다.',
  //       });

  //       refetchSend();
  //     },
  //     onError: (_res: AxiosError) => {
  //       modal.error({
  //         title: '삭제 실패',
  //         content: '삭제를 실패했습니다.',
  //       });
  //     },
  //   }
  // );

  // const { trigger: delRecvTrigger } = useSWRMutation(
  //   'address/delete',
  //   delReceiveAddr,
  //   {
  //     onSuccess: (res) => {
  //       modal.success({
  //         title: '삭제 완료',
  //         content: '받는 사람의 주소를 삭제하였습니다.',
  //       });

  //       refetchRecv();
  //     },
  //     onError: (_res: AxiosError) => {
  //       modal.error({
  //         title: '삭제 실패',
  //         content: '삭제를 실패했습니다.',
  //       });
  //     },
  //   }
  // );

  // const handleDelSend = (sendAddressId: string) => {
  //   confirm({
  //     title: '삭제 확인',
  //     content: '정말로 삭제하시겠습니까?',
  //     okText: '삭제',
  //     cancelText: '취소',
  //     async onOk() {
  //       const param = {
  //         sendAddressId,
  //       };

  //       delSendTrigger(param);
  //     },
  //     onCancel() {
  //       return;
  //     },
  //   });
  // };

  // const handleDelReceive = (deliveryAddressId: string) => {
  //   confirm({
  //     title: '삭제 확인',
  //     content: '정말로 삭제하시겠습니까?',
  //     okText: '삭제',
  //     cancelText: '취소',
  //     async onOk() {
  //       const param = {
  //         deliveryAddressId,
  //       };

  //       delRecvTrigger(param);
  //     },
  //     onCancel() {
  //       return;
  //     },
  //   });
  // };

  // const viewSendList = useMemo(() => {
  //   if (!sendList) return [];

  //   if (sendList.length > 3 && !isShowSend) {
  //     return sendList.filter((_, idx) => idx < 3);
  //   }

  //   return sendList;
  // }, [sendList, isShowSend]);

  // const viewReceiveList = useMemo(() => {
  //   if (!receiveList) return [];

  //   if (receiveList.length > 3 && !isShowRecive) {
  //     return receiveList.filter((_, idx) => idx < 3);
  //   }

  //   return receiveList;
  // }, [receiveList, isShowRecive]);

  const isMaxSendList = sendList && sendList.length > 3;
  const isMaxReceiveList = receiveList && receiveList.length > 3;

  return (
    <>
      {contextHolder}
      <S.Wrap>
          <S.TitleContainer>
            <S.Title>안녕하세요! {userInfo?.name} 님,</S.Title>
            <S.SubTitle>이곳은 <S.TitleContent>주소 관리</S.TitleContent> 입니다.</S.SubTitle>
          </S.TitleContainer>
          <S.Content>
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
                {sendList?.map((sendInfo) => (
                    <S.CardWrap key={sendInfo.id}>
                      <div className='text_container'>
                        <div className='text_wrap'>
                          <span>{sendInfo.send_name}</span>
                          <span>{sendInfo.send_phone}</span>
                        </div>
                        <span className='addr_container'>
                          {sendInfo.send_address} {sendInfo.send_address_detail}
                        </span>
                      </div>

                      <span
                        className='del_btn'
                        // onClick={() => handleDelSend(sendInfo.id)}
                      >
                        삭제
                      </span>
                    </S.CardWrap>
                  )
                )}
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
                {receiveList?.map((receiveInfo) => (
                    <S.CardWrap key={receiveInfo.id}>
                      <div className='text_container'>
                        <div className='text_wrap'>
                          <span>{receiveInfo.delivery_name}</span>
                          <span>{receiveInfo.delivery_phone}</span>
                        </div>
                        <span className='addr_container'>
                          {receiveInfo.delivery_address}{' '}
                          {receiveInfo.delivery_address_detail}
                        </span>
                      </div>

                      <span
                        className='del_btn'
                        // onClick={() => handleDelReceive(receiveInfo.id)}
                      >
                        삭제
                      </span>
                    </S.CardWrap>
                  )
                )}
              </S.CardContainer>
            </S.InfoWrap>
          </S.Content>
          {sendList && receiveList && sendList.length === 0 && receiveList.length === 0 && (
        <S.EmptyMessage>등록하신 주소가 없습니다.</S.EmptyMessage>
      )}      
      </S.Wrap>
    </>
  );
}
