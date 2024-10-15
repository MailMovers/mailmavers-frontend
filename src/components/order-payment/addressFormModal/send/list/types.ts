export interface Address {
    id: number;
    name: string;
    address: string;
    detail: string;
    request: string;
}

export interface AddressListContainerProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (address: string, request: string,) => void;
}

export interface AddressListPresenterProps {
    isOpen: boolean;
    onClose: () => void;
    addressList: Address[];
    onSelect: (address: string, request: string) => void; // onSelect 함수가 두 개의 인수를 받도록 수정
}
