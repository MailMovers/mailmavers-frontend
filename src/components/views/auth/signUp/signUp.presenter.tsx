import Link from 'next/link';
import * as S from './signUp.styles';
import { SignUpPageUIProps } from './signUp.types';

const domainOptions = [
    { value: '', label: '선택해주세요', disabled: true }, // Default placeholder option
    { value: 'gmail.com', label: 'gmail.com' },
    { value: 'naver.com', label: 'naver.com' },
    { value: 'daum.net', label: 'daum.net' },
    { value: 'hotmail.com', label: 'hotmail.com' },
    { value: '직접입력', label: '직접 입력' }, // Option for custom input
  ];

  export default function SignUpPageUI({ formData, formErrors, formState, handlers }: SignUpPageUIProps) {
    const { emailFirst, email, domain, password, passwordCheck, name, phone, authNumber } = formData;
    const { emailError, passwordError, nameError, phoneError } = formErrors;
    const { signUpError, signUpSuccess, mismatchError, emailSendSuccess, isEmailVerified, isCustomDomain, inputMode, checkEmailMsg, checkList, buttonColor } = formState;
    const { handleChangeEmailFirst, handleChangeDomain, onChangeCustomDomain, handleInputModeChange, checkEmailAuthentication, onChangePassword, onChangePasswordCheck, onChangeName, onChangePhone, checkAll, check, onSubmit } = handlers;
    return(
            <S.Layout>
              <S.Container>
                <S.Logo src='/images/logo2.png' alt='로고' />
                <S.Wrap>
                  <S.Title>회원가입</S.Title>
                  <S.Form onSubmit={onSubmit}>
                    <S.FormDivDefaultMargin>
                      <label>이메일</label>
                      <S.InputGroup>
                        <S.InputLocal>
                          <input
                            type='emailFirst'
                            id='emailFirst'
                            name='emailFirst'
                            value={emailFirst}
                            onChange={handleChangeEmailFirst}
                            placeholder='이메일'
                          />
                        </S.InputLocal>
                        <S.EmailAt>@</S.EmailAt>
                        <S.InputLocal>
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
                            <S.SelectToInputButton>
                              <input
                                type='text'
                                value={domain}
                                onChange={onChangeCustomDomain}
                                placeholder='직접 입력'
                              />
                              <button type='button' onClick={handleInputModeChange}>
                                =
                              </button>
                            </S.SelectToInputButton>
                          )}
                        </S.InputLocal>
                      </S.InputGroup>
                      {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}
                    </S.FormDivDefaultMargin>
                    <S.EmailAuthenticationButton
                      type='button'
                      onClick={checkEmailAuthentication}
                    >
                      이메일 중복확인
                    </S.EmailAuthenticationButton>
                    {checkEmailMsg && <S.ErrorMessage>{checkEmailMsg}</S.ErrorMessage>}
                    {signUpError && (
                      <S.ErrorMessage>이미 가입된 이메일입니다.</S.ErrorMessage>
                    )}
                    <S.FormDivDefaultMargin>
                      <label>비밀번호</label>
                      <S.PasswordRegexGuide>
                        영문 대소문자, 숫자, 특수기호를 포함하여 8자 이상의 비밀번호를
                        입력해주세요.
                      </S.PasswordRegexGuide>
                      <S.InputGroup>
                        <S.InputLocal>
                          <input
                            type='password'
                            id='password'
                            name='password'
                            value={password}
                            onChange={onChangePassword}
                            placeholder='비밀번호'
                          />
                        </S.InputLocal>
                      </S.InputGroup>
                      {passwordError && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}
                    </S.FormDivDefaultMargin>
                    <S.FormDivDefaultMargin>
                      <label>비밀번호 확인</label>
                      <S.InputGroup>
                        <S.InputLocal>
                          <input
                            type='password'
                            id='password-check'
                            name='password-check'
                            value={passwordCheck}
                            onChange={onChangePasswordCheck}
                            placeholder='비밀번호 확인'
                          />
                        </S.InputLocal>
                      </S.InputGroup>
                      {mismatchError && <S.ErrorMessage>비밀번호가 일치하지 않습니다.</S.ErrorMessage>}
                    </S.FormDivDefaultMargin>
                    <S.FormDivDefaultMargin>
                      <label>성명</label>
                      <S.InputGroup>
                        <S.InputLocal>
                          <input
                            type='text'
                            id='name'
                            name='name'
                            value={name}
                            onChange={onChangeName}
                            placeholder='성명(2~7자)'
                          />
                        </S.InputLocal>
                      </S.InputGroup>
                      {nameError && <S.ErrorMessage>{nameError}</S.ErrorMessage>}
                    </S.FormDivDefaultMargin>
                    <S.FormDivDefaultMargin>
                      <label>연락처</label>
                      <S.PasswordRegexGuide>
                        '-' 를 제외하고 숫자만 입력해주세요. (ex) 01012345678
                      </S.PasswordRegexGuide>
                      <S.InputGroup>
                        <S.InputLocal>
                          <input
                            type='text'
                            id='phone'
                            name='phone'
                            value={phone}
                            onChange={onChangePhone}
                            placeholder='연락처'
                          />
                        </S.InputLocal>
                      </S.InputGroup>
                      {phoneError && <S.ErrorMessage>{phoneError}</S.ErrorMessage>}
                    </S.FormDivDefaultMargin>
                    {signUpSuccess && <p>회원가입되었습니다! 로그인해주세요.</p>}
                    <S.FormDivDefaultMargin>
                      <label>약관동의</label>
                      <S.CheckboxGroup>
                        <S.CheckboxWrap>
                          <label>
                            <S.CheckboxButton>
                              <S.CheckboxButtonClick>
                                <input
                                  type='checkbox'
                                  id='checkAll'
                                  name='checkAll'
                                  onChange={checkAll}
                                  checked={checkList.length === 4 ? true : false}
                                />
                              </S.CheckboxButtonClick>
                            </S.CheckboxButton>
                            <S.CheckboxInstructions>
                              <S.CheckboxInstruction>
                                전체동의(선택항목에 대한 동의 포함)
                              </S.CheckboxInstruction>
                            </S.CheckboxInstructions>
                          </label>
                        </S.CheckboxWrap>
                        <S.CheckboxWrap>
                          <label>
                            <S.CheckboxButton>
                              <S.CheckboxButtonClick>
                                <input
                                  type='checkbox'
                                  id='checkAge'
                                  name='checkAge'
                                  onChange={check}
                                  checked={
                                    checkList.includes('checkAge') ? true : false
                                  }
                                />
                              </S.CheckboxButtonClick>
                            </S.CheckboxButton>
                            <S.CheckboxInstructions>
                              <S.CheckboxInstruction>
                                [필수] 만 14세 이상입니다.
                              </S.CheckboxInstruction>
                            </S.CheckboxInstructions>
                          </label>
                        </S.CheckboxWrap>
                        <S.CheckboxWrap>
                          <label>
                            <S.CheckboxButton>
                              <S.CheckboxButtonClick>
                                <input
                                  type='checkbox'
                                  id='checkService'
                                  name='checkService'
                                  onChange={check}
                                  checked={
                                    checkList.includes('checkService') ? true : false
                                  }
                                />
                              </S.CheckboxButtonClick>
                            </S.CheckboxButton>
                            <S.CheckboxInstructions>
                              <S.CheckboxInstruction>
                                [필수] 서비스 이용 약관에 동의합니다.
                              </S.CheckboxInstruction>
                            </S.CheckboxInstructions>
                          </label>
                        </S.CheckboxWrap>
                        <S.CheckboxWrap>
                          <label>
                            <S.CheckboxButton>
                              <S.CheckboxButtonClick>
                                <input
                                  type='checkbox'
                                  id='checkInfo'
                                  name='checkInfo'
                                  onChange={check}
                                  checked={
                                    checkList.includes('checkInfo') ? true : false
                                  }
                                />
                              </S.CheckboxButtonClick>
                            </S.CheckboxButton>
                            <S.CheckboxInstructions>
                              <S.CheckboxInstruction>
                                [필수] 개인정보수집 및 이용에 동의합니다.
                              </S.CheckboxInstruction>
                            </S.CheckboxInstructions>
                          </label>
                        </S.CheckboxWrap>
                        <S.CheckboxWrap>
                          <label>
                            <S.CheckboxButton>
                              <S.CheckboxButtonClick>
                                <input
                                  type='checkbox'
                                  id='checkMarketing'
                                  name='checkMarketing'
                                  onChange={check}
                                  checked={
                                    checkList.includes('checkMarketing') ? true : false
                                  }
                                />
                              </S.CheckboxButtonClick>
                            </S.CheckboxButton>
                            <S.CheckboxInstructions>
                              <S.CheckboxInstruction>
                                [선택] 개인정보 마케팅 활용에 동의합니다.
                              </S.CheckboxInstruction>
                            </S.CheckboxInstructions>
                          </label>
                        </S.CheckboxWrap>
                      </S.CheckboxGroup>
                    </S.FormDivDefaultMargin>
                    <S.EmailAuthenticationButton
                      type='submit'
                    >
                      회원가입
                    </S.EmailAuthenticationButton>
                  </S.Form>
                  <div style={{ marginTop: '30px' }}>
                    이미 회원이신가요?&nbsp;
                    <Link href='/login' style={{ color: '#4A743C', fontWeight: 'bold' }}>
                      로그인 하러 가기
                    </Link>
                  </div>
                </S.Wrap>
              </S.Container>
            </S.Layout>
  );
}