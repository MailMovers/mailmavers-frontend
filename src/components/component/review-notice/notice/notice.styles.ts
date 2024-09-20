import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  max-width: 580px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;

  @media(max-width: 768px){
    width: 100%;
    border: none;
    border-top: 1px solid #ddd;


  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 30px;
  padding-bottom: 0px;
  
  h2 {
    margin: 0;
    font-size: 24px;

    .required {
      color: red;
      font-size: medium;
    }
  }

  .view-all {
    color: orange;
    text-decoration: none;
  }

  @media(max-width: 768px){
    padding-left: 0;
    margin-bottom: 20px;

    h2 {
    margin: 0;
    font-size: 18px;

    .required {
      color: red;
      font-size: small;
    }
  }
  }`;

export const NoticeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;


export const NoticeItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  text-align: start;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }

  .title {
    flex: 1;
    font-size: 1em;
    white-space: nowrap; /* 한 줄로 표시 */
    overflow: hidden; /* 넘치는 텍스트 숨김 */
    text-overflow: ellipsis;
    max-width: 250px;
  }

  .date {
    flex-shrink: 0;
    color: #888;
    font-size: 0.875em;
  }

  &:hover .title,
  &:hover .date {
    text-decoration: underline;
    color: blue;
  }

  @media(max-width: 768px){
    text-align: start;
    
  }
`;