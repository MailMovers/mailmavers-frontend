import React, { useState } from 'react';
import AddressModalPresenter from './presenter';
import { AddressModalContainerProps } from './types';

const AddressModalContainer: React.FC<AddressModalContainerProps> = ({ isOpen, onClose, onSave }) => {
    const [address, setAddress] = useState<string>('');
    const [addressDetail, setAddressDetail] = useState<string>('');
    const [selectedRequest, setSelectedRequest] = useState<string>('');
    const [isDefaultAddress, setIsDefaultAddress] = useState<boolean>(false);

    const isSaveDisabled = !address || !addressDetail;

    const handleSave = () => {
        if (isSaveDisabled) return; // 모든 필드가 채워지지 않으면 저장하지 않음
        onSave(address, addressDetail); // 저장 시 전화번호를 제외함
        onClose();
    };

    return (
        <AddressModalPresenter
            isOpen={isOpen}
            onSave={handleSave}
            onClose={onClose}
            address={address}
            addressDetail={addressDetail}
            selectedRequest={selectedRequest}
            isDefaultAddress={isDefaultAddress}
            setAddress={setAddress}
            setAddressDetail={setAddressDetail}
            setSelectedRequest={setSelectedRequest}
            setIsDefaultAddress={setIsDefaultAddress}
            handleSave={handleSave}
            isSaveDisabled={isSaveDisabled}
        />
    );
};

export default AddressModalContainer;
