import styled from '@emotion/styled';

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 500px;
    max-width: 90%;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;
`;

export const ModalTitle = styled.h2`
    margin-bottom: 20px;
`;

export const AddressCard = styled.div`
    border: 1px solid gray;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
`;

export const AddressHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const Name = styled.span`
    font-weight: bold;
`;

export const Label = styled.span`
    border: 1px solid gray;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
`;

export const AddressInfo = styled.p`
    font-size: 14px;
    line-height: 1.4;
    color: #555;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const EditButton = styled.button`
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid #007bff;
    background: #fff;
    color: #007bff;
    border-radius: 5px;
`;

export const SelectButton = styled.button`
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    background: #007bff;
    color: #fff;
    border-radius: 5px;
`;


export const AddButton = styled.button`
     padding: 20px 15px;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid gray;
    color: #fff;
    border-radius: 5px;
    background: white;
    color: black ;
    width: 100%;

`

export const DeleteButton = styled.button`
        padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    background: #888;
    color: #fff;
    border-radius: 5px;
    margin-left: 5px;
`