import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Common } from "@/styles/common";

export const Searchbar = styled.div`
  width: 610px;
  height: 52px;
  border-radius: 15px;
  background-color: ${Common.colors.gray04};
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchOutlinedIcon = styled(SearchOutlined)`
  color: ${Common.colors.theme};
  font-size: 30px;
  cursor: pointer;

  :hover {
    color: red;
  }
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
`;
