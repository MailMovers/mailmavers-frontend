import { Common } from "@/styles/common";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1200px;
    height: 100%;
    margin: 20px auto 50px auto;
    padding: 10px;

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 60px;
    }
`

export const Header = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 3px solid ${Common.colors.theme};
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 32px;
        font-weight: 600;
        color: ${Common.colors.theme};

        @media (max-width: 768px) {
            font-size: 28px;
        }
    }
    
    @media (max-width: 768px) {
        height: 60px;
        padding: 0;
    }
`

export const Selector = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: 500;
    gap: 40px;
    cursor: pointer;
    
    button {
        width: 100%;
        height: 50px;
        border: 3px solid transparent;
        border-radius: 10px;
        box-shadow: 0 0px 2px 2px #ddd; /* 내부 그림자 추가 */
        transition: all 0.3s ease;

        &:hover {
            border-color: #A3C586;
        }

        &.active {
            border-color: ${Common.colors.theme}; /* 원하는 활성화 시 테두리 색상 */
            background-color: #E6F5E0; /* 원하는 활성화 시 배경 색상 */
            color: #4A743C; /* 원하는 활성화 시 텍스트 색상 */
            font-weight: 600;
        }
        
        @media(max-width: 768px) {
            font-size: 12px;
            height: 40px;
            font-weight: 600;
        }
    }
    
    @media(max-width: 768px) {
        gap: 10px;
    }
`

export const Body = styled.div`
    width: 100%;
    min-height: 400px;
`
export const NoticeHeader = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
    border-bottom: 1px solid gray;
    padding-bottom: 20px;

    .option {
        flex: 1;
    }

    .title {
        flex: 4;
    }

    .date {
        flex: 1;
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }
`

export const NoticeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;


export const NoticeItem = styled.li<{notice: string}>`
  display: flex;
  justify-content: space-between;
  height: 70px;
  border-bottom: 1px solid #ddd;
  align-items: center;
  text-align: center;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  .option {
    flex: 1;
    font-weight: 500;
    color: ${({ notice }) => (notice === 'important' ? 'red' : 'black')};

  }

  .title {
    flex: 4;
    font-size: 1em;
    white-space: nowrap; /* 한 줄로 표시 */
    overflow: hidden; /* 넘치는 텍스트 숨김 */
    text-overflow: ellipsis;

    @media (max-width: 768px) {
        padding: 0 5px;
    }
  }

  .date {
    flex: 1;
    color: #888;
    font-size: 0.875em;
  }

  &:hover .title,
  &:hover .date {
    text-decoration: underline;
    color: black;
  }

  @media (max-width: 768px) {
    // text-align: start;
    font-size: 10px;
    padding: auto 10px;
  }
`;

export const NoNoticesMessage = styled.div`
    padding: 20px;
    text-align: center;
    color: #888;
    font-size: 16px;
    font-weight: 500;
    margin-top: 100px;

    @media(max-width: 768px) {
        font-size: 12px;
    }

`;