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
  height: 510px;
  padding: 20px;
  background-color: #fff;

  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: relative;

  h2 {
    text-align: center;
    margin-bottom: 15px;
    font-size: 18px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 8px;
      &:before {
        content: "▪ ";
        color: #555;
      }
    }
  }
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

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 5px;
  font-size: 16px;
  width: 100px;
  height: 40px; 
  margin-left: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ModalSection = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
  }

  div {
    display: flex;
    align-items: center;

    button {
      margin-left: 10px;
    }
  }
`;
