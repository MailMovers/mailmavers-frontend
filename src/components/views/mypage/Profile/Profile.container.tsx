import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfoAtom } from "@/recoil/mypage/atom";
import { getUserInfo } from "@/api/auth";
import { TUserInfo } from "@/type/auth";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { putPhone, TPhone } from "@/api/mypage";  // 수정된 함수 import
import { AxiosError } from "axios";
import { TResMsg } from "@/type/common";
import ProfilePageUI from "./Profile.presenter";
import { tokenAtom } from "@/recoil/auth/atom";

const DEFAULT_INFO: TUserInfo = {
  name: '',
  email: '',
  phone: '',
  createdAt: '',
};

const regexNumber = /^[0-9]+$/;
const regexPhone = /^\d{3}-\d{3,4}-\d{4}$/;

export default function ProfilePageContainer(): JSX.Element {
  const [modal, contextHolder] = Modal.useModal();
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const token = useRecoilValue(tokenAtom);
  const [userEditInfo, setUserEditInfo] = useState<TUserInfo>(DEFAULT_INFO);
  const [isLoading, setIsLoading] = useState(true);
  const [msgError, setMsgError] = useState<string>('');
  const [phoneParts, setPhoneParts] = useState({ part1: '', part2: '', part3: '' });

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!token?.accessToken) return;
      setIsLoading(true);
      try {
        const info = await getUserInfo();
        if (info) {
          setUserInfo(info);
          setUserEditInfo(info);
          const phoneParts = info.phone.split('-');
          setPhoneParts({
            part1: phoneParts[0] || '',
            part2: phoneParts[1] || '',
            part3: phoneParts[2] || '',
          });
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
  }, [token, setUserInfo]);

  const movePasswordChange = () => {
    router.push('/mypage/password');
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (value === '' || regexNumber.test(value)) {  // 빈 값이거나 숫자인 경우에만 업데이트
      setPhoneParts(prev => {
        const newPhoneParts = { ...prev, [id]: value };
        const newPhone = `${newPhoneParts.part1}-${newPhoneParts.part2}-${newPhoneParts.part3}`;
        if(newPhone != '' && regexPhone.test(newPhone)) {
        setUserEditInfo(prev => ({ ...prev, phone: newPhone }));
      }
      return newPhoneParts;
      });
    }
    console.log('바뀔 전화번호', userEditInfo.phone);
  };

  const onSubmit = async () => {
    const phone = `${phoneParts.part1}-${phoneParts.part2}-${phoneParts.part3}`;
    if (!phoneParts.part1 || !phoneParts.part2 || !phoneParts.part3) {
      setMsgError('전화번호를 입력해주세요.');
      return;  // 함수 실행 중단
    }

    if (!regexPhone.test(phone)) {
      setMsgError('유효한 전화번호 형식이 아닙니다.');
      return;  // 함수 실행 중단
    }
    console.log(typeof phone)
    console.log("제출할 전화번호:", phone);  // 제출할 전화번호 확인

    const phoneData: TPhone = { phone };  // TPhone 타입의 객체 생성

    try {
      const response = await putPhone(phoneData);  // TPhone 타입의 객체를 전달
      modal.success({
        title: '정보 변경 완료',
        content: '정보를 변경하였습니다.',
      });
      setUserEditInfo({ ...userEditInfo, phone });
    } catch (error) {  // catch 블록에서 error 매개변수 추가
      const axiosError = error as AxiosError<TResMsg>;
      console.error("전화번호 변경 실패:", axiosError);
      console.error("서버 응답 데이터:", axiosError.response?.data);  // 서버 응답 데이터 출력

      modal.error({
        title: '정보 변경 실패',
        content: axiosError.response?.data.message || '예상치 못한 에러가 발생했습니다.',
      });
      setMsgError(
        axiosError.response?.data.message || '예상치 못한 에러가 발생했습니다.'
      );
    }
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <ProfilePageUI
      contextHolder={contextHolder}
      isMutating={false}  // isMutating은 더 이상 사용되지 않음
      userEditInfo={userEditInfo}
      handleInput={handleInput}
      onSubmit={onSubmit}
      msgError={msgError}
      movePasswordChange={movePasswordChange}
      userInfo={userInfo}
      phoneParts={phoneParts}
    />
  );
}