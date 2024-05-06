'use client';
/** @jsxImportSource @emotion/react */

import { usePathname } from 'next/navigation';
import styled from '@emotion/styled';
import { Common } from 'styles/common';
import { css } from '@emotion/react';
import { isConfirmPage, isPaymentPage, isPhotoSelectPage, isSelectPage, isSendPage } from '@/utils/routeHelpers';

const LetterHeader = () => {
  const pathname = usePathname();

  const steps = [
    { name: '편지선택 ', isActive: isSelectPage(pathname) },
    { name: '사진추가', isActive: isPhotoSelectPage(pathname) },
    { name: '주소작성 및 우표선택', isActive: isSendPage(pathname) },
    { name: '편지확인', isActive: isConfirmPage(pathname) },
    { name: '결제', isActive: isPaymentPage(pathname) },
  ];

  return (
    <div css={Progress}>
      <div css={Container}>
        <div css={LeftContent}>
          <h1>편지쓰기</h1>
          <div css={ProgressSection}>
            {steps.map((step, index) => (
              <div css={ProgressList} key={index}>
                <ProgressName isActive={step.isActive}>{step.name} </ProgressName>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterHeader;

const Progress = css`
  height: 150px;
  margin-bottom: 80px;
  background: ${Common.colors.gray04};
  font-size: 16px;

  @media all and (min-width: 768px) and (max-width: 1199px), all and (max-width: 767px) {
    display: flex;
    align-items: center;
    height: 200px;
  }
`;

const Container = css`
  margin: 0 auto;
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  @media all and (min-width: 1200px) {
    max-width: 1200px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px), all and (max-width: 767px) {
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 30px 3em 0;
  }
  @media all and (max-width: 767px) {
    padding: 30px 1.5em 0;
  }
`;
const LeftContent = css`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding-bottom: 20px;
  }

  @media all and (max-width: 767px) {
    padding-bottom: 20px;
    flex-direction: column;

    align-items: center;
  }
`;
const ProgressList = css`
  align-items: center;
  list-style: none;
  margin-left: 20px;

  @media all and (max-width: 767px) {
    align-items: flex-start;
    &:first-child {
      margin-left: 0;
    }
  }
`;

const ProgressSection = css`
  display: flex;
  @media all and (max-width: 767px) {
    margin-top: 10px;
  }
`;

const ProgressName = styled.p<{ isActive: boolean }>`
  font-size: ${Common.fontSize.fs14};
  color: ${({ isActive }) => (isActive ? `${Common.colors.theme}` : `${Common.colors.black}`)};
  padding-bottom: 5px;
  border-bottom: 2px solid ${({ isActive }) => (isActive ? `${Common.colors.theme}` : 'transparent')};
`;
