'use client';
/** @jsxImportSource @emotion/react */

import { usePathname } from 'next/navigation';
import TempLetters from './TempLetters';
import { useState } from 'react';
import { MouseEventHandler } from 'react';
import { Common } from 'styles/common';
import { css } from '@emotion/react';
import { letterContentState, letterIdState } from '@/recoil/letter/atom';
import { useRecoilValue } from 'recoil';
import { isPhotoSelectPage, isSelectPage } from '@/utils/routeHelpers';
import { useRouter } from 'next/router';

interface Props {
  onClickNext?: MouseEventHandler<HTMLButtonElement>;
  goToWrite?: MouseEventHandler<HTMLButtonElement>;
  nextBtnDisabled?: boolean;
}

const LetterBottom = ({ onClickNext, goToWrite, nextBtnDisabled }: Props) => {
  const router = useRouter();
  const writingPadId = router.query.writingPadId as string;
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const letterContent = useRecoilValue(letterContentState);

  const letterId = useRecoilValue(letterIdState);

  const showModal = () => {
    setModalOpen(true);
  };
  const paymentPage = pathname === '/letter/payment';

  const onClickPrev = () => {
    if (isPhotoSelectPage(pathname) && letterId) {
      router.push(`/letter/edit/${writingPadId}/1?letterId=${letterId}`);
    } else {
      router.back();
    }
  };

  return (
    <div css={Container}>
      <div css={Buttons}>
        {isSelectPage(pathname) ? (
          <>
            <button css={TempBtn} onClick={showModal}>
              임시저장목록
            </button>
            {modalOpen && <TempLetters setModalOpen={setModalOpen} />}
            <button css={WriteLetter} onClick={goToWrite}>
              작성시작
            </button>
          </>
        ) : (
          ''
        )}
        {!isSelectPage(pathname) ? (
          <>
            <button css={PrevBtn} onClick={onClickPrev}>
              이전단계
            </button>
            {!paymentPage ? (
              <button
                css={NextBtn}
                disabled={nextBtnDisabled}
                onClick={onClickNext}
              >
                다음단계
              </button>
            ) : (
              ''
            )}
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default LetterBottom;

const Container = css`
  max-width: 700px;
  margin: 70px auto 0;
  font-size: ${Common.fontSize.fs14};
`;

const Buttons = css`
  display: flex;

  > button {
    width: 50%;
    height: 50px;
    border-radius: 5px;
    margin: 0 20px;
  }
`;

const TempBtn = css`
  background-color: ${Common.colors.gray02};
  border-color: ${Common.colors.gray02};
  color: ${Common.colors.gray};
  border-radius: 5px;
`;

const WriteLetter = css`
  background-color: ${Common.colors.theme};
  border-color: ${Common.colors.theme};
  color: ${Common.colors.white};
`;

const PrevBtn = css`
  background-color: ${Common.colors.white};
  border: 1px solid ${Common.colors.gray01};
  color: ${Common.colors.gray01};
`;

const NextBtn = css`
  background-color: ${Common.colors.theme};
  color: ${Common.colors.white};

  &:disabled {
    background-color: ${Common.colors.gray01};
    color: ${Common.colors.white};
    cursor: not-allowed;
  }
`;
