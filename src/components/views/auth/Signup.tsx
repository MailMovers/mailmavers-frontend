import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Modal } from 'antd';
import { postUserEmailCheck, postUserSignup } from '@/api/auth';
import {
  emailRegex,
  passwordRegex,
  nameRegex,
  numberRegex,
} from '@/common/util';
import useInput from '@/hooks/useInput';
import {
  container,
  wrap,
  title,
  form,
  inputLocal,
  layout,
  logo,
  inputGroup,
  formDivDefalutMagin,
  passwordRegexGuide,
  emailAuthenticationBtn,
  emailAt,
  selectToInputBtn,
  checkboxGroup,
  checkboxWrap,
  checkboxBtn,
  checkboxBtnClick,
  checkboxInstructions,
  checkboxInstruction,
} from './Signup.styles';
// import Timer from '@/components/signup/Timer';
import { AxiosError } from 'axios';
import { AxiosResponseData } from '@/type/common';

const domainOptions = [
  { value: '', label: '선택해주세요', disabled: true }, // Default placeholder option
  { value: 'gmail.com', label: 'gmail.com' },
  { value: 'naver.com', label: 'naver.com' },
  { value: 'daum.net', label: 'daum.net' },
  { value: 'hotmail.com', label: 'hotmail.com' },
  { value: '직접입력', label: '직접 입력' }, // Option for custom input
];

export default function Signup() {
  const router = useRouter();
  const [modal, contextHolder] = Modal.useModal();

  const [signUpError, setSignUpError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [mismatchError, setMismatchError] = useState(false);
  const [emailSendSuccess, setEmailSendSuccess] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [emailFirst, onChangeEmailFirst] = useInput('');
  const [domain, setDomain] = useState('');
  const [password, , setPassword] = useInput('');
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
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
  const [buttonColor, setButtonColor] = useState<boolean>(false);

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
  }, [checkList]);

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

  const mergeEmail = (emailFirst: string, domain: string) => {
    return `${emailFirst.trim()}@${domain.trim()}`;
  };

  // onChangeEmailFirst 핸들러
  function handleChangeEmailFirst(e: ChangeEvent<HTMLInputElement>) {
    onChangeEmailFirst(e);
    const email = mergeEmail(e.target.value, domain);
    setEmail(email);
    checkEmail(email);
  }

  // onChangeDomain 핸들러
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

  function onChangeCustomDomain(e: ChangeEvent<HTMLInputElement>) {
    const inputDomain = e.target.value;
    setDomain(inputDomain);
    const email = mergeEmail(emailFirst, inputDomain);
    setEmail(email);
    checkEmail(email);
  }

  // handleInputModeChange 핸들러 추가
  function handleInputModeChange() {
    setInputMode((prevMode) => (prevMode === 'input' ? 'select' : 'input'));
  }

  const checkEmailAuthentication = () => {
    if (!email) {
      setCheckEmailMsg('이메일을 입력해주세요.');
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

  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      setMismatchError(passwordCheck !== e.target.value);
      checkPassword(e.target.value);
    },
    [passwordCheck]
  );

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

  const onChangePasswordCheck = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      setMismatchError(password !== e.target.value);
      // checkPassword();
    },
    [password]
  );

  const onChangeName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
      setNameError(null); // Clear name error when user starts typing again
      checkName(e.target.value);
    },
    [name]
  );

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

  const onChangePhone = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPhone(e.target.value);
      setphoneError(null); // Clear name error when user starts typing again
      checkPhoneNumber(e.target.value);
    },
    [name]
  );

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

  const check = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter((choice) => choice !== e.target.name));
  };

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
        postUserSignup(name, email, phone, password, passwordCheck)
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
    [name, email, phone, password, passwordCheck, mismatchError]
  );

  return (
    <div css={layout}>
      {contextHolder}
      <section css={container}>
        <img css={logo} src='/images/logo2.png' alt='로고' />
        <div css={wrap}>
          <h1 css={title}>회원가입</h1>
          <form css={form} onSubmit={onSubmit}>
            <div>
              <label>이메일</label>
              <div css={inputGroup}>
                <span css={inputLocal}>
                  <input
                    type='emailFirst'
                    id='emailFirst'
                    name='emailFirst'
                    value={emailFirst}
                    onChange={handleChangeEmailFirst}
                    ref={emailRef}
                    placeholder='이메일'
                  />
                </span>
                <span css={emailAt}>@</span>
                <span css={inputLocal}>
                  {inputMode === 'select' ? (
                    <select
                      value={domain}
                      onChange={handleChangeDomain}
                      disabled={isCustomDomain}
                    >
                      {domainOptions.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          disabled={option.disabled}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div css={selectToInputBtn}>
                      <input
                        type='text'
                        value={domain}
                        onChange={onChangeCustomDomain}
                        placeholder='직접 입력'
                      />
                      <button type='button' onClick={handleInputModeChange}>
                        뒤로
                      </button>
                    </div>
                  )}
                </span>
              </div>
              {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            </div>
            <button
              css={emailAuthenticationBtn}
              type='button'
              onClick={checkEmailAuthentication}
            >
              이메일 중복확인
            </button>
            {checkEmailMsg && (
              <div css={formDivDefalutMagin}>
                <p css={passwordRegexGuide}>{checkEmailMsg}</p>
              </div>
            )}
            {signUpError && (
              <div css={formDivDefalutMagin}>
                <p css={passwordRegexGuide}>이미 가입된 이메일입니다.</p>
              </div>
            )}
            <div css={formDivDefalutMagin}>
              <label>비밀번호</label>
              <div css={passwordRegexGuide}>
                영문 대소문자, 숫자, 특수기호를 포함하여 8자 이상의 비밀번호를
                입력해주세요.
              </div>
              <div css={inputGroup}>
                <span css={inputLocal}>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    value={password}
                    onChange={onChangePassword}
                    ref={passwordRef}
                    placeholder='비밀번호'
                  />
                </span>
              </div>
              {<p>{passwordError}</p>}
            </div>
            <div css={formDivDefalutMagin}>
              <label>비밀번호 확인</label>
              <div css={inputGroup}>
                <span css={inputLocal}>
                  <input
                    type='password'
                    id='password-check'
                    name='password-check'
                    value={passwordCheck}
                    onChange={onChangePasswordCheck}
                    ref={nameRef}
                    placeholder='비밀번호 확인'
                  />
                </span>
              </div>
              {mismatchError && <p>비밀번호가 일치하지 않습니다.</p>}
            </div>
            <div css={formDivDefalutMagin}>
              <label>성명</label>
              <div css={inputGroup}>
                <span css={inputLocal}>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={onChangeName}
                    placeholder='성명(2~7자)'
                  />
                </span>
              </div>
              {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
            </div>
            <div css={formDivDefalutMagin}>
              <label>연락처</label>
              <div css={passwordRegexGuide}>
                '-' 를 제외하고 숫자만 입력해주세요. (ex) 01012345678
              </div>
              <div css={inputGroup}>
                <span css={inputLocal}>
                  <input
                    type='text'
                    id='phone'
                    name='phone'
                    value={phone}
                    onChange={onChangePhone}
                    placeholder='연락처'
                  />
                </span>
              </div>
              {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
            </div>
            {signUpSuccess && <p>회원가입되었습니다! 로그인해주세요.</p>}
            <div css={formDivDefalutMagin}>
              <label>약관동의</label>
              <div css={checkboxGroup}>
                <div css={checkboxWrap}>
                  <label>
                    <div css={checkboxBtn}>
                      <div css={checkboxBtnClick}>
                        <input
                          type='checkbox'
                          id='checkAll'
                          name='checkAll'
                          onChange={checkAll}
                          checked={checkList.length === 4 ? true : false}
                        />
                      </div>
                    </div>
                    <span css={checkboxInstructions}>
                      <span css={checkboxInstruction}>
                        전체동의(선택항목에 대한 동의 포함)
                      </span>
                    </span>
                  </label>
                </div>
                <div css={checkboxWrap}>
                  <label>
                    <div css={checkboxBtn}>
                      <div css={checkboxBtnClick}>
                        <input
                          type='checkbox'
                          id='checkAge'
                          name='checkAge'
                          onChange={check}
                          checked={
                            checkList.includes('checkAge') ? true : false
                          }
                        />
                      </div>
                    </div>
                    <span css={checkboxInstructions}>
                      <span css={checkboxInstruction}>
                        [필수] 만 14세 이상입니다.
                      </span>
                    </span>
                  </label>
                </div>
                <div css={checkboxWrap}>
                  <label>
                    <div css={checkboxBtn}>
                      <div css={checkboxBtnClick}>
                        <input
                          type='checkbox'
                          id='checkService'
                          name='checkService'
                          onChange={check}
                          checked={
                            checkList.includes('checkService') ? true : false
                          }
                        />
                      </div>
                    </div>
                    <span css={checkboxInstructions}>
                      <span css={checkboxInstruction}>
                        [필수] 서비스 이용 약관에 동의합니다.
                      </span>
                    </span>
                  </label>
                </div>
                <div css={checkboxWrap}>
                  <label>
                    <div css={checkboxBtn}>
                      <div css={checkboxBtnClick}>
                        <input
                          type='checkbox'
                          id='checkInfo'
                          name='checkInfo'
                          onChange={check}
                          checked={
                            checkList.includes('checkInfo') ? true : false
                          }
                        />
                      </div>
                    </div>
                    <span css={checkboxInstructions}>
                      <span css={checkboxInstruction}>
                        [필수] 개인정보수집 및 이용에 동의합니다.
                      </span>
                    </span>
                  </label>
                </div>
                <div css={checkboxWrap}>
                  <label>
                    <div css={checkboxBtn}>
                      <div css={checkboxBtnClick}>
                        <input
                          type='checkbox'
                          id='checkMarketing'
                          name='checkMarketing'
                          onChange={check}
                          checked={
                            checkList.includes('checkMarketing') ? true : false
                          }
                        />
                      </div>
                    </div>
                    <span css={checkboxInstructions}>
                      <span css={checkboxInstruction}>
                        [선택] 개인정보 마케팅 활용에 동의합니다.
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
            </div>
            <button css={emailAuthenticationBtn} type='submit'>
              회원가입
            </button>
          </form>
          <div style={{ marginTop: '30px' }}>
            이미 회원이신가요?&nbsp;
            <Link href='/login' style={{ color: '#4A743C' }}>
              로그인 하러 가기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
