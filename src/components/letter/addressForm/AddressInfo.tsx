import React, { ChangeEvent, useState } from 'react';
import useInput from '@/hooks/useInput';
import AddressModal from './AddressModal';
import styled from '@emotion/styled';
import axios from 'axios';
import AddressList from './AddressList';
import { subtle } from 'crypto';
import { Common } from 'styles/common';
import { css } from '@emotion/react';
import OtherAddressList from './NurseryAddressList';

interface Props {
  subTitle: string;
  addressValue: string;
  detailAddressValue: string;
  nameValue: string;
  phoneValue: string;
  zonecodeValue: string;
  onChangeDetailAddress: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePhone: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (fullAddress: string) => void;
  onChangeZonecode: (zonecode: string) => void;
}

const AddressInfo = ({
  subTitle,
  addressValue,
  detailAddressValue,
  nameValue,
  phoneValue,
  zonecodeValue,
  onChangeDetailAddress,
  onChangeName,
  onChangePhone,
  onChangeAddress,
  onChangeZonecode,
}: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showAddress, setShowAddress] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };
  const clickModal = () => {
    setShowAddress(!showAddress);
  };

  return (
    <div css={FormContainer}>
      <h1 css={SubTitle}>{subTitle}</h1>
      <button css={Button} onClick={clickModal}>
        불러오기
      </button>
      {showAddress && <AddressList clickModal={clickModal} subTitle={subTitle} />}
      <input css={Input} placeholder="우편번호" value={zonecodeValue} onClick={showModal} readOnly />
      <input css={Input} placeholder="주소를 입력해주세요." value={addressValue} onClick={showModal} readOnly />
      {modalOpen && (
        <AddressModal
          setModalOpen={setModalOpen}
          onChangeAddress={onChangeAddress}
          onChangeZonecode={onChangeZonecode}
        />
      )}
      <input
        css={Input}
        placeholder="나머지 주소를 입력해주세요."
        value={detailAddressValue}
        onChange={onChangeDetailAddress}
      />
      <input css={Input} placeholder="이름를 입력해주세요." value={nameValue} onChange={onChangeName} />
      <input css={Input} placeholder="연락처를 입력해주세요." value={phoneValue} onChange={onChangePhone} />
    </div>
  );
};

export default AddressInfo;

const FormContainer = css`
  position: relative;
  width: 544px;
  height: 280px;
  display: flex;
  flex-direction: column;

  @media all and (max-width: 767px) {
    width: calc(100vw - 3em);
  }
`;

const SubTitle = css`
  font-size: ${Common.fontSize.fs18};
  font-weight: bold;
  color: ${Common.colors.theme};
  margin-bottom: 10px;
`;

const Button = css`
  position: absolute;
  top: -10px;
  right: 0;
  width: 86px;
  padding: 8px;
  font-size: 14px;
  color: ${Common.colors.gray};
  border-radius: 5px;
`;

const Input = css`
  padding: 0 0 5px 5px;
  margin-top: 20px;
  border: none;
  border-bottom: 1px solid ${Common.colors.gray02};
  color: ${Common.colors.gray};

  &::placeholder {
    color: ${Common.colors.gray01};
    font-size: ${Common.fontSize.fs14};
  }
  &:focus {
    outline: none;
  }
`;
