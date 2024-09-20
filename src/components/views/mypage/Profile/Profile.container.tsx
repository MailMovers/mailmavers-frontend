import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "@/recoil/mypage/atom";
import { getUserInfo } from "@/api/auth";
import { TUserInfo } from "@/type/auth";
import { Modal } from "antd";
import { useRouter } from "next/router";
import useSWRMutation from "swr/mutation";
import { putPhone, TPhone } from "@/api/mypage";
import { AxiosError } from "axios";
import { TResMsg } from "@/type/common";
import ProfilePageUI from "./Profile.presenter";

const DEFAULT_INFO: TUserInfo = {
  name: '',
  email: '',
  phone: '',
  createdAt: '',
};

const regexNumber = /^[0-9]+$/;

export default function ProfilePageContainer(): JSX.Element {
  const [modal, contextHolder] = Modal.useModal();
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [userEditInfo, setUserEditInfo] = useState<TUserInfo>(DEFAULT_INFO);
  const [isLoading, setIsLoading] = useState(true);
  const [msgError, setMsgError] = useState<string>('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      setIsLoading(true);
      try {

        const info = await getUserInfo();
        if (info) {
          setUserInfo(info);
          setUserEditInfo(info);
        } else {
          console.error("User info is null");
          setMsgError("사용자 정보를 불러올 수 없습니다.");
        }
      } catch (error) {
        console.error("사용자 정보 가져오기 실패:", error);
        setMsgError("사용자 정보를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserInfo();
  }, [setUserInfo]);



  const { trigger, isMutating } = useSWRMutation(
    '/mypage',
    putPhone,
    {
      onSuccess: () => {
        modal.success({
          title: '정보 변경 완료',
          content: '정보를 변경하였습니다.',
        });
        setUserEditInfo({ ...userEditInfo, ...userInfo });
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



  const movePasswordChange = () => {
    router.push('/mypage/password');
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      if (value === '' || regexNumber.test(value)) {
        setUserEditInfo(prev => ({ ...prev, [name]: value.replace(/[^0-9]/g, '') }));
      }
    } else {
      setUserEditInfo(prev => ({ ...prev, [name]: value }));
    }
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

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <ProfilePageUI
      contextHolder={contextHolder}
      isMutating={isMutating}
      userEditInfo={userEditInfo}
      handleInput={handleInput}
      onSubmit={onSubmit}
      msgError={msgError}
      movePasswordChange={movePasswordChange}
      userInfo={userInfo}
    />
  );
}