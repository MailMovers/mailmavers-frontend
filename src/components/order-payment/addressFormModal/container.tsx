import React, { useState } from 'react';
import AddressModalPresenter from './presenter';
import { AddressModalContainerProps } from './types';

const AddressModalContainer: React.FC<AddressModalContainerProps> = ({ isOpen, onClose, onSave }) => {
    const [address, setAddress] = useState<string>('');
    const [addressDetail, setAddressDetail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>(''); // 전화번호 상태 추가
    const [selectedRequest, setSelectedRequest] = useState<string>('');
    const [isDefaultAddress, setIsDefaultAddress] = useState<boolean>(false);

    const isSaveDisabled = !phoneNumber || !address || !addressDetail;

    const handleSave = () => {
        if (isSaveDisabled) return; // 모든 필드가 채워지지 않으면 저장하지 않음
        onSave(address, addressDetail, phoneNumber); // 전화번호 추가하여 저장
        onClose();
    };

    return (
        <AddressModalPresenter
            isOpen={isOpen}
            onSave={handleSave}
            onClose={onClose}
            address={address}
            addressDetail={addressDetail}
            phoneNumber={phoneNumber} // 전화번호 전달
            selectedRequest={selectedRequest}
            isDefaultAddress={isDefaultAddress}
            setAddress={setAddress}
            setAddressDetail={setAddressDetail}
            setPhoneNumber={setPhoneNumber} // 전화번호 업데이트 함수 전달
            setSelectedRequest={setSelectedRequest}
            setIsDefaultAddress={setIsDefaultAddress}
            handleSave={handleSave}
            isSaveDisabled={isSaveDisabled} // 버튼 비활성화 여부 전달
        />
    );
};

export default AddressModalContainer;
