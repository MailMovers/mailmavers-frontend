import React, { useState } from 'react';
import * as S from './styles';
import { AddressListPresenterProps, Address } from './types';
import AddressModalContainer from '../../addressFormModal/container';

const AddressListPresenter: React.FC<AddressListPresenterProps> = ({ isOpen, onClose, addressList, onSelect }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [localAddressList, setLocalAddressList] = useState<Address[]>(addressList); // 주소 리스트 상태 관리

    if (!isOpen) {
        return null;
    }

    const handleSaveAddress = (fullAddress: string, detail: string, phone: string) => {
        // 새 주소 객체 생성
        const newAddress: Address = {
            id: localAddressList.length + 1, // 새로운 주소에 고유 ID 부여
            name: '사용자', // 새 주소의 기본 이름
            phone: phone, // 전화번호 저장
            address: fullAddress,
            detail: detail,
            request: '일반배송 정보를 선택해 주세요.', // 기본 요청사항 설정
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
                {localAddressList.map(address => (
                    <S.AddressCard key={address.id}>
                        <S.AddressHeader>
                            <S.Name>{address.name}</S.Name>
                            <S.Label>{address.request}</S.Label>
                        </S.AddressHeader>
                        <S.AddressInfo>
                            {address.address}, {address.detail}
                            <br />
                            {address.phone}
                        </S.AddressInfo>
                        <S.ButtonWrapper>
                            <S.SelectButton onClick={() => onSelect(address.address, address.request)}>선택</S.SelectButton>
                            <S.DeleteButton onClick={() => handleDeleteAddress(address.id)}>삭제</S.DeleteButton>
                        </S.ButtonWrapper>
                    </S.AddressCard>
                ))}

                {/* 주소 입력 모달 */}
                <AddressModalContainer
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSave={(fullAddress, detail, phone) => handleSaveAddress(fullAddress, detail, phone)}
                />
                <S.AddButton onClick={() => setIsModalOpen(true)}>추가</S.AddButton>
            </S.ModalContent>
        </S.Modal>
    );
};

export default AddressListPresenter;
