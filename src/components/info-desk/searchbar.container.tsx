import {
    Searchbar,
    SearchbarInput,
    SearchOutlinedIcon,
  } from "./searchbar.styles";
  import { ISearchbarsProps } from "./info-desk.types";

  export default function SearchbarContainer(props: ISearchbarsProps) {
    return (
      <Searchbar>
        <SearchOutlinedIcon />
        <SearchbarInput
          placeholder="태그를 입력해 주세요."
          onChange={props.onChangeSearchbar}
        />
      </Searchbar>
    );
  }
  