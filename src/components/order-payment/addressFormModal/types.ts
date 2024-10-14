export interface AddressModalContainerProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (address: string, addressDetail: string, phoneNumber: string) => void; // 전화번호 추가
}


export interface AddressModalPresenterProps {
    isOpen: boolean;
    onSave: () => void;
    onClose: () => void;
    address: string;
    addressDetail: string;
    phoneNumber: string;
    selectedRequest: string;
    isDefaultAddress: boolean;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
    setAddressDetail: React.Dispatch<React.SetStateAction<string>>;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
    setSelectedRequest: React.Dispatch<React.SetStateAction<string>>;
    setIsDefaultAddress: React.Dispatch<React.SetStateAction<boolean>>;
    handleSave: () => void;
    isSaveDisabled: boolean; // 추가된 부분
}
