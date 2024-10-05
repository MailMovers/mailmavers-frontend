import styled from "@emotion/styled";
import { Common } from "styles/common";

export const Wrapper = styled.div`
    width: 1200px;
    margin: 20px auto 50px auto;
    height: 100%;
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

    div {
        width: 30px;
        height: 30px;
        text-align: center;
        padding-top: 4px;
        background-color: ${Common.colors.yellow};
        color: white;
        cursor: pointer;

        &:hover {
            background-color: gray; // 배경색 변경
        }
    }

    
    @media (max-width: 768px) {
        height: 60px;
        padding: 0;
    }
`

export const Body = styled.div`
    // padding: 20px;
`
export const Title = styled.div<{notice: string | undefined}>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${Common.colors.theme};
    font-size: 24px;
    font-weight: 600;
    

    p, span {
        padding: 20px;
        @media (max-width: 768px) {
            font-size: 20px;
            height: 30px;
        }
    }

    .option {
        font-size: 20px;
        color: ${({ notice }) => (notice === 'important' ? 'red' : 'black')};
    }

    .date {
        display: flex;
        
        p, span {
            font-size: 16px;
            font-weight: 500;
            color: #aaa;
            
            @media (max-width: 768px) {
                font-size: 14px;
            }
        }
            
        span {
            @media (max-width: 768px) {
                display: none;
            }
        }
    }
        
    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-bottom: 10px;
    }
`

export const content = styled.div`
    width: 100%;
    min-height: 300px;
    padding: 20px;
    margin-top: 20px;
    border-bottom: 1px solid #ccc;

    p {
        font-size: 18px;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
`
export const Footer = styled.div`

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
    
    @media(max-width: 768px) {
        padding: 5px;
    }
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
        padding: 0 10px;
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
    font-size: 12px;
    padding: auto 10px;
  }
`;