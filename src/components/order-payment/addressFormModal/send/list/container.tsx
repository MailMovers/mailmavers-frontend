import React, { useState } from 'react';
import AddressListPresenter from './presenter';
import { AddressListContainerProps } from './types';
import { mockPaymentData } from '../../../Body/mocks';

const AddressListContainer: React.FC<AddressListContainerProps> = ({ isOpen, onClose, onSelect }) => {
    const [addressList, setAddressList] = useState(mockPaymentData.addressList); // 초기 주소 리스트
    const handleSelectAddress = (address: string, request: string) => {
        onSelect(address, request);
        onClose(); // 모달 닫기
    };

    return (
        <AddressListPresenter
            isOpen={isOpen}
            onClose={onClose}
            addressList={addressList}
            onSelect={handleSelectAddress}
        />
    );
};

export default AddressListContainer;
