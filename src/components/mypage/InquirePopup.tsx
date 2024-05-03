import { postCs } from '@/api/mypage';
import type { TResMsg } from '@/type/common';
import type { TCs } from '@/type/mypage';
import styled from '@emotion/styled';
import { Modal } from 'antd';
import type { AxiosError } from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';

type Tprops = {
  close: () => void;
  callback: () => void;
};
const InquirePopup = ({ close, callback }: Tprops) => {
  const [modal, contextHolder] = Modal.useModal();

  const [info, setInfo] = useState<TCs>({ title: '', content: '' });

  const handleInput = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const { trigger } = useSWRMutation('/cs/', postCs, {
    onSuccess: (res) => {
      modal.success({
        title: '문의주셔서 감사합니다.',
        content: '빠른시에 답변을 드리겠습니다.',
        onOk: () => {
          callback();
          close();
        },
      });
    },
    onError: (res: AxiosError<TResMsg>) => {
      modal.error({
        title: '정보 변경 실패',
        content: res.response?.data.message,
      });
    },
  });

  const onSubmit = () => {
    if (!info.title) {
      modal.warning({
        title: '',
        content: '제목을 입력해주세요.',
      });
      return;
    }

    if (!info.content) {
      modal.warning({
        title: '',
        content: '문의 내용을 입력해주세요.',
      });
      return;
    }

    trigger(info);
  };

  return (
    <Wrap>
      {contextHolder}
      <Header>
        <span>문의하기</span>
      </Header>
      <Body>
        <Tiltle>
          <span>제목 :</span>
          <input id="title" placeholder="제목" value={info.title} onChange={handleInput} />
        </Tiltle>
        <Message>
          <span>내용 :</span>
          <textarea id="content" placeholder="내용" value={info.content} onChange={handleInput} />
        </Message>
      </Body>

      <Bottom>
        <ButtonContainer>
          <button className="cancel" onClick={close}>
            취소
          </button>
          <button className="submit" onClick={onSubmit}>
            문의하기
          </button>
        </ButtonContainer>
      </Bottom>
    </Wrap>
  );
};

export default InquirePopup;

const Wrap = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  width: 500px;
  height: 500px;

  background-color: #ffff;
  border: 1px solid #ccc;
  z-index: 10;

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    right: 0%;
    bottom: 0%;
    top: 0;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  padding: 0 16px;

  background: var(--yellow, #ffb930);

  span {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
  }
`;

const Body = styled.div`
  width: 100%;
  height: calc(100% - 110px);
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 480px) {
    height: auto;
  }
`;

const Tiltle = styled.div<{ isArea?: boolean }>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;

  @media all and (max-width: 480px) {
    grid-template-columns: none;
  }

  span {
    color: var(--default, #333);

    font-size: 18px;
    font-weight: 400;

    @media all and (max-width: 480px) {
      display: none;
    }
  }

  input {
    padding: 13px 0 13px 10px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid var(--greyD9, #d9d9d9);

    outline: none;

    @media all and (max-width: 480px) {
      width: 100%;
    }
  }
`;

const Message = styled.div<{ isArea?: boolean }>`
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: 1fr 5fr;

  height: ${({ isArea }) => isArea && '400px'};

  @media all and (max-width: 480px) {
    grid-template-columns: none;
  }

  span {
    margin-top: 10px;
    color: var(--default, #333);

    font-size: 18px;
    font-weight: 400;

    @media all and (max-width: 480px) {
      display: none;
    }
  }

  textarea {
    height: 100px;

    padding: 13px 0 13px 10px;
    height: 50px;
    border-radius: 5px;

    outline: none;

    width: 100%;
    height: 300px;

    font-size: 16px;
    resize: none;
    border: 1px solid var(--greyD9, #d9d9d9);

    @media (max-width: 480px) {
      height: 100%;
    }
  }
`;

const Bottom = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: end;

  @media all and (max-width: 480px) {
    justify-content: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 0 16px;

  .cancel {
    width: 130px;
    height: 40px;
    border-radius: 5px;
    background: var(--primary, #4a743c);
    color: var(--white, #fff);

    font-size: 16px;
    font-weight: 500;
  }

  .submit {
    width: 130px;
    height: 40px;
    border-radius: 5px;
    background: #ffb930;
    color: var(--white, #fff);

    font-size: 16px;
    font-weight: 500;
  }
`;
