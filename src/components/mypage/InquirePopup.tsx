import { postCs } from '@/api/mypage';
import type { TResMsg } from '@/type/common';
import type { TCs } from '@/type/mypage';
import styled from '@emotion/styled';
import { Modal } from 'antd';
import type { AxiosError } from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';

type TProps = {
  close: () => void;
  callback: () => void;
};

const InquirePopup = ({ close, callback }: TProps) => {
  const [modal, contextHolder] = Modal.useModal();

  const [info, setInfo] = useState<TCs>({ title: '', content: '' });

  const handleInput = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const { trigger } = useSWRMutation('/mypage/cs-inquires', postCs, {
    onSuccess: (res) => {
      modal.success({
        title: '문의주셔서 감사합니다.',
        content: '빠른시일 안에 답변을 드리겠습니다.',
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

    // if (!info.category) {
    //   modal.warning({
    //     title: '',
    //     content: '카테고리를 입력해주세요',
    //   })
    //   return;
    // }

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
        <Title>
          <span>제목 :</span>
          <input id="title" placeholder="제목을 입력해 주세요." value={info.title} onChange={handleInput} />
        </Title>
        <Category>
          <span>분류 :</span>
          <input id='category' placeholder='카테고리를 입력해 주세요. ex) 배송관련' value='기타 문의' onChange={handleInput}  />
        </Category>
        <Message>
          <span>내용 :</span>
          <textarea id="content" placeholder="내용을 입력해 주세요." value={info.content} onChange={handleInput} />
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
  right: calc((100% - 1200px) / 2); // 1200px의 오른쪽에 정렬
  top: 52.5%;
  transform: translateY(-50%); // 수직 중앙 정렬
  width: 500px;
  height: 570px;

  background-color: #ffff;
  border: 1px solid #ccc;
  border-radius: 10px;

  z-index: 10;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    right: 0%;
    bottom: 0%;
    top: 0;
    transform: translateY(0%);
    border-radius: 0;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  padding: 0 16px;

  background: var(--yellow, #ffb930);
  border-radius: 10px 10px 0 0;


  span {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
  }
  
  @media (max-width: 768px) {
    border-radius: 0;
  }
`;

const Body = styled.div`
  width: 100%;
  height: calc(100% - 110px);
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Title = styled.div<{ isArea?: boolean }>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;

  @media all and (max-width: 768px) {
    grid-template-columns: none;
  }

  span {
    color: var(--default, #333);

    font-size: 18px;
    font-weight: 400;

    @media all and (max-width: 768px) {
      display: none;
    }
  }

  input {
    padding: 13px 0 13px 10px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid var(--greyD9, #d9d9d9);

    outline: none;

    @media all and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Category = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;

  @media all and (max-width: 768px) {
    grid-template-columns: none;
  }

  span {
    color: var(--default, #333);

    font-size: 18px;
    font-weight: 400;

    @media all and (max-width: 768px) {
      display: none;
    }
  }

  input {
    padding: 13px 0 13px 10px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid var(--greyD9, #d9d9d9);

    outline: none;

    @media all and (max-width: 768px) {
      width: 100%;
    }
  }
`

const Message = styled.div<{ isArea?: boolean }>`
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: 1fr 5fr;

  height: ${({ isArea }) => isArea && '400px'};

  @media all and (max-width: 768px) {
    grid-template-columns: none;
  }

  span {
    margin-top: 10px;
    color: var(--default, #333);

    font-size: 18px;
    font-weight: 400;

    @media all and (max-width: 768px) {
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

    @media (max-width: 768px) {
      height: 100%;
    }
  }
`;

const Bottom = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: end;

  @media all and (max-width: 768px) {
    justify-content: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 0 16px;

  .submit {
    width: 130px;
    height: 40px;
    border-radius: 5px;
    background: var(--primary, #4a743c);
    color: var(--white, #fff);

    font-size: 16px;
    font-weight: 500;
  }

  .cancel {
    width: 130px;
    height: 40px;
    border-radius: 5px;
    background: #ffb930;
    color: var(--white, #fff);

    font-size: 16px;
    font-weight: 500;
  }
`;
