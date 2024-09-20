import * as S from "./productReviewWrite.styles";
import type { IBoardCommentWriteUIProps } from "./productReviewWrite.types";
import { useState } from "react";

export default function ProductReviewWriteUI(
  props: IBoardCommentWriteUIProps
): JSX.Element {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  const handleChangeWriter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeContents = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const handleClickWrite = () => {
    console.log("작성 완료:", { writer, password, contents, star });
  };

  return (
    <S.Wrapper>
      {props.isEdit === false && (
        <>
          <S.PencilIcon src="/images/boardComment/write/pencil.png" />
          <span>댓글</span>
        </>
      )}

      <S.InputWrapper>
        <S.Input
          placeholder="작성자"
          onChange={handleChangeWriter}
          value={writer}
          readOnly={props.isEdit}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          onChange={handleChangePassword}
          value={password}
        />
      </S.InputWrapper>
      <S.ContentsWrapper>
      <S.Contents
    maxLength={100}
    onChange={handleChangeContents}
    placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
    value={contents}
  />
        <S.BottomWrapper>
  <S.Star onChange={setStar} />
          <S.ContentsLength>
            {contents.length}/100
          </S.ContentsLength>
          <S.Button onClick={handleClickWrite}>
            등록하기
          </S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}