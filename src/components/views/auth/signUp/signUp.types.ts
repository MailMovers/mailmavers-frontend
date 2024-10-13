import { ChangeEvent, FormEvent } from 'react';

export interface SignUpPageUIProps {
    formData: {
      emailFirst: string;
      email: string;
      domain: string;
      password: string;
      passwordCheck: string;
      name: string;
      phone: string;
      phonePart1: string;
      phonePart2: string;
      phonePart3: string;
      authNumber: string;
    };
    formErrors: {
      emailError: string | null;
      passwordError: string | null;
      nameError: string | null;
      phoneError: string | null;
    };
    formState: {
      signUpError: boolean;
      signUpSuccess: boolean;
      mismatchError: boolean;
      emailSendSuccess: boolean;
      isEmailVerified: boolean;
      isCustomDomain: boolean;
      inputMode: string;
      checkEmailMsg: string;
      checkList: string[];
      buttonColor: boolean;
    };
    handlers: {
      handleChangeEmailFirst: (e: ChangeEvent<HTMLInputElement>) => void;
      handleChangeDomain: (e: ChangeEvent<HTMLSelectElement>) => void;
      onChangeCustomDomain: (e: ChangeEvent<HTMLInputElement>) => void;
      handleInputModeChange: () => void;
      checkEmailAuthentication: () => void;
      onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
      onChangePasswordCheck: (e: ChangeEvent<HTMLInputElement>) => void;
      onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
      onChangePhonePart1: (e: ChangeEvent<HTMLInputElement>) => void;
      onChangePhonePart2: (e: ChangeEvent<HTMLInputElement>) => void;
      onChangePhonePart3: (e: ChangeEvent<HTMLInputElement>) => void;
      checkAll: (e: ChangeEvent<HTMLInputElement>) => void;
      check: (e: ChangeEvent<HTMLInputElement>) => void;
      onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    };
  }

  