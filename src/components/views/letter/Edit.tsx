/** @jsxImportSource @emotion/react */

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  SetStateAction,
} from 'react';
import { useRouter } from 'next/navigation';
import {
  Page,
  Buttons,
  ButtonSection,
  Wrap,
  LetterInfo,
  DesktopText,
  MobileText,
} from './Edit.styles';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { letterContentState, textLengthState } from '@/recoil/letter/atom';
import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic';
const QuillEditor = dynamic(
  () => import('@/components/letter/quillEditor/QuillEditor'),
  { ssr: false }
);

import Button from '@/components/letter/Button';
import useSWR from 'swr';
import { tokenAtom } from '@/recoil/auth/atom';
import {
  getTempLetterList,
  updateLetterContent,
  postLetterContent,
} from '@/api/letter';
import ReactQuill from 'react-quill';
import { TempLetterData } from '@/type/letterData';
import { Common } from 'styles/common';
import { windowSizeWidthAtom } from '@/recoil/width/atom';

interface Params {
  writingPadId: string;
  pageNum: string;
  letterId: string;
}

const Edit = ({ params }: { params: Params }) => {
  const router = useRouter();
  const writingPadId = parseInt(params.writingPadId);
  const pageNum = parseInt(params.pageNum);
  const letterId = params.letterId ? parseInt(params.letterId) : '';
  const nextPageNum = pageNum + 1;
  const prevPageNum = pageNum - 1;
  const quillRef = useRef<ReactQuill | null>(null);
  const [contents, setContents] = useRecoilState(letterContentState);
  const [htmlContent, setHtmlContent] = useState('');
  const currentContent = contents.find(
    (content) => content.pageNum === pageNum
  );
  const [isContentChanged, setIsContentChanged] = useState(false);
  const getWindowWidth = useRecoilValue(windowSizeWidthAtom);
  const [actualLength, setActualLength] = useState(0);

  console.log('contents', contents);

  const token = useRecoilValue(tokenAtom);

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, []);

  const { data } = useSWR<TempLetterData[]>(
    () => (!!token && letterId ? 'getTempLetterList' : null),
    getTempLetterList,
    {
      fallbackData: [],
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      onSuccess: (data) => {
        if (data && !currentContent && data.length > 0) {
          const matchedLetters = data.filter(
            (letter: { letterId: number }) => letter.letterId === letterId
          );
          const allContents = matchedLetters.reduce(
            (acc: any, letter: { contents: any }) => [
              ...acc,
              ...letter.contents,
            ],
            []
          );
          const pageContent = allContents.find(
            (content: { pageNum: number }) => content.pageNum === pageNum
          );
          if (pageContent) {
            setHtmlContent(pageContent.content);
          }
        }
      },
    }
  );

  /** 임시저장 내역이 있을 경우 불러오기 */
  useEffect(() => {
    if (data && !currentContent && data.length > 0) {
      const matchedLetters = data.filter(
        (letter: { letterId: number }) => letter.letterId === letterId
      );
      const allContents = matchedLetters.reduce(
        (acc: any, letter: { contents: any }) => [...acc, ...letter.contents],
        []
      );
      const pageContent = allContents.find(
        (content: { pageNum: number }) => content.pageNum === pageNum
      );
      if (pageContent) {
        setHtmlContent(pageContent.content);
      }
    }
  }, [data, pageNum, currentContent]);

  /** 에디터에 작성된 데이터 업데이트 */
  const handleHtmlContentChange = useCallback(
    (newContent: SetStateAction<string>) => {
      if (htmlContent !== newContent) {
        setIsContentChanged(true);
        setHtmlContent(newContent);
      }
    },
    [htmlContent, setHtmlContent]
  );

  /** 현재 위치한 페이지에서 작성된 편지 내용 업데이트 */
  const updateCurrentPageContent = useCallback(() => {
    const updatedContents = [...contents];
    const currentIndex = updatedContents.findIndex(
      (content) => content.pageNum === pageNum
    );
    if (currentIndex >= 0) {
      updatedContents[currentIndex] = {
        pageNum,
        content: htmlContent,
        writingPadId,
      };
    } else {
      updatedContents.push({ pageNum, content: htmlContent, writingPadId });
    }
    console.log('updatedContents', updatedContents);
    return updatedContents;
  }, [contents, pageNum, htmlContent, writingPadId, letterId]);

  const updateContentsState = useCallback(() => {
    if (isContentChanged) {
      const updatedContents = updateCurrentPageContent();

      setContents(updatedContents);
    }
  }, [isContentChanged, updateCurrentPageContent, setContents]);

  /** 편지에 작성된 내용이 있는지 확인 */
  const [isEmptyEditor, setIsEmptyEditor] = useState(true);
  useEffect(() => {
    if (currentContent || actualLength > 0) {
      setIsEmptyEditor(false);
    }
  }, [actualLength, htmlContent]);

  /** 다음 페이지로 이동, Recoil로 상태 저장 */
  const addLetterPage = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (isEmptyEditor) {
        alert('작성된 내용이 없습니다.');
      } else {
        updateContentsState();

        const nextPageUrl = letterId
          ? `/letter/edit/${writingPadId}/${nextPageNum}?letterId=${letterId}`
          : `/letter/edit/${writingPadId}/${nextPageNum}`;

        router.push(nextPageUrl);
      }
    },
    [isEmptyEditor, updateContentsState, pageNum, letterId, router]
  );

  /** 이전 페이지로 이동, Recoil로 상태 저장 */
  const prevLetterPage = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      updateContentsState();

      const prevPageUrl = letterId
        ? `/letter/edit/${writingPadId}/${prevPageNum}?letterId=${letterId}`
        : `/letter/edit/${writingPadId}/${prevPageNum}`;
      router.push(prevPageUrl);
    },
    [contents, updateContentsState, pageNum, letterId]
  );

  /** 편지 작성 페이지를 벗어나면(prevStep 함수 실행) Recoil을 리셋 */
  const resetContent = useResetRecoilState(letterContentState);
  const prevStep = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    resetContent();
    router.push(`/letter/select/${writingPadId}`);
  }, []);

  const submitLetter = async () => {
    updateContentsState();
    if (isEmptyEditor) {
      alert('작성된 내용이 없습니다.');
      return;
    }

    updateContentsState();
    const updatedContents = updateCurrentPageContent();
    const letterData = {
      writingPadId: writingPadId,
      contents: updatedContents,
    };

    const editLetterData = {
      letterId: letterId,
      writingPadId: writingPadId,
      contents: updatedContents,
    };

    try {
      if (letterId) {
        updateLetterContent(editLetterData);
        router.push(`/letter/photo-select/${letterId}`);
      } else {
        const response = await postLetterContent(letterData);
        const newLetterId = response.data;
        router.push(`/letter/photo-select/${newLetterId}`);
      }
    } catch (error) {
      alert('죄송합니다. 저장에 실패했습니다.');
      console.error(error);
    }
  };

  const mobileWidth = getWindowWidth > 480;

  console.log('currentContent', currentContent);
  console.log('htmlContent', htmlContent);

  return (
    <div css={Wrap}>
      <h1 css={Page}>{pageNum}페이지</h1>
      <p css={LetterInfo}>편지 1장당 1,000자 입력하실 수 있습니다.</p>
      <QuillEditor
        key={letterId}
        quillRef={quillRef}
        htmlContent={currentContent?.content || htmlContent}
        setHtmlContent={handleHtmlContentChange}
        setActualLength={setActualLength}
      />
      <div css={ButtonSection}>
        <Button
          backgroundColor={Common.colors.gray03}
          color={Common.colors.black}
          borderColor={Common.colors.gray03}
          onClick={prevStep}
        >
          <span css={DesktopText}>돌아가기</span>
          <span css={MobileText}>◀</span>
        </Button>
        <div css={Buttons}>
          <Button
            backgroundColor={Common.colors.gray03}
            color={Common.colors.black}
            borderColor={Common.colors.gray03}
            onClick={prevLetterPage}
            display={pageNum === 1 ? 'none' : ''}
          >
            이전 페이지
          </Button>
          <Button
            type='button'
            backgroundColor={Common.colors.gray03}
            color={Common.colors.black}
            borderColor={Common.colors.gray03}
            onClick={addLetterPage}
            display={pageNum === 5 ? 'none' : ''}
          >
            다음 페이지
          </Button>
        </div>
        {mobileWidth ? (
          <Button
            type='button'
            backgroundColor={Common.colors.theme}
            color={Common.colors.white}
            borderColor={Common.colors.theme}
            onClick={submitLetter}
          >
            작성완료
          </Button>
        ) : (
          ''
        )}
      </div>
      {!mobileWidth ? (
        <Button
          type='button'
          backgroundColor={Common.colors.theme}
          color={Common.colors.white}
          borderColor={Common.colors.theme}
          onClick={submitLetter}
        >
          작성완료
        </Button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Edit;
