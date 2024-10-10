import axios from "axios";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import ProductReviewWriteUI from "./productReviewWrite.presenter";
import {IBoardCommentWriteProps} from './productReviewWrite.types'



const API_URL = "https://your-api-url.com";

const createReviewComment = async () => {
  const response = await axios.post(`${API_URL}/comments`, {

  });
  return response.data;
};

const updateProductComment = async () => {
  const response = await axios.put(`${API_URL}/comments/`, {

  });
  return response.data;
};

export default function ProductReviewWrite(props: IBoardCommentWriteProps): JSX.Element {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  const onClickWrite = async (): Promise<void> => {
    try {
      if (typeof router.query.boardId !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }

      // await createReviewComment({ writer, password, contents, rating: star }, router.query.productId);

      setWriter("");
      setPassword("");
      setContents("");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    if (contents === "") {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (password === "") {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      const updateProductReviewInput: any = {};
      if (contents !== "") updateProductReviewInput.contents = contents;
      if (star !== props.el?.rating) updateProductReviewInput.rating = star;

      if (typeof props.el?._id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      await updateProductReviewInput(updateProductReviewInput, password, props.el?._id);
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <ProductReviewWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      writer={writer}
      password={password}
      contents={contents}
      setStar={setStar}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}