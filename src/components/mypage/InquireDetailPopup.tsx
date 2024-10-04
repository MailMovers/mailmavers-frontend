import { getCsDetail, postCs } from '@/api/mypage';
import type { TResMsg } from '@/type/common';
import type { TCs, TCsInfo, TCsInfoDetail } from '@/type/mypage';
import styled from '@emotion/styled';
import { Modal } from 'antd';
import type { AxiosError } from 'axios';
import { ChangeEvent, useState } from 'react';
import useSWR from 'swr';

type Tprops = {
  csInfo: TCsInfo;
  close: () => void;
};
const InquireDetailPopup = ({ csInfo, close }: Tprops) => {
  const { data } = useSWR<TCsInfoDetail>(
    () => (!!csInfo ? '/cs/detail' : null),
    () => getCsDetail(csInfo.id),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );

  return (
    <Wrap>
      <Header>
        <span>문의내용</span>
      </Header>
      <Body>
        <Tiltle>
          <span>제목 :</span>
          <input id='title' value={data?.title || '배송이 언제 완료되나요?'} disabled />
        </Tiltle>
        <Category>
          <span>분류 :</span>
          <input id='category' value={data?.category || '배송 관련'} disabled />
        </Category>
        <Message>
          <span>내용 :</span>
          <textarea
            id='content'
            value={
              data?.content ||
              '저장된 데이터가 없습니다.'
            }
            disabled
          />
        </Message>
      </Body>

      <Bottom>
        <ButtonContainer>
          <button className='submit' onClick={close}>
            닫기
          </button>
        </ButtonContainer>
      </Bottom>
    </Wrap>
  );
};

export default InquireDetailPopup;

const Wrap = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
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
    border-radius: 0;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  padding: 0 16px;

  background-color: #28a745;
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

const Tiltle = styled.div<{ isArea?: boolean }>`
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
    font-weight: 600;

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
