import { useMemo, useState } from 'react';
import useSWR from 'swr';
import { useRecoilValue } from 'recoil';
import { Modal } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { tokenAtom } from '@/recoil/auth/atom';
import {
  delReceiveAddr,
  delSendAddr,
  getAddrList,
} from '@/api/mypage';
import type { AxiosError } from 'axios';
import type { TSendInfo, TReceiveInfo } from '@/type/address';
import * as S from './Address.styles';
import { userInfoAtom } from '@/recoil/mypage/atom';

const { confirm } = Modal;

export default function Address(props: any): JSX.Element {
  const [modal, contextHolder] = Modal.useModal();

  const token = useRecoilValue(tokenAtom);
  const userInfo = useRecoilValue(userInfoAtom);

  const [isShowSend, setIsShowSend] = useState<boolean>(false);
  const [isShowRecive, setIsShowRecive] = useState<boolean>(false);

  const { data: addrList, mutate: refetchAddrList } = useSWR<{ sendAddresses: TSendInfo[], deliveryAddresses: TReceiveInfo[] }>(
    () => (!!token ? 'address/list' : null),
    getAddrList,
    {
      fallbackData: { sendAddresses: [], deliveryAddresses: [] },
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );

  const sendList = addrList?.sendAddresses || [];
  const receiveList = addrList?.deliveryAddresses || [];

  const handleDelSend = async (sendAddressId: number) => {
    confirm({
      title: '삭제 확인',
      content: '정말로 삭제하시겠습니까?',
      okText: '삭제',
      cancelText: '취소',
      async onOk() {
        try {
          await delSendAddr({ sendAddressId });
          modal.success({
            title: '삭제 완료',
            content: '보내는 사람 주소를 삭제하였습니다.',
          });
          refetchAddrList();
        } catch (error) {
          modal.error({
            title: '삭제 실패',
            content: '삭제를 실패했습니다.',
          });
        }
      },
      onCancel() {
        return;
      },
    });
  };

  const handleDelReceive = async (deliveryAddressId: number) => {
    confirm({
      title: '삭제 확인',
      content: '정말로 삭제하시겠습니까?',
      okText: '삭제',
      cancelText: '취소',
      async onOk() {
        try {
          await delReceiveAddr({ deliveryAddressId });
          modal.success({
            title: '삭제 완료',
            content: '받는 사람의 주소를 삭제하였습니다.',
          });
          refetchAddrList();
        } catch (error) {
          modal.error({
            title: '삭제 실패',
            content: '삭제를 실패했습니다.',
          });
        }
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
    <>
      {contextHolder}
      <S.Wrap>
          <S.TitleContainer>
            <S.Title>안녕하세요! {userInfo?.name} 님,</S.Title>
            <S.SubTitle>이곳은 <S.TitleContent>주소 관리</S.TitleContent> 입니다.</S.SubTitle>
          </S.TitleContainer>
          <S.Content>
          {sendList.length === 0 && receiveList.length === 0 ? (
            <S.EmptyMessage>등록하신 주소가 없습니다.</S.EmptyMessage>
          ) : (
            <>
              <S.InfoWrap>
                <S.TitleWrap>
                  <span>보내는 사람 (총 {sendList?.length || 0}개)</span>
                  {isMaxSendList && isShowSend ? (
                    <DownOutlined onClick={() => setIsShowSend(false)} />
                  ) : (
                    <UpOutlined onClick={() => setIsShowSend(true)} />
                  )}
                </S.TitleWrap>
                <S.CardContainer>
                  {viewSendList?.map((sendInfo) => (
                    <S.CardWrap key={sendInfo.id}>
                      <div className='text_container'>
                        <div className='text_wrap'>
                          <span>{sendInfo.sendName}</span>
                          <span>{sendInfo.sendPhone}</span>
                        </div>
                        <span className='addr_container'>
                          {sendInfo.sendAddress} {sendInfo.sendAddressDetail}
                        </span>
                      </div>
                      <span
                        className='del_btn'
                        onClick={() => handleDelSend(sendInfo.id)}
                      >
                        삭제
                      </span>
                    </S.CardWrap>
                  ))}
                </S.CardContainer>
              </S.InfoWrap>

              <S.InfoWrap>
                <S.TitleWrap>
                  <span>받는 사람 (총 {receiveList?.length || 0}개)</span>
                  {isMaxReceiveList && isShowRecive ? (
                    <DownOutlined onClick={() => setIsShowRecive(false)} />
                  ) : (
                    <UpOutlined onClick={() => setIsShowRecive(true)} />
                  )}
                </S.TitleWrap>
                <S.CardContainer>
                  {viewReceiveList?.map((receiveInfo) => (
                    <S.CardWrap key={receiveInfo.id}>
                      <div className='text_container'>
                        <div className='text_wrap'>
                          <span>{receiveInfo.deliveryName}</span>
                          <span>{receiveInfo.deliveryPhone}</span>
                        </div>
                        <span className='addr_container'>
                          {receiveInfo.deliveryAddress}{' '}
                          {receiveInfo.deliveryAddressDetail}
                        </span>
                      </div>
                      <span
                        className='del_btn'
                        onClick={() => handleDelReceive(receiveInfo.id)}
                      >
                        삭제
                      </span>
                    </S.CardWrap>
                  ))}
                </S.CardContainer>
              </S.InfoWrap>
            </>
          )}
        </S.Content>
      </S.Wrap>
    </>
  );
}