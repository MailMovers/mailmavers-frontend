/** @jsxImportSource @emotion/react */

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { css } from '@emotion/react';

import AddressInfo from '@/components/letter/addressForm/AddressInfo';
import SelectPost from '@/components/letter/addressForm/SelectPost';
import LetterHeader from '@/components/letter/LetterHeader';
import LetterBottom from '@/components/letter/LetterBottom';

import {
  selectedReceiverAddressDataState,
  selectedSenderAddressDataState,
  selectedStampDataState,
} from '@/recoil/selectAddress/atom';
import { tokenAtom } from '@/recoil/auth/atom';

import useInputAddress from '@/hooks/useInputAddress';
import { letterAddress } from '@/api/letter';

// import OtherAddressList from '@/components/letter/addressForm/NurseryAddressList';

import NurseryAddressList from '@/components/letter/addressForm/NurseryAddressList';
import PrisonsAddressList from '@/components/letter/addressForm/PrisonsAddressList';

import { Common } from 'styles/common';
import { Container, InfoPost, StampZone, Wrap } from './Send.styles';

const Send = ({ params }: { params: { letterId: string } }) => {
  //Todo : react-hook-form 사용해보기

  const router = useRouter();
  const letterId = parseInt(params.letterId);
  const selectedReceiverAddressData = useRecoilValue(
    selectedReceiverAddressDataState
  );
  const selectedSenderAddressData = useRecoilValue(
    selectedSenderAddressDataState
  );
  const resetList = useResetRecoilState(selectedStampDataState);
  const selectedStampData = useRecoilValue(selectedStampDataState);
  const [senderAddress, setSenderAddress] = useState('');
  const [senderDetailAdress, onChangeSenderDetailAdress] = useInputAddress('');
  const [senderName, onChangeSenderName] = useInputAddress('');
  const [senderPhone, onChangeSenderPhone] = useInputAddress('');
  const [senderZonecode, onChangeSenderZonecode] = useInputAddress('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [receiverDetailAdress, onChangeReceiverDetailAdress] =
    useInputAddress('');
  const [receiverName, onChangeReceiverName] = useInputAddress('');
  const [receiverPhone, onChangeReceiverPhone] = useInputAddress('');
  const [receiverZonecode, onChangeReceiverZonecode] = useInputAddress('');
  const [selectedStamp, setSelectedStamp] = useState<number | null>(null);
  const [isValid, setIsValid] = useState(false);

  const token = useRecoilValue(tokenAtom);
  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, []);

  const handleSenderAddress = (fullAddress: string) => {
    setSenderAddress(fullAddress);
  };
  const handleReceiverAddress = (fullAddress: string) => {
    setReceiverAddress(fullAddress);
  };

  useEffect(() => {
    if (selectedReceiverAddressData) {
      setReceiverAddress(selectedReceiverAddressData.receiverAddress || '');
      onChangeReceiverDetailAdress(
        selectedReceiverAddressData.receiverAddressDetail || ''
      );
      onChangeReceiverName(selectedReceiverAddressData.receiverName || '');
      onChangeReceiverPhone(selectedReceiverAddressData.receiverPhone || '');
      onChangeReceiverZonecode(
        selectedReceiverAddressData.receiverZonecode || ''
      );
    }
  }, [selectedReceiverAddressData]);

  useEffect(() => {
    if (selectedSenderAddressData) {
      setSenderAddress(selectedSenderAddressData.senderAddress || '');
      onChangeSenderDetailAdress(
        selectedSenderAddressData.senderAddressDetail || ''
      );
      onChangeSenderName(selectedSenderAddressData.senderName || '');
      onChangeSenderPhone(selectedSenderAddressData.senderPhone || '');
      onChangeSenderZonecode(selectedSenderAddressData.senderZonecode || '');
    }
  }, [selectedSenderAddressData]);

  useEffect(() => {
    if (selectedStampData) {
      setSelectedStamp(selectedStampData.id);
    }
    if (selectedStamp !== null) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [selectedStampData, selectedStamp]);

  const submit = async () => {
    setIsValid(false);
    resetList();
    const addressData = {
      stampId: selectedStamp,
      letterId: letterId,

      // 받는 사람 데이터
      deliveryPostCode: receiverZonecode,
      deliveryAddress: receiverAddress,
      deliveryAddressDetail: receiverDetailAdress,
      deliveryPhone: receiverPhone,
      deliveryName: receiverName,

      // 보내는 사람 데이터
      sendPostCode: senderZonecode,
      sendAddress: senderAddress,
      sendAddressDetail: senderDetailAdress,
      sendPhone: senderPhone,
      sendName: senderName,
    };

    try {
      letterAddress(addressData);
      router.push(`/letter/confirm/${letterId}`);
    } catch (error) {
      alert('죄송합니다. 저장에 실패했습니다. CS센터로 문의주시기 바랍니다.');
      console.error(error);
    }
  };

  // 보육원, 교도소 목록 열기
  const [showNurseryAddress, setShowNurseryAddress] = useState(false);
  const [showPrisonsAddress, setShowPrisonsAddress] = useState(false);
  const clickNurseryModal = () => {
    setShowNurseryAddress(!showNurseryAddress);
  };
  const clickPrisonsModal = () => {
    setShowPrisonsAddress(!showPrisonsAddress);
  };

  return (
    <>
      <LetterHeader />
      <div css={Wrap}>
        <div css={Container}>
          <div css={InfoPost}>
            <AddressInfo
              subTitle='보내는 사람'
              addressValue={senderAddress}
              detailAddressValue={senderDetailAdress}
              nameValue={senderName}
              phoneValue={senderPhone}
              zonecodeValue={senderZonecode}
              onChangeAddress={handleSenderAddress}
              onChangeDetailAddress={onChangeSenderDetailAdress}
              onChangeName={onChangeSenderName}
              onChangePhone={onChangeSenderPhone}
              onChangeZonecode={onChangeSenderZonecode}
            />
            <div>
              <AddressInfo
                subTitle='받는 사람'
                addressValue={receiverAddress}
                detailAddressValue={receiverDetailAdress}
                nameValue={receiverName}
                phoneValue={receiverPhone}
                zonecodeValue={receiverZonecode}
                onChangeAddress={handleReceiverAddress}
                onChangeDetailAddress={onChangeReceiverDetailAdress}
                onChangeName={onChangeReceiverName}
                onChangePhone={onChangeReceiverPhone}
                onChangeZonecode={onChangeReceiverZonecode}
              />
              <div css={ButtonList}>
                <button css={Button} onClick={clickNurseryModal}>
                  보육원 목록
                </button>
                {showNurseryAddress && (
                  <NurseryAddressList clickModal={clickNurseryModal} />
                )}
                <button css={Button} onClick={clickPrisonsModal}>
                  교도소 목록
                </button>
                {showPrisonsAddress && (
                  <PrisonsAddressList clickModal={clickPrisonsModal} />
                )}
              </div>
            </div>
          </div>
          <SelectPost css={StampZone} />
        </div>
      </div>
      <LetterBottom onClickNext={submit} nextBtnDisabled={!isValid} />
    </>
  );
};

export default Send;

const ButtonList = css`
  display: flex;
  gap: 10px;
`;

const Button = css`
  // position: absolute;
  // top: -10px;
  // right: 0;
  width: 50%;
  height: 40px;
  font-size: 14px;
  color: ${Common.colors.gray};
  border-radius: 5px;
`;
