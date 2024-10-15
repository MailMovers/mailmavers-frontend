import styled from '@emotion/styled';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 500px;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #555;

  &:hover {
    color: #000;
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: bold;
`;

export const ModalSection = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const IconButton = styled.button`
  margin-left: 10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ModalFooter = styled.div`
  text-align: center;
  margin-top: 20px;
`;
