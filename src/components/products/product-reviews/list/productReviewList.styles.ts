import styled from "@emotion/styled";
import { Rate, Modal } from "antd";

export const ItemWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid lightgray;
  padding: 20px;
  margin-bottom: 50px;

  @media (max-width:  768px) {
    width: 100%;
    padding: 10px;
}
`;

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  margin-top: -20px; /* 아이콘 위치를 10px 높이기 위해 추가 */
`;


export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Star = styled(Rate)`
  .ant-rate-star-full {
    svg {
      color: orange;
    }
  }
`;
export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
  `
  
  export const ReviewWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgray;
  padding: 20px 0;
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewContent = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;

export const ReviewAuthor = styled.div`
  font-weight: bold;
`;

export const ReviewDate = styled.div`
  color: gray;
  font-size: 14px;
`;

export const ReviewRating = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewBadge = styled.div`
  background-color: #ff69b4;
  color: white;
  width: 50px;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ReviewCount = styled.div`
  font-size: 16px;
  color: gray;
  margin-bottom: 20px;
  margin: 0 auto;
  width: 1200px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;

`;

