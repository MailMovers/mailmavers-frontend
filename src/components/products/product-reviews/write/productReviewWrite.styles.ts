import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
  padding: 20px;
  margin-bottom: 50px;

  @media (max-width:  768px) {
    width: 100%;
}
`;

export const PencilIcon = styled.img``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;

  @media (max-width:  768px) {
    flex-direction: row;
  }
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;

  @media (max-width:  768px) {
    width: 100%;
    padding-left: 20px;
    margin-right: 3px;
    height: 42px;
  }
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;

  @media (max-width:  768px) {
    font-size: 14px;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: black;
  color: white;
  cursor: pointer;

  @media (max-width:  768px) {
    width: 50%;
  }
`;

export const Star = styled(Rate)`
width: 200px;
padding-top: 15px;
margin-left: 15px;
.ant-rate-star-full {
    svg {
      color: orange;
    }
  }

@media (max-width:  768px) {
    width: 100%;
  }
`;

