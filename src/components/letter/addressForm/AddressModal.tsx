import React, { useRef, useEffect } from 'react';
import DaumPostCode from 'react-daum-postcode';
import { css } from '@emotion/react';
import { Common } from 'styles/common';

interface AddressData {
  zonecode: string;
  addressType: string;
  bname: string;
  buildingName: string;
  address: string;
}

interface AddressModalProps {
  scriptUrl?: string;
  onChangeAddress: React.Dispatch<React.SetStateAction<any>>;
  onChangeZonecode: React.Dispatch<React.SetStateAction<any>>;
  onComplete?: (data: AddressData) => void;
  setModalOpen?: (open: boolean) => void;
}

const AddressModal = ({ onComplete, setModalOpen, onChangeAddress, onChangeZonecode }: AddressModalProps) => {
  const handleComplete = (data: AddressData) => {
    let fullAddress = data.address;
    let extraAddress = '';
    let zonecode = data.zonecode;

    const { addressType, bname, buildingName } = data;
    if (addressType === 'R') {
      if (bname !== '') {
        extraAddress += bname;
      }
      if (buildingName !== '') {
        extraAddress += `${extraAddress !== '' && ', '}${buildingName}`;
      }
      fullAddress += `${extraAddress !== '' ? ` ${extraAddress}` : ''}`;
    }
    onChangeAddress(fullAddress);
    onChangeZonecode(zonecode);

    if (onComplete) {
      onComplete(data);
    }
    if (setModalOpen) {
      setModalOpen(false);
    }
  };
  const modalRef = useRef<HTMLDivElement>(null);
  const closeModal = () => {
    if (setModalOpen) {
      setModalOpen(false);
    }
  };
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setModalOpen && setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div ref={modalRef} css={ModalWrapper}>
      <div css={Modal}>
        <div css={Post}>
          <DaumPostCode onComplete={handleComplete} />
        </div>
        <button type="button" css={CloseBtn} onClick={closeModal}>
          창닫기
        </button>
      </div>
    </div>
  );
};

export default AddressModal;

const ModalWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 0 20px;
  z-index: 999;
`;

const Modal = css`
  width: 500px;
  display: flex;
  flex-direction: column;
`;

const Post = css`
  width: 100%;
  height: 400px;
  z-index: 999;
  border-radius: 5px;
  overflow: hidden;

  @media all and (max-width: 480px) {
    width: calc(100vw - 40px);
    margin: 0 auto;
  }
`;

const CloseBtn = css`
  width: 100%;
  height: 50px;
  font-size: ${Common.fontSize.fs14};
  background-color: ${Common.colors.gray01};
  border: none;
  color: ${Common.colors.white};
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  @media all and (max-width: 480px) {
    width: calc(100vw - 40px);
    margin: 10px auto 0;
  }
`;
