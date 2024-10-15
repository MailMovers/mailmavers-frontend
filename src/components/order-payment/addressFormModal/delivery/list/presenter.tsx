import React, { useState } from 'react';
import * as S from './styles';
import { DeliveryAddressListPresenterProps, DeliveryAddress } from './types';
import DeliveryAddressModalContainer from '../../index/container';


const DeliveryAddressListPresenter: React.FC<DeliveryAddressListPresenterProps> = ({ isOpen, onClose, addressList, onSelect }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [localAddressList, setLocalAddressList] = useState<DeliveryAddress[]>(addressList); // 주소 리스트 상태 관리

    if (!isOpen) {
        return null;
    }

    const handleSaveAddress = (fullAddress: string, detail: string) => {
        // 새 주소 객체 생성
        const newAddress: DeliveryAddress = {
            id: localAddressList.length + 1, // 새로운 주소에 고유 ID 부여
            name: '사용자', // 새 주소의 기본 이름
            address: fullAddress,
            detail: detail,
        };

        // 기존 주소 리스트에 새 주소 추가
        setLocalAddressList(prevList => [...prevList, newAddress]);
        setIsModalOpen(false);
    };

    const handleDeleteAddress = (id: number) => {
        // 특정 ID를 가진 주소 삭제
        setLocalAddressList(prevList => prevList.filter(address => address.id !== id));
    };

    return (
        <S.Modal>
            <S.ModalContent>
                <S.CloseButton onClick={onClose}>X</S.CloseButton>
                <S.ModalTitle>배송지 선택</S.ModalTitle>
                <div style={{display: 'flex', flexDirection: 'row', border: '1px solid red', height: '40px', marginBottom: '10px'}}>
                <button style={{border: '1px solid blue', width: '80px', fontSize: '14px'}}>군대</button>
                <button style={{border: '1px solid blue', width: '80px', fontSize: '14px'}}>소년원/분류심사원</button>
                <button style={{border: '1px solid blue', width: '80px', fontSize: '14px'}}>구치소/교도소</button>
                </div>
                {localAddressList.map(address => (
                    <S.AddressCard key={address.id}>
                        <S.AddressHeader>
                            <S.Name>{address.name}</S.Name>
                        </S.AddressHeader>
                        <S.AddressInfo>
                            {address.address}, {address.detail}
                            <br />
                        </S.AddressInfo>
                        <S.ButtonWrapper>
                            <S.SelectButton onClick={() => onSelect(address.address)}>선택</S.SelectButton>
                            <S.DeleteButton onClick={() => handleDeleteAddress(address.id)}>삭제</S.DeleteButton>
                        </S.ButtonWrapper>
                    </S.AddressCard>
                ))}

                {/* 주소 입력 모달 */}
                <DeliveryAddressModalContainer
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSave={(fullAddress, detail) => handleSaveAddress(fullAddress, detail)}
                />
                <S.AddButton onClick={() => setIsModalOpen(true)}>추가</S.AddButton>
            </S.ModalContent>
        </S.Modal>
    );
};

export default DeliveryAddressListPresenter;
