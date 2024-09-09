import { useRouter } from 'next/navigation';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Modal } from 'antd';
import { postUserEmailCheck, postUserSignup } from '@/api/auth';
import {
  emailRegex,
  passwordRegex,
  nameRegex,
  numberRegex,
} from '@/common/util';
import { AxiosError } from 'axios';
import { AxiosResponseData } from '@/type/common';
import useInput from '@/hooks/useInput';
import SignUpPageUI from './signUp.presenter';
import { SignUpPageUIProps } from './signUp.types';


export default function SignUpContainer() {
  const router = useRouter();
  const [modal, contextHolder] = Modal.useModal();

  const [signUpError, setSignUpError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [mismatchError, setMismatchError] = useState(false);
  const [emailSendSuccess, setEmailSendSuccess] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [emailFirst, onChangeEmailFirst] = useInput('');
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('');
  const [password, , setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [name, , setName] = useInput('');
  const [phone, , setPhone] = useInput('');
  const [authNumber, onChangeAuthNumber] = useInput('');
  const [isCustomDomain, setIsCustomDomain] = useState(false);
  const [checkEmailMsg, setCheckEmailMsg] = useState('');
  const [inputMode, setInputMode] = useState('select');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneError, setphoneError] = useState<string | null>(null);
  const [checkList, setCheckList] = useState<string[]>([]);
  const [isMarketingAgree, setIsMarketingAgree] = useState<boolean>(false);
  const [buttonColor, setButtonColor] = useState<boolean>(false);

  // 약관 체크
  useEffect(() => {
    if (
      checkList.includes('checkAge') &&
      checkList.includes('checkMarketing') &&
      checkList.includes('checkInfo') &&
      checkList.includes('checkService')
    ) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
    if(checkList.includes('checkMarketing')){
      setIsMarketingAgree(true);
    } else {
      setIsMarketingAgree(false);
    }
  }, [checkList]);
  console.log(isMarketingAgree);

  // 이메일 형식 확인기능 / 에러메세지
  const checkEmail = (email: string) => {
    const checkEmailValidation = email.match(emailRegex);
    if (!email || !checkEmailValidation) {
      if (!email) {
        setEmailError('이메일을 입력해주세요.');
        return false;
      } else {
        setEmailError('이메일 형식을 올바르게 입력해주세요.');
        return false;
      }
    }
    setEmailError(null);
    return true;
  };

  // 이메일과 도메인 합치기
  const mergeEmail = (emailFirst: string, domain: string) => {
    return `${emailFirst.trim()}@${domain.trim()}`;
  };

  // 이메일 입력 핸들러
  function handleChangeEmailFirst(e: ChangeEvent<HTMLInputElement>) {
    onChangeEmailFirst(e);
    const email = mergeEmail(e.target.value, domain);
    setEmail(email);
    checkEmail(email);
  }

  // 도메인 선택 핸들러
  function handleChangeDomain(e: ChangeEvent<HTMLSelectElement>) {
    const selectedOption = e.target.selectedOptions[0];
    // Check for custom input
    if (selectedOption.value === '직접입력') {
      setInputMode('input'); // Switch to 'input' mode
      setDomain('');
    } else {
      setDomain(selectedOption.value);
      const email = mergeEmail(emailFirst, selectedOption.value);
      setEmail(email);
      checkEmail(email);
    }
  }

  // 도메인 직접 입력
  function onChangeCustomDomain(e: ChangeEvent<HTMLInputElement>) {
    const inputDomain = e.target.value;
    setDomain(inputDomain);
    const email = mergeEmail(emailFirst, inputDomain);
    setEmail(email);
    checkEmail(email);
  }

  // 도메인 직접 입력 클릭시 셀렉트바 보이게 돌아가기
  function handleInputModeChange() {
    setInputMode((prevMode) => (prevMode === 'input' ? 'select' : 'input'));
    console.log("버튼 클릭됨")
  }

  // 이메일 중복 확인 버튼
  const checkEmailAuthentication = () => {
    if (!email) {
      setCheckEmailMsg('이메일을 입력해주세요.');
      console.log('이메일 입력 완료.');
      return;
    }
    postUserEmailCheck(email)
      .then((res) => {
        setCheckEmailMsg('사용가능한 이메일 입니다.');
        setEmailSendSuccess(true);
      })
      .catch((error: AxiosError<AxiosResponseData>) => {
        if (error.response && error.response?.data.message) {
          // alert(error.response?.data.message);
          setCheckEmailMsg(error.response?.data.message);
          setEmailSendSuccess(false);
        } else {
          // 기타 에러 처리
          console.log('알 수 없는 에러가 발생했습니다.');
          setEmailSendSuccess(false);
        }
      });
  };

  // 비밀번호 입력 핸들러
  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      setMismatchError(passwordCheck !== e.target.value);
      checkPassword(e.target.value);
    },
    [passwordCheck]
  );

  // 비밀번호 형식 확인기능 / 에러메세지
  const checkPassword = (password: string) => {
    const checkPasswordValidation = password.match(passwordRegex)
      ? true
      : false;
    if (!checkPasswordValidation) {
      setPasswordError(
        '비밀번호는 영문 대소문자, 숫자, 특수기호를 포함하여 8자 이상이어야 합니다.'
      );
      return false;
    } else {
      setPasswordError(''); // 비밀번호가 유효할 때 passwordError 상태 초기화
      return true; // 비밀번호가 유효할 때 true 반환
    }
  };

  // 비밀번호 확인 입력 핸들러
  const onChangePasswordCheck = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      setMismatchError(password !== e.target.value);
      // checkPassword();
    },
    [password]
  );

  // 이름 입력 핸들러
  const onChangeName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
      setNameError(null); // Clear name error when user starts typing again
      checkName(e.target.value);
    },
    [name]
  );

  // 이름 형식 확인기능 / 에러메세지
  const checkName = (name: string) => {
    const checkNameValidation = name.match(nameRegex);

    if (!name || !checkNameValidation) {
      if (!name) {
        setNameError('성명을 입력해주세요.');
        return false;
      } else {
        setNameError('이름을 2자 이상 입력해주세요.');
        return false;
      }
    }
    setNameError(null);
    return true; // Name is valid
  };

  // 연락처 입력 핸들러
  const onChangePhone = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPhone(e.target.value);
      setphoneError(null); // Clear name error when user starts typing again
      checkPhoneNumber(e.target.value);
    },
    [name]
  );

  // 연락처 형식 확인기능 / 에러메세지
  const checkPhoneNumber = (phone: string) => {
    const checkPhoneNumberValidation = phone.match(numberRegex);

    if (!phone || !checkPhoneNumberValidation) {
      if (!phone) {
        setphoneError('연락처를 입력해주세요.');
        return false;
      } else {
        setphoneError('연락처를 형식에 맞춰 입력해주세요.');
        return false;
      }
    }
    setphoneError(null);
    return true; //valid
  };

  // 약관 전체 체크
  const checkAll = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCheckList([
          'checkAge',
          'checkService',
          'checkInfo',
          'checkMarketing',
        ])
      : setCheckList([]);

  };

  // 약관 개별 체크
  const check = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter((choice) => choice !== e.target.name));
  };

  // 회원가입 제출 버튼
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Check if any of the required fields is empty
      if (!emailSendSuccess || !password || !passwordCheck || !name || !phone) {
        alert('모든 필수 항목을 확인해주세요.');
        return;
      }

      if (checkEmail(email) && !mismatchError) {
        setSignUpError(false);
        setSignUpSuccess(false);
        postUserSignup(name, email, phone, password, passwordCheck, isMarketingAgree)
          .then((res) => {
            setSignUpSuccess(true);
            modal.confirm({
              title: '회원가입 완료',
              content: '회원가입이 완료되었습니다. 로그인해주세요.',
              okText: '확인',
              cancelText: '취소',
              onOk: () => router.push('/'),
              onCancel: () => router.push('/'),
            });

            if (res.data.status === 200) {
            }
          })
          .catch((error) => {
            console.log(error.response?.data);
            setSignUpError(error.response?.data?.code === 400);
          });
      }
    },
    [name, email, phone, password, passwordCheck, mismatchError, isMarketingAgree]
  );
  
  const signUpProps: SignUpPageUIProps = {
    formData: {
      emailFirst,
      email,
      domain,
      password,
      passwordCheck,
      name,
      phone,
      authNumber,
    },
    formErrors: {
      emailError,
      passwordError,
      nameError,
      phoneError,
    },
    formState: {
      signUpError,
      signUpSuccess,
      mismatchError,
      emailSendSuccess,
      isEmailVerified,
      isCustomDomain,
      inputMode,
      checkEmailMsg,
      checkList,
      buttonColor,
    },
    handlers: {
      handleChangeEmailFirst,
      handleChangeDomain,
      onChangeCustomDomain,
      handleInputModeChange,
      checkEmailAuthentication,
      onChangePassword,
      onChangePasswordCheck,
      onChangeName,
      onChangePhone,
      checkAll,
      check,
      onSubmit,
    },
  };

  return (
    <>
      {contextHolder}
      <SignUpPageUI {...signUpProps} />
    </>
  );
}