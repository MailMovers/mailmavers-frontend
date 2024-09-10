import useSWRMutation from "swr/mutation";
import ProfilePageUI from "./Profile.presenter";
import { putPhone, TPhone } from "@/api/mypage";
import { AxiosError } from "axios";
import { TResMsg } from "@/type/common";
import { Modal } from "antd";
import { useRecoilValue } from "recoil";
import { ChangeEvent, useEffect, useState } from "react";
import { TUserInfo } from "@/type/auth";
import { userInfoAtom } from "@/recoil/mypage/atom";

const DEFAULT_INFO: TUserInfo = {
    name: '',
    email: '',
    phone: '',
    created_at: '',
  };

const regexNumber = /^[0-9]+$/;

export default function ProfilePageContainer ():JSX.Element {
    const [modal, contextHolder] = Modal.useModal();

    const { trigger, isMutating } = useSWRMutation(
      '/user/update-phone',
      putPhone,
      {
        onSuccess: (res) => {
          modal.success({
            title: '정보 변경 완료',
            content: '정보를 변경하였습니다.',
          });
          setUserEditInfo({ ...DEFAULT_INFO, ...userInfo });
        },
        onError: (res: AxiosError<TResMsg>) => {
          modal.error({
            title: '정보 변경 실패',
            content: res.response?.data.message,
          });
          setMsgError(
            res.response?.data.message || '예상치 못한 에러가 발생했습니다.'
          );
        },
      }
    );
  

  const userInfo = useRecoilValue(userInfoAtom);

  const [userEditInfo, setUserEditInfo] = useState<TUserInfo>(DEFAULT_INFO);
  const [msgError, setMsgError] = useState<string>('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setUserEditInfo({ ...userEditInfo, phone: e.target.value });
    }
    if (regexNumber.test(e.target.value)) {
      const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
      setUserEditInfo({ ...userEditInfo, phone: onlyNumber });
    }
    return;
  };

  const onSubmit = () => {
    if (!userEditInfo.phone) {
      setMsgError('전화번호를 입력해주세요.');
      return;
    }
  
    const params: TPhone = {
      newPhone: userEditInfo.phone,
    };
  
    trigger(params);
  };

  useEffect(() => {
    if (userInfo) setUserEditInfo({ ...userEditInfo, ...userInfo });
  }, [userInfo]);


    return(
        <ProfilePageUI
        contextHolder = {contextHolder}
        isMutating = {isMutating}
        userEditInfo = {userEditInfo}
        handleInput = {handleInput}
        onSubmit = {onSubmit}
        msgError = {msgError}
        />
    )
}