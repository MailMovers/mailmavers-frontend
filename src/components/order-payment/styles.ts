import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const SubSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Title = styled.h3`
  margin-bottom: 15px;
  font-size: 18px;
  color: #333;
`;

export const Label = styled.label`
  width: 120px;
  font-weight: bold;
  color: #555;
`;

export const Value = styled.span`
  flex-grow: 1;
  padding: 5px;
  font-size: 16px;
  color: #333;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Select = styled.select`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
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

export const Error = styled.div`

`