'use client';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '@/recoil/auth/atom';
import { getTempLetterList } from '@/api/letter';
import { TempLetterData } from '@/type/letterData';
import { Common } from 'styles/common';

interface ModalProps {
  setModalOpen?: (open: boolean) => void;
}

const TempLetters = ({ setModalOpen }: ModalProps) => {
  const router = useRouter();
  const token = useRecoilValue(tokenAtom);

  const extractTextFromHTML = (htmlString: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return doc.body.textContent || '';
  };

  const { data: tempList } = useSWR<TempLetterData[]>(
    () => (!!token ? 'getTempLetterList' : null),
    getTempLetterList,
    {
      fallbackData: [],
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const closeModal = () => {
    if (setModalOpen) {
      setModalOpen(false);
    }
  };

  const handleSelectLetter = (writingPadId: number, letterId: number) => {
    router.push(`/letter/edit/${writingPadId}/1?letterId=${letterId}`);
  };

  return (
    <div css={ModalWrapper}>
      <div css={TempList}>
        <div css={Contents}>
          <p css={Title}>임시 저장 목록</p>
          {tempList && tempList.length > 0 ? (
            tempList.map((list, index) => {
              const pageOneContent = list.contents.find(
                (content) => content.pageNum === 1
              );

              return pageOneContent ? (
                <div
                  key={index}
                  css={List}
                  onClick={() =>
                    handleSelectLetter(list.writingPadId, list.letterId)
                  }
                >
                  <Image
                    src='/images/main_best.svg'
                    alt='작성한 편지'
                    width={100}
                    height={76}
                  />
                  <div css={LetterContainer}>
                    <div>
                      <p css={LetterContnetTitle}>편지내용</p>
                      <p css={LetterContnet}>
                        {extractTextFromHTML(pageOneContent.content)}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null;
            })
          ) : (
            <div>작성된 편지가 없습니다.</div>
          )}
        </div>
        <button type='button' css={CloseBtn} onClick={closeModal}>
          창닫기
        </button>
      </div>
    </div>
  );
};

export default TempLetters;

const ModalWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 0 20px;
`;

const TempList = css`
  width: 500px;
  display: flex;
  flex-direction: column;
`;

const Contents = css`
  width: 100%;
  height: 400px;
  border-radius: 5px;
  overflow-y: auto;
  background-color: ${Common.colors.white};
  padding: 20px;
  font-size: ${Common.fontSize.fs14};

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  @media all and (max-width: 480px) {
    width: calc(100vw - 40px);
  }
`;

const CloseBtn = css`
  height: 50px;
  font-size: ${Common.fontSize.fs14};
  background-color: ${Common.colors.gray01};
  border: none;
  color: ${Common.colors.white};
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  @media all and (max-width: 480px) {
    width: calc(100vw - 40px);
  }
`;

const Title = css`
  color: ${Common.colors.theme};
  margin-bottom: 20px;
`;

const List = css`
  display: flex;
  margin: 5px 0;
  cursor: pointer;
`;

const LetterContainer = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
`;

const LetterContnetTitle = css`
  font-size: 12px;
  color: ${Common.colors.gray};
  margin: 0 0 8px 15px;
`;
const LetterContnet = css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: ${Common.fontSize.fs14};
  color: ${Common.colors.gray};
  margin-left: 15px;
  width: 285px;
  height: 32px;
`;
