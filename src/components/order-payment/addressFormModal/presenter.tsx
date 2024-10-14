import React, { useState } from 'react';
import * as S from './styles';
import { AddressModalPresenterProps } from './types';
import SelectAddress from './select/select.container'; // SelectAddress 모달 컴포넌트 임포트

const AddressModalPresenter: React.FC<AddressModalPresenterProps> = ({
    isOpen, onClose, address, addressDetail, selectedRequest,
    phoneNumber, isDefaultAddress, setAddress, setAddressDetail,
    setSelectedRequest, setPhoneNumber, setIsDefaultAddress,
    handleSave, isSaveDisabled
}) => {
    const [isSelectAddressOpen, setIsSelectAddressOpen] = useState(false); // 우편번호 찾기 모달 상태 관리

    if (!isOpen) {
        return null;
    }

    const handleOpenSelectAddress = () => {
        setIsSelectAddressOpen(true);
    };

    const handleCloseSelectAddress = () => {
        setIsSelectAddressOpen(false);
    };

    const handleCompleteAddress = (newAddress: string, zipcode: string) => {
        setAddress(newAddress);
        setIsSelectAddressOpen(false);
    };

    const getInputBorderStyle = (value: string) => value ? '' : '1px solid red';

    return (
        <>
            <S.Modal>
                <S.ModalContent>
                    <S.CloseButton onClick={onClose}>X</S.CloseButton>
                    <S.ModalTitle>배송지 추가</S.ModalTitle>

                    {/* 우편번호 찾기 */}
                    <S.ModalSection>
                        <S.Label>우편번호 찾기</S.Label>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <S.Input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="우편번호 찾기"
                                style={{ flexGrow: 1, border: getInputBorderStyle(address) }}
                            />
                            <S.IconButton onClick={handleOpenSelectAddress}>🔍</S.IconButton>
                        </div>
                    </S.ModalSection>

                    {/* 전화번호 */}
                    <S.ModalSection>
                        <S.Label>전화번호 <span style={{ color: 'red', fontSize: '12px' }}>(전화번호 필수입력)</span></S.Label>
                        <S.Input
                            style={{ marginTop: '10px', border: getInputBorderStyle(phoneNumber) }}
                            placeholder="전화번호"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </S.ModalSection>

                    {/* 주소 및 상세주소 입력 */}
                    <S.ModalSection>
                        <S.Label>주소 <span style={{ color: 'red', fontSize: '12px' }}>(상세주소 필수입력)</span></S.Label>
                        <S.Input
                            placeholder="주소"
                            value={address}
                            readOnly
                            style={{ border: getInputBorderStyle(address) }}
                        />
                        <S.Input
                            style={{ marginTop: '10px', border: getInputBorderStyle(addressDetail) }}
                            placeholder="상세주소 '호수 정확히 입력'"
                            value={addressDetail}
                            onChange={(e) => setAddressDetail(e.target.value)}
                        />
                    </S.ModalSection>

                    {/* 기본 배송지 선택 */}
                    <S.ModalSection style={{ display: 'flex', alignItems: 'center' }}>
                        <S.Checkbox
                            type="checkbox"
                            checked={isDefaultAddress}
                            onChange={() => setIsDefaultAddress(!isDefaultAddress)}
                        />
                        <S.Label>기본 배송지로 선택</S.Label>
                    </S.ModalSection>

                    {/* 저장 버튼 */}
                    <S.ModalFooter>
                        <S.Button onClick={handleSave} disabled={isSaveDisabled}>저장</S.Button>
                    </S.ModalFooter>
                </S.ModalContent>
            </S.Modal>

            {/* 우편번호 찾기 모달 */}
            {isSelectAddressOpen && (
                <SelectAddress
                    isOpen={isSelectAddressOpen}
                    onClose={handleCloseSelectAddress}
                    onComplete={handleCompleteAddress}
                />
            )}
        </>
    );
};

export default AddressModalPresenter;
