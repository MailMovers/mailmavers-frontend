import React from "react";
import type { Address } from "react-daum-postcode";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal, ModalContent, CloseButton, Button } from "./styles"; // 필요한 스타일들

import { SearchAddressProps } from "./types";

const SearchAddress: React.FC<SearchAddressProps> = ({ isOpen, onClose, onComplete }) => {
    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState("");

    const handleCompleteAddressSearch = (data: Address): void => {
        setAddress(data.address);
        setZipcode(data.zonecode);
        onComplete(data.address, data.zonecode);
        onClose(); // 주소 선택 후 모달 닫기
    };

    if (!isOpen) {
        return null;
    }

    return (
        <Modal>
            <ModalContent>
                <CloseButton onClick={onClose}>X</CloseButton>
                <h2>우편번호 통합검색</h2>

                {/* DaumPostcode Component */}
                <DaumPostcode
                    onComplete={handleCompleteAddressSearch}
                    style={{ width: "100%", height: "400px", marginBottom: "20px" }}
                />

                {/* 선택한 주소 및 우편번호 표시 */}
                {address && (
                    <div style={{ marginTop: "10px" }}>
                        <p>
                            <strong>선택된 주소:</strong> {address}
                        </p>
                        <p>
                            <strong>우편번호:</strong> {zipcode}
                        </p>
                    </div>
                )}
            </ModalContent>
        </Modal>
    );
};

export default SearchAddress;
