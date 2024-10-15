import React, { useState } from 'react';
import AddressListPresenter from './presenter';
import { DeliveryAddressListContainerProps } from './types';
import { mockPaymentData } from '../../../Body/mocks';

const DeliveryAddressListContainer: React.FC<DeliveryAddressListContainerProps> = ({ isOpen, onClose, onSelect }) => {
    const [addressList, setAddressList] = useState(mockPaymentData.deliveryAddressList); // 초기 주소 리스트
    const handleSearchAddress = (address: string) => {
        onSelect(address);
        onClose(); // 모달 닫기
    };

    return (
        <AddressListPresenter
            isOpen={isOpen}
            onClose={onClose}
            addressList={addressList}
            onSelect={handleSearchAddress}
        />
    );
};

export default DeliveryAddressListContainer;
