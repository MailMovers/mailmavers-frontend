import { useState, ChangeEvent, MouseEvent } from "react";
import * as S from "./productReviewList.styles";
import { useRouter } from "next/router";
import { getDate } from "../../../../common/utils";
import BoardCommentWrite from "../write/productReviewWrite.container";
import { IProductReviewListUIItemProps } from "./productReviewList.types";

export default function ProductReviewListUIItem(props: IProductReviewListUIItemProps): JSX.Element {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");

  const onClickUpdate = (): void => {
    setIsEdit(true);
  };

  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
    try {
      console.log("Delete Comment", password, props.el._id);
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickOpenDeleteModal = (event: MouseEvent<HTMLImageElement>): void => {
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  return (
    <>
      {isOpenDeleteModal && (
        <S.PasswordModal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </S.PasswordModal>
      )}
      {!isEdit ? (
        <S.ItemWrapper>
                <S.ReviewBadge>NEW</S.ReviewBadge>
         <S.ReviewHeader>
           <S.ReviewAuthor>{props.el.writer}</S.ReviewAuthor>
           <S.ReviewDate>{getDate(props.el.createdAt)}</S.ReviewDate>
         </S.ReviewHeader>
         <S.ReviewRating>
           <S.Star value={props.el.rating} disabled />
         </S.ReviewRating>
         <S.ReviewContent>{props.el.contents}</S.ReviewContent>
         <S.OptionWrapper>
            <S.UpdateIcon src="/images/boardComment/list/option_update_icon.png/" onClick={onClickUpdate} />
            <S.DeleteIcon src="/images/boardComment/list/option_delete_icon.png/" onClick={onClickOpenDeleteModal} />
          </S.OptionWrapper>
       </S.ItemWrapper>
      ) : (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}