import { css } from '@emotion/react';
import { memo, useEffect, useMemo, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import Toolbar from './EditorToolBar';

import { Common } from 'styles/common';
import { PadData } from '@/type/letterData';
import useSWR from 'swr';
import { getPadData } from '@/api/letter';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { letterWritingPadIdState } from '@/recoil/letter/atom';

type QuillEditorProps = {
  quillRef: React.MutableRefObject<ReactQuill | null>;
  htmlContent: string;
  setHtmlContent: (content: string) => void;
  setActualLength: (length: number) => void;
  addLetterPage: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  updateContentsState: (content: string) => void;
};

const QuillEditor = memo(
  ({
    quillRef,
    htmlContent,
    setHtmlContent,
    setActualLength,
    addLetterPage,
    updateContentsState,
  }: QuillEditorProps) => {
    const router = useRouter();
    const pageNum = parseInt(localStorage.getItem('pageNum') || '1');

    // const mounted = useRef(false);
    const letterWritingPadId = localStorage.getItem('product');
    const [_, setContentLength] = useState(0);
    const [isPageMoving, setIsPageMoving] = useState(false);

    // 에디터 화면에 편지지 띄우기
    const { data: PadData } = useSWR<PadData[]>(
      `product/writing/${letterWritingPadId}`,
      getPadData
    );

    const letterImg = PadData?.[0].pad_img_url;

    const handleChange = () => {
      if (isPageMoving) return; // 페이지 이동 중이면 추가 입력 무시

      if (!quillRef.current) return; // quillRef.current가 null이면 함수 실행 중지

      const quill = quillRef.current.getEditor(); // quill 객체를 올바르게 참조

      const currentContent = quill.getText();
      setHtmlContent(currentContent);

      const editorElement = quill.root;
      const lineHeightPx = parseFloat(
        window.getComputedStyle(editorElement).lineHeight
      );
      const textHeight = editorElement.scrollHeight;
      const lines = Math.ceil(textHeight / lineHeightPx) - 3;

      const editorText = quill.getText();

      const lastAllowedIndex = editorText.lastIndexOf(
        '\n',
        editorText.length - 1
      );
      if (pageNum === 5 && lines > 18) {
        if (
          // lastAllowedIndex !== -1 &&
          window.confirm('더 이상 입력할 수 없습니다. 마지막 페이지입니다.')
        ) {
          quill.deleteText(lastAllowedIndex - 1, quill.getLength()); // 초과된 텍스트만 삭제
        }
      } else if (pageNum !== 5 && lines > 18) {
        setIsPageMoving(true);
        setTimeout(() => {
          if (
            window.confirm('18줄을 초과했습니다. 다음 페이지로 이동합니다.')
          ) {
            quill.deleteText(lastAllowedIndex + 1, quill.getLength());
            setTimeout(function () {
              addLetterPage();
            }, 1000);
            setIsPageMoving(false);
          } else {
            setIsPageMoving(false);
          }
        }, 100);
      }
    };

    useEffect(() => {
      if (quillRef.current) {
        const quill = quillRef.current.getEditor();
        quill.on('text-change', handleChange);

        return () => {
          if (quillRef.current) {
            const quill = quillRef.current.getEditor();
            quill.off('text-change', handleChange);
          }
        };
      }
    }, [
      quillRef,
      pageNum,
      setHtmlContent,
      updateContentsState,
      addLetterPage,
      isPageMoving,
    ]);

    // 폰트 사이즈
    const Size = Quill.import('formats/size');
    Size.whitelist = ['16px', '18px', '24px', ''];
    Quill.register(Size, true);

    // 폰트를 whitelist에 추가하고 Quill에 등록
    const Font = Quill.import('formats/font');
    Font.whitelist = ['노토산스', '개구체'];
    Quill.register(Font, true);

    const style = css`
      position: absolute;
      top: 0;
      left: 0;
      margin: 0 auto;
      z-index: 999;
      overflow: hidden;

      > div {
        border: none !important;
      }

      > div > div {
        // padding: 3.438rem 2.188rem;
        line-height: 2.4;
      }
    `;

    const PadImg = css`
      height: 49.606rem;
      width: 34.488rem;
      margin: 0 auto;
      position: absolute;
      top: 0;
      background: url('${letterImg}');
      background-size: cover;
    `;

    const modules = useMemo(
      () => ({
        toolbar: {
          container: '#toolbar',
          handlers: {},
          history: {
            delay: 500,
            maxStack: 100,
            userOnly: true,
          },
        },
      }),
      []
    );

    const formats = [
      'header',
      'font',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'background',
      'code',
      'script',
      'list',
      'bullet',
      'indent',
    ];

    return (
      <div css={QuillWrap}>
        <Toolbar />
        <div css={EditorContainer}>
          <ReactQuill
            ref={(element) => {
              quillRef.current = element;
            }}
            defaultValue={htmlContent}
            onChange={setHtmlContent}
            modules={modules}
            formats={formats}
            theme='snow'
            css={style}
          />
          <div css={ImgContainer}>
            <div css={PadImg} />
            <div css={PadBackImg} />
          </div>
        </div>
      </div>
    );
  }
);

export default QuillEditor;

const QuillWrap = css`
  position: relative;
  width: 34.488rem;
  z-index: 999;

  @media all and (max-width: 767px) {
    width: calc(100vw - 3em);
  }
`;

const EditorContainer = css`
  position: relative;
  width: 34.488rem;
  height: 49.606rem;
`;

const ImgContainer = css`
  position: relative;
  width: 34.488rem;
  height: 49.606rem;
`;

const PadBackImg = css`
  background: url(/images/pad_back_image.png);
  background-size: cover;
  width: 34.488rem;
  height: 49.606rem;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;
