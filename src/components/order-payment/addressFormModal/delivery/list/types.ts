export interface DeliveryAddress {
    id: number;
    name: string;
    address: string;
    detail: string;
}

export interface DeliveryAddressListContainerProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (address: string) => void;
}

export interface DeliveryAddressListPresenterProps {
    isOpen: boolean;
    onClose: () => void;
    addressList: DeliveryAddress[];
    onSelect: (address: string) => void; // onSelect 함수가 두 개의 인수를 받도록 수정
}
